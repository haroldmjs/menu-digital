import{u as p,a as u,b as h,r as b,j as e,T as n,c}from"./index-2949bf86.js";import{c as f}from"./close-4db76a2e.js";const w=()=>{const t=p(),i=u(),r=h(),l=()=>{r({type:n.CLOSE_OVERLAY})};b.useEffect(()=>{t.length<1&&l()},[t]);const d=s=>{i({type:c.INCREASE_QUANTITY,payload:s})},o=s=>{i({type:c.DECREASE_QUANTITY,payload:s})},m=t.map(s=>({...s,totalPrice:s.price*s.quantity})).reduce((s,a)=>s+a.totalPrice,0),x=()=>{r({type:n.SHOW_INFO,payload:!0})};return e.jsxs("div",{children:[e.jsx("div",{className:"p-4 absolute top-0 left-0 w-full",children:e.jsx("div",{className:"bg-white flex w-fit rounded-full p-1.5 shadow-xl cursor-pointer ml-auto",onClick:l,children:e.jsx("img",{src:f,alt:"close"})})}),e.jsxs("div",{className:"p-4 pt-16 pb-32",children:[e.jsxs("h3",{className:"font-semibold text-xl mb-6",children:["Tu pedido ",e.jsxs("span",{className:"text-gray",children:["(",t.length,")"]})]}),t.map((s,a)=>e.jsxs("div",{className:"border-b-2 border-b-grayBackground pb-3 mt-3 last:border-b-0",children:[e.jsxs("div",{className:"flex justify-between mb-1",children:[e.jsxs("h5",{className:"font-medium",children:[s.name," ",e.jsx("span",{className:"text-gray",children:s.size&&`(${s.size})`})]}),e.jsxs("p",{children:["$ ",(s.price*s.quantity).toFixed(2)]})]}),e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:()=>o(s.idEdit),className:"bg-primary text-white w-6 rounded-full",children:"-"}),e.jsx("input",{type:"number",id:"quantity",min:"1",value:s.quantity,max:"50",disabled:!0,className:"px-0 w-8 text-center bg-white"}),e.jsx("button",{type:"button",onClick:()=>d(s.idEdit),className:"bg-primary text-white w-6 rounded-full ",children:"+"})]})]},a))]}),e.jsxs("div",{className:"px-4 pb-7 fixed bottom-0 w-full bg-white md:w-5/12",children:[e.jsxs("div",{className:"border-t-2 border-grayBackground pt-4 flex justify-between mb-2",children:[e.jsx("p",{className:"font-medium",children:"Total Estimado"}),e.jsxs("span",{className:"font-medium",children:["$ ",m.toFixed(2)]})]}),e.jsx("div",{className:"bg-primary h-12 flex justify-center items-center rounded-lg cursor-pointer",onClick:x,children:e.jsx("p",{className:"font-semibold text-white",children:"Iniciar compra"})})]})]})};export{w as default};