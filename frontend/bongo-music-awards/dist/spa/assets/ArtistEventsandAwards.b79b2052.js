import{Q as c}from"./QBadge.97ccef41.js";import{Q as u}from"./QTd.c320ee66.js";import{bb as g,i as s,j as w,o as n,c as r,w as t,A as x,a as l,aM as p,m as Q,x as y,Q as h,n as i}from"./index.cce3915b.js";import{Q as k}from"./QTable.f524ade3.js";import{Q as V}from"./QPage.76a46a00.js";import"./QList.f3f9416a.js";import"./QSelect.9cf437ff.js";import"./QChip.729eece9.js";import"./QItem.a90bd647.js";import"./QItemLabel.9e65cb53.js";import"./QMenu.e874daef.js";import"./position-engine.0cde2c40.js";import"./selection.109ccf0b.js";import"./rtl.b51694b1.js";import"./format.3e32b8d9.js";import"./use-fullscreen.fa37bee6.js";const q=i("div",{class:"row items-center q-mt-xl"},[i("p",{class:"font-body-small q-pl-md col"},[i("span",{class:"text-weight-bolder text-capitalize text-h6"},"events and awards")])],-1),H={__name:"ArtistEventsandAwards",setup(B){const v=g(),o=s(""),f=s([{name:"event_name",label:"Event Name",align:"left",field:e=>e.event_title,sortable:!0},{name:"event_number",label:"Event Number",align:"left",field:e=>e.event_number,sortable:!0},{name:"date",label:"Date",align:"left",field:e=>e.event_date,sortable:!0},{name:"status",label:"Status",field:e=>e.event_status,align:"left"},{name:"action",label:"action",align:"left"}]),m=s([]),b=async()=>{try{const e=await x.get("/events");console.log(e.data.data),m.value=e.data.data}catch(e){console.log(e)}},_=e=>v.push(`/artist/event/${e}`);return w(()=>{b()}),(e,d)=>(n(),r(V,{padding:""},{default:t(()=>[q,l(k,{bordered:"",rows:m.value,columns:f.value,"row-key":"name",filter:o.value,class:"q-mt-md"},{"body-cell-status":t(a=>[l(u,null,{default:t(()=>[a.row.event_status==="closed"?(n(),r(c,{key:0,dense:"",color:"red",size:"10px",label:"closed",class:"q-ma-xs"})):p("",!0),a.row.event_status==="active"?(n(),r(c,{key:1,dense:"",color:"green",size:"10px",label:"Active",class:"q-ma-xs"})):p("",!0)]),_:2},1024)]),"body-cell-action":t(a=>[l(u,null,{default:t(()=>[l(Q,{class:"",icon:"mdi-eye",flat:"",dense:"",color:"primary",size:"10px",onClick:N=>_(a.row.event_id)},null,8,["onClick"])]),_:2},1024)]),"top-right":t(()=>[l(y,{outlined:"",dense:"",debounce:"300",modelValue:o.value,"onUpdate:modelValue":d[0]||(d[0]=a=>o.value=a),placeholder:"Search"},{append:t(()=>[l(h,{name:"mdi-magnify"})]),_:1},8,["modelValue"])]),_:1},8,["rows","columns","filter"])]),_:1}))}};export{H as default};