(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),l=t.n(c),d=t(1),u=function(e){var a=e.value,t=e.addOperand;return r.a.createElement("div",{onClick:function(){return t(a)}},a)},m=function(e){var a=e.value,t=e.reset;return r.a.createElement("div",{onClick:t},a)},s=function(e){var a=e.addOperand,t=e.reset;return r.a.createElement("div",{className:"digits"},r.a.createElement("div",{className:"numbers"},r.a.createElement(u,{value:"7",addOperand:a}),r.a.createElement(u,{value:"8",addOperand:a}),r.a.createElement(u,{value:"9",addOperand:a})),r.a.createElement("div",{className:"numbers"},r.a.createElement(u,{value:"4",addOperand:a}),r.a.createElement(u,{value:"5",addOperand:a}),r.a.createElement(u,{value:"6",addOperand:a})),r.a.createElement("div",{className:"numbers"},r.a.createElement(u,{value:"1",addOperand:a}),r.a.createElement(u,{value:"2",addOperand:a}),r.a.createElement(u,{value:"3",addOperand:a})),r.a.createElement("div",{className:"numbers"},r.a.createElement(u,{value:"0",addOperand:a}),r.a.createElement(u,{value:".",addOperand:a}),r.a.createElement(m,{value:"AC",reset:t})))},v=function(e){var a=e.calculate;return r.a.createElement("div",{className:"equal",onClick:a},"=")},i=function(e){var a=e.addOperand;return r.a.createElement("div",{className:"operators"},r.a.createElement(u,{value:"+",addOperand:a}),r.a.createElement(u,{value:"-",addOperand:a}),r.a.createElement(u,{value:"*",addOperand:a}),r.a.createElement(u,{value:"/",addOperand:a}))},E=function(e){var a=e.value;return r.a.createElement("div",{className:"input"},a)},o=function(){var e=Object(n.useState)(0),a=Object(d.a)(e,2),t=a[0],c=a[1],l=function(e){c(t&&"\u041e\u0448\u0438\u0431\u043a\u0430"!==t?t+e:e)};return r.a.createElement("div",{className:"calculator"},r.a.createElement(E,{value:t}),r.a.createElement("div",{className:"buttons"},r.a.createElement(i,{addOperand:l}),r.a.createElement(s,{addOperand:l,reset:function(){c(0)}}),r.a.createElement(v,{calculate:function(){var e=/^(\d+\.*\d*)([-\+\*\/])(\d+\.*\d*)$/;if(e.test(t)){var a=t.match(e),n=Object(d.a)(a,4),r=(n[0],n[1]),l=n[2],u=n[3];switch(r=Number(r),u=Number(u),l){case"+":c(r+u);break;case"-":c(r-u);break;case"*":c(r*u);break;case"/":c(r/u);break;default:c(0)}}else c("\u041e\u0448\u0438\u0431\u043a\u0430")}})))};t(9);l.a.render(r.a.createElement(o,null),document.getElementById("root"))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.53fc3738.chunk.js.map