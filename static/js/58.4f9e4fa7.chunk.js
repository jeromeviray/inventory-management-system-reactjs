(this["webpackJsonp@project/inventory-management-system"]=this["webpackJsonp@project/inventory-management-system"]||[]).push([[58],{427:function(e,t,a){(function(t){var s;e.exports=(s=a(0),function(e){var t={};function a(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(s,r,function(t){return e[t]}.bind(null,r));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(e,t){e.exports=s},function(e,t,a){"use strict";var s=a(3);function r(){}function n(){}n.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,n,i){if(i!==s){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:r};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,a){"use strict";a.r(t);var s=a(1),r=a.n(s),n=a(0),i=a.n(n);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}var o=function(e){var t=e.pageClassName,a=e.pageLinkClassName,s=e.page,n=e.selected,i=e.activeClassName,o=e.activeLinkClassName,c=e.getEventListener,p=e.pageSelectedHandler,u=e.href,d=e.extraAriaContext,b=e.pageLabelBuilder,h=e.ariaLabel||"Page "+s+(d?" "+d:""),g=null;return n&&(g="page",h=e.ariaLabel||"Page "+s+" is your current page",t=void 0!==t?t+" "+i:i,void 0!==a?void 0!==o&&(a=a+" "+o):a=o),r.a.createElement("li",{className:t},r.a.createElement("a",l({role:"button",className:a,href:u,tabIndex:"0","aria-label":h,"aria-current":g,onKeyPress:p},c(p)),b(s)))};o.propTypes={pageSelectedHandler:i.a.func.isRequired,selected:i.a.bool.isRequired,pageClassName:i.a.string,pageLinkClassName:i.a.string,activeClassName:i.a.string,activeLinkClassName:i.a.string,extraAriaContext:i.a.string,href:i.a.string,ariaLabel:i.a.string,page:i.a.number.isRequired,getEventListener:i.a.func.isRequired,pageLabelBuilder:i.a.func.isRequired};var c=o;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}var u=function(e){var t=e.breakLabel,a=e.breakClassName,s=e.breakLinkClassName,n=e.breakHandler,i=e.getEventListener,l=a||"break";return r.a.createElement("li",{className:l},r.a.createElement("a",p({className:s,role:"button",tabIndex:"0",onKeyPress:n},i(n)),t))};u.propTypes={breakLabel:i.a.oneOfType([i.a.string,i.a.node]),breakClassName:i.a.string,breakLinkClassName:i.a.string,breakHandler:i.a.func.isRequired,getEventListener:i.a.func.isRequired};var d=u;function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}function g(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,s=x(e);if(t){var r=x(this).constructor;a=Reflect.construct(s,arguments,r)}else a=s.apply(this,arguments);return v(this,a)}}function v(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?j(e):t}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(i,e);var t,a,s,n=f(i);function i(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),y(j(t=n.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),y(j(t),"handleNextPage",(function(e){var a=t.state.selected,s=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<s-1&&t.handlePageSelected(a+1,e)})),y(j(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e?(t.setState({selected:e}),t.callCallback(e)):t.callActiveCallback(e)})),y(j(t),"getEventListener",(function(e){return y({},t.props.eventListener,e)})),y(j(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var s=t.state.selected;t.handlePageSelected(s<e?t.getForwardJump():t.getBackwardJump(),a)})),y(j(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),y(j(t),"callActiveCallback",(function(e){void 0!==t.props.onPageActive&&"function"==typeof t.props.onPageActive&&t.props.onPageActive({selected:e})})),y(j(t),"pagination",(function(){var e=[],a=t.props,s=a.pageRangeDisplayed,n=a.pageCount,i=a.marginPagesDisplayed,l=a.breakLabel,o=a.breakClassName,c=a.breakLinkClassName,p=t.state.selected;if(n<=s)for(var u=0;u<n;u++)e.push(t.getPageElement(u));else{var b,h,g,m=s/2,f=s-m;p>n-s/2?m=s-(f=n-p):p<s/2&&(f=s-(m=p));var v=function(e){return t.getPageElement(e)};for(b=0;b<n;b++)(h=b+1)<=i||h>n-i||b>=p-m&&b<=p+f?e.push(v(b)):l&&e[e.length-1]!==g&&(g=r.a.createElement(d,{key:b,breakLabel:l,breakClassName:o,breakLinkClassName:c,breakHandler:t.handleBreakClick.bind(null,b),getEventListener:t.getEventListener}),e.push(g))}return e})),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return t=i,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,s=e.extraAriaContext;void 0===t||a||this.callCallback(t),s&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,s=e+t.pageRangeDisplayed;return s>=a?a-1:s}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,s=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<s)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,s=a.pageClassName,n=a.pageLinkClassName,i=a.activeClassName,l=a.activeLinkClassName,o=a.extraAriaContext,p=a.pageLabelBuilder;return r.a.createElement(c,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:s,pageLinkClassName:n,activeClassName:i,activeLinkClassName:l,extraAriaContext:o,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:p,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,s=e.containerClassName,n=e.previousLabel,i=e.previousClassName,l=e.previousLinkClassName,o=e.previousAriaLabel,c=e.prevRel,p=e.nextLabel,u=e.nextClassName,d=e.nextLinkClassName,b=e.nextAriaLabel,g=e.nextRel,m=this.state.selected,f=i+(0===m?" ".concat(t):""),v=u+(m===a-1?" ".concat(t):""),j=0===m?"true":"false",x=m===a-1?"true":"false";return r.a.createElement("ul",{className:s},r.a.createElement("li",{className:f},r.a.createElement("a",h({className:l,href:this.hrefBuilder(m-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":j,"aria-label":o,rel:c},this.getEventListener(this.handlePreviousPage)),n)),this.pagination(),r.a.createElement("li",{className:v},r.a.createElement("a",h({className:d,href:this.hrefBuilder(m+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":x,"aria-label":b,rel:g},this.getEventListener(this.handleNextPage)),p)))}}])&&g(t.prototype,a),s&&g(t,s),i}(s.Component);y(C,"propTypes",{pageCount:i.a.number.isRequired,pageRangeDisplayed:i.a.number.isRequired,marginPagesDisplayed:i.a.number.isRequired,previousLabel:i.a.node,previousAriaLabel:i.a.string,prevRel:i.a.string,nextLabel:i.a.node,nextAriaLabel:i.a.string,nextRel:i.a.string,breakLabel:i.a.oneOfType([i.a.string,i.a.node]),hrefBuilder:i.a.func,onPageChange:i.a.func,onPageActive:i.a.func,initialPage:i.a.number,forcePage:i.a.number,disableInitialCallback:i.a.bool,containerClassName:i.a.string,pageClassName:i.a.string,pageLinkClassName:i.a.string,pageLabelBuilder:i.a.func,activeClassName:i.a.string,activeLinkClassName:i.a.string,previousClassName:i.a.string,nextClassName:i.a.string,previousLinkClassName:i.a.string,nextLinkClassName:i.a.string,disabledClassName:i.a.string,breakClassName:i.a.string,breakLinkClassName:i.a.string,extraAriaContext:i.a.string,ariaLabelBuilder:i.a.func,eventListener:i.a.string}),y(C,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick"}),t.default=C}]))}).call(this,a(121))},641:function(e,t,a){"use strict";a.r(t),a.d(t,"Supplier",(function(){return f}));var s=a(0),r=a(412),n=a(50),i=a(445),l=a(414),o=a(418),c=a(508),p=a(413),u=a(8);class d extends s.Component{constructor(...e){super(...e),this.state={action:"",loading:!1,visible:!1,icon:"",supplier:this.supplierState},this.supplierState={name:"",supplierId:""},this.manageSupplierModal=(e,t)=>{if(e.modalVisible!==this.props.modalVisible){let{visible:e,action:t,icon:a,supplier:s}=this.props.modalVisible;"Add"===t?this.setState({visible:e,action:t,icon:a}):"Edit"===t?this.setState({visible:e,action:t,icon:a,name:s.name,supplierId:s.id}):this.setState({visible:e,action:"",icon:"",brandName:"",brandId:""})}},this.handleOnChange=e=>{let t=e.target.name;this.setState({[t]:e.target.value})},this.handleOnSubmit=e=>{e.preventDefault(),this.setState({loading:!0});let{name:t,action:a,supplierId:s}=this.state;t&&t.length>0?"Add"===a?this.handleCreateSupplier(t):"Edit"===a&&this.handleUpdateSupplier(s,t):this.setState({loading:!1})},this.handleUpdateSupplier=(e,t)=>{this.props.updateSupplier(e,t).then((()=>{let{status:e}=this.props.messageResponse;200===e&&this.setState({name:"",supplierId:"",loading:!1}),setInterval((()=>{this.props.clearMessage(),window.location.reload()}),1e3)})).catch((()=>{let{status:e,data:t}=this.props.messageResponse;this.setState({loading:!1,successFully:!1})}))}}componentDidUpdate(e,t){this.manageSupplierModal(e,t)}handleCreateSupplier(e){this.props.createSupplier(e).then((()=>{let{status:e,data:t}=this.props.messageResponse;200===e&&this.setState({name:"",loading:!1}),setInterval((()=>{this.props.clearMessage(),window.location.reload()}),1e3)})).catch((()=>{let{status:e,data:t}=this.props.messageResponse;this.setState({loading:!1,successFully:!1})}))}render(){let{action:e,loading:t,icon:a,visible:s,name:n}=this.state;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(r.O,{visible:s,children:[Object(u.jsx)(r.R,{onDismiss:()=>{this.props.setSupplierModal(!1,"close","",""),this.props.clearMessage()},children:Object(u.jsx)(r.S,{children:Object(u.jsxs)("div",{className:"d-flex align-items-center",children:[a,e+" Supplier"]})})}),Object(u.jsx)(r.P,{children:Object(u.jsx)(r.A,{id:"supplier-form",onSubmit:this.handleOnSubmit,children:Object(u.jsx)("div",{className:"mb-3",children:Object(u.jsxs)(r.E,{className:"mb-3",children:[Object(u.jsx)(r.C,{name:"name",value:n,onChange:this.handleOnChange,type:"text",id:"floatingSupplierInput",placeholder:"Enter Supplier Name"}),Object(u.jsx)(r.F,{htmlFor:"floatingSupplierInput",children:"Enter Supplier Name"})]})})})}),Object(u.jsxs)(r.Q,{children:[Object(u.jsx)(r.f,{color:"dark",variant:"ghost",onClick:()=>{this.props.setSupplierModal(!1,"close","",""),this.props.clearMessage()},children:"Close"}),Object(u.jsxs)(r.f,{type:"submit",color:"primary",disabled:t,form:"supplier-form",children:[t&&Object(u.jsx)(r.fb,{size:"sm",className:"ms-1"}),"Edit"===e?"Update":"Create"," Supplier"]})]})]})})}}var b=Object(n.b)((e=>({modalVisible:e.modalVisibleResponse,supplierResponse:e.supplierResponse,messageResponse:e.messageResponse})),{clearMessage:o.a,createSupplier:c.a,updateSupplier:c.d,setSupplierModal:p.n})(d),h=a(479),g=a(427),m=a.n(g);class f extends s.Component{constructor(...e){super(...e),this.state={message:"",suppliers:{data:[],totalPages:0},visible:!1,query:"",page:0,limit:10},this.getSuppliers=(e,t,a)=>{this.props.getSuppliers(e,t,a)},this.manageSupplierResponse=(e,t)=>{if(e.supplierResponse!==this.props.supplierResponse){let{status:e,action:t,data:a}=this.props.supplierResponse;"GET_SUPPLIERS"===t&&200===e&&this.setState({suppliers:a.suppliers})}},this.handleSearch=e=>{const{page:t,limit:a}=this.state;this.props.getSuppliers(e.target.value,t,a),this.setState({query:e.target.value})},this.handlePageClick=e=>{let t=e.selected;this.setState({page:t});const{limit:a,query:s}=this.state;this.props.getSuppliers(s,t,a)}}componentDidMount(){const{query:e,page:t,limit:a}=this.state;this.getSuppliers(e,t,a)}componentDidUpdate(e,t){this.manageSupplierResponse(e,t)}render(){let{suppliers:e,message:t,visible:a,query:s}=this.state;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{}),Object(u.jsx)(h.a,{}),Object(u.jsxs)("div",{className:"d-flex justify-content-between mb-2",children:[Object(u.jsxs)(r.f,{shape:"rounded-pill",color:"primary",variant:"ghost",className:"d-flex justify-content-center align-items-center mb-3",onClick:()=>this.props.setSupplierModal(!a,"Add","",Object(u.jsx)(l.r,{size:20,className:"me-2"})),children:[Object(u.jsx)(l.r,{size:20}),Object(u.jsx)("span",{style:{marginLeft:"10px"},children:"Create Supplier"})]}),Object(u.jsx)(r.A,{className:"w-50",children:Object(u.jsxs)(r.M,{children:[Object(u.jsx)(r.C,{type:"text",id:"floatingInput",placeholder:"Search",className:"p-2",value:s,onChange:this.handleSearch}),Object(u.jsx)(r.f,{type:"button",color:"info",variant:"outline",id:"button-addon2",className:"",children:Object(u.jsx)(l.v,{})})]})})]}),Object(u.jsxs)(r.ib,{striped:!0,hover:!0,className:"shadow-sm ",responsive:"md",bordered:!0,align:"middle",children:[Object(u.jsxs)(r.kb,{children:["List of Suppliers: ",Object(u.jsx)("b",{children:e.data.length})]}),Object(u.jsx)(r.mb,{color:"dark",children:Object(u.jsxs)(r.ob,{className:"text-center",children:[Object(u.jsx)(r.nb,{scope:"col",children:"Name"}),Object(u.jsx)(r.nb,{scope:"col",children:"Created Date"}),Object(u.jsx)(r.nb,{scope:"col",children:"Action"})]})}),Object(u.jsxs)(r.jb,{className:"text-center",color:"light",children:[e.data.length>0?e.data.map(((e,t)=>Object(u.jsxs)(r.ob,{className:"text-center",children:[Object(u.jsx)(r.lb,{children:e.name}),Object(u.jsx)(r.lb,{children:e.createdAt}),Object(u.jsxs)(r.lb,{children:[Object(u.jsx)(r.f,{color:"info",className:"me-2",variant:"ghost",size:"sm",onClick:()=>this.props.setSupplierModal(!a,"Edit",e,Object(u.jsx)(i.d,{size:"20",className:"me-2"})),children:Object(u.jsx)(i.d,{size:"20"})}),Object(u.jsx)(r.f,{color:"danger",className:"ms-2",variant:"ghost",onClick:()=>this.props.setAlertModal(!a,"DELETESUPPLIER","SUPPLIER",e.id),size:"sm",children:Object(u.jsx)(i.b,{size:"20"})})]})]},t))):Object(u.jsx)(r.ob,{children:Object(u.jsx)(r.lb,{colSpan:"4",children:"No data"})}),t&&Object(u.jsx)(r.ob,{className:"text-center",children:Object(u.jsx)(r.lb,{colSpan:"4",children:Object(u.jsx)("div",{className:"alert alert-danger",role:"alert",children:t})})})]})]}),Object(u.jsx)(m.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:e.totalPages,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.handlePageClick,containerClassName:"pagination",activeClassName:"active"})]})}}t.default=Object(n.b)((e=>({supplierResponse:e.supplierResponse,messageResponse:e.messageResponse,modalVisible:e.modalVisibleResponse})),{clearMessage:o.a,getSuppliers:c.c,setSupplierModal:p.n,setAlertModal:p.h})(f)}}]);
//# sourceMappingURL=58.4f9e4fa7.chunk.js.map