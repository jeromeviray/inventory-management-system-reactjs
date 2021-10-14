(this["webpackJsonp@project/inventory-management-system"]=this["webpackJsonp@project/inventory-management-system"]||[]).push([[73],{617:function(e,t,s){"use strict";s.r(t),s.d(t,"Order",(function(){return h}));var n=s(0),i=s.n(n),r=s(50),o=(s(120),s(412)),c=s(123),a=s(414),l=s(8);const d=i.a.lazy((()=>Promise.all([s.e(40),s.e(38)]).then(s.bind(null,1012))));class h extends n.Component{constructor(e){super(e),this.state={orderStatus:"pending",activeKey:1,totalCounts:{PENDING:0,CONFIRMED:0,SHIPPED:0,COMPLETED:0}},this.manageorderRepsonse=(e,t)=>{if(e.orderResponse!==this.props.orderResponse){let{status:e,action:t,data:s}=this.props.orderResponse;200===e&&"GET_ORDERS"===t&&this.setState({totalCounts:s.orderStatusCount})}},this.totalCountChange=this.totalCountChange.bind(this);let{roles:t}=this.props.userResponse.credentials;this.state.permission=t.roleName?t.roleName:t}componentDidUpdate(e,t){this.manageorderRepsonse(e,t)}totalCountChange(e){this.setState({totalCounts:e})}render(){const{orderStatus:e,activeKey:t,totalCounts:s,permission:i}=this.state;console.log("ROLE",i);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"d-flex justify-content-end mb-2",children:Object(l.jsx)(o.A,{className:"w-50",children:Object(l.jsxs)(o.M,{children:[Object(l.jsx)(o.C,{type:"text",id:"floatingInput",placeholder:"Search",className:"p-2"}),Object(l.jsx)(o.f,{type:"button",color:"info",variant:"outline",id:"button-addon2",className:"",children:Object(l.jsx)(a.v,{})})]})})}),Object(l.jsxs)(o.T,{variant:"pills",role:"tablist",layout:"fill",children:[Object(l.jsx)(o.U,{children:Object(l.jsxs)(o.V,{href:"#pending",active:1===t,onClick:()=>{this.setState({activeKey:1,orderStatus:"pending"})},children:["Pending ",Object(l.jsx)(o.c,{color:"warning",children:s.PENDING?s.PENDING:0})]})}),Object(l.jsx)(o.U,{children:Object(l.jsxs)(o.V,{href:"#confirmed",active:2===t,onClick:()=>{this.setState({activeKey:2,orderStatus:"confirmed"})},children:["Confirmed ",Object(l.jsx)(o.c,{color:"warning",children:s.CONFIRMED?s.CONFIRMED:0})]})}),Object(l.jsx)(o.U,{children:Object(l.jsxs)(o.V,{href:"#shipped",active:3===t,onClick:()=>{this.setState({activeKey:3,orderStatus:"shipped"})},children:["Shipped ",Object(l.jsx)(o.c,{color:"warning",children:s.SHIPPED?s.SHIPPED:0})]})}),Object(l.jsx)(o.U,{children:Object(l.jsxs)(o.V,{href:"#delivered",active:4===t,onClick:()=>{this.setState({activeKey:4,orderStatus:"delivered"})},children:["Delivered ",Object(l.jsx)(o.c,{color:"warning",children:s.DELIVERED?s.DELIVERED:0})]})})]}),Object(l.jsx)(o.gb,{style:{margin:"10px 0",padding:"12px 16px",overflow:"hidden"},children:Object(l.jsx)(o.hb,{role:"tabpanel","aria-labelledby":"contact-tab",visible:!0,children:Object(l.jsx)(n.Suspense,{fallback:Object(l.jsx)("div",{className:"d-flex justify-content-center align-items-center  position-fixed ",children:Object(l.jsx)(c.DotLoader,{color:"#36D7B7",size:100})}),children:Object(l.jsx)(d,{status:e,totalCounts:s,totalCountChange:this.totalCountChange},e)})})})]})}}t.default=Object(r.b)((e=>({orderResponse:e.orderResponse,userResponse:e.userResponse})),{})(h)}}]);
//# sourceMappingURL=73.f57e2d2e.chunk.js.map