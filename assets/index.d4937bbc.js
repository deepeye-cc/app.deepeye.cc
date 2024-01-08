import{d as b,s as D,r as i,x as R,H as L,c as n,g as z,h as t,w as a,m as E,e as C,j as m,t as F,I as G,_ as w,f as H}from"./index.f5a7ac83.js";import{T as M}from"./index.4cf7ecc5.js";import{G as $,F as j}from"./pair.3fc793bb.js";import{I as O,t as W}from"./ethereum.66f098ec.js";import"./format.3336b0b3.js";const q={class:"list-common-table"},J={class:"table-container"},Q="index",X="top",Y=!0,Z=b({__name:"CommonTable",setup(I){const f=D(),v=[{title:"Pair",fixed:"left",width:200,ellipsis:!0,align:"left",colKey:"pairName"},{title:"Txs(1h)",colKey:"txNumIn1h",sorter:!0,width:100},{title:"Txs(24h)",colKey:"txNumIn24h",sorter:!0,width:100},{title:"TxsChg(24h)",colKey:"txNumChangeIn24h",sorter:!0,width:150},{title:"PriceChg(1h)",colKey:"priceChangeIn1h",sorter:!0,width:150},{title:"USDVolume(1h)",colKey:"volumeByUsdIn1h",sorter:!0,width:150},{title:"USDVolume(24h)",colKey:"volumeByUsdIn24h",sorter:!0,width:150}],l=i({address:""}),o=i({current:1,previous:1,pageSize:10,total:100}),d=i({sortBy:"txNumIn1h",descending:!0});i(!1);const h=i([]),c=i(!1),p=async()=>{c.value=!0;var e={};l.value.address!=""&&O(l.value.address)&&(e.address=W(l.value.address));try{const s=await $(o,e,d);h.value=j(s.list),o.value={...o.value,total:s.count}}catch(s){console.log(s)}finally{c.value=!1}};R(()=>{p()});const _=()=>{o.value.current=1,o.value.previous=o.value.current},g=e=>{_(),p()},T=e=>{g()},S=e=>{g()},B=(e,s)=>{e.sorter?(d.value.sortBy=e.sorter.sortBy,d.value.descending=e.sorter.descending,_()):e.pagination||(d.value.sortBy=void 0,d.value.descending=void 0,_()),e.pagination&&(o.value.current=e.pagination.current,o.value.previous=e.pagination.previous,o.value.pageSize=e.pagination.pageSize),p()},N=L(()=>({offsetTop:f.isUseTabsRouter?48:0,container:`.${G}-layout`}));return(e,s)=>{const U=n("t-input"),V=n("t-form-item"),u=n("t-col"),y=n("t-row"),x=n("t-button"),K=n("t-form"),k=n("router-link"),A=n("t-table");return C(),z("div",q,[t(K,{ref:"form",data:l.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:T,onSubmit:S},{default:a(()=>[t(y,null,{default:a(()=>[t(u,{span:10},{default:a(()=>[t(y,{gutter:[16,24]},{default:a(()=>[t(u,{span:12},{default:a(()=>[t(V,{label:"Address",name:"address"},{default:a(()=>[t(U,{modelValue:l.value.address,"onUpdate:modelValue":s[0]||(s[0]=r=>l.value.address=r),class:"form-item-content",type:"search",placeholder:"Please input memo/address to search(or empty)",style:{minWidth:"134px"}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),t(u,{span:1,class:"operation-container"},{default:a(()=>[t(x,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:a(()=>[m(" Search ")]),_:1})]),_:1}),t(u,{span:1,class:"operation-container"},{default:a(()=>[t(x,{type:"reset",variant:"base",theme:"default"},{default:a(()=>[m(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["data"]),E("div",J,[t(A,{data:h.value,columns:v,"row-key":Q,"vertical-align":X,hover:Y,pagination:o.value,loading:c.value,"header-affixed-top":N.value,onChange:B},{pairName:a(({row:r})=>[t(k,{to:"/detail/pair/"+r.address},{default:a(()=>[m(F(r.pairName),1)]),_:2},1032,["to"])]),priceChangeIn1h:a(({row:r})=>[t(M,{type:r.priceChangeIn1h>0?"up":"down",describe:r.priceChangeIn1h},null,8,["type","describe"])]),_:1},8,["data","pagination","loading","header-affixed-top"])])])}}});var P=w(Z,[["__scopeId","data-v-68deb810"],["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/deep_pair/hotpair/components/CommonTable.vue"]]);const ee={name:"ListFilter"},te=b({...ee,setup(I){return(f,v)=>(C(),H(P))}});var le=w(te,[["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/deep_pair/hotpair/filter/index.vue"]]);export{le as default};