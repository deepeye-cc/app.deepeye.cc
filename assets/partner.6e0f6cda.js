import{A as l,E as u}from"./encrypt.dd67cb0a.js";import{q as i}from"./index.5f27ed32.js";const n={Deals:"/partner/deals",Wisers:"/partner/wisers"};var y={urlPrefix:""};async function o(s,e,t){let c=JSON.parse(JSON.stringify(y));e.page=s.value.current,e.pageSize=s.value.pageSize,e.sortBy=t.value.sortBy,e.descending=t.value.descending;var a;try{a=await i.get({url:n.Deals,params:e},c)}catch(r){throw r}try{let r=l(a,"deepeye"+u);return JSON.parse(r)}catch(r){throw r}}async function v(s,e,t){let c=JSON.parse(JSON.stringify(y));e.page=s.value.current,e.pageSize=s.value.pageSize,e.sortBy=t.value.sortBy,e.descending=t.value.descending;var a;try{a=await i.get({url:n.Wisers,params:e},c)}catch(r){throw r}try{let r=l(a,"deepeye"+u);return JSON.parse(r)}catch(r){throw r}}export{o as G,v as a};
