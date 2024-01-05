import{d as T,s as E,r as i,x as K,H as P,c as l,g as D,h as e,w as o,m as L,e as w,k as F,j as m,t as O,I as z,_ as A,f as M}from"./index.4075b0e4.js";import{T as G}from"./index.f004abdf.js";import{R as $}from"./index.daacec76.js";import{a as j,F as q}from"./pair.4065f28f.js";import{I as W,t as J}from"./ethereum.14dc7f8f.js";import"./format.3336b0b3.js";const Q={class:"list-common-table"},X={class:"table-container"},Y="index",Z="top",ee=!0,te=T({__name:"CommonTable",setup(C){const f=E(),v=[{title:"Pair",fixed:"left",width:200,ellipsis:!0,align:"left",colKey:"pairName"},{title:"Txs(1h)",colKey:"txNumIn1h",sorter:!0,width:100},{title:"Txs(24h)",colKey:"txNumIn24h",sorter:!0,width:100},{title:"PriceChg(1h)",colKey:"priceChangeIn1h",sorter:!0,width:150},{title:"USDVolume(1h)",colKey:"volumeByUsdIn1h",sorter:!0,width:150},{title:"Age",colKey:"firstAddPoolTime",sorter:!0,ellipsis:!0,width:150}],n=i({address:"",firstAddPoolHour:24}),a=i({current:1,previous:1,pageSize:10,total:100}),d=i({sortBy:"txNumIn1h",descending:!0});i(!1);const h=i([]),p=i(!1),c=async()=>{p.value=!0;var t={firstAddPoolHour:n.value.firstAddPoolHour};n.value.address!=""&&W(n.value.address)&&(t.address=J(n.value.address));try{const s=await j(a,t,d);h.value=q(s.list),a.value={...a.value,total:s.count}}catch(s){console.log(s)}finally{p.value=!1}};K(()=>{c()});const _=()=>{a.value.current=1,a.value.previous=a.value.current},g=t=>{_(),c()},I=t=>{g()},N=t=>{g()},S=(t,s)=>{t.sorter?(d.value.sortBy=t.sorter.sortBy,d.value.descending=t.sorter.descending,_()):t.pagination||(d.value.sortBy=void 0,d.value.descending=void 0,_()),t.pagination&&(a.value.current=t.pagination.current,a.value.previous=t.pagination.previous,a.value.pageSize=t.pagination.pageSize),c()},B=P(()=>({offsetTop:f.isUseTabsRouter?48:0,container:`.${z}-layout`}));return(t,s)=>{const R=l("t-input"),y=l("t-form-item"),u=l("t-col"),V=l("t-select"),x=l("t-row"),b=l("t-button"),k=l("t-form"),H=l("router-link"),U=l("t-table");return w(),D("div",Q,[e(k,{ref:"form",data:n.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:I,onSubmit:N},{default:o(()=>[e(x,null,{default:o(()=>[e(u,{span:10},{default:o(()=>[e(x,{gutter:[16,24]},{default:o(()=>[e(u,{span:8},{default:o(()=>[e(y,{label:"Address",name:"address"},{default:o(()=>[e(R,{modelValue:n.value.address,"onUpdate:modelValue":s[0]||(s[0]=r=>n.value.address=r),class:"form-item-content",type:"search",placeholder:"Please input pair/token0/token1 address(or empty)",style:{minWidth:"134px"}},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{span:4},{default:o(()=>[e(y,{label:"Born Age",name:"firstAddPoolHour"},{default:o(()=>[e(V,{modelValue:n.value.firstAddPoolHour,"onUpdate:modelValue":s[1]||(s[1]=r=>n.value.firstAddPoolHour=r),style:{display:"inline-block"},class:"form-item-content",tips:"Time after first liquidity added",options:F($),placeholder:"Time Range"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{span:1,class:"operation-container"},{default:o(()=>[e(b,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:o(()=>[m(" Search ")]),_:1})]),_:1}),e(u,{span:1,class:"operation-container"},{default:o(()=>[e(b,{type:"reset",variant:"base",theme:"default"},{default:o(()=>[m(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["data"]),L("div",X,[e(U,{data:h.value,columns:v,"row-key":Y,"vertical-align":Z,hover:ee,pagination:a.value,loading:p.value,"header-affixed-top":B.value,onChange:S},{pairName:o(({row:r})=>[e(H,{to:"/detail/pair/"+r.address},{default:o(()=>[m(O(r.pairName),1)]),_:2},1032,["to"])]),priceChangeIn1h:o(({row:r})=>[e(G,{type:r.priceChangeIn1h>0?"up":"down",describe:r.priceChangeIn1h},null,8,["type","describe"])]),_:1},8,["data","pagination","loading","header-affixed-top"])])])}}});var oe=A(te,[["__scopeId","data-v-e5536ad4"],["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/deep_pair/newhot/components/CommonTable.vue"]]);const ae={name:"ListFilter"},se=T({...ae,setup(C){return(f,v)=>(w(),M(oe))}});var pe=A(se,[["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/deep_pair/newhot/filter/index.vue"]]);export{pe as default};
