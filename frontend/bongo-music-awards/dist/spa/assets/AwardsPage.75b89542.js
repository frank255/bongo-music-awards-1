import{B as v,i as u,J as b,j as Y,o,c as y,w as n,n as a,bl as p,a as f,e as g,r as w,F as h,bm as B,m as _,s as Q,t as A}from"./index.efa01b05.js";import{u as k,a as q,b as T,Q as j}from"./QTabs.294aff3f.js";import{Q as C}from"./QImg.e2dc6975.js";import{Q as F}from"./QPage.4a1349b4.js";import"./QResizeObserver.6ca608c1.js";import"./rtl.b51694b1.js";var S=v({name:"QTab",props:k,emits:q,setup(m,{slots:c,emit:r}){const{renderTab:i}=T(m,c,r);return()=>i("div")}}),M="/assets/award.48a618eb.jpeg";const N=a("div",{class:"text-h5 text-bold flex justify-center"}," Bongo Music Awards History ",-1),V={class:"flex justify-center"},$={class:"text-subtitle1 absolute-bottom text-center"},z={class:"text-bold"},L={__name:"AwardsPage",setup(m){const c=[{id:1,year:2021,category:"Best Female Artist of the Year",winner:"Artist 1"},{id:2,year:2021,category:"Best Video of the Year",winner:"Artist 2"},{id:3,year:2021,category:"Best Male Artist of the Year",winner:"Artist 3"},{id:4,year:2021,category:"Best New Artist of the Year",winner:"Artist 4"},{id:5,year:2021,category:"Song of the Year",winner:"Artist 5"},{id:6,year:2022,category:"Best Female Artist of the Year",winner:"Artist 2022"},{id:7,year:2022,category:"Best Video of the Year",winner:"Artist 2022"},{id:8,year:2022,category:"Best Male Artist of the Year",winner:"Artist 2022"},{id:9,year:2022,category:"Best New Artist of the Year",winner:"Artist 2022"},{id:10,year:2022,category:"Song of the Year",winner:"Artist 2022"},{id:11,year:2023,category:"Best Female Artist of the Year",winner:"Artist 2023"},{id:12,year:2023,category:"Best Video of the Year",winner:"Artist 2023"},{id:13,year:2023,category:"Best Male Artist of the Year",winner:"Artist 2023"},{id:14,year:2023,category:"Best New Artist of the Year",winner:"Artist 2023"},{id:15,year:2023,category:"Song of the Year",winner:"Artist 2023"}],r=u(null),i=u([]),d=u([]),x=t=>{r.value=t};return b(r,t=>{t!==null?d.value=c.filter(s=>s.year===t):d.value=[]}),Y(()=>{const t=new Date().getFullYear(),s=2021,e=[];for(let l=t;l>=s;l--)e.push(l);i.value=e,r.value||(r.value=i.value[0])}),(t,s)=>(o(),y(F,{padding:""},{default:n(()=>[N,a("div",V,[a("div",{class:"q-mt-md",style:p(t.$q.platform.is.mobile?"max-width: 300px;":"max-width: 450px;")},[f(j,{value:r.value,"onUpdate:value":s[0]||(s[0]=e=>r.value=e),"outside-arrows":"","mobile-arrows":"","indicator-color":"transparent",class:"text-white"},{default:n(()=>[(o(!0),g(h,null,w(i.value,e=>(o(),y(S,{key:e},{default:n(()=>[f(_,{size:"13px",flat:"",class:"text-white bg-primary q-mx-xs",label:e.toString(),onClick:l=>x(e)},null,8,["label","onClick"])]),_:2},1024))),128))]),_:1},8,["value"])],4)]),a("div",{class:B(t.$q.platform.is.desktop?"flex justify-center q-gutter-x-xl":"flex justify-center")},[(o(!0),g(h,null,w(d.value,e=>(o(),y(Q,{key:e.id,class:"q-mt-xl",style:p(t.$q.platform.is.desktop?"min-width: 200px; cursor: pointer":"width: 300px;height:200px; cursor: pointer;")},{default:n(()=>[f(C,{src:M},{default:n(()=>[a("div",$,[a("p",null,A(e.category),1),a("p",z,A(e.winner),1)])]),_:2},1024)]),_:2},1032,["style"]))),128))],2)]),_:1}))}};export{L as default};
