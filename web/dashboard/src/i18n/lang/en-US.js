import el from "element-ui/lib/locale/lang/en"
import fu from "fit2cloud-ui/src/locale/lang/en_US" // 加载fit2cloud的内容

const message = {
  commons: {
    message_box: {
      alert: "Warning",
      confirm: "Confirm",
      prompt: "Prompt",
    },
    personal: {
      back: "Back",
      exit: "Exit",
      project_url: "Project Address",
      issue: "Feedback",
      talk: "Participate in the discussion",
      star: "Star",
      version: "Version",
      introduction: "KubePi is a modern K8s panel.",
      introduction2: "KubePi allows administrators to import multiple Kubernetes clusters and assign permissions of different clusters and namespaces to specific users through permission control. It allows developers to manage and troubleshoot applications running in the Kubernetes cluster to better deal with the complexity in the Kubernetes cluster."
    },
    help: {
      help: "Help",
      about: "About",
      ko_docs: "Official Document",
    },
    button: {
      click_to_edit: "Click to edit",
      delete: "Delete",
      import: "Import",
      create: "Create",
      cancel: "Cancel",
      login: "Login",
      confirm: "OK",
      yaml: "YAML",
      back_form: "Back to Form",
      add: "Add",
      edit: "Edit",
      edit_yaml: "Edit YAML",
      search: "Search",
      upload: "Read from file",
      view_form: "View Form",
      view_yaml: "View YAML",
      download_yaml: "Download YAML",
      download_kubeconfig: "Download KubeConfig",
      open_shell: "Open SHELL",
      back_detail: "Back to Details",
      submit: "Submit",
      show_diff: "Diff Contrast",
      continue_edit: "Continue Edit",
      terminal: "Terminal",
      logs: "Log",
      scale: "Scale",
      restart: "Restart",
      modifying_version: "Modifying version",
      sync: "Sync",
      rollback: "Roll Back",
      refresh: "Refresh",
      show_more: "Show More",
    },
    table: {
      name: "Name",
      created_time: "Age",
      status: "Status",
      action: "Action",
      creat_by: "Creator",
      time: "Time",
      message: "Message",
      lastUpdateTime: "Update Time",
      type: "Type",
      resourceInformation: "Resource Information",
      empty_text: "There are no rows to show.",
      version: "Version",
      image: "Image",
      ready: "Ready",
    },
    status: {
      Running: "Running",
      Succeeded: "Succeeded",
      Failed: "Failed",
      Terminated: "Terminated",
      Warninng: "Warninng",
      Pending: "Pending",
      Unknown: "Unknown",
    },
    search: {
      quickSearch: "Search"
    },
    form: {
      name: "Name",
      detail: "Details",
      setting: "Setting",
      parameters: "Parameters"
    },
    validate: {
      limit: "The length is between {0} and {1} characters",
      input: "Please enter {0}",
      select: "Please select {0}",
      required_input_msg: "The input item cannot be empty",
      required_select_msg: "Select item cannot be empty",
      number_limit: "Please enter the correct number",
      number_persent_rules: "Please enter a correct positive integer or percentage",
      name_rules: "Only lowercase English, numbers and-are supported",
      url_rules: "Please enter the correct url",
      params_not_complete: " params is not complete",
      required: "The input item cannot be empty",
    },
    msg: {
      operation_success: "Operation successfully",
      delete_success: "Delete successfully",
      create_success: "Created successfully",
      update_success: "Modified successfully",
      create_failed: "Created failed",
      sync_success: "Sync successfully",
      upload_success: "Upload successfully",
    },
    confirm_message: {
      delete: "This operation cannot be undone, do you want to continue?",
      back_form: "Return form editing does not preserve all changes made to YAML",
      open_yaml: ", still want to open YAML edit?",
      rollback: "This action rolls back the current Deployment to the changed version, do you want to continue?",
      change_to_download: "The file is over 1M. Opening it directly will cause browser lag. Should I download it?",
    },
    login: {
      username: "Username",
      password: "Password",
      title: "Log in to KubePi",
      welcome: "Welcome back, please enter your username and password to log in",
      expires: "The authentication information has expired, please log in again",
      table: {
        name: "Name",
        created_time: "Created time"
      },
      search: {
        quickSearch: "Search"
      },
      form: {
        name: "Name"
      }
    },
actions:{
      copy: "Copy",
    }
  },
  business: {
    common: {
      label: "Label",
      annotation: "Annotation",
      basic: "Basic Information",
      expand: "Expand",
      pack_up: "Pack Up",
      system: "System Information",
      config: "Configuration Information",
      resource: "Resource Information",
      conditions: "Conditions",
      service: "Service",
    },
    dashboard: {
      dashboard: "Dashboard",
      metric_server_help: "Failed to detect Metric Server service, click Install or Reset",
      metric_server_install_help: "Meterics server will create the following under the cluster kube-system namespace: ",
      has_permission: "Existing permissions",
      has_not_permission: "lack permissions",
      image: "image",
    },
    cluster: {
      cluster: "Cluster",
      version: "Version",
      list: "Cluster List",
      import: "Import Cluster",
      nodes: "Node",
      api_server_help: "eg: https://172.16.10.100:8443",
      router_help: "The accessible IP address of any node with kube-proxy installed",
      label: "Label",
      description: "Description"
    },
    event: {
      event: "Events",
      reason: "Reason",
      type: "Type",
      time: "Time",
      resource: "Resource",
      message: "Message",
      restart: "Count"
    },
    node: {
      cordon: "Cordon",
      uncordon: "Uncordon",
      drain: "Drain",
      existing_cordoned: "The node cordoned already exists",
      existing_actived: "The node actived already exists",
      ready: "Ready",
      role: "Role",
      os: "OS",
      arch: "Arch",
      osImage: "OS Image",
      kernel: "Kernel",
      container: "Container",
      kubelet_version: "Kubelet Version",
      kubeProxy_version: "KubeProxy Version",
      drain_success: "Drain Nodes Success",
      allocata: "Allocated Resources",
      health_statu: "Health Status",
      network_statu: "Network Availability",
      network_statu_help: "Check if the network configuration on the node is available.",
      memory_statu: "Memory Pressure",
      memory_statu_help: "If the memory usage pressure on the node is too high, the scheduling fails.",
      disk_statu: "Disk Pressure",
      disk_statu_help: "If pressure exists on the disk size - that is, if the disk capacity is low.",
      pid_statu: "PID Pressure",
      pid_statu_help: "If pressure exists on the processes—that is, if there are too many processes on the node.",
      node_statu: "Node Readiness",
      node_statu_help: "Whether the node is ready to accept new pods.",
      usage: " usage",
      core: "core",
    },
    pod: {
      image: "Image",
      eviction: "Eviction",
      eviction_confirm: "Pod eviction will proceed as follows, whether it is determined to continue?",
      eviction_help1: "1. Set the node to the unschedulable state",
      eviction_help2: "2. Eviction the pod",
      eviction_help3: "3. Set the node to the schedulable state",
      drain_success: "Pod eviction succeeded, please refresh the page later",
      time_stamp: "Timestamp",
      windows: "Windows",
      ready: "Ready",
      restart_count: "Restart count",
      type: "Type",
      reason: "Reason",
      message: "Message",
      lastUpdateTime: "Last Update Time",
      lastHeartbeatTime: "Last Heartbeat Time",
      lastTransitionTime: "Last Transition Time",
      size: "Size",
      resource: "Resource",
      address: "Address",
      watch: "Watch",
      lines: "Lines",
      last_20_lines: "Last 20 lines",
      last_100_lines: "Last 100 lines",
      last_200_lines: "Last 200 lines",
      last_500_lines: "Last 500 lines",
      controller: "Controller  ",
      download_logs: "Download logs",
      start_time: "Start time",
      limit_byte: "Limit byte",
      download_log_help: "You will start downloading the Max {1}Mb log files from {0} !",
      last_half_hour: "half hour ago",
      last_three_hour: "3 hours ago",
      last_day: "A day ago",
      last_three_days: "3 days ago",
      last_week: "A week ago",
      last_month: "A month ago",
      last_three_month: "3 months ago",
      metric_server_tip: "Since the  Metrics-Server service is not started, there is no data in the Cpu (Cores) and Memory (bytes) ",
      pod_file: "File Browser",
      permission: "Permission",
      last_update: "Last Update Time",
      create_folder: "Create Folder",
      del_folder: "Delete Folder",
      create_file: "Create File",
      del_file: "Delete File",
      file_content: "Content",
      edit_file: "Edit File",
      rename: "Rename",
      upload: "Upload",
      upload_file: "Upload File",
      upload_folder: "Upload Folder",
      choose_file: "File",
      download: "Download",
      upload_tip: "Files with the same name will be overwritten",
      name_helper: "Support '/' to create multi-level directories",
      link_tip: "This operation is not supported for linked files/folders",
      previous: "last failure log",
    },
    namespace: {
      namespace: "Namespace",
      description: "Description"
    },
    workload: {
      workload: "Workload",
      replicas: "Replicas",
      pause: "Paused",
      pause_help: "Modifying the Deployment in the suspended state will not perform the processing action",
      resume: "Resumed",
      container: "Container",
      container_type: "Container type",
      current_version: "Current version",
      new_version: "New version",
      specific_information: "Specific information",
      initContainer: "InitContainer",
      standardContainer: "StandardContainer",
      schedule: "Schedule",
      lastScheduleTime: "Last Schedule Time",
      suspend: "Suspend",
      duration: "Duration",
      lastProbeTime: "lastProbeTime",
      lastTransitionTime: "lastTransitionTime",
      restarts: "Restarts",
      current: "Current",
      desired: "Desired",

      general: "General",
      containers: "Containers",
      service_account: "Service Account",
      service_account_name: "Service account name",
      others: "Others",
      volume_claim_template: "Volume Claim Template",
      volume: "Volume",
      spec: "Spec",
      container_name: "Container Name",
      container_image: "Container Image",
      pull_policy: "Pull Policy",
      repo_help: "Using the mirror repository will generate secret containing the mirror repository connection information under the current namespace, check will update this information",
      pull_secrets: "Pull Secrets",
      list_image: "Image Repo",
      repo_image: "Image",
      repo_disabled: "Do not use Image Repo",

      port: "Port",
      service_type: "Service Type",
      not_create: "Not Create A Service",
      cluster_ip: "Cluster IP",
      node_port: "Node Port",
      load_balancer: "Load Balancer",
      name: "Name",
      container_port: "Container Port",
      protocol: "Protocol",
      expose: "Expose",
      host_port: "Host Port",
      listening_port: "Listening Port",
      host_ip: "Host IP",
      application_port: "Application Port",
      service_port: "Service Port",
      service_port_help: "You are advised to use the same container port",

      command: "Command",
      commands: "Commands",
      arguments: "Arguments",
      working_dir: "WorkingDir",
      once: "Once",
      type: "Type",
      stdin: "Stdin",
      environment_variable: "Environment Variable",
      prefix_variable: "Prefix/Variable",
      source: "Source",
      value: "Value",
      variable: " Variable",

      health_check: "Health Check",
      readiness_check: "Readiness Check",
      liveness_check: "Liveness Check",
      startup_check: "Startup Check",
      check_type: "Type",
      none: "None",
      http_option: "HTTP request returns a successful status (200-399)",
      https_option: "HTTPS request returns a successful status",
      tcp_option: "TCP connection opens successfully",
      cmd_option: "Command run inside the container exits with status 0",
      check_interval: "Check Interval",
      initial_delay: "Initial Delay",
      timeout: "Timeout",
      seccess_threshold: "Seccess Threshold",
      failure_threshold: "Failure Threshold",
      header: "Header",
      check_port: "Check Port",
      check_path: "Request Path",
      check_cmd: "Command To Run",

      labels_annotations: "Labels/Annotations",
      label: "Label",
      annotations: "Annotations",
      key: "key",
      selector: "Selector",
      edit_option: "Edit Option",
      edit: "Edit",
      notice: "Notice",
      recreate_tips: "is not allowed to change after creation, so this operation is actually deleted and then created, and your application will be unavailable in the meantime",

      network: "Networking",
      add: "Add",
      network_mode: "Network Mode",
      normal: "Normal",
      host_network: "Host network",
      dns_policy: "DNS Policy",
      hostname: "Hostname",
      sub_domain: "Subdomain",
      nameservers: " Nameservers",
      searches: " Searches",
      dns_resolver: "DNS Resolver Options",
      ip_address: "IP Address",
      host_aliases: " Host Aliases",

      affinity: "Affinity",
      rules: "Rules",
      affinity_or_anti: "Affinity / Anti",
      anti_affinity: "Anti-Affinity",
      priority: "Priority",
      preferred: "Preferred",
      required: "Required",
      namespace_operation: "Namespace Operation",
      this_namespace: "This pod's namespace",
      these_namespace: "Pods in these namespaces",
      operator: "Operator",
      topology_key: "Topology Key",
      node_selector: " Node Selector",
      match_expressions: " Match Expression",
      match_labels: " Match Label",

      node_schedule: "Node Scheduling",
      schedule_type: "Scheduling Type",
      any_node: "Run pods on any avaliable node",
      specific_node: "Run pods on specific node(s)",
      match_rules: "Run pods on node(s) matching scheduling rules",
      weight: "Weight",
      rule: "Rule",
      node_name: "Node Name",

      toleration: " Tolerations",
      toleration_time: "Tolerations time",
      effect: "Effect",
      all: "All",
      no_schedule: "NoSchedule",
      prefer_no_schedule: "PreferNoSchedule",
      no_execute: "NoExecute",
      toleration_seconds: "Toleration Seconds",
      seconds: "Secends",
      times: "Times",

      resource: "Resources",
      reservation: " Reservation",
      memory: "Memory",
      limit: " Limit",

      upgrade_policy: "Update Policy",
      deploy_strategy: "Deploy strategy",
      strategy: "Strategy",
      restart_strategy: "Restart strategy",
      rolling_update: "Rolling Updatate",
      recreate: "Recreate",
      max_surge: "Max Surge",
      max_unavaliable: "Max Unavailable",
      min_ready_time: "Minimum Ready Time(s)",
      revision_history_limit: "Revision History Limit",
      revision: "Revision",
      progress_deadline: "Progress Deadline(s)",
      termination_grace_period: "Termination Grace Period(s)",
      concurrency: "Concurrency",
      allow_run: "Allow cronJobs to run concurrently",
      skip_if_not_finish: "Skip next if current run hasn't finished",
      replace_if_not_finish: "Replace run if current run hasn't finished",
      completions: "Completions",
      completions_status: "Completion Status",
      parallelism: "Parallelism",
      back_off_limit: "Back Off Limit",
      active_deadline: "Active Deadline",
      successful_job_history_limit: "Successful Job History Limit",
      failed_job_history_limit: "Failed Job History Limit",
      starting_deadline_seconds: "Starting Deadline Seconds",
      pod_active_deadline: "Pod Active Deadline",
      pod_manage_policy: "Pod Manage Policy",

      security_context: "Security Context",
      privileged: "Privileged",
      no: "No",
      full_access: "Yes: container has full access to the host",
      gain_more_privileges: "Yes: container can gain more privileges than its parent process",
      non_root: "Yes: container must run as a non-root user",
      filesystem_read_only: "Yes: container has a read-only root filesystem",
      privilege_escalation: "Privilege Escalation",
      run_as_non_root: "Run As Non-Root",
      read_only_root_filesystem: "Read-Only Root Filesystem",
      run_as_user: "Run As User",
      run_as_group: "Run As Group",
      supplemental_groups: "Supplemental Groups",
      proc_mount: "Proc Mount",
      add_capabilities: "Add Capabilities",
      drop_capabilities: "Drop Capabilities",
      seLinuxOptions: "SeLinux Options",

      storage: "Storage",
      yes: "Yes",
      pvc: "PVC",
      path: "Target Path",
      volume_name: "Volume Name",
      volume_mount: "Valume Mount",
      mount: "Mount",
      default_mode: "Default Mode",
      optional: "Optional",
      mount_point: "Mount Point",
      sub_path_in_volume: "Sub Path In Volume",
      read_only: "Read Only",

      pv_name: "Persistent Volume Name",
      new_pv: "Use a storage class to provision a new persistent volume",
      existing_pv: "Use an existing persistent volume",
      storage_class: "Storage Class",
      size: "Size",
      access_modes: "Access Modes",
      single_read_write: "Single-Node(Read/Write)",
      many_read_only: "Many-Node(Read-Only)",
      many_read_write: "Many-Node(Read/Write)",
    },
    network: {
      service_discovery: "Service Discovery",
      network: "Network",
      protocol: "Protocol",
      port: "Port",
      rule: "Rule",
      host: "Host",
      path: "Path",
      path_type: "Path Type",
      service_name: "Service Name",
      service_detail_help: "Service: {1} with the same name as {0} is shown here, but you did not define this Service.",
      ingress_router: "Ingress",
      ingress_detail_help: "Ingress: {1} with the same name as {0} is shown here, but you did not define the Ingress.",
      service_port: "Service Port",
      target: "Target",
      pod_selector: "Pod Selector",
      port_name: "Port Name",
      listening_port: "Listening Port",
      target_port: "Target Port",
      ip_address: "IP Address",
      external_ip: "External IP",
      selector: "selector",
      default_backend: "Default Backend",
      verbs: "Verbs",
      non_resource_url: "Non Resource URL",
      api_group: "API Group",
      node_port: "Node Port",
    },
    storage: {
      provisioner: "Provisioner",
      path_or_node: "Path Or Node",
      storage: "Storage",
      accessModes: "AccessModes",
      capacity: "Capacity",
      reclaimPolicy: "Reclaim Policy",
      storageClass: "Storage Class",
      volumeBindingMode: "Volume Binding Mode",
      claim: "Claim",
      pvSource: "PV Source",
      assignSc: "Assign Storage Class",
      assignPv: "Assign Persistent Volume",
      DirectoryOrCreateLabel: "DirectoryOrCreate: If the path does not exist, an empty directory is created. The default permission is 0755.",
      DirectoryLabel: "Directory: Path must exist.",
      FileOrCreateLabel: "FileOrCreate: If nothing exists on the path, an empty file is created. The default permission is 0644",
      FileLabel: "File: Files that must exist on the path",
      SocketLabel: "Socket: UNIX socket that must exist on the path",
      CharDeviceLabel: "CharDevice: Character devices that must exist on the path",
      BlockDeviceLabel: "BlockDevice: The path must contain a block device, for example, /dev/sda1",
      default: "Default",
      change_default: "Change Default",
      volumeMode: "Volume Mode",
      persistentVolumeReclaimPolicy:"PersistentVolumeReclaimPolicy",
    },
    configuration: {
      configuration: "Configuration",
      data: "Data",
      no_data: "No Data",
      type: "Type",
      basic_auth: "Basic Auth",
      ssh_auth: "SSH Auth",
      tls_auth: "TLS",
      token_auth: "Token Auth",
      cluster_ip: "Cluster IP",
      selector: "Selector",
      registry_domain_name: "Registry Url",
      username: "Username",
      password: "Password",
      authentication: "Authentication",
      certificate: "Certificate",
      publicKey: "PublicKey",
      privateKey: "PrivateKey",
      target: "Target",
      metrics: "Metrics",
      min_replicas: "Min Replicas",
      max_replicas: "Max Replicas",
      current_replicas: "Current Replicas",
      target_reference: "Target Reference",
      source: "Source",
      resource_name: "Resource Name",
      quantity: "Quantity",
      metrics_name: "Metrics Name",
      metrics_selector: "Metrics Selector",
      api_version: "API Version",
      kind: "Kind",
      name: "Name",
      split_help: "Multiple values are separated by commas",
      best_effort: "The {0} scope restricts a quota to tracking the following resource:",
certificate_info: "Certificate Info",
      certificate_signatureAlgorithm: "signatureAlgorithm",
      certificate_validity: "validity",
      certificate_outdate: "The certificate is out of date",
      certificate_errors: "Certificate errors"
    },
    access_control: {
      access_control: "Access Control",
      resource_helper: "Use multiple items, separate",
      object: "Object",
      ref: "Ref",
      role: "Role",
      authorized: "Authorized",
      api_group: "API Group"
    },
    custom_resource: {
      custom_resource: "Custom Resource",
      full_name: "Full Name",
      namespaced: "Namespaced",
      version: "Version",
      scope: "Scope",
      names: "Names",
      singular: "Singular",
      plural: "Plural",
      served: "Served",
      storage: "Storage",
      status: "Status"
    },
    user: {
      user_management: "User Management",
      user_group: "User Group",
      nickname: "Nickname",
      email: "Email",
      user_list: "User List",
      user_group_list: "User Group List",
      role_list: "Role List",
      user: "User",
      role: "Role",
    },
    chart: {
      marketPlace: "Marketplace",
      is_over: "It's over.",
      app: "Charts",
      chart: "Chart Repositories",
      type: "Type",
      branch: "Branch",
      create: "Create",
      name: "Name",
      http: "Point to the index http(s) URL generated by Helm",
      git: "Contains the Git repository that defines the Helm Chart",
      auth: "Auth",
      none: "None",
      basic: "Basic Auth",
      username: "Username",
      password: "Password",
      publicKey: "publicKey",
      privateKey: "privateKey",
      install: "Install",
      namespace: "Namespace",
      app_installed: "Installed Apps",
      version: "Version",
      upgrade: "Upgrade",
      repo: "Repo not found"
    }
  }
}

export default {
  ...el,
  ...fu,
  ...message
}
