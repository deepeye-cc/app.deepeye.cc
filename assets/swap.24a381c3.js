import{b as u,f as s,g as l,r as m}from"./index.483788e1.js";const f={Url:"/swaps"};function c(e){e==null&&(e=[]);for(var r=0;r<e.length;r++)e[r].trader==""&&(e[r].trader=e[r].operator),e[r].amountOfMainToken=`${u(Number(e[r].amountOfMainToken))}`,e[r].price=`${u(Number(e[r].price))}`,e[r].volumeInUsd==""?e[r].volumeInUsd="NA":e[r].volumeInUsd=`$${s(Number(e[r].volumeInUsd))}`,e[r].swapTime=l(e[r].swapTime);return e}async function v(e,r,n){return e&&(r.page=e.value.current,r.pageSize=e.value.pageSize),n&&(r.sortBy=n.value.sortBy,r.descending=n.value.descending),m.get({url:f.Url,params:r})}export{c as F,v as G};
