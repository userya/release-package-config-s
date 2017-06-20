webpackJsonp([9,10],{0:function(e,t,r){"use strict";r.d(t,"a",function(){return f});var n=r(4),a=r.n(n),i=r(14),s=r.n(i),o=r(3),l=r.n(o),p=r(15),u=r.n(p),c=r(16),m=r.n(c),d=r(17),f=(r.n(d),function(){function e(t){u()(this,e),this.schema=t}return m()(e,[{key:"count",value:function(e){}},{key:"query",value:function(e,t){var r=this._getQuery(t);return r.set("_method","get"),fetch(e,{method:"POST",credentials:"same-origin",body:r})}},{key:"_isRefKey",value:function(e){if(this.schema.child)for(var t=0;t<this.schema.child.length;t++)if(this.schema.child[t]==e)return!0;return!1}},{key:"_getQuery",value:function(e){var t=new URLSearchParams;for(var r in e)if(this._isRefKey(r)){var n=r+"_";for(var a in e[r])t.append(n+a,e[r][a])}else{var i=e[r];if(i instanceof Array)for(var s=0;s<i.length;s++)t.append(r,i[s]);else t.append(r,i)}return t}},{key:"paged",value:function(e){var t=this._getQuery(e);return t.set("_method","get"),fetch(this.schema.queryUrl||this.schema.url,{method:"POST",credentials:"same-origin",body:t})}},{key:"create",value:function(e,t){var r=new FormData;if(r.append(this.schema.name,l()(e)),t)for(var n in t)r.append(n,t[n]);return fetch(this.schema.createUrl||this.schema.url,{method:"POST",credentials:"same-origin",body:r})}},{key:"update",value:function(e,t){var r=new FormData;if(r.append("_method","put"),r.append(this.schema.name,l()(e)),t){var n=this._getQuery(t),a=!0,i=!1,o=void 0;try{for(var p,u=s()(n.keys());!(a=(p=u.next()).done);a=!0){var c=p.value;r.append(c,n.get(c))}}catch(e){i=!0,o=e}finally{try{!a&&u.return&&u.return()}finally{if(i)throw o}}}return fetch(this.schema.updateUrl||this.schema.url,{method:"POST",credentials:"same-origin",body:r})}},{key:"remove",value:function(e){var t=this._getQuery(e);return t.set("_method","delete"),fetch(this.schema.deleteUrl||this.schema.url,{method:"POST",credentials:"same-origin",body:t})}},{key:"buildValue",value:function(e){return e&&(e=a()({},this.schema.name,e)),e}}]),e}())},10:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2);t.default={props:["activeMenu"],data:function(){return{currentApp:{name:"暂无应用"},appArr:[],spanLeft:5,spanRight:19,appList:[]}},computed:{iconSize:function(){return 5===this.spanLeft?14:24}},mounted:function(){this.ds=n.a.getDataSource("appMgr");var e=this,t=n.a.getAppId();n.a.getPagedByDS(this.ds,function(r){for(var n=[],a=0,i=0,s=r.result.length;i<s;i++){var o=r.result[i];n.push({id:o.id,name:o.name}),t==o.id&&(a=i)}e.appArr=n,n.length>0&&(e.currentApp=n[a])},null,!0)},methods:{changeApp:function(e){var t;this.appArr.every(function(r,n,a){return e!=r.id||(t=r.name,!1)}),this.currentApp={id:e,name:t},location.href=location.pathname+"?appId="+e},toggleClick:function(){5===this.spanLeft?(this.spanLeft=2,this.spanRight=22):(this.spanLeft=5,this.spanRight=19)}}}},11:function(e,t,r){"use strict";r.d(t,"a",function(){return s}),r.d(t,"b",function(){return o});var n,a=r(4),i=r.n(a),s={example:{fieldMeta:[{name:"id",label:"主键",xType:"q-input",showInTable:!1,showInForm:!1},{name:"name",label:"名称",xType:"q-input"},{name:"startTime",label:"生效时间",xType:"q-date"},{name:"appId",label:"所属应用",xType:"q-select",bind:""}]},roleMgr:{table:{bind:"roleMgr",fieldMeta:[{name:"id",label:"主键",xType:"q-input",showInTable:!1,showInForm:!1},{name:"name",label:"名称",xType:"q-input"},{name:"appId",label:"所属应用",xType:"q-select",bind:"appMgr",showInForm:!1}]}},appMgr:{table:{bind:"appMgr",fieldMeta:[{name:"id",label:"主键",xType:"q-input",showInTable:!1,showInForm:!1},{name:"name",label:"名称",xType:"q-input"}]}},appPropertiesMgr:{table:{bind:"appPropertiesMgr",fieldMeta:[{name:"id",label:"主键",xType:"q-input",showInTable:!1,showInForm:!1},{name:"property",label:"属性",xType:"q-input"},{name:"value",label:"值",xType:"q-input"}]}},memberMgr:{table:{bind:"memberMgr",fieldMeta:[{name:"id",label:"主键",xType:"q-input",showInTable:!1,showInForm:!1},{name:"username",label:"用户名",xType:"q-input"},{name:"password",label:"密码",xType:"q-input"},{name:"nickname",label:"昵称",xType:"q-input"}]}},roleGroupMgr:{table:{bind:"roleGroupMgr",fieldMeta:[{name:"id",label:"主键",xType:"q-input",showInTable:!1,showInForm:!1},{name:"name",label:"名称",xType:"q-input"}]}}},o=(n={example:{queryUrl:"/rest/configServer/access/roleMgr",createUrl:"",updateUrl:"",deleteUrl:"",name:"roleEntity",alias:"role"},roleMgr:{url:"/rest/configServer/access/roleMgr",name:"roleEntity",alias:"role",child:["rRelp"]},pagePermissionMgr:{url:"/rest/configServer/access/pagePermissionMgr",name:"pagePermissionEntity",alias:"pagePermission"},roleRelPagePermissionMgr:{url:"/rest/configServer/access/roleRelPagePermissionMgr",name:"roleRelPagePermissionEntity",alias:"roleRelPagePermission"},apiPermissionMgr:{url:"/rest/configServer/access/apiPermissionMgr",name:"apiPermissionEntity",alias:"apiPermission"}},i()(n,"apiPermissionMgr",{url:"/rest/configServer/access/apiPermissionMgr",name:"apiPermissionEntity",alias:"apiPermission"}),i()(n,"roleRelApiPermissionMgr",{url:"/rest/configServer/access/roleRelApiPermissionMgr",name:"roleRelApiPermissionEntity",alias:"roleRelApiPermission"}),i()(n,"appMgr",{url:"/rest/configServer/access/appMgr",name:"appEntity",alias:"app"}),i()(n,"appPropertiesMgr",{url:"/rest/configServer/access/appPropertiesMgr",name:"appPropertiesEntity",alias:"ap"}),i()(n,"memberMgr",{url:"/rest/configServer/access/memberMgr",name:"memberEntity",alias:"member",child:["mRelrg"]}),i()(n,"roleGroupMgr",{url:"/rest/configServer/access/roleGroupMgr",name:"roleGroupEntity",alias:"roleGroup",child:["rgRelr"]}),n)},112:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(75);r.n(n);t.default={data:function(){return{columns1:[{title:"id",key:"id"},{title:"应用名称",key:"name"},{title:"操作",key:"action",width:150,align:"center",render:function(e,t){return e("div",[e("Button",{props:{type:"error",size:"small"},style:{marginRight:"5px"},on:{click:function(){alert(t.index)}}},"删除")])}}],data1:[{id:1,name:"test"},{id:2,name:"test2"}]}}}},12:function(e,t){},124:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(7),a=r(91),i=r.n(a);new n.Vue({el:"#index",components:{App:i.a}})},13:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"layout",class:{"layout-hide-text":e.spanLeft<5}},[r("Row",{attrs:{type:"flex"}},[r("i-col",{staticClass:"layout-menu-left",attrs:{span:e.spanLeft}},[r("Menu",{attrs:{"active-name":e.activeMenu,theme:"dark",width:"auto"}},[r("div",{staticClass:"layout-logo-left"},[r("Dropdown",{staticStyle:{margin:"5px 0px 0px 5px"},attrs:{placement:"bottom-start",trigger:"click"},on:{"on-click":e.changeApp}},[r("a",{staticStyle:{color:"rgb(158, 167, 180)"},attrs:{href:"javascript:void(0)"}},[e._v("\n              应用: "+e._s(e.currentApp.name)+"\n              "),r("Icon",{attrs:{type:"arrow-down-b"}})],1),e._v(" "),r("Dropdown-menu",{slot:"list"},[e._l(e.appArr,function(t){return r("Dropdown-item",{attrs:{name:t.id}},[e._v(e._s(t.name))])}),e._v(" "),r("Dropdown-item",{attrs:{divided:""}},[e._v("应用管理")])],2)],1)],1),e._v(" "),r("Menu-item",{attrs:{name:"appMgr"}},[r("Icon",{attrs:{type:"ios-keypad",size:e.iconSize}}),e._v(" "),r("a",{staticClass:"layout-text",attrs:{href:"appMgr.html"}},[e._v("应用管理")])],1),e._v(" "),r("Menu-item",{attrs:{name:"memberMgr"}},[r("Icon",{attrs:{type:"ios-keypad",size:e.iconSize}}),e._v(" "),r("a",{staticClass:"layout-text",attrs:{href:"memberMgr.html?appId="+e.currentApp.id}},[e._v("用户管理")])],1),e._v(" "),r("Menu-item",{attrs:{name:"roleGroupMgr"}},[r("Icon",{attrs:{type:"ios-keypad",size:e.iconSize}}),e._v(" "),r("a",{staticClass:"layout-text",attrs:{href:"roleGroupMgr.html?appId="+e.currentApp.id}},[e._v("角色组管理")])],1),e._v(" "),r("Menu-item",{attrs:{name:"roleMgr"}},[r("Icon",{attrs:{type:"ios-analytics",size:e.iconSize}}),e._v(" "),r("a",{staticClass:"layout-text",attrs:{href:"roleMgr.html?appId="+e.currentApp.id}},[e._v("角色管理")])],1),e._v(" "),r("Menu-item",{attrs:{name:"appPropertiesMgr"}},[r("Icon",{attrs:{type:"ios-keypad",size:e.iconSize}}),e._v(" "),r("a",{staticClass:"layout-text",attrs:{href:"appPropertiesMgr.html?appId="+e.currentApp.id}},[e._v("应用参配")])],1),e._v(" "),r("Menu-item",{attrs:{name:"pageMgr"}},[r("Icon",{attrs:{type:"ios-analytics",size:e.iconSize}}),e._v(" "),r("a",{staticClass:"layout-text",attrs:{href:"config.html?appId="+e.currentApp.id}},[e._v("页面管理")])],1)],1)],1),e._v(" "),r("i-col",{attrs:{span:e.spanRight}},[r("div",{staticClass:"layout-header"},[r("i-button",{attrs:{type:"text"},on:{click:e.toggleClick}},[r("Icon",{attrs:{type:"navicon",size:"32"}})],1)],1),e._v(" "),r("div",{staticClass:"layout-breadcrumb"},[r("Breadcrumb",[r("Breadcrumb-item",{attrs:{href:"#"}},[e._v("首页")]),e._v(" "),r("Breadcrumb-item",{attrs:{href:"#"}},[e._v("应用中心")]),e._v(" "),r("Breadcrumb-item",[e._v("某应用")])],1)],1),e._v(" "),r("div",{staticClass:"layout-content"},[r("div",{staticClass:"layout-content-main"},[e._t("default")],2)])])],1)],1)},staticRenderFns:[]}},175:function(e,t){},197:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Layout",{attrs:{activeMenu:"appMgr"}},[r("Table",{attrs:{columns:e.columns1,data:e.data1}})],1)},staticRenderFns:[]}},2:function(e,t,r){"use strict";function n(e,t,r){return new m.a(function(n,a){!0!==r&&(e=serviceRootPath+e),$.post(e,t,function(e){n(e)},"json")})}function a(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),r=window.location.search.substr(1).match(t),n="";return null!=r&&(n=r[2]),t=null,r=null,null==n||""==n||"undefined"==n?"":n}var i=r(3),s=r.n(i),o=r(6),l=r.n(o),p=r(5),u=r.n(p),c=r(27),m=r.n(c),d=r(11),f=r(0),h={};h.phoneRegisted=function(){var e=u()(l.a.mark(function e(t){var r,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="register?_cnd=exists&_method=GET&_pageSize=20&_pageNo=1",a={$phone:t},e.next=4,n(r,a);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),h.insertUser=function(){var e=u()(l.a.mark(function e(t){var r,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="register?_method=POST",a={$user:s()(t)},e.next=4,n(r,a);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),h.getPageConfig=function(e){return d.a[e]},h.getDSConfig=function(e){return d.b[e]},h.getDataSource=function(e){return new f.a(this.getDSConfig(e))},h.getPagedByDS=function(){var e=u()(l.a.mark(function e(t,r,n,a){var i,s;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n||(n={}),!a&&this.getAppId&&(n.appId=this.getAppId()),e.next=4,t.paged(n);case 4:return i=e.sent,e.next=7,i.json();case 7:return s=e.sent,s.success&&r&&r(s),e.abrupt("return",s);case 10:case"end":return e.stop()}},e,this)}));return function(t,r,n,a){return e.apply(this,arguments)}}(),h.getAppId=function(){return a("appId")},t.a=h},7:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(18),a=r(19),i=r.n(a),s=r(8),o=(r.n(s),r(9)),l=r.n(o);r.d(t,"Vue",function(){return n.default}),n.default.use(i.a),n.default.component("Layout",l.a)},8:function(e,t){},9:function(e,t,r){r(12);var n=r(1)(r(10),r(13),"data-v-1fe8eacb",null);e.exports=n.exports},91:function(e,t,r){r(175);var n=r(1)(r(112),r(197),null,null);e.exports=n.exports}},[124]);
//# sourceMappingURL=index.b052d1e64097244c0f07.js.map