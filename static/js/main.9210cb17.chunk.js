(this["webpackJsonpassignment-8"]=this["webpackJsonpassignment-8"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(7),l=n.n(r),c=(n(14),n(1)),s=n(2),u=n(3),i=n(5),m=n(4);var h={border:"1px solid black"},d=function(){return a.a.createElement("td",{style:h},"Hello")},v=n(17);var p=function(e){for(var t=[],n=0;n<e.columns;n++)t.push(a.a.createElement(d,{key:Object(v.a)()}));return a.a.createElement("tr",null,t)},E=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).addRow=function(){o.setState({rows:o.state.rows+1})},o.addColumn=function(){o.setState({columns:o.state.columns+1})},o.removeRow=function(){o.setState({rows:o.state.rows-1})},o.removeColumn=function(){o.setState({columns:o.state.columns-1})},o.handleCellClick=function(e){e.target.style.backgroundColor=o.state.color},o.state={color:o.props.color,rows:0,columns:1},o}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(){this.props.color!==this.state.color&&this.setState({color:this.props.color})}},{key:"render",value:function(){var e=[];if(!e)return a.a.createElement("p",null);for(var t=0;t<this.state.rows;t++)e.push(a.a.createElement(p,{key:Object(v.a)(),columns:this.state.columns}));return a.a.createElement("div",null,a.a.createElement("button",{onClick:this.addRow},"Add Row"),a.a.createElement("button",{onClick:this.addColumn},"Add Column"),a.a.createElement("button",{onClick:this.removeRow},"Remove Row"),a.a.createElement("button",{onClick:this.removeColumn},"Remove Column"),a.a.createElement("table",null,a.a.createElement("tbody",null,e)))}}]),n}(o.Component),b=(n(15),function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).handleChange=function(e){o.setState({color:e.target.value})},o.state={color:""},o.handleChange=o.handleChange.bind(Object(u.a)(o)),o}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("select",{value:this.state.color,onChange:this.handleChange},a.a.createElement("option",{value:"none"},"---"),a.a.createElement("option",{value:"red"},"Red"),a.a.createElement("option",{value:"blue"},"Blue"),a.a.createElement("option",{value:"gray"},"Gray"),a.a.createElement("option",{value:"green"},"Green"),a.a.createElement("option",{value:"yellow"},"Yellow"),a.a.createElement("option",{value:"orange"},"Orange")),a.a.createElement(E,{color:this.state.color}))}}]),n}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.9210cb17.chunk.js.map