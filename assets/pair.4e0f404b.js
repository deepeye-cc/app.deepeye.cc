import{b as h,a as u,f as m,g as s,r as l}from"./index.b9165e13.js";const c={Url:"/pair"},g={Url:"/hotpair"},N={Url:"/hotnewpair"};function I(r){r==null&&(r=[]);for(var e=0;e<r.length;e++)r[e].price=`${h(Number(r[e].price))}`,r[e].priceChangeIn1h=`${u(Number(r[e].priceChangeIn1h))}%`,r[e].priceChangeIn24h=`${u(Number(r[e].priceChangeIn24h))}%`,r[e].txNumIn1h=`${m(Number(r[e].txNumIn1h))}`,r[e].txNumIn24h=`${m(Number(r[e].txNumIn24h))}`,r[e].txNumChangeIn1h=`${u(Number(r[e].txNumChangeIn1h))}%`,r[e].txNumChangeIn24h=`${u(Number(r[e].txNumChangeIn24h))}%`,r[e].volumeByUsdIn1h=`$${m(Number(r[e].volumeByUsdIn1h))}`,r[e].volumeByUsdIn24h=`$${m(Number(r[e].volumeByUsdIn24h))}`,r[e].firstAddPoolTime=s(r[e].firstAddPoolTime);return r}async function f(r){return l.get({url:c.Url,params:{address:r}})}async function o(r,e,n){return r&&(e.page=r.value.current,e.pageSize=r.value.pageSize),n&&(e.sortBy=n.value.sortBy,e.descending=n.value.descending),l.get({url:g.Url,params:e})}async function p(r,e,n){return e.page=r.value.current,e.pageSize=r.value.pageSize,e.sortBy=n.value.sortBy,e.descending=n.value.descending,l.get({url:N.Url,params:e})}export{I as F,o as G,p as a,f as b};
