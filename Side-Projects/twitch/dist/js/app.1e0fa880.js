(function(t){function e(e){for(var o,a,i=e[0],s=e[1],u=e[2],f=0,d=[];f<i.length;f++)a=i[f],r[a]&&d.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},c=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("41f5")},"41f5":function(t,e,n){"use strict";n.r(e);n("4351"),n("ac29"),n("f6f0"),n("5bcf"),n("7dc0"),n("6ad8"),n("877a");var o=function(){var t=["freecodecamp","storbeck","terakilobyte","habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];t.forEach(function(t,e){var n=function(t,e){return"https://wind-bow.gomix.me/twitch-api/".concat(t,"/").concat(e,"?callback=?")};$.getJSON(n("streams",t),function(){$.getJSON(n("channels",t),function(t){var n=document.querySelector(".card-content .content"),o=t.status?"online":"offline";n.innerHTML+='<div status="'.concat(o,'" class="item" id="item-').concat(e,'">\n          <img class="image" src="').concat(t.logo,'" alt="">\n          <div class="flag ').concat(o,'"></div>\n          <a class="link" href="').concat(t.url,'" target="_blank">').concat(t.name,'</a>\n          <p class="description">\n            ').concat(t.status?t.status:"offline","\n          </p>\n        </div>"),r()})})})},r=function(){var t=document.querySelectorAll(".item"),e=function(t,e){var n=document.querySelector("#".concat(t," .description"));"start"===e?n.classList.add("des-animate"):"stop"===e&&n.classList.remove("des-animate")};t.forEach(function(t){t.onmouseover=function(){e(t.id,"start")},t.onmouseout=function(){e(t.id,"stop")}})},c=function(t){var e=document.querySelectorAll(".item");e.forEach(function(e){var n=e.getAttribute("status");t===n||"all"===t?e.classList.remove("disabled"):e.classList.add("disabled")})},a=function(){var t=document.querySelectorAll(".card-footer-item");t.forEach(function(t){t.addEventListener("click",function(){var e=document.querySelector(".is-active");e.classList.remove("is-active"),t.classList.add("is-active"),c(t.id)})})};o(),a()},"877a":function(t,e,n){}});
//# sourceMappingURL=app.1e0fa880.js.map