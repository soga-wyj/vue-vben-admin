import{p as S,_ as p,f as U,l as V,h as P,o as B}from"./entry/index-D6rh1WO9-1710381847867.js";import{D as T}from"./siteSetting-BSGR9S7Z.js";import{c as d,u as F}from"./index-CkmHUVax.js";import{b as k}from"./index-DlbGfZP3.js";import{h as z}from"./header-OZa5fSDc.js";import{x as y,D as H}from"./antd-D1Pawy5U.js";import{d as W,c as Z,Z as t,_ as j,k as a,a9 as m,u as e,a8 as i,ab as c,$ as l,a1 as u,a0 as q,F as G}from"./vue-COhTiP8A.js";import"./index-B6i5ndmf.js";import"./useContentViewHeight-B7xuORQ4.js";import"./useWindowSizeFn-BVe9e16o.js";import"./useSortable-I0OthOIs.js";import"./index-ByDDg0Lk.js";import"./lock-UJJG8TC6.js";const J=["src"],le=W({name:"UserDropdown",__name:"index",props:{theme:S.oneOf(["dark","light"])},setup(x){const n=d(()=>p(()=>import("./DropMenuItem-DBg7cUJb.js"),__vite__mapDeps([0,1,2,3,4]))),v=d(()=>p(()=>import("./LockModal-Crt9qL1_.js"),__vite__mapDeps([5,1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]))),w=d(()=>p(()=>import("./index-gzkoAO3E.js"),__vite__mapDeps([34,1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]))),{prefixCls:o}=U("header-user-dropdown"),{t:r}=P(),{getShowDoc:_,getUseLockPage:D,getShowApi:C}=F(),f=V(),g=Z(()=>{const{realName:s="",avatar:h,desc:$}=f.getUserInfo||{};return{realName:s,avatar:h||z,desc:$}}),[L,{openModal:A}]=k(),[I,{openModal:b}]=k();function O(){A(!0)}function R(){b(!0,{})}function E(){f.confirmLoginOut()}function M(){B(T)}function N(s){switch(s.key){case"logout":E();break;case"doc":M();break;case"lock":O();break;case"api":R();break}}return(s,h)=>(t(),j(G,null,[a(e(H),{placement:"bottomLeft",overlayClassName:`${e(o)}-dropdown-overlay`},{overlay:m(()=>[a(e(y),{onClick:N},{default:m(()=>[e(_)?(t(),i(e(n),{key:"doc",text:e(r)("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):c("",!0),e(_)?(t(),i(e(y).Divider,{key:1})):c("",!0),e(C)?(t(),i(e(n),{key:"api",text:e(r)("layout.header.dropdownChangeApi"),icon:"ant-design:swap-outlined"},null,8,["text"])):c("",!0),e(D)?(t(),i(e(n),{key:"lock",text:e(r)("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):c("",!0),a(e(n),{key:"logout",text:e(r)("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1})]),default:m(()=>[l("span",{class:u([[e(o),`${e(o)}--${x.theme}`],"flex"])},[l("img",{class:u(`${e(o)}__header`),src:g.value.avatar},null,10,J),l("span",{class:u(`${e(o)}__info hidden md:block`)},[l("span",{class:u([`${e(o)}__name`,"truncate"])},q(g.value.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),a(e(v),{onRegister:e(L)},null,8,["onRegister"]),a(e(w),{onRegister:e(I)},null,8,["onRegister"])],64))}});export{le as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DropMenuItem-DBg7cUJb.js","assets/entry/index-D6rh1WO9-1710381847867.js","assets/vue-COhTiP8A.js","assets/antd-D1Pawy5U.js","assets/index-DgEOf-Qs.css","assets/LockModal-Crt9qL1_.js","assets/index-DlbGfZP3.js","assets/useWindowSizeFn-BVe9e16o.js","assets/index-CiFfgH5n.css","assets/BasicForm.vue_vue_type_script_setup_true_lang-DtLtduCD.js","assets/FormItem.vue_vue_type_script_lang-Ciq0ctCr.js","assets/componentMap-DkJI5hyQ.js","assets/useFormItem-BQ20sB9v.js","assets/RadioButtonGroup.vue_vue_type_script_setup_true_lang-Ba2qFJad.js","assets/uuid-D0SLUWHI.js","assets/useSortable-I0OthOIs.js","assets/download-ChyWq6xR.js","assets/base64Conver-bBv-IO2K.js","assets/index-ftV3ORYs.js","assets/index-Bn5udUWy.css","assets/IconPicker.vue_vue_type_script_setup_true_lang-6N-34zMn.js","assets/copyTextToClipboard-hMH5xuO5.js","assets/index-BDCrlPRn.js","assets/index-B1prL0gx.css","assets/index-OMlUosyQ.js","assets/index-CGoJvaC5.css","assets/componentMap-DxdFy9bK.css","assets/helper-Q708zihh.js","assets/BasicForm.vue_vue_type_style_index_0_lang-BSvufs5U.js","assets/BasicForm-DoX39MN0.css","assets/useForm-CqtfFrAz.js","assets/lock-UJJG8TC6.js","assets/header-OZa5fSDc.js","assets/LockModal-CETB33ga.css","assets/index-gzkoAO3E.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
