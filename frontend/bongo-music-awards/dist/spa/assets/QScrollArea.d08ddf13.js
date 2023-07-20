import{B as $,C as i,D as u,E as N,ab as U,ac as ne,i as h,ad as re,ae as ie,J as T,j as ue,Q as se,m as O,M as J,W as ce,$ as ve,a1 as de,af as he,ag as j,ah as be,ai as fe,aj as I,K as me,ak as ze,g as L}from"./index.efa01b05.js";import{Q as Se}from"./QMenu.d4c2ee07.js";import{Q as E}from"./QResizeObserver.6ca608c1.js";import{b as ge}from"./QLayout.8b926842.js";import{T as x}from"./QDrawer.7f4719ed.js";import{b as M}from"./format.3e32b8d9.js";var ye=$({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:b}){const s=i(()=>{const v=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(c=>e[c]===!0).map(c=>`q-btn-group--${c}`).join(" ");return`q-btn-group row no-wrap${v.length!==0?" "+v:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>u("div",{class:s.value},N(b.default))}});const we=Object.keys(U),qe=e=>we.reduce((b,s)=>{const v=e[s];return v!==void 0&&(b[s]=v),b},{});var De=$({name:"QBtnDropdown",props:{...U,...ne,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:b,emit:s}){const{proxy:v}=J(),c=h(e.modelValue),d=h(null),n=re(),t=i(()=>{const o={"aria-expanded":c.value===!0?"true":"false","aria-haspopup":"true","aria-controls":n,"aria-label":e.toggleAriaLabel||v.$q.lang.label[c.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(o["aria-disabled"]="true"),o}),m=i(()=>"q-btn-dropdown__arrow"+(c.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),w=i(()=>ie(e)),z=i(()=>qe(e));T(()=>e.modelValue,o=>{d.value!==null&&d.value[o?"show":"hide"]()}),T(()=>e.split,g);function q(o){c.value=!0,s("beforeShow",o)}function f(o){s("show",o),s("update:modelValue",!0)}function P(o){c.value=!1,s("beforeHide",o)}function D(o){s("hide",o),s("update:modelValue",!1)}function H(o){s("click",o)}function p(o){ce(o),g(),s("click",o)}function B(o){d.value!==null&&d.value.toggle(o)}function y(o){d.value!==null&&d.value.show(o)}function g(o){d.value!==null&&d.value.hide(o)}return Object.assign(v,{show:y,hide:g,toggle:B}),ue(()=>{e.modelValue===!0&&y()}),()=>{const o=[u(se,{class:m.value,name:e.dropdownIcon||v.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&o.push(u(Se,{ref:d,id:n,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:q,onShow:f,onBeforeHide:P,onHide:D},b.default)),e.split===!1?u(O,{class:"q-btn-dropdown q-btn-dropdown--simple",...z.value,...t.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:H},{default:()=>N(b.label,[]).concat(o),loading:b.loading}):u(ye,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...w.value,glossy:e.glossy,stretch:e.stretch},()=>[u(O,{class:"q-btn-dropdown--current",...z.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:p},{default:b.label,loading:b.loading}),u(O,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...t.value,...w.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>o)])}}});const F=["vertical","horizontal"],Q={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},W={prevent:!0,mouse:!0,mouseAllDir:!0},G=e=>e>=250?50:Math.ceil(e/5);var He=$({name:"QScrollArea",props:{...ve,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:b,emit:s}){const v=h(!1),c=h(!1),d=h(!1),n={vertical:h(0),horizontal:h(0)},t={vertical:{ref:h(null),position:h(0),size:h(0)},horizontal:{ref:h(null),position:h(0),size:h(0)}},{proxy:m}=J(),w=de(e,m.$q);let z=null,q;const f=h(null),P=i(()=>"q-scrollarea"+(w.value===!0?" q-scrollarea--dark":""));t.vertical.percentage=i(()=>{const l=t.vertical.size.value-n.vertical.value;if(l<=0)return 0;const a=M(t.vertical.position.value/l,0,1);return Math.round(a*1e4)/1e4}),t.vertical.thumbHidden=i(()=>(e.visible===null?d.value:e.visible)!==!0&&v.value===!1&&c.value===!1||t.vertical.size.value<=n.vertical.value+1),t.vertical.thumbStart=i(()=>t.vertical.percentage.value*(n.vertical.value-t.vertical.thumbSize.value)),t.vertical.thumbSize=i(()=>Math.round(M(n.vertical.value*n.vertical.value/t.vertical.size.value,G(n.vertical.value),n.vertical.value))),t.vertical.style=i(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${t.vertical.thumbStart.value}px`,height:`${t.vertical.thumbSize.value}px`})),t.vertical.thumbClass=i(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.vertical.barClass=i(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(t.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),t.horizontal.percentage=i(()=>{const l=t.horizontal.size.value-n.horizontal.value;if(l<=0)return 0;const a=M(Math.abs(t.horizontal.position.value)/l,0,1);return Math.round(a*1e4)/1e4}),t.horizontal.thumbHidden=i(()=>(e.visible===null?d.value:e.visible)!==!0&&v.value===!1&&c.value===!1||t.horizontal.size.value<=n.horizontal.value+1),t.horizontal.thumbStart=i(()=>t.horizontal.percentage.value*(n.horizontal.value-t.horizontal.thumbSize.value)),t.horizontal.thumbSize=i(()=>Math.round(M(n.horizontal.value*n.horizontal.value/t.horizontal.size.value,G(n.horizontal.value),n.horizontal.value))),t.horizontal.style=i(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[m.$q.lang.rtl===!0?"right":"left"]:`${t.horizontal.thumbStart.value}px`,width:`${t.horizontal.thumbSize.value}px`})),t.horizontal.thumbClass=i(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),t.horizontal.barClass=i(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(t.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const D=i(()=>t.vertical.thumbHidden.value===!0&&t.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),H=[[x,l=>{k(l,"vertical")},void 0,{vertical:!0,...W}]],p=[[x,l=>{k(l,"horizontal")},void 0,{horizontal:!0,...W}]];function B(){const l={};return F.forEach(a=>{const r=t[a];l[a+"Position"]=r.position.value,l[a+"Percentage"]=r.percentage.value,l[a+"Size"]=r.size.value,l[a+"ContainerSize"]=n[a].value}),l}const y=he(()=>{const l=B();l.ref=m,s("scroll",l)},0);function g(l,a,r){if(F.includes(l)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(l==="vertical"?I:j)(f.value,a,r)}function o({height:l,width:a}){let r=!1;n.vertical.value!==l&&(n.vertical.value=l,r=!0),n.horizontal.value!==a&&(n.horizontal.value=a,r=!0),r===!0&&_()}function K({position:l}){let a=!1;t.vertical.position.value!==l.top&&(t.vertical.position.value=l.top,a=!0),t.horizontal.position.value!==l.left&&(t.horizontal.position.value=l.left,a=!0),a===!0&&_()}function X({height:l,width:a}){t.horizontal.size.value!==a&&(t.horizontal.size.value=a,_()),t.vertical.size.value!==l&&(t.vertical.size.value=l,_())}function k(l,a){const r=t[a];if(l.isFirst===!0){if(r.thumbHidden.value===!0)return;q=r.position.value,c.value=!0}else if(c.value!==!0)return;l.isFinal===!0&&(c.value=!1);const S=Q[a],C=n[a].value,le=(r.size.value-C)/(C-r.thumbSize.value),ae=l.distance[S.dist],oe=q+(l.direction===S.dir?1:-1)*ae*le;R(oe,a)}function V(l,a){const r=t[a];if(r.thumbHidden.value!==!0){const S=l[Q[a].offset];if(S<r.thumbStart.value||S>r.thumbStart.value+r.thumbSize.value){const C=S-r.thumbSize.value/2;R(C/n[a].value*r.size.value,a)}r.ref.value!==null&&r.ref.value.dispatchEvent(new MouseEvent(l.type,l))}}function Y(l){V(l,"vertical")}function Z(l){V(l,"horizontal")}function _(){v.value=!0,z!==null&&clearTimeout(z),z=setTimeout(()=>{z=null,v.value=!1},e.delay),e.onScroll!==void 0&&y()}function R(l,a){f.value[Q[a].scroll]=l}function ee(){d.value=!0}function te(){d.value=!1}let A=null;return T(()=>m.$q.lang.rtl,l=>{f.value!==null&&j(f.value,Math.abs(t.horizontal.position.value)*(l===!0?-1:1))}),be(()=>{A={top:t.vertical.position.value,left:t.horizontal.position.value}}),fe(()=>{if(A===null)return;const l=f.value;l!==null&&(j(l,A.left),I(l,A.top))}),me(y.cancel),Object.assign(m,{getScrollTarget:()=>f.value,getScroll:B,getScrollPosition:()=>({top:t.vertical.position.value,left:t.horizontal.position.value}),getScrollPercentage:()=>({top:t.vertical.percentage.value,left:t.horizontal.percentage.value}),setScrollPosition:g,setScrollPercentage(l,a,r){g(l,a*(t[l].size.value-n[l].value)*(l==="horizontal"&&m.$q.lang.rtl===!0?-1:1),r)}}),()=>u("div",{class:P.value,onMouseenter:ee,onMouseleave:te},[u("div",{ref:f,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[u("div",{class:"q-scrollarea__content absolute",style:D.value},ze(b.default,[u(E,{debounce:0,onResize:X})])),u(ge,{axis:"both",onScroll:K})]),u(E,{debounce:0,onResize:o}),u("div",{class:t.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:Y}),u("div",{class:t.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:Z}),L(u("div",{ref:t.vertical.ref,class:t.vertical.thumbClass.value,style:t.vertical.style.value,"aria-hidden":"true"}),H),L(u("div",{ref:t.horizontal.ref,class:t.horizontal.thumbClass.value,style:t.horizontal.style.value,"aria-hidden":"true"}),p)])}});export{He as Q,De as a};
