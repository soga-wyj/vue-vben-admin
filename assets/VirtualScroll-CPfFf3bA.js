import{E as M,r as B,c as R,w as L}from"./entry/index-D6rh1WO9-1710381847867.js";import{d as T,f as D,r as F,c as m,u as e,w as P,o as q,y as A,k as l,Z as G,a8 as U,a9 as u,G as H,$ as f,a0 as N}from"./vue-COhTiP8A.js";import{P as Z}from"./index-Byc39LDK.js";import{a4 as y}from"./antd-D1Pawy5U.js";import"./useContentViewHeight-B7xuORQ4.js";import"./useWindowSizeFn-BVe9e16o.js";import"./onMountedOrActivated-GpUdBAv_.js";const j={height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String],bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}},g="virtual-scroll";function a(t,o="px"){if(!(t==null||t===""))return isNaN(+t)?String(t):`${Number(t)}${o}`}const z=T({name:"VirtualScroll",props:j,setup(t,{slots:o}){const s=D(null),r=F({first:0,last:0,scrollTop:0}),c=m(()=>parseInt(t.bench,10)),d=m(()=>parseInt(t.itemHeight,10)),_=m(()=>Math.max(0,r.first-e(c))),I=m(()=>Math.min((t.items||[]).length,r.last+e(c))),V=m(()=>({height:a((t.items||[]).length*e(d))})),C=m(()=>{const i={},n=a(t.height),h=a(t.minHeight),S=a(t.minWidth),w=a(t.maxHeight),b=a(t.maxWidth),x=a(t.width);return n&&(i.height=n),h&&(i.minHeight=h),S&&(i.minWidth=S),w&&(i.maxHeight=w),b&&(i.maxWidth=b),x&&(i.width=x),i});P([()=>t.itemHeight,()=>t.height],()=>{p()});function v(i){const n=e(s);if(!n)return 0;const h=parseInt(t.height||0,10)||n.clientHeight;return i+Math.ceil(h/e(d))}function E(){return Math.floor(r.scrollTop/e(d))}function p(){const i=e(s);i&&(r.scrollTop=i.scrollTop,r.first=E(),r.last=v(r.first))}function $(){const{items:i=[]}=t;return i.slice(e(_),e(I)).map(k)}function k(i,n){n+=e(_);const h=a(n*e(d));return l("div",{class:`${g}__item`,style:{top:h},key:n},[B(o,"default",{index:n,item:i})])}return q(()=>{r.last=v(0),A(()=>{const i=e(s);i&&M({el:i,name:"scroll",listener:p,wait:0})})}),()=>l("div",{class:g,style:e(C),ref:s},[l("div",{class:`${g}__container`,style:e(V)},[$()])])}}),J=R(z,[["__scopeId","data-v-16482a0c"]]),W=L(J),K={class:"virtual-scroll-demo-wrap"},O={class:"virtual-scroll-demo__item"},Q={class:"virtual-scroll-demo-wrap"},X={class:"virtual-scroll-demo__item"},Y=T({__name:"VirtualScroll",setup(t){const o=(()=>{const s=[];for(let r=1;r<2e4;r++)s.push({title:"列表项"+r});return s})();return(s,r)=>(G(),U(e(Z),{class:"virtual-scroll-demo"},{default:u(()=>[l(e(y),null,{default:u(()=>[H("基础滚动示例")]),_:1}),f("div",K,[l(e(W),{itemHeight:41,items:e(o),height:300,width:300},{default:u(({item:c})=>[f("div",O,N(c.title),1)]),_:1},8,["items"])]),l(e(y),null,{default:u(()=>[H("即使不可见，也预先加载50条数据，防止空白")]),_:1}),f("div",Q,[l(e(W),{itemHeight:41,items:e(o),height:300,width:300,bench:50},{default:u(({item:c})=>[f("div",X,N(c.title),1)]),_:1},8,["items"])])]),_:1}))}}),lt=R(Y,[["__scopeId","data-v-4bd1bb22"]]);export{lt as default};
