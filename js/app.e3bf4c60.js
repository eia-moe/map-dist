(function(e){function t(t){for(var r,a,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0ba6db":"75fde91a","chunk-2d0e5240":"c6921fbd","chunk-2d208bfd":"ce69a1df","chunk-2d2183fc":"60b01522","chunk-2d22fd2e":"a60d5a06","chunk-f5f921f8":"44a567df"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-f5f921f8":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0ba6db":"31d6cfe0","chunk-2d0e5240":"31d6cfe0","chunk-2d208bfd":"31d6cfe0","chunk-2d2183fc":"31d6cfe0","chunk-2d22fd2e":"31d6cfe0","chunk-f5f921f8":"bab5ebc8"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===r||u===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],p.parentNode.removeChild(p),n(i)},p.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/map-dist/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"09e0":function(e,t,n){},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},1748:function(e){e.exports=JSON.parse('[{"id":"0","name":"Google Hybrid","visible":true,"minNativeZoom":0,"maxNativeZoom":19,"attribution":"&copy; <a target=\\"_blank\\" href=\\"eia.moe\\">Testing Only</a>","url":"https://mt.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"},{"id":"2","name":"Google Road Map","visible":true,"minNativeZoom":0,"maxNativeZoom":19,"attribution":"&copy; <a target=\\"_blank\\" href=\\"eia.moe\\">Testing Only</a>","url":"https://mt.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"},{"id":"3","name":"Open Street Map","visible":false,"minNativeZoom":0,"maxNativeZoom":19,"attribution":"&copy; <a target=\\"_blank\\" href=\\"http://osm.org/copyright\\">OpenStreetMap</a>","url":"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"},{"id":"4","name":"Apple Satellite","visible":false,"minNativeZoom":0,"maxNativeZoom":19,"url":"https://api.mapbox.com/styles/v1/initru/cjb1sr77mdq7t2rn7pkb0brzc/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaW5pdHJ1IiwiYSI6ImNqYXNiczcyYTFrODYyeG1pdmk2cXZlemMifQ.llXkc2vY4v-Cc31k19SAkg","attribution":"&copy; <a target=\\"_blank\\" href=\\"eia.moe\\">Testing Only</a>"},{"id":"5","name":"ESRI Topo","visible":false,"minNativeZoom":0,"maxNativeZoom":15,"url":"http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}","attribution":"Map data: &copy; <a href=\\"http://www.esri.com\\">esri.com</a>"},{"id":"6","name":"ESRI Satellite","visible":false,"minNativeZoom":0,"maxNativeZoom":17,"url":"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}","attribution":"Map data: &copy; <a href=\\"http://www.esri.com\\">esri.com</a>"},{"id":"7","name":"ESRI Shaded Relief","visible":false,"minNativeZoom":0,"maxNativeZoom":13,"url":"https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}","attribution":"Map data: &copy; <a href=\\"http://www.esri.com\\">esri.com</a>"},{"id":"8","name":"JICA100K","visible":false,"minNativeZoom":0,"maxNativeZoom":15,"url":"https://raw.githubusercontent.com/kunthet/jica100k/master/JICA100K/{z}/{x}/{y}.jpg","attribution":"Map data: &copy; <a href=\\"http://www.esri.com\\">esri.com</a>"}]')},1756:function(e,t,n){},2:function(e,t){},"2b56":function(e,t,n){"use strict";n("09e0")},3:function(e,t){},4:function(e,t){},4360:function(e,t,n){"use strict";n("4de4"),n("d3b7");var r=n("2b0e"),a=n("2f62"),o=n("761f"),i=n("4eaa");r["a"].use(a["a"]),t["a"]=new a["a"].Store({state:{dataLoaded:!1,projects:{features:[]},windowWidth:0,windowHeight:0,filter:function(e){return!0},selectionFilter:function(e){return!1},selectionBounds:[],noneExpiredProjectFilter:function(e){return i["a"].getExpiryStatus(e)!==o["a"].expiry.expired}},mutations:{initProjectList:function(e,t){e.projects=t},windowSize:function(e,t,n){e.windowWidth=t,e.windowHeight=n}},getters:{geojson:function(e,t){return e.projects},esiaGeoJson:function(e,t){return i["a"].geojson.filterByProperty(t.geojson,"lic_type","ESIA",e.noneExpiredProjectFilter)},iesiaGeoJson:function(e,t){return i["a"].geojson.filterByProperty(t.geojson,"lic_type","IESIA",e.noneExpiredProjectFilter)},epcGeoJson:function(e,t){return i["a"].geojson.filterByProperty(t.geojson,"lic_type","EPC",e.noneExpiredProjectFilter)},expiredGeoJson:function(e,t){return i["a"].geojson.filter(t.geojson,(function(e){return i["a"].getExpiryStatus(e)===o["a"].expiry.expired}))},selectedFeatures:function(e,t){return i["a"].geojson.filter(t.geojson,e.selectionFilter)},selectionBounds:function(e,t){return e.selectionBounds},windowWidth:function(e){return e.windowWidth}},actions:{setFilter:function(e,t){var n=e.state;n.filter=t},setSelectionFilter:function(e,t){var n=e.state;n.selectionFilter=t},clearSelectionFilter:function(e){var t=e.state;t.selectionFilter=function(e){return!1}},setSelectionBounds:function(e,t){var n=e.state;n.selectionBounds=t}},modules:{}})},"4c90":function(e,t,n){},"4eaa":function(e,t,n){"use strict";var r=n("5530"),a=n("2909"),o=(n("d3b7"),n("25f0"),n("ac1f"),n("5319"),n("5b81"),n("b64b"),n("07ac"),n("4ec9"),n("3ca3"),n("ddb0"),n("99af"),n("1276"),n("498a"),n("4de4"),n("d81d"),n("af87")),i=n("e400"),s=n.n(i),c=n("761f"),l=n("595b");t["a"]={en2kh:function(e){for(var t="០១២៣៤៥៦៧៨៩",n="0123456789",r=e.toString(),a=0;a<n.length;a++)r=r.replaceAll(n[a],t[a]);return r=r.replaceAll(".",","),r},getExpiryStatus:function(e){var t=e.properties.lic_expiry;return t?new Date(t)<new Date?c["a"].expiry.expired:c["a"].expiry.active:c["a"].expiry.NA},getBounds:function(e){var t=s()(e),n=[{lat:t[1],lng:t[0]},{lat:t[3],lng:t[2]}];return n},getYear:function(e){var t=c["a"].labelOtherYears,n=this.getDate(e);if(!n)return t;var r=n.getFullYear();return isNaN(r)?t:r},getDate:function(e){var t=e.properties.lic_date;return t?new Date(t):null},getType:function(e){return e.properties.lic_type},getCode:function(e){return e.properties.pro_code},getLabelAndData:function(e){var t=Object.keys(e),n=Object.values(e);return{labels:t,data:n}},featureSelected:function(e,t){var n=this.geojson.filterByProperty(e,"pro_code",this.getCode(t));return n.features.length>0},countValuesInMap:function(e){var t=new Map;for(var n in e)if(Object.hasOwnProperty.call(e,n)){var r=e[n];t[n]=r.length}return t},countFeaturesByTypes:function(e){var t=this.groupFeaturesByTypes(e);return this.countValuesInMap(t)},countFeaturesByYears:function(e){var t=this.groupFeaturesByYears(e);return this.countValuesInMap(t)},countFeaturesByProvinces:function(e){var t=this.groupFeaturesByProvinces(e);return this.countValuesInMap(t)},groupFeaturesBy:function(e,t){return e.reduce((function(e,n){return(e[n.properties[t]]=e[n.properties[t]]||[]).push(n),e}),{})},groupFeaturesByTypes:function(e){return this.groupFeaturesBy(e,"lic_type")},groupFeaturesByYears:function(e){var t=new Map;for(var n in e)if(Object.hasOwnProperty.call(e,n)){var r=e[n],o=this.getYear(r),i=t[o];t[o]=i?[].concat(Object(a["a"])(i),[r]):[r]}return t},groupFeaturesByProvinces:function(e){for(var t=new Map,n=0;n<e.length;n++){var r=e[n];if(r.properties&&r.properties.loc_khet)for(var o=r.properties.loc_khet.split(","),i=0;i<o.length;i++){var s=o[i].trim(),c=t[s];t[s]=c?[].concat(Object(a["a"])(c),[r]):[r]}}return t},geojson:{empty:function(){return{features:[]}},create:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"features";return{name:t,features:e,type:"FeatureCollection",crs:{type:"name",name:"urn:ogc:def:crs:OGC:1.3:CRS84"}}},buffer:function(e,t){return l.buffer(e,t)},bufferAsync:function(e,t){var n=this;return new o["Promise"]((function(r,a){try{var o=n.buffer(e,t);r(o)}catch(i){a(i)}}))},isEmpty:function(e){return 0===e.features.length},filter:function(e,t){var n=e.features.filter((function(e){return t(e)}));return Object(r["a"])(Object(r["a"])({},e),{},{features:n})},filterByProperty:function(e,t,n,r){return r?this.filter(e,(function(e){return e.properties[t]===n&&r(e)})):this.filter(e,(function(e){return e.properties[t]===n}))},setStyleType:function(e,t){var n=e.features.filter((function(e){return e.properties.stype=t,e}));return Object(r["a"])(Object(r["a"])({},e),{},{features:n})},features2DataTable:function(e){return e.map((function(e){var t=e.properties;return t.feature=e,t}))},dataTable2Features:function(e){return e.map((function(e){return e.feature}))},dataTable2GeoJson:function(e){return this.create(this.dataTable2Features(e))}},fetch:{fetch:function(e,t){var r="https://eia-moe.github.io/map-dist/d/",a=n("30dc"),o={json:!0},i="".concat(r).concat(e);console.log("Fetching data from...","".concat(r).concat(e)),a(i,o,t)},projectsAsync:function(){var e=this;return new o["Promise"]((function(t,n){return e.fetch("projects",(function(e,r,a){e&&n(e),e||200!=r.statusCode?n(a):t(a)}))}))},riverAsync:function(){var e=this;return new o["Promise"]((function(t,n){return e.fetch("mekong",(function(e,r,a){e&&n(e),e||200!=r.statusCode?n(a):t(a)}))}))}}}},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("router-view",{attrs:{windowWidth:e.windowWidth,windowHeight:e.windowHeight}})],1)],1)},o=[],i=n("4360"),s={name:"App",data:function(){return{windowHeight:window.innerHeight,windowWidth:window.innerWidth}},mounted:function(){var e=this;this.$nextTick((function(){window.addEventListener("resize",e.onResize),i["a"].commit("windowSize",window.innerWidth,window.innerHeight)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},methods:{onResize:function(){this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,i["a"].commit("windowSize",this.windowWidth,this.windowHeight)}}},c=s,l=(n("034f"),n("2877")),u=n("6544"),d=n.n(u),p=n("7496"),h=n("f6c4"),f=Object(l["a"])(c,a,o,!1,null,null,null),m=f.exports;d()(f,{VApp:p["a"],VMain:h["a"]});n("d3b7"),n("3ca3"),n("ddb0");var g=n("8c4f"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("LMap",{attrs:{"max-zoom":20,bounds:e.bounds,options:e.mapOptions},on:{"update:bounds":function(t){e.bounds=t},mouseover:e.collapseAllMenus,mousedown:e.onMapClicked}},[n("LTileLayer",{key:e.tileProvider.name,attrs:{name:e.tileProvider.name,url:e.tileProvider.url,attribution:e.tileProvider.attribution,minNativeZoom:e.tileProvider.minNativeZoom,options:{maxNativeZoom:e.tileProvider.maxNativeZoom,maxZoom:100},"layer-type":"base"}}),e.showEsiaLayer?n("LLayerGroup",{attrs:{"layer-type":"overlay",name:"ESIA"}},[n("LGeoJson",{attrs:{geojson:e.esia,options:e.options}})],1):e._e(),e.showIesiaLayer?n("LLayerGroup",{attrs:{"layer-type":"overlay",name:"IESIA"}},[n("LGeoJson",{attrs:{geojson:e.iesia,options:e.options}})],1):e._e(),e.showEpcLayer?n("LLayerGroup",{attrs:{"layer-type":"overlay",name:"EPC"}},[n("LGeoJson",{attrs:{geojson:e.epc,options:e.options}})],1):e._e(),e.showExpiredLayer?n("LLayerGroup",{attrs:{"layer-type":"overlay",name:"Expired"}},[n("LGeoJson",{attrs:{geojson:e.expired,options:e.options}})],1):e._e(),e._e(),n("LLayerGroup",{attrs:{"layer-type":"overlay",name:"Selected Features"}},[n("LGeoJson",{attrs:{geojson:e.selectedFeatures,options:e.optionSelectedFeatures}})],1),n("LLayerGroup",{attrs:{"layer-type":"overlay",name:"Rivers"}},[n("LGeoJson",{attrs:{geojson:e.river,options:e.bufferOption}})],1),n("LLayerGroup",{attrs:{"layer-type":"overlay",name:"Case-Study-1 Projects"}},[n("LGeoJson",{attrs:{geojson:e.caseStudyProjects,options:e.optionSelectedFeatures}})],1),n("LControl",{staticClass:"pop-menu"},[n("PopMenu",{on:{selected:e.menuSelected},model:{value:e.expandMenu,callback:function(t){e.expandMenu=t},expression:"expandMenu"}})],1),n("LControl",{staticClass:"pop-menu"},[n("LayerMenu",{on:{onBasemapChanged:e.onBasemapChanged,"esia-layer-checked":e.toggleEsiaLayer,"iesia-layer-checked":e.toggleIesiaLayer,"epc-layer-checked":e.toggleEpcLayer,"expired-layer-checked":e.toggleExpiredLayer},model:{value:e.expandLayerMenu,callback:function(t){e.expandLayerMenu=t},expression:"expandLayerMenu"}})],1),n("LControl",{staticClass:"custom-control-watermark watermark",attrs:{position:"topleft"}},[n("img",{attrs:{src:e.watermark,width:e.windowWidth/(e.smallScreen()?3:8)}})]),n("LControlZoom",{attrs:{position:"topright"}}),n("LControl",{staticClass:"chart-panel",attrs:{position:"topleft"}},[e.showChart?n("Dashboard",{attrs:{height:300,width:e.chartWidth},on:{close:function(t){e.showChart=!1}}}):e._e(),e.showSandProjects?n("SandProjects",{attrs:{height:300,width:600},on:{close:e.onCloseSandProject,"data-river":e.onRiverLoaded,"data-projects":e.onSandDataProject}}):e._e()],1)],1)],1)},v=[],w=n("1da1"),b=(n("96cf"),n("a9e3"),n("161b")),S=n("761f"),L=n("5530"),x=(n("cb29"),n("4eaa")),_={weight:3,color:S["a"].colors.esia,opacity:1,fillColor:S["a"].colors.fill,fillOpacity:.3},C=Object(L["a"])(Object(L["a"])({},_),{},{color:S["a"].colors.iesia}),k=Object(L["a"])(Object(L["a"])({},_),{},{color:S["a"].colors.epc}),j=Object(L["a"])(Object(L["a"])({},_),{},{weight:2,color:S["a"].colors.expired,fillOpacity:.5}),E=Object(L["a"])(Object(L["a"])({},_),{},{weight:2,color:S["a"].colors.others,fillOpacity:.1}),P=Object(L["a"])(Object(L["a"])({},E),{},{weight:1,color:S["a"].colors.buffer,fillOpacity:0}),O={buffer:function(e){return P},bufferOption:function(e){return{style:function(e){return P}}},allProjectLayers:function(e){return x["a"].getExpiryStatus(e)===S["a"].expiry.expired?j:"ESIA"===e.properties.lic_type?_:"IESIA"===e.properties.lic_type?C:"EPC"===e.properties.lic_type?k:E}},A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{on:{mouseover:function(t){return e.toggleMenu(!0)},mouseleave:function(t){return e.toggleMenu(!1)}}},[n("ul",{class:"main-menu "+(e.value?"button-close":""),on:{click:function(t){return e.$emit("input",!e.value)}}},[n("li",[n("a",{attrs:{href:"#"}},[n("i",{class:e.mainMenuClass,attrs:{"aria-hidden":"true"}}),e._v(" "+e._s(e.value?"Cancal":"")+" ")])])]),e.value?n("div",[n("ul",{staticClass:"menu"},[n("li",[n("a",{attrs:{href:"#"},on:{click:function(t){return e.onClick("show-chart")}}},[n("i",{staticClass:"fa fa-chart-line",attrs:{"aria-hidden":"true"}}),e._v(" ក្រាហ្វិក ")])]),n("li",[n("a",{attrs:{href:"#"},on:{click:function(t){return e.onClick("show-table")}}},[n("i",{staticClass:"fa fa-list",attrs:{"aria-hidden":"true"}}),e._v(" បញ្ជីគម្រោង ")])]),n("li",[n("a",{attrs:{href:"#"},on:{click:function(t){return e.onClick("show-search")}}},[n("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}}),e._v(" Search ")])]),n("Seperator"),n("li",[n("a",{attrs:{href:"#"},on:{click:function(t){return e.onSubMenuClick()}}},[n("i",{staticClass:"fa fa-chevron-right",attrs:{"aria-hidden":"true"}}),e._v(" ករណីសិក្សា ")])]),e.showCaseStudySubmenu?n("li",{staticClass:"sub-menu-1"},[n("a",{attrs:{href:"#"},on:{click:function(t){return e.onClick("show-sand-projects")}}},[n("i",{staticClass:"fas fa-sandwich",attrs:{"aria-hidden":"true"}}),e._v(" គម្រោង​តាម​ដង​ទន្លេមេគង្គ ")])]):e._e()],1)]):e._e()])},I=[],M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"seperator"})},F=[],B={name:"Seperator"},N=B,G=(n("b94b"),Object(l["a"])(N,M,F,!1,null,"edb9ead6",null)),T=G.exports,z={name:"PopMenu",props:{value:{type:Boolean,default:!1}},components:{Seperator:T},data:function(){return{showCaseStudySubmenu:!1}},methods:{onClick:function(e){this.showCaseStudySubmenu=!1,this.$emit("input",!1),this.$emit("selected",e)},toggleMenu:function(e){this.toggleShowMenu=e,e||(this.showCaseStudySubmenu=!1)},onSubMenuClick:function(){this.toggleCaseStudySubmenu()},toggleCaseStudySubmenu:function(){this.showCaseStudySubmenu=!this.showCaseStudySubmenu}},computed:{toggleShowMenu:{get:function(){return this.expanded},set:function(e){this.$emit("input",e)}},mainMenuClass:function(){return this.value?"fa fa-times button-close":"fa fa-bars"}},watch:{}},W=z,$=(n("79eb"),Object(l["a"])(W,A,I,!1,null,"2e3ff765",null)),J=$.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{on:{mouseover:function(t){e.toggleShowMenu=!0},mouseleave:function(t){e.toggleShowMenu=!1}}},[n("ul",{class:"main-menu "+(e.value?"button-close":""),on:{click:function(t){return e.$emit("input",!e.value)}}},[n("li",[n("a",{attrs:{href:"#"}},[n("i",{class:e.mainMenuClass,attrs:{"aria-hidden":"true"}}),e._v(" "+e._s(e.value?"Cancal":"")+" ")])])]),e.value?n("div",[e._v(" Layers: "),n("div",{staticClass:"layer-control"},[n("label",{attrs:{for:"esia-layer"},on:{click:function(t){return e.onLayerSelected("esia-layer-checked",e.toggleShowEsiaLayer)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.toggleShowEsiaLayer,expression:"toggleShowEsiaLayer"}],attrs:{type:"checkbox",id:"esia-layer"},domProps:{checked:Array.isArray(e.toggleShowEsiaLayer)?e._i(e.toggleShowEsiaLayer,null)>-1:e.toggleShowEsiaLayer},on:{change:function(t){var n=e.toggleShowEsiaLayer,r=t.target,a=!!r.checked;if(Array.isArray(n)){var o=null,i=e._i(n,o);r.checked?i<0&&(e.toggleShowEsiaLayer=n.concat([o])):i>-1&&(e.toggleShowEsiaLayer=n.slice(0,i).concat(n.slice(i+1)))}else e.toggleShowEsiaLayer=a}}}),n("i",{staticClass:"far fa-square",style:e.esiaLegendStyle,attrs:{"aria-hidden":"true"}}),e._v(" ESIA ")])]),n("div",{staticClass:"layer-control"},[n("label",{attrs:{for:"iesia-layer"},on:{click:function(t){return e.onLayerSelected("iesia-layer-checked",e.toggleShowIesiaLayer)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.toggleShowIesiaLayer,expression:"toggleShowIesiaLayer"}],attrs:{type:"checkbox",id:"iesia-layer"},domProps:{checked:Array.isArray(e.toggleShowIesiaLayer)?e._i(e.toggleShowIesiaLayer,null)>-1:e.toggleShowIesiaLayer},on:{change:function(t){var n=e.toggleShowIesiaLayer,r=t.target,a=!!r.checked;if(Array.isArray(n)){var o=null,i=e._i(n,o);r.checked?i<0&&(e.toggleShowIesiaLayer=n.concat([o])):i>-1&&(e.toggleShowIesiaLayer=n.slice(0,i).concat(n.slice(i+1)))}else e.toggleShowIesiaLayer=a}}}),n("i",{staticClass:"far fa-square",style:e.iesiaLegendStyle,attrs:{"aria-hidden":"true"}}),e._v(" IESIA ")])]),n("div",{staticClass:"layer-control"},[n("label",{attrs:{for:"epc-layer"},on:{click:function(t){return e.onLayerSelected("epc-layer-checked",e.toggleShowEpcLayer)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.toggleShowEpcLayer,expression:"toggleShowEpcLayer"}],attrs:{type:"checkbox",id:"epc-layer"},domProps:{checked:Array.isArray(e.toggleShowEpcLayer)?e._i(e.toggleShowEpcLayer,null)>-1:e.toggleShowEpcLayer},on:{change:function(t){var n=e.toggleShowEpcLayer,r=t.target,a=!!r.checked;if(Array.isArray(n)){var o=null,i=e._i(n,o);r.checked?i<0&&(e.toggleShowEpcLayer=n.concat([o])):i>-1&&(e.toggleShowEpcLayer=n.slice(0,i).concat(n.slice(i+1)))}else e.toggleShowEpcLayer=a}}}),n("i",{staticClass:"far fa-square",style:e.epcLegendStyle,attrs:{"aria-hidden":"true"}}),e._v(" EPC ")])]),n("div",{staticClass:"layer-control"},[n("label",{attrs:{for:"expired-layer"},on:{click:function(t){return e.onLayerSelected("expired-layer-checked",e.toggleShowExpiredLayer)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.toggleShowExpiredLayer,expression:"toggleShowExpiredLayer"}],attrs:{type:"checkbox",id:"expired-layer"},domProps:{checked:Array.isArray(e.toggleShowExpiredLayer)?e._i(e.toggleShowExpiredLayer,null)>-1:e.toggleShowExpiredLayer},on:{change:function(t){var n=e.toggleShowExpiredLayer,r=t.target,a=!!r.checked;if(Array.isArray(n)){var o=null,i=e._i(n,o);r.checked?i<0&&(e.toggleShowExpiredLayer=n.concat([o])):i>-1&&(e.toggleShowExpiredLayer=n.slice(0,i).concat(n.slice(i+1)))}else e.toggleShowExpiredLayer=a}}}),n("i",{staticClass:"far fa-square",style:e.expiredLegendStyle,attrs:{"aria-hidden":"true"}}),e._v(" Expired ")])]),n("br"),e._v(" Basemaps: "),n("div",{staticClass:"basemaps"},e._l(e.basemaps,(function(t){return n("div",{key:t.id},[n("label",{attrs:{for:t.id},on:{click:function(n){return e.onBasemapChanged(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedBasemap,expression:"selectedBasemap"}],attrs:{type:"radio",name:t.name,id:t.id},domProps:{value:t.id,checked:e._q(e.selectedBasemap,t.id)},on:{change:function(n){e.selectedBasemap=t.id}}}),n("img",{attrs:{src:e.rasterIcon,width:"18"}}),e._v(" "+e._s(t.name)+" ")])])})),0),n("br")]):e._e()])},D=[],H=n("d263"),R=n.n(H),Y=n("1748"),q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field__radio",class:[e.value===e.v_value?"field__radio--checked":""]},[n("label",{attrs:{for:e.id},on:{click:e.onClick}},[n("input",{attrs:{type:"radio",name:e.name,id:e.id},domProps:{value:e.label}}),n("img",{attrs:{src:e.url,width:"22"}}),e._v(" "+e._s(e.label)+" ")])])},V=[],K={name:"InputRadio",props:{value:{},v_value:{},label:{type:String,default:""},name:{type:String,default:""},id:{type:String,default:""},url:{type:String,default:""}},methods:{onClick:function(){this.$emit("input",this.v_value),console.log(this.v_value)}}},U=K,X=Object(l["a"])(U,q,V,!1,null,null,null),Q=X.exports,ee={name:"PopMenu",props:{value:{type:Boolean,default:!1}},components:{InputRadio:Q},data:function(){return{selectedBasemap:"0",toggleShowEsiaLayer:!0,toggleShowIesiaLayer:!0,toggleShowEpcLayer:!0,toggleShowExpiredLayer:!1,basemaps:Y,rasterIcon:R.a}},methods:{onBasemapChanged:function(e){this.$emit("onBasemapChanged",e)},onLayerSelected:function(e,t){this.$emit(e,!t)}},computed:{toggleShowMenu:{get:function(){return this.expanded},set:function(e){this.$emit("input",e)}},mainMenuClass:function(){return this.value?"fa fa-times button-close":"fa fa-layer-group"},esiaLegendStyle:function(){return"color:".concat(S["a"].colors.esia,"; font-size:16px; font-weight:bold")},iesiaLegendStyle:function(){return"color:".concat(S["a"].colors.iesia,"; font-size:16px; font-weight:bold")},epcLegendStyle:function(){return"color:".concat(S["a"].colors.epc,"; font-size:16px; font-weight:bold")},expiredLegendStyle:function(){return"color:".concat(S["a"].colors.expired,"; font-size:16px; font-weight:bold")}},watch:{}},te=ee,ne=(n("ed32"),Object(l["a"])(te,Z,D,!1,null,"eaf4e866",null)),re=ne.exports,ae=n("92a1"),oe=n("7277"),ie=(n("ac1f"),n("5319"),n("5b81"),n("1276"),{en2kh:function(e){for(var t="០១២៣៤៥៦៧៨៩",n="0123456789",r=e,a=0;a<n.length;a++)r=r.replaceAll(n[a],t[a]);return r},format_date:function(e){var t=e.split("-");return 3!==t.length?e:t[2]+"-"+t[1]+"-"+t[0]},html_row:function(e,t,n){return'<tr>                    <th scope="row">'+e+"</th>                    <td>"+t+n+"</td>                </tr>\n"},row:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=e.properties[t];return null!==a?this.html_row(n,a,r):""},row_kh:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=e.properties[t];return null==a?"":this.html_row(n,this.en2kh(a),r)},row_date:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=e.properties[t];return null==a?"":(a=this.format_date(a),this.html_row(n,this.en2kh(a),r))},create_table:function(e){var t="<table>\n";return t+=this.row(e,"owner_kh","Owner KH"),t+=this.row(e,"owner_en","Owner EN"),t+=this.row(e,"type","Type"),t+=this.row(e,"area_li_ha","Size"," Ha"),t+=this.row(e,"lic_type","License"),t+=this.row(e,"loc_khet","Provice"),t+=this.row(e,"loc_srok","District"),t+=this.row(e,"loc_khum","Commune"),t+=this.row(e,"loc_phum","Village"),t+=this.row(e,"loc_name","Location Name"),t+=this.row_date(e,"lic_date","Issued"),t+=this.row_kh(e,"lic_number","Number"," សជណ.បស្ថ"),t+=this.row(e,"status","Status"),t+=this.row(e,"team","Team"),t+=this.row(e,"added_by","Added by"),t+=this.row(e,"reference","Reference"),t+=this.row(e,"pro_code","Code"),t+=this.row(e,"remark","Remark"),t+="</table>",t}}),se=n("d5b3"),ce=n.n(se),le=n("e11e"),ue=n("2699"),de=n("fbba"),pe=n("4e2b6"),he=n("9ee8"),fe=n("f60f"),me=n("635f"),ge=n("258a"),ye=n("fb8e"),ve=n("a40a"),we=n("1ebb"),be=n("2253"),Se=n("c8b6"),Le=n("044a"),xe=[{lat:10.79,lng:102.14},{lat:14.525,lng:107.0343}],_e=Object(le["latLngBounds"])(xe),Ce={name:"Home",props:{windowHeight:Number,windowWidth:Number},components:{LMap:ue["a"],LIcon:de["a"],LMarker:pe["a"],LControlLayers:he["a"],LPopup:fe["a"],LPolyline:me["a"],LPolygon:ge["a"],LRectangle:ye["a"],LTileLayer:ve["a"],LLayerGroup:we["a"],LControl:be["a"],LControlZoom:Se["a"],LGeoJson:Le["a"],PopMenu:J,LayerMenu:re,FloatingPanel:ae["a"],Dashboard:oe["default"],SandProjects:function(){return n.e("chunk-f5f921f8").then(n.bind(null,"98dd"))}},beforeCreate:function(){return Object(w["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x["a"].fetch.projectsAsync();case 2:t=e.sent,i["a"].commit("initProjectList",t);case 4:case"end":return e.stop()}}),e)})))()},data:function(){var e=x["a"].geojson.empty(),t=x["a"].geojson.empty();return{isLoading:!0,watermark:ce.a,bounds:_e,mapOptions:{zoomControl:!1,attributionControl:!1,zoomSnap:!0},tileProvider:Y[0],river:e,caseStudyProjects:t,showChart:!1,showSandProjects:!1,showEsiaLayer:!0,showIesiaLayer:!0,showEpcLayer:!0,showExpiredLayer:!1,expandMenu:!1,expandLayerMenu:!1}},computed:{esia:function(){return i["a"].getters.esiaGeoJson},iesia:function(){return i["a"].getters.iesiaGeoJson},epc:function(){return i["a"].getters.epcGeoJson},expired:function(){return i["a"].getters.expiredGeoJson},selectedFeatures:function(){return i["a"].getters.selectedFeatures},bufferOption:function(){return{style:function(e){return O.buffer}}},optionSelectedFeatures:function(){return{onEachFeature:this.onEachFeatureFunction,style:function(e){return{fillColor:"yellow",color:"yellow",weight:2,opacity:.8,fillOpacity:.6}}}},options:function(){return{onEachFeature:this.onEachFeatureFunction,style:O.allProjectLayers}},onEachFeatureFunction:function(){return function(e,t){var n=function(t){var n=x["a"].featureSelected(i["a"].getters.selectedFeatures,e);if(!n){var r=e.properties.pro_code;i["a"].dispatch("setSelectionFilter",(function(e){return r===e.properties.pro_code}))}};t.on("click",n);var r=ie.create_table(e),a={permanent:!1,sticky:!0};t.bindPopup(r,a)}},chartWidth:function(){return this.smallScreen()?this.windowWidth-23:600}},mounted:function(){var e=this,t=this;b["a"].unsubscribe(S["a"].events.mapGotoBounds),b["a"].subscribe(S["a"].events.mapGotoBounds,(function(e){t.bounds=Object(le["latLngBounds"])(e.data)})),this.isLoading=!0,setTimeout((function(){e.isLoading=!1}),5e3)},methods:{smallScreen:function(){return this.windowWidth<600},isLandscape:function(){return this.windowWidth>this.windowHeight},menuSelected:function(e){this.showChart=!this.showChart&&"show-chart"===e,this.showSandProjects=!this.showSandProjects&&"show-sand-projects"===e},onBasemapChanged:function(e){this.tileProvider=e},toggleEsiaLayer:function(e){this.showEsiaLayer=e},toggleIesiaLayer:function(e){this.showIesiaLayer=e},toggleEpcLayer:function(e){this.showEpcLayer=e},toggleExpiredLayer:function(e){this.showExpiredLayer=e},onMenuChange:function(e){this.expandMenu=e},collapseAllMenus:function(){this.expandLayerMenu=!1,this.expandMenu=!1},onMapClicked:function(){this.collapseAllMenus()},onRiverLoaded:function(e){console.log(e),this.river=e},onCloseSandProject:function(){this.showSandProjects=!1,this.river=x["a"].geojson.empty()},onSandDataProject:function(e){this.caseStudyProjects=e}},watch:{}},ke=Ce,je=(n("d564"),Object(l["a"])(ke,y,v,!1,null,"4c4e39e4",null)),Ee=je.exports;r["a"].use(g["a"]);var Pe=[{path:"/",name:"Home",component:Ee},{path:"/dashboard",name:"Dashboard",component:function(){return Promise.resolve().then(n.bind(null,"7277"))}},{path:"/:catchAll(.*)*",name:"PageNotFound",component:function(){return n.e("chunk-2d208bfd").then(n.bind(null,"a5b5"))}}],Oe=new g["a"]({mode:"history",base:"/map-dist/",routes:Pe}),Ae=Oe,Ie=(n("6cc5"),n("f309"));r["a"].use(Ie["a"]);var Me=new Ie["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:Ae,store:i["a"],vuetify:Me,render:function(e){return e(m)}}).$mount("#app")},6:function(e,t){},6352:function(e,t,n){},"69cd":function(e,t,n){},"6c88":function(e,t,n){"use strict";n("1756")},"6fe9":function(e,t,n){},7:function(e,t){},7277:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("FloatingPanel",{attrs:{width:e.width,height:e.height},on:{close:function(t){return e.$emit("close")}}},[n("chart-selector",{staticClass:"chart-selector",on:{selectChanged:e.chartSelected}}),0==e.selectedChart?n("ChartAbstract"):e._e(),1==e.selectedChart?n("ChartByYear"):e._e(),2==e.selectedChart?n("ChartByProvince"):e._e(),3==e.selectedChart?n("ChartByType"):e._e(),4==e.selectedChart?n("ChartByCategory"):e._e()],1)},a=[],o=(n("a9e3"),n("d3b7"),n("3ca3"),n("ddb0"),n("99af"),n("92a1")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"selector"},[e._v(" "+e._s(e.title||"ជ្រើសរើសក្រាហ្វិក៖")+" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedItem,expression:"selectedItem"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedItem=t.target.multiple?n:n[0]},e.selectChanged]}},[n("option",{attrs:{value:"0"}},[e._v("សង្ខេបរួម")]),n("option",{attrs:{value:"1"}},[e._v("បែងចែកតាមឆ្នាំ")]),n("option",{attrs:{value:"2"}},[e._v("បែងចែកតាម​ខេត្ត")]),n("option",{attrs:{value:"3"}},[e._v("បែងចែកតាម​ចំណាត់ថ្នាក់គម្រោង")]),n("option",{attrs:{value:"4"}},[e._v("បែងចែកតាម​ប្រភេទគម្រោង")])])])},s=[],c={name:"ChartAbstract",data:function(){return{selectedItem:"0"}},props:{title:String},methods:{selectChanged:function(e){this.$emit("selectChanged",this.selectedItem)}}},l=c,u=(n("6c88"),n("2877")),d=Object(u["a"])(l,i,s,!1,null,"1fcadc7d",null),p=d.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("vue-highcharts",{ref:"myCharts",attrs:{options:e.options,plotOptions:e.plotOptions}})],1)},f=[],m=n("2909"),g=n("5530"),y=(n("d81d"),n("b0c0"),n("161b")),v=n("604f"),w=n.n(v),b=n("ea7f"),S=n.n(b),L=n("4360"),x=n("4eaa"),_=n("761f"),C={name:"ChartAbstract",events:["goto-bounds"],components:{VueHighcharts:w.a},data:function(){return{options:null,plotOptions:null,Highcharts:S.a}},methods:{chartSelected:function(e){this.selectedChart=e},smallScreen:function(){return L["a"].getters.windowWidth<=600}},computed:{},mounted:function(){var e=L["a"].getters.geojson,t=e.features,n=x["a"].groupFeaturesByYears(t),r=x["a"].getLabelAndData(n),a=r.labels,o=r.data,i=o.map((function(e){return x["a"].countFeaturesByTypes(e)})),s={type:"column",name:"ESIA",data:[],color:_["a"].colors.esia},c=Object(g["a"])(Object(g["a"])({},s),{},{name:"IESIA",data:[],color:_["a"].colors.iesia}),l=Object(g["a"])(Object(g["a"])({},s),{},{name:"EPC",data:[],color:_["a"].colors.epc}),u=(Object(g["a"])(Object(g["a"])({},s),{},{name:"Expired",data:[],color:_["a"].colors.expired}),{type:"line",name:"សរុប",data:[],marker:{lineWidth:2,lineColor:S.a.getOptions().colors[3],fillColor:"white"}});for(var d in i)if(Object.hasOwnProperty.call(i,d)){var p,h,f,v=i[d],w=null!==(p=v["ESIA"])&&void 0!==p?p:0,b=null!==(h=v["IESIA"])&&void 0!==h?h:0,C=null!==(f=v["EPC"])&&void 0!==f?f:0;s.data=[].concat(Object(m["a"])(s.data),[w]),c.data=[].concat(Object(m["a"])(c.data),[b]),l.data=[].concat(Object(m["a"])(l.data),[C]),u.data=[].concat(Object(m["a"])(u.data),[w+b+C])}var k=s.data.reduce((function(e,t){return e+t}),0),j=c.data.reduce((function(e,t){return e+t}),0),E=l.data.reduce((function(e,t){return e+t}),0),P=k+j+E,O={type:"pie",name:"Total Projects",data:[{name:"ESIA",y:k,color:_["a"].colors.esia},{name:"IESIA",y:j,color:_["a"].colors.iesia},{name:"EPC",y:E,color:_["a"].colors.epc}],center:[45,50],size:100,showInLegend:!1,dataLabels:{enabled:!1}},A=(this.$emit,{pie:{cursor:"pointer",point:{events:{click:function(e){var t=e.point.x,n=O.data[t].name,r=function(e){var t=x["a"].getType(e);return t===n};L["a"].dispatch("setSelectionFilter",r);var a=x["a"].getBounds(L["a"].getters.selectedFeatures);y["a"].publish({type:_["a"].events.mapGotoBounds,data:a})}}}},column:{cursor:"pointer",point:{events:{click:function(e){var t=e.point.x,n=e.point.series.name,r=function(e){var r=x["a"].getYear(e),o=x["a"].getType(e);return r===_["a"].labelOtherYears?r===a[t]&&o===n:r===Number(a[t])&&o===n};L["a"].dispatch("setSelectionFilter",r);var o=x["a"].getBounds(L["a"].getters.selectedFeatures);y["a"].publish({type:_["a"].events.mapGotoBounds,data:o})}}}}}),I=[s,c,l,u,O],M=x["a"].en2kh(P),F={allowPointSelect:!0,title:{text:"ចំនួនគម្រោងបង្ហាញ​នៅ​លើ​ផែនទី \n (សរុប ".concat(M," គម្រោង)")},chart:{height:350},xAxis:{categories:a},yAxis:{title:{text:"ចំនួនគម្រោង"}},labels:{items:[{html:"ចំនួន​ទៅតាម​ចំណាត់ថ្នាក់",style:{left:"10px",top:"0px",color:S.a.theme&&S.a.theme.textColor||"black"}}]},credits:{enabled:!1},series:I,plotOptions:A};this.options=F}},k=C,j=Object(u["a"])(k,h,f,!1,null,null,null),E=j.exports,P={name:"Dashboard",props:{width:{type:Number,default:300},height:{type:Number,default:300}},components:{ChartSelector:p,ChartAbstract:E,FloatingPanel:o["a"],ChartByYear:function(){return n.e("chunk-2d22fd2e").then(n.bind(null,"ea51"))},ChartByCategory:function(){return n.e("chunk-2d0ba6db").then(n.bind(null,"36bd"))},ChartByProvince:function(){return n.e("chunk-2d0e5240").then(n.bind(null,"92e6"))},ChartByType:function(){return n.e("chunk-2d2183fc").then(n.bind(null,"c9d4"))}},data:function(){return{selectedChart:0}},computed:{size:function(){return"width: ".concat(this.width,"px; height: ").concat(this.height,"px; ")}},methods:{chartSelected:function(e){this.selectedChart=e}}},O=P,A=(n("2b56"),Object(u["a"])(O,r,a,!1,null,null,null));t["default"]=A.exports},"761f":function(e,t,n){"use strict";t["a"]={expiry:{active:"Active",expired:"Expired",NA:"Not-Available"},labelOtherYears:"Unknown",labelUnknownProjectType:"Unknown",mainChartColor:"#9F4BF2",colors:{esia:"rgba(13,202,0,1.0)",iesia:"rgba(1,170,255,1.0)",epc:"#F50900",expired:"#DDD",others:"#EDE500",fill:"#CCC",buffer:"#FF0000"},events:{mapGotoBounds:"map-goto-bounds"}}},"79eb":function(e,t,n){"use strict";n("69cd")},8:function(e,t){},"85ec":function(e,t,n){},"88dc":function(e,t,n){"use strict";n("6fe9")},9:function(e,t){},"92a1":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel",style:e.size},[n("div",{staticClass:"fa fa-times close-button",on:{click:function(t){return e.$emit("close")}}}),e._t("default")],2)},a=[],o=(n("a9e3"),n("99af"),{name:"FloatingPanel",props:{width:{type:Number,default:100},height:{type:Number,default:300}},computed:{size:function(){return"width: ".concat(this.width,"px; height: ").concat(this.height,"px; ")}}}),i=o,s=(n("88dc"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,"5bb8a41a",null);t["a"]=c.exports},a290:function(e,t,n){},b94b:function(e,t,n){"use strict";n("a290")},d263:function(e,t,n){e.exports=n.p+"img/raster.b5e29c5d.png"},d564:function(e,t,n){"use strict";n("4c90")},d5b3:function(e,t,n){e.exports=n.p+"img/watermark.e50dbe09.png"},ed32:function(e,t,n){"use strict";n("6352")}});
//# sourceMappingURL=app.e3bf4c60.js.map