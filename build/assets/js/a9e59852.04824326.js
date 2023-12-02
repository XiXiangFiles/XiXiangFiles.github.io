"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[680],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>b});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),k=p(t),m=o,b=k["".concat(c,".").concat(m)]||k[m]||u[m]||a;return t?n.createElement(b,i(i({ref:r},l),{},{components:t})):n.createElement(b,i({ref:r},l))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[k]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3253:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const a={title:"Broker \u5230\u5e95\u662f\u4ec0\u9ebc",description:"\u5e02\u9762\u4e0a Broker \u767e\u767e\u7a2e\uff0c\u6700\u6709\u540d\u7684\u61c9\u8a72\u662f message Queue\uff0c\u5982 MQTT\u3001RabbitMQ\u3001Kafka\u7b49\u3002\u53ef\u662f\u5f88\u5c11\u4eba\u77e5\u9053Broker\u5176\u5be6\u6307\u8edf\u9ad4\u8a2d\u8a08\u7684\u67b6\u69cb\u3002\u4e8b\u5be6\u4e0a\u5f88\u591a\u6642\u5019\u5728\u64b0\u5beb\u7684\u8edf\u9ad4\u7684\u6642\u5019\u4e5f\u5beb\u4e86Broker \u53ea\u662f\u4e0d\u77e5\u9053\u5b83\u662fbroker\u3002",keywords:["broker","architecture pattern"],sidebar_position:1},i="Broker \u5230\u5e95\u662f\u4ec0\u9ebc\uff1f",s={unversionedId:"broker/2020.11.11.what_is_broker",id:"broker/2020.11.11.what_is_broker",title:"Broker \u5230\u5e95\u662f\u4ec0\u9ebc",description:"\u5e02\u9762\u4e0a Broker \u767e\u767e\u7a2e\uff0c\u6700\u6709\u540d\u7684\u61c9\u8a72\u662f message Queue\uff0c\u5982 MQTT\u3001RabbitMQ\u3001Kafka\u7b49\u3002\u53ef\u662f\u5f88\u5c11\u4eba\u77e5\u9053Broker\u5176\u5be6\u6307\u8edf\u9ad4\u8a2d\u8a08\u7684\u67b6\u69cb\u3002\u4e8b\u5be6\u4e0a\u5f88\u591a\u6642\u5019\u5728\u64b0\u5beb\u7684\u8edf\u9ad4\u7684\u6642\u5019\u4e5f\u5beb\u4e86Broker \u53ea\u662f\u4e0d\u77e5\u9053\u5b83\u662fbroker\u3002",source:"@site/docs/broker/2020.11.11.what_is_broker.md",sourceDirName:"broker",slug:"/broker/2020.11.11.what_is_broker",permalink:"/docs/broker/2020.11.11.what_is_broker",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Broker \u5230\u5e95\u662f\u4ec0\u9ebc",description:"\u5e02\u9762\u4e0a Broker \u767e\u767e\u7a2e\uff0c\u6700\u6709\u540d\u7684\u61c9\u8a72\u662f message Queue\uff0c\u5982 MQTT\u3001RabbitMQ\u3001Kafka\u7b49\u3002\u53ef\u662f\u5f88\u5c11\u4eba\u77e5\u9053Broker\u5176\u5be6\u6307\u8edf\u9ad4\u8a2d\u8a08\u7684\u67b6\u69cb\u3002\u4e8b\u5be6\u4e0a\u5f88\u591a\u6642\u5019\u5728\u64b0\u5beb\u7684\u8edf\u9ad4\u7684\u6642\u5019\u4e5f\u5beb\u4e86Broker \u53ea\u662f\u4e0d\u77e5\u9053\u5b83\u662fbroker\u3002",keywords:["broker","architecture pattern"],sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"09.24.introduce_vvl",permalink:"/docs/patterns/09.24.introduce_vvl"},next:{title:"[\u6df1\u5165\u6dfa\u51faMQTT]:  v3.1.1\u8207v5 \u7684\u5dee\u7570",permalink:"/docs/broker/2021.07.12.mqtt5_vs_3"}},c={},p=[],l={toc:p},k="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(k,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"broker-\u5230\u5e95\u662f\u4ec0\u9ebc"},"Broker \u5230\u5e95\u662f\u4ec0\u9ebc\uff1f"),(0,o.kt)("p",null,"\u6839\u64daPOSA","[","1","]","\u4e00\u66f8\u4e2d\u7d66\u7684Borker\u7684\u5b9a\u7fa9\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Broker architectural pattern can be used to structure distributed software systems with decoupled components that interact by remote service invocations. ",(0,o.kt)("strong",{parentName:"p"},"A broker component Is responsible for coordinating communication"),", such as forwarding requests. as well as for transmitting results and exceptions.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Broker \u5176\u5be6\u5c31\u662f\u4e00\u7a2e\u5c08\u9580\u8a2d\u8a08\u7528\u4f86\u50b3\u905e\u3001\u806f\u7d61\u5404component \u7684\u4e00\u7a2e\u8edf\u9ad4\u67b6\u69cb"),"\u3002\u4e3b\u8981\u5206\u6210\u4e09\u500b\u4e3b\u9ad4client\u3001Broker\u3001servers\uff0c\u6709\u5225\u65bcclient-server\u67b6\u69cb\uff0c",(0,o.kt)("strong",{parentName:"p"},"Client\u89f8\u767c\u670d\u52d9\u5be6\u8cea\u4e0a\u662f\u900f\u904eBroker","(","\u4e2d\u9593\u4eba",")","\u3002")),(0,o.kt)("p",null,"Broker \u8a95\u751f\u662f\u70ba\u4e86\u61c9\u4ed8\u4e00\u500b\u6301\u7e8c\u589e\u9577\u7684\u7cfb\u7d71\uff0c\u7136\u800c\u70ba\u4e86\u7dad\u8b77\u6027\u3001\u5b89\u5168\u6027\u3001\u5f48\u6027\u7b49\u539f\u56e0\u624d\u8a95\u751f\u51fa\u4f86\u7684\u3002\u800c\u4e3b\u8981\u9047\u5230\u7684\u56f0\u96e3\u662f\uff1a",(0,o.kt)("strong",{parentName:"p"},"1. \u7cfb\u7d71\u5167\u7684component\u80fd\u5920\u4e92\u76f8\u7684\u6e9d\u901a\u30012.\u7cfb\u7d71\u904b\u884c\u6642\uff0ccomponent\u53ef\u4ee5\u52d5\u614b\u5730\u88ab\u8abf\u6574","(","\u4e0a\u67b6\u3001\u4e0b\u67b6",")","\u30013.\u5c0dclient\u7aef\u96b1\u85cf\u5f8c\u7aef\u7684service.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Broker \u7279\u6027 hint: \u7d00\u9304client\u8207server\u7684\u72c0\u614b\uff0c\u4e26\u4e14\u5c0dclient\u96b1\u85cfserver \u6240\u5177\u6709\u7684\u670d\u52d9")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u975c\u614b\u8996\u89d2","(","proxy\u53ef\u76f4\u63a5\u4f75\u5165client\u3001server ; Bridge\u53ef\u4f75\u5165Broker ",")")," \u5f9eClass diagram \u4f86\u770bBroker\uff0c\u5927\u81f4\u4e0a\u5207\u5206\u70ba\u4e09\u500b\u89d2\u8272\uff0cclient\u3001Broker\u3001servers\u3002\u5f7c\u6b64\u4e4b\u9593\u50b3\u905e\u900f\u904eproxy\uff0c\u800cbroker \u8207\u5176\u4ed6broker\u5247\u662f\u900f\u904ebridge\u50b3\u905e\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/1200/1*Xp1gnt6N83vaV99XXAXDYA.png",alt:"Broker architectural class diagram"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u52d5\u614b\u8996\u89d2","(","\u4e0b\u5716\u5c07proxy\u5408\u4f75\u9032client\u3001server",")")," \u9996\u5148Server \u5148\u5c07\u81ea\u5df1\u8a3b\u518a\u9032\u5165Broker \uff0c\u800cBroker\u6703\u5c07 service\u5b58\u53d6\u65b9\u5f0f\u4fdd\u7559repo.\u4e2d\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*ymNZflz3WNspCfq_26I03g.png",alt:"img"})),(0,o.kt)("p",null,"\u7576Client\u900f\u904eproxy\u5411Broker\u89f8\u767c\u67d0\u4e00\u500b\u670d\u52d9\uff0cBroker \u518d\u5411Server\u53d6\u8981\u7d50\u679c\u5f8c\u56de\u50b3\u7d66Client\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*iZS8nCsnkVBNwgspD8J2sg.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7e3d\u7d50")," \u5e02\u9762\u4e0a\u6709\u5f88\u591a\u7a2ebroker\uff0c\u800c\u4e14\u6709\u5f88\u591a\u7684\u8b8a\u578b\u3002\u4f46\u7e3d\u800c\u8a00\u4e4b\uff0cBroker \u662f\u7528\u4f86\u5e6b\u5fd9client\u89f8\u767c\u670d\u52d9\u7684\uff0c\u4e26\u5177\u6709\u300c\u7d00\u9304client\u8207server\u7684\u72c0\u614b\uff0c\u4e14\u5c0dclient\u96b1\u85cfserver \u6240\u5177\u6709\u7684\u670d\u52d9\u300d\u7684\u7279\u6027\uff01\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u53c3\u8003\u8cc7\u6599"),(0,o.kt)("br",{parentName:"p"}),"\n","[","1","]"," Frank, Buschmann, et al. \u201cPattern-oriented software architecture: a system of patterns.\u201d ",(0,o.kt)("em",{parentName:"p"},"Wiley, ISBN 0")," 471.95889 ","(","1996",")"))}u.isMDXComponent=!0}}]);