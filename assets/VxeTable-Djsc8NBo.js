var _=Object.defineProperty;var u=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var f=(r,o,e)=>o in r?_(r,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[o]=e,g=(r,o)=>{for(var e in o||(o={}))k.call(o,e)&&f(r,e,o[e]);if(u)for(var e of u(o))C.call(o,e)&&f(r,e,o[e]);return r};var c=(r,o,e)=>new Promise((s,m)=>{var t=i=>{try{a(e.next(i))}catch(p){m(p)}},n=i=>{try{a(e.throw(i))}catch(p){m(p)}},a=i=>i.done?s(i.value):Promise.resolve(i.value).then(t,n);a((e=e.apply(r,o)).next())});import{a as v}from"./componentMap-DkJI5hyQ.js";import{a as y}from"./entry/index-D6rh1WO9-1710381847867.js";import"./helper-Q708zihh.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BSvufs5U.js";import"./antd-D1Pawy5U.js";import"./index-DlbGfZP3.js";import"./TableImg.vue_vue_type_style_index_0_lang-BvoWbnd_.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import{P as h}from"./index-Byc39LDK.js";import{vxeTableColumns as T,vxeTableFormSchema as V}from"./tableData-88MoFimM.js";import{V as A}from"./index-DBvmaTsu.js";import{d as b}from"./table-3e3_rQe4.js";import{d as B,f as S,r as w,Z as P,a8 as R,a9 as d,k as x,u as l,ac as q}from"./vue-COhTiP8A.js";import"./useFormItem-BQ20sB9v.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-Ba2qFJad.js";import"./useSortable-I0OthOIs.js";import"./download-ChyWq6xR.js";import"./base64Conver-bBv-IO2K.js";import"./index-ftV3ORYs.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-6N-34zMn.js";import"./copyTextToClipboard-hMH5xuO5.js";import"./index-BDCrlPRn.js";import"./index-OMlUosyQ.js";import"./useWindowSizeFn-BVe9e16o.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useContentViewHeight-B7xuORQ4.js";import"./select-DS4QyLy2.js";const se=B({__name:"VxeTable",setup(r){const{createMessage:o}=y(),e=S(),s=w({id:"VxeTable",keepSource:!0,editConfig:{trigger:"click",mode:"cell",showStatus:!0},columns:T,toolbarConfig:{buttons:[{content:"在第一行新增",buttonRender:{name:"AButton",props:{type:"primary",preIcon:"mdi:page-next-outline"},events:{click:()=>{var t;(t=e.value)==null||t.insert({name:"新增的"}),o.success("新增成功")}}}},{content:"在最后一行新增",buttonRender:{name:"AButton",props:{type:"warning"},events:{click:()=>{var t;(t=e.value)==null||t.insertAt({name:"新增的"},-1)}}}}]},formConfig:{enabled:!0,items:V},height:"auto",proxyConfig:{ajax:{query:a=>c(this,[a],function*({page:t,form:n}){return b(g({page:t.currentPage,pageSize:t.pageSize},n))}),queryAll:n=>c(this,[n],function*({form:t}){return yield b(t)})}}}),m=t=>[{label:"详情",onClick:()=>{}},{label:"编辑",onClick:()=>{}},{label:"删除",color:"error",popConfirm:{title:"是否确认删除",confirm:()=>{var a;(a=e.value)==null||a.remove(t)}}}];return(t,n)=>(P(),R(l(h),{title:"VxeTable表格",content:"只展示部分操作，详细功能请查看VxeTable官网事例",contentFullHeight:"",fixedHeight:""},{default:d(()=>[x(l(A),q({ref_key:"tableRef",ref:e},s),{action:d(({row:a})=>[x(l(v),{outside:"",actions:m(a)},null,8,["actions"])]),_:1},16)]),_:1}))}});export{se as default};
