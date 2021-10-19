(this["webpackJsonp@project/inventory-management-system"]=this["webpackJsonp@project/inventory-management-system"]||[]).push([[52],{1022:function(e,t,s){"use strict";s.r(t),s.d(t,"CategoryList",(function(){return d}));var a=s(0),r=s(51),o=s(121),n=s(25),i=s(485),c=s(8);class d extends a.Component{constructor(...e){super(...e),this.state={message:"",categoriesList:[]},this.getCategoriesList=()=>{this.props.getCategoriesList()},this.manageCategoriesListResponse=(e,t)=>{if(e.categoryResponse!==this.props.categoryResponse){let{status:e,action:t,data:s}=this.props.categoryResponse;200===e&&"GET_CATEGORIES_LIST"===t&&this.setState({categoriesList:s.categoriesList})}}}componentDidMount(){this.getCategoriesList()}componentDidUpdate(e,t){this.manageCategoriesListResponse(e,t)}render(){let{message:e,categoriesList:t}=this.state;return Object(c.jsxs)(c.Fragment,{children:[e&&Object(c.jsx)("div",{className:"form-group d-flex justify-content-center align-items-center",children:Object(c.jsx)("div",{className:"alert alert-danger",role:"alert",children:e})}),Object(c.jsxs)("div",{className:"overflow-hidden category-wrapper",children:[Object(c.jsx)("div",{className:"category-header",children:Object(c.jsx)("span",{children:"Categories"})}),Object(c.jsx)("div",{className:"list-container",children:Object(c.jsx)("ul",{children:t.length>0?t.map(((e,t)=>Object(c.jsx)("li",{className:"drop-list-item  text-break",children:Object(c.jsx)(o.b,{to:{pathname:n.a.api.private.prefixFrontendUrl+"/products/category/"+e.categoryName,state:e.categoryName},className:"list-item-link",children:e.categoryName})},t))):Object(c.jsx)("li",{className:"drop-list-item",children:Object(c.jsx)("span",{className:"list-item-link ",style:{fontStyle:"italic"},children:"No Category List Available"})})})})]})]})}}t.default=Object(r.b)((e=>({categoryResponse:e.categoryResponse,messageResponse:e.messageResponse})),{getCategoriesList:i.c})(d)},485:function(e,t,s){"use strict";s.d(t,"d",(function(){return c})),s.d(t,"b",(function(){return d})),s.d(t,"c",(function(){return g})),s.d(t,"e",(function(){return p})),s.d(t,"a",(function(){return l}));var a=s(13),r=s(2),o=s(120),n=s(52);var i=new class{saveCategory(e){let t=e;return n.a.post("/categories/save",{name:t},{headers:Object(o.a)()})}updateCategory(e,t){return n.a.put("/categories/update/"+e,{name:t},{headers:Object(o.a)()})}deleteCategory(e){return n.a.delete("/categories/delete/"+e,{headers:Object(o.a)()})}getCategories(e,t,s){return n.a.get("/categories",{headers:Object(o.a)(),params:{query:e,page:t,limit:s}})}getCategory(e){return n.a.get("/categories/id",{headers:Object(o.a)()})}getCategoriesList(){return n.a.get("/categories/list")}};const c=e=>async t=>i.saveCategory(e).then((e=>(t({type:r.SAVE_CATEGORY,payload:{status:200,action:r.SAVE_CATEGORY,data:{}}}),t({type:a.g,payload:{status:200,data:{message:"Successfully Saved"}}}),Promise.resolve())),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.error_message||e.toString(),r=e.response&&e.response.data&&e.response.data.code||e.toString();return t({type:a.g,payload:{status:r,data:{message:s}}}),Promise.reject()})),d=(e,t,s)=>async o=>i.getCategories(e,t,s).then((e=>(o({type:r.GET_CATEGORIES,payload:{status:200,action:r.GET_CATEGORIES,data:{categories:e.data}}}),Promise.resolve())),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.error_message||e.toString(),s=e.response&&e.response.data&&e.response.data.code||e.toString();return o({type:a.g,payload:{status:s,data:{message:t}}}),Promise.reject()})),g=()=>async e=>i.getCategoriesList().then((t=>(e({type:r.GET_CATEGORIES_LIST,payload:{status:200,action:r.GET_CATEGORIES_LIST,data:{categoriesList:t.data}}}),Promise.resolve())),(t=>{const s=t.response&&t.response.data&&t.response.data.message||t.message||t.error_message||t.toString(),r=t.response&&t.response.data&&t.response.data.code||t.toString();return e({type:a.g,payload:{status:r,data:{message:s}}}),Promise.reject()})),p=(e,t)=>async s=>i.updateCategory(e,t).then((e=>(s({type:r.UPDATE_CATEGORY,payload:{status:200,action:r.UPDATE_CATEGORY,data:{updatedCategory:e.data}}}),s({type:a.g,payload:{status:200,data:{message:"Successfully Updated"}}}),Promise.resolve())),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.error_message||e.toString(),r=e.response&&e.response.data&&e.response.data.code||e.toString();return s({type:a.g,payload:{status:r,data:{message:t}}}),Promise.reject()})),l=e=>async t=>i.deleteCategory(e).then((e=>(t({type:r.DELETE_CATEGORY,payload:{status:200,action:r.DELETE_CATEGORY,data:{}}}),t({type:a.g,payload:{status:200,data:{message:"Successfully Deleted."}}}),Promise.resolve())),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.error_message||e.toString(),r=e.response&&e.response.data&&e.response.data.code||e.toString();return t({type:a.g,payload:{status:r,data:{message:s}}}),Promise.reject()}))}}]);
//# sourceMappingURL=52.1c472e64.chunk.js.map