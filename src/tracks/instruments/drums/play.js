/* Generated by the Nim Compiler v2.0.4 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI536871027 = {size: 0, kind: 24, base: null, node: null, finalizer: null};
var NTI671088644 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI671088643 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33554435 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI536871026 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI536871097 = {size: 0, kind: 24, base: null, node: null, finalizer: null};
var NTI33554466 = {size: 0,kind: 1,base: null,node: null,finalizer: null};
var NTI536871072 = {size: 0, kind: 24, base: null, node: null, finalizer: null};
var NTI687865899 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI536871032 = {size: 0, kind: 24, base: null, node: null, finalizer: null};
var NTI33554449 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NTI536870917 = {size: 0, kind: 14, base: null, node: null, finalizer: null};
var NTI33554445 = {size: 0,kind: 36,base: null,node: null,finalizer: null};
var NTI536870948 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI536870949 = {size: 0, kind: 24, base: null, node: null, finalizer: null};
var NTI536870944 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NNI536870917 = {kind: 2, offset: 0, typ: null, name: null, len: 3, sons: {"0": {kind: 1, offset: 0, typ: NTI536870917, name: "Kick", len: 0, sons: null}, 
"1": {kind: 1, offset: 1, typ: NTI536870917, name: "Snare", len: 0, sons: null}, 
"2": {kind: 1, offset: 2, typ: NTI536870917, name: "Off", len: 0, sons: null}}};
NTI536870917.node = NNI536870917;
var NNI536870948 = {kind: 2, len: 3, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "start", len: 0, typ: NTI33554445, name: "start", sons: null}, 
{kind: 1, offset: "duration", len: 0, typ: NTI33554445, name: "duration", sons: null}, 
{kind: 1, offset: "data", len: 0, typ: NTI536870917, name: "data", sons: null}]};
NTI536870948.node = NNI536870948;
NTI536870949.base = NTI536870948;
var NNI536870944 = {kind: 2, len: 2, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "notes", len: 0, typ: NTI536870949, name: "notes", sons: null}, 
{kind: 1, offset: "duration", len: 0, typ: NTI33554445, name: "duration", sons: null}]};
NTI536870944.node = NNI536870944;
var NNI687865899 = {kind: 2, len: 2, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI33554445, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI33554445, name: "Field1", sons: null}]};
NTI687865899.node = NNI687865899;
NTI536871032.base = NTI687865899;
NTI536871072.base = NTI33554466;
var NNI671088644 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI671088644.node = NNI671088644;
NTI671088643.base = NTI671088644;
var NNI536871026 = {kind: 2, len: 3, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "data", len: 0, typ: NTI536870917, name: "data", sons: null}, 
{kind: 1, offset: "idx", len: 0, typ: NTI33554435, name: "idx", sons: null}, 
{kind: 1, offset: "gate", len: 0, typ: NTI671088643, name: "gate", sons: null}]};
NTI536871026.node = NNI536871026;
NTI536871097.base = NTI536871026;
NTI536871027.base = NTI536871026;

function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_33557268, src_33557269, ti_33557270) {
  var result_33557279 = null;

    switch (ti_33557270.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(isFatPointer_33557259(ti_33557270))) {
      result_33557279 = src_33557269;
      }
      else {
        result_33557279 = [src_33557269[0], src_33557269[1]];
      }
      
      break;
    case 19:
            if (dest_33557268 === null || dest_33557268 === undefined) {
        dest_33557268 = {};
      }
      else {
        for (var key in dest_33557268) { delete dest_33557268[key]; }
      }
      for (var key in src_33557269) { dest_33557268[key] = src_33557269[key]; }
      result_33557279 = dest_33557268;
    
      break;
    case 18:
    case 17:
      if (!((ti_33557270.base == null))) {
      result_33557279 = nimCopy(dest_33557268, src_33557269, ti_33557270.base);
      }
      else {
      if ((ti_33557270.kind == 17)) {
      result_33557279 = (dest_33557268 === null || dest_33557268 === undefined) ? {m_type: ti_33557270} : dest_33557268;
      }
      else {
        result_33557279 = (dest_33557268 === null || dest_33557268 === undefined) ? {} : dest_33557268;
      }
      }
      nimCopyAux(result_33557279, src_33557269, ti_33557270.node);
      break;
    case 4:
    case 16:
            if(ArrayBuffer.isView(src_33557269)) { 
        if(dest_33557268 === null || dest_33557268 === undefined || dest_33557268.length != src_33557269.length) {
          dest_33557268 = new src_33557269.constructor(src_33557269);
        } else {
          dest_33557268.set(src_33557269, 0);
        }
        result_33557279 = dest_33557268;
      } else {
        if (src_33557269 === null) {
          result_33557279 = null;
        }
        else {
          if (dest_33557268 === null || dest_33557268 === undefined || dest_33557268.length != src_33557269.length) {
            dest_33557268 = new Array(src_33557269.length);
          }
          result_33557279 = dest_33557268;
          for (var i = 0; i < src_33557269.length; ++i) {
            result_33557279[i] = nimCopy(result_33557279[i], src_33557269[i], ti_33557270.base);
          }
        }
      }
    
      break;
    case 24:
    case 27:
            if (src_33557269 === null) {
        result_33557279 = null;
      }
      else {
        if (dest_33557268 === null || dest_33557268 === undefined || dest_33557268.length != src_33557269.length) {
          dest_33557268 = new Array(src_33557269.length);
        }
        result_33557279 = dest_33557268;
        for (var i = 0; i < src_33557269.length; ++i) {
          result_33557279[i] = nimCopy(result_33557279[i], src_33557269[i], ti_33557270.base);
        }
      }
    
      break;
    case 28:
            if (src_33557269 !== null) {
        result_33557279 = src_33557269.slice(0);
      }
    
      break;
    default: 
      result_33557279 = src_33557269;
      break;
    }

  return result_33557279;

}

function toJSStr(s_33556901) {
  var result_33556902 = null;

    var res_33556943 = newSeq_33556919((s_33556901).length);
    var i_33556944 = 0;
    var j_33556945 = 0;
    Label1: {
        Label2: while (true) {
        if (!(i_33556944 < (s_33556901).length)) break Label2;
          var c_33556946 = s_33556901[i_33556944];
          if ((c_33556946 < 128)) {
          res_33556943[j_33556945] = String.fromCharCode(c_33556946);
          i_33556944 += 1;
          }
          else {
            var helper_33556959 = newSeq_33556919(0);
            Label3: {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556960 = c_33556946.toString(16);
                  if ((((code_33556960) == null ? 0 : (code_33556960).length) == 1)) {
                  helper_33556959.push("%0");;
                  }
                  else {
                  helper_33556959.push("%");;
                  }
                  
                  helper_33556959.push(code_33556960);;
                  i_33556944 += 1;
                  if ((((s_33556901).length <= i_33556944) || (s_33556901[i_33556944] < 128))) {
                  break Label3;
                  }
                  
                  c_33556946 = s_33556901[i_33556944];
                }
            };
++excHandler;
            try {
            res_33556943[j_33556945] = decodeURIComponent(helper_33556959.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            res_33556943[j_33556945] = helper_33556959.join("");
            lastJSError = prevJSError;
            } finally {
            }
          }
          
          j_33556945 += 1;
        }
    };
    if (res_33556943.length < j_33556945) { for (var i = res_33556943.length ; i < j_33556945 ; ++i) res_33556943.push(null); }
               else { res_33556943.length = j_33556945; };
    result_33556902 = res_33556943.join("");

  return result_33556902;

}

function mnewString(len_33557003) {
        var result = new Array(len_33557003);
    for (var i = 0; i < len_33557003; i++) {result[i] = 0;}
    return result;
  

  
}

function rawEcho() {
          var buf = "";
      for (var i = 0; i < arguments.length; ++i) {
        buf += toJSStr(arguments[i]);
      }
      console.log(buf);
    

  
}

function reprEnum(e_33557576, typ_33557577) {
  var result_33557578 = [];

    var tmp_33557579 = false;
    var item_33557580 = typ_33557577.node.sons[e_33557576];
    tmp_33557579 = item_33557580 !== undefined
    if (tmp_33557579) {
    result_33557578 = nimCopy(null, makeNimstrLit(item_33557580.name), NTI33554449);
    }
    else {
      result_33557578 = nimCopy(null, (HEX24_369098760(e_33557576) || []).concat([32,40,105,110,118,97,108,105,100,32,100,97,116,97,33,41] || []), NTI33554449);
    }
    

  return result_33557578;

}
import { el } from "@elemaudio/core" 

function isFatPointer_33557259(ti_33557260) {
  var result_33557261 = false;

  BeforeRet: {
    result_33557261 = !((ConstSet1[ti_33557260.base.kind] != undefined));
    break BeforeRet;
  };

  return result_33557261;

}

function nimCopyAux(dest_33557272, src_33557273, n_33557274) {
    switch (n_33557274.kind) {
    case 0:
      break;
    case 1:
            dest_33557272[n_33557274.offset] = nimCopy(dest_33557272[n_33557274.offset], src_33557273[n_33557274.offset], n_33557274.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_33557274.sons.length; i++) {
      nimCopyAux(dest_33557272, src_33557273, n_33557274.sons[i]);
    }
    
      break;
    case 3:
            dest_33557272[n_33557274.offset] = nimCopy(dest_33557272[n_33557274.offset], src_33557273[n_33557274.offset], n_33557274.typ);
      for (var i = 0; i < n_33557274.sons.length; ++i) {
        nimCopyAux(dest_33557272, src_33557273, n_33557274.sons[i][1]);
      }
    
      break;
    }

  
}

function newSeq_33556919(len_33556921) {
  var result_33556922 = [];

    result_33556922 = new Array(len_33556921); for (var i = 0 ; i < len_33556921 ; ++i) { result_33556922[i] = null; }
  return result_33556922;

}

function timedTrigger_671088811(start_671088812, dur_671088813, key_671088814) {
  var result_671088815 = null;

    var t_671088816 = el.div(el.time(), el.sr());
    var startNode_671088817 = el.const({value: start_671088812, key: toJSStr((key_671088814 || []).concat([95,115,116,97,114,116] || []))});
    var endNode_671088818 = el.const({value: (start_671088812 + dur_671088813), key: toJSStr((key_671088814 || []).concat([95,101,110,100] || []))});
    result_671088815 = el.mul(el.ge(t_671088816, startNode_671088817), el.le(t_671088816, endNode_671088818));

  return result_671088815;

}

function addChars_301990090(result_301990092, result_301990092_Idx, x_301990093, start_301990094, n_301990095) {
    var Temporary1;

    var old_301990096 = (result_301990092[result_301990092_Idx]).length;
    if (result_301990092[result_301990092_Idx].length < (Temporary1 = (old_301990096 + n_301990095), Temporary1)) { for (var i = result_301990092[result_301990092_Idx].length; i < Temporary1; ++i) result_301990092[result_301990092_Idx].push(0); }
         else {result_301990092[result_301990092_Idx].length = Temporary1; };
    Label2: {
      var iHEX60gensym4_301990110 = 0;
      var i_536872033 = 0;
      Label3: {
          Label4: while (true) {
          if (!(i_536872033 < n_301990095)) break Label4;
            iHEX60gensym4_301990110 = i_536872033;
            result_301990092[result_301990092_Idx][(old_301990096 + iHEX60gensym4_301990110)] = x_301990093.charCodeAt((start_301990094 + iHEX60gensym4_301990110));
            i_536872033 += 1;
          }
      };
    };

  
}

function addChars_301990086(result_301990088, result_301990088_Idx, x_301990089) {
    addChars_301990090(result_301990088, result_301990088_Idx, x_301990089, 0, ((x_301990089) == null ? 0 : (x_301990089).length));

  
}

function addInt_301990111(result_301990112, result_301990112_Idx, x_301990113) {
    addChars_301990086(result_301990112, result_301990112_Idx, ((x_301990113) + ""));

  
}

function addInt_301990129(result_301990130, result_301990130_Idx, x_301990131) {
    addInt_301990111(result_301990130, result_301990130_Idx, BigInt(x_301990131));

  
}

function HEX24_369098760(x_369098761) {
  var result_369098762 = [[]];

    addInt_301990129(result_369098762, 0, x_369098761);

  return result_369098762[0];

}

function createSequencer_536871076(s_536871078, initData_536871079, trackCount_536871080, bpm_536871081, repetitions_536871082, startTime_536871083, seqKey_536871084, debug_536871085) {
  var result_536871103 = ({sequence: ({notes: [], duration: 0.0}), initData: 0, trackCount: 0, bpm: 0.0, repetitions: 0, startTime: 0.0, seqKey: [], debug: false, secPerBeat: 0.0, seqDuration: 0.0, noteIntervals: [], tracks: [], playingNotes: [], currentTrackIdx: 0});

    result_536871103.sequence = nimCopy(result_536871103.sequence, s_536871078, NTI536870944);
    result_536871103.initData = initData_536871079;
    result_536871103.trackCount = trackCount_536871080;
    result_536871103.bpm = bpm_536871081;
    result_536871103.repetitions = repetitions_536871082;
    result_536871103.startTime = startTime_536871083;
    result_536871103.seqKey = nimCopy(null, seqKey_536871084, NTI33554449);
    result_536871103.debug = debug_536871085;
    var secPerBeat_536871104 = (60.0 / bpm_536871081);
    result_536871103.secPerBeat = secPerBeat_536871104;
    var seqDuration_536871105 = (s_536871078.duration * secPerBeat_536871104);
    result_536871103.seqDuration = seqDuration_536871105;
    var noteIntervals_536871110 = [];
    Label1: {
      var i_536871152 = 0;
      var note_536871153 = ({start: 0.0, duration: 0.0, data: 0});
      var i_536872017 = 0;
      var L_536872018 = (s_536871078.notes).length;
      Label2: {
          Label3: while (true) {
          if (!(i_536872017 < L_536872018)) break Label3;
            i_536871152 = i_536872017;
            note_536871153 = nimCopy(note_536871153, s_536871078.notes[i_536872017], NTI536870948);
            var start_536871154 = ((note_536871153.start * secPerBeat_536871104) - seqDuration_536871105);
            var finish_536871155 = (start_536871154 + (note_536871153.duration * secPerBeat_536871104));
            if ((0.0 < finish_536871155)) {
            noteIntervals_536871110.push({Field0: start_536871154, Field1: finish_536871155});;
            }
            
            i_536872017 += 1;
          }
      };
    };
    var playingNotes_536871164 = [];
    Label4: {
      var i_536871170 = 0;
      var note_536871171 = ({start: 0.0, duration: 0.0, data: 0});
      var i_536872021 = 0;
      var L_536872022 = (s_536871078.notes).length;
      Label5: {
          Label6: while (true) {
          if (!(i_536872021 < L_536872022)) break Label6;
            i_536871170 = i_536872021;
            note_536871171 = nimCopy(note_536871171, s_536871078.notes[i_536872021], NTI536870948);
            var start_536871172 = (note_536871171.start * secPerBeat_536871104);
            var finish_536871173 = (start_536871172 + (note_536871171.duration * secPerBeat_536871104));
            noteIntervals_536871110.push({Field0: start_536871172, Field1: finish_536871173});;
            playingNotes_536871164.push(false);;
            i_536872021 += 1;
          }
      };
    };
    result_536871103.noteIntervals = nimCopy(null, noteIntervals_536871110, NTI536871032);
    result_536871103.playingNotes = nimCopy(null, playingNotes_536871164, NTI536871072);
    var tracks_536871187 = [];
    Label7: {
      var i_536871192 = 0;
      var i_536872025 = 0;
      Label8: {
          Label9: while (true) {
          if (!(i_536872025 < trackCount_536871080)) break Label9;
            i_536871192 = i_536872025;
            tracks_536871187.push({data: initData_536871079, idx: i_536871192, gate: timedTrigger_671088811(0.0, 0.0, (seqKey_536871084 || []).concat(HEX24_369098760(i_536871192) || []))});;
            i_536872025 += 1;
          }
      };
    };
    result_536871103.tracks = nimCopy(null, tracks_536871187, NTI536871097);

  return result_536871103;

}

function HEX2BHEX3D_536871001(x_536871003, x_536871003_Idx, y_536871004) {
    x_536871003[x_536871003_Idx] = (x_536871003[x_536871003_Idx] + y_536871004);

  
}

function toSequence_536870959(melody_536870961, null_536870962) {
  var result_536870968 = ({notes: [], duration: 0.0});

    Label1: {
      var note_536870989 = {Field0: 0.0, Field1: 0};
      var i_536872037 = 0;
      var L_536872038 = (melody_536870961).length;
      Label2: {
          Label3: while (true) {
          if (!(i_536872037 < L_536872038)) break Label3;
            note_536870989 = melody_536870961[i_536872037];
            if (!((note_536870989.Field1 == null_536870962))) {
            var n_536870996 = {start: result_536870968.duration, duration: note_536870989.Field0, data: note_536870989.Field1};
            var Temporary4 = nimCopy(null, n_536870996, NTI536870948);
            result_536870968.notes.push(Temporary4);;
            }
            
            HEX2BHEX3D_536871001(result_536870968, "duration", note_536870989.Field0);
            i_536872037 += 1;
          }
      };
    };

  return result_536870968;

}

function add_33556373(x_33556374, x_33556374_Idx, y_33556375) {
          if (x_33556374[x_33556374_Idx] === null) { x_33556374[x_33556374_Idx] = []; }
      var off = x_33556374[x_33556374_Idx].length;
      x_33556374[x_33556374_Idx].length += y_33556375.length;
      for (var i = 0; i < y_33556375.length; ++i) {
        x_33556374[x_33556374_Idx][off+i] = y_33556375.charCodeAt(i);
      }
    

  
}

function nimFloatToString_385876129(a_385876130) {
  var result_385876131 = null;

        function nimOnlyDigitsOrMinus(n) {
      return n.toString().match(/^-?\d+$/);
    }
    if (Number.isSafeInteger(a_385876130))
      result_385876131 = a_385876130 === 0 && 1 / a_385876130 < 0 ? "-0.0" : a_385876130+".0"
    else {
      result_385876131 = a_385876130+""
      if(nimOnlyDigitsOrMinus(result_385876131)){
        result_385876131 = a_385876130+".0"
      }
    }
  

  return result_385876131;

}

function addFloat_33557563(result_33557565, result_33557565_Idx, x_33557566) {
    add_33556373(result_33557565, result_33557565_Idx, nimFloatToString_385876129(x_33557566));

  
}

function addQuoted_536871451(s_536871453, s_536871453_Idx, x_536871454) {
    addFloat_33557563(s_536871453, s_536871453_Idx, x_536871454);

  
}

function collectionToString_536871413(x_536871415, prefix_536871416, separator_536871417, suffix_536871418) {
  var result_536871419 = [[]];

    result_536871419[0] = nimCopy(null, prefix_536871416, NTI33554449);
    var firstElement_536871420 = true;
    Label1: {
      var value_536871447 = 0.0;
      var i_536872042 = 0;
      Label2: {
          Label3: while (true) {
          if (!true) break Label3;
            value_536871447 = x_536871415[i_536872042];
            if (firstElement_536871420) {
            firstElement_536871420 = false;
            }
            else {
            result_536871419[0].push.apply(result_536871419[0], separator_536871417);;
            }
            
            addQuoted_536871451(result_536871419, 0, value_536871447);
            if ((4 <= i_536872042)) {
            break Label2;
            }
            
            i_536872042 += 1;
          }
      };
    };
    result_536871419[0].push.apply(result_536871419[0], suffix_536871418);;

  return result_536871419[0];

}

function HEX24_536871408(x_536871411) {
  var result_536871412 = [];

    result_536871412 = nimCopy(null, collectionToString_536871413(x_536871411, [91], [44,32], [93]), NTI33554449);

  return result_536871412;

}

function HEX40_671088648(val_671088649, key_671088650) {
  var result_671088651 = null;

    result_671088651 = el.const({value: val_671088649, key: toJSStr(key_671088650)});

  return result_671088651;

}

function toInt_33556014(f_33556015) {
    var Temporary1;

  var result_33556016 = 0;

    if ((0.0 <= f_33556015)) {
    Temporary1 = (((f_33556015 + 0.5)) | 0);
    }
    else {
    Temporary1 = (((f_33556015 - 0.5)) | 0);
    }
    
    result_33556016 = Temporary1;

  return result_33556016;

}

function getNextTrackIdx_536871559(s_536871561) {
  var result_536871562 = 0;

    result_536871562 = s_536871561.currentTrackIdx;
    s_536871561.currentTrackIdx = Math.trunc((s_536871561.currentTrackIdx + 1) % s_536871561.trackCount);

  return result_536871562;

}

function addQuoted_536871723(s_536871725, s_536871725_Idx, x_536871726) {
    addInt_301990129(s_536871725, s_536871725_Idx, x_536871726);

  
}

function collectionToString_536871691(x_536871693, prefix_536871694, separator_536871695, suffix_536871696) {
  var result_536871697 = [[]];

    result_536871697[0] = nimCopy(null, prefix_536871694, NTI33554449);
    var firstElement_536871698 = true;
    Label1: {
      var value_536871719 = 0;
      var i_536872056 = 0;
      var L_536872057 = (x_536871693).length;
      Label2: {
          Label3: while (true) {
          if (!(i_536872056 < L_536872057)) break Label3;
            value_536871719 = x_536871693[i_536872056];
            if (firstElement_536871698) {
            firstElement_536871698 = false;
            }
            else {
            result_536871697[0].push.apply(result_536871697[0], separator_536871695);;
            }
            
            addQuoted_536871723(result_536871697, 0, value_536871719);
            i_536872056 += 1;
          }
      };
    };
    result_536871697[0].push.apply(result_536871697[0], suffix_536871696);;

  return result_536871697[0];

}

function HEX24_536871687(x_536871689) {
  var result_536871690 = [];

    result_536871690 = nimCopy(null, collectionToString_536871691(x_536871689, [64,91], [44,32], [93]), NTI33554449);

  return result_536871690;

}

function currentNotes_536871486(s_536871488, currentTime_536871489) {
  var result_536871490 = [];

    var currentLoop_536871491 = Math.floor(((currentTime_536871489 - s_536871488.startTime) / s_536871488.seqDuration));
    if (((s_536871488.repetitions == 0) || (toInt_33556014(currentLoop_536871491) < s_536871488.repetitions))) {
    var seqTime_536871492 = (currentTime_536871489 - (currentLoop_536871491 * s_536871488.seqDuration));
    Label1: {
      var i_536871533 = 0;
      var n_536871534 = {Field0: 0.0, Field1: 0.0};
      var i_536872046 = 0;
      var L_536872047 = (s_536871488.noteIntervals).length;
      Label2: {
          Label3: while (true) {
          if (!(i_536872046 < L_536872047)) break Label3;
            i_536871533 = i_536872046;
            n_536871534 = nimCopy(n_536871534, s_536871488.noteIntervals[i_536872046], NTI687865899);
            if ((((n_536871534.Field0 - 0.1) <= seqTime_536871492) && (seqTime_536871492 < n_536871534.Field1))) {
            if (!(s_536871488.playingNotes[i_536871533])) {
            var note_536871535 = nimCopy(null, s_536871488.sequence.notes[i_536871533], NTI536870948);
            var start_536871536 = (n_536871534.Field0 + (currentLoop_536871491 * s_536871488.seqDuration));
            var nextTrackIdx_536871563 = getNextTrackIdx_536871559(s_536871488);
            s_536871488.tracks[nextTrackIdx_536871563].data = note_536871535.data;
            s_536871488.tracks[nextTrackIdx_536871563].gate = timedTrigger_671088811(start_536871536, (note_536871535.duration * s_536871488.secPerBeat), (s_536871488.seqKey || []).concat(HEX24_369098760(nextTrackIdx_536871563) || []));
            s_536871488.playingNotes[i_536871533] = true;
            }
            
            }
            else {
              if (s_536871488.playingNotes[i_536871533]) {
              s_536871488.playingNotes[i_536871533] = false;
              }
              
            }
            
            i_536872046 += 1;
          }
      };
    };
    if (s_536871488.debug) {
    var playing_536871568 = [];
    Label4: {
      var i_536871608 = 0;
      var v_536871609 = false;
      var i_536872051 = 0;
      var L_536872052 = (s_536871488.playingNotes).length;
      Label5: {
          Label6: while (true) {
          if (!(i_536872051 < L_536872052)) break Label6;
            i_536871608 = i_536872051;
            v_536871609 = s_536871488.playingNotes[i_536872051];
            if (v_536871609) {
            playing_536871568.push(i_536871608);;
            }
            
            i_536872051 += 1;
          }
      };
    };
    rawEcho(s_536871488.seqKey, [32], HEX24_369098760(s_536871488.currentTrackIdx), [32], HEX24_536871687(playing_536871568));
    }
    
    }
    
    result_536871490 = nimCopy(null, s_536871488.tracks, NTI536871027);

  return result_536871490;

}

function makeNimstrLit(c_33556895) {
      var result = [];
  for (var i = 0; i < c_33556895.length; ++i) {
    result[i] = c_33556895.charCodeAt(i);
  }
  return result;
  

  
}

function addQuoted_536871934(s_536871936, s_536871936_Idx, x_536871937) {
    s_536871936[s_536871936_Idx].push.apply(s_536871936[s_536871936_Idx], reprEnum(x_536871937, NTI536870917));;

  
}

function HEX24_536871905(x_536871907) {
  var result_536871908 = [[]];

    result_536871908[0] = nimCopy(null, [40], NTI33554449);
    var countHEX60gensym27_536871919 = 0;
    if ((0 < countHEX60gensym27_536871919)) {
    result_536871908[0].push.apply(result_536871908[0], [44,32]);;
    }
    
    result_536871908[0].push.apply(result_536871908[0], [100,97,116,97]);;
    result_536871908[0].push.apply(result_536871908[0], [58,32]);;
    countHEX60gensym27_536871919 += 1;
    addQuoted_536871934(result_536871908, 0, x_536871907.data);
    if ((0 < countHEX60gensym27_536871919)) {
    result_536871908[0].push.apply(result_536871908[0], [44,32]);;
    }
    
    result_536871908[0].push.apply(result_536871908[0], [105,100,120]);;
    result_536871908[0].push.apply(result_536871908[0], [58,32]);;
    countHEX60gensym27_536871919 += 1;
    addQuoted_536871723(result_536871908, 0, x_536871907.idx);
    if ((0 < countHEX60gensym27_536871919)) {
    result_536871908[0].push.apply(result_536871908[0], [44,32]);;
    }
    
    result_536871908[0].push.apply(result_536871908[0], [103,97,116,101]);;
    result_536871908[0].push.apply(result_536871908[0], [58,32]);;
    countHEX60gensym27_536871919 += 1;
    result_536871908[0].push.apply(result_536871908[0], [46,46,46]);;
    result_536871908[0].push.apply(result_536871908[0], [41]);;

  return result_536871908[0];

}

function addQuoted_536871897(s_536871899, s_536871899_Idx, x_536871900) {
    s_536871899[s_536871899_Idx].push.apply(s_536871899[s_536871899_Idx], HEX24_536871905(x_536871900));;

  
}

function collectionToString_536871865(x_536871867, prefix_536871868, separator_536871869, suffix_536871870) {
  var result_536871871 = [[]];

    result_536871871[0] = nimCopy(null, prefix_536871868, NTI33554449);
    var firstElement_536871872 = true;
    Label1: {
      var value_536871893 = ({data: 0, idx: 0, gate: null});
      var i_536872061 = 0;
      var L_536872062 = (x_536871867).length;
      Label2: {
          Label3: while (true) {
          if (!(i_536872061 < L_536872062)) break Label3;
            value_536871893 = x_536871867[i_536872061];
            if (firstElement_536871872) {
            firstElement_536871872 = false;
            }
            else {
            result_536871871[0].push.apply(result_536871871[0], separator_536871869);;
            }
            
            addQuoted_536871897(result_536871871, 0, value_536871893);
            i_536872061 += 1;
          }
      };
    };
    result_536871871[0].push.apply(result_536871871[0], suffix_536871870);;

  return result_536871871[0];

}

function HEX24_536871861(x_536871863) {
  var result_536871864 = [];

    result_536871864 = nimCopy(null, collectionToString_536871865(x_536871863, [64,91], [44,32], [93]), NTI33554449);

  return result_536871864;

}

function highpass_671088800(sig_671088801, fq_671088802, q_671088803) {
  var result_671088804 = null;

    return el.highpass(fq_671088802, q_671088803, sig_671088801)

  return result_671088804;

}

function lowpass_671088795(sig_671088796, fq_671088797, q_671088798) {
  var result_671088799 = null;

    return el.lowpass(fq_671088797, q_671088798, sig_671088796)

  return result_671088799;

}

function bassdrum_536870915(gate_536870916) {
  var result_536870917 = null;

    var duration_536870918 = el.const({value: 0.9});
    var noiseDuration_536870919 = el.const({value: 0.01});
    var env_536870920 = el.adsr(el.const({value: 0.01}), duration_536870918, el.const({value: 0.0}), duration_536870918, gate_536870916);
    var envNoise_536870921 = el.adsr(el.const({value: 0.01}), noiseDuration_536870919, el.const({value: 0.0}), noiseDuration_536870919, gate_536870916);
    var fq_536870922 = el.add(22.5, el.mul(env_536870920, 90.0));
    var spectrum_536870923 = highpass_671088800(lowpass_671088795(el.cycle(el.add(fq_536870922, el.mul(450.0, el.cycle(45.0)))), el.add(fq_536870922, 45.0), el.const({value: 1.0})), el.const({value: 45.0}), el.const({value: 1.0}));
    var noise_536870924 = highpass_671088800(lowpass_671088795(el.noise(), el.add(800.0, el.mul(8000.0, envNoise_536870921)), el.const({value: 1.0})), el.const({value: 400.0}), el.const({value: 1.0}));
    result_536870917 = el.mul(el.mul(el.add(el.mul(noise_536870924, 0.015), spectrum_536870923), env_536870920), 0.8);

  return result_536870917;

}

function snare_536870925(gate_536870926, intensity_536870927) {
  var result_536870928 = null;

    var duration_536870929 = el.const({value: 0.4});
    var env_536870930 = el.adsr(el.const({value: 0.01}), duration_536870929, el.const({value: 0.0}), duration_536870929, gate_536870926);
    var env2_536870931 = el.adsr(el.const({value: 0.01}), el.div(duration_536870929, 2.0), el.const({value: 0.0}), el.div(duration_536870929, 2.0), gate_536870926);
    var fq1_536870932 = 286.0;
    var band1_536870933 = el.mul(lowpass_671088795(el.cycle(el.add(fq1_536870932, el.mul(400.0, el.cycle(111.0)))), el.const({value: fq1_536870932}), el.const({value: 1.0})), env_536870930);
    var fq2_536870934 = 335.0;
    var band2_536870935 = el.mul(lowpass_671088795(el.cycle(el.add(fq2_536870934, el.mul(400.0, el.cycle(111.0)))), el.const({value: fq2_536870934}), el.const({value: 1.0})), env_536870930);
    var band3_536870936 = el.mul(el.cycle(180.0), env2_536870931);
    var band4_536870937 = el.mul(el.cycle(330.0), env2_536870931);
    result_536870928 = el.mul(el.mul(el.add(el.add(el.add(band1_536870933, band2_536870935), band3_536870936), band4_536870937), intensity_536870927), 0.5);

  return result_536870928;

}

function play_536871315(midiNotes_536871316, time_536871317) {
    var Temporary1;

  var result_536871318 = null;

    rawEcho(HEX24_536871408(midiNotes_536871316));
    var note_536871461 = midiNotes_536871316[0];
    var gate_536871462 = 0.0;
    if ((0.0 < note_536871461)) {
    gate_536871462 = 1.0;
    }
    
    var gateNode_536871463 = HEX40_671088648(gate_536871462, [103,97,116,101]);
    var notes_536871744 = currentNotes_536871486(seq1_536871314[0], time_536871317);
    var hit_536871745 = nimCopy(null, notes_536871744[0], NTI536871026);
    rawEcho(HEX24_536871861(notes_536871744));
    if ((hit_536871745.data == 0)) {
    Temporary1 = bassdrum_536870915(hit_536871745.gate);
    }
    else {
    if ((hit_536871745.data == 1)) {
    Temporary1 = snare_536870925(hit_536871745.gate, el.const({value: 1.0}));
    }
    else {
    Temporary1 = el.const({value: 0.0});
    }
    }
    var sound_536871968 = Temporary1;
    result_536871318 = el.add(bassdrum_536870915(gateNode_536871463), sound_536871968);

  return result_536871318;

}
var beat_536870956 = [{Field0: 1.0, Field1: 0}, {Field0: 1.0, Field1: 1}];
var seq1_536871314 = [createSequencer_536871076(toSequence_536870959(beat_536870956, 2), 2, 1, 80.0, 0, 0.0, [115,101,113,95,116,114,105,103,103,101,114], false)];
export {play_536871315 as play}
