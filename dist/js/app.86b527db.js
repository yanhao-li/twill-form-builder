(function(e){function t(t){for(var i,o,a=t[0],s=t[1],d=t[2],c=0,u=[];c<a.length;c++)o=a[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);f&&f(t);while(u.length)u.shift()();return l.push.apply(l,d||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],i=!0,o=1;o<n.length;o++){var a=n[o];0!==r[a]&&(i=!1)}i&&(l.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},o={app:0},r={app:0},l=[];function a(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-9fdd653c":"e074a60d"}[e]+".js"}function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-9fdd653c":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var i="css/"+({}[e]||e)+"."+{"chunk-9fdd653c":"3cb696ad"}[e]+".css",r=s.p+i,l=document.getElementsByTagName("link"),a=0;a<l.length;a++){var d=l[a],c=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(c===i||c===r))return t()}var u=document.getElementsByTagName("style");for(a=0;a<u.length;a++){d=u[a],c=d.getAttribute("data-href");if(c===i||c===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var i=t&&t.target&&t.target.src||r,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=i,delete o[e],f.parentNode.removeChild(f),n(l)},f.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var i=r[e];if(0!==i)if(i)t.push(i[2]);else{var l=new Promise((function(t,n){i=r[e]=[t,n]}));t.push(i[2]=l);var d,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=a(e);var u=new Error;d=function(t){c.onerror=c.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",u.name="ChunkLoadError",u.type=i,u.request=o,n[1](u)}r[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:c})}),12e4);c.onerror=c.onload=d,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],c=d.push.bind(d);d.push=t,d=d.slice();for(var u=0;u<d.length;u++)t(d[u]);var f=c;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"26d8":function(e,t,n){},"2d62":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("draggable",{attrs:{list:e.fields,group:"fields"},on:{input:e.onUpdate}},[n("transition-group",{staticClass:"droppable",attrs:{name:"field-list"}},e._l(e.fields,(function(t){return n("Field",{key:t.id,attrs:{data:t},on:{delete:e.deleteField,update:e.updateField}})})),1)],1)},o=[],r=(n("4de4"),n("d81d"),n("d3b7"),n("310e")),l=n.n(r),a={components:{Field:function(){return n.e("chunk-9fdd653c").then(n.bind(null,"c08e"))},draggable:l.a},props:{fields:{type:Array,required:!0}},methods:{onUpdate:function(e){this.$emit("update:fields",e)},deleteField:function(e){this.$emit("update:fields",this.fields.filter((function(t){return t.id!==e})))},updateField:function(e,t){var n=this.fields.map((function(n){return n.id===e?t:n}));this.$emit("update:fields",n)}}},s=a,d=(n("9301"),n("2877")),c=Object(d["a"])(s,i,o,!1,null,"0c287ae0",null);t["a"]=c.exports},"36fa":function(e,t,n){"use strict";var i=n("26d8"),o=n.n(i);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"content"},[e.showSidebar?n("Sidebar"):e._e(),n("Form")],1)],1)},r=[],l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",[i("h1",{staticClass:"brand"},[i("img",{attrs:{alt:"Twill logo",src:n("9b19")}}),i("Label",{staticStyle:{"background-color":"#757575",color:"#fff"},attrs:{text:"Form Builder"}})],1),i("div",{staticClass:"control"},[i("Button",{staticClass:"control-btn",on:{click:e.onClickShare}},[i("Icon",{attrs:{name:"link"}}),e._v(" Share ")],1),i("Button",{staticClass:"control-btn",on:{click:function(t){return e.$store.commit("toggleSidebar")}}},[i("Icon",{attrs:{name:e.showSidebar?"preview":"editor"}}),e._v(" "+e._s(e.showSidebar?"Preview":"Editor")+" ")],1)],1)])},a=[],s=(n("b754"),n("a7c5")),d=n.n(s),c=(n("6fa4"),n("8936")),u=n.n(c),f=(n("0664"),n("be42")),h=n.n(f),p=n("cdae"),m=(n("a15b"),n("d3b7"),n("ac1f"),n("3ca3"),n("841c"),n("ddb0"),n("2b3d"),n("eb11")),b=n.n(m),g=function(e){return b.a.compressToEncodedURIComponent(JSON.stringify(e))},w=function(e){return b.a.decompressFromEncodedURIComponent(e)},v=function(e){history.pushState("","","?code="+e)},V=function(){return window.location.href},C=function(){return[location.protocol,"//",location.host,location.pathname].join("")},H=function(e){var t=new URLSearchParams(window.location.search);return t.get(e)},_={components:{Button:h.a,Icon:p["a"],Label:u.a},computed:{showSidebar:function(){return this.$store.state.showSidebar}},methods:{onClickShare:function(){navigator.clipboard.writeText(V()),d()({message:"Link copied to clipboard"})}}},y=_,x=(n("b94f"),n("2877")),M=Object(x["a"])(y,l,a,!1,null,"4db6943c",null),S=M.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"form"}},[n("FormName"),n("Droppable",{staticClass:"form__content",attrs:{fields:e.fields},on:{"update:fields":function(t){e.fields=t}}})],1)},k=[],F=n("2d62"),Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form__name__container"},[n("div",{staticClass:"form__name__input",on:{mouseenter:e.onMouseEnter,mouseleave:e.onMouseLeave}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.formName,expression:"formName"}],class:{active:e.active},domProps:{value:e.formName},on:{focus:e.onFocus,blur:e.onBlur,input:function(t){t.target.composing||(e.formName=t.target.value)}}}),n("span",[e._v(e._s(e.formName))])]),n("Icon",{attrs:{name:"edit"}})],1)},N=[],O={components:{Icon:p["a"]},data:function(){return{active:!1,focusing:!1}},computed:{formName:{get:function(){return this.$store.state.formName},set:function(e){return this.$store.commit("updateFormName",e)}}},methods:{onFocus:function(){this.active=!0,this.focusing=!0},onBlur:function(){this.active=!1,this.focusing=!1},onMouseEnter:function(){this.active=!0},onMouseLeave:function(){this.active=this.focusing}}},$=O,B=(n("87a4"),Object(x["a"])($,Z,N,!1,null,"2c0e42f7",null)),j=B.exports,E={components:{Droppable:F["a"],FormName:j},computed:{fields:{get:function(){return this.$store.state.fields},set:function(e){this.$store.commit("updateFields",e)}},form:function(){var e=function(e){var t=e.formName,n=e.fields;return{formName:t,fields:n}};return e(this.$store.state)}},watch:{form:function(e){v(g(e))}},methods:{}},P=E,T=(n("9ee3"),Object(x["a"])(P,L,k,!1,null,"42bada14",null)),I=T.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"sidebar"}},[n("transition",{attrs:{name:"setting__list"}},[e.fieldSettingMode?n("SettingList",{key:"setting-list"}):e._e()],1),n("transition",{attrs:{name:"available__fields__list"}},[e.fieldSettingMode?e._e():n("AvailableFieldsList",{key:"available-fields-list"})],1)],1)},D=[],R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fields__list__container"},[n("ul",[n("draggable",{attrs:{sort:!1,clone:e.cloneField,group:{name:"fields",pull:"clone",put:!1}},model:{value:e.availableFields,callback:function(t){e.availableFields=t},expression:"availableFields"}},e._l(e.availableFields,(function(t){return n("li",{key:t.default.field,staticClass:"available-field-item"},[n("div",{staticClass:"icon-container"},[n("Icon",{attrs:{name:t.icon}})],1),n("span",{staticClass:"field__label"},[e._v(e._s(t.label))])])})),0)],1),n("SidebarFooter",{attrs:{dark:!0,"button-one-label":"New Form","button-two-label":"Reset"},on:{"button-one-click":e.onNewFormClick,"button-two-click":e.onResetClick}})],1)},q=[],J=n("5530"),U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"sidebar__footer"},[n("Button",{style:{flex:"1",marginRight:"12px",backgroundColor:e.dark?"transparent":"#269e41",border:e.dark?"1px solid rgba(255, 255, 255, 0.2)":"none"},attrs:{type:"primary"},on:{click:function(t){return e.$emit("button-one-click")}}},[e._v(" "+e._s(e.buttonOneLabel)+" ")]),n("Button",{style:{flex:"1",marginRight:"12px",backgroundColor:e.dark?"transparent":"#393939",border:e.dark?"1px solid rgba(255, 255, 255, 0.2)":"none"},attrs:{type:"secondary"},on:{click:function(t){return e.$emit("button-two-click")}}},[e._v(" "+e._s(e.buttonTwoLabel)+" ")])],1)},W=[],Y={components:{Button:h.a},props:{buttonOneLabel:{type:String,required:!0},buttonTwoLabel:{type:String,required:!0},dark:{type:Boolean,default:!1}}},G=Y,K=(n("fd46"),Object(x["a"])(G,U,W,!1,null,"310e6e08",null)),z=K.exports,Q=n("310e"),X=n.n(Q),ee=(n("7db0"),[{label:"Field set",icon:"field-set",default:{field:"container",label:"Content",children:[]},settings:[{type:"input",label:"Label",model:"label"}]},{label:"Input",icon:"input",default:{field:"input",label:"Text",placeholder:"Enter text here",note:"",name:"",maxlength:""},settings:[{type:"input",label:"Label",model:"label"},{type:"input",label:"Placeholder",model:"placeholder"},{type:"input",label:"Note",model:"note"},{type:"input",label:"Name",model:"name"},{type:"input",label:"Character count",model:"maxlength"}]},{label:"WYSIWYG",icon:"wysiwyg",default:{field:"wysiwyg",label:"Content"}},{label:"Dropdown",icon:"dropdown",default:{field:"dropdown",label:"Content"}},{label:"Date Picker",icon:"date-picker",default:{field:"date-picker",label:"Content"}},{label:"Checkbox",icon:"checkbox",default:{field:"checkbox",label:"Content"}},{label:"Radio",icon:"radio",default:{field:"radio",label:"Content"}},{label:"Selector",icon:"selector",default:{field:"select",label:"Content"}},{label:"Browser",icon:"browser",default:{field:"browser",label:"Content"}},{label:"Repeater",icon:"repeater",default:{field:"repeater",label:"Content"}},{label:"Media Library",icon:"media-library",default:{field:"media-library",label:"Content"}},{label:"File Library",icon:"file-library",default:{field:"file-library",label:"Content"}}]),te=function(e){return ee.find((function(t){return t.default.field===e}))},ne=ee,ie=n("8dee"),oe=n.n(ie),re={components:{Icon:p["a"],draggable:X.a,SidebarFooter:z},data:function(){return{availableFields:ne}},methods:{cloneField:function(e){return JSON.parse(JSON.stringify(Object(J["a"])({id:oe.a.generate()},e.default)))},onNewFormClick:function(){window.open(C(),"_blank")},onResetClick:function(){this.$store.commit("updateFields",[])}}},le=re,ae=(n("e21d"),Object(x["a"])(le,R,q,!1,null,"111578ca",null)),se=ae.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"setting__list"},[n("div",{staticClass:"setting__list__content"},[n("h1",{staticClass:"header"},[e._v(" "+e._s(e.fieldPrototype?e.fieldPrototype.label:"")+" properties ")]),e._l(e.fieldPrototype.settings,(function(t,i){return n("SettingField",{key:i,attrs:{field:e.field,setting:t}})}))],2),n("SidebarFooter",{attrs:{"button-one-label":"Done","button-two-label":"Cancel"},on:{"button-one-click":e.exitFieldSettingMode,"button-two-click":e.revertChanges}})],1)},ce=[],ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"setting__field"},["input"===e.type?[n("FormItem",{attrs:{label:e.label}},[n("Input",{model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)]:e._e()],2)},fe=[],he=n("ade3"),pe=(n("03da"),n("4523")),me=n.n(pe),be=(n("263d"),n("cf4e")),ge=n.n(be),we={components:{FormItem:ge.a,Input:me.a},props:{field:{type:Object,required:!0},setting:{type:Object,required:!0}},computed:{type:function(){return this.setting.type},label:function(){return this.setting.label},model:function(){return this.setting.model},value:{get:function(){return this.field[this.model]},set:function(e){this.$store.commit("setFieldSettingMode",Object(J["a"])(Object(J["a"])({},this.field),{},Object(he["a"])({},this.model,e)))}}}},ve=we,Ve=(n("b715"),Object(x["a"])(ve,ue,fe,!1,null,"513e7c86",null)),Ce=Ve.exports,He={components:{SettingField:Ce,SidebarFooter:z},data:function(){return{originalField:this.$store.state.fieldSettingMode}},methods:{exitFieldSettingMode:function(){this.$store.commit("setFieldSettingMode",!1)},revertChanges:function(){this.$store.commit("setFieldSettingMode",this.originalField),this.exitFieldSettingMode()}},computed:{fieldSettingMode:function(){return this.$store.state.fieldSettingMode},fieldPrototype:function(){return te(this.fieldSettingMode.field)},field:function(){return this.fieldSettingMode},fieldSettings:function(){return this.field.settings}}},_e=He,ye=(n("36fa"),Object(x["a"])(_e,de,ce,!1,null,"0c988c75",null)),xe=ye.exports,Me={components:{AvailableFieldsList:se,SettingList:xe},computed:{fieldSettingMode:function(){return this.$store.state.fieldSettingMode}}},Se=Me,Le=(n("a233"),Object(x["a"])(Se,A,D,!1,null,"6a509c2c",null)),ke=Le.exports,Fe={name:"App",components:{Header:S,Form:I,Sidebar:ke},computed:{formName:function(){return this.$store.state.formName},showSidebar:function(){return this.$store.state.showSidebar}},watch:{formName:function(){this.updatePageTitle(this.formName)}},mounted:function(){this.updatePageTitle(this.formName);var e=H("code");if(e){var t=JSON.parse(w(e)),n=t.formName,i=t.fields;this.$store.commit("updateFormName",n),this.$store.commit("updateFields",i)}},methods:{updatePageTitle:function(e){document.title=e+" - Twill Form Builder"}}},Ze=Fe,Ne=(n("5c0b"),Object(x["a"])(Ze,o,r,!1,null,null,null)),Oe=Ne.exports,$e=(n("d81d"),n("2f62"));i["a"].use($e["a"]);var Be=new $e["a"].Store({state:{formName:"Form Name",fields:[],fieldSettingMode:!1,showSidebar:!0},mutations:{updateFormName:function(e,t){e.formName=t},setFieldSettingMode:function(e,t){!1!==t&&this.commit("updateField",t),e.showSidebar=!0,e.fieldSettingMode=t},updateFields:function(e,t){e.fields=t},updateField:function(e,t){e.fields=je(e.fields,t)},toggleSidebar:function(e){e.showSidebar=!e.showSidebar}}}),je=function e(t,n){return t.map((function(t){return t.id===n.id?n:(Object.prototype.hasOwnProperty.call(t,"children")&&(t.children=e(t.children,n)),t)}))};i["a"].config.productionTip=!1,new i["a"]({store:Be,render:function(e){return e(Oe)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var i=n("9c0c"),o=n.n(i);o.a},"661b":function(e,t,n){},"80e7":function(e,t,n){},"87a4":function(e,t,n){"use strict";var i=n("b63d"),o=n.n(i);o.a},"92c4":function(e,t,n){},9301:function(e,t,n){"use strict";var i=n("d29f"),o=n.n(i);o.a},9590:function(e,t,n){},"9b19":function(e,t,n){e.exports=n.p+"img/logo.1c5262b7.svg"},"9c0c":function(e,t,n){},"9ee3":function(e,t,n){"use strict";var i=n("d62a"),o=n.n(i);o.a},a233:function(e,t,n){"use strict";var i=n("9590"),o=n.n(i);o.a},b3c6:function(e,t,n){"use strict";var i=n("b729"),o=n.n(i);o.a},b63d:function(e,t,n){},b715:function(e,t,n){"use strict";var i=n("661b"),o=n.n(i);o.a},b729:function(e,t,n){},b94f:function(e,t,n){"use strict";var i=n("bb62"),o=n.n(i);o.a},bb62:function(e,t,n){},cdae:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icon"},["field-set"===e.name?[n("svg",{attrs:{width:"19",height:"17",viewBox:"0 0 19 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1 1H18V4H1V1ZM0 5V4V1V0H1H18H19V1V4V5V16V17H18H1H0V16V5ZM18 5V16H1V5H18Z",fill:"white"}})])]:"input"===e.name?[n("svg",{attrs:{width:"9",height:"16",viewBox:"0 0 9 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M4.5 0L4.5 16M9 15.5L0 15.5M9 0.5L0 0.499999",stroke:"white"}})])]:"wysiwyg"===e.name?[n("svg",{attrs:{width:"15",height:"16",viewBox:"0 0 15 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M0.0231214 0H14.2775L14.3006 4.77457H13.6185C13.395 3.07129 12.7553 1.91908 11.6994 1.31792C11.106 0.986513 10.2197 0.805395 9.04046 0.774566V13.237C9.04046 14.1079 9.19075 14.6859 9.49133 14.9711C9.79961 15.2563 10.4355 15.3988 11.3988 15.3988V16H2.95954V15.3988C3.88439 15.3988 4.49711 15.2563 4.79769 14.9711C5.10597 14.6782 5.26012 14.1002 5.26012 13.237V0.774566C4.10405 0.805395 3.21773 0.986513 2.60116 1.31792C1.46821 1.93449 0.828516 3.08671 0.682081 4.77457H0L0.0231214 0Z",fill:"white"}})])]:"dropdown"===e.name?[n("svg",{attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1 0.5H0.5V1V17V17.5H1H17H17.5V17V1V0.5H17H1ZM1.5 16.5V1.5H16.5V16.5H1.5ZM13.6761 7.5L9.08803 12.088L4.5 7.5H13.6761Z",fill:"white"}})])]:"date-picker"===e.name?[n("svg",{attrs:{width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.5 7V4H1.5V18H18.5V4H14.5V7H13.5V4H6.5V7H5.5ZM13.5 3H6.5V0H5.5V3H1H0.5V3.5V18.5V19H1H19H19.5V18.5V3.5V3H19H14.5V0H13.5V3Z",fill:"white"}})])]:"checkbox"===e.name?[n("svg",{attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1 0.5H0.5V1V17V17.5H1H17H17.5V17V1V0.5H17H1ZM1.5 16.5V1.5H16.5V16.5H1.5ZM8.03033 12.0303L14.0303 6.03033L12.9697 4.96967L7.5 10.4393L5.53033 8.46967L4.46967 9.53033L6.96967 12.0303L7.5 12.5607L8.03033 12.0303Z",fill:"white"}})])]:"radio"===e.name?[n("svg",{attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9ZM9 0.5C4.30558 0.5 0.5 4.30558 0.5 9C0.5 13.6944 4.30558 17.5 9 17.5C13.6944 17.5 17.5 13.6944 17.5 9C17.5 4.30558 13.6944 0.5 9 0.5ZM9 13C11.2091 13 13 11.2091 13 9C13 6.79086 11.2091 5 9 5C6.79086 5 5 6.79086 5 9C5 11.2091 6.79086 13 9 13Z",fill:"white"}})])]:"selector"===e.name?[n("svg",{attrs:{width:"19",height:"17",viewBox:"0 0 19 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1 1H18V4H1V1ZM0 5V4V1V0H1H18H19V1V4V5V8V9V12V13V16V17H18H1H0V16V13V12V9V8V5ZM1 8V5H18V8H1ZM1 9V12H18V9H1ZM18 13H1V16H18V13Z",fill:"white"}})])]:"browser"===e.name?[n("svg",{attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.5 7.5C1.5 4.18629 4.18629 1.5 7.5 1.5C10.8137 1.5 13.5 4.18629 13.5 7.5C13.5 10.8137 10.8137 13.5 7.5 13.5C4.18629 13.5 1.5 10.8137 1.5 7.5ZM7.5 0.5C3.63401 0.5 0.5 3.63401 0.5 7.5C0.5 11.366 3.63401 14.5 7.5 14.5C9.25304 14.5 10.8556 13.8556 12.0836 12.7907L16.6464 17.3536L17.3536 16.6464L12.7907 12.0836C13.8556 10.8556 14.5 9.25304 14.5 7.5C14.5 3.63401 11.366 0.5 7.5 0.5Z",fill:"white"}})])]:"repeater"===e.name?[n("svg",{attrs:{width:"21",height:"15",viewBox:"0 0 21 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1 0.5H0.5V1V11V11.5H1H17H17.5V11V1V0.5H17H1ZM1.5 10.5V1.5H16.5V10.5H1.5ZM19.5 4V13.5H4V14.5H20H20.5V14V4H19.5Z",fill:"white"}})])]:"media-library"===e.name?[n("svg",{attrs:{width:"20",height:"13",viewBox:"0 0 20 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.49095 4.98191C6.86667 4.98191 7.98191 3.86667 7.98191 2.49095C7.98191 1.11524 6.86667 0 5.49095 0C4.11524 0 3 1.11524 3 2.49095C3 3.86667 4.11524 4.98191 5.49095 4.98191ZM12.1675 2.4808L19.0957 12.2308L0.904358 12.2285L5.13301 6.2621L7.67076 9.28502L12.1675 2.4808Z",fill:"white"}})])]:"file-library"===e.name?[n("svg",{attrs:{width:"14",height:"18",viewBox:"0 0 14 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1 0.5H13C13.2761 0.5 13.5 0.723858 13.5 1V12.1727L8.34366 17.5H1C0.723858 17.5 0.5 17.2761 0.5 17V1C0.5 0.723858 0.723858 0.5 1 0.5Z",stroke:"white"}})])]:"setting"===e.name?[n("svg",{attrs:{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M14 5.60034H10.3795L12.9387 3.04028L10.9598 1.06128L8.39966 3.62048V0H5.6004V3.62048L3.04028 1.06128L1.05952 3.04028L3.61877 5.60034H0V8.39966H3.62048L1.06133 10.9597L3.04028 12.9387L5.6004 10.3795V14H8.39966V10.3812L10.9598 12.9404L12.9387 10.9597L10.3795 8.39966H14V5.60034ZM7 9.10034C5.84045 9.10034 4.89966 8.1604 4.89966 7C4.89966 5.83955 5.84045 4.89966 7 4.89966C8.15955 4.89966 9.1004 5.83955 9.1004 7C9.1004 8.1604 8.15955 9.10034 7 9.10034Z",fill:"#6A26D9"}})])]:"trash"===e.name?[n("svg",{attrs:{width:"12",height:"14",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.51515 0H9.48485V3.05455H12V4.58182H0V3.05455H2.51515V0ZM4.15152 3.05455H7.84848V1.52727H4.15152V3.05455Z",fill:"#6A26D9"}}),n("path",{attrs:{d:"M2.18182 14C1.57933 14 1.09091 13.5441 1.09091 12.9818V5.85455H10.9091V12.9818C10.9091 13.5441 10.4207 14 9.81818 14H2.18182Z",fill:"#6A26D9"}})])]:"link"===e.name?[n("svg",{attrs:{width:"20",height:"10",viewBox:"0 0 20 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M15 0H12V2H15C16.6542 2 18 3.3457 18 5C18 6.6543 16.6542 8 15 8H12V10H15C17.75 10 20 7.75 20 5C20 2.25 17.75 0 15 0Z",fill:"white"}}),n("path",{attrs:{d:"M2 5C2 3.3457 3.34576 2 5 2H8V0H5C2.25 0 0 2.25 0 5C0 7.75 2.25 10 5 10H8V8H5C3.34576 8 2 6.6543 2 5Z",fill:"white"}}),n("path",{attrs:{d:"M14 4H6V6H14V4Z",fill:"white"}})])]:"edit"===e.name?[n("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M0 9.52118V12H2.45333L0 9.52118Z",fill:"#757575"}}),n("path",{attrs:{d:"M12 2.33704L3.663 10.7606L1.34998 8.42356L9.687 0L12 2.33704Z",fill:"#757575"}})])]:"preview"===e.name?[n("svg",{attrs:{width:"18",height:"12",viewBox:"0 0 18 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 6.00508C0 6.00508 3.65053 0 8.74203 0C13.9138 0 18 6.00508 18 6.00508C18 6.00508 13.9328 12 8.74203 12C3.00948 12 0 6.00508 0 6.00508ZM12.9345 6.00679C12.9345 8.23692 11.1729 10.0448 9.00002 10.0448C6.8271 10.0448 5.0656 8.23692 5.0656 6.00679C5.0656 3.77667 6.8271 1.96879 9.00002 1.96879C11.1729 1.96879 12.9345 3.77667 12.9345 6.00679Z",fill:"white"}}),n("path",{attrs:{d:"M8.95807 8.328C10.2075 8.328 11.2204 7.28847 11.2204 6.00614C11.2204 4.72382 10.2075 3.68429 8.95807 3.68429C7.70864 3.68429 6.69578 4.72382 6.69578 6.00614C6.69578 7.28847 7.70864 8.328 8.95807 8.328Z",fill:"white"}})])]:"editor"===e.name?[n("svg",{attrs:{width:"14",height:"13",viewBox:"0 0 14 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M14 9H0V10H14V9Z",fill:"white"}}),n("path",{attrs:{d:"M14 12H0V13H14V12Z",fill:"white"}}),n("path",{attrs:{d:"M14 0H0V7H14V0Z",fill:"white"}})])]:[n("svg",{attrs:{width:"14",height:"18",viewBox:"0 0 14 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1 0.5H13C13.2761 0.5 13.5 0.723858 13.5 1V12.1727L8.34366 17.5H1C0.723858 17.5 0.5 17.2761 0.5 17V1C0.5 0.723858 0.723858 0.5 1 0.5Z",stroke:"white"}})])]],2)},o=[],r={props:{name:{type:String,required:!0}}},l=r,a=(n("b3c6"),n("2877")),s=Object(a["a"])(l,i,o,!1,null,null,null);t["a"]=s.exports},d29f:function(e,t,n){},d62a:function(e,t,n){},e21d:function(e,t,n){"use strict";var i=n("92c4"),o=n.n(i);o.a},fd46:function(e,t,n){"use strict";var i=n("80e7"),o=n.n(i);o.a}});
//# sourceMappingURL=app.86b527db.js.map