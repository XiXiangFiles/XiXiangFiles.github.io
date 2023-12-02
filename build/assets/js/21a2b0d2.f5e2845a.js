"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[962],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var r=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),d=l(a),u=s,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||n;return a?r.createElement(m,i(i({ref:t},h),{},{components:a})):r.createElement(m,i({ref:t},h))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,i=new Array(n);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:s,i[1]=o;for(var l=2;l<n;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6581:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var r=a(7462),s=(a(7294),a(3905));const n={title:"Backend System in Microservice Architecture: Where Does data store",description:"At recent years, the Microservice architecture pattern widely applied in new systems. On the other side about old system, it also was transformed into Microservice architecture from monolithic architecture. The biggest reason why \uff2dicroservice is popular is that the development and maintenance costs will significantly decrease in the long term",keywords:["architecture pattern","microservice","event driven"],sidebar_position:3},i="Backend System in Microservice Architecture: Where Does data store?",o={unversionedId:"patterns/2022.06.17.how_microservice_data_store",id:"patterns/2022.06.17.how_microservice_data_store",title:"Backend System in Microservice Architecture: Where Does data store",description:"At recent years, the Microservice architecture pattern widely applied in new systems. On the other side about old system, it also was transformed into Microservice architecture from monolithic architecture. The biggest reason why \uff2dicroservice is popular is that the development and maintenance costs will significantly decrease in the long term",source:"@site/docs/patterns/2022.06.17.how_microservice_data_store.md",sourceDirName:"patterns",slug:"/patterns/2022.06.17.how_microservice_data_store",permalink:"/docs/patterns/2022.06.17.how_microservice_data_store",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Backend System in Microservice Architecture: Where Does data store",description:"At recent years, the Microservice architecture pattern widely applied in new systems. On the other side about old system, it also was transformed into Microservice architecture from monolithic architecture. The biggest reason why \uff2dicroservice is popular is that the development and maintenance costs will significantly decrease in the long term",keywords:["architecture pattern","microservice","event driven"],sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Domain Model: \u5f9e\u7121\u5230\u6709\u898f\u5283\u65b0\u7684\u670d\u52d9",permalink:"/docs/patterns/2021.12.31.cqrs"},next:{title:"Ambassador pattern with Shared Database Pattern",permalink:"/docs/patterns/2022.11.16.ambassador_pattern"}},c={},l=[{value:"<strong>Shared database</strong>",id:"shared-database",level:3},{value:"<strong>Per database in Service</strong>",id:"per-database-in-service",level:3},{value:"How do dispose of the ACID problems if using the <strong>Per database in service? (Using Saga Pattern)</strong>",id:"how-do-dispose-of-the-acid-problems-if-using-the-per-database-in-service-using-saga-pattern",level:4},{value:"<strong>Event Sourcing pattern</strong>",id:"event-sourcing-pattern",level:4},{value:"Conclusion",id:"conclusion",level:3},{value:"Reference",id:"reference",level:3}],h={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"backend-system-in-microservice-architecture-where-does-data-store"},"Backend System in Microservice Architecture: Where Does data store?"),(0,s.kt)("p",null,"At recent years, the Microservice architecture pattern widely applied in new systems. On the other side about old system, it also was transformed into Microservice architecture from monolithic architecture. The biggest reason why \uff2dicroservice is popular is that the development and maintenance costs will significantly decrease in the long term."," ",(0,s.kt)("br",null)),(0,s.kt)("p",null,"[1]"," Microservice splits the monolithic system into many services by their domain and running on the container. That not only modularizes the program but also the service can retain their data that is the most different from SOA(Service-Oriented Architecture) Architecture."," "),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"SOA provides an interface for reusable components, as knowns as a modularized reusable module")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(1050).Z,width:"637",height:"395"})),(0,s.kt)("p",null,"So the data is the key difference from the SOA concept. However, there are two styles of how data do store. ",(0,s.kt)("strong",{parentName:"p"},"(1) Shared database. (2) Per database in Service.")),(0,s.kt)("h3",{id:"shared-database"},(0,s.kt)("strong",{parentName:"h3"},"Shared database")),(0,s.kt)("p",null,"[","2]Every Server shared the same database which is the meaning of a Shared Database. This style is a simple way like the SOA concept. But it has a big problem with single failure and does not fully have the advantage of Microservice."),(0,s.kt)("p",null,"This pattern is not only a single failure but also has a big problem with cloud deployment. When the service is stateful instead of stateless that implies a problem with how data do consistence."," "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"So that the shared database is better to use in all accessed services are stateless.")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(4999).Z,width:"646",height:"664"})),(0,s.kt)("h3",{id:"per-database-in-service"},(0,s.kt)("strong",{parentName:"h3"},"Per database in Service")),(0,s.kt)("p",null,"[","2] ",(0,s.kt)("strong",{parentName:"p"},"Per database in service")," that means the service is stateful because of service owns their data. This style is more complicated than the shared database. It should dispose of the ACID issue, but the biggest advantage can avoid a single failure problem."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(8117).Z,width:"598",height:"694"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"[4]","ACID:",(0,s.kt)("br",null)),(0,s.kt)("ol",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ol"},'Atomicity: Atomicity guarantees that each transaction is treated as a single "unit", which either succeeds completely or fails completely.'),(0,s.kt)("li",{parentName:"ol"},"Consistency: Consistency ensures that a transaction can only bring the database from one valid state to another, maintaining database invariants."),(0,s.kt)("li",{parentName:"ol"},"Isolation: Isolation ensures that concurrent execution of transactions leaves the database in the same state that would have been obtained if the transactions were executed sequentially."),(0,s.kt)("li",{parentName:"ol"},"Durability: Durability guarantees that once a transaction has been committed, it will remain committed even in the case of a system failure (e.g., power outage or crash)."))),(0,s.kt)("h4",{id:"how-do-dispose-of-the-acid-problems-if-using-the-per-database-in-service-using-saga-pattern"},"How do dispose of the ACID problems if using the ",(0,s.kt)("strong",{parentName:"h4"},"Per database in service? (Using Saga Pattern)")),(0,s.kt)("p",null,"[2]","The Saga Patten is a solution. The stateful service communicates with each other through the message queue that calls the broker. The broker should choose the mature queue like Rabbitmq, Kafuka... They can ensure the data will lose when the service does not pull off."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Choreography-based saga")),(0,s.kt)("p",null,"Choreography-base means a function will split different services. All services communicate with each other."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(4832).Z,width:"928",height:"478"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Orchestration-based saga")),(0,s.kt)("p",null,"Orchestration-based saga means split service by domain. A function stage will do all sequences stage completely and then pop out the result to the broker."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(2520).Z,width:"940",height:"562"})),(0,s.kt)("p",null,"But the Saga still has a problem do not consider that its service has a chance to crash and recover. It will miss a command or action from the crash situation. So the ",(0,s.kt)("strong",{parentName:"p"},"Event Sourcing pattern")," has another pattern to figure out."),(0,s.kt)("h4",{id:"event-sourcing-pattern"},(0,s.kt)("strong",{parentName:"h4"},"Event Sourcing pattern")),(0,s.kt)("p",null,"[2]","Every query in event sourcing is an event. All Events will be backed up by the event store to figure out the service crash problems that some events do not execute. Event-Store is the backup service that is stateful and has a database in self-service.",(0,s.kt)("br",null)),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(9848).Z,width:"1252",height:"772"})),(0,s.kt)("p",null,"The dynamic diagram of Event Souring Pattern (below figure). There are two stages in the sequence diagram. First, All Consumers restart should check their task is completely done. Second, consumers listen to new events and do the new task."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(5981).Z,width:"850",height:"664"})),(0,s.kt)("h3",{id:"conclusion"},"Conclusion"),(0,s.kt)("p",null,"In Microservice architecture, there are two situations. One is a stateless service that can use the shared database pattern. The second is a stateless service that should use Saga + Event Sourcing patterns to handle the ACID issues."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The per service database and shared database can coexist.")),(0,s.kt)("h3",{id:"reference"},"Reference"),(0,s.kt)("p",null,"[","1] Bruce, Morgan, and Paulo A. Pereira. ",(0,s.kt)("em",{parentName:"p"},"Microservices in action"),". Simon and Schuster, 2018.\\\n","[","2] ",(0,s.kt)("a",{parentName:"p",href:"https://microservices.io/patterns/microservices.html"},"https://microservices.io/patterns/microservices.html"),"\\\n","[","3] ",(0,s.kt)("a",{parentName:"p",href:"https://www.ibm.com/cloud/learn/soa"},"https://www.ibm.com/cloud/learn/soa"),"\\\n","[","4] ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ACID"},"https://en.wikipedia.org/wiki/ACID"),"\\"))}p.isMDXComponent=!0},1050:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image (22) (1)-89ac82da3c7ce1db40b256ed63459847.png"},5981:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image (22) (2)-c0648143499bc72030bb94bbed749c2e.png"},2520:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image (23)-ab1beccd29fd289a54abb7d5b0955d4d.png"},8117:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image (25)-dad02c87399c76cc0aac8f85432fbb56.png"},4999:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image (26) (1)-97b267ffe44218e6d788917b5d5da62d.png"},4832:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image (27) (1)-78a2923af11de26bb9a99d994e594c2f.png"},9848:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/image (27)-88bffd14e5deeede2f6fedc8284fe946.png"}}]);