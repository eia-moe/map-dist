(function(e){function t(t){for(var n,i,s=t[0],c=t[1],l=t[2],u=0,h=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(h.length)h.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},o={app:0},r=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d0ba6db":"df738ba3","chunk-2d0e5240":"3bf3e3cd","chunk-2d208bfd":"e96969b4","chunk-2d2183fc":"114026c3","chunk-2d22fd2e":"fa3a10a6"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a=o[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var l=new Error;r=function(t){c.onerror=c.onload=null,clearTimeout(u);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,a[1](l)}o[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/map-dist/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"03f7":function(e,t,a){"use strict";a("0bcf")},"09e0":function(e,t,a){},"0bcf":function(e,t,a){},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},1748:function(e){e.exports=JSON.parse('[{"id":"0","name":"Google Hybrid","visible":true,"minNativeZoom":0,"maxNativeZoom":19,"attribution":"&copy; <a target=\\"_blank\\" href=\\"eia.moe\\">Testing Only</a>","url":"https://mt.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"},{"id":"2","name":"Google Road Map","visible":true,"minNativeZoom":0,"maxNativeZoom":19,"attribution":"&copy; <a target=\\"_blank\\" href=\\"eia.moe\\">Testing Only</a>","url":"https://mt.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"},{"id":"3","name":"Open Street Map","visible":false,"minNativeZoom":0,"maxNativeZoom":19,"attribution":"&copy; <a target=\\"_blank\\" href=\\"http://osm.org/copyright\\">OpenStreetMap</a>","url":"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"},{"id":"4","name":"Apple Satellite","visible":false,"minNativeZoom":0,"maxNativeZoom":19,"url":"https://api.mapbox.com/styles/v1/initru/cjb1sr77mdq7t2rn7pkb0brzc/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaW5pdHJ1IiwiYSI6ImNqYXNiczcyYTFrODYyeG1pdmk2cXZlemMifQ.llXkc2vY4v-Cc31k19SAkg","attribution":"&copy; <a target=\\"_blank\\" href=\\"eia.moe\\">Testing Only</a>"},{"id":"5","name":"ESRI Topo","visible":false,"minNativeZoom":0,"maxNativeZoom":15,"url":"http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}","attribution":"Map data: &copy; <a href=\\"http://www.esri.com\\">esri.com</a>"},{"id":"6","name":"ESRI Satellite","visible":false,"minNativeZoom":0,"maxNativeZoom":17,"url":"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}","attribution":"Map data: &copy; <a href=\\"http://www.esri.com\\">esri.com</a>"},{"id":"7","name":"ESRI Shaded Relief","visible":false,"minNativeZoom":0,"maxNativeZoom":13,"url":"https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}","attribution":"Map data: &copy; <a href=\\"http://www.esri.com\\">esri.com</a>"},{"id":"8","name":"JICA100K","visible":false,"minNativeZoom":0,"maxNativeZoom":15,"url":"https://raw.githubusercontent.com/kunthet/jica100k/master/JICA100K/{z}/{x}/{y}.jpg","attribution":"Map data: &copy; <a href=\\"http://www.esri.com\\">esri.com</a>"}]')},1756:function(e,t,a){},2:function(e,t){},"2b56":function(e,t,a){"use strict";a("09e0")},3:function(e,t){},4:function(e,t){},4360:function(e,t,a){"use strict";var n=a("2b0e"),o=a("2f62"),r=a("4eaa");n["a"].use(o["a"]),t["a"]=new o["a"].Store({state:{dataLoaded:!1,projects:{features:[]},windowWidth:0,windowHeight:0},mutations:{initProjectList:function(e,t){e.projects=t},windowSize:function(e,t,a){e.windowWidth=t,e.windowHeight=a}},getters:{geojson:function(e,t){return e.projects},esiaGeoJson:function(e,t){return r["a"].filterGeoJson(t.geojson,"lic_type","ESIA")},iesiaGeoJson:function(e,t){return r["a"].filterGeoJson(t.geojson,"lic_type","IESIA")},epcGeoJson:function(e,t){return r["a"].filterGeoJson(t.geojson,"lic_type","EPC")},windowWidth:function(e){return e.windowWidth}},actions:{},modules:{}})},"4eaa":function(e,t,a){"use strict";var n=a("5530"),o=a("2909"),r=(a("b64b"),a("07ac"),a("4ec9"),a("d3b7"),a("3ca3"),a("ddb0"),a("99af"),a("ac1f"),a("1276"),a("498a"),a("4de4"),a("761f"));t["a"]={getYear:function(e){var t=r["a"].labelOtherYears,a=this.getDate(e);if(!a)return t;var n=a.getFullYear();return isNaN(n)?t:n},getDate:function(e){var t=e.properties.lic_date;return t?new Date(t):null},getType:function(e){return e.properties.lic_type},getLabelAndData:function(e){var t=Object.keys(e),a=Object.values(e);return{labels:t,data:a}},countValuesInMap:function(e){var t=new Map;for(var a in e)if(Object.hasOwnProperty.call(e,a)){var n=e[a];t[a]=n.length}return t},countFeaturesByTypes:function(e){var t=this.groupFeaturesByTypes(e);return this.countValuesInMap(t)},countFeaturesByYears:function(e){var t=this.groupFeaturesByYears(e);return this.countValuesInMap(t)},countFeaturesByProvinces:function(e){var t=this.groupFeaturesByProvinces(e);return this.countValuesInMap(t)},groupFeaturesBy:function(e,t){return e.reduce((function(e,a){return(e[a.properties[t]]=e[a.properties[t]]||[]).push(a),e}),{})},groupFeaturesByTypes:function(e){return this.groupFeaturesBy(e,"lic_type")},groupFeaturesByYears:function(e){var t=new Map;for(var a in e)if(Object.hasOwnProperty.call(e,a)){var n=e[a],r=this.getYear(n),i=t[r];t[r]=i?[].concat(Object(o["a"])(i),[n]):[n]}return t},groupFeaturesByProvinces:function(e){for(var t=new Map,a=0;a<e.length;a++){var n=e[a];if(n.properties&&n.properties.loc_khet)for(var r=n.properties.loc_khet.split(","),i=0;i<r.length;i++){var s=r[i].trim(),c=t[s];t[s]=c?[].concat(Object(o["a"])(c),[n]):[n]}}return t},filterByProperty:function(e,t,a){return e.filter((function(e){return e.properties[t]===a}))},filterGeoJson:function(e,t,a){var o=this.filterByProperty(e.features,t,a);return Object(n["a"])(Object(n["a"])({},e),{},{features:o})}}},5:function(e,t){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-view",{attrs:{windowWidth:e.windowWidth,windowHeight:e.windowHeight}})},r=[],i=a("4360"),s={name:"App",data:function(){return{windowHeight:window.innerHeight,windowWidth:window.innerWidth}},mounted:function(){var e=this;this.$nextTick((function(){window.addEventListener("resize",e.onResize),i["a"].commit("windowSize",window.innerWidth,window.innerHeight)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},methods:{onResize:function(){this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,i["a"].commit("windowSize",this.windowWidth,this.windowHeight)}}},c=s,l=(a("034f"),a("2877")),u=Object(l["a"])(c,o,r,!1,null,null,null),d=u.exports,h=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("LMap",{style:e.mapScreen,attrs:{bounds:e.bounds,center:e.center,zoom:e.zoom,"max-zoom":20,options:e.mapOptions},on:{"update:bounds":function(t){e.bounds=t},"update:center":function(t){e.center=t},"update:zoom":function(t){e.zoom=t},mouseover:e.collapseAllMenus,mousedown:e.collapseAllMenus}},[a("LTileLayer",{key:e.tileProvider.name,attrs:{name:e.tileProvider.name,url:e.tileProvider.url,attribution:e.tileProvider.attribution,minNativeZoom:e.tileProvider.minNativeZoom,options:{maxNativeZoom:e.tileProvider.maxNativeZoom,maxZoom:100},"layer-type":"base"}}),e.showEsiaLayer?a("LLayerGroup",{attrs:{"layer-type":"overlay",name:"ESIA"}},[a("LGeoJson",{attrs:{geojson:e.esia,options:e.options}})],1):e._e(),e.showIesiaLayer?a("LLayerGroup",{attrs:{"layer-type":"overlay",name:"IESIA"}},[a("LGeoJson",{attrs:{geojson:e.iesia,options:e.options}})],1):e._e(),e.showEpcLayer?a("LLayerGroup",{attrs:{"layer-type":"overlay",name:"EPC"}},[a("LGeoJson",{attrs:{geojson:e.epc,options:e.options}})],1):e._e(),e._e(),a("LControl",{staticClass:"pop-menu"},[a("PopMenu",{on:{selected:e.menuSelected},model:{value:e.expandMenu,callback:function(t){e.expandMenu=t},expression:"expandMenu"}})],1),a("LControl",{staticClass:"pop-menu"},[a("LayerMenu",{on:{onBasemapChanged:e.onBasemapChanged,"esia-layer-checked":e.toggleEsiaLayer,"iesia-layer-checked":e.toggleIesiaLayer,"epc-layer-checked":e.toggleEpcLayer},model:{value:e.expandLayerMenu,callback:function(t){e.expandLayerMenu=t},expression:"expandLayerMenu"}})],1),a("LControl",{staticClass:"custom-control-watermark watermark",attrs:{position:"topleft"}},[a("img",{attrs:{src:e.watermark,width:e.windowWidth/(e.smallScreen()?3:8)}})]),a("l-control-zoom",{attrs:{position:"topright"}})],1),e.showChart?a("Dashboard",{style:e.chartScreen,on:{"close-chart":function(t){e.showChart=!1}}}):e._e()],1)},f=[],m=a("1da1"),g=(a("96cf"),a("a9e3"),a("cb29"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{on:{mouseover:function(t){e.toggleShowMenu=!0},mouseleave:function(t){e.toggleShowMenu=!1}}},[a("ul",{class:"main-menu "+(e.value?"button-close":""),on:{click:function(t){return e.$emit("input",!e.value)}}},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{class:e.mainMenuClass,attrs:{"aria-hidden":"true"}}),e._v(" "+e._s(e.value?"Cancal":"")+" ")])])]),e.value?a("div",[a("ul",{staticClass:"menu"},[a("li",[a("a",{attrs:{href:"#"},on:{click:function(t){return e.onClick(0)}}},[a("i",{staticClass:"fa fa-chart-line",attrs:{"aria-hidden":"true"}}),e._v(" ក្រាហ្វិក ")])]),a("li",[a("a",{attrs:{href:"#"},on:{click:function(t){return e.onClick(1)}}},[a("i",{staticClass:"fa fa-list",attrs:{"aria-hidden":"true"}}),e._v(" បញ្ជីគម្រោង ")])]),a("li",[a("a",{attrs:{href:"#"},on:{click:function(t){return e.onClick(2)}}},[a("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}}),e._v(" Search ")])])])]):e._e()])}),y=[],v={name:"PopMenu",props:{value:{type:Boolean,default:!1}},components:{},data:function(){return{}},methods:{onClick:function(e){this.$emit("input",!1),this.$emit("selected",e)}},computed:{toggleShowMenu:{get:function(){return this.expanded},set:function(e){this.$emit("input",e)}},mainMenuClass:function(){return this.value?"fa fa-times button-close":"fa fa-bars"}},watch:{}},w=v,b=(a("03f7"),Object(l["a"])(w,g,y,!1,null,"27bedbac",null)),_=b.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{on:{mouseover:function(t){e.toggleShowMenu=!0},mouseleave:function(t){e.toggleShowMenu=!1}}},[a("ul",{class:"main-menu "+(e.value?"button-close":""),on:{click:function(t){return e.$emit("input",!e.value)}}},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{class:e.mainMenuClass,attrs:{"aria-hidden":"true"}}),e._v(" "+e._s(e.value?"Cancal":"")+" ")])])]),e.value?a("div",[e._v(" Layers: "),a("div",{staticClass:"layer-control"},[a("label",{attrs:{for:"esia-layer"},on:{click:function(t){return e.onLayerSelected("esia-layer-checked",e.toggleShowEsiaLayer)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.toggleShowEsiaLayer,expression:"toggleShowEsiaLayer"}],attrs:{type:"checkbox",id:"esia-layer"},domProps:{checked:Array.isArray(e.toggleShowEsiaLayer)?e._i(e.toggleShowEsiaLayer,null)>-1:e.toggleShowEsiaLayer},on:{change:function(t){var a=e.toggleShowEsiaLayer,n=t.target,o=!!n.checked;if(Array.isArray(a)){var r=null,i=e._i(a,r);n.checked?i<0&&(e.toggleShowEsiaLayer=a.concat([r])):i>-1&&(e.toggleShowEsiaLayer=a.slice(0,i).concat(a.slice(i+1)))}else e.toggleShowEsiaLayer=o}}}),a("i",{staticClass:"far fa-square",style:e.esiaLegendStyle,attrs:{"aria-hidden":"true"}}),e._v(" ESIA ")])]),a("div",{staticClass:"layer-control"},[a("label",{attrs:{for:"iesia-layer"},on:{click:function(t){return e.onLayerSelected("iesia-layer-checked",e.toggleShowIesiaLayer)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.toggleShowIesiaLayer,expression:"toggleShowIesiaLayer"}],attrs:{type:"checkbox",id:"iesia-layer"},domProps:{checked:Array.isArray(e.toggleShowIesiaLayer)?e._i(e.toggleShowIesiaLayer,null)>-1:e.toggleShowIesiaLayer},on:{change:function(t){var a=e.toggleShowIesiaLayer,n=t.target,o=!!n.checked;if(Array.isArray(a)){var r=null,i=e._i(a,r);n.checked?i<0&&(e.toggleShowIesiaLayer=a.concat([r])):i>-1&&(e.toggleShowIesiaLayer=a.slice(0,i).concat(a.slice(i+1)))}else e.toggleShowIesiaLayer=o}}}),a("i",{staticClass:"far fa-square",style:e.iesiaLegendStyle,attrs:{"aria-hidden":"true"}}),e._v(" IESIA ")])]),a("div",{staticClass:"layer-control"},[a("label",{attrs:{for:"epc-layer"},on:{click:function(t){return e.onLayerSelected("epc-layer-checked",e.toggleShowEpcLayer)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.toggleShowEpcLayer,expression:"toggleShowEpcLayer"}],attrs:{type:"checkbox",id:"epc-layer"},domProps:{checked:Array.isArray(e.toggleShowEpcLayer)?e._i(e.toggleShowEpcLayer,null)>-1:e.toggleShowEpcLayer},on:{change:function(t){var a=e.toggleShowEpcLayer,n=t.target,o=!!n.checked;if(Array.isArray(a)){var r=null,i=e._i(a,r);n.checked?i<0&&(e.toggleShowEpcLayer=a.concat([r])):i>-1&&(e.toggleShowEpcLayer=a.slice(0,i).concat(a.slice(i+1)))}else e.toggleShowEpcLayer=o}}}),a("i",{staticClass:"far fa-square",style:e.epcLegendStyle,attrs:{"aria-hidden":"true"}}),e._v(" EPC ")])]),a("br"),e._v(" Basemaps: "),a("div",{staticClass:"basemaps"},e._l(e.basemaps,(function(t){return a("div",{key:t.id},[a("label",{attrs:{for:t.id},on:{click:function(a){return e.onBasemapChanged(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedBasemap,expression:"selectedBasemap"}],attrs:{type:"radio",name:t.name,id:t.id},domProps:{value:t.id,checked:e._q(e.selectedBasemap,t.id)},on:{change:function(a){e.selectedBasemap=t.id}}}),a("img",{attrs:{src:e.rasterIcon,width:"18"}}),e._v(" "+e._s(t.name)+" ")])])})),0),a("br")]):e._e()])},L=[],C=a("d263"),k=a.n(C),x=a("1748"),E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"field__radio",class:[e.value===e.v_value?"field__radio--checked":""]},[a("label",{attrs:{for:e.id},on:{click:e.onClick}},[a("input",{attrs:{type:"radio",name:e.name,id:e.id},domProps:{value:e.label}}),a("img",{attrs:{src:e.url,width:"22"}}),e._v(" "+e._s(e.label)+" ")])])},I=[],j={name:"InputRadio",props:{value:{},v_value:{},label:{type:String,default:""},name:{type:String,default:""},id:{type:String,default:""},url:{type:String,default:""}},methods:{onClick:function(){this.$emit("input",this.v_value),console.log(this.v_value)}}},O=j,M=Object(l["a"])(O,E,I,!1,null,null,null),P=M.exports,A=a("761f"),B={name:"PopMenu",props:{value:{type:Boolean,default:!1}},components:{InputRadio:P},data:function(){return{selectedBasemap:"0",toggleShowEsiaLayer:!0,toggleShowIesiaLayer:!0,toggleShowEpcLayer:!0,basemaps:x,rasterIcon:k.a}},methods:{onBasemapChanged:function(e){this.$emit("onBasemapChanged",e)},onLayerSelected:function(e,t){this.$emit(e,!t)}},computed:{toggleShowMenu:{get:function(){return this.expanded},set:function(e){this.$emit("input",e)}},mainMenuClass:function(){return this.value?"fa fa-times button-close":"fa fa-layer-group"},esiaLegendStyle:function(){return"color:".concat(A["a"].colors.esia,"; font-size:16px; font-weight:bold")},iesiaLegendStyle:function(){return"color:".concat(A["a"].colors.iesia,"; font-size:16px; font-weight:bold")},epcLegendStyle:function(){return"color:".concat(A["a"].colors.epc,"; font-size:16px; font-weight:bold")}},watch:{}},N=B,z=(a("d7a0"),Object(l["a"])(N,S,L,!1,null,"3b1ffcc6",null)),T=z.exports,G=a("7277"),F=(a("ac1f"),a("5319"),a("5b81"),a("1276"),{en2kh:function(e){for(var t="០១២៣៤៥៦៧៨៩",a="0123456789",n=e,o=0;o<a.length;o++)n=n.replaceAll(a[o],t[o]);return n},format_date:function(e){var t=e.split("-");return 3!==t.length?e:t[2]+"-"+t[1]+"-"+t[0]},html_row:function(e,t,a){return'<tr>                    <th scope="row">'+e+"</th>                    <td>"+t+a+"</td>                </tr>\n"},row:function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=e.properties[t];return null!==o?this.html_row(a,o,n):""},row_kh:function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=e.properties[t];return null==o?"":this.html_row(a,this.en2kh(o),n)},row_date:function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=e.properties[t];return null==o?"":(o=this.format_date(o),this.html_row(a,this.en2kh(o),n))},create_table:function(e){var t="<table>\n";return t+=this.row(e,"owner_kh","Owner KH"),t+=this.row(e,"owner_en","Owner EN"),t+=this.row(e,"type","Type"),t+=this.row(e,"area_li_ha","Size"," Ha"),t+=this.row(e,"lic_type","License"),t+=this.row(e,"loc_khet","Provice"),t+=this.row(e,"loc_srok","District"),t+=this.row(e,"loc_khum","Commune"),t+=this.row(e,"loc_phum","Village"),t+=this.row(e,"loc_name","Location Name"),t+=this.row_date(e,"lic_date","Issued"),t+=this.row_kh(e,"lic_number","Number"," សជណ.បស្ថ"),t+=this.row(e,"status","Status"),t+=this.row(e,"team","Team"),t+=this.row(e,"added_by","Added by"),t+=this.row(e,"reference","Reference"),t+=this.row(e,"pro_code","Code"),t+=this.row(e,"remark","Remark"),t+="</table>",t}}),Z=a("d5b3"),W=a.n(Z),J=a("2699"),$=a("fbba"),H=a("4e2b6"),R=a("9ee8"),Y=a("f60f"),D=a("635f"),q=a("258a"),V=a("fb8e"),K=a("a40a"),U=a("1ebb"),X=a("2253"),Q=a("c8b6"),ee=a("044a"),te=a("e11e"),ae=[{lat:10.79,lng:102.14},{lat:14.525,lng:107.0343}],ne=Object(te["latLngBounds"])(ae),oe={name:"Home",props:{windowHeight:Number,windowWidth:Number},components:{LMap:J["a"],LIcon:$["a"],LMarker:H["a"],LControlLayers:R["a"],LPopup:Y["a"],LPolyline:D["a"],LPolygon:q["a"],LRectangle:V["a"],LTileLayer:K["a"],LLayerGroup:U["a"],LControl:X["a"],LControlZoom:Q["a"],LGeoJson:ee["a"],PopMenu:_,LayerMenu:T,Dashboard:G["default"]},beforeCreate:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var n,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n="https://eia-moe.github.io/map-dist/project.json",o={json:!0},r=a("30dc"),r(n,o,(function(t,a,n){if(t)return console.log(t);t||200!=a.statusCode||(i["a"].commit("initProjectList",n),e.geojson=i["a"].getters.geojson,e.esia=i["a"].getters.esiaGeoJson,e.iesia=i["a"].getters.iesiaGeoJson,e.epc=i["a"].getters.epcGeoJson)}));case 4:case"end":return t.stop()}}),t)})))()},data:function(){var e=8,t=[11.5,104.9],a={features:[]};return{fillColor:"#e4ce7f",watermark:W.a,zoom:e,center:t,bounds:ne,mapOptions:{zoomControl:!1,attributionControl:!0,zoomSnap:!0},tileProvider:x[0],expandMenu:!1,expandLayerMenu:!1,geojson:a,esia:a,iesia:a,epc:a,points:ae,showChart:!1,showEsiaLayer:!0,showIesiaLayer:!0,showEpcLayer:!0}},computed:{options:function(){this.fillColor;return{onEachFeature:this.onEachFeatureFunction,style:function(e){return"ESIA"===e.properties.lic_type?{weight:2,color:A["a"].colors.esia,opacity:1,fillColor:A["a"].colors.fill,fillOpacity:.1}:"IESIA"===e.properties.lic_type?{weight:2,color:A["a"].colors.iesia,opacity:1,fillColor:A["a"].colors.fill,fillOpacity:.1}:"EPC"===e.properties.lic_type?{weight:2,color:A["a"].colors.epc,opacity:1,fillColor:A["a"].colors.fill,fillOpacity:.2}:{weight:2,color:A["a"].colors.others,opacity:1,fillColor:A["a"].colors.fill,fillOpacity:.1}}}},onEachFeatureFunction:function(){return function(e,t){var a=F.create_table(e),n={permanent:!1,sticky:!0};t.bindPopup(a,n)}},mapScreen:function(){return this.showChart?this.isLandscape()?"width: 50%; float:right":"height: 40%; float:top":""},chartScreen:function(){return this.isLandscape()?"width: 50%; float:left":"height: 40%; float:bottom"}},methods:{smallScreen:function(){return this.windowWidth<600},isLandscape:function(){return this.windowWidth>this.windowHeight},menuSelected:function(e){0===e&&(this.showChart=!this.showChart)},onBasemapChanged:function(e){this.tileProvider=e},toggleEsiaLayer:function(e){this.showEsiaLayer=e},toggleIesiaLayer:function(e){this.showIesiaLayer=e},toggleEpcLayer:function(e){this.showEpcLayer=e},onMenuChange:function(e){this.expandMenu=e},collapseAllMenus:function(){this.expandLayerMenu=!1,this.expandMenu=!1}}},re=oe,ie=(a("a330"),Object(l["a"])(re,p,f,!1,null,"59c54892",null)),se=ie.exports;n["a"].use(h["a"]);var ce=[{path:"/",name:"Home",component:se},{path:"/dashboard",name:"Dashboard",component:function(){return Promise.resolve().then(a.bind(null,"7277"))}},{path:"/:catchAll(.*)*",name:"PageNotFound",component:function(){return a.e("chunk-2d208bfd").then(a.bind(null,"a5b5"))}}],le=new h["a"]({mode:"history",base:"/map-dist/",routes:ce}),ue=le;a("6cc5");n["a"].config.productionTip=!1,new n["a"]({router:ue,store:i["a"],render:function(e){return e(d)}}).$mount("#app")},6:function(e,t){},"6c88":function(e,t,a){"use strict";a("1756")},7:function(e,t){},7277:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"chart-display"},[a("div",{staticClass:"fa fa-times close-button",on:{click:function(t){return e.$emit("close-chart")}}}),a("chart-selector",{staticClass:"chart-selector",on:{selectChanged:e.chartSelected}}),0==e.selectedChart?a("ChartAbstract"):e._e(),1==e.selectedChart?a("ChartByYear"):e._e(),2==e.selectedChart?a("ChartByProvince"):e._e(),3==e.selectedChart?a("ChartByType"):e._e(),4==e.selectedChart?a("ChartByCategory"):e._e()],1)},o=[],r=(a("d3b7"),a("3ca3"),a("ddb0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"selector"},[e._v(" "+e._s(e.title||"ជ្រើសរើសក្រាហ្វិក៖")+" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedItem,expression:"selectedItem"}],on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedItem=t.target.multiple?a:a[0]},e.selectChanged]}},[a("option",{attrs:{value:"0"}},[e._v("សង្ខេបរួម")]),a("option",{attrs:{value:"1"}},[e._v("បែងចែកតាមឆ្នាំ")]),a("option",{attrs:{value:"2"}},[e._v("បែងចែកតាម​ខេត្ត")]),a("option",{attrs:{value:"3"}},[e._v("បែងចែកតាម​ចំណាត់ថ្នាក់គម្រោង")]),a("option",{attrs:{value:"4"}},[e._v("បែងចែកតាម​ប្រភេទគម្រោង")])])])}),i=[],s={name:"ChartAbstract",data:function(){return{selectedItem:"0"}},props:{title:String},methods:{selectChanged:function(e){this.$emit("selectChanged",this.selectedItem)}}},c=s,l=(a("6c88"),a("2877")),u=Object(l["a"])(c,r,i,!1,null,"1fcadc7d",null),d=u.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("vue-highcharts",{ref:"lineCharts",attrs:{options:e.options}})],1)},p=[],f=a("2909"),m=a("5530"),g=(a("d81d"),a("99af"),a("604f")),y=a.n(g),v=a("b976"),w=a.n(v),b=a("ea7f"),_=a.n(b),S=a("4360"),L=a("4eaa"),C=a("761f");w()(_.a);var k={components:{VueHighcharts:y.a},data:function(){return{options:null,Highcharts:_.a}},methods:{chartSelected:function(e){this.selectedChart=e},smallScreen:function(){return S["a"].getters.windowWidth<600}},computed:{},mounted:function(){var e=S["a"].getters.geojson,t=e.features,a=L["a"].groupFeaturesByYears(t),n=L["a"].getLabelAndData(a),o=n.labels,r=n.data,i=r.map((function(e){return L["a"].countFeaturesByTypes(e)})),s={type:"column",name:"ESIA",data:[],color:C["a"].colors.esia},c=Object(m["a"])(Object(m["a"])({},s),{},{name:"IESIA",data:[],color:C["a"].colors.iesia}),l=Object(m["a"])(Object(m["a"])({},s),{},{name:"EPC",data:[],color:C["a"].colors.epc}),u={type:"line",name:"សរុប",data:[],marker:{lineWidth:2,lineColor:_.a.getOptions().colors[3],fillColor:"white"}};for(var d in i)if(Object.hasOwnProperty.call(i,d)){var h,p,g,y=i[d],v=null!==(h=y["ESIA"])&&void 0!==h?h:0,w=null!==(p=y["IESIA"])&&void 0!==p?p:0,b=null!==(g=y["EPC"])&&void 0!==g?g:0;s.data=[].concat(Object(f["a"])(s.data),[v]),c.data=[].concat(Object(f["a"])(c.data),[w]),l.data=[].concat(Object(f["a"])(l.data),[b]),u.data=[].concat(Object(f["a"])(u.data),[v+w+b])}var k=s.data.reduce((function(e,t){return e+t}),0),x=c.data.reduce((function(e,t){return e+t}),0),E=l.data.reduce((function(e,t){return e+t}),0),I={type:"pie",name:"Total Projects",data:[{name:"ESIA",y:k,color:C["a"].colors.esia},{name:"IESIA",y:x,color:C["a"].colors.iesia},{name:"EPC",y:E,color:C["a"].colors.epc}],center:this.smallScreen()?[50,50]:[100,80],size:this.smallScreen()?90:120,showInLegend:!1,dataLabels:{enabled:!1}},j=[s,c,l,u,I],O={title:{text:"ចំនួនគម្រោងបង្ហាញ​នៅ​លើ​ផែនទី"},chart:{height:400},xAxis:{categories:o},yAxis:{title:{text:"ចំនួនគម្រោង"}},labels:{items:[{html:"ចំនួន​ទៅតាម​ចំណាត់ថ្នាក់",style:{left:this.smallScreen()?"12px":"65px",top:this.smallScreen()?"0px":"18px",color:_.a.theme&&_.a.theme.textColor||"black"}}]},credits:{enabled:!1},series:j};this.options=O}},x=k,E=Object(l["a"])(x,h,p,!1,null,null,null),I=E.exports,j={name:"Dashboard",components:{ChartSelector:d,ChartAbstract:I,ChartByYear:function(){return a.e("chunk-2d22fd2e").then(a.bind(null,"ea51"))},ChartByCategory:function(){return a.e("chunk-2d0ba6db").then(a.bind(null,"36bd"))},ChartByProvince:function(){return a.e("chunk-2d0e5240").then(a.bind(null,"92e6"))},ChartByType:function(){return a.e("chunk-2d2183fc").then(a.bind(null,"c9d4"))}},data:function(){return{selectedChart:0}},methods:{chartSelected:function(e){this.selectedChart=e}}},O=j,M=(a("2b56"),Object(l["a"])(O,n,o,!1,null,null,null));t["default"]=M.exports},"761f":function(e,t,a){"use strict";t["a"]={labelOtherYears:"Unknown",labelUnknownProjectType:"Unknown",mainChartColor:"#9F4BF2",colors:{esia:"rgba(13,202,0,1.0)",iesia:"rgba(1,170,255,1.0)",epc:"rgba(255,1,247,1.0)",others:"#EDE500",fill:"#CCC"}}},8:function(e,t){},"85ec":function(e,t,a){},9:function(e,t){},a330:function(e,t,a){"use strict";a("da40")},afc7:function(e,t,a){},d263:function(e,t,a){e.exports=a.p+"img/raster.b5e29c5d.png"},d5b3:function(e,t,a){e.exports=a.p+"img/watermark.e50dbe09.png"},d7a0:function(e,t,a){"use strict";a("afc7")},da40:function(e,t,a){}});
//# sourceMappingURL=app.ddaaf84e.js.map