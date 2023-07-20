import{u as Q,j as k,k as N,o as d,c as p,w as a,s as j,a as e,p as s,q as I,f as S,t as n,h as o,e as m,F as h,aq as v,ap as x,Q as r,r as b}from"./index.34fc6f26.js";import{Q as i,a as t}from"./QItem.54f3b4c2.js";import{Q as c}from"./QItemLabel.d6426e10.js";import{Q as u}from"./QList.848173ff.js";import{Q as y}from"./QChip.3285a9f2.js";import{Q as C}from"./QPage.225bd69c.js";const O={class:"shaddow q-mt-lg q-pa-sm column items-center relative"},B={class:"card bg-grey-2 flex justify-center items-center"},L=["src"],P={class:"q-mt-xl column flex justify-center items-center"},V={class:"text-h6"},z={class:"q-mt-xs column flex justify-center items-center"},A={class:"text-subtitle1"},D={class:"text-subtitle2 q-px-xl",style:{"text-align":"center"}},J={class:"row shaddow q-mt-sm q-pa-sm justify-between"},E={class:"q-pa-sm"},F=s("p",{class:"text-h6 q-pa-sm"},"Contacts",-1),M={class:"q-pa-sm"},T=s("p",{class:"text-h6 q-pa-sm"},"Social Media",-1),G={class:"q-pa-sm"},R=s("p",{class:"text-h6 q-pa-sm"},"Other Info",-1),W={class:"row flex"},Y=s("p",{class:"text-h6"},"Occupations",-1),$={key:0,class:"row flex"},H={class:"row flex"},K=s("p",{class:"text-h6"},"Labels",-1),U={key:0,class:"row flex"},ne={__name:"ArtistDetails",setup(X){const g=Q(),l=k(""),q="https://api.example.com",w=async()=>{try{console.log(g.params);const f=await j.get(`/artist_list/${g.params.id}`);l.value=f.data}catch{}};return N(()=>{w()}),(f,Z)=>(d(),p(C,{padding:""},{default:a(()=>[e(x,null,{default:a(()=>[s("div",O,[s("div",B,[e(I,{size:"90px",class:"avatar"},{default:a(()=>[s("img",{src:S(q)+l.value.profile_image},null,8,L)]),_:1})]),s("div",P,[s("p",V,n(l.value.name),1)]),s("div",z,[s("p",A,[o(" Genres | "),l.value.genres?(d(),m(h,{key:0},[o(n(JSON.parse(l.value.genres).join(", ")),1)],64)):v("",!0)]),s("p",D,n(l.value.biography),1)])])]),_:1}),e(x,{class:"q-mt-lg"},{default:a(()=>[s("div",J,[s("div",E,[F,e(u,{padding:""},{default:a(()=>[e(i,null,{default:a(()=>[e(t,{avatar:""},{default:a(()=>[e(r,{color:"green",name:"mdi-phone"})]),_:1}),e(t,null,{default:a(()=>[o("Phone")]),_:1}),e(t,{side:""},{default:a(()=>[e(c,{caption:""},{default:a(()=>[o(n(l.value.phone),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{padding:""},{default:a(()=>[e(i,null,{default:a(()=>[e(t,{avatar:""},{default:a(()=>[e(r,{color:"green",name:"mdi-web"})]),_:1}),e(t,null,{default:a(()=>[o("Website")]),_:1}),e(t,{side:""},{default:a(()=>[e(c,{caption:""},{default:a(()=>[o(n(l.value.website),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{padding:""},{default:a(()=>[e(i,null,{default:a(()=>[e(t,{avatar:""},{default:a(()=>[e(r,{color:"green",name:"mdi-gmail"})]),_:1}),e(t,null,{default:a(()=>[o("Email")]),_:1}),e(t,{side:""},{default:a(()=>[e(c,{caption:""},{default:a(()=>[o(n(l.value.email),1)]),_:1})]),_:1})]),_:1})]),_:1})]),s("div",M,[T,e(u,{padding:""},{default:a(()=>[e(i,null,{default:a(()=>[e(t,{avatar:""},{default:a(()=>[e(r,{color:"green",name:"mdi-youtube"})]),_:1}),e(t,null,{default:a(()=>[o("Youtube")]),_:1}),e(t,{side:""},{default:a(()=>[e(c,{caption:""},{default:a(()=>[o(n(l.value.youtube),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{padding:""},{default:a(()=>[e(i,null,{default:a(()=>[e(t,{avatar:""},{default:a(()=>[e(r,{color:"green",name:"mdi-twitter"})]),_:1}),e(t,null,{default:a(()=>[o("Twitter")]),_:1}),e(t,{side:""},{default:a(()=>[e(c,{caption:""},{default:a(()=>[o(n(l.value.twitter),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{padding:""},{default:a(()=>[e(i,null,{default:a(()=>[e(t,{avatar:""},{default:a(()=>[e(r,{color:"green",name:"mdi-instagram"})]),_:1}),e(t,null,{default:a(()=>[o("Instagram")]),_:1}),e(t,{side:""},{default:a(()=>[e(c,{caption:""},{default:a(()=>[o("@"+n(l.value.instagram),1)]),_:1})]),_:1})]),_:1})]),_:1})]),s("div",G,[R,e(u,{padding:""},{default:a(()=>[e(i,{class:"column flex"},{default:a(()=>[e(t,{avatar:""},{default:a(()=>[s("div",W,[e(r,{color:"green",size:"25px",class:"q-ma-xs",name:"mdi-account-hard-hat"}),Y])]),_:1}),l.value.occupations?(d(),m("div",$,[(d(!0),m(h,null,b(JSON.parse(l.value.occupations),_=>(d(),p(y,{key:_,label:_,color:"amber"},null,8,["label"]))),128))])):v("",!0)]),_:1}),e(i,{class:"column flex"},{default:a(()=>[e(t,{avatar:""},{default:a(()=>[s("div",H,[e(r,{color:"green",size:"35px",class:"",name:"mdi-record-rec"}),K])]),_:1}),l.value.labels?(d(),m("div",U,[(d(!0),m(h,null,b(JSON.parse(l.value.labels),_=>(d(),p(y,{key:_,label:_,color:"amber"},null,8,["label"]))),128))])):v("",!0)]),_:1})]),_:1})])])]),_:1})]),_:1}))}};export{ne as default};
