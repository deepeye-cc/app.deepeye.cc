import{b as s,a as m,f as n,g as h}from"./format.1fa49ffc.js";import{q as l}from"./index.db0aee72.js";const c={Url:"/pair"},g={Url:"/hotpair"},N={Url:"/hotnewpair"};function t(r){r==null&&(r=[]);for(var e=0;e<r.length;e++)r[e].price=`${s(Number(r[e].price))}`,r[e].priceChangeIn1h=`${m(Number(r[e].priceChangeIn1h))}`,r[e].priceChangeIn24h=`${m(Number(r[e].priceChangeIn24h))}`,r[e].txNumIn1h=`${n(Number(r[e].txNumIn1h))}`,r[e].txNumIn24h=`${n(Number(r[e].txNumIn24h))}`,r[e].txNumChangeIn1h=`${m(Number(r[e].txNumChangeIn1h))}`,r[e].txNumChangeIn24h=`${m(Number(r[e].txNumChangeIn24h))}`,r[e].volumeByUsdIn1h=`$${n(Number(r[e].volumeByUsdIn1h))}`,r[e].volumeByUsdIn24h=`$${n(Number(r[e].volumeByUsdIn24h))}`,r[e].liquidityInUsd=`$${n(Number(r[e].liquidityInUsd))}`,r[e].valueCoinLiquidity=`$${n(Number(r[e].valueCoinLiquidity))}`,r[e].firstAddPoolTime=h(r[e].firstAddPoolTime);return r}async function f(r){return l.get({url:c.Url,params:{address:r}})}async function o(r,e,u){return r&&(e.page=r.value.current,e.pageSize=r.value.pageSize),u&&(e.sortBy=u.value.sortBy,e.descending=u.value.descending),l.get({url:g.Url,params:e})}async function v(r,e,u){return e.page=r.value.current,e.pageSize=r.value.pageSize,e.sortBy=u.value.sortBy,e.descending=u.value.descending,l.get({url:N.Url,params:e})}export{t as F,o as G,v as a,f as b};
