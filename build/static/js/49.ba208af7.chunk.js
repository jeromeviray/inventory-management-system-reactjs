(this["webpackJsonp@project/inventory-management-system"]=this["webpackJsonp@project/inventory-management-system"]||[]).push([[49],{429:function(e,t,a){(function(t){var r;e.exports=(r=a(0),function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(e,t){e.exports=r},function(e,t,a){"use strict";var r=a(3);function n(){}function s(){}s.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,s,i){if(i!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:n};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(0),i=a.n(s);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var l=function(e){var t=e.pageClassName,a=e.pageLinkClassName,r=e.page,s=e.selected,i=e.activeClassName,l=e.activeLinkClassName,c=e.getEventListener,u=e.pageSelectedHandler,p=e.href,d=e.extraAriaContext,g=e.pageLabelBuilder,f=e.ariaLabel||"Page "+r+(d?" "+d:""),b=null;return s&&(b="page",f=e.ariaLabel||"Page "+r+" is your current page",t=void 0!==t?t+" "+i:i,void 0!==a?void 0!==l&&(a=a+" "+l):a=l),n.a.createElement("li",{className:t},n.a.createElement("a",o({role:"button",className:a,href:p,tabIndex:"0","aria-label":f,"aria-current":b,onKeyPress:u},c(u)),g(r)))};l.propTypes={pageSelectedHandler:i.a.func.isRequired,selected:i.a.bool.isRequired,pageClassName:i.a.string,pageLinkClassName:i.a.string,activeClassName:i.a.string,activeLinkClassName:i.a.string,extraAriaContext:i.a.string,href:i.a.string,ariaLabel:i.a.string,page:i.a.number.isRequired,getEventListener:i.a.func.isRequired,pageLabelBuilder:i.a.func.isRequired};var c=l;function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var p=function(e){var t=e.breakLabel,a=e.breakClassName,r=e.breakLinkClassName,s=e.breakHandler,i=e.getEventListener,o=a||"break";return n.a.createElement("li",{className:o},n.a.createElement("a",u({className:r,role:"button",tabIndex:"0",onKeyPress:s},i(s)),t))};p.propTypes={breakLabel:i.a.oneOfType([i.a.string,i.a.node]),breakClassName:i.a.string,breakLinkClassName:i.a.string,breakHandler:i.a.func.isRequired,getEventListener:i.a.func.isRequired};var d=p;function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function b(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=P(e);if(t){var n=P(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return y(this,a)}}function y(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(i,e);var t,a,r,s=h(i);function i(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),C(v(t=s.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),C(v(t),"handleNextPage",(function(e){var a=t.state.selected,r=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<r-1&&t.handlePageSelected(a+1,e)})),C(v(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e?(t.setState({selected:e}),t.callCallback(e)):t.callActiveCallback(e)})),C(v(t),"getEventListener",(function(e){return C({},t.props.eventListener,e)})),C(v(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var r=t.state.selected;t.handlePageSelected(r<e?t.getForwardJump():t.getBackwardJump(),a)})),C(v(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),C(v(t),"callActiveCallback",(function(e){void 0!==t.props.onPageActive&&"function"==typeof t.props.onPageActive&&t.props.onPageActive({selected:e})})),C(v(t),"pagination",(function(){var e=[],a=t.props,r=a.pageRangeDisplayed,s=a.pageCount,i=a.marginPagesDisplayed,o=a.breakLabel,l=a.breakClassName,c=a.breakLinkClassName,u=t.state.selected;if(s<=r)for(var p=0;p<s;p++)e.push(t.getPageElement(p));else{var g,f,b,m=r/2,h=r-m;u>s-r/2?m=r-(h=s-u):u<r/2&&(h=r-(m=u));var y=function(e){return t.getPageElement(e)};for(g=0;g<s;g++)(f=g+1)<=i||f>s-i||g>=u-m&&g<=u+h?e.push(y(g)):o&&e[e.length-1]!==b&&(b=n.a.createElement(d,{key:g,breakLabel:o,breakClassName:l,breakLinkClassName:c,breakHandler:t.handleBreakClick.bind(null,g),getEventListener:t.getEventListener}),e.push(b))}return e})),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return t=i,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,r=e.extraAriaContext;void 0===t||a||this.callCallback(t),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,r=e+t.pageRangeDisplayed;return r>=a?a-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,r=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<r)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,r=a.pageClassName,s=a.pageLinkClassName,i=a.activeClassName,o=a.activeLinkClassName,l=a.extraAriaContext,u=a.pageLabelBuilder;return n.a.createElement(c,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:r,pageLinkClassName:s,activeClassName:i,activeLinkClassName:o,extraAriaContext:l,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:u,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,r=e.containerClassName,s=e.previousLabel,i=e.previousClassName,o=e.previousLinkClassName,l=e.previousAriaLabel,c=e.prevRel,u=e.nextLabel,p=e.nextClassName,d=e.nextLinkClassName,g=e.nextAriaLabel,b=e.nextRel,m=this.state.selected,h=i+(0===m?" ".concat(t):""),y=p+(m===a-1?" ".concat(t):""),v=0===m?"true":"false",P=m===a-1?"true":"false";return n.a.createElement("ul",{className:r},n.a.createElement("li",{className:h},n.a.createElement("a",f({className:o,href:this.hrefBuilder(m-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":v,"aria-label":l,rel:c},this.getEventListener(this.handlePreviousPage)),s)),this.pagination(),n.a.createElement("li",{className:y},n.a.createElement("a",f({className:d,href:this.hrefBuilder(m+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":P,"aria-label":g,rel:b},this.getEventListener(this.handleNextPage)),u)))}}])&&b(t.prototype,a),r&&b(t,r),i}(r.Component);C(O,"propTypes",{pageCount:i.a.number.isRequired,pageRangeDisplayed:i.a.number.isRequired,marginPagesDisplayed:i.a.number.isRequired,previousLabel:i.a.node,previousAriaLabel:i.a.string,prevRel:i.a.string,nextLabel:i.a.node,nextAriaLabel:i.a.string,nextRel:i.a.string,breakLabel:i.a.oneOfType([i.a.string,i.a.node]),hrefBuilder:i.a.func,onPageChange:i.a.func,onPageActive:i.a.func,initialPage:i.a.number,forcePage:i.a.number,disableInitialCallback:i.a.bool,containerClassName:i.a.string,pageClassName:i.a.string,pageLinkClassName:i.a.string,pageLabelBuilder:i.a.func,activeClassName:i.a.string,activeLinkClassName:i.a.string,previousClassName:i.a.string,nextClassName:i.a.string,previousLinkClassName:i.a.string,nextLinkClassName:i.a.string,disabledClassName:i.a.string,breakClassName:i.a.string,breakLinkClassName:i.a.string,extraAriaContext:i.a.string,ariaLabelBuilder:i.a.func,eventListener:i.a.string}),C(O,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick"}),t.default=O}]))}).call(this,a(123))},483:function(e,t,a){"use strict";a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return u})),a.d(t,"e",(function(){return p})),a.d(t,"a",(function(){return d})),a.d(t,"g",(function(){return g})),a.d(t,"f",(function(){return f})),a.d(t,"d",(function(){return b}));var r=a(2),n=a(13),s=a(120),i=a(52);var o=new class{getOrders(e){return i.a.get("/orders/status/"+e,{headers:Object(s.a)()})}getPaymentTransactions(e,t,a){return i.a.get("/orders/payments",{headers:Object(s.a)(),params:{query:e,page:t,limit:a}})}updateOrderPaymentStatus(e,t){return i.a.put("/orders/"+e+"/paid/"+t,{},{headers:Object(s.a)()})}placeOrderDetails(e){return i.a.post("/orders/checkout",{customerAddressId:e.addressId,paymentId:e.paymentMethodId,cartItems:e.items},{headers:Object(s.a)()})}getOrderByOrderId(e){return i.a.get("/orders/"+e,{headers:Object(s.a)()})}updateOrderStatus(e,t){return i.a.put("/orders/"+e+"/status/"+t,{},{headers:Object(s.a)()})}};const l=(e,t)=>{const a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),r=e.response&&e.response.data&&e.response.data.code||e.toString();t({type:n.g,payload:{status:r,data:{message:a}}})},c=(e,t,a)=>async n=>o.getOrders(e,t,a).then((e=>(n({type:r.GET_ORDERS,payload:{status:200,action:"GET_ORDERS",data:{orders:e.data.orders,orderStatusCount:e.data.orderCounts}}}),Promise.resolve())),(e=>(l(e,n),Promise.reject()))),u=e=>async t=>{t({type:r.ORDER_ITEMS,payload:{status:200,action:"ORDERITEMS",data:{items:e}}})},p=e=>async t=>o.placeOrderDetails(e).then((e=>(t({type:r.PLACE_ORDER,payload:{status:200,action:"PLACE_ORDER",data:{}}}),t({type:n.g,payload:{status:200,data:{message:"Successfully Place your Order",order:e.data}}}),Promise.resolve())),(e=>(l(e,t),Promise.reject()))),d=e=>async t=>o.getOrderByOrderId(e).then((e=>(t({type:r.GET_ORDER_BY_ID,payload:{status:200,action:"GETORDERBYID",data:{order:e.data}}}),Promise.resolve())),(e=>(l(e,t),Promise.reject()))),g=(e,t)=>async a=>o.updateOrderStatus(e,t).then((s=>(a({type:r.UPDATE_ORDER_STATUS,payload:{status:200,action:r.UPDATE_ORDER_STATUS,data:{order:s.data}}}),a({type:n.g,payload:{status:200,data:{message:"Successfully updated order "+e+" status to "+t.toUpperCase(),order:s.data}}}),Promise.resolve())),(e=>(l(e,a),Promise.reject()))),f=(e,t)=>async a=>o.updateOrderPaymentStatus(e,t).then((e=>(a({type:r.UPDATE_PAYMENT_STATUS,payload:{status:200,action:r.UPDATE_PAYMENT_STATUS,data:{order:e.data}}}),a({type:n.g,payload:{status:200,data:{}}}),Promise.resolve())),(e=>(l(e,a),Promise.reject()))),b=(e,t,a)=>async n=>o.getPaymentTransactions(e,t,a).then((e=>(n({type:r.GET_PAYMENT_TRANSACTIONS,payload:{status:200,action:"GET_PAYMENT_TRANSACTIONS",data:{payments:e.data}}}),Promise.resolve())),(e=>(l(e,n),Promise.reject())))},621:function(e,t,a){"use strict";a.r(t),a.d(t,"Sale",(function(){return u}));var r=a(0),n=a(414),s=(a(475),a(483)),i=a(51),o=a(429),l=a.n(o),c=a(8);class u extends r.Component{constructor(...e){super(...e),this.state={payments:[],limit:10},this.handlePageClick=e=>{let t=e.selected;console.log(t),this.setState({page:t},(()=>{const{limit:e,query:a,status:r}=this.state;this.props.getPaymentTransactions("",t,e)}))}}componentDidMount(){this.props.getPaymentTransactions("",0,10)}componentDidUpdate(e,t){this.manageResponse(e,t)}manageResponse(e,t){if(this.props.orderResponse!=e.orderResponse){let e=this.props.orderResponse;200==e.status&&"GET_PAYMENT_TRANSACTIONS"==e.action&&(this.setState({payments:e.data.payments.data,originalList:e.data.payments}),console.log(e.data))}}render(){const{payments:e,originalList:t}=this.state;return console.log(t),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(n.jb,{striped:!0,hover:!0,className:"shadow-sm ",responsive:"md",bordered:!0,align:"middle",children:[Object(c.jsx)(n.nb,{color:"dark",children:Object(c.jsxs)(n.pb,{className:"text-center",children:[Object(c.jsx)(n.ob,{scope:"col",children:"Order ID"}),Object(c.jsx)(n.ob,{scope:"col",children:"Order Amount"}),Object(c.jsx)(n.ob,{scope:"col",children:"Payment Method"}),Object(c.jsx)(n.ob,{scope:"col",children:"Payment Status"}),Object(c.jsx)(n.ob,{scope:"col",children:"External Reference"}),Object(c.jsx)(n.ob,{scope:"col",children:"Paid At"})]})}),Object(c.jsx)(n.kb,{className:"text-center",color:"light",children:e.length>0?e.map(((e,t)=>{let a="Payment Pending";switch(e.paymentStatus){case 1:a="Paid";break;case 2:a="Failed"}return Object(c.jsxs)(n.pb,{className:"text-center",children:[Object(c.jsx)(n.mb,{children:e.orderId}),Object(c.jsxs)(n.mb,{children:["\u20b1 ",e.totalAmount]}),Object(c.jsx)(n.mb,{children:e.paymentMethod.paymentMethod}),Object(c.jsx)(n.mb,{children:a}),Object(c.jsx)(n.mb,{children:e.externalReference}),Object(c.jsx)(n.mb,{children:e.paidAt})]},t)})):Object(c.jsx)(n.pb,{children:Object(c.jsx)(n.mb,{colSpan:"4",children:"No Payment Transactions"})})})]}),t&&Object(c.jsx)(l.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:t.totalPages,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.handlePageClick,containerClassName:"pagination",activeClassName:"active"})]})}}t.default=Object(i.b)((e=>({orderResponse:e.orderResponse})),{getPaymentTransactions:s.d})(u)}}]);
//# sourceMappingURL=49.ba208af7.chunk.js.map