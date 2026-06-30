import{_ as R,ab as I,p as j,s as B,o as d,c as i,j as t,G as r,H as v,n as h,t as a,Q as g,e as f,b6 as $,y as w,h as S}from"./framework.CNUu10b_.js";const L={class:"rate-limiting-demo"},N={class:"algorithm-selector"},A={class:"algorithm-tabs"},G=["onClick"],V={class:"algo-icon"},Q={class:"algo-name"},U={class:"visualization-area"},W={class:"vis-header"},F={class:"vis-title"},H={class:"vis-controls"},O=["disabled"],J={key:0,class:"token-bucket-vis"},K={class:"bucket-container"},X={class:"bucket"},Y={class:"tokens-area"},Z={class:"bucket-capacity"},tt={class:"token-producer"},et={class:"producer-label"},st={class:"producer-stream"},at={class:"requests-queue"},dt={class:"requests"},it={class:"req-method"},nt={class:"req-path"},ot={class:"req-status"},lt={key:1,class:"leaky-bucket-vis"},ct={class:"leaky-container"},rt={class:"leaky-bucket"},vt={class:"bucket-content"},ut={class:"bucket-stats"},mt={class:"leak-hole"},_t={class:"leak-rate"},pt={key:2,class:"sliding-window-vis"},ht={class:"window-container"},kt={class:"window-timeline"},yt={class:"time-marks"},bt={class:"window-bars"},gt={key:0,class:"slot-count"},ft={class:"window-stats"},wt={class:"stat"},qt={class:"stat-value"},It={class:"stat"},xt={class:"stat-value"},zt={class:"stat"},Pt={class:"nginx-config"},$t={class:"config-tabs"},St=["onClick"],Mt={class:"config-code"},Tt={class:"config-explanation"},Ct={__name:"RateLimitingDemo",setup(Dt){const u=w("token"),p=w(!1),x=[{id:"token",icon:"🪙",name:"令牌桶",visualTitle:"🪙 令牌桶算法可视化"},{id:"leaky",icon:"🚿",name:"漏桶",visualTitle:"🚿 漏桶算法可视化"},{id:"sliding",icon:"📊",name:"滑动窗口",visualTitle:"📊 滑动窗口算法可视化"}],M=S(()=>x.find(c=>c.id===u.value)),n=I({tokens:5,capacity:10,rate:2,totalRequests:0}),k=w([]),l=I({current:3,capacity:8,rate:1}),m=I({slots:Array(12).fill(0).map(()=>({count:Math.floor(Math.random()*10)})),currentSlot:11,totalRequests:45,limit:100,remaining:55}),q=w("basic"),z=[{id:"basic",name:"基础限流",code:`# 定义限流区域
# $binary_remote_addr: 按 IP 限流
# zone=mylimit:10m: 区域名称和大小
# rate=10r/s: 每秒最多10个请求
limit_req_zone $binary_remote_addr zone=mylimit:10m rate=10r/s;

server {
    listen 80;
    server_name api.example.com;

    location / {
        # 应用限流
        # burst=20: 桶容量，允许突发20个请求
        # nodelay: 不延迟处理突发请求
        limit_req zone=mylimit burst=20 nodelay;

        proxy_pass http://backend;
    }
}`,explanation:["limit_req_zone: 在 http 块中定义限流区域","$binary_remote_addr: 使用二进制 IP 地址作为限流键（省内存）","zone=mylimit:10m: 区域名称 mylimit，分配 10MB 内存","rate=10r/s: 每秒允许 10 个请求（漏桶算法）","burst=20: 桶的容量为 20，允许一定程度的突发流量","nodelay: 不延迟处理突发请求（立即处理或拒绝）"]},{id:"connection",name:"连接数限制",code:`# 限制并发连接数
# zone=addr:10m: 区域名称为 addr，大小 10MB
limit_conn_zone $binary_remote_addr zone=addr:10m;

server {
    listen 80;
    server_name download.example.com;

    location / {
        # 每个 IP 最多 5 个并发连接
        limit_conn addr 5;

        # 同时应用限流：每秒 1 个请求
        limit_req zone=mylimit rate=1r/s;

        proxy_pass http://fileserver;
    }
}`,explanation:["limit_conn_zone: 定义连接数限制区域","limit_conn addr 5: 每个 IP 最多同时保持 5 个连接","适用于文件下载、视频流媒体等长连接场景","可以和 limit_req 同时使用（双重保护）","超过连接数限制时返回 503 Service Unavailable"]},{id:"whiteblack",name:"黑白名单",code:`# 白名单 + 限流组合
# 公司内网 IP 不限流
geo $limit {
    default 1;
    10.0.0.0/8 0;     # 内网网段
    172.16.0.0/12 0;  # 内网网段
    192.168.0.0/16 0; # 内网网段
}

map $limit $limit_key {
    0 "";
    1 $binary_remote_addr;
}

# 只有外网 IP 会触发限流
limit_req_zone $limit_key zone=sensitive:10m rate=1r/s;

server {
    listen 80;
    server_name api.example.com;

    location /admin {
        # 管理后台严格限流
        limit_req zone=sensitive burst=5 nodelay;

        # 拒绝特定 IP
        deny 1.2.3.4;
        deny 5.6.7.8;

        proxy_pass http://backend;
    }
}`,explanation:["geo 模块：根据 IP 地址设置变量值","内网 IP 设置为 0，外网 IP 默认为 1","map 模块：将 0 映射为空字符串（不限流），1 映射为 IP 地址","只有外网 IP 会被限流，内网访问畅通无阻","deny 指令：直接拒绝特定 IP 访问","适用于管理后台、敏感接口的安全防护"]}],P=S(()=>z.find(c=>c.id===q.value)),T=async()=>{p.value=!0;for(let c=0;c<5;c++){await new Promise(_=>setTimeout(_,800));const s=["GET","POST","GET","GET","DELETE"],e=["/api/users","/api/orders","/api/products","/health","/api/pay"],o={id:Date.now()+c,method:s[Math.floor(Math.random()*s.length)],path:e[Math.floor(Math.random()*e.length)],status:"processing"};k.value.unshift(o),setTimeout(()=>{const _=k.value.find(E=>E.id===o.id);_&&(u.value==="token"?n.tokens>0?(n.tokens--,_.status="allowed",n.totalRequests++):_.status="rejected":_.status=Math.random()>.3?"allowed":"rejected")},500)}p.value=!1},C=()=>{k.value=[],n.tokens=5,n.totalRequests=0,l.current=3,p.value=!1},D=c=>{switch(c){case"processing":return"⏳";case"allowed":return"✅";case"rejected":return"❌";default:return"⏳"}};let y=null,b=null;return j(()=>{y=setInterval(()=>{n.tokens<n.capacity&&(n.tokens=Math.min(n.tokens+n.rate,n.capacity))},1e3),b=setInterval(()=>{l.current>0&&(l.current=Math.max(0,l.current-l.rate))},1e3)}),B(()=>{y&&(clearInterval(y),y=null),b&&(clearInterval(b),b=null)}),(c,s)=>(d(),i("div",L,[s[12]||(s[12]=t("div",{class:"header"},[t("div",{class:"title"},' ⚡ 限流算法：系统不会被"流量洪水"冲垮的秘诀 '),t("div",{class:"subtitle"}," 想象成水坝的闸门——控制水流速度，防止下游被淹没 ")],-1)),t("div",N,[s[0]||(s[0]=t("div",{class:"selector-title"}," 选择限流算法 ",-1)),t("div",A,[(d(),i(r,null,v(x,e=>t("button",{key:e.id,class:h(["algo-tab",{active:u.value===e.id}]),onClick:o=>u.value=e.id},[t("span",V,a(e.icon),1),t("span",Q,a(e.name),1)],10,G)),64))])]),t("div",U,[t("div",W,[t("div",F,a(M.value.visualTitle),1),t("div",H,[t("button",{class:"control-btn",disabled:p.value,onClick:T},a(p.value?"模拟中...":"▶ 开始模拟"),9,O),t("button",{class:"control-btn reset",onClick:C}," ↺ 重置 ")])]),u.value==="token"?(d(),i("div",J,[t("div",K,[t("div",X,[s[1]||(s[1]=t("div",{class:"bucket-label"}," 令牌桶 ",-1)),t("div",Y,[(d(!0),i(r,null,v(n.tokens,e=>(d(),i("div",{key:e,class:"token",style:g({animationDelay:`${e*.1}s`})}," 🪙 ",4))),128))]),t("div",Z,a(n.tokens)+" / "+a(n.capacity)+" 令牌 ",1)]),t("div",tt,[t("div",et," ⏰ 令牌产生器 ("+a(n.rate)+"/秒) ",1),t("div",st,[(d(),i(r,null,v(3,e=>t("div",{key:e,class:"producing-token",style:g({animationDelay:`${e*.3}s`})}," 🪙 ",4)),64))])])]),t("div",at,[s[2]||(s[2]=t("div",{class:"queue-title"}," 📥 请求队列 ",-1)),t("div",dt,[(d(!0),i(r,null,v(k.value,(e,o)=>(d(),i("div",{key:o,class:h(["request-item",{processing:e.status==="processing",allowed:e.status==="allowed",rejected:e.status==="rejected"}])},[t("span",it,a(e.method),1),t("span",nt,a(e.path),1),t("span",ot,a(D(e.status)),1)],2))),128))])])])):f("",!0),u.value==="leaky"?(d(),i("div",lt,[t("div",ct,[t("div",rt,[s[3]||(s[3]=t("div",{class:"bucket-label"}," 漏桶 ",-1)),t("div",vt,[t("div",{class:"water-level",style:g({height:`${l.current/l.capacity*100}%`})},null,4)]),t("div",ut,a(l.current)+" / "+a(l.capacity)+" 请求 ",1)]),t("div",mt,[s[4]||(s[4]=t("div",{class:"hole"}," 🔘 ",-1)),t("div",_t," ⏱️ 流出速率: "+a(l.rate)+"/秒 ",1)])]),s[5]||(s[5]=$('<div class="leaky-legend" data-v-48d07e6d><div class="legend-item" data-v-48d07e6d><span class="legend-color water" data-v-48d07e6d></span><span data-v-48d07e6d>桶内请求（排队中）</span></div><div class="legend-item" data-v-48d07e6d><span class="legend-color hole" data-v-48d07e6d></span><span data-v-48d07e6d>匀速流出（处理中）</span></div><div class="legend-item" data-v-48d07e6d><span class="legend-color overflow" data-v-48d07e6d></span><span data-v-48d07e6d>桶满溢出（被拒绝）</span></div></div>',1))])):f("",!0),u.value==="sliding"?(d(),i("div",pt,[t("div",ht,[s[9]||(s[9]=t("div",{class:"window-label"}," ⏰ 时间窗口（过去1分钟） ",-1)),t("div",kt,[t("div",yt,[(d(),i(r,null,v(6,e=>t("span",{key:e},a(60-(e-1)*10)+"s",1)),64))]),t("div",bt,[(d(!0),i(r,null,v(m.slots,(e,o)=>(d(),i("div",{key:o,class:h(["time-slot",{active:e.count>0,current:o===m.currentSlot}]),style:g({height:`${Math.min(e.count/20*100,100)}%`})},[e.count>0?(d(),i("span",gt,a(e.count),1)):f("",!0)],6))),128))])]),t("div",ft,[t("div",wt,[s[6]||(s[6]=t("span",{class:"stat-label"},"当前窗口请求数:",-1)),t("span",qt,a(m.totalRequests),1)]),t("div",It,[s[7]||(s[7]=t("span",{class:"stat-label"},"限流阈值:",-1)),t("span",xt,a(m.limit)+"/分钟",1)]),t("div",zt,[s[8]||(s[8]=t("span",{class:"stat-label"},"剩余额度:",-1)),t("span",{class:h(["stat-value",{warning:m.remaining<20}])},a(m.remaining),3)])])])])):f("",!0)]),s[13]||(s[13]=$('<div class="comparison-section" data-v-48d07e6d><div class="section-title" data-v-48d07e6d> 📊 三种算法对比 </div><table class="comparison-table" data-v-48d07e6d><thead data-v-48d07e6d><tr data-v-48d07e6d><th data-v-48d07e6d>维度</th><th data-v-48d07e6d>令牌桶 (Token Bucket)</th><th data-v-48d07e6d>漏桶 (Leaky Bucket)</th><th data-v-48d07e6d>滑动窗口 (Sliding Window)</th></tr></thead><tbody data-v-48d07e6d><tr data-v-48d07e6d><td class="dim" data-v-48d07e6d> 核心思想 </td><td data-v-48d07e6d>桶里装令牌，有令牌才能通过</td><td data-v-48d07e6d>请求进桶，匀速流出处理</td><td data-v-48d07e6d>统计时间窗口内的请求数</td></tr><tr data-v-48d07e6d><td class="dim" data-v-48d07e6d> 突发流量 </td><td data-v-48d07e6d>✅ 允许一定程度的突发（桶里有令牌）</td><td data-v-48d07e6d>❌ 强制平滑，突发会被缓存或拒绝</td><td data-v-48d07e6d>❌ 严格按窗口计数，超出一律拒绝</td></tr><tr data-v-48d07e6d><td class="dim" data-v-48d07e6d> 适用场景 </td><td data-v-48d07e6d>API 限流、带宽控制（允许突发）</td><td data-v-48d07e6d>需要严格匀速处理的场景（如消息队列）</td><td data-v-48d07e6d>精确统计（如&quot;1分钟内最多100次&quot;）</td></tr><tr data-v-48d07e6d><td class="dim" data-v-48d07e6d> 实现复杂度 </td><td data-v-48d07e6d>中等</td><td data-v-48d07e6d>中等</td><td data-v-48d07e6d>较高（需要记录每个时间窗口的请求）</td></tr><tr data-v-48d07e6d><td class="dim" data-v-48d07e6d> Nginx 配置 </td><td data-v-48d07e6d>limit_req_zone (漏桶)</td><td data-v-48d07e6d>limit_req_zone (漏桶)</td><td data-v-48d07e6d>需第三方模块或 Lua</td></tr></tbody></table></div>',1)),t("div",Pt,[s[11]||(s[11]=t("div",{class:"config-title"}," 📝 Nginx 限流配置示例 ",-1)),t("div",$t,[(d(),i(r,null,v(z,e=>t("button",{key:e.id,class:h(["config-tab",{active:q.value===e.id}]),onClick:o=>q.value=e.id},a(e.name),11,St)),64))]),t("pre",Mt,[t("code",null,a(P.value.code),1)]),t("div",Tt,[s[10]||(s[10]=t("div",{class:"exp-title"}," 💡 配置说明 ",-1)),t("ul",null,[(d(!0),i(r,null,v(P.value.explanation,(e,o)=>(d(),i("li",{key:o},a(e),1))),128))])])])]))}},Rt=R(Ct,[["__scopeId","data-v-48d07e6d"]]);export{Rt as default};
