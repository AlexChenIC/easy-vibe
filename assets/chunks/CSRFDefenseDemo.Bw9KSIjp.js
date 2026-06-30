import{g}from"./theme.9nm-YoQ1.js";import{a as x}from"./index.Cq-WahAL.js";import{_ as C,o as c,c as i,j as s,t as e,k as a,e as T,G as S,H as w,a as y,y as O,h as n}from"./framework.CNUu10b_.js";const D={class:"csrf-demo"},F={class:"header"},R={class:"title"},B={class:"subtitle"},N={class:"controls"},P=["disabled"],V=["disabled"],q=["disabled"],I={key:0,class:"progress"},L={class:"grid"},M={class:"card"},j={class:"card-title"},E={class:"desc"},G={class:"box"},H={class:"box-title"},X={class:"card"},z={class:"card-title"},A={class:"code"},J={class:"desc"},K={class:"card"},Q={class:"card-title"},U={class:"list"},W={class:"warn"},Y={class:"warn-title"},Z={class:"warn-text"},l=4,$={__name:"CSRFDefenseDemo",setup(ss){const{t:o,messages:d}=g(x),t=O(0),v=n(()=>d.value.csrf.steps),f=n(()=>d.value.csrf.defenses),_=n(()=>v.value[t.value-1]),p=n(()=>t.value===0?o("csrf.clickStart"):t.value===1?`POST https://bank.com/api/transfer
Origin: https://evil.com
Content-Type: application/x-www-form-urlencoded

to=attacker&amount=1000`:t.value===2?`POST /api/transfer
Origin: https://evil.com
Cookie: session_id=abc123

to=attacker&amount=1000`:t.value===3?o("csrf.cookieOnlyResult"):`POST /api/transfer
Origin: https://evil.com
Cookie: session_id=abc123
X-CSRF-Token: <missing or invalid>

→ 403 Forbidden`),h=()=>{t.value=1},m=()=>{t.value=Math.min(l,t.value+1)},b=()=>{t.value=Math.max(1,t.value-1)},k=()=>{t.value=0};return(es,u)=>(c(),i("div",D,[s("div",F,[s("div",R,e(a(o)("csrf.title")),1),s("div",B,e(a(o)("csrf.subtitle")),1)]),s("div",N,[s("button",{class:"btn primary",disabled:t.value!==0,onClick:h},e(a(o)("csrf.start")),9,P),s("button",{class:"btn",disabled:t.value<=1,onClick:b},e(a(o)("csrf.prev")),9,V),s("button",{class:"btn primary",disabled:t.value===0||t.value>=l,onClick:m},e(a(o)("csrf.next")),9,q),s("button",{class:"btn",onClick:k},e(a(o)("csrf.reset")),1)]),t.value>0?(c(),i("div",I,e(a(o)("csrf.progress",{step:t.value,maxStep:l,title:_.value?.title})),1)):T("",!0),s("div",L,[s("div",M,[s("div",j,e(a(o)("csrf.scenarioTitle")),1),s("div",E,e(a(o)("csrf.scenario")),1),s("div",G,[s("div",H,e(a(o)("csrf.cookieTitle")),1),u[0]||(u[0]=s("code",{class:"mono"},"Cookie: session_id=abc123",-1))])]),s("div",X,[s("div",z,e(a(o)("csrf.requestTitle")),1),s("pre",A,[s("code",null,e(p.value),1)]),s("div",J,e(_.value?.desc),1)])]),s("div",K,[s("div",Q,e(a(o)("csrf.defenseTitle")),1),s("ol",U,[(c(!0),i(S,null,w(f.value,r=>(c(),i("li",{key:r.strong},[s("strong",null,e(r.strong),1),y(e(r.text),1)]))),128))]),s("div",W,[s("div",Y,e(a(o)("csrf.warning")),1),s("div",Z,e(a(o)("csrf.warningText")),1)])])]))}},cs=C($,[["__scopeId","data-v-75a93f38"]]);export{cs as default};
