const e={codeSmell:{title:"代码坏味道识别器 ── 点击切换不同示例",problemCode:"问题代码",suggestion:"改进建议：",smells:[{name:"过长函数",icon:"📏",cls:"red",desc:"一个函数超过 50 行，做了太多事情，难以理解和测试。",bad:`function processOrder(order) {
  // 验证订单... (20行)
  // 计算价格... (15行)
  // 检查库存... (10行)
  // 发送通知... (15行)
  // 更新数据库... (10行)
  // 生成报表... (10行)
  // 总计 80+ 行！
}`,fix:"将大函数拆分为多个职责单一的小函数：validateOrder()、calculatePrice()、checkInventory() 等。"},{name:"魔法数字",icon:"🔢",cls:"orange",desc:"代码中直接使用含义不明的数字字面量，阅读者无法理解其含义。",bad:`if (user.age >= 18) { ... }
if (password.length < 8) { ... }
if (retryCount > 3) { ... }
setTimeout(fn, 86400000)`,fix:"用命名常量替代：const ADULT_AGE = 18、const MIN_PASSWORD_LENGTH = 8、const ONE_DAY_MS = 86400000。"},{name:"重复代码",icon:"📋",cls:"yellow",desc:"相同或相似的代码出现在多处，修改时容易遗漏。",bad:`// 文件 A
const tax = price * 0.13
const total = price + tax

// 文件 B（几乎一样）
const tax = amount * 0.13
const sum = amount + tax`,fix:"提取公共函数 calculateTax(amount)，在多处复用，修改只需改一处。"},{name:"过深嵌套",icon:"🪆",cls:"purple",desc:"多层 if/for 嵌套导致代码难以阅读，逻辑像迷宫。",bad:`if (user) {
  if (user.isActive) {
    if (user.hasPermission) {
      if (order.isValid) {
        // 终于到了真正的逻辑...
      }
    }
  }
}`,fix:"使用卫语句（Guard Clause）提前返回：if (!user) return; if (!user.isActive) return; ..."}]},docStructure:{title:"文档结构模板 ── 点击切换文档类型",docs:[{name:"README",icon:"📖",sections:[{name:"项目名称 + 一句话描述",desc:"让读者在 3 秒内知道这个项目是什么。",example:`# MyApp
> 一个轻量级的任务管理工具`},{name:"快速开始",desc:"最短路径让用户跑起来，通常是安装 + 运行命令。",example:`npm install myapp
npx myapp init`},{name:"功能特性",desc:"用列表列出核心功能，让用户判断是否满足需求。",example:`- ✅ 任务看板
- ✅ 团队协作
- ✅ 数据导出`},{name:"使用示例",desc:"展示典型用法的代码片段，比文字描述更直观。",example:null},{name:"贡献指南 + 许可证",desc:"说明如何参与贡献，以及项目的开源许可证。",example:null}]},{name:"API 文档",icon:"🔌",sections:[{name:"接口概述",desc:"说明 API 的基础 URL、认证方式、通用参数。",example:`Base URL: https://api.example.com/v1
Auth: Bearer Token`},{name:"请求参数",desc:"用表格列出每个参数的名称、类型、是否必填、说明。",example:`| 参数   | 类型   | 必填 | 说明     |
| name   | string | 是   | 用户名   |`},{name:"响应格式",desc:"展示成功和失败的 JSON 响应示例。",example:'{ "code": 200, "data": { ... } }'},{name:"错误码说明",desc:"列出所有可能的错误码及其含义。",example:`401 - 未授权
404 - 资源不存在
429 - 请求过于频繁`}]},{name:"架构文档",icon:"🏛️",sections:[{name:"系统概述",desc:"用一段话说明系统的目标、边界和核心约束。",example:null},{name:"架构图",desc:"展示系统的整体架构，包括各模块和它们之间的关系。",example:`[客户端] → [API 网关] → [微服务集群]
                    ↓
              [数据库集群]`},{name:"技术选型",desc:"说明关键技术的选择理由和替代方案的对比。",example:null},{name:"部署架构",desc:"说明生产环境的部署方式、扩容策略。",example:null}]}]},openSourceWorkflow:{title:"开源贡献流程 ── 点击步骤查看详情",commandTitle:"对应命令",previous:"上一步",next:"下一步",steps:[{name:"Fork",icon:"🍴",desc:"在 GitHub 上 Fork 目标仓库到自己的账号下，获得一份完整的副本。",cmd:"# 在 GitHub 页面点击 Fork 按钮"},{name:"Clone",icon:"📥",desc:"将 Fork 后的仓库克隆到本地开发环境。",cmd:`git clone https://github.com/你的用户名/项目.git
cd 项目`},{name:"Branch",icon:"🌿",desc:"创建功能分支，不要直接在 main 上开发。分支名应描述你要做的事。",cmd:"git checkout -b fix/login-bug"},{name:"Commit",icon:"💾",desc:"完成修改后提交，写清晰的 commit message。遵循项目的提交规范。",cmd:`git add .
git commit -m "fix: 修复登录页白屏问题"`},{name:"Push",icon:"🚀",desc:"将本地分支推送到你 Fork 的远程仓库。",cmd:"git push origin fix/login-bug"},{name:"PR",icon:"📬",desc:"在 GitHub 上创建 Pull Request，描述你的改动、关联的 Issue、测试方法。",cmd:'# 在 GitHub 页面点击 "New Pull Request"'},{name:"Review",icon:"👀",desc:"维护者会审查你的代码，可能提出修改建议。根据反馈修改后再次 push 即可。",cmd:`git add . && git commit -m "fix: 根据 review 反馈调整"
git push`},{name:"Merge",icon:"🎉",desc:"审查通过后，维护者会合并你的 PR。恭喜，你成为了项目贡献者！",cmd:"# 维护者操作：Merge Pull Request"}]},tddCycle:{title:'TDD 红绿重构循环 ── 点击"下一步"推进',stepBadge:"第 {current} 步 / {total}",previous:"上一步",next:"下一步",reset:"重置",phases:[{name:"Red",icon:"🔴",cls:"red"},{name:"Green",icon:"🟢",cls:"green"},{name:"Refactor",icon:"🔵",cls:"blue"}],steps:[{phase:"🔴 Red — 先写一个失败的测试",cls:"red",desc:"需求：实现 add(a, b) 函数。TDD 第一步不是写实现，而是先写测试。",fileLabel:"add.test.js",code:`test('add(1, 2) 应该返回 3', () => {
  expect(add(1, 2)).toBe(3)
})`,result:"❌ 测试失败 — add is not defined"},{phase:"🟢 Green — 写最小实现让测试通过",cls:"green",desc:"不追求完美，只写刚好让测试通过的代码。",fileLabel:"add.js",code:`function add(a, b) {
  return a + b
}`,result:"✅ 测试通过！"},{phase:"🔵 Refactor — 重构优化",cls:"blue",desc:"测试通过后安全地改进代码，测试是你的安全网。",fileLabel:"add.js",code:"const add = (a, b) => a + b",result:"✅ 重构完成，测试仍然通过！"},{phase:"🔴 Red — 添加新需求的测试",cls:"red",desc:"新需求：add 应该能处理字符串数字。继续循环！",fileLabel:"add.test.js",code:`test('add("1", "2") 应该返回 3', () => {
  expect(add('1', '2')).toBe(3)
})`,result:'❌ 测试失败 — 返回了 "12" 而不是 3'},{phase:"🟢 Green — 修复实现",cls:"green",desc:"修改实现以处理字符串输入。",fileLabel:"add.js",code:"const add = (a, b) => Number(a) + Number(b)",result:"✅ 所有测试通过！"}]},testPyramid:{title:"交互式测试金字塔 ── 点击每一层查看详情",example:"示例：",upperLegend:"越往上：越慢、越贵、越接近用户",lowerLegend:"越往下：越快、越多、越接近代码",detailRows:[{key:"count",label:"数量占比"},{key:"speed",label:"执行速度"},{key:"cost",label:"维护成本"},{key:"scope",label:"覆盖范围"},{key:"confidence",label:"信心指数"}],layers:[{name:"E2E 测试",cls:"e2e",icon:"🖥️",width:"40%",count:"约 10%",speed:"慢（秒~分钟级）",cost:"高 — 环境依赖多，易碎",scope:"完整用户流程",confidence:"最高 — 模拟真实用户操作",example:"用 Playwright 模拟用户登录 → 下单 → 支付的完整流程"},{name:"集成测试",cls:"integration",icon:"🔗",width:"60%",count:"约 20%",speed:"中等（百毫秒级）",cost:"中 — 需要部分外部依赖",scope:"模块间协作",confidence:"较高 — 验证组件间的配合",example:"测试 API 接口能否正确读写数据库并返回预期 JSON"},{name:"单元测试",cls:"unit",icon:"🧪",width:"85%",count:"约 70%",speed:"极快（毫秒级）",cost:"低 — 无外部依赖",scope:"单个函数/类",confidence:"基础 — 确保每个零件正常",example:'测试 formatPrice(100) 是否返回 "¥1.00"'}]},refactoring:{title:"重构手法对比演示 ── 选择一种手法查看前后对比",before:"重构前",after:"重构后",tip:"要点：",techniques:[{name:"提炼函数",description:"Extract Function：将一段代码从大函数中提取出来，放入一个命名清晰的新函数中。",before:[{text:`function printReport(invoice) {
  console.log("=== 账单 ===")
`},{text:`  // 计算总额
  let total = 0
  for (let item of invoice.items) {
    total += item.price * item.qty
  }
`,changed:!0},{text:"  console.log(`总计: ${total}`)\n}"}],after:[{text:`function printReport(invoice) {
  console.log("=== 账单 ===")
`},{text:`  const total = calcTotal(invoice.items)
`,changed:!0},{text:"  console.log(`总计: ${total}`)\n}\n\n"},{text:`function calcTotal(items) {
  return items.reduce(
    (s, i) => s + i.price * i.qty, 0
  )
}`,changed:!0}],tip:"提炼函数是最常用的重构手法。好的函数名就是最好的注释——如果你需要写注释解释一段代码在做什么，那它就该被提炼成函数。"},{name:"重命名变量",description:"Rename Variable：用清晰、有意义的名称替换含糊的变量名，让代码自解释。",before:[{text:"function calc(",changed:!0},{text:"a, b, c",changed:!0},{text:`) {
`},{text:`  const d = a * b
  const e = d * (1 - c)
  return e
}`,changed:!0}],after:[{text:"function calcOrderTotal(",changed:!0},{text:"price, quantity, discountRate",changed:!0},{text:`) {
`},{text:`  const subtotal = price * quantity
  const total = subtotal * (1 - discountRate)
  return total
}`,changed:!0}],tip:"变量命名是程序员最重要的基本功之一。好的命名让代码像散文一样可读，差的命名让代码像密码一样难解。"},{name:"消除重复",description:"Remove Duplication：将重复的逻辑抽取为共享函数或模板，遵循 DRY 原则。",before:[{text:`// 员工报表
function empReport(emp) {
`},{text:"  return `${emp.name} | ${emp.dept} | ${emp.salary}`",changed:!0},{text:`
}

// 经理报表
function mgrReport(mgr) {
`},{text:"  return `${mgr.name} | ${mgr.dept} | ${mgr.salary}`",changed:!0},{text:`
}`}],after:[{text:""},{text:"function formatReport(person) {\n  return `${person.name} | ${person.dept} | ${person.salary}`\n}",changed:!0},{text:`

// 统一调用
`},{text:`formatReport(employee)
formatReport(manager)`,changed:!0}],tip:"DRY（Don\\'t Repeat Yourself）是软件工程的基本原则。每一处重复都是未来 bug 的温床——改了一处忘了另一处，就是典型的重复代码事故。"},{name:"简化条件",description:"Simplify Conditional：用卫语句、策略模式等手法替代深层嵌套的 if-else，降低圈复杂度。",before:[{text:`function getDiscount(user) {
`},{text:`  if (user.type === "vip") {
    if (user.years > 5) {
      return 0.3
    } else {
      return 0.2
    }
  } else {
    if (user.years > 3) {
      return 0.1
    } else {
      return 0
    }
  }`,changed:!0},{text:`
}`}],after:[{text:`function getDiscount(user) {
`},{text:`  if (user.type === "vip" && user.years > 5) return 0.3
  if (user.type === "vip") return 0.2
  if (user.years > 3) return 0.1
  return 0`,changed:!0},{text:`
}`}],tip:"卫语句（Guard Clause）通过提前返回来消除嵌套。扁平的代码结构比深层嵌套更容易理解和维护。"}]},techWriting:{title:"技术写作对比 ── 点击切换案例",badTitle:"❌ 差的写法",goodTitle:"✅ 好的写法",tipsTitle:"改进要点：",cases:[{name:"函数注释",icon:"💬",bad:`// 处理数据
function process(d) {
  // ...
}`,good:`/**
 * 将原始订单数据转换为发票格式
 * @param {Order} order - 原始订单对象
 * @returns {Invoice} 格式化后的发票
 * @throws {ValidationError} 订单数据不完整时
 */
function toInvoice(order) {
  // ...
}`,tips:['说明"为什么"而非"是什么"',"标注参数类型和返回值","说明异常情况"]},{name:"API 说明",icon:"🔌",bad:`POST /api/users
发送用户数据创建用户。`,good:`POST /api/users
创建新用户账号。

请求体：
{
  "name": "张三",      // 必填，2-50字符
  "email": "a@b.com"  // 必填，有效邮箱
}

成功响应 201：
{ "id": "u_123", "name": "张三" }

错误响应 400：
{ "error": "邮箱格式无效" }`,tips:["提供完整的请求/响应示例","标注必填/选填","列出错误场景"]},{name:"变更日志",icon:"📝",bad:"v2.1 - 修了一些bug，加了新功能",good:`## v2.1.0 (2025-01-15)

### 新增
- 支持批量导出 PDF 格式报表

### 修复
- 修复登录页在 Safari 下白屏的问题 (#234)

### 变更
- 最低 Node.js 版本要求从 16 升至 18`,tips:["按类型分类（新增/修复/变更）","关联 Issue 编号","标注版本号和日期"]}]},decisionMatrix:{title:"决策矩阵",subtitle:"量化对比，科学选型",technologies:"待比较技术",addPlaceholder:"添加技术...",dimensionsTitle:"评估维度与权重",scoringTitle:"打分（1-5）",dimensionColumn:"维度",rankingTitle:"加权总分排名",reset:"重置全部",preset:"加载预设",usageTitle:"使用方法：",usage:"调整权重反映你的项目优先级，为每个技术在各维度打分，系统自动计算加权总分。权重越高的维度对最终结果影响越大。",dimensions:[{key:"learning",label:"学习曲线"},{key:"ecosystem",label:"生态系统"},{key:"performance",label:"性能"},{key:"community",label:"社区活跃度"},{key:"hiring",label:"招聘难度"}]},licenseComparison:{title:"开源许可证对比工具",needs:"我的需求：",clear:"清除筛选",recommendation:"推荐许可证：",licenseColumn:"许可证",yes:"允许",no:"不允许/限制",conditional:"有条件",permissions:[{id:"commercial",label:"商用"},{id:"modify",label:"修改"},{id:"distribute",label:"分发"},{id:"patent",label:"专利授权"},{id:"private",label:"私用"},{id:"copyleft",label:"需开源衍生"},{id:"liability",label:"免责"}],licenses:[{id:"mit",name:"MIT",summary:"最宽松，几乎无限制",perms:{commercial:!0,modify:!0,distribute:!0,patent:!1,private:!0,copyleft:!1,liability:!0},tags:["commercial","simple","private"]},{id:"apache2",name:"Apache 2.0",summary:"宽松 + 专利保护",perms:{commercial:!0,modify:!0,distribute:!0,patent:!0,private:!0,copyleft:!1,liability:!0},tags:["commercial","patent","private"]},{id:"gpl3",name:"GPL 3.0",summary:"强 Copyleft，衍生必须开源",perms:{commercial:!0,modify:!0,distribute:!0,patent:!0,private:!0,copyleft:!0,liability:!0},tags:["copyleft","patent"]},{id:"bsd2",name:"BSD 2-Clause",summary:"类似 MIT，极简宽松",perms:{commercial:!0,modify:!0,distribute:!0,patent:!1,private:!0,copyleft:!1,liability:!0},tags:["commercial","simple","private"]},{id:"mpl2",name:"MPL 2.0",summary:"文件级 Copyleft，折中方案",perms:{commercial:!0,modify:!0,distribute:!0,patent:!0,private:!0,copyleft:"cond",liability:!0},tags:["commercial","patent","copyleft"]}],filters:[{id:"commercial",label:"允许商用"},{id:"patent",label:"需要专利保护"},{id:"simple",label:"尽量简单"},{id:"copyleft",label:"要求衍生开源"},{id:"private",label:"允许闭源使用"}]},designPatternCatalog:{title:"设计模式图鉴 ── 点击分类查看常用模式",count:"{count} 个模式",when:"适用场景",code:"代码示例",categories:[{name:"创建型",icon:"🏗️",cls:"create",patterns:[{name:"单例模式 Singleton",intent:"确保一个类只有一个实例，并提供全局访问点。",when:"数据库连接池、全局配置管理、日志记录器。",code:`class Database {
  static instance = null
  static getInstance() {
    if (!this.instance) {
      this.instance = new Database()
    }
    return this.instance
  }
}`},{name:"工厂模式 Factory",intent:"定义创建对象的接口，让子类决定实例化哪个类。",when:"需要根据条件创建不同类型对象时。",code:`function createNotification(type) {
  switch (type) {
    case 'email': return new EmailNotify()
    case 'sms':   return new SmsNotify()
    case 'push':  return new PushNotify()
  }
}`}]},{name:"结构型",icon:"🧱",cls:"structure",patterns:[{name:"装饰器模式 Decorator",intent:"动态地给对象添加额外职责，比继承更灵活。",when:"需要在不修改原有代码的情况下扩展功能。",code:`function withLogging(fn) {
  return function(...args) {
    console.log('调用:', fn.name)
    return fn.apply(this, args)
  }
}
const save = withLogging(saveUser)`},{name:"适配器模式 Adapter",intent:"将一个接口转换成客户端期望的另一个接口。",when:"对接第三方 API、兼容旧系统接口。",code:`class OldApi { getData() { ... } }

class ApiAdapter {
  constructor(old) { this.old = old }
  fetch() { return this.old.getData() }
}`}]},{name:"行为型",icon:"🎭",cls:"behavior",patterns:[{name:"观察者模式 Observer",intent:"定义一对多依赖，当状态变化时自动通知所有依赖者。",when:"事件系统、状态管理、消息推送。",code:`class EventBus {
  listeners = {}
  on(event, fn) {
    (this.listeners[event] ||= []).push(fn)
  }
  emit(event, data) {
    this.listeners[event]?.forEach(fn => fn(data))
  }
}`},{name:"策略模式 Strategy",intent:"定义一系列算法，使它们可以互相替换。",when:"排序策略、支付方式、验证规则的切换。",code:`const strategies = {
  bubble: arr => { /* 冒泡排序 */ },
  quick:  arr => { /* 快速排序 */ },
  merge:  arr => { /* 归并排序 */ }
}
function sort(arr, type) {
  return strategies[type](arr)
}`}]}]},patternPlayground:{title:"设计模式演练场",subtitle:"选择模式，动手体验",observerDesc:"模拟事件发布/订阅：添加订阅者，发布事件，观察通知如何传播。",publisher:"📡 发布者 (Publisher)",eventPlaceholder:"输入事件消息...",publish:"发布事件",subscribers:"👥 订阅者",add:"+ 添加",emptySubscribers:'暂无订阅者，点击"添加"按钮',received:"收到: {message}",remove:"移除",eventLog:"📋 事件日志",strategyDesc:"选择不同的排序策略，观察同一组数据如何被不同算法处理。",dataTitle:"📊 待排序数据",shuffle:"🔀 打乱数据",strategyTitle:"⚙️ 选择策略",sorting:"排序中...",execute:"▶ 执行排序",stepsInfo:"步骤数: {count} | 策略: {strategy}",defaultEvent:"默认事件",subscribeLog:"[订阅] {name} 加入了订阅列表",unsubscribeLog:"[取消订阅] {name} 离开了",publishLog:'[发布] 事件: "{message}" → 通知 {count} 个订阅者',subNames:["小明","小红","小刚","小美","小李","小王","小张","小赵"],modes:[{key:"observer",name:"观察者模式",icon:"📡"},{key:"strategy",name:"策略模式",icon:"⚙️"}],sortStrategies:[{key:"bubble",name:"冒泡排序",complexity:"O(n²)"},{key:"selection",name:"选择排序",complexity:"O(n²)"},{key:"insertion",name:"插入排序",complexity:"O(n²)"}]},securityChecklist:{title:"项目安全检查清单",subtitle:"勾选已完成的安全措施，查看项目安全评分",scoreLabel:"安全评分",scoreValue:"{score}分",collapse:"收起",detail:"查看最佳实践",levels:{excellent:"优秀",pass:"及格",danger:"危险"},categories:[{icon:"🔍",name:"输入验证",open:!0,items:[{label:"所有用户输入在服务端进行校验",checked:!1,showDetail:!1,detail:"永远不要仅依赖前端校验。攻击者可以绕过浏览器直接发送请求，服务端必须对长度、类型、格式、范围做二次验证。"},{label:"使用白名单而非黑名单过滤",checked:!1,showDetail:!1,detail:'黑名单容易遗漏。应明确定义"允许什么"而非"禁止什么"，例如只允许字母数字而非试图过滤所有特殊字符。'},{label:"对文件上传进行类型和大小限制",checked:!1,showDetail:!1,detail:"校验文件 MIME 类型和扩展名，限制文件大小，将上传文件存储在 Web 根目录之外，使用随机文件名。"}]},{icon:"🔐",name:"认证授权",open:!1,items:[{label:"密码使用 bcrypt/argon2 哈希存储",checked:!1,showDetail:!1,detail:"绝不明文存储密码。使用自带盐值的慢哈希算法（bcrypt cost>=10 或 argon2id），抵御彩虹表和暴力破解。"},{label:"实施多因素认证 (MFA)",checked:!1,showDetail:!1,detail:"在密码之外增加第二因素（TOTP、短信、硬件密钥），即使密码泄露也能阻止未授权登录。"},{label:"接口实施最小权限访问控制",checked:!1,showDetail:!1,detail:"每个 API 端点都应检查用户角色和权限，确保用户只能访问自己有权操作的资源（RBAC / ABAC）。"},{label:"会话管理安全（超时、轮换）",checked:!1,showDetail:!1,detail:"登录后重新生成 Session ID，设置合理的过期时间，登出时销毁服务端会话。"}]},{icon:"🛡️",name:"数据保护",open:!1,items:[{label:"敏感数据加密存储",checked:!1,showDetail:!1,detail:"对数据库中的敏感字段（手机号、身份证等）使用 AES-256 等算法加密，密钥与数据分离存储。"},{label:"日志中不记录敏感信息",checked:!1,showDetail:!1,detail:"日志中不应出现密码、Token、信用卡号等。使用脱敏处理，如只记录手机号后四位。"},{label:"实施 SQL 注入防护（参数化查询）",checked:!1,showDetail:!1,detail:"所有数据库操作使用参数化查询或 ORM，绝不拼接 SQL 字符串。"}]},{icon:"🌐",name:"通信安全",open:!1,items:[{label:"全站启用 HTTPS",checked:!1,showDetail:!1,detail:"使用 TLS 1.2+ 加密所有通信，配置 HSTS 头强制 HTTPS，防止中间人攻击和数据窃听。"},{label:"设置安全响应头（CSP、X-Frame-Options）",checked:!1,showDetail:!1,detail:"配置 Content-Security-Policy 限制资源加载来源，X-Frame-Options 防止点击劫持，X-Content-Type-Options 防止 MIME 嗅探。"},{label:"Cookie 设置 HttpOnly / Secure / SameSite",checked:!1,showDetail:!1,detail:"HttpOnly 防止 JS 读取，Secure 确保仅 HTTPS 传输，SameSite=Lax 防止 CSRF 攻击。"}]}]},webSecurity:{title:"Web 安全漏洞演示（教育用途）── 点击切换漏洞类型",flowTitle:"攻击流程",badTitle:"❌ 有漏洞的代码",goodTitle:"✅ 修复后的代码",defense:"防御要点：",vulns:[{name:"XSS",icon:"💉",flow:["攻击者在输入框提交恶意脚本","服务器未过滤直接存入数据库","其他用户访问页面时脚本被执行","用户 Cookie/数据被窃取"],bad:`// 直接插入用户输入（危险！）
el.innerHTML = userInput
// 如果 userInput = '<scr' + 'ipt>steal(cookie)</scr' + 'ipt>'
// 脚本会被执行！`,good:`// 使用 textContent 安全插入
el.textContent = userInput
// 或使用框架自动转义
// Vue: {{ userInput }}  自动转义
// React: {userInput}    自动转义`,defense:"永远不要信任用户输入。使用框架自带的转义机制，避免 innerHTML，对输出进行编码。"},{name:"SQL 注入",icon:"🗄️",flow:["攻击者在登录框输入特殊字符串","字符串被拼接进 SQL 语句","数据库执行了被篡改的查询","攻击者绕过认证或获取数据"],bad:`// 字符串拼接 SQL（危险！）
const sql = "SELECT * FROM users " +
  "WHERE name='" + username + "'" +
  " AND pass='" + password + "'"
// 输入: admin' OR '1'='1
// 变成: WHERE name='admin' OR '1'='1'`,good:`// 使用参数化查询（安全）
const sql = "SELECT * FROM users " +
  "WHERE name = ? AND pass = ?"
db.query(sql, [username, password])
// 参数被安全转义，无法注入`,defense:"始终使用参数化查询或 ORM，永远不要拼接 SQL 字符串。"},{name:"CSRF",icon:"🎭",flow:["用户登录了银行网站（有 Cookie）","用户访问了恶意网站","恶意网站自动发起转账请求","浏览器自动携带 Cookie，请求成功"],bad:`<!-- 恶意网站的隐藏表单 -->
<form action="https://bank.com/transfer"
      method="POST" id="evil">
  <input name="to" value="attacker" />
  <input name="amount" value="10000" />
</form>
<script>document.getElementById('evil')
  .submit()<\/script>`,good:`// 服务端：生成并验证 CSRF Token
app.post('/transfer', (req, res) => {
  if (req.body.token !== req.session.csrf) {
    return res.status(403).send('拒绝')
  }
  // 执行转账...
})
// 同时设置 SameSite Cookie 属性`,defense:"使用 CSRF Token、设置 SameSite Cookie 属性、验证 Referer/Origin 头。"}]},techRadar:{title:"技术雷达 ── 点击技术点查看详情",ringLabel:"环位：{ring}",rings:[{name:"采纳",cls:"adopt"},{name:"试验",cls:"trial"},{name:"评估",cls:"assess"},{name:"暂缓",cls:"hold"}],categories:[{name:"语言",cls:"lang"},{name:"框架",cls:"framework"},{name:"工具",cls:"tool"},{name:"平台",cls:"platform"}],techs:[{name:"TypeScript",category:"lang",ring:"采纳",pos:{top:"42%",left:"30%"},desc:"类型安全的 JavaScript 超集，已成为前端项目标配。"},{name:"React",category:"framework",ring:"采纳",pos:{top:"35%",left:"55%"},desc:"生态最丰富的前端框架，适合大型团队和复杂应用。"},{name:"Vue",category:"framework",ring:"采纳",pos:{top:"50%",left:"45%"},desc:"渐进式框架，学习曲线平缓，中文社区活跃。"},{name:"Go",category:"lang",ring:"采纳",pos:{top:"55%",left:"32%"},desc:"高并发后端首选，编译快、部署简单。"},{name:"Rust",category:"lang",ring:"试验",pos:{top:"30%",left:"22%"},desc:"内存安全无 GC，适合系统编程和高性能场景，学习曲线陡峭。"},{name:"Svelte",category:"framework",ring:"试验",pos:{top:"25%",left:"60%"},desc:"编译时框架，无虚拟 DOM，包体积极小。"},{name:"Bun",category:"tool",ring:"评估",pos:{top:"18%",left:"42%"},desc:"新一代 JS 运行时，速度极快但生态尚在完善。"},{name:"Deno",category:"platform",ring:"评估",pos:{top:"15%",left:"55%"},desc:"安全优先的 JS/TS 运行时，内置工具链。"},{name:"jQuery",category:"framework",ring:"暂缓",pos:{top:"8%",left:"38%"},desc:"历史功臣，但现代框架已全面替代，新项目不建议使用。"}]}},t={codeSmell:{title:"Code Smell Detector - click to switch examples",problemCode:"Problem code",suggestion:"Improvement:",smells:[{name:"Long function",icon:"📏",cls:"red",desc:"A function exceeds 50 lines, does too many things, and becomes hard to understand and test.",bad:`function processOrder(order) {
  // Validate order... (20 lines)
  // Calculate price... (15 lines)
  // Check inventory... (10 lines)
  // Send notification... (15 lines)
  // Update database... (10 lines)
  // Generate report... (10 lines)
  // 80+ lines in total!
}`,fix:"Split the large function into focused functions such as validateOrder(), calculatePrice(), and checkInventory()."},{name:"Magic numbers",icon:"🔢",cls:"orange",desc:"Raw numeric literals appear in code without clear meaning, so readers cannot tell what they represent.",bad:`if (user.age >= 18) { ... }
if (password.length < 8) { ... }
if (retryCount > 3) { ... }
setTimeout(fn, 86400000)`,fix:"Replace them with named constants: const ADULT_AGE = 18, const MIN_PASSWORD_LENGTH = 8, const ONE_DAY_MS = 86400000."},{name:"Duplicated code",icon:"📋",cls:"yellow",desc:"The same or similar code appears in multiple places, making future changes easy to miss.",bad:`// File A
const tax = price * 0.13
const total = price + tax

// File B (almost the same)
const tax = amount * 0.13
const sum = amount + tax`,fix:"Extract a shared calculateTax(amount) function and reuse it in all places."},{name:"Deep nesting",icon:"🪆",cls:"purple",desc:"Many layers of if/for nesting make code hard to read and turn control flow into a maze.",bad:`if (user) {
  if (user.isActive) {
    if (user.hasPermission) {
      if (order.isValid) {
        // The real logic finally starts...
      }
    }
  }
}`,fix:"Use guard clauses to return early: if (!user) return; if (!user.isActive) return; ..."}]},docStructure:{title:"Documentation structure template - click to switch document types",docs:[{name:"README",icon:"📖",sections:[{name:"Project name + one-line description",desc:"Let readers understand what the project is within 3 seconds.",example:`# MyApp
> A lightweight task management tool`},{name:"Quick start",desc:"Give users the shortest path to run it, usually install plus run commands.",example:`npm install myapp
npx myapp init`},{name:"Features",desc:"List core features so users can judge whether it fits their needs.",example:`- ✅ Task board
- ✅ Team collaboration
- ✅ Data export`},{name:"Usage examples",desc:"Show typical usage with code snippets, which are clearer than prose.",example:null},{name:"Contributing + license",desc:"Explain how to contribute and which open-source license applies.",example:null}]},{name:"API docs",icon:"🔌",sections:[{name:"API overview",desc:"Explain the base URL, authentication method, and common parameters.",example:`Base URL: https://api.example.com/v1
Auth: Bearer Token`},{name:"Request parameters",desc:"Use a table for parameter name, type, required status, and description.",example:`| Param  | Type   | Required | Description |
| name   | string | Yes      | User name   |`},{name:"Response format",desc:"Show successful and failed JSON response examples.",example:'{ "code": 200, "data": { ... } }'},{name:"Error codes",desc:"List possible error codes and their meanings.",example:`401 - Unauthorized
404 - Resource not found
429 - Too many requests`}]},{name:"Architecture docs",icon:"🏛️",sections:[{name:"System overview",desc:"Summarize the system goal, boundaries, and core constraints.",example:null},{name:"Architecture diagram",desc:"Show the overall architecture, modules, and relationships.",example:`[Client] → [API Gateway] → [Microservice Cluster]
                    ↓
              [Database Cluster]`},{name:"Technology choices",desc:"Explain key technology decisions and compare alternatives.",example:null},{name:"Deployment architecture",desc:"Explain production deployment and scaling strategy.",example:null}]}]},openSourceWorkflow:{title:"Open-source contribution workflow - click a step for details",commandTitle:"Command",previous:"Previous",next:"Next",steps:[{name:"Fork",icon:"🍴",desc:"Fork the target repository on GitHub into your own account to get a full copy.",cmd:"# Click the Fork button on GitHub"},{name:"Clone",icon:"📥",desc:"Clone your forked repository into the local development environment.",cmd:`git clone https://github.com/your-name/project.git
cd project`},{name:"Branch",icon:"🌿",desc:"Create a feature branch instead of working directly on main. The branch name should describe the work.",cmd:"git checkout -b fix/login-bug"},{name:"Commit",icon:"💾",desc:"Commit after finishing the change. Write a clear commit message and follow the project convention.",cmd:`git add .
git commit -m "fix: fix blank login page"`},{name:"Push",icon:"🚀",desc:"Push the local branch to your forked remote repository.",cmd:"git push origin fix/login-bug"},{name:"PR",icon:"📬",desc:"Create a Pull Request on GitHub and describe the change, linked issue, and test method.",cmd:'# Click "New Pull Request" on GitHub'},{name:"Review",icon:"👀",desc:"Maintainers review your code and may request changes. Update the branch and push again.",cmd:`git add . && git commit -m "fix: address review feedback"
git push`},{name:"Merge",icon:"🎉",desc:"After approval, maintainers merge your PR. You are now a project contributor.",cmd:"# Maintainer action: Merge Pull Request"}]},tddCycle:{title:"TDD red-green-refactor cycle - click “Next” to advance",stepBadge:"Step {current} / {total}",previous:"Previous",next:"Next",reset:"Reset",phases:[{name:"Red",icon:"🔴",cls:"red"},{name:"Green",icon:"🟢",cls:"green"},{name:"Refactor",icon:"🔵",cls:"blue"}],steps:[{phase:"🔴 Red - write a failing test first",cls:"red",desc:"Requirement: implement add(a, b). The first TDD step is not implementation, but writing a test.",fileLabel:"add.test.js",code:`test('add(1, 2) should return 3', () => {
  expect(add(1, 2)).toBe(3)
})`,result:"❌ Test failed - add is not defined"},{phase:"🟢 Green - write the smallest passing implementation",cls:"green",desc:"Do not chase perfection. Write only enough code to pass the test.",fileLabel:"add.js",code:`function add(a, b) {
  return a + b
}`,result:"✅ Test passed!"},{phase:"🔵 Refactor - improve the code",cls:"blue",desc:"After tests pass, improve the code safely. Tests are your safety net.",fileLabel:"add.js",code:"const add = (a, b) => a + b",result:"✅ Refactor complete, tests still pass!"},{phase:"🔴 Red - add a test for a new requirement",cls:"red",desc:"New requirement: add should handle numeric strings. Continue the loop.",fileLabel:"add.test.js",code:`test('add("1", "2") should return 3', () => {
  expect(add('1', '2')).toBe(3)
})`,result:'❌ Test failed - returned "12" instead of 3'},{phase:"🟢 Green - fix the implementation",cls:"green",desc:"Update the implementation to handle string inputs.",fileLabel:"add.js",code:"const add = (a, b) => Number(a) + Number(b)",result:"✅ All tests pass!"}]},testPyramid:{title:"Interactive test pyramid - click each layer for details",example:"Example:",upperLegend:"Higher: slower, more expensive, closer to users",lowerLegend:"Lower: faster, more numerous, closer to code",detailRows:[{key:"count",label:"Share"},{key:"speed",label:"Execution speed"},{key:"cost",label:"Maintenance cost"},{key:"scope",label:"Coverage scope"},{key:"confidence",label:"Confidence"}],layers:[{name:"E2E tests",cls:"e2e",icon:"🖥️",width:"40%",count:"About 10%",speed:"Slow (seconds to minutes)",cost:"High - many environment dependencies, fragile",scope:"Complete user flows",confidence:"Highest - simulates real user behavior",example:"Use Playwright to simulate login → order → payment."},{name:"Integration tests",cls:"integration",icon:"🔗",width:"60%",count:"About 20%",speed:"Medium (hundreds of milliseconds)",cost:"Medium - needs some external dependencies",scope:"Collaboration between modules",confidence:"High - verifies components work together",example:"Test that an API can read/write the database and return expected JSON."},{name:"Unit tests",cls:"unit",icon:"🧪",width:"85%",count:"About 70%",speed:"Very fast (milliseconds)",cost:"Low - no external dependencies",scope:"Single function or class",confidence:"Baseline - verifies each small part works",example:'Test whether formatPrice(100) returns "¥1.00".'}]},refactoring:{title:"Refactoring technique comparison - choose a technique to compare before and after",before:"Before",after:"After",tip:"Key point:",techniques:[{name:"Extract function",description:"Extract Function: move a code block out of a large function into a clearly named new function.",before:[{text:`function printReport(invoice) {
  console.log("=== Invoice ===")
`},{text:`  // Calculate total
  let total = 0
  for (let item of invoice.items) {
    total += item.price * item.qty
  }
`,changed:!0},{text:"  console.log(`Total: ${total}`)\n}"}],after:[{text:`function printReport(invoice) {
  console.log("=== Invoice ===")
`},{text:`  const total = calcTotal(invoice.items)
`,changed:!0},{text:"  console.log(`Total: ${total}`)\n}\n\n"},{text:`function calcTotal(items) {
  return items.reduce(
    (s, i) => s + i.price * i.qty, 0
  )
}`,changed:!0}],tip:"Extract Function is one of the most common refactorings. A good function name is the best comment."},{name:"Rename variable",description:"Rename Variable: replace vague names with clear, meaningful names so code explains itself.",before:[{text:"function calc(",changed:!0},{text:"a, b, c",changed:!0},{text:`) {
`},{text:`  const d = a * b
  const e = d * (1 - c)
  return e
}`,changed:!0}],after:[{text:"function calcOrderTotal(",changed:!0},{text:"price, quantity, discountRate",changed:!0},{text:`) {
`},{text:`  const subtotal = price * quantity
  const total = subtotal * (1 - discountRate)
  return total
}`,changed:!0}],tip:"Naming is a core engineering skill. Good names make code read like prose; poor names make it feel encrypted."},{name:"Remove duplication",description:"Remove Duplication: extract repeated logic into shared functions or templates and follow DRY.",before:[{text:`// Employee report
function empReport(emp) {
`},{text:"  return `${emp.name} | ${emp.dept} | ${emp.salary}`",changed:!0},{text:`
}

// Manager report
function mgrReport(mgr) {
`},{text:"  return `${mgr.name} | ${mgr.dept} | ${mgr.salary}`",changed:!0},{text:`
}`}],after:[{text:""},{text:"function formatReport(person) {\n  return `${person.name} | ${person.dept} | ${person.salary}`\n}",changed:!0},{text:`

// Unified call
`},{text:`formatReport(employee)
formatReport(manager)`,changed:!0}],tip:"DRY is a basic software engineering principle. Every duplication is a future bug risk."},{name:"Simplify conditionals",description:"Simplify Conditional: replace deeply nested if/else code with guard clauses or strategies to reduce complexity.",before:[{text:`function getDiscount(user) {
`},{text:`  if (user.type === "vip") {
    if (user.years > 5) {
      return 0.3
    } else {
      return 0.2
    }
  } else {
    if (user.years > 3) {
      return 0.1
    } else {
      return 0
    }
  }`,changed:!0},{text:`
}`}],after:[{text:`function getDiscount(user) {
`},{text:`  if (user.type === "vip" && user.years > 5) return 0.3
  if (user.type === "vip") return 0.2
  if (user.years > 3) return 0.1
  return 0`,changed:!0},{text:`
}`}],tip:"Guard clauses remove nesting through early returns. Flat code is easier to read and maintain."}]},techWriting:{title:"Technical writing comparison - click to switch cases",badTitle:"❌ Poor writing",goodTitle:"✅ Better writing",tipsTitle:"Improvement points:",cases:[{name:"Function comments",icon:"💬",bad:`// Process data
function process(d) {
  // ...
}`,good:`/**
 * Convert raw order data into invoice format.
 * @param {Order} order - Raw order object
 * @returns {Invoice} Formatted invoice
 * @throws {ValidationError} When order data is incomplete
 */
function toInvoice(order) {
  // ...
}`,tips:["Explain why, not just what","Document parameter and return types","Describe exceptional cases"]},{name:"API description",icon:"🔌",bad:`POST /api/users
Send user data to create a user.`,good:`POST /api/users
Create a new user account.

Request body:
{
  "name": "Alice",     // required, 2-50 chars
  "email": "a@b.com"  // required, valid email
}

Success response 201:
{ "id": "u_123", "name": "Alice" }

Error response 400:
{ "error": "Invalid email format" }`,tips:["Provide complete request/response examples","Mark required and optional fields","List error scenarios"]},{name:"Changelog",icon:"📝",bad:"v2.1 - fixed some bugs and added features",good:`## v2.1.0 (2025-01-15)

### Added
- Support batch export of reports in PDF format

### Fixed
- Fix blank login page in Safari (#234)

### Changed
- Minimum Node.js version raised from 16 to 18`,tips:["Group by change type","Link related issue numbers","Include version and date"]}]},decisionMatrix:{title:"Decision Matrix",subtitle:"Quantify tradeoffs for technology selection",technologies:"Technologies to compare",addPlaceholder:"Add technology...",dimensionsTitle:"Evaluation dimensions and weights",scoringTitle:"Scores (1-5)",dimensionColumn:"Dimension",rankingTitle:"Weighted total ranking",reset:"Reset all",preset:"Load preset",usageTitle:"How to use:",usage:"Adjust weights to reflect project priorities, score each technology on each dimension, and the matrix calculates weighted totals automatically. Higher-weight dimensions affect the final result more.",dimensions:[{key:"learning",label:"Learning curve"},{key:"ecosystem",label:"Ecosystem"},{key:"performance",label:"Performance"},{key:"community",label:"Community activity"},{key:"hiring",label:"Hiring difficulty"}]},licenseComparison:{title:"Open-source license comparison tool",needs:"My needs:",clear:"Clear filters",recommendation:"Recommended license:",licenseColumn:"License",yes:"Allowed",no:"Not allowed / limited",conditional:"Conditional",permissions:[{id:"commercial",label:"Commercial use"},{id:"modify",label:"Modify"},{id:"distribute",label:"Distribute"},{id:"patent",label:"Patent grant"},{id:"private",label:"Private use"},{id:"copyleft",label:"Open derivatives"},{id:"liability",label:"Liability waiver"}],licenses:[{id:"mit",name:"MIT",summary:"Very permissive, almost no restrictions",perms:{commercial:!0,modify:!0,distribute:!0,patent:!1,private:!0,copyleft:!1,liability:!0},tags:["commercial","simple","private"]},{id:"apache2",name:"Apache 2.0",summary:"Permissive plus patent protection",perms:{commercial:!0,modify:!0,distribute:!0,patent:!0,private:!0,copyleft:!1,liability:!0},tags:["commercial","patent","private"]},{id:"gpl3",name:"GPL 3.0",summary:"Strong copyleft, derivatives must be open source",perms:{commercial:!0,modify:!0,distribute:!0,patent:!0,private:!0,copyleft:!0,liability:!0},tags:["copyleft","patent"]},{id:"bsd2",name:"BSD 2-Clause",summary:"Similar to MIT, minimal and permissive",perms:{commercial:!0,modify:!0,distribute:!0,patent:!1,private:!0,copyleft:!1,liability:!0},tags:["commercial","simple","private"]},{id:"mpl2",name:"MPL 2.0",summary:"File-level copyleft, a middle ground",perms:{commercial:!0,modify:!0,distribute:!0,patent:!0,private:!0,copyleft:"cond",liability:!0},tags:["commercial","patent","copyleft"]}],filters:[{id:"commercial",label:"Allow commercial use"},{id:"patent",label:"Need patent protection"},{id:"simple",label:"Keep it simple"},{id:"copyleft",label:"Require open derivatives"},{id:"private",label:"Allow closed-source use"}]},designPatternCatalog:{title:"Design pattern catalog - click a category to view common patterns",count:"{count} patterns",when:"Use cases",code:"Code example",categories:[{name:"Creational",icon:"🏗️",cls:"create",patterns:[{name:"Singleton",intent:"Ensure a class has only one instance and provide a global access point.",when:"Database connection pools, global configuration, loggers.",code:`class Database {
  static instance = null
  static getInstance() {
    if (!this.instance) {
      this.instance = new Database()
    }
    return this.instance
  }
}`},{name:"Factory",intent:"Define an interface for creating objects and let subclasses decide which class to instantiate.",when:"When different object types must be created based on conditions.",code:`function createNotification(type) {
  switch (type) {
    case 'email': return new EmailNotify()
    case 'sms':   return new SmsNotify()
    case 'push':  return new PushNotify()
  }
}`}]},{name:"Structural",icon:"🧱",cls:"structure",patterns:[{name:"Decorator",intent:"Add responsibilities to objects dynamically, with more flexibility than inheritance.",when:"When behavior must be extended without modifying existing code.",code:`function withLogging(fn) {
  return function(...args) {
    console.log('call:', fn.name)
    return fn.apply(this, args)
  }
}
const save = withLogging(saveUser)`},{name:"Adapter",intent:"Convert one interface into another interface expected by clients.",when:"Integrating third-party APIs or supporting legacy interfaces.",code:`class OldApi { getData() { ... } }

class ApiAdapter {
  constructor(old) { this.old = old }
  fetch() { return this.old.getData() }
}`}]},{name:"Behavioral",icon:"🎭",cls:"behavior",patterns:[{name:"Observer",intent:"Define one-to-many dependencies so dependents are notified automatically when state changes.",when:"Event systems, state management, message push.",code:`class EventBus {
  listeners = {}
  on(event, fn) {
    (this.listeners[event] ||= []).push(fn)
  }
  emit(event, data) {
    this.listeners[event]?.forEach(fn => fn(data))
  }
}`},{name:"Strategy",intent:"Define a family of algorithms and make them interchangeable.",when:"Switching sorting strategies, payment methods, or validation rules.",code:`const strategies = {
  bubble: arr => { /* bubble sort */ },
  quick:  arr => { /* quick sort */ },
  merge:  arr => { /* merge sort */ }
}
function sort(arr, type) {
  return strategies[type](arr)
}`}]}]},patternPlayground:{title:"Design Pattern Playground",subtitle:"Choose a pattern and try it",observerDesc:"Simulate event publish/subscribe: add subscribers, publish an event, and observe how notifications spread.",publisher:"📡 Publisher",eventPlaceholder:"Enter event message...",publish:"Publish event",subscribers:"👥 Subscribers",add:"+ Add",emptySubscribers:'No subscribers yet. Click "Add".',received:"Received: {message}",remove:"Remove",eventLog:"📋 Event log",strategyDesc:"Choose different sorting strategies and observe how the same data is processed.",dataTitle:"📊 Data to sort",shuffle:"🔀 Shuffle data",strategyTitle:"⚙️ Choose strategy",sorting:"Sorting...",execute:"▶ Run sort",stepsInfo:"Steps: {count} | Strategy: {strategy}",defaultEvent:"Default event",subscribeLog:"[Subscribe] {name} joined the subscriber list",unsubscribeLog:"[Unsubscribe] {name} left",publishLog:'[Publish] Event: "{message}" → notify {count} subscribers',subNames:["Alex","Blake","Casey","Dana","Evan","Finley","Gray","Harper"],modes:[{key:"observer",name:"Observer pattern",icon:"📡"},{key:"strategy",name:"Strategy pattern",icon:"⚙️"}],sortStrategies:[{key:"bubble",name:"Bubble sort",complexity:"O(n²)"},{key:"selection",name:"Selection sort",complexity:"O(n²)"},{key:"insertion",name:"Insertion sort",complexity:"O(n²)"}]},securityChecklist:{title:"Project Security Checklist",subtitle:"Check completed safeguards and view the project security score",scoreLabel:"Security score",scoreValue:"{score} pts",collapse:"Collapse",detail:"View best practices",levels:{excellent:"Excellent",pass:"Pass",danger:"Danger"},categories:[{icon:"🔍",name:"Input validation",open:!0,items:[{label:"Validate all user input on the server",checked:!1,showDetail:!1,detail:"Never rely only on frontend validation. Attackers can bypass the browser and send requests directly, so the server must validate length, type, format, and range."},{label:"Use allowlists instead of blocklists",checked:!1,showDetail:!1,detail:"Blocklists are easy to miss. Define what is allowed instead of trying to filter every dangerous character."},{label:"Limit uploaded file type and size",checked:!1,showDetail:!1,detail:"Validate MIME type and extension, limit file size, store uploads outside the web root, and use randomized filenames."}]},{icon:"🔐",name:"Authentication and authorization",open:!1,items:[{label:"Store passwords with bcrypt/argon2 hashes",checked:!1,showDetail:!1,detail:"Never store plaintext passwords. Use slow salted hashes such as bcrypt cost>=10 or argon2id to resist brute force and rainbow tables."},{label:"Enable multi-factor authentication (MFA)",checked:!1,showDetail:!1,detail:"Add a second factor such as TOTP, SMS, or hardware keys so leaked passwords do not immediately grant access."},{label:"Apply least-privilege access control to APIs",checked:!1,showDetail:!1,detail:"Every API endpoint should check roles and permissions so users only access resources they are allowed to operate on."},{label:"Secure session management (timeout and rotation)",checked:!1,showDetail:!1,detail:"Regenerate the session ID after login, set reasonable expiration, and destroy server-side sessions on logout."}]},{icon:"🛡️",name:"Data protection",open:!1,items:[{label:"Encrypt sensitive data at rest",checked:!1,showDetail:!1,detail:"Encrypt sensitive database fields such as phone numbers or IDs with algorithms such as AES-256, and store keys separately."},{label:"Do not record sensitive information in logs",checked:!1,showDetail:!1,detail:"Logs should not include passwords, tokens, or credit card numbers. Mask values, such as keeping only the last four phone digits."},{label:"Prevent SQL injection with parameterized queries",checked:!1,showDetail:!1,detail:"Use parameterized queries or an ORM for all database operations. Never concatenate SQL strings."}]},{icon:"🌐",name:"Communication security",open:!1,items:[{label:"Enable HTTPS site-wide",checked:!1,showDetail:!1,detail:"Use TLS 1.2+ for all communication and configure HSTS to force HTTPS."},{label:"Set secure response headers (CSP, X-Frame-Options)",checked:!1,showDetail:!1,detail:"Configure Content-Security-Policy to limit resource origins, X-Frame-Options to prevent clickjacking, and X-Content-Type-Options to prevent MIME sniffing."},{label:"Set Cookie HttpOnly / Secure / SameSite",checked:!1,showDetail:!1,detail:"HttpOnly blocks JavaScript access, Secure restricts transmission to HTTPS, and SameSite=Lax helps prevent CSRF."}]}]},webSecurity:{title:"Web security vulnerability demo (educational) - click to switch vulnerability type",flowTitle:"Attack flow",badTitle:"❌ Vulnerable code",goodTitle:"✅ Fixed code",defense:"Defense:",vulns:[{name:"XSS",icon:"💉",flow:["Attacker submits malicious script in an input field","Server stores it without filtering","Script runs when another user opens the page","User cookies or data are stolen"],bad:`// Directly inserting user input (dangerous!)
el.innerHTML = userInput
// If userInput = '<scr' + 'ipt>steal(cookie)</scr' + 'ipt>'
// the script will execute!`,good:`// Insert safely with textContent
el.textContent = userInput
// Or use framework escaping
// Vue: {{ userInput }}  escaped automatically
// React: {userInput}    escaped automatically`,defense:"Never trust user input. Use framework escaping, avoid innerHTML, and encode output."},{name:"SQL injection",icon:"🗄️",flow:["Attacker enters a special string in the login form","The string is concatenated into SQL","The database executes a modified query","Attacker bypasses auth or reads data"],bad:`// SQL string concatenation (dangerous!)
const sql = "SELECT * FROM users " +
  "WHERE name='" + username + "'" +
  " AND pass='" + password + "'"
// Input: admin' OR '1'='1
// Becomes: WHERE name='admin' OR '1'='1'`,good:`// Parameterized query (safe)
const sql = "SELECT * FROM users " +
  "WHERE name = ? AND pass = ?"
db.query(sql, [username, password])
// Parameters are escaped safely and cannot inject SQL`,defense:"Always use parameterized queries or an ORM. Never concatenate SQL strings."},{name:"CSRF",icon:"🎭",flow:["User logs into a bank site with cookies","User visits a malicious site","The malicious site submits a transfer request","Browser sends cookies automatically and the request succeeds"],bad:`<!-- Hidden form on malicious site -->
<form action="https://bank.com/transfer"
      method="POST" id="evil">
  <input name="to" value="attacker" />
  <input name="amount" value="10000" />
</form>
<script>document.getElementById('evil')
  .submit()<\/script>`,good:`// Server: generate and verify CSRF token
app.post('/transfer', (req, res) => {
  if (req.body.token !== req.session.csrf) {
    return res.status(403).send('Forbidden')
  }
  // Execute transfer...
})
// Also set SameSite cookie attributes`,defense:"Use CSRF tokens, set SameSite cookies, and validate Referer/Origin headers."}]},techRadar:{title:"Technology radar - click a technology for details",ringLabel:"Ring: {ring}",rings:[{name:"Adopt",cls:"adopt"},{name:"Trial",cls:"trial"},{name:"Assess",cls:"assess"},{name:"Hold",cls:"hold"}],categories:[{name:"Language",cls:"lang"},{name:"Framework",cls:"framework"},{name:"Tool",cls:"tool"},{name:"Platform",cls:"platform"}],techs:[{name:"TypeScript",category:"lang",ring:"Adopt",pos:{top:"42%",left:"30%"},desc:"A type-safe JavaScript superset that has become a default choice for frontend projects."},{name:"React",category:"framework",ring:"Adopt",pos:{top:"35%",left:"55%"},desc:"The richest frontend ecosystem, suitable for large teams and complex applications."},{name:"Vue",category:"framework",ring:"Adopt",pos:{top:"50%",left:"45%"},desc:"A progressive framework with a gentle learning curve and strong Chinese community."},{name:"Go",category:"lang",ring:"Adopt",pos:{top:"55%",left:"32%"},desc:"A strong backend choice for high concurrency, fast builds, and simple deployment."},{name:"Rust",category:"lang",ring:"Trial",pos:{top:"30%",left:"22%"},desc:"Memory safety without GC, suitable for systems programming and high-performance scenarios, but harder to learn."},{name:"Svelte",category:"framework",ring:"Trial",pos:{top:"25%",left:"60%"},desc:"A compile-time framework with no virtual DOM and a very small bundle size."},{name:"Bun",category:"tool",ring:"Assess",pos:{top:"18%",left:"42%"},desc:"A next-generation JS runtime with excellent speed but a still-maturing ecosystem."},{name:"Deno",category:"platform",ring:"Assess",pos:{top:"15%",left:"55%"},desc:"A security-first JS/TS runtime with built-in tooling."},{name:"jQuery",category:"framework",ring:"Hold",pos:{top:"8%",left:"38%"},desc:"Historically important, but modern frameworks have replaced it for new projects."}]}},a={"zh-cn":e,en:t};export{a as e};
