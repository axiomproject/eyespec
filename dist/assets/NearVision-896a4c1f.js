import{r as t,j as o,a as e,B as n}from"./index-ab3895cc.js";import{u as z}from"./useTheme-9b7161a2.js";import{T as r}from"./Typography-09f4058f.js";import{M}from"./Modal-80bb8e00.js";import"./utils-349b2296.js";import"./useSlotProps-cae653c0.js";const C=["Do you tend to hold text further away to see better?","Are you having difficulty reading small print?","This is quite normal past a certain age.","Let's test your near vision.","If you made it this far, your vision does not require eyeglasses."],q=()=>{const[s,a]=t.useState(0),[i,l]=t.useState([]),[g,c]=t.useState(!1),[d,u]=t.useState(50),h=z(),f=(h.palette.mode==="dark","#fff"),x=(h.palette.mode==="dark","#353237"),p=y=>{l([...i,y]),u(d-8),s<C.length-1?a(s+1):c(!0)},m=()=>{c(!1),a(0),l([]),u(50)},S=()=>i.reduce((v,k)=>k?v+1:v,0);return o("div",{children:[e("h1",{className:"nearvision-header",children:"Near Vision"}),e(r,{variant:"h4",style:{fontSize:`${d}px`},children:C[s]}),o("div",{className:"nearvision-button",children:[e(n,{variant:"contained",onClick:()=>p(!0),children:"Yes"}),e(n,{variant:"contained",onClick:()=>p(!1),children:"No"})]}),e(M,{open:g,onClose:m,children:o("div",{style:{backgroundColor:x,padding:"20px"},children:[e(r,{style:{color:f},variant:"h5",children:"Quiz Results"}),o(r,{style:{color:f},variant:"body1",children:["Your score is: ",S()," out of 5"]}),e(n,{variant:"contained",onClick:m,children:"Close"})]})})]})};export{q as default};