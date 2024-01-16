import{d as I,r,a as N,v as U,c as d,f as O,w as l,_ as M,e as $,i as W,h as s,j as x,O as X,M as w,s as Y,x as Z,H as ee,g as te,m as h,P as ae,Q as se,n as F,k,U as oe,t as K,I as L}from"./index.37bcedcc.js";import{t as le,I as ne}from"./ethereum.e6070cd9.js";import{c as re,d as ie}from"./format.a9924a79.js";const de=I({__name:"DialogForm",props:{visible:{type:Boolean,default:!1},data:{type:Object,default:()=>({})}},emits:["update:visible"],setup(C,{emit:A}){const f={address:"",memo:"",priority:0},v=C,u=r(!1),o=r(v.data);N();const _=async({validateResult:p,firstError:t})=>{let i=le(o.value.address);if(t)w.warning(t);else try{await X(i,o.value.memo,o.value.priority),w.success("Add success"),window.parent.postMessage("updateData","*"),o.value={...f},u.value=!1}catch(c){w.error(c.message)}},b=()=>{u.value=!1,o.value={...f}},V=A;U(()=>u.value,p=>{V("update:visible",p)}),U(()=>v.visible,p=>{u.value=p}),U(()=>v.data,p=>{o.value=p});const D={address:[{required:!0,message:"Address is required",type:"error"},{validator:ne,message:"Invalid Ethereum Address",type:"error"}],memo:[{required:!0,message:"Memo is required",type:"error"}]};return(p,t)=>{const i=d("t-input"),c=d("t-form-item"),g=d("t-button"),y=d("t-form"),B=d("t-dialog");return $(),O(B,{visible:u.value,"onUpdate:visible":t[3]||(t[3]=m=>u.value=m),header:"Add Track Address",width:580,footer:!1},{body:l(()=>[W(" \u8868\u5355\u5185\u5BB9 "),s(y,{ref:"form",data:o.value,rules:D,"label-width":150,onSubmit:_},{default:l(()=>[s(c,{label:"Address",name:"address"},{default:l(()=>[s(i,{modelValue:o.value.address,"onUpdate:modelValue":t[0]||(t[0]=m=>o.value.address=m),style:{width:"380px"},placeholder:"Please input the address"},null,8,["modelValue"])]),_:1}),s(c,{label:"Memo",name:"memo"},{default:l(()=>[s(i,{modelValue:o.value.memo,"onUpdate:modelValue":t[1]||(t[1]=m=>o.value.memo=m),style:{width:"380px"},placeholder:"Please input the memo/nickname"},null,8,["modelValue"])]),_:1}),s(c,{label:"Priority",name:"priority"},{default:l(()=>[s(i,{modelValue:o.value.priority,"onUpdate:modelValue":t[2]||(t[2]=m=>o.value.priority=m),style:{width:"380px"},placeholder:"Please input the priority, default(0)"},null,8,["modelValue"])]),_:1}),s(c,{style:{float:"right"}},{default:l(()=>[s(g,{variant:"outline",onClick:b},{default:l(()=>[x("Cancel")]),_:1}),s(g,{theme:"primary",type:"submit"},{default:l(()=>[x("Submit")]),_:1})]),_:1})]),_:1},8,["data"])]),_:1},8,["visible"])}}});var ue=M(de,[["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/user/trackaddr/components/DialogForm.vue"]]);const ce={class:"list-common-table"},pe={class:"left-operation-container"},me={class:"search-input"},ve={class:"table-container"},fe=["href"],_e=["onClick"],ge="index",ye="top",be=!0,he=I({__name:"CommonTable",setup(C){const A=Y(),f=r(!1),v=r(""),u=r(!1),o=e=>{u.value=e},_=r(!1),b=r(),V=r(),D=[{title:"Address",fixed:"left",width:300,ellipsis:!0,align:"left",colKey:"address"},{title:"Memo",colKey:"memo",width:150},{title:"Priority",colKey:"priority",sorter:!0,width:150},{title:"Last Update",colKey:"updatedAt",sorter:!0,width:200},{align:"left",width:100,colKey:"op",title:"Operation"}],p=N(),t=r({current:1,previous:1,pageSize:10,total:100}),i=r({sortBy:"updatedAt",descending:!0}),c=r([]),g=r(!1),y=async()=>{g.value=!0;var e={};v.value!=""&&(e.finds=v.value);try{const a=await ae(t,e,i);c.value=[],a.list!=null&&(c.value=a.list),t.value={...t.value,total:a.count}}catch(a){console.log(a),a.response.status==401&&p.push("/login")}finally{g.value=!1}};Z(()=>{y()});const B=e=>{_.value=!0,b.value=e,V.value=e.row.memo},m=async()=>{const e=b.value;if(e.row.address!="")try{const a=await se(e.row.address);w.success("Delete success"),S(null)}catch(a){w.error(a.message)}_.value=!1};window.addEventListener("message",e=>{e.data==="updateData"&&y()});const T=()=>{t.value.current=1,t.value.previous=t.value.current},S=e=>{T(),y()},E=e=>{S()},z=e=>{S()},R=(e,a)=>{e.sorter?(i.value.sortBy=e.sorter.sortBy,i.value.descending=e.sorter.descending,T()):e.pagination||(i.value.sortBy=void 0,i.value.descending=void 0,T()),e.pagination&&(t.value.current=e.pagination.current,t.value.previous=e.pagination.previous,t.value.pageSize=e.pagination.pageSize),y()},q=ee(()=>({offsetTop:A.isUseTabsRouter?48:0,container:`.${L}-layout`}));return(e,a)=>{const j=d("t-button"),P=d("t-input"),H=d("t-row"),G=d("t-form"),Q=d("t-table"),J=d("t-dialog");return $(),te("div",ce,[s(G,{ref:"form","label-width":80,colon:"",style:{marginBottom:"8px"},onReset:E,onSubmit:z},{default:l(()=>[s(H,{justify:"space-between"},{default:l(()=>[h("div",pe,[s(j,{onClick:a[0]||(a[0]=n=>f.value=!0)},{default:l(()=>[x(" Add ")]),_:1})]),h("div",me,[s(P,{modelValue:v.value,"onUpdate:modelValue":a[1]||(a[1]=n=>v.value=n),placeholder:"Please input the address or memo to search",class:F(["header-search",{"width-zero":!u.value}]),autofocus:u.value,onBlur:a[2]||(a[2]=n=>o(!1))},{"suffix-icon":l(()=>[s(k(oe),{size:"20px",onClick:z})]),_:1},8,["modelValue","class","autofocus"])])]),_:1})]),_:1},512),s(ue,{visible:f.value,"onUpdate:visible":a[3]||(a[3]=n=>f.value=n)},null,8,["visible"]),h("div",ve,[s(Q,{data:c.value,columns:D,"row-key":ge,"vertical-align":ye,hover:be,pagination:t.value,loading:g.value,"header-affixed-top":q.value,onChange:R},{address:l(({row:n})=>[h("a",{class:"t-button-link",href:"https://etherscan.io/address/"+n.address,target:"_blank"},K(k(re)(n.address,12,8)),9,fe)]),updatedAt:l(({row:n})=>[x(K(k(ie)(n.updatedAt)),1)]),op:l(n=>[h("a",{class:F(k(L)+"-link"),onClick:xe=>B(n)}," Delete ",10,_e)]),_:1},8,["data","pagination","loading","header-affixed-top"])]),s(J,{visible:_.value,"onUpdate:visible":a[4]||(a[4]=n=>_.value=n),header:"Deletion Confirmation",body:`Are you certain you want to delete '${b.value}' ?`,"on-confirm":m},null,8,["visible","body"])])}}});var we=M(he,[["__scopeId","data-v-75d7c02d"],["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/user/trackaddr/components/CommonTable.vue"]]);const Ae={name:"ListFilter"},ke=I({...Ae,setup(C){return(A,f)=>($(),O(we))}});var Be=M(ke,[["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/user/trackaddr/index.vue"]]);export{Be as default};
