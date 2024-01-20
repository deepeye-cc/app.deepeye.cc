import{d as U,s as J,r as l,a as Q,x as W,H as X,c as i,g as Y,h as o,w as a,m as w,e as T,n as Z,k as x,V as P,j as p,t as k,O as ee,I as te,M as C,_ as A,f as oe}from"./index.4a6444ac.js";import{G as ae,R as se}from"./admin.4eee89ab.js";import{d as le}from"./format.2cb2ce4b.js";const ne={class:"list-common-table"},re={class:"search-input"},ie={class:"table-container"},ue={class:"left-operation-container"},ce="index",de="top",pe=!0,fe=U({__name:"CommonTable",setup(M){const R=J(),u=l(!1),f=l(""),m=l(!1),D=e=>{m.value=e};l(!1);const K=l();l();const z=[{title:"Username",fixed:"left",width:150,ellipsis:!0,align:"left",colKey:"username"},{title:"Role",colKey:"role",width:100},{title:"Parent",colKey:"parent",width:100},{title:"Register Region",colKey:"registerRegion",width:300},{title:"Register At",colKey:"registerAt",sorter:!0,width:150},{align:"left",width:100,colKey:"op",title:"Operation"}],r=l({username:"",role:"0"}),N=Q(),n=l({current:1,previous:1,pageSize:10,total:100}),c=l({sortBy:"registerAt",descending:!0}),_=l([]),g=l(!1),v=async()=>{g.value=!0;var e={};f.value!=""&&(e.finds=f.value);try{const t=await ae(n,e,c);_.value=[],t.list!=null&&(_.value=t.list),n.value={...n.value,total:t.count}}catch(t){console.log(t),t.response.status==401&&N.push("/login")}finally{g.value=!1}};W(()=>{v()}),window.addEventListener("message",e=>{e.data==="updateData"&&v()});const y=()=>{n.value.current=1,n.value.previous=n.value.current},h=e=>{y(),v()},I=e=>{h()},S=e=>{h()},L=(e,t)=>{console.log("[ rehandleChange ] changeParams: ",e),e.sorter?(c.value.sortBy=e.sorter.sortBy,c.value.descending=e.sorter.descending,y()):e.pagination||(c.value.sortBy=void 0,c.value.descending=void 0,y()),e.pagination&&(n.value.current=e.pagination.current,n.value.previous=e.pagination.previous,n.value.pageSize=e.pagination.pageSize),v()},$={role:[{required:!0,message:"Role is required",type:"error"}]},F=X(()=>({offsetTop:R.isUseTabsRouter?48:0,container:`.${te}-layout`})),O=()=>{u.value=!1,r.value={role:"0",username:""}},j=e=>{u.value=!0,K.value=e.row,r.value.role=e.row.role,r.value.username=e.row.username},q=async({validateResult:e,firstError:t})=>{if(t)C.warning(t);else{try{let d=await se(r.value.username,r.value.role);C.success("Reset role success"),h(null)}catch(d){C.error(d.message)}u.value=!1}};return(e,t)=>{const d=i("t-input"),E=i("t-row"),B=i("t-form"),V=i("t-form-item"),b=i("t-button"),G=i("t-dialog"),H=i("t-table");return T(),Y("div",ne,[o(B,{ref:"form","label-width":80,colon:"",style:{marginBottom:"8px"},onReset:I,onSubmit:S},{default:a(()=>[o(E,{justify:"space-between"},{default:a(()=>[w("div",re,[o(d,{modelValue:f.value,"onUpdate:modelValue":t[0]||(t[0]=s=>f.value=s),placeholder:"Please input the username/email to search",class:Z(["header-search",{"width-zero":!m.value}]),autofocus:m.value,onBlur:t[1]||(t[1]=s=>D(!1))},{"suffix-icon":a(()=>[o(x(P),{size:"20px",onClick:S})]),_:1},8,["modelValue","class","autofocus"])])]),_:1})]),_:1},512),o(G,{visible:u.value,"onUpdate:visible":t[3]||(t[3]=s=>u.value=s),header:"Modify User Info",width:580,footer:!1},{body:a(()=>[o(B,{ref:"form",data:r.value,rules:$,"label-width":150,onSubmit:q},{default:a(()=>[o(V,{label:"Role",name:"role"},{default:a(()=>[o(d,{modelValue:r.value.role,"onUpdate:modelValue":t[2]||(t[2]=s=>r.value.role=s),style:{width:"380px"},placeholder:"Please input the role"},null,8,["modelValue"])]),_:1}),o(V,{style:{float:"right"}},{default:a(()=>[o(b,{variant:"outline",onClick:O},{default:a(()=>[p("Cancel")]),_:1}),o(b,{theme:"primary",type:"submit"},{default:a(()=>[p("Submit")]),_:1})]),_:1})]),_:1},8,["data"])]),_:1},8,["visible"]),w("div",ie,[o(H,{data:_.value,columns:z,"row-key":ce,"vertical-align":de,hover:pe,pagination:n.value,loading:g.value,"header-affixed-top":F.value,onChange:L},{role:a(({row:s})=>[p(k(x(ee)(s.role)),1)]),registerAt:a(({row:s})=>[p(k(x(le)(s.registerAt)),1)]),op:a(s=>[w("div",ue,[o(b,{onClick:ge=>j(s)},{default:a(()=>[p(" Modify ")]),_:2},1032,["onClick"])])]),_:1},8,["data","pagination","loading","header-affixed-top"])])])}}});var ve=A(fe,[["__scopeId","data-v-1c39623a"],["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/admin/user/components/CommonTable.vue"]]);const me={name:"ListFilter"},_e=U({...me,setup(M){return(R,u)=>(T(),oe(ve))}});var we=A(_e,[["__file","/Users/mbp13/git/deepeye/app-deepeye/src/pages/admin/user/index.vue"]]);export{we as default};