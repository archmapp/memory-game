(this["webpackJsonpmagic-memory"]=this["webpackJsonpmagic-memory"]||[]).push([[0],[,,,,,,,,,,function(e,s,c){},function(e,s,c){},function(e,s,c){},,function(e,s,c){},function(e,s,c){"use strict";c.r(s);var t=c(1),i=c.n(t),a=c(5),n=c.n(a),r=(c(10),c(3)),l=c(2),d=(c(11),c(12),function(e){return e="#"===e.substring(0,1)?e.substring(1):e,document.getElementById(e)}),j=function(e){return document.querySelector(e)},h=function(e,s){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"click";e.addEventListener(c,s)},o=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"is-active",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"toggle";return j(e).classList[c](s)},b=function(e,s){var c=s.selT,t=s.cN,i=void 0===t?"is-active":t,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"toggle",n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];m(j(e),{trgt:j(c),cN:i},a,n)},m=function(e,s){var c=s.trgt,t=s.cN,i=void 0===t?"is-active":t,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"toggle",n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];h(e,(function(e){n&&e.stopPropagation(),c.classList[a](i)}))},x={Id:d,oe:h,qcL:o,qcLm:b,ocLm:m},u=c(0);var p=function(){return Object(t.useEffect)((function(){x.oe(document,(function(e){"Escape"===e.key&&x.qcL(".quickT")}),"keyup"),x.qcLm("#quick",{selT:".quickT"})}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("article",{children:Object(u.jsx)("div",{className:"quickview quickT",children:Object(u.jsxs)("div",{className:"box py-2 px-3",style:{backgroundColor:"#375A7F"},children:[Object(u.jsxs)("header",{className:"is-flex is-justify-content-space-between p-2",children:[Object(u.jsx)("p",{className:"is-size-5 has-text-white",children:"\u30b2\u30fc\u30e0\u4e00\u89a7"}),Object(u.jsx)("span",{className:"delete deleteQV",onClick:function(){x.qcL(".quickT")}})]}),Object(u.jsxs)("div",{className:"quickview-body",children:[Object(u.jsxs)("article",{className:"message is-primary mb-0",children:[Object(u.jsx)("div",{className:"message-header pb-1",children:Object(u.jsx)("p",{children:"\u30ea\u30f3\u30af\u5148"})}),Object(u.jsx)("div",{className:"message-body is-size-6 py-2 px-0",children:Object(u.jsx)("table",{className:"table is-hoverable",children:Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{className:"has-text-right",children:Object(u.jsx)("a",{href:"https://affectionate-wozniak-de01a2.netlify.app/",children:"\u521d\u3081\u3066\u306e\u3010 \u3051\u3044\u3055\u3093 \u3011"})}),Object(u.jsx)("td",{className:"td_flex-direction is-size-7",children:"\u3060\u308c\u3067\u3082\u3067\u304d\u308b"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{className:"is-size-7 has-text-right",children:"\u3057\u3093\u3051\u3044\u3059\u3044\u3058\u3083\u304f\u30fb\u4f5c\u6210\u4e2d"}),Object(u.jsx)("td",{className:"td_width is-size-7",children:"\u5fcd\u8005\u30c8\u30e9\u30f3\u30d7"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{className:"has-text-right",children:Object(u.jsxs)("a",{href:"https://elastic-goldwasser-3e6b83.netlify.app/",children:["\u4e00\u767a\u52dd\u8ca0 ",Object(u.jsx)("span",{style:{color:"red"},children:"\u2763"})]})}),Object(u.jsx)("td",{className:"td_boxes is-size-7",children:"\u8a18\u61b6\u30b2\u30fc\u30e0"})]})]})})})]}),Object(u.jsxs)("article",{className:"message is-primary mt-3",children:[Object(u.jsx)("div",{className:"message-header py-2 is-justify-content-center",children:Object(u.jsx)("p",{className:"is-size-7",children:Object(u.jsx)("span",{children:"\u3053\u306e\u30d3\u30e5\u30fc\u306e\u958b\u9589\u306b\u3064\u3044\u3066 (\u30c8\u30b0\u30eb\u64cd\u4f5c)"})})}),Object(u.jsx)("div",{className:"message-body py-1 ml-5",children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["\u753b\u9762\u4e0b\u306e\uff3b",Object(u.jsx)("span",{className:"has-background-primary has-text-white",children:"\u30b2\u30fc\u30e0\u4e00\u89a7"}),"\uff3d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u958b\u304f"]}),Object(u.jsxs)("li",{children:["[",Object(u.jsx)("span",{className:"has-background-primary has-text-white",children:"ESC"}),"\uff3d\u30ad\u30fc\u3092\u62bc\u3057\u3066\u958b\u9589\u3059\u308b\u3053\u3068\u3082\u51fa\u6765\u307e\u3059"]})]})})]})]}),Object(u.jsx)("footer",{className:"quickview-footer has-background-primary mt-4 mt-2 pb-3",children:Object(u.jsx)("div",{className:"mt-3",style:{textAlign:"center",width:"500px"},children:Object(u.jsxs)("div",{className:"is-half-mobile is-one-quarter-desktop",children:[Object(u.jsxs)("h6",{className:"title arch is-size-6 pb-1 pt-1 mb-4",children:["\u63d0\u4f9b:",Object(u.jsx)("span",{className:"is-size-5 my-1",children:"\u30a2\u30fc\u30ad\u30a8\u30e0\u30a2\u30c3\u30d7"})]}),Object(u.jsx)("p",{children:Object(u.jsx)("a",{href:"http://www.archmapp.tech/",children:Object(u.jsx)("strong",{className:"is-success px-3",children:"\u7b2c\u4e8c\u7248\u30fbBulma\u3068\u5171\u306b\uff01"})})}),Object(u.jsxs)("address",{children:[Object(u.jsx)("strong",{className:"is-size-5 px-2 mb-3",style:{background:"#e3c800"},children:"Bulma Project"}),Object(u.jsx)("p",{className:"mt-3 is-size-7",children:"\u5317\u4e5d\u5dde"}),Object(u.jsx)("i",{className:"fas fa-fw fa-envelope lightcoral"}),Object(u.jsx)("span",{className:"mb-5",children:Object(u.jsx)("a",{href:"mailto:archmapp@i.softbank.jp",children:"archmapp@i.softbank.jp"})})]})]})})})]})})})})};c(14);function O(e){var s=e.card,c=e.handleChoice,t=e.flipped,i=e.disabled;return Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:t?"flipped":"",children:[Object(u.jsx)("img",{className:"front",src:s.src,alt:"card front"}),Object(u.jsx)("img",{className:"back",src:"/img/cover.png",onClick:function(){i||c(s)},alt:"cover"})]})})}var g=[{src:"/img/helmet-1.png",matched:!1},{src:"/img/potion-1.png",matched:!1},{src:"/img/ring-1.png",matched:!1},{src:"/img/scroll-1.png",matched:!1},{src:"/img/shield-1.png",matched:!1},{src:"/img/sword-1.png",matched:!1}];var f=function(){var e=Object(t.useState)([]),s=Object(l.a)(e,2),c=s[0],i=s[1],a=Object(t.useState)(0),n=Object(l.a)(a,2),d=n[0],j=n[1],h=Object(t.useState)(null),o=Object(l.a)(h,2),b=o[0],m=o[1],x=Object(t.useState)(null),f=Object(l.a)(x,2),N=f[0],v=f[1],y=Object(t.useState)(!1),k=Object(l.a)(y,2),w=k[0],z=k[1],q=function(){var e=[].concat(g,g).sort((function(){return Math.random()-.5})).map((function(e){return Object(r.a)(Object(r.a)({},e),{},{id:Math.random()})}));m(null),v(null),i(e),j(0)},S=function(e){b?v(e):m(e)};Object(t.useEffect)((function(){b&&N&&(z(!0),b.src===N.src?(i((function(e){return e.map((function(e){return e.src===b.src?Object(r.a)(Object(r.a)({},e),{},{matched:!0}):e}))})),E()):setTimeout((function(){return E()}),1e3))}),[b,N]);var E=function(){m(null),v(null),j((function(e){return e+1})),z(!1)};return Object(t.useEffect)((function(){q()}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"hero is-primary is-bold",children:Object(u.jsx)("div",{className:"hero-body h_hero",children:Object(u.jsxs)("div",{className:"",children:[Object(u.jsxs)("h1",{className:"is-size-6-mobile is-size-5-tablet is-size-4-desktop has-tooltip-bottom has-tooltip-warning","data-tooltip":"Memory Card",children:[Object(u.jsx)("span",{className:"has-text-black-ter",children:"Shaun\u5fcd\u8005"})," \u306e\u3054\u7d39\u4ecb"]}),Object(u.jsx)("h2",{className:"is-size-7-mobile is-size-6-tablet is-size-5-desktop",children:"\u3057\u3093\u3051\u3044\u3059\u3044\u3058\u3083\u304f"}),Object(u.jsx)("p",{className:"has-text-grey-dark is-size-7-mobile is-size-7-tablet is-size-6-desktop mt-3",children:"This memory-game is created by Shaun \u5fcd\u8005"})]})})}),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"pb-5",children:[Object(u.jsx)("h1",{children:"\u5fcd\u8005\u30ab\u30fc\u30c9"}),Object(u.jsxs)("div",{className:"is-flex is-justify-content-space-around",children:[Object(u.jsx)("button",{className:"has-text-warning",onClick:q,children:"\u65b0\u898f\u958b\u59cb"}),Object(u.jsxs)("p",{className:"has-text-warning is-size-5",children:["\u624b\u6570: ",d]})]}),Object(u.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(u.jsx)(O,{card:e,handleChoice:S,flipped:e===b||e===N||e.matched,disabled:w},e.id)}))})]})}),Object(u.jsx)("nav",{id:"orderB",children:Object(u.jsxs)("div",{className:"is-flex is-justify-content-center is-align-items-center has-background-grey py-2",children:[Object(u.jsx)("button",{className:"button is-primary has-tooltip-top has-tooltip-warning","data-tooltip":"\u30c8\u30b0\u30eb: [Escape]\u30ad\u30fc\u3082\u53ef",id:"quick",children:"\u30b2\u30fc\u30e0\u4e00\u89a7"}),Object(u.jsx)("span",{className:"has-text-white ml-5",children:"\u305d\u306e\u307b\u304b\u306e \u30b2\u30fc\u30e0\u30a2\u30d7\u30ea"})]})}),Object(u.jsx)(p,{})]})};n.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.23b6844e.chunk.js.map