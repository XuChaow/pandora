(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bee7248a"],{"07d6":function(t,e,n){},3635:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layer-global"},[n("section",{staticClass:"layer-container"},[n("aside",{staticClass:"layer-aside"},[n("header",{staticClass:"layer-header"},[n("div",{staticClass:"header-left",on:{click:t.redirectRoot}},[t._m(0)])]),n("ScrollBar",[n("el-menu",{staticClass:"aside-menu",attrs:{"default-active":t.activeMenu,router:!0,"unique-opened":!0}},[t._l(t.AppMenu,function(e){return[e.children&&(e.children.length>1||1==e.children.length&&!e.children[0].meta.single)?n("el-submenu",{key:e.name,attrs:{index:e.name}},[n("template",{slot:"title"},[e.meta.icon?n("span",{staticClass:"iconfont menu-left",class:e.meta.icon}):t._e(),n("span",[t._v(t._s(e.meta.title))])]),t._l(e.children,function(e){return[e.meta&&e.meta.hide?t._e():n("el-menu-item",{key:e.name,attrs:{route:{name:e.name},index:e.name}},[n("span",[t._v(t._s(e.meta.title))])])]})],2):e.children&&1==e.children.length?n("el-menu-item",{key:e.children[0].name,attrs:{route:{name:e.children[0].name},index:e.children[0].name}},[e.children[0].meta.icon?n("i",{staticClass:"iconfont menu-left",class:e.children[0].meta.icon}):t._e(),n("span",[t._v(t._s(e.children[0].meta.title))])]):t._e()]})],2)],1)],1),n("main",{staticClass:"layer-main"},[n("header",{staticClass:"layer-header"},[t._m(1),n("div",{staticClass:"header-right"},[n("span",{staticClass:"r-item"},[n("el-dropdown",{attrs:{trigger:"click"},on:{command:t.userSettingHandler}},[n("span",{staticClass:"item app-cursor"},[n("img",{staticClass:"avatar",attrs:{src:t.$store.getters["account/getAvatar"]}}),n("i",{staticClass:"iconfont small icon-icon-arrow-down"})]),n("el-dropdown-menu",{staticClass:"app-header-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{staticClass:"text"},[n("i",{staticClass:"iconfont small left icon-user"}),t._v(t._s(t.$store.getters["account/getUserName"]))]),n("el-dropdown-item",{attrs:{command:"setting",divided:""}},[n("i",{staticClass:"iconfont small left icon-setting"}),t._v(t._s(t.$t("personal_setting")))]),n("el-dropdown-item",{attrs:{command:"password"}},[n("i",{staticClass:"iconfont small left icon-key"}),t._v(t._s(t.$t("change_password")))]),n("el-dropdown-item",{attrs:{command:"logout",divided:""}},[n("i",{staticClass:"iconfont small left icon-logout"}),t._v(t._s(t.$t("sign_out")))])],1)],1)],1)])]),n("el-breadcrumb",{staticClass:"bread-crumb ",attrs:{separator:""}},t._l(t.breadcrumb,function(e){return n("el-breadcrumb-item",{key:e},[n("span",{staticClass:"bread-crumb-icon"},[n("i",{staticClass:"iconfont small icon-crumbs"})]),t._v("\n                    "+t._s(e)+"\n                ")])}),1),n("div",{staticClass:"container"},[n("router-view"),n("div",{staticClass:"app-cpy"})],1)],1)]),n("el-dialog",{attrs:{width:t.$root.DialogSmallWidth,title:"个人设置",visible:t.settingDialogVisible},on:{"update:visible":function(e){t.settingDialogVisible=e},close:t.closeUserSettingDialogHandler}},[n("el-form",{ref:"settingDialogRef",staticClass:"app-form",attrs:{model:t.settingForm,size:"medium","label-width":"80px"}},[n("el-form-item",{attrs:{label:t.$t("role")}},[t._v("\n                "+t._s(t.$store.getters["account/getRoleName"])+"\n            ")]),n("el-form-item",{attrs:{label:t.$t("avatar")}},[n("img",{staticClass:"app-avatar normal",attrs:{src:t.$store.getters["account/getAvatar"]}}),t._v("\n                 "),n("a",{staticClass:"app-link",attrs:{href:"http://cn.gravatar.com/support/activating-your-account/",target:"_blank"}},[n("i",{staticClass:"iconfont small left icon-question"}),t._v("如何修改头像")])]),n("el-form-item",{attrs:{label:t.$t("username")}},[n("el-input",{attrs:{value:t.$store.getters["account/getUserName"],disabled:!0}}),n("span",{staticClass:"app-input-help"},[n("i",{staticClass:"el-icon-info"}),t._v(" 修改用户名请联系管理员")])],1),n("el-form-item",{attrs:{label:t.$t("email")}},[n("el-input",{attrs:{value:t.$store.getters["account/getEmail"],disabled:!0}}),n("span",{staticClass:"app-input-help"},[n("i",{staticClass:"el-icon-info"}),t._v(" 修改邮箱请联系管理员")])],1),n("el-form-item",{attrs:{label:t.$t("truename"),prop:"truename"}},[n("el-input",{model:{value:t.settingForm.truename,callback:function(e){t.$set(t.settingForm,"truename",e)},expression:"settingForm.truename"}})],1),n("el-form-item",{attrs:{label:t.$t("mobile"),prop:"mobile"}},[n("el-input",{model:{value:t.settingForm.mobile,callback:function(e){t.$set(t.settingForm,"mobile",e)},expression:"settingForm.mobile"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:t.closeUserSettingDialogHandler}},[t._v(t._s(t.$t("cancel")))]),n("el-button",{attrs:{loading:t.btnLoading,size:"small",type:"primary"},on:{click:t.dialogUserSettingSubmitHandler}},[t._v(t._s(t.$t("enter")))])],1)],1),n("el-dialog",{attrs:{width:t.$root.DialogSmallWidth,title:"修改密码",visible:t.passwordDialogVisible},on:{"update:visible":function(e){t.passwordDialogVisible=e},close:t.closePasswordSettingDialogHandler}},[n("el-form",{ref:"passwordDialogRef",staticClass:"app-form",attrs:{model:t.passwordForm,size:"medium","label-width":"80px"}},[n("el-form-item",{attrs:{label:t.$t("current_password"),prop:"password",rules:[{min:6,max:20,message:this.$t("strlen_between",{min:6,max:20}),trigger:"blur"},{required:!0,message:this.$t("current_password_cannot_empty"),trigger:"blur"}]}},[n("el-input",{attrs:{type:"password",placeholder:t.$t("please_input_password_length_limit"),autocomplete:"off"},model:{value:t.passwordForm.password,callback:function(e){t.$set(t.passwordForm,"password",e)},expression:"passwordForm.password"}})],1),n("el-form-item",{attrs:{label:t.$t("new_password"),prop:"new_password",rules:[{min:6,max:20,message:this.$t("strlen_between",{min:6,max:20}),trigger:"blur"},{required:!0,message:this.$t("new_password_cannot_empty"),trigger:"blur"}]}},[n("el-input",{attrs:{type:"password",placeholder:t.$t("please_input_password_length_limit"),autocomplete:"off"},model:{value:t.passwordForm.new_password,callback:function(e){t.$set(t.passwordForm,"new_password",e)},expression:"passwordForm.new_password"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:t.closePasswordSettingDialogHandler}},[t._v(t._s(t.$t("cancel")))]),n("el-button",{attrs:{loading:t.btnLoading,size:"small",type:"primary"},on:{click:t.dialogPasswordSettingSubmitHandler}},[t._v(t._s(t.$t("enter")))])],1)],1)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("i",{staticClass:"iconfont icon-pandora"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-left"},[n("div",{staticClass:"menu"},[n("i",{staticClass:"iconfont icon-menu2"})])])}],a=(n("7f7f"),n("5176")),r=n.n(a),o=(n("ac6a"),n("cadf"),n("551c"),n("097d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"scrollContainer",staticClass:"scroll-container",on:{wheel:function(e){return e.preventDefault(),t.handleScroll(e)}}},[n("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper",style:{top:t.top+"px"}},[t._t("default")],2)])}),l=[],c=0,u={data:function(){return{top:0}},methods:{handleScroll:function(t){var e=3*-t.deltaY||t.wheelDelta,n=this.$refs.scrollContainer,s=n.offsetHeight,i=this.$refs.scrollWrapper,a=i.offsetHeight;e>0?this.top=Math.min(0,this.top+e):s-c<a?this.top<-(a-s+c)?this.top=this.top:this.top=Math.max(this.top+e,s-a-c):this.top=0}}},d=u,m=(n("72f3"),n("2877")),p=Object(m["a"])(d,o,l,!1,null,"d88310be",null);p.options.__file="index.vue";var f=p.exports,g=n("a18c"),h=n("1c06"),b=n("7ded"),w=n("c24f"),_={data:function(){return{breadcrumb:[],activeMenu:"",btnLoading:!1,settingDialogVisible:!1,settingForm:{},passwordDialogVisible:!1,passwordForm:{}}},computed:{AppMenu:function(){var t=this,e=[];return g["b"].forEach(function(n){var s=[],i=r()({},n);n.children.forEach(function(e){e.meta.role&&!t.$root.CheckPrivs(e.meta.role)||s.push(e)}),s.length>0&&(i.children=s,e.push(i))}),e}},watch:{"$route.name":function(){this.breadcrumbItems(),this.initActiveMenu()},AppMenu:function(){this.breadcrumbItems()}},components:{ScrollBar:f},methods:{userSettingHandler:function(t){var e=this;switch(t){case"logout":Object(b["c"])().then(function(t){e.$router.push({name:"login"})});break;case"setting":this.showUserSettingDialogHandler();break;case"password":this.showPasswordSettingDialogHandler();break}},showPasswordSettingDialogHandler:function(){this.passwordDialogVisible=!0},closePasswordSettingDialogHandler:function(){this.passwordDialogVisible=!1},dialogPasswordSettingSubmitHandler:function(){var t=this,e=this;this.$refs.passwordDialogRef.validate(function(n){if(!n)return!1;var s={password:t.$root.Md5Sum(e.passwordForm.password),new_password:t.$root.Md5Sum(e.passwordForm.new_password)};t.btnLoading=!0,Object(w["m"])(s).then(function(e){t.$root.MessageSuccess(function(){t.btnLoading=!1,t.closePasswordSettingDialogHandler()})}).catch(function(e){e.code==h["a"].CODE_ERR_USER_OR_PASS_WRONG&&t.$message({message:"当前密码错误，请重新输入",type:"warning"}),t.btnLoading=!1})})},showUserSettingDialogHandler:function(){this.settingForm={truename:this.$store.getters["account/getTrueName"],mobile:this.$store.getters["account/getMobile"]},this.settingDialogVisible=!0},closeUserSettingDialogHandler:function(){this.settingDialogVisible=!1},dialogUserSettingSubmitHandler:function(){var t=this;this.btnLoading=!0,Object(w["n"])(this.settingForm).then(function(e){t.$root.MessageSuccess(function(){t.btnLoading=!1,t.closeUserSettingDialogHandler()}),t.$store.dispatch("account/userSetting",{mobile:t.settingForm.mobile,truename:t.settingForm.truename})}).catch(function(e){t.btnLoading=!1})},initActiveMenu:function(){this.activeMenu=this.$route.name},breadcrumbItems:function(){var t=this,e=[];this.AppMenu.forEach(function(n){n.children.forEach(function(s){s.name==t.$route.name&&(n.meta.title&&e.push(n.meta.title),e.push(s.meta.title))})}),this.breadcrumb=e},initLoginStatus:function(){var t=this;Object(b["b"])().then(function(e){e.is_login?t.$store.dispatch("account/status",{user_id:e.user_id,username:e.username,email:e.email,mobile:e.mobile,privilege:e.privilege?e.privilege:[],role_name:e.role_name,truename:e.truename}):(t.$message.error("用户未登录",1),t.$router.push({name:"login"}))}).catch(function(e){t.$message.error("用户未登录",1),t.$router.push({name:"login"})})},redirectRoot:function(){this.$router.push({path:"/"})}},mounted:function(){this.initLoginStatus(),this.initActiveMenu()}},v=_,$=Object(m["a"])(v,s,i,!1,null,null,null);$.options.__file="Layer.vue";e["default"]=$.exports},5176:function(t,e,n){t.exports=n("51b6")},"72f3":function(t,e,n){"use strict";var s=n("07d6"),i=n.n(s);i.a},"7ded":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return r});var s=n("ead3");function i(t){return Object(s["b"])("/login",t)}function a(){return Object(s["a"])("/login/status")}function r(){return Object(s["b"])("/logout")}},"7f7f":function(t,e,n){var s=n("86cc").f,i=Function.prototype,a=/^\s*function ([^ (]*)/,r="name";r in i||n("9e1e")&&s(i,r,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},c24f:function(t,e,n){"use strict";n.d(e,"j",function(){return i}),n.d(e,"h",function(){return a}),n.d(e,"f",function(){return r}),n.d(e,"c",function(){return o}),n.d(e,"k",function(){return l}),n.d(e,"a",function(){return c}),n.d(e,"i",function(){return u}),n.d(e,"l",function(){return d}),n.d(e,"g",function(){return m}),n.d(e,"e",function(){return p}),n.d(e,"d",function(){return f}),n.d(e,"b",function(){return g}),n.d(e,"n",function(){return h}),n.d(e,"m",function(){return b});var s=n("ead3");function i(){return Object(s["a"])("/user/role/privlist")}function a(t){return Object(s["b"])("/user/role/add",t)}function r(t){return Object(s["a"])("/user/role/list",t)}function o(t){return Object(s["a"])("/user/role/detail",t)}function l(t){return Object(s["b"])("/user/role/update",t)}function c(t){return Object(s["b"])("/user/role/delete",t)}function u(t){return Object(s["b"])("/user/add",t)}function d(t){return Object(s["b"])("/user/update",t)}function m(t){return Object(s["a"])("/user/list",t)}function p(t){return Object(s["a"])("/user/exists",t)}function f(t){return Object(s["a"])("/user/detail",t)}function g(t){return Object(s["b"])("/user/delete",t)}function h(t){return Object(s["b"])("/user/my/setting",t)}function b(t){return Object(s["b"])("/user/my/password",t)}}}]);
//# sourceMappingURL=chunk-bee7248a.03aebf5e.js.map