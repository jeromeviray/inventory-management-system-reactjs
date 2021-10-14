(this["webpackJsonp@project/inventory-management-system"]=this["webpackJsonp@project/inventory-management-system"]||[]).push([[37],{1016:function(e,s,t){"use strict";t.r(s),t.d(s,"CustomerAddress",(function(){return m}));var a=t(0),n=t(412),i=t(50),r=t(414),d=t(630),o=t(537),c=t(418),l=t(413),p=t(428),h=t(8);class m extends a.Component{constructor(...e){super(...e),this.state={message:"",action:"",addresses:[],addressId:"",visible:!1},this.retreiveAddressResponse=()=>{this.props.getAdress()},this.manageAddressResponse=(e,s)=>{if(e.addressResponse!==this.props.addressResponse){let{action:e,status:s,data:t}=this.props.addressResponse;"GET_ADDRESSES"===e&&200===s&&this.setState({addresses:t.addresses})}},this.manageModalVisible=(e,s)=>{if(e.modalVisible!==this.props.modalVisible){let{action:e}=this.props.modalVisible;"close"===e&&this.retreiveAddressResponse()}},this.handleOnChange=e=>{let s=e.target.value;this.setState({addressId:s}),this.props.checkValueOnChange(s)}}componentDidMount(){this.props.userResponse.isLoggedIn?this.retreiveAddressResponse():p.a.push("/login")}componentDidUpdate(e,s){this.manageAddressResponse(e,s),this.manageModalVisible(e,s)}render(){let{message:e,addresses:s,visible:t}=this.state;const a={cursor:"pointer"};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.a,{}),Object(h.jsxs)(n.f,{shape:"rounded-pill",color:"primary",variant:"ghost",className:"d-flex justify-content-center align-items-center mb-3",onClick:()=>this.props.setAddressModal(!t,"Add","",Object(h.jsx)(r.r,{size:20,className:"me-2"})),children:[Object(h.jsx)(r.r,{size:20}),Object(h.jsx)("span",{style:{marginLeft:"10px"},children:"Add Branch"})]}),Object(h.jsxs)(n.ab,{children:[s.map(((e,s)=>{let t=this.props.getValue==e.id;return Object(h.jsx)(n.p,{md:12,className:"mb-3",children:Object(h.jsx)(n.i,{className:t?"border-envelope shadow":"border-envelope",children:Object(h.jsxs)(n.j,{className:"p-3 ",children:[Object(h.jsxs)("div",{className:"d-flex align-items-center justify-content-start",children:[Object(h.jsx)(n.B,{type:"radio",name:"check",id:"address"+e.id,style:a,value:e.id,defaultChecked:void 0!==this.props.getValue&&t,onChange:this.handleOnChange}),Object(h.jsx)(n.n,{className:"ps-4",children:e.firstName+" "+e.lastName})]}),Object(h.jsx)("div",{className:"ps-5",children:e.city})]})})},s)})),Object(h.jsx)(n.p,{className:"m-3 text-center",style:{fontStyle:"italic"},children:Object(h.jsx)(n.a,{color:"warning",children:"To Proceed to the next step Select or Add your Address Information"})})]}),e&&Object(h.jsx)("div",{className:"form-group d-flex justify-content-center align-items-center",children:Object(h.jsx)("div",{className:"alert alert-danger",role:"alert",children:e})})]})}}s.default=Object(i.b)((e=>({addressResponse:e.addressResponse,userResponse:e.userResponse,messageResponse:e.messageResponse,modalVisible:e.modalVisibleResponse})),{getAdress:o.a,clearMessage:c.a,setAddressModal:l.f})(m)},413:function(e,s,t){"use strict";t.d(s,"k",(function(){return n})),t.d(s,"j",(function(){return i})),t.d(s,"e",(function(){return r})),t.d(s,"h",(function(){return d})),t.d(s,"g",(function(){return o})),t.d(s,"b",(function(){return c})),t.d(s,"c",(function(){return l})),t.d(s,"a",(function(){return p})),t.d(s,"d",(function(){return h})),t.d(s,"i",(function(){return m})),t.d(s,"f",(function(){return b})),t.d(s,"n",(function(){return j})),t.d(s,"o",(function(){return u})),t.d(s,"m",(function(){return g})),t.d(s,"l",(function(){return y}));var a=t(2);const n=(e,s,t)=>async n=>{n({type:a.SET_PRODUCTEDITMODAL_VISIBILIT,payload:{status:200,data:{visible:e,action:s,icon:t}}})},i=(e,s,t)=>async n=>{n({type:a.SET_PRODUCT_DETAILS_MODAL,payload:{status:200,data:{visible:e,action:s,product:t}}})},r=(e,s,t,n)=>async i=>{i({type:a.EDIT_PRODUCT_MODAL,payload:{status:200,data:{visible:e,action:s,product:t,icon:n}}})},d=(e,s,t,n)=>async i=>{i({type:a.ALERT_MODAL,payload:{action:s,module:t,alert:e,data:{id:n}}})},o=(e,s,t,n)=>async i=>{i({type:a.ALERT_BAN_MODAL,payload:{action:s,module:t,alert:e,data:{id:n}}})},c=(e,s,t,n)=>async i=>{i({type:a.ADD_BRAND_MODAL,payload:{status:200,data:{visible:e,action:s,brand:t,icon:n}}})},l=(e,s,t,n)=>async i=>{i({type:a.ADD_CATEGORY_MODAL,payload:{status:200,data:{visible:e,action:s,category:t,icon:n}}})},p=(e,s,t,n)=>async i=>{i({type:a.ADD_EMPLOYEE_MODAL,payload:{status:200,data:{visible:e,action:s,employee:t,icon:n}}})},h=(e,s,t,n)=>async i=>{i({type:a.CHANGE_PASSWORD_MODAL,payload:{status:200,data:{visible:e,action:s,employee:t,icon:n}}})},m=(e,s)=>async t=>{t({type:a.LOGIN_MODAL,payload:{data:{visible:e,action:s}}})},b=(e,s,t,n)=>async i=>{i({type:a.SET_ADDRESS_MODAL,payload:{data:{visible:e,action:s,address:t,icon:n}}})},j=(e,s,t,n)=>async i=>{i({type:a.SET_SUPPLIER_MODAL,payload:{action:s,data:{visible:e,icon:n,supplier:t}}})},u=(e,s,t,n)=>async i=>{i({type:a.SET_SUPPLY_MODAL,payload:{action:s,data:{visible:e,icon:n,supply:t}}})},g=(e,s)=>async t=>{t({type:a.SET_SCAN_MODAL,payload:{action:s,data:{visible:e}}})},y=(e,s,t,n)=>async i=>{i({type:a.SET_PROMO_MODAL,payload:{action:s,data:{visible:e,icon:n,promo:t}}})}},537:function(e,s,t){"use strict";t.d(s,"a",(function(){return o})),t.d(s,"b",(function(){return c}));var a=t(21),n=t(2),i=t(415),r=t(88);var d=new class{getAddresses(){return r.a.get("/addresses",{headers:Object(i.a)()})}updateAddress(e,s){return r.a.update("/addresses/update/"+e,{address:s},{headers:Object(i.a)()})}saveAddress(e){return r.a.post("/addresses/save",{firstName:e.firstName,lastName:e.lastName,phoneNumber:e.phoneNumber,region:e.region,city:e.city,province:e.province,barangay:e.barangay,street:e.street,postalCode:e.postalCode},{headers:Object(i.a)()})}};const o=()=>async e=>d.getAddresses().then((s=>(e({type:n.GET_ADDRESSES,payload:{status:200,action:"GET_ADDRESSES",data:{addresses:s.data}}}),Promise.resolve())),(s=>{const t=s.response&&s.response.data&&s.response.data.message||s.message||s.toString(),n=s.response&&s.response.data&&s.response.data.code||s.toString();return e({type:a.g,payload:{status:n,data:{message:t}}}),Promise.reject()})),c=e=>async s=>(console.log(e),d.saveAddress(e).then((e=>(s({type:n.SAVE_ADDRESS,payload:{status:200,action:"SAVE_ADDRESS",data:{}}}),s({type:a.g,payload:{status:200,data:{message:"Address Successfully Saved"}}}),Promise.resolve())),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),n=e.response&&e.response.data&&e.response.data.code||e.toString();return s({type:a.g,payload:{status:n,data:{message:t}}}),Promise.reject()})))},630:function(e,s,t){"use strict";var a=t(0),n=t(412),i=t(50),r=t(413),d=t(537),o=t(418),c=t(8);class l extends a.Component{constructor(...e){super(...e),this.state={visible:!1,icon:"",address:this.addressStates,loading:!1,action:""},this.addressStates={firstName:"",lastName:"",phoneNumber:"",region:"",city:"",province:"",barangay:"",street:"",postalCode:""},this.manageModalVisible=(e,s)=>{if(e.modalVisible!==this.props.modalVisible){let{visible:e,action:s,address:t,icon:a}=this.props.modalVisible;"Add"===s||"Edit"===s?this.setState({visible:e,icon:a,action:s}):this.setState({visible:e,icon:"",action:""})}},this.handleOnChange=e=>{this.setState({[e.target.name]:e.target.value})},this.handleOnSubmit=e=>{e.preventDefault(),this.setState({loading:!0});let{action:s,firstName:t,lastName:a,phoneNumber:n,region:i,city:r,province:d,barangay:o,street:c,postalCode:l}=this.state,p={firstName:t,lastName:a,phoneNumber:n,region:i,city:r,province:d,barangay:o,street:c,postalCode:l};"Add"===s&&this.handleSaveAddress(p)},this.onResetValue=()=>{this.setState((()=>this.addressStates))},this.handleSaveAddress=e=>{this.props.saveAddress(e).then((()=>{let{status:e}=this.props.messageResponse;200===e&&(this.setState({loading:!1}),this.onResetValue())})).catch((()=>{let{status:e,data:s}=this.props.messageResponse;this.setState({loading:!1})}))}}componentDidUpdate(e,s){this.manageModalVisible(e,s)}render(){let{visible:e,firstName:s,lastName:t,phoneNumber:a,region:i,city:r,province:d,barangay:o,street:l,postalCode:p,loading:h,action:m}=this.state;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(n.O,{size:"lg",visible:e,children:[Object(c.jsx)(n.R,{onDismiss:()=>this.props.setAddressModal(!1,"close","",""),children:Object(c.jsx)(n.S,{children:"Customer Address"})}),Object(c.jsx)(n.P,{children:Object(c.jsxs)(n.A,{className:"row g-3",id:"address-form",onSubmit:this.handleOnSubmit,children:[Object(c.jsx)(n.p,{md:6,children:Object(c.jsxs)(n.E,{className:"mb-3",children:[Object(c.jsx)(n.C,{name:"firstName",type:"text",id:"floatingFirstName",placeholder:"First name",value:s,onChange:this.handleOnChange,required:!0}),Object(c.jsx)(n.F,{htmlFor:"floatingFirstName",children:"First name"})]})}),Object(c.jsx)(n.p,{md:6,children:Object(c.jsxs)(n.E,{children:[Object(c.jsx)(n.C,{name:"lastName",type:"text",id:"floatingLastName",placeholder:"Last name",value:t,onChange:this.handleOnChange,required:!0}),Object(c.jsx)(n.F,{htmlFor:"floatingLastName",children:"Last name"})]})}),Object(c.jsx)(n.p,{md:6,children:Object(c.jsxs)(n.E,{children:[Object(c.jsx)(n.C,{name:"phoneNumber",type:"tel",required:!0,id:"floatingPhoneNumber",placeholder:"Last name",value:a,onChange:this.handleOnChange}),Object(c.jsx)(n.F,{htmlFor:"floatingPhoneNumber",children:"Phone number"})]})}),Object(c.jsx)(n.p,{md:6,children:Object(c.jsxs)(n.E,{className:"mb-3",children:[Object(c.jsx)(n.C,{name:"region",type:"text",id:"floatingRegion",placeholder:"Region",value:i,onChange:this.handleOnChange,required:!0}),Object(c.jsx)(n.F,{htmlFor:"floatingRegion",children:"Region"})]})}),Object(c.jsx)(n.p,{md:5,children:Object(c.jsxs)(n.E,{children:[Object(c.jsx)(n.C,{name:"city",type:"text",id:"floatingCity",placeholder:"City",value:r,onChange:this.handleOnChange,required:!0}),Object(c.jsx)(n.F,{htmlFor:"floatingCity",children:"City"})]})}),Object(c.jsx)(n.p,{md:4,children:Object(c.jsxs)(n.E,{children:[Object(c.jsx)(n.C,{name:"province",type:"text",id:"floatingProvince",placeholder:"Province",value:d,onChange:this.handleOnChange,required:!0}),Object(c.jsx)(n.F,{htmlFor:"floatingProvince",children:"Province"})]})}),Object(c.jsx)(n.p,{md:3,children:Object(c.jsxs)(n.E,{children:[Object(c.jsx)(n.C,{name:"postalCode",type:"number",id:"floatingPostalCode",placeholder:"Postal Code",value:p,onChange:this.handleOnChange,required:!0}),Object(c.jsx)(n.F,{htmlFor:"floatingPostalCode",children:"Postal code"})]})}),Object(c.jsx)(n.p,{md:12,className:"mt-4 pt-2",children:Object(c.jsxs)(n.E,{children:[Object(c.jsx)(n.C,{name:"barangay",type:"text",id:"floatingBarangay",placeholder:"Barangay",value:o,onChange:this.handleOnChange,required:!0}),Object(c.jsx)(n.F,{htmlFor:"floatingBarangay",children:"Barangay"})]})}),Object(c.jsx)(n.p,{md:12,className:"mt-4 pt-2",children:Object(c.jsxs)(n.E,{children:[Object(c.jsx)(n.C,{name:"street",type:"text",id:"floatingStreet",placeholder:"Street",value:l,onChange:this.handleOnChange,required:!0}),Object(c.jsx)(n.F,{htmlFor:"floatingStreet",children:"1234 Main St"})]})})]})}),Object(c.jsxs)(n.Q,{children:[Object(c.jsx)(n.f,{color:"dark",variant:"ghost",onClick:()=>{this.props.setAddressModal(!1,"close","","")},children:"Close"}),Object(c.jsxs)(n.f,{color:"info",disabled:h,type:"submit",form:"address-form",children:[h&&Object(c.jsx)(n.fb,{size:"sm",className:"ms-1"}),"Save ","Edit"===m?"Changes":"Branch"]})]})]})})}}s.a=Object(i.b)((e=>({modalVisible:e.modalVisibleResponse,messageResponse:e.messageResponse})),{setAddressModal:r.f,saveAddress:d.b,clearMessage:o.a})(l)}}]);
//# sourceMappingURL=37.aad4b371.chunk.js.map