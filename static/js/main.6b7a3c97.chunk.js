(this["webpackJsonpproject-flashcards"]=this["webpackJsonpproject-flashcards"]||[]).push([[0],{36:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(21),s=c.n(a),i=c(5),d=c(0);var u=function(){return Object(d.jsx)("header",{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Flashcard-o-matic"}),Object(d.jsx)("h4",{children:"Discover The Flashcard Difference."})]})})};var o=function(){return Object(d.jsx)("section",{children:Object(d.jsx)("h1",{children:"Not Found"})})},j=c(2),b=c.n(j),l=c(3),h=c(8),O=c(24),x="https://ericrossbernstein.github.io/project-flashcards",p=new Headers;function f(e){e.cards;return Object(O.a)(e,["cards"])}function m(e,t){return v.apply(this,arguments)}function v(){return(v=Object(l.a)(b.a.mark((function e(t,c){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,c);case 3:if(!((n=e.sent).status<200||n.status>399)){e.next=6;break}throw new Error("".concat(n.status," - ").concat(n.statusText));case 6:return e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=15;break}throw e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function k(e){return w.apply(this,arguments)}function w(){return(w=Object(l.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(x,"/decks?_embed=cards"),e.next=3,m(c,{signal:t});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){return C.apply(this,arguments)}function C(){return(C=Object(l.a)(b.a.mark((function e(t,c){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(x,"/decks"),r={method:"POST",headers:p,body:JSON.stringify(f(t)),signal:c},e.next=4,m(n,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t){return N.apply(this,arguments)}function N(){return(N=Object(l.a)(b.a.mark((function e(t,c){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(x,"/decks/").concat(t,"?_embed=cards"),e.next=3,m(n,{signal:c});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t){return S.apply(this,arguments)}function S(){return(S=Object(l.a)(b.a.mark((function e(t,c){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(x,"/decks/").concat(t.id,"?_embed=cards"),r={method:"PUT",headers:p,body:JSON.stringify(f(t)),signal:c},e.next=4,m(n,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e,t){return I.apply(this,arguments)}function I(){return(I=Object(l.a)(b.a.mark((function e(t,c){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(x,"/decks/").concat(t),r={method:"DELETE",signal:c},e.next=4,m(n,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e,t,c){return F.apply(this,arguments)}function F(){return(F=Object(l.a)(b.a.mark((function e(t,c,n){var r,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(x,"/cards"),c.deckId=Number(t),a={method:"POST",headers:p,body:JSON.stringify(c),signal:n},e.next=5,m(r,a);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return(A=Object(l.a)(b.a.mark((function e(t,c){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(x,"/cards/").concat(t),e.next=3,m(n,{signal:c});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t){return L.apply(this,arguments)}function L(){return(L=Object(l.a)(b.a.mark((function e(t,c){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(x,"/cards/").concat(t.id),r={method:"PUT",headers:p,body:JSON.stringify(t)},e.next=4,m(n,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e,t){return J.apply(this,arguments)}function J(){return(J=Object(l.a)(b.a.mark((function e(t,c){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(x,"/cards/").concat(t),r={method:"DELETE",signal:c},e.next=4,m(n,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}p.append("Content-Type","application/json");var B=function(e){var t=e.deckId,c=e.name,n=e.description,r=e.amount,a=e.deleteHandler,s=Object(i.f)();return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("div",{className:"item",children:[Object(d.jsxs)("div",{className:"group-row",children:[Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("h3",{children:c}),Object(d.jsx)("hr",{})]}),Object(d.jsx)("div",{className:"circle",children:Object(d.jsxs)("h6",{children:[r," cards"]})})]}),Object(d.jsx)("p",{children:n})]}),Object(d.jsxs)("div",{className:"footer",children:[Object(d.jsx)("button",{className:"item",onClick:function(){return s.push("/decks/".concat(t))},children:"View"}),Object(d.jsx)("button",{className:"item",onClick:function(){return s.push("/decks/".concat(t,"/study"))},children:"Study"}),Object(d.jsx)("button",{className:"item",onClick:function(){return a(t)},children:"Delete"})]})]})},P=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],r=t[1],a=Object(i.f)();Object(n.useEffect)((function(){var e=new AbortController;return k(e.signal).then(r),function(){return e.abort()}}),[]);var s=function(){var e=Object(l.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Delete this deck? You will not be able to recover it.")){e.next=9;break}return e.next=4,E(t);case 4:return e.next=6,k();case 6:c=e.sent,r(c),a.push("/");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=c.map((function(e){return Object(d.jsx)(B,{deckId:e.id,name:e.name,description:e.description,amount:e.cards.length,deleteHandler:s},e.id)}));return Object(d.jsx)("main",{children:Object(d.jsx)("section",{children:Object(d.jsxs)("div",{className:"group",children:[Object(d.jsx)("div",{className:"group",children:u}),Object(d.jsx)("button",{className:"item button-create",onClick:function(){return a.push("/decks/new")},children:"Create Deck"})]})})})},Y=c(12),_=c(7),U=c(4),M=function(){var e=Object(n.useState)(Object(_.a)({},{name:"",description:""})),t=Object(h.a)(e,2),c=t[0],r=t[1],a=Object(i.f)(),s=function(e){r(Object(_.a)(Object(_.a)({},c),{},Object(Y.a)({},e.target.name,e.target.value)))},u=function(){var e=Object(l.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,g(c);case 3:a.push("/");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("section",{children:[Object(d.jsxs)("nav",{children:[Object(d.jsx)(U.b,{to:"/",children:"Home"})," / ",Object(d.jsx)("span",{children:"Create Deck"})]}),Object(d.jsx)("h3",{children:"Create Deck"}),Object(d.jsx)("form",{onSubmit:u,children:Object(d.jsxs)("fieldset",{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(d.jsx)("input",{id:"name",name:"name",type:"text",required:!0,value:c.name,maxLength:"100",onChange:s})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"description",children:"Description:"}),Object(d.jsx)("textarea",{id:"description",name:"description",required:!0,rows:"3",maxLength:"500",value:c.description,onChange:s})]}),Object(d.jsxs)("div",{className:"group-row",children:[Object(d.jsx)("button",{className:"item",onClick:function(){return a.push("/")},children:"Cancel"}),Object(d.jsx)("button",{className:"item",type:"submit",children:"Submit"})]})]})})]})},R=function(e){var t=e.currentCard,c=e.flipCard;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{children:"Front:"}),Object(d.jsx)("p",{children:t.front})]}),Object(d.jsx)("button",{className:"button-flip",onClick:function(){return c()},children:"Flip"})]})},V=function(e){var t=e.currentCard,c=e.flipCard,n=e.nextCard;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{children:"Back:"}),Object(d.jsx)("p",{children:t.back})]}),Object(d.jsxs)("div",{className:"group-row",children:[Object(d.jsx)("button",{className:"item",onClick:function(){return c()},children:"Flip"}),Object(d.jsx)("button",{className:"item",onClick:function(){return n()},children:"Next"})]})]})},z=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(0),s=Object(h.a)(a,2),u=s[0],o=s[1],j=Object(n.useState)(!0),b=Object(h.a)(j,2),l=b[0],O=b[1],x=Object(i.g)().deckId,p=Object(i.f)();Object(n.useEffect)((function(){var e=new AbortController;return y(x,e.signal).then(r),function(){return e.abort()}}),[x]);var f=function(){window.confirm("Restart cards? Click 'cancel' to return to the home page.")?(o(0),O(!0)):p.push("/")},m=function(){O((function(e){return!e}))};return c.name?Object(d.jsxs)("section",{children:[Object(d.jsxs)("nav",{children:[Object(d.jsx)(U.b,{to:"/",children:"Home"})," / ",Object(d.jsx)(U.b,{to:"/decks/".concat(x),children:c.name})," / ",Object(d.jsx)("span",{children:"Study"})]}),Object(d.jsxs)("h2",{children:["Study : ",Object(d.jsx)("i",{children:c.name})]}),c.cards.length<=2?Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Not enough cards."}),Object(d.jsxs)("p",{children:["You need at least 3 cards to study. There are ",c.cards.length," ","cards in this deck"]}),Object(d.jsx)("button",{onClick:function(){return p.push("/decks/".concat(x,"/cards/new"))},children:"Add Cards"})]}):Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("h4",{children:["Card ",u+1," of ",c.cards.length]}),Object(d.jsx)("hr",{}),l?Object(d.jsx)(R,{currentCard:c.cards[u],flipCard:m}):Object(d.jsx)(V,{currentCard:c.cards[u],flipCard:m,nextCard:function(){u<c.cards.length-1?(o((function(e){return e+1})),O(!0)):f()}})]})]}):null},G=function(e){var t=e.cards,c=e.deckId,n=e.refreshDeck,r=Object(i.f)(),a=function(){var e=Object(l.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Delete this card? You will not be able to recover it.")){e.next=7;break}return e.next=4,q(t);case 4:return e.next=6,n();case 6:r.push("/decks/".concat(c));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"group",children:t.map((function(e){return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("h5",{children:"Front :"}),Object(d.jsx)("p",{children:e.front}),Object(d.jsx)("hr",{})]}),Object(d.jsxs)("div",{className:"item",children:[Object(d.jsx)("h5",{children:"Back :"}),Object(d.jsx)("p",{children:e.back}),Object(d.jsx)("hr",{})]}),Object(d.jsxs)("div",{className:"footer",children:[Object(d.jsx)("button",{className:"item",onClick:function(){return r.push("/decks/".concat(c,"/cards/").concat(e.id,"/edit"))},children:"Edit"}),Object(d.jsx)("button",{className:"item",onClick:function(){return a(e.id)},children:"Delete"})]})]},e.id)}))})},K=function(e){var t=e.deck,c=e.setDeck,r=Object(i.g)().deckId,a=Object(i.f)();Object(n.useEffect)((function(){var e=new AbortController;return y(r,e.signal).then(c),function(){return e.abort()}}),[r,c]);var s=function(){var e=Object(l.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Delete this deck? You will not be able to recover it.")){e.next=5;break}return e.next=4,E(t);case 4:a.push("/");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(l.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(r);case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return t.id?Object(d.jsx)("section",{children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("nav",{children:[Object(d.jsx)(U.b,{to:"/",children:"Home"})," / ",Object(d.jsx)("span",{children:t.name})]}),Object(d.jsxs)("div",{className:"group",children:[Object(d.jsxs)("div",{className:"item-triple",children:[Object(d.jsx)("h3",{children:t.name}),Object(d.jsx)("p",{children:t.description})]}),Object(d.jsxs)("div",{className:"group-row",children:[Object(d.jsx)("button",{className:"button-deck",onClick:function(){return a.push("/decks/".concat(r,"/edit"))},children:"Edit"}),Object(d.jsx)("button",{className:"button-deck",onClick:function(){return a.push("/decks/".concat(r,"/study"))},children:"Study"}),Object(d.jsx)("button",{className:"button-deck",onClick:function(){return a.push("/decks/".concat(r,"/cards/new"))},children:"Add Cards"}),Object(d.jsx)("button",{className:"button-deck",onClick:function(){return s(r)},children:"Delete Deck"})]})]})]}),Object(d.jsx)("h2",{children:"Cards"}),Object(d.jsx)("hr",{}),Object(d.jsx)(G,{cards:t.cards,deckId:r,refreshDeck:u})]})}):null},Q=function(e){var t=e.deck,c=e.setDeck,r=Object(i.f)(),a=Object(i.g)().deckId;Object(n.useEffect)((function(){var e=new AbortController;return y(a,e.signal).then(c),function(){return e.abort()}}),[a,c]);var s=function(e){c(Object(_.a)(Object(_.a)({},t),{},Object(Y.a)({},e.target.name,e.target.value)))},u=function(){var e=Object(l.a)(b.a.mark((function e(c){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,D(t);case 3:r.push("/decks/".concat(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("section",{children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("nav",{children:[Object(d.jsx)(U.b,{to:"/",children:"Home"})," / ",Object(d.jsx)(U.b,{to:"/decks/".concat(a),children:t.name})," / ",Object(d.jsx)("span",{children:"Edit Deck"})]}),Object(d.jsx)("h2",{children:"Edit Deck"}),Object(d.jsx)("form",{onSubmit:u,children:Object(d.jsxs)("fieldset",{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"name",children:"Name :"}),Object(d.jsx)("input",{id:"name",name:"name",type:"text",required:!0,value:t.name,maxLength:"100",onChange:s})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"description",children:"Description :"}),Object(d.jsx)("textarea",{id:"description",name:"description",required:!0,rows:"3",maxLength:"500",value:t.description,onChange:s})]}),Object(d.jsxs)("div",{className:"group-row",children:[Object(d.jsx)("button",{className:"item",onClick:function(){return r.push("/decks/".concat(a))},children:"Cancel"}),Object(d.jsx)("button",{className:"item",type:"submit",children:"Submit"})]})]})})]})})},W=function(e){var t=e.history,c=e.isNewCard,n=e.card,r=e.deckId,a=e.changeHandler,s=e.submitHandler;return Object(d.jsx)("form",{onSubmit:s,children:Object(d.jsxs)("fieldset",{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"front",children:"Front :"}),Object(d.jsx)("textarea",{id:"front",name:"front",required:!0,rows:"3",maxLength:"300",value:n.front,onChange:a})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"back",children:"Back :"}),Object(d.jsx)("textarea",{id:"back",name:"back",required:!0,rows:"3",maxLength:"300",value:n.back,onChange:a})]}),Object(d.jsxs)("div",{className:"group-row",children:[Object(d.jsx)("button",{className:"item",onClick:function(){return t.push("/decks/".concat(r))},children:c?"Done":"Cancel"}),Object(d.jsx)("button",{className:"item",type:"submit",children:c?"Save":"Submit"})]})]})})},X=function(e){var t={front:"",back:""},c=Object(n.useState)(Object(_.a)({},t)),r=Object(h.a)(c,2),a=r[0],s=r[1],u=e.deck,o=e.setDeck,j=Object(i.f)(),O=Object(i.g)().deckId;Object(n.useEffect)((function(){var e=new AbortController;return y(O,e.signal).then(o),function(){return e.abort()}}),[O,o]);var x=function(){var e=Object(l.a)(b.a.mark((function e(c){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,H(O,a);case 3:s(Object(_.a)({},t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.name?Object(d.jsx)("section",{children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("nav",{children:[Object(d.jsx)(U.b,{to:"/",children:"Home"})," / ",Object(d.jsx)(U.b,{to:"/decks/".concat(O),children:u.name})," / ",Object(d.jsx)("span",{children:"Add Card"})]}),Object(d.jsxs)("h2",{children:[Object(d.jsx)("i",{children:u.name})," : Add Card"]}),Object(d.jsx)(W,{history:j,isNewCard:!0,card:a,deckId:O,changeHandler:function(e){s(Object(_.a)(Object(_.a)({},a),{},Object(Y.a)({},e.target.name,e.target.value)))},submitHandler:x})]})}):null},Z=function(e){var t=Object(n.useState)(Object(_.a)({},{front:"",back:""})),c=Object(h.a)(t,2),r=c[0],a=c[1],s=e.deck,u=e.setDeck,o=Object(i.f)(),j=Object(i.g)(),O=j.deckId,x=j.cardId;Object(n.useEffect)((function(){var e=new AbortController;return function(e,t){return A.apply(this,arguments)}(x,e.signal).then(a),function(){return e.abort()}}),[x]),Object(n.useEffect)((function(){var e=new AbortController;return y(O,e.signal).then(u),function(){return e.abort()}}),[O,u]);var p=function(){var e=Object(l.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,T(r);case 3:o.push("/decks/".concat(O));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s.name?Object(d.jsx)("section",{children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("nav",{children:[Object(d.jsx)(U.b,{to:"/",children:"Home"})," / ",Object(d.jsx)(U.b,{to:"/decks/".concat(O),children:s.name})," / ",Object(d.jsxs)("span",{children:["Edit Card ",x]})]}),Object(d.jsx)("h2",{children:"Edit Card"}),Object(d.jsx)(W,{history:o,isNewCard:!1,card:r,deckId:O,changeHandler:function(e){a(Object(_.a)(Object(_.a)({},r),{},Object(Y.a)({},e.target.name,e.target.value)))},submitHandler:p})]})}):null},$=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],r=t[1];return Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"/decks/:deckId",children:Object(d.jsx)(K,{deck:c,setDeck:r})}),Object(d.jsx)(i.a,{path:"/decks/:deckId/edit",children:Object(d.jsx)(Q,{deck:c,setDeck:r})}),Object(d.jsx)(i.a,{path:"/decks/:deckId/cards/new",children:Object(d.jsx)(X,{deck:c,setDeck:r})}),Object(d.jsx)(i.a,{path:"/decks/:deckId/cards/:cardId/edit",children:Object(d.jsx)(Z,{deck:c,setDeck:r})})]})};var ee=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(u,{}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"/",children:Object(d.jsx)(P,{})}),Object(d.jsx)(i.a,{path:"/decks/new",children:Object(d.jsx)(M,{})}),Object(d.jsx)(i.a,{path:"/decks/:deckId/study",children:Object(d.jsx)(z,{})}),Object(d.jsx)(i.a,{path:"/decks/:deckId",children:Object(d.jsx)($,{})}),Object(d.jsx)(i.a,{children:Object(d.jsx)(o,{})})]})})]})};c(36);var te=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(i.c,{children:Object(d.jsx)(i.a,{path:"/",children:Object(d.jsx)(ee,{})})})})},ce=c(23);c.n(ce).a.config(),s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(U.a,{basename:"/project-flashcards",children:Object(d.jsx)(te,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.6b7a3c97.chunk.js.map