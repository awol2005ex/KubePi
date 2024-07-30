import el from "element-ui/lib/locale/lang/zh-CN" // 加载element的内容
import fu from "fit2cloud-ui/src/locale/lang/zh-CN" // 加载fit2cloud的内容


const message = {
  commons: {
    message_box: {
      alert: "警告",
      confirm: "确认",
      prompt: "提示",
    },
    personal: {
      back: "返回",
      exit: "退出",
      project_url: "项目地址",
      issue: "问题反馈",
      talk: "参与讨论",
      star: "点亮 Star",
      version: "版本",
      copy_right: "Copyright © 2021-2024 飞致云",
      introduction: "KubePi 是一个现代化的 K8s 面板。",
      introduction2: "KubePi 允许管理员导入多个 Kubernetes 集群，并且通过权限控制，将不同 cluster、namespace 的权限分配给指定用户。它允许开发人员管理 Kubernetes 集群中运行的应用程序并对其进行故障排查，供开发人员更好地处理 Kubernetes 集群中的复杂性。",
    },
    help: {
      help: "帮助",
      about: "关于",
      ko_docs: "官方文档",
      dev_doc: "开发文档",
    },
    button: {
      click_to_edit: "编辑信息",
      delete: "删除",
      import: "导入",
      create: "创建",
      cancel: "取消",
      login: "登录",
      confirm: "确定",
      yaml: "YAML",
      back_form: "返回表单",
      add: "添加",
      edit: "编辑",
      edit_yaml: "编辑 YAML",
      search: "搜索",
      upload: "从文件读取",
      view_form: "查看表单",
      view_yaml: "查看 YAML",
      download_yaml: "下载 YAML",
      download_kubeconfig: "下载 KubeConfig",
      open_shell: "打开 SHELL",
      back_detail: "返回详情",
      submit: "提交",
      show_diff: "差异对比",
      continue_edit: "继续编辑",
      terminal: "终端",
      logs: "日志",
      scale: "伸缩",
      restart: "重启",
      modifying_version: "修改镜像版本",
      sync: "同步",
      rollback: "回滚到该版本",
      refresh: "刷新",
      show_more: "更多",
      export: '导出',
    },
    table: {
      name: "名称",
      created_time: "存活时间",
      status: "状态",
      action: "操作",
      creat_by: "创建者",
      time: "时间",
      message: "消息",
      lastUpdateTime: "更新时间",
      type: "类型",
      resourceInformation: "资源信息",
      empty_text: "没有内容显示",
      version: "版本",
      image: "镜像",
      ready: "就绪",
    },
    status: {
      Running: "运行中",
      Succeeded: "成功",
      Failed: "失败",
      Terminated: "已销毁",
      Warninng: "警告",
      Pending: "等待",
      Unknown: "未知",
    },
    search: {
      quickSearch: "搜索"
    },
    form: {
      name: "名称",
      detail: "详情",
      setting: "设置",
      parameters: "参数"
    },
    validate: {
      limit: "长度在 {0} 到 {1} 个字符",
      input: "请输入{0}",
      select: "请选择{0}",
      required_input_msg: "输入项不能为空",
      required_select_msg: "选择项不能为空",
      number_limit: "请输入正确的数字",
      number_persent_rules: "请输入正确的正整数或百分比",
      name_rules: "仅支持小写英文、数字和-",
      url_rules: "请输入正确的url",
      params_not_complete: "参数不完整",
      required: "输入项不能为空",
    },
    msg: {
      operation_success: "操作成功",
      delete_success: "删除成功",
      create_success: "创建成功",
      update_success: "修改成功",
      create_failed: "创建失败",
      sync_success: "同步成功",
      upload_success: "上传成功",
    },
    confirm_message: {
      delete: "此操作不可撤销, 是否继续?",
      back_form: "返回表单编辑不会保留对 YAML 做出的所有更改",
      open_yaml: "，仍要打开 YAML 编辑？",
      rollback: "此操作将回滚当前 deployment 到改版本，是否继续?",
      change_to_download: "该文件超过 1M，直接打开将导致浏览器卡顿，是否下载？",
    },
    login: {
      username: "用户名",
      password: "密码",
      title: "登录 KubePi",
      welcome: "欢迎回来，请输入用户名和密码登录",
      expires: "认证信息已过期，请重新登录",
      table: {
        name: "名称",
        created_time: "创建时间"
      },
      search: {
        quickSearch: "搜索"
      },
      form: {
        name: "名称"
      }
    },
    actions:{
      copy: "复制",
    }
  },
  business: {
    common: {
      label: "标签",
      annotation: "注释",
      basic: "基本信息",
      expand: "展开",
      pack_up: "收起",
      system: "系统信息",
      config: "配置信息",
      resource: "资源信息",
      conditions: "运行时信息",
      service: "服务",
    },
    dashboard: {
      dashboard: "概览",
      metric_server_help: "未能检测到 metric server 服务，点击安装或重置",
      metric_server_install_help: "meterics-server 将在集群 kube-system 命名空间下，创建以下内容: ",
      has_permission: "已有权限",
      has_not_permission: "缺少权限",
      image: "镜像",
    },
    cluster: {
      cluster: "集群",
      version: "版本",
      list: "集群列表",
      import: "导入集群",
      nodes: "节点",
      api_server_help: "例如: https://172.16.10.100:8443",
      router_help: "装有 kube-proxy 的任意节点的且可以被访问到的 IP 地址",
      label: "标签",
      description: "描述"
    },
    event: {
      event: "事件",
      reason: "原因",
      type: "类型",
      time: "时间",
      resource: "对象",
      message: "消息",
      count: "次数"
    },
    node: {
      cordon: "暂停",
      uncordon: "恢复",
      drain: "驱散",
      existing_cordoned: "存在已暂停节点",
      existing_actived: "存在已激活节点",
      ready: "准备就绪",
      role: "角色",
      os: "操作系统",
      arch: "系统架构",
      osImage: "操作系统镜像",
      kernel: "操作系统内核",
      container: "容器 runtime 版本",
      kubelet_version: "kubelet 版本",
      kubeProxy_version: "kubeProxy 版本",
      drain_success: "排空节点成功",
      allocata: "已分配资源",
      health_statu: "健康状态",
      network_statu: "网络可用性",
      network_statu_help: "检查节点上的网络配置是否正确。",
      memory_statu: "内存压力 (MemoryPressure)",
      memory_statu_help: "如果节点上的内存使用压力过大，则调度失败。",
      disk_statu: "磁盘压力 (DiskPressure)",
      disk_statu_help: "磁盘大小存在压力 - 即磁盘容量低。",
      pid_statu: "进程压力 (PIDPressure)",
      pid_statu_help: "如果节点进程压力过大，则会调度失败。",
      node_statu: "节点就绪状态",
      node_statu_help: "节点是否可以接收新的容器组。",
      usage: "用量",
      core: "核",
      taints: "污点",
    },
    pod: {
      image: "镜像",
      eviction: "驱散",
      eviction_confirm: "Pod 驱散将进行以下操作，是否确定继续 ?",
      eviction_help1: "1. 将节点置为不可调度状态",
      eviction_help2: "2. 驱散该 pod",
      eviction_help3: "3. 将节点置为可调度状态",
      drain_success: "pod 驱散成功，请稍后刷新页面",
      time_stamp: "采样时间",
      windows: "采样时长",
      ready: "准备就绪",
      restart_count: "重启次数",
      type: "类别",
      reason: "原因",
      message: "信息",
      lastHeartbeatTime: "最后检测时间",
      lastTransitionTime: "最后迁移时间",
      lastUpdateTime: "最后更新时间",
      size: "大小",
      resource: "资源信息",
      address: "地址",
      watch: "追踪",
      lines: "行数",
      last_20_lines: "最后20行",
      last_100_lines: "最后100行",
      last_200_lines: "最后200行",
      last_500_lines: "最后500行",
      controller: "控制台  ",
      download_logs: "日志下载",
      start_time: "开始时间",
      limit_byte: "最大限制",
      download_log_help: "您将开始下载自 {0} 开始的最大 {1}Mb 日志文件 !",
      last_half_hour: "最近半小时",
      last_three_hour: "最近三小时",
      last_day: "最近一天",
      last_three_days: "最近三天",
      last_week: "最近一周",
      last_month: "最近一月",
      last_three_month: "最近三月",
      metric_server_tip: "由于 Metrics-Server 服务异常(可能是未启动)，所以暂无数据",
      pod_file: "文件浏览器",
      permission: "权限",
      last_update: "最后修改时间",
      create_folder: "创建文件夹",
      del_folder: "删除文件夹",
      create_file: "创建文件",
      del_file: "删除文件",
      file_content: "内容",
      edit_file: "修改文件",
      rename: "重命名",
      upload: "上传",
      upload_file: "上传文件",
      upload_folder: "上传文件夹",
      choose_file: "选择文件",
      download: "下载",
      upload_tip: "同名文件会被覆盖",
      name_helper: "支持 '/' 来创建多级目录",
      link_tip: "链接文件/文件夹 不支持此操作",
      previous: "上次失败的日志",
      timestamps: "显示日志时间"
    },
    namespace: {
      namespace: "命名空间",
      description: "描述"
    },
    workload: {
      workload: "工作负载",
      replicas: "副本数",
      pause: "暂停 Paused",
      pause_help: "暂停状态下修改 Deployment，将不会执行处理动作",
      resume: "激活 Resumed",
      container: "容器",
      container_type: "容器类型",
      current_version: "当前版本",
      new_version: "新版本",
      specific_information: "具体信息",
      initContainer: "初始化容器",
      standardContainer: "标准容器",
      schedule: "调度",
      lastScheduleTime: "最后的调度",
      suspend: "暂停",
      duration: "耗时",
      lastProbeTime: "最后采集时间",
      lastTransitionTime: "最后变更时间",
      restarts: "重启",
      current: "当前调度",
      desired: "期望期望",

      general: "基础信息",
      containers: "容器组",
      others: "其他",
      service_account: "服务账号",
      service_account_name: "服务账号名称",
      volume_claim_template: "存储卷声明模版",
      volume: "数据卷(Volume)",
      spec: "运行容器组",
      container_name: "容器名称",
      container_image: "容器镜像",
      pull_policy: "拉取策略",
      repo_help: "用镜像仓库将在当前 namespace 下生成包含镜像仓库连接信息的 secret，勾选将更新该信息",
      pull_secrets: "拉取密钥",
      list_image: "镜像仓库",
      repo_image: "镜像",
      repo_disabled: "不使用镜像仓库",

      port: "服务端口",
      service_type: "服务类型",
      not_create: "不创建服务",
      cluster_ip: "集群 IP",
      node_port: "节点端口",
      load_balancer: "负载均衡",
      name: "名称",
      container_port: "容器端口",
      protocol: "协议",
      expose: "暴露",
      host_port: "主机端口",
      listening_port: "监听端口",
      host_ip: "主机IP",
      application_port: "应用程序端口",
      service_port: "服务端口",
      service_port_help: "建议与容器端口一致",

      command: "命令",
      commands: "命令(CMD)",
      arguments: "参数(Args)",
      working_dir: "工作目录",
      once: "仅一次",
      type: "类型",
      stdin: "标准输入",
      environment_variable: "环境变量",
      prefix_variable: "内容(prefix/variable)",
      source: "来源",
      value: "值",
      variable: "环境变量",

      health_check: "健康检查",
      readiness_check: "就绪检查",
      liveness_check: "存活检查",
      startup_check: "启动检查",
      check_type: "检查类型",
      none: "无",
      http_option: "HTTP 请求返回成功状态（200-399）",
      https_option: "HTTPS 请求返回成功状态（200-399）",
      tcp_option: "TCP 连接正常",
      cmd_option: "容器内部命令运行正常",
      check_interval: "检查间隔",
      initial_delay: "初始延时",
      timeout: "超时时间",
      seccess_threshold: "成功阈值",
      failure_threshold: "失败阈值",
      header: "请求头",
      check_port: "检查端口",
      check_path: "请求路径",
      check_cmd: "检查命令",

      labels_annotations: "标签/注释",
      label: "标签",
      annotations: "注释",
      key: "键",
      selector: "选择器",
      edit_option: "编辑选项",
      edit: "修改",
      notice: "请注意：",
      recreate_tips: "在创建后不允许修改，所以此操作实际是先删后创建，您的应用程序在此期间将会不可用",

      network: "网络",
      add: "添加",
      network_mode: "网络模式",
      normal: "集群网络",
      host_network: "主机网络",
      dns_policy: "DNS 策略",
      hostname: "主机名",
      sub_domain: "域名",
      nameservers: "服务器地址",
      searches: "搜索域",
      dns_resolver: "DNS 解析",
      ip_address: "IP 地址",
      host_aliases: "主机别名",

      affinity: "亲和性",
      rules: "规则",
      affinity_or_anti: "亲和性/反亲和性",
      anti_affinity: "反亲和性",
      priority: "优先级",
      preferred: "优先",
      required: "必须",
      namespace_operation: "Namespace 选项",
      this_namespace: "当前 Namespace",
      these_namespace: "以下 Namespace",
      operator: "运算符",
      topology_key: "拓扑键",
      node_selector: "节点选择器",
      match_expressions: "表达式",
      match_labels: "标签选择",

      node_schedule: "节点选择",
      schedule_type: "调度类型",
      any_node: "任意可用节点",
      specific_node: "指定节点",
      match_rules: "调度规则匹配",
      weight: "权重",
      rule: "规则",
      node_name: "节点名称",

      toleration: "容忍",
      toleration_time: "容忍时间",
      effect: "影响",
      all: "所有",
      no_schedule: "不调度",
      prefer_no_schedule: "倾向于不调度",
      no_execute: "不执行",
      toleration_seconds: "容忍时间(秒)",
      seconds: "秒",
      times: "次",

      resource: "资源",
      reservation: "预留",
      memory: "内存",
      limit: "限制",

      upgrade_policy: "扩缩容/升级策略",
      deploy_strategy: "部署策略",
      strategy: "策略",
      restart_strategy: "重启策略",
      rolling_update: "滚动升级",
      recreate: "重新创建",
      max_surge: "最大 Pod 数量",
      max_unavaliable: "最大不可用数量",
      min_ready_time: "最小就绪时间(秒)",
      revision_history_limit: "修订历史记录限制",
      revision: "版本",
      progress_deadline: "进程截止时间(秒)",
      termination_grace_period: "终止宽限期(秒)",
      concurrency: "并发策略",
      allow_run: "允许多个 CronJobs 同时运行",
      skip_if_not_finish: "如果当前 Job 没结束，则跳过",
      replace_if_not_finish: "如果当前 Job 没结束，则替换运行",
      completions: "需完成数",
      completions_status: "完成状态",
      parallelism: "并发数",
      back_off_limit: "重试次数",
      active_deadline: "活跃终止时间",
      successful_job_history_limit: "历史成功累计",
      failed_job_history_limit: "历史失败累计",
      starting_deadline_seconds: "运行 job 截止时间",
      pod_active_deadline: "pod 存活判定截止时间",
      pod_manage_policy: "pod 管理策略",

      security_context: "安全",
      privileged: "特权模式",
      no: "否",
      full_access: "是，容器拥有访问主机全部权限",
      gain_more_privileges: "是，容器可以获取比其父进程更多的权限",
      non_root: "是，容器必须以非 root 用户的身份",
      filesystem_read_only: "是，容器有一个只读的文件系统",
      privilege_escalation: "允许权限提升",
      run_as_non_root: "是否以非 root 方式运行",
      read_only_root_filesystem: "只读 root 文件系统",
      run_as_user: "用户",
      run_as_group: "用户组",
      supplemental_groups: "补充用户组",
      proc_mount: "掩码挂载",
      add_capabilities: "增加权限",
      drop_capabilities: "弃用权限",
      seLinuxOptions: "SELinux 选项",

      storage: "存储",
      yes: "是",
      pvc: "持久卷",
      path: "映射目标路径",
      volume_name: "卷名称",
      volume_mount: "挂载卷",
      mount: "挂载点",
      default_mode: "默认模式",
      optional: "可选",
      mount_point: "挂载路径",
      sub_path_in_volume: "卷内子路径",
      read_only: "只读",

      pv_name: "持久卷名称",
      new_pv: "使用存储类创建新的持久卷(PVC)",
      existing_pv: "使用已有的持久卷(PV)",
      storage_class: "存储类",
      size: "容量",
      access_modes: "访问模式",
      single_read_write: "单节点读写",
      many_read_only: "多节点只读",
      many_read_write: "多节点读写",

    },
    network: {
      service_discovery: "服务发现",
      network: "网络",
      protocol: "协议",
      port: "端口",
      rule: "规则",
      host: "域名",
      path: "路径",
      path_type: "路径类型",
      service_name: "Service 名称",
      service_detail_help: "此处显示与 {0} 同名的 Service: {1}，但是您并未定义此 Service。",
      ingress_router: "应用路由",
      ingress_detail_help: "此处显示与 {0} 同名的 Ingress: {1}，但是您并未定义此 Ingress。",
      service_port: "Service 端口",
      target: "目标",
      pod_selector: "Pod 选择器",
      port_name: "端口名称",
      listening_port: "监听端口",
      target_port: "目标端口",
      ip_address: "IP 地址",
      external_ip: "外部IP",
      selector: "选择器",
      default_backend: "默认后端",
      verbs: "动作",
      non_resource_url: "非资源URL",
      api_group: "API 组",
      node_port: "节点端口",
      relationship_chart: "关系图",
    },
    storage: {
      provisioner: "提供商",
      path_or_node: "路径或节点",
      storage: "存储",
      accessModes: "访问模式",
      capacity: "容量 Gi",
      reclaimPolicy: "回收策略",
      storageClass: "存储类",
      volumeBindingMode: "卷绑定模式",
      claim: "要求",
      pvSource: "VolumeClaim Source",
      assignSc: "绑定 StorageClass",
      assignPv: "绑定 PersistentVolume",
      DirectoryOrCreateLabel: "DirectoryOrCreate: 如果路径不存在则创建空目录，默认权限为0755 ",
      DirectoryLabel: "Directory: 路径必须存在",
      FileOrCreateLabel: "FileOrCreate: 如果路径上什么都不存在，则创建空文件，默认权限为：0644",
      FileLabel: "File: 路径上必须存在的文件 ",
      SocketLabel: "Socket: 路径上必须存在的 UNIX 套接字 ",
      CharDeviceLabel: "CharDevice: 路径上必须存在的字符设备 ",
      BlockDeviceLabel: "BlockDevice: 路径上必须存在的块设备，例: /dev/sda1 ",
      default: "默认",
      change_default: "更改默认状态",
      volumeMode: "卷类型",
      persistentVolumeReclaimPolicy:"回收策略"
    },
    configuration: {
      configuration: "配置",
      data: "数据",
      no_data: "没有数据可显示",
      type: "类型",
      basic_auth: "基本身份认证",
      ssh_auth: "SSH 身份认证",
      tls_auth: "TLS",
      token_auth: "令牌",
      cluster_ip: "集群 IP",
      selector: "选择",
      registry_domain_name: "仓库地址",
      username: "用户名",
      password: "密码",
      authentication: "基本身份认证",
      certificate: "证书",
      publicKey: "公钥",
      privateKey: "私钥",
      target: "目标",
      metrics: "指标",
      min_replicas: "最小副本数",
      max_replicas: "最大副本数",
      current_replicas: "当前副本数",
      target_reference: "目标引用",
      source: "来源",
      resource_name: "资源名称",
      quantity: "数量",
      metrics_name: "指标名称",
      metrics_selector: "指标选择器",
      api_version: "API 版本",
      kind: "类型",
      name: "名称",
      split_help: "多个值时以逗号分隔",
      best_effort: "{0} 范围限制了跟踪以下资源的配额:",
      certificate_info: "证书信息",
      certificate_signatureAlgorithm: "证书签名算法",
      certificate_validity: "证书有效期",
      certificate_outdate: "证书已过期",
      certificate_errors: "证书错误"
    },
    access_control: {
      access_control: "访问控制",
      resource_helper: "多个项目请用,分隔",
      object: "对象",
      ref: "关联",
      role: "角色",
      authorized: "授权",
      api_group: "API 组"
    },
    custom_resource: {
      custom_resource: "自定义资源",
      full_name: "全名",
      namespaced: "有命名空间的",
      version: "版本",
      scope: "范围",
      names: "允许的名称",
      singular: "单数",
      plural: "复数",
      served: "服务",
      storage: "存储",
      status: "状态"
    },
    user: {
      user_management: "用户与权限",
      user_group: "用户组",
      nickname: "昵称",
      email: "邮箱",
      user_list: "用户列表",
      user_group_list: "用户组列表",
      role_list: "角色列表",
      user: "用户",
      role: "角色",
    },
    chart: {
      marketPlace: "应用市场",
      is_over: "已经到底了",
      app: "应用",
      chart: "Chart 仓库",
      type: "类型",
      branch: "分支",
      create: "创建",
      name: "名称",
      http: "指向 Helm 生成的索引 http(s) URL",
      git: "包含定义了 Helm Chart 的 Git 仓库",
      auth: "认证",
      none: "无",
      basic: "基本认证",
      username: "用户名",
      password: "密码",
      publicKey: "公钥",
      privateKey: "私钥",
      install: "安装",
      namespace: "命名空间",
      app_installed: "已安装应用",
      version: "版本",
      upgrade: "升级",
      repo: "repo不存在"
    }
  },
}


export default {
  ...el,
  ...fu,
  ...message
}
