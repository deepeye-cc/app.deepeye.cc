function l(t){return t>1?parseFloat((t*100).toFixed(0)):t>.1?parseFloat((t*100).toFixed(1)):parseFloat((t*100).toFixed(2))}function c(t,e=2){const n=[" "," K"," M"," B"," T"];var a=t===0?0:Math.floor(Math.log10(Math.abs(t))/3);a<0&&(a=0);const r=n[a],o=t/Math.pow(10,a*3);return`${Number.isInteger(o)?o.toLocaleString():o.toFixed(e)} ${r}`}function u(t,e,n){if(t.length<=e+n)return t;const a=t.slice(0,e),r=t.slice(-n);return`${a}...${r}`}function f(t){const e=new Date(t);return new Date(e.toLocaleString()).toLocaleString(void 0,{dateStyle:"short",timeStyle:"short"})}function g(t){return Math.abs(t)>100?t.toFixed(0):Math.abs(t)>.01?t.toFixed(2):t.toExponential(2)}function d(t){if(t==null||t==""||t==="0001-01-01T00:00:00Z")return"Long Time ago";const e=new Date(t);if(isNaN(e.getTime()))return"Long Time ago";const a=new Date().getTime()-e.getTime(),r=Math.floor(a/1e3),o=Math.floor(r/60),i=Math.floor(o/60),s=Math.floor(i/24);return s>0?`${s} days ago`:i>0?`${i} hours ago`:o>0?`${o} minutes ago`:`${r} seconds ago`}function m(t){return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(t)}export{l as a,g as b,u as c,f as d,c as f,d as g,m as i};
