"use strict";(globalThis["webpackChunkfuel_manager"]=globalThis["webpackChunkfuel_manager"]||[]).push([[990],{8990:(e,t,n)=>{n.r(t),n.d(t,{createSwipeBackGesture:()=>o});var r=n(6587),a=n(545),i=n(6515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const o=(e,t,n,o,s)=>{const c=e.ownerDocument.defaultView;let l=(0,a.i)(e);const u=e=>{const t=50,{startX:n}=e;return l?n>=c.innerWidth-t:n<=t},h=e=>l?-e.deltaX:e.deltaX,d=e=>l?-e.velocityX:e.velocityX,g=n=>(l=(0,a.i)(e),u(n)&&t()),b=e=>{const t=h(e),n=t/c.innerWidth;o(n)},k=e=>{const t=h(e),n=c.innerWidth,a=t/n,i=d(e),o=n/2,l=i>=0&&(i>.2||t>o),u=l?1-a:a,g=u*n;let b=0;if(g>5){const e=g/Math.abs(i);b=Math.min(e,540)}s(l,a<=0?.01:(0,r.m)(0,a,.9999),b)};return(0,i.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:g,onStart:n,onMove:b,onEnd:k})}}}]);
//# sourceMappingURL=990.f130565d.js.map