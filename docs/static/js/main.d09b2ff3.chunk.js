(this["webpackJsonpbusca-gif"]=this["webpackJsonpbusca-gif"]||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(1),a=n(7),i=n.n(a),s=n(2),u=n(10),o=n(8),j=function(t){var e=t.setcategories,n=Object(c.useState)("Agrega Categorias"),a=Object(s.a)(n,2),i=a[0],o=a[1];return Object(r.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&(e((function(t){return[i].concat(Object(u.a)(t))})),o(""))},children:Object(r.jsx)("input",{type:"text",value:i,onChange:function(t){o(t.target.value)}})})};j.prototype={setcategories:n.n(o).a.func.isRequired};var b=n(11),d=function(t){var e=t.title,n=t.url;return Object(r.jsxs)("div",{className:"card animate__animated animate__backInLeft",children:[Object(r.jsx)("img",{src:n,alt:e}),Object(r.jsxs)("p",{children:[" ",e," "]})]})},l=n(6),f=n.n(l),O=n(9),p=function(){var t=Object(O.a)(f.a.mark((function t(e){var n,r,c,a,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=2GOi474veT4G4dxUr1ux5WaV7xzwrqLA"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,a=c.data,i=a.map((function(t){return{id:t.id,title:t.title,url:t.images.original.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){p(t).then((function(t){a({data:t,loading:!1})}))}),[t]),r}(e),a=n.data,i=n.loading;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("h3",{children:[" ",e," "]}),Object(r.jsxs)("div",{className:"card-grid",children:[i&&Object(r.jsx)("p",{children:"Loading..."}),a.map((function(t){return Object(r.jsx)(d,Object(b.a)({},t),t.id)}))]})]})},h=function(){var t=Object(c.useState)(["Dragon Ball Z"]),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"GifExpertApp"}),Object(r.jsx)(j,{setcategories:a}),Object(r.jsx)("hr",{}),Object(r.jsx)("ol",{children:n.map((function(t){return Object(r.jsx)(g,{category:t},t)}))}),Object(r.jsx)("hr",{})]})};n(20);i.a.render(Object(r.jsx)(h,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.d09b2ff3.chunk.js.map