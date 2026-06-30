const e={httpProtocol:{title:"HTTP 协议演示",labels:{request:"HTTP 请求",response:"HTTP 响应",tcpConnection:"TCP 连接",unsafe:"⚠️ 不安全",safe:"✓ 安全",transferContent:"传输内容：",handshakeTitle:"HTTPS 握手过程"},versionHeaders:["版本","年份","核心特性","传输格式","连接方式"],tabs:[{id:"request",name:"请求响应",icon:"📡"},{id:"versions",name:"版本对比",icon:"📊"},{id:"http2",name:"HTTP/2",icon:"⚡"},{id:"https",name:"HTTPS",icon:"🔒"}],initialRequest:{method:"GET",url:"/api/users/123",version:"HTTP/1.1",headers:{Host:"api.example.com","User-Agent":"Mozilla/5.0",Accept:"application/json",Authorization:"Bearer xxx"},body:null},initialResponse:{version:"HTTP/1.1",status:"200",statusClass:"success",statusText:"OK",headers:{"Content-Type":"application/json","Content-Length":"156","Cache-Control":"max-age=3600"},body:`{
  "id": 123,
  "name": "张三",
  "email": "zhangsan@example.com"
}`},demos:[{id:"get",name:"GET 请求",request:{method:"GET",url:"/api/users/123",version:"HTTP/1.1",headers:{Host:"api.example.com",Accept:"application/json"},body:null},response:{version:"HTTP/1.1",status:"200",statusClass:"success",statusText:"OK",headers:{"Content-Type":"application/json","Content-Length":"156"},body:`{
  "id": 123,
  "name": "张三"
}`}},{id:"post",name:"POST 创建",request:{method:"POST",url:"/api/users",version:"HTTP/1.1",headers:{Host:"api.example.com","Content-Type":"application/json","Content-Length":"45"},body:`{
  "name": "李四",
  "email": "lisi@example.com"
}`},response:{version:"HTTP/1.1",status:"201",statusClass:"success",statusText:"Created",headers:{"Content-Type":"application/json",Location:"/api/users/124"},body:`{
  "id": 124,
  "name": "李四"
}`}},{id:"404",name:"404 错误",request:{method:"GET",url:"/api/users/999",version:"HTTP/1.1",headers:{Host:"api.example.com"},body:null},response:{version:"HTTP/1.1",status:"404",statusClass:"error",statusText:"Not Found",headers:{"Content-Type":"application/json"},body:`{
  "error": "用户不存在"
}`}}],versions:[{version:"HTTP/0.9",year:"1991",features:"仅支持 GET",format:"纯文本",connection:"一次一请求",highlight:!1},{version:"HTTP/1.0",year:"1996",features:"增加 POST/HEAD",format:"纯文本",connection:"短连接",highlight:!1},{version:"HTTP/1.1",year:"1997",features:"持久连接、分块传输",format:"纯文本",connection:"长连接",highlight:!0},{version:"HTTP/2",year:"2015",features:"多路复用、头部压缩",format:"二进制帧",connection:"多路复用",highlight:!0},{version:"HTTP/3",year:"2022",features:"基于 QUIC、解决队头阻塞",format:"QUIC (UDP)",connection:"独立连接",highlight:!0}],http2:{legacyRequests:[{label:"请求 1",blocks:[{label:"发送",type:"req"},{label:"等待",type:"wait"},{label:"接收",type:"res"}]},{label:"请求 2",blocks:[{label:"排队",type:"wait"},{label:"发送",type:"req"},{label:"等待",type:"wait"},{label:"接收",type:"res"}]},{label:"请求 3",blocks:[{label:"排队",type:"wait"},{label:"排队",type:"wait"},{label:"发送",type:"req"},{label:"接收",type:"res"}]}],modernStreams:[{label:"Stream 1",blocks:[{label:"发送",type:"req"},{label:"接收",type:"res"}]},{label:"Stream 2",blocks:[{label:"发送",type:"req"},{label:"接收",type:"res"}]},{label:"Stream 3",blocks:[{label:"发送",type:"req"},{label:"接收",type:"res"}]}],legacyNote:"串行传输，需等待前一个请求完成",modernNote:"多路复用，并发传输多个请求"},https:{httpItems:["明文传输，数据可被窃听","无法验证服务器身份","数据可能被篡改"],httpsItems:["加密传输，数据无法被窃听","SSL/TLS 证书验证身份","数据完整性校验，防篡改"],encryptedExample:"8f3a2b...（加密数据）",steps:[{title:"Client Hello",desc:"客户端发送支持的加密套件"},{title:"Server Hello",desc:"服务器返回证书和选定的加密套件"},{title:"验证证书",desc:"客户端验证服务器证书"},{title:"密钥交换",desc:"生成会话密钥"},{title:"加密通信",desc:"使用会话密钥加密数据"}]}},serialization:{title:"序列化演示",panels:{object:{title:"内存对象",desc:"内存中的对象，只能在当前进程使用"},json:{title:"JSON 字符串",desc:"可在网络传输、可跨语言"},binary:{title:"二进制",desc:"Protobuf/MessagePack，更小更快"}},arrows:{serialize:"序列化",transfer:"传输"},buttons:{reset:"重置",steps:["开始序列化 →","转换为二进制 →","传输完成 ✓","完成"]},comparisonTitle:"📊 格式对比",comparisonHeaders:["格式","大小","速度","可读性","跨语言"],comparisonRows:[["JSON","★★★☆☆","★★★☆☆","★★★★★","★★★★★"],["XML","★★☆☆☆","★★☆☆☆","★★★★★","★★★★★"],["Protobuf","★★★★★","★★★★★","★☆☆☆☆","★★★★☆"],["MessagePack","★★★★☆","★★★★☆","★★☆☆☆","★★★★★"]],languages:{javascript:{id:"javascript",name:"JavaScript",objectCode:`const user = {
  id: 123,
  name: "张三",
  email: "zhangsan@example.com",
  age: 28
};`,jsonString:`{
  "id": 123,
  "name": "张三",
  "email": "zhangsan@example.com",
  "age": 28
}`,jsonSize:68,binaryString:`七进制编码 (MessagePack):
\\xa7 id 7b
\\xa4 name \\xa3 张三
\\xa5 email \\xb1 zhangsan@example.com
\\xa3 age 1c`,binarySize:52},python:{id:"python",name:"Python",objectCode:`user = {
    "id": 123,
    "name": "张三",
    "email": "zhangsan@example.com",
    "age": 28
}`,jsonString:`{
  "id": 123,
  "name": "张三",
  "email": "zhangsan@example.com",
  "age": 28
}`,jsonSize:68,binaryString:`Protobuf 二进制:
08 7b  # field 1, varint 123
12 06  # field 2, length 6
e5 bc a0 e4 b8 89  # UTF-8 "张三"
1a 11  # field 3, length 17
7a 68 61 6e 67 73 61 6e 40 65 78 61 6d 70 6c 65 2e 63 6f 6d
20 1c  # field 4, varint 28`,binarySize:38},java:{id:"java",name:"Java",objectCode:`User user = new User();
user.setId(123);
user.setName("张三");
user.setEmail("zhangsan@example.com");
user.setAge(28);`,jsonString:`{
  "id": 123,
  "name": "张三",
  "email": "zhangsan@example.com",
  "age": 28
}`,jsonSize:68,binaryString:`Java 序列化:
AC ED 00 05 73 72 00 04 55 73 65 72
... (复杂元数据)
实际大小 ~150 bytes`,binarySize:150},golang:{id:"golang",name:"Go",objectCode:`type User struct {
    ID    int
    Name  string
    Email string
    Age   int
}

user := User{
    ID: 123,
    Name: "张三",
    Email: "zhangsan@example.com",
    Age: 28,
}`,jsonString:`{
  "id": 123,
  "name": "张三",
  "email": "zhangsan@example.com",
  "age": 28
}`,jsonSize:68,binaryString:`Gob 编码:
0f ff 81 03 01 01 08 55 73 65 72 01
ff 82 00 01 02 01 04 69 64 01 04 01
02 6e 61 6d 65 01 04 05 65 6d 61 69 6c
... (高效二进制)`,binarySize:42}}}},a={httpProtocol:{title:"HTTP Protocol Demo",labels:{request:"HTTP request",response:"HTTP response",tcpConnection:"TCP connection",unsafe:"⚠️ Not secure",safe:"✓ Secure",transferContent:"Transferred content:",handshakeTitle:"HTTPS handshake process"},versionHeaders:["Version","Year","Core features","Transfer format","Connection model"],tabs:[{id:"request",name:"Request/response",icon:"📡"},{id:"versions",name:"Version comparison",icon:"📊"},{id:"http2",name:"HTTP/2",icon:"⚡"},{id:"https",name:"HTTPS",icon:"🔒"}],initialRequest:{method:"GET",url:"/api/users/123",version:"HTTP/1.1",headers:{Host:"api.example.com","User-Agent":"Mozilla/5.0",Accept:"application/json",Authorization:"Bearer xxx"},body:null},initialResponse:{version:"HTTP/1.1",status:"200",statusClass:"success",statusText:"OK",headers:{"Content-Type":"application/json","Content-Length":"156","Cache-Control":"max-age=3600"},body:`{
  "id": 123,
  "name": "Alice",
  "email": "alice@example.com"
}`},demos:[{id:"get",name:"GET request",request:{method:"GET",url:"/api/users/123",version:"HTTP/1.1",headers:{Host:"api.example.com",Accept:"application/json"},body:null},response:{version:"HTTP/1.1",status:"200",statusClass:"success",statusText:"OK",headers:{"Content-Type":"application/json","Content-Length":"156"},body:`{
  "id": 123,
  "name": "Alice"
}`}},{id:"post",name:"POST create",request:{method:"POST",url:"/api/users",version:"HTTP/1.1",headers:{Host:"api.example.com","Content-Type":"application/json","Content-Length":"45"},body:`{
  "name": "Bob",
  "email": "bob@example.com"
}`},response:{version:"HTTP/1.1",status:"201",statusClass:"success",statusText:"Created",headers:{"Content-Type":"application/json",Location:"/api/users/124"},body:`{
  "id": 124,
  "name": "Bob"
}`}},{id:"404",name:"404 error",request:{method:"GET",url:"/api/users/999",version:"HTTP/1.1",headers:{Host:"api.example.com"},body:null},response:{version:"HTTP/1.1",status:"404",statusClass:"error",statusText:"Not Found",headers:{"Content-Type":"application/json"},body:`{
  "error": "User not found"
}`}}],versions:[{version:"HTTP/0.9",year:"1991",features:"GET only",format:"Plain text",connection:"One request per connection",highlight:!1},{version:"HTTP/1.0",year:"1996",features:"POST and HEAD added",format:"Plain text",connection:"Short connections",highlight:!1},{version:"HTTP/1.1",year:"1997",features:"Persistent connections, chunked transfer",format:"Plain text",connection:"Long-lived connection",highlight:!0},{version:"HTTP/2",year:"2015",features:"Multiplexing, header compression",format:"Binary frames",connection:"Multiplexed",highlight:!0},{version:"HTTP/3",year:"2022",features:"Built on QUIC, fixes head-of-line blocking",format:"QUIC (UDP)",connection:"Independent streams",highlight:!0}],http2:{legacyRequests:[{label:"Request 1",blocks:[{label:"Send",type:"req"},{label:"Wait",type:"wait"},{label:"Receive",type:"res"}]},{label:"Request 2",blocks:[{label:"Queue",type:"wait"},{label:"Send",type:"req"},{label:"Wait",type:"wait"},{label:"Receive",type:"res"}]},{label:"Request 3",blocks:[{label:"Queue",type:"wait"},{label:"Queue",type:"wait"},{label:"Send",type:"req"},{label:"Receive",type:"res"}]}],modernStreams:[{label:"Stream 1",blocks:[{label:"Send",type:"req"},{label:"Receive",type:"res"}]},{label:"Stream 2",blocks:[{label:"Send",type:"req"},{label:"Receive",type:"res"}]},{label:"Stream 3",blocks:[{label:"Send",type:"req"},{label:"Receive",type:"res"}]}],legacyNote:"Serial transfer waits for the previous request to finish",modernNote:"Multiplexing transfers multiple requests concurrently"},https:{httpItems:["Plain-text transfer can be intercepted","Server identity cannot be verified","Data can be tampered with"],httpsItems:["Encrypted transfer prevents eavesdropping","SSL/TLS certificates verify identity","Integrity checks prevent tampering"],encryptedExample:"8f3a2b... (encrypted data)",steps:[{title:"Client Hello",desc:"The client sends supported cipher suites"},{title:"Server Hello",desc:"The server returns its certificate and selected cipher suite"},{title:"Verify certificate",desc:"The client verifies the server certificate"},{title:"Key exchange",desc:"A session key is generated"},{title:"Encrypted communication",desc:"Data is encrypted with the session key"}]}},serialization:{title:"Serialization Demo",panels:{object:{title:"In-memory object",desc:"An object in memory, usable only by the current process"},json:{title:"JSON string",desc:"Can be sent over the network and used across languages"},binary:{title:"Binary",desc:"Protobuf/MessagePack, smaller and faster"}},arrows:{serialize:"Serialize",transfer:"Transfer"},buttons:{reset:"Reset",steps:["Start serialization →","Convert to binary →","Transfer complete ✓","Done"]},comparisonTitle:"📊 Format comparison",comparisonHeaders:["Format","Size","Speed","Readability","Cross-language"],comparisonRows:[["JSON","★★★☆☆","★★★☆☆","★★★★★","★★★★★"],["XML","★★☆☆☆","★★☆☆☆","★★★★★","★★★★★"],["Protobuf","★★★★★","★★★★★","★☆☆☆☆","★★★★☆"],["MessagePack","★★★★☆","★★★★☆","★★☆☆☆","★★★★★"]],languages:{javascript:{id:"javascript",name:"JavaScript",objectCode:`const user = {
  id: 123,
  name: "Alice",
  email: "alice@example.com",
  age: 28
};`,jsonString:`{
  "id": 123,
  "name": "Alice",
  "email": "alice@example.com",
  "age": 28
}`,jsonSize:68,binaryString:`Hex encoding (MessagePack):
\\xa7 id 7b
\\xa4 name \\xa5 Alice
\\xa5 email \\xb1 alice@example.com
\\xa3 age 1c`,binarySize:52},python:{id:"python",name:"Python",objectCode:`user = {
    "id": 123,
    "name": "Alice",
    "email": "alice@example.com",
    "age": 28
}`,jsonString:`{
  "id": 123,
  "name": "Alice",
  "email": "alice@example.com",
  "age": 28
}`,jsonSize:68,binaryString:`Protobuf binary:
08 7b  # field 1, varint 123
12 05  # field 2, length 5
41 6c 69 63 65  # UTF-8 "Alice"
1a 11  # field 3, length 17
61 6c 69 63 65 40 65 78 61 6d 70 6c 65 2e 63 6f 6d
20 1c  # field 4, varint 28`,binarySize:38},java:{id:"java",name:"Java",objectCode:`User user = new User();
user.setId(123);
user.setName("Alice");
user.setEmail("alice@example.com");
user.setAge(28);`,jsonString:`{
  "id": 123,
  "name": "Alice",
  "email": "alice@example.com",
  "age": 28
}`,jsonSize:68,binaryString:`Java serialization:
AC ED 00 05 73 72 00 04 55 73 65 72
... (complex metadata)
actual size ~150 bytes`,binarySize:150},golang:{id:"golang",name:"Go",objectCode:`type User struct {
    ID    int
    Name  string
    Email string
    Age   int
}

user := User{
    ID: 123,
    Name: "Alice",
    Email: "alice@example.com",
    Age: 28,
}`,jsonString:`{
  "id": 123,
  "name": "Alice",
  "email": "alice@example.com",
  "age": 28
}`,jsonSize:68,binaryString:`Gob encoding:
0f ff 81 03 01 01 08 55 73 65 72 01
ff 82 00 01 02 01 04 69 64 01 04 01
02 6e 61 6d 65 01 04 05 65 6d 61 69 6c
... (efficient binary)`,binarySize:42}}}},t={"zh-cn":e,en:a};export{t as s};
