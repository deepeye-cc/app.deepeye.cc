import{d as C,s as I,r as s,a as j,x as H,H as G,c,g as O,h as i,w as n,m as u,e as k,n as x,k as p,U as q,t as b,j as J,I as w,_ as A,f as Q}from"./index.7c53035d.js";import{A as W}from"./admin.580cd69a.js";import{c as X,d as Y}from"./format.3336b0b3.js";const Z={class:"list-common-table"},P={class:"search-input"},ee={class:"table-container"},te=["href"],ae=["onClick"],oe="index",se="top",ne=!0,le=C({__name:"CommonTable",setup(B){const g=I(),l=s(""),f=s(!1),S=e=>{f.value=e},T=s(!1),D=s(),U=s(),V=[{title:"Username",fixed:"left",width:200,ellipsis:!0,align:"left",colKey:"username"},{title:"Address",fixed:"left",width:300,ellipsis:!0,align:"left",colKey:"address"},{title:"Memo",colKey:"memo",width:150},{title:"Priority",colKey:"priority",width:150},{title:"Last Update",colKey:"updatedAt",sorter:!0,width:200}],z=j(),a=s({current:1,previous:1,pageSize:10,total:100}),r=s({sortBy:"updatedAt",descending:!0}),v=s([]),_=s(!1),d=async()=>{_.value=!0;var e={};l.value!=""&&(e.finds=l.value);try{const t=await W(a,e,r);v.value=[],t.list!=null&&(v.value=t.list),a.value={...a.value,total:t.count}}catch(t){console.log(t),t.response.status==401&&z.push("/login")}finally{_.value=!1}};H(()=>{d()});const K=e=>{T.value=!0,D.value=e,U.value=e.row.memo};window.addEventListener("message",e=>{e.data==="updateData"&&d()});const m=()=>{a.value.current=1,a.value.previous=a.value.current},h=e=>{m(),d()},L=e=>{h()},y=e=>{h()},M=(e,t)=>{console.log("[ rehandleChange ] changeParams: ",e),e.sorter?(r.value.sortBy=e.sorter.sortBy,r.value.descending=e.sorter.descending,m()):e.pagination||(r.value.sortBy=void 0,r.value.descending=void 0,m()),e.pagination&&(a.value.current=e.pagination.current,a.value.previous=e.pagination.previous,a.value.pageSize=e.pagination.pageSize),d()},N=G(()=>({offsetTop:g.isUseTabsRouter?48:0,container:`.${w}-layout`}));return(e,t)=>{const R=c("t-input"),$=c("t-row"),E=c("t-form"),F=c("t-table");return k(),O("div",Z,[i(E,{ref:"form",colon:"",style:{marginBottom:"8px"},onReset:L,onSubmit:y},{default:n(()=>[i($,{justify:"space-between"},{default:n(()=>[u("div",P,[i(R,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=o=>l.value=o),placeholder:"Please input the username or address to search",class:x(["header-search",{"width-zero":!f.value}]),autofocus:f.value,onBlur:t[1]||(t[1]=o=>S(!1))},{"suffix-icon":n(()=>[i(p(q),{size:"20px",onClick:y})]),_:1},8,["modelValue","class","autofocus"])])]),_:1})]),_:1},512),u("div",ee,[i(F,{data:v.value,columns:V,"row-key":oe,"vertical-align":se,hover:ne,pagination:a.value,loading:_.value,"header-affixed-top":N.value,onChange:M},{address:n(({row:o})=>[u("a",{class:"t-button-link",href:"https://etherscan.io/address/"+o.address,target:"_blank"},b(p(X)(o.address,12,8)),9,te)]),updatedAt:n(({row:o})=>[J(b(p(Y)(o.updatedAt)),1)]),op:n(o=>[u("a",{class:x(p(w)+"-link"),onClick:ce=>K(o)}," Delete ",10,ae)]),_:1},8,["data","pagination","loading","header-affixed-top"])])])}}});var re=A(le,[["__scopeId","data-v-49c41afe"],["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/admin/trackaddr/components/CommonTable.vue"]]);const ie={name:"ListFilter"},de=C({...ie,setup(B){return(g,l)=>(k(),Q(re))}});var ve=A(de,[["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/admin/trackaddr/index.vue"]]);export{ve as default};
