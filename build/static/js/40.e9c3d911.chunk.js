(this["webpackJsonp@project/inventory-management-system"]=this["webpackJsonp@project/inventory-management-system"]||[]).push([[40],{1305:function(e,s,t){"use strict";t.r(s),t.d(s,"Register",(function(){return O}));var a=t(0),n=t(568),r=t(570),o=t(619),c=t(48),i=t(15),d=t(155),l=t(580),p=t(573),m=t(154),u=t(153),j=t(26),g=t(157),h=t(600),b=t(7);const x=Object(a.lazy)((()=>Promise.all([t.e(2),t.e(13),t.e(69)]).then(t.bind(null,631))));class O extends a.Component{constructor(e){super(e),this.state={userCredentials:this.userCredentials,type:"password",validated:!1,loading:!1,successful:!1,message:"",isLoggedIn:!1,permission:"",verifyform:!1,verificationCode:"",storeInfo:[]},this.userCredentials={username:"",password:"",email:"",firstName:"",lastName:"",phoneNumber:""},this.onResetValue=()=>{this.setState((()=>this.userCredentials))},this.handleOnChange=e=>{const s=e.target.name;this.setState({[s]:e.target.value})},this.handleShowPassword=e=>{const{type:s}=this.state;e.preventDefault(),this.setState({type:"password"===s?"text":"password"})},this.handleSubmit=e=>{const{username:s,password:t,email:a,firstName:n,lastName:r,phoneNumber:o}=this.state;e.preventDefault(),this.setState({validation:!0,loading:!0,successful:!1}),0!==s.length&&0!==t.length&&0!==a.length&&this.props.createAccount(s,t,a,n,r,o).then((()=>{const e=this.props.messageResponse.data.message;this.setState({loading:!1,successful:!0,message:e,verifyform:!0}),this.onResetValue()})).catch((()=>{this.setState({loading:!1,successful:!1}),this.onResetValue()}))},this.handleVerificationCode=e=>{e.preventDefault();let{verificationCode:s}=this.state;this.setState({loading:!0}),s&&this.props.verifyCode(s).then((()=>{let{data:e}=this.props.messageResponse;this.setState({messgae:e.message,verifyform:!1,loading:!1})})).catch((()=>{let{data:e}=this.props.messageResponse;this.setState({messgae:e.message,verifyform:!1,loading:!1})}))},this.componentDidUpdate=(e,s)=>{this.manageStoreInformationResponse(e,s)},this.manageStoreInformationResponse=(e,s)=>{if(e.storeInformationResponse!==this.props.storeInformationResponse){const{action:e,status:s,data:t}=this.props.storeInformationResponse;"GET_STORE_INFORMATION"===e&&200===s&&this.setState({storeInfo:t.storeInfo})}},l.a.listen((e=>{Object(p.a)()}))}componentDidMount(){this.redirectAuthenticated(),this.props.getStoreInformation()}redirectAuthenticated(){const e=this.props.userResponse.isLoggedIn;if(e){let s=this.props.userResponse.credentials.roles.roleName,t=s||this.props.userResponse.credentials.roles;this.setState({isLoggedIn:e,permission:t})}}render(){let{username:e,password:s,email:t,firstName:a,lastName:c,phoneNumber:d,type:l,loading:p,successful:g,message:h,isLoggedIn:O,permission:y,verifyform:f,verificationCode:N,storeInfo:S}=this.state;if(O)return y===m.a.SUPER_ADMIN||y===m.a.ADMIN?Object(b.jsx)(i.a,{to:j.a.api.private.prefixFrontendUrl+"/app"}):Object(b.jsx)(i.a,{to:j.a.api.private.prefixFrontendUrl+"/home"});const v={marginBottom:"12px"};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(n.I,{position:"sticky",children:Object(b.jsx)(n.s,{children:Object(b.jsx)(u.b,{className:"nav-link",to:j.a.api.private.prefixFrontendUrl+"/home",style:{cursor:"pointer"},children:S.acronym?Object(b.jsx)("strong",{style:{...v},children:S.acronym}):S.storeName?Object(b.jsx)("strong",{style:{...v},children:S.storeName}):Object(b.jsx)("strong",{style:{...v},children:"IMSs"})})})}),Object(b.jsx)("div",{className:"min-vh-100 d-flex flex-row align-items-center text-dark ",children:Object(b.jsx)(n.s,{children:Object(b.jsx)(n.bb,{className:"justify-content-center align-items-center",children:Object(b.jsx)(n.q,{children:Object(b.jsxs)(n.l,{className:"shadow-lg",children:[Object(b.jsx)(n.i,{className:"p-4 m-0 left-to-right form-container border-0",children:Object(b.jsxs)(n.j,{children:[p?Object(b.jsx)(n.gb,{}):f?Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(n.B,{id:"verificationForm",onSubmit:this.handleVerificationCode,children:[Object(b.jsx)(n.q,{sm:"12",md:"12",lg:"12",className:"d-flex justify-content-center p-3",children:Object(b.jsx)("h2",{className:"text-dark",children:"Verification Code"})}),Object(b.jsx)(n.bb,{className:"justify-content-center align-items-center",children:Object(b.jsxs)(n.q,{children:[Object(b.jsx)(n.N,{children:Object(b.jsx)(n.q,{xs:"12",sm:"12",md:"12",lg:"12",children:Object(b.jsxs)(n.F,{className:"mb-3 text-dark ",children:[Object(b.jsx)(n.D,{name:"verificationCode",type:"text",autoCorrect:"false",id:"floatingVerificationCode",placeholder:"Verification Code",onChange:this.handleOnChange,value:N,required:!0,className:"rounded-pill  ps-4 pe-4"}),Object(b.jsxs)(n.G,{htmlFor:"floatingVerificationCode ",className:"ps-4 pe-4",children:[Object(b.jsx)(r.o,{size:18}),Object(b.jsx)("span",{className:"ps-2",children:"Verification Code"})]})]})})}),Object(b.jsx)("span",{className:"text-danger",children:"You have only 5 mins to verify your account. "})]})}),Object(b.jsxs)(n.f,{form:"verificationForm",type:"submit",color:"info",size:"lg",style:{margin:"20px auto",width:"50%"},className:"d-flex justify-content-center align-items-center position-relative overflow-hidden login-btn",children:[p?Object(b.jsx)(n.gb,{size:"sm"}):Object(b.jsx)("span",{className:"d-flex align-items-center login-icon me-2",children:Object(b.jsx)(r.o,{size:20})}),Object(b.jsx)("span",{className:"label-btn ",children:"Verify"})]})]})}):Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(n.B,{onSubmit:this.handleSubmit,children:[Object(b.jsx)(n.q,{sm:"12",md:"12",lg:"12",className:"d-flex justify-content-center p-3",children:Object(b.jsx)("h2",{className:"text-dark",children:"Register"})}),Object(b.jsxs)(n.bb,{children:[Object(b.jsx)(n.q,{xs:"12",sm:"12",md:"6",lg:"6",children:Object(b.jsx)(n.N,{children:Object(b.jsx)(n.q,{xs:"12",sm:"12",md:"12",lg:"12",children:Object(b.jsxs)(n.F,{className:"mb-3 text-dark ",children:[Object(b.jsx)(n.D,{name:"firstName",type:"text",autoCorrect:"false",id:"floatingFirstName",placeholder:"First name",onChange:this.handleOnChange,value:a,required:!0,className:"rounded-pill  ps-4 pe-4"}),Object(b.jsxs)(n.G,{htmlFor:"floatingFirstName ",className:"ps-4 pe-4",children:[Object(b.jsx)(r.C,{size:18}),Object(b.jsx)("span",{className:"ps-2",children:"First name"})]})]})})})}),Object(b.jsx)(n.q,{xs:"12",sm:"12",md:"6",lg:"6",children:Object(b.jsx)(n.N,{children:Object(b.jsx)(n.q,{xs:"12",sm:"12",md:"12",lg:"12",children:Object(b.jsxs)(n.F,{className:"mb-3 text-dark ",children:[Object(b.jsx)(n.D,{name:"lastName",type:"text",autoCorrect:"false",id:"floatingLastName",placeholder:"Last name",onChange:this.handleOnChange,value:c,required:!0,className:"rounded-pill  ps-4 pe-4"}),Object(b.jsxs)(n.G,{htmlFor:"floatingLastName",className:"ps-4 pe-4",children:[Object(b.jsx)(r.C,{size:18}),Object(b.jsx)("span",{className:"ps-2",children:"Last name"})]})]})})})})]}),Object(b.jsxs)(n.bb,{children:[Object(b.jsx)(n.q,{md:"6",sm:"12",lg:"6",children:Object(b.jsx)(n.N,{children:Object(b.jsx)(n.q,{xs:"12",sm:"12",md:"12",lg:"12",children:Object(b.jsxs)(n.F,{className:"mb-3 text-dark ",children:[Object(b.jsx)(n.D,{name:"username",type:"text",autoCorrect:"false",id:"floatingInput",placeholder:"username",onChange:this.handleOnChange,value:e,required:!0,className:"rounded-pill  ps-4 pe-4"}),Object(b.jsxs)(n.G,{htmlFor:"floatingInput ",className:"ps-4 pe-4",children:[Object(b.jsx)(r.D,{size:18}),Object(b.jsx)("span",{className:"ps-2",children:"Username"})]})]})})})}),Object(b.jsx)(n.q,{md:"6",sm:"12",lg:"6",children:Object(b.jsx)(n.N,{children:Object(b.jsx)(n.q,{xs:"12",sm:"12",md:"12",lg:"12",children:Object(b.jsxs)(n.F,{className:"mb-3 text-dark position-relative",children:[Object(b.jsx)(n.D,{name:"password",type:l,id:"floatingPassword",autoCorrect:"false",placeholder:"Password",onChange:this.handleOnChange,value:s,pattern:"/^[A-Za-z]\\w{7,14}$/",required:!0,className:"rounded-pill ps-4 pe-4"}),Object(b.jsxs)(n.G,{htmlFor:"exampleFormControlTextarea1 ",className:"ps-4 pe-4",children:[Object(b.jsx)(r.o,{size:18}),Object(b.jsx)("span",{className:"ps-2",children:"Password"})]}),Object(b.jsx)("span",{onClick:this.handleShowPassword,className:"position-absolute top-50 end-0 translate-middle-y ps-4 pe-4",children:"password"===l?Object(b.jsx)(r.j,{size:20}):Object(b.jsx)(r.i,{size:20})}),Object(b.jsx)(n.E,{invalid:!0,children:"Please provide a valid username"})]})})})})]}),Object(b.jsx)(n.bb,{children:Object(b.jsx)(n.q,{sm:"12",children:Object(b.jsx)(n.N,{children:Object(b.jsx)(n.q,{xs:"12",sm:"12",md:"12",lg:"12",children:Object(b.jsxs)(n.F,{className:"mb-3 text-dark position-relative",children:[Object(b.jsx)(n.D,{name:"email",type:"text",pattern:"^[a-z0-9](\\.?[a-z0-9]){5,}@g(oogle)?mail\\.com$",id:"floatingEmail",placeholder:"Email",onChange:this.handleOnChange,value:t,required:!0,className:"rounded-pill ps-4 pe-4"}),Object(b.jsxs)(n.G,{htmlFor:"exampleFormControlTextarea1 ",className:"ps-4 pe-4",children:[Object(b.jsx)(r.h,{size:18}),Object(b.jsx)("span",{className:"ps-2",children:"Email"})]}),Object(b.jsx)(n.E,{invalid:!0,children:"Please provide a valid username"})]})})})})}),Object(b.jsx)(n.q,{sm:"12",md:"12",lg:"12",className:"d-flex flex-column justify-content-center",children:Object(b.jsxs)(n.f,{type:"submit",color:"success",size:"lg",style:{margin:"20px auto",width:"50%"},className:"d-flex justify-content-center align-items-center position-relative overflow-hidden login-btn",children:[p?Object(b.jsx)(n.gb,{size:"sm"}):Object(b.jsx)("span",{className:"d-flex align-items-center login-icon me-2",children:Object(b.jsx)(o.e,{size:20})}),Object(b.jsx)("span",{className:"label-btn ",children:"Register"})]})})]})}),h&&Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("div",{className:g?"alert alert-success":"alert alert-danger",role:"alert",children:h})})]})}),Object(b.jsx)(x,{button:"login"})]})})})})})]})}}s.default=Object(c.b)((e=>({userResponse:e.userResponse,messageResponse:e.messageResponse,storeInformationResponse:e.storeInformationResponse})),{createAccount:d.b,clearMessage:p.a,verifyCode:h.k,getStoreInformation:g.a})(O)},573:function(e,s,t){"use strict";t.d(s,"a",(function(){return n}));var a=t(16);const n=()=>async e=>{e({type:a.a,payload:{status:"",data:{message:""}}})}},580:function(e,s,t){"use strict";t.d(s,"a",(function(){return n}));var a=t(32);const n=Object(a.a)()},600:function(e,s,t){"use strict";t.d(s,"f",(function(){return i})),t.d(s,"h",(function(){return d})),t.d(s,"c",(function(){return l})),t.d(s,"a",(function(){return p})),t.d(s,"b",(function(){return m})),t.d(s,"d",(function(){return u})),t.d(s,"j",(function(){return j})),t.d(s,"g",(function(){return g})),t.d(s,"e",(function(){return h})),t.d(s,"i",(function(){return b})),t.d(s,"k",(function(){return x}));var a=t(1),n=t(152),r=t(62);var o=new class{getAccountEmployees(e,s,t){return r.a.get("/users/account",{headers:Object(n.a)(),params:{query:e,page:s,limit:t}})}getUsersAccount(e,s,t,a){return r.a.get("/users/account",{headers:Object(n.a)(),params:{query:e,role:s,page:t,limit:a}})}saveEmployeeAccount(e,s,t,a,o,c,i){return r.a.post("/users/account/create",{firstName:e,lastName:s,email:t,username:a,password:o,birthday:c,role:i},{headers:Object(n.a)()})}deleteAccount(e){return r.a.delete("/users/account/delete/"+e,{headers:Object(n.a)()})}updateUser(e,s,t,a){return r.a.put("/users/account/update/"+e,{firstName:s,lastName:t,birthday:a},{headers:Object(n.a)()})}banAccount(e){return r.a.delete("/users/account/ban/"+e,{headers:Object(n.a)()})}changePassword(e,s,t,a){let o=t;return r.a.post("/users/account/change/password",{id:e,currentPassword:s,password:o,confirmPassword:a},{headers:Object(n.a)()})}forgotPassword(e){return console.log(e),r.a.get("/account/password/forgot",{params:{email:e}})}verifyAccount(e){return r.a.get("/account/verification/"+e)}validateToken(e){return r.a.get("/account/password/forgot/token",{params:{token:e}})}resetPassword(e,s,t,a){return r.a.post("/users/account/reset/password",{accountId:e,token:s,password:t,confirmPassword:a})}getMe(){return r.a.get("/users/account/me",{headers:Object(n.a)()})}},c=t(16);const i=(e,s,t,n)=>async r=>o.getUsersAccount(e,s,t,n).then((e=>(r({type:a.GET_USERS_ACCOUNT,payload:{status:200,action:"USERSACCOUNT",data:{accounts:e.data}}}),Promise.resolve())),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),t=e.response&&e.response.data&&e.response.data.code||e.toString();return r({type:c.g,payload:{status:t,data:{message:s}}}),Promise.reject()})),d=(e,s,t,n,r,i,d)=>async l=>o.saveEmployeeAccount(e,s,t,n,r,i,d).then((e=>{l({type:a.SAVE_EMPLOYEE,payload:{status:200,action:"SAVEEMPLOYEE",data:{}}}),l({type:c.g,payload:{status:200,data:{message:"Successfully Saved"}}})}),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),t=e.response&&e.response.data&&e.response.data.code||e.toString();return l({type:c.g,payload:{status:t,data:{message:s}}}),Promise.reject()})),l=e=>async s=>o.deleteAccount(e).then((e=>{s({type:a.DELETE_ACCOUNT,payload:{status:200,action:"DELETEACCOUNT",data:{}}}),s({type:c.g,payload:{status:200,data:{message:"Successfully Deleted"}}})}),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),a=e.response&&e.response.data&&e.response.data.code||e.toString();return s({type:c.g,payload:{status:a,data:{message:t}}}),Promise.reject()})),p=e=>async s=>o.banAccount(e).then((e=>{s({type:a.BAN_ACCOUNT,payload:{status:200,action:"BANACCOUNT",data:{}}}),s({type:c.g,payload:{status:200,data:{message:"Successfully Banned"}}})}),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),a=e.response&&e.response.data&&e.response.data.code||e.toString();return s({type:c.g,payload:{status:a,data:{message:t}}}),Promise.reject()})),m=(e,s,t,n)=>async r=>o.changePassword(e,s,t,n).then((e=>(r({type:a.CHANGE_PASSWORD,payload:{status:200,action:"changepassword",data:{}}}),r({type:c.g,payload:{status:200,data:{message:"Password Change Successfully."}}}),Promise.resolve())),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),t=e.response&&e.response.data&&e.response.data.code||e.toString();return r({type:c.g,payload:{status:t,data:{message:s}}}),Promise.reject()})),u=e=>async s=>(console.log(e),o.forgotPassword(e).then((e=>(s({type:a.FORGOT_PASSWORD,payload:{status:200,action:a.FORGOT_PASSWORD,data:{}}}),s({type:c.g,payload:{status:200,data:{message:"The Forgot Password Token has been sent to your Email Address."}}}),Promise.resolve())),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),a=e.response&&e.response.data&&e.response.data.code||e.toString();return s({type:c.g,payload:{status:a,data:{message:t}}}),Promise.reject()}))),j=e=>async s=>o.validateToken(e).then((e=>(s({type:a.VALIDATE_TOKEN,payload:{status:200,action:a.VALIDATE_TOKEN,data:{tokenResponse:e.data}}}),s({type:c.g,payload:{status:200,data:{message:""}}}),Promise.resolve())),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),a=e.response&&e.response.data&&e.response.data.code||e.toString();return s({type:c.g,payload:{status:a,data:{message:t}}}),Promise.reject()})),g=(e,s,t,n)=>async r=>o.resetPassword(e,s,t,n).then((e=>(r({type:a.RESET_PASSWORD,payload:{status:200,action:a.RESET_PASSWORD,data:{}}}),r({type:c.g,payload:{status:200,data:{message:"Successfully Reset your Password"}}}),Promise.resolve())),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),t=e.response&&e.response.data&&e.response.data.code||e.toString();return r({type:c.g,payload:{status:t,data:{message:s}}}),Promise.reject()})),h=()=>async e=>o.getMe().then((s=>(e({type:a.GET_ME,payload:{status:200,action:a.GET_ME,data:{account:s.data}}}),Promise.resolve())),(s=>{const t=s.response&&s.response.data&&s.response.data.message||s.message||s.toString(),a=s.response&&s.response.data&&s.response.data.code||s.toString();return e({type:c.g,payload:{status:a,data:{message:t}}}),Promise.reject()})),b=(e,s,t,n)=>async r=>o.updateUser(e,s,t,n).then((e=>(r({type:a.UPDATE_USER,payload:{status:200,action:a.UPDATE_USER,data:{}}}),r({type:c.g,payload:{status:200,data:{message:"Successfully Updated"}}}),Promise.resolve())),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),t=e.response&&e.response.data&&e.response.data.code||e.toString();return r({type:c.g,payload:{status:t,data:{message:s}}}),Promise.reject()})),x=e=>async s=>o.verifyAccount(e).then((e=>(s({type:a.VERIFY_ACCOUNT,payload:{status:200,action:a.VERIFY_ACCOUNT,data:{}}}),s({type:c.g,payload:{status:200,data:{message:"Your Account has been Verified. Try To Login."}}}),Promise.resolve())),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),a=e.response&&e.response.data&&e.response.data.code||e.toString();return s({type:c.g,payload:{status:a,data:{message:t}}}),Promise.reject()}))}}]);
//# sourceMappingURL=40.e9c3d911.chunk.js.map