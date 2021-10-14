(this["webpackJsonp@project/inventory-management-system"]=this["webpackJsonp@project/inventory-management-system"]||[]).push([[39],{416:function(e,t,s){"use strict";s.d(t,"i",(function(){return n})),s.d(t,"b",(function(){return d})),s.d(t,"c",(function(){return c})),s.d(t,"d",(function(){return p})),s.d(t,"e",(function(){return u})),s.d(t,"a",(function(){return i})),s.d(t,"k",(function(){return l})),s.d(t,"j",(function(){return g})),s.d(t,"f",(function(){return m})),s.d(t,"g",(function(){return h})),s.d(t,"h",(function(){return j}));var a=s(21),r=s(432),o=s(2);const n=e=>async t=>r.a.saveProduct(e).then((e=>(t({type:o.SAVE_PRODUCT}),t({type:a.g,payload:{status:200,data:{message:"Successfully Saved"}}}),Promise.resolve())),(e=>{console.log(e);const s=e.response&&e.response.data&&e.response.data.message||e.message||e.error_message||e.toString(),r=e.response&&e.response.data&&e.response.data.code||e.toString();return console.log(r),t({type:o.SAVE_FAIL}),t({type:a.g,payload:{status:r,data:{message:s}}}),Promise.reject()})),d=(e,t,s)=>async a=>r.a.getDiscoverProducts(e,t,s).then((e=>(a({type:o.GET_DISCOVER_PRODUCT,payload:{status:200,data:{products:e.data}}}),Promise.resolve())),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.error_message||e.toString(),s=e.response&&e.response.data&&e.response.data.code||e.status||e.toString();return a({type:o.SET_PRODUCT_MESSAGE,payload:{status:s,data:{message:t}}}),Promise.reject()})),c=(e,t)=>async s=>r.a.getImage(e,t).then((e=>(console.log(e),s({type:o.GET_IMAGE,payload:{status:e.status,data:{image:e.data}}}),Promise.resolve())),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.error_message||e.toString(),r=e.response&&e.response.data&&e.response.data.code||e.status||e.toString();return s({type:o.FAIL_GET_IMAGE}),s({type:a.g,payload:{status:r,data:{message:t}}}),Promise.reject()})),p=e=>async t=>r.a.getProduct(e).then((e=>(t({type:o.GET_PRODUCT,payload:{status:200,data:{product:e.data}}}),Promise.resolve())),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.error_message||e.toString(),r=e.response&&e.response.data&&e.response.data.code||e.status||e.toString();return t({type:a.g,payload:{status:r,data:{message:s}}}),Promise.reject()})),u=e=>async t=>r.a.getProductDetails(e).then((e=>(t({type:o.GET_PRODUCT_DETAILS,payload:{status:200,data:{product:e.data}}}),Promise.resolve())),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.error_message||e.toString(),r=e.response&&e.response.data&&e.response.data.code||e.status||e.toString();return t({type:a.g,payload:{status:r,data:{message:s}}}),Promise.reject()})),i=e=>async t=>r.a.deleteProduct(e).then((e=>(t({type:o.DELETE_PRODUCT,payload:{status:200,action:o.DELETE_PRODUCT,data:{}}}),t({type:a.g,payload:{status:200,data:{message:"Successfully Deleted"}}}),Promise.resolve())),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.error_message||e.toString(),r=e.response&&e.response.data&&e.response.data.code||e.status||e.toString();return t({type:a.g,payload:{status:r,data:{message:s}}}),Promise.reject()})),l=(e,t)=>async s=>r.a.updateProduct(e,t).then((e=>(s({type:o.UPDATE_PRODUCT,payload:{status:200,action:o.UPDATE_PRODUCT,data:{updatedProduct:e.data}}}),s({type:a.g,payload:{status:200,data:{message:"Successfully Updated"}}}),Promise.resolve())),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.error_message||e.toString(),r=e.response&&e.response.data&&e.response.data.code||e.status||e.toString();return s({type:a.g,payload:{status:r,data:{message:t}}}),Promise.reject()})),g=(e,t,s)=>async n=>r.a.searchProductByBarcodeOrName(e,t,s).then((e=>(n({type:o.SEARCH_PRODUCT,payload:{status:200,action:o.SEARCH_PRODUCT,data:{products:e.data}}}),Promise.resolve())),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.error_message||e.toString(),s=e.response&&e.response.data&&e.response.data.code||e.status||e.toString();return n({type:a.g,payload:{status:s,data:{message:t}}}),Promise.reject()})),m=(e,t,s,n)=>async d=>r.a.getProductsByCategoryName(e,t,s,n).then((e=>(d({type:o.GET_PRODUCT_BY_CATEGORY_NAME,payload:{status:200,action:o.GET_PRODUCT_BY_CATEGORY_NAME,data:{products:e.data}}}),Promise.resolve())),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.error_message||e.toString(),s=e.response&&e.response.data&&e.response.data.code||e.status||e.toString();return d({type:a.g,payload:{status:s,data:{message:t}}}),Promise.reject()})),h=(e,t,s,n)=>async d=>r.a.getProductsByStatus(e,t,s,n).then((e=>{d({type:o.GET_PRODUCTS_BY_STATUS,payload:{status:200,action:o.GET_PRODUCTS_BY_STATUS,data:{products:e.data}}})}),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.error_message||e.toString(),s=e.response&&e.response.data&&e.response.data.code||e.status||e.toString();return d({type:a.g,payload:{status:s,data:{message:t}}}),Promise.reject()})),j=(e,t,s,n)=>async d=>r.a.getProductsWithPromo(e,t,s,n).then((e=>(d({type:o.GET_PRODUCTS_WITH_PROMO,payload:{status:200,action:o.GET_PRODUCTS_WITH_PROMO,data:{products:e.data}}}),Promise.resolve())),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.error_message||e.toString(),s=e.response&&e.response.data&&e.response.data.code||e.status||e.toString();return d({type:a.g,payload:{status:s,data:{message:t}}}),Promise.reject()}))},432:function(e,t,s){"use strict";var a=s(415),r=s(88);t.a=new class{saveProduct(e){return r.a.post("/products/save",e,{headers:Object(a.a)()})}updateProduct(e,t){return r.a.put("/products/update/"+e,t,{headers:Object(a.a)()})}deleteProduct(e){return r.a.delete("/products/delete/"+e,{headers:Object(a.a)()})}getProducts(e,t,s){return r.a.get("/products",{headers:Object(a.a)(),params:{query:e,page:t,limit:s}})}getImage(e,t){console.log();let s=e||"null/";return r.a.get("/products/getImages/bytesArrays/"+s+t,{responseType:"blob"})}getProduct(e){return r.a.get("/products/"+e,{headers:Object(a.a)()})}getProductDetails(e){return r.a.get("/products/details/"+e,{headers:Object(a.a)()})}getDiscoverProducts(e,t,s){return r.a.get("/products/discover",{params:{query:e,page:t,limit:s}})}searchProductByBarcodeOrName(e,t,s){return r.a.get("/products/search",{params:{query:e,page:t,limit:s}})}getProductsByCategoryName(e,t,s,a){return r.a.get("/products/category/"+e,{params:{query:t,page:s,limit:a}})}getProductsByStatus(e,t,s,o){return r.a.get("/products/status",{headers:Object(a.a)(),params:{status:t,query:e,page:s,limit:o}})}getProductsWithPromo(e,t,s,a){return r.a.get("/products/promo",{params:{status:e,query:t,page:s,limit:a}})}}},572:function(e,t,s){"use strict";s.d(t,"b",(function(){return c})),s.d(t,"a",(function(){return p}));var a=s(21),r=s(2),o=s(88),n=s(415);var d=new class{getTotals(){return o.a.get("/summaries",{headers:Object(n.a)()})}getProductsAndCountTatolSold(e,t,s){return o.a.get("/summaries/products/sold",{headers:Object(n.a)(),params:{query:e,page:t,limit:s}})}};const c=()=>async e=>d.getTotals().then((t=>(e({type:r.GET_TOTALS,payload:{status:200,action:r.GET_TOTALS,data:{summaries:t.data}}}),Promise.resolve())),(t=>{const s=t.response&&t.response.data&&t.response.data.message||t.message||t.toString(),r=t.response&&t.response.data&&t.response.data.code||t.toString();return e({type:a.g,payload:{status:r,data:{message:s}}}),Promise.reject()})),p=(e,t,s)=>async o=>d.getProductsAndCountTatolSold(e,t,s).then((e=>{o({type:r.GET_PRODUCTS_COUNT_TOTAL_SOLD,payload:{status:200,action:r.GET_PRODUCTS_COUNT_TOTAL_SOLD,data:{products:e.data}}})}),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),s=e.response&&e.response.data&&e.response.data.code||e.toString();return o({type:a.g,payload:{status:s,data:{message:t}}}),Promise.reject()}))},586:function(e,t,s){"use strict";s.r(t),s.d(t,"Dashboard",(function(){return m}));var a=s(0),r=s(119),o=s(412),n=s(862),d=s(416),c=s(50),p=s(472),u=s.n(p),i=s(572),l=s(8);const g=Object(a.lazy)((()=>s.e(66).then(s.bind(null,1007))));class m extends a.Component{constructor(...e){super(...e),this.state={products:{data:[],totalPages:0},status:"OUT_OF_STOCK",page:0,limit:10,query:"",productsTotalSold:{data:[],totalPages:0}},this.getProductsAndCountTatolSold=(e,t,s)=>{this.props.getProductsAndCountTatolSold(e,t,s)},this.manageDashboardResponse=(e,t)=>{if(e.dashboardResponse!==this.props.dashboardResponse){const{status:e,action:t,data:s}=this.props.dashboardResponse;console.log(this.props.dashboardResponse),200===e&&"GET_PRODUCTS_COUNT_TOTAL_SOLD"===t&&this.setState({productsTotalSold:s.products})}},this.handleProductPage=e=>{let t=e.selected;this.setState({page:t});const{limit:s,query:a,status:r}=this.state;this.getProducts(a,r,t,s)},this.manageStatus=e=>{switch(e){case"OK":return Object(l.jsx)(o.c,{color:"success",shape:"rounded-pill",children:e});case"LOW":return Object(l.jsx)(o.c,{color:"warning",shape:"rounded-pill",children:e});case"OUT_OF_STOCK":return Object(l.jsx)(o.c,{color:"danger",shape:"rounded-pill",children:"OUT OF STOCK"});default:return Object(l.jsx)(o.c,{color:"danger",shape:"rounded-pill",children:e})}},this.handleStatusOnClick=e=>{this.setState({status:e});const{query:t,page:s,limit:a}=this.state;this.getProducts(s,e,a,t)}}componentDidMount(){const{page:e,status:t,limit:s,query:a}=this.state;this.getProducts(e,t,s,a),this.getProductsAndCountTatolSold(a,e,s)}componentDidUpdate(e,t){this.manageProductResponse(e,t),this.manageDashboardResponse(e,t)}manageProductResponse(e,t){if(e.productResponse!==this.props.productResponse){let{action:e,status:t,data:s}=this.props.productResponse;console.log(this.props.productResponse),200===t&&"GET_PRODUCTS_BY_STATUS"===e&&this.setState({products:s.products})}}getProducts(e,t,s,a){this.props.getProductsByStatus(a,t,e,s)}render(){const{products:e,status:t,productsTotalSold:s}=this.state;let a=[],d=[];return s.data.map(((e,t)=>{a.push(e.totalSold),d.push(e.productName)})),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(g,{}),Object(l.jsxs)(o.i,{className:"mb-4",children:[Object(l.jsx)(o.m,{children:Object(l.jsx)(o.ab,{children:Object(l.jsx)(o.p,{sm:"5",children:Object(l.jsx)("h4",{id:"traffic",className:"card-title mb-0",children:"Top 10 Most Sold Product"})})})}),Object(l.jsx)(o.j,{children:Object(l.jsx)(n.a,{data:{labels:d,datasets:[{label:"Sold Product",backgroundColor:"#f87979",data:a}]},labels:"months"})})]}),Object(l.jsxs)(o.i,{className:"mb-4 bg-transparent border-0",children:[Object(l.jsx)(o.m,{children:Object(l.jsxs)(o.ab,{children:[Object(l.jsx)(o.p,{sm:"5",className:"d-flex align-items-center",children:Object(l.jsx)("h4",{className:"card-title mb-0 ",children:"Products need Action"})}),Object(l.jsx)(o.p,{sm:"7",children:Object(l.jsx)(o.g,{className:"float-end",children:["OUT_OF_STOCK","LOW"].map((e=>Object(l.jsx)(o.f,{color:"LOW"===e?"outline-warning":"outline-danger",className:"mx-0",active:e===t,onClick:()=>this.handleStatusOnClick(e),children:e},e)))})})]})}),Object(l.jsx)(o.j,{className:"p-0 m-0 ",children:Object(l.jsxs)(o.ib,{striped:!0,hover:!0,className:"shadow-sm ",responsive:!0,bordered:!0,align:"middle",children:[Object(l.jsx)(o.kb,{children:Object(l.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(l.jsx)("div",{children:Object(l.jsx)(r.b,{to:{pathname:"/app/products/products",state:t},children:"View More"})}),Object(l.jsxs)("div",{children:["List of Products: ",Object(l.jsx)("b",{children:e.totalItems})]})]})}),Object(l.jsx)(o.mb,{color:"dark",children:Object(l.jsxs)(o.ob,{className:"text-center",children:[Object(l.jsx)(o.nb,{scope:"col",children:"Barcode"}),Object(l.jsx)(o.nb,{scope:"col",children:"Name"}),Object(l.jsx)(o.nb,{scope:"col",children:"Price"}),Object(l.jsx)(o.nb,{scope:"col",children:"Alert Stocks Threshold"}),Object(l.jsx)(o.nb,{scope:"col",children:"Total Stocks"}),Object(l.jsx)(o.nb,{scope:"col",children:"Status"})]})}),Object(l.jsx)(o.jb,{className:"text-center",color:"light",children:e.data&&e.data.length>0?e.data.map(((e,t)=>{const{id:s,barcode:a,productName:r,productPrice:n}=e.product,{threshold:d,status:c,totalStock:p}=e.inventory;return Object(l.jsxs)(o.ob,{className:"text-center",children:[Object(l.jsx)(o.lb,{children:Object(l.jsx)(u.a,{value:String(a),height:50,width:1,fontSize:14,margin:7,background:"#f5f5f548"})}),Object(l.jsx)(o.lb,{children:r}),Object(l.jsxs)(o.lb,{children:["\u20b1",n.toFixed(2)]}),Object(l.jsx)(o.lb,{children:d}),Object(l.jsx)(o.lb,{children:p}),Object(l.jsx)(o.lb,{children:this.manageStatus(c)})]},t)})):Object(l.jsx)(o.ob,{children:Object(l.jsx)(o.lb,{colSpan:"7",children:"No data"})})})]})})]})]})}}t.default=Object(c.b)((e=>({productResponse:e.productResponser,dashboardResponse:e.dashboardResponse})),{getProductsByStatus:d.g,getProductsAndCountTatolSold:i.a})(m)}}]);
//# sourceMappingURL=39.97f1c76c.chunk.js.map