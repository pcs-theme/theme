self.riot&&(function(){
var k=riot.tag2;
k("pym-iframe","","","",function(c){var a=this,g;a.on("load",function(){if(c.url&&!g){g=!0;var h=c.id||"rpym-iframe-"+(new Date).getTime(),d,e;a.root.id=h;var b=new pym.Parent(h,c.url,{optionalparams:false});b.tag=a;a.pym=a.channel=b;a.iframe=b.iframe;a.on("unmount",function(){try{b&&b.remove()}catch(l){}});if("function"===typeof c.loaded)a.on("loaded",c.loaded);b.sendFunction=function(a){b.sendMessage("function",JSON.stringify({f:a.toString()}))};b.send=function(a,b){b.sendMessage(a,b)};b.on=function(a,b){b.onMessage(a,b)};b.ons=function(a){a&&Object.keys(a).forEach(function(f){"function"===typeof a[f]&&b.onMessage(f,a[f])})};b.updateHeight=function(){b.sendMessage("sendHeight")};b.iframe.onload=function(){e=b.iframe;d=e.contentDocument;!d&&e.contentWindow&&(e=e.contentWindow.document);if(d){a.document=d;self.Talker||eval('self.Talker||function(){var g=function(){function a(a){"undefined"!=typeof setImmediate?setImmediate(a):"undefined"!=typeof process&&process.nextTick?process.nextTick(a):setTimeout(a,0)}return function c(){var b,l=[],k=[],g=function(c,d){null==b&&null!=c&&(b=c,l=d,k.length&&a(function(){for(var a=0;a<k.length;a++)k[a]()}));return b};g.then=function(d,g){var f=c(),h=function(){try{var a=b?d:g;if("function"==typeof a){var c=function(a){var b,d=0;try{if(!a||"object"!=typeof a&&"function"!=typeof a||"function"!=typeof(b=a.then))f(!0,arguments);else{if(a===f)throw new TypeError;b.call(a,function(){d++||c.apply(void 0,arguments)},function(a){d++||f(!1,[a])})}}catch(n){d++||f(!1,[n])}};c(a.apply(void 0,l||[]))}else f(b,l)}catch(m){f(!1,[m])}};null!=b?a(h):k.push(h);return f};return g}}(),h=function(a){function b(){}b.prototype=a;return new b},b=function(a,b){this.remoteWindow=a;this.remoteOrigin=b;this.timeout=3E3;this.handshaken=!1;this.handshake=g();this._id=0;this._queue=[];this._sent={};var e=this;window.addEventListener("message",function(a){e._receiveMessage(a)},!1);this._sendHandshake();return this};b.prototype.send=function(a,e,c){a=new b.OutgoingMessage(this,a,e,c);var d=g();this._sent[a.id]=d;this._queue.push(a);this._flushQueue();setTimeout(function(){d(!1,[Error("timeout")])},this.timeout);return d};b.prototype._receiveMessage=function(a){try{var b=JSON.parse(a.data)}catch(c){b={}}return this._isSafeMessage(a.source,a.origin,b.type)?b.handshake||b.handshakeConfirmation?this._handleHandshake(b):this._handleMessage(b):!1};b.prototype._isSafeMessage=function(a,b,c){a=a===this.remoteWindow;b="*"===this.remoteOrigin||b===this.remoteOrigin;return a&&b&&"application/x-talkerjs-v1+json"===c};b.prototype._handleHandshake=function(a){a.handshake&&this._sendHandshake(this.handshaken);this.handshaken=!0;this.handshake(!0,[this.handshaken]);this._flushQueue()};b.prototype._handleMessage=function(a){var e=new b.IncomingMessage(this,a.namespace,a.data,a.id);return(a=a.responseToId)?this._respondToMessage(a,e):this._broadcastMessage(e)};b.prototype._respondToMessage=function(a,b){this._sent[a]&&(this._sent[a](!0,[b]),delete this._sent[a])};b.prototype._broadcastMessage=function(a){this.onMessage&&this.onMessage.call(this,a)};b.prototype._sendHandshake=function(a){var b={type:"application/x-talkerjs-v1+json"};b[a?"handshakeConfirmation":"handshake"]=!0;this._postMessage(b)};b.prototype._nextId=function(){return this._id+=1};b.prototype._postMessage=function(a){this.remoteWindow&&this.remoteOrigin&&this.remoteWindow.postMessage(JSON.stringify(a),this.remoteOrigin)};b.prototype._flushQueue=function(){if(this.handshaken){var a=this._queue.shift();if(!a)return this._queue;this._postMessage(a);if(0<this._queue.length)return this._flushQueue()}return this._queue};b.Message=function(a,b,c){this.talker=a;this.namespace=b;this.data=c;this.type="application/x-talkerjs-v1+json";return this};b.OutgoingMessage=function(a,e,c,d){b.Message.call(this,a,e,c);this.responseToId=d||null;this.id=this.talker._nextId()};b.OutgoingMessage.prototype=h(b.Message.prototype);b.OutgoingMessage.prototype.constructor=b.Message;b.OutgoingMessage.prototype.toJSON=function(){return{id:this.id,responseToId:this.responseToId,namespace:this.namespace,data:this.data,type:this.type}};b.IncomingMessage=function(a,e,c,d){b.Message.call(this,a,e,c);this.id=d};b.IncomingMessage.prototype=h(b.Message.prototype);b.IncomingMessage.prototype.constructor=b.Message;b.IncomingMessage.prototype.respond=function(a){return this.talker.send(null,a,this.id)};self.Talker=b}();');var c=d.createElement("script");c.type="text/javascript";c.text='if(!self.pym)!function(a){"function"==typeof define&&define.amd?define(a):"undefined"!=typeof module&&module.exports?module.exports=a():window.pym=a.call(this)}(function(){var a={},b=function(a){var b=document.createEvent("Event");b.initEvent("pym:"+a,!0,!0),document.dispatchEvent(b)},c=function(a){var b=new RegExp("[\\\\?&]"+a.replace(/[\\[]/,"\\\\[").replace(/[\\]]/,"\\\\]")+"=([^&#]*)"),c=b.exec(location.search);return null===c?"":decodeURIComponent(c[1].replace(/\\+/g," "))},d=function(a,b){if(("*"===b.xdomain||a.origin.match(new RegExp(b.xdomain+"$")))&&"string"==typeof a.data)return!0},e=function(a){var b=/^(?:(?:https?|mailto|ftp):|[^&:\\/?#]*(?:[\\/?#]|$))/gi;if(a.match(b))return!0},f=function(a,b,c){return["pym",a,b,c].join("xPYMx")},g=function(a){var b=["pym",a,"(\\\\S+)","(.*)"];return new RegExp("^"+b.join("xPYMx")+"$")},h=Date.now||function(){return(new Date).getTime()},i=function(a,b,c){var d,e,f,g=null,i=0;c||(c={});var j=function(){i=!1===c.leading?0:h(),g=null,f=a.apply(d,e),g||(d=e=null)};return function(){var k=h();i||!1!==c.leading||(i=k);var l=b-(k-i);return d=this,e=arguments,l<=0||l>b?(g&&(clearTimeout(g),g=null),i=k,f=a.apply(d,e),g||(d=e=null)):g||!1===c.trailing||(g=setTimeout(j,l)),f}},j=function(){for(var b=a.autoInitInstances.length,c=b-1;c>=0;c--){var d=a.autoInitInstances[c];d.el.getElementsByTagName("iframe").length&&d.el.getElementsByTagName("iframe")[0].contentWindow||a.autoInitInstances.splice(c,1)}};return a.autoInitInstances=[],a.autoInit=function(c){var d=document.querySelectorAll("[data-pym-src]:not([data-pym-auto-initialized])"),e=d.length;j();for(var f=0;f<e;++f){var g=d[f];g.setAttribute("data-pym-auto-initialized",""),""===g.id&&(g.id="pym-"+f+"-"+Math.random().toString(36).substr(2,5));var h=g.getAttribute("data-pym-src"),i={xdomain:"string",title:"string",name:"string",id:"string",sandbox:"string",allowfullscreen:"boolean",parenturlparam:"string",parenturlvalue:"string",optionalparams:"boolean",trackscroll:"boolean",scrollwait:"number"},k={};for(var l in i)if(null!==g.getAttribute("data-pym-"+l))switch(i[l]){case"boolean":k[l]=!("false"===g.getAttribute("data-pym-"+l));break;case"string":k[l]=g.getAttribute("data-pym-"+l);break;case"number":var m=Number(g.getAttribute("data-pym-"+l));isNaN(m)||(k[l]=m);break;default:console.err("unrecognized attribute type")}var n=new a.Parent(g.id,h,k);a.autoInitInstances.push(n)}return c||b("pym-initialized"),a.autoInitInstances},a.Parent=function(a,b,c){this.id=a,this.url=b,this.el=document.getElementById(a),this.iframe=null,this.settings={xdomain:"*",optionalparams:!0,parenturlparam:"parentUrl",parenturlvalue:window.location.href,trackscroll:!1,scrollwait:100},this.messageRegex=g(this.id),this.messageHandlers={},c=c||{},this._constructIframe=function(){var a=this.el.offsetWidth.toString();this.iframe=document.createElement("iframe");var b="",c=this.url.indexOf("#");for(c>-1&&(b=this.url.substring(c,this.url.length),this.url=this.url.substring(0,c)),this.url.indexOf("?")<0?this.url+="?":this.url+="&",this.iframe.src=this.url+"initialWidth="+a+"&childId="+this.id,this.settings.optionalparams&&(this.iframe.src+="&parentTitle="+encodeURIComponent(document.title),this.iframe.src+="&"+this.settings.parenturlparam+"="+encodeURIComponent(this.settings.parenturlvalue)),this.iframe.src+=b,this.iframe.setAttribute("width","100%"),this.iframe.setAttribute("scrolling","no"),this.iframe.setAttribute("marginheight","0"),this.iframe.setAttribute("frameborder","0"),this.settings.title&&this.iframe.setAttribute("title",this.settings.title),void 0!==this.settings.allowfullscreen&&!1!==this.settings.allowfullscreen&&this.iframe.setAttribute("allowfullscreen",""),void 0!==this.settings.sandbox&&"string"==typeof this.settings.sandbox&&this.iframe.setAttribute("sandbox",this.settings.sandbox),this.settings.id&&(document.getElementById(this.settings.id)||this.iframe.setAttribute("id",this.settings.id)),this.settings.name&&this.iframe.setAttribute("name",this.settings.name);this.el.firstChild;)this.el.removeChild(this.el.firstChild);this.el.appendChild(this.iframe),window.addEventListener("resize",this._onResize),this.settings.trackscroll&&window.addEventListener("scroll",this._throttleOnScroll)},this._onResize=function(){this.sendWidth(),this.settings.trackscroll&&this.sendViewportAndIFramePosition()}.bind(this),this._onScroll=function(){this.sendViewportAndIFramePosition()}.bind(this),this._fire=function(a,b){if(a in this.messageHandlers)for(var c=0;c<this.messageHandlers[a].length;c++)this.messageHandlers[a][c].call(this,b)},this.remove=function(){window.removeEventListener("message",this._processMessage),window.removeEventListener("resize",this._onResize),this.el.removeChild(this.iframe),j()},this._processMessage=function(a){if(d(a,this.settings)&&"string"==typeof a.data){var b=a.data.match(this.messageRegex);if(!b||3!==b.length)return!1;var c=b[1],e=b[2];this._fire(c,e)}}.bind(this),this._onHeightMessage=function(a){var b=parseInt(a);this.iframe.setAttribute("height",b+"px")},this._onNavigateToMessage=function(a){e(a)&&(document.location.href=a)},this._onScrollToChildPosMessage=function(a){var b=document.getElementById(this.id).getBoundingClientRect().top+window.pageYOffset,c=b+parseInt(a);window.scrollTo(0,c)},this.onMessage=function(a,b){a in this.messageHandlers||(this.messageHandlers[a]=[]),this.messageHandlers[a].push(b)},this.sendMessage=function(a,b){this.el.getElementsByTagName("iframe").length&&(this.el.getElementsByTagName("iframe")[0].contentWindow?this.el.getElementsByTagName("iframe")[0].contentWindow.postMessage(f(this.id,a,b),"*"):this.remove())},this.sendWidth=function(){var a=this.el.offsetWidth.toString();this.sendMessage("width",a)},this.sendViewportAndIFramePosition=function(){var a=this.iframe.getBoundingClientRect(),b=window.innerWidth||document.documentElement.clientWidth,c=window.innerHeight||document.documentElement.clientHeight,d=b+" "+c;d+=" "+a.top+" "+a.left,d+=" "+a.bottom+" "+a.right,this.sendMessage("viewport-iframe-position",d)};for(var h in c)this.settings[h]=c[h];return this._throttleOnScroll=i(this._onScroll.bind(this),this.settings.scrollwait),this.onMessage("height",this._onHeightMessage),this.onMessage("navigateTo",this._onNavigateToMessage),this.onMessage("scrollToChildPos",this._onScrollToChildPosMessage),this.onMessage("parentPositionInfo",this.sendViewportAndIFramePosition),window.addEventListener("message",this._processMessage,!1),this._constructIframe(),this},a.Child=function(a){this.parentWidth=null,this.id=null,this.parentTitle=null,this.parentUrl=null,this.settings={renderCallback:null,xdomain:"*",polling:0,parenturlparam:"parentUrl"},this.timerId=null,this.messageRegex=null,this.messageHandlers={},a=a||{},this.onMessage=function(a,b){a in this.messageHandlers||(this.messageHandlers[a]=[]),this.messageHandlers[a].push(b)},this._fire=function(a,b){if(a in this.messageHandlers)for(var c=0;c<this.messageHandlers[a].length;c++)this.messageHandlers[a][c].call(this,b)},this._processMessage=function(a){if(d(a,this.settings)&&"string"==typeof a.data){var b=a.data.match(this.messageRegex);if(b&&3===b.length){var c=b[1],e=b[2];this._fire(c,e)}}}.bind(this),this._onWidthMessage=function(a){var b=parseInt(a);b!==this.parentWidth&&(this.parentWidth=b,this.settings.renderCallback&&this.settings.renderCallback(b),this.sendHeight())},this.sendMessage=function(a,b){window.parent.postMessage(f(this.id,a,b),"*")},this.sendHeight=function(){var a=document.getElementsByTagName("body")[0].offsetHeight.toString();return this.sendMessage("height",a),a}.bind(this),this.getParentPositionInfo=function(){this.sendMessage("parentPositionInfo")},this.scrollParentTo=function(a){this.sendMessage("navigateTo","#"+a)},this.navigateParentTo=function(a){this.sendMessage("navigateTo",a)},this.scrollParentToChildEl=function(a){var b=document.getElementById(a).getBoundingClientRect().top+window.pageYOffset;this.scrollParentToChildPos(b)},this.scrollParentToChildPos=function(a){this.sendMessage("scrollToChildPos",a.toString())};this.remove=function(){window.removeEventListener("message",this._processMessage),this.timerId&&clearInterval(this.timerId)};for(var e in a)this.settings[e]=a[e];this.id=c("childId")||a.id,this.messageRegex=new RegExp("^pymxPYMx"+this.id+"xPYMx(\\\\S+)xPYMx(.*)$");var g=parseInt(c("initialWidth"));return this.parentUrl=c(this.settings.parenturlparam),this.parentTitle=c("parentTitle"),this.onMessage("width",this._onWidthMessage),window.addEventListener("message",this._processMessage,!1),this.settings.renderCallback&&this.settings.renderCallback(g),this.sendHeight(),this.settings.polling&&(this.timerId=window.setInterval(this.sendHeight,this.settings.polling)),function(a){var c,d=document.getElementsByTagName("html")[0],e=d.className;try{c=window.self!==window.top?"embedded":"not-embedded"}catch(a){c="embedded"}e.indexOf(c)<0&&(d.className=e?e+" "+c:c,a&&a(c),b("marked-embedded"))}(a.onMarkedEmbeddedStatus),this},"undefined"!=typeof document&&a.autoInit(!0),a});self.pymChild=new pym.Child();self.csc=function(){for(var b=-1,d=arguments.length,c=[],a="console.log(args)";++b<d;)c.push("args["+b+"]");a=new Function("args",a.replace(/args/,c.join(",")));a(arguments)};function parseFunction(a){function b(){return Function.apply(this,c)}var d=a.indexOf("{"),e=a.substring(d+1,a.lastIndexOf("}"));a=a.substring(0,d);var c=a.substring(a.indexOf("(")+1,a.lastIndexOf(")")).split(",");c.push(e);b.prototype=Function.prototype;return new b};document.body.style.height="auto";pymChild.onMessage("function",function(m){try{var d=JSON.parse(m),f=parseFunction(d.f);typeof f==="function"&&f.call()}catch(e){csc(e)}});pymsend=pymChild.sendMessage.bind(pymChild);pymon=pymChild.onMessage.bind(pymChild);pymsendheight=pymChild.sendHeight.bind(pymChild);pymons=function(o){o&&Object.keys(o).forEach(function(v){typeof o[v]==="function"&&pymChild.onMessage(v,o[v])})};if(!self.pcs_addFilter)!function(a){"use strict";var b=function(){function a(a,b,c,d){return"string"==typeof a&&"function"==typeof b&&(c=parseInt(c||10,10),h("actions",a,b,c,d)),k}function b(){var a=Array.prototype.slice.call(arguments),b=a.shift();return"string"==typeof b&&j("actions",b,a),k}function c(a,b){return"string"==typeof a&&g("actions",a,b),k}function d(a,b,c,d){return"string"==typeof a&&"function"==typeof b&&(c=parseInt(c||10,10),h("filters",a,b,c,d)),k}function e(){var a=Array.prototype.slice.call(arguments),b=a.shift();return"string"==typeof b?j("filters",b,a):k}function f(a,b){return"string"==typeof a&&g("filters",a,b),k}function g(a,b,c,d){if(l[a][b])if(c){var e,f=l[a][b];if(d)for(e=f.length;e--;){var g=f[e];g.callback===c&&g.context===d&&f.splice(e,1)}else for(e=f.length;e--;)f[e].callback===c&&f.splice(e,1)}else l[a][b]=[]}function h(a,b,c,d,e){var f={callback:c,priority:d,context:e},g=l[a][b];g?(g.push(f),g=i(g)):g=[f],l[a][b]=g}function i(a){for(var b,c,d,e=1,f=a.length;f>e;e++){for(b=a[e],c=e;(d=a[c-1])&&d.priority>b.priority;)a[c]=a[c-1],--c;a[c]=b}return a}function j(a,b,c){var d=l[a][b];if(!d)return"filters"===a?c[0]:!1;var e=0,f=d.length;if("filters"===a)for(;f>e;e++)c[0]=d[e].callback.apply(d[e].context,c);else for(;f>e;e++)d[e].callback.apply(d[e].context,c);return"filters"===a?c[0]:!0}var k={removeFilter:f,applyFilters:e,addFilter:d,removeAction:c,doAction:b,addAction:a},l={actions:{},filters:{}};return k};a.pcs_hooks=new b;a.pcs_addAction=a.pcs_hooks.addAction;a.pcs_doAction=a.pcs_hooks.doAction;a.pcs_addFilter=a.pcs_hooks.addFilter;a.pcs_applyFilters=a.pcs_hooks.applyFilters}(window);window.MutationObserver=window.MutationObserver||function(w){function v(a){this.i=[];this.m=a}function I(a){(function c(){var d=a.takeRecords();d.length&&a.m(d,a);a.h=setTimeout(c,v._period)})()}function p(a){var b={type:null,target:null,addedNodes:[],removedNodes:[],previousSibling:null,nextSibling:null,attributeName:null,attributeNamespace:null,oldValue:null},c;for(c in a)b[c]!==w&&a[c]!==w&&(b[c]=a[c]);return b}function J(a,b){var c=C(a,b);return function(d){var f=d.length,n;b.a&&3===a.nodeType&&a.nodeValue!==c.a&&d.push(new p({type:"characterData",target:a,oldValue:c.a}));b.b&&c.b&&A(d,a,c.b,b.f);if(b.c||b.g)n=K(d,a,c,b);if(n||d.length!==f)c=C(a,b)}}function L(a,b){return b.value}function M(a,b){return"style"!==b.name?b.value:a.style.cssText}function A(a,b,c,d){for(var f={},n=b.attributes,k,g,x=n.length;x--;)k=n[x],g=k.name,d&&d[g]===w||(D(b,k)!==c[g]&&a.push(p({type:"attributes",target:b,attributeName:g,oldValue:c[g],attributeNamespace:k.namespaceURI})),f[g]=!0);for(g in c)f[g]||a.push(p({target:b,type:"attributes",attributeName:g,oldValue:c[g]}))}function K(a,b,c,d){function f(b,c,f,k,y){var g=b.length-1;y=-~((g-y)/2);for(var h,l,e;e=b.pop();)h=f[e.j],l=k[e.l],d.c&&y&&Math.abs(e.j-e.l)>=g&&(a.push(p({type:"childList",target:c,addedNodes:[h],removedNodes:[h],nextSibling:h.nextSibling,previousSibling:h.previousSibling})),y--),d.b&&l.b&&A(a,h,l.b,d.f),d.a&&3===h.nodeType&&h.nodeValue!==l.a&&a.push(p({type:"characterData",target:h,oldValue:l.a})),d.g&&n(h,l)}function n(b,c){for(var g=b.childNodes,q=c.c,x=g.length,v=q?q.length:0,h,l,e,m,t,z=0,u=0,r=0;u<x||r<v;)m=g[u],t=(e=q[r])&&e.node,m===t?(d.b&&e.b&&A(a,m,e.b,d.f),d.a&&e.a!==w&&m.nodeValue!==e.a&&a.push(p({type:"characterData",target:m,oldValue:e.a})),l&&f(l,b,g,q,z),d.g&&(m.childNodes.length||e.c&&e.c.length)&&n(m,e),u++,r++):(k=!0,h||(h={},l=[]),m&&(h[e=E(m)]||(h[e]=!0,-1===(e=F(q,m,r,"node"))?d.c&&(a.push(p({type:"childList",target:b,addedNodes:[m],nextSibling:m.nextSibling,previousSibling:m.previousSibling})),z++):l.push({j:u,l:e})),u++),t&&t!==g[u]&&(h[e=E(t)]||(h[e]=!0,-1===(e=F(g,t,u))?d.c&&(a.push(p({type:"childList",target:c.node,removedNodes:[t],nextSibling:q[r+1],previousSibling:q[r-1]})),z--):l.push({j:e,l:r})),r++));l&&f(l,b,g,q,z)}var k;n(b,c);return k}function C(a,b){var c=!0;return function f(a){var k={node:a};!b.a||3!==a.nodeType&&8!==a.nodeType?(b.b&&c&&1===a.nodeType&&(k.b=G(a.attributes,function(c,f){if(!b.f||b.f[f.name])c[f.name]=D(a,f);return c})),c&&(b.c||b.a||b.b&&b.g)&&(k.c=N(a.childNodes,f)),c=b.g):k.a=a.nodeValue;return k}(a)}function E(a){try{return a.id||(a.mo_id=a.mo_id||H++)}catch(b){try{return a.nodeValue}catch(c){return H++}}}function N(a,b){for(var c=[],d=0;d<a.length;d++)c[d]=b(a[d],d,a);return c}function G(a,b){for(var c={},d=0;d<a.length;d++)c=b(c,a[d],d,a);return c}function F(a,b,c,d){for(;c<a.length;c++)if((d?a[c][d]:a[c])===b)return c;return-1}v._period=30;v.prototype={observe:function(a,b){for(var c={b:!!(b.attributes||b.attributeFilter||b.attributeOldValue),c:!!b.childList,g:!!b.subtree,a:!(!b.characterData&&!b.characterDataOldValue)},d=this.i,f=0;f<d.length;f++)d[f].s===a&&d.splice(f,1);b.attributeFilter&&(c.f=G(b.attributeFilter,function(a,b){a[b]=!0;return a}));d.push({s:a,o:J(a,c)});this.h||I(this)},takeRecords:function(){for(var a=[],b=this.i,c=0;c<b.length;c++)b[c].o(a);return a},disconnect:function(){this.i=[];clearTimeout(this.h);this.h=null}};var B=document.createElement("i");B.style.top=0;var D=(B="null"!=B.attributes.style.value)?L:M,H=1;return v}(void 0);(function(){var a=!1;pymons({sendHeight:function(){pymsendheight()},style:function(s){if(typeof s==="string"&&s){var stl=document.createElement("style");stl.appendChild(document.createTextNode(s));document.head.appendChild(stl)}},script:function(s){if(typeof s==="string"&&s){var sc = document.createElement("script");sc.type="text/javascript";sc.src=s;document.head.appendChild(sc)}},observe_mutations:function(){a||(a=!0,(new MutationObserver(function(a){a.forEach(function(b){if(b&&"childList"==b.type){var a={};b.target.id&&(a.id=b.target.id);b.target.className&&(a["class"]=b.target.className);typeof pym_mutation_childList==="function"&&pym_mutation_childList(a);pymsend("mutation_childList",JSON.stringify(a))}})})).observe(document.documentElement||document.body,{subtree:!0,childList:!0}))}})})();self.Talker||function(){var g=function(){function a(a){"undefined"!=typeof setImmediate?setImmediate(a):"undefined"!=typeof process&&process.nextTick?process.nextTick(a):setTimeout(a,0)}return function c(){var b,l=[],k=[],g=function(c,d){null==b&&null!=c&&(b=c,l=d,k.length&&a(function(){for(var a=0;a<k.length;a++)k[a]()}));return b};g.then=function(d,g){var f=c(),h=function(){try{var a=b?d:g;if("function"==typeof a){var c=function(a){var b,d=0;try{if(!a||"object"!=typeof a&&"function"!=typeof a||"function"!=typeof(b=a.then))f(!0,arguments);else{if(a===f)throw new TypeError;b.call(a,function(){d++||c.apply(void 0,arguments)},function(a){d++||f(!1,[a])})}}catch(n){d++||f(!1,[n])}};c(a.apply(void 0,l||[]))}else f(b,l)}catch(m){f(!1,[m])}};null!=b?a(h):k.push(h);return f};return g}}(),h=function(a){function b(){}b.prototype=a;return new b},b=function(a,b){this.remoteWindow=a;this.remoteOrigin=b;this.timeout=3E3;this.handshaken=!1;this.handshake=g();this._id=0;this._queue=[];this._sent={};var e=this;window.addEventListener("message",function(a){e._receiveMessage(a)},!1);this._sendHandshake();return this};b.prototype.send=function(a,e,c){a=new b.OutgoingMessage(this,a,e,c);var d=g();this._sent[a.id]=d;this._queue.push(a);this._flushQueue();setTimeout(function(){d(!1,[Error("timeout")])},this.timeout);return d};b.prototype._receiveMessage=function(a){try{var b=JSON.parse(a.data)}catch(c){b={}}return this._isSafeMessage(a.source,a.origin,b.type)?b.handshake||b.handshakeConfirmation?this._handleHandshake(b):this._handleMessage(b):!1};b.prototype._isSafeMessage=function(a,b,c){a=a===this.remoteWindow;b="*"===this.remoteOrigin||b===this.remoteOrigin;return a&&b&&"application/x-talkerjs-v1+json"===c};b.prototype._handleHandshake=function(a){a.handshake&&this._sendHandshake(this.handshaken);this.handshaken=!0;this.handshake(!0,[this.handshaken]);this._flushQueue()};b.prototype._handleMessage=function(a){var e=new b.IncomingMessage(this,a.namespace,a.data,a.id);return(a=a.responseToId)?this._respondToMessage(a,e):this._broadcastMessage(e)};b.prototype._respondToMessage=function(a,b){this._sent[a]&&(this._sent[a](!0,[b]),delete this._sent[a])};b.prototype._broadcastMessage=function(a){this.onMessage&&this.onMessage.call(this,a)};b.prototype._sendHandshake=function(a){var b={type:"application/x-talkerjs-v1+json"};b[a?"handshakeConfirmation":"handshake"]=!0;this._postMessage(b)};b.prototype._nextId=function(){return this._id+=1};b.prototype._postMessage=function(a){this.remoteWindow&&this.remoteOrigin&&this.remoteWindow.postMessage(JSON.stringify(a),this.remoteOrigin)};b.prototype._flushQueue=function(){if(this.handshaken){var a=this._queue.shift();if(!a)return this._queue;this._postMessage(a);if(0<this._queue.length)return this._flushQueue()}return this._queue};b.Message=function(a,b,c){this.talker=a;this.namespace=b;this.data=c;this.type="application/x-talkerjs-v1+json";return this};b.OutgoingMessage=function(a,e,c,d){b.Message.call(this,a,e,c);this.responseToId=d||null;this.id=this.talker._nextId()};b.OutgoingMessage.prototype=h(b.Message.prototype);b.OutgoingMessage.prototype.constructor=b.Message;b.OutgoingMessage.prototype.toJSON=function(){return{id:this.id,responseToId:this.responseToId,namespace:this.namespace,data:this.data,type:this.type}};b.IncomingMessage=function(a,e,c,d){b.Message.call(this,a,e,c);this.id=d};b.IncomingMessage.prototype=h(b.Message.prototype);b.IncomingMessage.prototype.constructor=b.Message;b.IncomingMessage.prototype.respond=function(a){return this.talker.send(null,a,this.id)};self.Talker=b}();self.talkerinst=self.talkerinit=function(){if(!self._talker_inst){var a=new Talker(window.parent,"*");a.actid="tki"+(new Date().getTime());a.onMessage=function(m){try{pcs_doAction("talker_onmessage"+a.actid,m,a)}catch(e){csc("talker_onmessage error",e,a)}};a.filter=function(clb){typeof clb==="function"&&pcs_addAction("talker_onmessage"+a.actid,clb)};self._talker_inst=a};return self._talker_inst};self.talkerfilter=function(clb){talkerinst().filter(clb)};self.talkersend=function(a,b){return talkerinst().send(a,b)};';d.head.appendChild(c);b.Talker=Talker;b.getTalker=function(){if(!b._talker){var a=new Talker(b.iframe.contentWindow,"*");a.actid="tki"+(new Date).getTime();a.onMessage=function(b){try{pcs_doAction("talker_onmessage"+a.actid,b,a)}catch(k){csc("talker_onmessage error",k,a)}};a.filter=function(b){"function"===typeof b&&pcs_addAction("talker_onmessage"+a.actid,b)};b._talker=a}return b._talker};a.trigger("loaded",b,b.sendMessage.bind(b),b.onMessage.bind(b),a.document,a.iframe)}};a.trigger("onload",b,a.iframe)}});if(c.load)a.on("mount",function(){if(self.pym)setTimeout(function(){a.trigger("load")},300);else var c=setInterval(function(){self.pym&&(clearInterval(c),a.trigger("load"))},400)})});var pymchprm="child",pymelprx="pymc-";k("pym-channel",'<pym-iframe id="{id}" full="{full}" load="1" loaded="{loaded}" url="{url}"></pym-iframe>',"","",function(a){var b=this,c=a.id,e=!a.full,d=appconf.iframe+"&"+pymchprm+"="+(e?"l":1);if(a.file&&"file:"===location.href.substring(0,5)){var f=d.split("?");f[1]&&(d=location.href.split("?")[0]+"?"+f[1])}c&&"string"===typeof c||(c=(new Date).getTime());b.id=pymelprx+c;b.full=!e;a.hidden&&(b.root.style="position: absolute;z-index:1000;top:-9999em;left:-9999em;width:0;height:0;visibility:hidden");b.url=d;b.loaded=function(a,c,d,e,f){b.trigger("loaded",a,c,d,e,f)}});
})();