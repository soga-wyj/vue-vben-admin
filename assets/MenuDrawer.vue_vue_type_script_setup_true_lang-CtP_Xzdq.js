var S=Object.defineProperty;var h=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var w=(e,o,t)=>o in e?S(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,g=(e,o)=>{for(var t in o||(o={}))x.call(o,t)&&w(e,t,o[t]);if(h)for(var t of h(o))B.call(o,t)&&w(e,t,o[t]);return e};var f=(e,o,t)=>new Promise((n,s)=>{var c=a=>{try{i(t.next(a))}catch(u){s(u)}},m=a=>{try{i(t.throw(a))}catch(u){s(u)}},i=a=>a.done?n(a.value):Promise.resolve(a.value).then(c,m);i((t=t.apply(e,o)).next())});import{_ as R}from"./BasicForm.vue_vue_type_script_setup_true_lang-DtLtduCD.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BSvufs5U.js";import"./componentMap-DkJI5hyQ.js";import{u as D}from"./useForm-CqtfFrAz.js";import{y as N}from"./entry/index-D6rh1WO9-1710381847867.js";import{l as v,d as V,f as k,c as F,u as r,Z as G,a8 as M,a9 as q,k as C,ac as L}from"./vue-COhTiP8A.js";import{Q as T}from"./antd-D1Pawy5U.js";import{a as $,B as U}from"./index-ByDDg0Lk.js";import{d as A}from"./system-gE23IybB.js";const ee=[{title:"菜单名称",dataIndex:"menuName",width:200,align:"left"},{title:"图标",dataIndex:"icon",width:50,customRender:({record:e})=>v(N,{icon:e.icon})},{title:"权限标识",dataIndex:"permission",width:180},{title:"组件",dataIndex:"component"},{title:"排序",dataIndex:"orderNo",width:50},{title:"状态",dataIndex:"status",width:80,customRender:({record:e})=>{const t=~~e.status===0,n=t?"green":"red",s=t?"启用":"停用";return v(T,{color:n},()=>s)}},{title:"创建时间",dataIndex:"createTime",width:180}],E=e=>e==="0",P=e=>e==="1",p=e=>e==="2",te=[{field:"menuName",label:"菜单名称",component:"Input",colProps:{span:8}},{field:"status",label:"状态",component:"Select",componentProps:{options:[{label:"启用",value:"0"},{label:"停用",value:"1"}]},colProps:{span:8}}],O=[{field:"type",label:"菜单类型",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"目录",value:"0"},{label:"菜单",value:"1"},{label:"按钮",value:"2"}]},colProps:{lg:24,md:24}},{field:"menuName",label:"菜单名称",component:"Input",required:!0},{field:"parentMenu",label:"上级菜单",component:"TreeSelect",componentProps:{fieldNames:{label:"menuName",value:"id"},getPopupContainer:()=>document.body}},{field:"orderNo",label:"排序",component:"InputNumber",required:!0},{field:"icon",label:"图标",component:"IconPicker",required:!0,ifShow:({values:e})=>!p(e.type)},{field:"routePath",label:"路由地址",component:"Input",required:!0,ifShow:({values:e})=>!p(e.type)},{field:"component",label:"组件路径",component:"Input",ifShow:({values:e})=>P(e.type)},{field:"permission",label:"权限标识",component:"Input",ifShow:({values:e})=>!E(e.type)},{field:"status",label:"状态",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"启用",value:"0"},{label:"禁用",value:"1"}]}},{field:"isExt",label:"是否外链",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"否",value:"0"},{label:"是",value:"1"}]},ifShow:({values:e})=>!p(e.type)},{field:"keepalive",label:"是否缓存",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"否",value:"0"},{label:"是",value:"1"}]},ifShow:({values:e})=>P(e.type)},{field:"show",label:"是否显示",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"是",value:"0"},{label:"否",value:"1"}]},ifShow:({values:e})=>!p(e.type)}],oe=V({name:"MenuDrawer",__name:"MenuDrawer",emits:["success","register"],setup(e,{emit:o}){const t=o,n=k(!0),[s,{resetFields:c,setFieldsValue:m,updateSchema:i,validate:a}]=D({labelWidth:100,schemas:O,showActionButtonGroup:!1,baseColProps:{lg:12,md:24}}),[u,{setDrawerProps:d,closeDrawer:I}]=$(l=>f(this,null,function*(){c(),d({confirmLoading:!1}),n.value=!!(l!=null&&l.isUpdate),r(n)&&m(g({},l.record));const b=yield A();i({field:"parentMenu",componentProps:{treeData:b}})})),y=F(()=>r(n)?"编辑菜单":"新增菜单");function _(){return f(this,null,function*(){try{const l=yield a();d({confirmLoading:!0}),I(),t("success")}finally{d({confirmLoading:!1})}})}return(l,b)=>(G(),M(r(U),L(l.$attrs,{onRegister:r(u),showFooter:"",title:y.value,width:"50%",onOk:_}),{default:q(()=>[C(r(R),{onRegister:r(s)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{oe as _,ee as c,te as s};
