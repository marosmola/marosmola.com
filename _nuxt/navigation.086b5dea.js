import{$ as m,a4 as p}from"./entry.89a76609.js";import{q as f,w as o,h as s,e as g,s as c,j as h}from"./query.3d903dd2.js";import{u as v}from"./preview.a5b1bf04.js";const C=async t=>{const{content:n}=m().public;typeof(t==null?void 0:t.params)!="function"&&(t=f(t));const a=t.params(),i=n.experimental.stripQueryParameters?o(`/navigation/${`${s(a)}.${n.integrity}`}/${g(a)}.json`):o(`/navigation/${s(a)}.${n.integrity}.json`);if(c())return(await p(()=>import("./client-db.38caa483.js"),["./client-db.38caa483.js","./entry.89a76609.js","./query.3d903dd2.js","./preview.a5b1bf04.js","./index.a6ef77ff.js"],import.meta.url).then(r=>r.generateNavigation))(a);const e=await $fetch(i,{method:"GET",responseType:"json",params:n.experimental.stripQueryParameters?void 0:{_params:h(a),previewToken:v().getPreviewToken()}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};export{C as f};