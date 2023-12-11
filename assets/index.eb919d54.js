import{d as M,u as j,r as w,a as J,w as B,o as Q,n as X,b as Y,c as u,e as b,f as n,g as a,F as O,h as c,i as Z,j as ee,k as te,l as v,m as i,p as y,q as T,t as U,s as x,_ as R}from"./index.6d4d4a45.js";import{g as ae,u as ne,i as re,a as se,b as oe,c as le,d as A}from"./dayjs.min.6f6f0910.js";import{T as N}from"./index.614e4137.js";import{f as l,a as o,r as ie}from"./index.6e1e6287.js";const de=[{title:"Pair Name",align:"left",ellipsis:!0,colKey:"pairName",width:180},{title:"Price",align:"center",colKey:"priceChangeIn24h",width:110},{title:"Tx Num",align:"center",colKey:"txNumIn24h",width:90},{title:"Volume",align:"center",colKey:"volumeByUsdIn24h",width:100}],ue=[{title:"Pair Name",align:"left",ellipsis:!0,colKey:"pairName",width:180},{title:"Price",align:"center",colKey:"priceChangeIn24h",width:110},{title:"Tx Num",align:"center",colKey:"txNumIn24h",width:90},{title:"Volume",align:"center",colKey:"volumeByUsdIn24h",width:100}];function F(t){const s={xAxis:{type:"category",show:!1,data:["\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D","\u5468\u65E5"]},yAxis:{show:!1,type:"value"},grid:{top:0,left:0,right:0,bottom:0}};return t==="line"?{...s,color:["#fff"],series:[{data:[150,230,224,218,135,147,260],type:t,showSymbol:!0,symbol:"circle",symbolSize:0,markPoint:{data:[{type:"max",name:"\u6700\u5927\u503C"},{type:"min",name:"\u6700\u5C0F\u503C"}]},lineStyle:{width:2}}]}:{...s,color:ae(),series:[{data:[100,130,184,218,{value:135,itemStyle:{opacity:.2}},{value:118,itemStyle:{opacity:.2}},{value:60,itemStyle:{opacity:.2}}],type:t,barWidth:9}]}}const ce={Url:"/global"};function he(t){var e=t.global,s={value1h:l(e.txNumIn1h),value24h:l(e.txNumIn24h),trend1h:o(e.txNumChangeIn1h),trend24h:o(e.txNumChangeIn24h)},h={value1h:l(e.pairCreatedNumIn1h),value24h:l(e.pairCreatedNumIn24h),trend1h:o(e.pairCreatedChangeIn1h),trend24h:o(e.pairCreatedChangeIn24h)},m={value1h:`$${l(e.volumeByUsdIn1h)}`,value24h:`$${l(e.volumeByUsdIn24h)}`,trend1h:o(e.volumeChangeByUsdIn1h),trend24h:o(e.volumeChangeByUsdIn24h)},k={value1h:0,value24h:`${(e.baseGasPrice/1e9).toFixed(2)} gwei`,trend1h:o(e.baseGasPriceChgIn1h),trend24h:o(e.baseGasPriceChgIn24h)},f={transactions:s,volumes:m,newpairs:h,baseGas:k};return f}function me(t){for(let e=0;e<t.hot.length;e++)t.hot[e].priceChangeIn24h=`${o(Number(t.hot[e].priceChangeIn24h))}`,t.hot[e].txNumIn24h=`${l(Number(t.hot[e].txNumIn24h))}`,t.hot[e].volumeByUsdIn24h=`$${l(Number(t.hot[e].volumeByUsdIn24h))}`,t.hot[e].rowIndex=e;for(let e=0;e<t.hot.length;e++)t.new[e].priceChangeIn24h=`${o(Number(t.new[e].priceChangeIn24h))}`,t.new[e].txNumIn24h=`${l(Number(t.new[e].txNumIn24h))}`,t.new[e].volumeByUsdIn24h=`$${l(Number(t.new[e].volumeByUsdIn24h))}`,t.new[e].rowIndex=e;return t}async function pe(){return ie.get({url:ce.Url})}const _e={class:"dashboard-item-top"},ve={class:"dashboard-item-left"},ye={class:"dashboard-item-bottom"},be={key:0,class:"dashboard-item-block"},fe={class:"dashboard-item-bottom"},ge={class:"dashboard-item-block"},Ce={name:"DashboardBase"},Ie=M({...Ce,setup(t){ne([re,se,oe]);const e=j(),s=w(1);let h,m;const k=()=>{h||(h=document.getElementById("moneyContainer")),m=A(h),m.setOption(F("line"))};let f,I;const q=()=>{f||(f=document.getElementById("refundContainer")),I=A(f),I.setOption(F("bar"))},W=()=>{k(),q()},E=J();E.currentRoute.value.path,B(()=>E.currentRoute.value,(d,p)=>{d.fullPath.includes("dashboard")&&S()});const P=()=>{},g=w([{title:"Total Transactions(24H)",data:{value1h:0,value24h:0,trend1h:0,trend24h:0}},{title:"Total Volume in USD(24H)",data:{value1h:0,value24h:0,trend1h:0,trend24h:0}},{title:"Base Gas Price(Realtime)",data:{value1h:0,value24h:0,trend1h:0,trend24h:0}},{title:"Pair Created Num(24H)",data:{value1h:0,value24h:0,trend1h:0,trend24h:0}}]);var D=w([]),K=w([]);const S=async()=>{try{var d=await pe(),p=he(d);g.value[0].data=p.transactions,g.value[1].data=p.volumes,g.value[2].data=p.baseGas,g.value[3].data=p.newpairs;var _=me(d);D.value=_.hot,K.value=_.new}catch(C){console.log(C)}};return Q(()=>{S(),X(()=>{}),window.addEventListener("resize",P,!1)}),Y(()=>{window.removeEventListener("resize",P)}),B(()=>e.brandTheme,()=>{le([I])}),B(()=>e.mode,()=>{[m,I].forEach(d=>{d.dispose()}),W()}),(d,p)=>{const _=u("t-card"),C=u("t-col"),V=u("t-row"),L=u("t-radio-button"),G=u("t-radio-group"),z=u("router-link"),H=u("t-table");return c(),b(O,null,[n(V,{gutter:[16,16]},{default:a(()=>[(c(!0),b(O,null,Z(g.value,(r,$)=>(c(),ee(C,{key:r.title,xs:6,xl:3},{default:a(()=>[n(_,{title:r.title,style:{height:"180px"},class:te({"dashboard-item":!0})},{footer:a(()=>[v("div",ye,[$!=3?(c(),b("div",be,[i(' <div class="dashboard-item-block"> '),y(" Last 1h: "),n(N,{class:"dashboard-item-trend",type:r.data.trend1h>=0?"up":"down",describe:r.data.trend1h},null,8,["type","describe"])])):i("v-if",!0)]),v("div",fe,[v("div",ge,[y(" Last 24h: "),n(N,{class:"dashboard-item-trend",type:r.data.trend24h>=0?"up":"down",describe:r.data.trend24h},null,8,["type","describe"])])])]),default:a(()=>[v("div",_e,[v("span",{style:T({fontSize:`${s.value*36}px`})},U(r.data.value24h),5)]),v("div",ve,[$===0?(c(),b("div",{key:0,id:"moneyContainer",class:"dashboard-chart-container",style:T({width:`${s.value*120}px`,height:`${s.value*66}px`})},null,4)):$===1?(c(),b("div",{key:1,id:"refundContainer",class:"dashboard-chart-container",style:T({width:`${s.value*120}px`,height:`${s.value*42}px`})},null,4)):i("v-if",!0)])]),_:2},1032,["title"])]),_:2},1024))),128))]),_:1}),n(V,{gutter:16,class:"row-container"},{default:a(()=>[i(" hot token card "),n(C,{xs:12,xl:6},{default:a(()=>[n(_,{title:"Hot Token",class:"dashboard-rank-card",bordered:!1},{actions:a(()=>[n(G,{"default-value":"dateVal"},{default:a(()=>[n(L,{value:"monthVal"},{default:a(()=>[y("Last 24H")]),_:1})]),_:1})]),default:a(()=>[n(H,{data:x(D),columns:x(de),"row-key":"colKey"},{priceChangeIn24h:a(({row:r})=>[n(N,{type:r.priceChangeIn24h>0?"up":"down",describe:r.priceChangeIn24h},null,8,["type","describe"])]),pairName:a(({row:r})=>[n(z,{to:"/detail/pair/"+r.address},{default:a(()=>[y(U(r.pairName),1)]),_:2},1032,["to"])]),_:1},8,["data","columns"])]),_:1})]),_:1}),i(" new token card "),n(C,{xs:12,xl:6},{default:a(()=>[n(_,{title:"New Token",class:"dashboard-rank-card",bordered:!1},{actions:a(()=>[n(G,{"default-value":"dateVal"},{default:a(()=>[n(L,{value:"monthVal"},{default:a(()=>[y("Last 24H")]),_:1})]),_:1})]),default:a(()=>[n(H,{data:x(K),columns:x(ue),"row-key":"colKey"},{priceChangeIn24h:a(({row:r})=>[n(N,{type:r.priceChangeIn24h>0?"up":"down",describe:r.priceChangeIn24h},null,8,["type","describe"])]),pairName:a(({row:r})=>[n(z,{to:"/detail/pair/"+r.address},{default:a(()=>[y(U(r.pairName),1)]),_:2},1032,["to"])]),_:1},8,["data","columns"])]),_:1})]),_:1})]),_:1})],64)}}});var we=R(Ie,[["__scopeId","data-v-6543c289"],["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/dashboard/base/components/TopPanel.vue"]]);const xe={name:"DashboardBase"},Ne=M({...xe,setup(t){return(e,s)=>(c(),b("div",null,[i(" \u9876\u90E8 card  "),n(we,{class:"row-container"}),i(" \u5217\u8868\u6392\u540D "),i(' <rank-list class="row-container" /> '),i(" hot list "),i(' <hot-list class="row-container" /> ')]))}});var Ue=R(Ne,[["__scopeId","data-v-0d2b0973"],["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/dashboard/base/index.vue"]]);export{Ue as default};
