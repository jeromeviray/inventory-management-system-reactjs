(this["webpackJsonp@project/inventory-management-system"]=this["webpackJsonp@project/inventory-management-system"]||[]).push([[47],{500:function(e,t,n){var r,o;"undefined"!=typeof self&&self,e.exports=(r=n(0),o=n(52),function(){"use strict";var e={655:function(e,t,n){n.r(t),n.d(t,{__extends:function(){return o},__assign:function(){return a},__rest:function(){return s},__decorate:function(){return i},__param:function(){return c},__metadata:function(){return l},__awaiter:function(){return u},__generator:function(){return p},__createBinding:function(){return d},__exportStar:function(){return f},__values:function(){return m},__read:function(){return h},__spread:function(){return y},__spreadArrays:function(){return b},__spreadArray:function(){return g},__await:function(){return v},__asyncGenerator:function(){return j},__asyncDelegator:function(){return S},__asyncValues:function(){return O},__makeTemplateObject:function(){return x},__importStar:function(){return P},__importDefault:function(){return _},__classPrivateFieldGet:function(){return I},__classPrivateFieldSet:function(){return N}});var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function i(e,t,n,r){var o,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(s=(a<3?o(s):a>3?o(t,n,s):o(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s}function c(e,t){return function(n,r){t(n,r,e)}}function l(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,n,r){return new(n||(n=Promise))((function(o,a){function s(e){try{c(r.next(e))}catch(e){a(e)}}function i(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}c((r=r.apply(e,t||[])).next())}))}function p(e,t){var n,r,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function f(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function m(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function h(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)s.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return s}function y(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(h(arguments[t]));return e}function b(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],s=0,i=a.length;s<i;s++,o++)r[o]=a[s];return r}function g(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||t)}function v(e){return this instanceof v?(this.v=e,this):new v(e)}function j(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),a=[];return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r;function s(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){a.push([e,t,n,r])>1||i(e,t)}))})}function i(e,t){try{(n=o[e](t)).value instanceof v?Promise.resolve(n.value.v).then(c,l):u(a[0][2],n)}catch(e){u(a[0][3],e)}var n}function c(e){i("next",e)}function l(e){i("throw",e)}function u(e,t){e(t),a.shift(),a.length&&i(a[0][0],a[0][1])}}function S(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:v(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function O(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=m(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){!function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)}(r,o,(t=e[n](t)).done,t.value)}))}}}function x(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var w=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function P(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return w(t,e),t}function _(e){return e&&e.__esModule?e:{default:e}}function I(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function N(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}},297:function(e){e.exports=r},268:function(e){e.exports=o}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return function(){var e=a;Object.defineProperty(e,"__esModule",{value:!0}),e.useReactToPrint=e.PrintContextConsumer=void 0;var t=n(655),r=n(297),o=n(268),s=Object.prototype.hasOwnProperty.call(r,"createContext"),i=Object.prototype.hasOwnProperty.call(r,"useMemo")&&Object.prototype.hasOwnProperty.call(r,"useCallback"),c=s?r.createContext({}):null;e.PrintContextConsumer=c?c.Consumer:function(){return null};var l={copyStyles:!0,pageStyle:"@page { size: auto;  margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; } }",removeAfterPrint:!1,suppressErrors:!1},u=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.startPrint=function(e){var t=n.props,r=t.onAfterPrint,o=t.onPrintError,a=t.print,s=t.suppressErrors,i=t.documentTitle;setTimeout((function(){if(e.contentWindow){if(e.contentWindow.focus(),a)a(e).then(n.handleRemoveIframe).catch((function(e){o?o("print",e):s||console.error("An error was thrown by the specified `print` function",e)}));else if(e.contentWindow.print){var t=document.title;i&&(document.title=i),e.contentWindow.print(),i&&(document.title=t),r&&r()}else s||console.error("Printing for this browser is not currently possible: the browser does not have a `print` method available for iframes.");n.handleRemoveIframe()}else s||console.error("Printing failed because the `contentWindow` of the print iframe did not load. This is possibly an error with `react-to-print`. Please file an issue: https://github.com/gregnb/react-to-print/issues/")}),500)},n.triggerPrint=function(e){var t=n.props,r=t.onBeforePrint,o=t.onPrintError;if(r){var a=r();a&&"function"==typeof a.then?a.then((function(){n.startPrint(e)})).catch((function(e){o&&o("onBeforePrint",e)})):n.startPrint(e)}else n.startPrint(e)},n.handleClick=function(){var e=n.props,t=e.onBeforeGetContent,r=e.onPrintError;if(t){var o=t();o&&"function"==typeof o.then?o.then(n.handlePrint).catch((function(e){r&&r("onBeforeGetContent",e)})):n.handlePrint()}else n.handlePrint()},n.handlePrint=function(){var e=n.props,r=e.bodyClass,a=e.content,s=e.copyStyles,i=e.fonts,c=e.pageStyle,l=e.suppressErrors,u=e.nonce,p=a();if(void 0!==p)if(null!==p){var d=document.createElement("iframe");d.style.position="absolute",d.style.top="-1000px",d.style.left="-1000px",d.id="printWindow",d.title="Print Window";var f=o.findDOMNode(p);if(f){var m=f instanceof Text,h=document.querySelectorAll("link[rel='stylesheet']"),y=m?[]:f.querySelectorAll("img");n.linkTotal=h.length+y.length,n.linksLoaded=[],n.linksErrored=[],n.fontsLoaded=[],n.fontsErrored=[];var b=function(e,t){t?n.linksLoaded.push(e):(l||console.error('"react-to-print" was unable to load a linked node. It may be invalid. "react-to-print" will continue attempting to print the page. The linked node that errored was:',e),n.linksErrored.push(e)),n.linksLoaded.length+n.linksErrored.length+n.fontsLoaded.length+n.fontsErrored.length===n.linkTotal&&n.triggerPrint(d)};d.onload=function(){var e,o,a,p;d.onload=null;var h=d.contentDocument||(null===(o=d.contentWindow)||void 0===o?void 0:o.document);if(h){h.body.appendChild(f.cloneNode(!0)),i&&((null===(a=d.contentDocument)||void 0===a?void 0:a.fonts)&&(null===(p=d.contentWindow)||void 0===p?void 0:p.FontFace)?i.forEach((function(e){var t=new FontFace(e.family,e.source);d.contentDocument.fonts.add(t),t.loaded.then((function(e){n.fontsLoaded.push(e)})).catch((function(e){n.fontsErrored.push(t),l||console.error('"react-to-print" was unable to load a font. "react-to-print" will continue attempting to print the page. The font that failed to load is:',t,"The error from loading the font is:",e)}))})):l||console.error('"react-to-print" is not able to load custom fonts because the browser does not support the FontFace API'));var g="function"==typeof c?c():c;if("string"!=typeof g)l||console.error('"react-to-print" expected a "string" from `pageStyle` but received "'+typeof g+'". Styles from `pageStyle` will not be applied.');else{var v=h.createElement("style");u&&(v.setAttribute("nonce",u),h.head.setAttribute("nonce",u)),v.appendChild(h.createTextNode(g)),h.head.appendChild(v)}if(r&&(e=h.body.classList).add.apply(e,t.__spreadArray([],t.__read(r.split(" ")))),!m){for(var j=h.querySelectorAll("canvas"),S=f.querySelectorAll("canvas"),O=0,x=j.length;O<x;++O){var w=(U=j[O]).getContext("2d");w&&w.drawImage(S[O],0,0)}for(O=0;O<y.length;O++){var P=y[O],_=P.getAttribute("src");if(_){var I=new Image;I.onload=b.bind(null,P,!0),I.onerror=b.bind(null,P,!1),I.src=_}else l||(console.warn('"react-to-print" encountered an <img> tag with an empty "src" attribute. It will not attempt to pre-load it. The <img> is:',P),b(P,!1))}var N="input",E=f.querySelectorAll(N),k=h.querySelectorAll(N);for(O=0;O<E.length;O++)k[O].value=E[O].value;var C="input[type=checkbox],input[type=radio]",A=f.querySelectorAll(C),T=h.querySelectorAll(C);for(O=0;O<A.length;O++)T[O].checked=A[O].checked;var R="select",M=f.querySelectorAll(R),L=h.querySelectorAll(R);for(O=0;O<M.length;O++)L[O].value=M[O].value}if(s)for(var D=document.querySelectorAll("style, link[rel='stylesheet']"),G=(O=0,D.length);O<G;++O){var U;if("STYLE"===(U=D[O]).tagName){var W=h.createElement(U.tagName),q=U.sheet;if(q){for(var F="",Y=0,B=q.cssRules.length;Y<B;++Y)"string"==typeof q.cssRules[Y].cssText&&(F+=q.cssRules[Y].cssText+"\r\n");W.setAttribute("id","react-to-print-"+O),u&&W.setAttribute("nonce",u),W.appendChild(h.createTextNode(F)),h.head.appendChild(W)}}else if(U.getAttribute("href")){W=h.createElement(U.tagName),Y=0;for(var V=U.attributes.length;Y<V;++Y){var z=U.attributes[Y];z&&W.setAttribute(z.nodeName,z.nodeValue||"")}W.onload=b.bind(null,W,!0),W.onerror=b.bind(null,W,!1),u&&W.setAttribute("nonce",u),h.head.appendChild(W)}else l||console.warn('"react-to-print" encountered a <link> tag with an empty "href" attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:',U),b(U,!0)}}0!==n.linkTotal&&s||n.triggerPrint(d)},n.handleRemoveIframe(!0),document.body.appendChild(d)}else l||console.error('"react-to-print" could not locate the DOM node corresponding with the `content` prop')}else l||console.error('There is nothing to print because the "content" prop returned "null". Please ensure "content" is renderable before allowing "react-to-print" to be called.');else l||console.error('For "react-to-print" to work only Class based components can be printed.')},n.handleRemoveIframe=function(e){var t=n.props.removeAfterPrint;if(e||t){var r=document.getElementById("printWindow");r&&document.body.removeChild(r)}},n}return t.__extends(n,e),n.prototype.render=function(){var e=this.props,t=e.children,n=e.suppressErrors,o=e.trigger;if(o)return r.cloneElement(o(),{onClick:this.handleClick});if(!c)return n||console.error('"react-to-print" requires React ^16.3.0 to be able to use "PrintContext"'),null;var a={handlePrint:this.handleClick};return r.createElement(c.Provider,{value:a},t)},n.defaultProps=l,n}(r.Component);e.default=u,e.useReactToPrint=i?function(e){var n=r.useMemo((function(){return new u(t.__assign(t.__assign({},l),e))}),[e]);return r.useCallback((function(){return n.handleClick()}),[n])}:function(e){e.suppressErrors||console.warn('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"')}}(),a}())},516:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return d}));var r=n(21),o=n(2),a=n(88),s=n(415);var i=new class{saveIncomingSupply(e,t){return console.log(t),a.a.post("/supplies/save",{incomingSupplyItems:e,supplier:{id:t}},{headers:Object(s.a)()})}getIncomingSupplies(e,t,n,r){return a.a.get("/supplies",{headers:Object(s.a)(),params:{query:e,status:t,page:n,limit:r}})}getIncomingSupply(e){return a.a.get("/supplies/"+e,{headers:Object(s.a)()})}markIncomingSuppliesAsDelivered(e){return a.a.put("/supplies/delivered",{},{headers:Object(s.a)(),params:{id:e}})}updateIncomingSuppleis(e,t,n,r){return a.a.put("/supplies/update/"+e,{incomingSupply:{incomingSupplyItems:t,supplier:{id:n.id}},removedItems:r},{headers:Object(s.a)()})}};const c=(e,t,n,a)=>async s=>i.getIncomingSupplies(e,t,n,a).then((e=>(s({type:o.GET_INCOMING_SUPPLIES,payload:{action:o.GET_INCOMING_SUPPLIES,status:200,data:{incomingSupplies:e.data}}}),Promise.resolve())),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),n=e.response&&e.response.data&&e.response.data.code||e.toString();return s({type:r.g,payload:{status:n,data:{message:t}}}),Promise.reject()})),l=e=>async t=>i.getIncomingSupply(e).then((e=>(t({type:o.GET_INCOMING_SUPPLY,payload:{action:o.GET_INCOMING_SUPPLY,status:200,data:{incomingSupply:e.data}}}),Promise.resolve())),(e=>{const n=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),o=e.response&&e.response.data&&e.response.data.code||e.toString();return t({type:r.g,payload:{status:o,data:{message:n}}}),Promise.reject()})),u=(e,t)=>async n=>i.saveIncomingSupply(e,t).then((e=>(n({type:o.SAVE_INCOMING_SUPPLY,payload:{status:200,action:o.SAVE_INCOMING_SUPPLY,data:{}}}),n({type:r.g,payload:{status:200,data:{message:"Successfully Saved"}}}),Promise.resolve())),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),o=e.response&&e.response.data&&e.response.data.code||e.toString();return n({type:r.g,payload:{status:o,data:{message:t}}}),Promise.reject()})),p=e=>async t=>i.markIncomingSuppliesAsDelivered(e).then((e=>(t({type:o.MARK_INCOMING_SUPPLY_AS_DELIVERED,payload:{status:200,action:o.MARK_INCOMING_SUPPLY_AS_DELIVERED,data:{}}}),t({type:r.g,payload:{status:200,data:{message:"Incoming Supply Items has been Delivered."}}}),Promise.resolve())),(e=>{const n=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),o=e.response&&e.response.data&&e.response.data.code||e.toString();return t({type:r.g,payload:{status:o,data:{message:n}}}),Promise.reject()})),d=(e,t,n,a)=>async s=>i.updateIncomingSuppleis(e,t,n,a).then((e=>(s({type:o.UPDATE_INCOMING_SUPPLY,payload:{status:200,action:o.UPDATE_INCOMING_SUPPLY,data:{}}}),s({type:r.g,payload:{status:200,data:{message:"Incoming Supply Items has been Updated."}}}),Promise.resolve())),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),n=e.response&&e.response.data&&e.response.data.code||e.toString();return s({type:r.g,payload:{status:n,data:{message:t}}}),Promise.reject()}))},620:function(e,t,n){"use strict";n.r(t),n.d(t,"IncomingSuppliesDetails",(function(){return h}));var r=n(0),o=n(412),a=n(472),s=n.n(a),i=n(500),c=n.n(i),l=n(428),u=n(451),p=n(516),d=n(418),f=n(50),m=n(8);class h extends r.Component{constructor(...e){super(...e),this.state={message:"",hasError:!1,incomingSupply:[],status:""},this.manageIncomingSupplyResponse=(e,t)=>{if(e.incomingSupplyResponse!==this.props.incomingSupplyResponse){let{action:e,status:t,data:n}=this.props.incomingSupplyResponse;"GET_INCOMING_SUPPLY"===e&&200===t&&this.setState({incomingSupply:n.incomingSupply})}}}componentDidMount(){let e=this.props.location.state;this.props.getIncomingSupply(e).catch((()=>{let{status:e,data:t}=this.props.messageResponse;this.setState({hasError:!0,status:e})}))}componentDidUpdate(e,t){this.manageIncomingSupplyResponse(e,t)}render(){let{message:e,hasError:t,incomingSupply:n,status:r}=this.state,{incomingSupplyItems:a,deliveredAt:i,purchasedAt:p,id:d,incomingSupplyStatus:f,supplier:h,updatedAt:y,supplyReference:b}=n;const g={fontSize:"14px",fontWeight:"500"};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(o.f,{onClick:()=>l.a.goBack(),variant:"ghost",color:"secondary",className:"d-flex align-items-center",children:[Object(m.jsx)(u.b,{size:20}),Object(m.jsx)("span",{className:"ms-2",children:"back"})]}),e&&Object(m.jsx)("div",{className:"form-group d-flex justify-content-center align-items-center",children:Object(m.jsx)("div",{className:"alert alert-danger",role:"alert",children:e})}),Object(m.jsxs)("div",{className:t?"d-none":"d-block",children:[Object(m.jsx)("div",{className:"d-flex align-items-end flex-row-reverse m-2",children:Object(m.jsx)(c.a,{trigger:()=>Object(m.jsx)(o.f,{color:"info",className:"d-flex align-items-center",children:Object(m.jsx)(u.c,{size:20})}),content:()=>this.componentRef})}),n&&Object(m.jsxs)("div",{ref:e=>this.componentRef=e,className:"ps-4 pe-4 ",children:[Object(m.jsx)(o.h,{color:"info",children:Object(m.jsxs)("div",{className:"d-flex flex-column p-3",children:[Object(m.jsxs)("div",{className:"d-flex  align-items-center ",children:[Object(m.jsx)("span",{style:g,className:"text-black-50",children:"Supply Reference #:"}),Object(m.jsx)("h6",{className:"ps-2 m-0",children:h&&b})]}),Object(m.jsxs)("div",{className:"d-flex  align-items-center mt-2",children:[Object(m.jsx)("span",{style:g,className:"text-black-50",children:"Supply Name:"}),Object(m.jsx)("h6",{className:"ps-2 m-0",children:h&&h.name})]}),Object(m.jsxs)("div",{style:g,className:"mt-2",children:[Object(m.jsx)("span",{className:"text-black-50 me-2",children:"Purchased Date:"}),Object(m.jsx)("span",{style:{fontWeight:"500"},children:p})]}),Object(m.jsxs)("div",{style:g,className:"mt-2",children:[Object(m.jsx)("span",{style:g,className:"text-black-50 me-2",children:"Last Update:"}),Object(m.jsx)("span",{style:{fontWeight:"500"},children:y})]}),i&&Object(m.jsxs)("div",{style:g,className:"mt-2",children:[Object(m.jsx)("span",{style:g,className:"text-black-50 me-2",children:"Delivered Date:"}),Object(m.jsx)("span",{className:"text-danger",style:{fontWeight:"500"},children:i})]}),Object(m.jsxs)("div",{style:g,className:"mt-2",children:[Object(m.jsx)("span",{style:g,className:"text-black-50 me-2",children:"Supply Status:"}),Object(m.jsx)("span",{className:"text-danger",style:{fontWeight:"500"},children:f})]})]})}),Object(m.jsx)("h5",{className:"m-3",children:"Product Items"}),Object(m.jsxs)(o.ib,{striped:!0,hover:!0,className:"shadow-sm ",responsive:"md",bordered:!0,align:"middle",children:[Object(m.jsxs)(o.kb,{children:["List of Products:"," ",Object(m.jsx)("b",{children:a&&a.length})]}),Object(m.jsx)(o.mb,{color:"dark",children:Object(m.jsxs)(o.ob,{className:"text-center",children:[Object(m.jsx)(o.nb,{scope:"col",children:"Product Name"}),Object(m.jsx)(o.nb,{scope:"col",children:"Product Barcode"}),Object(m.jsx)(o.nb,{scope:"col",children:"Qunatity Recieved"})]})}),Object(m.jsx)(o.jb,{className:"text-center",color:"light",children:a&&a.map(((e,t)=>Object(m.jsxs)(o.ob,{className:"text-center",children:[Object(m.jsx)(o.lb,{children:e.product.name}),Object(m.jsx)(o.lb,{children:Object(m.jsx)(s.a,{value:String(e.product.barcode),height:50,width:1,fontSize:14,margin:7,background:"#f5f5f548"})}),Object(m.jsx)(o.lb,{children:e.numberReceived})]},t)))})]})]})]})]})}}t.default=Object(f.b)((e=>({incomingSupplyResponse:e.incomingSupplyResponse,messageResponse:e.messageResponse})),{clearMessage:d.a,getIncomingSupply:p.b})(h)}}]);
//# sourceMappingURL=47.a294f89d.chunk.js.map