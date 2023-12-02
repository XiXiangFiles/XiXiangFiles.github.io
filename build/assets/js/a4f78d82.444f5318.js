"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[794],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=c(r),u=o,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(h,l(l({ref:t},i),{},{components:r})):n.createElement(h,l({ref:t},i))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3723:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"\u4f7f\u7528 TorchServe \u90e8\u7f72 Model",description:"TorchServe \u662f PyTorch \u63d0\u4f9b\u7d66\u958b\u767c\u8005\u90e8\u7f72 models \u7684\u5de5\u5177\uff08\u5be6\u9a57\u968e\u6bb5\uff09\u3002\u4e5f\u5c31\u662f\u8aaa\u958b\u767c\u8005\u4e0d\u7528\u518d\u5beb HTTP \u670d\u52d9\u53bb\u90e8\u7f72\uff0c\u76f4\u63a5\u4f7f\u7528 TorchServe \u5de5\u5177\u5c31\u53ef\u4ee5\u4e86\uff01",keywords:["TorchServer","PyTorch"],sidebar_position:1},l="\u4f7f\u7528 TorchServe \u90e8\u7f72 Model",s={unversionedId:"torch/2020.11.04.torch_server_tutorial",id:"torch/2020.11.04.torch_server_tutorial",title:"\u4f7f\u7528 TorchServe \u90e8\u7f72 Model",description:"TorchServe \u662f PyTorch \u63d0\u4f9b\u7d66\u958b\u767c\u8005\u90e8\u7f72 models \u7684\u5de5\u5177\uff08\u5be6\u9a57\u968e\u6bb5\uff09\u3002\u4e5f\u5c31\u662f\u8aaa\u958b\u767c\u8005\u4e0d\u7528\u518d\u5beb HTTP \u670d\u52d9\u53bb\u90e8\u7f72\uff0c\u76f4\u63a5\u4f7f\u7528 TorchServe \u5de5\u5177\u5c31\u53ef\u4ee5\u4e86\uff01",source:"@site/docs/torch/2020.11.04.torch_server_tutorial.md",sourceDirName:"torch",slug:"/torch/2020.11.04.torch_server_tutorial",permalink:"/docs/torch/2020.11.04.torch_server_tutorial",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u4f7f\u7528 TorchServe \u90e8\u7f72 Model",description:"TorchServe \u662f PyTorch \u63d0\u4f9b\u7d66\u958b\u767c\u8005\u90e8\u7f72 models \u7684\u5de5\u5177\uff08\u5be6\u9a57\u968e\u6bb5\uff09\u3002\u4e5f\u5c31\u662f\u8aaa\u958b\u767c\u8005\u4e0d\u7528\u518d\u5beb HTTP \u670d\u52d9\u53bb\u90e8\u7f72\uff0c\u76f4\u63a5\u4f7f\u7528 TorchServe \u5de5\u5177\u5c31\u53ef\u4ee5\u4e86\uff01",keywords:["TorchServer","PyTorch"],sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"HTTP Token \u4f7f\u7528\u65b9\u5f0f: Basic Token v.s Bearer Token",permalink:"/docs/security/2021.05.01.different_from_bearer_and_basic_token"},next:{title:"How do AppRTC work in WebRTC mechanism?",permalink:"/docs/web_rtc/2020.11.19.apprtc_tutorial"}},p={},c=[{value:"<strong>Debug \u7d93\u9a57\u8ac7</strong>",id:"debug-\u7d93\u9a57\u8ac7",level:4}],i={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4f7f\u7528-torchserve-\u90e8\u7f72-model"},"\u4f7f\u7528 TorchServe \u90e8\u7f72 Model"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7cfb\u7d71\u67b6\u69cb")," TorchServe \u4e3b\u8981\u63d0\u4f9b\u5169\u500b API\uff1a",(0,o.kt)("strong",{parentName:"p"},"Management API \u662f\u7528\u4f86\u8a2d\u5b9a TorchServe \u670d\u52d9"),"\uff0c\u5982\u8a3b\u518a\u65b0\u7684 Model \u670d\u52d9\u3001\u5378\u8f09 Model \u670d\u52d9\uff0c\u76e3\u770b TorchServe \u7684\u72c0\u614b\uff1b",(0,o.kt)("strong",{parentName:"p"},"Inference API \u7528\u4f86\u53d6\u5f97\u8fa8\u8b58\u7d50\u679c"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*w2xTsxjj1aimOsVIVZPw0w.png",alt:"\u7cfb\u7d71\u67b6\u69cb"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Frontend\uff1a\u6307\u7684\u662f request batching + ",(0,o.kt)("strong",{parentName:"li"},"Inference API Handler\u3002"),"request batching \u662f\u7531 ",(0,o.kt)("strong",{parentName:"li"},"Management API")," \u8a2d\u5b9a\uff1b",(0,o.kt)("strong",{parentName:"li"},"Inference API Handler")," \u5247\u662f\u7531\u958b\u767c\u8005\u81ea\u884c\u64b0\u5beb"),(0,o.kt)("li",{parentName:"ul"},"Worker Process\uff1a\u6307\u7684\u662f\u4e00\u7d44\u8fa8\u8b58\u7a0b\u5f0f\u7684\u904b\u884c","(","trained model + model handler",")","\uff0c\u6982\u5ff5\u50cf\u662f Thread\uff0c\u53ef\u7531 ",(0,o.kt)("strong",{parentName:"li"},"Management API \u9032\u884c\u8a2d\u5b9a\u904b\u884c\u7684\u6578\u91cf"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"Model Store\uff1a\u900f\u904e TorchServe \u5de5\u5177\u58d3\u7e2e\u5f8c\u7684 model package\u3002"),(0,o.kt)("li",{parentName:"ul"},"Backend\uff1a\u6307\u7684\u662f\u7ba1\u7406 Worker Process \u7684\u7a0b\u5f0f\uff0c\u7531 ",(0,o.kt)("strong",{parentName:"li"},"Management API")," \u8b93\u4f7f\u7528\u8005\u7ba1\u7406\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u6307\u5357")," \u4f7f\u7528 TorchServe \u9700\u8981\u6e96\u5099\u4e09\u500b\u6a94\u6848\uff1aTrained Model\u3001Inference handler \u3001model Handler\uff0c\u5c07\u9019\u4e09\u500b\u6771\u897f\u4f7f\u7528 TorchServe Archiver \u5c07\u5176\u58d3\u7e2e\u6210 .mar \u6a94\u6848\u3002\u6700\u5f8c\u5c07 .mar \u6a94\u653e\u5165 TorchServe \u88e1\uff0c\u8a3b\u518a\u5f8c\u5c31\u4f48\u7f72\uff01"),(0,o.kt)("p",null,"TorchServe \u9810\u8a2d 8080 port \u7528\u65bc inference ; 8081 port \u7528\u65bc\u7ba1\u7406 TorchServe \u5982\u4e0b\u5716\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*HyvdEPTr16G-FCxPOlP7qQ.png",alt:"TorchServe"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/pytorch/serve"},(0,o.kt)("strong",{parentName:"a"},"\u8209\u4f8b\uff1a\u4ee5\u5b98\u65b9 densenet161 Example \u70ba\u4f8b"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u958b\u59cb\u4e4b\u524d\u5fc5\u9808\u5148\u5b89\u88dd ",(0,o.kt)("strong",{parentName:"li"},"TorchServe"),"\u3001",(0,o.kt)("strong",{parentName:"li"},"torch-model-archiver\uff0c"),"\u4e00\u500b\u662f\u7528\u4f86\u8dd1 TorchServe \u670d\u52d9\u7684\uff0c\u53e6\u4e00\u500b\u662f\u7528\u4f86\u58d3\u7e2e Trained Model\u3001Inference handler \u3001model Handler \u7684\u5957\u4ef6\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"li"},"torch-model-archiver")," \u9032\u884c\u58d3\u7e2e\uff0c\u6703\u5f97\u5230",(0,o.kt)("a",{parentName:"li",href:"http://127.0.0.1:8080/predictions/densenet161"},"densenet161"),".mar\u6a94\u6848\uff0c"),(0,o.kt)("li",{parentName:"ol"},"\u6700\u5f8c\u5c07\u8a72\u6a94\u6848\u8a3b\u518a\u9032\u53bb TorchServe \u5c31\u53ef\u4ee5\u4f7f\u7528\u4e86\u3002")),(0,o.kt)("p",null,"\u6307\u4ee4\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'pip install torchserve torch-model-archiver       # \u5b89\u88dd\u5fc5\u8981\u5957\u4ef6\ngit clone https://github.com/pytorch/serve.git    # clone example\ncd serve/examples/image_classifier/               # \u9032\u5165image_classifier example\ncp index_to_name.json densenet_161/               # \ncd densenet_161/\n # \u82e5\u7121\u9810\u8a2d\u8f38\u51fa\u8cc7\u6599\u593e\uff0c\u5247\u5275\u5efa\u4e00\u500b\nif [ ! -d "model-store" ]; then                   \n    echo "creates new folder: " $export_path\n    mkdir $export_path\nfi\n#\u4e0b\u8f09trained model\nwget https://download.pytorch.org/models/densenet161-8d451a50.pth\n#\u58d3\u7e2edensenet161\u7bc4\u4f8b -> densenet161.mar\ntorch-model-archiver --model-name densenet161 --version 1.0 --model-file model.py \\\n                    --serialized-file densenet161-8d451a50.pth --handler image_classifier \\\n                    --extra-files index_to_name.json --export-path="model-store" \ntorchserve --start --model-store model-store/ --models densenet161.mar  # \u8a3b\u518adensenet1611\u4e26\u555f\u52d5torchserve\n')),(0,o.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 curl \u9032\u884c\u9a57\u8b49\u662f\u5426\u6293\u5230 ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080/predictions/densenet161"},"densenet161")," model\uff0c\u4e26\u8a66\u8457\u50b3\u4e00\u5f35\u5716\u770b\u770b\u662f\u5426\u6709\u6210\u529f\u904b\u884c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"curl 127.0.0.1:8081/models\ncurl http://127.0.0.1:8080/predictions/densenet161 -T kitten.jpg\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*eRXtMN-zFSLrcUew9JZe_g.png",alt:"img"})),(0,o.kt)("h4",{id:"debug-\u7d93\u9a57\u8ac7"},(0,o.kt)("strong",{parentName:"h4"},"Debug \u7d93\u9a57\u8ac7")),(0,o.kt)("p",null,"TorchServe \u662f\u4e00\u500b\u975e\u5e38\u65b0\u7684\u90e8\u7f72\u5de5\u5177\uff0cdebug \u4e0d\u77e5\u9053\u5982\u4f55 debug\uff0c\u7528\u8d77\u4f86\u771f\u7684\u5f88\u5d29\u6f70\u3002\u5176\u5be6\u4e00\u958b\u59cb\u58d3\u7e2e\u7684 .mar \u6a94\uff0cTorchServe \u6293\u5230\u4e4b\u5f8c\u6703\u5c07\u5176\u89e3\u58d3\u7e2e\u81f3 /tmp \u4e2d\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*uubZ3uHv4SRGqEXQ7WtFKw.png",alt:"img"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*9Qy_s7HLw91_yo0SsE2A0Q.png",alt:"img"})),(0,o.kt)("p",null,"\u56e0\u6b64\u7576\u60f3\u8981\u9032\u884c debug \u7684\u6642\u5019\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u8981\u5207\u5230 /tmp \u8cc7\u6599\u593e\u4e2d\u4f7f\u7528 python3 \u6307\u4ee4\u57f7\u884c"),"\uff0c\u5982\u679c\u6c92\u554f\u984c\uff0c\u7406\u8ad6\u4e0a TorchServe \u5c31\u80fd\u5920\u6210\u529f\u904b\u4f5c\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5e38\u7528Management API \u4ecb\u7d39")," \u5728\u9019\u908a\u5206\u4eab\u4e00\u4e9b\u904e\u53bb\u90e8\u7f72TorchServe\u5e38\u7528\u7528\u7684\u4e00\u4e9bAPI\uff0c\u9996\u5148\u5728\u8a3b\u518a\u7684\u6642\u5019\u6703\u4e0d\u77e5\u9053\u76ee\u524d\u5230\u5e95\u6709\u6c92\u6709\u6293\u5230Trained model?\u9019\u6642\u5019\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("strong",{parentName:"p"},"List models API")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'curl "http://localhost:8081/models"\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*i-I6Fn25WH80ae5exdK5mg.png",alt:null})),(0,o.kt)("p",null,"\u6b64\u5916\u5c31\u662f\u8003\u616e\u5230\u6548\u80fd\u9762\u7684\u8a71\uff0c\u6216\u8a31\u6709\u9700\u8981\u4fee\u6539\u67d0\u4e00\u500bmodel\u7684Worker Process\u6578\u91cf\u9019\u7a2e\u9700\u6c42\uff0c\u4e5f\u53ef\u5229\u7528PUT\u5c0d\u67d0\u4e00\u500bmodel\u4fee\u6539Worker Process\u7684\u6578\u91cf\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'curl -v -X PUT "http://localhost:8081/models/<modelname>?min_worker=3"\n')),(0,o.kt)("p",null,"\u5c31\u5df2feature","_","extractor\u9019\u500bmodel\u70ba\u4f8b\uff1a\u9996\u5148\u5148\u770b\u4e00\u4e0bmodel\u7684\u8cc7\u8a0a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*SaA7LEMJ-guXfwoADZwedg.png",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'# \u9032\u884c\u4fee\u6539\u4e4b\u5f8c\ncurl -v -X PUT \u201chttp://localhost:8081/models/feature_extractor?min_worker=3"\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*VFxqC8ig2eHIMqA_M6VyYA.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Inference handler\u64b0\u5beb\u7d93\u9a57\u8ac7"),"\uff1a inference handler\u6587\u4ef6\u76f8\u7576\u7684\u7c21\u6f54\uff0c\u5728\u64b0\u5bebhandler\u7684\u6642\u5019\u53ef\u53c3\u8003\u4e0b\u9762\u7a0b\u5f0f\u78bc\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u5927\u81f4\u4e0a\u6bcf\u500b\u5340\u584a\u7684function\u8981\u675c\u64b0\u4ec0\u9ebc\u90fd\u8a18\u8f09\u8a3b\u89e3\u4e0a"),"\u3002\u6b64\u5916\u64b0\u5beb\u5b8c\uff0c\u8a3b\u518a\u9032\u53bbTorchServe\u5f8c",(0,o.kt)("strong",{parentName:"p"},"\u8981\u80fd\u5920\u5728/tmp\u4e2d\u627e\u5230\uff0c\u540c\u6642\u662f\u53ef\u76f4\u63a5\u57f7\u884c\u7684\u72c0\u614b"),"\uff0c\u82e5\u4e0d\u662f\u5247\u9700\u8981\u7e7c\u7e8cdebug\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debug\u6709\u96f7\u8acb\u5c0f\u5fc3"),"\uff1a 1. \u8f38\u51fa\u53ea\u5403JSON\u683c\u5f0f 2. batch size \u5927\u5c0f","(","\u5982\u679cbatch size \u70ba1\uff0cJSON List\u6578\u91cf\u53ea\u80fd\u662f1",")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'class ModelHandler(BaseHandler):\n\n    def __init__(self):\n        self._context = None\n        self.initialized = False\n\n    # \u7528\u65bcload trained model \u7684\u5730\u65b9\uff0c\u4ee5\u53ca\u5176\u4ed6\u8a2d\u5b9a\u6a94\n    def initialize(self, context):\n        self._context = context\n        self.initialized = True\n        #  load the model, refer \'custom handler class\' above for details\n\n    # \u7528\u65bcpredictions\u7684\u6642\u5019\uff0c\u63a5\u6536http post request\u7684function: \u9810\u8a2d\u63a5\u6536key\u70badata\u7684\u8cc7\u6599\n    def preprocess(self, data):\n        # Take the input data and make it inference ready\n        preprocessed_data = data[0].get("data")\n        if preprocessed_data is None:\n            preprocessed_data = data[0].get("body")\n\n        return preprocessed_data\n\n    # \u7528\u4f86\u9032\u884c\u904b\u7b97\u7684function\uff0c\u6700\u5f8c\u7684\u7d50\u679c\u6703\u4ea4\u7531postprocess()\u5f8c\u8655\u7406\n    def inference(self, model_input):\n\n        # Do some inference call to engine here and return output\n        model_output = self.model.forward(model_input)\n        return model_output\n\n    # \u6307\u7684\u662f\u767c\u9001post\uff1ainference()\u4e4b\u5f8c\u7684\u7d50\u679c\n    def postprocess(self, inference_output):\uff14\n        postprocess_output = inference_output\n        return postprocess_output\uff14\uff14\n\n    def handle(self, data, context):\n\n        model_input = self.preprocess(data)\n        model_output = self.inference(model_input)\n        return self.postprocess(model_output)\n')),(0,o.kt)("blockquote",null,(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u96d6\u7136\u9810\u8a2d\u8f38\u51fa\u662fJSON\uff0c\u6253request\u9032\u53bb\u7684\u8cc7\u6599\u683c\u5f0f\u6c92\u6709\u898f\u5b9a\u5594\uff0c\u53ef\u5229\u7528\u50cf\u662fprotocol buffers\u9019\u7a2e\u6280\u8853\u9032\u884c\u50b3\u905e\u662f\u6c92\u6709\u554f\u984c\u7684\uff01")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"batchsize \u4fee\u6539\u65b9\u6cd5:"),(0,o.kt)("p",{parentName:"li"},'curl -v -X PUT "',(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"http://localhost:8081/models/"},"http://localhost:8081/models/")),"?batch","_",'size="_')))))}d.isMDXComponent=!0}}]);