var _=(F,v,l)=>new Promise((u,m)=>{var r=o=>{try{c(l.next(o))}catch(d){m(d)}},b=o=>{try{c(l.throw(o))}catch(d){m(d)}},c=o=>o.done?u(o.value):Promise.resolve(o.value).then(r,b);c((l=l.apply(F,v)).next())});import{P as $}from"./index-Byc39LDK.js";import{C as w,d as V,a as K}from"./entry/index-D6rh1WO9-1710381847867.js";import{_ as P}from"./BasicForm.vue_vue_type_script_setup_true_lang-DtLtduCD.js";import"./BasicForm.vue_vue_type_style_index_0_lang-BSvufs5U.js";import"./componentMap-DkJI5hyQ.js";import{u as T}from"./useForm-CqtfFrAz.js";import{a0 as g,o as B}from"./antd-D1Pawy5U.js";import{d as x,f as k,a7 as D,n as R,m as M,Z as h,a8 as N,a9 as i,$ as S,k as n,G as y,u as f,_ as j,F as G,aa as W,ac as A}from"./vue-COhTiP8A.js";import"./useContentViewHeight-B7xuORQ4.js";import"./useWindowSizeFn-BVe9e16o.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./FormItem.vue_vue_type_script_lang-Ciq0ctCr.js";import"./helper-Q708zihh.js";import"./index-DlbGfZP3.js";import"./useFormItem-BQ20sB9v.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-Ba2qFJad.js";import"./uuid-D0SLUWHI.js";import"./useSortable-I0OthOIs.js";import"./download-ChyWq6xR.js";import"./base64Conver-bBv-IO2K.js";import"./index-ftV3ORYs.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-6N-34zMn.js";import"./copyTextToClipboard-hMH5xuO5.js";import"./index-BDCrlPRn.js";import"./index-OMlUosyQ.js";const E={class:"mb-4"},de=x({name:"TabsFormDemo",__name:"TabsForm",setup(F){const v=g.TabPane,{createMessage:l}=K(),u=k("tabs2"),m=k(!1),r=[],b={showActionButtonGroup:!1,labelWidth:100},c={};for(let a=1;a<=5;++a){const e=`tabs${a}`,s=[],p={};for(let t=1;t<=8;++t)s.push({field:`${e}.field${t}`,label:`${e}-field${t}`,component:"Input",colProps:{span:24}}),p[`field${t}`]=`field: ${e}.field${t}, default value`;c[e]=p,r.push({key:e,tab:e,forceRender:!0,Form:T(Object.assign({schemas:s},b))})}function o(){return _(this,null,function*(){for(const a of r){const{resetFields:e}=a.Form[1];yield e()}})}function d(){return _(this,null,function*(){let a="";m.value=!0;try{const e={};for(const s of r){a=s.key;const{validate:p,getFieldsValue:t}=s.Form[1];yield p(),V(e,t())}l.success("提交成功！请打开控制台查看")}catch(e){u.value=a}finally{m.value=!1}})}function C(){return _(this,null,function*(){for(const a of r){const{setFieldsValue:e}=a.Form[1];yield e(c)}})}return(a,e)=>{const s=D("a-button"),p=R("loading");return M((h(),N(f($),{title:"标签页+多级field表单"},{default:i(()=>[S("div",E,[n(s,{onClick:o,class:"mr-2"},{default:i(()=>[y(" 重置表单 ")]),_:1}),n(s,{onClick:C,class:"mr-2"},{default:i(()=>[y(" 设置默认值 ")]),_:1}),n(s,{onClick:d,class:"mr-2",type:"primary"},{default:i(()=>[y(" 提交表单 ")]),_:1})]),n(f(w),{title:"标签页+多级field表单"},{default:i(()=>[n(f(g),{activeKey:u.value,"onUpdate:activeKey":e[0]||(e[0]=t=>u.value=t)},{default:i(()=>[(h(),j(G,null,W(r,t=>n(f(v),A({key:t.key},f(B)(t,["Form","key"])),{default:i(()=>[n(f(P),{onRegister:t.Form[0]},null,8,["onRegister"])]),_:2},1040)),64))]),_:1},8,["activeKey"])]),_:1})]),_:1})),[[p,m.value]])}}});export{de as default};
