import{d as D,r as p,v as C,c as n,f as V,w as t,_ as N,e as h,i as K,h as s,j as _,K as F,M as I,a as M,x as O,L as q,g as S,N as j,m as y,F as $,y as z,t as P,k as L,p as G,l as H}from"./index.40cae997.js";import{_ as Y}from"./deepeye-logo.736eea97.js";import{d as B}from"./format.3336b0b3.js";const J={username:{title:"Username",content:"deepeye"},role:{title:"Role / Level",content:"0"},apiKey:{title:"APIKEY",content:""},registerAt:{title:"Register At",content:"2023-12-01"}},Q=[{title:"IP",align:"left",ellipsis:!0,colKey:"loginIp",width:200},{title:"Region",align:"left",ellipsis:!0,colKey:"region",width:300},{title:"Time",align:"center",colKey:"createdAt",width:200}],W=D({__name:"DialogForm",props:{visible:{type:Boolean,default:!1},data:{type:Object,default:()=>({})}},emits:["update:visible"],setup(m,{emit:x}){const d={oldPass:"",newPass:""},f=m,u=p(!1),a=p(f.data),R=async({validateResult:r,firstError:o})=>{if(o)I.warning(o);else{try{await F(a.value.oldPass,a.value.newPass),I.success("Reset success")}catch(e){I.error(e.message)}u.value=!1}},k=()=>{u.value=!1,a.value={...d}},U=x;C(()=>u.value,r=>{U("update:visible",r)}),C(()=>f.visible,r=>{u.value=r}),C(()=>f.data,r=>{a.value=r});const w={oldPass:[{required:!0,message:"Old password is required",type:"error"}],newPass:[{required:!0,message:"New password is required",type:"error"}]};return(r,o)=>{const e=n("t-input"),i=n("t-form-item"),g=n("t-button"),v=n("t-form"),b=n("t-dialog");return h(),V(b,{visible:u.value,"onUpdate:visible":o[2]||(o[2]=c=>u.value=c),header:"ResetPass",width:580,footer:!1},{body:t(()=>[K(" \u8868\u5355\u5185\u5BB9 "),s(v,{ref:"form",data:a.value,rules:w,"label-width":150,onSubmit:R},{default:t(()=>[s(i,{label:"Old Password",name:"oldPass"},{default:t(()=>[s(e,{modelValue:a.value.oldPass,"onUpdate:modelValue":o[0]||(o[0]=c=>a.value.oldPass=c),style:{width:"380px"},placeholder:"Please input old password"},null,8,["modelValue"])]),_:1}),s(i,{label:"New Password",name:"newPass"},{default:t(()=>[s(e,{modelValue:a.value.newPass,"onUpdate:modelValue":o[1]||(o[1]=c=>a.value.newPass=c),style:{width:"380px"},placeholder:"Please input new password"},null,8,["modelValue"])]),_:1}),s(i,{style:{float:"right"}},{default:t(()=>[s(g,{variant:"outline",onClick:k},{default:t(()=>[_("Cancel")]),_:1}),s(g,{theme:"primary",type:"submit"},{default:t(()=>[_("Submit")]),_:1})]),_:1})]),_:1},8,["data"])]),_:1},8,["visible"])}}});var X=N(W,[["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/user/user/components/DialogForm.vue"]]);const T=m=>(G("data-v-0164a47e"),m=m(),H(),m),Z={class:"user-left-greeting"},ee=T(()=>y("div",{class:"user-left-title"},"DeepEye User Center",-1)),te=T(()=>y("img",{src:Y,class:"logo"},null,-1)),se={class:"contract-title"},ae={class:"contract-detail",style:{display:"flex","align-items":"center"}},oe={name:"UserIndex"},le=D({...oe,setup(m){const x=M(),d=p(J);p([]);const f=p([]),u=!1,a=p(!1),R=p({}),k=async()=>{try{const e=await j();d.value.username.content=e.user.username,d.value.role.content=U(e.user.role),d.value.apiKey.content=e.user.apiKey,d.value.registerAt.content=B(e.user.registerAt),f.value=e.loginHistory}catch(e){console.log("e: ",e),e.response.status===401?w():I.error(e.message)}};function U(e){return e==1?"PREMIUM":e==2?"ELITE":e==3?"INVESTOR":"BASIC"}O(()=>{q().token||w(),k()});function w(){const e="/login";x.push(e)}function r(){}const o=async()=>{w()};return(e,i)=>{const g=n("t-button"),v=n("t-col"),b=n("t-row"),c=n("t-card"),E=n("t-table");return h(),S("div",null,[s(b,{gutter:[24,24]},{default:t(()=>[s(v,{flex:3},{default:t(()=>[y("div",Z,[s(v,{flex:3},{default:t(()=>[ee,s(g,{theme:"primary",shape:"round",type:"submit",onClick:o},{default:t(()=>[_(" Logout ")]),_:1}),s(g,{theme:"primary",shape:"round",onClick:i[0]||(i[0]=l=>a.value=!0)},{default:t(()=>[_(" Reset Password ")]),_:1})]),_:1}),s(v,{flex:1},{default:t(()=>[te]),_:1})]),s(c,{class:"user-info-list",title:"Basic Info"},{default:t(()=>[s(b,{class:"content",justify:"space-between"},{default:t(()=>[(h(!0),S($,null,z(d.value,(l,A)=>(h(),V(v,{key:A,class:"contract"},{default:t(()=>[y("div",se,P(l.title),1),y("div",ae,[_(P(l.content)+" ",1),A=="role"&&l.content!="VIP"?(h(),V(g,{key:0,style:{margin:"auto","margin-left":"16px"},theme:"primary",shape:"rectangle",size:"small",onClick:r,disabled:u},{default:t(()=>[_(" Upgrade ")]),_:1})):K("v-if",!0)])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1}),s(X,{visible:a.value,"onUpdate:visible":i[1]||(i[1]=l=>a.value=l),data:R.value},null,8,["visible","data"]),s(b,{gutter:16,class:"row-container"},{default:t(()=>[s(c,{title:"Recent Login Records",class:"dashboard-rank-card",bordered:!1},{actions:t(()=>[]),default:t(()=>[s(E,{data:f.value,columns:L(Q),"row-key":"colKey"},{createdAt:t(({row:l})=>[_(P(L(B)(l.createdAt)),1)]),region:t(({row:l})=>[y("span",null,P(l.loginLocation),1)]),_:1},8,["data","columns"])]),_:1})]),_:1})])}}});var ue=N(le,[["__scopeId","data-v-0164a47e"],["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/user/user/index.vue"]]);export{ue as default};
