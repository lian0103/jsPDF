import{r as _,c as b,o as Y,a as h,b as m,d as s,t as E,e as B,w as j,n as $,u as D,F as J,f as q,g as z,v as K,h as W,i as H,j as Q}from"./js/@vue-1bb6992b.js";import{E as L,_ as S}from"./js/jsPDF-b882dd9c.js";import"./js/@babel-62c7c66b.js";import"./js/fflate-2f5a53d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function g(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerpolicy&&(l.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?l.credentials="include":e.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(e){if(e.ep)return;e.ep=!0;const l=g(e);fetch(e.href,l)}})();const Z={class:"pdf-wrapper"},ee={class:"btns-box"},te={key:0},ae=["onClick"],ne={class:""},oe={class:"pdfs-box scroll"},se=["id"],le={__name:"Pdf",props:{url:{type:String,default:null}},emits:["getImg"],setup(v,{emit:r}){const g=v;_(null);const i=_(null),e=_({tempPage:1,page:1,numPages:0,scale:1,height:0,width:0});let l=null,u={};const C=t=>{switch(t){case"minus":{e.value.scale=(e.value.scale*10-1)/10;break}case"plus":{e.value.scale=(e.value.scale*10+1)/10;break}}},A=t=>{const a=t.target||t.srcElement,n=a.getContext("2d");n.beginPath(),n.moveTo(t.offsetX,t.offsetY),n.lineTo(t.offsetX,t.offsetY),n.stroke(),a.onmousemove=function(o){if(o.which===0){a.onmousemove=null,a.onmouseup=null;return}n.lineTo(o.offsetX,o.offsetY),n.stroke()},a.onmouseup=function(){a.onmousemove=null,a.onmouseup=null},a.focus()},O=()=>{try{const t=document.getElementById(`the-canvas-${e.value.page}`);i.value=t.toDataURL("image/png",1),r("getImg",i.value)}catch(t){console.warn(t)}},R=()=>{try{i.value=null,r("getImg",i.value)}catch(t){console.warn(t)}},T=t=>{W(()=>{const a=document.getElementById(`the-canvas-${e.value.page}`);a.getContext("2d").clearRect(0,0,a.width,a.height),u[e.value.page]=!1,I()})},M=()=>{e.value.page=e.value.page-1,y(e.value.page)},U=()=>{e.value.page=e.value.page+1,y(e.value.page)},w=_(!1),V=async()=>{const t=document.getElementById(`the-canvas-${e.value.page}`),a=t.width>t.height?"l":"",n=new L(a,"px",[t.width,t.height]),o=t.toDataURL("image/png",1);n.addImage(o,"JPEG",0,0,t.width,t.height),n.save(`${e.value.page}.pdf`)},N=async()=>{w.value=!0;let t=0,a=0,n,o=[];for(let d=1;d<=e.value.numPages;d++)if(u[d]){const c=document.getElementById(`the-canvas-${d}`);n=c.width>c.height?"l":"",t=c.width,a=c.height;const k=c.toDataURL("image/png",1);o.push(k),console.log(d)}else{let c=await l.getPage(d);var P=1,f=c.getViewport({scale:P}),p=document.createElement("canvas"),X=p.getContext("2d");p.height=f.height,p.width=f.width,await c.render({canvasContext:X,viewport:f}).promise;const k=p.toDataURL("image/png",1);t=p.width,a=p.height,o.push(k),console.log(d)}console.log("save",o);const x=new L(n,"px",[t,a]);o.forEach((d,c)=>{x.addImage(d,"JPEG",0,0,t,a),c+1!==o.length&&x.addPage()}),x.save("all.pdf"),w.value=!1},y=t=>{console.log("isLoaded",u),u[""+t]?e.value.tempPage=e.value.page:l.getPage(t).then(function(a){var n=a.getViewport({scale:1}),o=document.getElementById(`the-canvas-${e.value.page}`),P=o.getContext("2d");o.height=n.height,o.width=n.width,e.value.width=o.width,e.value.height=o.height;var f={canvasContext:P,viewport:n},p=a.render(f);p.promise.then(function(){u[""+e.value.page]=!0,e.value.tempPage=e.value.page})},a=>{throw e.value.page=e.value.tempPage,Error("the page is not exist")})},I=async()=>{if(!g.url)return!1;const t=await S(()=>import("./js/pdfjs-dist-95ebc730.js").then(o=>o.p),["assets/js/pdfjs-dist-95ebc730.js","assets/js/core-js-b4b67889.js"]),a=await S(()=>import("./js/pdfjs-dist-95ebc730.js").then(o=>o.a),["assets/js/pdfjs-dist-95ebc730.js","assets/js/core-js-b4b67889.js"]);t.GlobalWorkerOptions.workerSrc=a;var n=t.getDocument(g.url);n.promise.then(function(o){l=o,e.value.numPages=o.numPages,y(e.value.page)},o=>{console.log(o)})};b(()=>{let t=Math.ceil(e.value.width/20),a=Math.ceil(e.value.height/20),n=e.value.scale>1?e.value.scale*10-10:10-e.value.scale*10;return{padding:`${n*a+20}px ${n*t+20}px`}});const F=b(()=>{let t=e.value.width,a=e.value.height;return{width:`${t}px`,height:`${a}px`}}),G=b(()=>({transform:`scale(${e.value.scale})`}));return Y(()=>{I()}),(t,a)=>(h(),m("div",Z,[s("div",ee,[s("p",null,"\u9801\u78BC:"+E(`${e.value.page} /${e.value.numPages}`),1),s("p",null,"scale: "+E(e.value.scale),1),w.value?(h(),m("p",te,"saving...")):B("",!0),s("div",null,[s("button",{type:"danger",onClick:j(T,["prevent"])},"\u6E05\u7A7A\u7B46\u8DE1",8,ae),s("button",{type:"primary",onClick:O},"\u751F\u6210\u5716\u7247"),s("button",{type:"primary",onClick:R},"\u6E05\u7A7A\u5716\u7247"),s("button",{onClick:a[0]||(a[0]=()=>{C("minus")})}," scale -- "),s("button",{onClick:a[1]||(a[1]=()=>{C("plus")})}," scale ++ "),s("button",{onClick:V},"\u55AE\u9801PDF\u5132\u5B58"),s("button",{onClick:U},"\u4E0B\u4E00\u9801"),s("button",{onClick:M},"\u4E0A\u4E00\u9801"),s("button",{onClick:N},"\u5132\u5B58\u5168\u90E8")])]),s("div",ne,[s("div",oe,[s("div",{class:"pdf-Item",style:$(D(F))},[(h(!0),m(J,null,q(e.value.numPages,n=>(h(),m("div",{key:n,style:$(D(G))},[z(s("canvas",{id:`the-canvas-${n}`,onMousedown:A},null,40,se),[[K,n===e.value.page]])],4))),128))],4)])])]))}};const re=(v,r)=>{const g=v.__vccOpts||v;for(const[i,e]of r)g[i]=e;return g},ie={class:"box"},ce=["src"],ue={__name:"App",setup(v){const r=_(null);return(g,i)=>(h(),m("div",ie,[H(le,{url:"./test.pdf",onGetImg:i[0]||(i[0]=e=>{r.value=e})}),r.value?(h(),m("img",{key:0,src:r.value,alt:"\u751F\u6210"},null,8,ce)):B("",!0)]))}},de=re(ue,[["__scopeId","data-v-c0353ab4"]]);Q(de).mount("#app");
