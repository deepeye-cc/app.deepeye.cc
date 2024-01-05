import{q as V,d as N,s as Q,r as n,a as W,x as X,H as Z,c as d,g as ee,h as o,w as a,m as C,e as T,n as te,k as S,U as oe,j as m,t as k,Y as ae,I as se,M as R,_ as z,f as le}from"./index.4075b0e4.js";import{d as ne}from"./format.3336b0b3.js";const M={AdminUsers:"/user/admin/users"};var D={urlPrefix:""};function re(p,r,l){let u=JSON.parse(JSON.stringify(D));return r.page=p.value.current,r.pageSize=p.value.pageSize,r.sortBy=l.value.sortBy,r.descending=l.value.descending,V.get({url:M.AdminUsers,params:r},u)}function ie(p,r){let l=JSON.parse(JSON.stringify(D)),u={username:p,role:Number(r)};return V.patch({url:M.AdminUsers,params:u},l)}const ue={class:"list-common-table"},ce={class:"search-input"},de={class:"table-container"},pe={class:"left-operation-container"},fe="index",ve="top",me=!0,_e=N({__name:"CommonTable",setup(p){const r=Q(),l=n(!1),u=n(""),g=n(!1),K=e=>{g.value=e};n(!1);const q=n();n();const I=[{title:"Username",fixed:"left",width:150,ellipsis:!0,align:"left",colKey:"username"},{title:"Role",colKey:"role",width:100},{title:"Parent",colKey:"parent",width:100},{title:"Register Region",colKey:"registerRegion",width:300},{title:"Register At",colKey:"registerAt",sorter:!0,width:150},{align:"left",width:100,colKey:"op",title:"Operation"}],c=n({username:"",role:"0"}),J=W(),i=n({current:1,previous:1,pageSize:10,total:100}),f=n({sortBy:"registerAt",descending:!0}),y=n([]),h=n(!1),_=async()=>{h.value=!0;var e={};u.value!=""&&(e.finds=u.value);try{const t=await re(i,e,f);y.value=[],t.list!=null&&(y.value=t.list),i.value={...i.value,total:t.count}}catch(t){console.log(t),t.response.status==401&&J.push("/login")}finally{h.value=!1}};X(()=>{_()}),window.addEventListener("message",e=>{e.data==="updateData"&&_()});const b=()=>{i.value.current=1,i.value.previous=i.value.current},w=e=>{b(),_()},L=e=>{w()},U=e=>{w()},$=(e,t)=>{console.log("[ rehandleChange ] changeParams: ",e),e.sorter?(f.value.sortBy=e.sorter.sortBy,f.value.descending=e.sorter.descending,b()):e.pagination||(f.value.sortBy=void 0,f.value.descending=void 0,b()),e.pagination&&(i.value.current=e.pagination.current,i.value.previous=e.pagination.previous,i.value.pageSize=e.pagination.pageSize),_()},F={role:[{required:!0,message:"Role is required",type:"error"}]},O=Z(()=>({offsetTop:r.isUseTabsRouter?48:0,container:`.${se}-layout`})),j=()=>{l.value=!1,c.value={role:"0",username:""}},E=e=>{l.value=!0,q.value=e.row,c.value.role=e.row.role,c.value.username=e.row.username},G=async({validateResult:e,firstError:t})=>{if(t)R.warning(t);else{try{let v=await ie(c.value.username,c.value.role);R.success("Reset role success"),w(null)}catch(v){R.error(v.message)}l.value=!1}};return(e,t)=>{const v=d("t-input"),H=d("t-row"),B=d("t-form"),A=d("t-form-item"),x=d("t-button"),Y=d("t-dialog"),P=d("t-table");return T(),ee("div",ue,[o(B,{ref:"form","label-width":80,colon:"",style:{marginBottom:"8px"},onReset:L,onSubmit:U},{default:a(()=>[o(H,{justify:"space-between"},{default:a(()=>[C("div",ce,[o(v,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=s=>u.value=s),placeholder:"Please input the username/email to search",class:te(["header-search",{"width-zero":!g.value}]),autofocus:g.value,onBlur:t[1]||(t[1]=s=>K(!1))},{"suffix-icon":a(()=>[o(S(oe),{size:"20px",onClick:U})]),_:1},8,["modelValue","class","autofocus"])])]),_:1})]),_:1},512),o(Y,{visible:l.value,"onUpdate:visible":t[3]||(t[3]=s=>l.value=s),header:"Modify User Info",width:580,footer:!1},{body:a(()=>[o(B,{ref:"form",data:c.value,rules:F,"label-width":150,onSubmit:G},{default:a(()=>[o(A,{label:"Role",name:"role"},{default:a(()=>[o(v,{modelValue:c.value.role,"onUpdate:modelValue":t[2]||(t[2]=s=>c.value.role=s),style:{width:"380px"},placeholder:"Please input the role"},null,8,["modelValue"])]),_:1}),o(A,{style:{float:"right"}},{default:a(()=>[o(x,{variant:"outline",onClick:j},{default:a(()=>[m("Cancel")]),_:1}),o(x,{theme:"primary",type:"submit"},{default:a(()=>[m("Submit")]),_:1})]),_:1})]),_:1},8,["data"])]),_:1},8,["visible"]),C("div",de,[o(P,{data:y.value,columns:I,"row-key":fe,"vertical-align":ve,hover:me,pagination:i.value,loading:h.value,"header-affixed-top":O.value,onChange:$},{role:a(({row:s})=>[m(k(S(ae)(s.role)),1)]),registerAt:a(({row:s})=>[m(k(S(ne)(s.registerAt)),1)]),op:a(s=>[C("div",pe,[o(x,{onClick:be=>E(s)},{default:a(()=>[m(" Modify ")]),_:2},1032,["onClick"])])]),_:1},8,["data","pagination","loading","header-affixed-top"])])])}}});var ge=z(_e,[["__scopeId","data-v-1c39623a"],["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/admin/user/components/CommonTable.vue"]]);const ye={name:"ListFilter"},he=N({...ye,setup(p){return(r,l)=>(T(),le(ge))}});var Ce=z(he,[["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/admin/user/index.vue"]]);export{Ce as default};
