(()=>{"use strict";var n={740:(n,t,e)=>{e.d(t,{A:()=>p});var i=e(601),o=e.n(i),a=e(314),r=e.n(a)()(o());r.push([n.id,'* {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  font-family: "Roboto", sans-serif;\n  color: #505050;\n}\n\n.content {\n  width: 1440px;\n  background-color: #f1f1f1;\n}\n\n.nav-top {\n  width: 1440px;\n  height: 64px;\n}\n.text-profile {\n  height: 24px;\n  margin-top: 20px;\n  margin-left: 32px;\n}\n.text-profile img {\n  width: 14px;\n  height: 9.64px;\n  margin-left: 5px;\n  margin-top: 7px;\n}\n.text-profile p {\n  font-weight: 500;\n  font-size: 18px;\n  margin-left: 9px;\n  margin-top: -2px;\n}\n.text-profile span {\n  font-weight: 400;\n}\n.statistic {\n  width: 242px;\n  height: 48px;\n  margin-top: 8px;\n  margin-right: 32px;\n}\n.statistic-element {\n  width: 56px;\n}\n.statistic-element img {\n  margin: 0px 0px 3px 20px;\n}\n.statistic-element p {\n  font-weight: 400;\n  font-size: 14px;\n  margin-top: 6px;\n}\n.statistic-element:nth-child(3) img {\n  margin: 0px 0px 3px 22px;\n}\n\n.nav-bottom {\n  background-color: #fafafa;\n  width: 1440px;\n  height: 40px;\n  margin-top: 1px;\n}\n\n.menu {\n  width: 286px;\n  height: 40px;\n  margin-left: 32px;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.menu-element p {\n  margin: 0;\n}\n.menu .menu-element:nth-child(1) {\n  width: 106px;\n}\n.menu .menu-element:nth-child(2) {\n  width: 88px;\n}\n.menu .menu-element:nth-child(3) {\n  width: 92px;\n}\n.menu-element:hover {\n  background-color: #f1f1f1;\n}\n\n.active-link {\n  background-color: #f1f1f1;\n}\n\n.menu-second {\n  width: 378px;\n  height: 40px;\n  margin-right: 32px;\n  font-weight: 400;\n  font-size: 14px;\n}\n.menu-second .menu-second-element:nth-child(1) {\n  width: 98px;\n  height: 40px;\n}\n.menu-second .menu-second-element:nth-child(2) {\n  width: 98px;\n  height: 40px;\n}\n.menu-second .menu-second-element:nth-child(3) {\n  width: 105px;\n  height: 40px;\n}\n.menu-second .menu-second-element:nth-child(4) {\n  width: 77px;\n  height: 40px;\n}\n\n.menu-second-element p {\n  margin: 0;\n}\n.menu-second-element:hover {\n  background-color: #f1f1f1;\n}\n\n.main {\n  background-color: #f1f1f1;\n  width: 1440px;\n  height: 912px;\n}\n\n.main-content {\n  background-color: #f1f1f1;\n  width: 1080px;\n  height: 848px;\n  margin-top: 32px;\n  margin-left: 32px;\n}\n.main-content-picture {\n  width: 1080px;\n  height: 672px;\n}\n.main-content-picture > img {\n  margin-top: 56px;\n  margin-left: 32px;\n}\n.main-content-picture-comment {\n  height: 24px;\n  margin-left: 32px;\n  margin-top: 16px;\n}\n.main-content-picture-comment > img {\n  margin-left: 4px;\n  margin-top: 5px;\n}\n.main-content-picture-comment > p {\n  font-weight: 400;\n  font-size: 14px;\n  color: #5095ec;\n  margin-top: 3px;\n  margin-left: 14px;\n}\n.main-content-picture-comment > p > span {\n  color: #505050;\n}\n\n.main-content-picture-text {\n  width: 1016px;\n  height: 64px;\n  margin-left: 32px;\n  margin-top: 16px;\n}\n.main-content-border {\n  width: 2px;\n  background-color: #d3d8de;\n  height: 63px;\n  position: absolute;\n}\n.main-content-picture-text > p {\n  font-weight: 400;\n  font-size: 14px;\n  margin-left: 10px;\n  line-height: normal;\n}\n.main-content-picture-text p:nth-child(3) {\n  color: #8f8f8f;\n}\n\n.main-content-picture-amount {\n  width: 141px;\n  height: 24px;\n  margin-left: 32px;\n  margin-top: 16px;\n}\n.eye {\n  width: 59px;\n  height: 24px;\n}\n.eye > img {\n  margin-top: 5px;\n  margin-left: 2px;\n}\n.eye p {\n  font-weight: 400;\n  font-size: 16px;\n}\n\n.com {\n  width: 50px;\n  height: 24px;\n}\n.com > img {\n  margin-left: 4px;\n  margin-top: 5px;\n}\n.com p {\n  font-weight: 400;\n  font-size: 16px;\n}\n\n.main-content-element {\n  width: 1080px;\n  height: 56px;\n  margin-top: 32px;\n}\n.main-content-element > p {\n  margin-top: 18px;\n  margin-left: 32px;\n  font-weight: 400;\n  font-size: 16px;\n}\n\n.main-content-element-rightblock {\n  width: 183px;\n  height: 24px;\n  margin-top: 16px;\n  margin-right: 32px;\n}\n.main-content-element-rightblock p {\n  font-weight: 400;\n  font-size: 16px;\n}\n.main-content-element-rightblock img:nth-child(1) {\n  margin-left: 3px;\n  margin-top: 3px;\n}\n\n.main-content-element-rightblock img:nth-child(3) {\n  margin-right: 5px;\n  margin-top: 8px;\n}\n\n.main-resume {\n  margin-top: 32px;\n  margin-left: 32px;\n  width: 264px;\n  height: 296px;\n}\n.main-resume > img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 32px;\n}\n.main-resume-text {\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  margin-top: 17.5px;\n  font-weight: 400;\n  font-size: 18px;\n  height: 45px;\n}\n.main-resume-text p {\n  margin: 0px;\n}\n.main-resume-text span {\n  font-size: 14px;\n  color: #8f8f8f;\n}\n.main-resume-icons {\n  margin-left: auto;\n  margin-right: auto;\n  width: 76px;\n  height: 20px;\n  margin-top: 17.5px;\n}\n\n.main-navigation {\n  width: 264px;\n  height: 312px;\n  margin-top: 32px;\n  margin-left: 32px;\n}\n.main-navigation-top {\n  height: 38px;\n  border-bottom: 1px solid #d3d8de;\n}\n.main-navigation-top-element {\n  height: 20px;\n  padding-top: 9px;\n}\n.main-navigation-top-element p {\n  font-weight: 500;\n  font-size: 14px;\n  margin-left: 16px;\n}\n.main-navigation-top-element > img {\n  margin-right: 22px;\n  margin-top: 7px;\n}\n\n.main-navigation-middle {\n  height: 160px;\n  border-bottom: 1px solid #d3d8de;\n}\n.main-navigation-middle-element {\n  margin-top: 16px;\n  height: 144px;\n}\n.main-navigation-middle-element-box {\n  width: 248px;\n  height: 24px;\n}\n.main-navigation-middle-element-box img {\n  margin-left: 16px;\n}\n.main-navigation-middle-element-box > img {\n  margin-top: 3px;\n}\n.main-navigation-middle-element-box p:nth-child(2) {\n  margin-left: 16px;\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 1px;\n}\n.MyProfile {\n  text-decoration: none;\n  color: #505050;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.balance {\n  font-size: 12px;\n  font-weight: 400;\n  margin-top: 3px;\n  margin-left: 103px;\n  color: #8f8f8f;\n}\n.connections {\n  width: 24px;\n  height: 16px;\n  margin-top: 4px;\n  background-color: #e33939;\n  text-align: center;\n  border-radius: 8px;\n  margin-left: 94px;\n}\n.connections p {\n  font-family: "VTB Group Book";\n  font-size: 12px;\n  font-weight: 400;\n  color: white;\n  margin-top: -1px;\n}\n\n.main-navigation-bottom-element {\n  margin-top: 16px;\n  height: 64px;\n}\n.events {\n  width: 24px;\n  height: 16px;\n  margin-top: 4px;\n  background-color: #47b091;\n  text-align: center;\n  border-radius: 8px;\n  margin-left: 133px;\n}\n.events p {\n  font-family: "VTB Group Book";\n  font-size: 12px;\n  font-weight: 400;\n  color: white;\n  margin-top: -1px;\n}\n\n.main-share {\n  width: 264px;\n  height: 190px;\n  margin-top: 32px;\n  margin-left: 32px;\n}\n.main-share-top {\n  height: 38px;\n  border-bottom: 1px solid #d3d8de;\n}\n\n.message {\n  margin-left: 16px;\n  margin-top: 28px;\n  width: 232px;\n  height: 88px;\n  color: #8f8f8f;\n  border-radius: 4px;\n  border: 1px solid #d3d8de;\n  padding-left: 16px;\n  padding-top: 8px;\n  font-size: 14px;\n  font-weight: 400;\n  resize: none;\n}\nbutton {\n  width: 232px;\n  height: 32px;\n  margin-left: 16px;\n  margin-top: 8px;\n  background-color: #5095ec;\n  border-radius: 4px;\n  color: white;\n  border: none;\n  font-size: 14px;\n  font-weight: 500;\n}\n/* 478 */\n',""]);const p=r},872:(n,t,e)=>{e.d(t,{A:()=>p});var i=e(601),o=e.n(i),a=e(314),r=e.n(a)()(o());r.push([n.id,".main-map {\n  background-color: #f1f1f1;\n  width: 1440px;\n  height: 660px;\n}\n\n.main-content-map {\n  width: 1376px;\n  height: 568px;\n}\n.navigation-second-page {\n  width: 1376px;\n  height: 56px;\n}\n.navigation-second-page p {\n  font-size: 16px;\n  font-weight: 400;\n  margin-top: 18px;\n  margin-left: 32px;\n}\n.navigation-second-page-icons {\n  width: 88px;\n  height: 24px;\n  margin-top: 16px;\n  margin-right: 32px;\n}\n.navigation-second-page-icons img:nth-child(1) {\n  margin-top: 7.87px;\n}\n.navigation-second-page-icons img:nth-child(2) {\n  margin-top: 4.4px;\n  margin-left: 5px;\n}\n.navigation-second-page-icons img:nth-child(3) {\n  margin-top: 5.3px;\n  margin-right: 5px;\n}\n\n.main-content-map-element {\n  width: 1312px;\n  height: 480px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n  .rotate-svg {\n    animation: spin 2s linear infinite;\n    position: absolute;\n    top: 92px;\n    left: 588px;\n    width: 200px;\n    height: 200px;\n  }\n  \n  @keyframes spin {\n    from { transform: rotate(0deg); }\n    to { transform: rotate(360deg); }\n  }\n\n.main-content-timer {\n  width: 1376px;\n  height: 67px;\n  padding-left: 32px;\n  padding-top: 18px;\n}\n",""]);const p=r},251:(n,t,e)=>{e.d(t,{A:()=>p});var i=e(601),o=e.n(i),a=e(314),r=e.n(a)()(o());r.push([n.id,"body {\n    background-color: #f4f4f9;\n    margin: 0;\n    padding: 0;\n}\n\n.card {\n    border-radius: 10px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    max-width: 400px\n}\n\n.MyPhoto {\n    width: 70px;\n    height: 70px\n}",""]);const p=r},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",i=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),i&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),i&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,i,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(i)for(var p=0;p<this.length;p++){var c=this[p][0];null!=c&&(r[c]=!0)}for(var s=0;s<n.length;s++){var m=[].concat(n[s]);i&&r[m[0]]||(void 0!==a&&(void 0===m[5]||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=a),e&&(m[2]?(m[1]="@media ".concat(m[2]," {").concat(m[1],"}"),m[2]=e):m[2]=e),o&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=o):m[4]="".concat(o)),t.push(m))}},t}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,i=0;i<t.length;i++)if(t[i].identifier===n){e=i;break}return e}function i(n,i){for(var a={},r=[],p=0;p<n.length;p++){var c=n[p],s=i.base?c[0]+i.base:c[0],m=a[s]||0,g="".concat(s," ").concat(m);a[s]=m+1;var l=e(g),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)t[l].references++,t[l].updater(d);else{var h=o(d,i);i.byIndex=p,t.splice(p,0,{identifier:g,updater:h,references:1})}r.push(g)}return r}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=i(n=n||[],o=o||{});return function(n){n=n||[];for(var r=0;r<a.length;r++){var p=e(a[r]);t[p].references--}for(var c=i(n,o),s=0;s<a.length;s++){var m=e(a[s]);0===t[m].references&&(t[m].updater(),t.splice(m,1))}a=c}}},659:n=>{var t={};n.exports=function(n,e){var i=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var i="";e.supports&&(i+="@supports (".concat(e.supports,") {")),e.media&&(i+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(i+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),i+=e.css,o&&(i+="}"),e.media&&(i+="}"),e.supports&&(i+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(i,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={id:i,exports:{}};return n[i](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var i in t)e.o(t,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:t[i]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.p="/",e.nc=void 0,(()=>{var n=e(72),t=e.n(n),i=e(825),o=e.n(i),a=e(659),r=e.n(a),p=e(56),c=e.n(p),s=e(540),m=e.n(s),g=e(113),l=e.n(g),d=e(740),h={};h.styleTagTransform=l(),h.setAttributes=c(),h.insert=r().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=m(),t()(d.A,h),d.A&&d.A.locals&&d.A.locals;var f=e(872),x={};x.styleTagTransform=l(),x.setAttributes=c(),x.insert=r().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=m(),t()(f.A,x),f.A&&f.A.locals&&f.A.locals;var u=e(251),v={};v.styleTagTransform=l(),v.setAttributes=c(),v.insert=r().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=m(),t()(u.A,v),u.A&&u.A.locals&&u.A.locals;const b=e.p+"5bcc21ce98a8ee966de3.svg",w=e.p+"ef45d68b7b82f1a955dd.svg",y=e.p+"f61c7acca4b14853483d.svg",k=e.p+"e4863a9d634390fd0341.svg",A=e.p+"d32a34a249d37b68c451.svg",z=e.p+"2ba7b47516c865a3b16b.svg",M=e.p+"43f07164f43efeaf9333.svg",S=e.p+"657d6c4820ee91057c8d.svg",T=e.p+"49eb7908045682850d61.svg",E=e.p+"0a38385161cd842216e8.svg",C=e.p+"9ee73f48e51b763715e7.svg",L=e.p+"74a62c2234b5c4a53e60.svg",I=e.p+"71362245bb4fa2fa12e6.svg",P=e.p+"6bea5a8b0c224e1eb018.svg",N=e.p+"6bea5a8b0c224e1eb018.svg",O=e.p+"dae461f093661f6d7f2b.svg",j=e.p+"71e4693e76012524cad1.svg",q=e.p+"71e4693e76012524cad1.svg",B=e.p+"0362c44ccd81735fb683.svg",D=e.p+"0362c44ccd81735fb683.svg",F=e.p+"1b68103d706d7258fc02.svg",$=e.p+"2916661d73f563967bbd.svg",R=e.p+"27e1f10090d70b7a3470.svg",U=e.p+"7f347fde5cf44d95be76.svg",H=e.p+"03fe3ed6e6116444fe2f.svg",_=e.p+"1ecbeb0078fa7c1f8ffc.svg",G=e.p+"6ced695ee2692856b120.svg",V=e.p+"68e326360ae3e01a7458.svg",J=e.p+"f3c4d8d3cf7a6c306620.svg",K=e.p+"ea0805414ad8e929337f.svg",Q=e.p+"974089e88f248bf6da35.svg",W=e.p+"974089e88f248bf6da35.svg";function X(){const n=document.getElementById("yandexMap");if(n){const t="6a908e9c-0098-41ec-b77b-eaf5ed35026f",e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=`https://api-maps.yandex.ru/2.1/?apikey=${t}&lang=ru_RU`,e.onload=function(){ymaps.ready(Y),function(){const n=document.querySelector(".rotate-svg");n&&(n.style.display="none")}()},n.appendChild(e)}else console.error("Map container not found!")}function Y(){const n=new ymaps.Map("yandexMap",{center:[55.751574,37.573856],zoom:9});new ymaps.geocode("Москва",{results:1}).then((function(t){const e=t.geoObjects.get(0),i=e.geometry.getCoordinates();n.geoObjects.add(e),n.setCenter(i)}))}function Z(n,t){fetch(n).then((n=>n.text())).then((n=>{document.querySelector(".main").innerHTML=n,t&&t()})).catch((n=>console.error("Failed to load page: ",n)))}function nn(n){switch(n){case"activity":Z("activity.html");break;case"map":Z("map.html",X);break;case"time":Z("timer.html");break;default:console.log("Unknown page:",n)}}document.addEventListener("DOMContentLoaded",(()=>{const n=document.querySelectorAll(".menu-element");n.forEach((t=>{t.addEventListener("click",(function(){n.forEach((n=>n.classList.remove("active-link"))),this.classList.add("active-link");const t=this.textContent.trim().toLowerCase();nn(t),history.pushState({page:t},"",`#${t}`)}))})),window.addEventListener("popstate",(n=>{nn(n.state?n.state.page:"activity")})),nn(window.location.hash.substring(1)||"activity")})),document.addEventListener("DOMContentLoaded",(function(){nn(),function(){let n=(new Date).getTime();function t(n){return String(n).padStart(2,"0")}setInterval((function(){const e=(new Date).getTime()-n,i=Math.floor(e/1e3%60),o=Math.floor(e/1e3/60%60),a=Math.floor(e/36e5%24),r=document.querySelector(".timer-display");r&&(r.textContent=`${t(a)}:${t(o)}:${t(i)}`)}),1e3)}(),X(),[{selector:'img[alt="arrow"]',src:b},{selector:'img[alt="Statistics"]',src:w},{selector:'img[alt="Invoices"]',src:y},{selector:'img[alt="Schedule"]',src:k},{selector:'img[alt="Activity"]',src:A},{selector:'img[alt="Map"]',src:z},{selector:'img[alt="Time"]',src:M},{selector:'img[alt="Notes"]',src:S},{selector:'img[alt="Friends"]',src:T},{selector:'img[alt="Photos"]',src:E},{selector:'img[alt="Settings"]',src:C},{selector:'img[alt="Arrow2"]',src:L},{selector:'img[alt="art"]',src:I},{selector:'img[alt="comment"]',src:P},{selector:'img[alt="comment2"]',src:N},{selector:'img[alt="eye"]',src:O},{selector:'img[alt="time"]',src:j},{selector:'img[alt="time2"]',src:q},{selector:'img[alt="arrow3"]',src:B},{selector:'img[alt="arrow4"]',src:D},{selector:'img[alt="telegramm"]',src:F},{selector:'img[alt="hh"]',src:$},{selector:'img[alt="twitter"]',src:R},{selector:'img[alt="Profile"]',src:H},{selector:'img[alt="Balance"]',src:_},{selector:'img[alt="Connections"]',src:G},{selector:'img[alt="FriendsNav"]',src:V},{selector:'img[alt="Events"]',src:J},{selector:'img[alt="settings"]',src:K},{selector:'img[alt="Arrow3Nav"]',src:Q},{selector:'img[alt="Arrow4Nav"]',src:W},{selector:'img[alt="Avatar"]',src:U}].forEach((({selector:n,src:t})=>{((n,t)=>{const e=document.querySelector(n);e&&(e.src=t)})(n,t)}))}))})()})();