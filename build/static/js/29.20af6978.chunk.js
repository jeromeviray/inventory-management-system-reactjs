(this["webpackJsonp@project/inventory-management-system"]=this["webpackJsonp@project/inventory-management-system"]||[]).push([[29,30,31],{415:function(e,t,s){"use strict";s.d(t,"l",(function(){return n})),s.d(t,"k",(function(){return i})),s.d(t,"e",(function(){return o})),s.d(t,"h",(function(){return r})),s.d(t,"g",(function(){return c})),s.d(t,"o",(function(){return l})),s.d(t,"b",(function(){return d})),s.d(t,"c",(function(){return p})),s.d(t,"a",(function(){return u})),s.d(t,"d",(function(){return h})),s.d(t,"j",(function(){return j})),s.d(t,"f",(function(){return m})),s.d(t,"p",(function(){return b})),s.d(t,"q",(function(){return g})),s.d(t,"n",(function(){return f})),s.d(t,"m",(function(){return O})),s.d(t,"r",(function(){return x})),s.d(t,"i",(function(){return y}));var a=s(2);const n=(e,t,s)=>async n=>{n({type:a.SET_PRODUCTEDITMODAL_VISIBILIT,payload:{status:200,data:{visible:e,action:t,icon:s}}})},i=(e,t,s)=>async n=>{n({type:a.SET_PRODUCT_DETAILS_MODAL,payload:{status:200,data:{visible:e,action:t,product:s}}})},o=(e,t,s,n)=>async i=>{i({type:a.EDIT_PRODUCT_MODAL,payload:{status:200,data:{visible:e,action:t,product:s,icon:n}}})},r=(e,t,s,n)=>async i=>{i({type:a.ALERT_MODAL,payload:{action:t,module:s,alert:e,data:{id:n}}})},c=(e,t,s,n)=>async i=>{i({type:a.ALERT_BAN_MODAL,payload:{action:t,module:s,alert:e,data:{id:n}}})},l=(e,t,s,n)=>async i=>{i({type:a.UDPATE_STORE_INFORMATION,payload:{status:200,data:{visible:e,action:t,storeInfo:s,icon:n}}})},d=(e,t,s,n)=>async i=>{i({type:a.ADD_BRAND_MODAL,payload:{status:200,data:{visible:e,action:t,brand:s,icon:n}}})},p=(e,t,s,n)=>async i=>{i({type:a.ADD_CATEGORY_MODAL,payload:{status:200,data:{visible:e,action:t,category:s,icon:n}}})},u=(e,t,s,n)=>async i=>{i({type:a.ADD_EMPLOYEE_MODAL,payload:{status:200,data:{visible:e,action:t,employee:s,icon:n}}})},h=(e,t,s,n)=>async i=>{i({type:a.CHANGE_PASSWORD_MODAL,payload:{status:200,data:{visible:e,action:t,employee:s,icon:n}}})},j=(e,t)=>async s=>{s({type:a.LOGIN_MODAL,payload:{data:{visible:e,action:t}}})},m=(e,t,s,n)=>async i=>{i({type:a.SET_ADDRESS_MODAL,payload:{data:{visible:e,action:t,address:s,icon:n}}})},b=(e,t,s,n)=>async i=>{i({type:a.SET_SUPPLIER_MODAL,payload:{action:t,data:{visible:e,icon:n,supplier:s}}})},g=(e,t,s,n)=>async i=>{i({type:a.SET_SUPPLY_MODAL,payload:{action:t,data:{visible:e,icon:n,supply:s}}})},f=(e,t)=>async s=>{s({type:a.SET_SCAN_MODAL,payload:{action:t,data:{visible:e}}})},O=(e,t,s,n)=>async i=>{i({type:a.SET_PROMO_MODAL,payload:{action:t,data:{visible:e,icon:n,promo:s}}})},x=(e,t,s,n)=>async i=>{i({type:a.SET_TERMS_AND_CONDITION_MODAL,payload:{status:200,data:{visible:e,action:t,termsAndCondition:s,icon:n}}})},y=(e,t,s,n)=>async i=>{i({type:a.SET_CAROULSE_MDOAL,payload:{status:200,data:{visible:e,action:t,carousel:s,icon:n}}})}},420:function(e,t,s){"use strict";s.d(t,"a",(function(){return c})),s.d(t,"b",(function(){return l})),s.d(t,"c",(function(){return d}));var a=s(13),n=s(2),i=s(120),o=s(52);var r=new class{addToCart(e){return o.a.post("/cart/item/add/"+e,{},{headers:Object(i.a)()})}getCart(){return o.a.get("/cart",{headers:Object(i.a)()})}removeItem(e){return console.log(e),o.a.delete("/cart/item/remove/"+e,{headers:Object(i.a)()})}};const c=e=>async t=>r.addToCart(e).then((e=>(t({type:n.ADD_TO_CART,payload:{status:200,action:"ADDTOCART",data:{}}}),t({type:a.g,payload:{status:200,data:{message:"Added Successfully"}}}),Promise.resolve())),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),n=e.response&&e.response.data&&e.response.data.code||e.toString();return t({type:a.g,payload:{status:n,data:{message:s}}}),Promise.reject()})),l=()=>async e=>r.getCart().then((t=>(e({type:n.GET_CART_ITEMS,payload:{status:200,action:"CARTITEMS",data:{cart:t.data}}}),Promise.resolve())),(t=>{const s=t.response&&t.response.data&&t.response.data.message||t.message||t.toString(),n=t.response&&t.response.data&&t.response.data.code||t.toString();return e({type:a.g,payload:{status:n,data:{message:s}}}),Promise.reject()})),d=e=>async t=>r.removeItem(e).then((e=>(t({type:n.REMOVE_ITEM,payload:{status:200,action:"REMOVE",data:{}}}),t({type:a.g,payload:{status:200,data:{message:"Remove Item Successfully"}}}),Promise.resolve())),(e=>{console.log(e);const s=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),n=e.response&&e.response.data&&e.response.data.code||e.toString();return t({type:a.g,payload:{status:n,data:{message:s}}}),Promise.reject()}))},421:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var s=[],a=!0,n=!1,i=void 0;try{for(var o,r=e[Symbol.iterator]();!(a=(o=r.next()).done)&&(s.push(o.value),!t||s.length!==t);a=!0);}catch(c){n=!0,i=c}finally{try{!a&&r.return&&r.return()}finally{if(n)throw i}}return s}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=s(0),i=l(n),o=l(s(53)),r=l(s(433)),c=l(s(434));function l(e){return e&&e.__esModule?e:{default:e}}var d={overflow:"hidden",position:"relative"};function p(e,t){return"\n    .react-stars-"+t+":before {\n      position: absolute;\n      overflow: hidden;\n      display: block;\n      z-index: 1;\n      top: 0; left: 0;\n      width: 50%;\n      content: attr(data-forhalf);\n      color: "+e+";\n  }"}function u(e){var t=(0,n.useState)(""),s=a(t,2),o=s[0],l=s[1],u=(0,n.useState)(0),h=a(u,2),j=h[0],m=h[1],b=(0,n.useState)([]),g=a(b,2),f=g[0],O=g[1],x=(0,n.useState)(!1),y=a(x,2),v=y[0],S=y[1],N=(0,r.default)(e),T=a(N,2),R=T[0],I=T[1],D=(0,n.useState)(0),A=a(D,2),C=A[0],w=A[1],M=(0,n.useState)(!1),_=a(M,2),P=_[0],L=_[1],k=(0,n.useState)(""),E=a(k,2),F=E[0],U=E[1];function W(e){"undefined"===typeof e&&(e=R.isHalf?Math.floor(j):Math.round(j));for(var t=[],s=0;s<R.count;s++)t.push({active:s<=e-1});return t}function z(e){if(R.edit){var t=Number(e.currentTarget.getAttribute("data-index"));if(R.isHalf){var s=H(e);L(s),s&&(t+=1),w(t)}else t+=1;!function(e){var t=f.filter((function(e){return e.active}));e!==t.length&&O(W(e))}(t)}}function H(e){var t=e.target.getBoundingClientRect(),s=e.clientX-t.left;return(s=Math.round(Math.abs(s)))>t.width/2}function V(){R.edit&&(G(j),O(W()))}function G(e){R.isHalf&&(L(function(e){return e%1===0}(e)),w(Math.floor(e)))}function q(e){if(R.edit){var t=Number(e.currentTarget.getAttribute("data-index")),s=void 0;if(R.isHalf){var a=H(e);L(a),a&&(t+=1),s=a?t:t+.5,w(t)}else s=t+=1;K(s)}}function K(t){t!==j&&(O(W(t)),m(t),e.onChange(t))}return(0,n.useEffect)((function(){var t,s;!function(){var t="react-stars";U(e.classNames+" "+t)}(),t=e.value,s=e.count,m(t<0||t>s?0:t),O(W(e.value)),I(e),l((Math.random()+"").replace(".","")),S(function(e){return!e.isHalf&&e.emptyIcon&&e.filledIcon||e.isHalf&&e.emptyIcon&&e.halfIcon&&e.filledIcon}(e)),w(Math.floor(e.value)),L(e.isHalf&&e.value%1<.5)}),[]),i.default.createElement("div",{className:"react-stars-wrapper-"+o,style:{display:"flex"}},i.default.createElement("div",{tabIndex:R.a11y&&R.edit?0:null,"aria-label":"add rating by typing an integer from 0 to 5 or pressing arrow keys",onKeyDown:function(e){if(R.a11y||R.edit){var t=e.key,s=j,a=Number(t);a?Number.isInteger(a)&&a>0&&a<=R.count&&(s=a):("ArrowUp"===t||"ArrowRight"===t)&&s<R.count?(e.preventDefault(),s+=R.isHalf?.5:1):("ArrowDown"===t||"ArrowLeft"===t)&&s>.5&&(e.preventDefault(),s-=R.isHalf?.5:1),G(s),K(s)}},className:F,style:d},R.isHalf&&function(){return i.default.createElement("style",{dangerouslySetInnerHTML:{__html:v?(e=R.activeColor,"\n          span.react-stars-half > * {\n          color: "+e+";\n      }"):p(R.activeColor,o)}});var e}(),f.map((function(e,t){return i.default.createElement(c.default,{key:t,index:t,active:e.active,config:R,onMouseOver:z,onMouseLeave:V,onClick:q,halfStarHidden:P,halfStarAt:C,isUsingIcons:v,uniqueness:o})})),i.default.createElement("p",{style:{position:"absolute",left:"-200rem"},role:"status"},j)))}u.propTypes={classNames:o.default.string,edit:o.default.bool,half:o.default.bool,value:o.default.number,count:o.default.number,char:o.default.string,size:o.default.number,color:o.default.string,activeColor:o.default.string,emptyIcon:o.default.element,halfIcon:o.default.element,filledIcon:o.default.element,a11y:o.default.bool},u.defaultProps={edit:!0,half:!1,value:0,count:5,char:"\u2605",size:15,color:"gray",activeColor:"#ffd700",a11y:!0,onChange:function(){}},t.default=u},424:function(e,t,s){"use strict";var a=s(0),n=s(414),i=s(51),o=s(415),r=s(124),c=s(416),l=s(441),d=s(122),p=s(430),u=s(25),h=s(8);class j extends a.Component{constructor(...e){super(...e),this.state={visible:!1,username:"",password:"",type:"password",loading:!1},this.manageModalVisible=(e,t)=>{if(e.modalVisibleResponse!==this.props.modalVisibleResponse){let{action:e,visible:t}=this.props.modalVisibleResponse;("LOGIN"===e||"loginclose"===e)&&this.setState({visible:t})}},this.handleOnChange=e=>{let t=e.target.name;this.setState({[t]:e.target.value})},this.handleShowPassword=e=>{const{type:t}=this.state;e.preventDefault(),this.setState({type:"password"===t?"text":"password"})},this.handleOnSubmit=e=>{const{username:t,password:s}=this.state;e.preventDefault(),this.setState({loading:!0}),0!==t.length&&0!==s.length?this.props.authenticateUser(t,s).then((()=>{let{roles:e}=this.props.userResponse.credentials;e.roleName===d.a.SUPER_ADMIN||e.roleName===d.a.ADMIN?(this.props.setLoginModal(!1,"loginclose"),setInterval((()=>{p.a.push(u.a.api.private.prefixFrontendUrl+"/app/dashboard"),window.location.reload()}),1e3)):this.props.setLoginModal(!1,"loginclose")})).catch((()=>{this.setState({loading:!1})})):this.setState({loading:!1})}}componentDidUpdate(e,t){this.manageModalVisible(e,t)}render(){let{visible:e,username:t,password:s,type:a,loading:i}=this.state;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(n.P,{alignment:"center",visible:e,children:[Object(h.jsx)(n.S,{onDismiss:()=>this.props.setLoginModal(!1,"loginclose"),children:Object(h.jsx)(n.T,{children:"Login"})}),Object(h.jsx)(n.Q,{children:Object(h.jsx)(n.s,{children:Object(h.jsx)(n.B,{id:"loginForm",onSubmit:this.handleOnSubmit,children:Object(h.jsxs)(n.bb,{children:[Object(h.jsx)(n.N,{className:"d-flex justify-content-center",children:Object(h.jsx)(n.q,{children:Object(h.jsxs)(n.F,{className:"mb-3 text-dark ",children:[Object(h.jsx)(n.D,{name:"username",type:"text",autoCorrect:"false",id:"floatingInput",placeholder:"username",onChange:this.handleOnChange,value:t,required:!0,className:"rounded-pill  ps-4 pe-4"}),Object(h.jsxs)(n.G,{htmlFor:"floatingInput ",className:"ps-4 pe-4",children:[Object(h.jsx)(c.C,{size:18}),Object(h.jsx)("span",{className:"ps-2",children:"Username"})]}),Object(h.jsx)(n.E,{invalid:!0,children:"Please provide a valid username"})]})})}),Object(h.jsxs)(n.N,{className:"d-flex justify-content-center",children:[Object(h.jsx)(n.q,{children:Object(h.jsxs)(n.F,{className:"text-dark position-relative",children:[Object(h.jsx)(n.D,{name:"password",type:a,id:"floatingPassword",autoCorrect:"false",placeholder:"Password",onChange:this.handleOnChange,value:s,required:!0,className:"rounded-pill ps-4 pe-4"}),Object(h.jsxs)(n.G,{htmlFor:"exampleFormControlTextarea1 ",className:"ps-4 pe-4",children:[Object(h.jsx)(c.n,{size:18}),Object(h.jsx)("span",{className:"ps-2",children:"Password"})]}),Object(h.jsx)("span",{onClick:this.handleShowPassword,className:"position-absolute top-50 end-0 translate-middle-y ps-4 pe-4",children:"password"===a?Object(h.jsx)(c.j,{size:20}):Object(h.jsx)(c.i,{size:20})}),Object(h.jsx)(n.E,{invalid:!0,children:"Please provide a valid password"})]})}),Object(h.jsx)(n.q,{xs:"12",sm:"12",md:"12",lg:"12"})]})]})})})}),Object(h.jsxs)(n.R,{children:[Object(h.jsx)(n.f,{variant:"ghost",color:"dark",onClick:()=>this.props.setLoginModal(!1,"loginclose"),children:"Close"}),Object(h.jsxs)(n.f,{form:"loginForm",type:"submit",color:"info",className:"d-flex justify-content-center align-items-center position-relative overflow-hidden login-btn",disabled:i,children:[i?Object(h.jsx)(n.gb,{size:"sm"}):Object(h.jsx)("span",{className:"d-flex align-items-center login-icon me-2",children:Object(h.jsx)(l.a,{size:20})}),Object(h.jsx)("span",{className:"label-btn ",children:"Login"})]})]})]})})}}t.a=Object(i.b)((e=>({modalVisibleResponse:e.modalVisibleResponse,messageResponse:e.messageResponse,userResponse:e.userResponse})),{setLoginModal:o.j,authenticateUser:r.a})(j)},426:function(e,t,s){"use strict";s.d(t,"b",(function(){return c})),s.d(t,"c",(function(){return l})),s.d(t,"a",(function(){return d}));var a=s(2),n=s(13),i=s(120),o=s(52);var r=new class{getWishlist(e,t,s){return o.a.get("/wishlist",{headers:Object(i.a)(),params:{query:e,page:t,limit:s}})}saveWishlist(e){return o.a.post("/wishlist",e,{headers:Object(i.a)()})}deleteWishlist(e){return o.a.delete("/wishlist/"+e,{headers:Object(i.a)()})}};const c=(e,t,s)=>async i=>r.getWishlist(e,t,s).then((e=>(i({type:a.GET_WISHLIST,payload:{status:200,action:"GET_WISHLIST",data:e.data}}),Promise.resolve())),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),s=e.response&&e.response.data&&e.response.data.code||e.toString();return i({type:n.g,payload:{status:s,data:{message:t}}}),Promise.reject()})),l=e=>async t=>r.saveWishlist(e).then((e=>(t({type:a.ADD_WISHLIST,payload:{status:200,action:"ADD_WISHLIST",data:e.data}}),t({type:n.g,payload:{status:200,data:{message:"Successfully added to wishlist",order:e.data}}}),Promise.resolve())),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),a=e.response&&e.response.data&&e.response.data.code||e.toString();return t({type:n.g,payload:{status:a,data:{message:s}}}),Promise.reject()})),d=e=>async t=>r.deleteWishlist(e).then((e=>(t({type:a.DELETE_WISHLIST,payload:{status:200,action:"DELETE_WISHLIST",data:{order:e.data}}}),t({type:n.g,payload:{status:200,data:{message:"Successfully deleted wishlist"}}}),Promise.resolve())),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),a=e.response&&e.response.data&&e.response.data.code||e.toString();return t({type:n.g,payload:{status:a,data:{message:s}}}),console.log("JKOSLDFJ"),Promise.reject()}))},431:function(e,t,s){"use strict";s.r(t),s.d(t,"ProductDetialsModal",(function(){return h}));var a=s(0),n=s(414),i=s(51),o=s(415),r=s(420),c=s(416),l=s(437),d=s(424),p=s(438),u=s(8);class h extends a.Component{constructor(...e){super(...e),this.state={visible:!1,product:[],loading:!1,message:"",footerDisplay:!1},this.manageModalVisibleResponse=(e,t)=>{if(e.modalVisibleResponse!==this.props.modalVisibleResponse){let{action:e,visible:t,product:s}=this.props.modalVisibleResponse;"PRODUCTDETAILS"===e?this.setState({visible:t,product:s,footerDisplay:!0}):("close"===e||"view"===e)&&this.setState({visible:t,product:s,footerDisplay:!1})}},this.handleAddToCart=e=>{let{product:t}=this.state.product,{isLoggedIn:s,credentials:a}=this.props.userResponse;if(this.setState({loading:!0}),s){let e=a.type+a.accessToken;this.props.addToCart(t.id,e).then((()=>{console.log("success added"),this.setState({loading:!1})}))}else this.setState({loading:!1}),this.props.setLoginModal(!0,"LOGIN")}}componentDidUpdate(e,t){this.manageModalVisibleResponse(e,t)}render(){let{visible:e,product:t,loading:s,toast:a,footerDisplay:i}=this.state;return Object(u.jsx)(u.Fragment,{children:t&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d.a,{}),Object(u.jsxs)(n.P,{size:"xl",visible:e,scrollable:!0,onDismiss:()=>this.props.setProductDetailsModal(!1,"close",""),children:[Object(u.jsx)(n.S,{onDismiss:()=>this.props.setProductDetailsModal(!1,"close",""),children:Object(u.jsx)(n.T,{children:"Product Details"})}),Object(u.jsxs)(n.Q,{children:[Object(u.jsx)(l.a,{product:t,button:!1}),Object(u.jsxs)("div",{className:" p-2",children:[Object(u.jsx)("h4",{className:"mb-4",children:"Product Description"}),Object(u.jsx)(p.a,{productDescription:t.product&&t.product.productDescription})]})]}),Object(u.jsxs)(n.R,{children:[Object(u.jsxs)("div",{className:i?"d-flex":"d-none",children:[Object(u.jsx)(n.f,{variant:"ghost",color:"dark",className:"d-flex justify-content-center align-items-center",children:Object(u.jsx)("span",{className:"text-black",children:"View Detailed"})}),Object(u.jsxs)(n.f,{type:"button",color:"info",className:"d-flex justify-content-center align-items-center",onClick:this.handleAddToCart,disabled:s,children:[s?Object(u.jsx)(n.gb,{size:"sm"}):Object(u.jsx)("span",{className:"d-flex align-items-center login-icon me-2",children:Object(u.jsx)(c.e,{})}),Object(u.jsx)("span",{className:"ms-2",children:"Add To Cart"})]})]}),Object(u.jsx)(n.f,{className:i?"d-none":"d-block",color:"secondary",variant:"ghost",onClick:()=>this.props.setProductDetailsModal(!1,"close",""),children:"Close"})]})]})]})})}}t.default=Object(i.b)((e=>({modalVisibleResponse:e.modalVisibleResponse,userResponse:e.userResponse,messageResponse:e.messageResponse})),{setProductDetailsModal:o.k,setLoginModal:o.j,addToCart:r.a})(h)},433:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var s=[],a=!0,n=!1,i=void 0;try{for(var o,r=e[Symbol.iterator]();!(a=(o=r.next()).done)&&(s.push(o.value),!t||s.length!==t);a=!0);}catch(c){n=!0,i=c}finally{try{!a&&r.return&&r.return()}finally{if(n)throw i}}return s}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=(0,n.useState)(e.count),s=a(t,2),i=s[0],o=s[1],r=(0,n.useState)(e.size),c=a(r,2),l=c[0],d=c[1],p=(0,n.useState)(e.char),u=a(p,2),h=u[0],j=u[1],m=(0,n.useState)(e.color),b=a(m,2),g=b[0],f=b[1],O=(0,n.useState)(e.activeColor),x=a(O,2),y=x[0],v=x[1],S=(0,n.useState)(e.isHalf),N=a(S,2),T=N[0],R=N[1],I=(0,n.useState)(e.edit),D=a(I,2),A=D[0],C=D[1],w=(0,n.useState)(e.emptyIcon),M=a(w,2),_=M[0],P=M[1],L=(0,n.useState)(e.halfIcon),k=a(L,2),E=k[0],F=k[1],U=(0,n.useState)(e.filledIcon),W=a(U,2),z=W[0],H=W[1],V=(0,n.useState)(e.a11y),G=a(V,2),q=G[0],K=G[1];return[{count:i,size:l,char:h,color:g,activeColor:y,isHalf:T,edit:A,emptyIcon:_,halfIcon:E,filledIcon:z,a11y:q},function(e){o(e.count),d(e.size),j(e.char),f(e.color),v(e.activeColor),R(e.isHalf),C(e.edit),P(e.emptyIcon),F(e.halfIcon),H(e.filledIcon),K(e.a11y)}]};var n=s(0)},434:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e};t.default=function(e){var t=e.index,s=e.active,n=e.config,i=e.onMouseOver,c=e.onMouseLeave,l=e.onClick,d=e.halfStarHidden,p=e.halfStarAt,u=e.isUsingIcons,h=e.uniqueness,j=n.color,m=n.activeColor,b=n.size,g=n.char,f=n.isHalf,O=n.edit,x=n.halfIcon,y=n.emptyIcon,v=n.filledIcon,S="",N=!1;f&&!d&&p===t&&(S=u?"react-stars-half":"react-stars-"+h,N=!0);var T=a({},r,{color:s?m:j,cursor:O?"pointer":"default",fontSize:b+"px"});return o.default.createElement("span",{className:S,style:T,key:t,"data-index":t,"data-forhalf":v?t:g,onMouseOver:i,onMouseMove:i,onMouseLeave:c,onClick:l},u?s?v:!s&&N?x:y:g)};var n,i=s(0),o=(n=i)&&n.__esModule?n:{default:n};var r={position:"relative",overflow:"hidden",cursor:"pointer",display:"block",float:"left"}},437:function(e,t,s){"use strict";var a=s(0),n=s(414),i=s(447),o=s(455),r=s(421),c=s.n(r),l=s(2),d=s(416),p=s(420),u=s(51),h=s(415),j=s(424),m=s(25),b=s(426),g=s(8);class f extends a.Component{constructor(e){super(e),this.handleAddToCart=e=>{let{product:t}=this.state.product,{isLoggedIn:s,credentials:a}=this.props.userResponse;if(this.setState({loading:!0}),s){let e=a.type+a.accessToken;this.props.addToCart(t.id,e).then((()=>{this.setState({loading:!1})})).catch((()=>{let{status:e,action:t}=this.props.messageResponse;this.setState({loading:!1})}))}else this.setState({loading:!1}),this.props.setLoginModal(!0,"LOGIN")},this.manageStatus=e=>{switch(e){case"OK":return Object(g.jsx)(n.c,{color:"success",shape:"rounded-pill",children:e});case"LOW":return Object(g.jsx)(n.c,{color:"warning",shape:"rounded-pill",children:e});case"OUT_OF_STOCK":return Object(g.jsx)(n.c,{color:"danger",shape:"rounded-pill",children:"OUT OF STOCK"});default:return Object(g.jsx)(n.c,{color:"danger",shape:"rounded-pill",children:e})}},this.state={product:this.props.product,loading:!1,button:this.props.button}}handleAddToWishlist(e){let{product:t}=this.state,{isLoggedIn:s,credentials:a}=this.props.userResponse;if(this.setState({loading:!0}),!s)return this.setState({loading:!1}),void this.props.setLoginModal(!0,"LOGIN");const n=t.wishlist;n&&n.id>0?this.props.deleteWishlist(n.id).then((()=>{t.wishlist=null,this.setState({product:t,loading:!1})})):this.props.saveWishlist({id:e}).then((()=>{t.wishlist=this.props.wishlistResponse.data,this.setState({product:t,loading:!1})}))}render(){const{product:e,inventory:t,wishlist:s,promo:a}=this.state.product,{loading:r,toast:p,button:u}=this.state,h=a&&a.status,b=a&&a.percentage;let f=e.productPrice*b/100,O=e.productPrice-f;const x={position:"absolute",zIndex:"2",top:"calc(4% - 16px)",height:"100%",cursor:"pointer",border:"none"},y={fontSize:"14px",fontWeight:"500"},v=e.rating?e.rating:0;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(j.a,{}),Object(g.jsxs)(n.bb,{children:[Object(g.jsx)(n.q,{sm:"12",md:"5",lg:"5",children:Object(g.jsx)(o.Carousel,{showArrows:!0,infiniteLoop:!0,renderArrowPrev:(e,t,s)=>t&&Object(g.jsx)("button",{type:"button",onClick:e,title:s,className:"arrow-style",style:{...x,left:0},children:Object(g.jsx)(i.a,{size:"40",style:{color:"white"}})}),renderArrowNext:(e,t,s)=>t&&Object(g.jsx)("button",{type:"button",onClick:e,title:s,className:"arrow-style",style:{...x,right:0},children:Object(g.jsx)(i.b,{size:"40",style:{color:"white"}})}),children:e.fileImages.length>0?e.fileImages.map(((e,t)=>Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:m.a.api.private.baseUrl+"/api/v1/products/getImages/bytesArrays/"+e.path+e.fileName})},t))):Object(g.jsx)("img",{src:l.NO_IMAGE_BASE64})})}),Object(g.jsx)(n.q,{sm:"12",md:"7",lg:"7",children:Object(g.jsxs)(n.i,{className:"border-0 p-3",children:[Object(g.jsx)(n.o,{children:e.productName}),Object(g.jsxs)(n.j,{className:" ps-0",children:[Object(g.jsx)("div",{className:"d-flex justify-content-start align-items-center",children:v?Object(g.jsx)(c.a,{count:5,value:v||0,size:24,edit:!1}):Object(g.jsx)("div",{style:{padding:"5px 0px"},children:Object(g.jsx)("span",{className:"text-black-50 ",children:"No Rating"})})}),e.sku&&Object(g.jsxs)("div",{className:"mt-2 mb-2",style:{...y},children:[Object(g.jsx)("span",{className:"text-black-50 me-3 ",children:"SKU"}),Object(g.jsx)("span",{className:"text-black-50 me-3 ",children:"112354879"})]}),Object(g.jsxs)("div",{className:"mt-2 mb-2",style:{...y},children:[Object(g.jsx)("span",{className:"me-3 text-black-50",children:"Brand"}),Object(g.jsx)("span",{className:"me-3",children:e.brand?e.brand.brand:"No Brand"})]}),Object(g.jsx)("div",{className:"mt-3 mb-3  d-flex align-items-center justify-content-between",children:Object(g.jsxs)("h5",{className:"peso-price",children:["\u20b1",h?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("span",{className:"text-muted text-decoration-line-through me-2",style:{fontSize:"16px"},children:e.productPrice.toFixed(2)}),Object(g.jsx)("span",{children:O.toFixed(2)}),Object(g.jsx)("span",{className:"text-muted ms-3",style:{fontSize:"16px"},children:b+"%"})]}):e.productPrice.toFixed(2)]})}),Object(g.jsxs)("div",{className:"product-stock-container",children:[Object(g.jsx)("span",{className:"stock-label",children:"Stock: "}),a?Object(g.jsx)("span",{className:"stock-label-value",children:a.quantity}):t.totalStock>0?Object(g.jsx)("span",{className:"stock-label-value",children:t.totalStock}):this.manageStatus(t.status)]}),Object(g.jsx)("hr",{})]}),u?Object(g.jsx)(n.k,{className:"bg-transparent",children:Object(g.jsx)("div",{className:"d-flex justify-content-end ",children:h||"OUT_OF_STOCK"!=t.status?Object(g.jsxs)(n.f,{type:"button",color:"info",className:"d-flex justify-content-center align-items-center w-100",onClick:this.handleAddToCart,disabled:r,children:[r?Object(g.jsx)(n.gb,{size:"sm"}):Object(g.jsx)("span",{className:"d-flex align-items-center login-icon me-2",children:Object(g.jsx)(d.e,{})}),Object(g.jsx)("span",{className:"ms-2",children:"Add To Cart"})]}):Object(g.jsxs)(n.f,{type:"button",color:"info",className:"d-flex justify-content-center align-items-center w-100",onClick:()=>{this.handleAddToWishlist(e.id)},disabled:r,style:{background:"pink"},children:[r?Object(g.jsx)(n.gb,{size:"sm"}):Object(g.jsx)("span",{className:"d-flex align-items-center login-icon me-2",children:Object(g.jsx)(d.k,{})}),Object(g.jsx)("span",{className:"ms-2",children:s?"Remove Wishlist":"Add To Wishlist"})]})})}):Object(g.jsx)(g.Fragment,{})]})})]})]})}}t.a=Object(u.b)((e=>({modalVisibleResponse:e.modalVisibleResponse,userResponse:e.userResponse,wishlistResponse:e.wishlistResponse})),{setLoginModal:h.j,addToCart:p.a,saveWishlist:b.c,deleteWishlist:b.a})(f)},438:function(e,t,s){"use strict";var a=s(0),n=s(448),i=s(459),o=s.n(i),r=s(460),c=s.n(r),l=s(8);class d extends a.Component{constructor(...e){super(...e),this.state={description:this.props.productDescription},this.createMarkup=e=>({__html:o.a.sanitize(e)})}render(){let{description:e}=this.state,t=e&&JSON.parse(e);if(t){let e=Object(n.convertFromRaw)(t);const s=n.EditorState.createWithContent(e),a=c()(Object(n.convertToRaw)(s.getCurrentContent()));return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"preview ps-4",dangerouslySetInnerHTML:this.createMarkup(a)})})}return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"preview ps-4"})})}}t.a=d},445:function(e,t,s){"use strict";var a=s(0),n=s(414),i=s(421),o=s.n(i),r=s(416),c=s(51),l=s(415),d=s(431),p=s(419),u=s(2),h=s(121),j=s(12),m=s(426),b=s(420),g=s(25),f=s(8);class O extends a.Component{constructor(...e){super(...e),this.state={iconModal:"eye",product:this.props.product,fileImage:this.props.fileImage,imageLink:!1,visible:!1,action:"",message:"",loading:!1},this.componentDidMount=()=>{this.handleIconModal(),this.handleImageLink()},this.handleIconModal=()=>{this.setState({iconModal:this.props.iconModal})},this.handleImageLink=()=>{this.setState({imageLink:this.props.imageLink})},this.handleAddToCart=e=>{let{product:t}=this.state.product,{isLoggedIn:s,credentials:a}=this.props.userResponse;if(this.setState({loading:!0}),s){let e=a.type+a.accessToken;this.props.addToCart(t.id,e).then((()=>{this.setState({loading:!1})})).catch((()=>{let{status:e,action:t}=this.props.messageResponse;this.setState({loading:!1})}))}else this.setState({loading:!1}),this.props.history.push(g.a.api.private.prefixFrontendUrl+"/login")},this.handleGetProduct=e=>{this.props.getProduct(e)},this.handleProductDetails=e=>{this.props.getProductDetails(e)},this.manageStatus=e=>{switch(e){case"OK":return Object(f.jsx)(n.c,{color:"success",shape:"rounded-pill",children:e});case"LOW":return Object(f.jsx)(n.c,{color:"warning",shape:"rounded-pill",children:e});case"OUT_OF_STOCK":return Object(f.jsx)(n.c,{color:"danger",shape:"rounded-pill",children:"OUT OF STOCK"});default:return Object(f.jsx)(n.c,{color:"danger",shape:"rounded-pill",children:e})}},this.renderAlert=()=>{}}componentDidUpdate(e,t){this.manageProductResponse(e,t)}handleAddToWishlist(e){let{product:t}=this.state,{isLoggedIn:s,credentials:a}=this.props.userResponse;if(this.setState({loading:!0}),!s)return this.setState({loading:!1}),void this.props.history.push(g.a.api.private.prefixFrontendUrl+"/login");const n=t.wishlist;n&&n.id>0?this.props.deleteWishlist(n.id).then((()=>{t.wishlist=null,this.setState({product:t,loading:!1})})).catch((()=>{this.setState({loading:!1})})):this.props.saveWishlist({id:e}).then((()=>{t.wishlist=this.props.wishlistResponse.data,this.setState({product:t,loading:!1})})).catch((()=>{this.setState({loading:!1})}))}manageProductResponse(e,t){const{visible:s}=this.state;if(e.productResponse!==this.props.productResponse){let e=this.props.productResponse;"GETBYID"===e.action?e.status>=200&&e.status<=300&&this.props.editProductModal(!s,"Edit",e.data.product,Object(f.jsx)(r.g,{size:20})):"DETAILS"===e.action&&200===e.status&&this.props.setProductDetailsModal(!s,"PRODUCTDETAILS",e.data.product)}}render(){let{product:e,fileImage:t,loading:s}=this.state;const{productName:a,productPrice:i,id:c}=e.product,{inventory:l,wishlist:p}=e,j=e.promo&&e.promo.status,m=e.promo&&e.promo.percentage;let b=i-i*m/100;const O=e.product.rating?e.product.rating:0;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(d.default,{}),Object(f.jsxs)(n.i,{className:"inner-card-container shadow-sm",children:[Object(f.jsx)("div",{className:"img-container",children:Object(f.jsx)(h.b,{to:{pathname:g.a.api.private.prefixFrontendUrl+"/products/product/"+a,state:c},className:"link-product-content",children:Object(f.jsx)("div",{className:"inner-img-container",children:Object(f.jsx)("img",{className:"border",variant:"top",src:t.length>0?g.a.api.private.baseUrl+"/api/v1/products/getImages/bytesArrays/"+t[0].path+t[0].fileName:u.NO_IMAGE_BASE64,alt:"product"})})})}),Object(f.jsxs)(n.j,{children:[Object(f.jsx)(h.b,{to:{pathname:g.a.api.private.prefixFrontendUrl+"/products/product/"+a,state:c},className:"nav-link text-dark p-0",children:Object(f.jsx)(n.o,{children:a})}),Object(f.jsxs)("div",{className:"card-label-price",children:[Object(f.jsxs)(n.o,{children:["\u20b1","ONGOING"===j?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("span",{className:"text-muted text-decoration-line-through me-2",style:{fontSize:"16px"},children:i.toFixed(2)}),Object(f.jsx)("span",{children:b.toFixed(2)}),Object(f.jsx)("span",{className:"text-muted ",style:{fontSize:"16px",float:"right"},children:m+"%"})]}):i.toFixed(2)]}),Object(f.jsxs)("div",{className:"product-stock-container",children:[Object(f.jsx)("span",{className:"stock-label",children:"Stock: "}),e.promo?Object(f.jsx)("span",{className:"",children:Object(f.jsx)("span",{className:"stock-label-value",children:e.promo.quantity})}):"OUT_OF_STOCK"===e.inventory.status?this.manageStatus(e.inventory.status):e.inventory.totalStock>0?Object(f.jsx)("span",{className:"stock-label-value",children:e.inventory.totalStock}):Object(f.jsx)("span",{className:"stock-label-value",children:e.inventory.threshold})]})]}),O?Object(f.jsx)(o.a,{count:5,value:O||0,size:24,edit:!1}):Object(f.jsx)("div",{style:{padding:"5px 0px"},children:Object(f.jsx)("span",{className:"text-black-50 ",children:"No Rating"})})]}),Object(f.jsx)(n.k,{children:j||"OUT_OF_STOCK"!=l.status?Object(f.jsxs)(n.f,{type:"button",color:"info",className:"d-flex justify-content-center align-items-center w-100",onClick:this.handleAddToCart,disabled:s,children:[s?Object(f.jsx)(n.gb,{size:"sm"}):Object(f.jsx)("span",{className:"d-flex align-items-center login-icon me-2",children:Object(f.jsx)(r.e,{})}),Object(f.jsx)("span",{className:"ms-2",children:"Add To Cart"})]}):Object(f.jsxs)(n.f,{type:"button",color:"info",className:"d-flex justify-content-center align-items-center w-100",onClick:()=>{this.handleAddToWishlist(c)},disabled:s,style:{background:"pink"},children:[s?Object(f.jsx)(n.gb,{size:"sm"}):Object(f.jsx)("span",{className:"d-flex align-items-center login-icon me-2",children:p?Object(f.jsx)(r.k,{}):Object(f.jsx)(r.u,{})}),Object(f.jsx)("span",{className:"ms-2",children:p?"Remove Wishlist":"Add To Wishlist"})]})})]})]})}}t.a=Object(c.b)((e=>({productResponse:e.productResponser,userResponse:e.userResponse,modalVisibleResponse:e.modalVisibleResponse,messageResponse:e.messageResponse,wishlistResponse:e.wishlistResponse})),{setProductModal:l.l,setProductDetailsModal:l.k,editProductModal:l.e,getProduct:p.e,getProductDetails:p.f,deleteWishlist:m.a,saveWishlist:m.c,addToCart:b.a})(Object(j.h)(O))},491:function(e,t,s){"use strict";s.r(t),s.d(t,"PopularProducts",(function(){return l}));var a=s(0),n=s(414),i=s(51),o=s(419),r=s(445),c=(s(431),s(8));class l extends a.Component{constructor(...e){super(...e),this.state={message:"",products:{data:[],totalPages:0}},this.manageProductResponse=(e,t)=>{if(e.productResponser!==this.props.productResponser){let{status:e,action:t,data:s}=this.props.productResponser;200===e&&"GET_POPULAR_PRODUCT"===t&&this.setState({products:s.products})}}}componentDidUpdate(e,t){this.manageProductResponse(e,t)}render(){let{products:e}=this.state;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(n.bb,{className:" pt-2 pb-2 mb-4",children:[Object(c.jsx)("h4",{children:"Popular Product"}),e.data.slice(0,8).map(((e,t)=>Object(c.jsx)(n.q,{xs:"6",sm:"6",md:"4",lg:"3",children:Object(c.jsx)(r.a,{product:e,fileImage:e.product.fileImages,iconModal:"eye",imageLink:!0})},t)))]})})}}t.default=Object(i.b)((e=>({productResponser:e.productResponser,messageResponse:e.messageResponse})),{getDiscoverProducts:o.b})(l)}}]);
//# sourceMappingURL=29.20af6978.chunk.js.map