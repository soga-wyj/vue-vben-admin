import{d as f}from"./vuedraggable.umd-BJJIucZ8.js";import g from"./LayoutItem-5maA8Iio.js";import{u as h}from"./useFormDesignState-CD9GraNJ.js";import{a2 as v,aG as _,f as C}from"./antd-D1Pawy5U.js";import{d as y,c as S,a7 as r,Z as E,_ as F,m as I,A as D,k as s,a9 as d,$ as b,aj as k,ak as A}from"./vue-COhTiP8A.js";import{c as V}from"./entry/index-D6rh1WO9-1710381847867.js";import"./FormNode-kf4OtCZ_.js";import"./FormNodeOperate-DmrDSjay.js";import"./index-DDVkWObG.js";import"./index-YP5fgoJl.js";import"./formItemConfig-rz3-o2W_.js";import"./componentMap-DkJI5hyQ.js";import"./useFormItem-BQ20sB9v.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-Ba2qFJad.js";import"./index-DlbGfZP3.js";import"./useWindowSizeFn-BVe9e16o.js";import"./uuid-D0SLUWHI.js";import"./useSortable-I0OthOIs.js";import"./download-ChyWq6xR.js";import"./base64Conver-bBv-IO2K.js";import"./index-ftV3ORYs.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-6N-34zMn.js";import"./copyTextToClipboard-hMH5xuO5.js";import"./index-BDCrlPRn.js";import"./index-OMlUosyQ.js";const $=y({name:"FormComponentPanel",components:{LayoutItem:g,draggable:f,Form:v,Empty:_},emits:["handleSetSelectItem"],setup(o,{emit:a}){const{formConfig:t}=h(),i=({newIndex:e})=>{t.value.schemas=t.value.schemas||[];const m=t.value.schemas;m[e]=C(m[e]),a("handleSetSelectItem",m[e])},p=e=>{a("handleSetSelectItem",t.value.schemas[e.oldIndex])},l=S(()=>t.value.layout==="horizontal"?"Col":"div");return{addItem:i,handleDragStart:p,formConfig:t,layoutTag:l}}}),B={class:"form-panel v-form-container"},P={class:"draggable-box"};function L(o,a,t,i,p,l){const e=r("Empty"),m=r("LayoutItem"),c=r("draggable"),u=r("Form");return E(),F("div",B,[I(s(e,{class:"empty-text",description:"从左侧选择控件添加"},null,512),[[D,o.formConfig.schemas.length===0]]),s(u,k(A(o.formConfig)),{default:d(()=>[b("div",P,[s(c,{class:"list-main ant-row",group:"form-draggable","component-data":{name:"list",tag:"div",type:"transition-group"},ghostClass:"moving",animation:180,handle:".drag-move",modelValue:o.formConfig.schemas,"onUpdate:modelValue":a[0]||(a[0]=n=>o.formConfig.schemas=n),"item-key":"key",onAdd:o.addItem,onStart:o.handleDragStart},{item:d(({element:n})=>[s(m,{class:"drag-move",schema:n,data:o.formConfig,"current-item":o.formConfig.currentItem||{}},null,8,["schema","data","current-item"])]),_:1},8,["modelValue","onAdd","onStart"])])]),_:1},16)])}const ro=V($,[["render",L],["__scopeId","data-v-311e860d"]]);export{ro as default};
