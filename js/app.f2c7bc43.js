(function(t){function e(e){for(var n,i,r=e[0],c=e[1],u=e[2],d=0,l=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&l.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(l.length)l.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var r=a[i];0!==s[r]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},i={app:0},s={app:0},o=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c77f934d"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"af855534"}[t]+".css",s=c.p+n,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var u=o[r],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===s))return e()}var l=document.getElementsByTagName("style");for(r=0;r<l.length;r++){u=l[r],d=u.getAttribute("data-href");if(d===n||d===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete i[t],f.parentNode.removeChild(f),a(o)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){i[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=o);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=r(t);var l=new Error;u=function(e){d.onerror=d.onload=null,clearTimeout(f);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,a[1](l)}s[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/dist/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=d;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1849:function(t,e,a){},"3aa3":function(t,e){t.exports="data:image/png;base64,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"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],o=a("2877"),r={},c=Object(o["a"])(r,i,s,!1,null,null,null),u=c.exports,d=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"XC_top"},[a("div",[a("input",{staticClass:"Xsearch iconfont",attrs:{type:"text",placeholder:t.icon}})]),t._m(0),t._m(1)]),t._m(2)])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Tourism_way"},[a("div",{staticClass:"way"},[a("div",{staticClass:"iconfont icon-jiudian"}),a("span",[t._v("酒店")])]),a("div",{staticClass:"way"},[a("div",{staticClass:"iconfont icon-jipiao"}),a("span",[t._v("飞机")])]),a("div",{staticClass:"way"},[a("div",{staticClass:"iconfont icon-huochepiao"}),a("span",[t._v("火车票")])]),a("div",{staticClass:"way"},[a("div",{staticClass:"iconfont icon-homeuizqlvyou"}),a("span",[t._v("旅游")])]),a("div",{staticClass:"way"},[a("div",{staticClass:"iconfont icon-gonglve"}),a("span",[t._v("攻略/景点")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Tourism_way_other"},[a("span",{staticClass:"iconfont icon-minsu"},[t._v("民宿/客栈")]),a("span",{staticClass:"iconfont icon-jiesongji"},[t._v("接送机/包车")]),a("span",{staticClass:"iconfont icon-qichepiao"},[t._v("汽车/船票")]),a("span",{staticClass:"iconfont icon-menpiao"},[t._v("门票/活动")]),a("span",{staticClass:"iconfont icon-meishi"},[t._v("美食")]),a("span",{staticClass:"iconfont icon-baokuan-"},[t._v("特价/爆款")]),a("span",{staticClass:"iconfont icon-listfeiji"},[t._v("航班助手")]),a("span",{staticClass:"iconfont icon-zuche"},[t._v("租车")]),a("span",{staticClass:"iconfont icon-homeuizqlvyou"},[t._v("周边游")]),a("span",{staticClass:"iconfont icon-gouwu_o"},[t._v("购物/免税")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"XC_bottom"},[n("div",{staticClass:"Xadvertising"},[n("div",{staticClass:"leftadvertising"},[n("div",{staticStyle:{display:"flex"}},[n("img",{staticStyle:{height:"1.5rem",width:"5rem",flex:"1",margin:"0.5em 0 0 0.5em"},attrs:{src:a("7aec"),alt:""}}),n("span",{staticStyle:{flex:"1","font-size":"0.2rem",color:"#ff4607",background:"#ffebe3",height:"1rem",margin:"3em 0.5em 0 0"}},[t._v("特价好货直播中")])]),n("div",{staticClass:"shopimg"},[n("span",{staticStyle:{position:"absolute",top:"0",left:"0",background:"#595959","border-radius":"0.5em 0 0.5em 0",color:"#ffffff","font-size":"1em"}},[t._v("好物")]),n("img",{staticStyle:{width:"11.5em"},attrs:{src:a("e001"),alt:""}}),n("span",{},[t._v("牙膏")])])]),n("div",{staticClass:"rightadvertising"},[n("div",{staticStyle:{display:"flex"}},[n("img",{staticStyle:{height:"1.5rem",width:"5rem",flex:"1",margin:"0.5em 0 0 0.5em"},attrs:{src:a("3aa3"),alt:""}}),n("span",{staticStyle:{flex:"1",color:"#ae6e15","font-size":"0.2rem",background:"#fdefd2",height:"1rem",margin:"3em 0.5em 0 0",width:"1em"}},[t._v("权威排行榜")])]),n("div",{staticClass:"advertisingimg"},[n("img",{staticStyle:{margin:"0 0 0 0.5em"},attrs:{src:a("ba07"),alt:""}}),n("img",{staticStyle:{margin:"0 0.5em 0 0"},attrs:{src:a("e4cb"),alt:""}})])])]),n("div",{staticClass:"XC_content"},[n("div",[n("img",{staticStyle:{width:"100%",height:"6em","border-radius":"0.5rem"},attrs:{src:a("f6cd"),alt:""}})])]),n("div",{staticClass:"Language_phone_download"},[n("div",[n("button",{staticClass:"iconfont icon-dianhua phone"},[t._v("电话预订")])]),n("div",[n("button",{staticClass:"iconfont icon-xiazai download"},[t._v("下载携程")])]),n("div",[n("button",{staticClass:"iconfont icon-duoyuyan Language"},[t._v("Language")])])]),n("div",[n("div",[n("a",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{href:"javascript:"}},[t._v("网站地图")])]),n("div",[n("a",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{href:"javascript:"}},[t._v("电脑版")])])]),n("div",[n("span",[t._v("2021携程旅行 泸ICP备08023580号")])]),n("div",[n("div",{staticClass:"Xoptions"},[n("div",[n("div",{staticClass:"iconfont icon-shouye"}),n("span",[t._v("首页")])]),n("div",[n("div",{staticClass:"iconfont icon-shequ"}),n("span",[t._v("社区")])]),n("div",[n("div",{staticClass:"iconfont icon-xiaoxizhongxin"}),n("span",[t._v("消息")])]),n("div",[n("div",{staticClass:"iconfont icon-31wode"}),n("span",[t._v("我的")])])])])])}],p=(a("a75e"),{name:"Home",data:function(){return{icon:""}}}),v=p,b=(a("d592"),Object(o["a"])(v,l,f,!1,null,"5e3967e9",null)),m=b.exports;n["a"].use(d["a"]);var g=[{path:"/",name:"Home",component:m},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/vueNextTick",name:"vueNextTick",component:function(){return a.e("about").then(a.bind(null,"5b4e"))}},{path:"/mocktest",name:"mocktest",component:function(){return a.e("about").then(a.bind(null,"e470"))}}],h=new d["a"]({mode:"history",base:"/dist/",routes:g}),A=h,y=a("bc3a"),C=a.n(y),S=a("2f62");n["a"].use(S["a"]);var k=new S["a"].Store({state:{lists:[]},mutations:{mutationList:function(t,e){t.lists=e},adddata:function(t,e){t.lists.push(e)}},actions:{actionList:function(t,e){C.a.post("https://www.fastmock.site/mock/871210bf75e9c54707d03a09a9c4c117/testUserName/user/userList",{}).then((function(e){console.log("action",e.data.data),t.commit("mutationList",e.data.data)}))}},modules:{vipuser:{namespaced:!0,state:{userdata:[]},mutations:{getuser:function(t,e){t.userdata.push(e)}},actions:{asyncgetuser:function(t){var e=t.commit;C.a.post("https://www.fastmock.site/mock/871210bf75e9c54707d03a09a9c4c117/testUserName/user/member",{}).then((function(t){console.log("action2:",t.data.data),e("getuser",t.data.data)}))}},getters:{}}},getters:{getList:function(t){console.log(t.list)}}});n["a"].config.productionTip=!1,new n["a"]({router:A,store:k,render:function(t){return t(u)}}).$mount("#app")},"7aec":function(t,e){t.exports="data:image/png;base64,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"},a75e:function(t,e,a){},ba07:function(t,e,a){t.exports=a.p+"img/01033120008r4sn4pACB9_R_238_268.2093bd5c.jpg"},d592:function(t,e,a){"use strict";a("1849")},e001:function(t,e,a){t.exports=a.p+"img/0zd44120008xr6e0p47D1_D_280_280_R5.f24d3c01.jpg"},e4cb:function(t,e,a){t.exports=a.p+"img/0106a1200092srqn626FE_R_238_268.ebb80968.png"},f6cd:function(t,e,a){t.exports=a.p+"img/0zg3b1200092vts6p023D.b5c64698.jpg"}});
//# sourceMappingURL=app.f2c7bc43.js.map