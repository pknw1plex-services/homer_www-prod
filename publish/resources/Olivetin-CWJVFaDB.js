import{s as u}from"./service-CvN87575.js";import{_ as d,G as h,r as f,o as s,c as _,w as a,a as o,t as n,b as i,F as r,d as c,e as l,n as p}from"./index-BBtURoPU.js";const v={name:"Olivetin",components:{Generic:h},mixins:[u],props:{item:Object},data:()=>({status:null,versionstring:null}),created(){this.fetchStatus()},methods:{fetchStatus:async function(){this.fetch("/webUiSettings.json").then(t=>{this.status="online",this.versionstring=t.CurrentVersion}).catch(t=>{this.status="offline",console.log(t)})}}},g={class:"title is-4"},b={class:"subtitle is-6"};function k(t,y,e,C,V,B){const m=f("Generic");return s(),_(m,{item:e.item},{content:a(()=>[o("p",g,n(e.item.name),1),o("p",b,[e.item.subtitle?(s(),i(r,{key:0},[c(n(e.item.subtitle),1)],64)):t.versionstring?(s(),i(r,{key:1},[c(" Version "+n(t.versionstring),1)],64)):l("",!0)])]),indicator:a(()=>[t.status?(s(),i("div",{key:0,class:p(["status",t.status])},n(t.status),3)):l("",!0)]),_:1},8,["item"])}const w=d(v,[["render",k],["__scopeId","data-v-657f2a95"]]);export{w as default};
