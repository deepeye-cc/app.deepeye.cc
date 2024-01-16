import{d as S,r as _,v as C,c as n,f as V,w as t,_ as B,e as b,i as K,h as s,j as m,K as F,M as x,a as O,x as q,L as E,g as D,N as j,O as M,m as v,F as $,y as z,t as P,k as L,p as G,l as H}from"./index.4087b606.js";import{_ as Y}from"./deepeye-logo.736eea97.js";import{d as N}from"./format.a9924a79.js";const J={username:{title:"Username",content:"deepeye"},role:{title:"Role / Level",content:"0"},apiKey:{title:"APIKEY",content:""},registerAt:{title:"Register At",content:"2023-12-01"}},Q=[{title:"IP",align:"left",ellipsis:!0,colKey:"loginIp",width:200},{title:"Region",align:"left",ellipsis:!0,colKey:"region",width:300},{title:"Time",align:"center",colKey:"createdAt",width:200}],W=S({__name:"DialogForm",props:{visible:{type:Boolean,default:!1},data:{type:Object,default:()=>({})}},emits:["update:visible"],setup(f,{emit:k}){const u={oldPass:"",newPass:""},g=f,i=_(!1),a=_(g.data),I=async({validateResult:r,firstError:e})=>{if(e)x.warning(e);else{try{await F(a.value.oldPass,a.value.newPass),x.success("Reset success")}catch(o){x.error(o.message)}i.value=!1}},R=()=>{i.value=!1,a.value={...u}},y=k;C(()=>i.value,r=>{y("update:visible",r)}),C(()=>g.visible,r=>{i.value=r}),C(()=>g.data,r=>{a.value=r});const U={oldPass:[{required:!0,message:"Old password is required",type:"error"}],newPass:[{required:!0,message:"New password is required",type:"error"}]};return(r,e)=>{const o=n("t-input"),c=n("t-form-item"),d=n("t-button"),w=n("t-form"),h=n("t-dialog");return b(),V(h,{visible:i.value,"onUpdate:visible":e[2]||(e[2]=p=>i.value=p),header:"ResetPass",width:580,footer:!1},{body:t(()=>[K(" \u8868\u5355\u5185\u5BB9 "),s(w,{ref:"form",data:a.value,rules:U,"label-width":150,onSubmit:I},{default:t(()=>[s(c,{label:"Old Password",name:"oldPass"},{default:t(()=>[s(o,{modelValue:a.value.oldPass,"onUpdate:modelValue":e[0]||(e[0]=p=>a.value.oldPass=p),style:{width:"380px"},placeholder:"Please input old password"},null,8,["modelValue"])]),_:1}),s(c,{label:"New Password",name:"newPass"},{default:t(()=>[s(o,{modelValue:a.value.newPass,"onUpdate:modelValue":e[1]||(e[1]=p=>a.value.newPass=p),style:{width:"380px"},placeholder:"Please input new password"},null,8,["modelValue"])]),_:1}),s(c,{style:{float:"right"}},{default:t(()=>[s(d,{variant:"outline",onClick:R},{default:t(()=>[m("Cancel")]),_:1}),s(d,{theme:"primary",type:"submit"},{default:t(()=>[m("Submit")]),_:1})]),_:1})]),_:1},8,["data"])]),_:1},8,["visible"])}}});var X=B(W,[["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/user/user/components/DialogForm.vue"]]);const T=f=>(G("data-v-0164a47e"),f=f(),H(),f),Z={class:"user-left-greeting"},ee=T(()=>v("div",{class:"user-left-title"},"DeepEye User Center",-1)),te=T(()=>v("img",{src:Y,class:"logo"},null,-1)),se={class:"contract-title"},ae={class:"contract-detail",style:{display:"flex","align-items":"center"}},oe={name:"UserIndex"},le=S({...oe,setup(f){const k=O(),u=_(J);_([]);const g=_([]),i=!1,a=_(!1),I=_({}),R=async()=>{try{const e=await j();u.value.username.content=e.user.username,u.value.role.content=M(e.user.role),u.value.apiKey.content=e.user.apiKey,u.value.registerAt.content=N(e.user.registerAt),g.value=e.loginHistory}catch(e){console.log("e: ",e),e.response.status===401?y():x.error(e.message)}};q(()=>{E().token||y(),R()});function y(){const e="/login";k.push(e)}function U(){}const r=async()=>{y()};return(e,o)=>{const c=n("t-button"),d=n("t-col"),w=n("t-row"),h=n("t-card"),p=n("t-table");return b(),D("div",null,[s(w,{gutter:[24,24]},{default:t(()=>[s(d,{flex:3},{default:t(()=>[v("div",Z,[s(d,{flex:3},{default:t(()=>[ee,s(c,{theme:"primary",shape:"round",type:"submit",onClick:r},{default:t(()=>[m(" Logout ")]),_:1}),s(c,{theme:"primary",shape:"round",onClick:o[0]||(o[0]=l=>a.value=!0)},{default:t(()=>[m(" Reset Password ")]),_:1})]),_:1}),s(d,{flex:1},{default:t(()=>[te]),_:1})]),s(h,{class:"user-info-list",title:"Basic Info"},{default:t(()=>[s(w,{class:"content",justify:"space-between"},{default:t(()=>[(b(!0),D($,null,z(u.value,(l,A)=>(b(),V(d,{key:A,class:"contract"},{default:t(()=>[v("div",se,P(l.title),1),v("div",ae,[m(P(l.content)+" ",1),A=="role"&&l.content!="VIP"?(b(),V(c,{key:0,style:{margin:"auto","margin-left":"16px"},theme:"primary",shape:"rectangle",size:"small",onClick:U,disabled:i},{default:t(()=>[m(" Upgrade ")]),_:1})):K("v-if",!0)])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1}),s(X,{visible:a.value,"onUpdate:visible":o[1]||(o[1]=l=>a.value=l),data:I.value},null,8,["visible","data"]),s(w,{gutter:16,class:"row-container"},{default:t(()=>[s(h,{title:"Recent Login Records",class:"dashboard-rank-card",bordered:!1},{actions:t(()=>[]),default:t(()=>[s(p,{data:g.value,columns:L(Q),"row-key":"colKey"},{createdAt:t(({row:l})=>[m(P(L(N)(l.createdAt)),1)]),region:t(({row:l})=>[v("span",null,P(l.loginLocation),1)]),_:1},8,["data","columns"])]),_:1})]),_:1})])}}});var ue=B(le,[["__scopeId","data-v-0164a47e"],["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/user/user/index.vue"]]);export{ue as default};
