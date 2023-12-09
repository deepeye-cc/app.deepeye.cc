import{d as b,u as A,r as i,o as R,B as L,b as s,c as z,e as t,f as a,k as F,g as C,l as m,t as E,aa as G,_ as w,i as M}from"./index.616e9840.js";import{T as $}from"./index.d3d8917d.js";import{G as H,F as O}from"./pair.cb09a09c.js";import{t as W}from"./ethereum.e18fa6d3.js";import"./index.39a423a0.js";const j={class:"list-common-table"},q={class:"table-container"},J="index",Q="top",X=!0,Y=b({__name:"CommonTable",setup(T){const f=A(),v=[{title:"Pair",fixed:"left",width:200,ellipsis:!0,align:"left",colKey:"pairName"},{title:"Txs(1h)",colKey:"txNumIn1h",sorter:!0,width:100},{title:"Txs(24h)",colKey:"txNumIn24h",sorter:!0,width:100},{title:"TxsChg(24h)",colKey:"txNumChangeIn24h",sorter:!0,width:150},{title:"PriceChg(1h)",colKey:"priceChangeIn1h",sorter:!0,width:150},{title:"USDVolume(1h)",colKey:"volumeByUsdIn1h",sorter:!0,width:150},{title:"USDVolume(24h)",colKey:"volumeByUsdIn24h",sorter:!0,width:150}],l=i({address:""}),o=i({current:1,previous:1,pageSize:10,total:100}),d=i({sortBy:"txNumIn1h",descending:!0});i(!1);const h=i([]),c=i(!1),p=async()=>{c.value=!0;var e={};l.value.address!=""&&W(l.value.address)&&(e.address=l.value.address);try{const n=await H(o,e,d);h.value=O(n.list),o.value={...o.value,total:n.count}}catch(n){console.log(n)}finally{c.value=!1}};R(()=>{p()});const _=()=>{o.value.current=1,o.value.previous=o.value.current},g=e=>{_(),p()},B=e=>{g()},S=e=>{g()},I=(e,n)=>{e.sorter?(d.value.sortBy=e.sorter.sortBy,d.value.descending=e.sorter.descending,_()):e.pagination||(d.value.sortBy=void 0,d.value.descending=void 0,_()),e.pagination&&(o.value.current=e.pagination.current,o.value.previous=e.pagination.previous,o.value.pageSize=e.pagination.pageSize),p()},N=L(()=>({offsetTop:f.isUseTabsRouter?48:0,container:`.${G}-layout`}));return(e,n)=>{const k=s("t-input"),U=s("t-form-item"),u=s("t-col"),y=s("t-row"),x=s("t-button"),K=s("t-form"),V=s("router-link"),D=s("t-table");return C(),z("div",j,[t(K,{ref:"form",data:l.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:B,onSubmit:S},{default:a(()=>[t(y,null,{default:a(()=>[t(u,{span:10},{default:a(()=>[t(y,{gutter:[16,24]},{default:a(()=>[t(u,{span:12},{default:a(()=>[t(U,{label:"Address",name:"address"},{default:a(()=>[t(k,{modelValue:l.value.address,"onUpdate:modelValue":n[0]||(n[0]=r=>l.value.address=r),class:"form-item-content",type:"search",placeholder:"Please input pair/token0/token1 address(or empty)",style:{minWidth:"134px"}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),t(u,{span:1,class:"operation-container"},{default:a(()=>[t(x,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:a(()=>[m(" Search ")]),_:1})]),_:1}),t(u,{span:1,class:"operation-container"},{default:a(()=>[t(x,{type:"reset",variant:"base",theme:"default"},{default:a(()=>[m(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["data"]),F("div",q,[t(D,{data:h.value,columns:v,"row-key":J,"vertical-align":Q,hover:X,pagination:o.value,loading:c.value,"header-affixed-top":N.value,onChange:I},{pairName:a(({row:r})=>[t(V,{to:"/detail/pair/"+r.address},{default:a(()=>[m(E(r.pairName),1)]),_:2},1032,["to"])]),priceChangeIn1h:a(({row:r})=>[t($,{type:r.priceChangeIn1h>0?"up":"down",describe:r.priceChangeIn1h},null,8,["type","describe"])]),_:1},8,["data","pagination","loading","header-affixed-top"])])])}}});var Z=w(Y,[["__scopeId","data-v-3a1d7814"],["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/hotpair/components/CommonTable.vue"]]);const P={name:"ListFilter"},ee=b({...P,setup(T){return(f,v)=>(C(),M(Z))}});var re=w(ee,[["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/hotpair/filter/index.vue"]]);export{re as default};