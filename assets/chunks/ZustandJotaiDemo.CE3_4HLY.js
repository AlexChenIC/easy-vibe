import{_ as h,o as a,c,j as t,t as s,k as n,a as r,G as l,H as m,n as v,J as f,w as b,e as u,T as z,y as J,h as k}from"./framework.CNUu10b_.js";import{g as C}from"./theme.9nm-YoQ1.js";import{c as g}from"./index.DrV637NN.js";const x={class:"zustand-jotai-demo"},y={class:"demo-header"},A={class:"title"},j={class:"subtitle"},S={class:"intro-text"},w={class:"highlight"},B={class:"demo-content"},I={class:"demo-tabs"},N=["onClick"],T={class:"tab-icon"},V={class:"tab-name"},D={key:0,class:"feature-showcase"},Z={class:"feature-icon"},H={class:"feature-title"},L={class:"feature-desc"},P={key:1,class:"code-example"},E={class:"code-block"},F={key:2,class:"feature-showcase"},G={class:"feature-icon"},M={class:"feature-title"},$={class:"feature-desc"},q={key:3,class:"code-example"},K={class:"code-block"},O={class:"info-box"},Q={__name:"ZustandJotaiDemo",setup(R){const{t:o,messages:_}=C(g),i=J("zustand"),p=k(()=>_.value.zustandJotai.tabs);return(U,d)=>(a(),c("div",x,[t("div",y,[d[0]||(d[0]=t("span",{class:"icon"},"🐻",-1)),t("span",A,s(n(o)("zustandJotai.title")),1),t("span",j,s(n(o)("zustandJotai.subtitle")),1)]),t("div",S,[r(s(n(o)("zustandJotai.introPrefix")),1),t("span",w,s(n(o)("zustandJotai.introHighlight")),1),r(s(n(o)("zustandJotai.introSuffix")),1)]),t("div",B,[t("div",I,[(a(!0),c(l,null,m(p.value,e=>(a(),c("button",{key:e.id,class:v(["tab-button",{active:i.value===e.id}]),onClick:W=>i.value=e.id},[t("span",T,s(e.icon),1),t("span",V,s(e.name),1)],10,N))),128))]),f(z,{name:"fade",mode:"out-in"},{default:b(()=>[(a(),c("div",{key:i.value,class:"tab-content"},[i.value==="zustand"?(a(),c("div",D,[(a(!0),c(l,null,m(n(o)("zustandJotai.features.zustand"),e=>(a(),c("div",{key:e.title,class:"feature-card"},[t("span",Z,s(e.icon),1),t("span",H,s(e.title),1),t("span",L,s(e.desc),1)]))),128))])):u("",!0),i.value==="zustand"?(a(),c("div",P,[t("pre",E,[t("code",null,`// Zustand Store
import { create } from 'zustand'

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({
    bears: state.bears + 1
  }))
}))

// `+s(n(o)("zustandJotai.codeComments.useInComponent"))+`
function BearCounter() {
  const bears = useStore((state) => state.bears)
  return <div>{bears} bears around here</div>
}`,1)])])):u("",!0),i.value==="jotai"?(a(),c("div",F,[(a(!0),c(l,null,m(n(o)("zustandJotai.features.jotai"),e=>(a(),c("div",{key:e.title,class:"feature-card"},[t("span",G,s(e.icon),1),t("span",M,s(e.title),1),t("span",$,s(e.desc),1)]))),128))])):u("",!0),i.value==="jotai"?(a(),c("div",q,[t("pre",K,[t("code",null,`// Jotai Atom
import { atom } from 'jotai'

// `+s(n(o)("zustandJotai.codeComments.baseAtom"))+`
const countAtom = atom(0)

// `+s(n(o)("zustandJotai.codeComments.derivedAtom"))+`
const doubleAtom = atom((get) => get(countAtom) * 2)

// `+s(n(o)("zustandJotai.codeComments.useInComponent"))+`
function Counter() {
  const [count, setCount] = useAtom(countAtom)
  const [double] = useAtom(doubleAtom)
  return (
    <div>
      <span>{count}</span>
      <span>{double}</span>
    </div>
  )
}`,1)])])):u("",!0)]))]),_:1})]),t("div",O,[d[1]||(d[1]=t("span",{class:"icon"},"💡",-1)),t("strong",null,s(n(o)("common.recommendation")),1),r(s(n(o)("zustandJotai.idea")),1)])]))}},st=h(Q,[["__scopeId","data-v-6591a5ef"]]);export{st as default};
