import{j as c}from"./variant.74e8989c.js";import{m as v,u as d}from"./tag.95eca37e.js";import{j as m,m as h,h as u,k as g,y as f,l as k,Q as i,b as y}from"./entry.89a76609.js";const C=m({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...v(),...h()},"VDivider"),D=u()({name:"VDivider",props:C(),setup(e,a){let{attrs:t}=a;const{themeClasses:o}=g(e),{textColorClasses:s,textColorStyles:l}=c(f(e,"color")),n=k(()=>{const r={};return e.length&&(r[e.vertical?"maxHeight":"maxWidth"]=i(e.length)),e.thickness&&(r[e.vertical?"borderRightWidth":"borderTopWidth"]=i(e.thickness)),r});return d(()=>y("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},o.value,s.value,e.class],style:[n.value,l.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{D as V};
