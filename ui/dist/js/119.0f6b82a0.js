"use strict";(globalThis["webpackChunkfuel_manager"]=globalThis["webpackChunkfuel_manager"]||[]).push([[119],{2119:(a,e,i)=>{i.r(e),i.d(e,{default:()=>q});var l=i(6252),t=i(2262),n=i(9963),u=i(3577),s=i(8593),c=i(7810);const d=a=>((0,l.dD)("data-v-2accedff"),a=a(),(0,l.Cn)(),a),v=d((()=>(0,l._)("div",{class:"page-title"},"Settings",-1))),o={class:"container"},f={class:"info-item"},m={class:"info-item-heading"},r={class:"info-item-value text-lg"},w={key:0},_=d((()=>(0,l._)("span",{class:"info-item-unit"},"liters",-1))),p={key:1},g=d((()=>(0,l._)("span",{class:"info-item-unit"}," liters",-1))),k={class:"info-item"},y={class:"info-item-heading"},U={class:"info-item-value text-lg"},b={key:0},S=d((()=>(0,l._)("span",{class:"info-item-unit"},"km",-1))),h={key:1},W=d((()=>(0,l._)("span",{class:"info-item-unit"}," km",-1))),C={class:"info-item"},D={class:"info-item-heading"},G={class:"info-item-value text-lg"},x={key:0},H=d((()=>(0,l._)("span",{class:"info-item-unit"},"GH¢",-1))),M={key:1},N=d((()=>(0,l._)("span",{class:"info-item-unit"}," GH¢",-1))),P={class:"centered"},z=["disabled"],E=(0,l.aZ)({__name:"settings-page",setup(a){const e=(0,l.f3)("StorageService"),i=(0,t.iH)(),d=(0,t.iH)(),E=(0,t.iH)(),T=(0,t.iH)(),V=(0,t.iH)(!1);(0,l.Xn)((async()=>{await q()}));const q=async()=>{i.value=await e.get("tankCapacity")||0,d.value=await e.get("maxMileage")||0,E.value=await e.get("fuelEfficiency")||0,T.value=await e.get("fuelPrice")||0},F=()=>{V.value=!0},Z=async()=>{await e.set("tankCapacity",i.value),await e.set("maxMileage",d.value),E.value=d.value/i.value,await e.set("fuelEfficiency",E.value),await e.set("fuelPrice",T.value),V.value=!1},j=async()=>{i.value="",d.value="",E.value="",T.value=""};return(a,e)=>((0,l.wg)(),(0,l.j4)((0,t.SU)(s._i),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,t.SU)(s.Gu),null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,t.SU)(s.sr),null,{default:(0,l.w5)((()=>[v,(0,l.Wm)((0,t.SU)(s.Sm),{slot:"primary"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,t.SU)(s.YG),{href:"/about"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,t.SU)(c.GN),{slot:"icon-only",icon:"fa fa-circle-info",class:"menu-icon"})])),_:1})])),_:1})])),_:1})])),_:1}),(0,l.Wm)((0,t.SU)(s.W2),null,{default:(0,l.w5)((()=>[(0,l._)("div",o,[(0,l.Wm)((0,t.SU)(s.PM),{mode:"ios"},{default:(0,l.w5)((()=>[(0,l.Wm)((0,t.SU)(s.FN),null,{default:(0,l.w5)((()=>[(0,l._)("div",f,[(0,l._)("div",m,[(0,l.Wm)((0,t.SU)(c.GN),{icon:"fa-solid fa-fill-drip"}),(0,l.Uk)("Tank Capacity")]),(0,l._)("div",r,[V.value?((0,l.wg)(),(0,l.iD)("div",w,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>i.value=a),placeholder:"",id:"tankCapacity",type:"number"},null,512),[[n.nr,i.value]]),_])):((0,l.wg)(),(0,l.iD)("div",p,[(0,l.Uk)((0,u.zw)(i.value),1),g]))])]),(0,l._)("div",k,[(0,l._)("div",y,[(0,l.Wm)((0,t.SU)(c.GN),{icon:"fa-solid fa-road"}),(0,l.Uk)("Maximum Mileage")]),(0,l._)("div",U,[V.value?((0,l.wg)(),(0,l.iD)("div",b,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>d.value=a),placeholder:"",id:"maxMileage",type:"number"},null,512),[[n.nr,d.value]]),S])):((0,l.wg)(),(0,l.iD)("div",h,[(0,l.Uk)((0,u.zw)(d.value),1),W]))])]),(0,l._)("div",C,[(0,l._)("div",D,[(0,l.Wm)((0,t.SU)(c.GN),{class:"fc-blue",icon:"fa-solid fa-gas-pump"}),(0,l.Uk)("Fuel Price")]),(0,l._)("div",G,[V.value?((0,l.wg)(),(0,l.iD)("div",x,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>T.value=a),placeholder:"",id:"fuelPrice",type:"number"},null,512),[[n.nr,T.value]]),H])):((0,l.wg)(),(0,l.iD)("div",M,[(0,l.Uk)((0,u.zw)(T.value),1),N]))])])])),_:1})])),_:1}),(0,l._)("div",P,[(0,l._)("button",{class:"btn btn-secondary m-5 w-50",onClick:j},"Clear"),V.value?((0,l.wg)(),(0,l.iD)("button",{key:0,id:"save",disabled:d.value<=0||i.value<=0||T.value<=0,class:"btn btn-primary m-5 w-50",onClick:Z}," Save ",8,z)):(0,l.kq)("",!0),V.value?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("button",{key:1,id:"edit",class:"btn btn-primary m-2 w-50",onClick:F},"Edit"))])])])),_:1})])),_:1}))}});var T=i(3744);const V=(0,T.Z)(E,[["__scopeId","data-v-2accedff"]]),q=V}}]);
//# sourceMappingURL=119.0f6b82a0.js.map