import{_ as l,k as S,f as g,i as h}from"./index-c7080318.js";function x(n){return typeof n=="string"}function N(n,s,e){return n===void 0||x(n)?s:l({},s,{ownerState:l({},s.ownerState,e)})}function k(n,s=[]){if(n===void 0)return{};const e={};return Object.keys(n).filter(t=>t.match(/^on[A-Z]/)&&typeof n[t]=="function"&&!s.includes(t)).forEach(t=>{e[t]=n[t]}),e}function w(n,s,e){return typeof n=="function"?n(s,e):n}function P(n){if(n===void 0)return{};const s={};return Object.keys(n).filter(e=>!(e.match(/^on[A-Z]/)&&typeof n[e]=="function")).forEach(e=>{s[e]=n[e]}),s}function E(n){const{getSlotProps:s,additionalProps:e,externalSlotProps:t,externalForwardedProps:o,className:a}=n;if(!s){const m=S(e==null?void 0:e.className,a,o==null?void 0:o.className,t==null?void 0:t.className),y=l({},e==null?void 0:e.style,o==null?void 0:o.style,t==null?void 0:t.style),v=l({},e,o,t);return m.length>0&&(v.className=m),Object.keys(y).length>0&&(v.style=y),{props:v,internalRef:void 0}}const d=k(l({},o,t)),i=P(t),c=P(o),r=s(d),u=S(r==null?void 0:r.className,e==null?void 0:e.className,a,o==null?void 0:o.className,t==null?void 0:t.className),f=l({},r==null?void 0:r.style,e==null?void 0:e.style,o==null?void 0:o.style,t==null?void 0:t.style),p=l({},r,e,c,i);return u.length>0&&(p.className=u),Object.keys(f).length>0&&(p.style=f),{props:p,internalRef:r.ref}}const H=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function C(n){var s;const{elementType:e,externalSlotProps:t,ownerState:o,skipResolvingSlotProps:a=!1}=n,d=g(n,H),i=a?{}:w(t,o),{props:c,internalRef:r}=E(l({},d,{externalSlotProps:i})),u=h(r,i==null?void 0:i.ref,(s=n.additionalProps)==null?void 0:s.ref);return N(e,l({},c,{ref:u}),o)}export{k as e,x as i,C as u};
