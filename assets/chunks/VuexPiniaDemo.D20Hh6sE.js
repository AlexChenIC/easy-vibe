import{_ as p,o as a,c as o,j as e,t as n,k as i,a as l,n as u,G as v,H as m,J as x,w as _,e as f,T as P,y as g}from"./framework.CNUu10b_.js";import{g as h}from"./theme.9nm-YoQ1.js";import{c as k}from"./index.DrV637NN.js";const b={class:"vuex-pinia-demo"},C={class:"demo-header"},y={class:"title"},N={class:"subtitle"},T={class:"intro-text"},V={class:"highlight"},S={class:"demo-content"},E={class:"comparison-cards"},I={class:"card-header"},j={class:"card-badge"},B={class:"card-body"},D={class:"feature-list"},M={class:"card-header"},w={class:"card-badge recommended"},H={class:"card-body"},L={class:"feature-list"},R={key:"vuex",class:"code-example"},$={class:"code-title"},z={key:"pinia",class:"code-example"},F={class:"code-title"},G={class:"info-box"},J={__name:"VuexPiniaDemo",setup(q){const{t}=h(k),d=g("pinia");return(A,s)=>(a(),o("div",b,[e("div",C,[s[2]||(s[2]=e("span",{class:"icon"},"🍍",-1)),e("span",y,n(i(t)("vuexPinia.title")),1),e("span",N,n(i(t)("vuexPinia.subtitle")),1)]),e("div",T,[l(n(i(t)("vuexPinia.introPrefix")),1),e("span",V,n(i(t)("vuexPinia.introHighlight")),1),l(n(i(t)("vuexPinia.introSuffix")),1)]),e("div",S,[e("div",E,[e("div",{class:u(["card vuex-card",{active:d.value==="vuex"}]),onClick:s[0]||(s[0]=c=>d.value="vuex")},[e("div",I,[s[3]||(s[3]=e("span",{class:"card-icon"},"🌿",-1)),s[4]||(s[4]=e("span",{class:"card-title"},"Vuex",-1)),e("span",j,n(i(t)("vuexPinia.classic")),1)]),e("div",B,[e("div",D,[(a(!0),o(v,null,m(i(t)("vuexPinia.cards.vuex"),(c,r)=>(a(),o("div",{key:r,class:"feature-item"},n(c),1))),128))])])],2),e("div",{class:u(["card pinia-card",{active:d.value==="pinia"}]),onClick:s[1]||(s[1]=c=>d.value="pinia")},[e("div",M,[s[5]||(s[5]=e("span",{class:"card-icon"},"🍍",-1)),s[6]||(s[6]=e("span",{class:"card-title"},"Pinia",-1)),e("span",w,n(i(t)("vuexPinia.recommended")),1)]),e("div",H,[e("div",L,[(a(!0),o(v,null,m(i(t)("vuexPinia.cards.pinia"),(c,r)=>(a(),o("div",{key:r,class:"feature-item"},n(c),1))),128))])])],2)]),x(P,{name:"fade",mode:"out-in"},{default:_(()=>[d.value==="vuex"?(a(),o("div",R,[e("div",$,n(i(t)("vuexPinia.vuexCodeTitle")),1),s[7]||(s[7]=e("pre",{class:"code-block"},[e("code",null,`// store/index.js
export default createStore({
  state: { count: 0 },
  mutations: {
    INCREMENT(state) {
      state.count++
    }
  },
  actions: {
    increment({ commit }) {
      commit('INCREMENT')
    }
  }
})`)],-1))])):d.value==="pinia"?(a(),o("div",z,[e("div",F,n(i(t)("vuexPinia.piniaCodeTitle")),1),s[8]||(s[8]=e("pre",{class:"code-block"},[e("code",null,`// stores/counter.js
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  function increment() {
    count.value++
  }

  return { count, increment }
})`)],-1))])):f("",!0)]),_:1})]),e("div",G,[s[9]||(s[9]=e("span",{class:"icon"},"💡",-1)),e("strong",null,n(i(t)("common.recommendation")),1),l(n(i(t)("vuexPinia.idea")),1)])]))}},U=p(J,[["__scopeId","data-v-f9ee4c0a"]]);export{U as default};
