import{g as _}from"./theme.9nm-YoQ1.js";import{p as S}from"./index.BJAMPwSv.js";import{_ as y,o as v,c as d,j as e,G as F,H as b,n as p,t as l,k as n,e as f,a as u,y as h,h as T}from"./framework.CNUu10b_.js";const k={class:"devserver-flow-demo"},x={class:"control-panel"},D={class:"step-indicators"},V=["onClick"],C={class:"control-btns"},A=["disabled"],L={class:"visualization-area"},E={class:"step-title"},I={class:"flow-layout"},N={class:"panel-header"},$={class:"panel-title"},P={class:"terminal-content"},B={class:"arrow-col"},H={class:"arrow-label"},j={class:"panel-header"},z={class:"panel-title"},G={class:"browser-content"},J={key:0,class:"browser-url-bar"},R={key:1,class:"browser-empty"},W={key:2,class:"browser-page"},q={class:"step-desc"},K={class:"http-explain"},M={class:"http-title"},O={class:"http-analogy"},Q={class:"analogy-item"},U={class:"analogy-text"},X={class:"analogy-item"},Y={class:"analogy-text"},Z={class:"analogy-item"},ee={class:"analogy-text"},se={class:"info-box"},te={__name:"DevServerFlowDemo",setup(le){const{t:s}=_(S),o=h(0),r=h(!1),a=T(()=>[{title:s("devServerFlow.step1Title"),terminal:`$ npm run dev

> vite

  准备就绪...`,desc:s("devServerFlow.step1Desc"),highlight:"terminal"},{title:s("devServerFlow.step2Title"),terminal:`$ npm run dev

> vite

  VITE v5.4.0  ready in 200 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.1.10:5173/`,desc:s("devServerFlow.step2Desc"),highlight:"server"},{title:s("devServerFlow.step3Title"),terminal:`$ npm run dev

> vite

  VITE v5.4.0  ready in 200 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.1.10:5173/`,browser:"http://localhost:5173",desc:s("devServerFlow.step3Desc"),highlight:"browser"},{title:s("devServerFlow.step4Title"),terminal:`$ npm run dev

> vite

  VITE v5.4.0  ready in 200 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.1.10:5173/

  10:30:01 [200] /
  10:30:01 [200] /src/main.js
  10:30:01 [200] /src/App.vue`,browser:"http://localhost:5173",page:s("devServerFlow.pageAppeared"),desc:s("devServerFlow.step4Desc"),highlight:"page"},{title:s("devServerFlow.step5Title"),terminal:`$ npm run dev

  VITE v5.4.0  ready in 200 ms

  ➜  Local:   http://localhost:5173/

  10:30:01 [200] /
  10:35:22 [vite] hmr update /src/App.vue`,browser:"http://localhost:5173",page:s("devServerFlow.pageRefreshed"),desc:s("devServerFlow.step5Desc"),highlight:"hmr"}]);async function g(){if(!r.value){r.value=!0,o.value=0;for(let i=0;i<a.value.length;i++)o.value=i,await new Promise(t=>setTimeout(t,1800));r.value=!1}}function w(i){o.value=i}function m(){o.value=0,r.value=!1}return(i,t)=>(v(),d("div",k,[e("div",x,[e("div",D,[(v(!0),d(F,null,b(a.value,(oe,c)=>(v(),d("div",{key:c,class:p(["step-dot",{active:o.value>=c,current:o.value===c}]),onClick:ne=>w(c)},l(c+1),11,V))),128))]),e("div",C,[e("button",{class:"action-btn",disabled:r.value,onClick:g},l(r.value?n(s)("devServerFlow.playing"):n(s)("devServerFlow.autoPlay")),9,A),e("button",{class:"action-btn ghost",onClick:m},l(n(s)("devServerFlow.reset")),1)])]),e("div",L,[e("div",E,l(a.value[o.value].title),1),e("div",I,[e("div",{class:p(["panel terminal-panel",{highlight:a.value[o.value].highlight==="terminal"}])},[e("div",N,[t[0]||(t[0]=e("span",{class:"dot red"},null,-1)),t[1]||(t[1]=e("span",{class:"dot yellow"},null,-1)),t[2]||(t[2]=e("span",{class:"dot green"},null,-1)),e("span",$,l(n(s)("devServerFlow.terminal")),1)]),e("pre",P,l(a.value[o.value].terminal),1)],2),e("div",B,[e("div",{class:p(["flow-arrow",{active:o.value>=1}])},[e("span",H,l(n(s)("devServerFlow.listening")),1),t[3]||(t[3]=e("span",{class:"arrow-char"},"↕",-1))],2)]),e("div",{class:p(["panel browser-panel",{highlight:a.value[o.value].highlight==="browser"||a.value[o.value].highlight==="page"||a.value[o.value].highlight==="hmr"}])},[e("div",j,[t[4]||(t[4]=e("span",{class:"dot red"},null,-1)),t[5]||(t[5]=e("span",{class:"dot yellow"},null,-1)),t[6]||(t[6]=e("span",{class:"dot green"},null,-1)),e("span",z,l(n(s)("devServerFlow.browser")),1)]),e("div",G,[a.value[o.value].browser?(v(),d("div",J,l(a.value[o.value].browser),1)):(v(),d("div",R,"等待你打开"+l(n(s)("devServerFlow.browser"))+"...",1)),a.value[o.value].page?(v(),d("div",W,l(a.value[o.value].page),1)):f("",!0)])],2)]),e("div",q," 💡 "+l(a.value[o.value].desc),1)]),e("div",K,[e("div",M,l(n(s)("devServerFlow.httpTitle")),1),e("div",O,[e("div",Q,[t[8]||(t[8]=e("span",{class:"analogy-icon"},"🏪",-1)),e("div",U,[e("strong",null,l(n(s)("devServerFlow.httpAnalogy1")),1),t[7]||(t[7]=e("span",null,'HTTP 服务器就像一个"永远开着的服务窗口"——它一直等在那里，有人来问就回答，没人来就静静等着。',-1))])]),e("div",X,[t[10]||(t[10]=e("span",{class:"analogy-icon"},"📋",-1)),e("div",Y,[e("strong",null,l(n(s)("devServerFlow.httpAnalogy2")),1),t[9]||(t[9]=e("span",null,[u("这个窗口只听得懂 HTTP 协议的请求格式（比如 "),e("code",null,"GET /index.html"),u("），然后把对应的文件内容返回给你。")],-1))])]),e("div",Z,[t[11]||(t[11]=e("span",{class:"analogy-icon"},"⚙️",-1)),e("div",ee,[e("strong",null,l(n(s)("devServerFlow.httpAnalogy3")),1),e("span",null,'Vite、Webpack 的开发服务器不只是"原样返回文件"，它还会即时编译你的代码（Vue → JS、TS → JS、Sass → CSS），然后再返回给'+l(n(s)("devServerFlow.browser"))+"。",1)])])])]),e("div",se,[e("strong",null,l(n(s)("devServerFlow.summary")),1),u(l(n(s)("devServerFlow.summaryContent")),1)])]))}},ve=y(te,[["__scopeId","data-v-c06d51df"]]);export{ve as default};
