import{an as g,j as l,i as w,o as _,c as V,w as m,p as t,a as s,n as c,bi as b,ar as o,bq as f,s as y}from"./index.a2a6cfde.js";import{Q as x}from"./QForm.f6df67f1.js";import{Q as h}from"./QPage.81319fa2.js";const q={class:"full-width q-pa-md"},R={class:"flex justify-center"},P={class:"flex justify-end q-ma-lg"},Q={__name:"RegistrationPage",setup(j){const i=l(""),n=l(""),r=l(""),d=l(""),v=w();l([]);const p=async()=>{const u=await y.post("/register",{email:i.value,name:n.value,password:r.value,password_confirmation:d.value});v.push({name:"Login"}),console.log(u.data)};return(u,e)=>(_(),V(h,{padding:"",class:"bg-images"},{default:m(()=>[t("div",q,[s(c,{label:"home",class:"text-capitalize",flat:"",to:"/",icon:"arrow_back",color:"primary"})]),t("div",{class:b(u.$q.platform.is.desktop?"flex justify-center text-h4":"flex justify-center text-h5")}," Artists Registration Form ",2),t("div",R,[s(x,{onSubmit:e[5]||(e[5]=f(a=>p(),["prevent"])),style:{width:"80%"}},{default:m(()=>[t("div",null,[s(o,{label:"Full Name",class:"q-ma-lg",outlined:"",dense:"","transition-show":"flip-up","transition-hide":"scale",modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=a=>n.value=a)},null,8,["modelValue"]),s(o,{label:"Enter Email",class:"q-ma-lg",outlined:"",dense:"","transition-show":"flip-up","transition-hide":"scale",modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=a=>i.value=a)},null,8,["modelValue"]),s(o,{label:"Password",class:"q-ma-lg",outlined:"",dense:"",type:"password","transition-show":"flip-up","transition-hide":"scale",modelValue:r.value,"onUpdate:modelValue":e[2]||(e[2]=a=>r.value=a)},null,8,["modelValue"]),s(o,{label:"Repeat Password",class:"q-ma-lg",outlined:"",dense:"",type:"password","transition-show":"flip-up","transition-hide":"scale",modelValue:d.value,"onUpdate:modelValue":e[3]||(e[3]=a=>d.value=a)},null,8,["modelValue"]),t("div",P,[s(c,{class:"text-capitalize",color:"primary",label:"Register",type:"submit",onClick:e[4]||(e[4]=f(a=>p(),["prevent"]))})])])]),_:1})])]),_:1}))}};var z=g(Q,[["__scopeId","data-v-637b2d58"]]);export{z as default};