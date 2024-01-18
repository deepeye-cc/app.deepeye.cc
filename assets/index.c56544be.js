import{d as V,s as M,r as n,a as z,x as $,H as F,c as i,g as H,h as s,w as a,m as R,M as j,e as C,j as d,t as c,k as p,I as G,_ as S,f as O}from"./index.d4ccc725.js";import{c as q,a as T,f as J}from"./format.76b8a5e1.js";import{a as Q}from"./partner.471ba4d9.js";import{I as X,t as Y}from"./ethereum.f61dd17e.js";import"./encrypt.ccf9332e.js";const Z={class:"list-common-table"},P={class:"table-container"},ee=["href"],te="index",ae="top",oe=!0,se=V({__name:"CommonTable",setup(A){const y=M();n(""),n(!1),n(!1),n(),n();const h=[{title:"User Address",width:150,colKey:"address"},{title:"Weight",width:100,sorter:!0,colKey:"weight"},{title:"Win Ratio",colKey:"winRatio",sorter:!0,width:100},{title:"Trade Times",colKey:"tradeCount",sorter:!0,width:100},{title:"Earn Value",colKey:"totalWinValue",sorter:!0,width:120},{title:"AvgEarn Ratio",colKey:"averageEarnRatio",sorter:!0,width:120},{title:"Type",width:100,colKey:"type"}],B=z(),r=n({current:1,previous:1,pageSize:10,total:100}),u=n({sortBy:"",descending:!0}),_=n([]),f=n(!1),l=n({address:""}),m=async()=>{f.value=!0;var e={};if(l.value.address!="")if(X(l.value.address))e.address=Y(l.value.address);else{j.warning("Wrong User Address.");return}try{const t=await Q(r,e,u);_.value=[],t.list!=null&&(_.value=t.list),r.value={...r.value,total:t.count}}catch(t){console.log(t),t.response.status==401&&B.push("/login")}finally{f.value=!1}};$(()=>{m()});const E=e=>{var t="Frontrun";return e==2?t="Rush":e==3&&(t="Trend"),t},v=()=>{r.value.current=1,r.value.previous=r.value.current},b=e=>{v(),m()},U=e=>{b()},W=e=>{b()},K=(e,t)=>{e.sorter?(u.value.sortBy=e.sorter.sortBy,u.value.descending=e.sorter.descending,v()):e.pagination||(u.value.sortBy=void 0,u.value.descending=void 0,v()),e.pagination&&(r.value.current=e.pagination.current,r.value.previous=e.pagination.previous,r.value.pageSize=e.pagination.pageSize),m()},k=F(()=>({offsetTop:y.isUseTabsRouter?48:0,container:`.${G}-layout`}));return(e,t)=>{const N=i("t-input"),D=i("t-form-item"),g=i("t-col"),w=i("t-row"),x=i("t-button"),I=i("t-form"),L=i("t-table");return C(),H("div",Z,[s(I,{ref:"form",data:l.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:U,onSubmit:W},{default:a(()=>[s(w,null,{default:a(()=>[s(g,{span:10},{default:a(()=>[s(w,{gutter:[16,24]},{default:a(()=>[s(g,{span:12},{default:a(()=>[s(D,{label:"UserAddr",name:"address"},{default:a(()=>[s(N,{modelValue:l.value.address,"onUpdate:modelValue":t[0]||(t[0]=o=>l.value.address=o),class:"form-item-content",type:"search",placeholder:"Please user address",style:{minWidth:"134px"}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),s(g,{span:2,class:"operation-container"},{default:a(()=>[s(x,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:a(()=>[d(" Search ")]),_:1}),s(x,{type:"reset",variant:"base",theme:"default"},{default:a(()=>[d(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["data"]),R("div",P,[s(L,{data:_.value,columns:h,"row-key":te,"vertical-align":ae,hover:oe,pagination:r.value,loading:f.value,"header-affixed-top":k.value,onChange:K},{address:a(({row:o})=>[R("a",{class:"t-button-link",href:"https://etherscan.io/address/"+o.address,target:"_blank"},c(p(q)(o.address,8,4)),9,ee)]),winRatio:a(({row:o})=>[d(c(p(T)(Number(o.winRatio)))+"% ",1)]),totalWinValue:a(({row:o})=>[d(" $"+c(p(J)(Number(o.totalWinValue))),1)]),averageEarnRatio:a(({row:o})=>[d(c(p(T)(Number(o.averageEarnRatio)))+"% ",1)]),type:a(({row:o})=>[d(c(E(o.type)),1)]),_:1},8,["data","pagination","loading","header-affixed-top"])])])}}});var re=S(se,[["__scopeId","data-v-2aded756"],["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/partner/wiser/components/CommonTable.vue"]]);const ne={name:"ListFilter"},ie=V({...ne,setup(A){return(y,h)=>(C(),O(re))}});var _e=S(ie,[["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/partner/wiser/index.vue"]]);export{_e as default};