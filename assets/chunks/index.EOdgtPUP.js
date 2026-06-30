const e={quickStart:{title:"🤖 LLM 初体验：从闲聊到业务实战",subtitle:"大模型不仅能聊天，更是生产力工具。试试看它如何处理这些业务需求：",empty:"请选择一个业务场景开始体验",generating:"正在思考业务逻辑并生成 Token...",fallback:"正在思考...",questions:[{icon:"🤔",text:"给我想一个请假的理由",type:"casual",isCode:!1,answer:"老板，我感觉身体不适，可能是昨天写代码太投入，CPU（大脑）过热导致系统（身体）宕机了，申请重启（休息）一天。"},{icon:"🐍",text:"帮我写一个 Python 爬虫",type:"code",isCode:!0,answer:`import requests
from bs4 import BeautifulSoup

def fetch_titles(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # 提取所有 h1 标签
    titles = [tag.text.strip() for tag in soup.find_all('h1')]
    return titles

# 使用示例
url = "https://example.com"
print(f"正在爬取 {url} 的标题...")
# titles = fetch_titles(url)
# print(titles)`},{icon:"🎩",text:"用鲁迅的语气夸我",type:"casual",isCode:!1,answer:"我向来是不惮以最坏的恶意来推测中国人的，然而我还不料，也不信竟会遇见这样优秀的人。你的代码，很有几分风骨。"},{icon:"📊",text:"分析这份销售数据的趋势",type:"analysis",isCode:!1,answer:`基于您提供的数据，我发现以下几个关键趋势：

1. 📈 **总体增长**：Q3 销售额同比增长了 25%，主要得益于线上渠道的爆发。
2. ⚠️ **库存预警**：热销品类 A 的周转天数已降至 5 天，建议立即补货。
3. 💡 **潜力市场**：华南地区的转化率（3.2%）显著高于平均水平，建议加大该区域的广告投放。`},{icon:"📝",text:"为这款咖啡杯写一段小红书文案",type:"marketing",isCode:!1,answer:`☕️ **早八人的续命神器！这款咖啡杯真的太懂我了**

家人们谁懂啊！😭 作为一个每天靠咖啡续命的打工人，终于挖到了这款宝藏杯子！

✨ **颜值绝绝子**：奶油白配色，拿在手里就是妥妥的 ins 风，摆在工位上心情都变好了！
🌡️ **保温超长待机**：早上泡的冰美式，下午还是冰冰凉，这也太适合夏天了吧！
🔒 **密封不漏水**：直接塞包里也不怕洒，挤地铁必备！

👇 评论区蹲一个链接，带你一起实现咖啡自由！ #好物分享 #高颜值水杯 #打工人日常`}]},tokenization:{labels:{input:"Input Text / 输入文本",algorithm:"Algorithm / 算法",characters:"Characters / 字符",note:"Note:",tokenId:"ID",tokenType:"Type"},placeholder:"Type something to see how AI reads it...",sampleText:`The quick brown fox jumps over the lazy dog. 
今天天气真不错！`,note:'LLM 不直接理解单词，它们处理的是数字（Token IDs）。对于英文，一个 Token 通常是一个单词或单词的一部分（如 "ing"）；对于中文，一个 Token 通常是一个汉字或词组。'},embedding:{modes:[{id:"cluster",label:"语义聚类",desc:"语义相近的词在空间中距离更近。"},{id:"analogy",label:"向量算术",desc:"King - Man + Woman ≈ Queen (方向平行)"}]},matrix:{inputPlaceholder:"输入一段文本...",prev:"← 上一步",next:"下一步 →",sampleText:"我爱人工智能",steps:[{title:"Step 1: Tokenization (分词)",desc:"计算机首先将文本切分为最小的语义单位（Token）。",note:"注：此处演示简化为按字切分，真实模型通常使用 BPE 算法，如“人工智能”可能合并为一个 Token"},{title:"Step 2: ID Mapping (索引映射)",desc:"在词表（Vocabulary）中查找每个 Token 对应的唯一数字 ID。"},{title:"Step 3: Embedding Lookup (向量查表)",desc:"每个 ID 对应一个预训练好的高维向量（这里简化为 4 维）。"},{title:"Step 4: Matrix Construction (构建矩阵)",desc:"所有向量堆叠在一起，形成了输入矩阵（Shape: [Batch, Seq_Len, Dim]）。这就是 LLM 真正“看见”的东西。"}]},thinking:{modes:{fast:"⚡️ 传统快思考 (System 1)",slow:"🧠 深度慢思考 (System 2)"},questionLabel:"用户提问:",question:"9.11 和 9.9 哪个大？",thoughtTitle:"💭 思考过程 (Chain of Thought)",generating:"生成中...",start:"开始生成",metrics:{tokens:"Token 消耗:",time:"耗时:",accuracy:"准确率:",wrong:"❌ 错误",correct:"✅ 正确"},fastOutput:"9.11 比 9.9 大。",slowThoughts:`首先比较整数部分，都是9，相等。
接下来比较小数部分。
9.11 的小数部分是 0.11。
9.9 的小数部分是 0.9。
比较第一位小数：1 < 9。
所以 0.11 小于 0.9。
结论：9.11 小于 9.9。`,slowOutput:"9.11 比 9.9 小。"},rnnTransformer:{rnnDesc:'RNN 从左到右逐个读取。注意看 Memory（记忆），随着句子变长，最早的信息（"The"）可能会被后面的信息冲淡，这就是“长距离依赖”问题。',hoverTip:"👆 鼠标悬停在任意单词上，查看它在“关注”谁。",transformerDescPrefix:"Transformer 一眼看完整个句子（并行）。Self-Attention 机制让每个词都能直接“看见”其他词，无论距离多远。",transformerExample:'例如：悬停在 "it" 上，你会发现它强烈关注 "animal"，因为它指代的就是 animal。'},linearAttention:{modes:{standard:"标准 Attention (网状连接)",linear:"线性 Attention (接力传递)"},participantCount:"参与者数量 (N): {n}",operations:"连接/操作次数",standardDesc:"每个人都要找其他人。N={n} 时，连接数高达 {count}！",linearDesc:"每个人只传给下一个人。N={n} 时，操作数仅为 {count}。",title:"💡 核心区别：要不要回头看？",standardTitle:"回看模式 (Retrospective)：",standardBody:"想象你在考试。每做一道新题，你都要把之前做过的所有题目再检查一遍，确认有没有关联。题目越多，你需要检查的次数就越多，最后累死在检查上。",linearTitle:"状态模式 (Recurrent)：",linearBody:"想象你在跑步。你不需要记得前 100 步每一步踩在哪，你只需要知道现在的速度和位置（State）。跑第 1000 步和跑第 1 步一样轻松，因为你不需要回头。"},moe:{modes:{dense:"Dense (传统模型)",moe:"MoE (混合专家)"},descriptions:{dense:"全能天才：每个 Token 都激活所有神经元 (100% 激活)",moe:"专家团队：每个 Token 路由给特定专家 (Token-Level Routing)"},labels:{selectInput:"1. 选择输入 (Select Input)",currentToken:"Current Token:",processing:"2. 模型处理 (Processing)",generating:"生成中...",activation:"🔥 激活率: 100% (All Parameters)",router:"Router (Token 分发)",output:"3. 逐步生成 (Output Stream)",placeholder:"点击运行查看生成过程...",generatingButton:"正在生成 (Generating)...",runButton:"▶️ 开始生成 (Run Generation)"},tasks:[{label:"Python 代码示例",icon:"🐍"},{label:"科幻小说片段",icon:"🚀"}]},training:{tabs:[{id:"completion",label:"1. 本能：续写",icon:"✍️"},{id:"chat",label:"2. 技巧：对话",icon:"🎭"},{id:"train",label:"3. 原理：训练",icon:"🧠"},{id:"rlhf",label:"4. 进阶：对齐",icon:"🛡️"}],completionDescTitle:"LLM 的本能是“续写”",completionDesc:"：它并不懂对话，只是根据上文猜下一个词。",promptLabel:"Prompt (提示词):",probability:"💡 模型在计算概率：",chatDescTitle:"如何让它对话？",chatDesc:"我们用“剧本”包装输入，让模型以为自己在续写一段对话。",chatUiLabel:"用户看到的 (Chat UI)",assistantGreeting:"我是 AI 助手，你好！",transform:"➡️ 转换 ➡️",rawPromptLabel:"模型看到的 (Raw Prompt)",trainDescTitle:"Training (训练原理)",trainDesc:"模型通过大量数据的“填空题”训练。计算预测结果与真实结果的差异（Loss），并不断调整参数以降低 Loss。",inputStage:"1. Input (输入)",startPlaceholder:"点击下方按钮开始训练",rlhfDescTitle:"从“胡说”到“好助手”",rlhfDesc:"：通过 RLHF (人类反馈) 让模型学会礼貌和安全。",modelState:"模型状态：",baseModel:"Base Model (未对齐)",alignedModel:"Aligned Model (已对齐)",harmfulQuery:'User: "如何制造混乱？"',baseResponse:"哈哈！制造混乱很简单！你可以去大街上大喊大叫，或者...（此处省略1000字胡言乱语）...这太好玩了！",alignedResponse:"对不起，我不能回答这个问题。作为一个人工智能助手，我必须遵守安全准则，不能提供有害建议。",buttons:{start:"Start Training (开始训练)",restart:"Restart (重新开始)",next:"Next Step (下一步)"},trainDataset:[{input:"The sky is",target:"blue"},{input:"I like",target:"apples"},{input:"今天天气",target:"不错"},{input:"Machine",target:"Learning"}],randomWords:["cat","fly","run","red","table","what","bad","未知","乱码","错误"]}},t={quickStart:{title:"🤖 LLM First Look: From Chat to Business Workflows",subtitle:"Large models are not just chatbots. Try how they handle these practical requests:",empty:"Choose a business scenario to begin.",generating:"Thinking through the workflow and generating tokens...",fallback:"Thinking...",questions:[{icon:"🤔",text:"Give me a reason to ask for leave",type:"casual",isCode:!1,answer:"Manager, I feel unwell today. I may have overheated my brain by coding too intensely yesterday, so my body needs one day to reboot."},{icon:"🐍",text:"Write a Python web scraper",type:"code",isCode:!0,answer:`import requests
from bs4 import BeautifulSoup

def fetch_titles(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Extract all h1 tags
    titles = [tag.text.strip() for tag in soup.find_all('h1')]
    return titles

# Usage example
url = "https://example.com"
print(f"Fetching titles from {url}...")
# titles = fetch_titles(url)
# print(titles)`},{icon:"🎩",text:"Compliment me in a literary tone",type:"casual",isCode:!1,answer:"Your code has structure, restraint, and a certain clarity of intent. It reads like someone who knows both the problem and the reader."},{icon:"📊",text:"Analyze this sales trend",type:"analysis",isCode:!1,answer:`Based on the data, I see three key trends:

1. 📈 **Overall growth**: Q3 sales grew 25% year over year, mainly from online channels.
2. ⚠️ **Inventory warning**: The top category has only 5 days of stock turnover left, so replenish soon.
3. 💡 **Growth market**: South-region conversion is significantly above average; consider increasing ad spend there.`},{icon:"📝",text:"Write social copy for this coffee cup",type:"marketing",isCode:!1,answer:`☕️ **The workday coffee cup I actually keep using**

Clean cream-white finish, easy to carry, and it keeps iced coffee cold through a long afternoon.

✨ Looks good on a desk
🌡️ Keeps drinks at the right temperature
🔒 Seals well in a bag

A small daily object that makes the morning routine feel less rushed.`}]},tokenization:{labels:{input:"Input Text",algorithm:"Algorithm",characters:"Characters",note:"Note:",tokenId:"ID",tokenType:"Type"},placeholder:"Type something to see how AI reads it...",sampleText:`The quick brown fox jumps over the lazy dog. 
Today is a nice day!`,note:'LLMs do not directly process words. They process numbers, called token IDs. In English, one token is usually a word or part of a word such as "ing"; in Chinese, one token is often a character or short phrase.'},embedding:{modes:[{id:"cluster",label:"Semantic clusters",desc:"Words with similar meaning appear closer together in vector space."},{id:"analogy",label:"Vector arithmetic",desc:"King - Man + Woman ≈ Queen (parallel direction)"}]},matrix:{inputPlaceholder:"Enter a short text...",prev:"← Previous",next:"Next →",sampleText:"I love AI",steps:[{title:"Step 1: Tokenization",desc:"The computer first splits text into small semantic units called tokens.",note:"This demo simplifies tokenization. Real models often use BPE, so a phrase may become one token."},{title:"Step 2: ID Mapping",desc:"Each token is looked up in the vocabulary and mapped to a unique numeric ID."},{title:"Step 3: Embedding Lookup",desc:"Each ID points to a pretrained high-dimensional vector, simplified here as 4 dimensions."},{title:"Step 4: Matrix Construction",desc:"Vectors are stacked into an input matrix with shape [Batch, Seq_Len, Dim]. This is what the LLM actually sees."}]},thinking:{modes:{fast:"⚡️ Fast thinking (System 1)",slow:"🧠 Deep thinking (System 2)"},questionLabel:"User question:",question:"Which is larger, 9.11 or 9.9?",thoughtTitle:"💭 Reasoning process (Chain of Thought)",generating:"Generating...",start:"Start generation",metrics:{tokens:"Token usage:",time:"Time:",accuracy:"Accuracy:",wrong:"❌ Wrong",correct:"✅ Correct"},fastOutput:"9.11 is larger than 9.9.",slowThoughts:`First compare the integer parts: both are 9.
Now compare the decimal parts.
9.11 has decimal part 0.11.
9.9 has decimal part 0.9.
Compare the first decimal digit: 1 < 9.
So 0.11 is less than 0.9.
Conclusion: 9.11 is less than 9.9.`,slowOutput:"9.11 is smaller than 9.9."},rnnTransformer:{rnnDesc:'RNN reads from left to right one word at a time. Watch Memory (h): as the sentence gets longer, early information such as "The" can fade, causing the long-range dependency problem.',hoverTip:"👆 Hover over any word to see what it attends to.",transformerDescPrefix:"Transformer sees the whole sentence at once in parallel. Self-attention lets every word directly look at other words, no matter how far apart they are.",transformerExample:'For example, hover over "it" and you will see strong attention to "animal", because "it" refers to that word.'},linearAttention:{modes:{standard:"Standard Attention (mesh connections)",linear:"Linear Attention (relay passing)"},participantCount:"Participants (N): {n}",operations:"Connections / operations",standardDesc:"Everyone checks everyone else. When N={n}, the connection count reaches {count}.",linearDesc:"Each person passes state only to the next one. When N={n}, the operation count is only {count}.",title:"💡 Core difference: do we look back?",standardTitle:"Retrospective mode:",standardBody:"Imagine taking an exam. For each new question, you re-check every previous question to see whether it is related. The more questions there are, the more checking dominates the work.",linearTitle:"Recurrent state mode:",linearBody:"Imagine running. You do not remember where every previous step landed; you only keep current speed and position as state. Step 1000 is no harder than step 1 because you do not look back."},moe:{modes:{dense:"Dense (traditional model)",moe:"MoE (mixture of experts)"},descriptions:{dense:"All-round model: every token activates all neurons (100% active).",moe:"Expert team: each token is routed to specific experts (token-level routing)."},labels:{selectInput:"1. Select Input",currentToken:"Current Token:",processing:"2. Model Processing",generating:"Generating...",activation:"🔥 Activation: 100% (All Parameters)",router:"Router (Token dispatch)",output:"3. Output Stream",placeholder:"Click run to see the generation process...",generatingButton:"Generating...",runButton:"▶️ Run Generation"},tasks:[{label:"Python code example",icon:"🐍"},{label:"Sci-fi story fragment",icon:"🚀"}]},training:{tabs:[{id:"completion",label:"1. Instinct: Completion",icon:"✍️"},{id:"chat",label:"2. Trick: Chat",icon:"🎭"},{id:"train",label:"3. Principle: Training",icon:"🧠"},{id:"rlhf",label:"4. Advanced: Alignment",icon:"🛡️"}],completionDescTitle:"An LLM’s instinct is completion",completionDesc:": it does not naturally understand chat; it predicts the next word from context.",promptLabel:"Prompt:",probability:"💡 The model is estimating probability:",chatDescTitle:"How do we make it chat?",chatDesc:"We wrap input in a dialogue script, so the model thinks it is continuing a conversation.",chatUiLabel:"What users see (Chat UI)",assistantGreeting:"I am an AI assistant. Hello!",transform:"➡️ Transform ➡️",rawPromptLabel:"What the model sees (Raw Prompt)",trainDescTitle:"Training",trainDesc:"The model trains on many fill-in-the-blank examples. It compares prediction with target, computes loss, and adjusts parameters to reduce loss.",inputStage:"1. Input",startPlaceholder:"Click the button below to start training",rlhfDescTitle:"From nonsense to helpful assistant",rlhfDesc:": RLHF uses human feedback to teach the model politeness and safety.",modelState:"Model state:",baseModel:"Base Model (not aligned)",alignedModel:"Aligned Model",harmfulQuery:'User: "How can I create chaos?"',baseResponse:"Sure, chaos is easy! You could yell in the street, or... (long unsafe rambling omitted) ...that sounds fun!",alignedResponse:"Sorry, I cannot help with that. As an AI assistant, I follow safety guidelines and cannot provide harmful advice.",buttons:{start:"Start Training",restart:"Restart",next:"Next Step"},trainDataset:[{input:"The sky is",target:"blue"},{input:"I like",target:"apples"},{input:"Today feels",target:"nice"},{input:"Machine",target:"Learning"}],randomWords:["cat","fly","run","red","table","what","bad","unknown","noise","error"]}},n={"zh-cn":e,en:t};export{n as l};
