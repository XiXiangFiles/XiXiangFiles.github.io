"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[709],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,g=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return t?r.createElement(g,l(l({ref:n},c),{},{components:t})):r.createElement(g,l({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5156:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={title:"\u8b93 Goroutine Debug \u8b8a\u5f97\u66f4\u7c21\u55ae",description:"\u63d0\u4f9b\u4e00\u4e9b\u7d93\u9a57\u8ac7\uff0c\u8b93\u4f60\u5728 gorontine debug \u66f4\u5bb9\u6613",keywords:["golang","goruntine","thread","OOM","garbage recycle","deadlock"],sidebar_position:3},l="[Golang] \u8b93 Goroutine Debug \u8b8a\u5f97\u66f4\u7c21\u55ae",i={unversionedId:"golang/2023.06.26.let_goroutine_debug_easy",id:"golang/2023.06.26.let_goroutine_debug_easy",title:"\u8b93 Goroutine Debug \u8b8a\u5f97\u66f4\u7c21\u55ae",description:"\u63d0\u4f9b\u4e00\u4e9b\u7d93\u9a57\u8ac7\uff0c\u8b93\u4f60\u5728 gorontine debug \u66f4\u5bb9\u6613",source:"@site/docs/golang/2023.06.26.let_goroutine_debug_easy.md",sourceDirName:"golang",slug:"/golang/2023.06.26.let_goroutine_debug_easy",permalink:"/docs/golang/2023.06.26.let_goroutine_debug_easy",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u8b93 Goroutine Debug \u8b8a\u5f97\u66f4\u7c21\u55ae",description:"\u63d0\u4f9b\u4e00\u4e9b\u7d93\u9a57\u8ac7\uff0c\u8b93\u4f60\u5728 gorontine debug \u66f4\u5bb9\u6613",keywords:["golang","goruntine","thread","OOM","garbage recycle","deadlock"],sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Golang \u9032\u968e\u7528\u6cd5",permalink:"/docs/golang/2021.10.23.advance_golang"},next:{title:"Golang go mod \u5165\u9580",permalink:"/docs/golang/2020.12.06.go_mod_tutorial"}},u={},s=[{value:"Debug Tools",id:"debug-tools",level:3},{value:"UseCases",id:"usecases",level:2},{value:"Deadlock",id:"deadlock",level:4},{value:"CPU &amp; RAM usage is high, but it is expected to be low",id:"cpu--ram-usage-is-high-but-it-is-expected-to-be-low",level:4},{value:"Linux Out-Of-Memory Killer",id:"linux-out-of-memory-killer",level:4},{value:"Better Practices",id:"better-practices",level:4},{value:"Use to write the unit-test to find out the deadlock situation",id:"use-to-write-the-unit-test-to-find-out-the-deadlock-situation",level:4},{value:"Reference",id:"reference",level:2}],c={toc:s},m="wrapper";function p(e){let{components:n,...o}=e;return(0,a.kt)(m,(0,r.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"golang-\u8b93-goroutine-debug-\u8b8a\u5f97\u66f4\u7c21\u55ae"},"[Golang]"," \u8b93 Goroutine Debug \u8b8a\u5f97\u66f4\u7c21\u55ae"),(0,a.kt)("p",null,"\u5728\u9032\u884c\u591a\u57f7\u884c\u7dd2\u958b\u767c\u7684\u6642\u5019\uff0c\u6700\u5bb3\u6015\u7684\u9047\u5230\u7684\u56db\u4ef6\u4e8b\u60c5\uff1a"," "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Deadlock:\nprocess \u4e4b\u9593\u90fd\u5728\u7b49\u5f85\u8cc7\u6e90\u91cb\u51fa\uff0c\u4f46\u6c92\u6709process \u53ef\u4ee5\u91cb\u51fa\u8cc7\u6e90\u5c0e\u81f4\u7cfb\u7d71\u505c\u64fa")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"CPU usage is high, but it is expected to be low:\n\u7cfb\u7d71\u56e0\u70baprocess \u7570\u5e38\u4f7f\u7528cpu\uff0c\u901a\u5e38\u662f\u7531\u65bcgoroutine \u6c92\u6709\u88abrelease \u9020\u6210\u7684\u5806\u7a4d\u6548\u61c9\uff0c\u4f7f\u5f97\u9810\u671fcpu usage \u61c9\u8981\u964d\u4f4e\uff0c\u4f46\u537b\u7dad\u6301\u9ad8\u4f4d")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"RAM usage is high, but it is expected to be low."," ","\n\u9020\u6210\u539f\u56e0\u901a\u5e38\u6709\u5169\u500b\uff0c1. process \u6c92\u6709\u6b63\u78ba\u7684release \u9020\u6210 CPU & RAM \u4f7f\u7528\u7387\u5c45\u9ad8\u4e0d\u4e0b. 2. codebase design variable problem.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Linux Out-Of-Memory Killer"),(0,a.kt)("p",{parentName:"li"},"\u904e\u5ea6\u4f54\u7528 os \u7684 RAM\uff0cProcess \u6703\u56e0\u70ba\u88ab\u7cfb\u7d71\u5224\u65b7\u70ba\u4e0d\u5065\u5eb7\u7684\u7a0b\u5f0f\uff0c\u76f4\u63a5\u88ab\u7cfb\u7d71\u522a\u9664\u3002\u5e38\u6703\u5728Database or Reverse proxy \u4f7f\u7528\u4e0a\u6703\u51fa\u73fe\u3002"))),(0,a.kt)("p",null,"\u9019\u7bc7\u6587\u7ae0\u4e3b\u8981\u4ecb\u7d39\uff0c\u8981\u5982\u4f55\u907f\u514d\u4e0a\u8ff0\u72c0\u6cc1\uff0c\u4ee5\u53ca\u8981\u5982\u4f55debug \u7684\u7d93\u9a57\u5206\u4eab\u3002"),(0,a.kt)("h3",{id:"debug-tools"},"Debug Tools"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Golang tool ",(0,a.kt)("br",null),"\npprof \u9019\u662f\u4e00\u500b\u5b98\u65b9\u63d0\u4f9b\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u900f\u904e\u5716\u5f62\u7684\u65b9\u5f0f\u5c07Runtime \u7684\u7a0b\u5f0f\u9032\u4e00\u6b65\u7528\u5716\u5f62\u5316\u7684\u65b9\u5f0f\u986f\u73fe\uff0cex Gorountine counts, Memory usage by package \u9019\u4e9b\u90fd\u76f8\u7576\u65b9\u4fbf\uff0c\u63d0\u4f9b\u7d66\u5927\u5bb6\u53c3\u8003\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(8528).Z,width:"978",height:"2111"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Monitor Tools",(0,a.kt)("br",null),"NewRelic: ",(0,a.kt)("br",null),"\u9019\u662f\u4e00\u500b\u985e\u4f3c ELK \u7684 monitor\uff0c\u4ed6\u53ef\u4ee5\u5f88\u8f15\u9b06\u7684\u5efa\u7f6e\u4e26\u5075\u6e2c\u5230 CPU & Memory \u7b49 Matrix \u7684\u8cc7\u8a0a\uff0c\u5982\u679c\u662f\u81ea\u5df1\u7684 side project \u5f88\u63a8\u85a6\u4f7f\u7528\uff0c\u56e0\u70ba\u4ed6\u6709 100GB \u6bcf\u6708\u4f7f\u7528\u91cf\uff0c\u6bd4\u8d77\u4f60\u81ea\u67b6\u4f86\u5f97\u7701\u4e8b\u7701\u6642\u9593\u3002\u4f46 ELK \u4e5f\u662f\u5f88\u63a8\u85a6\uff0c\u7562\u7adf\u662f open source \u4f46\u9700\u8981\u8003\u616e\u7684\u4e8b\u60c5\u5c31\u6703\u8b8a\u591a\uff0cex database storage size, data rotation time, Infra Problems\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(1848).Z,width:"557",height:"661"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deployment Tools:",(0,a.kt)("br",null),"\n\u4f7f\u7528K8s, Docker \u7b49\u7b49\u7684\u5de5\u5177\u9032\u884cdeployment \u662f\u4e00\u500b\u5bb9\u6613\u63a7\u7ba1Program \u7684\u9078\u64c7\uff0c\u6bcf\u7a2e Deployments \u90fd\u6709\u76f8\u61c9\u7684 Health checking \u6a5f\u5236\uff0c\u53ef\u4ee5\u91dd\u5c0d\u5404\u7a2e\u7570\u5e38\uff0c\u9032\u884c\u7dca\u6025\u8655\u7406\u7684\u6a5f\u5236\u3002")),(0,a.kt)("h2",{id:"usecases"},"UseCases"),(0,a.kt)("p",null,"\u5be6\u9a57\u74b0\u5883\uff1a\u4f7f\u7528Mac Book M1 Pro, \u5728 golang:1.19-alpine3.17 Container \u4e2d\u9032\u884c\u6e2c\u8a66",(0,a.kt)("br",null),"\n\u4ee5\u4e0b\u8209\u4f8b\uff0c\u5bb9\u6613\u9020\u6210\u554f\u984c\u7684\u5e7e\u7a2e\u7528\u6cd5\uff1a",(0,a.kt)("br",null)),(0,a.kt)("h4",{id:"deadlock"},"Deadlock"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Golang Mutex use:\u5728\u4f7f\u7528\u7684\u904e\u7a0b\u4e2d\uff0c\u5bb9\u6613\u6703\u6709double lock \u7684\u72c0\u6cc1\uff0c\u5982\u4e0b\u7a0b\u5f0f\u78bc ReadValue \u5728 UpdateValue \u90fd\u5728\u4e00\u958b\u59cb\u4f7f\u7528\u6642\uff0c\u5c31\u5148lock \u4f4f\uff0c\u5c0e\u81f4\u57f7\u884cUpdateValue\u6642\uff0cReadValue\u7121\u6cd5\u6210\u529f\u88ab\u57f7\u884c\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"showLineNumbers",showLineNumbers:!0},'package article \n\nimport (\n    "fmt"\n    "sync"\n    "testing"\n)\n\ntype MutexExample struct {\n    lock   sync.Mutex\n    ArrInt []int\n}\n\nfunc (m *MutexExample) UpdateValue(idx, val int) {\n    m.lock.Lock()\n    defer m.lock.Unlock()\n    // here we are double lock\n    v := m.ReadValue(idx)\n    if v == 0 {\n        m.InsetValue(val)\n    } else {\n        m.ArrInt[idx-1] = val\n    }\n}\n\nfunc (m *MutexExample) InsetValue(val int) int {\n    m.lock.Lock()\n    defer m.lock.Unlock()\n    m.ArrInt = append(m.ArrInt, val)\n    return len(m.ArrInt)\n}\n\nfunc (m *MutexExample) ReadValue(idx int) int {\n    m.lock.Lock()\n    defer m.lock.Unlock()\n    return m.ArrInt[idx-1]\n}\n\nfunc TestMutexArticle(t *testing.T) {\n    m := &MutexExample{\n        ArrInt: make([]int, 0),\n    }\n    idx := m.InsetValue(1)\n    fmt.Println("idx= ", idx)\n    val := m.ReadValue(idx)\n    fmt.Println("val= ", val)\n\n    m.UpdateValue(idx, 2)\n}\n\n')),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(4453).Z,width:"417",height:"131"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Golang Channel and Mutex Lock is interactive use\n\u7576mutex \u8ddf channel \u4e00\u8d77\u4f7f\u7528\u7684\u6642\u5019\uff0c\u5bb9\u6613\u9020\u6210\u4e92\u76f8\u7b49\u5f85\u5c0e\u81f4deadlock \u7522\u751f\uff0cfunc \u4fdd\u6301\u55ae\u4e00\u8077\u8cac\u539f\u5247\uff0c\u4e0d\u8981\u6df7\u8457\u7528\u5c0e\u81f4deadlock \u7522\u751f\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"showLineNumbers",showLineNumbers:!0},'package article\n\nimport (\n    "fmt"\n    "sync"\n    "testing"\n)\n\ntype MutexChannelExample struct {\n    lock    sync.Mutex\n    ArrInt  []int\n    updated chan bool\n}\n\nfunc (m *MutexChannelExample) InsetValue(val int) {\n    m.lock.Lock()\n    defer m.lock.Unlock()\n    m.ArrInt = append(m.ArrInt, val)\n    m.updated <- true\n}\n\nfunc (m *MutexChannelExample) ReadValue() int {\n    m.lock.Lock()\n    defer m.lock.Unlock()\n    return m.ArrInt[len(m.ArrInt)-1]\n}\n\nfunc TestMutexChannelExample(t *testing.T) {\n    m := &MutexChannelExample{\n        ArrInt:  make([]int, 0),\n        updated: make(chan bool),\n    }\n    go func() {\n        for <-m.updated {\n            // When m.ReadValue() is called, it will lock. However, in\n            // line 44, m.InsetValue inputs a bool into the channel. \n            // Consequently, line 19 waits for the value to be \n            // retrieved and released, triggering another call to \n            // m.ReadValue(), which results in a deadlock.\n            fmt.Println(m.ReadValue())\n        }\n    }()\n    for i := 0; i < 10; i++ {\n        m.InsetValue(i)\n        fmt.Println("do once ===>")\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(4195).Z,width:"417",height:"131"})),(0,a.kt)("h4",{id:"cpu--ram-usage-is-high-but-it-is-expected-to-be-low"},"CPU & RAM usage is high, but it is expected to be low"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u4f7f\u7528 Time \u5957\u4ef6\u7684\u6642\u5019\uff0c\u9700\u8981\u975e\u5e38\u5c0f\u5fc3\uff0c\u4ee5time.Tick\u70ba\u4f8b\uff0c\u7576\u4ed6\u6c92\u6709\u88ab\u57f7\u884c\u5b8c\u6210\u7684\u6642\u5019\uff0c\u4e0d\u6703\u89f8\u767c garbage recycle \u6240\u4ee5cpu \u4e0d\u6703\u88abrelease \u56e0\u6b64 cpu memory \u90fd\u4e0d\u6703\u56e0\u70bafunc\u7d50\u675f\u800c\u91cb\u51fa\u8cc7\u6e90")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"showLineNumbers",showLineNumbers:!0},'package article\n\nimport (\n    "fmt"\n    "runtime"\n    "testing"\n    "time"\n)\n\ntype TickUsageExample struct {\n}\n\nfunc (e *TickUsageExample) RaiseGoroutine(c chan bool) {\n    go func() {\n        time.Sleep(time.Microsecond * 900)\n        c <- true\n    }()\n    select {\n    case <-time.Tick(time.Second):\n        return\n    case <-c:\n        return\n    }\n}\n\nfunc TestTickUsageExample(t *testing.T) {\n    forever := make(chan bool)\n    ex := TickUsageExample{}\n    for i := 0; i < 1; i++ {\n        go ex.RaiseGoroutine(make(chan bool))\n    }\n    fmt.Println("goruntine number:= ", runtime.NumGoroutine())\n    time.Sleep(time.Second)\n    fmt.Println("goruntine number:= ", runtime.NumGoroutine())\n    <-forever\n}\n')),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(3127).Z,width:"1849",height:"276"})),(0,a.kt)("h4",{id:"linux-out-of-memory-killer"},"Linux Out-Of-Memory Killer"),(0,a.kt)("p",null,"\u7576\u6211\u5011\u4f7f\u7528\u8a18\u61b6\u9ad4\uff0c\u5230\u9054os \u7684\u4e0a\u9650\u7684\u6642\u5019\uff0clinux os \u6703\u5c07\u6700\u4e0d\u5065\u5eb7\u7684 process \u522a\u9664\uff0c\u56e0\u6b64\u8981\u6ce8\u8981\u5728\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"Goroutine"),"\u7684\u6642\u5019\uff0c\u9700\u8981\u8003\u616e\u5230\u4ed6\u7684\u8a18\u61b6\u9ad4\u4f7f\u7528\u7387\uff0c\u4ee5\u514d\u8e29\u5230\uff01"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -it --rm -v $PWD:/source -m 100m  golang:1.19-alpine3.17 sh\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"showLineNumbers",showLineNumbers:!0},'package article\n\nimport "testing"\n\nfunc TestOOm(t *testing.T) {\n    for i := 0; i < 3; i++ {\n        go func() {\n            for true {\n                var arr []string = make([]string, 100000)\n                arr[0] = "test_str"\n            }\n        }()\n    }\n    forever := make(chan bool)\n    <-forever\n}\n')),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(7259).Z,width:"1557",height:"148"})),(0,a.kt)("h4",{id:"better-practices"},"Better Practices"),(0,a.kt)("p",null,"\u4f7f\u7528Goroutine\u6642\u5019\uff0c\u9700\u4f7f\u7528 Gorountine Pool \u53bb\u9650\u5236\u8a18\u61b6\u9ad4\u4ee5\u53ca\u6578\u91cf\u3002 \u53ef\u4ee5\u6709\u6548\u7684\u7ba1\u7406 Func \u7684\u751f\u547d\u9031\u671f\uff0c\u4ee5\u53ca CPU, Memory \u4f7f\u7528\u7387\uff0c\u53bb\u907f\u514d OOM \u6a5f\u5236\uff0c\u4e0d\u8981\u4f7f\u7528time \u53bb\u7ba1\u7406 Goroutine \u800c\u662f\u4f7f\u7528context\u53bb\u7ba1\u7406\u5c31\u4e0d\u6703\u8e29\u5230 CPU\u3001Memory \u4e0d\u6703\u88ab release \u7684\u554f\u984c\u3002",(0,a.kt)("br",null),"\n\u4ee5\u4e0b\u65b9\u7a0b\u5f0f\u78bc\u70ba\u4f8b\uff1a\u9019\u662f\u4e00\u500b\u4f7f\u7528 ant pool \u7684\u4e00\u500b\u4f8b\u5b50\uff0cline 14 \u5ba3\u544a pool size\uff0c\u5f9e\u9019\u88e1\u53ef\u4ee5\u6709\u6548\u7684\u7ba1\u7406 CPU, Memory \uff0c\u4e0b\u65b9\u5716\u7247\u7684\u4f8b\u5b50\u5206\u5225\u8a2d\u5b9a 10 \u548c 100 size \u7684 pool\uff0c\u4f46\u8dd1\u4e00\u6a23\u7684\u4e00\u4efd\u7a0b\u5f0f\u78bc\uff0cCPU, Memory Usage \u662f\u6709\u76f8\u7576\u5927\u7684\u5dee\u7570\u3002\u900f\u904e\u9019\u6a23\u7684\u65b9\u5f0f\u53ef\u4ee5\u6709\u6548\u7684\u907f\u514d OOM \u7684\u6a5f\u5236\u7684\u89f8\u767c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh",metastring:"showLineNumbers",showLineNumbers:!0},"docker run -it --rm -v $PWD:/source -m 100m golang:1.19-alpine3.17 sh\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"showLineNumbers",showLineNumbers:!0},'package article\n\nimport (\n    "sync"\n    "testing"\n    "time"\n\n    "github.com/panjf2000/ants/v2"\n)\n\nfunc TestPool(t *testing.T) {\n    var wg sync.WaitGroup\n        // it can adjusted the pool size, expired_time, log... a lots of opts.\n    pool, _ := ants.NewPool(10, ants.WithPreAlloc(true))\n    for i := 0; i < 100; i++ {\n        pool.Submit(func() {\n            defer wg.Done()\n            var arr []string = make([]string, 100000)\n            arr[0] = "test_str"\n            time.Sleep(time.Second * 10)\n        })\n        wg.Add(1)\n    }\n    wg.Wait()\n}\n')),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(913).Z,width:"1841",height:"431"})),(0,a.kt)("h4",{id:"use-to-write-the-unit-test-to-find-out-the-deadlock-situation"},"Use to write the unit-test to find out the deadlock situation"),(0,a.kt)("p",null,"\u9810\u9632\u6216\u8005\u767c\u73feDeadlock\u7684\u72c0\u6cc1\uff0c\u6700\u7c21\u55ae\u7684\u65b9\u5f0f\u5c31\u662f\u900f\u904e unit-test \uff0c\u900f\u904e\u6e2c\u8a66\u5bb9\u6613\u4f7f\u5f97\u9019\u4e00\u985e\u554f\u984c\u63d0\u65e9\u767c\u73fe\u3002Deadlock \u5f80\u5f80\u90fd\u662f\u5728\u771f\u7684 program \u4e0a\u7dda\u4e86\u4e4b\u5f8c\u624d\u6703\u767c\u73fe\u6709\u9019\u6a23\u7684\u554f\u984c\u3002 ",(0,a.kt)("br",null),"\nHow to find out: ",(0,a.kt)("br",null)),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Write the edge case for each func ",(0,a.kt)("br",null),"\n\u64b0\u5bebEdge case test (\u6975\u7aef\u6e2c\u8a66) \u5728\u6bcf\u4e00\u96bbGoroutine\u7a0b\u5f0f\uff0c\u597d\u8655\u662f\u53ef\u4ee5\u53bb\u767c\u73fe deadlock\u7684\u72c0\u6cc1\uff0c\u4e5f\u6bd4\u8f03\u80fd\u5920\u767c\u73fe Resource Usage (CPU, Memory) \u7684\u554f\u984c"),(0,a.kt)("li",{parentName:"ol"},"Integration and Pression Test ",(0,a.kt)("br",null),"\n\u6574\u5408\u6e2c\u8a66\u8207\u58d3\u529b\u6e2c\u8a66\u5be6\u969b\u4e0a\u5728\u8edf\u9ad4\u958b\u767c\u4e2d\u975e\u5e38\u91cd\u8981\uff0c\u505a\u9019\u6a23\u7684\u6e2c\u8a66\u7684\u524d\u63d0\u662f\uff0c\u8981\u4f7f\u7528 Monitor \u5de5\u5177\uff0c\u89c0\u5bdf\u6bcf\u4e00\u500b Transaction (\u7a0b\u5f0f\u884c\u70ba)\u7684\u57f7\u884c\u6642\u9593\uff0c\u9084\u6709\u57f7\u884c\u7247\u6bb5\u3002\u900f\u904e\u89c0\u5bdfMetrix\u7684\u8b8a\u5316\uff0c\u662f\u4e00\u500b\u6709\u6548debug \u7684\u65b9\u5f0f\u3002 ")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.oracle.com/technical-resources/articles/it-infrastructure/dev-oom-killer.html"},"https://www.oracle.com/technical-resources/articles/it-infrastructure/dev-oom-killer.html"))))}p.isMDXComponent=!0},4453:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/deadlock.example-0ee1d6eac0e10d0add80ae840f07af4c.png"},4195:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/mutex-0ee1d6eac0e10d0add80ae840f07af4c.png"},1848:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/newrelic-1f0b222d46ca06fae3a9ed2454b7e4f2.png"},3127:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/not_release-d0535767ed4ff59973f257a232b036c1.png"},7259:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/oom-3aaa8980b8e3d5c4a016190466c70083.png"},913:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/practices-dadf49b3879dafe3b774b55ad86f7dbe.png"},8528:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/routine_map-0b239810a00a2b106cba725cd202453c.png"}}]);