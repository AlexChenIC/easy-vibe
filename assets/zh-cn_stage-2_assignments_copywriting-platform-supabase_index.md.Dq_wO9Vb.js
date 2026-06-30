import{_ as c,I as l,o as h,c as o,b6 as p,j as a,J as i,w as e,a as n}from"./chunks/framework.CNUu10b_.js";const S=JSON.parse('{"title":"AI 营销文案 SaaS 开发实战","description":"","frontmatter":{},"headers":[],"relativePath":"zh-cn/stage-2/assignments/copywriting-platform-supabase/index.md","filePath":"zh-cn/stage-2/assignments/copywriting-platform-supabase/index.md"}'),b={name:"zh-cn/stage-2/assignments/copywriting-platform-supabase/index.md"},u={style:{margin:"32px 0"}};function k(g,s,f,m,_,x){const t=l("StepBar"),r=l("ClientOnly"),d=l("el-card");return h(),o("div",null,[s[2]||(s[2]=p('<h1 id="ai-营销文案-saas-开发实战" tabindex="-1">AI 营销文案 SaaS 开发实战 <a class="header-anchor" href="#ai-营销文案-saas-开发实战" aria-label="Permalink to “AI 营销文案 SaaS 开发实战”">​</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to “概述”">​</a></h2><p>本实战项目要求你围绕一份真实的 PRD，从零完成一个面向独立开发者和内容团队的 AI 营销文案 SaaS 产品。你将使用 Supabase 作为后端服务、Stripe 作为支付系统，完成从需求分析到部署上线的全过程。</p><p>这是 Stage 2 的综合实战环节。在前面几章中，你已经分别学习了前端页面搭建、后端接口开发、数据库操作、支付集成等单项技能——这个项目要求你把它们全部串起来，交付一个可运行的产品原型。</p><h2 id="前置知识" tabindex="-1">前置知识 <a class="header-anchor" href="#前置知识" aria-label="Permalink to “前置知识”">​</a></h2><p>在开始本项目之前，你应该已经掌握以下内容：</p><ul><li>前端页面设计与组件库使用（<a href="./../../frontend/ui-design/">UI 设计</a>、<a href="./../../frontend/modern-component-library/">现代组件库</a>）</li><li>后端接口设计与开发（<a href="./../../backend/ai-interface-code/">接口代码编写</a>）</li><li>数据库基础与 Supabase（<a href="./../../backend/database-supabase/">从数据库到 Supabase</a>）</li><li>支付集成（<a href="./../../backend/stripe-payment/">Stripe 收费系统</a>）</li><li>Git 工作流与部署（<a href="./../../backend/git-workflow/">Git 和 GitHub</a>、<a href="./../../backend/zeabur-deployment/">部署 Web 应用</a>）</li></ul><h2 id="学习目标" tabindex="-1">学习目标 <a class="header-anchor" href="#学习目标" aria-label="Permalink to “学习目标”">​</a></h2><p>完成本实战后，你将能够：</p><ol><li>阅读并理解一份真实的 PRD，从中提取开发任务清单</li><li>使用 AI 辅助分步生成前端页面和后端接口</li><li>使用 Supabase 实现用户鉴权、数据库操作</li><li>集成 Stripe 实现付费订阅功能</li><li>搭建管理后台并完成端到端联调</li></ol><h2 id="项目简介" tabindex="-1">项目简介 <a class="header-anchor" href="#项目简介" aria-label="Permalink to “项目简介”">​</a></h2><p>你要构建的产品是一个 AI 营销文案 SaaS，包含三个子系统：</p><table tabindex="0"><thead><tr><th>子系统</th><th>职责</th></tr></thead><tbody><tr><td><strong>官网前台</strong></td><td>产品介绍、定价、FAQ、注册转化</td></tr><tr><td><strong>用户工作台</strong></td><td>输入产品信息、生成文案、查看历史、升级套餐</td></tr><tr><td><strong>后台管理台</strong></td><td>用户管理、生成记录、支付数据、运营概览</td></tr></tbody></table><p>后端使用 Supabase 提供数据库和鉴权能力，使用 Stripe 处理支付，使用 AI 模型生成营销文案。</p><div class="tip custom-block"><p class="custom-block-title">PRD 入口</p><p>本项目的需求文档在 GitHub： <a href="https://github.com/datawhalechina/easy-vibe/blob/main/docs/zh-cn/stage-2/assignments/copywriting-platform-supabase/PRD.md" target="_blank" rel="noreferrer">查看 PRD</a></p></div>',15)),a("div",u,[i(r,null,{default:e(()=>[i(t,{active:0,items:[{title:"需求分析",description:"阅读 PRD，明确页面、功能、鉴权、支付范围"},{title:"搭建骨架",description:"用 AI 生成三套前端骨架（www / app / admin）"},{title:"后端集成",description:"Supabase 鉴权、生成接口、Stripe 支付"},{title:"联调上线",description:"端到端跑通，部署并准备演示"}]})]),_:1})]),s[3]||(s[3]=p(`<h2 id="第一部分-需求分析" tabindex="-1">第一部分：需求分析 <a class="header-anchor" href="#第一部分-需求分析" aria-label="Permalink to “第一部分：需求分析”">​</a></h2><h3 id="_1-1-阅读-prd" tabindex="-1">1.1 阅读 PRD <a class="header-anchor" href="#_1-1-阅读-prd" aria-label="Permalink to “1.1 阅读 PRD”">​</a></h3><p>打开 PRD 文档，重点回答以下问题：</p><ul><li>系统有几个入口？各自覆盖哪些页面？</li><li>每个页面的核心功能是什么？</li><li>后端包含哪些模块和数据表？</li><li>套餐定价、支付流程、免费额度如何设计？</li><li>MVP 范围是什么？第一版哪些做，哪些不做？</li></ul><div class="warning custom-block"><p class="custom-block-title custom-block-title-default">WARNING</p><p>如果以上问题没有明确答案，不要开始写代码。需求理解不清楚是导致返工的最常见原因。</p></div><h3 id="_1-2-确认系统架构" tabindex="-1">1.2 确认系统架构 <a class="header-anchor" href="#_1-2-确认系统架构" aria-label="Permalink to “1.2 确认系统架构”">​</a></h3><p>根据 PRD 梳理出系统的整体架构：</p><div class="language-mermaid"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">flowchart TD</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  prd[&quot;PRD&quot;] --&gt; web[&quot;官网前台&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  prd --&gt; app[&quot;用户工作台&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  prd --&gt; admin[&quot;后台管理台&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  app --&gt; auth[&quot;鉴权&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  app --&gt; gen[&quot;文案生成任务&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  gen --&gt; db[&quot;数据库&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  billing[&quot;支付与套餐&quot;] --&gt; db</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  admin --&gt; analytics[&quot;用户 / 生成 / 支付看板&quot;]</span></span></code></pre></div><h2 id="第二部分-搭建项目骨架" tabindex="-1">第二部分：搭建项目骨架 <a class="header-anchor" href="#第二部分-搭建项目骨架" aria-label="Permalink to “第二部分：搭建项目骨架”">​</a></h2><h3 id="_2-1-生成前端页面" tabindex="-1">2.1 生成前端页面 <a class="header-anchor" href="#_2-1-生成前端页面" aria-label="Permalink to “2.1 生成前端页面”">​</a></h3><p>使用 AI 先生成所有页面的基本结构和假数据。</p><p>提示词参考：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>请基于当前 PRD，帮我生成一个 AI 营销文案 SaaS 的前端骨架。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>1. 分成三个入口：www、app、admin</span></span>
<span class="line"><span>2. 官网包括：首页、定价、FAQ</span></span>
<span class="line"><span>3. app 包括：登录、注册、生成工作台、历史记录、套餐页</span></span>
<span class="line"><span>4. admin 包括：后台首页、用户管理、生成记录、支付订单</span></span>
<span class="line"><span>5. 先只生成页面结构和假数据，不接真实接口</span></span>
<span class="line"><span>6. 风格要像现代 SaaS，不像课堂 demo</span></span></code></pre></div><h3 id="_2-2-完善核心页面" tabindex="-1">2.2 完善核心页面 <a class="header-anchor" href="#_2-2-完善核心页面" aria-label="Permalink to “2.2 完善核心页面”">​</a></h3><p>骨架搭好后，重点完善文案生成工作台（Dashboard）页面：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>请继续完善 /dashboard 页面。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>这是一个 AI 营销文案工作台。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>左侧表单字段：</span></span>
<span class="line"><span>- 产品名</span></span>
<span class="line"><span>- 一句话介绍</span></span>
<span class="line"><span>- 目标用户</span></span>
<span class="line"><span>- 3 个卖点</span></span>
<span class="line"><span>- 投放渠道（官网、朋友圈、小红书、抖音、邮件）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>右侧结果区域预留：</span></span>
<span class="line"><span>- 主标题</span></span>
<span class="line"><span>- 副标题</span></span>
<span class="line"><span>- CTA</span></span>
<span class="line"><span>- 3 版短文案</span></span>
<span class="line"><span>- 长文案</span></span>
<span class="line"><span></span></span>
<span class="line"><span>先用 mock 数据跑通交互。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>- 点击&quot;生成文案&quot;后有 loading 状态</span></span>
<span class="line"><span>- 结果区域设计空状态</span></span>
<span class="line"><span>- 响应式布局，宽屏窄屏都能正常显示</span></span></code></pre></div><h3 id="_2-3-验证页面结构" tabindex="-1">2.3 验证页面结构 <a class="header-anchor" href="#_2-3-验证页面结构" aria-label="Permalink to “2.3 验证页面结构”">​</a></h3><p>逐项检查：</p><ul><li>[ ] 三个入口的路由是否独立</li><li>[ ] 页面数量是否与 PRD 一致</li><li>[ ] Dashboard 的表单和结果区域布局合理</li><li>[ ] 假数据展示了基本的 UI 状态</li></ul><h3 id="遇到阻碍" tabindex="-1">遇到阻碍？ <a class="header-anchor" href="#遇到阻碍" aria-label="Permalink to “遇到阻碍？”">​</a></h3><p>如果你在前端搭建阶段卡住，可以回顾这些章节：</p><ul><li><a href="./../../frontend/ui-design/">UI 设计</a></li><li><a href="./../../frontend/multi-product-ui/">参考 UI 设计规范设计页面和按钮</a></li><li><a href="./../../frontend/llm-skills-beautiful/">用 LLM 和 Skills 让界面变好看</a></li><li><a href="./../../frontend/design-to-code/">从设计原型到项目代码</a></li><li><a href="./../../frontend/modern-component-library/">使用现代组件库更新你的界面</a></li></ul><h2 id="第三部分-后端集成" tabindex="-1">第三部分：后端集成 <a class="header-anchor" href="#第三部分-后端集成" aria-label="Permalink to “第三部分：后端集成”">​</a></h2><h3 id="_3-1-接入-supabase-登录" tabindex="-1">3.1 接入 Supabase 登录 <a class="header-anchor" href="#_3-1-接入-supabase-登录" aria-label="Permalink to “3.1 接入 Supabase 登录”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>请把我当成 0 基础，一步一步带我完成 Supabase 登录接入。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>需要你帮我完成：</span></span>
<span class="line"><span>1. 项目接入 Supabase</span></span>
<span class="line"><span>2. 实现注册、登录、退出功能</span></span>
<span class="line"><span>3. 登录成功后跳转到 /dashboard</span></span>
<span class="line"><span>4. 未登录用户访问 /dashboard、/billing、/admin 时自动跳转 /login</span></span>
<span class="line"><span>5. 创建 profiles 表</span></span>
<span class="line"><span>6. 用户注册成功后自动在 profiles 表创建记录</span></span>
<span class="line"><span>7. profiles 表包含 email、role、plan 字段</span></span>
<span class="line"><span></span></span>
<span class="line"><span>实现要求：</span></span>
<span class="line"><span>- 每步都说明在修改哪些文件</span></span>
<span class="line"><span>- 密钥不要硬编码</span></span>
<span class="line"><span>- 需要在 Supabase 后台手动操作的地方请明确标注</span></span>
<span class="line"><span>- 完成后说明如何验证注册和登录</span></span></code></pre></div><h3 id="_3-2-接入生成接口和数据库" tabindex="-1">3.2 接入生成接口和数据库 <a class="header-anchor" href="#_3-2-接入生成接口和数据库" aria-label="Permalink to “3.2 接入生成接口和数据库”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>请把我当成 0 基础，帮我完成网站的核心功能：生成营销文案并保存。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>目标效果：</span></span>
<span class="line"><span>1. 用户在 /dashboard 填写表单，点击&quot;生成文案&quot;</span></span>
<span class="line"><span>2. 后端接收：产品名、介绍、目标用户、卖点、投放渠道</span></span>
<span class="line"><span>3. 后端调用模型生成结果</span></span>
<span class="line"><span>4. 页面展示生成结果</span></span>
<span class="line"><span>5. 输入和输出都保存到数据库</span></span>
<span class="line"><span>6. 用户下次进入可查看历史记录</span></span>
<span class="line"><span></span></span>
<span class="line"><span>需要你完成：</span></span>
<span class="line"><span>- 创建生成接口 /api/generate</span></span>
<span class="line"><span>- 创建 generations 表</span></span>
<span class="line"><span>- 设计输入和输出字段</span></span>
<span class="line"><span>- Dashboard 页面读取当前用户的历史记录</span></span>
<span class="line"><span></span></span>
<span class="line"><span>用户体验：</span></span>
<span class="line"><span>- 按钮 loading 状态</span></span>
<span class="line"><span>- 生成失败时的错误提示</span></span>
<span class="line"><span>- 无历史记录时的空状态</span></span>
<span class="line"><span></span></span>
<span class="line"><span>完成后请说明：</span></span>
<span class="line"><span>- 前端页面文件位置</span></span>
<span class="line"><span>- 后端接口文件位置</span></span>
<span class="line"><span>- 数据写入数据库的逻辑位置</span></span>
<span class="line"><span>- 如何测试完整生成链路</span></span></code></pre></div><h3 id="_3-3-接入-stripe-付费" tabindex="-1">3.3 接入 Stripe 付费 <a class="header-anchor" href="#_3-3-接入-stripe-付费" aria-label="Permalink to “3.3 接入 Stripe 付费”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>请把我当成 0 基础，帮我给 LaunchKit 加上最简可用的 Stripe 付费。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>不需要复杂系统，先跑通最基本的付费链路。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>需要你完成：</span></span>
<span class="line"><span>1. /billing 页面展示 free 和 pro 两个套餐</span></span>
<span class="line"><span>2. 用户点击升级后跳转 Stripe Checkout</span></span>
<span class="line"><span>3. 支付成功后返回网站</span></span>
<span class="line"><span>4. 支付结果保存到 subscriptions 表</span></span>
<span class="line"><span>5. 同步更新 profile.plan 字段</span></span>
<span class="line"><span>6. free 用户每日限 3 次生成，pro 用户不限</span></span>
<span class="line"><span></span></span>
<span class="line"><span>实现原则：</span></span>
<span class="line"><span>- 先跑通主流程，暂不考虑复杂边界</span></span>
<span class="line"><span>- 需要在 Stripe 后台配置的地方请写清楚</span></span>
<span class="line"><span>- 完成后说明如何测试完整支付流程</span></span></code></pre></div><h3 id="_3-4-搭建管理后台" tabindex="-1">3.4 搭建管理后台 <a class="header-anchor" href="#_3-4-搭建管理后台" aria-label="Permalink to “3.4 搭建管理后台”">​</a></h3><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>请把我当成 0 基础，帮我做一个简洁可用的管理后台。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>仅限管理员访问。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>需要你完成：</span></span>
<span class="line"><span>1. 仅 role = admin 的用户可访问 /admin</span></span>
<span class="line"><span>2. 后台包含 3 个 Tab：用户列表、生成记录、订阅状态</span></span>
<span class="line"><span>3. 用户列表显示：email、plan、创建时间</span></span>
<span class="line"><span>4. 生成记录显示：用户、产品名、渠道、创建时间</span></span>
<span class="line"><span>5. 订阅状态显示：用户、套餐、支付状态</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>- 界面简洁清晰</span></span>
<span class="line"><span>- 使用现有组件库的表格、Tab、Badge</span></span>
<span class="line"><span>- 完成后说明如何将账号设为 admin</span></span></code></pre></div><h3 id="遇到阻碍-1" tabindex="-1">遇到阻碍？ <a class="header-anchor" href="#遇到阻碍-1" aria-label="Permalink to “遇到阻碍？”">​</a></h3><p>如果你在后端开发阶段卡住，可以回顾这些章节：</p><ul><li><a href="./../../backend/database-supabase/">从数据库到 Supabase</a></li><li><a href="./../../backend/ai-interface-code/">大模型辅助编写接口代码与接口文档</a></li><li><a href="./../../backend/stripe-payment/">如何集成 Stripe 等收费系统</a></li></ul><h2 id="第四部分-联调与上线" tabindex="-1">第四部分：联调与上线 <a class="header-anchor" href="#第四部分-联调与上线" aria-label="Permalink to “第四部分：联调与上线”">​</a></h2><h3 id="_4-1-端到端测试" tabindex="-1">4.1 端到端测试 <a class="header-anchor" href="#_4-1-端到端测试" aria-label="Permalink to “4.1 端到端测试”">​</a></h3><p>至少验证以下场景：</p><ul><li>注册 → 登录 → 生成文案 → 查看历史 → 升级套餐</li><li>管理员登录 → 查看用户数据 → 查看生成记录 → 查看支付状态</li></ul><p>部署前检查：</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>请把我当成 0 基础，帮我检查项目是否具备部署条件。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>检查重点：</span></span>
<span class="line"><span>- 环境变量是否完整</span></span>
<span class="line"><span>- 登录回调地址是否正确</span></span>
<span class="line"><span>- Stripe 支付回调地址是否正确</span></span>
<span class="line"><span>- 页面是否缺少 loading、空状态、错误提示</span></span>
<span class="line"><span>- README 是否包含启动说明和部署说明</span></span>
<span class="line"><span></span></span>
<span class="line"><span>需要你：</span></span>
<span class="line"><span>1. 按优先级列出待修复事项</span></span>
<span class="line"><span>2. 标注哪些必须先修</span></span>
<span class="line"><span>3. 说明修复后的部署步骤</span></span></code></pre></div><h3 id="_4-2-部署" tabindex="-1">4.2 部署 <a class="header-anchor" href="#_4-2-部署" aria-label="Permalink to “4.2 部署”">​</a></h3><p>将项目部署到公网环境。部署教程参考：<a href="./../../backend/git-workflow/">Git 和 GitHub 工作流</a>、<a href="./../../backend/zeabur-deployment/">如何部署 Web 应用</a>。</p><h2 id="交付物" tabindex="-1">交付物 <a class="header-anchor" href="#交付物" aria-label="Permalink to “交付物”">​</a></h2><p>完成本项目后，你需要提交以下内容：</p><ul><li>[ ] 可访问的线上演示链接</li><li>[ ] 源码仓库链接（含 README）</li><li>[ ] PRD 文档</li><li>[ ] 核心页面截图（首页、Dashboard、Billing、Admin）</li><li>[ ] 60 秒演示视频（覆盖注册 → 生成 → 支付 → 后台）</li></ul><p>README 至少包含：项目简介、核心页面说明、技术栈、本地启动步骤、环境变量清单。</p><h2 id="评分标准" tabindex="-1">评分标准 <a class="header-anchor" href="#评分标准" aria-label="Permalink to “评分标准”">​</a></h2><table tabindex="0"><thead><tr><th>维度</th><th>基本要求</th><th>进阶要求</th></tr></thead><tbody><tr><td>产品完整度</td><td>首页、登录、Dashboard、Billing、Admin 都能访问</td><td>首页文案和视觉风格像真实 SaaS</td></tr><tr><td>业务闭环</td><td>注册 → 登录 → 生成 → 查看历史可以跑通</td><td>免费/Pro 权限差异清晰可见</td></tr><tr><td>数据正确性</td><td>生成结果和支付状态都写入数据库</td><td>有明确的错误提示、空状态和 loading</td></tr><tr><td>权限与安全</td><td>未登录不能访问受保护页面，普通用户不能进 Admin</td><td>有基本的输入校验和服务端鉴权</td></tr><tr><td>工程交付</td><td>项目可本地启动，也可部署到公网</td><td>README 清楚，演示视频结构完整</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title custom-block-title-default">TIP</p><p>如果你觉得任务太大，记住一个原则：<strong>先保证&quot;能跑通&quot;，再去追求&quot;做漂亮&quot;。</strong></p></div><h2 id="提交前检查" tabindex="-1">提交前检查 <a class="header-anchor" href="#提交前检查" aria-label="Permalink to “提交前检查”">​</a></h2>`,50)),i(d,{shadow:"hover",style:{margin:"20px 0","border-radius":"12px"}},{header:e(()=>[...s[0]||(s[0]=[a("div",{style:{"font-weight":"bold","font-size":"16px"}},"提交前最后看一眼",-1)])]),default:e(()=>[s[1]||(s[1]=a("ul",{style:{"list-style-type":"none","padding-left":"0"}},[a("li",null,[a("label",null,[a("input",{type:"checkbox",disabled:""}),n(" 首页、登录页、Dashboard、Billing、Admin 均已完成")])]),a("li",null,[a("label",null,[a("input",{type:"checkbox",disabled:""}),n(" 用户可以注册、登录、退出")])]),a("li",null,[a("label",null,[a("input",{type:"checkbox",disabled:""}),n(" 生成结果真实写入数据库")])]),a("li",null,[a("label",null,[a("input",{type:"checkbox",disabled:""}),n(" 支付主流程已跑通")])]),a("li",null,[a("label",null,[a("input",{type:"checkbox",disabled:""}),n(" 管理员可查看用户、生成记录和支付状态")])]),a("li",null,[a("label",null,[a("input",{type:"checkbox",disabled:""}),n(" 项目已部署到公网")])])],-1))]),_:1}),s[4]||(s[4]=p('<h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to “参考资料”">​</a></h2><ul><li><a href="./../../frontend/ui-design/">UI 设计</a></li><li><a href="./../../frontend/multi-product-ui/">参考 UI 设计规范设计页面和按钮</a></li><li><a href="./../../frontend/llm-skills-beautiful/">用 LLM 和 Skills 让界面变好看</a></li><li><a href="./../../frontend/design-to-code/">从设计原型到项目代码</a></li><li><a href="./../../frontend/modern-component-library/">使用现代组件库更新你的界面</a></li><li><a href="./../../backend/database-supabase/">从数据库到 Supabase</a></li><li><a href="./../../backend/ai-interface-code/">大模型辅助编写接口代码与接口文档</a></li><li><a href="./../../backend/git-workflow/">Git 和 GitHub 工作流</a></li><li><a href="./../../backend/zeabur-deployment/">如何部署 Web 应用</a></li><li><a href="./../../backend/stripe-payment/">如何集成 Stripe 等收费系统</a></li></ul>',2))])}const P=c(b,[["render",k]]);export{S as __pageData,P as default};
