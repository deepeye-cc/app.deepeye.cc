import{d as b,s as N,r as o,a as R,x as F,H as M,c as d,g as $,h as i,w as l,m as v,e as w,n as j,k as m,U as E,t as x,j as H,I,_ as C,f as G}from"./index.f5a7ac83.js";import{A as O}from"./admin.db611e69.js";import{c as q,d as J}from"./format.3336b0b3.js";const Q={class:"list-common-table"},W={class:"search-input"},X={class:"table-container"},Y=["href"],Z="index",P="top",ee=!0,te=b({__name:"CommonTable",setup(k){const g=N(),n=o(""),c=o(!1),A=e=>{c.value=e};o(!1),o(),o();const S=[{title:"Username",fixed:"left",width:200,ellipsis:!0,align:"left",colKey:"username"},{title:"Address",fixed:"left",width:300,ellipsis:!0,align:"left",colKey:"address"},{title:"Memo",colKey:"memo",width:150},{title:"Priority",colKey:"priority",width:150},{title:"Last Update",colKey:"updatedAt",sorter:!0,width:200}],B=R(),a=o({current:1,previous:1,pageSize:10,total:100}),r=o({sortBy:"updatedAt",descending:!0}),u=o([]),p=o(!1),f=async()=>{p.value=!0;var e={};n.value!=""&&(e.finds=n.value);try{const t=await O(a,e,r);u.value=[],t.list!=null&&(u.value=t.list),a.value={...a.value,total:t.count}}catch(t){console.log(t),t.response.status==401&&B.push("/login")}finally{p.value=!1}};F(()=>{f()});const _=()=>{a.value.current=1,a.value.previous=a.value.current},h=e=>{_(),f()},T=e=>{h()},y=e=>{h()},U=(e,t)=>{e.sorter?(r.value.sortBy=e.sorter.sortBy,r.value.descending=e.sorter.descending,_()):e.pagination||(r.value.sortBy=void 0,r.value.descending=void 0,_()),e.pagination&&(a.value.current=e.pagination.current,a.value.previous=e.pagination.previous,a.value.pageSize=e.pagination.pageSize),f()},V=M(()=>({offsetTop:g.isUseTabsRouter?48:0,container:`.${I}-layout`}));return(e,t)=>{const z=d("t-input"),K=d("t-row"),D=d("t-form"),L=d("t-table");return w(),$("div",Q,[i(D,{ref:"form",colon:"",style:{marginBottom:"8px"},onReset:T,onSubmit:y},{default:l(()=>[i(K,{justify:"space-between"},{default:l(()=>[v("div",W,[i(z,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=s=>n.value=s),placeholder:"Please input the username or address to search",class:j(["header-search",{"width-zero":!c.value}]),autofocus:c.value,onBlur:t[1]||(t[1]=s=>A(!1))},{"suffix-icon":l(()=>[i(m(E),{size:"20px",onClick:y})]),_:1},8,["modelValue","class","autofocus"])])]),_:1})]),_:1},512),v("div",X,[i(L,{data:u.value,columns:S,"row-key":Z,"vertical-align":P,hover:ee,pagination:a.value,loading:p.value,"header-affixed-top":V.value,onChange:U},{address:l(({row:s})=>[v("a",{class:"t-button-link",href:"https://etherscan.io/address/"+s.address,target:"_blank"},x(m(q)(s.address,12,8)),9,Y)]),updatedAt:l(({row:s})=>[H(x(m(J)(s.updatedAt)),1)]),_:1},8,["data","pagination","loading","header-affixed-top"])])])}}});var ae=C(te,[["__scopeId","data-v-49c41afe"],["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/admin/trackaddr/components/CommonTable.vue"]]);const oe={name:"ListFilter"},se=b({...oe,setup(k){return(g,n)=>(w(),G(ae))}});var le=C(se,[["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/admin/trackaddr/index.vue"]]);export{le as default};
