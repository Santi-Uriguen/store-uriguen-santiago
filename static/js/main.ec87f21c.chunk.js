(this["webpackJsonpstore-uriguen-santiago"]=this["webpackJsonpstore-uriguen-santiago"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),r=c(9),i=c.n(r),o=(c(15),c.p+"static/media/aerolab-logo.0a8fb170.svg"),d=c.p+"static/media/coin.b8bc711d.svg",u=c.p+"static/media/history.eb963fad.svg",l=c.p+"static/media/home.889aba4f.svg",j=c.p+"static/media/add-button.10809d1a.svg",h=c.p+"static/media/close.673245e0.svg",p=c.p+"static/media/header-x1.b6f067c6.png",b=c(3),O=c(2),m=c.n(O),f=c(4),g=c(6),v=c(7),x=function(){function e(){Object(g.a)(this,e)}return Object(v.a)(e,null,[{key:"getUserInfo",value:function(){var e=Object(f.a)(m.a.mark((function e(){var t,c,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:this.headers},e.prev=1,e.next=4,fetch("https://coding-challenge-api.aerolab.co/user/me",t);case 4:if(200===(c=e.sent).status){e.next=7;break}throw new Error(c);case 7:return e.next=9,c.json();case 9:return n=e.sent,e.abrupt("return",n);case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,this,[[1,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"addPoints",value:function(e){var t=new XMLHttpRequest;t.open("POST","https://coding-challenge-api.aerolab.co/user/points"),t.setRequestHeader("Content-Type","application/json"),t.setRequestHeader("Accept","application/json"),t.setRequestHeader("Authorization",this.headers.Authorization);var c={amount:e};t.send(JSON.stringify(c))}}]),e}();x.headers={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc0ZTFjNDc2NmZiNTAwMjRhYTg3OTYiLCJpYXQiOjE2MTgyNzI3MDh9.d_OkCE--ik9X6lupRN-peFbHfc6wNKQKGeH10YknKFg"};var N=a.a.createContext();function y(e){var t=e.children,c=Object(s.useState)({name:"",points:"",redeemHistory:[]}),a=Object(b.a)(c,2),r=a[0],i=a[1],o=function(){var e=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getUserInfo();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){o()}),[r]),Object(n.jsx)(N.Provider,{value:{user:r,setUser:i,pointsAdder:function(e){x.addPoints(e)}},children:t})}var I=function(){function e(){Object(g.a)(this,e)}return Object(v.a)(e,null,[{key:"getProducts",value:function(){var e=Object(f.a)(m.a.mark((function e(t){var c,n,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={headers:this.headers},e.prev=1,e.next=4,fetch("https://coding-challenge-api.aerolab.co/products",c);case 4:if(200===(n=e.sent).status){e.next=7;break}throw new Error(n);case 7:return e.next=9,n.json();case 9:s=e.sent,e.t0=t,e.next=1===e.t0?13:2===e.t0?15:3===e.t0?17:19;break;case 13:return s=s.sort((function(e,t){return e.category>t.category?1:e.category<t.category?-1:0})),e.abrupt("return",s);case 15:return s=s.sort((function(e,t){return e.cost>t.cost?1:e.cost<t.cost?-1:0})),e.abrupt("return",s);case 17:return s=s.sort((function(e,t){return e.cost<t.cost?1:e.cost>t.cost?-1:0})),e.abrupt("return",s);case 19:return e.abrupt("return",s);case 20:e.next=25;break;case 22:e.prev=22,e.t1=e.catch(1),console.log(e.t1);case 25:case"end":return e.stop()}}),e,this,[[1,22]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getHistory",value:function(){var e=new XMLHttpRequest;return e.open("GET","https://coding-challenge-api.aerolab.co/user/history",!1),e.setRequestHeader("Content-Type","application/json"),e.setRequestHeader("Accept","application/json"),e.setRequestHeader("Authorization","Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc0ZTFjNDc2NmZiNTAwMjRhYTg3OTYiLCJpYXQiOjE2MTgyNzI3MDh9.d_OkCE--ik9X6lupRN-peFbHfc6wNKQKGeH10YknKFg"),e.send(),e.response}}]),e}();I.headers={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDYzMzUxMWEyNGI1NzAwMjBjNmM3MTgiLCJpYXQiOjE2MTcxMTQzODV9.yyna3Evs1zqxQ6uU9w9PjmdvhRLgtoOpvdkcmjajG-U"};var C=a.a.createContext();function k(e){var t=e.children,c=Object(s.useState)([]),a=Object(b.a)(c,2),r=a[0],i=a[1],o=function(){var e=Object(f.a)(m.a.mark((function e(t){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.getProducts(t);case 2:c=e.sent,i(c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){o()}),[]),Object(n.jsx)(C.Provider,{value:{prod:r,filterFunction:function(e){o(e)},showHistory:function(e){if("home"===e){var t=I.getHistory();t=JSON.parse(t),i(t)}else o()}},children:t})}function w(){var e=Object(s.useContext)(N),t=e.user,c=e.pointsAdder,a=Object(s.useContext)(C).showHistory,r=function(){var e=document.getElementById("addList");"addListHid"===e.className?e.className="addListShow":e.className="addListHid"},i=function(e){var t=parseInt(e.target.value);c(t)};return Object(n.jsxs)("header",{className:"header",children:[Object(n.jsxs)("section",{className:"upBar",children:[Object(n.jsx)("img",{src:o,alt:"logo",id:"headerLogo"}),Object(n.jsxs)("div",{className:"upBarInfo",children:[Object(n.jsx)("h3",{children:t.name}),Object(n.jsxs)("div",{className:"user",children:[Object(n.jsx)("p",{children:t.points}),Object(n.jsx)("img",{src:d,alt:"coin icon"})]}),Object(n.jsx)("img",{src:u,alt:"history logo",onClick:function(e){var t=document.getElementById("prodContainer"),c=document.getElementById("headContainer"),n=document.getElementById("footerContainer");"history"===e.target.id?(e.target.id="home",e.target.src=l,a("home"),t.className="historyContainer",c.className="historyHead",n.className="historyFooter"):(e.target.id="history",e.target.src=u,a("history"),t.className="prodContainer",c.className="head",n.className="footer")},className:"headerBtn",id:"history"}),Object(n.jsxs)("div",{className:"addBtn",children:[Object(n.jsx)("img",{src:j,alt:"add button",className:"headerBtn",onClick:r}),Object(n.jsxs)("div",{className:"addListHid",id:"addList",children:[Object(n.jsxs)("div",{className:"addHead",children:[Object(n.jsx)("h3",{children:"Choose the amount"}),Object(n.jsx)("img",{src:h,onClick:r,alt:"close button"})]}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{value:"1000",onClick:i,children:"1000"}),Object(n.jsx)("li",{value:"5000",onClick:i,children:"5000"}),Object(n.jsx)("li",{value:"7500",onClick:i,children:"7500"})]})]})]})]})]}),Object(n.jsxs)("section",{className:"banner",children:[Object(n.jsx)("img",{src:p,alt:"banner electronics"}),Object(n.jsx)("h1",{children:"Electr\xf3nica"})]})]})}function T(){var e=Object(s.useState)(),t=Object(b.a)(e,2),c=t[0],a=t[1];return Object(n.jsx)("div",{onClick:function(){var e=document.getElementById("pageOne"),t=document.getElementById("pageTwo"),n=document.getElementById("counterUp"),s=document.getElementById("counterDown"),r=document.getElementsByClassName("pageButton");if(e.classList.toggle("hidden"),t.classList.toggle("hidden"),a(!c),n.innerHTML=c?"16 of 32 products":"32 of 32 products",s.innerHTML=c?"16 of 32 products":"32 of 32 products",!0===c)for(var i=0;i<2;i++)r[i].className="pageButton right";else for(var o=0;o<2;o++)r[o].className="pageButton left"},alt:"arrow",className:"pageButton right"})}var M=c.p+"static/media/arrow-up-solid.7a565b5f.svg",H=c.p+"static/media/arrow-down-solid.e9ce41eb.svg",E=c.p+"static/media/category.95e69101.svg";function R(){var e=Object(s.useContext)(C).filterFunction,t=function(t){var c=parseInt(t.target.value);e(c)};return Object(n.jsxs)("div",{className:"filters",children:[Object(n.jsxs)("button",{onClick:t,value:1,className:"filter",children:[Object(n.jsx)("img",{src:E,value:1,alt:"category icon"}),"Category"]}),Object(n.jsxs)("button",{className:"filter",onClick:t,value:2,children:[Object(n.jsx)("img",{src:H,alt:"arrow down icon"})," Cost"]}),Object(n.jsxs)("button",{className:"filter",onClick:t,value:3,children:[Object(n.jsx)("img",{src:M,alt:"arrow up icon"})," Cost"]})]})}function B(){return Object(n.jsxs)("section",{className:"head",id:"headContainer",children:[Object(n.jsx)("h2",{children:"Redeem history"}),Object(n.jsx)("div",{id:"counterUp",children:"16 of 32 products"}),Object(n.jsx)("span",{}),Object(n.jsx)(R,{}),Object(n.jsx)(T,{})]})}var J=c(5),L=c.p+"static/media/buy-blue.a015e192.svg",z=c.p+"static/media/buy-white.aecff4be.svg",A=c.p+"static/media/check.d6c14971.svg",F=c.p+"static/media/fail.b811ab71.svg";function D(e){var t=Object(s.useState)("hoverInfo"),c=Object(b.a)(t,2),a=c[0],r=c[1],i=Object(s.useState)(L),o=Object(b.a)(i,2),u=o[0],l=o[1],j=Object(s.useContext)(N).user,h=function(){l(u===L?z:L)};return Object(n.jsxs)("div",{className:"card",onMouseEnter:h,onMouseLeave:h,onTouchStart:function(){var e=document.getElementsByClassName("hoverInfoMobile");if(e.length>0)for(var t=0;t<e.length;t++)e[t].className="hoverInfo";r("hoverInfoMobile"===a?"hoverInfo":"hoverInfoMobile")},children:[Object(n.jsxs)("div",{className:"redeem",children:[Object(n.jsx)("div",{className:"redeemable",children:e.cost>j.points?Object(n.jsxs)("div",{className:"noPoints",children:["You need ",e.cost-j.points,Object(n.jsx)("img",{src:d,alt:"coin"})]}):Object(n.jsx)("img",{src:u,alt:"buy icon"})}),Object(n.jsxs)("div",{className:a,id:"hoverInfo",children:[Object(n.jsxs)("div",{className:"priceInfo",children:[Object(n.jsx)("h2",{children:e.cost}),Object(n.jsx)("img",{src:d,alt:"coin"})]}),e.cost>j.points?Object(n.jsx)("span",{}):Object(n.jsx)("button",{onClick:function(){var t=new XMLHttpRequest;t.open("POST","https://coding-challenge-api.aerolab.co/redeem"),t.setRequestHeader("Content-Type","application/json"),t.setRequestHeader("Accept","application/json"),t.setRequestHeader("Authorization","Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDc0ZTFjNDc2NmZiNTAwMjRhYTg3OTYiLCJpYXQiOjE2MTgyNzI3MDh9.d_OkCE--ik9X6lupRN-peFbHfc6wNKQKGeH10YknKFg");var c={productId:e._id};t.send(JSON.stringify(c)),t.onreadystatechange=function(){4===this.readyState&&(200===t.status?(r("successfullRedeem"),setTimeout((function(){r("hoverInfo")}),2500)):(r("failRedeem"),setTimeout((function(){r("hoverInfo")}),2500)))}},children:"Redeem now"}),Object(n.jsx)("img",{src:A,alt:"success check icon",className:"successCheck",id:"check"}),Object(n.jsx)("img",{src:F,alt:"failure icon",className:"failCheck",id:"fail"})]})]}),Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:e.img.url,alt:e.name})}),Object(n.jsx)("span",{}),Object(n.jsxs)("div",{className:"cardData",children:[Object(n.jsx)("p",{children:e.category}),Object(n.jsx)("h4",{children:e.name})]})]})}function S(){var e=Object(s.useContext)(C).prod;return Object(n.jsxs)("section",{className:"prodContainer",id:"prodContainer",children:[Object(n.jsx)("div",{className:"product-container",id:"pageOne",children:e&&e.map((function(e,t){return t<=15?Object(s.createElement)(D,Object(J.a)(Object(J.a)({},e),{},{key:"".concat(e._id,"-").concat(t)})):""}))}),Object(n.jsx)("div",{className:"product-container hidden",id:"pageTwo",children:e&&e.map((function(e,t){return t>15?Object(s.createElement)(D,Object(J.a)(Object(J.a)({},e),{},{key:"".concat(e._id,"-").concat(t)})):""}))})]})}function Y(){return Object(n.jsxs)("section",{className:"footer",id:"footerContainer",children:[Object(n.jsxs)("div",{className:"footerInfo",children:[Object(n.jsx)("div",{id:"counterDown",children:"16 of 32 products"}),Object(n.jsx)(T,{})]}),Object(n.jsx)("span",{})]})}function X(){return Object(n.jsxs)("main",{children:[Object(n.jsx)(B,{}),Object(n.jsx)(S,{}),Object(n.jsx)(Y,{})]})}c(17);var q=function(){return Object(n.jsx)(y,{children:Object(n.jsx)(k,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(w,{}),Object(n.jsx)(X,{})]})})})},Q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(q,{})}),document.getElementById("root")),Q()}},[[18,1,2]]]);
//# sourceMappingURL=main.ec87f21c.chunk.js.map