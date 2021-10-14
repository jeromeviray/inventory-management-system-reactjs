(this["webpackJsonp@project/inventory-management-system"]=this["webpackJsonp@project/inventory-management-system"]||[]).push([[54],{572:function(e,t,s){"use strict";s.d(t,"b",(function(){return d})),s.d(t,"a",(function(){return i}));var a=s(21),o=s(2),n=s(88),c=s(415);var r=new class{getTotals(){return n.a.get("/summaries",{headers:Object(c.a)()})}getProductsAndCountTatolSold(e,t,s){return n.a.get("/summaries/products/sold",{headers:Object(c.a)(),params:{query:e,page:t,limit:s}})}};const d=()=>async e=>r.getTotals().then((t=>(e({type:o.GET_TOTALS,payload:{status:200,action:o.GET_TOTALS,data:{summaries:t.data}}}),Promise.resolve())),(t=>{const s=t.response&&t.response.data&&t.response.data.message||t.message||t.toString(),o=t.response&&t.response.data&&t.response.data.code||t.toString();return e({type:a.g,payload:{status:o,data:{message:s}}}),Promise.reject()})),i=(e,t,s)=>async n=>r.getProductsAndCountTatolSold(e,t,s).then((e=>{n({type:o.GET_PRODUCTS_COUNT_TOTAL_SOLD,payload:{status:200,action:o.GET_PRODUCTS_COUNT_TOTAL_SOLD,data:{products:e.data}}})}),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),s=e.response&&e.response.data&&e.response.data.code||e.toString();return n({type:a.g,payload:{status:s,data:{message:t}}}),Promise.reject()}))},590:function(e,t,s){"use strict";s.r(t),s.d(t,"ProductReport",(function(){return m}));var a=s(0),o=s(412),n=s(414),c=s(451),r=s(50),d=s(572),i=s(500),l=s.n(i),h=s(472),p=s.n(h),b=s(427),u=s.n(b),j=s(8);class m extends a.Component{constructor(...e){super(...e),this.state={productsTotalSold:{data:[],totalPages:0},page:0,limit:10,query:""},this.getProductsAndCountTatolSold=(e,t,s)=>{this.props.getProductsAndCountTatolSold(e,t,s)},this.manageDashboardResponse=(e,t)=>{if(e.dashboardResponse!==this.props.dashboardResponse){const{status:e,action:t,data:s}=this.props.dashboardResponse;200===e&&"GET_PRODUCTS_COUNT_TOTAL_SOLD"===t&&this.setState({productsTotalSold:s.products})}},this.handlePageClick=e=>{let t=e.selected;this.setState({page:t});const{limit:s,query:a,status:o}=this.state;this.getProductsAndCountTatolSold(a,t,s)},this.handleSearch=e=>{const{page:t,limit:s,status:a}=this.state;this.getProductsAndCountTatolSold(e.target.value,t,s),this.setState({query:e.target.value})}}componentDidMount(){const{page:e,limit:t,query:s}=this.state;this.getProductsAndCountTatolSold(s,e,t)}componentDidUpdate(e,t){this.manageDashboardResponse(e,t)}render(){const{productsTotalSold:e}=this.state;return console.log(e),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"w-100 d-flex justify-content-end align-items-center",children:[Object(j.jsx)("div",{className:"w-100",children:Object(j.jsx)(o.n,{children:"Total Sold per Product"})}),Object(j.jsx)(o.A,{onSubmit:this.handleOnSubmitSearch,id:"search-form",className:"w-25",children:Object(j.jsxs)(o.M,{children:[Object(j.jsx)(o.C,{type:"text",id:"floatingInput",placeholder:"Search",className:"p-2",value:this.state.query,onChange:this.handleSearch}),Object(j.jsx)(o.f,{form:"search-form",type:"submit",color:"info",variant:"outline",id:"btn-search",className:"",children:Object(j.jsx)(n.v,{})})]})}),Object(j.jsx)("div",{className:"d-flex align-items-end flex-row-reverse m-2",children:Object(j.jsx)(l.a,{trigger:()=>Object(j.jsx)(o.f,{type:"button",variant:"outline",color:"info",className:" pt-2 pb-2 ",children:Object(j.jsx)(c.c,{size:20})}),content:()=>this.componentRef})})]})}),Object(j.jsxs)(o.ib,{striped:!0,hover:!0,className:"shadow-sm ",responsive:!0,bordered:!0,align:"middle",ref:e=>this.componentRef=e,children:[Object(j.jsxs)(o.kb,{children:["List of Products: ",Object(j.jsx)("b",{children:e.totalItems})]}),Object(j.jsx)(o.mb,{color:"dark",children:Object(j.jsxs)(o.ob,{className:"text-center",children:[Object(j.jsx)(o.nb,{scope:"col",children:"Barcode"}),Object(j.jsx)(o.nb,{scope:"col",children:"Name"}),Object(j.jsx)(o.nb,{scope:"col",children:"Price"}),Object(j.jsx)(o.nb,{scope:"col",children:"Products Sold"}),Object(j.jsx)(o.nb,{scope:"col",children:"Order Status"})]})}),Object(j.jsx)(o.jb,{className:"text-center",color:"light",children:e.data.length>0?e.data.map(((e,t)=>Object(j.jsxs)(o.ob,{className:"text-center",children:[Object(j.jsx)(o.lb,{children:Object(j.jsx)(p.a,{value:String(e.barcode),height:50,width:1,fontSize:14,margin:7,background:"#f5f5f548"})}),Object(j.jsx)(o.lb,{children:e.productName}),Object(j.jsxs)(o.lb,{children:["\u20b1",e.productPrice.toFixed(2)]}),Object(j.jsx)(o.lb,{children:e.totalSold}),Object(j.jsx)(o.lb,{children:Object(j.jsx)(o.c,{color:"success",shape:"rounded-pill",children:e.status})})]},t))):Object(j.jsx)(o.ob,{children:Object(j.jsx)(o.lb,{colSpan:"7",children:"No data"})})})]}),Object(j.jsx)(u.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:e.totalPages,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.handlePageClick,containerClassName:"pagination",activeClassName:"active"})]})}}t.default=Object(r.b)((e=>({dashboardResponse:e.dashboardResponse})),{getProductsAndCountTatolSold:d.a})(m)}}]);
//# sourceMappingURL=54.72dc3383.chunk.js.map