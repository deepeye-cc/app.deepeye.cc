import{q as u}from"./index.db0aee72.js";const d={AdminUsers:"/user/admin/users",AdminTrackAddrs:"/user/admin/trackaddrs"};var t={urlPrefix:""};function a(r,e,s){let n=JSON.parse(JSON.stringify(t));return e.page=r.value.current,e.pageSize=r.value.pageSize,e.sortBy=s.value.sortBy,e.descending=s.value.descending,u.get({url:d.AdminUsers,params:e},n)}function l(r,e){let s=JSON.parse(JSON.stringify(t)),n={username:r,role:Number(e)};return u.patch({url:d.AdminUsers,params:n},s)}function c(r,e,s){let n=JSON.parse(JSON.stringify(t));return e.page=r.value.current,e.pageSize=r.value.pageSize,e.sortBy=s.value.sortBy,e.descending=s.value.descending,u.get({url:d.AdminTrackAddrs,params:e},n)}export{c as A,a as G,l as R};
