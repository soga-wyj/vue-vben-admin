var n=(t,o,i)=>new Promise((r,c)=>{var f=e=>{try{a(i.next(e))}catch(m){c(m)}},p=e=>{try{a(i.throw(e))}catch(m){c(m)}},a=e=>e.done?r(e.value):Promise.resolve(e.value).then(f,p);a((i=i.apply(t,o)).next())});import{b2 as s}from"./entry/index-D6rh1WO9-1710381847867.js";function d(t,o=!0){return n(this,null,function*(){return new Promise((i,r)=>{setTimeout(()=>{o?i(t!=null?t:s.mock("@name")):r(new Error(`Failed to modify username: ${t}`))},1250)})})}function k(t){return n(this,null,function*(){return new Promise(o=>{setTimeout(()=>{o({data:s.mock("@paragraph"),time:new Date().getTime(),keyword:t})},1e3)})})}export{k as g,d as i};
