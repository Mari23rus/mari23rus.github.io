(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,n,t){e.exports=t(20)},16:function(e,n,t){},18:function(e,n,t){},20:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(4),s=t.n(r),o=(t(16),t(5)),l=t(6),c=t(9),h=t(7),d=t(10),u=t(1),m=(t(18),t(8)),g=t.n(m),p=function(e){function n(){var e;return Object(o.a)(this,n),(e=Object(c.a)(this,Object(h.a)(n).call(this))).state={input:'\n# H1 Header\n## H2 Header\n\n[I\'m an inline-style link](https://google.com)\n\nInline `code` has `back-ticks around` it.\n\n```javascript\nvar s = "JavaScript syntax highlighting";\nalert(s);\n```\n\n\n    No language indicated, so no syntax highlighting in Markdown Here. \n\n1. First ordered list item\n2. Another item\n\n* Unordered list can use asterisks\n- Or minuses\n+ Or pluses\n\n> Blockquotes are very handy in email to emulate reply text.\n> This line is part of the same quote.\n\nInline-style img: \n![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")\n\nEmphasis, aka italics, with *asterisks* or _underscores_.\n\nStrong emphasis, aka bold, with **asterisks** or __underscores__.\n\nCombined emphasis with **asterisks and _underscores_**.\n\nStrikethrough uses two tildes. ~~Scratch this.~~\n      '},e.handleChange=e.handleChange.bind(Object(u.a)(Object(u.a)(e))),e}return Object(d.a)(n,e),Object(l.a)(n,[{key:"handleChange",value:function(e){this.setState({input:e.target.value})}},{key:"render",value:function(){return i.a.createElement("div",{id:"app"},i.a.createElement("h1",null,"Live Markdown Previewer"),i.a.createElement("div",{id:"container"},i.a.createElement("div",{id:"column1"},i.a.createElement("h2",null,"Editor"),i.a.createElement("textarea",{id:"editor",onChange:this.handleChange},this.state.input)),i.a.createElement("div",{id:"column2"},i.a.createElement("h2",null,"Previewer"),i.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:g()(this.state.input,{breaks:!0,gfm:!0})}}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.fe1f8297.chunk.js.map