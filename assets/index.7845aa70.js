import{q as M,d as R,s as Y,r as u,x as $,H as F,c as d,g as G,h as o,w as t,m as T,e as v,k as f,j as m,f as b,i as S,t as x,I as j,_ as A}from"./index.5f27ed32.js";import{c as k,f as Q,g as W}from"./format.2cb2ce4b.js";import{I as J,t as X}from"./ethereum.2fe525e4.js";import{c as Z,d as P,b as C}from"./index.fb3dd0e2.js";const ee={Url:"/liquidity"};function te(a){a==null&&(a=[]);for(var e=0;e<a.length;e++)a[e].eventTxHashDisplay=k(a[e].eventTxHash,10,4),a[e].operatorDisplay=k(a[e].operator,8,4),a[e].amountInUsd==0?a[e].amountInUsd="NA":a[e].amountInUsd=`$${Q(Number(a[e].amountInUsd))}`,a[e].eventTime=W(a[e].eventTime);return a}async function ae(a,e,c){return e.page=a.value.current,e.pageSize=a.value.pageSize,e.sortBy=c.value.sortBy,e.descending=c.value.descending,M.get({url:ee.Url,params:e})}const oe={class:"list-common-table"},ne={class:"table-container"},se=["href"],le=["href"],re="index",ie="top",de=!0,ue=R({__name:"CommonTable",setup(a){const e=Y(),c=[{title:"Pair",fixed:"left",ellipsis:!0,align:"left",colKey:"pairName",width:200},{title:"USD Value",ellipsis:!0,colKey:"amountInUsd",width:150,sorter:!0},{title:"Direction",colKey:"direction",width:100},{title:"Operator",align:"left",fixed:"right",width:200,colKey:"operator"},{title:"TxHash",width:200,ellipsis:!0,colKey:"eventTxHash"},{title:"Event Time",width:200,ellipsis:!0,colKey:"eventTime"}],l=u({address:"",direction:0,recentdays:7}),i=u({current:1,previous:1,pageSize:10,total:100}),p=u({sortBy:void 0,descending:void 0});u(!1);const E=u([]),y=u(!1),g=async()=>{y.value=!0;var s={direction:l.value.direction,recentdays:l.value.recentdays};l.value.address!=""&&J(l.value.address)&&(s.address=X(l.value.address));try{const r=await ae(i,s,p);E.value=te(r.list),i.value={...i.value,total:r.count}}catch(r){console.log(r)}finally{y.value=!1}};$(()=>{g()});const I=s=>{i.value.current=1,i.value.previous=i.value.current,g()},B=s=>{I()},w=s=>{I()},L=(s,r)=>{s.sorter?(p.value.sortBy=s.sorter.sortBy,p.value.descending=s.sorter.descending):s.pagination||(p.value.sortBy=void 0,p.value.descending=void 0),s.pagination&&(i.value.current=s.pagination.current,i.value.previous=s.pagination.previous,i.value.pageSize=s.pagination.pageSize),g()},H=F(()=>({offsetTop:e.isUseTabsRouter?48:0,container:`.${j}-layout`}));return(s,r)=>{const O=d("t-input"),h=d("t-form-item"),_=d("t-col"),U=d("t-select"),V=d("t-row"),D=d("t-button"),q=d("t-form"),N=d("t-tag"),K=d("router-link"),z=d("t-table");return v(),G("div",oe,[o(q,{ref:"form",data:l.value,"label-width":80,colon:"",style:{marginBottom:"8px"},onReset:B,onSubmit:w},{default:t(()=>[o(V,null,{default:t(()=>[o(_,{span:10},{default:t(()=>[o(V,{gutter:[16,24]},{default:t(()=>[o(_,{span:6},{default:t(()=>[o(h,{label:"Address",name:"address"},{default:t(()=>[o(O,{modelValue:l.value.address,"onUpdate:modelValue":r[0]||(r[0]=n=>l.value.address=n),class:"form-item-content",type:"search",placeholder:"input the pair address",style:{minWidth:"134px"}},null,8,["modelValue"])]),_:1})]),_:1}),o(_,{span:3},{default:t(()=>[o(h,{label:"Type",name:"direction"},{default:t(()=>[o(U,{modelValue:l.value.direction,"onUpdate:modelValue":r[1]||(r[1]=n=>l.value.direction=n),class:"form-item-content",options:f(Z),placeholder:"Liquidity Event Type"},null,8,["modelValue","options"])]),_:1})]),_:1}),o(_,{span:3},{default:t(()=>[o(h,{label:"EventTime",name:"recentdays"},{default:t(()=>[o(U,{modelValue:l.value.recentdays,"onUpdate:modelValue":r[2]||(r[2]=n=>l.value.recentdays=n),style:{display:"inline-block"},class:"form-item-content",options:f(P),placeholder:"Time Range"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1}),o(_,{span:2,class:"operation-container"},{default:t(()=>[o(D,{theme:"primary",type:"submit",style:{marginLeft:"8px"}},{default:t(()=>[m(" Search ")]),_:1}),o(D,{type:"reset",variant:"base",theme:"default"},{default:t(()=>[m(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["data"]),T("div",ne,[o(z,{data:E.value,columns:c,"row-key":re,"vertical-align":ie,hover:de,pagination:i.value,loading:y.value,"header-affixed-top":H.value,onChange:L},{direction:t(({row:n})=>[n.direction===f(C).BUY_ADD?(v(),b(N,{key:0,theme:"success",variant:"light"},{default:t(()=>[m(" Add ")]),_:1})):S("v-if",!0),n.direction===f(C).SELL_REMOVE?(v(),b(N,{key:1,theme:"danger",variant:"light"},{default:t(()=>[m(" Remove ")]),_:1})):S("v-if",!0)]),eventTxHash:t(({row:n})=>[T("a",{class:"t-button-link",href:"https://etherscan.io/tx/"+n.eventTxHash,target:"_blank"},x(n.eventTxHashDisplay),9,se)]),operator:t(({row:n})=>[T("a",{class:"t-button-link",href:"https://etherscan.io/address/"+n.operator,target:"_blank"},x(n.operatorDisplay),9,le)]),pairName:t(({row:n})=>[o(K,{to:"/detail/pair/"+n.poolAddress},{default:t(()=>[m(x(n.pairName),1)]),_:2},1032,["to"])]),_:1},8,["data","pagination","loading","header-affixed-top"])])])}}});var ce=A(ue,[["__scopeId","data-v-d965220e"],["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/deep_info/liquidity/components/CommonTable.vue"]]);const pe={name:"ListFilter"},_e=R({...pe,setup(a){return(e,c)=>(v(),b(ce))}});var ge=A(_e,[["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/deep_info/liquidity/filter/index.vue"]]);export{ge as default};
