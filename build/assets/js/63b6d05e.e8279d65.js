"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[733],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,d=c["".concat(o,".").concat(m)]||c[m]||k[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:l,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const a={title:"K8s \u5728 DevOps \u4e2d\u7684\u4f5c\u7528",description:"K8s \u662f\u4e00\u5957 Ops (Operation) \u7684\u5de5\u5177\uff0cDevOps \u6307\u7684\u662f\u958b\u767c\u90e8\u9580\u8207\u7dad\u904b\u90e8\u9580\u7684\u6574\u5408(Dev + Ops)\uff0c\u7136\u800c\u7531\u65bc\u5be6\u52d9\u4e0a\uff0c\u5f80\u5f80\u958b\u767c\u901f\u5ea6 > \u7dad\u904b\u90e8\u7f72\u7684\u901f\u5ea6\uff0c\u56e0\u6b64 DevOps \u7684\u8b70\u984c\u5f80\u5f80\u662f\u7522\u54c1\u958b\u767c\u7684\u91cd\u9ede\u3002GitOps \u5247\u662f\u81ea\u52d5\u5316\u90e8\u5c6c\u8207\u6574\u5408\u7684\u7522\u7269\uff0c\u642d\u914d Git Repository \u5de5\u5177\u4f7f\u7528\uff0c\u5feb\u901f\u7684\u5c07\u7522\u54c1\u90e8\u7f72\u65bc K8s cluster\u4e2d\u3002",keywords:["\u5206\u6563\u5f0f\u7cfb\u7d71","distribution forces","k8s","DevOps"],sidebar_position:3},i="K8s \u5728 DevOps \u4e2d\u7684\u4f5c\u7528",s={unversionedId:"k8s/2022.03.20.k8s.devops",id:"k8s/2022.03.20.k8s.devops",title:"K8s \u5728 DevOps \u4e2d\u7684\u4f5c\u7528",description:"K8s \u662f\u4e00\u5957 Ops (Operation) \u7684\u5de5\u5177\uff0cDevOps \u6307\u7684\u662f\u958b\u767c\u90e8\u9580\u8207\u7dad\u904b\u90e8\u9580\u7684\u6574\u5408(Dev + Ops)\uff0c\u7136\u800c\u7531\u65bc\u5be6\u52d9\u4e0a\uff0c\u5f80\u5f80\u958b\u767c\u901f\u5ea6 > \u7dad\u904b\u90e8\u7f72\u7684\u901f\u5ea6\uff0c\u56e0\u6b64 DevOps \u7684\u8b70\u984c\u5f80\u5f80\u662f\u7522\u54c1\u958b\u767c\u7684\u91cd\u9ede\u3002GitOps \u5247\u662f\u81ea\u52d5\u5316\u90e8\u5c6c\u8207\u6574\u5408\u7684\u7522\u7269\uff0c\u642d\u914d Git Repository \u5de5\u5177\u4f7f\u7528\uff0c\u5feb\u901f\u7684\u5c07\u7522\u54c1\u90e8\u7f72\u65bc K8s cluster\u4e2d\u3002",source:"@site/docs/k8s/2022.03.20.k8s.devops.md",sourceDirName:"k8s",slug:"/k8s/2022.03.20.k8s.devops",permalink:"/docs/k8s/2022.03.20.k8s.devops",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"K8s \u5728 DevOps \u4e2d\u7684\u4f5c\u7528",description:"K8s \u662f\u4e00\u5957 Ops (Operation) \u7684\u5de5\u5177\uff0cDevOps \u6307\u7684\u662f\u958b\u767c\u90e8\u9580\u8207\u7dad\u904b\u90e8\u9580\u7684\u6574\u5408(Dev + Ops)\uff0c\u7136\u800c\u7531\u65bc\u5be6\u52d9\u4e0a\uff0c\u5f80\u5f80\u958b\u767c\u901f\u5ea6 > \u7dad\u904b\u90e8\u7f72\u7684\u901f\u5ea6\uff0c\u56e0\u6b64 DevOps \u7684\u8b70\u984c\u5f80\u5f80\u662f\u7522\u54c1\u958b\u767c\u7684\u91cd\u9ede\u3002GitOps \u5247\u662f\u81ea\u52d5\u5316\u90e8\u5c6c\u8207\u6574\u5408\u7684\u7522\u7269\uff0c\u642d\u914d Git Repository \u5de5\u5177\u4f7f\u7528\uff0c\u5feb\u901f\u7684\u5c07\u7522\u54c1\u90e8\u7f72\u65bc K8s cluster\u4e2d\u3002",keywords:["\u5206\u6563\u5f0f\u7cfb\u7d71","distribution forces","k8s","DevOps"],sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Kubernetes \u67b6\u69cb",permalink:"/docs/k8s/2022.02.19.k8s_structure"},next:{title:"\u5206\u6563\u5f0f\u7cfb\u7d71: \u73fe\u4ee3\u8edf\u9ad4\u67b6\u69cb\u8207\u8a2d\u8a08\u8003\u91cf",permalink:"/docs/k8s/2022.04.30.distribution_forces"}},o={},p=[{value:"DevOps",id:"devops",level:3},{value:"DevOps Pipeline",id:"devops-pipeline",level:3},{value:"GitOps",id:"gitops",level:3},{value:"GitLab GitOps",id:"gitlab-gitops",level:4},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}],u={toc:p},c="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"k8s-\u5728-devops-\u4e2d\u7684\u4f5c\u7528"},"K8s \u5728 DevOps \u4e2d\u7684\u4f5c\u7528"),(0,l.kt)("h3",{id:"devops"},"DevOps"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Development + Operation \uff1d DevOps\uff0cDev: \u958b\u767c\u90e8\u9580\uff0cOps \uff1d \u7dad\u904b\u90e8\u9580 \u3002")),(0,l.kt)("p",null,"[1]","\u5728\u50b3\u7d71\u7684\u8edf\u9ad4\u958b\u767c\u6d41\u7a0b\uff0c\u5f80\u5f80\u662fDev speed > Ops speed \u800c\u9020\u6210\u4e00\u7a2egap\uff0c\u5f88\u53ef\u80fd\u5728\u6574\u500b\u8edf\u9ad4\u767c\u4e2d\uff0c\u56e0\u70ba\u6574\u9ad4 Release Version \u901f\u5ea6\u6162\uff0c\u4ee5\u81f4\u96e3\u4ee5\u53bb\u9a57\u8b49\u529f\u80fd\u7684\u5e02\u5834\u6027\uff0c\u9020\u6210\u7522\u80fd\u7684\u904e\u5ea6\u6d6a\u8cbb\uff0c\u5e38\u5e38\u958b\u767c\u51fa\u7121\u7528\u7684\u529f\u80fd\u3002"),(0,l.kt)("p",null,"DevOps \u4e3b\u8981\u6709\u4e94\u500b\u968e\u6bb5\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Continuous Planning: \u6307\u7684\u662f\u900f\u904e\u4f7f\u7528\u8005\u56de\u994b\u6216\u8005\u5176\u4ed6\u90e8\u9580\u5e36\u4f86\u7684\u9700\u6c42\u3002"),(0,l.kt)("li",{parentName:"ol"},"Continuous Development: \u6307\u7684\u662f\u958b\u767c\u5de5\u7a0b\u5e2b\u6301\u7e8c\u7684\u5c07\u9700\u6c42\u5b8c\u6210\uff0c\u4e26\u5b8c\u6210\u5efa\u5236\u3002"),(0,l.kt)("li",{parentName:"ol"},"Continuous Testing: \u6307\u7684\u662f\u958b\u767c\u597d\u7684 Image \u81ea\u52d5\u7684\u9032\u884c\u6e2c\u8a66\u3002"),(0,l.kt)("li",{parentName:"ol"},"Continuous Integration: \u5c07\u6e2c\u8a66\u597d\u7684\u529f\u80fd\u767c\u7248\u672c\u4e26\u90e8\u5c6c\u4e0a\u7522\u54c1\u3002"),(0,l.kt)("li",{parentName:"ol"},"Continuous Monitoring: \u6301\u7e8c\u7684\u76e3\u6e2c\u7522\u54c1\u71df\u904b\u7684\u72c0\u6cc1\uff0c\u6301\u7e8c\u7684\u63d0\u51fa\u512a\u5316\u7684\u9700\u6c42")),(0,l.kt)("p",null,"\u53ef\u53c3\u8003\u4e0b\u5716\u793a\u4f8b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(36).Z,width:"1110",height:"636"})),(0,l.kt)("p",null,"K8s \u7684\u51fa\u73fe\u4e3b\u8981\u76ee\u7684\u662f\u89e3\u6c7aOperation \u4e0aContinuous Integration\u3001Continuous Monitoring \u7684\u554f\u984c\uff0c\u4e00\u822c\u4f86\u8aaa\u900f\u904eGit Repository  \u5de5\u5177\u4e0a\u7684 CI/CD \u5de5\u5177\uff0c\u7576\u5de5\u7a0b\u5e2bPush Code \u6642\uff0c\u5c07\u81ea\u52d5\u7684\u57f7\u884c\u6240\u6709\u7684\u6e2c\u8a66\uff0c\u4e26\u89f8\u767cK8s \u5de5\u5177\uff0c\u4f7f\u7684Code \u53ef\u4ee5\u66f4\u5feb\u901f\u7684\u53cd\u61c9\u5728\u7522\u54c1\u7aef\u3002"),(0,l.kt)("h3",{id:"devops-pipeline"},"DevOps Pipeline"),(0,l.kt)("p",null,"[","2]\u70ba\u4e86\u63a8\u884cDevOps\u52a0\u901f\u6574\u500b\u7522\u54c1\u7684\u958b\u767c\u9031\u671f\uff0c\u6703\u7531Dev\u8207Ops \u90e8\u9580\u4e00\u8d77\u5236\u8a02\u51fa\u958b\u767c\u7684Pipeline\uff0c\u76e1\u91cf\u8b93\u6bcf\u4e00\u7ad9\u9ede\u90fd\u53ef\u4ee5\u81ea\u52d5\u5316\uff0c\u4e00\u822c\u4f86\u8aaa\u662f\u6703\u7531DevOps \u5de5\u7a0b\u5e2b\u8207Dev\u3001QA\u4e00\u8d77\u5236\u8a02\u51fa\u4f86\u3002\u4e0b\u5716\u70ba\u4e00\u822cpipeline \u6703\u5236\u5b9a\u7684Pipeline\uff0c\u4e00\u822c\u6703\u7d93\u6b77\u904e\u5e7e\u500b\u968e\u6bb5:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"push code: Dev \u5de5\u7a0b\u5e2b\u5c07\u7a0b\u5f0f\u78bc\u767c\u5e03\u5230Repo \u4e0a"),(0,l.kt)("li",{parentName:"ol"},"Build: \u7a0b\u5f0f\u78bc\u5c07\u7d93\u6b77\u904e code \u54c1\u8cea\u7684\u6e2c\u8a66\uff0cex: lint\uff0c\u518d\u4f86\u6703\u7d93\u904eunit test"," "),(0,l.kt)("li",{parentName:"ol"},"MR: Merge Request \u9019\u662f\u552f\u4e00\u9700\u8981\u4eba\u5de5\u7684\u6b65\u9a5f\uff0c\u7531Code Reviewer \u53bb\u5be9\u6838\u4e14\u5408\u4f75\u5230Branch \u4e0a"),(0,l.kt)("li",{parentName:"ol"},"Deploy: \u6307\u7684\u662f\u5c07build \u968e\u6bb5\u7684\u7522\u7269\uff0c\u767c\u5e03\u5230\u6b63\u5f0f\u6216\u8005\u6e2c\u8a66\u74b0\u5883\u4e2d"),(0,l.kt)("li",{parentName:"ol"},"E2E Test: End to End Test \u6307\u7684\u662f\u76f4\u63a5\u900f\u904e\u7d42\u7aef\u7684\u64cd\u4f5c\uff0c\u6574\u5408\u6e2c\u8a66\u529f\u80fd"),(0,l.kt)("li",{parentName:"ol"},"Monitoring: \u6b63\u5f0f\u767c\u5e03\u5f8c\uff0c\u6301\u7e8c\u7684\u7d00\u9304\u7cfb\u7d71\u7684 Log")),(0,l.kt)("p",null,"\u4e0b\u5716\u70baPipeline \u6d41\u7a0b\u5716\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(4708).Z,width:"945",height:"714"})),(0,l.kt)("h3",{id:"gitops"},"GitOps"),(0,l.kt)("p",null,"[","3]GitOps \u662f\u4e00\u500b\u5728Git Repository \u4e0a\u5be6\u73fe\u81ea\u52d5\u5316\u66f4\u65b0K8s Cluster \u7684\u65b9\u5f0f\uff0c\u900f\u904eGit CI/CD \u9032\u884c\u81ea\u52d5\u5316\u6e2c\u8a66\u4e4b\u5f8c\u4e26\u628a\u6210\u529fbuild \u597d\u7684 image \u50b3\u5165Image Registry \u4e2d\u4e26Trigger K8s \u66f4\u65b0Deployment\uff0c\u5982\u4e0b\u5716\u6240\u793a\u3002\u7c21\u55ae\u4f86\u8aaaGitOps \u67d0\u7a2e\u7a0b\u5ea6\u4e0a\u6e1b\u8f15\u4e86Ops \u8a31\u591a\u7684\u5de5\u4f5c\uff0c\u8b93\u958b\u767c\u4e4b\u5f8c\u81ea\u52d5\u7684\u9032\u884c\u4e00\u7cfb\u5217\u7684Ops\uff0c\u6e1b\u8f15\u539f\u6709Ops\u90e8\u9580\u8207Dev\u90e8\u9580\u7684\u6e9d\u901a\u6210\u672c\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(1364).Z,width:"880",height:"383"})),(0,l.kt)("h4",{id:"gitlab-gitops"},"GitLab GitOps"),(0,l.kt)("p",null,"\u5728GitLab \u4e2d\u8981\u505a\u5230GitOps \u5176\u5be6\u8907\u96dc\u883b\u591a\u7684\uff0c\u9996\u5148\u8981\u5148\u5177\u50992\u7a2eGitlab Runner:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Docker gitlab-runner: \u4f7f\u5f97Repo \u53ef\u4ee5\u9032\u884c Unit test \u548c build image \u7b49\u529f\u80fd\u3002"),(0,l.kt)("li",{parentName:"ol"},"K8s gitlab- runner:  \u4f7f\u5f97Repo\u53ef\u4ee5\u9032\u884c\u89f8\u767c\u9032\u884cdev \u7684\u74b0\u5883\u90e8\u5c6c\uff0c\u5efa\u5236Dev\u3001Production \u7684\u74b0\u5883")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Install Docker gitlab-runner")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Prepare git-lab-runner config")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},'concurrent = 1\ncheck_interval = 0\n\n[session_server]\n  session_timeout = 1800\n\n[[runners]]\n  name = "raspberry pi"\n  url = "https://gitlab.com/"\n  token = <Token>\n  executor = "docker"\n  [runners.custom_build_dir]\n  [runners.cache]\n    [runners.cache.s3]\n    [runners.cache.gcs]\n    [runners.cache.azure]\n  [runners.docker]\n    tls_verify = false\n    image = "docker:latest"\n    privileged = true  // MUST\n    disable_entrypoint_overwrite = false\n    oom_kill_disable = false\n    disable_cache = false\n    volumes = ["/cache", "/certs/client"] // MUST\n    shm_size = 0\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u5305\u542bdocker in docker \u7684\u529f\u80fd\uff0c\u70ba\u4e86\u53ef\u4ee5 build container image \u4e26\u4e0a\u50b3\u65bccontainer registry \u4e2d")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker volume create gitlab-runner-config\n\ndocker run -d --name gitlab-runner --restart always  \\\n   -v /var/run/docker.sock:/var/run/docker.sock  \\\n   -v gitlab-runner-config:/etc/gitlab-runner \\\n   gitlab/gitlab-runner:latest\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Install GitLab Agent")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Install k3s")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sfL https://get.k3s.io | INSTALL_K3S_CHANNEL=latest sh -\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"At default branch add ",(0,l.kt)("inlineCode",{parentName:"li"},"config.yaml")," :  \u5167\u5bb9\u53ef\u70ba\u7a7a\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'echo "" > .gitlab/agents/<FOLDER NAME>/config.yaml  \n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53bbRepo \u7684 infrastructure \u65b0\u589eAgent\uff0c \u53c3\u8003",(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=XuBpKtsgGkE"},"https://www.youtube.com/watch?v=XuBpKtsgGkE"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Install GitLab Runner")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"prepare helm"),(0,l.kt)("li",{parentName:"ul"},"prepare ",(0,l.kt)("inlineCode",{parentName:"li"},"runner-chart-values.yaml"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"\ngitlabUrl: https://gitlab.com/\nrunnerRegistrationToken: <YOUR TOKEN>\nrbac:\n    create: true\nrunners:\n    privileged: true\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Install Runner")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo helm --kubeconfig /etc/rancher/k3s/k3s.yaml \\\n    install --namespace gitlab-cd gitlab-runner \\\n    -f runner-chart-values.yaml gitlab/gitlab-runner\n")),(0,l.kt)("p",null,"The manipulations of gitlab-runner will not roll back status after running cmds."),(0,l.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,l.kt)("p",null,"[1]",' Virmani, Manish. "Understanding DevOps & bridging the gap from continuous integration to continuous delivery." ',(0,l.kt)("em",{parentName:"p"},"Fifth international conference on the innovative computing technology (intech 2015)"),". IEEE, 2015. ",(0,l.kt)("br",null),"\n","[2]",' Ivanov, Vitalii, and Kari Smolander. "Implementation of a DevOps pipeline for serverless applications." ',(0,l.kt)("em",{parentName:"p"},"International conference on product-focused software process improvement"),". Springer, Cham, 2018. ",(0,l.kt)("br",null),"\n","[3]",' Beetz, Florian, and Simon Harrer. "GitOps: The Evolution of DevOps?." ',(0,l.kt)("em",{parentName:"p"},"IEEE Software")," (2021). ",(0,l.kt)("br",null)))}k.isMDXComponent=!0},4708:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Untitled Diagram.drawio (1) (2)-b7c4e6f5c2e527f0515ada3175480eeb.png"},36:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Untitled Diagram.drawio (1)-70bb1c115a66bb8195ee22d1ed56e041.png"},1364:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image (24) (1) (1)-b2cfc4f80b1ae7e1513ef593f69d616c.png"}}]);