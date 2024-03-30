import{a as e,j as t,L as o}from"./index-6b0252be.js";import{F as a,a as n,b as r,c,d as l,e as d}from"./index-010c6ff2.js";const u=[{title:"DISTANCE VISION",description:"Assess your ability to see distant objects clearly. Our distance vision test will help you determine if you have any refractive errors that may affect your vision, such as nearsightedness or farsightedness.",icon:n,route:"/distance-vision"},{title:"NEAR VISION",description:"Test your close-up vision, crucial for activities like reading and using digital devices. This assessment will help identify any issues related to presbyopia or other near vision problems.",icon:r,route:"/faq"},{title:"DRY EYE",description:"Explore the symptoms and potential causes of dry eye syndrome. This section provides information and guidance on managing and preventing dry eye, a common eye condition that can affect your comfort and vision.",icon:c,route:"/dryeye"},{title:"ASTIGMATISM",description:"Learn about astigmatism, a common refractive error that can blur your vision. Take our test to assess if you might have astigmatism and understand how it can be corrected with eyeglasses or contact lenses.",icon:l,route:"/faq"},{title:"COLOR BLINDNESS",description:"Discover the world of color perception. This test will evaluate your color vision and help you understand whether you have any form of color blindness, which can impact how you perceive and distinguish colors in everyday life.",icon:d,route:"/faq"}],m=()=>e("div",{className:"eye-test-container",children:e("div",{className:"button-row",children:u.map((i,s)=>t(o,{to:i.route,className:"square-button",style:{textDecoration:"none"},children:[e(a,{icon:i.icon,size:"2x",transform:"down-10 left-65"}),e("h3",{children:i.title}),e("p",{children:i.description})]},s))})});export{m as default};
