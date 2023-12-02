"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[496],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,g=c["".concat(l,".").concat(u)]||c[u]||d[u]||a;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={title:"Domain Model: \u5f9e\u7121\u5230\u6709\u898f\u5283\u65b0\u7684\u670d\u52d9",description:"\u898f\u5283\u8edf\u9ad4\u670d\u52d9\u7684\u904e\u7a0b\u6bd4\u5be6\u4f5c\u4f86\u7684\u91cd\u8981\uff0c\u5728\u9084\u672a\u898f\u5283\u5b8c\u6574\u76f4\u63a5\u958b\u59cb\uff0c\u5f88\u5bb9\u6613\u9020\u6210\u958b\u767c\u51fa\u4f86\u7684\u7522\u54c1\u4e0d\u7b26\u5408\u5ba2\u6236\u7684\u9700\u6c42\u3002\u4f46\u600e\u9ebc\u898f\u5283\u53c8\u662f\u4e00\u500b\u554f\u984c\uff0c\u5728\u73fe\u5be6\u751f\u6d3b\u4e2d\uff0c\u4e0d\u5c11Application \u958b\u767c\u5f8c\u4f7f\u7528\u8005\u5b8c\u5168\u4e0d\u8cb7\u55ae\u7684\u6848\u4f8b\u2026\u56e0\u6b64\u5982\u4f55\u898f\u5283\u5c31\u662f\u4e00\u500b\u91cd\u9ede\u3002",keywords:["architecture pattern"],sidebar_position:1},o="Domain Model: \u5f9e\u7121\u5230\u6709\u898f\u5283\u65b0\u7684\u670d\u52d9",s={unversionedId:"patterns/2021.09.04.from_mod_to_structure",id:"patterns/2021.09.04.from_mod_to_structure",title:"Domain Model: \u5f9e\u7121\u5230\u6709\u898f\u5283\u65b0\u7684\u670d\u52d9",description:"\u898f\u5283\u8edf\u9ad4\u670d\u52d9\u7684\u904e\u7a0b\u6bd4\u5be6\u4f5c\u4f86\u7684\u91cd\u8981\uff0c\u5728\u9084\u672a\u898f\u5283\u5b8c\u6574\u76f4\u63a5\u958b\u59cb\uff0c\u5f88\u5bb9\u6613\u9020\u6210\u958b\u767c\u51fa\u4f86\u7684\u7522\u54c1\u4e0d\u7b26\u5408\u5ba2\u6236\u7684\u9700\u6c42\u3002\u4f46\u600e\u9ebc\u898f\u5283\u53c8\u662f\u4e00\u500b\u554f\u984c\uff0c\u5728\u73fe\u5be6\u751f\u6d3b\u4e2d\uff0c\u4e0d\u5c11Application \u958b\u767c\u5f8c\u4f7f\u7528\u8005\u5b8c\u5168\u4e0d\u8cb7\u55ae\u7684\u6848\u4f8b\u2026\u56e0\u6b64\u5982\u4f55\u898f\u5283\u5c31\u662f\u4e00\u500b\u91cd\u9ede\u3002",source:"@site/docs/patterns/2021.09.04.from_mod_to_structure.md",sourceDirName:"patterns",slug:"/patterns/2021.09.04.from_mod_to_structure",permalink:"/docs/patterns/2021.09.04.from_mod_to_structure",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Domain Model: \u5f9e\u7121\u5230\u6709\u898f\u5283\u65b0\u7684\u670d\u52d9",description:"\u898f\u5283\u8edf\u9ad4\u670d\u52d9\u7684\u904e\u7a0b\u6bd4\u5be6\u4f5c\u4f86\u7684\u91cd\u8981\uff0c\u5728\u9084\u672a\u898f\u5283\u5b8c\u6574\u76f4\u63a5\u958b\u59cb\uff0c\u5f88\u5bb9\u6613\u9020\u6210\u958b\u767c\u51fa\u4f86\u7684\u7522\u54c1\u4e0d\u7b26\u5408\u5ba2\u6236\u7684\u9700\u6c42\u3002\u4f46\u600e\u9ebc\u898f\u5283\u53c8\u662f\u4e00\u500b\u554f\u984c\uff0c\u5728\u73fe\u5be6\u751f\u6d3b\u4e2d\uff0c\u4e0d\u5c11Application \u958b\u767c\u5f8c\u4f7f\u7528\u8005\u5b8c\u5168\u4e0d\u8cb7\u55ae\u7684\u6848\u4f8b\u2026\u56e0\u6b64\u5982\u4f55\u898f\u5283\u5c31\u662f\u4e00\u500b\u91cd\u9ede\u3002",keywords:["architecture pattern"],sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview The WebSocket Mechanism",permalink:"/docs/http/2020.11.25.overview_the_websocket_mechanism"},next:{title:"Domain Model: \u5f9e\u7121\u5230\u6709\u898f\u5283\u65b0\u7684\u670d\u52d9",permalink:"/docs/patterns/2021.12.31.cqrs"}},l={},p=[{value:"<strong>Business responsibilities</strong>",id:"business-responsibilities",level:3},{value:"<strong>A model that de\ufb01nes and scopes</strong>",id:"a-model-that-de\ufb01nes-and-scopes",level:3},{value:"Extract Model From <em>Business Responsibilities</em> <em>(Domain)</em>",id:"extract-model-from-business-responsibilities-domain",level:4},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",level:3},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:3}],m={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"domain-model-\u5f9e\u7121\u5230\u6709\u898f\u5283\u65b0\u7684\u670d\u52d9"},"Domain Model: \u5f9e\u7121\u5230\u6709\u898f\u5283\u65b0\u7684\u670d\u52d9"),(0,i.kt)("p",null,"\u898f\u5283\u8edf\u9ad4\u670d\u52d9\u7684\u904e\u7a0b\u6bd4\u5be6\u4f5c\u4f86\u7684\u91cd\u8981\uff0c\u5728\u9084\u672a\u898f\u5283\u5b8c\u6574\u76f4\u63a5\u958b\u59cb\uff0c\u5f88\u5bb9\u6613\u9020\u6210\u958b\u767c\u51fa\u4f86\u7684\u7522\u54c1\u4e0d\u7b26\u5408\u5ba2\u6236\u7684\u9700\u6c42\u3002\u4f46\u600e\u9ebc\u898f\u5283\u53c8\u662f\u4e00\u500b\u554f\u984c\uff0c\u5728\u73fe\u5be6\u751f\u6d3b\u4e2d\uff0c\u4e0d\u5c11Application \u958b\u767c\u5f8c\u4f7f\u7528\u8005\u5b8c\u5168\u4e0d\u8cb7\u55ae\u7684\u6848\u4f8b\u2026\u56e0\u6b64\u5982\u4f55\u898f\u5283\u5c31\u662f\u4e00\u500b\u91cd\u9ede\u3002"),(0,i.kt)("p",null,"\u6839\u64daPOSA v4","[","1","]"," \u91dd\u5c0d\u5f9e\u96f6\u898f\u5283\u8edf\u984c\u670d\u52d9\u6240\u7d66\u51fa\u7684\u5efa\u8b70","(","From mod to Structure",")",": "),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"\u201cCreate a model that de\ufb01nes and scopes a system\u2019s business responsibilities and their variations: model elements are abstractions meaningful in the application domain, while their roles and interactions re\ufb02ect the domain work\ufb02ow.\u201d"))," "),(0,i.kt)("p",null,"\u5f9e\u4e0a\u8ff0\u9019\u6bb5\u8a71\u6b78\u7d0d\u51fa\u4e09\u500b\u91cd\u9ede\uff0c1. ",(0,i.kt)("strong",{parentName:"p"},"Business responsibilities"),"\u30012. ",(0,i.kt)("strong",{parentName:"p"},"A model that de\ufb01nes and scopes"),"\u30013. ",(0,i.kt)("strong",{parentName:"p"},"Elements are abstractions meaningful in the application domain\u3002"),"\u9996\u5148\u9700\u8981\u5b9a\u7fa9\u597d\u6240\u9700\u8981\u7684Domain Feature\uff0c\u6839\u64daDomain Feature\u9032\u4e00\u6b65\u5c07\u8edf\u9ad4\u4e2d\u7684Entity\u3001Value Object \u898f\u5283\u51fa\u4f86\uff0c\u4e26\u7531\u9019\u4e9bElements \u7d44\u6210\u53ef\u4ee5\u8dd1\u5f97Service\u3002"),(0,i.kt)("h3",{id:"business-responsibilities"},(0,i.kt)("strong",{parentName:"h3"},"Business responsibilities")),(0,i.kt)("p",null,"\u5728\u50b3\u7d71\u958b\u65b9\u4e0a\u5546\u696d\u908f\u8f2f\u7684\u6642\u5019\u901a\u5e38\u662f\u7d93\u6b77\u904e\u5c64\u5c64\u95dc\u5361\u6162\u6162\u50b3\u905e\u5230\u5de5\u7a0b\u5e2b\uff0c\u7136\u800c\u9700\u6c42\u6536\u6582\u7684\u904e\u7a0b\u4e2d\uff0c\u8a31\u591a\u6f5b\u5728\u52d5\u6a5f\u5c07\u7121\u6cd5\u9806\u5229\u50b3\u905e\uff0c\u4f7f\u5f97\u5de5\u7a0b\u5e2b\u6240\u7522\u51fa\u7684\u7a0b\u5f0f\u6cd5\u8ddfDomain knowledge \u5c0d\u4e0d\u4e0a\uff0c\u4f7f\u5f97\u958b\u767c\u51fa\u4f86\u7684\u7522\u54c1\u4e0d\u7b26\u9810\u671f\u7684\u6a5f\u6703\u5927\u5927\u63d0\u6607\u3002",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"\u56e0\u6b64\u5de5\u7a0b\u5e2b\u9808\u53c3\u8207\u6574\u500b\u8edf\u9ad4\u8a2d\u8a08\u7684\u904e\u7a0b\u3002"))),(0,i.kt)("p",null,"\u6b64\u5916\u6e9d\u901a\u6240\u4f7f\u7528\u7684\u5de5\u5177\u4e5f\u662f\u76f8\u7576\u7684\u91cd\u8981\u3002\u7531\u65bc\u5de5\u7a0b\u5e2b\u3001\u5ba2\u6236\u3001\u5c08\u6848\u7ba1\u7406\u54e1...\u7b49\u53c3\u8207\u4eba\u4e8b\u7684\u80cc\u666f\u4e0d\u76e1\u76f8\u540c\uff0c\u53ef\u80fd\u9020\u6210\u6e9d\u901a\u4e0a\u7684\u56f0\u96e3\u3002",(0,i.kt)("strong",{parentName:"p"},"\u50cf\u662f\u900f\u904eUML\u7d71\u4e00\u5efa\u6a21\u8a9e\u8a00\uff0c\u8207Prototype \u7684\u5be6\u4f5c\u591a\u6b21\u7684\u78ba\u8a8d\u9700\u6c42\uff0c\u624d\u80fd\u6709\u6548\u7684\u78ba\u8a8d\u5546\u696d\u908f\u8f2f\u3002")),(0,i.kt)("p",null,"\u4f46\u4e0d\u9650\u65bc\u53ea\u80fd\u4f7f\u7528UML\uff0c\u53ea\u8981\u5718\u968a\u81ea\u884c\u7d04\u5b9a\u597d\u5373\u53ef\u3002"),(0,i.kt)("p",null,"\u8209\u4f8b\uff0c\u50cf\u662f",(0,i.kt)("strong",{parentName:"p"},"Ontology\u3001Data Flow Diagram ","(","DFD",")","\u7b49\u5de5\u5177\u90fd\u662f\u5f88\u597d\u8868\u9054\u7cfb\u7d71\u7684\u65b9\u5f0f\uff0c"),"\u7136\u800c\u4e5f\u53ef\u4ee5\u900f\u904e\u5fc3\u667a\u5716\u7b49\u7b49\u7684\u975e\u6b63\u898f\u8edf\u9ad4\u7528\u7684\u5de5\u5177\u4e5f\u53ef\uff0c\u7e3d\u800c\u8a00\u4e4b\u8868\u9054\u6e05\u695a\u8edf\u9ad4\u8a2d\u8a08\uff0c\u6e1b\u5c11\u6e9d\u901a\u6240\u9020\u6210\u7684\u6d88\u8017\u3002"),(0,i.kt)("h3",{id:"a-model-that-de\ufb01nes-and-scopes"},(0,i.kt)("strong",{parentName:"h3"},"A model that de\ufb01nes and scopes")),(0,i.kt)("p",null,"\u5982\u4f55\u5f9eBusiness Responsibilities\u5247\u9700\u8981\u5148\u91d0\u6e05\u554f\u984c\u672c\u8eab\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u5c07\u6703\u767c\u73fe\u4e00\u500b\u5927\u554f\u984c\u53ef\u4ee5\u88ab\u62c6\u5206\u6210\u591a\u500b\u5c0f\u554f\u984c"),"\u3002",(0,i.kt)("strong",{parentName:"p"},"\u9019\u4e9b\u5c0f\u554f\u984c\u5247\u7a31\u70baModel"),"\u3002\u5f80\u5f80\u5b9a\u7fa9Model\u61c9\u8a72\u8207\u8edf\u9ad4\u67b6\u69cb\u540c\u6642\u88ab\u8003\u616e\uff0c\u4e0d\u56e0\u8edf\u9ad4\u7684\u9650\u5236\uff0c\u5c0e\u81f4\u6574\u9ad4\u67b6\u69cb\u7121\u6cd5\u5c07Model \u884c\u70ba\u62bd\u8c61\u5316\uff0c\u4e5f\u4e0d\u80fd\u70ba\u4e86Model \u7684\u529f\u80fd\u800c\u5ffd\u7565\u8edf\u9ad4\u7684\u9650\u5236\u3002 ",(0,i.kt)("strong",{parentName:"p"},"\u63db\u53e5\u8a71\u8aaa\uff0c\u5e0c\u671b\u53ef\u4ee5\u5f9eModel\u5177\u6709\u7684\u610f\u7fa9\u4e5f\u540c\u6642\u5728\u8edf\u9ad4\u67b6\u69cb\u4e2d\u4e5f\u770b\u5f97\u51fa\u4f86\uff0c\u4f46\u4e5f\u4e0d\u80fd\u5b8c\u5168\u5ffd\u7565\u8edf\u9ad4\u7684\u9650\u5236\u3002")),(0,i.kt)("p",null,"\u4ec0\u9ebc\u662f\u8edf\u9ad4\u7684\u9650\u5236\uff1f\u5f80\u5f80\u5728\u958b\u767c\u7684\u6642\u5019\uff0c\u5df2\u7d93\u5148\u6c7a\u5b9a\u4f7f\u7528\u54ea\u500b\u5de5\u5177\uff0c\u5c31\u61c9\u8a72\u5145\u5206\u7684\u5229\u7528\u5de5\u5177\u7684\u512a\u52e2\u3002\u8209\u4f8b\u4f86\u8aaa\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u7576\u5df2\u7d93\u6c7a\u5b9a\u4f7f\u7528Socket.io \u5176\u672c\u8eab\u5177\u6709Broadcast\u7684\u529f\u80fd\u8207\u623f\u9593\u7ba1\u7406\uff0c\u90a3\u56e0\u6b64\u5728\u8a2d\u8a08\u804a\u5929\u5ba4\u7b49\u529f\u80fd\uff0c\u5247\u5fc5\u9808\u76e1\u91cf\u8cbc\u8fd1Socket.io\u7684\u7279\u6027\uff0c\u4e5f\u4e0d\u80fd\u4e00\u6627\u7684\u4f9d\u7167domain\u7684\u9700\u6c42\uff0c\u5b8c\u5168\u5ffd\u7565\u6240\u4f7f\u7528\u5de5\u5177\u7684\u512a\u52e2\u6216\u52a3\u52e2\u3002")),(0,i.kt)("h4",{id:"extract-model-from-business-responsibilities-domain"},"Extract Model From ",(0,i.kt)("em",{parentName:"h4"},"Business Responsibilities")," ",(0,i.kt)("em",{parentName:"h4"},"(","Domain",")")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2761).Z,width:"621",height:"378"})),(0,i.kt)("p",null,"\u4e00\u822c\u4f86\u8aaa\u8edf\u9ad4\u4e0a\u53ef\u4ee5\u5206\u70ba\u56db\u5c64\uff0cUI\u3001API\u3001Logic\u3001Essential \u9019\u56db\u5c64\uff0c\u540c\u6642\u4e5f\u9075\u5b88Layers Architecture Pattern \u7684\u898f\u7bc4\uff0c\u5c64\u5c64\u4e4b\u9593\u53ef\u4e92\u76f8\u5b58\u53d6\uff0c\u4f46\u4e0d\u53ef\u4ee5\u8de8\u5c64\u5b58\u53d6\u3002\u5176\u4e2dDomain\u662f\u6307\u5c0d\u61c9Business Responsibility \uff0c\u5728\u8edf\u9ad4\u4e0a\u9700\u8981\u505a\u5230Domain\u5247\u9808\u8981\u6839\u64dafundamental \u9032\u884c\u5be6\u4f5c\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(280).Z,width:"438",height:"522"})),(0,i.kt)("p",null,"\u7576\u8edf\u9ad4\u5be6\u4f5c\u6642\uff0c\u53ef\u4ee5\u5982\u4e0a\u5716Class Diagram\uff0c.\u900f\u904eAPI\u5c64\u53ea\u8207Domain \u6709interaction\uff0c\u7136\u800cDomain \u9084\u53ef\u7d30\u5206\u6210Domain\u3001Model \u5169\u7a2eComponent\u3002\u800c\u9700\u8981\u505a\u5230Domain \u7684\u529f\u80fd\u5247\u5fc5\u8981\u4f7f\u7528 Model \u624d\u80fd\u9054\u6210\u3002\u800cModel \u5247\u900f\u904e Fundamental \u7684\u4ea4\u4e92\u4f5c\u7528\u9054\u6210\u3002 "),(0,i.kt)("p",null,"\u5728\u5be6\u52d9\u4e0a\u7684\u5de5\u7a0b\u5e2b\u53ef\u80fd\u6703\u554f\uff0c\u9700\u8981\u4e86\u89e3\u5230\u4ec0\u9ebc\u7a0b\u5ea6\u5462\uff1f \u96e3\u9053\u9700\u8981\u8b8a\u6210\u53e6\u4e00\u500bdomain\u7684\u5c08\u5bb6\u624d\u53ef\u4ee5\u958b\u59cb\u505a\u561b\uff1f ",(0,i.kt)("strong",{parentName:"p"},"\u4e8b\u5be6\u4e0a\uff0c\u5de5\u7a0b\u5e2b\u53ea\u8981\u78ba\u8a8d\u5c07\u8981\u7814\u767c\u7684\u8edf\u9ad4\u67b6\u69cb\uff0c\u662f\u7b26\u5408domain \u77e5\u8b58\u7684\u5373\u53ef\uff0c\u56e0\u6b64\u5728\u8edf\u9ad4\u8a2d\u8a08\u7684\u904e\u7a0b\uff0c\u9700\u8981\u6642\u5e38\u8207domain \u5c08\u696d\u4eba\u58eb\u9032\u884c\u5c0d\u7126\u78ba\u8a8d\uff0c\u4e26\u4e0d\u9700\u8981\u8b8a\u6210\u53e6\u4e00\u500b\u9818\u57df\u7684\u5c08\u696d\u4eba\u58eb\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Elements are abstractions meaningful in the application domain")),(0,i.kt)("p",null,"\u7576\u5728\u898f\u5283\u8edf\u9ad4\u670d\u52d9\u7684\u6642\u5019\uff0c\u5171\u5206\u6210Entity\u3001Value Object\u3001Service \u7b49\u4e09\u7a2e\u89d2\u8272\uff0c\u800cService\u7684\u6982\u5ff5\u662f\u5c0d\u61c9\u5230Model\u7684\u6982\u5ff5\uff0c\u7136\u800cEntity\u3001Value Object \u5c0d\u61c9\u5230Fundamental\u3002Entity \u5c31\u662f\u4e00\u500b\u5c31\u6709Unique ID\u4e4b\u985e\u7684\u53ef\u8fa8\u5225\u7684\u5c6c\u6027\uff0c\u800cValue Object \u5247\u662f\u7528\u65bc\u63a7\u5236Entity \u7269\u4ef6\u7684\u7269\u4ef6\uff0cService \u5247\u662fEntity + Value Object \u6240\u7d44\u6210\u7684\u529f\u80fd\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8418).Z,width:"260",height:"282"})),(0,i.kt)("p",null,"\u4ee5\u7269\u6d41\u8eca\u8ca0\u8cac\u904b\u9001\u591a\u500b\u8a02\u55ae\u7684\u5be6\u4f5c\u529f\u80fd\u70ba\u4f8b\uff0c\u5982\u4e0a\u5716Class Diagram\uff0cLogisticVehicle \u5c6c\u65bcObject Value \u7269\u4ef6\uff0cOrder \u5c6c\u65bcEntity \u7269\u4ef6\u3002\u56e0\u70ba\u5c0d\u65bc\u4f7f\u7528\u8005\u800c\u8a00\uff0cLogisticVehicle \u4e26\u7121\u6cd5\u5340\u5206\uff0c\u4f46Order \u5247\u662f\u5177\u5099\u7279\u5b9a\u610f\u7fa9\u4e14\u80fd\u5920\u5340\u5206\u51fa\u4f86\u3002"),(0,i.kt)("h3",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,i.kt)("p",null,"\u5728\u8edf\u9ad4\u958b\u767c\u4e2d\uff0cDomain know how \u9808\u8207\u5be6\u969b\u7684\u8a2d\u8a08\u4e00\u8d77\u88ab\u601d\u8003\u3002\u7a0b\u5f0f\u8a2d\u8a08\u5e2b\u4e0d\u50c5\u61c9\u8a72\u53c3\u8207Feature \u7684\u8a0e\u8ad6\uff0c\u4e5f\u61c9\u8a72\u91dd\u5c0dDomain Knowledge \u9032\u884c\u9032\u4e00\u6b65\u7684\u4e86\u89e3\uff0c\u4f7f\u6240\u7522\u51fa\u7684\u7a0b\u5f0f\u8a2d\u8a08\u8207Domain know how\u76e1\u53ef\u80fd\u8cbc\u8fd1\u3002\u6b64\u8209\u9664\u4e86\u65e5\u5f8c\u66f4\u597d\u7dad\u8b77\u4e4b\u5916\uff0c\u540c\u6642\u4e5f\u80fd\u5920\u964d\u4f4e\u65e5\u5f8c\u64f4\u5145\u65b0\u529f\u80fd\u7684\u96e3\u5ea6\uff0c\u56e0\u70ba\u8d8a\u8cbc\u8fd1Domain Know How\u6240\u5b9a\u7fa9\u51fa\u4f86\u7684Entity \u7269\u4ef6\u8d8a\u4e0d\u5bb9\u6613\u6709\u5927\u7684\u66f4\u52d5\u3002"),(0,i.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u8a2d\u8a08\u6642\u4e0d\u7528\u4e00\u6627\u7684\u4f7f\u7528UML\u5c07\u6574\u9ad4\u8a2d\u8a08\u756b\u7684\u975e\u5e38\u8a73\u7d30\uff0c\u56e0\u70ba\u5f80\u5f80\u7cfb\u7d71\u767c\u5c55\u4e4b\u5f8c\uff0c\u6703\u904e\u65bc\u9f90\u5927\u4ee5\u81f3\u65bc\u7121\u6cd5\u660e\u986f\u8868\u9054\u51fa\u8a2d\u8a08\u7684\u610f\u542b\uff0c\u4e0d\u904e\u4e4b\u524d\u6240\u6709\u898f\u5283\u7684\u8a2d\u8a08\u8173\u672c\uff0c\u4e5f\u61c9\u8a72\u88ab\u6b78\u6a94\uff0c\u8b93\u65e5\u5f8c\u63a5\u624b\u7dad\u8b77\u7684\u958b\u767c\u8005\u80fd\u66f4\u5feb\u901f\u7684\u4e86\u89e3\u7a0b\u5f0f\u7684\u67b6\u69cb\uff0c\u624d\u4e0d\u6703\u8d8a\u4fee\u6539\u537b\u96e2Domain \u8d8a\u9060\u3002"),(0,i.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),(0,i.kt)("p",null,"[1]"," Frank, Buschmann, Henney Kevlin, and C. Schmidt Douglas. Pattern-Oriented Software Architecture Volume 4: A Pattern Language for Distributed Computing ","(","v. 4",")",". Wiley, 2007.  ",(0,i.kt)("br",null),"\n","[2]"," \u8d99\u4fd0\u3001\u76db\u6d77\u8c54\u3001\u5289\u971e\u8b6f\uff0cDomain-Driven Design\u9818\u57df\u9a45\u52d5\u8a2d\u8a08, \u535a\u78a9\u6587\u5316\uff0c2019\u3002 ",(0,i.kt)("br",null)))}d.isMDXComponent=!0},2761:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image (13)-5f8a6e7fa5fbeee5cd92dfccb8912d30.png"},8418:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image (14)-21f58b6f7a08fd99239fa1070f7f7994.png"},280:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/untitled-diagram.drawio-d03e7c75a8f49a8444d8a69644782821.svg"}}]);