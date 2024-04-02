import{g as V,b as B,s as J,_ as u,K as _,r as g,u as Q,c as k,a as q,h as S,i as X,e as Y,f as Z}from"./index-c01ca671.js";import{u as ee}from"./useTheme-71becdc3.js";import{T as te,r as ne,g as w}from"./utils-416fdd59.js";const oe=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},L=oe;function ae(e){return V("MuiPaper",e)}B("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const ie=["className","component","elevation","square","variant"],re=e=>{const{square:t,elevation:o,variant:a,classes:f}=e,r={root:["root",a,!t&&"rounded",a==="elevation"&&`elevation${o}`]};return X(r,ae,f)},se=J("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],!o.square&&t.rounded,o.variant==="elevation"&&t[`elevation${o.elevation}`]]}})(({theme:e,ownerState:t})=>{var o;return u({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&u({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${_("#fff",L(t.elevation))}, ${_("#fff",L(t.elevation))})`},e.vars&&{backgroundImage:(o=e.vars.overlays)==null?void 0:o[t.elevation]}))}),le=g.forwardRef(function(t,o){const a=Q({props:t,name:"MuiPaper"}),{className:f,component:r="div",elevation:m=1,square:E=!1,variant:y="elevation"}=a,$=k(a,ie),x=u({},a,{component:r,elevation:m,square:E,variant:y}),h=re(x);return q(se,u({as:r,ownerState:x,className:S(h.root,f),ref:o},$))}),ge=le,de=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function A(e){return`scale(${e}, ${e**2})`}const ue={entering:{opacity:1,transform:A(1)},entered:{opacity:1,transform:"none"}},C=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),M=g.forwardRef(function(t,o){const{addEndListener:a,appear:f=!0,children:r,easing:m,in:E,onEnter:y,onEntered:$,onEntering:x,onExit:h,onExited:j,onExiting:D,style:b,timeout:d="auto",TransitionComponent:F=te}=t,G=k(t,de),H=Y(),T=g.useRef(),c=ee(),P=g.useRef(null),U=Z(P,r.ref,o),v=n=>s=>{if(n){const l=P.current;s===void 0?n(l):n(l,s)}},N=v(x),K=v((n,s)=>{ne(n);const{duration:l,delay:R,easing:i}=w({style:b,timeout:d,easing:m},{mode:"enter"});let p;d==="auto"?(p=c.transitions.getAutoHeightDuration(n.clientHeight),T.current=p):p=l,n.style.transition=[c.transitions.create("opacity",{duration:p,delay:R}),c.transitions.create("transform",{duration:C?p:p*.666,delay:R,easing:i})].join(","),y&&y(n,s)}),O=v($),W=v(D),z=v(n=>{const{duration:s,delay:l,easing:R}=w({style:b,timeout:d,easing:m},{mode:"exit"});let i;d==="auto"?(i=c.transitions.getAutoHeightDuration(n.clientHeight),T.current=i):i=s,n.style.transition=[c.transitions.create("opacity",{duration:i,delay:l}),c.transitions.create("transform",{duration:C?i:i*.666,delay:C?l:l||i*.333,easing:R})].join(","),n.style.opacity=0,n.style.transform=A(.75),h&&h(n)}),I=v(j);return q(F,u({appear:f,in:E,nodeRef:P,onEnter:K,onEntered:O,onEntering:N,onExit:z,onExited:I,onExiting:W,addEndListener:n=>{d==="auto"&&H.start(T.current||0,n),a&&a(P.current,n)},timeout:d==="auto"?null:d},G,{children:(n,s)=>g.cloneElement(r,u({style:u({opacity:0,transform:A(.75),visibility:n==="exited"&&!E?"hidden":void 0},ue[n],b,r.props.style),ref:U},s))}))});M.muiSupportAuto=!0;const me=M;export{me as G,ge as P};
