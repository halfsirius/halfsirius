(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),c=n(3),r=n.n(c),i=(n(14),n(4)),s=n(5),u=n(7),l=n(6),h=n(8),d=n(1),b=(n(16),function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).generateQuote=function(){var t=[],e=n.state.apiResult,o=Math.floor(Math.random()*n.state.apiResult.length+1);e.forEach(function(e,n){n===o&&t.push(e)}),n.setState({text:t[0].quote,author:t[0].author})},n.changeColor=function(){var t=["#000000"],e=n.state.clickCount;n.setState({clickCount:n.state.clickCount+1}),e<4?n.setState({bgColor:t[e]}):e>=4?n.setState({bgColor:t[e],clickCount:0}):0===e&&n.setState({clickCount:n.state.clickCount+1,bgColor:t[e]})},n.shareOnTwitter=function(){var t="".concat(n.state.author," - ").concat(n.state.text);window.open("http://twitter.com/share?url="+encodeURIComponent("twitter.com")+"&text="+encodeURIComponent(t),"","left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0")},n.state={apiResult:null,author:"",text:"",isLoaded:!1,bgColor:"#000000",clickCount:0},n.handleClick=n.handleClick.bind(Object(d.a)(Object(d.a)(n))),n.shareOnTwitter=n.shareOnTwitter.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(e,t),Object(s.a)(e,[{key:"handleClick",value:function(){this.generateQuote(),this.changeColor()}},{key:"componentDidMount",value:function(){var t=this;fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",{headers:{Accept:"application/json"}}).then(function(t){return t.json()}).then(function(e){t.setState({apiResult:e.quotes,isLoaded:!0,author:e.quotes[0].author,text:e.quotes[0].quote,quotesArrayLength:e.quotes.length})}).catch(function(e){return t.setState({error:e})})}},{key:"render",value:function(){return a.a.createElement("div",{id:"main"},a.a.createElement("style",null,"\n          :root {\n            --main-bg-color: ".concat(this.state.bgColor,";\n            --main-txt-color: ").concat(this.state.bgColor,";\n            }\n          ")),a.a.createElement("h1",{id:"title"}),a.a.createElement("div",{id:"quote-box"},a.a.createElement("p",{id:"text"},this.state.text),a.a.createElement("p",{id:"author"}," - ",this.state.author),a.a.createElement("button",{id:"new-quote",onClick:this.handleClick},"New Quote")))}}]),e}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.91ec5f10.chunk.js.map