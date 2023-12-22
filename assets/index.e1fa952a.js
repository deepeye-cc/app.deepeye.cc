import{o as H,r as _,d as U,u as M,a as O,b as W,c as u,e as p,f as h,w as a,g as T,h as t,F as j,i as I,j as C,n as z,M as g,_ as E,t as S,k as L,R as Q,S as Y,p as P,l as q,m as c,T as G}from"./index.caf5f627.js";import{i as J}from"./format.b40c70ff.js";import{_ as K}from"./deepeye-logo.736eea97.js";const N=(r=60)=>{let n;H(()=>{clearInterval(n)});const l=_(0);return[l,()=>{l.value=r,n=setInterval(()=>{l.value>0?l.value-=1:(clearInterval(n),l.value=0)},1e3)}]};const X=U({__name:"Login",setup(r){const n=M(),l={username:"",passwd:""},b={username:[{required:!0,message:"Username/Email Required",type:"error"}],passwd:[{required:!0,message:"Password Required",type:"error"}]},i=_("password"),V=_(),s=_({...l}),m=_(!1);N();const k=O(),$=W(),D=async({validateResult:y})=>{if(y===!0)try{await n.login(s.value),g.success("Login success"),A()}catch(o){console.log(o);let e="";o.code=="ERR_BAD_REQUEST"?e="Wrong username or password.":o.code=="ERR_BAD_RESPONSE"?e=o.response.data.error:e=o.message,g.error(e)}};function A(){const y=$.query.redirect,o=y?decodeURIComponent(y):"/user/index";k.push(o)}return(y,o)=>{const e=u("t-icon"),w=u("t-input"),f=u("t-form-item"),v=u("t-button"),R=u("t-form");return p(),h(R,{ref_key:"form",ref:V,class:z(["item-container",`login-${i.value}`]),data:s.value,rules:b,"label-width":"0",onSubmit:D},{default:a(()=>[i.value=="password"?(p(),T(j,{key:0},[t(f,{name:"username"},{default:a(()=>[t(w,{modelValue:s.value.username,"onUpdate:modelValue":o[0]||(o[0]=x=>s.value.username=x),size:"large",placeholder:"Username or Email Address"},{"prefix-icon":a(()=>[t(e,{name:"user"})]),_:1},8,["modelValue"])]),_:1}),t(f,{name:"passwd"},{default:a(()=>[t(w,{modelValue:s.value.passwd,"onUpdate:modelValue":o[2]||(o[2]=x=>s.value.passwd=x),size:"large",type:m.value?"text":"password",clearable:"",placeholder:"Password"},{"prefix-icon":a(()=>[t(e,{name:"lock-on"})]),"suffix-icon":a(()=>[t(e,{name:m.value?"browse":"browse-off",onClick:o[1]||(o[1]=x=>m.value=!m.value)},null,8,["name"])]),_:1},8,["modelValue","type"])]),_:1})],64)):I("v-if",!0),i.value!=="qrcode"?(p(),h(f,{key:1,class:"btn-container"},{default:a(()=>[t(v,{block:"",size:"large",type:"submit"},{default:a(()=>[C(" Login ")]),_:1})]),_:1})):I("v-if",!0)]),_:1},8,["class","data"])}}});var Z=E(X,[["__scopeId","data-v-625567e6"],["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/user/login/components/Login.vue"]]);const ee=r=>(P("data-v-21d24194"),r=r(),q(),r),te=ee(()=>c("span",null," Terms of Use",-1)),se=U({__name:"Register",emits:["registerSuccess"],setup(r,{emit:n}){const l={email:"",password:"",verifyCode:"",referCode:"",checked:!1},b={email:[{required:!0,message:"Email can not be empty",type:"error"},{email:!0,message:"Email is not correct",type:"warning"}],password:[{required:!0,message:"Password can not be empty",type:"error"}],verifyCode:[{required:!0,message:"Verification code can not be empty",type:"error"}],referCode:[{required:!0,message:"We need a refer code for we are under beta test now",type:"error"}]},i=_("email"),V=_(),s=_({...l}),m=_(!1),[k,$]=N(),D=n,A=async({validateResult:o})=>{if(o===!0){if(!s.value.checked){g.error("Terms of use must be accepted.");return}try{const e=await Q(s.value.email,s.value.password,s.value.verifyCode,s.value.referCode);g.success("Register Success"),D("registerSuccess")}catch(e){g.error(e.message)}}},y=async()=>{let o=s.value.email;if(!J(o)){g.error("Email is not correct");return}try{await Y(o),$(),g.success("Send Success")}catch(e){g.error(e.message)}};return(o,e)=>{const w=u("t-icon"),f=u("t-input"),v=u("t-form-item"),R=u("t-button"),x=u("t-checkbox"),F=u("t-form");return p(),h(F,{ref_key:"form",ref:V,class:z(["item-container",`register-${i.value}`]),data:s.value,rules:b,"label-width":"0",onSubmit:A},{default:a(()=>[i.value=="email"?(p(),h(v,{key:0,name:"email"},{default:a(()=>[t(f,{modelValue:s.value.email,"onUpdate:modelValue":e[0]||(e[0]=d=>s.value.email=d),maxlength:30,size:"large",placeholder:"Please input your email"},{"prefix-icon":a(()=>[t(w,{name:"mail"})]),_:1},8,["modelValue"])]),_:1})):I("v-if",!0),t(v,{name:"password"},{default:a(()=>[t(f,{modelValue:s.value.password,"onUpdate:modelValue":e[2]||(e[2]=d=>s.value.password=d),size:"large",type:m.value?"text":"password",clearable:"",placeholder:"Please input your password"},{"prefix-icon":a(()=>[t(w,{name:"lock-on"})]),"suffix-icon":a(()=>[t(w,{name:m.value?"browse":"browse-off",onClick:e[1]||(e[1]=d=>m.value=!m.value)},null,8,["name"])]),_:1},8,["modelValue","type"])]),_:1}),i.value=="email"?(p(),h(v,{key:1,class:"verification-code",name:"verifyCode"},{default:a(()=>[t(f,{modelValue:s.value.verifyCode,"onUpdate:modelValue":e[3]||(e[3]=d=>s.value.verifyCode=d),size:"large",placeholder:"Please input verify code"},null,8,["modelValue"]),t(R,{variant:"outline",disabled:L(k)>0,onClick:y},{default:a(()=>[C(S(L(k)==0?"Send":`${L(k)}`),1)]),_:1},8,["disabled"])]),_:1})):I("v-if",!0),t(v,{name:"referCode"},{default:a(()=>[t(f,{modelValue:s.value.referCode,"onUpdate:modelValue":e[4]||(e[4]=d=>s.value.referCode=d),maxlength:11,size:"large",placeholder:"Please input a refer code"},{"prefix-icon":a(()=>[t(w,{name:"user"})]),_:1},8,["modelValue"])]),_:1}),t(v,{class:"check-container",name:"checked"},{default:a(()=>[t(x,{modelValue:s.value.checked,"onUpdate:modelValue":e[5]||(e[5]=d=>s.value.checked=d)},{default:a(()=>[C("I have read and agree to the ")]),_:1},8,["modelValue"]),C(),te]),_:1}),t(v,null,{default:a(()=>[t(R,{block:"",size:"large",type:"submit"},{default:a(()=>[C(" Register ")]),_:1})]),_:1})]),_:1},8,["class","data"])}}});var ae=E(se,[["__scopeId","data-v-21d24194"],["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/user/login/components/Register.vue"]]);const oe=r=>(P("data-v-6dfd9e40"),r=r(),q(),r),re={class:"login-header"},ne=oe(()=>c("img",{src:K,class:"logo"},null,-1)),le=[ne],ie=U({__name:"Header",setup(r){return(n,l)=>(p(),T("header",re,[...le]))}});var ue=E(ie,[["__scopeId","data-v-6dfd9e40"],["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/user/login/components/Header.vue"]]);const B=r=>(P("data-v-3682feec"),r=r(),q(),r),de={class:"login-wrapper"},ce={class:"login-container"},_e={class:"title-container"},pe=B(()=>c("h1",{class:"title margin-no"},"Sign In",-1)),me=B(()=>c("h1",{class:"title"},"DeepEye App",-1)),fe={class:"sub-title"},ve={class:"tip"},ge={class:"copyright"},ye={name:"LoginIndex"},we=U({...ye,setup(r){const n=_("login"),l=b=>{n.value=b};return(b,i)=>(p(),T("div",de,[t(ue),c("div",ce,[c("div",_e,[pe,me,c("div",fe,[c("p",ve,S(n.value=="register"?"Already have an account?":"Don't have an account?"),1),c("p",{class:"tip",onClick:i[0]||(i[0]=V=>l(n.value=="register"?"login":"register"))},S(n.value=="register"?"Sign in":"Register"),1)])]),n.value==="login"?(p(),h(Z,{key:0})):(p(),h(ae,{key:1,onRegisterSuccess:i[1]||(i[1]=V=>l("login"))})),t(G)]),c("footer",ge,"Copyright @ 2022-"+S(new Date().getFullYear())+" DeepEye. All Rights Reserved ",1)]))}});var Ve=E(we,[["__scopeId","data-v-3682feec"],["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/user/login/index.vue"]]);export{Ve as default};
