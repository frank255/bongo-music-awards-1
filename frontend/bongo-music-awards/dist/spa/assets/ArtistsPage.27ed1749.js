import{j as _,i as k,k as q,o,c as n,w as s,s as w,p as a,a as r,Q as v,bh as c,ar as Q,e as d,r as b,F as u,bi as C,ap as V,ao as p,q as j,f as N,t as m,h as B,aq as S}from"./index.a2a6cfde.js";import{Q as $}from"./QPage.81319fa2.js";const z={class:"flex justify-center"},A=["src"],D={class:"text-h6 text-center text-weight-bold"},F={class:"text-subtitle1 text-center text-grey-8"},J={__name:"ArtistsPage",setup(I){const l=_([]),f="https://bongomusicaward.co.tz",g=async()=>{try{const e=await w.get("/artist_list");l.value=e.data}catch{}},h=k(),x=e=>{console.log(e),h.push(`/artists/${e}`)};return q(()=>{g()}),(e,i)=>(o(),n($,{padding:""},{default:s(()=>[a("div",z,[r(Q,{outlined:"",rounded:"",dense:"",class:"q-mt-xl",style:c(e.$q.platform.is.desktop?"width: 50%":"width: 70%"),debounce:"300",modelValue:e.filter,"onUpdate:modelValue":i[0]||(i[0]=t=>e.filter=t),placeholder:"Search Artists By Name"},{append:s(()=>[r(v,{name:"mdi-magnify"})]),_:1},8,["style","modelValue"])]),a("div",{class:C(e.$q.platform.is.desktop?"flex justify-center q-gutter-x-xl":"flex justify-center")},[(o(!0),d(u,null,b(l.value,(t,y)=>(o(),n(V,{key:y,class:"q-mt-xl bg-grey-2",style:c(e.$q.platform.is.desktop?"min-width: 200px;height:200px; cursor: pointer":"width: 300px;height:200px; cursor: pointer"),onClick:L=>x(t.user_id)},{default:s(()=>[r(p,{class:"flex justify-center"},{default:s(()=>[r(j,{size:"90px"},{default:s(()=>[a("img",{src:N(f)+t.profile_image},null,8,A)]),_:2},1024)]),_:2},1024),r(p,{class:"q-px-sm"},{default:s(()=>[a("div",D,m(t.name),1),a("div",F,[t.genres?(o(),d(u,{key:0},[B(m(JSON.parse(t.genres).join(", ")),1)],64)):S("",!0)])]),_:2},1024)]),_:2},1032,["style","onClick"]))),128))],2)]),_:1}))}};export{J as default};