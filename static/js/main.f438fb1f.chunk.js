(this["webpackJsonpbtc-rate"]=this["webpackJsonpbtc-rate"]||[]).push([[0],{18:function(t,e,n){t.exports=n(42)},23:function(t,e,n){},24:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),l=(n(23),n(24),n(12)),i=n(13),s=n(16),u=n(14),p=n(17),f=n(15),h=n.n(f),m=function(t){var e=t.list.map((function(t){return r.a.createElement("li",{key:t.currency},"Last rate: ",r.a.createElement("span",{className:t.colorClass},t.last)," ",t.currency," [",t.symbol,"]")}));return r.a.createElement("ul",null,e)},y=function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(s.a)(this,Object(u.a)(e).call(this))).getData=function(){h.a.get("https://blockchain.info/pl/ticker").then((function(e){var n,a=[],r=0;for(var o in e.data){void 0!==t.state.crypto[r]&&(n=t.state.crypto[r].last);var c={last:e.data[o].last,symbol:e.data[o].symbol,currency:o,colorClass:n<e.data[o].last?"green":n>e.data[o].last?"red":"blue"};r++,a.push(c)}t.setState({crypto:a,filteredCrypto:a}),t.filtrCrypto()}))},t.filtrCrypto=function(){var e=t.state.crypto.filter((function(e){return e.currency.toUpperCase().includes(t.filterInput.value.toUpperCase())}));t.setState({filteredCrypto:e})},t.state={crypto:[],filteredCrypto:[]},t}return Object(p.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.getData(),this.timer=setInterval(this.getData,4e3)}},{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"Crypton"),r.a.createElement("input",{placeholder:"Przefiltruj",onChange:this.filtrCrypto,ref:function(e){return t.filterInput=e}}),r.a.createElement(m,{list:this.state.filteredCrypto}))}}]),e}(a.Component);var d=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.f438fb1f.chunk.js.map