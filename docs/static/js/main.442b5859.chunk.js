(window["webpackJsonpqr-reader"]=window["webpackJsonpqr-reader"]||[]).push([[0],{16:function(n,e,t){n.exports=t(32)},21:function(n,e,t){},32:function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),a=t(10),c=t.n(a),i=(t(21),t(1)),u=(t(22),t(3)),l=t(4);function s(){var n=Object(u.a)(["\n    background: black;\n    color: white;\n    width: 330px;\n    height: 150px;\n    text-align: center;\n    display: block;\n    margin: auto;\n    font-size: 49px;\n"]);return s=function(){return n},n}function p(){var n=Object(u.a)(["\nmargin-top:10px;\n"]);return p=function(){return n},n}function d(){var n=Object(u.a)(["\n    &.rsvp {\n        text-align: center;\n        font-size: 30px;\n        padding:22px;\n        text-decoration: ","\n    }\n    &.raptor {\n        color:deeppink;\n    }\n    &#selected{\n        background:limegreen;\n    }\n"]);return d=function(){return n},n}function f(){var n=Object(u.a)(["\n    display:flex;\n    background:black;\n    color:white;\n    justify-content: center;\n    flex-direction: column;\n    width: 90%;\n    margin: auto;\n"]);return f=function(){return n},n}function h(){var n=Object(u.a)(["\n    width: 90%;\n    display: block;\n    margin: 40px auto 16px;\n    border: 2px black solid;\n    height: 47px;\n    font-size: 30px;\n    text-align: center;\n"]);return h=function(){return n},n}var m=l.a.input(h()),b=l.a.div(f()),g=l.a.div(d(),function(n){return n.boop}),v=l.a.div(p()),j=l.a.button(s()),O="http://localhost:4000";var k=function(){var n=Object(o.useRef)(""),e=Object(o.useState)(""),t=Object(i.a)(e,2),a=(t[0],t[1],Object(o.useState)(localStorage.getItem("ttoken"))),c=Object(i.a)(a,2),u=c[0],l=c[1],s=Object(o.useState)([]),p=Object(i.a)(s,2),d=p[0],f=p[1],h=Object(o.useState)([]),k=Object(i.a)(h,2),w=(k[0],k[1],Object(o.useState)("")),x=Object(i.a)(w,2),y=x[0],E=x[1],S=Object(o.useState)(""),C=Object(i.a)(S,2),T=C[0],N=C[1],z=function(){var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"reader",password:"reader"})};fetch(O+"/auth/login",n).then(function(n){return n.json()}).then(function(n){l(n.token),localStorage.setItem("ttoken",n.token)})},A=function(){var n={method:"GET",headers:{Authorization:"Bearer ".concat(u),"Content-Type":"application/json"}};fetch(O+"/user",n).then(function(n){return n.json()}).then(function(n){console.log(n);var e=n.raptors.choosers,t=n.rsvps.rsvps.concat(e);f(t)})};return Object(o.useEffect)(function(){A(),z()},[]),console.log(d),r.a.createElement("div",{className:"App"},r.a.createElement(j,{onClick:z},"AUTH"),r.a.createElement(m,{placeholder:"SEARCH",ref:n,onChange:function(n){return N(n.target.value)}}),r.a.createElement(b,null,d.map(function(n,e){if(n.email.includes(T))return r.a.createElement(g,{key:n.email+e,onClick:function(n){return E({email:n.target.innerHTML,raptor:n.target.className.split("raptor")[0]})},id:n.email===y.email?"selected":"",className:n.raptorname?"raptor rsvp":"rsvp",boop:n.boop?"line-through":""},n.email)})),r.a.createElement(v,null,r.a.createElement(j,{onClick:function(){var n={method:"POST",headers:{Authorization:"Bearer ".concat(u),"Content-Type":"application/json"},body:JSON.stringify({email:y.email,raptor:y.raptor})};fetch(O+"/rsvp/boopemail",n).then(function(n){return n.json()}).then(function(n){A()})}},"CHECKIN")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.442b5859.chunk.js.map