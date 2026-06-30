import{_ as a,o as i,c as n,b6 as l}from"./chunks/framework.CNUu10b_.js";const c=JSON.parse('{"title":"Claude Code 快速上手核心指南","description":"","frontmatter":{},"headers":[],"relativePath":"zh-cn/stage-3/core-skills/basics/index.md","filePath":"zh-cn/stage-3/core-skills/basics/index.md"}'),p={name:"zh-cn/stage-3/core-skills/basics/index.md"};function t(e,s,h,k,d,r){return i(),n("div",null,[...s[0]||(s[0]=[l(`<h1 id="claude-code-快速上手核心指南" tabindex="-1">Claude Code 快速上手核心指南 <a class="header-anchor" href="#claude-code-快速上手核心指南" aria-label="Permalink to “Claude Code 快速上手核心指南”">​</a></h1><p>Claude Code 是 Anthropic 官方出品的 AI 原生编码工具，它将大型语言模型的能力直接集成到终端中，让你可以用自然语言与 AI 协作完成编程任务。不同于传统的代码补全工具，Claude Code 能够理解整个项目的上下文，执行复杂的开发任务，从代码生成到重构、从调试到文档编写，它都能胜任。</p><p>本章将带你快速掌握 Claude Code 的核心用法，包括安装配置、基础操作、实用技巧和常用指令。无论你是第一次接触 AI 编程工具，还是想更高效地使用 Claude Code，这里都有你需要的知识。</p><hr><h2 id="快速安装" tabindex="-1">快速安装 <a class="header-anchor" href="#快速安装" aria-label="Permalink to “快速安装”">​</a></h2><p>Claude Code 基于 Node.js 构建，因此安装前请确保你的系统已安装 Node.js 18 或更高版本。安装过程非常简单，通常只需要几分钟。</p><h3 id="为什么需要-claude-code" tabindex="-1">为什么需要 Claude Code <a class="header-anchor" href="#为什么需要-claude-code" aria-label="Permalink to “为什么需要 Claude Code”">​</a></h3><p>在传统的开发流程中，开发者需要在编辑器、终端、浏览器和文档之间频繁切换。Claude Code 将这些工作流整合到一个统一的界面中：你可以在同一个终端窗口里编写代码、运行测试、查看文档、甚至与团队成员协作。更重要的是，它能理解你的项目结构，记住你的编码习惯，真正成为你的编程助手。</p><h3 id="方法一-手动安装" tabindex="-1">方法一：手动安装 <a class="header-anchor" href="#方法一-手动安装" aria-label="Permalink to “方法一：手动安装”">​</a></h3><p>手动安装适合喜欢掌控每个步骤的开发者，也让你更清楚工具的组成部分。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 全局安装 Claude Code CLI</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用 -g 参数将命令安装到全局，这样在任何目录都能使用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @anthropic-ai/claude-code</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 验证安装是否成功</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果显示版本号（如 0.1.25），说明安装成功</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">claude</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span></span></code></pre></div><p>安装过程中，npm 会自动下载所有依赖并配置好环境变量。如果遇到权限问题，可以尝试在命令前加 <code>sudo</code>（macOS/Linux）或以管理员身份运行终端（Windows）。</p><h3 id="方法二-让-ai-agent-帮你安装" tabindex="-1">方法二：让 AI Agent 帮你安装 <a class="header-anchor" href="#方法二-让-ai-agent-帮你安装" aria-label="Permalink to “方法二：让 AI Agent 帮你安装”">​</a></h3><p>如果你已经在使用其他 AI 编程助手（如 Cursor、Windsurf 或本项目的 AI Agent），可以让它们帮你完成安装。这种方式的好处是 AI 会自动检测你的环境，处理可能出现的依赖冲突，并根据你的系统配置选择最优的安装方式。</p><p><strong>直接这样说就行：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>帮我装 anthropic 的 claude code</span></span></code></pre></div><p>或者更具体一点：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>安装 claude code cli，并检查 Node.js 版本是否兼容</span></span></code></pre></div><p>AI Agent 会：</p><ol><li>检查当前 Node.js 版本</li><li>如果不符合要求，提示你升级</li><li>执行安装命令</li><li>验证安装结果</li><li>如有问题，自动尝试修复</li></ol><h3 id="首次启动与初始化" tabindex="-1">首次启动与初始化 <a class="header-anchor" href="#首次启动与初始化" aria-label="Permalink to “首次启动与初始化”">​</a></h3><p>安装完成后，进入你的项目目录启动 Claude Code：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入项目目录（Claude Code 会在当前目录下工作）</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/your/project</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动 Claude Code</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">claude</span></span></code></pre></div><p>首次启动时，Claude Code 会引导你完成几个重要的初始化步骤：</p><ol><li><p><strong>登录 Anthropic 账户</strong>：你需要有一个 Anthropic 账户才能使用 Claude Code。如果没有，系统会提示你注册。</p></li><li><p><strong>选择使用计划</strong>：</p><ul><li><strong>免费计划</strong>：适合个人学习和轻量级使用，有一定的调用限制</li><li><strong>Pro 计划</strong>：适合专业开发者，提供更高的调用配额和优先响应</li></ul></li><li><p><strong>同意使用条款</strong>：阅读并同意 Anthropic 的服务条款和隐私政策</p></li><li><p><strong>可选：配置 API 密钥</strong>：如果你有自定义的 API 密钥（比如通过第三方服务提供商获取的），可以在此时配置</p></li></ol><div class="info custom-block"><p class="custom-block-title">中国区用户的特别说明</p><p>由于网络原因，中国区的用户可能无法直接访问 Anthropic 的官方服务。Claude Code 支持使用兼容 Anthropic API 格式的第三方服务，这在技术上是完全可行的。</p><p><strong>你有两个选择：</strong></p><ol><li><strong>直接使用 API Token</strong>：购买兼容 Anthropic API 的服务商提供的 Token，通过环境变量配置</li><li><strong>使用 Coding Plan</strong>：一些服务商提供专门的 Coding Plan，针对代码场景优化，通常更实惠</li></ol><p><strong>推荐做法</strong>：直接让 AI Agent 帮你完成配置。只需提供厂商给的配置信息（如 API 地址、密钥等），AI 会自动设置正确的环境变量。</p><p><strong>更详细的配置指南请参考：</strong> <a href="/easy-vibe/zh-cn/stage-2/backend/modern-cli/">如何安装 claudecode 以及如何配置环境变量</a></p></div><hr><h2 id="快速开始-做点小实验" tabindex="-1">快速开始：做点小实验 <a class="header-anchor" href="#快速开始-做点小实验" aria-label="Permalink to “快速开始：做点小实验”">​</a></h2><p>安装完成后，不要急于在正式项目中使用，建议先做几个小实验来熟悉 Claude Code 的工作方式。这 3 个实验设计得由浅入深，分别对应 Claude Code 的三种核心能力：自然语言理解、内容生成和代码执行。</p><h3 id="实验-1-对话-——-感受-ai-的理解能力" tabindex="-1">实验 1：对话 —— 感受 AI 的理解能力 <a class="header-anchor" href="#实验-1-对话-——-感受-ai-的理解能力" aria-label="Permalink to “实验 1：对话 —— 感受 AI 的理解能力”">​</a></h3><p>这个实验的目的是让你体验 Claude Code 的自然语言理解能力。与普通的搜索引擎不同，Claude Code 能够理解上下文、进行多轮对话，并根据你的反馈调整回答。</p><p><strong>试试这些对话：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>你好，你是谁？</span></span></code></pre></div><p>Claude 会介绍自己是 Claude Code，Anthropic 开发的 AI 编程助手。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>什么是闭包？太长不看版本</span></span></code></pre></div><p>观察 Claude 如何根据&quot;太长不看&quot;这个提示，给出简洁但准确的解释。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>JavaScript 和 TypeScript 有什么区别？</span></span></code></pre></div><p>这个问题涉及技术对比，看 Claude 能否给出结构化的、有深度的回答。</p><p><strong>实验要点</strong>：注意 Claude 的回答风格——它通常会先给出核心结论，再展开细节。这种&quot;倒金字塔&quot;式的回答方式非常适合快速获取信息。</p><h3 id="实验-2-生成-markdown-文档-——-体验内容创作" tabindex="-1">实验 2：生成 Markdown 文档 —— 体验内容创作 <a class="header-anchor" href="#实验-2-生成-markdown-文档-——-体验内容创作" aria-label="Permalink to “实验 2：生成 Markdown 文档 —— 体验内容创作”">​</a></h3><p>这个实验展示 Claude Code 的内容生成能力。对于开发者来说，写文档往往是最头疼的事情之一。Claude 可以根据你的要求快速生成结构清晰、内容完整的文档。</p><p><strong>输入这个指令：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>帮我写一份 Git 常用命令的 Markdown 文档</span></span>
<span class="line"><span>要求：包含命令、说明、示例</span></span></code></pre></div><p><strong>Claude 会做什么：</strong></p><ol><li>分析你的需求：Git 常用命令、Markdown 格式、三要素（命令、说明、示例）</li><li>规划文档结构：通常会按使用场景分类（初始化、日常开发、分支管理、远程协作等）</li><li>生成内容：为每个命令提供简洁说明和实用示例</li><li>格式化输出：使用 Markdown 语法，确保格式规范</li></ol><p><strong>预期输出示例</strong>：</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># Git 常用命令速查表</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 初始化仓库</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| 命令 | 说明 | 示例 |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|------|------|------|</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`git init\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | 初始化新仓库 | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`git init my-project\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> |</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">| </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`git clone\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> | 克隆远程仓库 | </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`git clone https://github.com/user/repo.git\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> |</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">...</span></span></code></pre></div><p><strong>进阶尝试</strong>：你可以增加更多要求，比如&quot;添加中文注释&quot;、&quot;按使用频率排序&quot;、&quot;包含常见错误处理&quot;等，观察 Claude 如何调整输出。</p><h3 id="实验-3-编写并运行游戏-——-完整的代码工作流" tabindex="-1">实验 3：编写并运行游戏 —— 完整的代码工作流 <a class="header-anchor" href="#实验-3-编写并运行游戏-——-完整的代码工作流" aria-label="Permalink to “实验 3：编写并运行游戏 —— 完整的代码工作流”">​</a></h3><p>这个实验是最具挑战性的，它展示了 Claude Code 的完整代码工作流：理解需求、编写代码、创建文件、运行程序、处理错误。通过这个实验，你能真正感受到 AI 编程助手的威力。</p><p><strong>输入这个指令：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>用 Python 写一个贪吃蛇游戏</span></span>
<span class="line"><span>要求：</span></span>
<span class="line"><span>1. 使用 pygame 库</span></span>
<span class="line"><span>2. 有分数显示</span></span>
<span class="line"><span>3. 按 ESC 退出</span></span>
<span class="line"><span></span></span>
<span class="line"><span>写完后帮我运行它</span></span></code></pre></div><p><strong>Claude 会执行以下步骤：</strong></p><p><strong>步骤 1：检查环境</strong></p><ul><li>检查 Python 是否安装</li><li>检查 pygame 库是否可用</li><li>如有缺失，提示你安装</li></ul><p><strong>步骤 2：编写代码</strong></p><ul><li>创建游戏主文件（如 <code>snake_game.py</code>）</li><li>实现游戏逻辑：蛇的移动、食物生成、碰撞检测</li><li>添加分数显示功能</li><li>实现 ESC 键退出</li></ul><p><strong>步骤 3：运行游戏</strong></p><ul><li>执行 Python 脚本启动游戏</li><li>游戏窗口会弹出，你可以用方向键控制蛇</li></ul><p><strong>步骤 4：后续支持</strong></p><ul><li>如果游戏有 bug，你可以直接说&quot;蛇穿墙了，修复一下&quot;</li><li>如果想加功能，比如&quot;增加难度随分数提升&quot;，Claude 会继续修改</li></ul><p><strong>这个实验的价值</strong>：</p><ol><li><strong>验证安装</strong>：确保 Claude Code 能正常执行代码</li><li><strong>体验交互</strong>：感受与 AI 协作开发的过程</li><li><strong>建立信心</strong>：看到 AI 能独立完成一个完整的可运行程序</li></ol><p><strong>常见问题</strong>：</p><ul><li><p><strong>Q: 如果我没有安装 pygame？</strong></p><ul><li>A: Claude 会检测到并提示你运行 <code>pip install pygame</code>，你也可以让 Claude 帮你安装</li></ul></li><li><p><strong>Q: 游戏运行后终端被占用了怎么办？</strong></p><ul><li>A: 按 ESC 退出游戏，或者在其他终端窗口继续使用 Claude Code</li></ul></li><li><p><strong>Q: 可以换成其他编程语言吗？</strong></p><ul><li>A: 当然可以！试试&quot;用 JavaScript 写&quot;、&quot;用 HTML5 Canvas 写&quot;等</li></ul></li></ul><hr><h2 id="核心技巧" tabindex="-1">核心技巧 <a class="header-anchor" href="#核心技巧" aria-label="Permalink to “核心技巧”">​</a></h2><p>掌握这些技巧，能让你的 Claude Code 使用效率提升数倍。这些技巧来自实际开发经验，涵盖了最常用的操作场景。</p><h3 id="技巧-1-双击-esc-回退对话-——-撤销误操作" tabindex="-1">技巧 1：双击 Esc 回退对话 —— 撤销误操作 <a class="header-anchor" href="#技巧-1-双击-esc-回退对话-——-撤销误操作" aria-label="Permalink to “技巧 1：双击 Esc 回退对话 —— 撤销误操作”">​</a></h3><p>这是 Claude Code 中最常用、最重要的快捷键。在与 AI 协作时，你可能会说错话、给错指令，或者对 AI 的回答不满意。双击 Esc 能让你快速&quot;时光倒流&quot;。</p><p><strong>快捷键详解：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>按一次 Esc     → 清除当前正在输入的内容（类似 Ctrl+C）</span></span>
<span class="line"><span>按两次 Esc     → 回退到上一次对话状态（撤销上一轮对话）</span></span>
<span class="line"><span>按三次 Esc     → 清除所有对话历史（重新开始）</span></span></code></pre></div><p><strong>使用场景：</strong></p><ul><li><strong>场景 A</strong>：你不小心发了一个错误的指令，Claude 开始执行了。快速按两次 Esc，回到执行前的状态。</li><li><strong>场景 B</strong>：Claude 的回复不是你想要的，你想换个方式提问。双击 Esc 撤销，重新组织语言。</li><li><strong>场景 C</strong>：对话已经进行了很多轮，上下文混乱了。三击 Esc 清空，重新开始。</li></ul><p><strong>⚠️ 重要注意</strong>：双击 Esc 回退的是<strong>对话状态</strong>，不是代码修改。如果 Claude 已经修改了你的文件，这些修改不会被自动撤销。你需要手动用 <code>git checkout</code> 或 <code>git reset</code> 恢复文件。</p><p><strong>建议</strong>：在进行可能大幅修改代码的操作前，先提交当前工作（<code>git commit</code> 或 <code>git stash</code>），这样即使出了问题也能快速恢复。</p><h3 id="技巧-2-引用文件-——-精准指定上下文" tabindex="-1">技巧 2：@ 引用文件 —— 精准指定上下文 <a class="header-anchor" href="#技巧-2-引用文件-——-精准指定上下文" aria-label="Permalink to “技巧 2：@ 引用文件 —— 精准指定上下文”">​</a></h3><p>Claude Code 虽然能自动读取项目文件，但显式地引用文件能让 AI 更准确地理解你的意图，也能避免 AI 读取不相关的文件浪费 Token。</p><p><strong>基本用法：</strong></p><p>与其模糊地说：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>解释 src/utils.ts 这个文件</span></span></code></pre></div><p>不如直接引用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@src/utils.ts 解释这个文件</span></span></code></pre></div><p><strong>高级用法：</strong></p><p><strong>多文件对比分析：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@src/app.tsx @src/components/Header.tsx 这两个文件的关系是什么？</span></span></code></pre></div><p><strong>引用目录：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@src/components/ 总结一下这个目录下的所有组件</span></span></code></pre></div><p><strong>引用特定行（配合代码编辑器）：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>@src/utils.ts:45-60 解释这段代码的作用</span></span></code></pre></div><p><strong>使用技巧：</strong></p><ol><li><strong>Tab 补全</strong>：输入 <code>@</code> 后按 Tab 键，Claude 会显示当前目录下的文件列表，可以用方向键选择</li><li><strong>相对路径</strong>：支持相对路径引用，如 <code>@./config.json</code> 或 <code>@../shared/types.ts</code></li><li><strong>模糊匹配</strong>：可以输入部分文件名，如 <code>@utils</code> 会匹配 <code>src/utils.ts</code> 或 <code>src/utils/index.ts</code></li></ol><h3 id="技巧-3-执行命令-——-终端集成" tabindex="-1">技巧 3：! 执行命令 —— 终端集成 <a class="header-anchor" href="#技巧-3-执行命令-——-终端集成" aria-label="Permalink to “技巧 3：! 执行命令 —— 终端集成”">​</a></h3><p>Claude Code 内置了终端命令执行能力，无需切换到另一个终端窗口就能运行命令。</p><p><strong>基本用法：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>!npm test           # 运行测试</span></span>
<span class="line"><span>!git status         # 查看 Git 状态</span></span>
<span class="line"><span>!ls -la             # 列出文件</span></span></code></pre></div><p><strong>实际应用场景：</strong></p><p><strong>场景：运行测试并分析失败原因</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>!npm test</span></span>
<span class="line"><span># 测试失败后</span></span>
<span class="line"><span>分析一下测试失败的原因，并修复代码</span></span></code></pre></div><p><strong>场景：查看 Git 差异</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>!git diff</span></span>
<span class="line"><span># 然后让 Claude 解释变更内容</span></span>
<span class="line"><span>总结一下这些变更的主要内容</span></span></code></pre></div><p><strong>场景：构建项目</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>!npm run build</span></span>
<span class="line"><span># 如果构建失败</span></span>
<span class="line"><span>构建报错了，帮我修复</span></span></code></pre></div><p><strong>⚠️ 安全提示：</strong></p><p>Claude Code 会询问是否执行某些敏感命令（如 <code>rm -rf</code>、<code>sudo</code> 等）。这是保护机制，请谨慎确认。</p><h3 id="技巧-4-plan-先规划后编码-——-复杂任务的正确打开方式" tabindex="-1">技巧 4：/plan 先规划后编码 —— 复杂任务的正确打开方式 <a class="header-anchor" href="#技巧-4-plan-先规划后编码-——-复杂任务的正确打开方式" aria-label="Permalink to “技巧 4：/plan 先规划后编码 —— 复杂任务的正确打开方式”">​</a></h3><p>对于复杂的开发任务，直接开始编码往往效率低下。<code>/plan</code> 命令让 Claude 进入规划模式，先制定详细的实施计划，再一步步执行。</p><p><strong>使用方式：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/plan</span></span>
<span class="line"><span>我想添加用户认证功能，请帮我制定实施计划</span></span></code></pre></div><p><strong>Claude 会做什么：</strong></p><ol><li><strong>分析需求</strong>：理解你要实现的功能</li><li><strong>评估现状</strong>：查看当前项目结构和技术栈</li><li><strong>制定计划</strong>：分步骤列出需要做的事情</li><li><strong>确认方案</strong>：与你讨论计划，根据反馈调整</li></ol><p><strong>示例输出：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>📋 用户认证功能实施计划</span></span>
<span class="line"><span></span></span>
<span class="line"><span>阶段 1：数据库设计</span></span>
<span class="line"><span>- [ ] 创建 users 表（id, email, password_hash, created_at）</span></span>
<span class="line"><span>- [ ] 创建 sessions 表（id, user_id, expires_at）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>阶段 2：后端 API</span></span>
<span class="line"><span>- [ ] POST /api/auth/register - 用户注册</span></span>
<span class="line"><span>- [ ] POST /api/auth/login - 用户登录</span></span>
<span class="line"><span>- [ ] POST /api/auth/logout - 用户登出</span></span>
<span class="line"><span>- [ ] GET /api/auth/me - 获取当前用户</span></span>
<span class="line"><span></span></span>
<span class="line"><span>阶段 3：前端集成</span></span>
<span class="line"><span>- [ ] 创建登录页面</span></span>
<span class="line"><span>- [ ] 创建注册页面</span></span>
<span class="line"><span>- [ ] 添加路由守卫</span></span>
<span class="line"><span></span></span>
<span class="line"><span>阶段 4：测试</span></span>
<span class="line"><span>- [ ] 编写单元测试</span></span>
<span class="line"><span>- [ ] 编写集成测试</span></span>
<span class="line"><span></span></span>
<span class="line"><span>你想从哪个阶段开始？或者需要调整计划？</span></span></code></pre></div><p><strong>最佳实践：</strong></p><ul><li>对于超过 30 分钟的任务，先用 <code>/plan</code></li><li>计划制定后，可以逐阶段执行，每完成一个阶段检查一次</li><li>如果需求变更，可以重新运行 <code>/plan</code> 调整计划</li></ul><h3 id="技巧-5-init-自动生成配置-——-快速初始化项目" tabindex="-1">技巧 5：/init 自动生成配置 —— 快速初始化项目 <a class="header-anchor" href="#技巧-5-init-自动生成配置-——-快速初始化项目" aria-label="Permalink to “技巧 5：/init 自动生成配置 —— 快速初始化项目”">​</a></h3><p><code>/init</code> 是 Claude Code 最强大的命令之一。它能自动扫描你的项目，理解技术栈和结构，然后生成一份完整的 <code>CLAUDE.md</code> 配置文件。</p><p><strong>使用方式：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/init</span></span></code></pre></div><p><strong>Claude 会执行以下步骤：</strong></p><ol><li><strong>扫描项目结构</strong>：识别框架、语言、构建工具</li><li><strong>分析配置文件</strong>：读取 package.json、tsconfig.json 等</li><li><strong>检查代码风格</strong>：了解命名规范、文件组织方式</li><li><strong>生成 CLAUDE.md</strong>：创建包含项目信息的配置文件</li></ol><p><strong>生成的 CLAUDE.md 示例：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># My Project</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 技术栈</span></span>
<span class="line"><span>- 框架：Next.js 14 (App Router)</span></span>
<span class="line"><span>- 语言：TypeScript</span></span>
<span class="line"><span>- 样式：Tailwind CSS</span></span>
<span class="line"><span>- 状态管理：Zustand</span></span>
<span class="line"><span>- 数据库：Prisma + PostgreSQL</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 常用命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\\`\\\`\\\`bash</span></span>
<span class="line"><span>npm run dev      # 启动开发服务器</span></span>
<span class="line"><span>npm run build    # 生产构建</span></span>
<span class="line"><span>npm run test     # 运行测试</span></span>
<span class="line"><span>npx prisma migrate dev  # 数据库迁移</span></span>
<span class="line"><span>\\\`\\\`\\\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 代码规范</span></span>
<span class="line"><span>- 使用函数组件 + Hooks</span></span>
<span class="line"><span>- 文件命名：PascalCase（组件）、camelCase（工具函数）</span></span>
<span class="line"><span>- 提交规范：Conventional Commits</span></span></code></pre></div><p><strong>为什么这很重要：</strong></p><p><code>CLAUDE.md</code> 是 Claude Code 的&quot;项目记忆&quot;。每次启动时，Claude 会自动读取这个文件，了解项目背景。这意味着：</p><ul><li>你不需要每次都解释项目用什么框架</li><li>Claude 会知道你的代码规范和最佳实践</li><li>团队协作时，新成员也能快速了解项目</li></ul><p><strong>建议</strong>：新项目初始化后，立即运行 <code>/init</code>，然后根据实际情况调整生成的配置。</p><h3 id="技巧-6-compact-压缩上下文-——-节省-token" tabindex="-1">技巧 6：/compact 压缩上下文 —— 节省 Token <a class="header-anchor" href="#技巧-6-compact-压缩上下文-——-节省-token" aria-label="Permalink to “技巧 6：/compact 压缩上下文 —— 节省 Token”">​</a></h3><p>Claude Code 的上下文窗口是有限的（通常 200K Token）。长对话会消耗大量 Token，不仅增加成本，还可能导致重要的早期信息被挤出上下文窗口。</p><p><strong>使用方式：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/compact</span></span></code></pre></div><p><strong>工作原理：</strong></p><p><code>/compact</code> 会分析当前对话历史，提取关键信息（如已做出的决策、已生成的代码、已确认的需求），然后生成一份简洁的摘要。之后的对话基于这份摘要，而不是完整的历史记录。</p><p><strong>什么时候使用：</strong></p><ul><li>对话进行了 5-6 轮后</li><li>感觉 Claude 开始&quot;遗忘&quot;之前的内容</li><li>要切换到新的子任务，但想保留关键背景</li></ul><p><strong>使用建议：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 长对话后压缩</span></span>
<span class="line"><span>/compact</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 压缩后继续工作</span></span>
<span class="line"><span>现在我们已经完成了用户模块，接下来做订单模块</span></span></code></pre></div><h3 id="技巧-7-用-claude-code-辅助-git-提交" tabindex="-1">技巧 7：用 Claude Code 辅助 Git 提交 <a class="header-anchor" href="#技巧-7-用-claude-code-辅助-git-提交" aria-label="Permalink to “技巧 7：用 Claude Code 辅助 Git 提交”">​</a></h3><p>在 Claude Code 里，推荐的提交流程是：先让 Claude 帮你查看 diff、整理提交信息，再由你执行标准的 Git 命令完成提交。这样既清晰，也方便你在提交前再次确认改动内容。</p><p>官方文档参考：</p><ul><li><a href="https://code.claude.com/docs/en/commands" target="_blank" rel="noreferrer">Built-in commands</a></li><li><a href="https://code.claude.com/docs/en/discover-plugins" target="_blank" rel="noreferrer">Discover plugins</a></li></ul><p><strong>推荐工作流：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 查看当前改动</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/diff</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 让 Claude 总结变更并生成提交信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">请基于当前</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff，按照</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Conventional</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Commits</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 规范生成一个</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> message，</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">并用中文解释为什么这样分类</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 你确认后，再执行标准 Git 提交</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;feat(docs): update Claude Code workflow guidance&quot;</span></span></code></pre></div><p><strong>这种方式的好处：</strong></p><ol><li><strong>更贴近当前官方能力</strong>：不依赖已经移除的内置命令</li><li><strong>更透明</strong>：你能先检查 diff 和 commit message，再决定是否提交</li><li><strong>更通用</strong>：换到别的 AI IDE 或纯 Git 环境时，工作流依然成立</li></ol><p><strong>如果你想保留&quot;一条命令提交&quot;的体验：</strong></p><p>Claude Code 现在推荐通过插件补回这类能力。例如官方插件市场示例里的 <code>commit-commands</code> 插件，会提供 <code>/commit-commands:commit</code> 这类命令。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 添加示例插件市场</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> marketplace</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> anthropics/claude-code</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 安装提交工作流插件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit-commands@anthropics-claude-code</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 重新加载插件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/reload-plugins</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 使用插件命令提交</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/commit-commands:commit</span></span></code></pre></div><p><strong>补充说明：</strong></p><ul><li><code>/commit-commands:commit</code> 是插件提供的命令，不是 Claude Code 当前默认内置命令</li><li>如果你只是想在提交前检查改动，优先使用 <code>/diff</code>，或直接让 Claude 解读 <code>git diff</code></li><li>官方也已将 <code>/review</code> 标记为 deprecated；如果你需要类似能力，建议改用插件或自然语言审查工作流</li></ul><h3 id="技巧-8-shift-tab-自动接受-——-提高流畅度" tabindex="-1">技巧 8：Shift+Tab 自动接受 —— 提高流畅度 <a class="header-anchor" href="#技巧-8-shift-tab-自动接受-——-提高流畅度" aria-label="Permalink to “技巧 8：Shift+Tab 自动接受 —— 提高流畅度”">​</a></h3><p>默认情况下，Claude 修改代码前会询问你的确认。这在学习阶段很有帮助，但熟悉后可能会觉得繁琐。<code>Shift+Tab</code> 开启自动接受模式，让工作流更流畅。</p><p><strong>使用方式：</strong></p><ul><li>按 <code>Shift+Tab</code> → 进入自动接受模式</li><li>再按 <code>Shift+Tab</code> → 退出自动接受模式</li></ul><p><strong>模式对比：</strong></p><table tabindex="0"><thead><tr><th>模式</th><th>行为</th><th>适用场景</th></tr></thead><tbody><tr><td>默认模式</td><td>每次修改都询问确认</td><td>学习阶段、重要代码</td></tr><tr><td>自动接受</td><td>直接应用修改</td><td>熟悉后、快速迭代</td></tr></tbody></table><p><strong>⚠️ 注意事项：</strong></p><ul><li>自动接受模式下，Claude 会直接修改文件，没有二次确认</li><li>建议配合 Git 使用，这样即使出问题也能回滚</li><li>对于敏感操作（如删除文件、修改配置），Claude 仍会询问</li></ul><h3 id="技巧-9-ctrl-c-取消操作-——-紧急制动" tabindex="-1">技巧 9：Ctrl+C 取消操作 —— 紧急制动 <a class="header-anchor" href="#技巧-9-ctrl-c-取消操作-——-紧急制动" aria-label="Permalink to “技巧 9：Ctrl+C 取消操作 —— 紧急制动”">​</a></h3><p>当 Claude 正在执行一个长时间运行的任务，或者你意识到给错了指令时，<code>Ctrl+C</code> 是你的&quot;紧急制动&quot;按钮。</p><p><strong>使用方式：</strong></p><ul><li>按一次 <code>Ctrl+C</code> → 取消当前正在执行的操作</li><li>按两次 <code>Ctrl+C</code> → 完全退出 Claude Code</li></ul><p><strong>使用场景：</strong></p><ul><li>Claude 正在运行一个耗时的命令，你想中断</li><li>Claude 开始生成大量不相关的代码</li><li>你意识到给错了指令，想立即停止</li></ul><p><strong>与双击 Esc 的区别：</strong></p><ul><li><code>Ctrl+C</code>：停止正在进行的<strong>操作</strong>（如运行命令、生成代码）</li><li><code>双击 Esc</code>：回退<strong>对话状态</strong>（撤销上一轮对话）</li></ul><h3 id="技巧-10-context-查看上下文使用-——-优化-token-消耗" tabindex="-1">技巧 10：/context 查看上下文使用 —— 优化 Token 消耗 <a class="header-anchor" href="#技巧-10-context-查看上下文使用-——-优化-token-消耗" aria-label="Permalink to “技巧 10：/context 查看上下文使用 —— 优化 Token 消耗”">​</a></h3><p><code>/context</code> 显示当前会话的上下文使用情况，帮助你了解 Token 消耗，优化使用成本。</p><p><strong>使用方式：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/context</span></span></code></pre></div><p><strong>输出示例：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>📊 上下文使用情况</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Token 使用：45,230 / 200,000 (22.6%)</span></span>
<span class="line"><span>文件引用：12 个文件</span></span>
<span class="line"><span>对话轮数：8 轮</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最消耗 Token 的文件：</span></span>
<span class="line"><span>1. src/api/users.ts (3,420 tokens)</span></span>
<span class="line"><span>2. node_modules/@types/react/index.d.ts (2,890 tokens)</span></span>
<span class="line"><span>3. src/components/Dashboard.tsx (1,560 tokens)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>建议：</span></span>
<span class="line"><span>- 当前使用率健康，无需压缩</span></span>
<span class="line"><span>- 如需减少消耗，可在 .claudeignore 中添加 node_modules</span></span></code></pre></div><p><strong>如何利用这个信息：</strong></p><ol><li><strong>识别大文件</strong>：如果某个文件消耗了大量 Token，考虑是否真的需要它</li><li><strong>优化 .claudeignore</strong>：将不相关的文件（如 node_modules、构建产物）加入忽略列表</li><li><strong>决定何时压缩</strong>：当使用率超过 70% 时，考虑使用 <code>/compact</code></li></ol><h3 id="技巧-11-resume-恢复会话-——-切换多任务对话" tabindex="-1">技巧 11：/resume 恢复会话 —— 切换多任务对话 <a class="header-anchor" href="#技巧-11-resume-恢复会话-——-切换多任务对话" aria-label="Permalink to “技巧 11：/resume 恢复会话 —— 切换多任务对话”">​</a></h3><p>当你在处理多个任务时，可能会开启多段对话。<code>/resume</code> 能让你在当前聊天中快速切换回之前的会话，而不需要退出重新启动。</p><p><strong>使用方式：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/resume</span></span></code></pre></div><p><strong>工作原理：</strong></p><p>Claude Code 会自动记录你之前的对话会话。当你使用 <code>/resume</code> 时，它会切换回上一段会话的上下文，保留之前的所有讨论内容和状态。</p><p><strong>使用场景：</strong></p><p><strong>场景 A：多任务并行处理</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 任务 1：修复 bug</span></span>
<span class="line"><span>claude&gt; 修复登录页面的验证问题</span></span>
<span class="line"><span># ... 进行了一段对话...</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 任务 2：添加新功能（新开一段会话）</span></span>
<span class="line"><span>claude&gt; 添加用户注册功能</span></span>
<span class="line"><span># ... 进行了另一段对话...</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 切换回任务 1</span></span>
<span class="line"><span>claude&gt; /resume</span></span>
<span class="line"><span># 继续之前的 bug 修复工作</span></span></code></pre></div><p><strong>场景 B：临时查询后返回</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>claude&gt; 解释一下这个算法</span></span>
<span class="line"><span># ... 讨论算法...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>claude&gt; /resume</span></span>
<span class="line"><span># 自动切换回之前的代码开发工作</span></span></code></pre></div><p><strong>场景 C：对话中断后继续</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>claude&gt; 继续之前的工作</span></span>
<span class="line"><span># 如果你之前中断了某个任务，可以用 /resume 返回</span></span></code></pre></div><p><strong>与相关命令的对比：</strong></p><table tabindex="0"><thead><tr><th>命令</th><th>作用</th><th>使用场景</th></tr></thead><tbody><tr><td><code>/resume</code></td><td>在当前聊天中切换回上一段会话</td><td>多任务并行，需要来回切换</td></tr><tr><td><code>claude -c</code></td><td>继续最近的一次会话</td><td>退出后重新连接同一会话</td></tr><tr><td><code>claude -r</code></td><td>恢复上一段会话</td><td>退出后恢复到之前的会话状态</td></tr><tr><td><code>双击 Esc</code></td><td>回退到上一次对话状态</td><td>撤销最近一轮对话</td></tr></tbody></table><p><strong>使用建议：</strong></p><ol><li><strong>多任务管理</strong>：当你需要在多个任务之间切换时，使用 <code>/resume</code> 比重新描述上下文更高效</li><li><strong>会话记忆</strong>：每段会话都有独立的上下文，<code>/resume</code> 能帮你保留这些上下文</li><li><strong>配合 /compact</strong>：在长会话中，可以先 <code>/compact</code> 压缩，再 <code>/resume</code> 切换，保持上下文清晰</li></ol><hr><h2 id="核心配置" tabindex="-1">核心配置 <a class="header-anchor" href="#核心配置" aria-label="Permalink to “核心配置”">​</a></h2><p>合理的配置能让 Claude Code 更好地适应你的项目和团队。本节介绍配置文件的作用、优先级以及如何针对不同的使用场景进行优化。</p><h3 id="配置文件位置与优先级" tabindex="-1">配置文件位置与优先级 <a class="header-anchor" href="#配置文件位置与优先级" aria-label="Permalink to “配置文件位置与优先级”">​</a></h3><p>Claude Code 采用分层配置策略，不同级别的配置有不同的作用范围和优先级。理解这个机制，能让你更灵活地管理配置。</p><p><strong>配置优先级（从高到低）：</strong></p><table tabindex="0"><thead><tr><th>位置</th><th>作用域</th><th>用途</th><th>是否提交 Git</th></tr></thead><tbody><tr><td><code>.claude/settings.local.json</code></td><td>项目本地</td><td>个人偏好设置</td><td>❌ 否</td></tr><tr><td><code>.claude/settings.json</code></td><td>项目共享</td><td>团队统一配置</td><td>✅ 是</td></tr><tr><td><code>~/.claude/settings.json</code></td><td>全局</td><td>个人默认配置</td><td>❌ 否</td></tr></tbody></table><p><strong>配置合并规则：</strong></p><ul><li>高优先级的配置会覆盖低优先级的相同配置项</li><li>不冲突的配置项会合并生效</li><li>项目级配置优先于全局配置，个人本地配置优先于共享配置</li></ul><p><strong>实际应用场景：</strong></p><p><strong>场景 1：团队项目</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>~/.claude/settings.json          # 你的个人默认编辑器设置</span></span>
<span class="line"><span>.claude/settings.json            # 团队统一的代码规范、权限配置</span></span>
<span class="line"><span>.claude/settings.local.json      # 你自己的调试偏好、主题设置</span></span></code></pre></div><p><strong>场景 2：个人项目</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>~/.claude/settings.json          # 全局默认配置</span></span>
<span class="line"><span>.claude/settings.json            # 项目特定配置（如特殊的权限规则）</span></span></code></pre></div><h3 id="claude-md-项目记忆" tabindex="-1">CLAUDE.md - 项目记忆 <a class="header-anchor" href="#claude-md-项目记忆" aria-label="Permalink to “CLAUDE.md - 项目记忆”">​</a></h3><p><code>CLAUDE.md</code> 是 Claude Code 最重要的配置文件，它相当于项目的&quot;说明书&quot;。每次启动 Claude Code 时，它会自动读取当前目录下的 <code>CLAUDE.md</code>，了解项目背景、技术栈和规范。</p><p><strong>为什么 CLAUDE.md 如此重要？</strong></p><p>想象这样一个场景：你加入一个新项目，需要了解技术栈、代码规范、常用命令。通常你要花几个小时阅读文档、看代码、问同事。而有了 <code>CLAUDE.md</code>，Claude Code 在启动时就知道了所有这些信息，你可以立即开始高效协作。</p><p><strong>最小可用模板：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># [项目名称]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 技术栈</span></span>
<span class="line"><span>- 框架：React 18 + TypeScript</span></span>
<span class="line"><span>- 状态管理：Zustand</span></span>
<span class="line"><span>- 样式方案：Tailwind CSS</span></span>
<span class="line"><span>- 构建工具：Vite</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 常用命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\\`\\\`\\\`bash</span></span>
<span class="line"><span>npm run dev      # 启动开发服务器（端口 5173）</span></span>
<span class="line"><span>npm run test     # 运行单元测试</span></span>
<span class="line"><span>npm run build    # 生产构建</span></span>
<span class="line"><span>npm run lint     # 代码检查</span></span>
<span class="line"><span>\\\`\\\`\\\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 代码规范</span></span>
<span class="line"><span>- 组件使用函数组件 + Hooks</span></span>
<span class="line"><span>- 文件命名：PascalCase（组件）、camelCase（工具函数）</span></span>
<span class="line"><span>- Git 提交使用 Conventional Commits 规范</span></span>
<span class="line"><span>- 所有 API 调用必须经过统一的 request 封装</span></span></code></pre></div><p><strong>完整模板（推荐）：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># [项目名称]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 项目概述</span></span>
<span class="line"><span>一句话描述项目的主要功能和目标用户。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 技术栈</span></span>
<span class="line"><span>### 前端</span></span>
<span class="line"><span>- 框架：React 18 + TypeScript</span></span>
<span class="line"><span>- 路由：React Router v6</span></span>
<span class="line"><span>- 状态：Zustand + React Query</span></span>
<span class="line"><span>- 样式：Tailwind CSS + Headless UI</span></span>
<span class="line"><span>- 构建：Vite</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 后端（如适用）</span></span>
<span class="line"><span>- 运行时：Node.js + Express</span></span>
<span class="line"><span>- 数据库：PostgreSQL + Prisma</span></span>
<span class="line"><span>- 认证：JWT + bcrypt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 项目结构</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\\`\\\`\\\`</span></span>
<span class="line"><span>src/</span></span>
<span class="line"><span>├── components/      # 可复用组件</span></span>
<span class="line"><span>├── pages/           # 页面组件</span></span>
<span class="line"><span>├── hooks/           # 自定义 Hooks</span></span>
<span class="line"><span>├── lib/             # 工具函数</span></span>
<span class="line"><span>├── types/           # TypeScript 类型</span></span>
<span class="line"><span>└── api/             # API 调用</span></span>
<span class="line"><span>\\\`\\\`\\\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 常用命令</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\\`\\\`\\\`bash</span></span>
<span class="line"><span># 开发</span></span>
<span class="line"><span>npm run dev              # 启动开发服务器</span></span>
<span class="line"><span>npm run dev:mock         # 使用 Mock 数据开发</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 测试</span></span>
<span class="line"><span>npm run test             # 运行所有测试</span></span>
<span class="line"><span>npm run test:watch       # 监听模式运行测试</span></span>
<span class="line"><span>npm run test:coverage    # 生成测试覆盖率报告</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 代码质量</span></span>
<span class="line"><span>npm run lint             # ESLint 检查</span></span>
<span class="line"><span>npm run lint:fix         # 自动修复 ESLint 问题</span></span>
<span class="line"><span>npm run format           # Prettier 格式化</span></span>
<span class="line"><span>npm run typecheck        # TypeScript 类型检查</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 构建</span></span>
<span class="line"><span>npm run build            # 生产构建</span></span>
<span class="line"><span>npm run preview          # 预览生产构建</span></span>
<span class="line"><span>\\\`\\\`\\\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 开发规范</span></span>
<span class="line"><span>### 代码风格</span></span>
<span class="line"><span>- 使用函数组件，避免类组件</span></span>
<span class="line"><span>- 优先使用自定义 Hooks 封装逻辑</span></span>
<span class="line"><span>- 组件 Props 必须定义 TypeScript 接口</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Git 工作流</span></span>
<span class="line"><span>- 分支命名：\`feature/\`、\`fix/\`、\`refactor/\` 前缀</span></span>
<span class="line"><span>- 提交信息遵循 Conventional Commits</span></span>
<span class="line"><span>- PR 必须通过 CI 检查和 Code Review</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 性能要求</span></span>
<span class="line"><span>- 组件懒加载，减少首屏时间</span></span>
<span class="line"><span>- 图片使用 WebP 格式，开启懒加载</span></span>
<span class="line"><span>- API 响应时间控制在 200ms 以内</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 环境变量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\\\`\\\`\\\`bash</span></span>
<span class="line"><span># .env.local</span></span>
<span class="line"><span>VITE_API_BASE_URL=http://localhost:3000</span></span>
<span class="line"><span>VITE_APP_NAME=MyApp</span></span>
<span class="line"><span>\\\`\\\`\\\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 常见问题</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 开发服务器启动失败？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>检查端口 5173 是否被占用，或尝试 \`npm run dev -- --port 3000\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 类型错误？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>运行 \`npm run typecheck\` 查看详细错误信息</span></span></code></pre></div><p><strong>快速生成 CLAUDE.md：</strong></p><p>如果你已经有一个项目，但还没有 <code>CLAUDE.md</code>，运行 <code>/init</code> 命令让 Claude 自动生成：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">claude</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在 Claude Code 中输入</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/init</span></span></code></pre></div><p>Claude 会分析你的项目结构、package.json、现有代码，生成一份符合实际情况的 <code>CLAUDE.md</code>。生成后建议人工检查并根据需要调整。</p><h3 id="claudeignore-节省-token" tabindex="-1">.claudeignore - 节省 Token <a class="header-anchor" href="#claudeignore-节省-token" aria-label="Permalink to “.claudeignore - 节省 Token”">​</a></h3><p><code>.claudeignore</code> 文件告诉 Claude Code 哪些文件不应该被读取到上下文中。合理配置可以显著减少 Token 消耗（通常能减少 40-60%），同时提高响应速度。</p><p><strong>为什么需要 .claudeignore？</strong></p><p>Claude Code 在理解项目时，会尝试读取相关文件。但有些文件对理解项目没有帮助，反而会：</p><ul><li>消耗大量 Token（如 node_modules 中的类型定义文件）</li><li>引入噪音（如日志文件、构建产物）</li><li>包含敏感信息（如 .env 文件）</li></ul><p><strong>推荐配置：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># ===== 依赖目录 =====</span></span>
<span class="line"><span># 这些目录包含大量第三方代码，不需要 Claude 读取</span></span>
<span class="line"><span>node_modules/</span></span>
<span class="line"><span>.pnp/</span></span>
<span class="line"><span>.pnp.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ===== 构建产物 =====</span></span>
<span class="line"><span># 生成的文件，不包含源代码信息</span></span>
<span class="line"><span>dist/</span></span>
<span class="line"><span>build/</span></span>
<span class="line"><span>.next/</span></span>
<span class="line"><span>out/</span></span>
<span class="line"><span>*.tsbuildinfo</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ===== 日志文件 =====</span></span>
<span class="line"><span># 运行时生成的日志，对理解项目无帮助</span></span>
<span class="line"><span>*.log</span></span>
<span class="line"><span>npm-debug.log*</span></span>
<span class="line"><span>yarn-debug.log*</span></span>
<span class="line"><span>yarn-error.log*</span></span>
<span class="line"><span>pnpm-debug.log*</span></span>
<span class="line"><span>lerna-debug.log*</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ===== 测试相关 =====</span></span>
<span class="line"><span># 测试覆盖率报告、coverage 数据</span></span>
<span class="line"><span>coverage/</span></span>
<span class="line"><span>.nyc_output/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ===== 编辑器/IDE =====</span></span>
<span class="line"><span># 编辑器配置和临时文件</span></span>
<span class="line"><span>.vscode/*</span></span>
<span class="line"><span>!.vscode/extensions.json</span></span>
<span class="line"><span>.idea/</span></span>
<span class="line"><span>*.suo</span></span>
<span class="line"><span>*.ntvs*</span></span>
<span class="line"><span>*.njsproj</span></span>
<span class="line"><span>*.sln</span></span>
<span class="line"><span>*.sw?</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ===== 系统文件 =====</span></span>
<span class="line"><span># macOS、Windows 系统文件</span></span>
<span class="line"><span>.DS_Store</span></span>
<span class="line"><span>Thumbs.db</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ===== 环境变量 =====</span></span>
<span class="line"><span># 包含敏感信息，不应被读取</span></span>
<span class="line"><span>.env</span></span>
<span class="line"><span>.env.local</span></span>
<span class="line"><span>.env.*.local</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ===== 大型资源文件 =====</span></span>
<span class="line"><span># 图片、视频等二进制文件</span></span>
<span class="line"><span>*.png</span></span>
<span class="line"><span>*.jpg</span></span>
<span class="line"><span>*.jpeg</span></span>
<span class="line"><span>*.gif</span></span>
<span class="line"><span>*.svg</span></span>
<span class="line"><span>*.ico</span></span>
<span class="line"><span>*.mp4</span></span>
<span class="line"><span>*.webm</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ===== 锁文件（可选） =====</span></span>
<span class="line"><span># 如果你不需要 Claude 分析依赖版本，可以忽略</span></span>
<span class="line"><span># package-lock.json</span></span>
<span class="line"><span># yarn.lock</span></span>
<span class="line"><span># pnpm-lock.yaml</span></span></code></pre></div><p><strong>配置技巧：</strong></p><ol><li><strong>从最小配置开始</strong>：先忽略 node_modules 和构建产物，观察 Token 消耗</li><li><strong>根据项目调整</strong>：如果是图片密集型项目，添加图片格式忽略；如果是文档项目，保留 Markdown 文件</li><li><strong>定期优化</strong>：使用 <code>/context</code> 查看哪些文件消耗了最多 Token，考虑是否加入忽略列表</li></ol><h3 id="权限配置" tabindex="-1">权限配置 <a class="header-anchor" href="#权限配置" aria-label="Permalink to “权限配置”">​</a></h3><p>Claude Code 默认会在执行敏感操作前询问确认。通过 <code>settings.json</code> 中的 <code>permissions</code> 配置，你可以精细控制哪些操作可以自动执行，哪些需要确认，哪些完全禁止。</p><p><strong>权限配置结构：</strong></p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;permissions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;allow&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 自动允许，不询问</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;ask&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 执行前询问确认</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;deny&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 完全禁止</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>配置语法：</strong></p><p>权限规则使用 <code>操作类型(匹配模式)</code> 的格式：</p><table tabindex="0"><thead><tr><th>操作类型</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td><code>Bash</code></td><td>执行终端命令</td><td><code>Bash(git status)</code></td></tr><tr><td><code>Edit</code></td><td>编辑文件</td><td><code>Edit(src/**/*.ts)</code></td></tr><tr><td><code>Read</code></td><td>读取文件</td><td><code>Read(README.md)</code></td></tr><tr><td><code>Write</code></td><td>创建新文件</td><td><code>Write(src/components/*.tsx)</code></td></tr></tbody></table><p><strong>匹配模式支持通配符：</strong></p><ul><li><code>*</code> 匹配任意字符（不包括 <code>/</code>）</li><li><code>**</code> 匹配任意路径</li><li><code>?</code> 匹配单个字符</li></ul><p><strong>实际配置示例：</strong></p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;permissions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;allow&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(git status)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(git log:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(git diff:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(npm test:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(npm run lint:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Edit(src/**/*.{ts,tsx})&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Edit(tests/**/*.test.ts)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Read(src/**/*.ts)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Write(src/components/*.tsx)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;ask&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(git commit:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(git push:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(git pull:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(npm install:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(npm run build)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Edit(package.json)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Edit(tsconfig.json)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Read(.env)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Read(config/secrets.*)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;deny&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(rm -rf:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(sudo:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(curl * | sh)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(wget * | sh)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Edit(.git/*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Write(/etc/*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Read(/etc/passwd)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>配置建议：</strong></p><ol><li><strong>开发阶段</strong>：设置较宽松的权限，提高迭代速度</li><li><strong>生产环境</strong>：收紧权限，特别是涉及部署、敏感数据的操作</li><li><strong>团队协作</strong>：将基础权限放在 <code>settings.json</code>（共享），个人调整放在 <code>settings.local.json</code></li></ol><h3 id="rules-规则目录" tabindex="-1">Rules 规则目录 <a class="header-anchor" href="#rules-规则目录" aria-label="Permalink to “Rules 规则目录”">​</a></h3><p>对于大型项目，单个 <code>CLAUDE.md</code> 可能变得臃肿且难以维护。Claude Code 支持使用 <strong>Rules 规则目录</strong> 进行模块化管理，将不同方面的规范拆分成独立的文件。</p><p><strong>目录结构：</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.claude/</span></span>
<span class="line"><span>├── settings.json          # 主配置文件</span></span>
<span class="line"><span>├── CLAUDE.md              # 项目概述（仍需要）</span></span>
<span class="line"><span>└── rules/                 # 规则目录</span></span>
<span class="line"><span>    ├── 00-security.md     # 安全规则（全局）</span></span>
<span class="line"><span>    ├── 01-coding-style.md # 编码风格（全局）</span></span>
<span class="line"><span>    ├── 10-api.md          # API 开发规范</span></span>
<span class="line"><span>    ├── 11-frontend.md     # 前端开发规范</span></span>
<span class="line"><span>    ├── 12-backend.md      # 后端开发规范</span></span>
<span class="line"><span>    └── 20-testing.md      # 测试规范</span></span></code></pre></div><p><strong>文件命名建议：</strong></p><p>使用数字前缀控制加载顺序（如 <code>00-</code>、<code>01-</code>），确保基础规则先加载，特定规则后加载。</p><p><strong>规则文件格式：</strong></p><p>规则文件支持 YAML frontmatter，用于控制规则的适用范围：</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 可选：指定规则适用的文件路径</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">globs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;src/api/**/*.ts&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;src/services/**/*.ts&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 可选：指定规则适用的命令</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">commands</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;generate api&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;create endpoint&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 可选：规则优先级（数字越小优先级越高）</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">priority</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># API 开发规范</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 路由设计</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RESTful 风格，使用名词复数</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 版本控制：/api/v1/users</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 嵌套资源：/api/v1/users/123/orders</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 请求/响应格式</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 统一使用 JSON</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 错误响应必须包含 code 和 message</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 分页响应使用 { data, pagination } 结构</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 安全要求</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 所有端点必须验证认证（除公开端点）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 敏感操作需要二次确认</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 实现速率限制防止滥用</span></span></code></pre></div><p><strong>规则继承与覆盖：</strong></p><ul><li>全局规则（无 frontmatter 或 <code>globs: *</code>）适用于所有文件</li><li>特定路径规则只适用于匹配的文件</li><li>当多个规则冲突时，优先级高的规则生效</li><li>特定规则可以覆盖全局规则</li></ul><p><strong>使用场景示例：</strong></p><p><strong>场景 1：前后端分离项目</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.claude/rules/</span></span>
<span class="line"><span>├── 00-general.md          # 通用规范（提交信息、命名约定）</span></span>
<span class="line"><span>├── 10-backend.md          # 后端规范（NestJS 特定）</span></span>
<span class="line"><span>├── 11-frontend.md         # 前端规范（React 特定）</span></span>
<span class="line"><span>└── 20-database.md         # 数据库规范（Prisma 特定）</span></span></code></pre></div><p><strong>场景 2：微服务架构</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.claude/rules/</span></span>
<span class="line"><span>├── 00-global/             # 全局规则</span></span>
<span class="line"><span>│   ├── security.md</span></span>
<span class="line"><span>│   └── logging.md</span></span>
<span class="line"><span>├── 10-services/           # 服务特定规则</span></span>
<span class="line"><span>│   ├── user-service.md</span></span>
<span class="line"><span>│   ├── order-service.md</span></span>
<span class="line"><span>│   └── payment-service.md</span></span>
<span class="line"><span>└── 20-shared/             # 共享组件规则</span></span>
<span class="line"><span>    ├── shared-lib.md</span></span>
<span class="line"><span>    └── common-utils.md</span></span></code></pre></div><p><strong>迁移建议：</strong></p><p>如果你已经有一个庞大的 <code>CLAUDE.md</code>，可以按以下步骤迁移到 Rules 目录：</p><ol><li>创建 <code>.claude/rules/</code> 目录</li><li>将 <code>CLAUDE.md</code> 中的内容按主题拆分</li><li>为每个规则文件添加适当的 frontmatter</li><li>保留 <code>CLAUDE.md</code> 作为项目概述，移除详细规范</li><li>测试确保规则正确加载</li></ol><hr><h2 id="核心操作指令" tabindex="-1">核心操作指令 <a class="header-anchor" href="#核心操作指令" aria-label="Permalink to “核心操作指令”">​</a></h2><p>Claude Code 提供了一套丰富的操作指令，让你能够高效地与 AI 协作。这些指令分为几类：Slash 命令（内置功能）、符号系统（快捷操作）、以及自然语言指令（日常开发）。</p><h3 id="slash-命令速查" tabindex="-1">Slash 命令速查 <a class="header-anchor" href="#slash-命令速查" aria-label="Permalink to “Slash 命令速查”">​</a></h3><p>Slash 命令是 Claude Code 的内置功能，以 <code>/</code> 开头。它们提供标准化的操作，如初始化项目、管理配置、查看状态等。</p><table tabindex="0"><thead><tr><th>命令</th><th>功能</th><th>使用场景</th></tr></thead><tbody><tr><td><code>/help</code></td><td>显示所有命令</td><td>忘记命令时快速查看</td></tr><tr><td><code>/init</code></td><td>初始化项目，生成 CLAUDE.md</td><td>新项目或添加配置</td></tr><tr><td><code>/plan</code></td><td>进入规划模式</td><td>复杂任务前先制定计划</td></tr><tr><td><code>/clear</code></td><td>清除对话历史</td><td>上下文混乱时重新开始</td></tr><tr><td><code>/compact</code></td><td>压缩上下文</td><td>长对话后节省 Token</td></tr><tr><td><code>/diff</code></td><td>打开交互式 diff 视图</td><td>查看当前未提交改动</td></tr><tr><td><code>/plugin</code></td><td>管理插件</td><td>安装提交、审查等扩展能力</td></tr><tr><td><code>/context</code></td><td>查看上下文使用</td><td>优化 Token 消耗</td></tr><tr><td><code>/cost</code></td><td>查看本次会话费用</td><td>关注使用成本</td></tr><tr><td><code>/config</code></td><td>打开配置面板</td><td>修改设置</td></tr><tr><td><code>/permissions</code></td><td>权限管理</td><td>调整操作权限</td></tr><tr><td><code>/model</code></td><td>切换 AI 模型</td><td>选择不同模型</td></tr></tbody></table><p><strong>命令组合示例：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 完整开发工作流</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/plan</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                    # 1. 制定计划</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ... 执行开发 ...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/diff</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                    # 2. 查看变更</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">请基于当前</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 生成</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> message</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              # 3. 暂存改动</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;...&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 4. 提交代码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/cost</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                    # 5. 查看成本</span></span></code></pre></div><h3 id="符号系统" tabindex="-1">符号系统 <a class="header-anchor" href="#符号系统" aria-label="Permalink to “符号系统”">​</a></h3><p>符号系统是 Claude Code 的快捷操作方式，通过特殊符号快速触发特定功能。</p><table tabindex="0"><thead><tr><th>符号</th><th>名称</th><th>用途</th><th>示例</th></tr></thead><tbody><tr><td><code>/</code></td><td>Slash 命令</td><td>执行内置操作</td><td><code>/help</code>, <code>/plan</code></td></tr><tr><td><code>@</code></td><td>At 引用</td><td>引用文件/目录</td><td><code>@src/app.tsx</code></td></tr><tr><td><code>!</code></td><td>Bang 模式</td><td>执行终端命令</td><td><code>!npm test</code></td></tr><tr><td><code>&amp;</code></td><td>后台运行</td><td>后台执行任务</td><td><code>&amp;npm run dev</code></td></tr></tbody></table><p><strong>符号组合技巧：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 组合使用多个符号</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@src/utils.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> !npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 解释：读取 utils.ts，然后运行测试</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@src/components/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @src/pages/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 比较这两个目录的结构</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 解释：同时引用两个目录进行对比</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @src/app.tsx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 解释这些变更</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 解释：查看 Git 差异，然后让 Claude 解释特定文件的变更</span></span></code></pre></div><h3 id="文件操作" tabindex="-1">文件操作 <a class="header-anchor" href="#文件操作" aria-label="Permalink to “文件操作”">​</a></h3><p>文件操作是日常开发中最常用的功能。Claude Code 支持读取、编辑、创建、删除等各种文件操作。</p><p><strong>读取文件：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 基本读取</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@src/app.tsx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 解释这个文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 读取并分析</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@src/utils/helpers.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 找出潜在的性能问题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 对比读取</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@src/components/OldButton.tsx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @src/components/NewButton.tsx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 对比这两个组件的差异</span></span></code></pre></div><p><strong>编辑文件：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 简单编辑</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">将</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/utils/date.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 的</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> formatDate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 函数改为支持中文格式</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 复杂编辑</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@src/api/users.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 重构这个文件：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 将重复的错误处理逻辑抽取到统一的</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> handleError</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 函数</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 使用</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> async/await</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 替代</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Promise</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 链</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">3.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 添加</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> JSDoc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 注释</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 批量编辑</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">将</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/components/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 下所有类组件转换为函数组件</span></span></code></pre></div><p><strong>创建文件：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建单个文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">创建</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/components/UserCard.tsx，实现一个展示用户信息的卡片组件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建多个相关文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">创建用户模块：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/types/user.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 定义</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> User</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 接口</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/api/users.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 用户相关</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> API</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 调用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">3.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/components/UserCard.tsx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 用户卡片组件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">4.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/hooks/useUser.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 获取用户数据的</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Hook</span></span></code></pre></div><p><strong>删除文件：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 删除前确认</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">删除</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/old-component.tsx（这个组件已经不再使用）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Claude 会询问确认，并可能建议你检查是否有其他文件引用它</span></span></code></pre></div><h3 id="git-操作" tabindex="-1">Git 操作 <a class="header-anchor" href="#git-操作" aria-label="Permalink to “Git 操作”">​</a></h3><p>Claude Code 深度集成了 Git，让你可以在不离开终端的情况下完成完整的版本控制工作流。</p><p><strong>查看状态：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看 Git 状态</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">显示</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 状态和未提交的变更</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看详细变更</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">解释</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/api/users.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 的变更内容</span></span></code></pre></div><p><strong>创建提交：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看变更</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/diff</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 让 Claude 生成提交信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">请基于当前</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 生成一个</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Conventional</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> message</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 手动提交</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;...&quot;</span></span></code></pre></div><p><strong>分支操作：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建功能分支</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature/user-authentication</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 完成开发后</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">请根据当前改动生成提交信息</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;...&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature/user-authentication</span></span></code></pre></div><p><strong>完整 Git 工作流示例：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 开始新功能</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature/payment-integration</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 开发功能（Claude 协助编码）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">创建支付模块，包含支付宝和微信支付</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 运行测试</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 查看变更</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/diff</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 5. 生成并确认提交信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">请基于当前</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 生成一个</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Conventional</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> message</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;...&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 6. 推送到远程</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature/payment-integration</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 7. 创建 PR（可选，配合 GitHub CLI）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --title</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;feat: add payment integration&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --body</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;支持支付宝和微信支付&quot;</span></span></code></pre></div><h3 id="代码操作" tabindex="-1">代码操作 <a class="header-anchor" href="#代码操作" aria-label="Permalink to “代码操作”">​</a></h3><p>代码操作是 Claude Code 的核心能力，包括生成、解释、重构、优化等。</p><p><strong>生成代码：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成组件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">创建一个</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> React</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Hook</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 管理用户认证状态，包含登录、登出、权限检查功能</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成工具函数</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">创建一个日期格式化工具函数，支持相对时间（如</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;2小时前&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成完整模块</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">创建订单模块，包含：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 订单列表页面</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 订单详情页面</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 创建订单</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> API</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 订单状态管理</span></span></code></pre></div><p><strong>解释代码：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 逐行解释</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">逐行解释</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/algorithms/quicksort.ts</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 高层次解释</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@src/services/payment.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 解释这个模块的架构设计</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 解释复杂逻辑</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">解释</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/utils/dataTransformer.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 中的</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reduce</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 操作在做什么</span></span></code></pre></div><p><strong>重构代码：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 架构重构</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">将</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/components/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 的类组件转换为函数组件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 性能重构</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">优化</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/App.tsx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 的渲染性能，减少不必要的重渲染</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 代码清理</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@src/utils/helpers.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 重构这个文件：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 删除未使用的函数</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 将重复逻辑抽取为通用函数</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">3.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 添加类型定义</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">4.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 优化函数命名</span></span></code></pre></div><p><strong>调试代码：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 分析错误</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">运行</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 失败了，分析错误原因并修复</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 性能分析</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@src/components/DataTable.tsx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 这个组件渲染很慢，找出性能瓶颈</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 日志分析</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logs/error.log</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">分析这些错误日志，找出根本原因</span></span></code></pre></div><h3 id="测试操作" tabindex="-1">测试操作 <a class="header-anchor" href="#测试操作" aria-label="Permalink to “测试操作”">​</a></h3><p>测试是保证代码质量的重要手段。Claude Code 可以协助你生成测试、运行测试、分析测试结果。</p><p><strong>生成测试：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成单元测试</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">为</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/utils/math.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 生成单元测试，覆盖所有边界情况</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成组件测试</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">为</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/components/UserForm.tsx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 生成</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> React</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Testing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Library</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 测试</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成集成测试</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">创建用户注册流程的集成测试，覆盖从表单提交到数据库写入的完整流程</span></span></code></pre></div><p><strong>运行和调试测试：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 运行测试</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 调试失败测试</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">分析测试失败原因并修复</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@tests/auth.test.ts</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看测试覆盖率</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test:coverage</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">哪些代码没有被测试覆盖？</span></span></code></pre></div><p><strong>测试策略建议：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 为新功能添加测试</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">我添加了用户认证功能，请：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 为</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> auth.service.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 生成单元测试</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 为</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> LoginForm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 组件生成组件测试</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">3.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 运行所有测试确保通过</span></span></code></pre></div><h3 id="指令组合与链式操作" tabindex="-1">指令组合与链式操作 <a class="header-anchor" href="#指令组合与链式操作" aria-label="Permalink to “指令组合与链式操作”">​</a></h3><p>高效的 Claude Code 使用方式是将多个指令组合起来，形成完整的工作流。</p><p><strong>场景 1：Bug 修复工作流</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 查看问题</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">测试报错了，分析一下</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 定位问题</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@src/utils/validation.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 问题出在这个文件吗？</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 修复问题</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">修复</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> validation.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 中的</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> isEmail</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 函数，使其正确处理包含</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 的邮箱地址</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 验证修复</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 5. 提交修复</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">请根据当前</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 生成修复类提交信息</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;fix: ...&quot;</span></span></code></pre></div><p><strong>场景 2：代码审查工作流</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 查看变更</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --stat</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">有哪些文件被修改了？</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 详细审查</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@src/components/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 审查这些组件的变更</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 提出改进建议</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">基于审查结果，有哪些可以改进的地方？</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 实施改进</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">优化</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> UserList</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 组件的性能</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 5. 最终审查</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/diff</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">请审查当前改动，指出潜在风险和可改进点</span></span></code></pre></div><p><strong>场景 3：新功能开发工作流</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 制定计划</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/plan</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">我要添加购物车功能</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 创建分支</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature/shopping-cart</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 开发功能</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">按照计划逐步实现</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 添加测试</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">为购物车模块生成测试</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 5. 运行测试</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 6. 代码审查</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/diff</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">请基于当前</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 做一次代码审查</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 7. 提交代码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">请生成本次功能开发的</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> message</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;feat: ...&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span></span></code></pre></div><hr><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to “常见问题”">​</a></h2><p>在使用 Claude Code 的过程中，你可能会遇到各种问题。本节整理了最常见的问题及其解决方案。</p><h3 id="token-消耗太快" tabindex="-1">Token 消耗太快？ <a class="header-anchor" href="#token-消耗太快" aria-label="Permalink to “Token 消耗太快？”">​</a></h3><p>Token 消耗过快是使用 Claude Code 时最常见的问题。以下是优化 Token 使用的完整策略。</p><p><strong>问题诊断：</strong></p><p>首先，使用 <code>/context</code> 命令查看当前的 Token 使用情况：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>/context</span></span></code></pre></div><p>关注以下指标：</p><ul><li><strong>Token 使用率</strong>：如果超过 70%，需要考虑压缩上下文</li><li><strong>文件引用数量</strong>：引用的文件越多，Token 消耗越大</li><li><strong>大文件</strong>：查看哪些文件占用了最多 Token</li></ul><p><strong>优化策略：</strong></p><p><strong>1. 完善 .claudeignore 配置</strong></p><p>确保你的 <code>.claudeignore</code> 文件包含了所有不需要的文件：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 必须忽略的</span></span>
<span class="line"><span>node_modules/</span></span>
<span class="line"><span>dist/</span></span>
<span class="line"><span>build/</span></span>
<span class="line"><span>*.log</span></span>
<span class="line"><span>.env</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 根据项目类型添加</span></span>
<span class="line"><span># React 项目</span></span>
<span class="line"><span>.next/</span></span>
<span class="line"><span>out/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Vue 项目</span></span>
<span class="line"><span>.nuxt/</span></span>
<span class="line"><span>.output/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 通用</span></span>
<span class="line"><span>.vscode/</span></span>
<span class="line"><span>.idea/</span></span>
<span class="line"><span>coverage/</span></span>
<span class="line"><span>*.min.js</span></span>
<span class="line"><span>*.bundle.js</span></span></code></pre></div><p><strong>2. 定期压缩上下文</strong></p><p>长对话会累积大量 Token。建议每 5-6 轮对话后使用 <code>/compact</code>：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 长对话后</span></span>
<span class="line"><span>/compact</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 继续工作</span></span>
<span class="line"><span>现在我们来实现订单模块...</span></span></code></pre></div><p><strong>3. 精准引用文件</strong></p><p>不要引用整个目录，而是引用具体需要的文件：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 不推荐（会读取整个目录）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@src/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 解释这些代码</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 推荐（只读取需要的文件）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@src/utils/auth.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @src/components/Login.tsx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 解释登录流程</span></span></code></pre></div><p><strong>4. 避免读取大文件</strong></p><p>如果 <code>/context</code> 显示某个文件占用了大量 Token，考虑：</p><ul><li>是否真的需要这个文件？</li><li>能否只引用其中的部分代码？</li><li>能否将大文件拆分成小模块？</li></ul><h3 id="claude-不理解项目" tabindex="-1">Claude 不理解项目？ <a class="header-anchor" href="#claude-不理解项目" aria-label="Permalink to “Claude 不理解项目？”">​</a></h3><p>当 Claude 的回答不够准确，或者频繁询问项目的基本信息时，说明它缺乏足够的项目背景知识。</p><p><strong>解决方案：</strong></p><p><strong>1. 生成 CLAUDE.md</strong></p><p>运行 <code>/init</code> 让 Claude 自动生成项目配置文件：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/init</span></span></code></pre></div><p>生成后，检查并完善以下内容：</p><ul><li>项目概述是否准确？</li><li>技术栈是否完整？</li><li>常用命令是否正确？</li><li>代码规范是否明确？</li></ul><p><strong>2. 手动编辑 CLAUDE.md</strong></p><p>如果自动生成的配置不够详细，手动添加：</p><div class="language-markdown"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 项目特定信息</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 架构决策</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 为什么选择 X 而不是 Y？</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 核心设计模式是什么？</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 常见陷阱</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 使用 useEffect 时要注意...</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 数据库查询必须...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### 第三方集成</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 支付使用 Stripe</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 邮件使用 SendGrid</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 文件存储使用 AWS S3</span></span></code></pre></div><p><strong>3. 使用 Rules 目录</strong></p><p>大型项目可以使用 Rules 目录组织规范：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>.claude/rules/</span></span>
<span class="line"><span>├── 00-architecture.md    # 架构概述</span></span>
<span class="line"><span>├── 01-coding-style.md    # 代码风格</span></span>
<span class="line"><span>├── 10-frontend.md        # 前端规范</span></span>
<span class="line"><span>├── 11-backend.md         # 后端规范</span></span>
<span class="line"><span>└── 20-testing.md         # 测试规范</span></span></code></pre></div><p><strong>4. 即时补充上下文</strong></p><p>对于特定任务，可以在指令中补充背景：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>我们使用自定义的 useAuth Hook 处理认证，</span></span>
<span class="line"><span>它返回 { user, login, logout, isLoading }。</span></span>
<span class="line"><span>请基于这个 Hook 实现用户菜单组件。</span></span></code></pre></div><h3 id="如何回退操作" tabindex="-1">如何回退操作？ <a class="header-anchor" href="#如何回退操作" aria-label="Permalink to “如何回退操作？”">​</a></h3><p>Claude Code 提供了多种回退机制，适用于不同的场景。</p><p><strong>场景 1：回退对话状态</strong></p><p>如果只是说错了话，或者对 Claude 的回答不满意：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>双击 Esc  →  回退到上一轮对话</span></span>
<span class="line"><span>三击 Esc  →  清除所有对话历史</span></span></code></pre></div><p><strong>⚠️ 注意</strong>：这只会回退对话状态，不会撤销文件修改。</p><p><strong>场景 2：撤销文件修改</strong></p><p>如果 Claude 已经修改了文件，你需要手动撤销：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看变更</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 撤销特定文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/utils/helpers.ts</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 撤销所有变更</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果已经提交了</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 软回退（保留变更）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --soft</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD~1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 硬回退（丢弃变更）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hard</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD~1</span></span></code></pre></div><p><strong>场景 3：使用 Git 工作流预防</strong></p><p>最佳实践是在使用 Claude Code 前提交当前工作：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 开始前保存当前状态</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;WIP: before Claude Code session&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或使用 git stash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;before claude&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用 Claude Code 进行开发...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果结果不满意，完全回退</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hard</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD~1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pop</span></span></code></pre></div><h3 id="权限提示太多" tabindex="-1">权限提示太多？ <a class="header-anchor" href="#权限提示太多" aria-label="Permalink to “权限提示太多？”">​</a></h3><p>频繁的权限确认会影响开发效率。通过合理配置权限，可以让工作流更流畅。</p><p><strong>理解权限系统：</strong></p><p>Claude Code 的权限分为三级：</p><ul><li><strong>allow</strong>：自动允许，不询问</li><li><strong>ask</strong>：执行前询问确认</li><li><strong>deny</strong>：完全禁止</li></ul><p><strong>优化配置：</strong></p><p>编辑 <code>.claude/settings.json</code>：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;permissions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;allow&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // Git 只读操作</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(git status)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(git log:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(git diff:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(git branch)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 测试和检查</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(npm test:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(npm run lint:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(npm run typecheck)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 开发服务器</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(npm run dev:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 源代码编辑</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Edit(src/**/*.{ts,tsx})&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Edit(tests/**/*.test.ts)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Write(src/**/*.ts)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;ask&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // Git 写操作</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(git commit:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(git push:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(git pull:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 包管理</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(npm install:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(npm uninstall:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 构建和部署</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(npm run build)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(npm run deploy:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 配置文件修改</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Edit(package.json)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Edit(tsconfig.json)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 敏感文件读取</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Read(.env)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Read(config/secrets.*)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;deny&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 危险命令</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(rm -rf:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(sudo:*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(curl * | sh)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Bash(wget * | sh)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 系统文件</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Edit(/etc/*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Write(/usr/*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // Git 目录</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Edit(.git/*)&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>渐进式权限策略：</strong></p><ul><li><strong>学习阶段</strong>：保持默认设置，了解 Claude 会执行哪些操作</li><li><strong>熟悉阶段</strong>：将常用的安全操作（如 git status、npm test）加入 allow</li><li><strong>高效阶段</strong>：根据项目特点，配置更精细的权限规则</li></ul><h3 id="国内如何使用" tabindex="-1">国内如何使用？ <a class="header-anchor" href="#国内如何使用" aria-label="Permalink to “国内如何使用？”">​</a></h3><p>由于网络原因，中国用户可能无法直接访问 Anthropic 的官方服务。以下是几种解决方案。</p><p><strong>方案 1：使用 API 代理服务</strong></p><p>许多云服务商提供兼容 Anthropic API 的代理服务：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置环境变量</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ANTHROPIC_BASE_URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://your-api-proxy.com/v1&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ANTHROPIC_API_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;your-api-key&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动 Claude Code</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">claude</span></span></code></pre></div><p><strong>方案 2：使用第三方 Claude Code 兼容工具</strong></p><p>一些国内服务商提供兼容 Claude Code 的工具：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装兼容版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @some-provider/claude-code</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置 API 密钥</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">claude</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> api.key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> your-api-key</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">claude</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> api.baseUrl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://api.some-provider.com</span></span></code></pre></div><p><strong>方案 3：使用其他 AI 编程工具</strong></p><p>如果 Claude Code 无法使用，可以考虑以下替代方案：</p><table tabindex="0"><thead><tr><th>工具</th><th>特点</th><th>适用场景</th></tr></thead><tbody><tr><td>Cursor</td><td>基于 VS Code，功能完善</td><td>需要完整 IDE 体验</td></tr><tr><td>GitHub Copilot</td><td>代码补全能力强</td><td>主要需要代码补全</td></tr><tr><td>通义灵码</td><td>国产，国内访问稳定</td><td>国内开发环境</td></tr><tr><td>Codeium</td><td>免费额度多</td><td>预算有限</td></tr></tbody></table><p><strong>方案 4：让 AI Agent 帮你配置</strong></p><p>如果你不确定如何配置，可以让 AI Agent 协助：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>我要使用 Claude Code，但国内无法直接访问。</span></span>
<span class="line"><span>我购买了 XXX 服务商的 API，</span></span>
<span class="line"><span>API 地址是 https://api.xxx.com，</span></span>
<span class="line"><span>密钥是 sk-xxx。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>请帮我配置好环境变量，确保 Claude Code 能正常使用。</span></span></code></pre></div><p><strong>常见问题：</strong></p><ul><li><p><strong>Q: 配置后仍然无法连接？</strong></p><ul><li>A: 检查 API 地址是否正确，确认是否包含 <code>/v1</code> 路径</li><li>A: 检查 API 密钥是否有效，是否已充值</li><li>A: 检查本地网络是否需要代理</li></ul></li><li><p><strong>Q: 响应速度很慢？</strong></p><ul><li>A: 选择地理位置更近的服务商</li><li>A: 使用 Coding Plan 而非通用 API</li><li>A: 考虑使用 <code>/compact</code> 减少 Token 消耗</li></ul></li><li><p><strong>Q: 某些功能无法使用？</strong></p><ul><li>A: 部分第三方服务可能不完全兼容所有 Claude Code 功能</li><li>A: 检查服务商的文档，了解支持的功能范围</li></ul></li></ul><hr><h2 id="参考资源" tabindex="-1">参考资源 <a class="header-anchor" href="#参考资源" aria-label="Permalink to “参考资源”">​</a></h2><ul><li><a href="https://code.claude.com/docs" target="_blank" rel="noreferrer">Claude Code 官方文档</a></li><li><a href="https://github.com/anthropics/claude-code" target="_blank" rel="noreferrer">Claude Code GitHub</a></li><li><a href="https://github.com/affaan-m/everything-claude-code" target="_blank" rel="noreferrer">Everything Claude Code</a></li></ul>`,398)])])}const o=a(p,[["render",t]]);export{c as __pageData,o as default};
