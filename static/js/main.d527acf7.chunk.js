(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),c=a.n(l),o=(a(13),a(3)),u=a(4),s=a(6),i=a(5),m=a(7),h=function(){return r.a.createElement("h1",null,"\xbfMi agua hervir\xe1?")},p=function(e){console.log(e);return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"scale-select"},"Choose a scale:"),r.a.createElement("br",null),r.a.createElement("select",{onChange:function(t){console.log(t.target.value),e.onChangeScale(t.target.value)},id:"scale-select",value:e.scale},r.a.createElement("option",{value:""},"--Please choose an option--"),r.a.createElement("option",{value:"c"},"Celsius"),r.a.createElement("option",{value:"f"},"Farenheit")))},g={c:"Celsius",f:"Farenheit"},v=function(e){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:e.scale},"Coloca los grados ",g[e.scale]),r.a.createElement("br",null),r.a.createElement("input",{id:e.scale,placeholder:g[e.scale]?"grados ".concat(g[e.scale]):"ingrese",onChange:function(t){console.log(t.target.value),e.onInputTemperature(t.target.value)},value:e.temperature}))},d=function(e){var t="c"===e.scale?e.temperature:function(e){console.log(typeof e);var t=parseFloat(e);if(Number.isNaN(t))return"";var a=5*(e-32)/9;return(Math.round(1e3*a)/1e3).toString()}(e.temperature);return r.a.createElement("div",null,r.a.createElement("h3",null,t>=100?"El agua hervir\xe1":"El agua no hervir\xe1"))},E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).handleChangeScale=function(e){a.setState({scale:e,temperature:""})},a.handleInputTemperature=function(e){a.setState({temperature:e})},a.state={scale:"ingrese escala",temperature:""},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(p,{scale:this.state.scale,onChangeScale:this.handleChangeScale}),r.a.createElement(v,{scale:this.state.scale,onInputTemperature:this.handleInputTemperature,temperature:this.state.temperature}),r.a.createElement(d,{scale:this.state.scale,temperature:this.state.temperature}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.d527acf7.chunk.js.map