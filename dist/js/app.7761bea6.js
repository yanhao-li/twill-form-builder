(function(e){function t(t){for(var i,l,o=t[0],s=t[1],d=t[2],c=0,u=[];c<o.length;c++)l=o[c],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&u.push(r[l][0]),r[l]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);f&&f(t);while(u.length)u.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,l=1;l<n.length;l++){var o=n[l];0!==r[o]&&(i=!1)}i&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},l={app:0},r={app:0},a=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-338c2239":"ff0b94a7"}[e]+".js"}function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-338c2239":1};l[e]?t.push(l[e]):0!==l[e]&&n[e]&&t.push(l[e]=new Promise((function(t,n){for(var i="css/"+({}[e]||e)+"."+{"chunk-338c2239":"45b0203c"}[e]+".css",r=s.p+i,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var d=a[o],c=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(c===i||c===r))return t()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){d=u[o],c=d.getAttribute("data-href");if(c===i||c===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var i=t&&t.target&&t.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=i,delete l[e],f.parentNode.removeChild(f),n(a)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){l[e]=0})));var i=r[e];if(0!==i)if(i)t.push(i[2]);else{var a=new Promise((function(t,n){i=r[e]=[t,n]}));t.push(i[2]=a);var d,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(e);var u=new Error;d=function(t){c.onerror=c.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+l+")",u.name="ChunkLoadError",u.type=i,u.request=l,n[1](u)}r[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:c})}),12e4);c.onerror=c.onload=d,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],c=d.push.bind(d);d.push=t,d=d.slice();for(var u=0;u<d.length;u++)t(d[u]);var f=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2ce2":function(e,t,n){"use strict";var i=n("b5ad"),l=n.n(i);l.a},"2d62":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("draggable",{staticClass:"droppable",attrs:{value:e.fields,group:"fields"},on:{input:e.onUpdate}},[n("transition-group",{staticClass:"droppable",attrs:{name:"field-list"}},e._l(e.fields,(function(t){return n("Field",{key:t.id,attrs:{data:t},on:{delete:e.deleteField,update:e.updateField}})})),1)],1)},l=[],r=(n("4de4"),n("d81d"),n("d3b7"),n("310e")),a=n.n(r),o={components:{Field:function(){return n.e("chunk-338c2239").then(n.bind(null,"c08e"))},draggable:a.a},props:{fields:{type:Array,required:!0}},methods:{onUpdate:function(e){this.$emit("update:fields",e)},deleteField:function(e){this.$emit("update:fields",this.fields.filter((function(t){return t.id!==e})))},updateField:function(e,t){var n=this.fields.map((function(n){return n.id===e?t:n}));this.$emit("update:fields",n)}}},s=o,d=(n("c2c4"),n("2877")),c=Object(d["a"])(s,i,l,!1,null,"16db98d4",null);t["a"]=c.exports},"4a73":function(e,t,n){"use strict";var i=n("d403"),l=n.n(i);l.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"content"},[n("Sidebar"),n("Form")],1)],1)},r=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[e._m(0),n("div",{staticClass:"control"},[n("Button",{staticClass:"share-btn",on:{click:e.onClickShare}},[n("Icon",{attrs:{name:"link"}}),e._v(" Share ")],1)],1)])},o=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h1",{staticClass:"brand"},[i("img",{attrs:{alt:"Twill logo",src:n("9b19")}}),e._v(" Form Builder ")])}],s=(n("b754"),n("a7c5")),d=n.n(s),c=(n("0664"),n("be42")),u=n.n(c),f=n("cdae"),p=(n("d3b7"),n("ac1f"),n("3ca3"),n("841c"),n("ddb0"),n("2b3d"),n("eb11")),h=n.n(p),g=function(e){return h.a.compressToEncodedURIComponent(JSON.stringify(e))},v=function(e){return h.a.decompressFromEncodedURIComponent(e)},m=function(e){history.pushState("","","?code="+e)},b=function(){return window.location.href},w=function(e){var t=new URLSearchParams(window.location.search);return t.get(e)},V={components:{Button:u.a,Icon:f["a"]},methods:{onClickShare:function(){navigator.clipboard.writeText(b()),d()({message:"Link copied to clipboard"})}}},H=V,C=(n("4a73"),n("2877")),y=Object(C["a"])(H,a,o,!1,null,"0c67f685",null),x=y.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"form"}},[n("Droppable",{attrs:{fields:e.fields},on:{"update:fields":function(t){e.fields=t}}})],1)},_=[],L=n("2d62"),S={components:{Droppable:L["a"]},computed:{fields:{get:function(){return this.$store.state.fields},set:function(e){return this.$store.commit("updateFields",e)}}},watch:{fields:function(e){m(g(e))}},methods:{}},k=S,F=(n("9e92"),Object(C["a"])(k,M,_,!1,null,"2ef8565c",null)),Z=F.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"sidebar"}},[n("transition",{attrs:{name:"setting__list"}},[e.fieldSettingMode?n("SettingList",{key:"setting-list"}):e._e()],1),n("transition",{attrs:{name:"available__fields__list"}},[e.fieldSettingMode?e._e():n("AvailableFieldsList",{key:"available-fields-list"})],1)],1)},j=[],B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("draggable",{attrs:{sort:!1,clone:e.cloneField,group:{name:"fields",pull:"clone",put:!1}},model:{value:e.availableFields,callback:function(t){e.availableFields=t},expression:"availableFields"}},e._l(e.availableFields,(function(t){return n("li",{key:t.default.field,staticClass:"available-field-item"},[n("div",{staticClass:"icon-container"},[n("Icon",{attrs:{name:t.icon}})],1),n("span",{staticClass:"field__label"},[e._v(e._s(t.label))])])})),0)],1)},$=[],E=n("5530"),P=n("310e"),A=n.n(P),I=(n("7db0"),[{label:"Field set",icon:"field-set",default:{field:"container",label:"Content",children:[]},settings:[{type:"input",label:"Label",model:"label"}]},{label:"Input",icon:"input",default:{field:"input",label:"Text",placeholder:"Enter text here",note:"",name:"",maxlength:""},settings:[{type:"input",label:"Label",model:"label"},{type:"input",label:"Placeholder",model:"placeholder"},{type:"input",label:"Note",model:"note"},{type:"input",label:"Name",model:"name"},{type:"input",label:"Character count",model:"maxlength"}]},{label:"WYSIWYG",icon:"wysiwyg",default:{field:"wysiwyg",label:"Content"}},{label:"Dropdown",icon:"dropdown",default:{field:"dropdown",label:"Content"}},{label:"Date Picker",icon:"date-picker",default:{field:"date-picker",label:"Content"}},{label:"Checkbox",icon:"checkbox",default:{field:"checkbox",label:"Content"}},{label:"Radio",icon:"radio",default:{field:"radio",label:"Content"}},{label:"Selector",icon:"selector",default:{field:"select",label:"Content"}},{label:"Browser",icon:"browser",default:{field:"browser",label:"Content"}},{label:"Repeater",icon:"repeater",default:{field:"repeater",label:"Content"}},{label:"Media Library",icon:"media-library",default:{field:"media-library",label:"Content"}},{label:"File Library",icon:"file-library",default:{field:"file-library",label:"Content"}}]),T=function(e){return I.find((function(t){return t.default.field===e}))},N=I,D=n("8dee"),q=n.n(D),J={components:{Icon:f["a"],draggable:A.a},data:function(){return{availableFields:N}},methods:{cloneField:function(e){return JSON.parse(JSON.stringify(Object(E["a"])({id:q.a.generate()},e.default)))}}},U=J,R=(n("2ce2"),Object(C["a"])(U,B,$,!1,null,"e6db62ca",null)),W=R.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"setting__list"},[n("h1",{staticClass:"header"},[e._v(" "+e._s(e.fieldPrototype?e.fieldPrototype.label:"")+" properties ")]),e._l(e.fieldPrototype.settings,(function(t,i){return n("SettingField",{key:i,attrs:{field:e.field,setting:t}})})),n("div",{staticClass:"setting__list__footer"},[n("Button",{staticStyle:{"flex-grow":"1","margin-right":"12px","background-color":"#269e41"},attrs:{type:"primary"},on:{click:e.exitFieldSettingMode}},[e._v(" Done ")]),n("Button",{staticStyle:{"flex-grow":"1","background-color":"#393939",border:"none"},attrs:{type:"secondary"},on:{click:e.revertChanges}},[e._v(" Cancel ")])],1)],2)},G=[],K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"setting__field"},["input"===e.type?[n("FormItem",{attrs:{label:e.label}},[n("Input",{model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)]:e._e()],2)},z=[],Q=n("ade3"),X=(n("03da"),n("4523")),ee=n.n(X),te=(n("263d"),n("cf4e")),ne=n.n(te),ie={components:{FormItem:ne.a,Input:ee.a},props:{field:{type:Object,required:!0},setting:{type:Object,required:!0}},computed:{type:function(){return this.setting.type},label:function(){return this.setting.label},model:function(){return this.setting.model},value:{get:function(){return this.field[this.model]},set:function(e){this.$store.commit("setFieldSettingMode",Object(E["a"])(Object(E["a"])({},this.field),{},Object(Q["a"])({},this.model,e)))}}}},le=ie,re=(n("b715"),Object(C["a"])(le,K,z,!1,null,"513e7c86",null)),ae=re.exports,oe={components:{Button:u.a,SettingField:ae},data:function(){return{originalField:this.$store.state.fieldSettingMode}},methods:{exitFieldSettingMode:function(){this.$store.commit("setFieldSettingMode",!1)},revertChanges:function(){this.$store.commit("setFieldSettingMode",this.originalField),this.exitFieldSettingMode()}},computed:{fieldSettingMode:function(){return this.$store.state.fieldSettingMode},fieldPrototype:function(){return T(this.fieldSettingMode.field)},field:function(){return this.fieldSettingMode},fieldSettings:function(){return this.field.settings}}},se=oe,de=(n("ee55"),Object(C["a"])(se,Y,G,!1,null,"09a13690",null)),ce=de.exports,ue={components:{AvailableFieldsList:W,SettingList:ce},computed:{fieldSettingMode:function(){return this.$store.state.fieldSettingMode}}},fe=ue,pe=(n("a233"),Object(C["a"])(fe,O,j,!1,null,"6a509c2c",null)),he=pe.exports,ge={name:"App",components:{Header:x,Form:Z,Sidebar:he},mounted:function(){var e=w("code");if(e){var t=JSON.parse(v(e));this.$store.commit("updateFields",t)}}},ve=ge,me=(n("5c0b"),Object(C["a"])(ve,l,r,!1,null,null,null)),be=me.exports,we=(n("d81d"),n("2f62"));i["a"].use(we["a"]);var Ve=new we["a"].Store({state:{fields:[],fieldSettingMode:!1},mutations:{setFieldSettingMode:function(e,t){!1!==t&&this.commit("updateField",t),e.fieldSettingMode=t},updateFields:function(e,t){e.fields=t},updateField:function(e,t){e.fields=He(e.fields,t)}}}),He=function e(t,n){return t.map((function(t){return t.id===n.id?n:(Object.prototype.hasOwnProperty.call(t,"children")&&(t.children=e(t.children,n)),t)}))};i["a"].config.productionTip=!1,new i["a"]({store:Ve,render:function(e){return e(be)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var i=n("9c0c"),l=n.n(i);l.a},"661b":function(e,t,n){},8755:function(e,t,n){},"929a":function(e,t,n){},9590:function(e,t,n){},"9b19":function(e,t,n){e.exports=n.p+"img/logo.1c5262b7.svg"},"9b83":function(e,t,n){},"9c0c":function(e,t,n){},"9e92":function(e,t,n){"use strict";var i=n("929a"),l=n.n(i);l.a},a233:function(e,t,n){"use strict";var i=n("9590"),l=n.n(i);l.a},b3c6:function(e,t,n){"use strict";var i=n("b729"),l=n.n(i);l.a},b5ad:function(e,t,n){},b715:function(e,t,n){"use strict";var i=n("661b"),l=n.n(i);l.a},b729:function(e,t,n){},c2c4:function(e,t,n){"use strict";var i=n("9b83"),l=n.n(i);l.a},cdae:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icon"},["field-set"===e.name?[n("svg",{attrs:{width:"19",height:"17",viewBox:"0 0 19 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1 1H18V4H1V1ZM0 5V4V1V0H1H18H19V1V4V5V16V17H18H1H0V16V5ZM18 5V16H1V5H18Z",fill:"white"}})])]:"input"===e.name?[n("svg",{attrs:{width:"9",height:"16",viewBox:"0 0 9 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M4.5 0L4.5 16M9 15.5L0 15.5M9 0.5L0 0.499999",stroke:"white"}})])]:"wysiwyg"===e.name?[n("svg",{attrs:{width:"15",height:"16",viewBox:"0 0 15 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M0.0231214 0H14.2775L14.3006 4.77457H13.6185C13.395 3.07129 12.7553 1.91908 11.6994 1.31792C11.106 0.986513 10.2197 0.805395 9.04046 0.774566V13.237C9.04046 14.1079 9.19075 14.6859 9.49133 14.9711C9.79961 15.2563 10.4355 15.3988 11.3988 15.3988V16H2.95954V15.3988C3.88439 15.3988 4.49711 15.2563 4.79769 14.9711C5.10597 14.6782 5.26012 14.1002 5.26012 13.237V0.774566C4.10405 0.805395 3.21773 0.986513 2.60116 1.31792C1.46821 1.93449 0.828516 3.08671 0.682081 4.77457H0L0.0231214 0Z",fill:"white"}})])]:"dropdown"===e.name?[n("svg",{attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1 0.5H0.5V1V17V17.5H1H17H17.5V17V1V0.5H17H1ZM1.5 16.5V1.5H16.5V16.5H1.5ZM13.6761 7.5L9.08803 12.088L4.5 7.5H13.6761Z",fill:"white"}})])]:"date-picker"===e.name?[n("svg",{attrs:{width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.5 7V4H1.5V18H18.5V4H14.5V7H13.5V4H6.5V7H5.5ZM13.5 3H6.5V0H5.5V3H1H0.5V3.5V18.5V19H1H19H19.5V18.5V3.5V3H19H14.5V0H13.5V3Z",fill:"white"}})])]:"checkbox"===e.name?[n("svg",{attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1 0.5H0.5V1V17V17.5H1H17H17.5V17V1V0.5H17H1ZM1.5 16.5V1.5H16.5V16.5H1.5ZM8.03033 12.0303L14.0303 6.03033L12.9697 4.96967L7.5 10.4393L5.53033 8.46967L4.46967 9.53033L6.96967 12.0303L7.5 12.5607L8.03033 12.0303Z",fill:"white"}})])]:"radio"===e.name?[n("svg",{attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9ZM9 0.5C4.30558 0.5 0.5 4.30558 0.5 9C0.5 13.6944 4.30558 17.5 9 17.5C13.6944 17.5 17.5 13.6944 17.5 9C17.5 4.30558 13.6944 0.5 9 0.5ZM9 13C11.2091 13 13 11.2091 13 9C13 6.79086 11.2091 5 9 5C6.79086 5 5 6.79086 5 9C5 11.2091 6.79086 13 9 13Z",fill:"white"}})])]:"selector"===e.name?[n("svg",{attrs:{width:"19",height:"17",viewBox:"0 0 19 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1 1H18V4H1V1ZM0 5V4V1V0H1H18H19V1V4V5V8V9V12V13V16V17H18H1H0V16V13V12V9V8V5ZM1 8V5H18V8H1ZM1 9V12H18V9H1ZM18 13H1V16H18V13Z",fill:"white"}})])]:"browser"===e.name?[n("svg",{attrs:{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.5 7.5C1.5 4.18629 4.18629 1.5 7.5 1.5C10.8137 1.5 13.5 4.18629 13.5 7.5C13.5 10.8137 10.8137 13.5 7.5 13.5C4.18629 13.5 1.5 10.8137 1.5 7.5ZM7.5 0.5C3.63401 0.5 0.5 3.63401 0.5 7.5C0.5 11.366 3.63401 14.5 7.5 14.5C9.25304 14.5 10.8556 13.8556 12.0836 12.7907L16.6464 17.3536L17.3536 16.6464L12.7907 12.0836C13.8556 10.8556 14.5 9.25304 14.5 7.5C14.5 3.63401 11.366 0.5 7.5 0.5Z",fill:"white"}})])]:"repeater"===e.name?[n("svg",{attrs:{width:"21",height:"15",viewBox:"0 0 21 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1 0.5H0.5V1V11V11.5H1H17H17.5V11V1V0.5H17H1ZM1.5 10.5V1.5H16.5V10.5H1.5ZM19.5 4V13.5H4V14.5H20H20.5V14V4H19.5Z",fill:"white"}})])]:"media-library"===e.name?[n("svg",{attrs:{width:"20",height:"13",viewBox:"0 0 20 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.49095 4.98191C6.86667 4.98191 7.98191 3.86667 7.98191 2.49095C7.98191 1.11524 6.86667 0 5.49095 0C4.11524 0 3 1.11524 3 2.49095C3 3.86667 4.11524 4.98191 5.49095 4.98191ZM12.1675 2.4808L19.0957 12.2308L0.904358 12.2285L5.13301 6.2621L7.67076 9.28502L12.1675 2.4808Z",fill:"white"}})])]:"file-library"===e.name?[n("svg",{attrs:{width:"14",height:"18",viewBox:"0 0 14 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1 0.5H13C13.2761 0.5 13.5 0.723858 13.5 1V12.1727L8.34366 17.5H1C0.723858 17.5 0.5 17.2761 0.5 17V1C0.5 0.723858 0.723858 0.5 1 0.5Z",stroke:"white"}})])]:"setting"===e.name?[n("svg",{attrs:{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M14 5.60034H10.3795L12.9387 3.04028L10.9598 1.06128L8.39966 3.62048V0H5.6004V3.62048L3.04028 1.06128L1.05952 3.04028L3.61877 5.60034H0V8.39966H3.62048L1.06133 10.9597L3.04028 12.9387L5.6004 10.3795V14H8.39966V10.3812L10.9598 12.9404L12.9387 10.9597L10.3795 8.39966H14V5.60034ZM7 9.10034C5.84045 9.10034 4.89966 8.1604 4.89966 7C4.89966 5.83955 5.84045 4.89966 7 4.89966C8.15955 4.89966 9.1004 5.83955 9.1004 7C9.1004 8.1604 8.15955 9.10034 7 9.10034Z",fill:"#6A26D9"}})])]:"trash"===e.name?[n("svg",{attrs:{width:"12",height:"14",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.51515 0H9.48485V3.05455H12V4.58182H0V3.05455H2.51515V0ZM4.15152 3.05455H7.84848V1.52727H4.15152V3.05455Z",fill:"#6A26D9"}}),n("path",{attrs:{d:"M2.18182 14C1.57933 14 1.09091 13.5441 1.09091 12.9818V5.85455H10.9091V12.9818C10.9091 13.5441 10.4207 14 9.81818 14H2.18182Z",fill:"#6A26D9"}})])]:"link"===e.name?[n("svg",{attrs:{width:"20",height:"10",viewBox:"0 0 20 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M15 0H12V2H15C16.6542 2 18 3.3457 18 5C18 6.6543 16.6542 8 15 8H12V10H15C17.75 10 20 7.75 20 5C20 2.25 17.75 0 15 0Z",fill:"white"}}),n("path",{attrs:{d:"M2 5C2 3.3457 3.34576 2 5 2H8V0H5C2.25 0 0 2.25 0 5C0 7.75 2.25 10 5 10H8V8H5C3.34576 8 2 6.6543 2 5Z",fill:"white"}}),n("path",{attrs:{d:"M14 4H6V6H14V4Z",fill:"white"}})])]:[n("svg",{attrs:{width:"14",height:"18",viewBox:"0 0 14 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1 0.5H13C13.2761 0.5 13.5 0.723858 13.5 1V12.1727L8.34366 17.5H1C0.723858 17.5 0.5 17.2761 0.5 17V1C0.5 0.723858 0.723858 0.5 1 0.5Z",stroke:"white"}})])]],2)},l=[],r={props:{name:{type:String,required:!0}}},a=r,o=(n("b3c6"),n("2877")),s=Object(o["a"])(a,i,l,!1,null,null,null);t["a"]=s.exports},d403:function(e,t,n){},ee55:function(e,t,n){"use strict";var i=n("8755"),l=n.n(i);l.a}});
//# sourceMappingURL=app.7761bea6.js.map