(this["webpackJsonp@project/inventory-management-system"]=this["webpackJsonp@project/inventory-management-system"]||[]).push([[42],{569:function(e,t,s){"use strict";s.d(t,"l",(function(){return a})),s.d(t,"k",(function(){return n})),s.d(t,"e",(function(){return o})),s.d(t,"h",(function(){return r})),s.d(t,"g",(function(){return d})),s.d(t,"o",(function(){return c})),s.d(t,"b",(function(){return l})),s.d(t,"c",(function(){return u})),s.d(t,"a",(function(){return m})),s.d(t,"d",(function(){return p})),s.d(t,"j",(function(){return b})),s.d(t,"f",(function(){return h})),s.d(t,"p",(function(){return g})),s.d(t,"q",(function(){return y})),s.d(t,"n",(function(){return v})),s.d(t,"m",(function(){return O})),s.d(t,"r",(function(){return j})),s.d(t,"i",(function(){return A})),s.d(t,"s",(function(){return S}));var i=s(1);const a=(e,t,s)=>async a=>{a({type:i.SET_PRODUCTEDITMODAL_VISIBILIT,payload:{status:200,data:{visible:e,action:t,icon:s}}})},n=(e,t,s)=>async a=>{a({type:i.SET_PRODUCT_DETAILS_MODAL,payload:{status:200,data:{visible:e,action:t,product:s}}})},o=(e,t,s,a)=>async n=>{n({type:i.EDIT_PRODUCT_MODAL,payload:{status:200,data:{visible:e,action:t,product:s,icon:a}}})},r=(e,t,s,a)=>async n=>{n({type:i.ALERT_MODAL,payload:{action:t,module:s,alert:e,data:{id:a}}})},d=(e,t,s,a)=>async n=>{n({type:i.ALERT_BAN_MODAL,payload:{action:t,module:s,alert:e,data:{id:a}}})},c=(e,t,s,a)=>async n=>{n({type:i.UDPATE_STORE_INFORMATION,payload:{status:200,data:{visible:e,action:t,storeInfo:s,icon:a}}})},l=(e,t,s,a)=>async n=>{n({type:i.ADD_BRAND_MODAL,payload:{status:200,data:{visible:e,action:t,brand:s,icon:a}}})},u=(e,t,s,a)=>async n=>{n({type:i.ADD_CATEGORY_MODAL,payload:{status:200,data:{visible:e,action:t,category:s,icon:a}}})},m=(e,t,s,a)=>async n=>{n({type:i.ADD_EMPLOYEE_MODAL,payload:{status:200,data:{visible:e,action:t,employee:s,icon:a}}})},p=(e,t,s,a)=>async n=>{n({type:i.CHANGE_PASSWORD_MODAL,payload:{status:200,data:{visible:e,action:t,employee:s,icon:a}}})},b=(e,t)=>async s=>{s({type:i.LOGIN_MODAL,payload:{data:{visible:e,action:t}}})},h=(e,t,s,a)=>async n=>{n({type:i.SET_ADDRESS_MODAL,payload:{data:{visible:e,action:t,address:s,icon:a}}})},g=(e,t,s,a)=>async n=>{n({type:i.SET_SUPPLIER_MODAL,payload:{action:t,data:{visible:e,icon:a,supplier:s}}})},y=(e,t,s,a)=>async n=>{n({type:i.SET_SUPPLY_MODAL,payload:{action:t,data:{visible:e,icon:a,supply:s}}})},v=(e,t)=>async s=>{s({type:i.SET_SCAN_MODAL,payload:{action:t,data:{visible:e}}})},O=(e,t,s,a)=>async n=>{n({type:i.SET_PROMO_MODAL,payload:{action:t,data:{visible:e,icon:a,promo:s}}})},j=(e,t,s,a)=>async n=>{n({type:i.SET_TERMS_AND_CONDITION_MODAL,payload:{status:200,data:{visible:e,action:t,termsAndCondition:s,icon:a}}})},A=(e,t,s,a)=>async n=>{n({type:i.SET_CAROULSE_MDOAL,payload:{status:200,data:{visible:e,action:t,carousel:s,icon:a}}})},S=(e,t,s,a)=>async n=>{n({type:i.SET_TRACKING_INFO_MODAL,payload:{status:200,data:{visible:e,action:t,order:s,icon:a}}})}},707:function(e,t,s){"use strict";s.d(t,"b",(function(){return d})),s.d(t,"c",(function(){return c})),s.d(t,"a",(function(){return l}));var i=s(16),a=s(1),n=s(62),o=s(152);var r=new class{saveTermsAndCondition(e){return n.a.post("/terms/save",{content:e},{headers:Object(o.a)()})}updateTermsAndCondition(e,t){return n.a.put("/terms/update/"+e,{content:t},{headers:Object(o.a)()})}getTermsAndCondition(){return n.a.get("/terms",{headers:Object(o.a)()})}};const d=e=>async t=>r.saveTermsAndCondition(e).then((e=>(t({type:a.SAVE_TERMS_AND_CONDITION,payload:{status:200,action:a.SAVE_TERMS_AND_CONDITION,data:{}}}),t({type:i.g,payload:{status:200,data:{message:"Successfully Saved"}}}),Promise.resolve())),(e=>{const s=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),a=e.response&&e.response.data&&e.response.data.code||e.toString();return t({type:i.g,payload:{status:a,data:{message:s}}}),Promise.reject()})),c=(e,t)=>async s=>r.updateTermsAndCondition(e,t).then((e=>(s({type:a.UPDATE_TERMS_AND_CONDITION,payload:{status:200,action:a.UPDATE_TERMS_AND_CONDITION,data:{termsAndCondition:e.data}}}),s({type:i.g,payload:{status:200,data:{message:"Successfully Updated"}}}),Promise.resolve())),(e=>{const t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),a=e.response&&e.response.data&&e.response.data.code||e.toString();return s({type:i.g,payload:{status:a,data:{message:t}}}),Promise.reject()})),l=()=>async e=>r.getTermsAndCondition().then((t=>(e({type:a.GET_TERMS_AND_CONDITION,payload:{status:200,action:a.GET_TERMS_AND_CONDITION,data:{termsAndCondition:t.data}}}),Promise.resolve())),(t=>{const s=t.response&&t.response.data&&t.response.data.message||t.message||t.toString(),a=t.response&&t.response.data&&t.response.data.code||t.toString();return e({type:i.g,payload:{status:a,data:{message:s}}}),Promise.reject()}))},828:function(e,t,s){"use strict";var i=s(0),a=s(568),n=s(596),o=s(751),r=s(569),d=s(707),c=s(573),l=s(48),u=s(7);class m extends i.Component{constructor(...e){super(...e),this.state={visible:!1,icon:"",loading:!1,message:"",action:"",status:"",successFully:"",editorState:n.EditorState.createEmpty(),validated:!1,id:""},this.onEditorStateChange=e=>{this.setState({editorState:e})},this.manageStoreInfo=(e,t)=>{if(e.modalVisible!==this.props.modalVisible){let{visible:e,action:t,termsAndCondition:s,icon:i}=this.props.modalVisible;"Edit"===t?this.setState({id:s.id,visible:e,icon:i,action:t,editorState:s.content?n.EditorState.createWithContent(Object(n.convertFromRaw)(JSON.parse(s.content))):n.EditorState.createEmpty()}):"Add"===t?this.setState({visible:e,icon:i,action:t}):this.setState({visible:e,branchId:"",branchName:"",icon:"",action:"",loading:!1})}},this.handleOnSubmit=e=>{e.preventDefault();!1===e.currentTarget.checkValidity()&&e.stopPropagation(),this.setState({validated:!0,loading:!0});const{action:t}=this.state;"Add"===t?this.handleSave():"Edit"===t&&this.handleEdit()},this.handleSave=()=>{const{editorState:e}=this.state,t=JSON.stringify(Object(n.convertToRaw)(e.getCurrentContent()));this.props.saveTermsAndCondition(t).then((()=>{this.setState({validated:!1,loading:!1}),this.props.setTermAndConditionModal(!1,"close","","")})).catch((()=>{this.setState({loading:!1})}))},this.handleEdit=()=>{const{id:e,editorState:t}=this.state,s=JSON.stringify(Object(n.convertToRaw)(t.getCurrentContent()));this.props.updateTermsAndCondition(e,s).then((()=>{this.setState({validated:!1,loading:!1}),this.props.setTermAndConditionModal(!1,"close","","")})).catch((()=>{this.setState({loading:!1})}))}}componentDidUpdate(e,t){this.manageStoreInfo(e,t)}render(){let{visible:e,action:t,icon:s,loading:i,successFully:n,message:r,editorState:d,validated:c}=this.state;return Object(u.jsx)("div",{children:Object(u.jsxs)(a.P,{visible:e,size:"xl",scrollable:!0,children:[Object(u.jsx)(a.S,{onDismiss:()=>{this.props.setTermAndConditionModal(!1,"close","",""),this.props.clearMessage()},children:Object(u.jsx)(a.T,{children:Object(u.jsxs)("div",{className:"d-flex align-items-center",children:[s,t+" Terms and Condition"]})})}),Object(u.jsxs)(a.Q,{children:[r&&Object(u.jsx)("div",{className:"form-group",children:Object(u.jsx)("div",{className:n?"alert alert-success":"alert alert-danger",role:"alert",children:r})}),Object(u.jsx)(a.B,{onSubmit:this.handleOnSubmit,id:"branch-form",noValidate:!0,validated:c,children:Object(u.jsx)("div",{className:"mb-3",children:Object(u.jsx)(a.bb,{children:Object(u.jsx)(a.q,{sm:"12",md:"12",lg:"12",className:"mt-4",children:Object(u.jsx)(o.Editor,{editorState:d,wrapperClassName:"editor-wrapper",editorClassName:"editor",onEditorStateChange:this.onEditorStateChange,placeholder:"Inser Description about your Store",toolbar:{options:["inline","blockType","fontSize","fontFamily","list","textAlign","colorPicker","emoji","remove","history"]}})})})})})]}),Object(u.jsxs)(a.R,{children:[Object(u.jsx)(a.f,{color:"dark",variant:"ghost",onClick:()=>{this.props.setTermAndConditionModal(!1,"close","",""),this.props.clearMessage()},children:"Close"}),Object(u.jsxs)(a.f,{color:"primary",disabled:i,type:"submit",form:"branch-form",children:[i&&Object(u.jsx)(a.gb,{size:"sm",className:"ms-1"}),"Save ","Edit"===t?"Changes":"Terms And Condition"]})]})]})})}}t.a=Object(l.b)((e=>({modalVisible:e.modalVisibleResponse,messageResponse:e.messageResponse})),{setTermAndConditionModal:r.r,clearMessage:c.a,saveTermsAndCondition:d.b,updateTermsAndCondition:d.c})(m)},831:function(e,t,s){"use strict";s.r(t),s.d(t,"TermsAndCondition",(function(){return h}));var i=s(568),a=s(0),n=s(48),o=s(707),r=s(596),d=s(603),c=s.n(d),l=s(604),u=s.n(l),m=s(828),p=s(569),b=s(7);class h extends a.Component{constructor(...e){super(...e),this.state={termsAndCondition:[],visible:!1},this.manageTermsAndConditionResponse=(e,t)=>{if(e.termsAndConditionResponse!==this.props.termsAndConditionResponse){const{action:e,status:t,data:s}=this.props.termsAndConditionResponse;"GET_TERMS_AND_CONDITION"===e&&200===t&&this.setState({termsAndCondition:s})}},this.manageStoreInfo=(e,t)=>{if(e.modalVisible!==this.props.modalVisible){let{action:e}=this.props.modalVisible;"close"===e&&this.props.getTermsAndCondition()}},this.createMarkup=e=>({__html:c.a.sanitize(e)})}componentDidMount(){this.props.getTermsAndCondition()}componentDidUpdate(e,t){this.manageTermsAndConditionResponse(e,t),this.manageStoreInfo(e,t)}render(){const{termsAndCondition:e,visible:t}=this.state,{content:s}=e;let a="",n=Object(b.jsx)(b.Fragment,{});if(s){let t=e&&JSON.parse(s);if(t){a=Object(r.convertFromRaw)(t);const e=r.EditorState.createWithContent(a);n=u()(Object(r.convertToRaw)(e.getCurrentContent()))}}const o={marginBottom:"12px",marginLeft:"5px"};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m.a,{}),Object(b.jsxs)(i.i,{children:[Object(b.jsx)(i.m,{className:"d-flex justify-content-between align-items-center",children:Object(b.jsx)(i.o,{children:"Terms And Condition"})}),Object(b.jsx)(i.j,{children:e?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"text-black-50 d-flex justify-content-between align-items-center mb-3",children:[Object(b.jsxs)("h6",{className:"m-0 pe-3 mb-2",children:["Created Date:",Object(b.jsx)("strong",{style:{...o},children:e.createdAt})]}),Object(b.jsxs)("h6",{className:"m-0 pe-3 mb-2",children:["Last Updated Date:",Object(b.jsx)("strong",{style:{...o},children:e.updatedAt})]})]}),Object(b.jsx)("hr",{}),Object(b.jsx)(i.n,{className:"p-3 d-flex justify-content-center",children:Object(b.jsx)("div",{className:"preview ps-4 pe-4",dangerouslySetInnerHTML:this.createMarkup(n)})})]}):Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"preview ps-4 pe-4 text-warning",style:{textAlign:"justify",textJustify:"inter-word"},children:[Object(b.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu lectus et justo maximus pretium. Sed venenatis magna nec consectetur cursus. Vestibulum ac enim massa. Sed sagittis tincidunt orci, vel congue enim. In tristique suscipit commodo. Sed bibendum aliquam nisl, sed viverra dui mollis ac. Nullam non ante eu libero eleifend viverra. Sed eget magna rutrum, egestas sapien imperdiet, rutrum enim. Aliquam neque metus, ultrices ut malesuada at, venenatis sit amet ipsum. Cras id molestie sem. Aliquam aliquam at tellus eget egestas. Suspendisse vestibulum magna metus, non fermentum ante aliquet euismod. Mauris vel semper erat. Aenean finibus lobortis dolor. Proin venenatis, metus et mattis elementum, dui velit tincidunt justo, in dignissim purus nibh at orci. Mauris ac cursus nulla. Vestibulum ultrices eros sit amet magna vestibulum, et pellentesque metus feugiat. Sed quis congue nulla. Maecenas ante ex, varius in auctor gravida, convallis ac ante. Vivamus purus nisl, fringilla laoreet volutpat lacinia, fringilla eu felis. Nam eu diam auctor, iaculis diam eget, accumsan sapien. Mauris consectetur dictum eleifend. Cras sit amet tristique leo, non interdum ex. Mauris malesuada dignissim urna quis bibendum. Integer pretium pretium lorem nec condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus."}),Object(b.jsx)("p",{children:"Maecenas ullamcorper mi a urna eleifend pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque sapien ex, sagittis sed lacinia eget, tristique commodo tellus. Nullam efficitur lacinia justo, id venenatis ipsum suscipit eget. Etiam id cursus turpis, eget laoreet tellus. Vestibulum at pulvinar nisi, vel rhoncus augue. Nulla id diam enim. Nulla varius ipsum eu est volutpat sollicitudin in ac diam. Pellentesque hendrerit eros eget nisi suscipit, et semper tortor suscipit. Sed finibus at nibh ac porta. Nulla facilisi. Aliquam risus velit, porta nec neque in, lobortis bibendum lacus. Duis maximus, nunc eget interdum gravida, justo urna tincidunt ligula, ut blandit dolor neque quis leo. Sed at elit sed nulla lacinia faucibus. Maecenas quis odio eget leo iaculis semper. Cras fringilla est non dictum viverra. Aliquam mauris nulla, bibendum nec nisl eget, gravida condimentum purus. Praesent sed hendrerit lorem. Pellentesque ullamcorper quis lectus sed blandit. Integer tellus lectus, maximus vitae volutpat a, pharetra at orci. Pellentesque vitae odio quis lectus congue lacinia id nec nulla. Phasellus sit amet mauris vel urna faucibus iaculis in in arcu. Pellentesque et magna sapien. Suspendisse faucibus dolor sed dolor dapibus vulputate."})]})})})]})]})}}t.default=Object(n.b)((e=>({modalVisible:e.modalVisibleResponse,messageResponse:e.messageResponse,termsAndConditionResponse:e.termsAndConditionResponse})),{getTermsAndCondition:o.a,setTermAndConditionModal:p.r})(h)}}]);
//# sourceMappingURL=42.fd1b95ae.chunk.js.map