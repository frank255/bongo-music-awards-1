import{Q as m}from"./QBadge.9ed5d79d.js";import{Q as i}from"./QTd.ca3dc957.js";import{i as p,o,c as l,w as t,a,aM as d,m as f,x as b,Q as v,n}from"./index.efa01b05.js";import{Q as _}from"./QTable.c89e77de.js";import{Q as g}from"./QPage.4a1349b4.js";import"./QList.562d1e83.js";import"./QSelect.ad46de18.js";import"./QChip.2e6b4c07.js";import"./QItem.2c90671b.js";import"./QItemLabel.0159edf1.js";import"./QMenu.d4c2ee07.js";import"./position-engine.d1710d5a.js";import"./selection.4ec88403.js";import"./rtl.b51694b1.js";import"./format.3e32b8d9.js";import"./use-fullscreen.601433c7.js";const w=n("div",{class:"row items-center q-mt-xl"},[n("p",{class:"font-body-small q-pl-md col"},[n("span",{class:"text-weight-bolder text-capitalize text-h6"},"events and awards")])],-1),D={__name:"ArtistEventsandAwards",setup(Q){const c=p([{name:"event_name",label:"Event Name",align:"left",field:e=>e.event_name,sortable:!0},{name:"event_number",label:"Event Number",align:"left",field:e=>e.event_number,sortable:!0},{name:"date",label:"Date",align:"left",field:e=>e.date,sortable:!0},{name:"status",label:"Status",align:"left"},{name:"action",label:"action",align:"left"}]),u=[{date:"20/10/2022",event_name:"Bongo Music Awards 2022",event_number:"BM22",status:"active"},{date:"20/10/2022",event_name:"Bongo Music Awards 2022",event_number:"BM22",status:"closed"},{date:"20/10/2022",event_name:"Bongo Music Awards 2022",event_number:"BM22",status:"active"}];return(e,r)=>(o(),l(g,{padding:""},{default:t(()=>[w,a(_,{bordered:"",rows:u,columns:c.value,"row-key":"name",filter:e.filter,class:"q-mt-md"},{"body-cell-status":t(s=>[a(i,null,{default:t(()=>[s.row.status==="closed"?(o(),l(m,{key:0,dense:"",color:"red",size:"10px",label:"closed",class:"q-ma-xs"})):d("",!0),s.row.status==="active"?(o(),l(m,{key:1,dense:"",color:"green",size:"10px",label:"Active",class:"q-ma-xs"})):d("",!0)]),_:2},1024)]),"body-cell-action":t(()=>[a(i,null,{default:t(()=>[a(f,{class:"",icon:"mdi-eye",flat:"",dense:"",color:"primary",size:"10px",to:"/artist/awardsnominations"})]),_:1})]),"top-right":t(()=>[a(b,{outlined:"",dense:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":r[0]||(r[0]=s=>e.filter=s),placeholder:"Search"},{append:t(()=>[a(v,{name:"mdi-magnify"})]),_:1},8,["modelValue"])]),_:1},8,["columns","filter"])]),_:1}))}};export{D as default};
