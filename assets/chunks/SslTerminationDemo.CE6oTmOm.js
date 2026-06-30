import{_ as S,o as d,c as e,b6 as r,j as a,G as l,H as v,n as m,t,e as c,y as f}from"./framework.CNUu10b_.js";const T={class:"ssl-termination-demo"},h={class:"cert-management"},u={class:"cert-tabs"},y=["onClick"],g={class:"cert-content"},w={key:0,class:"apply-flow"},x={class:"flow-steps"},C={class:"step-badge"},L={class:"step-content"},k={class:"step-title"},H={class:"step-desc"},P={key:0,class:"step-command"},E={key:1,class:"nginx-config"},A={key:2,class:"best-practices"},D={class:"practices-grid"},N={class:"practice-header"},X={class:"practice-icon"},F={class:"practice-title"},G={class:"practice-content"},M={key:0,class:"practice-code"},O={__name:"SslTerminationDemo",setup(R){const b=[{id:"apply",name:"证书申请"},{id:"config",name:"Nginx 配置"},{id:"bestpractice",name:"最佳实践"}],n=f("apply"),p=[{title:"生成私钥",desc:"使用 OpenSSL 生成 RSA 私钥，这是证书的基础",command:"openssl genrsa -out private.key 2048"},{title:"创建 CSR",desc:"生成证书签名请求，包含域名和组织信息",command:"openssl req -new -key private.key -out csr.pem"},{title:"域名验证",desc:"CA 机构验证域名所有权（DNS 记录或 HTTP 文件）",command:"# 添加 DNS TXT 记录 或 上传验证文件到 /.well-known/"},{title:"签发证书",desc:"验证通过后，CA 签发证书文件",command:"# 下载 certificate.crt 和 chain.crt"},{title:"部署配置",desc:"将证书配置到 Nginx 并测试",command:"nginx -t && systemctl reload nginx"}],_=[{id:"protocol",icon:"🔐",title:"使用 TLS 1.2+",content:"禁用 SSLv3、TLS 1.0/1.1 等老旧协议，仅启用 TLS 1.2 和 1.3",code:"ssl_protocols TLSv1.2 TLSv1.3;"},{id:"cipher",icon:"🛡️",title:"强密码套件",content:"禁用弱加密算法，优先使用 ECDHE 和 AES-GCM",code:"ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;"},{id:"hsts",icon:"🔒",title:"HSTS 头部",content:"强制浏览器始终使用 HTTPS 访问，防止 SSL 剥离攻击",code:'add_header Strict-Transport-Security "max-age=63072000" always;'},{id:"ocsp",icon:"✅",title:"OCSP Stapling",content:"启用 OCSP 装订，加速 SSL 握手并保护用户隐私",code:"ssl_stapling on; ssl_stapling_verify on;"}];return($,i)=>(d(),e("div",T,[i[2]||(i[2]=r('<div class="header" data-v-d8a7b0b2><div class="title" data-v-d8a7b0b2> 🔒 SSL 终结：HTTPS 流量的&quot;解密官&quot; </div><div class="subtitle" data-v-d8a7b0b2> 想象成公司的前台接待——对外使用正式头衔（HTTPS），对内用内部称呼（HTTP），负责&quot;翻译&quot;身份 </div></div><div class="ssl-flow" data-v-d8a7b0b2><div class="flow-title" data-v-d8a7b0b2> 🔐 HTTPS 流量解密流程 </div><div class="flow-diagram" data-v-d8a7b0b2><div class="flow-node client" data-v-d8a7b0b2><div class="node-icon" data-v-d8a7b0b2> 👤 </div><div class="node-label" data-v-d8a7b0b2> 客户端 (浏览器) </div><div class="node-detail" data-v-d8a7b0b2> 发起 HTTPS 请求 </div></div><div class="flow-arrow encrypted" data-v-d8a7b0b2><div class="arrow-line" data-v-d8a7b0b2></div><div class="arrow-label" data-v-d8a7b0b2><span class="lock-icon" data-v-d8a7b0b2>🔒</span><span data-v-d8a7b0b2>TLS 加密连接</span></div><div class="cert-info" data-v-d8a7b0b2><div class="cert-item" data-v-d8a7b0b2><span class="cert-label" data-v-d8a7b0b2>证书:</span> *.example.com </div><div class="cert-item" data-v-d8a7b0b2><span class="cert-label" data-v-d8a7b0b2>算法:</span> TLS 1.3 </div><div class="cert-item" data-v-d8a7b0b2><span class="cert-label" data-v-d8a7b0b2>加密:</span> AES-256-GCM </div></div></div><div class="flow-node nginx" data-v-d8a7b0b2><div class="node-icon" data-v-d8a7b0b2> 🚪 </div><div class="node-label" data-v-d8a7b0b2> Nginx (SSL 终结) </div><div class="node-actions" data-v-d8a7b0b2><div class="action" data-v-d8a7b0b2><span class="action-icon" data-v-d8a7b0b2>📜</span> 校验证书 </div><div class="action" data-v-d8a7b0b2><span class="action-icon" data-v-d8a7b0b2>🔓</span> 解密流量 </div><div class="action" data-v-d8a7b0b2><span class="action-icon" data-v-d8a7b0b2>📝</span> 添加 X-Forwarded-* </div></div></div><div class="flow-arrow plain" data-v-d8a7b0b2><div class="arrow-line" data-v-d8a7b0b2></div><div class="arrow-label" data-v-d8a7b0b2><span class="unlock-icon" data-v-d8a7b0b2>🔓</span><span data-v-d8a7b0b2>HTTP 明文</span></div><div class="headers-info" data-v-d8a7b0b2><div class="header-item" data-v-d8a7b0b2> X-Forwarded-For: 203.0.113.42 </div><div class="header-item" data-v-d8a7b0b2> X-Forwarded-Proto: https </div><div class="header-item" data-v-d8a7b0b2> X-Real-IP: 203.0.113.42 </div></div></div><div class="flow-node backend" data-v-d8a7b0b2><div class="node-icon" data-v-d8a7b0b2> ⚙️ </div><div class="node-label" data-v-d8a7b0b2> 后端服务集群 </div><div class="node-detail" data-v-d8a7b0b2> 专注于业务逻辑，无需处理 TLS </div></div></div></div>',2)),a("div",h,[i[1]||(i[1]=a("div",{class:"section-title"}," 📜 SSL 证书管理 ",-1)),a("div",u,[(d(),e(l,null,v(b,s=>a("button",{key:s.id,class:m(["cert-tab",{active:n.value===s.id}]),onClick:o=>n.value=s.id},t(s.name),11,y)),64))]),a("div",g,[n.value==="apply"?(d(),e("div",w,[a("div",x,[(d(),e(l,null,v(p,(s,o)=>a("div",{key:o,class:"cert-step"},[a("div",C,t(o+1),1),a("div",L,[a("div",k,t(s.title),1),a("div",H,t(s.desc),1),s.command?(d(),e("div",P,[a("code",null,t(s.command),1)])):c("",!0)])])),64))])])):c("",!0),n.value==="config"?(d(),e("div",E,[...i[0]||(i[0]=[a("pre",{class:"config-block"},[a("code",null,`server {
    listen 443 ssl http2;
    server_name api.example.com;

    # SSL 证书配置
    ssl_certificate /etc/nginx/ssl/api.example.com.crt;
    ssl_certificate_key /etc/nginx/ssl/api.example.com.key;

    # SSL 协议和密码套件
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;
    ssl_prefer_server_ciphers off;

    # SSL 会话缓存
    ssl_session_cache shared:SSL:50m;
    ssl_session_timeout 1d;
    ssl_session_tickets off;

    # OCSP Stapling
    ssl_stapling on;
    ssl_stapling_verify on;
    ssl_trusted_certificate /etc/nginx/ssl/chain.crt;
    resolver 8.8.8.8 8.8.4.4 valid=300s;
    resolver_timeout 5s;

    # 安全响应头
    add_header Strict-Transport-Security "max-age=63072000" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;

    location / {
        proxy_pass http://backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# HTTP 重定向到 HTTPS
server {
    listen 80;
    server_name api.example.com;
    return 301 https://$server_name$request_uri;
}`)],-1)])])):c("",!0),n.value==="bestpractice"?(d(),e("div",A,[a("div",D,[(d(),e(l,null,v(_,s=>a("div",{key:s.id,class:"practice-card"},[a("div",N,[a("span",X,t(s.icon),1),a("span",F,t(s.title),1)]),a("div",G,t(s.content),1),s.code?(d(),e("div",M,[a("code",null,t(s.code),1)])):c("",!0)])),64))])])):c("",!0)])]),i[3]||(i[3]=r('<div class="benefits-section" data-v-d8a7b0b2><div class="section-title" data-v-d8a7b0b2> ✨ SSL 终结的核心优势 </div><div class="benefits-grid" data-v-d8a7b0b2><div class="benefit-card" data-v-d8a7b0b2><div class="benefit-icon" data-v-d8a7b0b2> 🚀 </div><div class="benefit-title" data-v-d8a7b0b2> 性能提升 </div><div class="benefit-desc" data-v-d8a7b0b2> TLS 握手和加密解密是 CPU 密集型操作，集中在 Nginx 处理，后端服务专注业务逻辑，整体吞吐量提升 2-5 倍 </div></div><div class="benefit-card" data-v-d8a7b0b2><div class="benefit-icon" data-v-d8a7b0b2> 🔧 </div><div class="benefit-title" data-v-d8a7b0b2> 简化运维 </div><div class="benefit-desc" data-v-d8a7b0b2> 证书统一管理，只需在 Nginx 配置一次，无需在每个后端服务重复配置，证书续期、更换一键完成 </div></div><div class="benefit-card" data-v-d8a7b0b2><div class="benefit-icon" data-v-d8a7b0b2> 🛡️ </div><div class="benefit-title" data-v-d8a7b0b2> 集中安全 </div><div class="benefit-desc" data-v-d8a7b0b2> SSL/TLS 配置统一管控，强制使用最新协议版本和密码套件，统一添加安全响应头（HSTS、CSP 等） </div></div><div class="benefit-card" data-v-d8a7b0b2><div class="benefit-icon" data-v-d8a7b0b2> 📊 </div><div class="benefit-title" data-v-d8a7b0b2> 统一监控 </div><div class="benefit-desc" data-v-d8a7b0b2> 所有 HTTPS 流量经过 Nginx，可以统一记录访问日志、分析 SSL 握手性能、监控证书有效期，便于审计和排障 </div></div></div></div>',1))]))}},I=S(O,[["__scopeId","data-v-d8a7b0b2"]]);export{I as default};
