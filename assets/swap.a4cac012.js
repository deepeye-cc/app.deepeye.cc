import{A as l,E as o}from"./encrypt.b54d10dc.js";import{b as m,f as t,g as c}from"./format.b40c70ff.js";import{q as f}from"./index.0e5aade2.js";const p={Url:"/swaps"};function i(e){e==null&&(e=[]);for(var r=0;r<e.length;r++)e[r].trader==""&&(e[r].trader=e[r].operator),e[r].amountOfMainToken=`${m(Number(e[r].amountOfMainToken))}`,e[r].price=`${m(Number(e[r].price))}`,e[r].volumeInUsd==""?e[r].volumeInUsd="NA":e[r].volumeInUsd=`$${t(Number(e[r].volumeInUsd))}`,e[r].swapTime=c(e[r].swapTime);return e}async function y(e,r,n){e&&(r.page=e.value.current,r.pageSize=e.value.pageSize),n&&(r.sortBy=n.value.sortBy,r.descending=n.value.descending);var u;try{u=await f.get({url:p.Url,params:r})}catch(s){throw s}try{let s=l(u,o);return JSON.parse(s)}catch(s){throw s}}export{i as F,y as G};
