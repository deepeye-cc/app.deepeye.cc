import{A as l,E as o}from"./encrypt.16bb417f.js";import{b as m,f as t,g as c}from"./format.2cb2ce4b.js";import{q as f}from"./index.7153c215.js";const p={Url:"/swaps"};function y(e){e==null&&(e=[]);for(var r=0;r<e.length;r++)e[r].trader==""&&(e[r].trader=e[r].operator),e[r].amountOfMainToken=`${m(Number(e[r].amountOfMainToken))}`,e[r].price=`${m(Number(e[r].price))}`,e[r].volumeInUsd==""?e[r].volumeInUsd="NA":e[r].volumeInUsd=`$${t(Number(e[r].volumeInUsd))}`,e[r].swapTime=c(e[r].swapTime);return e}async function i(e,r,n){e&&(r.page=e.value.current,r.pageSize=e.value.pageSize),n&&(r.sortBy=n.value.sortBy,r.descending=n.value.descending);var u;try{u=await f.get({url:p.Url,params:r})}catch(s){throw s}try{let s=l(u,"deepeye"+o);return JSON.parse(s)}catch(s){throw s}}export{y as F,i as G};
