import{d as T,u as E,r as i,f as K,c as P,i as r,a as D,m as e,k as o,b as L,o as w,aa as F,q as m,t as O,a9 as z,_ as A,j as M}from"./index.33e335ff.js";import{R as q}from"./index.daacec76.js";import{a as G,F as $}from"./pair.48e8e1c1.js";import{t as j}from"./ethereum.a8ff985d.js";import"./index.c40f4254.js";const W={class:"list-common-table"},J={class:"table-container"},Q="index",X="top",Y=!0,Z=T({__name:"CommonTable",setup(N){const f=E(),v=[{title:"Pair",fixed:"left",width:200,ellipsis:!0,align:"left",colKey:"pairName"},{title:"Txs(1h)",colKey:"txNumIn1h",sorter:!0,width:100},{title:"Txs(24h)",colKey:"txNumIn24h",sorter:!0,width:100},{title:"PriceChg(1h)",colKey:"priceChangeIn1h",sorter:!0,width:150},{title:"USDVolume(1h)",colKey:"volumeByUsdIn1h",sorter:!0,width:150},{title:"Age",colKey:"firstAddPoolTime",sorter:!0,ellipsis:!0,width:150}],n=i({address:"",firstAddPoolHour:24}),a=i({current:1,previous:1,pageSize:10,total:100}),d=i({sortBy:"txNumIn1h",descending:!0});i(!1);const g=i([]),c=i(!1),p=async()=>{c.value=!0;var t={firstAddPoolHour:n.value.firstAddPoolHour};n.value.address!=""&&j(n.value.address)&&(t.address=n.value.address);try{const s=await G(a,t,d);g.value=$(s.list),a.value={...a.value,total:s.count}}catch(s){console.log(s)}finally{c.value=!1}};K(()=>{p()});const _=()=>{a.value.current=1,a.value.previous=a.value.current},y=t=>{_(),p()},C=t=>{y()},S=t=>{y()},B=(t,s)=>{t.sorter?(d.value.sortBy=t.sorter.sortBy,d.value.descending=t.sorter.descending,_()):t.pagination||(d.value.sortBy=void 0,d.value.descending=void 0,_()),t.pagination&&(a.value.current=t.pagination.current,a.value.previous=t.pagination.previous,a.value.pageSize=t.pagination.pageSize),p()},R=P(()=>({offsetTop:f.isUseTabsRouter?48:0,container:`.${z}-layout`}));return(t,s)=>{const k=r("t-input"),h=r("t-form-item"),u=r("t-col"),V=r("t-select"),b=r("t-row"),x=r("t-button"),I=r("t-form"),U=r("router-link"),H=r("t-table");return w(),D("div",W,[e(I,{ref:"form",data:n.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:C,onSubmit:S},{default:o(()=>[e(b,null,{default:o(()=>[e(u,{span:10},{default:o(()=>[e(b,{gutter:[16,24]},{default:o(()=>[e(u,{span:8},{default:o(()=>[e(h,{label:"Address",name:"address"},{default:o(()=>[e(k,{modelValue:n.value.address,"onUpdate:modelValue":s[0]||(s[0]=l=>n.value.address=l),class:"form-item-content",type:"search",placeholder:"Please input pair/token0/token1 address(or empty)",style:{minWidth:"134px"}},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{span:4},{default:o(()=>[e(h,{label:"Born Age",name:"firstAddPoolHour"},{default:o(()=>[e(V,{modelValue:n.value.firstAddPoolHour,"onUpdate:modelValue":s[1]||(s[1]=l=>n.value.firstAddPoolHour=l),style:{display:"inline-block"},class:"form-item-content",tips:"Time after first liquidity added",options:F(q),placeholder:"Time Range"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1}),e(u,{span:1,class:"operation-container"},{default:o(()=>[e(x,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:o(()=>[m(" Search ")]),_:1})]),_:1}),e(u,{span:1,class:"operation-container"},{default:o(()=>[e(x,{type:"reset",variant:"base",theme:"default"},{default:o(()=>[m(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["data"]),L("div",J,[e(H,{data:g.value,columns:v,"row-key":Q,"vertical-align":X,hover:Y,pagination:a.value,loading:c.value,"header-affixed-top":R.value,onChange:B},{pairName:o(({row:l})=>[e(U,{to:"/detail/pair/"+l.address},{default:o(()=>[m(O(l.pairName),1)]),_:2},1032,["to"])]),_:1},8,["data","pagination","loading","header-affixed-top"])])])}}});var ee=A(Z,[["__scopeId","data-v-3b82b2d8"],["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/newhot/components/CommonTable.vue"]]);const te={name:"ListFilter"},oe=T({...te,setup(N){return(f,v)=>(w(),M(ee))}});var ie=A(oe,[["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/newhot/filter/index.vue"]]);export{ie as default};