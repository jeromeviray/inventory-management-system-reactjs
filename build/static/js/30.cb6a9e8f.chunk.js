(this["webpackJsonp@project/inventory-management-system"]=this["webpackJsonp@project/inventory-management-system"]||[]).push([[30,31],{415:function(e,t,s){"use strict";s.d(t,"l",(function(){return n})),s.d(t,"k",(function(){return o})),s.d(t,"e",(function(){return i})),s.d(t,"h",(function(){return r})),s.d(t,"g",(function(){return l})),s.d(t,"o",(function(){return c})),s.d(t,"b",(function(){return d})),s.d(t,"c",(function(){return u})),s.d(t,"a",(function(){return p})),s.d(t,"d",(function(){return h})),s.d(t,"j",(function(){return m})),s.d(t,"f",(function(){return b})),s.d(t,"p",(function(){return j})),s.d(t,"q",(function(){return f})),s.d(t,"n",(function(){return g})),s.d(t,"m",(function(){return y})),s.d(t,"r",(function(){return O})),s.d(t,"i",(function(){return x}));var a=s(2);const n=(e,t,s)=>async n=>{n({type:a.SET_PRODUCTEDITMODAL_VISIBILIT,payload:{status:200,data:{visible:e,action:t,icon:s}}})},o=(e,t,s)=>async n=>{n({type:a.SET_PRODUCT_DETAILS_MODAL,payload:{status:200,data:{visible:e,action:t,product:s}}})},i=(e,t,s,n)=>async o=>{o({type:a.EDIT_PRODUCT_MODAL,payload:{status:200,data:{visible:e,action:t,product:s,icon:n}}})},r=(e,t,s,n)=>async o=>{o({type:a.ALERT_MODAL,payload:{action:t,module:s,alert:e,data:{id:n}}})},l=(e,t,s,n)=>async o=>{o({type:a.ALERT_BAN_MODAL,payload:{action:t,module:s,alert:e,data:{id:n}}})},c=(e,t,s,n)=>async o=>{o({type:a.UDPATE_STORE_INFORMATION,payload:{status:200,data:{visible:e,action:t,storeInfo:s,icon:n}}})},d=(e,t,s,n)=>async o=>{o({type:a.ADD_BRAND_MODAL,payload:{status:200,data:{visible:e,action:t,brand:s,icon:n}}})},u=(e,t,s,n)=>async o=>{o({type:a.ADD_CATEGORY_MODAL,payload:{status:200,data:{visible:e,action:t,category:s,icon:n}}})},p=(e,t,s,n)=>async o=>{o({type:a.ADD_EMPLOYEE_MODAL,payload:{status:200,data:{visible:e,action:t,employee:s,icon:n}}})},h=(e,t,s,n)=>async o=>{o({type:a.CHANGE_PASSWORD_MODAL,payload:{status:200,data:{visible:e,action:t,employee:s,icon:n}}})},m=(e,t)=>async s=>{s({type:a.LOGIN_MODAL,payload:{data:{visible:e,action:t}}})},b=(e,t,s,n)=>async o=>{o({type:a.SET_ADDRESS_MODAL,payload:{data:{visible:e,action:t,address:s,icon:n}}})},j=(e,t,s,n)=>async o=>{o({type:a.SET_SUPPLIER_MODAL,payload:{action:t,data:{visible:e,icon:n,supplier:s}}})},f=(e,t,s,n)=>async o=>{o({type:a.SET_SUPPLY_MODAL,payload:{action:t,data:{visible:e,icon:n,supply:s}}})},g=(e,t)=>async s=>{s({type:a.SET_SCAN_MODAL,payload:{action:t,data:{visible:e}}})},y=(e,t,s,n)=>async o=>{o({type:a.SET_PROMO_MODAL,payload:{action:t,data:{visible:e,icon:n,promo:s}}})},O=(e,t,s,n)=>async o=>{o({type:a.SET_TERMS_AND_CONDITION_MODAL,payload:{status:200,data:{visible:e,action:t,termsAndCondition:s,icon:n}}})},x=(e,t,s,n)=>async o=>{o({type:a.SET_CAROULSE_MDOAL,payload:{status:200,data:{visible:e,action:t,carousel:s,icon:n}}})}},420:function(e,t,s){"use strict";s.d(t,"a",(function(){return l})),s.d(t,"b",(function(){return c})),s.d(t,"c",(function(){return d}));var a=s(13),n=s(2),o=s(120),i=s(52);var r=new class{addToCart(e){return i.a.post("/cart/item/add/"+e,{},{headers:Object(o.a)()})}getCart(){return i.a.get("/cart",{headers:Object(o.a)()})}removeItem(e){return console.log(e),i.a.delete("/cart/item/remove/"+e,{headers:Object(o.a)()})}};const l=e=>async t=>r.addToCart(e).then((e=>(t({type:n.ADD_TO_CART,payload:{status:200,action:"ADDTOCART",data:{}}}),t({type:a.g,payload:{status:200,data:{message:"Added Successfully"}}}),Promise.resolve())),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),n=e.response&&e.response.data&&e.response.data.code||e.toString();return t({type:a.g,payload:{status:n,data:{message:s}}}),Promise.reject()})),c=()=>async e=>r.getCart().then((t=>(e({type:n.GET_CART_ITEMS,payload:{status:200,action:"CARTITEMS",data:{cart:t.data}}}),Promise.resolve())),(t=>{const s=t.response&&t.response.data&&t.response.data.message||t.message||t.toString(),n=t.response&&t.response.data&&t.response.data.code||t.toString();return e({type:a.g,payload:{status:n,data:{message:s}}}),Promise.reject()})),d=e=>async t=>r.removeItem(e).then((e=>(t({type:n.REMOVE_ITEM,payload:{status:200,action:"REMOVE",data:{}}}),t({type:a.g,payload:{status:200,data:{message:"Remove Item Successfully"}}}),Promise.resolve())),(e=>{console.log(e);const s=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),n=e.response&&e.response.data&&e.response.data.code||e.toString();return t({type:a.g,payload:{status:n,data:{message:s}}}),Promise.reject()}))},421:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var s=[],a=!0,n=!1,o=void 0;try{for(var i,r=e[Symbol.iterator]();!(a=(i=r.next()).done)&&(s.push(i.value),!t||s.length!==t);a=!0);}catch(l){n=!0,o=l}finally{try{!a&&r.return&&r.return()}finally{if(n)throw o}}return s}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=s(0),o=c(n),i=c(s(53)),r=c(s(433)),l=c(s(434));function c(e){return e&&e.__esModule?e:{default:e}}var d={overflow:"hidden",position:"relative"};function u(e,t){return"\n    .react-stars-"+t+":before {\n      position: absolute;\n      overflow: hidden;\n      display: block;\n      z-index: 1;\n      top: 0; left: 0;\n      width: 50%;\n      content: attr(data-forhalf);\n      color: "+e+";\n  }"}function p(e){var t=(0,n.useState)(""),s=a(t,2),i=s[0],c=s[1],p=(0,n.useState)(0),h=a(p,2),m=h[0],b=h[1],j=(0,n.useState)([]),f=a(j,2),g=f[0],y=f[1],O=(0,n.useState)(!1),x=a(O,2),v=x[0],S=x[1],N=(0,r.default)(e),T=a(N,2),D=T[0],I=T[1],w=(0,n.useState)(0),A=a(w,2),C=A[0],M=A[1],_=(0,n.useState)(!1),R=a(_,2),L=R[0],E=R[1],P=(0,n.useState)(""),k=a(P,2),z=k[0],F=k[1];function H(e){"undefined"===typeof e&&(e=D.isHalf?Math.floor(m):Math.round(m));for(var t=[],s=0;s<D.count;s++)t.push({active:s<=e-1});return t}function W(e){if(D.edit){var t=Number(e.currentTarget.getAttribute("data-index"));if(D.isHalf){var s=U(e);E(s),s&&(t+=1),M(t)}else t+=1;!function(e){var t=g.filter((function(e){return e.active}));e!==t.length&&y(H(e))}(t)}}function U(e){var t=e.target.getBoundingClientRect(),s=e.clientX-t.left;return(s=Math.round(Math.abs(s)))>t.width/2}function V(){D.edit&&(G(m),y(H()))}function G(e){D.isHalf&&(E(function(e){return e%1===0}(e)),M(Math.floor(e)))}function q(e){if(D.edit){var t=Number(e.currentTarget.getAttribute("data-index")),s=void 0;if(D.isHalf){var a=U(e);E(a),a&&(t+=1),s=a?t:t+.5,M(t)}else s=t+=1;B(s)}}function B(t){t!==m&&(y(H(t)),b(t),e.onChange(t))}return(0,n.useEffect)((function(){var t,s;!function(){var t="react-stars";F(e.classNames+" "+t)}(),t=e.value,s=e.count,b(t<0||t>s?0:t),y(H(e.value)),I(e),c((Math.random()+"").replace(".","")),S(function(e){return!e.isHalf&&e.emptyIcon&&e.filledIcon||e.isHalf&&e.emptyIcon&&e.halfIcon&&e.filledIcon}(e)),M(Math.floor(e.value)),E(e.isHalf&&e.value%1<.5)}),[]),o.default.createElement("div",{className:"react-stars-wrapper-"+i,style:{display:"flex"}},o.default.createElement("div",{tabIndex:D.a11y&&D.edit?0:null,"aria-label":"add rating by typing an integer from 0 to 5 or pressing arrow keys",onKeyDown:function(e){if(D.a11y||D.edit){var t=e.key,s=m,a=Number(t);a?Number.isInteger(a)&&a>0&&a<=D.count&&(s=a):("ArrowUp"===t||"ArrowRight"===t)&&s<D.count?(e.preventDefault(),s+=D.isHalf?.5:1):("ArrowDown"===t||"ArrowLeft"===t)&&s>.5&&(e.preventDefault(),s-=D.isHalf?.5:1),G(s),B(s)}},className:z,style:d},D.isHalf&&function(){return o.default.createElement("style",{dangerouslySetInnerHTML:{__html:v?(e=D.activeColor,"\n          span.react-stars-half > * {\n          color: "+e+";\n      }"):u(D.activeColor,i)}});var e}(),g.map((function(e,t){return o.default.createElement(l.default,{key:t,index:t,active:e.active,config:D,onMouseOver:W,onMouseLeave:V,onClick:q,halfStarHidden:L,halfStarAt:C,isUsingIcons:v,uniqueness:i})})),o.default.createElement("p",{style:{position:"absolute",left:"-200rem"},role:"status"},m)))}p.propTypes={classNames:i.default.string,edit:i.default.bool,half:i.default.bool,value:i.default.number,count:i.default.number,char:i.default.string,size:i.default.number,color:i.default.string,activeColor:i.default.string,emptyIcon:i.default.element,halfIcon:i.default.element,filledIcon:i.default.element,a11y:i.default.bool},p.defaultProps={edit:!0,half:!1,value:0,count:5,char:"\u2605",size:15,color:"gray",activeColor:"#ffd700",a11y:!0,onChange:function(){}},t.default=p},424:function(e,t,s){"use strict";var a=s(0),n=s(414),o=s(51),i=s(415),r=s(124),l=s(416),c=s(441),d=s(122),u=s(430),p=s(25),h=s(8);class m extends a.Component{constructor(...e){super(...e),this.state={visible:!1,username:"",password:"",type:"password",loading:!1},this.manageModalVisible=(e,t)=>{if(e.modalVisibleResponse!==this.props.modalVisibleResponse){let{action:e,visible:t}=this.props.modalVisibleResponse;("LOGIN"===e||"loginclose"===e)&&this.setState({visible:t})}},this.handleOnChange=e=>{let t=e.target.name;this.setState({[t]:e.target.value})},this.handleShowPassword=e=>{const{type:t}=this.state;e.preventDefault(),this.setState({type:"password"===t?"text":"password"})},this.handleOnSubmit=e=>{const{username:t,password:s}=this.state;e.preventDefault(),this.setState({loading:!0}),0!==t.length&&0!==s.length?this.props.authenticateUser(t,s).then((()=>{let{roles:e}=this.props.userResponse.credentials;e.roleName===d.a.SUPER_ADMIN||e.roleName===d.a.ADMIN?(this.props.setLoginModal(!1,"loginclose"),setInterval((()=>{u.a.push(p.a.api.private.prefixFrontendUrl+"/app/dashboard"),window.location.reload()}),1e3)):this.props.setLoginModal(!1,"loginclose")})).catch((()=>{this.setState({loading:!1})})):this.setState({loading:!1})}}componentDidUpdate(e,t){this.manageModalVisible(e,t)}render(){let{visible:e,username:t,password:s,type:a,loading:o}=this.state;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(n.P,{alignment:"center",visible:e,children:[Object(h.jsx)(n.S,{onDismiss:()=>this.props.setLoginModal(!1,"loginclose"),children:Object(h.jsx)(n.T,{children:"Login"})}),Object(h.jsx)(n.Q,{children:Object(h.jsx)(n.s,{children:Object(h.jsx)(n.B,{id:"loginForm",onSubmit:this.handleOnSubmit,children:Object(h.jsxs)(n.bb,{children:[Object(h.jsx)(n.N,{className:"d-flex justify-content-center",children:Object(h.jsx)(n.q,{children:Object(h.jsxs)(n.F,{className:"mb-3 text-dark ",children:[Object(h.jsx)(n.D,{name:"username",type:"text",autoCorrect:"false",id:"floatingInput",placeholder:"username",onChange:this.handleOnChange,value:t,required:!0,className:"rounded-pill  ps-4 pe-4"}),Object(h.jsxs)(n.G,{htmlFor:"floatingInput ",className:"ps-4 pe-4",children:[Object(h.jsx)(l.C,{size:18}),Object(h.jsx)("span",{className:"ps-2",children:"Username"})]}),Object(h.jsx)(n.E,{invalid:!0,children:"Please provide a valid username"})]})})}),Object(h.jsxs)(n.N,{className:"d-flex justify-content-center",children:[Object(h.jsx)(n.q,{children:Object(h.jsxs)(n.F,{className:"text-dark position-relative",children:[Object(h.jsx)(n.D,{name:"password",type:a,id:"floatingPassword",autoCorrect:"false",placeholder:"Password",onChange:this.handleOnChange,value:s,required:!0,className:"rounded-pill ps-4 pe-4"}),Object(h.jsxs)(n.G,{htmlFor:"exampleFormControlTextarea1 ",className:"ps-4 pe-4",children:[Object(h.jsx)(l.n,{size:18}),Object(h.jsx)("span",{className:"ps-2",children:"Password"})]}),Object(h.jsx)("span",{onClick:this.handleShowPassword,className:"position-absolute top-50 end-0 translate-middle-y ps-4 pe-4",children:"password"===a?Object(h.jsx)(l.j,{size:20}):Object(h.jsx)(l.i,{size:20})}),Object(h.jsx)(n.E,{invalid:!0,children:"Please provide a valid password"})]})}),Object(h.jsx)(n.q,{xs:"12",sm:"12",md:"12",lg:"12"})]})]})})})}),Object(h.jsxs)(n.R,{children:[Object(h.jsx)(n.f,{variant:"ghost",color:"dark",onClick:()=>this.props.setLoginModal(!1,"loginclose"),children:"Close"}),Object(h.jsxs)(n.f,{form:"loginForm",type:"submit",color:"info",className:"d-flex justify-content-center align-items-center position-relative overflow-hidden login-btn",disabled:o,children:[o?Object(h.jsx)(n.gb,{size:"sm"}):Object(h.jsx)("span",{className:"d-flex align-items-center login-icon me-2",children:Object(h.jsx)(c.a,{size:20})}),Object(h.jsx)("span",{className:"label-btn ",children:"Login"})]})]})]})})}}t.a=Object(o.b)((e=>({modalVisibleResponse:e.modalVisibleResponse,messageResponse:e.messageResponse,userResponse:e.userResponse})),{setLoginModal:i.j,authenticateUser:r.a})(m)},426:function(e,t,s){"use strict";s.d(t,"b",(function(){return l})),s.d(t,"c",(function(){return c})),s.d(t,"a",(function(){return d}));var a=s(2),n=s(13),o=s(120),i=s(52);var r=new class{getWishlist(e,t,s){return i.a.get("/wishlist",{headers:Object(o.a)(),params:{query:e,page:t,limit:s}})}saveWishlist(e){return i.a.post("/wishlist",e,{headers:Object(o.a)()})}deleteWishlist(e){return i.a.delete("/wishlist/"+e,{headers:Object(o.a)()})}};const l=(e,t,s)=>async o=>r.getWishlist(e,t,s).then((e=>(o({type:a.GET_WISHLIST,payload:{status:200,action:"GET_WISHLIST",data:e.data}}),Promise.resolve())),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),s=e.response&&e.response.data&&e.response.data.code||e.toString();return o({type:n.g,payload:{status:s,data:{message:t}}}),Promise.reject()})),c=e=>async t=>r.saveWishlist(e).then((e=>(t({type:a.ADD_WISHLIST,payload:{status:200,action:"ADD_WISHLIST",data:e.data}}),t({type:n.g,payload:{status:200,data:{message:"Successfully added to wishlist",order:e.data}}}),Promise.resolve())),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),a=e.response&&e.response.data&&e.response.data.code||e.toString();return t({type:n.g,payload:{status:a,data:{message:s}}}),Promise.reject()})),d=e=>async t=>r.deleteWishlist(e).then((e=>(t({type:a.DELETE_WISHLIST,payload:{status:200,action:"DELETE_WISHLIST",data:{order:e.data}}}),t({type:n.g,payload:{status:200,data:{message:"Successfully deleted wishlist"}}}),Promise.resolve())),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),a=e.response&&e.response.data&&e.response.data.code||e.toString();return t({type:n.g,payload:{status:a,data:{message:s}}}),console.log("JKOSLDFJ"),Promise.reject()}))},431:function(e,t,s){"use strict";s.r(t),s.d(t,"ProductDetialsModal",(function(){return h}));var a=s(0),n=s(414),o=s(51),i=s(415),r=s(420),l=s(416),c=s(437),d=s(424),u=s(438),p=s(8);class h extends a.Component{constructor(...e){super(...e),this.state={visible:!1,product:[],loading:!1,message:"",footerDisplay:!1},this.manageModalVisibleResponse=(e,t)=>{if(e.modalVisibleResponse!==this.props.modalVisibleResponse){let{action:e,visible:t,product:s}=this.props.modalVisibleResponse;"PRODUCTDETAILS"===e?this.setState({visible:t,product:s,footerDisplay:!0}):("close"===e||"view"===e)&&this.setState({visible:t,product:s,footerDisplay:!1})}},this.handleAddToCart=e=>{let{product:t}=this.state.product,{isLoggedIn:s,credentials:a}=this.props.userResponse;if(this.setState({loading:!0}),s){let e=a.type+a.accessToken;this.props.addToCart(t.id,e).then((()=>{console.log("success added"),this.setState({loading:!1})}))}else this.setState({loading:!1}),this.props.setLoginModal(!0,"LOGIN")}}componentDidUpdate(e,t){this.manageModalVisibleResponse(e,t)}render(){let{visible:e,product:t,loading:s,toast:a,footerDisplay:o}=this.state;return Object(p.jsx)(p.Fragment,{children:t&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(d.a,{}),Object(p.jsxs)(n.P,{size:"xl",visible:e,scrollable:!0,onDismiss:()=>this.props.setProductDetailsModal(!1,"close",""),children:[Object(p.jsx)(n.S,{onDismiss:()=>this.props.setProductDetailsModal(!1,"close",""),children:Object(p.jsx)(n.T,{children:"Product Details"})}),Object(p.jsxs)(n.Q,{children:[Object(p.jsx)(c.a,{product:t,button:!1}),Object(p.jsxs)("div",{className:" p-2",children:[Object(p.jsx)("h4",{className:"mb-4",children:"Product Description"}),Object(p.jsx)(u.a,{productDescription:t.product&&t.product.productDescription})]})]}),Object(p.jsxs)(n.R,{children:[Object(p.jsxs)("div",{className:o?"d-flex":"d-none",children:[Object(p.jsx)(n.f,{variant:"ghost",color:"dark",className:"d-flex justify-content-center align-items-center",children:Object(p.jsx)("span",{className:"text-black",children:"View Detailed"})}),Object(p.jsxs)(n.f,{type:"button",color:"info",className:"d-flex justify-content-center align-items-center",onClick:this.handleAddToCart,disabled:s,children:[s?Object(p.jsx)(n.gb,{size:"sm"}):Object(p.jsx)("span",{className:"d-flex align-items-center login-icon me-2",children:Object(p.jsx)(l.e,{})}),Object(p.jsx)("span",{className:"ms-2",children:"Add To Cart"})]})]}),Object(p.jsx)(n.f,{className:o?"d-none":"d-block",color:"secondary",variant:"ghost",onClick:()=>this.props.setProductDetailsModal(!1,"close",""),children:"Close"})]})]})]})})}}t.default=Object(o.b)((e=>({modalVisibleResponse:e.modalVisibleResponse,userResponse:e.userResponse,messageResponse:e.messageResponse})),{setProductDetailsModal:i.k,setLoginModal:i.j,addToCart:r.a})(h)},433:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var s=[],a=!0,n=!1,o=void 0;try{for(var i,r=e[Symbol.iterator]();!(a=(i=r.next()).done)&&(s.push(i.value),!t||s.length!==t);a=!0);}catch(l){n=!0,o=l}finally{try{!a&&r.return&&r.return()}finally{if(n)throw o}}return s}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=(0,n.useState)(e.count),s=a(t,2),o=s[0],i=s[1],r=(0,n.useState)(e.size),l=a(r,2),c=l[0],d=l[1],u=(0,n.useState)(e.char),p=a(u,2),h=p[0],m=p[1],b=(0,n.useState)(e.color),j=a(b,2),f=j[0],g=j[1],y=(0,n.useState)(e.activeColor),O=a(y,2),x=O[0],v=O[1],S=(0,n.useState)(e.isHalf),N=a(S,2),T=N[0],D=N[1],I=(0,n.useState)(e.edit),w=a(I,2),A=w[0],C=w[1],M=(0,n.useState)(e.emptyIcon),_=a(M,2),R=_[0],L=_[1],E=(0,n.useState)(e.halfIcon),P=a(E,2),k=P[0],z=P[1],F=(0,n.useState)(e.filledIcon),H=a(F,2),W=H[0],U=H[1],V=(0,n.useState)(e.a11y),G=a(V,2),q=G[0],B=G[1];return[{count:o,size:c,char:h,color:f,activeColor:x,isHalf:T,edit:A,emptyIcon:R,halfIcon:k,filledIcon:W,a11y:q},function(e){i(e.count),d(e.size),m(e.char),g(e.color),v(e.activeColor),D(e.isHalf),C(e.edit),L(e.emptyIcon),z(e.halfIcon),U(e.filledIcon),B(e.a11y)}]};var n=s(0)},434:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e};t.default=function(e){var t=e.index,s=e.active,n=e.config,o=e.onMouseOver,l=e.onMouseLeave,c=e.onClick,d=e.halfStarHidden,u=e.halfStarAt,p=e.isUsingIcons,h=e.uniqueness,m=n.color,b=n.activeColor,j=n.size,f=n.char,g=n.isHalf,y=n.edit,O=n.halfIcon,x=n.emptyIcon,v=n.filledIcon,S="",N=!1;g&&!d&&u===t&&(S=p?"react-stars-half":"react-stars-"+h,N=!0);var T=a({},r,{color:s?b:m,cursor:y?"pointer":"default",fontSize:j+"px"});return i.default.createElement("span",{className:S,style:T,key:t,"data-index":t,"data-forhalf":v?t:f,onMouseOver:o,onMouseMove:o,onMouseLeave:l,onClick:c},p?s?v:!s&&N?O:x:f)};var n,o=s(0),i=(n=o)&&n.__esModule?n:{default:n};var r={position:"relative",overflow:"hidden",cursor:"pointer",display:"block",float:"left"}},437:function(e,t,s){"use strict";var a=s(0),n=s(414),o=s(447),i=s(455),r=s(421),l=s.n(r),c=s(2),d=s(416),u=s(420),p=s(51),h=s(415),m=s(424),b=s(25),j=s(426),f=s(8);class g extends a.Component{constructor(e){super(e),this.handleAddToCart=e=>{let{product:t}=this.state.product,{isLoggedIn:s,credentials:a}=this.props.userResponse;if(this.setState({loading:!0}),s){let e=a.type+a.accessToken;this.props.addToCart(t.id,e).then((()=>{this.setState({loading:!1})})).catch((()=>{let{status:e,action:t}=this.props.messageResponse;this.setState({loading:!1})}))}else this.setState({loading:!1}),this.props.setLoginModal(!0,"LOGIN")},this.manageStatus=e=>{switch(e){case"OK":return Object(f.jsx)(n.c,{color:"success",shape:"rounded-pill",children:e});case"LOW":return Object(f.jsx)(n.c,{color:"warning",shape:"rounded-pill",children:e});case"OUT_OF_STOCK":return Object(f.jsx)(n.c,{color:"danger",shape:"rounded-pill",children:"OUT OF STOCK"});default:return Object(f.jsx)(n.c,{color:"danger",shape:"rounded-pill",children:e})}},this.state={product:this.props.product,loading:!1,button:this.props.button}}handleAddToWishlist(e){let{product:t}=this.state,{isLoggedIn:s,credentials:a}=this.props.userResponse;if(this.setState({loading:!0}),!s)return this.setState({loading:!1}),void this.props.setLoginModal(!0,"LOGIN");const n=t.wishlist;n&&n.id>0?this.props.deleteWishlist(n.id).then((()=>{t.wishlist=null,this.setState({product:t,loading:!1})})):this.props.saveWishlist({id:e}).then((()=>{t.wishlist=this.props.wishlistResponse.data,this.setState({product:t,loading:!1})}))}render(){const{product:e,inventory:t,wishlist:s,promo:a}=this.state.product,{loading:r,toast:u,button:p}=this.state,h=a&&a.status,j=a&&a.percentage;let g=e.productPrice*j/100,y=e.productPrice-g;const O={position:"absolute",zIndex:"2",top:"calc(4% - 16px)",height:"100%",cursor:"pointer",border:"none"},x={fontSize:"14px",fontWeight:"500"},v=e.rating?e.rating:0;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(m.a,{}),Object(f.jsxs)(n.bb,{children:[Object(f.jsx)(n.q,{sm:"12",md:"5",lg:"5",children:Object(f.jsx)(i.Carousel,{showArrows:!0,infiniteLoop:!0,renderArrowPrev:(e,t,s)=>t&&Object(f.jsx)("button",{type:"button",onClick:e,title:s,className:"arrow-style",style:{...O,left:0},children:Object(f.jsx)(o.a,{size:"40",style:{color:"white"}})}),renderArrowNext:(e,t,s)=>t&&Object(f.jsx)("button",{type:"button",onClick:e,title:s,className:"arrow-style",style:{...O,right:0},children:Object(f.jsx)(o.b,{size:"40",style:{color:"white"}})}),children:e.fileImages.length>0?e.fileImages.map(((e,t)=>Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:b.a.api.private.baseUrl+"/api/v1/products/getImages/bytesArrays/"+e.path+e.fileName})},t))):Object(f.jsx)("img",{src:c.NO_IMAGE_BASE64})})}),Object(f.jsx)(n.q,{sm:"12",md:"7",lg:"7",children:Object(f.jsxs)(n.i,{className:"border-0 p-3",children:[Object(f.jsx)(n.o,{children:e.productName}),Object(f.jsxs)(n.j,{className:" ps-0",children:[Object(f.jsx)("div",{className:"d-flex justify-content-start align-items-center",children:v?Object(f.jsx)(l.a,{count:5,value:v||0,size:24,edit:!1}):Object(f.jsx)("div",{style:{padding:"5px 0px"},children:Object(f.jsx)("span",{className:"text-black-50 ",children:"No Rating"})})}),e.sku&&Object(f.jsxs)("div",{className:"mt-2 mb-2",style:{...x},children:[Object(f.jsx)("span",{className:"text-black-50 me-3 ",children:"SKU"}),Object(f.jsx)("span",{className:"text-black-50 me-3 ",children:"112354879"})]}),Object(f.jsxs)("div",{className:"mt-2 mb-2",style:{...x},children:[Object(f.jsx)("span",{className:"me-3 text-black-50",children:"Brand"}),Object(f.jsx)("span",{className:"me-3",children:e.brand?e.brand.brand:"No Brand"})]}),Object(f.jsx)("div",{className:"mt-3 mb-3  d-flex align-items-center justify-content-between",children:Object(f.jsxs)("h5",{className:"peso-price",children:["\u20b1",h?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("span",{className:"text-muted text-decoration-line-through me-2",style:{fontSize:"16px"},children:e.productPrice.toFixed(2)}),Object(f.jsx)("span",{children:y.toFixed(2)}),Object(f.jsx)("span",{className:"text-muted ms-3",style:{fontSize:"16px"},children:j+"%"})]}):e.productPrice.toFixed(2)]})}),Object(f.jsxs)("div",{className:"product-stock-container",children:[Object(f.jsx)("span",{className:"stock-label",children:"Stock: "}),a?Object(f.jsx)("span",{className:"stock-label-value",children:a.quantity}):t.totalStock>0?Object(f.jsx)("span",{className:"stock-label-value",children:t.totalStock}):this.manageStatus(t.status)]}),Object(f.jsx)("hr",{})]}),p?Object(f.jsx)(n.k,{className:"bg-transparent",children:Object(f.jsx)("div",{className:"d-flex justify-content-end ",children:h||"OUT_OF_STOCK"!=t.status?Object(f.jsxs)(n.f,{type:"button",color:"info",className:"d-flex justify-content-center align-items-center w-100",onClick:this.handleAddToCart,disabled:r,children:[r?Object(f.jsx)(n.gb,{size:"sm"}):Object(f.jsx)("span",{className:"d-flex align-items-center login-icon me-2",children:Object(f.jsx)(d.e,{})}),Object(f.jsx)("span",{className:"ms-2",children:"Add To Cart"})]}):Object(f.jsxs)(n.f,{type:"button",color:"info",className:"d-flex justify-content-center align-items-center w-100",onClick:()=>{this.handleAddToWishlist(e.id)},disabled:r,style:{background:"pink"},children:[r?Object(f.jsx)(n.gb,{size:"sm"}):Object(f.jsx)("span",{className:"d-flex align-items-center login-icon me-2",children:Object(f.jsx)(d.k,{})}),Object(f.jsx)("span",{className:"ms-2",children:s?"Remove Wishlist":"Add To Wishlist"})]})})}):Object(f.jsx)(f.Fragment,{})]})})]})]})}}t.a=Object(p.b)((e=>({modalVisibleResponse:e.modalVisibleResponse,userResponse:e.userResponse,wishlistResponse:e.wishlistResponse})),{setLoginModal:h.j,addToCart:u.a,saveWishlist:j.c,deleteWishlist:j.a})(g)},438:function(e,t,s){"use strict";var a=s(0),n=s(448),o=s(459),i=s.n(o),r=s(460),l=s.n(r),c=s(8);class d extends a.Component{constructor(...e){super(...e),this.state={description:this.props.productDescription},this.createMarkup=e=>({__html:i.a.sanitize(e)})}render(){let{description:e}=this.state,t=e&&JSON.parse(e);if(t){let e=Object(n.convertFromRaw)(t);const s=n.EditorState.createWithContent(e),a=l()(Object(n.convertToRaw)(s.getCurrentContent()));return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"preview ps-4",dangerouslySetInnerHTML:this.createMarkup(a)})})}return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"preview ps-4"})})}}t.a=d}}]);
//# sourceMappingURL=30.cb6a9e8f.chunk.js.map