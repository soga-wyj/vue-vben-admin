var y=Object.defineProperty,k=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var v=(e,o,n)=>o in e?y(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,_=(e,o)=>{for(var n in o||(o={}))I.call(o,n)&&v(e,n,o[n]);if(f)for(var n of f(o))J.call(o,n)&&v(e,n,o[n]);return e},C=(e,o)=>k(e,$(o));import{y as O,c as R}from"./entry/index-D6rh1WO9-1710381847867.js";import{d as w,r as T,e as B,I as D,a7 as l,Z as r,_ as g,$ as s,F as N,aa as A,a8 as F,a9 as c,k as a,a1 as h}from"./vue-COhTiP8A.js";import{T as M,a4 as U}from"./antd-D1Pawy5U.js";const P=w({name:"OperatingArea",components:{Tooltip:M,Icon:O,Divider:U},setup(){const e=T({toolbarsConfigs:[{title:"预览-支持布局",type:"preview",event:"handlePreview",icon:"ant-design:chrome-filled"},{title:"预览-不支持布局",type:"preview",event:"handlePreview2",icon:"ant-design:chrome-filled"},{title:"导入JSON",type:"importJson",event:"handleOpenImportJsonModal",icon:"ant-design:import-outlined"},{title:"生成JSON",type:"exportJson",event:"handleOpenJsonModal",icon:"ant-design:export-outlined"},{title:"生成代码",type:"exportCode",event:"handleOpenCodeModal",icon:"ant-design:code-filled"},{title:"清空",type:"reset",event:"handleClearFormItems",icon:"ant-design:clear-outlined"}]}),o=B("historyReturn"),{undo:n,redo:p,canUndo:u,canRedo:m}=o;return C(_({},D(e)),{undo:n,redo:p,canUndo:u,canRedo:m})}}),S={class:"operating-area"},V={class:"left-btn-box"},j=["onClick"],z=["disabled"],E=["disabled"];function L(e,o,n,p,u,m){const i=l("Icon"),d=l("Tooltip"),b=l("Divider");return r(),g("div",S,[s("div",V,[(r(!0),g(N,null,A(e.toolbarsConfigs,t=>(r(),F(d,{title:t.title,key:t.icon},{default:c(()=>[s("a",{onClick:Z=>e.$emit(t.event),class:"toolbar-text"},[a(i,{icon:t.icon},null,8,["icon"])],8,j)]),_:2},1032,["title"]))),128)),a(b,{type:"vertical"}),a(d,{title:"撤销"},{default:c(()=>[s("a",{class:h({disabled:!e.canUndo}),disabled:!e.canUndo,onClick:o[0]||(o[0]=(...t)=>e.undo&&e.undo(...t))},[a(i,{icon:"ant-design:undo-outlined"})],10,z)]),_:1}),a(d,{title:"重做"},{default:c(()=>[s("a",{class:h({disabled:!e.canRedo}),disabled:!e.canRedo,onClick:o[1]||(o[1]=(...t)=>e.redo&&e.redo(...t))},[a(i,{icon:"ant-design:redo-outlined"})],10,E)]),_:1})])])}const Q=R(P,[["render",L],["__scopeId","data-v-3925fc3d"]]);export{Q as default};
