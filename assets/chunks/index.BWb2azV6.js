const e={architecture:{title:"Kubernetes 架构",subtitle:"点击组件查看详细说明",controlPlaneTitle:"控制平面（Control Plane）",workerNodeTitle:"工作节点（Worker Node）× N",analogyLabel:"类比：",controlPlane:[{key:"api-server",name:"API Server",desc:'Kubernetes 的"前门"，所有操作（kubectl、Dashboard、内部组件）都通过 API Server 进行。它负责认证、授权、准入控制，是集群的唯一入口。',analogy:"公司前台，所有访客和快递都要经过前台登记"},{key:"etcd",name:"etcd",desc:'分布式键值存储，保存集群的所有状态数据：Pod 信息、Service 配置、Secret 等。它是集群的"记忆"，丢失 etcd 数据等于丢失整个集群。',analogy:"公司的档案室，记录所有员工信息和规章制度"},{key:"scheduler",name:"Scheduler",desc:"负责将新创建的 Pod 分配到合适的节点上。它会考虑资源需求、亲和性规则、污点容忍等因素，做出最优调度决策。",analogy:"HR 部门，根据岗位需求把新员工分配到合适的部门"},{key:"controller",name:"Controller Manager",desc:"运行各种控制器（Deployment、ReplicaSet、Job 等），持续监控集群状态，确保实际状态与期望状态一致。如果 Pod 挂了，控制器会自动重建。",analogy:"各部门经理，确保每个部门的人员配置符合编制要求"}],workerNode:[{key:"kubelet",name:"kubelet",desc:'每个节点上的"代理人"，负责管理本节点上的 Pod 生命周期。它接收 API Server 的指令，调用容器运行时创建/销毁容器，并上报节点状态。',analogy:"每个工位上的组长，负责管理组员的日常工作"},{key:"kube-proxy",name:"kube-proxy",desc:"负责实现 Service 的网络规则，将访问 Service 的流量转发到对应的 Pod。它维护节点上的 iptables/IPVS 规则，实现负载均衡。",analogy:"公司的电话总机，把外部来电转接到正确的分机"},{key:"runtime",name:"容器运行时",desc:"实际运行容器的组件，如 containerd、CRI-O。kubelet 通过 CRI（容器运行时接口）与它交互，它负责拉取镜像、创建和管理容器。",analogy:"实际干活的工人，按照指令完成具体的生产任务"}]},workloads:{title:"K8s 核心资源",subtitle:"点击资源类型查看说明和 YAML 示例",yamlLabel:"YAML 示例",tipLabel:"要点：",resources:[{key:"pod",name:"Pod",category:"最小调度单元",desc:"Pod 是 K8s 中最小的部署单元，包含一个或多个紧密关联的容器。同一 Pod 内的容器共享网络和存储，可以通过 localhost 互相通信。",yaml:`apiVersion: v1
kind: Pod
metadata:
  name: my-app
spec:
  containers:
    - name: app
      image: my-app:1.0
      ports:
        - containerPort: 3000`,tips:"生产环境中很少直接创建 Pod，通常通过 Deployment 管理。"},{key:"deployment",name:"Deployment",category:"工作负载",desc:'Deployment 管理 Pod 的副本数、滚动更新和回滚。你声明"我要 3 个副本运行 v1.0"，Deployment 控制器会确保始终有 3 个健康的 Pod 在运行。',yaml:`apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
        - name: app
          image: my-app:1.0`,tips:"更新镜像版本后，Deployment 会自动执行滚动更新，逐步替换旧 Pod。"},{key:"service",name:"Service",category:"网络",desc:"Service 为一组 Pod 提供稳定的访问入口。Pod 的 IP 会变，但 Service 的 ClusterIP 和 DNS 名称不变。它通过 label selector 找到对应的 Pod，并做负载均衡。",yaml:`apiVersion: v1
kind: Service
metadata:
  name: my-app-svc
spec:
  selector:
    app: my-app
  ports:
    - port: 80
      targetPort: 3000
  type: ClusterIP`,tips:"ClusterIP（集群内访问）、NodePort（节点端口）、LoadBalancer（云负载均衡器）是三种常用类型。"},{key:"configmap",name:"ConfigMap",category:"配置",desc:"ConfigMap 存储非敏感的配置数据（如数据库地址、功能开关），可以作为环境变量或文件挂载到 Pod 中。修改 ConfigMap 后可以不重建镜像就更新配置。",yaml:`apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  DB_HOST: "db.example.com"
  LOG_LEVEL: "info"`,tips:"敏感数据（密码、密钥）应该用 Secret 而不是 ConfigMap。"},{key:"ingress",name:"Ingress",category:"网络",desc:'Ingress 管理集群的外部 HTTP/HTTPS 访问入口，支持基于域名和路径的路由规则。它是集群的"反向代理"，通常配合 Nginx Ingress Controller 使用。',yaml:`apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-ingress
spec:
  rules:
    - host: app.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: my-app-svc
                port:
                  number: 80`,tips:"Ingress 需要 Ingress Controller 才能工作，它本身只是路由规则的声明。"}]}},a={architecture:{title:"Kubernetes Architecture",subtitle:"Click a component to inspect the details",controlPlaneTitle:"Control Plane",workerNodeTitle:"Worker Node x N",analogyLabel:"Analogy:",controlPlane:[{key:"api-server",name:"API Server",desc:"The front door of Kubernetes. All operations from kubectl, dashboards, and internal components go through the API Server. It handles authentication, authorization, admission control, and acts as the single entry point for the cluster.",analogy:"A company reception desk where every visitor and delivery is checked in"},{key:"etcd",name:"etcd",desc:"A distributed key-value store that keeps all cluster state: Pod data, Service configuration, Secrets, and more. It is the cluster memory; losing etcd data means losing the cluster state.",analogy:"A records room that stores employee information and company rules"},{key:"scheduler",name:"Scheduler",desc:"Assigns newly created Pods to suitable nodes. It considers resource requests, affinity rules, taints, tolerations, and other constraints before making a scheduling decision.",analogy:"An HR team assigning new employees to the right departments"},{key:"controller",name:"Controller Manager",desc:"Runs controllers such as Deployment, ReplicaSet, and Job controllers. It continuously watches cluster state and reconciles actual state with desired state. If a Pod fails, the controller recreates it.",analogy:"Department managers keeping staffing aligned with the plan"}],workerNode:[{key:"kubelet",name:"kubelet",desc:"The agent on every node. It manages the Pod lifecycle on that node, receives instructions from the API Server, calls the container runtime to create or destroy containers, and reports node status.",analogy:"A team lead at each workstation managing daily work"},{key:"kube-proxy",name:"kube-proxy",desc:"Implements Service networking rules and forwards Service traffic to matching Pods. It maintains iptables or IPVS rules on the node to provide load balancing.",analogy:"A company switchboard routing external calls to the right extension"},{key:"runtime",name:"Container runtime",desc:"The component that actually runs containers, such as containerd or CRI-O. kubelet talks to it through the CRI to pull images, create containers, and manage containers.",analogy:"Workers carrying out concrete production tasks from instructions"}]},workloads:{title:"K8s Core Resources",subtitle:"Click a resource type to inspect the explanation and YAML example",yamlLabel:"YAML example",tipLabel:"Tip:",resources:[{key:"pod",name:"Pod",category:"Smallest scheduling unit",desc:"A Pod is the smallest deployable unit in K8s. It contains one or more tightly related containers. Containers inside the same Pod share networking and storage, so they can communicate through localhost.",yaml:`apiVersion: v1
kind: Pod
metadata:
  name: my-app
spec:
  containers:
    - name: app
      image: my-app:1.0
      ports:
        - containerPort: 3000`,tips:"Production workloads rarely create Pods directly; they are usually managed by Deployments."},{key:"deployment",name:"Deployment",category:"Workload",desc:"A Deployment manages Pod replicas, rolling updates, and rollbacks. You declare that three replicas should run version 1.0, and the Deployment controller keeps three healthy Pods running.",yaml:`apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
        - name: app
          image: my-app:1.0`,tips:"After you update the image version, the Deployment performs a rolling update and gradually replaces old Pods."},{key:"service",name:"Service",category:"Networking",desc:"A Service provides a stable access point for a group of Pods. Pod IPs can change, but the Service ClusterIP and DNS name stay stable. It finds matching Pods through label selectors and load balances traffic.",yaml:`apiVersion: v1
kind: Service
metadata:
  name: my-app-svc
spec:
  selector:
    app: my-app
  ports:
    - port: 80
      targetPort: 3000
  type: ClusterIP`,tips:"ClusterIP, NodePort, and LoadBalancer are the three common Service types."},{key:"configmap",name:"ConfigMap",category:"Configuration",desc:"A ConfigMap stores non-sensitive configuration such as database addresses and feature flags. It can be mounted into Pods as environment variables or files, allowing configuration updates without rebuilding the image.",yaml:`apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  DB_HOST: "db.example.com"
  LOG_LEVEL: "info"`,tips:"Sensitive data such as passwords and keys should use Secrets instead of ConfigMaps."},{key:"ingress",name:"Ingress",category:"Networking",desc:"Ingress manages external HTTP and HTTPS entry points for the cluster. It supports host-based and path-based routing and usually works with an Ingress Controller such as Nginx Ingress Controller.",yaml:`apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-ingress
spec:
  rules:
    - host: app.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: my-app-svc
                port:
                  number: 80`,tips:"Ingress needs an Ingress Controller to work; by itself it only declares routing rules."}]}},t={"zh-cn":e,en:a};export{t as k};
