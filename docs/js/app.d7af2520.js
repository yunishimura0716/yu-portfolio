(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/yu-portfolio/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1dbf":function(t,e,a){"use strict";a("3427")},3427:function(t,e,a){},3619:function(t,e,a){},"44ec":function(t,e,a){t.exports=a.p+"img/profile-header.ce550235.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-view",{attrs:{to:"/home"}})],1)},r=[],s=a("2877"),o={},l=Object(s["a"])(o,i,r,!1,null,null,null),c=l.exports,u=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[a("ToolBar"),a("div",{staticClass:"wrapper",attrs:{id:"yunishimura"}},[a("parallax",{staticClass:"page-header header-filter",style:t.headerStyle},[a("div",{staticClass:"profile md-layout"},[a("div",{staticClass:"md-layout-item ml-auto",attrs:{id:"profile-layout"}},[a("a",{attrs:{href:"#"}},[a("img",{staticClass:"img-raised rounded",attrs:{alt:"Raised Image",src:t.faceImage}})]),a("div",{attrs:{id:"profile-text"},on:{scroll:t.scrollProfile}},[a("div",{attrs:{id:"scroll-item"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.visible1,expression:"visible1"}],attrs:{id:"profile-text-name"},on:{click:t.gotoIntro}},[a("h1",[t._v("Yu Nishimura")]),a("h2",{directives:[{name:"show",rawName:"v-show",value:t.visible1,expression:"visible1"}]},[t._v("Who am I ...?")]),a("div",{staticClass:"cp_arrows"},[a("div",{staticClass:"cp_arrow cp_arrowfirst"}),a("div",{staticClass:"cp_arrow cp_arrowsecond"})])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.visible2,expression:"visible2"}],attrs:{id:"profile-text-intro"},on:{click:t.gotoName}},[a("div",{staticClass:"cp_arrows_back"},[a("div",{staticClass:"cp_arrow_back cp_arrowfirst"}),a("div",{staticClass:"cp_arrow_back cp_arrowsecond"})]),a("p",[t._v("A Third-year Computer Science student at UBC.")]),a("p",[t._v("Interested in Software Engineering and Cloud Operation.")])])])])])])])],1)],1)},p=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-toolbar",{staticClass:"md-medium md-absolute",attrs:{id:"toolbar","md-elevation":"3"}},[a("h3",{staticClass:"md-title"},[t._v(" Yu Portfolio ")]),a("div",{staticClass:"md-collapse"},[a("div",{staticClass:"md-collapse-wrapper"},t._l(t.buttonContents,(function(e){return a("md-list-item",{key:e},[a("p",[t._v(t._s(e))])])})),1)])])},h=[],v={name:"ToolBarVue",data:function(){return{buttonContents:["About","My Career","Education","Projects"]}},methods:{buttonClass:function(t){return"toolbar-button"+(t+1)}}},m=v,g=(a("1dbf"),a("eeb4"),Object(s["a"])(m,f,h,!1,null,"f0f2dbe8",null)),b=g.exports,y=a("44ec"),_=a.n(y),w=a("b55d"),C=a.n(w),P={components:{ToolBar:b},data:function(){return{backImage:_.a,faceImage:C.a,visible1:!0,visible2:!1}},computed:{headerStyle:function(){return{backgroundImage:"url(".concat(this.backImage,")")}}},methods:{scrollProfile:function(t){console.log(t.target.scrollTop),this.visible1Scroll(t.target.scrollTop),this.visible2Scroll(t.target.scrollTop)},visible1Scroll:function(t){this.visible1?t>250&&(this.visible1=!this.visible1):this.visible1=t<150},visible2Scroll:function(t){this.visible2?t<550&&(this.visible2=!this.visible2):this.visible2=650<t},gotoName:function(){this.scrollProfile({target:{scrollTop:0}})},gotoIntro:function(){this.scrollProfile({target:{scrollTop:750}})}}},x=P,T=(a("6ef5"),Object(s["a"])(x,d,p,!1,null,"aeb0c1f2",null)),O=T.exports;n["default"].use(u["a"]);var k=new u["a"]({mode:"history",routes:[{path:"/home",component:O},{path:"*",redirect:"/home"}]}),S=(a("b0c0"),a("43f9")),j=a.n(S),N=(a("51de"),a("60b6"),a("e094"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeDropDown,expression:"closeDropDown"}],class:[{open:t.isOpen},{dropdown:"down"===t.direction},{dropup:"up"===t.direction}],on:{click:t.toggleDropDown}},[t._t("title",(function(){return[a("a",{staticClass:"dropdown-toggle",attrs:{"data-toggle":"dropdown",href:"javascript:void(0)"}},[a("i",{class:t.icon}),a("p",[t._v(t._s(t.title))])])]})),t._t("default")],2)}),$=[],D={name:"DropDown",props:{direction:{type:String,default:"down"},multiLevel:{type:Boolean,default:!1},title:String,icon:String},data:function(){return{isOpen:!1}},methods:{toggleDropDown:function(){this.multiLevel?this.isOpen=!0:this.isOpen=!this.isOpen},closeDropDown:function(){this.isOpen=!1}}},B=D,A=Object(s["a"])(B,N,$,!1,null,null,null),E=A.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:t.styles},[t._t("default")],2)},M=[];function L(t,e,a){var n;return function(){var i=this,r=arguments;clearTimeout(n),n=setTimeout((function(){n=null,a||t.apply(i,r)}),e),a&&!n&&t.apply(i,r)}}var H={name:"Parallax",data:function(){return{styles:{},debounceTimeout:6}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){if(window.innerWidth>991){var e=this.scrollY;t.checkForParallax(e)}}))},methods:{handleScroll:function(t){var e=t/3;this.styles={transform:"translate3d(0, ".concat(e,"px,0)")}},checkForParallax:function(t){var e=this,a=L((function(){return e.handleScroll(t)}),this.debounceTimeout);a()}}},U=H,Y=Object(s["a"])(U,I,M,!1,null,null,null),F=Y.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"pagination",class:t.paginationClass},[a("li",{staticClass:"page-item prev-page",class:{disabled:1===t.value,"no-arrows":t.noArrows}},[a("a",{staticClass:"page-link",attrs:{"aria-label":"Previous"},on:{click:t.prevPage}},[t.withText?[t._v("Prev")]:a("i",{staticClass:"fas fa-angle-double-left"})],2)]),t._l(t.range(t.minPage,t.maxPage),(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.value===e}},[a("a",{staticClass:"page-link",on:{click:function(a){return t.changePage(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item page-pre next-page",class:{disabled:t.value===t.totalPages,"no-arrows":t.noArrows}},[a("a",{staticClass:"page-link",attrs:{"aria-label":"Next"},on:{click:t.nextPage}},[t.withText?[t._v("Next")]:a("i",{staticClass:"fas fa-angle-double-right"})],2)])],2)},W=[],R=(a("caad"),a("a9e3"),{name:"Pagination",props:{type:{type:String,default:"primary",validator:function(t){return["default","primary","danger","success","warning","info","rose"].includes(t)}},withText:Boolean,noArrows:Boolean,pageCount:{type:Number,default:0},perPage:{type:Number,default:10},total:{type:Number,default:0},value:{type:Number,default:1}},data:function(){return{defaultPagesToDisplay:5}},computed:{paginationClass:function(){return"pagination-".concat(this.type)},totalPages:function(){return this.pageCount>0?this.pageCount:this.total>0?Math.ceil(this.total/this.perPage):1},pagesToDisplay:function(){return this.totalPages>0&&this.totalPages<this.defaultPagesToDisplay?this.totalPages:this.defaultPagesToDisplay},minPage:function(){if(this.value>=this.pagesToDisplay){var t=Math.floor(this.pagesToDisplay/2),e=t+this.value;return e>this.totalPages?this.totalPages-this.pagesToDisplay+1:this.value-t}return 1},maxPage:function(){if(this.value>=this.pagesToDisplay){var t=Math.floor(this.pagesToDisplay/2),e=t+this.value;return e<this.totalPages?e:this.totalPages}return this.pagesToDisplay}},watch:{perPage:function(){this.$emit("input",1)},total:function(){this.$emit("input",1)}},methods:{range:function(t,e){for(var a=[],n=t;n<=e;n++)a.push(n);return a},changePage:function(t){this.$emit("input",t)},nextPage:function(){this.value<this.totalPages&&this.$emit("input",this.value+1)},prevPage:function(){this.value>1&&this.$emit("input",this.value-1)}}}),V=R,q=Object(s["a"])(V,J,W,!1,null,null,null),z=(q.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slider",class:["slider-"+t.type],attrs:{disabled:t.disabled}})}),G=[],K=a("5530"),Q=a("f528"),X=a.n(Q),Z={name:"Slider",props:{value:[String,Array,Number],disabled:Boolean,start:{type:[Number,Array],default:0},connect:{type:[Boolean,Array],default:function(){return[!0,!1]}},range:{type:Object,default:function(){return{min:0,max:100}}},type:{type:String,default:""},options:{type:Object,default:function(){return{}}}},data:function(){return{slider:null}},watch:{value:function(t,e){var a=this.$el.noUiSlider,n=a.get();t!==e&&n!==t&&(Array.isArray(n)&&Array.isArray(t)?e.length===t.length&&e.every((function(e,a){return e===t[a]}))&&a.set(t):a.set(t))}},mounted:function(){this.createSlider()},methods:{createSlider:function(){var t=this;X.a.create(this.$el,Object(K["a"])({start:this.value||this.start,connect:this.connect,range:this.range},this.options));var e=this.$el.noUiSlider;e.on("slide",(function(){var a=e.get();a!==t.value&&t.$emit("input",a)}))}}},tt=Z,et=Object(s["a"])(tt,z,G,!1,null,null,null),at=(et.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.tag,{tag:"component",staticClass:"badge",class:"badge-"+t.type},[t._t("default")],2)}),nt=[],it={name:"Badge",props:{tag:{type:String,default:"span"},type:{type:String,default:"default",validator:function(t){var e=["primary","info","success","warning","danger","rose","default"];return-1!==e.indexOf(t)}}}},rt=it,st=Object(s["a"])(rt,at,nt,!1,null,null,null),ot=(st.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-card",{staticClass:"md-card-nav-tabs",class:{"no-label":t.noLabel,"md-card-plain":t.tabsPlain}},[a("md-card-content",[t._t("content")],2)],1)}),lt=[],ct={name:"NavTabsCard",props:{noLabel:Boolean,tabsPlain:Boolean}},ut=ct,dt=Object(s["a"])(ut,ot,lt,!1,null,null,null),pt=(dt.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-card",{staticClass:"md-card-login",class:{"md-card-hidden":t.cardHidden}},[a("md-card-header",{class:t.getClass(t.headerColor)},[t._t("title"),a("div",{staticClass:"social-line"},[t._t("buttons")],2)],2),a("md-card-content",[t._t("description"),t._t("inputs")],2),a("md-card-actions",[t._t("footer")],2)],1)}),ft=[],ht={name:"LoginCard",props:{headerColor:{type:String,default:""}},data:function(){return{cardHidden:!0}},beforeMount:function(){setTimeout(this.showCard,400)},methods:{showCard:function(){this.cardHidden=!1},getClass:function(t){return"md-card-header-"+t}}},vt=ht,mt=Object(s["a"])(vt,pt,ft,!1,null,null,null),gt=(mt.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-card",{staticClass:"md-card-tabs",class:[{"flex-column":t.flexColumn},{"nav-pills-icons":t.navPillsIcons},{"md-card-plain":t.plain}]},[a("md-card-header",{attrs:{slot:"header-title"},slot:"header-title"}),a("md-card-content",[a("md-list",{staticClass:"nav-tabs"},t._l(t.tabName,(function(e,n){var i;return a("md-list-item",{key:e,class:[{active:t.isActivePanel(t.tabName[n])},(i={},i[t.getColorButton(t.colorButton)]=t.isActivePanel(t.tabName[n]),i)],on:{click:function(e){return t.switchPanel(t.tabName[n])}}},[t._v(" "+t._s(t.tabName[n])+" "),t.navPillsIcons?a("md-icon",[t._v(" "+t._s(t.tabIcon[n])+" ")]):t._e()],1)})),1),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("div",{staticClass:"tab-content"},t._l(t.activeTab,(function(e,n){return a("div",{key:e,class:t.getTabContent(n+1)},[t._t(t.getTabContent(n+1),(function(){return[t._v(" This is the default text! ")]}))],2)})),0)])],1)],1)}),bt=[],yt=(a("4de4"),{props:{flexColumn:Boolean,navPillsIcons:Boolean,plain:Boolean,tabName:Array,tabIcon:Array,colorButton:{type:String,default:""}},data:function(){return{activePanel:this.tabName[0]}},computed:{activeTab:function(){var t=this;return this.tabName.filter((function(e){return t.isActivePanel(e)}))}},methods:{switchPanel:function(t){this.activePanel=t},isActivePanel:function(t){return this.activePanel==t},getColorButton:function(t){return"md-"+t},getTabContent:function(t){return"tab-pane-"+t}}}),_t=yt,wt=Object(s["a"])(_t,gt,bt,!1,null,null,null),Ct=(wt.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeModal,expression:"closeModal"}],staticClass:"modal-container"},[a("div",{staticClass:"modal-header"},[t._t("header")],2),a("div",{staticClass:"modal-body text-center"},[t._t("body")],2),a("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])])])}),Pt=[],xt={name:"Modal",methods:{closeModal:function(){this.$emit("close")}}},Tt=xt,Ot=(a("ee5d"),Object(s["a"])(Tt,Ct,Pt,!1,null,null,null)),kt=(Ot.exports,a("e37d")),St={install:function(t){t.use(j.a),t.component("drop-down",E),t.component(F.name,F),t.component("v-popover",kt["a"])}},jt=St;n["default"].config.productionTip=!1,n["default"].use(jt),new n["default"]({router:k,render:function(t){return t(c)}}).$mount("#app")},"60b6":function(t,e,a){},"6ef5":function(t,e,a){"use strict";a("fac0")},"809e":function(t,e,a){},b55d:function(t,e,a){t.exports=a.p+"img/profile-face.aca58ddb.jpg"},ee5d:function(t,e,a){"use strict";a("809e")},eeb4:function(t,e,a){"use strict";a("3619")},fac0:function(t,e,a){}});
//# sourceMappingURL=app.d7af2520.js.map