/* Generated by the Nim Compiler v2.0.4 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI33554449 = {size: 0,kind: 28,base: null,node: null,finalizer: null};

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

function rawEcho() {
          var buf = "";
      for (var i = 0; i < arguments.length; ++i) {
        buf += toJSStr(arguments[i]);
      }
      console.log(buf);
    

  
}

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

function mnewString(len_33557003) {
        var result = new Array(len_33557003);
    for (var i = 0; i < len_33557003; i++) {result[i] = 0;}
    return result;
  

  
}
import { el } from "@elemaudio/core" 
var fqFactor1_872415234 = 1.0;
var fqFactor2_872415235 = 1.5;
var fqFactor3_872415236 = 1.98;
var fqFactor4_872415237 = 2.44;
var amp1_872415238 = 1.0;
var amp2_872415239 = 0.8;
var amp3_872415240 = 0.6;
var amp4_872415241 = 0.2;
var ampNoise_872415242 = 0.5;
var decayFactor_872415243 = 0.25;
var decay1_872415244 = (4.5 * decayFactor_872415243);
var decay2_872415245 = (7.5 * decayFactor_872415243);
var decay3_872415246 = (9.0 * decayFactor_872415243);
var decay4_872415247 = (8.5 * decayFactor_872415243);
var decayNoise_872415248 = (2.0 * decayFactor_872415243);

function newSeq_33556919(len_33556921) {
  var result_33556922 = [];

    result_33556922 = new Array(len_33556921); for (var i = 0 ; i < len_33556921 ; ++i) { result_33556922[i] = null; }
  return result_33556922;

}

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

function addQuoted_536871052(s_536871054, s_536871054_Idx, x_536871055) {
    addFloat_33557563(s_536871054, s_536871054_Idx, x_536871055);

  
}

function collectionToString_536871014(x_536871016, prefix_536871017, separator_536871018, suffix_536871019) {
  var result_536871020 = [[]];

    result_536871020[0] = nimCopy(null, prefix_536871017, NTI33554449);
    var firstElement_536871021 = true;
    Label1: {
      var value_536871048 = 0.0;
      var i_536871104 = 0;
      Label2: {
          Label3: while (true) {
          if (!true) break Label3;
            value_536871048 = x_536871016[i_536871104];
            if (firstElement_536871021) {
            firstElement_536871021 = false;
            }
            else {
            result_536871020[0].push.apply(result_536871020[0], separator_536871018);;
            }
            
            addQuoted_536871052(result_536871020, 0, value_536871048);
            if ((4 <= i_536871104)) {
            break Label2;
            }
            
            i_536871104 += 1;
          }
      };
    };
    result_536871020[0].push.apply(result_536871020[0], suffix_536871019);;

  return result_536871020[0];

}

function HEX24_536871009(x_536871012) {
  var result_536871013 = [];

    result_536871013 = nimCopy(null, collectionToString_536871014(x_536871012, [91], [44,32], [93]), NTI33554449);

  return result_536871013;

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

function toFrequency_687865986(midi_687865987) {
  var result_687865988 = 0.0;

    result_687865988 = (Math.pow(2.0, ((midi_687865987 - 69) / 12.0)) * 440.0);

  return result_687865988;

}

function addChars_301990090(result_301990092, result_301990092_Idx, x_301990093, start_301990094, n_301990095) {
    var Temporary1;

    var old_301990096 = (result_301990092[result_301990092_Idx]).length;
    if (result_301990092[result_301990092_Idx].length < (Temporary1 = (old_301990096 + n_301990095), Temporary1)) { for (var i = result_301990092[result_301990092_Idx].length; i < Temporary1; ++i) result_301990092[result_301990092_Idx].push(0); }
         else {result_301990092[result_301990092_Idx].length = Temporary1; };
    Label2: {
      var iHEX60gensym4_301990110 = 0;
      var i_536871110 = 0;
      Label3: {
          Label4: while (true) {
          if (!(i_536871110 < n_301990095)) break Label4;
            iHEX60gensym4_301990110 = i_536871110;
            result_301990092[result_301990092_Idx][(old_301990096 + iHEX60gensym4_301990110)] = x_301990093.charCodeAt((start_301990094 + iHEX60gensym4_301990110));
            i_536871110 += 1;
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

function HEX24_33557559(x_33557561) {
  var result_33557562 = [[]];

    addFloat_33557563(result_33557562, 0, x_33557561);

  return result_33557562[0];

}

function HEX40_671088648(val_671088649, key_671088650) {
  var result_671088651 = null;

    result_671088651 = el.const({value: val_671088649, key: toJSStr(key_671088650)});

  return result_671088651;

}

function env_872415249(decay_872415250, gate_872415251) {
  var result_872415252 = null;

    var d_872415253 = el.const({value: decay_872415250});
    result_872415252 = el.adsr(el.const({value: 0.01}), d_872415253, el.const({value: 0.0}), d_872415253, gate_872415251);

  return result_872415252;

}

function lowpass_671088795(sig_671088796, fq_671088797, q_671088798) {
  var result_671088799 = null;

    return el.lowpass(fq_671088797, q_671088798, sig_671088796)

  return result_671088799;

}

function highpass_671088800(sig_671088801, fq_671088802, q_671088803) {
  var result_671088804 = null;

    return el.highpass(fq_671088802, q_671088803, sig_671088801)

  return result_671088804;

}

function timpani_872415254(baseFq_872415255, gate_872415256) {
  var result_872415257 = null;

    var fq1_872415258 = el.mul(baseFq_872415255, fqFactor1_872415234);
    var fq2_872415259 = el.mul(baseFq_872415255, fqFactor2_872415235);
    var fq3_872415260 = el.mul(baseFq_872415255, fqFactor3_872415236);
    var fq4_872415261 = el.mul(baseFq_872415255, fqFactor4_872415237);
    var env1_872415262 = el.mul(env_872415249(decay1_872415244, gate_872415256), amp1_872415238);
    var env2_872415263 = el.mul(env_872415249(decay2_872415245, gate_872415256), amp2_872415239);
    var env3_872415264 = el.mul(env_872415249(decay3_872415246, gate_872415256), amp3_872415240);
    var env4_872415265 = el.mul(env_872415249(decay4_872415247, gate_872415256), amp4_872415241);
    var sig1_872415266 = el.mul(lowpass_671088795(el.triangle(fq1_872415258), el.mul(fq1_872415258, 1.0), el.const({value: 1.0})), env1_872415262);
    var sig2_872415267 = el.mul(lowpass_671088795(el.triangle(fq2_872415259), el.mul(fq2_872415259, 1.0), el.const({value: 1.0})), env2_872415263);
    var sig3_872415268 = el.mul(lowpass_671088795(el.triangle(fq3_872415260), el.mul(fq3_872415260, 1.0), el.const({value: 1.0})), env3_872415264);
    var sig4_872415269 = el.mul(lowpass_671088795(el.triangle(fq4_872415261), el.mul(fq4_872415261, 1.0), el.const({value: 1.0})), env4_872415265);
    var envNoise_872415270 = el.mul(env_872415249(decayNoise_872415248, gate_872415256), ampNoise_872415242);
    var noiseSound_872415271 = lowpass_671088795(highpass_671088800(el.mul(el.square(100.0), el.square(87.0)), el.mul(baseFq_872415255, 0.5), el.const({value: 1.0})), el.mul(baseFq_872415255, 8.0), el.const({value: 2.0}));
    var noiseSig_872415272 = el.mul(noiseSound_872415271, envNoise_872415270);
    result_872415257 = el.div(el.add(el.add(el.add(el.add(sig1_872415266, sig2_872415267), sig3_872415268), sig4_872415269), noiseSig_872415272), 3.0);

  return result_872415257;

}

function HEX2BHEX3D_671088705(a_671088706, a_671088706_Idx, b_671088707) {
    a_671088706[a_671088706_Idx] = el.add(a_671088706[a_671088706_Idx], b_671088707);

  
}

function play_536870917(midiNotes_536870918) {
  var result_536870919 = null;

    rawEcho(HEX24_536871009(midiNotes_536870918));
    var sig_536871062 = [el.const({value: 0.0})];
    Label1: {
      var i_536871067 = 0;
      var res_536871098 = 0;
      Label2: {
          Label3: while (true) {
          if (!(res_536871098 <= 4)) break Label3;
            i_536871067 = res_536871098;
            var note_536871068 = midiNotes_536870918[i_536871067];
            var gate_536871069 = 0.0;
            if ((0.0 < note_536871068)) {
            gate_536871069 = 1.0;
            lastNote_536870916[0][i_536871067] = toInt_33556014(note_536871068);
            }
            
            var fq_536871070 = toFrequency_687865986(lastNote_536870916[0][i_536871067]);
            rawEcho(HEX24_369098760(i_536871067), [32], HEX24_33557559(fq_536871070));
            var fqNode_536871077 = HEX40_671088648(fq_536871070, ([102,113] || []).concat(HEX24_369098760(i_536871067) || []));
            var gateNode_536871078 = HEX40_671088648(gate_536871069, ([103,97,116,101] || []).concat(HEX24_369098760(i_536871067) || []));
            var noteSig_536871079 = timpani_872415254(fqNode_536871077, gateNode_536871078);
            HEX2BHEX3D_671088705(sig_536871062, 0, noteSig_536871079);
            res_536871098 += 1;
          }
      };
    };
    result_536870919 = sig_536871062[0];

  return result_536870919;

}
var lastNote_536870916 = [new Int32Array([0, 0, 0, 0, 0])];
export {play_536870917 as play}
