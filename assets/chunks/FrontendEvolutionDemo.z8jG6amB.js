import{_ as m,o as a,c as o,j as e,G as u,H as h,n as w,t as i,J as b,w as g,a as l,e as c,T as _,y}from"./framework.CNUu10b_.js";const k={class:"frontend-evolution-demo"},f={class:"timeline-container"},x=["onClick"],M={class:"node-content"},T={class:"year-badge"},S={class:"node-label"},C={class:"content-wrapper"},I={class:"header-section"},D={class:"stage-index"},V={class:"visualization-grid"},$={class:"mac-window code-window"},j={class:"window-bar"},B={class:"window-title"},E={class:"editor-content"},H={class:"mac-window diagram-window"},L={class:"diagram-canvas"},F={key:0,class:"diagram static"},W={key:1,class:"diagram jquery"},N={style:{position:"absolute",width:"0",height:"0"}},Q={key:2,class:"diagram mvc"},A={key:3,class:"diagram component"},J={__name:"FrontendEvolutionDemo",setup(O){const t=y(0),p=r=>({1:"I",2:"II",3:"III",4:"IV"})[r]||r,n=[{year:"1990s",label:"Static Web",title:"The Static Era",desc:"Web pages were just digital documents. The server sent HTML, and the browser rendered it. Want new content? Refresh the whole page.",codeTitle:"index.html",code:`<html>
<body>
  <h1>Hello World</h1>
  <p>Static content served by server.</p>
</body>
</html>`},{year:"2005+",label:"jQuery Era",title:"Imperative DOM",desc:`JS directly manipulated the DOM. "Find that button, add a click listener, change that div's color". Logic became tangled like "spaghetti".`,codeTitle:"script.js",code:`$('#btn').click(function() {
  // Find & Modify directly
  $('.box').show();
  $('.text').text('Loading...');
  
  // Callback hell...
  $.ajax('/api', function(data) {
    $('.content').html(data);
  });
});`},{year:"2010+",label:"MVC/MVVM",title:"Framework Era",desc:"Separation of concerns. Data (Model) and View were separated. Two-way data binding (like in AngularJS) was magic but performance-heavy.",codeTitle:"controller.js",code:`$scope.user = { name: 'Bob' };

// Magic: Data changes -> View updates
$scope.updateName = function() {
  $scope.user.name = 'Alice';
};`},{year:"2013+",label:"Component",title:"Component Era",desc:'UI is broken into independent "Lego blocks" (Components). Declarative: You define "What it looks like given State X", framework handles the "How".',codeTitle:"ProductCard.vue",code:`<template>
  <div class="card">
    <h3>{{ product.name }}</h3>
    <button @click="buy">Buy</button>
  </div>
</template>

<script>
// State driven
export default {
  props: ['product'],
  methods: { buy() { ... } }
}
<\/script>`}];return(r,s)=>(a(),o("div",k,[e("div",f,[s[1]||(s[1]=e("div",{class:"timeline-track"},null,-1)),(a(),o(u,null,h(n,(v,d)=>e("button",{key:d,class:w(["timeline-node",{active:t.value===d,passed:t.value>d}]),onClick:P=>t.value=d},[s[0]||(s[0]=e("div",{class:"node-dot"},[e("div",{class:"inner-dot"})],-1)),e("div",M,[e("span",T,i(v.year),1),e("span",S,i(v.label),1)])],10,x)),64))]),e("div",C,[b(_,{name:"fade-slide",mode:"out-in"},{default:g(()=>[(a(),o("div",{key:t.value,class:"stage-content"},[e("div",I,[e("h3",null,[e("span",D,i(p(t.value+1))+".",1),l(" "+i(n[t.value].title),1)]),e("p",null,i(n[t.value].desc),1)]),e("div",V,[e("div",$,[e("div",j,[s[2]||(s[2]=e("div",{class:"traffic-lights"},[e("span",{class:"light red"}),e("span",{class:"light yellow"}),e("span",{class:"light green"})],-1)),e("div",B,i(n[t.value].codeTitle),1)]),e("div",E,[e("pre",null,[e("code",null,i(n[t.value].code),1)])])]),e("div",H,[s[10]||(s[10]=e("div",{class:"window-bar"},[e("div",{class:"window-title"}," Architecture Pattern ")],-1)),e("div",L,[t.value===0?(a(),o("div",F,[...s[3]||(s[3]=[e("div",{class:"flow-stack"},[e("div",{class:"concept-box html"},[e("span",{class:"icon"},"📄"),l(" HTML (Content) ")]),e("div",{class:"flow-arrow"}," ↓ "),e("div",{class:"concept-box browser"},[e("span",{class:"icon"},"🌍"),l(" Browser (Display) ")])],-1),e("div",{class:"side-note"}," Server sends complete HTML ",-1)])])):c("",!0),t.value===1?(a(),o("div",W,[s[5]||(s[5]=e("div",{class:"concept-box dom"},[e("span",{class:"icon"},"🌳"),l(" DOM Tree ")],-1)),s[6]||(s[6]=e("div",{class:"chaos-arrows"},[e("svg",{viewBox:"0 0 100 60",class:"chaos-svg"},[e("path",{d:"M10,10 Q50,5 90,10",class:"arrow-path","marker-end":"url(#arrowhead)"}),e("path",{d:"M90,50 Q50,55 10,50",class:"arrow-path","marker-end":"url(#arrowhead)"}),e("path",{d:"M20,20 Q50,40 80,20",class:"arrow-path dashed","marker-end":"url(#arrowhead)"})]),e("span",{class:"label-action"},"Direct Manipulation"),e("span",{class:"label-event"},"Events")],-1)),s[7]||(s[7]=e("div",{class:"concept-box js"},[e("span",{class:"icon"},"🍝"),l(" jQuery / JS ")],-1)),(a(),o("svg",N,[...s[4]||(s[4]=[e("defs",null,[e("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"9",refY:"3.5",orient:"auto"},[e("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#666"})])],-1)])]))])):c("",!0),t.value===2?(a(),o("div",Q,[...s[8]||(s[8]=[e("div",{class:"mvc-triangle"},[e("div",{class:"concept-box model"}," Model "),e("div",{class:"concept-box view"}," View "),e("div",{class:"concept-box controller"}," Controller "),e("div",{class:"line m-v"}),e("div",{class:"line v-c"}),e("div",{class:"line c-m"})],-1),e("div",{class:"mvc-desc"}," Two-way Binding ",-1)])])):c("",!0),t.value===3?(a(),o("div",A,[...s[9]||(s[9]=[e("div",{class:"comp-structure"},[e("div",{class:"comp-box root"},[e("span",{class:"comp-label"},"App"),e("div",{class:"comp-children"},[e("div",{class:"comp-box header"}," Header "),e("div",{class:"comp-box list"},[l(" ProductList "),e("div",{class:"comp-children row"},[e("div",{class:"comp-box item"}," Item "),e("div",{class:"comp-box item"}," Item ")])])])])],-1),e("div",{class:"flow-pill"}," State ➔ UI = f(State) ",-1)])])):c("",!0)])])])]))]),_:1})])]))}},R=m(J,[["__scopeId","data-v-82b88a25"]]);export{R as default};
