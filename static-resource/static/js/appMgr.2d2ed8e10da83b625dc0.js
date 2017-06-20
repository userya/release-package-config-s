webpackJsonp([7,10],{0:function(e,t,a){"use strict";a.d(t,"a",function(){return f});var r=a(4),n=a.n(r),s=a(14),i=a.n(s),o=a(3),l=a.n(o),c=a(15),p=a.n(c),u=a(16),m=a.n(u),d=a(17),f=(a.n(d),function(){function e(t){p()(this,e),this.schema=t}return m()(e,[{key:"count",value:function(e){}},{key:"query",value:function(e,t){var a=this._getQuery(t);return a.set("_method","get"),fetch(e,{method:"POST",credentials:"same-origin",body:a})}},{key:"_isRefKey",value:function(e){if(this.schema.child)for(var t=0;t<this.schema.child.length;t++)if(this.schema.child[t]==e)return!0;return!1}},{key:"_getQuery",value:function(e){var t=new URLSearchParams;for(var a in e)if(this._isRefKey(a)){var r=a+"_";for(var n in e[a])t.append(r+n,e[a][n])}else{var s=e[a];if(s instanceof Array)for(var i=0;i<s.length;i++)t.append(a,s[i]);else t.append(a,s)}return t}},{key:"paged",value:function(e){var t=this._getQuery(e);return t.set("_method","get"),fetch(this.schema.queryUrl||this.schema.url,{method:"POST",credentials:"same-origin",body:t})}},{key:"create",value:function(e,t){var a=new FormData;if(a.append(this.schema.name,l()(e)),t)for(var r in t)a.append(r,t[r]);return fetch(this.schema.createUrl||this.schema.url,{method:"POST",credentials:"same-origin",body:a})}},{key:"update",value:function(e,t){var a=new FormData;if(a.append("_method","put"),a.append(this.schema.name,l()(e)),t){var r=this._getQuery(t),n=!0,s=!1,o=void 0;try{for(var c,p=i()(r.keys());!(n=(c=p.next()).done);n=!0){var u=c.value;a.append(u,r.get(u))}}catch(e){s=!0,o=e}finally{try{!n&&p.return&&p.return()}finally{if(s)throw o}}}return fetch(this.schema.updateUrl||this.schema.url,{method:"POST",credentials:"same-origin",body:a})}},{key:"remove",value:function(e){var t=this._getQuery(e);return t.set("_method","delete"),fetch(this.schema.deleteUrl||this.schema.url,{method:"POST",credentials:"same-origin",body:t})}},{key:"buildValue",value:function(e){return e&&(e=n()({},this.schema.name,e)),e}}]),e}())},10:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(2);t.default={props:["activeMenu"],data:function(){return{currentApp:{name:"暂无应用"},appArr:[],spanLeft:5,spanRight:19,appList:[]}},computed:{iconSize:function(){return 5===this.spanLeft?14:24}},mounted:function(){this.ds=r.a.getDataSource("appMgr");var e=this,t=r.a.getAppId();r.a.getPagedByDS(this.ds,function(a){for(var r=[],n=0,s=0,i=a.result.length;s<i;s++){var o=a.result[s];r.push({id:o.id,name:o.name}),t==o.id&&(n=s)}e.appArr=r,r.length>0&&(e.currentApp=r[n])},null,!0)},methods:{changeApp:function(e){var t;this.appArr.every(function(a,r,n){return e!=a.id||(t=a.name,!1)}),this.currentApp={id:e,name:t},location.href=location.pathname+"?appId="+e},toggleClick:function(){5===this.spanLeft?(this.spanLeft=2,this.spanRight=22):(this.spanLeft=5,this.spanRight=19)}}}},11:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return o});var r,n=a(4),s=a.n(n),i={example:{fieldMeta:[{name:"id",label:"主键",xType:"q-input",showInTable:!1,showInForm:!1},{name:"name",label:"名称",xType:"q-input"},{name:"startTime",label:"生效时间",xType:"q-date"},{name:"appId",label:"所属应用",xType:"q-select",bind:""}]},roleMgr:{table:{bind:"roleMgr",fieldMeta:[{name:"id",label:"主键",xType:"q-input",showInTable:!1,showInForm:!1},{name:"name",label:"名称",xType:"q-input"},{name:"appId",label:"所属应用",xType:"q-select",bind:"appMgr",showInForm:!1}]}},appMgr:{table:{bind:"appMgr",fieldMeta:[{name:"id",label:"主键",xType:"q-input",showInTable:!1,showInForm:!1},{name:"name",label:"名称",xType:"q-input"}]}},appPropertiesMgr:{table:{bind:"appPropertiesMgr",fieldMeta:[{name:"id",label:"主键",xType:"q-input",showInTable:!1,showInForm:!1},{name:"property",label:"属性",xType:"q-input"},{name:"value",label:"值",xType:"q-input"}]}},memberMgr:{table:{bind:"memberMgr",fieldMeta:[{name:"id",label:"主键",xType:"q-input",showInTable:!1,showInForm:!1},{name:"username",label:"用户名",xType:"q-input"},{name:"password",label:"密码",xType:"q-input"},{name:"nickname",label:"昵称",xType:"q-input"}]}},roleGroupMgr:{table:{bind:"roleGroupMgr",fieldMeta:[{name:"id",label:"主键",xType:"q-input",showInTable:!1,showInForm:!1},{name:"name",label:"名称",xType:"q-input"}]}}},o=(r={example:{queryUrl:"/rest/configServer/access/roleMgr",createUrl:"",updateUrl:"",deleteUrl:"",name:"roleEntity",alias:"role"},roleMgr:{url:"/rest/configServer/access/roleMgr",name:"roleEntity",alias:"role",child:["rRelp"]},pagePermissionMgr:{url:"/rest/configServer/access/pagePermissionMgr",name:"pagePermissionEntity",alias:"pagePermission"},roleRelPagePermissionMgr:{url:"/rest/configServer/access/roleRelPagePermissionMgr",name:"roleRelPagePermissionEntity",alias:"roleRelPagePermission"},apiPermissionMgr:{url:"/rest/configServer/access/apiPermissionMgr",name:"apiPermissionEntity",alias:"apiPermission"}},s()(r,"apiPermissionMgr",{url:"/rest/configServer/access/apiPermissionMgr",name:"apiPermissionEntity",alias:"apiPermission"}),s()(r,"roleRelApiPermissionMgr",{url:"/rest/configServer/access/roleRelApiPermissionMgr",name:"roleRelApiPermissionEntity",alias:"roleRelApiPermission"}),s()(r,"appMgr",{url:"/rest/configServer/access/appMgr",name:"appEntity",alias:"app"}),s()(r,"appPropertiesMgr",{url:"/rest/configServer/access/appPropertiesMgr",name:"appPropertiesEntity",alias:"ap"}),s()(r,"memberMgr",{url:"/rest/configServer/access/memberMgr",name:"memberEntity",alias:"member",child:["mRelrg"]}),s()(r,"roleGroupMgr",{url:"/rest/configServer/access/roleGroupMgr",name:"roleGroupEntity",alias:"roleGroup",child:["rgRelr"]}),r)},118:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),n=a(77),s=a.n(n);new r.Vue({el:"#appMgr",components:{AppMgr:s.a}})},12:function(e,t){},13:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"layout",class:{"layout-hide-text":e.spanLeft<5}},[a("Row",{attrs:{type:"flex"}},[a("i-col",{staticClass:"layout-menu-left",attrs:{span:e.spanLeft}},[a("Menu",{attrs:{"active-name":e.activeMenu,theme:"dark",width:"auto"}},[a("div",{staticClass:"layout-logo-left"},[a("Dropdown",{staticStyle:{margin:"5px 0px 0px 5px"},attrs:{placement:"bottom-start",trigger:"click"},on:{"on-click":e.changeApp}},[a("a",{staticStyle:{color:"rgb(158, 167, 180)"},attrs:{href:"javascript:void(0)"}},[e._v("\n              应用: "+e._s(e.currentApp.name)+"\n              "),a("Icon",{attrs:{type:"arrow-down-b"}})],1),e._v(" "),a("Dropdown-menu",{slot:"list"},[e._l(e.appArr,function(t){return a("Dropdown-item",{attrs:{name:t.id}},[e._v(e._s(t.name))])}),e._v(" "),a("Dropdown-item",{attrs:{divided:""}},[e._v("应用管理")])],2)],1)],1),e._v(" "),a("Menu-item",{attrs:{name:"appMgr"}},[a("Icon",{attrs:{type:"ios-keypad",size:e.iconSize}}),e._v(" "),a("a",{staticClass:"layout-text",attrs:{href:"appMgr.html"}},[e._v("应用管理")])],1),e._v(" "),a("Menu-item",{attrs:{name:"memberMgr"}},[a("Icon",{attrs:{type:"ios-keypad",size:e.iconSize}}),e._v(" "),a("a",{staticClass:"layout-text",attrs:{href:"memberMgr.html?appId="+e.currentApp.id}},[e._v("用户管理")])],1),e._v(" "),a("Menu-item",{attrs:{name:"roleGroupMgr"}},[a("Icon",{attrs:{type:"ios-keypad",size:e.iconSize}}),e._v(" "),a("a",{staticClass:"layout-text",attrs:{href:"roleGroupMgr.html?appId="+e.currentApp.id}},[e._v("角色组管理")])],1),e._v(" "),a("Menu-item",{attrs:{name:"roleMgr"}},[a("Icon",{attrs:{type:"ios-analytics",size:e.iconSize}}),e._v(" "),a("a",{staticClass:"layout-text",attrs:{href:"roleMgr.html?appId="+e.currentApp.id}},[e._v("角色管理")])],1),e._v(" "),a("Menu-item",{attrs:{name:"appPropertiesMgr"}},[a("Icon",{attrs:{type:"ios-keypad",size:e.iconSize}}),e._v(" "),a("a",{staticClass:"layout-text",attrs:{href:"appPropertiesMgr.html?appId="+e.currentApp.id}},[e._v("应用参配")])],1),e._v(" "),a("Menu-item",{attrs:{name:"pageMgr"}},[a("Icon",{attrs:{type:"ios-analytics",size:e.iconSize}}),e._v(" "),a("a",{staticClass:"layout-text",attrs:{href:"config.html?appId="+e.currentApp.id}},[e._v("页面管理")])],1)],1)],1),e._v(" "),a("i-col",{attrs:{span:e.spanRight}},[a("div",{staticClass:"layout-header"},[a("i-button",{attrs:{type:"text"},on:{click:e.toggleClick}},[a("Icon",{attrs:{type:"navicon",size:"32"}})],1)],1),e._v(" "),a("div",{staticClass:"layout-breadcrumb"},[a("Breadcrumb",[a("Breadcrumb-item",{attrs:{href:"#"}},[e._v("首页")]),e._v(" "),a("Breadcrumb-item",{attrs:{href:"#"}},[e._v("应用中心")]),e._v(" "),a("Breadcrumb-item",[e._v("某应用")])],1)],1),e._v(" "),a("div",{staticClass:"layout-content"},[a("div",{staticClass:"layout-content-main"},[e._t("default")],2)])])],1)],1)},staticRenderFns:[]}},177:function(e,t){},199:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Layout",{attrs:{activeMenu:"appMgr"}},[a("table-page",{attrs:{pageName:"appMgr"}})],1)},staticRenderFns:[]}},2:function(e,t,a){"use strict";function r(e,t,a){return new m.a(function(r,n){!0!==a&&(e=serviceRootPath+e),$.post(e,t,function(e){r(e)},"json")})}function n(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),a=window.location.search.substr(1).match(t),r="";return null!=a&&(r=a[2]),t=null,a=null,null==r||""==r||"undefined"==r?"":r}var s=a(3),i=a.n(s),o=a(6),l=a.n(o),c=a(5),p=a.n(c),u=a(27),m=a.n(u),d=a(11),f=a(0),h={};h.phoneRegisted=function(){var e=p()(l.a.mark(function e(t){var a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="register?_cnd=exists&_method=GET&_pageSize=20&_pageNo=1",n={$phone:t},e.next=4,r(a,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),h.insertUser=function(){var e=p()(l.a.mark(function e(t){var a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="register?_method=POST",n={$user:i()(t)},e.next=4,r(a,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),h.getPageConfig=function(e){return d.a[e]},h.getDSConfig=function(e){return d.b[e]},h.getDataSource=function(e){return new f.a(this.getDSConfig(e))},h.getPagedByDS=function(){var e=p()(l.a.mark(function e(t,a,r,n){var s,i;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r||(r={}),!n&&this.getAppId&&(r.appId=this.getAppId()),e.next=4,t.paged(r);case 4:return s=e.sent,e.next=7,s.json();case 7:return i=e.sent,i.success&&a&&a(i),e.abrupt("return",i);case 10:case"end":return e.stop()}},e,this)}));return function(t,a,r,n){return e.apply(this,arguments)}}(),h.getAppId=function(){return n("appId")},t.a=h},20:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(6),n=a.n(r),s=a(5),i=a.n(s),o=a(0),l=a(2);t.default={props:["showDialog","formData","formMeta"],data:function(){for(var e={},t=0,a=this.formMeta.length;t<a;t++){var r=this.formMeta[t];"q-select"==r.xType&&(e[r.name]=[])}return{loading:!0,selectDatas:e}},computed:{open:function(){return this.showDialog},formDatas:function(){return this.formData}},mounted:function(){function e(){return t.apply(this,arguments)}var t=i()(n.a.mark(function e(){var t,a,r,s,i,c,p;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t={},a=0,r=this.formMeta.length;case 2:if(!(a<r)){e.next=17;break}if(s=this.formMeta[a],"q-select"!=s.xType){e.next=14;break}return i=s.bind,this.ds=new o.a(l.a.getDSConfig(i)),e.next=9,this.ds.paged();case 9:return c=e.sent,e.next=12,c.json();case 12:p=e.sent,p.success&&(t[s.name]=p.result);case 14:a++,e.next=2;break;case 17:this.selectDatas=t;case 18:case"end":return e.stop()}},e,this)}));return e}(),methods:{handleSave:function(){this.$emit("handleItemChange",this.formDatas,this)},cancel:function(){this.$emit("update:showDialog",!1)}}}},21:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(31),n=a.n(r),s=a(6),i=a.n(s),o=a(5),l=a.n(o),c=a(2),p=a(23),u=a.n(p);a(0);t.default={props:["pageName"],components:{formDialog:u.a},data:function(){return{tableMeta:[],tableData:[],selectedItems:[],openFlag:!1,showDialog:!1,formMeta:[],formData:null}},mounted:function(){var e=c.a.getPageConfig(this.pageName).table,t=this._preHandleMeta(e.fieldMeta);this.tableMeta=t.table,this.formMeta=t.form,this.ds=c.a.getDataSource(e.bind),this._refreshTable()},methods:{_preHandleMeta:function(e){var t={table:[{type:"selection",width:60,align:"center"}],form:[]};if(e)for(var a=0,r=e.length;a<r;a++){var n=e[a];if(0!=n.showInTable){var s={};s.title=n.label,s.key=n.name,"q-select"==n.xType&&(s.key=n.name+"$display$"),t.table.push(s)}0!=n.showInForm&&(t.form.push(n),this.initFormData||(this.initFormData={}),this.initFormData[n.name]="")}return t},_refreshTable:function(){function e(){return t.apply(this,arguments)}var t=l()(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.getPagedByDS(this.ds);case 2:t=e.sent,t.success&&(this.tableData=t.result);case 4:case"end":return e.stop()}},e,this)}));return e}(),addItem:function(){this.operType="add",this.formData=n()({},this.initFormData),this.openFlag=!0,this.showDialog=!0},updateItem:function(){0==this.selectedItems.length?this.$Modal.warning({content:"请至少选中一项！"}):(this.operType="update",this.formData=this.selectedItems[0],this.openFlag=!0,this.showDialog=!0)},deleteItems:function(){var e=this.selectedItems.length;if(0==e)this.$Modal.warning({content:"请至少选中一项！"});else{var t=this;this.$Modal.confirm({content:"确定删除所选项吗？",onOk:function(){t.operType="delete";for(var a={ids:[]},r=0;r<e;r++)a.ids.push(t.selectedItems[r].id);t.handleItemChange(a)}})}},itemSelected:function(e,t){this.selectedItems=e,this.$emit("itemSelectEvent",e)},handleItemChange:function(){function e(e,a){return t.apply(this,arguments)}var t=l()(i.a.mark(function e(t,a){var r,n,s,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=!1,n=void 0,(s=c.a.getAppId())||"appMgr"==this.pageName){e.next=7;break}this.$Modal.error({content:"未选中项目!"}),e.next=29;break;case 7:if("add"!=this.operType){e.next=14;break}return"appMgr"!=this.pageName&&(t.appId=s),e.next=11,this.ds.create(t);case 11:n=e.sent,e.next=24;break;case 14:if("update"!=this.operType){e.next=20;break}return e.next=17,this.ds.update(t,{id:t.id});case 17:n=e.sent,e.next=24;break;case 20:if("delete"!=this.operType){e.next=24;break}return e.next=23,this.ds.remove(t);case 23:n=e.sent;case 24:return e.next=26,n.json();case 26:o=e.sent,r=o.success,r?(this.$Modal.success({content:"操作成功!"}),this.showDialog=!1,this._refreshTable()):this.$Modal.error({content:"操作失败!"});case 29:case"end":return e.stop()}},e,this)}));return e}()}}},23:function(e,t,a){var r=a(1)(a(20),a(26),null,null);e.exports=r.exports},24:function(e,t,a){var r=a(1)(a(21),a(25),null,null);e.exports=r.exports},25:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{margin:"15px"}},[a("Button",{attrs:{type:"info"},on:{click:e.addItem}},[e._v("新增")]),e._v(" "),a("Button",{attrs:{type:"info"},on:{click:e.updateItem}},[e._v("修改")]),e._v(" "),a("Button",{attrs:{type:"warning"},on:{click:e.deleteItems}},[e._v("删除")]),e._v(" "),e._t("toolbar")],2),e._v(" "),a("Table",{attrs:{border:"",columns:e.tableMeta,data:e.tableData},on:{"on-selection-change":e.itemSelected}}),e._v(" "),e.openFlag?a("form-dialog",{attrs:{formData:e.formData,formMeta:e.formMeta,showDialog:e.showDialog},on:{"update:showDialog":function(t){e.showDialog=t},handleItemChange:e.handleItemChange}}):e._e()],1)},staticRenderFns:[]}},26:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Modal",{attrs:{title:"编辑","mask-closable":!1},on:{"on-cancel":e.cancel},model:{value:e.open,callback:function(t){e.open=t},expression:"open"}},[a("Form",{attrs:{model:e.formDatas,"label-width":80}},e._l(e.formMeta,function(t){return a("Form-item",{key:t.name,attrs:{label:t.label}},["q-input"==t.xType?a("Input",{attrs:{placeholder:"请输入"},model:{value:e.formDatas[t.name],callback:function(a){var r=e.formDatas,n=t.name;Array.isArray(r)?r.splice(n,1,a):e.formDatas[t.name]=a},expression:"formDatas[item.name]"}}):e._e(),e._v(" "),"q-date"==t.xType?a("Date-picker",{attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm",placeholder:"选择日期"},model:{value:e.formDatas[t.name],callback:function(a){var r=e.formDatas,n=t.name;Array.isArray(r)?r.splice(n,1,a):e.formDatas[t.name]=a},expression:"formDatas[item.name]"}}):e._e(),e._v(" "),"q-select"==t.xType?a("Select",{attrs:{placeholder:"请选择"},model:{value:e.formDatas[t.name],callback:function(a){var r=e.formDatas,n=t.name;Array.isArray(r)?r.splice(n,1,a):e.formDatas[t.name]=a},expression:"formDatas[item.name]"}},e._l(e.selectDatas[t.name],function(r){return a("Option",{key:t.valueKey||"id",attrs:{value:r[t.valueKey||"id"]}},[e._v(e._s(r[t.textKey||"name"]))])})):e._e()],1)})),e._v(" "),a("div",{slot:"footer"},[a("i-button",{attrs:{type:"text"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),a("i-button",{attrs:{type:"primary"},on:{click:e.handleSave}},[e._v("保存")])],1)],1)},staticRenderFns:[]}},7:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(18),n=a(19),s=a.n(n),i=a(8),o=(a.n(i),a(9)),l=a.n(o);a.d(t,"Vue",function(){return r.default}),r.default.use(s.a),r.default.component("Layout",l.a)},77:function(e,t,a){a(177);var r=a(1)(a(99),a(199),null,null);e.exports=r.exports},8:function(e,t){},9:function(e,t,a){a(12);var r=a(1)(a(10),a(13),"data-v-1fe8eacb",null);e.exports=r.exports},99:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(24),n=a.n(r);t.default={components:{tablePage:n.a},data:function(){return{showTable:0,selectedItems:[]}},methods:{}}}},[118]);
//# sourceMappingURL=appMgr.2d2ed8e10da83b625dc0.js.map