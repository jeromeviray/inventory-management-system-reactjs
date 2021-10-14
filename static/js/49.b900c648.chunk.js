(this["webpackJsonp@project/inventory-management-system"]=this["webpackJsonp@project/inventory-management-system"]||[]).push([[49],{416:function(e,s,t){"use strict";t.d(s,"i",(function(){return n})),t.d(s,"b",(function(){return d})),t.d(s,"c",(function(){return c})),t.d(s,"d",(function(){return p})),t.d(s,"e",(function(){return u})),t.d(s,"a",(function(){return i})),t.d(s,"k",(function(){return g})),t.d(s,"j",(function(){return m})),t.d(s,"f",(function(){return l})),t.d(s,"g",(function(){return y})),t.d(s,"h",(function(){return P}));var a=t(21),r=t(432),o=t(2);const n=e=>async s=>r.a.saveProduct(e).then((e=>(s({type:o.SAVE_PRODUCT}),s({type:a.g,payload:{status:200,data:{message:"Successfully Saved"}}}),Promise.resolve())),(e=>{console.log(e);const t=e.response&&e.response.data&&e.response.data.message||e.message||e.error_message||e.toString(),r=e.response&&e.response.data&&e.response.data.code||e.toString();return console.log(r),s({type:o.SAVE_FAIL}),s({type:a.g,payload:{status:r,data:{message:t}}}),Promise.reject()})),d=(e,s,t)=>async a=>r.a.getDiscoverProducts(e,s,t).then((e=>(a({type:o.GET_DISCOVER_PRODUCT,payload:{status:200,data:{products:e.data}}}),Promise.resolve())),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.error_message||e.toString(),t=e.response&&e.response.data&&e.response.data.code||e.status||e.toString();return a({type:o.SET_PRODUCT_MESSAGE,payload:{status:t,data:{message:s}}}),Promise.reject()})),c=(e,s)=>async t=>r.a.getImage(e,s).then((e=>(console.log(e),t({type:o.GET_IMAGE,payload:{status:e.status,data:{image:e.data}}}),Promise.resolve())),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.error_message||e.toString(),r=e.response&&e.response.data&&e.response.data.code||e.status||e.toString();return t({type:o.FAIL_GET_IMAGE}),t({type:a.g,payload:{status:r,data:{message:s}}}),Promise.reject()})),p=e=>async s=>r.a.getProduct(e).then((e=>(s({type:o.GET_PRODUCT,payload:{status:200,data:{product:e.data}}}),Promise.resolve())),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.error_message||e.toString(),r=e.response&&e.response.data&&e.response.data.code||e.status||e.toString();return s({type:a.g,payload:{status:r,data:{message:t}}}),Promise.reject()})),u=e=>async s=>r.a.getProductDetails(e).then((e=>(s({type:o.GET_PRODUCT_DETAILS,payload:{status:200,data:{product:e.data}}}),Promise.resolve())),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.error_message||e.toString(),r=e.response&&e.response.data&&e.response.data.code||e.status||e.toString();return s({type:a.g,payload:{status:r,data:{message:t}}}),Promise.reject()})),i=e=>async s=>r.a.deleteProduct(e).then((e=>(s({type:o.DELETE_PRODUCT,payload:{status:200,action:o.DELETE_PRODUCT,data:{}}}),s({type:a.g,payload:{status:200,data:{message:"Successfully Deleted"}}}),Promise.resolve())),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.error_message||e.toString(),r=e.response&&e.response.data&&e.response.data.code||e.status||e.toString();return s({type:a.g,payload:{status:r,data:{message:t}}}),Promise.reject()})),g=(e,s)=>async t=>r.a.updateProduct(e,s).then((e=>(t({type:o.UPDATE_PRODUCT,payload:{status:200,action:o.UPDATE_PRODUCT,data:{updatedProduct:e.data}}}),t({type:a.g,payload:{status:200,data:{message:"Successfully Updated"}}}),Promise.resolve())),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.error_message||e.toString(),r=e.response&&e.response.data&&e.response.data.code||e.status||e.toString();return t({type:a.g,payload:{status:r,data:{message:s}}}),Promise.reject()})),m=(e,s,t)=>async n=>r.a.searchProductByBarcodeOrName(e,s,t).then((e=>(n({type:o.SEARCH_PRODUCT,payload:{status:200,action:o.SEARCH_PRODUCT,data:{products:e.data}}}),Promise.resolve())),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.error_message||e.toString(),t=e.response&&e.response.data&&e.response.data.code||e.status||e.toString();return n({type:a.g,payload:{status:t,data:{message:s}}}),Promise.reject()})),l=(e,s,t,n)=>async d=>r.a.getProductsByCategoryName(e,s,t,n).then((e=>(d({type:o.GET_PRODUCT_BY_CATEGORY_NAME,payload:{status:200,action:o.GET_PRODUCT_BY_CATEGORY_NAME,data:{products:e.data}}}),Promise.resolve())),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.error_message||e.toString(),t=e.response&&e.response.data&&e.response.data.code||e.status||e.toString();return d({type:a.g,payload:{status:t,data:{message:s}}}),Promise.reject()})),y=(e,s,t,n)=>async d=>r.a.getProductsByStatus(e,s,t,n).then((e=>{d({type:o.GET_PRODUCTS_BY_STATUS,payload:{status:200,action:o.GET_PRODUCTS_BY_STATUS,data:{products:e.data}}})}),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.error_message||e.toString(),t=e.response&&e.response.data&&e.response.data.code||e.status||e.toString();return d({type:a.g,payload:{status:t,data:{message:s}}}),Promise.reject()})),P=(e,s,t,n)=>async d=>r.a.getProductsWithPromo(e,s,t,n).then((e=>(d({type:o.GET_PRODUCTS_WITH_PROMO,payload:{status:200,action:o.GET_PRODUCTS_WITH_PROMO,data:{products:e.data}}}),Promise.resolve())),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.error_message||e.toString(),t=e.response&&e.response.data&&e.response.data.code||e.status||e.toString();return d({type:a.g,payload:{status:t,data:{message:s}}}),Promise.reject()}))},432:function(e,s,t){"use strict";var a=t(415),r=t(88);s.a=new class{saveProduct(e){return r.a.post("/products/save",e,{headers:Object(a.a)()})}updateProduct(e,s){return r.a.put("/products/update/"+e,s,{headers:Object(a.a)()})}deleteProduct(e){return r.a.delete("/products/delete/"+e,{headers:Object(a.a)()})}getProducts(e,s,t){return r.a.get("/products",{headers:Object(a.a)(),params:{query:e,page:s,limit:t}})}getImage(e,s){console.log();let t=e||"null/";return r.a.get("/products/getImages/bytesArrays/"+t+s,{responseType:"blob"})}getProduct(e){return r.a.get("/products/"+e,{headers:Object(a.a)()})}getProductDetails(e){return r.a.get("/products/details/"+e,{headers:Object(a.a)()})}getDiscoverProducts(e,s,t){return r.a.get("/products/discover",{params:{query:e,page:s,limit:t}})}searchProductByBarcodeOrName(e,s,t){return r.a.get("/products/search",{params:{query:e,page:s,limit:t}})}getProductsByCategoryName(e,s,t,a){return r.a.get("/products/category/"+e,{params:{query:s,page:t,limit:a}})}getProductsByStatus(e,s,t,o){return r.a.get("/products/status",{headers:Object(a.a)(),params:{status:s,query:e,page:t,limit:o}})}getProductsWithPromo(e,s,t,a){return r.a.get("/products/promo",{params:{status:e,query:s,page:t,limit:a}})}}},621:function(e,s,t){"use strict";t.r(s),t.d(s,"Home",(function(){return y}));var a=t(0),r=t.n(a),o=t(412),n=t(123),d=t(50),c=t(416),p=t(8);const u=r.a.lazy((()=>Promise.all([t.e(2),t.e(61)]).then(t.bind(null,1020)))),i=r.a.lazy((()=>Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(28)]).then(t.bind(null,483)))),g=r.a.lazy((()=>Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(29)]).then(t.bind(null,488)))),m=r.a.lazy((()=>Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(30)]).then(t.bind(null,429)))),l=r.a.lazy((()=>t.e(50).then(t.bind(null,1014))));class y extends a.Component{constructor(...e){super(...e),this.state={loading:!1,message:"",products:{data:[],totalPages:0},page:0,limit:10,query:""},this.getDiscoverProducts=()=>{let{page:e,limit:s,query:t}=this.state;this.props.getDiscoverProducts(t,e,s).catch((()=>{this.setState({loading:!1})}))},this.getProductsWithPromo=(e,s,t,a)=>{this.props.getProductsWithPromo(e,s,t,a)}}componentDidMount(){const{page:e,limit:s,query:t}=this.state;this.getDiscoverProducts(),this.getProductsWithPromo("ONGOING",t,e,s)}render(){let{message:e}=this.state;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(a.Suspense,{fallback:Object(p.jsx)("div",{className:"d-flex justify-content-center align-items-center  position-fixed ",children:Object(p.jsx)(n.DotLoader,{color:"#36D7B7",size:100})}),children:[Object(p.jsx)(m,{}),Object(p.jsx)(o.r,{children:Object(p.jsxs)(o.ab,{children:[Object(p.jsx)(o.p,{xs:"12",sm:"12",md:"12",lg:"4",children:Object(p.jsx)(l,{})}),Object(p.jsx)(o.p,{xs:"12",sm:"12",md:"12",lg:"8",children:Object(p.jsx)(u,{})})]})}),Object(p.jsxs)(o.r,{className:"mt-4",children:[e&&Object(p.jsx)("div",{className:"form-group d-flex justify-content-center align-items-center",children:Object(p.jsx)("div",{className:"alert alert-danger",role:"alert",children:e})}),Object(p.jsx)(g,{}),Object(p.jsx)(i,{})]})]})})}}s.default=Object(d.b)((e=>({userResponse:e.userResponse,messageResponse:e.messageResponse})),{getDiscoverProducts:c.b,getProductsWithPromo:c.h})(y)}}]);
//# sourceMappingURL=49.b900c648.chunk.js.map