var k=(S,v,r)=>new Promise((d,b)=>{var P=i=>{try{p(r.next(i))}catch(m){b(m)}},u=i=>{try{p(r.throw(i))}catch(m){b(m)}},p=i=>i.done?d(i.value):Promise.resolve(i.value).then(P,u);p((r=r.apply(S,v)).next())});import{_ as j}from"./BasicForm.vue_vue_type_script_setup_true_lang-DtLtduCD.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BSvufs5U.js";import{_ as y}from"./componentMap-DkJI5hyQ.js";import{C as q,u as V,a as U}from"./entry/index-D6rh1WO9-1710381847867.js";import{P as w}from"./index-Byc39LDK.js";import{o as f}from"./select-DS4QyLy2.js";import{t as A}from"./tree-CwpxtcG3.js";import{a as B}from"./cascader-C-fTO2Lp.js";import{u as F}from"./upload-CrNqJkTn.js";import{f as D,W as T}from"./antd-D1Pawy5U.js";import{d as O,f as h,c as C,u as n,Z as $,a8 as H,a9 as s,k as c}from"./vue-COhTiP8A.js";import"./FormItem.vue_vue_type_script_lang-Ciq0ctCr.js";import"./helper-Q708zihh.js";import"./index-DlbGfZP3.js";import"./useWindowSizeFn-BVe9e16o.js";import"./useFormItem-BQ20sB9v.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-Ba2qFJad.js";import"./uuid-D0SLUWHI.js";import"./useSortable-I0OthOIs.js";import"./download-ChyWq6xR.js";import"./base64Conver-bBv-IO2K.js";import"./index-ftV3ORYs.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-6N-34zMn.js";import"./copyTextToClipboard-hMH5xuO5.js";import"./index-BDCrlPRn.js";import"./index-OMlUosyQ.js";import"./useContentViewHeight-B7xuORQ4.js";import"./onMountedOrActivated-GpUdBAv_.js";const be=O({__name:"index",setup(S){const v=h([]),r=h([]),d=h([]);for(let e=1;e<10;e++)d.value.push({label:"选项"+e,value:`${e}`});const b=C(()=>D(n(d)).map(e=>(e.disabled=n(r).indexOf(e.value)!==-1,e))),P=C(()=>D(n(d)).map(e=>(e.disabled=n(v).indexOf(e.value)!==-1,e))),u=[{id:"guangdong",label:"广东省",value:"1",key:"1"},{id:"jiangsu",label:"江苏省",value:"2",key:"2"}],p={guangdong:[{label:"珠海市",value:"1",key:"1"},{label:"深圳市",value:"2",key:"2"},{label:"广州市",value:"3",key:"3"}],jiangsu:[{label:"南京市",value:"1",key:"1"},{label:"无锡市",value:"2",key:"2"},{label:"苏州市",value:"3",key:"3"}]},i=[{field:"divider-basic",component:"Divider",label:"基础字段",colProps:{span:24}},{field:"field1",component:"Input",label:({model:e})=>`字段1${e.field3?e.field3:""}`,colProps:{span:8},componentProps:({schema:e,formModel:t})=>({placeholder:"自定义placeholder",onChange:l=>{}}),renderComponentContent:()=>({prefix:()=>"pSlot",suffix:()=>"sSlot"})},{field:"field2",component:"Input",label:"带后缀",defaultValue:"111",colProps:{span:8},componentProps:{onChange:e=>{}},suffix:"天"},{field:"fieldsc",component:"Upload",label:"上传",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:F}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field8",component:"Checkbox",label:"字段8",colProps:{span:8},renderComponentContent:"Check"},{field:"field9",component:"Switch",label:"字段9",colProps:{span:8}},{field:"field10",component:"RadioButtonGroup",label:"字段10",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}],onChange:e=>{}}},{field:"field11",component:"Cascader",label:"字段11",colProps:{span:8},componentProps:{options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]}},{field:"field12",component:"BasicTitle",label:"标题区分",componentProps:{span:!0},colProps:{span:24}},{field:"field13",component:"CropperAvatar",label:"头像上传",colProps:{span:8}},{field:"field14",component:"Transfer",label:"穿梭框",colProps:{span:8},componentProps:{render:e=>e.label,dataSource:p.guangdong,targetKeys:["1"]}},{field:"divider-api-select",component:"Divider",label:"远程下拉演示",colProps:{span:24}},{field:"field30",component:"ApiSelect",label:"懒加载远程下拉",required:!0,componentProps:{api:f,params:{id:1},resultField:"list",labelField:"name",valueField:"id",immediate:!0,onChange:(e,t)=>{},onOptionsChange:e=>{}},colProps:{span:8},defaultValue:"0"},{field:"field8",component:"ApiCascader",label:"联动ApiCascader",required:!0,colProps:{span:8},componentProps:{api:B,apiParamKey:"parentCode",labelField:"name",valueField:"code",initFetchParams:{parentCode:""},isLeaf:e=>!(e.levelType<3),onChange:(e,...t)=>{}}},{field:"field31",label:"下拉本地搜索",helpMessage:["ApiSelect组件","远程数据源本地搜索","只发起一次请求获取所有选项"],required:!0,slot:"localSearch",colProps:{span:8},defaultValue:"0",componentProps:{onOptionsChange(){}}},{field:"field32",label:"下拉远程搜索",helpMessage:["ApiSelect组件","将关键词发送到接口进行远程搜索"],required:!0,slot:"remoteSearch",colProps:{span:8},defaultValue:"0"},{field:"field33",component:"ApiTreeSelect",label:"远程下拉树",helpMessage:["ApiTreeSelect组件","使用接口提供的数据生成选项"],required:!0,componentProps:{api:A,resultField:"list",onChange:(e,t)=>{}},colProps:{span:8}},{field:"field33",component:"ApiTreeSelect",label:"远程懒加载下拉树",helpMessage:["ApiTreeSelect组件","使用接口提供的数据生成选项"],required:!0,componentProps:{api:()=>new Promise(e=>{e([{title:"Parent Node",value:"0-0"}])}),async:!0,onChange:(e,t)=>{},onLoadData:({treeData:e,resolve:t,treeNode:l})=>{setTimeout(()=>{const o=[{title:`Child Node ${l.eventKey}-0`,value:`${l.eventKey}-0`},{title:`Child Node ${l.eventKey}-1`,value:`${l.eventKey}-1`}];o.forEach(a=>{a.isLeaf=!1,a.children=[]}),l.dataRef.children=o,e.value=[...e.value],t()},300)}},colProps:{span:8}},{field:"field34",component:"ApiRadioGroup",label:"远程Radio",helpMessage:["ApiRadioGroup组件","使用接口提供的数据生成选项"],required:!0,componentProps:{api:f,params:{count:2},resultField:"list",labelField:"name",valueField:"id"},defaultValue:"1",colProps:{span:8}},{field:"field35",component:"ApiRadioGroup",label:"远程Radio",helpMessage:["ApiRadioGroup组件","使用接口提供的数据生成选项"],required:!0,componentProps:{api:f,params:{count:2},resultField:"list",labelField:"name",valueField:"id",isBtn:!0,onChange:e=>{}},colProps:{span:8}},{field:"field36",component:"ApiTree",label:"远程Tree",helpMessage:["ApiTree组件","使用接口提供的数据生成选项"],required:!0,componentProps:{api:A,params:{count:2},afterFetch:e=>e,resultField:"list"},colProps:{span:8}},{label:"远程穿梭框",field:"field37",component:"ApiTransfer",componentProps:{render:e=>e.label,api:()=>k(this,null,function*(){return Promise.resolve(p.guangdong)})},defaultValue:["1"],required:!0},{field:"divider-linked",component:"Divider",label:"字段联动",colProps:{span:24}},{field:"province",component:"Select",label:"省份",colProps:{span:8},componentProps:({formModel:e,formActionType:t})=>({options:u,placeholder:"省份与城市联动",onChange:l=>{let o=l==1?p[u[0].id]:p[u[1].id];l===void 0&&(o=[]),e.city=void 0;const{updateSchema:a}=t;a({field:"city",componentProps:{options:o}})}})},{field:"city",component:"Select",label:"城市",colProps:{span:8},componentProps:{options:[],placeholder:"省份与城市联动"}},{field:"divider-selects",component:"Divider",label:"互斥多选",helpMessage:["两个Select共用数据源","但不可选择对方已选中的项目"],colProps:{span:24}},{field:"selectA",label:"互斥SelectA",slot:"selectA",defaultValue:[],colProps:{span:8}},{field:"selectB",label:"互斥SelectB",slot:"selectB",defaultValue:[],colProps:{span:8}},{field:"divider-deconstruct",component:"Divider",label:"字段解构",helpMessage:["如果组件的值是 array 或者 object","可以根据 ES6 的解构语法分别取值"],colProps:{span:24}},{field:"[startTime, endTime]",label:"时间范围",component:"TimeRangePicker",componentProps:{format:"HH:mm:ss",placeholder:["开始时间","结束时间"]}},{field:"[startDate, endDate]",label:"日期范围",component:"RangePicker",componentProps:{format:"YYYY-MM-DD",placeholder:["开始日期","结束日期"]}},{field:"[startDateTime, endDateTime]",label:"日期时间范围",component:"RangePicker",componentProps:{format:"YYYY-MM-DD HH:mm:ss",placeholder:["开始日期、时间","结束日期、时间"],showTime:{format:"HH:mm:ss"}}},{field:"divider-others",component:"Divider",label:"其它",colProps:{span:24}},{field:"field20",component:"InputNumber",label:"字段20",required:!0,colProps:{span:8}},{field:"field21",component:"Slider",label:"字段21",componentProps:{min:0,max:100,range:!0,marks:{20:"20°C",60:"60°C"}},colProps:{span:8}},{field:"field22",component:"Rate",label:"字段22",defaultValue:3,colProps:{span:8},componentProps:{disabled:!1,allowHalf:!0}},{field:"field23",component:"ImageUpload",label:"上传图片",required:!0,defaultValue:["https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"],componentProps:{api:F,accept:["png","jpeg","jpg"],maxSize:2,maxNumber:1}}],{createMessage:m}=U(),g=h(""),M=C(()=>({keyword:n(g)}));function R(e){g.value=e}function x(){g.value=""}function _(e){m.success("click search,values:"+JSON.stringify(e))}return(e,t)=>($(),H(n(w),{title:"表单基础示例",contentFullHeight:""},{default:s(()=>[c(n(q),{title:"基础示例"},{default:s(()=>[c(n(j),{autoFocusFirstItem:"",labelWidth:200,schemas:i,actionColOptions:{span:24},onSubmit:_,onReset:x},{selectA:s(({model:l,field:o})=>[c(n(T),{options:b.value,mode:"multiple",value:l[o],"onUpdate:value":a=>l[o]=a,onChange:a=>v.value=l[o],allowClear:""},null,8,["options","value","onUpdate:value","onChange"])]),selectB:s(({model:l,field:o})=>[c(n(T),{options:P.value,mode:"multiple",value:l[o],"onUpdate:value":a=>l[o]=a,onChange:a=>r.value=l[o],allowClear:""},null,8,["options","value","onUpdate:value","onChange"])]),localSearch:s(({model:l,field:o})=>[c(n(y),{api:n(f),showSearch:"",value:l[o],"onUpdate:value":a=>l[o]=a,optionFilterProp:"label",resultField:"list",labelField:"name",valueField:"id"},null,8,["api","value","onUpdate:value"])]),remoteSearch:s(({model:l,field:o})=>[c(n(y),{api:n(f),showSearch:"",value:l[o],"onUpdate:value":a=>l[o]=a,filterOption:!1,resultField:"list",labelField:"name",valueField:"id",params:M.value,onSearch:t[0]||(t[0]=a=>n(V)(R,300))},null,8,["api","value","onUpdate:value","params"])]),_:1})]),_:1})]),_:1}))}});export{be as default};
