import{d as l}from"./limit-851bbedd.js";/* empty css                      */import{M as c}from"./masonry-layout-f99d37ca.js";import{I as m}from"./infinite-scroll-530e71ba.js";import{W as u}from"./webfontloader-88599fb4.js";const{VITE_APP_EOEFansKey:g,VITE_APP_SiteName:v}={VITE_APP_SiteName:"EOE.LOL",VITE_APP_EOEFansKey:"25aac10cef164deca8c98a2b4763bdb5",BASE_URL:"/OpenFansite/",MODE:"production",DEV:!1,PROD:!0};let p=localStorage.getItem("open_bilibili");window.location.hash="#videopage";let r=1,a=new c(".videoList",{itemSelector:".videoCard",columnWidth:".videoList__col-sizer",gutter:".videoList__gutter-sizer",percentPosition:!0,stagger:30,transitionDuration:0,visibleStyle:{transform:"translateY(0)",opacity:1},hiddenStyle:{transform:"translateY(100px)",opacity:0}}),i=new m(".videoList",{path:function(){return`https://api.eoe.lol/api/${r}`},responseBody:"json",outlayer:a,status:"#videoStatus",history:!1,scrollThreshold:!1,button:"#videoList_viewmore"});i.on("request",function(){r++});var s=document.createElement("div");i.on("load",function(o){var e=o.data.map(_).join("");s.innerHTML=e;let t=s.querySelectorAll(".videoCard");i.appendItems(t),a.appended(t),setTimeout(()=>{l(d,500,!1)},700)});i.loadNextPage();function _({title:o,author:e,cover:t,av:n}){return`<a class="videoCard" href="https://bilibili.com/video/av${n}" onclick="video('${n}');return false;">
<img src = "${t}" alt="${e}的视频封面" loading="lazy" onload="AgainLayout()" />
<div>
<div>${o}</div>
<div>[UP]${e}</div>
</div>
</a>`}function d(){a.layout()}window.addEventListener("resize",l(d,500,!1));p==null&&localStorage.setItem("open_bilibili","website");document.title=v+" Legacy";u.load({custom:{families:["LXGWFasmartGothic"]},classes:!1,active(){document.body.style.fontFamily="LXGWFasmartGothic"}});
