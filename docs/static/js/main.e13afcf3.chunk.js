(this["webpackJsonpgeneric-message-list"]=this["webpackJsonpgeneric-message-list"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n.p+"static/media/attachment.912d47aa.svg"},,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,r,c=n(0),o=n.n(c),s=n(3),i=n.n(s),m=(n(13),n(6)),l=(n(14),[{id:"1",content:{text:"You can't hack the bandwidth without synthesizing the haptic CSS capacitor!"},contentType:"text",senderType:"agent",createdAt:1603181211},{id:"2",content:{text:"transmitting the program won't do anything, we need to quantify the auxiliary JSON driver!"},contentType:"text",senderType:"user",createdAt:1603181151},{id:"3",content:{url:"https://source.unsplash.com/random"},contentType:"image",senderType:"user",createdAt:1603181091},{id:"4",content:{url:"https://source.unsplash.com/random"},contentType:"image",senderType:"agent",createdAt:1603181031},{id:"5",content:{file:"https://drive.google.com/uc?export=download&id=1ft-mFQ8ER27jBQJrE2SGdaIsKjnl8_cu"},contentType:"attachment",senderType:"user",createdAt:1603180971}].sort((function(e,t){return e.createdAt-t.createdAt})));!function(e){e.TEXT="text",e.IMAGE="image",e.ATTACHMENT="attachment"}(a||(a={})),function(e){e.AGENT="agent",e.USER="user"}(r||(r={}));var u=n(7),d=n(1),h=n.n(d),g=n(4),p=n.n(g),E=Object(c.createContext)({}),f=function(){var e=Object(c.useContext)(E);if(0===Object.keys(e).length&&e.constructor===Object)throw new Error("Message compound components cannot be rendered outside the Message component.");return e};h.a.extend(p.a);var v=function(){var e=f().createdAt,t=h.a.unix(e);return o.a.createElement("time",{dateTime:t.format("YYYY-MM-DD HH:mm"),"data-testid":"datetime"},t.format("MMM Do h:mm A"))},T=function(){var e=f().content.text;return o.a.createElement("span",{className:"text-message","data-testid":"text"},e)},y=function(){var e=f().content.url;return o.a.createElement("img",{src:e,className:"image-message",alt:"","data-testid":"image"})},A=n(5),w=n.n(A),x=function(){var e=f().content.file;return o.a.createElement("a",{download:!0,href:e,title:"Download attachment","data-testid":"attachment"},o.a.createElement("div",{className:"attachment-message"},o.a.createElement("img",{src:w.a,alt:""}),o.a.createElement("span",null,"Download Attachment")))},b=function(e){var t=e.children,n=Object(u.a)(e,["children"]),a=n.senderType;return o.a.createElement(E.Provider,{value:n},o.a.createElement("div",{className:"message-container ".concat(a),"data-testid":"message"},t,o.a.createElement(v,null)))};b.Text=T,b.Image=y,b.Attachment=x,b.DateTime=v;var j=b,M=function(e){return o.a.createElement(j,e,o.a.createElement(j.Text,null))},O=function(e){return o.a.createElement(j,e,o.a.createElement(j.Image,null))},N=function(e){return o.a.createElement(j,e,o.a.createElement(j.Attachment,null))},k=function(e){var t=e.messages;return o.a.createElement("div",{className:"conversation-container glassmorphism"},o.a.createElement("div",{className:"conversation-content"},t.map((function(e){switch(e.contentType){case a.TEXT:return o.a.createElement(M,Object.assign({key:e.id},e));case a.IMAGE:return o.a.createElement(O,Object.assign({key:e.id},e));case a.ATTACHMENT:return o.a.createElement(N,Object.assign({key:e.id},e));default:return null}}))))},C=function(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){a(l)}),[]),o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Generic Message Component Challenge"),o.a.createElement(k,{messages:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.e13afcf3.chunk.js.map