import{_ as C,o as s,c as l,j as t,G as d,H as m,Q as h,n as y,t as o,J as S,w,e as b,T,y as _,h as x}from"./framework.CNUu10b_.js";const A={class:"iac-tool-comparison-demo"},I={class:"tool-selector"},W={class:"tool-chips"},F=["onClick"],P={key:0,class:"comparison-grid"},N={class:"tool-header-icon"},H={class:"feature-cell"},M={key:1,class:"empty-hint"},B={key:0,class:"detail-card"},L={class:"detail-header"},D={class:"detail-icon"},E={class:"detail-name"},V={class:"detail-desc"},G={class:"detail-code"},$={class:"code-block"},z={key:2,class:"detail-hint"},J={key:3,class:"tool-detail-btns"},O=["onClick"],R={__name:"IaCToolComparisonDemo",setup(Y){const n=_(["Terraform","CloudFormation"]),c=_(""),r=x(()=>c.value?p.find(i=>i.name===c.value):null),g=[{key:"vendor",label:"厂商"},{key:"language",label:"配置语言"},{key:"style",label:"声明式/命令式"},{key:"multiCloud",label:"多云支持"},{key:"stateManagement",label:"状态管理"},{key:"learning",label:"学习曲线"},{key:"community",label:"社区生态"},{key:"bestFor",label:"最佳场景"}],p=[{name:"Terraform",icon:"🟣",color:"#7c3aed",features:{vendor:"HashiCorp",language:"HCL",style:"声明式",multiCloud:"原生多云",stateManagement:"State 文件",learning:"中等",community:"非常活跃",bestFor:"多云/混合云"},desc:"Terraform 是目前最流行的开源 IaC 工具，由 HashiCorp 开发。它使用自研的 HCL 语言，通过 Provider 机制支持几乎所有主流云平台。",example:`resource "aws_s3_bucket" "data" {
  bucket = "my-data-bucket"
  tags   = { Env = "prod" }
}

resource "aws_instance" "web" {
  ami           = "ami-0c55b159"
  instance_type = "t3.micro"
}`},{name:"CloudFormation",icon:"🟠",color:"#ea580c",features:{vendor:"AWS",language:"YAML / JSON",style:"声明式",multiCloud:"仅 AWS",stateManagement:"AWS 托管",learning:"中等偏高",community:"AWS 生态",bestFor:"纯 AWS 环境"},desc:"CloudFormation 是 AWS 原生的 IaC 服务，与 AWS 服务深度集成。状态由 AWS 自动管理，无需额外维护 State 文件。",example:`Resources:
  WebServer:
    Type: AWS::EC2::Instance
    Properties:
      ImageId: ami-0c55b159
      InstanceType: t3.micro
      Tags:
        - Key: Name
          Value: web-server`},{name:"Pulumi",icon:"🔵",color:"#2563eb",features:{vendor:"Pulumi",language:"TypeScript/Python/Go",style:"命令式 + 声明式",multiCloud:"原生多云",stateManagement:"Pulumi Cloud / 自管",learning:"低（熟悉编程语言）",community:"快速增长",bestFor:"开发者友好场景"},desc:"Pulumi 允许使用真正的编程语言（TypeScript、Python、Go 等）来定义基础设施，对开发者非常友好，支持条件判断、循环等编程特性。",example:`import * as aws from "@pulumi/aws"

const bucket = new aws.s3.Bucket("data", {
  tags: { Env: "prod" }
})

const server = new aws.ec2.Instance("web", {
  ami: "ami-0c55b159",
  instanceType: "t3.micro",
})`},{name:"Ansible",icon:"🔴",color:"#dc2626",features:{vendor:"Red Hat",language:"YAML (Playbook)",style:"命令式",multiCloud:"通过模块支持",stateManagement:"无状态（幂等）",learning:"低",community:"非常活跃",bestFor:"配置管理 + 编排"},desc:"Ansible 是一个无代理的自动化工具，擅长配置管理和应用部署。它通过 SSH 连接目标机器执行任务，无需安装客户端。",example:`- name: 部署 Web 服务器
  hosts: webservers
  tasks:
    - name: 安装 Nginx
      apt:
        name: nginx
        state: present
    - name: 启动服务
      service:
        name: nginx
        state: started`}];function v(i){return p.find(a=>a.name===i)}function k(i){const a=n.value.indexOf(i);a>=0?n.value.length>2&&n.value.splice(a,1):n.value.push(i)}function f(i,a){const e=v(i).features[a];return a==="multiCloud"?e.includes("原生多云")?"cell-good":e.includes("仅")?"cell-warn":"":a==="learning"?e==="低"?"cell-good":e.includes("高")?"cell-warn":"":""}return(i,a)=>(s(),l("div",A,[a[4]||(a[4]=t("div",{class:"demo-label"},"交互演示 ── 主流 IaC 工具对比",-1)),t("div",I,[a[1]||(a[1]=t("span",{class:"selector-hint"},"选择要对比的工具（至少选 2 个）：",-1)),t("div",W,[(s(),l(d,null,m(p,e=>t("button",{key:e.name,class:y(["tool-chip",{selected:n.value.includes(e.name)}]),style:h(n.value.includes(e.name)?{background:e.color,borderColor:e.color,color:"#fff"}:{}),onClick:u=>k(e.name)},o(e.icon)+" "+o(e.name),15,F)),64))])]),n.value.length>=2?(s(),l("div",P,[t("table",null,[t("thead",null,[t("tr",null,[a[2]||(a[2]=t("th",{class:"feature-col"},"特性",-1)),(s(!0),l(d,null,m(n.value,e=>(s(),l("th",{key:e,class:"tool-col"},[t("span",N,o(v(e).icon),1),t("span",null,o(e),1)]))),128))])]),t("tbody",null,[(s(),l(d,null,m(g,e=>t("tr",{key:e.key},[t("td",H,o(e.label),1),(s(!0),l(d,null,m(n.value,u=>(s(),l("td",{key:u,class:"value-cell"},[t("span",{class:y(f(u,e.key))},o(v(u).features[e.key]),3)]))),128))])),64))])])])):(s(),l("div",M," 请至少选择 2 个工具进行对比 ")),S(T,{name:"fade"},{default:w(()=>[r.value?(s(),l("div",B,[t("div",L,[t("span",D,o(r.value.icon),1),t("span",E,o(r.value.name),1),t("button",{class:"close-btn",onClick:a[0]||(a[0]=e=>c.value="")},"✕")]),t("p",V,o(r.value.desc),1),t("div",G,[a[3]||(a[3]=t("div",{class:"code-label"},"示例代码片段：",-1)),t("pre",$,[t("code",null,o(r.value.example),1)])])])):b("",!0)]),_:1}),n.value.length>=2&&!c.value?(s(),l("div",z," 点击下方工具名称查看详细介绍和代码示例 ")):b("",!0),n.value.length>=2?(s(),l("div",J,[(s(!0),l(d,null,m(n.value,e=>(s(),l("button",{key:e,class:y(["detail-btn",{active:c.value===e}]),onClick:u=>c.value=c.value===e?"":e},o(v(e).icon)+" "+o(e),11,O))),128))])):b("",!0)]))}},Q=C(R,[["__scopeId","data-v-bcd681dd"]]);export{Q as default};
