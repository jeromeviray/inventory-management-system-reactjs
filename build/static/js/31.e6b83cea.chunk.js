(this["webpackJsonp@project/inventory-management-system"]=this["webpackJsonp@project/inventory-management-system"]||[]).push([[31],{420:function(e,t,s){"use strict";s.d(t,"a",(function(){return l})),s.d(t,"b",(function(){return c})),s.d(t,"c",(function(){return d}));var a=s(13),n=s(2),r=s(120),o=s(52);var i=new class{addToCart(e){return o.a.post("/cart/item/add/"+e,{},{headers:Object(r.a)()})}getCart(){return o.a.get("/cart",{headers:Object(r.a)()})}removeItem(e){return console.log(e),o.a.delete("/cart/item/remove/"+e,{headers:Object(r.a)()})}};const l=e=>async t=>i.addToCart(e).then((e=>(t({type:n.ADD_TO_CART,payload:{status:200,action:"ADDTOCART",data:{}}}),t({type:a.g,payload:{status:200,data:{message:"Added Successfully"}}}),Promise.resolve())),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),n=e.response&&e.response.data&&e.response.data.code||e.toString();return t({type:a.g,payload:{status:n,data:{message:s}}}),Promise.reject()})),c=()=>async e=>i.getCart().then((t=>(e({type:n.GET_CART_ITEMS,payload:{status:200,action:"CARTITEMS",data:{cart:t.data}}}),Promise.resolve())),(t=>{const s=t.response&&t.response.data&&t.response.data.message||t.message||t.toString(),n=t.response&&t.response.data&&t.response.data.code||t.toString();return e({type:a.g,payload:{status:n,data:{message:s}}}),Promise.reject()})),d=e=>async t=>i.removeItem(e).then((e=>(t({type:n.REMOVE_ITEM,payload:{status:200,action:"REMOVE",data:{}}}),t({type:a.g,payload:{status:200,data:{message:"Remove Item Successfully"}}}),Promise.resolve())),(e=>{console.log(e);const s=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),n=e.response&&e.response.data&&e.response.data.code||e.toString();return t({type:a.g,payload:{status:n,data:{message:s}}}),Promise.reject()}))},421:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var s=[],a=!0,n=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(s.push(o.value),!t||s.length!==t);a=!0);}catch(l){n=!0,r=l}finally{try{!a&&i.return&&i.return()}finally{if(n)throw r}}return s}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=s(0),r=c(n),o=c(s(53)),i=c(s(433)),l=c(s(434));function c(e){return e&&e.__esModule?e:{default:e}}var d={overflow:"hidden",position:"relative"};function p(e,t){return"\n    .react-stars-"+t+":before {\n      position: absolute;\n      overflow: hidden;\n      display: block;\n      z-index: 1;\n      top: 0; left: 0;\n      width: 50%;\n      content: attr(data-forhalf);\n      color: "+e+";\n  }"}function u(e){var t=(0,n.useState)(""),s=a(t,2),o=s[0],c=s[1],u=(0,n.useState)(0),h=a(u,2),j=h[0],m=h[1],b=(0,n.useState)([]),f=a(b,2),g=f[0],x=f[1],O=(0,n.useState)(!1),v=a(O,2),y=v[0],S=v[1],N=(0,i.default)(e),w=a(N,2),I=w[0],C=w[1],T=(0,n.useState)(0),M=a(T,2),R=M[0],k=M[1],D=(0,n.useState)(!1),P=a(D,2),A=P[0],L=P[1],E=(0,n.useState)(""),_=a(E,2),z=_[0],F=_[1];function H(e){"undefined"===typeof e&&(e=I.isHalf?Math.floor(j):Math.round(j));for(var t=[],s=0;s<I.count;s++)t.push({active:s<=e-1});return t}function W(e){if(I.edit){var t=Number(e.currentTarget.getAttribute("data-index"));if(I.isHalf){var s=V(e);L(s),s&&(t+=1),k(t)}else t+=1;!function(e){var t=g.filter((function(e){return e.active}));e!==t.length&&x(H(e))}(t)}}function V(e){var t=e.target.getBoundingClientRect(),s=e.clientX-t.left;return(s=Math.round(Math.abs(s)))>t.width/2}function U(){I.edit&&(q(j),x(H()))}function q(e){I.isHalf&&(L(function(e){return e%1===0}(e)),k(Math.floor(e)))}function G(e){if(I.edit){var t=Number(e.currentTarget.getAttribute("data-index")),s=void 0;if(I.isHalf){var a=V(e);L(a),a&&(t+=1),s=a?t:t+.5,k(t)}else s=t+=1;K(s)}}function K(t){t!==j&&(x(H(t)),m(t),e.onChange(t))}return(0,n.useEffect)((function(){var t,s;!function(){var t="react-stars";F(e.classNames+" "+t)}(),t=e.value,s=e.count,m(t<0||t>s?0:t),x(H(e.value)),C(e),c((Math.random()+"").replace(".","")),S(function(e){return!e.isHalf&&e.emptyIcon&&e.filledIcon||e.isHalf&&e.emptyIcon&&e.halfIcon&&e.filledIcon}(e)),k(Math.floor(e.value)),L(e.isHalf&&e.value%1<.5)}),[]),r.default.createElement("div",{className:"react-stars-wrapper-"+o,style:{display:"flex"}},r.default.createElement("div",{tabIndex:I.a11y&&I.edit?0:null,"aria-label":"add rating by typing an integer from 0 to 5 or pressing arrow keys",onKeyDown:function(e){if(I.a11y||I.edit){var t=e.key,s=j,a=Number(t);a?Number.isInteger(a)&&a>0&&a<=I.count&&(s=a):("ArrowUp"===t||"ArrowRight"===t)&&s<I.count?(e.preventDefault(),s+=I.isHalf?.5:1):("ArrowDown"===t||"ArrowLeft"===t)&&s>.5&&(e.preventDefault(),s-=I.isHalf?.5:1),q(s),K(s)}},className:z,style:d},I.isHalf&&function(){return r.default.createElement("style",{dangerouslySetInnerHTML:{__html:y?(e=I.activeColor,"\n          span.react-stars-half > * {\n          color: "+e+";\n      }"):p(I.activeColor,o)}});var e}(),g.map((function(e,t){return r.default.createElement(l.default,{key:t,index:t,active:e.active,config:I,onMouseOver:W,onMouseLeave:U,onClick:G,halfStarHidden:A,halfStarAt:R,isUsingIcons:y,uniqueness:o})})),r.default.createElement("p",{style:{position:"absolute",left:"-200rem"},role:"status"},j)))}u.propTypes={classNames:o.default.string,edit:o.default.bool,half:o.default.bool,value:o.default.number,count:o.default.number,char:o.default.string,size:o.default.number,color:o.default.string,activeColor:o.default.string,emptyIcon:o.default.element,halfIcon:o.default.element,filledIcon:o.default.element,a11y:o.default.bool},u.defaultProps={edit:!0,half:!1,value:0,count:5,char:"\u2605",size:15,color:"gray",activeColor:"#ffd700",a11y:!0,onChange:function(){}},t.default=u},424:function(e,t,s){"use strict";var a=s(0),n=s(414),r=s(51),o=s(415),i=s(124),l=s(416),c=s(441),d=s(122),p=s(430),u=s(25),h=s(8);class j extends a.Component{constructor(...e){super(...e),this.state={visible:!1,username:"",password:"",type:"password",loading:!1},this.manageModalVisible=(e,t)=>{if(e.modalVisibleResponse!==this.props.modalVisibleResponse){let{action:e,visible:t}=this.props.modalVisibleResponse;("LOGIN"===e||"loginclose"===e)&&this.setState({visible:t})}},this.handleOnChange=e=>{let t=e.target.name;this.setState({[t]:e.target.value})},this.handleShowPassword=e=>{const{type:t}=this.state;e.preventDefault(),this.setState({type:"password"===t?"text":"password"})},this.handleOnSubmit=e=>{const{username:t,password:s}=this.state;e.preventDefault(),this.setState({loading:!0}),0!==t.length&&0!==s.length?this.props.authenticateUser(t,s).then((()=>{let{roles:e}=this.props.userResponse.credentials;e.roleName===d.a.SUPER_ADMIN||e.roleName===d.a.ADMIN?(this.props.setLoginModal(!1,"loginclose"),setInterval((()=>{p.a.push(u.a.api.private.prefixFrontendUrl+"/app/dashboard"),window.location.reload()}),1e3)):this.props.setLoginModal(!1,"loginclose")})).catch((()=>{this.setState({loading:!1})})):this.setState({loading:!1})}}componentDidUpdate(e,t){this.manageModalVisible(e,t)}render(){let{visible:e,username:t,password:s,type:a,loading:r}=this.state;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(n.P,{alignment:"center",visible:e,children:[Object(h.jsx)(n.S,{onDismiss:()=>this.props.setLoginModal(!1,"loginclose"),children:Object(h.jsx)(n.T,{children:"Login"})}),Object(h.jsx)(n.Q,{children:Object(h.jsx)(n.s,{children:Object(h.jsx)(n.B,{id:"loginForm",onSubmit:this.handleOnSubmit,children:Object(h.jsxs)(n.bb,{children:[Object(h.jsx)(n.N,{className:"d-flex justify-content-center",children:Object(h.jsx)(n.q,{children:Object(h.jsxs)(n.F,{className:"mb-3 text-dark ",children:[Object(h.jsx)(n.D,{name:"username",type:"text",autoCorrect:"false",id:"floatingInput",placeholder:"username",onChange:this.handleOnChange,value:t,required:!0,className:"rounded-pill  ps-4 pe-4"}),Object(h.jsxs)(n.G,{htmlFor:"floatingInput ",className:"ps-4 pe-4",children:[Object(h.jsx)(l.C,{size:18}),Object(h.jsx)("span",{className:"ps-2",children:"Username"})]}),Object(h.jsx)(n.E,{invalid:!0,children:"Please provide a valid username"})]})})}),Object(h.jsxs)(n.N,{className:"d-flex justify-content-center",children:[Object(h.jsx)(n.q,{children:Object(h.jsxs)(n.F,{className:"text-dark position-relative",children:[Object(h.jsx)(n.D,{name:"password",type:a,id:"floatingPassword",autoCorrect:"false",placeholder:"Password",onChange:this.handleOnChange,value:s,required:!0,className:"rounded-pill ps-4 pe-4"}),Object(h.jsxs)(n.G,{htmlFor:"exampleFormControlTextarea1 ",className:"ps-4 pe-4",children:[Object(h.jsx)(l.n,{size:18}),Object(h.jsx)("span",{className:"ps-2",children:"Password"})]}),Object(h.jsx)("span",{onClick:this.handleShowPassword,className:"position-absolute top-50 end-0 translate-middle-y ps-4 pe-4",children:"password"===a?Object(h.jsx)(l.j,{size:20}):Object(h.jsx)(l.i,{size:20})}),Object(h.jsx)(n.E,{invalid:!0,children:"Please provide a valid password"})]})}),Object(h.jsx)(n.q,{xs:"12",sm:"12",md:"12",lg:"12"})]})]})})})}),Object(h.jsxs)(n.R,{children:[Object(h.jsx)(n.f,{variant:"ghost",color:"dark",onClick:()=>this.props.setLoginModal(!1,"loginclose"),children:"Close"}),Object(h.jsxs)(n.f,{form:"loginForm",type:"submit",color:"info",className:"d-flex justify-content-center align-items-center position-relative overflow-hidden login-btn",disabled:r,children:[r?Object(h.jsx)(n.gb,{size:"sm"}):Object(h.jsx)("span",{className:"d-flex align-items-center login-icon me-2",children:Object(h.jsx)(c.a,{size:20})}),Object(h.jsx)("span",{className:"label-btn ",children:"Login"})]})]})]})})}}t.a=Object(r.b)((e=>({modalVisibleResponse:e.modalVisibleResponse,messageResponse:e.messageResponse,userResponse:e.userResponse})),{setLoginModal:o.j,authenticateUser:i.a})(j)},426:function(e,t,s){"use strict";s.d(t,"b",(function(){return l})),s.d(t,"c",(function(){return c})),s.d(t,"a",(function(){return d}));var a=s(2),n=s(13),r=s(120),o=s(52);var i=new class{getWishlist(e,t,s){return o.a.get("/wishlist",{headers:Object(r.a)(),params:{query:e,page:t,limit:s}})}saveWishlist(e){return o.a.post("/wishlist",e,{headers:Object(r.a)()})}deleteWishlist(e){return o.a.delete("/wishlist/"+e,{headers:Object(r.a)()})}};const l=(e,t,s)=>async r=>i.getWishlist(e,t,s).then((e=>(r({type:a.GET_WISHLIST,payload:{status:200,action:"GET_WISHLIST",data:e.data}}),Promise.resolve())),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),s=e.response&&e.response.data&&e.response.data.code||e.toString();return r({type:n.g,payload:{status:s,data:{message:t}}}),Promise.reject()})),c=e=>async t=>i.saveWishlist(e).then((e=>(t({type:a.ADD_WISHLIST,payload:{status:200,action:"ADD_WISHLIST",data:e.data}}),t({type:n.g,payload:{status:200,data:{message:"Successfully added to wishlist",order:e.data}}}),Promise.resolve())),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),a=e.response&&e.response.data&&e.response.data.code||e.toString();return t({type:n.g,payload:{status:a,data:{message:s}}}),Promise.reject()})),d=e=>async t=>i.deleteWishlist(e).then((e=>(t({type:a.DELETE_WISHLIST,payload:{status:200,action:"DELETE_WISHLIST",data:{order:e.data}}}),t({type:n.g,payload:{status:200,data:{message:"Successfully deleted wishlist"}}}),Promise.resolve())),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),a=e.response&&e.response.data&&e.response.data.code||e.toString();return t({type:n.g,payload:{status:a,data:{message:s}}}),console.log("JKOSLDFJ"),Promise.reject()}))},431:function(e,t,s){"use strict";s.r(t),s.d(t,"ProductDetialsModal",(function(){return h}));var a=s(0),n=s(414),r=s(51),o=s(415),i=s(420),l=s(416),c=s(437),d=s(424),p=s(438),u=s(8);class h extends a.Component{constructor(...e){super(...e),this.state={visible:!1,product:[],loading:!1,message:"",footerDisplay:!1},this.manageModalVisibleResponse=(e,t)=>{if(e.modalVisibleResponse!==this.props.modalVisibleResponse){let{action:e,visible:t,product:s}=this.props.modalVisibleResponse;"PRODUCTDETAILS"===e?this.setState({visible:t,product:s,footerDisplay:!0}):("close"===e||"view"===e)&&this.setState({visible:t,product:s,footerDisplay:!1})}},this.handleAddToCart=e=>{let{product:t}=this.state.product,{isLoggedIn:s,credentials:a}=this.props.userResponse;if(this.setState({loading:!0}),s){let e=a.type+a.accessToken;this.props.addToCart(t.id,e).then((()=>{console.log("success added"),this.setState({loading:!1})}))}else this.setState({loading:!1}),this.props.setLoginModal(!0,"LOGIN")}}componentDidUpdate(e,t){this.manageModalVisibleResponse(e,t)}render(){let{visible:e,product:t,loading:s,toast:a,footerDisplay:r}=this.state;return Object(u.jsx)(u.Fragment,{children:t&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d.a,{}),Object(u.jsxs)(n.P,{size:"xl",visible:e,scrollable:!0,onDismiss:()=>this.props.setProductDetailsModal(!1,"close",""),children:[Object(u.jsx)(n.S,{onDismiss:()=>this.props.setProductDetailsModal(!1,"close",""),children:Object(u.jsx)(n.T,{children:"Product Details"})}),Object(u.jsxs)(n.Q,{children:[Object(u.jsx)(c.a,{product:t,button:!1}),Object(u.jsxs)("div",{className:" p-2",children:[Object(u.jsx)("h4",{className:"mb-4",children:"Product Description"}),Object(u.jsx)(p.a,{productDescription:t.product&&t.product.productDescription})]})]}),Object(u.jsxs)(n.R,{children:[Object(u.jsxs)("div",{className:r?"d-flex":"d-none",children:[Object(u.jsx)(n.f,{variant:"ghost",color:"dark",className:"d-flex justify-content-center align-items-center",children:Object(u.jsx)("span",{className:"text-black",children:"View Detailed"})}),Object(u.jsxs)(n.f,{type:"button",color:"info",className:"d-flex justify-content-center align-items-center",onClick:this.handleAddToCart,disabled:s,children:[s?Object(u.jsx)(n.gb,{size:"sm"}):Object(u.jsx)("span",{className:"d-flex align-items-center login-icon me-2",children:Object(u.jsx)(l.e,{})}),Object(u.jsx)("span",{className:"ms-2",children:"Add To Cart"})]})]}),Object(u.jsx)(n.f,{className:r?"d-none":"d-block",color:"secondary",variant:"ghost",onClick:()=>this.props.setProductDetailsModal(!1,"close",""),children:"Close"})]})]})]})})}}t.default=Object(r.b)((e=>({modalVisibleResponse:e.modalVisibleResponse,userResponse:e.userResponse,messageResponse:e.messageResponse})),{setProductDetailsModal:o.k,setLoginModal:o.j,addToCart:i.a})(h)},433:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var s=[],a=!0,n=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(s.push(o.value),!t||s.length!==t);a=!0);}catch(l){n=!0,r=l}finally{try{!a&&i.return&&i.return()}finally{if(n)throw r}}return s}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=(0,n.useState)(e.count),s=a(t,2),r=s[0],o=s[1],i=(0,n.useState)(e.size),l=a(i,2),c=l[0],d=l[1],p=(0,n.useState)(e.char),u=a(p,2),h=u[0],j=u[1],m=(0,n.useState)(e.color),b=a(m,2),f=b[0],g=b[1],x=(0,n.useState)(e.activeColor),O=a(x,2),v=O[0],y=O[1],S=(0,n.useState)(e.isHalf),N=a(S,2),w=N[0],I=N[1],C=(0,n.useState)(e.edit),T=a(C,2),M=T[0],R=T[1],k=(0,n.useState)(e.emptyIcon),D=a(k,2),P=D[0],A=D[1],L=(0,n.useState)(e.halfIcon),E=a(L,2),_=E[0],z=E[1],F=(0,n.useState)(e.filledIcon),H=a(F,2),W=H[0],V=H[1],U=(0,n.useState)(e.a11y),q=a(U,2),G=q[0],K=q[1];return[{count:r,size:c,char:h,color:f,activeColor:v,isHalf:w,edit:M,emptyIcon:P,halfIcon:_,filledIcon:W,a11y:G},function(e){o(e.count),d(e.size),j(e.char),g(e.color),y(e.activeColor),I(e.isHalf),R(e.edit),A(e.emptyIcon),z(e.halfIcon),V(e.filledIcon),K(e.a11y)}]};var n=s(0)},434:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e};t.default=function(e){var t=e.index,s=e.active,n=e.config,r=e.onMouseOver,l=e.onMouseLeave,c=e.onClick,d=e.halfStarHidden,p=e.halfStarAt,u=e.isUsingIcons,h=e.uniqueness,j=n.color,m=n.activeColor,b=n.size,f=n.char,g=n.isHalf,x=n.edit,O=n.halfIcon,v=n.emptyIcon,y=n.filledIcon,S="",N=!1;g&&!d&&p===t&&(S=u?"react-stars-half":"react-stars-"+h,N=!0);var w=a({},i,{color:s?m:j,cursor:x?"pointer":"default",fontSize:b+"px"});return o.default.createElement("span",{className:S,style:w,key:t,"data-index":t,"data-forhalf":y?t:f,onMouseOver:r,onMouseMove:r,onMouseLeave:l,onClick:c},u?s?y:!s&&N?O:v:f)};var n,r=s(0),o=(n=r)&&n.__esModule?n:{default:n};var i={position:"relative",overflow:"hidden",cursor:"pointer",display:"block",float:"left"}},437:function(e,t,s){"use strict";var a=s(0),n=s(414),r=s(447),o=s(455),i=s(421),l=s.n(i),c=s(2),d=s(416),p=s(420),u=s(51),h=s(415),j=s(424),m=s(25),b=s(426),f=s(8);class g extends a.Component{constructor(e){super(e),this.handleAddToCart=e=>{let{product:t}=this.state.product,{isLoggedIn:s,credentials:a}=this.props.userResponse;if(this.setState({loading:!0}),s){let e=a.type+a.accessToken;this.props.addToCart(t.id,e).then((()=>{this.setState({loading:!1})})).catch((()=>{let{status:e,action:t}=this.props.messageResponse;this.setState({loading:!1})}))}else this.setState({loading:!1}),this.props.setLoginModal(!0,"LOGIN")},this.manageStatus=e=>{switch(e){case"OK":return Object(f.jsx)(n.c,{color:"success",shape:"rounded-pill",children:e});case"LOW":return Object(f.jsx)(n.c,{color:"warning",shape:"rounded-pill",children:e});case"OUT_OF_STOCK":return Object(f.jsx)(n.c,{color:"danger",shape:"rounded-pill",children:"OUT OF STOCK"});default:return Object(f.jsx)(n.c,{color:"danger",shape:"rounded-pill",children:e})}},this.state={product:this.props.product,loading:!1,button:this.props.button}}handleAddToWishlist(e){let{product:t}=this.state,{isLoggedIn:s,credentials:a}=this.props.userResponse;if(this.setState({loading:!0}),!s)return this.setState({loading:!1}),void this.props.setLoginModal(!0,"LOGIN");const n=t.wishlist;n&&n.id>0?this.props.deleteWishlist(n.id).then((()=>{t.wishlist=null,this.setState({product:t,loading:!1})})):this.props.saveWishlist({id:e}).then((()=>{t.wishlist=this.props.wishlistResponse.data,this.setState({product:t,loading:!1})}))}render(){const{product:e,inventory:t,wishlist:s,promo:a}=this.state.product,{loading:i,toast:p,button:u}=this.state,h=a&&a.status,b=a&&a.percentage;let g=e.productPrice*b/100,x=e.productPrice-g;const O={position:"absolute",zIndex:"2",top:"calc(4% - 16px)",height:"100%",cursor:"pointer",border:"none"},v={fontSize:"14px",fontWeight:"500"},y=e.rating?e.rating:0;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(j.a,{}),Object(f.jsxs)(n.bb,{children:[Object(f.jsx)(n.q,{sm:"12",md:"5",lg:"5",children:Object(f.jsx)(o.Carousel,{showArrows:!0,infiniteLoop:!0,renderArrowPrev:(e,t,s)=>t&&Object(f.jsx)("button",{type:"button",onClick:e,title:s,className:"arrow-style",style:{...O,left:0},children:Object(f.jsx)(r.a,{size:"40",style:{color:"white"}})}),renderArrowNext:(e,t,s)=>t&&Object(f.jsx)("button",{type:"button",onClick:e,title:s,className:"arrow-style",style:{...O,right:0},children:Object(f.jsx)(r.b,{size:"40",style:{color:"white"}})}),children:e.fileImages.length>0?e.fileImages.map(((e,t)=>Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:m.a.api.private.baseUrl+"/api/v1/products/getImages/bytesArrays/"+e.path+e.fileName})},t))):Object(f.jsx)("img",{src:c.NO_IMAGE_BASE64})})}),Object(f.jsx)(n.q,{sm:"12",md:"7",lg:"7",children:Object(f.jsxs)(n.i,{className:"border-0 p-3",children:[Object(f.jsx)(n.o,{children:e.productName}),Object(f.jsxs)(n.j,{className:" ps-0",children:[Object(f.jsx)("div",{className:"d-flex justify-content-start align-items-center",children:y?Object(f.jsx)(l.a,{count:5,value:y||0,size:24,edit:!1}):Object(f.jsx)("div",{style:{padding:"5px 0px"},children:Object(f.jsx)("span",{className:"text-black-50 ",children:"No Rating"})})}),e.sku&&Object(f.jsxs)("div",{className:"mt-2 mb-2",style:{...v},children:[Object(f.jsx)("span",{className:"text-black-50 me-3 ",children:"SKU"}),Object(f.jsx)("span",{className:"text-black-50 me-3 ",children:"112354879"})]}),Object(f.jsxs)("div",{className:"mt-2 mb-2",style:{...v},children:[Object(f.jsx)("span",{className:"me-3 text-black-50",children:"Brand"}),Object(f.jsx)("span",{className:"me-3",children:e.brand?e.brand.brand:"No Brand"})]}),Object(f.jsx)("div",{className:"mt-3 mb-3  d-flex align-items-center justify-content-between",children:Object(f.jsxs)("h5",{className:"peso-price",children:["\u20b1",h?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("span",{className:"text-muted text-decoration-line-through me-2",style:{fontSize:"16px"},children:e.productPrice.toFixed(2)}),Object(f.jsx)("span",{children:x.toFixed(2)}),Object(f.jsx)("span",{className:"text-muted ms-3",style:{fontSize:"16px"},children:b+"%"})]}):e.productPrice.toFixed(2)]})}),Object(f.jsxs)("div",{className:"product-stock-container",children:[Object(f.jsx)("span",{className:"stock-label",children:"Stock: "}),a?Object(f.jsx)("span",{className:"stock-label-value",children:a.quantity}):t.totalStock>0?Object(f.jsx)("span",{className:"stock-label-value",children:t.totalStock}):this.manageStatus(t.status)]}),Object(f.jsx)("hr",{})]}),u?Object(f.jsx)(n.k,{className:"bg-transparent",children:Object(f.jsx)("div",{className:"d-flex justify-content-end ",children:h||"OUT_OF_STOCK"!=t.status?Object(f.jsxs)(n.f,{type:"button",color:"info",className:"d-flex justify-content-center align-items-center w-100",onClick:this.handleAddToCart,disabled:i,children:[i?Object(f.jsx)(n.gb,{size:"sm"}):Object(f.jsx)("span",{className:"d-flex align-items-center login-icon me-2",children:Object(f.jsx)(d.e,{})}),Object(f.jsx)("span",{className:"ms-2",children:"Add To Cart"})]}):Object(f.jsxs)(n.f,{type:"button",color:"info",className:"d-flex justify-content-center align-items-center w-100",onClick:()=>{this.handleAddToWishlist(e.id)},disabled:i,style:{background:"pink"},children:[i?Object(f.jsx)(n.gb,{size:"sm"}):Object(f.jsx)("span",{className:"d-flex align-items-center login-icon me-2",children:Object(f.jsx)(d.k,{})}),Object(f.jsx)("span",{className:"ms-2",children:s?"Remove Wishlist":"Add To Wishlist"})]})})}):Object(f.jsx)(f.Fragment,{})]})})]})]})}}t.a=Object(u.b)((e=>({modalVisibleResponse:e.modalVisibleResponse,userResponse:e.userResponse,wishlistResponse:e.wishlistResponse})),{setLoginModal:h.j,addToCart:p.a,saveWishlist:b.c,deleteWishlist:b.a})(g)},438:function(e,t,s){"use strict";var a=s(0),n=s(448),r=s(459),o=s.n(r),i=s(460),l=s.n(i),c=s(8);class d extends a.Component{constructor(...e){super(...e),this.state={description:this.props.productDescription},this.createMarkup=e=>({__html:o.a.sanitize(e)})}render(){let{description:e}=this.state,t=e&&JSON.parse(e);if(t){let e=Object(n.convertFromRaw)(t);const s=n.EditorState.createWithContent(e),a=l()(Object(n.convertToRaw)(s.getCurrentContent()));return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"preview ps-4",dangerouslySetInnerHTML:this.createMarkup(a)})})}return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"preview ps-4"})})}}t.a=d}}]);
//# sourceMappingURL=31.e6b83cea.chunk.js.map