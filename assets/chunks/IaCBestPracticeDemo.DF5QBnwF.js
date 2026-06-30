import{_,o as i,c,j as t,G as r,H as l,n as m,t as e,J as p,w as y,e as f,T as b,y as k,h}from"./framework.CNUu10b_.js";const g={class:"iac-best-practice-demo"},C={class:"practice-tabs"},T=["onClick"],x={class:"tab-icon"},B={class:"tab-name"},D={class:"practice-header"},I={class:"practice-icon"},S={class:"practice-title"},w={class:"practice-subtitle"},P={class:"do-dont-grid"},E={class:"do-card"},G={class:"card-items"},N={class:"dont-card"},R={class:"card-items"},V={key:0,class:"code-example"},L={class:"code-header"},j={class:"code-body"},q={class:"maturity-bar"},z={class:"maturity-track"},A={class:"maturity-text"},F={__name:"IaCBestPracticeDemo",setup(H){const n=k(0),v=["入门","基础","进阶","成熟","卓越"],u=[{key:"vcs",icon:"📂",name:"版本控制",title:"实践一：基础设施代码纳入版本控制",subtitle:"像管理应用代码一样管理基础设施代码",dos:["所有 .tf 文件提交到 Git 仓库","使用分支策略（main / dev / feature）","通过 Pull Request 进行代码审查","在 CI 中自动运行 terraform plan"],donts:["在本地执行 apply 后不提交代码","直接在 main 分支上修改","将 .tfstate 文件提交到 Git","跳过 Code Review 直接部署"],codeTitle:".gitignore 示例",code:`# 忽略本地状态文件
*.tfstate
*.tfstate.backup
.terraform/

# 忽略敏感变量文件
*.tfvars
!example.tfvars`,maturity:1},{key:"modules",icon:"🧩",name:"模块化",title:"实践二：使用模块实现代码复用",subtitle:"避免复制粘贴，通过模块封装通用基础设施模式",dos:["将通用模式抽取为可复用模块","模块使用语义化版本号","为模块编写 README 和使用示例","通过 variables 暴露可配置参数"],donts:["在多个项目中复制粘贴相同代码",'创建过于庞大的"万能"模块',"模块内硬编码环境特定的值","不写文档直接发布模块"],codeTitle:"模块调用示例",code:`module "web_server" {
  source  = "./modules/ec2-instance"
  version = "2.1.0"

  instance_type = "t3.micro"
  environment   = "production"
  app_name      = "my-web-app"
}`,maturity:2},{key:"state",icon:"💾",name:"状态管理",title:"实践三：远程状态存储与锁定",subtitle:"State 文件是 IaC 的核心，必须安全可靠地管理",dos:["使用远程后端（S3 + DynamoDB）","启用状态文件加密","配置状态锁防止并发冲突","按环境/项目隔离状态文件"],donts:["将 State 存储在本地文件系统","多人共享同一个 State 无锁机制","手动编辑 terraform.tfstate","所有环境共用一个 State 文件"],codeTitle:"远程后端配置",code:`terraform {
  backend "s3" {
    bucket         = "my-tf-state"
    key            = "prod/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "tf-lock"
  }
}`,maturity:2},{key:"env",icon:"🌍",name:"环境管理",title:"实践四：多环境一致性管理",subtitle:"开发、测试、生产环境使用相同代码，仅参数不同",dos:["使用 Workspace 或目录隔离环境","通过 .tfvars 文件区分环境参数","保持环境间代码结构完全一致","先在 dev 验证，再推广到 prod"],donts:["为每个环境维护独立的代码副本","在代码中硬编码环境名称","跳过测试环境直接部署生产","不同环境使用不同的模块版本"],codeTitle:"多环境目录结构",code:`environments/
├── dev/
│   ├── main.tf        # 引用相同模块
│   └── dev.tfvars     # 开发环境参数
├── staging/
│   ├── main.tf
│   └── staging.tfvars
└── prod/
    ├── main.tf
    └── prod.tfvars`,maturity:3}],s=h(()=>u[n.value]);return(J,d)=>(i(),c("div",g,[d[3]||(d[3]=t("div",{class:"demo-label"},"交互演示 ── IaC 最佳实践",-1)),t("div",C,[(i(),c(r,null,l(u,(a,o)=>t("button",{key:a.key,class:m(["practice-tab",{active:n.value===o}]),onClick:M=>n.value=o},[t("span",x,e(a.icon),1),t("span",B,e(a.name),1)],10,T)),64))]),p(b,{name:"fade",mode:"out-in"},{default:y(()=>[(i(),c("div",{key:n.value,class:"practice-content"},[t("div",D,[t("span",I,e(s.value.icon),1),t("div",null,[t("div",S,e(s.value.title),1),t("div",w,e(s.value.subtitle),1)])]),t("div",P,[t("div",E,[d[0]||(d[0]=t("div",{class:"card-label good-label"},"✅ 推荐做法",-1)),t("div",G,[(i(!0),c(r,null,l(s.value.dos,(a,o)=>(i(),c("div",{key:o,class:"card-item"},e(a),1))),128))])]),t("div",N,[d[1]||(d[1]=t("div",{class:"card-label bad-label"},"❌ 反面模式",-1)),t("div",R,[(i(!0),c(r,null,l(s.value.donts,(a,o)=>(i(),c("div",{key:o,class:"card-item"},e(a),1))),128))])])]),s.value.code?(i(),c("div",V,[t("div",L,[t("span",null,e(s.value.codeTitle),1)]),t("pre",j,[t("code",null,e(s.value.code),1)])])):f("",!0),t("div",q,[d[2]||(d[2]=t("div",{class:"maturity-label"},"实践成熟度",-1)),t("div",z,[(i(),c(r,null,l(v,(a,o)=>t("div",{key:o,class:m(["maturity-segment",{filled:o<=s.value.maturity}])},[t("span",A,e(a),1)],2)),64))])])]))]),_:1})]))}},$=_(F,[["__scopeId","data-v-7e43dda8"]]);export{$ as default};
