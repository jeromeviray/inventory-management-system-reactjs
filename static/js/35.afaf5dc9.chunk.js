(this["webpackJsonp@project/inventory-management-system"]=this["webpackJsonp@project/inventory-management-system"]||[]).push([[35],{413:function(e,t,a){"use strict";a.d(t,"k",(function(){return n})),a.d(t,"j",(function(){return r})),a.d(t,"e",(function(){return i})),a.d(t,"h",(function(){return l})),a.d(t,"g",(function(){return o})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return d})),a.d(t,"a",(function(){return p})),a.d(t,"d",(function(){return u})),a.d(t,"i",(function(){return h})),a.d(t,"f",(function(){return b})),a.d(t,"n",(function(){return m})),a.d(t,"o",(function(){return g})),a.d(t,"m",(function(){return j})),a.d(t,"l",(function(){return f}));var s=a(2);const n=(e,t,a)=>async n=>{n({type:s.SET_PRODUCTEDITMODAL_VISIBILIT,payload:{status:200,data:{visible:e,action:t,icon:a}}})},r=(e,t,a)=>async n=>{n({type:s.SET_PRODUCT_DETAILS_MODAL,payload:{status:200,data:{visible:e,action:t,product:a}}})},i=(e,t,a,n)=>async r=>{r({type:s.EDIT_PRODUCT_MODAL,payload:{status:200,data:{visible:e,action:t,product:a,icon:n}}})},l=(e,t,a,n)=>async r=>{r({type:s.ALERT_MODAL,payload:{action:t,module:a,alert:e,data:{id:n}}})},o=(e,t,a,n)=>async r=>{r({type:s.ALERT_BAN_MODAL,payload:{action:t,module:a,alert:e,data:{id:n}}})},c=(e,t,a,n)=>async r=>{r({type:s.ADD_BRAND_MODAL,payload:{status:200,data:{visible:e,action:t,brand:a,icon:n}}})},d=(e,t,a,n)=>async r=>{r({type:s.ADD_CATEGORY_MODAL,payload:{status:200,data:{visible:e,action:t,category:a,icon:n}}})},p=(e,t,a,n)=>async r=>{r({type:s.ADD_EMPLOYEE_MODAL,payload:{status:200,data:{visible:e,action:t,employee:a,icon:n}}})},u=(e,t,a,n)=>async r=>{r({type:s.CHANGE_PASSWORD_MODAL,payload:{status:200,data:{visible:e,action:t,employee:a,icon:n}}})},h=(e,t)=>async a=>{a({type:s.LOGIN_MODAL,payload:{data:{visible:e,action:t}}})},b=(e,t,a,n)=>async r=>{r({type:s.SET_ADDRESS_MODAL,payload:{data:{visible:e,action:t,address:a,icon:n}}})},m=(e,t,a,n)=>async r=>{r({type:s.SET_SUPPLIER_MODAL,payload:{action:t,data:{visible:e,icon:n,supplier:a}}})},g=(e,t,a,n)=>async r=>{r({type:s.SET_SUPPLY_MODAL,payload:{action:t,data:{visible:e,icon:n,supply:a}}})},j=(e,t)=>async a=>{a({type:s.SET_SCAN_MODAL,payload:{action:t,data:{visible:e}}})},f=(e,t,a,n)=>async r=>{r({type:s.SET_PROMO_MODAL,payload:{action:t,data:{visible:e,icon:n,promo:a}}})}},427:function(e,t,a){(function(t){var s;e.exports=(s=a(0),function(e){var t={};function a(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(s,n,function(t){return e[t]}.bind(null,n));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(e,t){e.exports=s},function(e,t,a){"use strict";var s=a(3);function n(){}function r(){}r.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,r,i){if(i!==s){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:n};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(0),i=a.n(r);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}var o=function(e){var t=e.pageClassName,a=e.pageLinkClassName,s=e.page,r=e.selected,i=e.activeClassName,o=e.activeLinkClassName,c=e.getEventListener,d=e.pageSelectedHandler,p=e.href,u=e.extraAriaContext,h=e.pageLabelBuilder,b=e.ariaLabel||"Page "+s+(u?" "+u:""),m=null;return r&&(m="page",b=e.ariaLabel||"Page "+s+" is your current page",t=void 0!==t?t+" "+i:i,void 0!==a?void 0!==o&&(a=a+" "+o):a=o),n.a.createElement("li",{className:t},n.a.createElement("a",l({role:"button",className:a,href:p,tabIndex:"0","aria-label":b,"aria-current":m,onKeyPress:d},c(d)),h(s)))};o.propTypes={pageSelectedHandler:i.a.func.isRequired,selected:i.a.bool.isRequired,pageClassName:i.a.string,pageLinkClassName:i.a.string,activeClassName:i.a.string,activeLinkClassName:i.a.string,extraAriaContext:i.a.string,href:i.a.string,ariaLabel:i.a.string,page:i.a.number.isRequired,getEventListener:i.a.func.isRequired,pageLabelBuilder:i.a.func.isRequired};var c=o;function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}var p=function(e){var t=e.breakLabel,a=e.breakClassName,s=e.breakLinkClassName,r=e.breakHandler,i=e.getEventListener,l=a||"break";return n.a.createElement("li",{className:l},n.a.createElement("a",d({className:s,role:"button",tabIndex:"0",onKeyPress:r},i(r)),t))};p.propTypes={breakLabel:i.a.oneOfType([i.a.string,i.a.node]),breakClassName:i.a.string,breakLinkClassName:i.a.string,breakHandler:i.a.func.isRequired,getEventListener:i.a.func.isRequired};var u=p;function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}function m(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,s=y(e);if(t){var n=y(this).constructor;a=Reflect.construct(s,arguments,n)}else a=s.apply(this,arguments);return f(this,a)}}function f(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(i,e);var t,a,s,r=j(i);function i(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),x(O(t=r.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),x(O(t),"handleNextPage",(function(e){var a=t.state.selected,s=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<s-1&&t.handlePageSelected(a+1,e)})),x(O(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e?(t.setState({selected:e}),t.callCallback(e)):t.callActiveCallback(e)})),x(O(t),"getEventListener",(function(e){return x({},t.props.eventListener,e)})),x(O(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var s=t.state.selected;t.handlePageSelected(s<e?t.getForwardJump():t.getBackwardJump(),a)})),x(O(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),x(O(t),"callActiveCallback",(function(e){void 0!==t.props.onPageActive&&"function"==typeof t.props.onPageActive&&t.props.onPageActive({selected:e})})),x(O(t),"pagination",(function(){var e=[],a=t.props,s=a.pageRangeDisplayed,r=a.pageCount,i=a.marginPagesDisplayed,l=a.breakLabel,o=a.breakClassName,c=a.breakLinkClassName,d=t.state.selected;if(r<=s)for(var p=0;p<r;p++)e.push(t.getPageElement(p));else{var h,b,m,g=s/2,j=s-g;d>r-s/2?g=s-(j=r-d):d<s/2&&(j=s-(g=d));var f=function(e){return t.getPageElement(e)};for(h=0;h<r;h++)(b=h+1)<=i||b>r-i||h>=d-g&&h<=d+j?e.push(f(h)):l&&e[e.length-1]!==m&&(m=n.a.createElement(u,{key:h,breakLabel:l,breakClassName:o,breakLinkClassName:c,breakHandler:t.handleBreakClick.bind(null,h),getEventListener:t.getEventListener}),e.push(m))}return e})),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return t=i,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,s=e.extraAriaContext;void 0===t||a||this.callCallback(t),s&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,s=e+t.pageRangeDisplayed;return s>=a?a-1:s}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,s=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<s)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,s=a.pageClassName,r=a.pageLinkClassName,i=a.activeClassName,l=a.activeLinkClassName,o=a.extraAriaContext,d=a.pageLabelBuilder;return n.a.createElement(c,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:s,pageLinkClassName:r,activeClassName:i,activeLinkClassName:l,extraAriaContext:o,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:d,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,s=e.containerClassName,r=e.previousLabel,i=e.previousClassName,l=e.previousLinkClassName,o=e.previousAriaLabel,c=e.prevRel,d=e.nextLabel,p=e.nextClassName,u=e.nextLinkClassName,h=e.nextAriaLabel,m=e.nextRel,g=this.state.selected,j=i+(0===g?" ".concat(t):""),f=p+(g===a-1?" ".concat(t):""),O=0===g?"true":"false",y=g===a-1?"true":"false";return n.a.createElement("ul",{className:s},n.a.createElement("li",{className:j},n.a.createElement("a",b({className:l,href:this.hrefBuilder(g-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":O,"aria-label":o,rel:c},this.getEventListener(this.handlePreviousPage)),r)),this.pagination(),n.a.createElement("li",{className:f},n.a.createElement("a",b({className:u,href:this.hrefBuilder(g+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":y,"aria-label":h,rel:m},this.getEventListener(this.handleNextPage)),d)))}}])&&m(t.prototype,a),s&&m(t,s),i}(s.Component);x(v,"propTypes",{pageCount:i.a.number.isRequired,pageRangeDisplayed:i.a.number.isRequired,marginPagesDisplayed:i.a.number.isRequired,previousLabel:i.a.node,previousAriaLabel:i.a.string,prevRel:i.a.string,nextLabel:i.a.node,nextAriaLabel:i.a.string,nextRel:i.a.string,breakLabel:i.a.oneOfType([i.a.string,i.a.node]),hrefBuilder:i.a.func,onPageChange:i.a.func,onPageActive:i.a.func,initialPage:i.a.number,forcePage:i.a.number,disableInitialCallback:i.a.bool,containerClassName:i.a.string,pageClassName:i.a.string,pageLinkClassName:i.a.string,pageLabelBuilder:i.a.func,activeClassName:i.a.string,activeLinkClassName:i.a.string,previousClassName:i.a.string,nextClassName:i.a.string,previousLinkClassName:i.a.string,nextLinkClassName:i.a.string,disabledClassName:i.a.string,breakClassName:i.a.string,breakLinkClassName:i.a.string,extraAriaContext:i.a.string,ariaLabelBuilder:i.a.func,eventListener:i.a.string}),x(v,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick"}),t.default=v}]))}).call(this,a(121))},527:function(e,t,a){"use strict";var s=a(0),n=a(412),r=a(413),i=a(444),l=a(418),o=a(414),c=a(50),d=a(120),p=a(8);class u extends s.Component{constructor(...e){super(...e),this.state={visible:!1,icon:"",action:"",employee:this.employeeState,loading:!1,type:"password",edit:!1,checked:!1,changePassword:this.changePasswordState,changePasswordLoading:!1,id:""},this.employeeState={firstName:"",lastName:"",role:"",email:"",username:"",phoneNumber:"",password:"",birthday:""},this.changePasswordState={accountId:"",currentPassword:"",newPassword:"",confirmPassword:""},this.onResetChangePasswordValue=()=>{this.setState((()=>this.changePasswordState))},this.manageEmployeeModal=(e,t)=>{if(e.modalVisible!==this.props.modalVisible){let{visible:e,action:t,employee:a,icon:s}=this.props.modalVisible;if("Add"===t)this.setState({visible:e,action:t,icon:s,edit:!1});else if("Edit"===t){let{firstName:n,lastName:r,phoneNumber:i,account:l,birthday:o,id:c}=a;this.setState({visible:e,action:t,icon:s,edit:!0,firstName:n,lastName:r,phoneNumber:i,username:l.username,role:l.roles[0].roleName,email:l.email,accountId:l.id,birthday:o,id:c})}else"close"===t&&(this.setState({visible:e,edit:!1,checked:!1,loading:!1}),this.onResetChangePasswordValue())}},this.handleOnChange=e=>{let t=e.target.name;this.setState({[t]:e.target.value})},this.handleShowPassword=e=>{const{type:t}=this.state;this.setState({type:"password"===t?"text":"password"})},this.handleOnSubmit=e=>{e.preventDefault();let{action:t}=this.state;this.setState({loading:!0}),"Add"===t?this.handleSaveAccount():"Edit"===t&&this.handleUpdateUser()},this.handleSaveAccount=()=>{let{firstName:e,lastName:t,email:a,phoneNumber:s,username:n,password:r,role:i,birthday:l}=this.state;this.props.saveEmployee(e,t,a,s,n,r,l,i).then((()=>{let{status:e}=this.props.messageResponse;200===e&&this.setState({loading:!1}),setInterval((()=>{this.props.clearMessage(),window.location.reload()}),1e3)})).catch((()=>{this.setState({loading:!1})}))},this.handleUpdateUser=()=>{let{firstName:e,lastName:t,phoneNumber:a,birthday:s,id:n}=this.state;this.props.updateUser(n,e,t,a,s).then((()=>{let{status:e}=this.props.messageResponse;200===e&&this.setState({loading:!1}),setInterval((()=>{this.props.clearMessage(),window.location.reload()}),1e3)})).catch((()=>{this.setState({loading:!1})}))},this.handleOnChecked=()=>{this.setState({checked:!this.state.checked})},this.handleOnChangePassword=e=>{let{currentPassword:t,newPassword:a,confirmPassword:s,accountId:n}=this.state;this.setState({changePasswordLoading:!0}),e.preventDefault(),this.props.changePassword(n,t,a,s).then((()=>{let{status:e}=this.props.messageResponse;200===e&&this.setState({loading:!1}),this.onResetChangePasswordValue(),this.setState({changePasswordLoading:!1})})).catch((()=>{let{status:e}=this.props.messageResponse;this.setState({changePasswordLoading:!1})}))}}componentDidUpdate(e,t){this.manageEmployeeModal(e,t)}render(){let{visible:e,firstName:t,lastName:a,type:s,email:r,username:i,password:l,phoneNumber:c,icon:u,action:h,loading:b,edit:m,role:g,checked:j,newPassword:f,currentPassword:O,confirmPassword:y,changePasswordLoading:x,birthday:v}=this.state,C=this.props.userResponse.credentials.roles;return Object(p.jsx)("div",{children:Object(p.jsxs)(n.O,{visible:e,size:"lg",children:[Object(p.jsx)(n.R,{onDismiss:()=>this.props.addEmployeeModal(!1,"close","",""),children:Object(p.jsx)(n.S,{children:Object(p.jsxs)("div",{className:"d-flex align-items-center",children:[u,h+" Account"]})})}),Object(p.jsxs)(n.P,{children:[Object(p.jsx)(n.A,{onSubmit:this.handleOnSubmit,id:"employee",children:Object(p.jsx)("div",{className:"mb-3",children:Object(p.jsxs)(n.ab,{children:[Object(p.jsx)(n.p,{sm:"12",lg:"6",children:Object(p.jsxs)(n.E,{className:"mb-3",children:[Object(p.jsx)(n.C,{name:"firstName",value:t,onChange:this.handleOnChange,type:"text",id:"floatingFirstNameInput",placeholder:"Enter First Name"}),Object(p.jsx)(n.F,{htmlFor:"floatingFirstNameInput",children:"First name"})]})}),Object(p.jsx)(n.p,{sm:"12",lg:"6",children:Object(p.jsxs)(n.E,{className:"mb-3",children:[Object(p.jsx)(n.C,{name:"lastName",value:a,onChange:this.handleOnChange,type:"text",id:"floatingLastNameInput",placeholder:"Enter Last Name"}),Object(p.jsx)(n.F,{htmlFor:"floatingLastNameInput",children:"Last name"})]})}),Object(p.jsx)(n.p,{sm:"12",lg:"6",children:Object(p.jsxs)(n.E,{className:"mb-3",children:[Object(p.jsx)(n.C,{name:"phoneNumber",value:c,onChange:this.handleOnChange,type:"number",id:"floatingNumberInput",placeholder:"Enter First Name"}),Object(p.jsx)(n.F,{htmlFor:"floatingNumberInput",children:"Phone Number"})]})}),Object(p.jsx)(n.p,{sm:"12",md:"6",lg:!0,className:C.roleName===d.a.SUPER_ADMIN?"":"d-none",children:Object(p.jsxs)(n.E,{className:"mb-3",children:[Object(p.jsxs)(n.G,{value:g,onChange:this.handleOnChange,name:"role",id:"floatingSelectRole","aria-label":"Role Select",disabled:m,children:[Object(p.jsx)("option",{children:"Choose Role"}),Object(p.jsx)("option",{value:"SUPER_ADMIN",children:"Super Admin"}),Object(p.jsx)("option",{value:"ADMIN",children:"Admin"})]}),Object(p.jsx)(n.F,{htmlFor:"floatingSelectRole",children:"Role"})]})}),Object(p.jsx)(n.p,{sm:"12",lg:"6",children:Object(p.jsxs)(n.E,{className:"mb-3",children:[Object(p.jsx)(n.C,{name:"username",value:i,onChange:this.handleOnChange,type:"text",id:"floatingUsernameInput",placeholder:"Enter Username",disabled:m}),Object(p.jsx)(n.F,{htmlFor:"floatingUsernameInput",children:"Username"})]})}),Object(p.jsx)(n.p,{sm:"12",lg:"6",className:m?"d-none":"",children:Object(p.jsxs)(n.E,{className:"text-dark position-relative",children:[Object(p.jsx)(n.C,{name:"password",type:s,id:"floatingPassword",autoCorrect:"false",placeholder:"Password",onChange:this.handleOnChange,value:l,required:!0,disabled:m}),Object(p.jsx)(n.F,{htmlFor:"exampleFormControlTextarea1 ",children:Object(p.jsx)("span",{children:"Password"})}),Object(p.jsx)("span",{onClick:this.handleShowPassword,className:"position-absolute top-50 end-0 translate-middle-y ps-4 pe-4",children:"password"===s?Object(p.jsx)(o.j,{size:20}):Object(p.jsx)(o.i,{size:20})})]})}),Object(p.jsx)(n.p,{sm:"12",lg:"6",children:Object(p.jsxs)(n.E,{className:"mb-3",children:[Object(p.jsx)(n.C,{name:"email",value:r,onChange:this.handleOnChange,type:"email",id:"floatingemailInput",placeholder:"Enter email",disabled:m}),Object(p.jsx)(n.F,{htmlFor:"floatingemailInput",children:"Email"})]})}),Object(p.jsx)(n.p,{sm:"12",lg:"6",children:Object(p.jsxs)(n.E,{className:"mb-3",children:[Object(p.jsx)(n.C,{name:"birthday",value:v,onChange:this.handleOnChange,type:"date",id:"floatingBirthdayInput",placeholder:"Enter Birtday"}),Object(p.jsx)(n.F,{htmlFor:"floatingBirthdayInput",children:"Birthday"})]})})]})})}),Object(p.jsx)(n.p,{sm:"12",lg:"12",className:m?"d-block":"d-none",children:Object(p.jsx)(n.B,{id:"changePasswordCheckBox",label:"Change Password",checked:j,name:"checked",onChange:this.handleOnChecked})}),Object(p.jsx)(n.A,{onSubmit:this.handleOnChangePassword,id:"changePassowrd",className:j?"d-block":"d-none",children:Object(p.jsxs)(n.ab,{className:j?"d-block":"d-none",children:[Object(p.jsx)(n.p,{sm:"12",lg:"6",className:"mt-3",children:Object(p.jsxs)(n.E,{className:"text-dark position-relative",children:[Object(p.jsx)(n.C,{name:"currentPassword",type:s,id:"floatingCurrentPassword",autoCorrect:"false",placeholder:"Current Password",onChange:this.handleOnChange,value:O,required:!0}),Object(p.jsx)(n.F,{htmlFor:"floatingCurrentPassword ",children:Object(p.jsx)("span",{children:"Current Password"})}),Object(p.jsx)("span",{onClick:this.handleShowPassword,className:"position-absolute top-50 end-0 translate-middle-y ps-4 pe-4",children:"password"===s?Object(p.jsx)(o.j,{size:20}):Object(p.jsx)(o.i,{size:20})})]})}),Object(p.jsx)(n.p,{sm:"12",lg:"6",className:"mt-3",children:Object(p.jsxs)(n.E,{className:"text-dark position-relative",children:[Object(p.jsx)(n.C,{name:"newPassword",type:s,id:"floatingNewPassword",autoCorrect:"false",placeholder:"New Password",onChange:this.handleOnChange,value:f,required:!0}),Object(p.jsx)(n.F,{htmlFor:"floatingNewPassword ",children:Object(p.jsx)("span",{children:"New Password"})}),Object(p.jsx)("span",{onClick:this.handleShowPassword,className:"position-absolute top-50 end-0 translate-middle-y ps-4 pe-4",children:"password"===s?Object(p.jsx)(o.j,{size:20}):Object(p.jsx)(o.i,{size:20})})]})}),Object(p.jsx)(n.p,{sm:"12",lg:"6",className:"mt-3",children:Object(p.jsxs)(n.E,{className:"text-dark position-relative",children:[Object(p.jsx)(n.C,{name:"confirmPassword",type:s,id:"floatingConfirmPassword",autoCorrect:"false",placeholder:"Confirm Password",onChange:this.handleOnChange,value:y,required:!0}),Object(p.jsx)(n.F,{htmlFor:"floatingConfirmPassword ",children:Object(p.jsx)("span",{children:"Confirm Password"})}),Object(p.jsx)("span",{onClick:this.handleShowPassword,className:"position-absolute top-50 end-0 translate-middle-y ps-4 pe-4",children:"password"===s?Object(p.jsx)(o.j,{size:20}):Object(p.jsx)(o.i,{size:20})})]})}),Object(p.jsx)(n.p,{sm:"12",lg:"12",className:"mt-3",children:Object(p.jsxs)(n.f,{type:"submit",form:"changePassowrd",disabled:x,children:[x&&Object(p.jsx)(n.fb,{size:"sm",className:"ms-1"}),"Change Password"]})})]})})]}),Object(p.jsxs)(n.Q,{children:[Object(p.jsx)(n.f,{color:"dark",variant:"ghost",onClick:()=>this.props.addEmployeeModal(!1,"close","",""),children:"Close"}),Object(p.jsxs)(n.f,{color:"primary",type:"submit",form:"employee",disabled:b,children:[b&&Object(p.jsx)(n.fb,{size:"sm",className:"ms-1"}),"Save ","Edit"===h?"Changes":"Empolyee"]})]})]})})}}t.a=Object(c.b)((e=>({modalVisible:e.modalVisibleResponse,messageResponse:e.messageResponse,userResponse:e.userResponse})),{addEmployeeModal:r.a,saveEmployee:i.h,clearMessage:l.a,changePassword:i.b,updateUser:i.i})(u)},637:function(e,t,a){"use strict";a.r(t),a.d(t,"Customer",(function(){return j}));var s=a(0),n=a(50),r=a(412),i=a(413),l=a(444),o=a(418),c=a(445),d=a(414),p=a(8);class u extends s.Component{constructor(...e){super(...e),this.state={visible:!1,id:"",action:"",module:"",loading:!1,success:!1,message:"",status:""},this.manageModalAlert=(e,t)=>{if(e.modalVisible!==this.props.modalVisible){let{alert:e,id:t,module:a,action:s}=this.props.modalVisible;console.log(this.props.modalVisible),"BANACCOUNT"===s&&"CUSTOMER"===a&&this.setState({visible:e,id:t,module:a,action:s})}},this.handleOnBanAccount=()=>{const{id:e,action:t,module:a}=this.state;console.log(t+" "+a),"BANACCOUNT"===t&&"CUSTOMER"===a?this.handleBanCustomerAccount(e):console.log("ERRPR")},this.handleBanCustomerAccount=e=>{this.props.banAccount(e).then((()=>{let{data:e}=this.props.messageResponse;this.setState({loading:!1}),setInterval((function(){window.location.reload()}),1e3)})).catch((()=>{this.setState({successFully:!1,loading:!1})}))}}componentDidUpdate(e,t){this.manageModalAlert(e,t)}render(){let{visible:e,loading:t}=this.state;return Object(p.jsx)("div",{children:Object(p.jsxs)(r.O,{visible:e,onDismiss:()=>this.props.setAlertBanModal(!1),children:[Object(p.jsx)(r.R,{onDismiss:()=>this.props.setAlertBanModal(!1),children:Object(p.jsx)(r.S,{children:"Confirmation"})}),Object(p.jsx)(r.P,{className:"text-center",children:Object(p.jsx)("h6",{children:"Are you sure you want to Ban this Account?"})}),Object(p.jsxs)(r.Q,{children:[Object(p.jsx)(r.f,{color:"dark",variant:"ghost",onClick:()=>{this.props.setAlertBanModal(!1,"","","")},children:"No"}),Object(p.jsxs)(r.f,{type:"submit",color:"primary",disabled:t,onClick:()=>this.handleOnBanAccount(),children:[t&&Object(p.jsx)(r.fb,{size:"sm",className:"ms-1"}),"Yes"]})]})]})})}}var h=Object(n.b)((e=>({modalVisible:e.modalVisibleResponse,messageResponse:e.messageResponse,userResponse:e.userResponse})),{setAlertBanModal:i.g,clearMessage:o.a,banAccount:l.a})(u),b=a(527),m=a(427),g=a.n(m);class j extends s.Component{constructor(...e){super(...e),this.state={message:"",customers:{data:[],totalPages:0},visible:!1,query:"",page:0,limit:10,role:"CUSTOMER"},this.getUsersAccount=(e,t,a,s)=>{this.props.getUsersAccount(e,t,a,s)},this.manageCustomerResponse=(e,t)=>{if(e.customerResponse!==this.props.customerResponse){let{status:e,action:t,data:a}=this.props.customerResponse;200===e&&"USERSACCOUNT"===t&&this.setState({customers:a.accounts})}},this.handleSearch=e=>{const{page:t,limit:a,role:s}=this.state;this.getUsersAccount(e.target.value,s,t,a),this.setState({query:e.target.value})},this.handlePageClick=e=>{let t=e.selected;this.setState({page:t});const{limit:a,query:s,role:n}=this.state;this.getUsersAccount(s,n,t,a)}}componentDidMount(){const{query:e,role:t,page:a,limit:s}=this.state;this.getUsersAccount(e,t,a,s)}componentDidUpdate(e,t){this.manageCustomerResponse(e,t)}renderAlerModal(){return Object(p.jsx)(h,{})}renderEmployeeModal(){return Object(p.jsx)(b.a,{})}render(){let{customers:e,message:t,visible:a,query:s}=this.state;return Object(p.jsxs)(p.Fragment,{children:[this.renderAlerModal(),this.renderEmployeeModal(),Object(p.jsx)("div",{className:"d-flex justify-content-end mb-2",children:Object(p.jsx)(r.A,{className:"w-50",children:Object(p.jsxs)(r.M,{children:[Object(p.jsx)(r.C,{type:"text",id:"floatingInput",placeholder:"Search",className:"p-2",value:s,onChange:this.handleSearch}),Object(p.jsx)(r.f,{type:"button",color:"info",variant:"outline",id:"button-addon2",className:"",children:Object(p.jsx)(d.v,{})})]})})}),Object(p.jsxs)(r.ib,{striped:!0,hover:!0,className:"shadow-sm ",responsive:!0,bordered:!0,align:"middle",children:[Object(p.jsxs)(r.kb,{children:["List of Brand: ",Object(p.jsx)("b",{children:e.totalItems})]}),Object(p.jsx)(r.mb,{color:"dark",children:Object(p.jsxs)(r.ob,{className:"text-center",children:[Object(p.jsx)(r.nb,{scope:"col",children:"Name"}),Object(p.jsx)(r.nb,{scope:"col",children:"Contact"}),Object(p.jsx)(r.nb,{scope:"col",children:"Username"}),Object(p.jsx)(r.nb,{scope:"col",children:"Email Address"}),Object(p.jsx)(r.nb,{scope:"col",children:"Role"}),Object(p.jsx)(r.nb,{scope:"col",children:"Created Date"}),Object(p.jsx)(r.nb,{scope:"col",children:"Action"})]})}),Object(p.jsxs)(r.jb,{className:"text-center",color:"light",children:[t&&Object(p.jsx)(r.ob,{className:"text-center",children:Object(p.jsx)(r.lb,{colSpan:"7",children:Object(p.jsx)("div",{className:"alert alert-danger",role:"alert",children:t})})}),e.data.length>0?Object(p.jsx)(p.Fragment,{children:e.data.map(((e,t)=>{let{firstName:s,lastName:n,phoneNumber:i,account:l}=e;return Object(p.jsxs)(r.ob,{className:"text-center",children:[Object(p.jsx)(r.lb,{children:s+" "+n}),Object(p.jsx)(r.lb,{children:i}),Object(p.jsx)(r.lb,{children:l.username}),Object(p.jsx)(r.lb,{children:l.email}),Object(p.jsx)(r.lb,{children:l.roles[0].roleName}),Object(p.jsx)(r.lb,{children:l.created}),Object(p.jsxs)(r.nb,{className:"text-center",colSpan:"1",children:[Object(p.jsx)(r.f,{color:"info",className:"me-2",variant:"ghost",size:"sm",onClick:()=>this.props.addEmployeeModal(!a,"Edit",e,Object(p.jsx)(c.d,{size:"20",className:"me-2"})),children:Object(p.jsx)(c.d,{size:"20"})}),Object(p.jsx)(r.f,{color:"danger",className:"ms-2",variant:"ghost",onClick:()=>this.props.setAlertBanModal(!a,"BANACCOUNT","CUSTOMER",l.id),size:"sm",children:Object(p.jsx)(d.a,{size:"20"})})]})]},t)}))}):Object(p.jsx)(r.ob,{children:Object(p.jsx)(r.lb,{colSpan:"7",children:"No data"})})]})]}),Object(p.jsx)(g.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:e.totalPages,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.handlePageClick,containerClassName:"pagination",activeClassName:"active"})]})}}t.default=Object(n.b)((e=>({customerResponse:e.accountResponse,messageResponse:e.messageResponse})),{setAlertModal:i.h,getUsersAccount:l.f,setAlertBanModal:i.g,addEmployeeModal:i.a,clearMessage:o.a})(j)}}]);
//# sourceMappingURL=35.afaf5dc9.chunk.js.map