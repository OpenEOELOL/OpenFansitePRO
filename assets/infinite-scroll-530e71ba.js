var Q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O={},B={get exports(){return O},set exports(u){O=u}},b={},C={get exports(){return b},set exports(u){b=u}},H={},_={get exports(){return H},set exports(u){H=u}},U;function Y(){return U||(U=1,function(u){(function(h,l){u.exports?u.exports=l():h.EvEmitter=l()})(typeof window<"u"?window:Q,function(){function h(){}let l=h.prototype;return l.on=function(o,f){if(!o||!f)return this;let t=this._events=this._events||{},s=t[o]=t[o]||[];return s.includes(f)||s.push(f),this},l.once=function(o,f){if(!o||!f)return this;this.on(o,f);let t=this._onceEvents=this._onceEvents||{},s=t[o]=t[o]||{};return s[f]=!0,this},l.off=function(o,f){let t=this._events&&this._events[o];if(!t||!t.length)return this;let s=t.indexOf(f);return s!=-1&&t.splice(s,1),this},l.emitEvent=function(o,f){let t=this._events&&this._events[o];if(!t||!t.length)return this;t=t.slice(0),f=f||[];let s=this._onceEvents&&this._onceEvents[o];for(let n of t)s&&s[n]&&(this.off(o,n),delete s[n]),n.apply(this,f);return this},l.allOff=function(){return delete this._events,delete this._onceEvents,this},h})}(_)),H}var L={},N={get exports(){return L},set exports(u){L=u}},T;function S(){return T||(T=1,function(u){(function(h,l){u.exports?u.exports=l(h):h.fizzyUIUtils=l(h)})(Q,function(l){let o={};o.extend=function(t,s){return Object.assign(t,s)},o.modulo=function(t,s){return(t%s+s)%s},o.makeArray=function(t){return Array.isArray(t)?t:t==null?[]:typeof t=="object"&&typeof t.length=="number"?[...t]:[t]},o.removeFrom=function(t,s){let n=t.indexOf(s);n!=-1&&t.splice(n,1)},o.getParent=function(t,s){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,t.matches(s))return t},o.getQueryElement=function(t){return typeof t=="string"?document.querySelector(t):t},o.handleEvent=function(t){let s="on"+t.type;this[s]&&this[s](t)},o.filterFindElements=function(t,s){return t=o.makeArray(t),t.filter(n=>n instanceof HTMLElement).reduce((n,e)=>{if(!s)return n.push(e),n;e.matches(s)&&n.push(e);let r=e.querySelectorAll(s);return n=n.concat(...r),n},[])},o.debounceMethod=function(t,s,n){n=n||100;let e=t.prototype[s],r=s+"Timeout";t.prototype[s]=function(){clearTimeout(this[r]);let c=arguments;this[r]=setTimeout(()=>{e.apply(this,c),delete this[r]},n)}},o.docReady=function(t){let s=document.readyState;s=="complete"||s=="interactive"?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},o.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(s,n,e){return n+"-"+e}).toLowerCase()};let f=l.console;return o.htmlInit=function(t,s){o.docReady(function(){let e="data-"+o.toDashed(s),r=document.querySelectorAll(`[${e}]`),c=l.jQuery;[...r].forEach(d=>{let m=d.getAttribute(e),y;try{y=m&&JSON.parse(m)}catch(a){f&&f.error(`Error parsing ${e} on ${d.className}: ${a}`);return}let i=new t(d,y);c&&c.data(d,s,i)})})},o})}(N)),L}var k;function P(){return k||(k=1,function(u){(function(h,l){u.exports?u.exports=l(h,Y(),S()):h.InfiniteScroll=l(h,h.EvEmitter,h.fizzyUIUtils)})(window,function(l,o,f){let t=l.jQuery,s={};function n(i,a){let p=f.getQueryElement(i);if(!p){console.error("Bad element for InfiniteScroll: "+(p||i));return}if(i=p,i.infiniteScrollGUID){let g=s[i.infiniteScrollGUID];return g.option(a),g}this.element=i,this.options={...n.defaults},this.option(a),t&&(this.$element=t(this.element)),this.create()}n.defaults={},n.create={},n.destroy={};let e=n.prototype;Object.assign(e,o.prototype);let r=0;e.create=function(){let i=this.guid=++r;if(this.element.infiniteScrollGUID=i,s[i]=this,this.pageIndex=1,this.loadCount=0,this.updateGetPath(),!(this.getPath&&this.getPath())){console.error("Disabling InfiniteScroll");return}this.updateGetAbsolutePath(),this.log("initialized",[this.element.className]),this.callOnInit();for(let p in n.create)n.create[p].call(this)},e.option=function(i){Object.assign(this.options,i)},e.callOnInit=function(){let i=this.options.onInit;i&&i.call(this,this)},e.dispatchEvent=function(i,a,p){this.log(i,p);let g=a?[a].concat(p):p;if(this.emitEvent(i,g),!t||!this.$element)return;i+=".infiniteScroll";let E=i;if(a){let v=t.Event(a);v.type=i,E=v}this.$element.trigger(E,p)};let c={initialized:i=>`on ${i}`,request:i=>`URL: ${i}`,load:(i,a)=>`${i.title||""}. URL: ${a}`,error:(i,a)=>`${i}. URL: ${a}`,append:(i,a,p)=>`${p.length} items. URL: ${a}`,last:(i,a)=>`URL: ${a}`,history:(i,a)=>`URL: ${a}`,pageIndex:function(i,a){return`current page determined to be: ${i} from ${a}`}};e.log=function(i,a){if(!this.options.debug)return;let p=`[InfiniteScroll] ${i}`,g=c[i];g&&(p+=". "+g.apply(this,a)),console.log(p)},e.updateMeasurements=function(){this.windowHeight=l.innerHeight;let i=this.element.getBoundingClientRect();this.top=i.top+l.scrollY},e.updateScroller=function(){let i=this.options.elementScroll;if(!i){this.scroller=l;return}if(this.scroller=i===!0?this.element:f.getQueryElement(i),!this.scroller)throw new Error(`Unable to find elementScroll: ${i}`)},e.updateGetPath=function(){let i=this.options.path;if(!i){console.error(`InfiniteScroll path option required. Set as: ${i}`);return}let a=typeof i;if(a=="function"){this.getPath=i;return}if(a=="string"&&i.match("{{#}}")){this.updateGetPathTemplate(i);return}this.updateGetPathSelector(i)},e.updateGetPathTemplate=function(i){this.getPath=()=>{let E=this.pageIndex+1;return i.replace("{{#}}",E)};let a=i.replace(/(\\\?|\?)/,"\\?").replace("{{#}}","(\\d\\d?\\d?)"),p=new RegExp(a),g=location.href.match(p);g&&(this.pageIndex=parseInt(g[1],10),this.log("pageIndex",[this.pageIndex,"template string"]))};let d=[/^(.*?\/?page\/?)(\d\d?\d?)(.*?$)/,/^(.*?\/?\?page=)(\d\d?\d?)(.*?$)/,/(.*?)(\d\d?\d?)(?!.*\d)(.*?$)/],m=n.getPathParts=function(i){if(i)for(let a of d){let p=i.match(a);if(p){let[,g,E,v]=p;return{begin:g,index:E,end:v}}}};e.updateGetPathSelector=function(i){let a=document.querySelector(i);if(!a){console.error(`Bad InfiniteScroll path option. Next link not found: ${i}`);return}let p=a.getAttribute("href"),g=m(p);if(!g){console.error(`InfiniteScroll unable to parse next link href: ${p}`);return}let{begin:E,index:v,end:x}=g;this.isPathSelector=!0,this.getPath=()=>E+(this.pageIndex+1)+x,this.pageIndex=parseInt(v,10)-1,this.log("pageIndex",[this.pageIndex,"next link"])},e.updateGetAbsolutePath=function(){let i=this.getPath();if(i.match(/^http/)||i.match(/^\//)){this.getAbsolutePath=this.getPath;return}let{pathname:p}=location,g=i.match(/^\?/),E=p.substring(0,p.lastIndexOf("/")),v=g?p:E+"/";this.getAbsolutePath=()=>v+this.getPath()},n.create.hideNav=function(){let i=f.getQueryElement(this.options.hideNav);i&&(i.style.display="none",this.nav=i)},n.destroy.hideNav=function(){this.nav&&(this.nav.style.display="")},e.destroy=function(){this.allOff();for(let i in n.destroy)n.destroy[i].call(this);delete this.element.infiniteScrollGUID,delete s[this.guid],t&&this.$element&&t.removeData(this.element,"infiniteScroll")},n.throttle=function(i,a){a=a||200;let p,g;return function(){let E=+new Date,v=arguments,x=()=>{p=E,i.apply(this,v)};p&&E<p+a?(clearTimeout(g),g=setTimeout(x,a)):x()}},n.data=function(i){i=f.getQueryElement(i);let a=i&&i.infiniteScrollGUID;return a&&s[a]},n.setJQuery=function(i){t=i},f.htmlInit(n,"infinite-scroll"),e._init=function(){};let{jQueryBridget:y}=l;return t&&y&&y("infiniteScroll",n,t),n})}(C)),b}var q={},j={get exports(){return q},set exports(u){q=u}},D;function w(){return D||(D=1,function(u){(function(h,l){u.exports?u.exports=l(h,P()):l(h,h.InfiniteScroll)})(window,function(l,o){let f=o.prototype;Object.assign(o.defaults,{loadOnScroll:!0,checkLastPage:!0,responseBody:"text",domParseResponse:!0}),o.create.pageLoad=function(){this.canLoad=!0,this.on("scrollThreshold",this.onScrollThresholdLoad),this.on("load",this.checkLastPage),this.options.outlayer&&this.on("append",this.onAppendOutlayer)},f.onScrollThresholdLoad=function(){this.options.loadOnScroll&&this.loadNextPage()};let t=new DOMParser;f.loadNextPage=function(){if(this.isLoading||!this.canLoad)return;let{responseBody:e,domParseResponse:r,fetchOptions:c}=this.options,d=this.getAbsolutePath();this.isLoading=!0,typeof c=="function"&&(c=c());let m=fetch(d,c).then(y=>{if(!y.ok){let i=new Error(y.statusText);return this.onPageError(i,d,y),{response:y}}return y[e]().then(i=>(e=="text"&&r&&(i=t.parseFromString(i,"text/html")),y.status==204?(this.lastPageReached(i,d),{body:i,response:y}):this.onPageLoad(i,d,y)))}).catch(y=>{this.onPageError(y,d)});return this.dispatchEvent("request",null,[d,m]),m},f.onPageLoad=function(e,r,c){return this.options.append||(this.isLoading=!1),this.pageIndex++,this.loadCount++,this.dispatchEvent("load",null,[e,r,c]),this.appendNextPage(e,r,c)},f.appendNextPage=function(e,r,c){let{append:d,responseBody:m,domParseResponse:y}=this.options;if(!(m=="text"&&y)||!d)return{body:e,response:c};let a=e.querySelectorAll(d),p={body:e,response:c,items:a};if(!a||!a.length)return this.lastPageReached(e,r),p;let g=s(a),E=()=>(this.appendItems(a,g),this.isLoading=!1,this.dispatchEvent("append",null,[e,r,a,c]),p);return this.options.outlayer?this.appendOutlayerItems(g,E):E()},f.appendItems=function(e,r){!e||!e.length||(r=r||s(e),n(r),this.element.appendChild(r))};function s(e){let r=document.createDocumentFragment();return e&&r.append(...e),r}function n(e){let r=e.querySelectorAll("script");for(let c of r){let d=document.createElement("script"),m=c.attributes;for(let y of m)d.setAttribute(y.name,y.value);d.innerHTML=c.innerHTML,c.parentNode.replaceChild(d,c)}}return f.appendOutlayerItems=function(e,r){let c=o.imagesLoaded||l.imagesLoaded;if(!c){console.error("[InfiniteScroll] imagesLoaded required for outlayer option"),this.isLoading=!1;return}return new Promise(function(d){c(e,function(){let m=r();d(m)})})},f.onAppendOutlayer=function(e,r,c){this.options.outlayer.appended(c)},f.checkLastPage=function(e,r){let{checkLastPage:c,path:d}=this.options;if(!c)return;if(typeof d=="function"&&!this.getPath()){this.lastPageReached(e,r);return}let m;if(typeof c=="string"?m=c:this.isPathSelector&&(m=d),!m||!e.querySelector)return;e.querySelector(m)||this.lastPageReached(e,r)},f.lastPageReached=function(e,r){this.canLoad=!1,this.dispatchEvent("last",null,[e,r])},f.onPageError=function(e,r,c){return this.isLoading=!1,this.canLoad=!1,this.dispatchEvent("error",null,[e,r,c]),e},o.create.prefill=function(){if(!this.options.prefill)return;let e=this.options.append;if(!e){console.error(`append option required for prefill. Set as :${e}`);return}this.updateMeasurements(),this.updateScroller(),this.isPrefilling=!0,this.on("append",this.prefill),this.once("error",this.stopPrefill),this.once("last",this.stopPrefill),this.prefill()},f.prefill=function(){let e=this.getPrefillDistance();this.isPrefilling=e>=0,this.isPrefilling?(this.log("prefill"),this.loadNextPage()):this.stopPrefill()},f.getPrefillDistance=function(){return this.options.elementScroll?this.scroller.clientHeight-this.scroller.scrollHeight:this.windowHeight-this.element.clientHeight},f.stopPrefill=function(){this.log("stopPrefill"),this.off("append",this.prefill)},o})}(j)),q}var A={},F={get exports(){return A},set exports(u){A=u}},z;function J(){return z||(z=1,function(u){(function(h,l){u.exports?u.exports=l(h,P(),S()):l(h,h.InfiniteScroll,h.fizzyUIUtils)})(window,function(l,o,f){let t=o.prototype;return Object.assign(o.defaults,{scrollThreshold:400}),o.create.scrollWatch=function(){this.pageScrollHandler=this.onPageScroll.bind(this),this.resizeHandler=this.onResize.bind(this);let s=this.options.scrollThreshold;(s||s===0)&&this.enableScrollWatch()},o.destroy.scrollWatch=function(){this.disableScrollWatch()},t.enableScrollWatch=function(){this.isScrollWatching||(this.isScrollWatching=!0,this.updateMeasurements(),this.updateScroller(),this.on("last",this.disableScrollWatch),this.bindScrollWatchEvents(!0))},t.disableScrollWatch=function(){this.isScrollWatching&&(this.bindScrollWatchEvents(!1),delete this.isScrollWatching)},t.bindScrollWatchEvents=function(s){let n=s?"addEventListener":"removeEventListener";this.scroller[n]("scroll",this.pageScrollHandler),l[n]("resize",this.resizeHandler)},t.onPageScroll=o.throttle(function(){this.getBottomDistance()<=this.options.scrollThreshold&&this.dispatchEvent("scrollThreshold")}),t.getBottomDistance=function(){let s,n;return this.options.elementScroll?(s=this.scroller.scrollHeight,n=this.scroller.scrollTop+this.scroller.clientHeight):(s=this.top+this.element.clientHeight,n=l.scrollY+this.windowHeight),s-n},t.onResize=function(){this.updateMeasurements()},f.debounceMethod(o,"onResize",150),o})}(F)),A}var R={},V={get exports(){return R},set exports(u){R=u}},W;function Z(){return W||(W=1,function(u){(function(h,l){u.exports?u.exports=l(h,P(),S()):l(h,h.InfiniteScroll,h.fizzyUIUtils)})(window,function(l,o,f){let t=o.prototype;Object.assign(o.defaults,{history:"replace"});let s=document.createElement("a");return o.create.history=function(){if(!this.options.history)return;if(s.href=this.getAbsolutePath(),!((s.origin||s.protocol+"//"+s.host)==location.origin)){console.error(`[InfiniteScroll] cannot set history with different origin: ${s.origin} on ${location.origin} . History behavior disabled.`);return}this.options.append?this.createHistoryAppend():this.createHistoryPageLoad()},t.createHistoryAppend=function(){this.updateMeasurements(),this.updateScroller(),this.scrollPages=[{top:0,path:location.href,title:document.title}],this.scrollPage=this.scrollPages[0],this.scrollHistoryHandler=this.onScrollHistory.bind(this),this.unloadHandler=this.onUnload.bind(this),this.scroller.addEventListener("scroll",this.scrollHistoryHandler),this.on("append",this.onAppendHistory),this.bindHistoryAppendEvents(!0)},t.bindHistoryAppendEvents=function(n){let e=n?"addEventListener":"removeEventListener";this.scroller[e]("scroll",this.scrollHistoryHandler),l[e]("unload",this.unloadHandler)},t.createHistoryPageLoad=function(){this.on("load",this.onPageLoadHistory)},o.destroy.history=t.destroyHistory=function(){this.options.history&&this.options.append&&this.bindHistoryAppendEvents(!1)},t.onAppendHistory=function(n,e,r){if(!r||!r.length)return;let c=r[0],d=this.getElementScrollY(c);s.href=e,this.scrollPages.push({top:d,path:s.href,title:n.title})},t.getElementScrollY=function(n){return this.options.elementScroll?n.offsetTop-this.top:n.getBoundingClientRect().top+l.scrollY},t.onScrollHistory=function(){let n=this.getClosestScrollPage();n!=this.scrollPage&&(this.scrollPage=n,this.setHistory(n.title,n.path))},f.debounceMethod(o,"onScrollHistory",150),t.getClosestScrollPage=function(){let n;this.options.elementScroll?n=this.scroller.scrollTop+this.scroller.clientHeight/2:n=l.scrollY+this.windowHeight/2;let e;for(let r of this.scrollPages){if(r.top>=n)break;e=r}return e},t.setHistory=function(n,e){let r=this.options.history;r&&history[r+"State"]&&(history[r+"State"](null,n,e),this.options.historyTitle&&(document.title=n),this.dispatchEvent("history",null,[n,e]))},t.onUnload=function(){if(this.scrollPage.top===0)return;let n=l.scrollY-this.scrollPage.top+this.top;this.destroyHistory(),scrollTo(0,n)},t.onPageLoadHistory=function(n,e){this.setHistory(n.title,e)},o})}(V)),R}var I={},K={get exports(){return I},set exports(u){I=u}},M;function X(){return M||(M=1,function(u){(function(h,l){u.exports?u.exports=l(h,P(),S()):l(h,h.InfiniteScroll,h.fizzyUIUtils)})(window,function(l,o,f){class t{constructor(n,e){this.element=n,this.infScroll=e,this.clickHandler=this.onClick.bind(this),this.element.addEventListener("click",this.clickHandler),e.on("request",this.disable.bind(this)),e.on("load",this.enable.bind(this)),e.on("error",this.hide.bind(this)),e.on("last",this.hide.bind(this))}onClick(n){n.preventDefault(),this.infScroll.loadNextPage()}enable(){this.element.removeAttribute("disabled")}disable(){this.element.disabled="disabled"}hide(){this.element.style.display="none"}destroy(){this.element.removeEventListener("click",this.clickHandler)}}return o.create.button=function(){let s=f.getQueryElement(this.options.button);s&&(this.button=new t(s,this))},o.destroy.button=function(){this.button&&this.button.destroy()},o.Button=t,o})}(K)),I}var $={},tt={get exports(){return $},set exports(u){$=u}},G;function et(){return G||(G=1,function(u){(function(h,l){u.exports?u.exports=l(h,P(),S()):l(h,h.InfiniteScroll,h.fizzyUIUtils)})(window,function(l,o,f){let t=o.prototype;o.create.status=function(){let r=f.getQueryElement(this.options.status);r&&(this.statusElement=r,this.statusEventElements={request:r.querySelector(".infinite-scroll-request"),error:r.querySelector(".infinite-scroll-error"),last:r.querySelector(".infinite-scroll-last")},this.on("request",this.showRequestStatus),this.on("error",this.showErrorStatus),this.on("last",this.showLastStatus),this.bindHideStatus("on"))},t.bindHideStatus=function(r){let c=this.options.append?"append":"load";this[r](c,this.hideAllStatus)},t.showRequestStatus=function(){this.showStatus("request")},t.showErrorStatus=function(){this.showStatus("error")},t.showLastStatus=function(){this.showStatus("last"),this.bindHideStatus("off")},t.showStatus=function(r){n(this.statusElement),this.hideStatusEventElements();let c=this.statusEventElements[r];n(c)},t.hideAllStatus=function(){s(this.statusElement),this.hideStatusEventElements()},t.hideStatusEventElements=function(){for(let r in this.statusEventElements){let c=this.statusEventElements[r];s(c)}};function s(r){e(r,"none")}function n(r){e(r,"block")}function e(r,c){r&&(r.style.display=c)}return o})}(tt)),$}/*!
 * Infinite Scroll v4.0.1
 * Automatically add next page
 *
 * Licensed GPLv3 for open source use
 * or Infinite Scroll Commercial License for commercial use
 *
 * https://infinite-scroll.com
 * Copyright 2018-2020 Metafizzy
 */(function(u){(function(h,l){u.exports&&(u.exports=l(P(),w(),J(),Z(),X(),et()))})(window,function(l){return l})})(B);const it=O;export{it as I,Q as c};
