(this.webpackJsonpcoins=this.webpackJsonpcoins||[]).push([[0],{19:function(e,c,t){},38:function(e,c,t){},40:function(e,c,t){"use strict";t.r(c);var n=t(2),a=t.n(n),s=t(13),r=t.n(s),i=t(4),o=(t(19),t(14)),l=t.n(o),j=(t(38),t(0)),p=function(e){var c=e.symbol,t=e.price,n=e.name,a=e.image,s=e.volume,r=e.priceChange,i=e.marketcap;return Object(j.jsx)("div",{className:"coin-container",children:Object(j.jsxs)("div",{className:"coin-row",children:[Object(j.jsxs)("div",{className:"coin",children:[Object(j.jsx)("img",{src:a,alt:"cryto"}),Object(j.jsx)("h1",{children:n}),Object(j.jsx)("p",{className:"coin-symbol",children:c})]}),Object(j.jsxs)("div",{className:"coin-data",children:[Object(j.jsxs)("p",{className:"coin-price",children:["$",t]}),Object(j.jsxs)("p",{className:"coin-value",children:["$",s.toLocaleString()]}),r<0?Object(j.jsxs)("p",{className:"coin-percent red",children:[r.toFixed(2),"%"]}):Object(j.jsxs)("p",{className:"coin-percent green",children:[r.toFixed(2),"%"]}),Object(j.jsxs)("p",{className:"coin-marketcap",children:["Mkt Cap: $",i.toLocaleString()]})]})]})})},m=function(){var e=Object(n.useState)([]),c=Object(i.a)(e,2),t=c[0],a=c[1],s=Object(n.useState)(""),r=Object(i.a)(s,2),o=r[0],m=r[1];Object(n.useEffect)((function(){l.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true").then((function(e){a(e.data)})).catch((function(e){return console.log(e)}))}),[]);var d=t.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(j.jsxs)("div",{className:"coin-app",children:[Object(j.jsxs)("div",{className:"coin-search",children:[Object(j.jsx)("h1",{className:"coin-text",children:"Search a currency"}),Object(j.jsx)("form",{children:Object(j.jsx)("input",{type:"text",placeholder:"Search",className:"coin-input",onChange:function(e){m(e.target.value)}})})]}),d.map((function(e){return Object(j.jsx)(p,{name:e.name,price:e.current_price,image:e.image,symbol:e.symbol,marketcap:e.market_cap,priceChange:e.price_change_percentage_24h,volume:e.total_volume},e.id)}))]})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.bcddd65c.chunk.js.map