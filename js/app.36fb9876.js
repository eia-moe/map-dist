(function(e){function t(t){for(var a,i,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(p.length)p.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],a=!0,i=1;i<o.length;i++){var c=o[i];0!==r[c]&&(a=!1)}a&&(n.splice(t--,1),e=s(s.s=o[0]))}return e}var a={},r={app:0},n=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d0ba6db":"c593023f","chunk-2d0e5240":"24b7a119","chunk-2d208bfd":"b9c56d31","chunk-2d2183fc":"f6c168dc","chunk-2d22fd2e":"1a9a1d6c"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var t=[],o=r[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,a){o=r[e]=[t,a]}));t.push(o[2]=a);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var l=new Error;n=function(t){c.onerror=c.onload=null,clearTimeout(u);var o=r[e];if(0!==o){if(o){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",l.name="ChunkLoadError",l.type=a,l.request=n,o[1](l)}r[e]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(o,a,function(t){return e[t]}.bind(null,a));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/map-dist/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},"09e0":function(e,t,o){},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},1748:function(e){e.exports=JSON.parse('[{"id":"0","name":"Google Hybrid","visible":true,"minNativeZoom":0,"maxNativeZoom":19,"attribution":"&copy; <a target=\\"_blank\\" href=\\"eia.moe\\">Testing Only</a>","url":"https://mt.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"},{"id":"2","name":"Google Road Map","visible":true,"minNativeZoom":0,"maxNativeZoom":19,"attribution":"&copy; <a target=\\"_blank\\" href=\\"eia.moe\\">Testing Only</a>","url":"https://mt.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"},{"id":"3","name":"Open Street Map","visible":false,"minNativeZoom":0,"maxNativeZoom":19,"attribution":"&copy; <a target=\\"_blank\\" href=\\"http://osm.org/copyright\\">OpenStreetMap</a>","url":"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"},{"id":"4","name":"Apple Satellite","visible":false,"minNativeZoom":0,"maxNativeZoom":19,"url":"https://api.mapbox.com/styles/v1/initru/cjb1sr77mdq7t2rn7pkb0brzc/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaW5pdHJ1IiwiYSI6ImNqYXNiczcyYTFrODYyeG1pdmk2cXZlemMifQ.llXkc2vY4v-Cc31k19SAkg","attribution":"&copy; <a target=\\"_blank\\" href=\\"eia.moe\\">Testing Only</a>"},{"id":"5","name":"ESRI Topo","visible":false,"minNativeZoom":0,"maxNativeZoom":15,"url":"http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}","attribution":"Map data: &copy; <a href=\\"http://www.esri.com\\">esri.com</a>"},{"id":"6","name":"ESRI Satellite","visible":false,"minNativeZoom":0,"maxNativeZoom":17,"url":"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}","attribution":"Map data: &copy; <a href=\\"http://www.esri.com\\">esri.com</a>"},{"id":"7","name":"ESRI Shaded Relief","visible":false,"minNativeZoom":0,"maxNativeZoom":13,"url":"https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}","attribution":"Map data: &copy; <a href=\\"http://www.esri.com\\">esri.com</a>"},{"id":"8","name":"JICA100K","visible":false,"minNativeZoom":0,"maxNativeZoom":15,"url":"https://raw.githubusercontent.com/kunthet/jica100k/master/JICA100K/{z}/{x}/{y}.jpg","attribution":"Map data: &copy; <a href=\\"http://www.esri.com\\">esri.com</a>"}]')},1756:function(e,t,o){},"17d6":function(e,t,o){},1906:function(e,t,o){"use strict";o("17d6")},2:function(e,t){},"2b56":function(e,t,o){"use strict";o("09e0")},3:function(e,t){},4:function(e,t){},4360:function(e,t,o){"use strict";o("4de4"),o("d3b7");var a=o("2b0e"),r=o("2f62"),n=o("761f"),i=o("4eaa");a["a"].use(r["a"]),t["a"]=new r["a"].Store({state:{dataLoaded:!1,projects:{features:[]},windowWidth:0,windowHeight:0,filter:function(e){return!0},selectionFilter:function(e){return!1},selectionBounds:[],noneExpiredProjectFilter:function(e){return i["a"].getExpiryStatus(e)!==n["a"].expiry.expired}},mutations:{initProjectList:function(e,t){e.projects=t},windowSize:function(e,t,o){e.windowWidth=t,e.windowHeight=o}},getters:{geojson:function(e,t){return e.projects},esiaGeoJson:function(e,t){return i["a"].geojson.filterByProperty(t.geojson,"lic_type","ESIA",e.noneExpiredProjectFilter)},iesiaGeoJson:function(e,t){return i["a"].geojson.filterByProperty(t.geojson,"lic_type","IESIA",e.noneExpiredProjectFilter)},epcGeoJson:function(e,t){return i["a"].geojson.filterByProperty(t.geojson,"lic_type","EPC",e.noneExpiredProjectFilter)},expiredGeoJson:function(e,t){return i["a"].geojson.filter(t.geojson,(function(e){return i["a"].getExpiryStatus(e)===n["a"].expiry.expired}))},selectedFeatures:function(e,t){return i["a"].geojson.filter(t.geojson,e.selectionFilter)},selectionBounds:function(e,t){return e.selectionBounds},windowWidth:function(e){return e.windowWidth}},actions:{setFilter:function(e,t){var o=e.state;o.filter=t},setSelectionFilter:function(e,t){var o=e.state;o.selectionFilter=t},clearSelectionFilter:function(e){var t=e.state;t.selectionFilter=function(e){return!1}},setSelectionBounds:function(e,t){var o=e.state;o.selectionBounds=t}},modules:{}})},"4eaa":function(e,t,o){"use strict";var a=o("5530"),r=o("2909"),n=(o("d3b7"),o("25f0"),o("ac1f"),o("5319"),o("5b81"),o("b64b"),o("07ac"),o("4ec9"),o("3ca3"),o("ddb0"),o("99af"),o("1276"),o("498a"),o("4de4"),o("e400")),i=o.n(n),s=o("761f");t["a"]={en2kh:function(e){for(var t="០១២៣៤៥៦៧៨៩",o="0123456789",a=e.toString(),r=0;r<o.length;r++)a=a.replaceAll(o[r],t[r]);return a},getExpiryStatus:function(e){var t=e.properties.lic_expiry;return t?new Date(t)<new Date?s["a"].expiry.expired:s["a"].expiry.active:s["a"].expiry.NA},getBounds:function(e){var t=i()(e),o=[{lat:t[1],lng:t[0]},{lat:t[3],lng:t[2]}];return o},getYear:function(e){var t=s["a"].labelOtherYears,o=this.getDate(e);if(!o)return t;var a=o.getFullYear();return isNaN(a)?t:a},getDate:function(e){var t=e.properties.lic_date;return t?new Date(t):null},getType:function(e){return e.properties.lic_type},getCode:function(e){return e.properties.pro_code},getLabelAndData:function(e){var t=Object.keys(e),o=Object.values(e);return{labels:t,data:o}},featureSelected:function(e,t){var o=this.geojson.filterByProperty(e,"pro_code",this.getCode(t));return o.features.length>0},countValuesInMap:function(e){var t=new Map;for(var o in e)if(Object.hasOwnProperty.call(e,o)){var a=e[o];t[o]=a.length}return t},countFeaturesByTypes:function(e){var t=this.groupFeaturesByTypes(e);return this.countValuesInMap(t)},countFeaturesByYears:function(e){var t=this.groupFeaturesByYears(e);return this.countValuesInMap(t)},countFeaturesByProvinces:function(e){var t=this.groupFeaturesByProvinces(e);return this.countValuesInMap(t)},groupFeaturesBy:function(e,t){return e.reduce((function(e,o){return(e[o.properties[t]]=e[o.properties[t]]||[]).push(o),e}),{})},groupFeaturesByTypes:function(e){return this.groupFeaturesBy(e,"lic_type")},groupFeaturesByYears:function(e){var t=new Map;for(var o in e)if(Object.hasOwnProperty.call(e,o)){var a=e[o],n=this.getYear(a),i=t[n];t[n]=i?[].concat(Object(r["a"])(i),[a]):[a]}return t},groupFeaturesByProvinces:function(e){for(var t=new Map,o=0;o<e.length;o++){var a=e[o];if(a.properties&&a.properties.loc_khet)for(var n=a.properties.loc_khet.split(","),i=0;i<n.length;i++){var s=n[i].trim(),c=t[s];t[s]=c?[].concat(Object(r["a"])(c),[a]):[a]}}return t},geojson:{empty:function(){return{features:[]}},isEmpty:function(e){return 0===e.features.length},filter:function(e,t){var o=e.features.filter((function(e){return t(e)}));return Object(a["a"])(Object(a["a"])({},e),{},{features:o})},filterByProperty:function(e,t,o,a){return a?this.filter(e,(function(e){return e.properties[t]===o&&a(e)})):this.filter(e,(function(e){return e.properties[t]===o}))}}}},5:function(e,t){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("router-view",{attrs:{windowWidth:e.windowWidth,windowHeight:e.windowHeight}})},n=[],i=o("4360"),s={name:"App",data:function(){return{windowHeight:window.innerHeight,windowWidth:window.innerWidth}},mounted:function(){var e=this;this.$nextTick((function(){window.addEventListener("resize",e.onResize),i["a"].commit("windowSize",window.innerWidth,window.innerHeight)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},methods:{onResize:function(){this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,i["a"].commit("windowSize",this.windowWidth,this.windowHeight)}}},c=s,l=(o("034f"),o("2877")),u=Object(l["a"])(c,r,n,!1,null,null,null),d=u.exports,p=(o("d3b7"),o("3ca3"),o("ddb0"),o("8c4f")),h=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("LMap",{attrs:{"max-zoom":20,bounds:e.bounds,options:e.mapOptions},on:{"update:bounds":function(t){e.bounds=t},mouseover:e.collapseAllMenus,mousedown:e.onMapClicked}},[o("LTileLayer",{key:e.tileProvider.name,attrs:{name:e.tileProvider.name,url:e.tileProvider.url,attribution:e.tileProvider.attribution,minNativeZoom:e.tileProvider.minNativeZoom,options:{maxNativeZoom:e.tileProvider.maxNativeZoom,maxZoom:100},"layer-type":"base"}}),e.showEsiaLayer?o("LLayerGroup",{attrs:{"layer-type":"overlay",name:"ESIA"}},[o("LGeoJson",{attrs:{geojson:e.esia,options:e.options}})],1):e._e(),e.showIesiaLayer?o("LLayerGroup",{attrs:{"layer-type":"overlay",name:"IESIA"}},[o("LGeoJson",{attrs:{geojson:e.iesia,options:e.options}})],1):e._e(),e.showEpcLayer?o("LLayerGroup",{attrs:{"layer-type":"overlay",name:"EPC"}},[o("LGeoJson",{attrs:{geojson:e.epc,options:e.options}})],1):e._e(),e.showExpiredLayer?o("LLayerGroup",{attrs:{"layer-type":"overlay",name:"Expired"}},[o("LGeoJson",{attrs:{geojson:e.expired,options:e.options}})],1):e._e(),e._e(),o("LLayerGroup",{attrs:{"layer-type":"overlay",name:"Selected Features"}},[o("LGeoJson",{attrs:{geojson:e.selectedFeatures,options:e.optionSelectedFeatures}})],1),o("LLayerGroup",{attrs:{"layer-type":"overlay",name:"Buffer Selected Features"}},[o("LGeoJson",{attrs:{geojson:e.bufferedSelectedFeatures,options:e.optionSelectedFeatures}})],1),o("LControl",{staticClass:"pop-menu"},[o("PopMenu",{on:{selected:e.menuSelected},model:{value:e.expandMenu,callback:function(t){e.expandMenu=t},expression:"expandMenu"}})],1),o("LControl",{staticClass:"pop-menu"},[o("LayerMenu",{on:{onBasemapChanged:e.onBasemapChanged,"esia-layer-checked":e.toggleEsiaLayer,"iesia-layer-checked":e.toggleIesiaLayer,"epc-layer-checked":e.toggleEpcLayer,"expired-layer-checked":e.toggleExpiredLayer},model:{value:e.expandLayerMenu,callback:function(t){e.expandLayerMenu=t},expression:"expandLayerMenu"}})],1),o("LControl",{staticClass:"custom-control-watermark watermark",attrs:{position:"topleft"}},[o("img",{attrs:{src:e.watermark,width:e.windowWidth/(e.smallScreen()?3:8)}})]),o("LControlZoom",{attrs:{position:"topright"}}),o("LControl",{staticClass:"chart-panel",attrs:{position:"bottomleft"}},[o("FloatingPanel",[e.showChart?o("Dashboard",{attrs:{height:300,width:e.chartWidth},on:{"close-chart":function(t){e.showChart=!1}}}):e._e()],1)],1)],1)],1)},f=[],m=(o("a9e3"),o("cb29"),o("161b")),g=o("761f"),y=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{on:{mouseover:function(t){e.toggleShowMenu=!0},mouseleave:function(t){e.toggleShowMenu=!1}}},[o("ul",{class:"main-menu "+(e.value?"button-close":""),on:{click:function(t){return e.$emit("input",!e.value)}}},[o("li",[o("a",{attrs:{href:"#"}},[o("i",{class:e.mainMenuClass,attrs:{"aria-hidden":"true"}}),e._v(" "+e._s(e.value?"Cancal":"")+" ")])])]),e.value?o("div",[o("ul",{staticClass:"menu"},[o("li",[o("a",{attrs:{href:"#"},on:{click:function(t){return e.onClick(0)}}},[o("i",{staticClass:"fa fa-chart-line",attrs:{"aria-hidden":"true"}}),e._v(" ក្រាហ្វិក ")])]),o("li",[o("a",{attrs:{href:"#"},on:{click:function(t){return e.onClick(1)}}},[o("i",{staticClass:"fa fa-list",attrs:{"aria-hidden":"true"}}),e._v(" បញ្ជីគម្រោង ")])]),o("li",[o("a",{attrs:{href:"#"},on:{click:function(t){return e.onClick(2)}}},[o("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}}),e._v(" Search ")])])])]):e._e()])},v=[],w={name:"PopMenu",props:{value:{type:Boolean,default:!1}},components:{},data:function(){return{}},methods:{onClick:function(e){this.$emit("input",!1),this.$emit("selected",e)}},computed:{toggleShowMenu:{get:function(){return this.expanded},set:function(e){this.$emit("input",e)}},mainMenuClass:function(){return this.value?"fa fa-times button-close":"fa fa-bars"}},watch:{}},b=w,L=(o("f1fb"),Object(l["a"])(b,y,v,!1,null,"585aed5b",null)),S=L.exports,x=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{on:{mouseover:function(t){e.toggleShowMenu=!0},mouseleave:function(t){e.toggleShowMenu=!1}}},[o("ul",{class:"main-menu "+(e.value?"button-close":""),on:{click:function(t){return e.$emit("input",!e.value)}}},[o("li",[o("a",{attrs:{href:"#"}},[o("i",{class:e.mainMenuClass,attrs:{"aria-hidden":"true"}}),e._v(" "+e._s(e.value?"Cancal":"")+" ")])])]),e.value?o("div",[e._v(" Layers: "),o("div",{staticClass:"layer-control"},[o("label",{attrs:{for:"esia-layer"},on:{click:function(t){return e.onLayerSelected("esia-layer-checked",e.toggleShowEsiaLayer)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.toggleShowEsiaLayer,expression:"toggleShowEsiaLayer"}],attrs:{type:"checkbox",id:"esia-layer"},domProps:{checked:Array.isArray(e.toggleShowEsiaLayer)?e._i(e.toggleShowEsiaLayer,null)>-1:e.toggleShowEsiaLayer},on:{change:function(t){var o=e.toggleShowEsiaLayer,a=t.target,r=!!a.checked;if(Array.isArray(o)){var n=null,i=e._i(o,n);a.checked?i<0&&(e.toggleShowEsiaLayer=o.concat([n])):i>-1&&(e.toggleShowEsiaLayer=o.slice(0,i).concat(o.slice(i+1)))}else e.toggleShowEsiaLayer=r}}}),o("i",{staticClass:"far fa-square",style:e.esiaLegendStyle,attrs:{"aria-hidden":"true"}}),e._v(" ESIA ")])]),o("div",{staticClass:"layer-control"},[o("label",{attrs:{for:"iesia-layer"},on:{click:function(t){return e.onLayerSelected("iesia-layer-checked",e.toggleShowIesiaLayer)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.toggleShowIesiaLayer,expression:"toggleShowIesiaLayer"}],attrs:{type:"checkbox",id:"iesia-layer"},domProps:{checked:Array.isArray(e.toggleShowIesiaLayer)?e._i(e.toggleShowIesiaLayer,null)>-1:e.toggleShowIesiaLayer},on:{change:function(t){var o=e.toggleShowIesiaLayer,a=t.target,r=!!a.checked;if(Array.isArray(o)){var n=null,i=e._i(o,n);a.checked?i<0&&(e.toggleShowIesiaLayer=o.concat([n])):i>-1&&(e.toggleShowIesiaLayer=o.slice(0,i).concat(o.slice(i+1)))}else e.toggleShowIesiaLayer=r}}}),o("i",{staticClass:"far fa-square",style:e.iesiaLegendStyle,attrs:{"aria-hidden":"true"}}),e._v(" IESIA ")])]),o("div",{staticClass:"layer-control"},[o("label",{attrs:{for:"epc-layer"},on:{click:function(t){return e.onLayerSelected("epc-layer-checked",e.toggleShowEpcLayer)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.toggleShowEpcLayer,expression:"toggleShowEpcLayer"}],attrs:{type:"checkbox",id:"epc-layer"},domProps:{checked:Array.isArray(e.toggleShowEpcLayer)?e._i(e.toggleShowEpcLayer,null)>-1:e.toggleShowEpcLayer},on:{change:function(t){var o=e.toggleShowEpcLayer,a=t.target,r=!!a.checked;if(Array.isArray(o)){var n=null,i=e._i(o,n);a.checked?i<0&&(e.toggleShowEpcLayer=o.concat([n])):i>-1&&(e.toggleShowEpcLayer=o.slice(0,i).concat(o.slice(i+1)))}else e.toggleShowEpcLayer=r}}}),o("i",{staticClass:"far fa-square",style:e.epcLegendStyle,attrs:{"aria-hidden":"true"}}),e._v(" EPC ")])]),o("div",{staticClass:"layer-control"},[o("label",{attrs:{for:"expired-layer"},on:{click:function(t){return e.onLayerSelected("expired-layer-checked",e.toggleShowExpiredLayer)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.toggleShowExpiredLayer,expression:"toggleShowExpiredLayer"}],attrs:{type:"checkbox",id:"expired-layer"},domProps:{checked:Array.isArray(e.toggleShowExpiredLayer)?e._i(e.toggleShowExpiredLayer,null)>-1:e.toggleShowExpiredLayer},on:{change:function(t){var o=e.toggleShowExpiredLayer,a=t.target,r=!!a.checked;if(Array.isArray(o)){var n=null,i=e._i(o,n);a.checked?i<0&&(e.toggleShowExpiredLayer=o.concat([n])):i>-1&&(e.toggleShowExpiredLayer=o.slice(0,i).concat(o.slice(i+1)))}else e.toggleShowExpiredLayer=r}}}),o("i",{staticClass:"far fa-square",style:e.expiredLegendStyle,attrs:{"aria-hidden":"true"}}),e._v(" Expired ")])]),o("br"),e._v(" Basemaps: "),o("div",{staticClass:"basemaps"},e._l(e.basemaps,(function(t){return o("div",{key:t.id},[o("label",{attrs:{for:t.id},on:{click:function(o){return e.onBasemapChanged(t)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedBasemap,expression:"selectedBasemap"}],attrs:{type:"radio",name:t.name,id:t.id},domProps:{value:t.id,checked:e._q(e.selectedBasemap,t.id)},on:{change:function(o){e.selectedBasemap=t.id}}}),o("img",{attrs:{src:e.rasterIcon,width:"18"}}),e._v(" "+e._s(t.name)+" ")])])})),0),o("br")]):e._e()])},_=[],C=o("d263"),k=o.n(C),E=o("1748"),j=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"field__radio",class:[e.value===e.v_value?"field__radio--checked":""]},[o("label",{attrs:{for:e.id},on:{click:e.onClick}},[o("input",{attrs:{type:"radio",name:e.name,id:e.id},domProps:{value:e.label}}),o("img",{attrs:{src:e.url,width:"22"}}),e._v(" "+e._s(e.label)+" ")])])},O=[],I={name:"InputRadio",props:{value:{},v_value:{},label:{type:String,default:""},name:{type:String,default:""},id:{type:String,default:""},url:{type:String,default:""}},methods:{onClick:function(){this.$emit("input",this.v_value),console.log(this.v_value)}}},P=I,A=Object(l["a"])(P,j,O,!1,null,null,null),F=A.exports,M={name:"PopMenu",props:{value:{type:Boolean,default:!1}},components:{InputRadio:F},data:function(){return{selectedBasemap:"0",toggleShowEsiaLayer:!0,toggleShowIesiaLayer:!0,toggleShowEpcLayer:!0,toggleShowExpiredLayer:!1,basemaps:E,rasterIcon:k.a}},methods:{onBasemapChanged:function(e){this.$emit("onBasemapChanged",e)},onLayerSelected:function(e,t){this.$emit(e,!t)}},computed:{toggleShowMenu:{get:function(){return this.expanded},set:function(e){this.$emit("input",e)}},mainMenuClass:function(){return this.value?"fa fa-times button-close":"fa fa-layer-group"},esiaLegendStyle:function(){return"color:".concat(g["a"].colors.esia,"; font-size:16px; font-weight:bold")},iesiaLegendStyle:function(){return"color:".concat(g["a"].colors.iesia,"; font-size:16px; font-weight:bold")},epcLegendStyle:function(){return"color:".concat(g["a"].colors.epc,"; font-size:16px; font-weight:bold")},expiredLegendStyle:function(){return"color:".concat(g["a"].colors.expired,"; font-size:16px; font-weight:bold")}},watch:{}},B=M,N=(o("ed32"),Object(l["a"])(B,x,_,!1,null,"eaf4e866",null)),z=N.exports,G=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"panel",style:e.size},[e._t("default")],2)},T=[],W=(o("99af"),{name:"FloatingPanel",props:{width:{type:Number,default:0},height:{type:Number,default:300}},computed:{size:function(){return"width: ".concat(this.width,"px; height: ").concat(this.height,"px; ")}}}),Z=W,$=(o("9e28"),Object(l["a"])(Z,G,T,!1,null,"ca97f728",null)),J=$.exports,H=o("7277"),D=(o("ac1f"),o("5319"),o("5b81"),o("1276"),{en2kh:function(e){for(var t="០១២៣៤៥៦៧៨៩",o="0123456789",a=e,r=0;r<o.length;r++)a=a.replaceAll(o[r],t[r]);return a},format_date:function(e){var t=e.split("-");return 3!==t.length?e:t[2]+"-"+t[1]+"-"+t[0]},html_row:function(e,t,o){return'<tr>                    <th scope="row">'+e+"</th>                    <td>"+t+o+"</td>                </tr>\n"},row:function(e,t,o){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=e.properties[t];return null!==r?this.html_row(o,r,a):""},row_kh:function(e,t,o){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=e.properties[t];return null==r?"":this.html_row(o,this.en2kh(r),a)},row_date:function(e,t,o){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=e.properties[t];return null==r?"":(r=this.format_date(r),this.html_row(o,this.en2kh(r),a))},create_table:function(e){var t="<table>\n";return t+=this.row(e,"owner_kh","Owner KH"),t+=this.row(e,"owner_en","Owner EN"),t+=this.row(e,"type","Type"),t+=this.row(e,"area_li_ha","Size"," Ha"),t+=this.row(e,"lic_type","License"),t+=this.row(e,"loc_khet","Provice"),t+=this.row(e,"loc_srok","District"),t+=this.row(e,"loc_khum","Commune"),t+=this.row(e,"loc_phum","Village"),t+=this.row(e,"loc_name","Location Name"),t+=this.row_date(e,"lic_date","Issued"),t+=this.row_kh(e,"lic_number","Number"," សជណ.បស្ថ"),t+=this.row(e,"status","Status"),t+=this.row(e,"team","Team"),t+=this.row(e,"added_by","Added by"),t+=this.row(e,"reference","Reference"),t+=this.row(e,"pro_code","Code"),t+=this.row(e,"remark","Remark"),t+="</table>",t}}),Y=o("d5b3"),R=o.n(Y),q=o("e11e"),V=o("4eaa"),K=o("2699"),U=o("fbba"),X=o("4e2b6"),Q=o("9ee8"),ee=o("f60f"),te=o("635f"),oe=o("258a"),ae=o("fb8e"),re=o("a40a"),ne=o("1ebb"),ie=o("2253"),se=o("c8b6"),ce=o("044a"),le=o("595b"),ue=[{lat:10.79,lng:102.14},{lat:14.525,lng:107.0343}],de=Object(q["latLngBounds"])(ue),pe={name:"Home",props:{windowHeight:Number,windowWidth:Number},components:{LMap:K["a"],LIcon:U["a"],LMarker:X["a"],LControlLayers:Q["a"],LPopup:ee["a"],LPolyline:te["a"],LPolygon:oe["a"],LRectangle:ae["a"],LTileLayer:re["a"],LLayerGroup:ne["a"],LControl:ie["a"],LControlZoom:se["a"],LGeoJson:ce["a"],PopMenu:S,LayerMenu:z,FloatingPanel:J,Dashboard:H["default"]},beforeCreate:function(){var e="https://eia-moe.github.io/map-dist/d/projects",t={json:!0},a=o("30dc");a(e,t,(function(e,t,o){if(e)return console.log(e);e||200!=t.statusCode||i["a"].commit("initProjectList",o)}))},data:function(){return{isLoading:!0,fillColor:"#e4ce7f",watermark:R.a,bounds:de,mapOptions:{zoomControl:!1,attributionControl:!1,zoomSnap:!0},tileProvider:E[0],expandMenu:!1,expandLayerMenu:!1,points:ue,showChart:!1,showEsiaLayer:!0,showIesiaLayer:!0,showEpcLayer:!0,showExpiredLayer:!1}},computed:{esia:function(){return i["a"].getters.esiaGeoJson},iesia:function(){return i["a"].getters.iesiaGeoJson},epc:function(){return i["a"].getters.epcGeoJson},expired:function(){return i["a"].getters.expiredGeoJson},selectedFeatures:function(){return i["a"].getters.selectedFeatures},bufferedSelectedFeatures:function(){var e=i["a"].getters.selectedFeatures,t=V["a"].geojson.isEmpty(e);return console.log("isEmpty:",t),console.log(e),t?V["a"].geojson.empty():le.buffer(e,5)},optionSelectedFeatures:function(){return{onEachFeature:this.onEachFeatureFunction,style:function(e){return{fillColor:"yellow",color:"yellow",weight:2,opacity:.8,fillOpacity:.6}}}},options:function(){return{onEachFeature:this.onEachFeatureFunction,style:function(e){return V["a"].getExpiryStatus(e)===g["a"].expiry.expired?{weight:2,color:g["a"].colors.expired,opacity:1,fillColor:g["a"].colors.fill,fillOpacity:.5}:"ESIA"===e.properties.lic_type?{weight:3,color:g["a"].colors.esia,opacity:1,fillColor:g["a"].colors.fill,fillOpacity:.3}:"IESIA"===e.properties.lic_type?{weight:3,color:g["a"].colors.iesia,opacity:1,fillColor:g["a"].colors.fill,fillOpacity:.3}:"EPC"===e.properties.lic_type?{weight:3,color:g["a"].colors.epc,opacity:1,fillColor:g["a"].colors.fill,fillOpacity:.3}:{weight:2,color:g["a"].colors.others,opacity:1,fillColor:g["a"].colors.fill,fillOpacity:.1}}}},onEachFeatureFunction:function(){return function(e,t){var o=function(t){var o=V["a"].featureSelected(i["a"].getters.selectedFeatures,e);if(!o){var a=e.properties.pro_code;i["a"].dispatch("setSelectionFilter",(function(e){return a===e.properties.pro_code}))}};t.on("click",o);var a=D.create_table(e),r={permanent:!1,sticky:!0};t.bindPopup(a,r)}},chartWidth:function(){return this.smallScreen()?this.windowWidth-23:600}},mounted:function(){var e=this,t=this;m["a"].unsubscribe(g["a"].events.mapGotoBounds),m["a"].subscribe(g["a"].events.mapGotoBounds,(function(e){t.bounds=Object(q["latLngBounds"])(e.data)})),this.isLoading=!0,setTimeout((function(){e.isLoading=!1}),5e3)},methods:{smallScreen:function(){return this.windowWidth<600},isLandscape:function(){return this.windowWidth>this.windowHeight},menuSelected:function(e){0===e&&(this.showChart=!this.showChart)},onBasemapChanged:function(e){this.tileProvider=e},toggleEsiaLayer:function(e){this.showEsiaLayer=e},toggleIesiaLayer:function(e){this.showIesiaLayer=e},toggleEpcLayer:function(e){this.showEpcLayer=e},toggleExpiredLayer:function(e){this.showExpiredLayer=e},onMenuChange:function(e){this.expandMenu=e},collapseAllMenus:function(){this.expandLayerMenu=!1,this.expandMenu=!1},onMapClicked:function(){this.collapseAllMenus()},buffer:function(e,t){var o=le.buffer(e,t);return console.log(o),o}},watch:{}},he=pe,fe=(o("1906"),Object(l["a"])(he,h,f,!1,null,"674d003e",null)),me=fe.exports;a["a"].use(p["a"]);var ge=[{path:"/",name:"Home",component:me},{path:"/dashboard",name:"Dashboard",component:function(){return Promise.resolve().then(o.bind(null,"7277"))}},{path:"/:catchAll(.*)*",name:"PageNotFound",component:function(){return o.e("chunk-2d208bfd").then(o.bind(null,"a5b5"))}}],ye=new p["a"]({mode:"history",base:"/map-dist/",routes:ge}),ve=ye;o("6cc5");a["a"].config.productionTip=!1,new a["a"]({router:ve,store:i["a"],render:function(e){return e(d)}}).$mount("#app")},5937:function(e,t,o){},6:function(e,t){},6352:function(e,t,o){},"6c88":function(e,t,o){"use strict";o("1756")},7:function(e,t){},7277:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"chart-display",style:e.size},[o("div",{staticClass:"fa fa-times close-button",on:{click:function(t){return e.$emit("close-chart")}}}),o("chart-selector",{staticClass:"chart-selector",on:{selectChanged:e.chartSelected}}),0==e.selectedChart?o("ChartAbstract"):e._e(),1==e.selectedChart?o("ChartByYear"):e._e(),2==e.selectedChart?o("ChartByProvince"):e._e(),3==e.selectedChart?o("ChartByType"):e._e(),4==e.selectedChart?o("ChartByCategory"):e._e()],1)},r=[],n=(o("a9e3"),o("d3b7"),o("3ca3"),o("ddb0"),o("99af"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"selector"},[e._v(" "+e._s(e.title||"ជ្រើសរើសក្រាហ្វិក៖")+" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedItem,expression:"selectedItem"}],on:{change:[function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedItem=t.target.multiple?o:o[0]},e.selectChanged]}},[o("option",{attrs:{value:"0"}},[e._v("សង្ខេបរួម")]),o("option",{attrs:{value:"1"}},[e._v("បែងចែកតាមឆ្នាំ")]),o("option",{attrs:{value:"2"}},[e._v("បែងចែកតាម​ខេត្ត")]),o("option",{attrs:{value:"3"}},[e._v("បែងចែកតាម​ចំណាត់ថ្នាក់គម្រោង")]),o("option",{attrs:{value:"4"}},[e._v("បែងចែកតាម​ប្រភេទគម្រោង")])])])}),i=[],s={name:"ChartAbstract",data:function(){return{selectedItem:"0"}},props:{title:String},methods:{selectChanged:function(e){this.$emit("selectChanged",this.selectedItem)}}},c=s,l=(o("6c88"),o("2877")),u=Object(l["a"])(c,n,i,!1,null,"1fcadc7d",null),d=u.exports,p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("vue-highcharts",{ref:"myCharts",attrs:{options:e.options,plotOptions:e.plotOptions}})],1)},h=[],f=o("2909"),m=o("5530"),g=(o("d81d"),o("b0c0"),o("161b")),y=o("604f"),v=o.n(y),w=o("ea7f"),b=o.n(w),L=o("4360"),S=o("4eaa"),x=o("761f"),_={name:"ChartAbstract",events:["goto-bounds"],components:{VueHighcharts:v.a},data:function(){return{options:null,plotOptions:null,Highcharts:b.a}},methods:{chartSelected:function(e){this.selectedChart=e},smallScreen:function(){return L["a"].getters.windowWidth<=600}},computed:{},mounted:function(){var e=L["a"].getters.geojson,t=e.features,o=S["a"].groupFeaturesByYears(t),a=S["a"].getLabelAndData(o),r=a.labels,n=a.data,i=n.map((function(e){return S["a"].countFeaturesByTypes(e)})),s={type:"column",name:"ESIA",data:[],color:x["a"].colors.esia},c=Object(m["a"])(Object(m["a"])({},s),{},{name:"IESIA",data:[],color:x["a"].colors.iesia}),l=Object(m["a"])(Object(m["a"])({},s),{},{name:"EPC",data:[],color:x["a"].colors.epc}),u=(Object(m["a"])(Object(m["a"])({},s),{},{name:"Expired",data:[],color:x["a"].colors.expired}),{type:"line",name:"សរុប",data:[],marker:{lineWidth:2,lineColor:b.a.getOptions().colors[3],fillColor:"white"}});for(var d in i)if(Object.hasOwnProperty.call(i,d)){var p,h,y,v=i[d],w=null!==(p=v["ESIA"])&&void 0!==p?p:0,_=null!==(h=v["IESIA"])&&void 0!==h?h:0,C=null!==(y=v["EPC"])&&void 0!==y?y:0;s.data=[].concat(Object(f["a"])(s.data),[w]),c.data=[].concat(Object(f["a"])(c.data),[_]),l.data=[].concat(Object(f["a"])(l.data),[C]),u.data=[].concat(Object(f["a"])(u.data),[w+_+C])}var k=s.data.reduce((function(e,t){return e+t}),0),E=c.data.reduce((function(e,t){return e+t}),0),j=l.data.reduce((function(e,t){return e+t}),0),O=k+E+j,I={type:"pie",name:"Total Projects",data:[{name:"ESIA",y:k,color:x["a"].colors.esia},{name:"IESIA",y:E,color:x["a"].colors.iesia},{name:"EPC",y:j,color:x["a"].colors.epc}],center:[45,50],size:100,showInLegend:!1,dataLabels:{enabled:!1}},P=(this.$emit,{pie:{cursor:"pointer",point:{events:{click:function(e){var t=e.point.x,o=I.data[t].name,a=function(e){var t=S["a"].getType(e);return t===o};L["a"].dispatch("setSelectionFilter",a);var r=S["a"].getBounds(L["a"].getters.selectedFeatures);g["a"].publish({type:x["a"].events.mapGotoBounds,data:r})}}}},column:{cursor:"pointer",point:{events:{click:function(e){var t=e.point.x,o=e.point.series.name,a=function(e){var a=S["a"].getYear(e),n=S["a"].getType(e);return a===x["a"].labelOtherYears?a===r[t]&&n===o:a===Number(r[t])&&n===o};L["a"].dispatch("setSelectionFilter",a);var n=S["a"].getBounds(L["a"].getters.selectedFeatures);g["a"].publish({type:x["a"].events.mapGotoBounds,data:n})}}}}}),A=[s,c,l,u,I],F=S["a"].en2kh(O),M={allowPointSelect:!0,title:{text:"ចំនួនគម្រោងបង្ហាញ​នៅ​លើ​ផែនទី \n (សរុប ".concat(F," គម្រោង)")},chart:{height:350},xAxis:{categories:r},yAxis:{title:{text:"ចំនួនគម្រោង"}},labels:{items:[{html:"ចំនួន​ទៅតាម​ចំណាត់ថ្នាក់",style:{left:"10px",top:"0px",color:b.a.theme&&b.a.theme.textColor||"black"}}]},credits:{enabled:!1},series:A,plotOptions:P};this.options=M}},C=_,k=Object(l["a"])(C,p,h,!1,null,null,null),E=k.exports,j={name:"Dashboard",props:{width:{type:Number,default:300},height:{type:Number,default:300}},components:{ChartSelector:d,ChartAbstract:E,ChartByYear:function(){return o.e("chunk-2d22fd2e").then(o.bind(null,"ea51"))},ChartByCategory:function(){return o.e("chunk-2d0ba6db").then(o.bind(null,"36bd"))},ChartByProvince:function(){return o.e("chunk-2d0e5240").then(o.bind(null,"92e6"))},ChartByType:function(){return o.e("chunk-2d2183fc").then(o.bind(null,"c9d4"))}},data:function(){return{selectedChart:0}},computed:{size:function(){return"width: ".concat(this.width,"px; height: ").concat(this.height,"px; ")}},methods:{chartSelected:function(e){this.selectedChart=e}}},O=j,I=(o("2b56"),Object(l["a"])(O,a,r,!1,null,null,null));t["default"]=I.exports},"761f":function(e,t,o){"use strict";t["a"]={expiry:{active:"Active",expired:"Expired",NA:"Not-Available"},labelOtherYears:"Unknown",labelUnknownProjectType:"Unknown",mainChartColor:"#9F4BF2",colors:{esia:"rgba(13,202,0,1.0)",iesia:"rgba(1,170,255,1.0)",epc:"#F50900",expired:"#DDD",others:"#EDE500",fill:"#CCC"},events:{mapGotoBounds:"map-goto-bounds"}}},8:function(e,t){},"85ec":function(e,t,o){},8615:function(e,t,o){},9:function(e,t){},"9e28":function(e,t,o){"use strict";o("5937")},d263:function(e,t,o){e.exports=o.p+"img/raster.b5e29c5d.png"},d5b3:function(e,t,o){e.exports=o.p+"img/watermark.e50dbe09.png"},ed32:function(e,t,o){"use strict";o("6352")},f1fb:function(e,t,o){"use strict";o("8615")}});
//# sourceMappingURL=app.36fb9876.js.map