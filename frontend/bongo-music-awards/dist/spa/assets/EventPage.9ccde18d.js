import{i as r,u as F,j as I,o as m,c as v,w as a,A as h,n as s,a as o,h as p,t as c,m as f,s as w,aM as g,v as q,x as V,y as D,g as B,z as R}from"./index.cce3915b.js";import{Q as S}from"./QSelect.9cf437ff.js";import{Q as _}from"./QChip.729eece9.js";import{Q as M}from"./QBanner.8f8cf04e.js";import{Q as T}from"./QTd.c320ee66.js";import{Q as Y}from"./QTable.f524ade3.js";import{Q as j}from"./QPage.76a46a00.js";import{C as U}from"./ClosePopup.f712e32b.js";import"./QItem.a90bd647.js";import"./QItemLabel.9e65cb53.js";import"./QMenu.e874daef.js";import"./position-engine.0cde2c40.js";import"./selection.109ccf0b.js";import"./rtl.b51694b1.js";import"./format.3e32b8d9.js";import"./QList.f3f9416a.js";import"./use-fullscreen.fa37bee6.js";const G={class:"row scroll-on-mobile justify-around q-mt-xl"},O={class:"q-pa-"},H={class:"q-mt-xl"},J=s("p",{class:"text-weight-bolder text-capitalize q-pl-md"},"Nominees",-1),K=["href"],W=s("div",{class:"text-h6"},"Fill the form bellow",-1),ge={__name:"EventPage",setup(X){const N=r([{name:"artist_name",label:"Artist name",align:"left",field:l=>l.artist_name,sortable:!0},{name:"genre",label:"genre",align:"left",field:l=>l.genre,sortable:!0},{name:"category",label:"category",align:"left",field:l=>l.category,sortable:!0},{name:"work_name",label:"Artwork Name",align:"left",field:l=>l.work_name,sortable:!0},{name:"link",label:"Link",align:"left",field:l=>l.link,sortable:!0}]),z=[{category:"Best Artist of the Year",artist_name:"Ally kiba",genre:"Song of the year",work_name:"Utu",link:"http://blablablab.com"},{category:"Best Artist of the Year",artist_name:"Harmonize",genre:"Song of the year",work_name:"I'm single",link:"http://blablablab.com"},{category:"Best Artist of the Year",artist_name:"Marioo",genre:"Song of the year",work_name:"Raha",link:"http://blablablab.com"}],d=r("");r("");const b=r(""),k=r(""),A=r({}),y=r(!1),Q=r(!1),n=r(""),i=r(""),u=r(""),x=F(),E=async()=>{const l=d.value==="active"?"closed":"active";await $(l)},$=async l=>{try{const e=await h.post(`/activateEvent/${x.params.event_id}`,{status:l});console.log(e),d.value=l}catch(e){console.error("Error sending API:",e)}},P=async()=>{try{const l=await h.get(`/events/${x.params.event_id}`);d.value=l.data.data.event_status}catch(l){console.log(l)}},C=(l,e)=>{Q.value=!0,e==="l"?n.value=l:e==="b"?i.value=l:e==="d"&&(u.value=l),A.value={events_data:n.value,genre_data:i.value,category_data:u.value}},L=()=>{console.log(A.value)};return I(()=>{P()}),(l,e)=>(m(),v(j,{padding:""},{default:a(()=>[s("div",G,[o(f,{onClick:E,class:"text-capitalize",flat:"",color:d.value==="active"?"negative":"primary"},{default:a(()=>[p(c(d.value==="active"?"Close Event":"Activate Event"),1)]),_:1},8,["color"]),o(w,{class:"col-xs-12 col-sm-6 col-md-3",flat:"",bordered:""},{default:a(()=>[o(S,{"bg-color":"white",label:"Genres",options:["Bongo Fleva","Singeli"],borderless:"",modelValue:b.value,"onUpdate:modelValue":[e[0]||(e[0]=t=>b.value=t),e[1]||(e[1]=t=>C(b.value,"b"))]},null,8,["modelValue"])]),_:1}),o(w,{class:"col-xs-12 col-sm-6 col-md-3",flat:"",bordered:""},{default:a(()=>[o(S,{"bg-color":"white",standout:"",label:"Category",options:["Best song of the year","Best artist of the year"],borderless:"",modelValue:k.value,"onUpdate:modelValue":[e[2]||(e[2]=t=>k.value=t),e[3]||(e[3]=t=>C(k.value,"d"))]},null,8,["modelValue"])]),_:1})]),s("div",O,[Q.value?(m(),v(M,{key:0,"inline-actions":"",class:"q-ml-xs q-mt-md bordered"},{action:a(()=>[o(f,{class:"text-capitalize",color:"primary",label:"Apply Filter",onClick:e[7]||(e[7]=t=>L())})]),default:a(()=>[s("div",null,[n.value!=""?(m(),v(_,{key:0,removable:"",modelValue:n.value,"onUpdate:modelValue":e[4]||(e[4]=t=>n.value=t),color:"primary","text-color":"white"},{default:a(()=>[p(c(n.value),1)]),_:1},8,["modelValue"])):g("",!0),i.value!=""?(m(),v(_,{key:1,removable:"",modelValue:i.value,"onUpdate:modelValue":e[5]||(e[5]=t=>i.value=t),color:"primary","text-color":"white"},{default:a(()=>[p(c(i.value),1)]),_:1},8,["modelValue"])):g("",!0),u.value!=""?(m(),v(_,{key:2,removable:"",modelValue:u.value,"onUpdate:modelValue":e[6]||(e[6]=t=>u.value=t),color:"primary","text-color":"white"},{default:a(()=>[p(c(u.value),1)]),_:1},8,["modelValue"])):g("",!0)])]),_:1})):g("",!0)]),s("div",H,[o(Y,{bordered:"",flat:"",rows:z,columns:N.value,"row-key":"name",filter:l.filter,class:"q-mt-md"},{"top-right":a(()=>[o(f,{class:"text-capitalize",icon:"mdi-music-note-plus",color:"primary",onClick:e[8]||(e[8]=t=>{y.value=!0})},{default:a(()=>[p(" Add Nomenees ")]),_:1})]),"top-left":a(()=>[J]),"body-cell-link":a(t=>[o(T,null,{default:a(()=>[s("a",{href:t.row.link,target:"_blank"},c(t.row.link),9,K)]),_:2},1024)]),_:1},8,["columns","filter"])]),o(R,{modelValue:y.value,"onUpdate:modelValue":e[14]||(e[14]=t=>y.value=t),position:"right"},{default:a(()=>[o(w,{style:{width:"500px","max-width":"80vw",height:"100vh"}},{default:a(()=>[o(q,null,{default:a(()=>[W]),_:1}),o(q,{class:"q-pt-none q-gutter-y-md"},{default:a(()=>[o(V,{modelValue:l.artwork_name,"onUpdate:modelValue":e[9]||(e[9]=t=>l.artwork_name=t),dense:"",outlined:"",label:"Artist Name"},null,8,["modelValue"]),o(V,{modelValue:l.artwork_name,"onUpdate:modelValue":e[10]||(e[10]=t=>l.artwork_name=t),dense:"",outlined:"",label:"Artwork Name"},null,8,["modelValue"]),o(V,{modelValue:l.artwork_link,"onUpdate:modelValue":e[11]||(e[11]=t=>l.artwork_link=t),dense:"",outlined:"",label:"Artwork Link"},null,8,["modelValue"])]),_:1}),o(D,null,{default:a(()=>[B(o(f,{flat:"",outline:"",color:"negative",label:"Cancel",onClick:e[12]||(e[12]=t=>l.declineLoans()),class:"q-mx-sm text-capitalize"},null,512),[[U]]),B(o(f,{color:"primary",label:"Submit",onClick:e[13]||(e[13]=t=>l.approveLoans()),class:"q-mx-sm text-capitalize"},null,512),[[U]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}};export{ge as default};