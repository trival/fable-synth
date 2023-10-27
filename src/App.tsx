import WebRenderer from '@elemaudio/web-renderer'
import { For, Show, createEffect, createSignal, onCleanup } from 'solid-js'
import { Oscilloscope } from 'webaudio-oscilloscope/index.js'
import { InputType, Inputs } from './input'
import { Icon } from 'solid-heroicons'
import { pause, play } from 'solid-heroicons/solid'
import { Track } from './utils/base'

const ctx = new AudioContext()
ctx.suspend()
const core = new WebRenderer()

const [isPlaying, setIsPlaying] = createSignal(false)
function playCtx() {
	if (ctx.state !== 'running') {
		ctx.resume()
		setIsPlaying(true)
	}
}

function pauseCtx() {
	if (ctx.state === 'running') {
		ctx.suspend()
		setIsPlaying(false)
	}
}

function setTrack(track: Track) {
	window.history.replaceState({}, '', `?${paramName}=${track.text}`)
}

const [loaded, setLoaded] = createSignal(false)
const [initialized, setInitialized] = createSignal(false)

core.on('load', function () {
	setLoaded(true)
})

let node: AudioWorkletNode | undefined

async function main() {
	node = await core.initialize(ctx, {
		numberOfInputs: 0,
		numberOfOutputs: 1,
		outputChannelCount: [2],
	})
	node.connect(ctx.destination)
	setInitialized(true)
}

main().catch(console.error)

export interface AppProps {
	tracks: Track[]
}

const paramName = 'track'

export function App(props: AppProps) {
	const [trackIdx, setTrackIdx] = createSignal(-1)
	const [inputs, setInputs] = createSignal<number[]>([])

	let canvas: HTMLCanvasElement | undefined

	const track = () => props.tracks[trackIdx()]

	const i = setInterval(() => {
		if (!isPlaying()) return
		const i = track().inputs?.findIndex((i) => i.type === InputType.TICK)
		if (i != null && i !== -1) {
			const newInputs = [...inputs()]
			newInputs[i] = ctx.currentTime
			setInputs(newInputs)
		}
	}, 30)

	onCleanup(() => {
		clearInterval(i)
	})

	function setTrackFromQuery() {
		const query = new URLSearchParams(window.location.search)
		if (query.has(paramName)) {
			const trackName = query.get(paramName)
			const trackIndex = props.tracks.findIndex((t) => t.text === trackName)
			if (trackIndex !== -1) {
				setTrackIdx(trackIndex)
			}
		}
	}

	createEffect(() => {
		setTrackFromQuery()
		if (trackIdx() === -1) {
			setTrack(props.tracks[0])
			setTrackFromQuery()
		}
	})

	createEffect(() => {
		if (loaded()) {
			const t = track()
			if (t && isPlaying()) {
				const is = inputs()
				console.log('rendering', t.text, is)

				const el = t.renderAudio(is, ctx)
				if (Array.isArray(el)) {
					core.render(...el)
				} else {
					core.render(el, el)
				}

				requestAnimationFrame(() => {
					localStorage.setItem(t.text, JSON.stringify(is))
				})
			}
		}
	})

	createEffect(() => {
		if (initialized() && canvas && node) {
			const o = new Oscilloscope(ctx, node, canvas)
			o.start()
		}
	})

	createEffect(() => {
		const t = track()
		if (t?.inputs) {
			const stored = localStorage.getItem(t.text)
			if (stored) {
				const parsed = JSON.parse(stored)
				if (
					parsed.length === t.inputs.length &&
					parsed.every((p: any) => typeof p === 'number')
				) {
					setInputs(parsed)
				}
			} else {
				setInputs(
					t.inputs.map((i) =>
						i.type === InputType.TICK ? ctx.currentTime : i.initialValue,
					),
				)
			}
		}
	})

	return (
		<div class="flex h-full w-full">
			<div class="m-8 mr-16 h-full overflow-y-auto">
				<For each={props.tracks}>
					{(track) => (
						<div class="mb-4">
							<button
								class="block font-bold text-blue-500 underline"
								type="button"
								onClick={() => {
									setTrack(track)
									setTrackFromQuery()
								}}
							>
								{track.text}
							</button>
						</div>
					)}
				</For>
			</div>
			<div class="auto m-8 h-full overflow-y-auto">
				<div class="flex">
					<Show when={trackIdx() !== -1}>
						<button
							type="button"
							class="my-auto mr-4 rounded-sm bg-slate-100 p-2 shadow-md"
							onClick={() => {
								isPlaying() ? pauseCtx() : playCtx()
							}}
						>
							<Show
								when={isPlaying()}
								fallback={<Icon path={play} class="h-6 w-6" />}
							>
								<Icon path={pause} class="h-6 w-6" />
							</Show>
						</button>
					</Show>
					<h3 class="my-4 grow">{track()?.text}</h3>
				</div>
				<canvas ref={canvas} width="600" height="400" />
				<Show when={track()?.inputs}>
					<Inputs
						inputs={track().inputs!}
						values={inputs()}
						onChange={(vals) => setInputs(vals)}
					/>
				</Show>
			</div>
		</div>
	)
}
