(this["webpackJsonp@project/inventory-management-system"]=this["webpackJsonp@project/inventory-management-system"]||[]).push([[61],{1020:function(e,s,t){"use strict";t.r(s),t.d(s,"HeroCarousel",(function(){return l}));var o=t(0),r=t(2);var a=t(50),n=t(456),c=t(446),i=t(8);class l extends o.Component{constructor(...e){super(...e),this.state={carouselImages:[]},this.componentDidUpdate=(e,s)=>{this.getResponseCarouselImages(e,s)},this.getResponseCarouselImages=(e,s)=>{if(e.carouselResponser!==this.props.carouselResponser){let e=this.props.carouselResponser;"RETRIEVE"===e.action&&(e.status>=200&&e.status<=300?this.setState({carouselImages:e.carouselData}):e.status<400&&console.log("ERROR"))}}}componentDidMount(){this.props.getCarouselImages()}render(){let{carouselImages:e}=this.state;const s={position:"absolute",zIndex:"2",top:"calc(4% - 16px)",height:"100%",cursor:"pointer",border:"none"};return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(n.Carousel,{showArrows:!0,autoPlay:!0,showThumbs:!1,infiniteLoop:!0,dynamicHeight:!1,renderArrowPrev:(e,t,o)=>t&&Object(i.jsx)("button",{type:"button",onClick:e,title:o,className:"arrow-style",style:{...s,left:0},children:Object(i.jsx)(c.a,{size:"40",style:{color:"white"}})}),renderArrowNext:(e,t,o)=>t&&Object(i.jsx)("button",{type:"button",onClick:e,title:o,className:"arrow-style",style:{...s,right:0},children:Object(i.jsx)(c.b,{size:"40",style:{color:"white"}})}),children:e&&e.map(((e,s)=>Object(i.jsx)("div",{children:Object(i.jsx)("img",{className:"d-block ",height:"400",src:e.fileName,alt:e.fileName})},s)))})})}}s.default=Object(a.b)((e=>({carouselResponser:e.carouselResponser})),{getCarouselImages:()=>async e=>{e({type:r.GET_CAROUSEL_IMAGES,payload:{status:200,data:{carouselImages:[{fileName:r.CAROUSEL_FOLDER_DIRECTORY+"rick.jpg"},{fileName:r.CAROUSEL_FOLDER_DIRECTORY+"NicePng_warehouse-icon-png_1212543.png"}]}}})}})(l)}}]);
//# sourceMappingURL=61.3d85c7b8.chunk.js.map