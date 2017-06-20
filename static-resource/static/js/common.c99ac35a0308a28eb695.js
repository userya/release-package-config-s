webpackJsonp([10],[function(e,t,r){"use strict";r.d(t,"a",function(){return h});var a=r(4),n=r.n(a),i=r(14),s=r.n(i),o=r(3),p=r.n(o),l=r(15),u=r.n(l),c=r(16),m=r.n(c),d=r(17),h=(r.n(d),function(){function e(t){u()(this,e),this.schema=t}return m()(e,[{key:"count",value:function(e){}},{key:"query",value:function(e,t){var r=this._getQuery(t);return r.set("_method","get"),fetch(e,{method:"POST",credentials:"same-origin",body:r})}},{key:"_isRefKey",value:function(e){if(this.schema.child)for(var t=0;t<this.schema.child.length;t++)if(this.schema.child[t]==e)return!0;return!1}},{key:"_getQuery",value:function(e){var t=new URLSearchParams;for(var r in e)if(this._isRefKey(r)){var a=r+"_";for(var n in e[r])t.append(a+n,e[r][n])}else{var i=e[r];if(i instanceof Array)for(var s=0;s<i.length;s++)t.append(r,i[s]);else t.append(r,i)}return t}},{key:"paged",value:function(e){var t=this._getQuery(e);return t.set("_method","get"),fetch(this.schema.queryUrl||this.schema.url,{method:"POST",credentials:"same-origin",body:t})}},{key:"create",value:function(e,t){var r=new FormData;if(r.append(this.schema.name,p()(e)),t)for(var a in t)r.append(a,t[a]);return fetch(this.schema.createUrl||this.schema.url,{method:"POST",credentials:"same-origin",body:r})}},{key:"update",value:function(e,t){var r=new FormData;if(r.append("_method","put"),r.append(this.schema.name,p()(e)),t){var a=this._getQuery(t),n=!0,i=!1,o=void 0;try{for(var l,u=s()(a.keys());!(n=(l=u.next()).done);n=!0){var c=l.value;r.append(c,a.get(c))}}catch(e){i=!0,o=e}finally{try{!n&&u.return&&u.return()}finally{if(i)throw o}}}return fetch(this.schema.updateUrl||this.schema.url,{method:"POST",credentials:"same-origin",body:r})}},{key:"remove",value:function(e){var t=this._getQuery(e);return t.set("_method","delete"),fetch(this.schema.deleteUrl||this.schema.url,{method:"POST",credentials:"same-origin",body:t})}},{key:"buildValue",value:function(e){return e&&(e=n()({},this.schema.name,e)),e}}]),e}())},,function(e,t,r){"use strict";function a(e,t,r){return new m.a(function(a,n){!0!==r&&(e=serviceRootPath+e),$.post(e,t,function(e){a(e)},"json")})}function n(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),r=window.location.search.substr(1).match(t),a="";return null!=r&&(a=r[2]),t=null,r=null,null==a||""==a||"undefined"==a?"":a}var i=r(3),s=r.n(i),o=r(6),p=r.n(o),l=r(5),u=r.n(l),c=r(27),m=r.n(c),d=r(11),h=r(0),f={};f.phoneRegisted=function(){var e=u()(p.a.mark(function e(t){var r,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="register?_cnd=exists&_method=GET&_pageSize=20&_pageNo=1",n={$phone:t},e.next=4,a(r,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),f.insertUser=function(){var e=u()(p.a.mark(function e(t){var r,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="register?_method=POST",n={$user:s()(t)},e.next=4,a(r,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),f.getPageConfig=function(e){return d.a[e]},f.getDSConfig=function(e){return d.b[e]},f.getDataSource=function(e){return new h.a(this.getDSConfig(e))},f.getPagedByDS=function(){var e=u()(p.a.mark(function e(t,r,a,n){var i,s;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a||(a={}),!n&&this.getAppId&&(a.appId=this.getAppId()),e.next=4,t.paged(a);case 4:return i=e.sent,e.next=7,i.json();case 7:return s=e.sent,s.success&&r&&r(s),e.abrupt("return",s);case 10:case"end":return e.stop()}},e,this)}));return function(t,r,a,n){return e.apply(this,arguments)}}(),f.getAppId=function(){return n("appId")},t.a=f},,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(18),n=r(19),i=r.n(n),s=r(8),o=(r.n(s),r(9)),p=r.n(o);r.d(t,"Vue",function(){return a.default}),a.default.use(i.a),a.default.component("Layout",p.a)},function(e,t){},function(e,t,r){r(12);var a=r(1)(r(10),r(13),"data-v-1fe8eacb",null);e.exports=a.exports},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(2);t.default={props:["activeMenu"],data:function(){return{currentApp:{name:"暂无应用"},appArr:[],spanLeft:5,spanRight:19,appList:[]}},computed:{iconSize:function(){return 5===this.spanLeft?14:24}},mounted:function(){this.ds=a.a.getDataSource("appMgr");var e=this,t=a.a.getAppId();a.a.getPagedByDS(this.ds,function(r){for(var a=[],n=0,i=0,s=r.result.length;i<s;i++){var o=r.result[i];a.push({id:o.id,name:o.name}),t==o.id&&(n=i)}e.appArr=a,a.length>0&&(e.currentApp=a[n])},null,!0)},methods:{changeApp:function(e){var t;this.appArr.every(function(r,a,n){return e!=r.id||(t=r.name,!1)}),this.currentApp={id:e,name:t},location.href=location.pathname+"?appId="+e},toggleClick:function(){5===this.spanLeft?(this.spanLeft=2,this.spanRight=22):(this.spanLeft=5,this.spanRight=19)}}}},function(e,t,r){"use strict";r.d(t,"a",function(){return s}),r.d(t,"b",function(){return o});var a,n=r(4),i=r.n(n),s={example:{fieldMeta:[{name:"id",label:"主键",xType:"q-input",showInTable:!1,showInForm:!1},{name:"name",label:"名称",xType:"q-input"},{name:"startTime",label:"生效时间",xType:"q-date"},{name:"appId",label:"所属应用",xType:"q-select",bind:""}]},roleMgr:{table:{bind:"roleMgr",fieldMeta:[{name:"id",label:"主键",xType:"q-input",showInTable:!1,showInForm:!1},{name:"name",label:"名称",xType:"q-input"},{name:"appId",label:"所属应用",xType:"q-select",bind:"appMgr",showInForm:!1}]}},appMgr:{table:{bind:"appMgr",fieldMeta:[{name:"id",label:"主键",xType:"q-input",showInTable:!1,showInForm:!1},{name:"name",label:"名称",xType:"q-input"}]}},appPropertiesMgr:{table:{bind:"appPropertiesMgr",fieldMeta:[{name:"id",label:"主键",xType:"q-input",showInTable:!1,showInForm:!1},{name:"property",label:"属性",xType:"q-input"},{name:"value",label:"值",xType:"q-input"}]}},memberMgr:{table:{bind:"memberMgr",fieldMeta:[{name:"id",label:"主键",xType:"q-input",showInTable:!1,showInForm:!1},{name:"username",label:"用户名",xType:"q-input"},{name:"password",label:"密码",xType:"q-input"},{name:"nickname",label:"昵称",xType:"q-input"}]}},roleGroupMgr:{table:{bind:"roleGroupMgr",fieldMeta:[{name:"id",label:"主键",xType:"q-input",showInTable:!1,showInForm:!1},{name:"name",label:"名称",xType:"q-input"}]}}},o=(a={example:{queryUrl:"/rest/configServer/access/roleMgr",createUrl:"",updateUrl:"",deleteUrl:"",name:"roleEntity",alias:"role"},roleMgr:{url:"/rest/configServer/access/roleMgr",name:"roleEntity",alias:"role",child:["rRelp"]},pagePermissionMgr:{url:"/rest/configServer/access/pagePermissionMgr",name:"pagePermissionEntity",alias:"pagePermission"},roleRelPagePermissionMgr:{url:"/rest/configServer/access/roleRelPagePermissionMgr",name:"roleRelPagePermissionEntity",alias:"roleRelPagePermission"},apiPermissionMgr:{url:"/rest/configServer/access/apiPermissionMgr",name:"apiPermissionEntity",alias:"apiPermission"}},i()(a,"apiPermissionMgr",{url:"/rest/configServer/access/apiPermissionMgr",name:"apiPermissionEntity",alias:"apiPermission"}),i()(a,"roleRelApiPermissionMgr",{url:"/rest/configServer/access/roleRelApiPermissionMgr",name:"roleRelApiPermissionEntity",alias:"roleRelApiPermission"}),i()(a,"appMgr",{url:"/rest/configServer/access/appMgr",name:"appEntity",alias:"app"}),i()(a,"appPropertiesMgr",{url:"/rest/configServer/access/appPropertiesMgr",name:"appPropertiesEntity",alias:"ap"}),i()(a,"memberMgr",{url:"/rest/configServer/access/memberMgr",name:"memberEntity",alias:"member",child:["mRelrg"]}),i()(a,"roleGroupMgr",{url:"/rest/configServer/access/roleGroupMgr",name:"roleGroupEntity",alias:"roleGroup",child:["rgRelr"]}),a)},function(e,t){},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"layout",class:{"layout-hide-text":e.spanLeft<5}},[r("Row",{attrs:{type:"flex"}},[r("i-col",{staticClass:"layout-menu-left",attrs:{span:e.spanLeft}},[r("Menu",{attrs:{"active-name":e.activeMenu,theme:"dark",width:"auto"}},[r("div",{staticClass:"layout-logo-left"},[r("Dropdown",{staticStyle:{margin:"5px 0px 0px 5px"},attrs:{placement:"bottom-start",trigger:"click"},on:{"on-click":e.changeApp}},[r("a",{staticStyle:{color:"rgb(158, 167, 180)"},attrs:{href:"javascript:void(0)"}},[e._v("\n              应用: "+e._s(e.currentApp.name)+"\n              "),r("Icon",{attrs:{type:"arrow-down-b"}})],1),e._v(" "),r("Dropdown-menu",{slot:"list"},[e._l(e.appArr,function(t){return r("Dropdown-item",{attrs:{name:t.id}},[e._v(e._s(t.name))])}),e._v(" "),r("Dropdown-item",{attrs:{divided:""}},[e._v("应用管理")])],2)],1)],1),e._v(" "),r("Menu-item",{attrs:{name:"appMgr"}},[r("Icon",{attrs:{type:"ios-keypad",size:e.iconSize}}),e._v(" "),r("a",{staticClass:"layout-text",attrs:{href:"appMgr.html"}},[e._v("应用管理")])],1),e._v(" "),r("Menu-item",{attrs:{name:"memberMgr"}},[r("Icon",{attrs:{type:"ios-keypad",size:e.iconSize}}),e._v(" "),r("a",{staticClass:"layout-text",attrs:{href:"memberMgr.html?appId="+e.currentApp.id}},[e._v("用户管理")])],1),e._v(" "),r("Menu-item",{attrs:{name:"roleGroupMgr"}},[r("Icon",{attrs:{type:"ios-keypad",size:e.iconSize}}),e._v(" "),r("a",{staticClass:"layout-text",attrs:{href:"roleGroupMgr.html?appId="+e.currentApp.id}},[e._v("角色组管理")])],1),e._v(" "),r("Menu-item",{attrs:{name:"roleMgr"}},[r("Icon",{attrs:{type:"ios-analytics",size:e.iconSize}}),e._v(" "),r("a",{staticClass:"layout-text",attrs:{href:"roleMgr.html?appId="+e.currentApp.id}},[e._v("角色管理")])],1),e._v(" "),r("Menu-item",{attrs:{name:"appPropertiesMgr"}},[r("Icon",{attrs:{type:"ios-keypad",size:e.iconSize}}),e._v(" "),r("a",{staticClass:"layout-text",attrs:{href:"appPropertiesMgr.html?appId="+e.currentApp.id}},[e._v("应用参配")])],1),e._v(" "),r("Menu-item",{attrs:{name:"pageMgr"}},[r("Icon",{attrs:{type:"ios-analytics",size:e.iconSize}}),e._v(" "),r("a",{staticClass:"layout-text",attrs:{href:"config.html?appId="+e.currentApp.id}},[e._v("页面管理")])],1)],1)],1),e._v(" "),r("i-col",{attrs:{span:e.spanRight}},[r("div",{staticClass:"layout-header"},[r("i-button",{attrs:{type:"text"},on:{click:e.toggleClick}},[r("Icon",{attrs:{type:"navicon",size:"32"}})],1)],1),e._v(" "),r("div",{staticClass:"layout-breadcrumb"},[r("Breadcrumb",[r("Breadcrumb-item",{attrs:{href:"#"}},[e._v("首页")]),e._v(" "),r("Breadcrumb-item",{attrs:{href:"#"}},[e._v("应用中心")]),e._v(" "),r("Breadcrumb-item",[e._v("某应用")])],1)],1),e._v(" "),r("div",{staticClass:"layout-content"},[r("div",{staticClass:"layout-content-main"},[e._t("default")],2)])])],1)],1)},staticRenderFns:[]}}],[7]);
//# sourceMappingURL=common.c99ac35a0308a28eb695.js.map