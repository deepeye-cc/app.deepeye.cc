import{q as W,d as z,s as j,r as x,a as J,v as B,x as Q,c as d,g as f,h as n,w as a,F as A,e as u,y as X,f as Y,n as Z,m as y,j as b,i as h,z as T,t as U,k as N,_ as F}from"./index.db0aee72.js";import{g as ee,u as te,i as ae,a as ne,b as re,c as se,d as H}from"./dayjs.min.d43d4c00.js";import{T as w}from"./index.5d6be288.js";import{f as l,a as o}from"./format.1fa49ffc.js";const oe=[{title:"Total Transactions(24H)",data:{value1h:0,value24h:0,trend1h:0,trend24h:0}},{title:"Total Volume in USD(24H)",data:{value1h:0,value24h:0,trend1h:0,trend24h:0}},{title:"Base Gas Price(Realtime)",data:{value1h:0,value24h:0,trend1h:0,trend24h:0}},{title:"Pair Created Num(24H)",data:{value1h:0,value24h:0,trend1h:0,trend24h:0}}],le=[{title:"Pair Name",align:"left",ellipsis:!0,colKey:"pairName",width:180},{title:"Price",align:"center",colKey:"priceChangeIn24h",width:110},{title:"Tx Num",align:"center",colKey:"txNumIn24h",width:90},{title:"Volume",align:"center",colKey:"volumeByUsdIn24h",width:100}],ie=[{title:"Pair Name",align:"left",ellipsis:!0,colKey:"pairName",width:180},{title:"Price",align:"center",colKey:"priceChangeIn24h",width:110},{title:"Tx Num",align:"center",colKey:"txNumIn24h",width:90},{title:"Volume",align:"center",colKey:"volumeByUsdIn24h",width:100}];function O(t){const s={xAxis:{type:"category",show:!1,data:["\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D","\u5468\u65E5"]},yAxis:{show:!1,type:"value"},grid:{top:0,left:0,right:0,bottom:0}};return t==="line"?{...s,color:["#fff"],series:[{data:[150,230,224,218,135,147,260],type:t,showSymbol:!0,symbol:"circle",symbolSize:0,markPoint:{data:[{type:"max",name:"\u6700\u5927\u503C"},{type:"min",name:"\u6700\u5C0F\u503C"}]},lineStyle:{width:2}}]}:{...s,color:ee(),series:[{data:[100,130,184,218,{value:135,itemStyle:{opacity:.2}},{value:118,itemStyle:{opacity:.2}},{value:60,itemStyle:{opacity:.2}}],type:t,barWidth:9}]}}const de={Url:"/global"};function ue(t){var e=t.global,s={value1h:l(e.txNumIn1h),value24h:l(e.txNumIn24h),trend1h:o(e.txNumChangeIn1h),trend24h:o(e.txNumChangeIn24h)},c={value1h:l(e.pairCreatedNumIn1h),value24h:l(e.pairCreatedNumIn24h),trend1h:o(e.pairCreatedChangeIn1h),trend24h:o(e.pairCreatedChangeIn24h)},m={value1h:`$${l(e.volumeByUsdIn1h)}`,value24h:`$${l(e.volumeByUsdIn24h)}`,trend1h:o(e.volumeChangeByUsdIn1h),trend24h:o(e.volumeChangeByUsdIn24h)},k={value1h:0,value24h:`${(e.baseGasPrice/1e9).toFixed(2)} gwei`,trend1h:o(e.baseGasPriceChgIn1h),trend24h:o(e.baseGasPriceChgIn24h)},g={transactions:s,volumes:m,newpairs:c,baseGas:k};return g}function he(t){for(let e=0;e<t.hot.length;e++)t.hot[e].priceChangeIn24h=`${o(Number(t.hot[e].priceChangeIn24h))}`,t.hot[e].txNumIn24h=`${l(Number(t.hot[e].txNumIn24h))}`,t.hot[e].volumeByUsdIn24h=`$${l(Number(t.hot[e].volumeByUsdIn24h))}`,t.hot[e].rowIndex=e;for(let e=0;e<t.hot.length;e++)t.new[e].priceChangeIn24h=`${o(Number(t.new[e].priceChangeIn24h))}`,t.new[e].txNumIn24h=`${l(Number(t.new[e].txNumIn24h))}`,t.new[e].volumeByUsdIn24h=`$${l(Number(t.new[e].volumeByUsdIn24h))}`,t.new[e].rowIndex=e;return t}async function ce(){return W.get({url:de.Url})}const me={class:"dashboard-item-top"},pe={class:"dashboard-item-left"},_e={class:"dashboard-item-bottom"},ve={key:0,class:"dashboard-item-block"},ye={class:"dashboard-item-bottom"},be={class:"dashboard-item-block"},fe={name:"DashboardBase"},ge=z({...fe,setup(t){te([ae,ne,re]);const e=j(),s=x(1);let c,m;const k=()=>{c||(c=document.getElementById("moneyContainer")),m=H(c),m.setOption(O("line"))};let g,I;const M=()=>{g||(g=document.getElementById("refundContainer")),I=H(g),I.setOption(O("bar"))},R=()=>{k(),M()},q=J();B(()=>q.currentRoute.value,(i,_)=>{i.fullPath.includes("dashboard")&&E()});const p=x([]);p.value=oe;var P=x([]),D=x([]);const E=async()=>{try{var i=await ce(),_=ue(i);p.value[0].data=_.transactions,p.value[1].data=_.volumes,p.value[2].data=_.baseGas,p.value[3].data=_.newpairs;var v=he(i);P.value=v.hot,D.value=v.new}catch(C){console.log(C)}};return Q(()=>{E()}),B(()=>e.brandTheme,()=>{se([I])}),B(()=>e.mode,()=>{[m,I].forEach(i=>{i.dispose()}),R()}),(i,_)=>{const v=d("t-card"),C=d("t-col"),K=d("t-row"),S=d("t-radio-button"),V=d("t-radio-group"),G=d("router-link"),L=d("t-table");return u(),f(A,null,[n(K,{gutter:[16,16]},{default:a(()=>[(u(!0),f(A,null,X(p.value,(r,$)=>(u(),Y(C,{key:r.title,xs:6,xl:3},{default:a(()=>[n(v,{title:r.title,style:{height:"180px"},class:Z({"dashboard-item":!0})},{footer:a(()=>[y("div",_e,[$!=3?(u(),f("div",ve,[b(" Last 1h: "),n(w,{class:"dashboard-item-trend",type:r.data.trend1h>=0?"up":"down",describe:r.data.trend1h},null,8,["type","describe"])])):h("v-if",!0)]),y("div",ye,[y("div",be,[b(" Last 24h: "),n(w,{class:"dashboard-item-trend",type:r.data.trend24h>=0?"up":"down",describe:r.data.trend24h},null,8,["type","describe"])])])]),default:a(()=>[y("div",me,[y("span",{style:T({fontSize:`${s.value*36}px`})},U(r.data.value24h),5)]),y("div",pe,[$===0?(u(),f("div",{key:0,id:"moneyContainer",class:"dashboard-chart-container",style:T({width:`${s.value*120}px`,height:`${s.value*66}px`})},null,4)):$===1?(u(),f("div",{key:1,id:"refundContainer",class:"dashboard-chart-container",style:T({width:`${s.value*120}px`,height:`${s.value*42}px`})},null,4)):h("v-if",!0)])]),_:2},1032,["title"])]),_:2},1024))),128))]),_:1}),n(K,{gutter:[16,16]},{default:a(()=>[n(C,{xs:12,xl:6},{default:a(()=>[n(v,{title:"Hot Token",class:"dashboard-rank-card",bordered:!1},{actions:a(()=>[n(V,{"default-value":"dateVal"},{default:a(()=>[n(S,{value:"monthVal"},{default:a(()=>[b("Last 24H")]),_:1})]),_:1})]),default:a(()=>[n(L,{data:N(P),columns:N(le),"row-key":"colKey"},{priceChangeIn24h:a(({row:r})=>[n(w,{type:r.priceChangeIn24h>0?"up":"down",describe:r.priceChangeIn24h},null,8,["type","describe"])]),pairName:a(({row:r})=>[n(G,{to:"/detail/pair/"+r.address},{default:a(()=>[b(U(r.pairName),1)]),_:2},1032,["to"])]),_:1},8,["data","columns"])]),_:1})]),_:1}),n(C,{xs:12,xl:6},{default:a(()=>[n(v,{title:"New Token",class:"dashboard-rank-card",bordered:!1},{actions:a(()=>[n(V,{"default-value":"dateVal"},{default:a(()=>[n(S,{value:"monthVal"},{default:a(()=>[b("Last 24H")]),_:1})]),_:1})]),default:a(()=>[n(L,{data:N(D),columns:N(ie),"row-key":"colKey"},{priceChangeIn24h:a(({row:r})=>[n(w,{type:r.priceChangeIn24h>0?"up":"down",describe:r.priceChangeIn24h},null,8,["type","describe"])]),pairName:a(({row:r})=>[n(G,{to:"/detail/pair/"+r.address},{default:a(()=>[b(U(r.pairName),1)]),_:2},1032,["to"])]),_:1},8,["data","columns"])]),_:1})]),_:1})]),_:1})],64)}}});var Ce=F(ge,[["__scopeId","data-v-6543c289"],["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/dashboard/base/components/TopPanel.vue"]]);const Ie={name:"DashboardBase"},xe=z({...Ie,setup(t){return(e,s)=>(u(),f("div",null,[h(" \u9876\u90E8 card  "),n(Ce),h(" \u5217\u8868\u6392\u540D "),h(" <rank-list  /> "),h(" hot list "),h(" <hot-list  /> ")]))}});var Be=F(xe,[["__scopeId","data-v-0d2b0973"],["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/dashboard/base/index.vue"]]);export{Be as default};
