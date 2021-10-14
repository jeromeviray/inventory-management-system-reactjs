(this["webpackJsonp@project/inventory-management-system"]=this["webpackJsonp@project/inventory-management-system"]||[]).push([[51],{1030:function(e,t,a){"use strict";a.r(t),a.d(t,"IncomingSupplies",(function(){return y}));var s=a(0),n=a(516),r=a(50),i=a(122),l=a(418),o=a(412),c=a(119),p=a(472),u=a.n(p),d=a(413),g=a(445),m=a(8);class b extends s.Component{handleIncomingSupplyItem(e,t){this.props.markIncomingSuppliesAsDelivered(e.id).then((()=>{let a=this.props.supplies;this.props.incomingSupplyResponse.data;const s=a.findIndex((t=>t.id===e.id));if(a.splice(s,1),0===a.length)this.props.getIncomingSupplies("",t,0,10);else{let a=this.props.totalCounts;"undefined"==typeof a[t.toUpperCase()]&&(a[t.toUpperCase()]=0),a[e.incomingSupplyStatus.toUpperCase()]--,a[t.toUpperCase()]++,this.props.totalCountChange(a)}})).catch((()=>{let{status:e,data:t}=this.props.messageResponse;e>400&&e<=403&&setInterval((()=>{this.props.clearMessage()}),1e3)}))}renderIncomingAction(e,t){let a=Object(m.jsx)(m.Fragment,{});switch(e.toLowerCase()){case"pending":a=Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(o.f,{color:"info",className:"me-2",variant:"ghost",onClick:()=>this.props.setSupplyModal(!0,"Edit",t,Object(m.jsx)(g.d,{size:"20",className:"me-2"})),children:Object(m.jsx)(g.d,{size:"20"})}),Object(m.jsx)(o.f,{onClick:()=>{this.handleIncomingSupplyItem(t,"pending")},children:"Mask as Delivered"})]})}return a}render(){let e=this.props.supplies;const t={fontSize:"14px",fontWeight:"400"};return Object(m.jsx)(m.Fragment,{children:0===e.length?Object(m.jsx)(o.i,{children:Object(m.jsx)(o.j,{children:Object(m.jsx)("div",{className:"text-center",children:"No Pending Supplies"})})}):e.map(((e,a)=>{let{incomingSupplyItems:s,deliveredAt:n,purchasedAt:r,id:i,incomingSupplyStatus:l,supplier:p,updatedAt:d,supplyReference:g}=e;return console.log(e),Object(m.jsxs)(o.i,{className:"mb-3",children:[Object(m.jsx)(o.m,{children:Object(m.jsxs)("div",{className:"d-flex justify-content-between ",children:[Object(m.jsxs)("div",{className:"p-2",children:[Object(m.jsx)("span",{className:"text-black-50",style:{fontSize:"14px",fontWeight:"400"},children:"Supply Reference #:"}),Object(m.jsx)("span",{style:{fontSize:"14px",fontWeight:"600"},className:"text-bold ms-2",children:g})]}),Object(m.jsxs)("div",{className:"p-2",children:[Object(m.jsx)("span",{className:"text-black-50",style:{fontSize:"14px",fontWeight:"400"},children:"Product Items:"}),Object(m.jsx)("span",{style:{fontSize:"14px",fontWeight:"600"},className:"text-bold ms-2",children:s.length})]})]})}),Object(m.jsx)(o.j,{children:Object(m.jsxs)(o.ib,{striped:!0,hover:!0,className:"shadow-sm ",responsive:"md",bordered:!0,align:"middle",children:[Object(m.jsx)(o.mb,{color:"dark",children:Object(m.jsxs)(o.ob,{className:"text-center",children:[Object(m.jsx)(o.nb,{scope:"col",children:"Product Name"}),Object(m.jsx)(o.nb,{scope:"col",children:"Product Barcode"}),Object(m.jsx)(o.nb,{scope:"col",children:"Qunatity Recieved"})]})}),Object(m.jsx)(o.jb,{className:"text-center",color:"light",children:s.length>0?s.slice(0,5).map(((e,t)=>Object(m.jsxs)(o.ob,{className:"text-center",children:[Object(m.jsx)(o.lb,{children:e.product.name}),Object(m.jsx)(o.lb,{children:Object(m.jsx)(u.a,{value:String(e.product.barcode),height:50,width:1,fontSize:14,margin:7,background:"#f5f5f548"})}),Object(m.jsx)(o.lb,{children:e.numberReceived})]},t))):Object(m.jsx)(o.ob,{children:Object(m.jsx)(o.lb,{colSpan:"4",children:"No data"})})})]})}),Object(m.jsx)(o.k,{className:"p-4",children:Object(m.jsxs)("div",{className:"d-flex justify-content-between align-items-end",children:[Object(m.jsxs)("div",{className:"d-flex flex-column",children:[Object(m.jsxs)("div",{style:t,className:"mt-2",children:[Object(m.jsx)("span",{className:"text-black-50 me-2",children:"Supplier Name:"}),Object(m.jsx)("span",{style:{fontWeight:"500"},children:p&&p.name})]}),Object(m.jsxs)("div",{style:t,className:"mt-2",children:[Object(m.jsx)("span",{className:"text-black-50 me-2",children:"Purchased Date:"}),Object(m.jsx)("span",{style:{fontWeight:"500"},children:r})]}),Object(m.jsxs)("div",{style:t,className:"mt-2",children:[Object(m.jsx)("span",{style:t,className:"text-black-50 me-2",children:"Last Update:"}),Object(m.jsx)("span",{style:{fontWeight:"500"},children:d})]}),n&&Object(m.jsxs)("div",{style:t,className:"mt-2",children:[Object(m.jsx)("span",{style:t,className:"text-black-50 me-2",children:"Delivered Date:"}),Object(m.jsx)("span",{className:"text-danger",style:{fontWeight:"500"},children:n})]}),Object(m.jsxs)("div",{style:t,className:"mt-2",children:[Object(m.jsx)("span",{style:t,className:"text-black-50 me-2",children:"Supply Status:"}),Object(m.jsx)("span",{className:"text-danger",style:{fontWeight:"500"},children:l})]})]}),Object(m.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(m.jsx)("div",{className:s.length>2?"d-flex align-items-bottom":"d-none  ",children:Object(m.jsx)(c.b,{to:{pathname:"/app/supply/"+i,state:i},className:"m-2",children:"View More"})}),this.renderIncomingAction(this.props.status,e)]})]})})]},a)}))})}}var h=Object(r.b)((e=>({incomingSupplyResponse:e.incomingSupplyResponse,messageResponse:e.messageResponse})),{clearMessage:l.a,markIncomingSuppliesAsDelivered:n.c,setSupplyModal:d.o,getIncomingSupplies:n.a})(b),f=a(427),v=a.n(f);class y extends s.Component{constructor(e){super(e),this.state={message:"",status:"",action:"",incomingSupplies:{data:[],totalPages:0},query:"",page:0,limit:10,path:""},this.getIncomingSupplies=(e,t,a,s)=>{this.props.getIncomingSupplies(e,t,a,s).catch((()=>{let{status:e,data:t}=this.props.messageResponse;e>400&&e<=403&&(this.props.logout(),this.props.clearMessage()),this.setState({message:t.message})}))},this.manageIncomingSupplies=(e,t)=>{if(e.incomingSupplyResponse!==this.props.incomingSupplyResponse){let{action:e,status:t,data:a}=this.props.incomingSupplyResponse;"GET_INCOMING_SUPPLIES"===e&&200===t&&this.setState({incomingSupplies:a.incomingSupplies})}},this.manageSupplyModal=(e,t)=>{if(e.modalVisible!==this.props.modalVisible){let{action:e}=this.props.modalVisible;if("close"===e){const{query:e,status:t,page:a,limit:s}=this.state;this.getIncomingSupplies(e,t,a,s)}}},this.handlePageClick=e=>{let t=e.selected;this.setState({page:t},(()=>{const{limit:e,query:a,status:s}=this.state;this.props.getIncomingSupplies(a,s,t,e)}))},this.state.status=e.status}componentDidMount(){const{query:e,status:t,page:a,limit:s}=this.state;this.getIncomingSupplies(e,t,a,s)}componentDidUpdate(e,t){this.manageSupplyModal(e,t),this.manageIncomingSupplies(e,t)}render(){const{incomingSupplies:e,status:t}=this.state;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(h,{supplies:e.data,status:t}),Object(m.jsx)(v.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:e.totalPages,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.handlePageClick,containerClassName:"pagination",activeClassName:"active"})]})}}t.default=Object(r.b)((e=>({incomingSupplyResponse:e.incomingSupplyResponse,messageResponse:e.messageResponse,modalVisible:e.modalVisibleResponse})),{getIncomingSupplies:n.a,logout:i.c,clearMessage:l.a})(y)},427:function(e,t,a){(function(t){var s;e.exports=(s=a(0),function(e){var t={};function a(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(s,n,function(t){return e[t]}.bind(null,n));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(e,t){e.exports=s},function(e,t,a){"use strict";var s=a(3);function n(){}function r(){}r.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,r,i){if(i!==s){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:n};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(0),i=a.n(r);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}var o=function(e){var t=e.pageClassName,a=e.pageLinkClassName,s=e.page,r=e.selected,i=e.activeClassName,o=e.activeLinkClassName,c=e.getEventListener,p=e.pageSelectedHandler,u=e.href,d=e.extraAriaContext,g=e.pageLabelBuilder,m=e.ariaLabel||"Page "+s+(d?" "+d:""),b=null;return r&&(b="page",m=e.ariaLabel||"Page "+s+" is your current page",t=void 0!==t?t+" "+i:i,void 0!==a?void 0!==o&&(a=a+" "+o):a=o),n.a.createElement("li",{className:t},n.a.createElement("a",l({role:"button",className:a,href:u,tabIndex:"0","aria-label":m,"aria-current":b,onKeyPress:p},c(p)),g(s)))};o.propTypes={pageSelectedHandler:i.a.func.isRequired,selected:i.a.bool.isRequired,pageClassName:i.a.string,pageLinkClassName:i.a.string,activeClassName:i.a.string,activeLinkClassName:i.a.string,extraAriaContext:i.a.string,href:i.a.string,ariaLabel:i.a.string,page:i.a.number.isRequired,getEventListener:i.a.func.isRequired,pageLabelBuilder:i.a.func.isRequired};var c=o;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}var u=function(e){var t=e.breakLabel,a=e.breakClassName,s=e.breakLinkClassName,r=e.breakHandler,i=e.getEventListener,l=a||"break";return n.a.createElement("li",{className:l},n.a.createElement("a",p({className:s,role:"button",tabIndex:"0",onKeyPress:r},i(r)),t))};u.propTypes={breakLabel:i.a.oneOfType([i.a.string,i.a.node]),breakClassName:i.a.string,breakLinkClassName:i.a.string,breakHandler:i.a.func.isRequired,getEventListener:i.a.func.isRequired};var d=u;function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}function b(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,s=j(e);if(t){var n=j(this).constructor;a=Reflect.construct(s,arguments,n)}else a=s.apply(this,arguments);return v(this,a)}}function v(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(i,e);var t,a,s,r=f(i);function i(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),x(y(t=r.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),x(y(t),"handleNextPage",(function(e){var a=t.state.selected,s=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<s-1&&t.handlePageSelected(a+1,e)})),x(y(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e?(t.setState({selected:e}),t.callCallback(e)):t.callActiveCallback(e)})),x(y(t),"getEventListener",(function(e){return x({},t.props.eventListener,e)})),x(y(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var s=t.state.selected;t.handlePageSelected(s<e?t.getForwardJump():t.getBackwardJump(),a)})),x(y(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),x(y(t),"callActiveCallback",(function(e){void 0!==t.props.onPageActive&&"function"==typeof t.props.onPageActive&&t.props.onPageActive({selected:e})})),x(y(t),"pagination",(function(){var e=[],a=t.props,s=a.pageRangeDisplayed,r=a.pageCount,i=a.marginPagesDisplayed,l=a.breakLabel,o=a.breakClassName,c=a.breakLinkClassName,p=t.state.selected;if(r<=s)for(var u=0;u<r;u++)e.push(t.getPageElement(u));else{var g,m,b,h=s/2,f=s-h;p>r-s/2?h=s-(f=r-p):p<s/2&&(f=s-(h=p));var v=function(e){return t.getPageElement(e)};for(g=0;g<r;g++)(m=g+1)<=i||m>r-i||g>=p-h&&g<=p+f?e.push(v(g)):l&&e[e.length-1]!==b&&(b=n.a.createElement(d,{key:g,breakLabel:l,breakClassName:o,breakLinkClassName:c,breakHandler:t.handleBreakClick.bind(null,g),getEventListener:t.getEventListener}),e.push(b))}return e})),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return t=i,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,s=e.extraAriaContext;void 0===t||a||this.callCallback(t),s&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,s=e+t.pageRangeDisplayed;return s>=a?a-1:s}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,s=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<s)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,s=a.pageClassName,r=a.pageLinkClassName,i=a.activeClassName,l=a.activeLinkClassName,o=a.extraAriaContext,p=a.pageLabelBuilder;return n.a.createElement(c,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:s,pageLinkClassName:r,activeClassName:i,activeLinkClassName:l,extraAriaContext:o,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:p,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,s=e.containerClassName,r=e.previousLabel,i=e.previousClassName,l=e.previousLinkClassName,o=e.previousAriaLabel,c=e.prevRel,p=e.nextLabel,u=e.nextClassName,d=e.nextLinkClassName,g=e.nextAriaLabel,b=e.nextRel,h=this.state.selected,f=i+(0===h?" ".concat(t):""),v=u+(h===a-1?" ".concat(t):""),y=0===h?"true":"false",j=h===a-1?"true":"false";return n.a.createElement("ul",{className:s},n.a.createElement("li",{className:f},n.a.createElement("a",m({className:l,href:this.hrefBuilder(h-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":y,"aria-label":o,rel:c},this.getEventListener(this.handlePreviousPage)),r)),this.pagination(),n.a.createElement("li",{className:v},n.a.createElement("a",m({className:d,href:this.hrefBuilder(h+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":j,"aria-label":g,rel:b},this.getEventListener(this.handleNextPage)),p)))}}])&&b(t.prototype,a),s&&b(t,s),i}(s.Component);x(C,"propTypes",{pageCount:i.a.number.isRequired,pageRangeDisplayed:i.a.number.isRequired,marginPagesDisplayed:i.a.number.isRequired,previousLabel:i.a.node,previousAriaLabel:i.a.string,prevRel:i.a.string,nextLabel:i.a.node,nextAriaLabel:i.a.string,nextRel:i.a.string,breakLabel:i.a.oneOfType([i.a.string,i.a.node]),hrefBuilder:i.a.func,onPageChange:i.a.func,onPageActive:i.a.func,initialPage:i.a.number,forcePage:i.a.number,disableInitialCallback:i.a.bool,containerClassName:i.a.string,pageClassName:i.a.string,pageLinkClassName:i.a.string,pageLabelBuilder:i.a.func,activeClassName:i.a.string,activeLinkClassName:i.a.string,previousClassName:i.a.string,nextClassName:i.a.string,previousLinkClassName:i.a.string,nextLinkClassName:i.a.string,disabledClassName:i.a.string,breakClassName:i.a.string,breakLinkClassName:i.a.string,extraAriaContext:i.a.string,ariaLabelBuilder:i.a.func,eventListener:i.a.string}),x(C,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick"}),t.default=C}]))}).call(this,a(121))}}]);
//# sourceMappingURL=51.c3d2ba36.chunk.js.map