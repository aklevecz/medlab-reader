(window["webpackJsonpqr-reader"]=window["webpackJsonpqr-reader"]||[]).push([[0],{17:function(n,e,t){n.exports=t(32)},22:function(n,e,t){},32:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),r=t(10),i=t.n(r),c=(t(22),t(4)),l=t(11),u=t.n(l),s=t(1),d=t(2);function p(){var n=Object(s.a)(["\n  display: block;\n  margin: auto;\n  text-align: center;\n  color: red;\n"]);return p=function(){return n},n}function f(){var n=Object(s.a)(["\n  margin: 0 auto;\n  text-align: center;\n  display: block;\n  text-overflow: ellipsis;\n  width: 46%;\n  overflow: hidden;\n  white-space: nowrap;\n  font-weight: bold;\n"]);return f=function(){return n},n}function m(){var n=Object(s.a)(["\n  margin: 0 auto;\n  text-align: center;\n  text-decoration: underline;\n  display: block;\n  font-size: 20px;\n"]);return m=function(){return n},n}function b(){var n=Object(s.a)(["\n  border: 3px black solid;\n  margin: 41px;\n  padding: 20px;\n"]);return b=function(){return n},n}function g(){var n=Object(s.a)(["\n  margin-top: 0px;\n"]);return g=function(){return n},n}function h(){var n=Object(s.a)(["\n  background: white;\n  color: black;\n  margin: 0 auto;\n  display: block;\n  font-size: 30px;\n  margin-top: 241px;\n"]);return h=function(){return n},n}var v=d.a.button(h()),w=Object(d.a)(v)(g()),k=d.a.div(b()),O=d.a.div(m()),j=d.a.div(f()),y=d.a.div(p()),E="http://localhost:4000";localStorage.setItem("ttoken","meepo");var S=function(){var n=Object(o.useState)(""),e=Object(c.a)(n,2),t=e[0],r=e[1],i=Object(o.useState)(localStorage.getItem("ttoken")),l=Object(c.a)(i,2),s=l[0],d=l[1],p=Object(o.useState)("black"),f=Object(c.a)(p,2),m=f[0],b=f[1],g=Object(o.useState)(""),h=Object(c.a)(g,2),S=h[0],x=h[1],T=function(){x("");var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"admin",password:"admin"})};fetch(E+"/auth/login",n).then(function(n){return n.json()}).then(function(n){localStorage.setItem("ttoken",n.token),console.log(n),d(n.token)})};return a.a.createElement("div",{className:"App"},!s&&a.a.createElement(v,{onClick:T},"AUTHENTICATE"),s&&a.a.createElement("div",null,a.a.createElement(u.a,{delay:300,onError:function(n){console.log(n)},onScan:function(n){n&&r(n)},style:{width:"100%"}}),a.a.createElement(k,null,a.a.createElement(O,null,t?"QR FOUND":"lookin for a QR..."),a.a.createElement(j,{style:{color:m}},t)),t&&a.a.createElement(w,{onClick:function(){x("");var n={method:"POST",headers:{Authorization:"Bearer ".concat(s),"Content-Type":"application/json"},body:JSON.stringify({qr:t})};fetch(E+"/toad/boop",n).then(function(n){return n.json()}).then(function(n){if("your session has expired"===n.message)return T(),void x("please try again");if("booped"===n.data){var e=new Date(n.boopTime),t=e.toLocaleTimeString()+"-"+e.toDateString();x("this was booped @ ".concat(t)),b("red")}else b("green")})}},"SEND IT"),a.a.createElement(y,null,S)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.15a6a585.chunk.js.map