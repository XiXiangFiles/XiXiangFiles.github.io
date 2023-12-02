"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[463],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=c(r),k=a,d=s["".concat(p,".").concat(k)]||s[k]||m[k]||o;return r?n.createElement(d,i(i({ref:e},u),{},{components:r})):n.createElement(d,i({ref:e},u))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=k;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[s]="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},4425:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"\u5f9e RFC \u898f\u683c\u66f8\u89c0\u9ede\u89e3\u6790 OAuth 2.0",description:"OAuth2 \u76ee\u524d\u4e00\u7a2e Web \u4e3b\u6d41\u7684\u5b89\u5168\u8a8d\u8b49\u65b9\u6cd5\uff0c\u662f\u4e00\u7a2e\u6388\u6b0a\u6846\u67b6\uff0c\u8cc7\u6e90\u6240\u6709\u8005(Resource Owner)\u53ef\u4ee5\u85c9\u7531\u6388\u6b0a\u4f3a\u670d\u5668(Authorization Server)\u4f86\u5141\u8a31\u7b2c\u4e09\u65b9\u61c9\u7528\u7a0b\u5f0f(Client)\u4f86\u8a2a\u554f\u7684\u53d7\u4fdd\u8b77\u7684\u8cc7\u6e90(Protected Resource)\u3002",keywords:["architecture pattern","microservice","auth2.0","ambassador pattern"],sidebar_position:1},i="\u5f9e RFC \u898f\u683c\u66f8\u89c0\u9ede\u89e3\u6790 OAuth 2.0",l={unversionedId:"security/2020.12.20.auth_2_tutorial",id:"security/2020.12.20.auth_2_tutorial",title:"\u5f9e RFC \u898f\u683c\u66f8\u89c0\u9ede\u89e3\u6790 OAuth 2.0",description:"OAuth2 \u76ee\u524d\u4e00\u7a2e Web \u4e3b\u6d41\u7684\u5b89\u5168\u8a8d\u8b49\u65b9\u6cd5\uff0c\u662f\u4e00\u7a2e\u6388\u6b0a\u6846\u67b6\uff0c\u8cc7\u6e90\u6240\u6709\u8005(Resource Owner)\u53ef\u4ee5\u85c9\u7531\u6388\u6b0a\u4f3a\u670d\u5668(Authorization Server)\u4f86\u5141\u8a31\u7b2c\u4e09\u65b9\u61c9\u7528\u7a0b\u5f0f(Client)\u4f86\u8a2a\u554f\u7684\u53d7\u4fdd\u8b77\u7684\u8cc7\u6e90(Protected Resource)\u3002",source:"@site/docs/security/2020.12.20.auth_2_tutorial.md",sourceDirName:"security",slug:"/security/2020.12.20.auth_2_tutorial",permalink:"/docs/security/2020.12.20.auth_2_tutorial",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u5f9e RFC \u898f\u683c\u66f8\u89c0\u9ede\u89e3\u6790 OAuth 2.0",description:"OAuth2 \u76ee\u524d\u4e00\u7a2e Web \u4e3b\u6d41\u7684\u5b89\u5168\u8a8d\u8b49\u65b9\u6cd5\uff0c\u662f\u4e00\u7a2e\u6388\u6b0a\u6846\u67b6\uff0c\u8cc7\u6e90\u6240\u6709\u8005(Resource Owner)\u53ef\u4ee5\u85c9\u7531\u6388\u6b0a\u4f3a\u670d\u5668(Authorization Server)\u4f86\u5141\u8a31\u7b2c\u4e09\u65b9\u61c9\u7528\u7a0b\u5f0f(Client)\u4f86\u8a2a\u554f\u7684\u53d7\u4fdd\u8b77\u7684\u8cc7\u6e90(Protected Resource)\u3002",keywords:["architecture pattern","microservice","auth2.0","ambassador pattern"],sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 K3d \u5728 \u8981\u5728 Raspberry Pi4 \u7b46\u8a18",permalink:"/docs/k8s/2023.09.17.raspberry_pi_with_k3d"},next:{title:"HTTP Token \u4f7f\u7528\u65b9\u5f0f: Basic Token v.s Bearer Token",permalink:"/docs/security/2021.05.01.different_from_bearer_and_basic_token"}},p={},c=[{value:"Authorization Grant\u4f9d\u7167\u5b58\u53d6\u7a0b\u5ea6\u5206\u70ba\u56db\u7a2e\u65b9\u5f0f\u5b58\u53d6 Protected Resource:",id:"authorization-grant\u4f9d\u7167\u5b58\u53d6\u7a0b\u5ea6\u5206\u70ba\u56db\u7a2e\u65b9\u5f0f\u5b58\u53d6-protected-resource",level:3},{value:"\u7e3d\u7d50",id:"\u7e3d\u7d50",level:3},{value:"<strong>\u53c3\u8003\u8cc7\u6599</strong>",id:"\u53c3\u8003\u8cc7\u6599",level:3}],u={toc:c},s="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5f9e-rfc-\u898f\u683c\u66f8\u89c0\u9ede\u89e3\u6790-oauth-20"},"\u5f9e RFC \u898f\u683c\u66f8\u89c0\u9ede\u89e3\u6790 OAuth 2.0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"co-author:")," ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/u/e56c5b49cd7e"},(0,a.kt)("strong",{parentName:"a"},"MowLi \u5fae\u98a8"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OAuth2\u898f\u683c\u66f8\u4e2d\uff0c\u5c0d\u8cc7\u6e90\u4e5f\u81ea\u5b9a\u7fa9\u7684\u5206\u914d\uff0c\u4e0b\u8868\u70barfc\u4e2d\u6240\u5206\u914d\u7684\u89d2\u8272\u5206\u914d\u8868:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u89d2\u8272"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u8aaa\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Client"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6240\u4f7f\u7528\u7684\u5b58\u53d6\u5de5\u5177\u6216\u7a0b\u5f0f\uff0c\u5982 Browser, Mobile Phone, Postman")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Resource Owner"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5177\u5099\u670d\u52d9\u5b58\u53d6\u8cc7\u683c\u7684\u4eba")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Authorization Server"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8ca0\u8cac\u8a8d\u8b49\u7684\u4f3a\u670d\u5668\uff0c\u4e3b\u8981\u8ca0\u8cac\u767c\u884cAccess Token")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Protected Resource"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6b32\u5b58\u53d6\u7684\u670d\u52d9")))),(0,a.kt)("p",null,"\u8209\u4e00\u500b\u6700\u5e38\u88ab OAuth \u76f8\u95dc\u66f8\u7c4d\u63d0\u53ca\u7684\u4f8b\u5b50\uff1a\u4f60","(","Resource Owner",")","\u6709\u4e00\u5f35\u5132\u5b58\u5728\u96f2\u7aef\u670d\u52d9\u7684\u76f8\u7247","(","Protected Resource",")","\uff0c\u4eca\u5929\u4f60\u60f3\u8981\u900f\u904e\u4e00\u500b\u5f71\u5370\u670d\u52d9","(","Client",")","\u53bb\u5217\u5370\u8a72\u76f8\u7247\u3002"),(0,a.kt)("p",null,"\u5728\u50b3\u7d71\u505a\u6cd5\u4e0a\uff0c\u70ba\u4e86\u8b93\u5f71\u5370\u670d\u52d9","(","Client",")","\u62ff\u5230\u76f8\u7247\u5c31\u5fc5\u9808\u5c07\u4f60\u7684\u96f2\u7aef\u670d\u52d9\u7684\u6191\u8b49\uff08\u4f8b\u5982\uff1a\u5e33\u865f\u5bc6\u78bc\uff09\u7d66\u9019\u500b\u5f71\u5370\u670d\u52d9\uff0c\u8b93\u5b83\u80fd\u5b58\u53d6\u8a72\u96f2\u7aef\u670d\u52d9\u7684\u8cc7\u6e90\u3002\u800c IETF RFC 6749 \u53ca Action \u66f8\u4e2d\u5217\u51fa\u4e86\u4e00\u4e9b\u7f3a\u9ede\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Client \u9700\u8981\u5132\u5b58\u8cc7\u6e90\u6240\u6709\u8005\u7684\u6191\u8b49\uff0c\u901a\u5e38\u6703\u662f\u660e\u6587\u5f62\u5f0f\u7684\u5bc6\u78bc"),(0,a.kt)("li",{parentName:"ul"},"Client \u64c1\u6709\u904e\u5927\u5c0d\u53d7\u4fdd\u8b77\u8cc7\u6e90\u7684\u8a2a\u554f\u6b0a\u9650\uff0c\u800c\u4e14\u8cc7\u6e90\u6240\u6709\u8005\u6c92\u6709\u8fa6\u6cd5\u9650\u5236\u5b83\u8a2a\u554f\u6642\u9593\u6216\u8a2a\u554f\u8cc7\u6e90\u7684\u7bc4\u570d"),(0,a.kt)("li",{parentName:"ul"},"\u8cc7\u6e90\u6240\u6709\u8005\u53ea\u80fd\u900f\u904e\u66f4\u6539\u96f2\u7aef\u670d\u52d9\u7684\u5bc6\u78bc\u4f86\u64a4\u92b7\u5f71\u5370\u670d\u52d9\u7684\u8a2a\u554f\u6b0a\u9650\uff0c\u800c\u4e14\u6c92\u6709\u8fa6\u6cd5\u53ea\u64a4\u92b7\u4e00\u500b\uff08\u5176\u5b83\u7528\u5230\u96f2\u7aef\u670d\u52d9\u7684 Client \u61c9\u7528\u7a0b\u5f0f\u90fd\u6703\u53d7\u5230\u5f71\u97ff\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c Client \u53d7\u5230\u653b\u64ca\uff0c\u8a72\u653b\u64ca\u8005\u9084\u80fd\u5b58\u53d6\u53d7\u4fdd\u8b77\u8cc7\u6e90\uff0c\u4ee5\u53ca\u8cc7\u6e90\u64c1\u6709\u8005\u5176\u5b83\u4f7f\u7528\u76f8\u540c\u5bc6\u78bc\u7684\u670d\u52d9\uff08\u5f88\u591a\u4eba\u5728\u4e0d\u540c\u7db2\u7ad9\u90fd\u8a2d\u540c\u4e00\u7d44\u5e33\u5bc6\uff09")),(0,a.kt)("p",null,"\u7d9c\u89c0\u4f86\u8aaa\uff0c\u5728 OAuth2 \u4e2d\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Client \u5fc5\u9808\u5148\u5411 Resource Owner \u8acb\u6c42\u6388\u6b0a\u4f86\u7372\u5f97 Authorization Grant\uff0c\u9019\u88e1\u9762\u6703\u5305\u62ec Client \u80fd\u5b58\u53d6\u8cc7\u6e90\u7684\u7bc4\u570d\u3002"),(0,a.kt)("li",{parentName:"ol"},"Client \u85c9\u7531 Authorization Grant \u5411 Authorization Server \u7372\u53d6\u4e00\u500b\u6709\u6642\u6548\u6027/\u6c38\u4e45\u6027\u7684 Access Token\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4ee5 Access Token \u4f86\u5b58\u53d6 Protected Resource\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u4ee5 Resource Owner \u7684\u5e33\u865f\u5bc6\u78bc\u4f86\u5b58\u53d6\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*VyrcXzN1D0vpOw9Y5TIR9A.png",alt:"OAuth2 Framework"})),(0,a.kt)("p",null,"\u7c21\u55ae\u4f86\u8aaa\uff0cClient\u82e5\u8981\u5b58\u53d6\u670d\u52d9\u7684\u8a71\uff0c\u9996\u5148\u8981\u5148\u62ff\u5230",(0,a.kt)("strong",{parentName:"p"},"Authorization Grant"),"\uff0c\u518d\u4f7f\u7528Grant\u62ff\u53d6",(0,a.kt)("strong",{parentName:"p"},"Access Token"),"\uff0c\u6700\u5f8c\u518d\u4f7f\u7528Access Token",(0,a.kt)("strong",{parentName:"p"},"\u5b58\u53d6\u670d\u52d9"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*l5TgbUBqMWW0wvPn8-wdJw.png",alt:"Access Work Flow in OAuth2"})),(0,a.kt)("h3",{id:"authorization-grant\u4f9d\u7167\u5b58\u53d6\u7a0b\u5ea6\u5206\u70ba\u56db\u7a2e\u65b9\u5f0f\u5b58\u53d6-protected-resource"},"Authorization Grant\u4f9d\u7167\u5b58\u53d6\u7a0b\u5ea6\u5206\u70ba\u56db\u7a2e\u65b9\u5f0f\u5b58\u53d6 Protected Resource:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Authorization Code")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5c6c\u65bc\u6bd4\u8f03\u5ee3\u6cdb\u88ab\u4f7f\u7528\u7684"),"\uff0cclient \u53d6\u5f97 Authorization Code \u624d\u80fd\u4ee5\u6b64\u63db\u53d6access token\u3002"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*nJVTrVbGWxxjD0ZUulzo5A.png",alt:"Authorization Code Grant"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Implicit")),(0,a.kt)("p",{parentName:"li"},"\u662f\u76f8\u5c0d\u5b89\u5168\u6027\u4f86\u7684\u7a0d\u5fae\u4f4e\u4e00\u9ede\uff0c\u662f\u76f4\u63a5\u53d6\u5f97 access token\u3002\u597d\u8655\u662f\u53ef\u4ee5\u6e1b\u5c11\u5b58\u53d6\u7684 round trip \u52a0\u901f\u8a8d\u8b49\u7684\u904e\u7a0b\u3002"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*cKtqMkJIsoUP_soge2bhiQ.png",alt:"Implicit Grant"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Resource Owner Password Credentials Grant")),(0,a.kt)("p",{parentName:"li"},"\u6307\u7684\u662f\u76f4\u63a5\u900f\u904e password \u76f4\u63a5\u5f9e Authorization Server \u53d6\u5f97 access token\uff0c\u6bd4\u8f03\u9069\u5408\u4f7f\u7528\u5728\u53ef\u4ee5\u4fe1\u4efb\u7684 client\u3002"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*Z2dTiCFcvJBpo_MooR1uAg.png",alt:"Resource Owner Password Credentials Grant"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Client Credentials")),(0,a.kt)("p",{parentName:"li"},"\u5b8c\u5168\u4fe1\u4efb client\uff0c\u76f4\u63a5\u53d6\u5f97 token \u76f4\u63a5\u5b58\u53d6 Protected Resource\u3002"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*etZk9o-phnwO4OhrPIxYEQ.png",alt:"Client Credentials Grant"})),(0,a.kt)("p",null,"\u4ee5 Authorization Server \u89d2\u5ea6\u800c\u8a00\uff0cclient \u4e3b\u8981\u5206\u70ba\u5169\u7a2e confidential \u8207 public\uff0c\u5c31\u5b57\u9762\u4e0a\u610f\u7fa9 confidential \u5c6c\u65bc\u53ef\u4ee5\u76f4\u63a5\u88ab\u4fe1\u4efb\u7684\u3001public \u5c6c\u65bc\u4e0d\u88ab\u4fe1\u4efb\u7684\u5b58\u53d6\u8005\u3002\u4e0d\u88ab\u4fe1\u4efb\u7684 client \u53d6\u5f97 Grant \u7684\u65b9\u5f0f\u5efa\u8b70\u70ba\uff1aAuthorization Grant\u3001Implicit \u7684\u65b9\u5f0f ; \u82e5\u662f\u5c6c\u65bc\u4fe1\u4efb\u7684 Client \u5efa\u8b70\u70ba\uff1aResource Owner Password Credentials Grant\u3001Client Credentials\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*cQXlaXecHX20SgikrFq8WQ.png",alt:"img"})),(0,a.kt)("blockquote",null,(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"public \u6307\u7684\u662f Resource Owner \u662f\u5c6c\u65bc\u4e00\u822c\u4f7f\u7528\u8005\u800c\u975e\u5167\u90e8\u958b\u767c\u8005\uff0c\u56e0\u6b64\u5728\u9032\u884c\u53d6\u5f97\u6191\u8b49\u7684\u904e\u7a0b\u61c9\u8a72\u4f7f\u7528\u8f03\u9ad8\u7684\u5b89\u5168\u6027\u7684\u65b9\u5f0f\u3002"),(0,a.kt)("li",{parentName:"ol"},"confidential \u6307\u7684\u662f Resource Owner \u662f\u5c6c\u65bc\u5167\u90e8\u958b\u767c\u8005\u7684\uff0c\u56e0\u70ba\u670d\u52d9\u9593\u6703\u4e92\u76f8\u8abf\u7528\uff0c\u56e0\u70ba\u662f\u53ef\u4fe1\u4efb\u7684\u670d\u52d9\uff0c\u56e0\u6b64\u7528\u7684\u6191\u8b49\u76f8\u5c0d\u7684\u6bd4\u5916\u90e8\u5f97\u4f86\u7684\u5bec\u9b06\u3002"))),(0,a.kt)("h3",{id:"\u7e3d\u7d50"},"\u7e3d\u7d50"),(0,a.kt)("p",null,"OAuth 2 \u4e26\u4e0d\u662f\u5c08\u5c6c\u7d66\u7b2c\u4e09\u65b9\u7a0b\u5f0f\u5b58\u53d6\u8a8d\u8b49\u6a21\u5f0f\uff0c\u5b83\u672c\u8eab\u662f\u4e00\u7a2e\u6846\u67b6\uff0c\u9069\u7528\u4efb\u4f55\u7684\u8a8d\u8b49\u60c5\u6cc1\u3002\u4e8b\u5be6\u4e0a\u5728 IETF RFC \u6587\u4ef6\u4e2d\uff0c\u91dd\u5c0d\u4e0d\u540c\u7684 client \u6709\u4e0d\u540c\u5f37\u5ea6\u7684\u8a8d\u8b49\u65b9\u6cd5\u3002\u5e02\u9762\u4e0a\u4e3b\u8981\u5ee3\u6cdb\u904b\u7528\u5728\u5b58\u53d6\u7b2c\u4e09\u65b9\u7a0b\u5f0f\u901a\u5e38\u90fd\u4ee5 Authorization Grant \u7684\u65b9\u5f0f\u9032\u884c\u5b58\u53d6\u3002\u7136\u800c OAuth 2 \u5176\u5be6\u4e5f\u53ef\u4ee5\u904b\u7528\u5728\u5167\u90e8 Service \u81ea\u5df1\u5b58\u53d6\u6642\u7684\u5834\u666f\uff01"),(0,a.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6599"},(0,a.kt)("strong",{parentName:"h3"},"\u53c3\u8003\u8cc7\u6599")),(0,a.kt)("p",null,"[","1","]"," Hardt, Dick. RFC 6749: The OAuth 2.0 Authorization Framework. Internet Engineering Task Force ","(","IETF",")"," 10 ","(","2012",")",": 2070\u20131721."))}m.isMDXComponent=!0}}]);