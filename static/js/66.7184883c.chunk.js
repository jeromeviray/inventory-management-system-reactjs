(this["webpackJsonp@project/inventory-management-system"]=this["webpackJsonp@project/inventory-management-system"]||[]).push([[66],{1007:function(s,e,t){"use strict";t.r(e),t.d(e,"WidgetsDropdown",(function(){return d}));var a=t(0),c=t(412),n=t(572),o=t(50),r=t(8);class d extends a.Component{constructor(...s){super(...s),this.state={summaries:{totalProducts:0,totalSold:0,totalCustomers:0}},this.manageDashboardResponse=(s,e)=>{if(s.dashboardResponse!==this.props.dashboardResponse){const{status:s,action:e,data:t}=this.props.dashboardResponse;200===s&&"GET_TOTALS"===e&&this.setState({summaries:t.summaries})}}}componentDidMount(){this.props.getTotals()}componentDidUpdate(s,e){this.manageDashboardResponse(s,e)}render(){const{summaries:s}=this.state;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(c.ab,{children:[Object(r.jsx)(c.p,{sm:"4",lg:"4",children:Object(r.jsxs)("div",{className:"container product",children:[Object(r.jsx)("div",{className:"column-total-value",children:Object(r.jsx)("span",{children:s.totalProducts})}),Object(r.jsx)("div",{className:"column-title",children:Object(r.jsx)("span",{children:"Products"})}),Object(r.jsx)("div",{className:"background-img",style:{backgroundImage:"url(/background/products.png)",zIndex:"1"}})]})}),Object(r.jsx)(c.p,{sm:"4",lg:"4",children:Object(r.jsxs)("div",{className:"container purchase",children:[Object(r.jsx)("div",{className:"column-total-value",children:Object(r.jsx)("span",{children:s.totalSold})}),Object(r.jsx)("div",{className:"column-title",children:Object(r.jsx)("span",{children:"Sold"})}),Object(r.jsx)("div",{className:"background-img",style:{backgroundImage:"url(/background/purchased.png)",zIndex:"1"}})]})}),Object(r.jsx)(c.p,{sm:"4",lg:"4",children:Object(r.jsxs)("div",{className:"container customer",children:[Object(r.jsx)("div",{className:"column-total-value",children:Object(r.jsx)("span",{children:s.totalCustomers})}),Object(r.jsx)("div",{className:"column-title",children:Object(r.jsx)("span",{children:"Customers"})}),Object(r.jsx)("div",{className:"background-img",style:{backgroundImage:"url(/background/group.png)",zIndex:"2"}})]})})]})})}}e.default=Object(o.b)((s=>({dashboardResponse:s.dashboardResponse})),{getTotals:n.b})(d)}}]);
//# sourceMappingURL=66.7184883c.chunk.js.map