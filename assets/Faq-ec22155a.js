import{g as te,b as ne,s as I,_ as r,r as w,u as oe,d as ie,c as re,e as se,f as ae,a as d,h as de,i as le,j as S,k as ce}from"./index-f2e429e6.js";import{u as U}from"./useTheme-58cfd212.js";import{T as pe,g as q}from"./utils-9dc918b5.js";function ue(n){return te("MuiCollapse",n)}ne("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const he=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],me=n=>{const{orientation:t,classes:o}=n,a={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return le(a,ue,o)},fe=I("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:o}=n;return[t.root,t[o.orientation],o.state==="entered"&&t.entered,o.state==="exited"&&!o.in&&o.collapsedSize==="0px"&&t.hidden]}})(({theme:n,ownerState:t})=>r({height:0,overflow:"hidden",transition:n.transitions.create("height")},t.orientation==="horizontal"&&{height:"auto",width:0,transition:n.transitions.create("width")},t.state==="entered"&&r({height:"auto",overflow:"visible"},t.orientation==="horizontal"&&{width:"auto"}),t.state==="exited"&&!t.in&&t.collapsedSize==="0px"&&{visibility:"hidden"})),ge=I("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(n,t)=>t.wrapper})(({ownerState:n})=>r({display:"flex",width:"100%"},n.orientation==="horizontal"&&{width:"auto",height:"100%"})),ye=I("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(n,t)=>t.wrapperInner})(({ownerState:n})=>r({width:"100%"},n.orientation==="horizontal"&&{width:"auto",height:"100%"})),_=w.forwardRef(function(t,o){const a=oe({props:t,name:"MuiCollapse"}),{addEndListener:x,children:v,className:R,collapsedSize:p="0px",component:$,easing:u,in:W,onEnter:N,onEntered:j,onEntering:A,onExit:F,onExited:B,onExiting:H,orientation:L="vertical",style:T,timeout:l=ie.standard,TransitionComponent:O=pe}=a,Q=re(a,he),E=r({},a,{orientation:L,collapsedSize:p}),m=me(E),M=U(),G=se(),c=w.useRef(null),k=w.useRef(),C=typeof p=="number"?`${p}px`:p,f=L==="horizontal",g=f?"width":"height",b=w.useRef(null),J=ae(o,b),h=e=>i=>{if(e){const s=b.current;i===void 0?e(s):e(s,i)}},D=()=>c.current?c.current[f?"clientWidth":"clientHeight"]:0,K=h((e,i)=>{c.current&&f&&(c.current.style.position="absolute"),e.style[g]=C,N&&N(e,i)}),V=h((e,i)=>{const s=D();c.current&&f&&(c.current.style.position="");const{duration:y,easing:z}=q({style:T,timeout:l,easing:u},{mode:"enter"});if(l==="auto"){const P=M.transitions.getAutoHeightDuration(s);e.style.transitionDuration=`${P}ms`,k.current=P}else e.style.transitionDuration=typeof y=="string"?y:`${y}ms`;e.style[g]=`${s}px`,e.style.transitionTimingFunction=z,A&&A(e,i)}),X=h((e,i)=>{e.style[g]="auto",j&&j(e,i)}),Y=h(e=>{e.style[g]=`${D()}px`,F&&F(e)}),Z=h(B),ee=h(e=>{const i=D(),{duration:s,easing:y}=q({style:T,timeout:l,easing:u},{mode:"exit"});if(l==="auto"){const z=M.transitions.getAutoHeightDuration(i);e.style.transitionDuration=`${z}ms`,k.current=z}else e.style.transitionDuration=typeof s=="string"?s:`${s}ms`;e.style[g]=C,e.style.transitionTimingFunction=y,H&&H(e)});return d(O,r({in:W,onEnter:K,onEntered:X,onEntering:V,onExit:Y,onExited:Z,onExiting:ee,addEndListener:e=>{l==="auto"&&G.start(k.current||0,e),x&&x(b.current,e)},nodeRef:b,timeout:l==="auto"?null:l},Q,{children:(e,i)=>d(fe,r({as:$,className:de(m.root,R,{entered:m.entered,exited:!W&&C==="0px"&&m.hidden}[e]),style:r({[f?"minWidth":"minHeight"]:C},T),ref:J},i,{ownerState:r({},E,{state:e}),children:d(ge,{ownerState:r({},E,{state:e}),className:m.wrapper,ref:c,children:d(ye,{ownerState:r({},E,{state:e}),className:m.wrapperInner,children:v})})}))}))});_.muiSupportAuto=!0;const we=_,be=()=>{const n=[{name:"How often should I get my eyes checked?",description:"Adults should get their eyes checked at least every two years, and annually if they are over the age of 60 or have a history of eye problems."},{name:"What are the common signs that indicate a need for an eye test?",description:"Common signs that indicate a need for an eye test include frequent headaches, difficulty reading, blurred vision, double vision, eye strain, and trouble seeing objects at a distance."},{name:"What is the difference between an optometrist and an ophthalmologist?",description:"An optometrist is a primary eye care provider who can perform eye exams, prescribe corrective lenses, and diagnose common eye conditions, while an ophthalmologist is a medical doctor who specializes in eye and vision care, is qualified to perform eye surgery, and can diagnose and treat a wider range of eye diseases and injuries."},{name:"Can digital screens affect my vision, and if so, how can I protect my eyes?",description:"Prolonged use of digital screens can lead to digital eye strain, causing symptoms such as dry eyes, headaches, blurred vision, and neck and shoulder pain. To protect your eyes, take regular breaks, adjust screen brightness and position, use artificial tears, and follow the 20-20-20 rule (look at something 20 feet away for 20 seconds every 20 minutes)."},{name:"How can I prepare for an eye test to ensure accurate results?",description:"To prepare for an eye test, bring your current glasses or contact lenses, be ready to provide your medical history and any medications you are taking, and if you wear contact lenses, avoid wearing them for a few hours before the test to ensure the most accurate results."}],t=({item:o})=>{const[a,x]=w.useState(!1),v=U(),R=v.palette.mode==="dark"?"":"#fff",p=v.palette.mode==="dark"?"":"#000";return S("div",{className:"name",children:[S(ce,{component:"div",onClick:()=>{x(u=>!u)},onContextMenu:u=>u.preventDefault(),sx:{cursor:"pointer",backgroundColor:R,borderRadius:"8px",padding:"8px 16px",color:p,"&:hover":{backgroundColor:"#006dc4"}},children:[o.name," ",a?"▲":"▼"]}),d(we,{in:a,children:d("div",{className:"description",style:{backgroundColor:"rgba(126, 126, 126, 0.39)",padding:"50px",borderRadius:"5px",marginRight:"auto",marginLeft:"auto",fontSize:17},children:o.description})})]},o.name)};return S("div",{children:[d("h2",{className:"faq",style:{fontSize:38},children:"Frequently Asked Questions"}),n.map(o=>d(t,{item:o},o.name))]})};export{be as default};