import ../../../lib_nim/elemaudio
import ../../../lib_nim/music
import ../../../lib_nim/sequencer

let s = (G, 2).scale minor

let bassNull = 0
proc note (duration: int, scaleIndex: int): MelodyNote[int] = (duration.float, s[scaleIndex - 1])
proc sharp (n: MelodyNote[int]): MelodyNote[int] = (n[0], n[1] + 1)
proc brk (duration: float): MelodyNote[int] = (duration, bassNull)

let bassA = @[
  3.note 1,
  1.brk,
  3.note 2,
  1.note 5,

  3.note 1,
  1.brk,
  3.note 2,
  1.note 5,

  3.note 1,
  1.brk,
  3.note 5,
  1.note 1,

  3.note 4,
  1.brk,
  3.note 4,
  1.brk,

  3.note(6).sharp,
  1.note 2,
  3.note 4,
  1.note 7,

  3.note 3,
  1.brk,
  3.note 2,
  1.note 5,

  2.note 1,
  2.note(3).sharp,
  3.note 2,
  1.brk,
]

let bassB = @[
  3.note 5,
  1.brk,
  2.note 1,
  2.note(3).sharp,

  3.note 4,
  1.brk,
  3.note 4,
  1.brk,

  3.note 4,
  1.note(1).sharp,
  3.note 7,
  1.brk,

  3.note 3,
  1.brk,
  3.note 2,
  1.note 5,
]

let bassA2 = @[
  3.note 1,
  1.brk,
  3.note 2,
  1.note 5,

  3.note 1,
  1.brk,
  3.note 2,
  1.note 5,

  3.note 1,
  1.note(6).sharp,
  3.note 6,
  1.note 5,

  3.note 1,
  1.brk,
  3.note 2,
  1.brk,
]

let bassSong = bassA & bassA & bassB & bassA2

let bpm = 105.0
let release = 2.5

var bassSeq = createSequencer(bassSong.toSequence(bassNull), bassNull, bpm=bpm, seqKey="bass")

proc play* (time: float): AudioNode =
  let bassNotes = bassSeq.currentNotes time

  var bassSound = 0.0 @ "bass"
  var bassGain = 0.0 @ "bass_gain"

  for n in bassNotes:
    let fq = n.data.toFrequency @ ("b" & $n.idx)
    let amount = fq * 2.41
    let fq2 = fq + saw(fq + 0.3.cycle * fq * 0.010) * amount
    let sound = lowpass(fq * 2.5, @2.0, fq2.triangle * 0.5)
    let env = adsr(@0.3, @0.3, @0.6, @release, n.gate)

    bassSound += sound * env
    bassGain += env

  let bass = bassSound / bassGain

  let noise1 = lowpass(
    @8000.0,
    @0.6,
    pinkNoise() * (cycle(bpm / 60.0) + 3.0) *  @0.03
  )

  let bpm2 = bpm / (60.0 * 2.0)
  let bpm4 = bpm / (60.0 * 4.0)

  let noise2 = lowpass(
    (1.0 - bpm2.train) *
      (0.2 + bpm2.phasor) *
      10000.0,
    @0.8,
    (1.0 - bpm2.train) *
      noise() * 0.07 *
      (1.0 - bpm2.phasor ** 0.3) *
      (1.0 + 0.3 * -1.0 * bpm4.cycle)
  )

  bass * 0.8 + noise1 + noise2

{. emit: "export {`play` as play}" .}
