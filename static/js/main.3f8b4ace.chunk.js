(this["webpackJsonpproject-flashcards"]=this["webpackJsonpproject-flashcards"]||[]).push([[0],{35:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(21),a=c.n(s),i=c(4),d=c(5),u=c(0);var o=function(){return Object(u.jsx)("header",{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Flashcard-o-matic"}),Object(u.jsx)("h4",{children:"Discover The Flashcard Difference."})]})})};var j=function(){return Object(u.jsx)("section",{children:Object(u.jsx)("h1",{children:"Not Found"})})},l=c(2),b=c.n(l),h=c(3),O=c(8),x=c(23),p="https://ericrossbernstein.github.io/project-flashcards/#";console.log("api url","https://ericrossbernstein.github.io/project-flashcards/#");var f=new Headers;function m(e){e.cards;return Object(x.a)(e,["cards"])}function v(e,t){return k.apply(this,arguments)}function k(){return(k=Object(h.a)(b.a.mark((function e(t,c){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,c);case 3:if(!((n=e.sent).status<200||n.status>399)){e.next=6;break}throw new Error("".concat(n.status," - ").concat(n.statusText));case 6:return e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=15;break}throw e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function w(e){return g.apply(this,arguments)}function g(){return(g=Object(h.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(p,"/decks?_embed=cards"),e.next=3,v(c,{signal:t});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t){return y.apply(this,arguments)}function y(){return(y=Object(h.a)(b.a.mark((function e(t,c){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/decks"),r={method:"POST",headers:f,body:JSON.stringify(m(t)),signal:c},e.next=4,v(n,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t){return D.apply(this,arguments)}function D(){return(D=Object(h.a)(b.a.mark((function e(t,c){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/decks/").concat(t,"?_embed=cards"),e.next=3,v(n,{signal:c});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t){return E.apply(this,arguments)}function E(){return(E=Object(h.a)(b.a.mark((function e(t,c){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/decks/").concat(t.id,"?_embed=cards"),r={method:"PUT",headers:f,body:JSON.stringify(m(t)),signal:c},e.next=4,v(n,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t){return H.apply(this,arguments)}function H(){return(H=Object(h.a)(b.a.mark((function e(t,c){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/decks/").concat(t),r={method:"DELETE",signal:c},e.next=4,v(n,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t,c){return A.apply(this,arguments)}function A(){return(A=Object(h.a)(b.a.mark((function e(t,c,n){var r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(p,"/cards"),c.deckId=Number(t),s={method:"POST",headers:f,body:JSON.stringify(c),signal:n},e.next=5,v(r,s);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(h.a)(b.a.mark((function e(t,c){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/cards/").concat(t),e.next=3,v(n,{signal:c});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t){return q.apply(this,arguments)}function q(){return(q=Object(h.a)(b.a.mark((function e(t,c){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/cards/").concat(t.id),r={method:"PUT",headers:f,body:JSON.stringify(t)},e.next=4,v(n,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e,t){return B.apply(this,arguments)}function B(){return(B=Object(h.a)(b.a.mark((function e(t,c){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/cards/").concat(t),r={method:"DELETE",signal:c},e.next=4,v(n,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}f.append("Content-Type","application/json");var P=function(e){var t=e.deckId,c=e.name,n=e.description,r=e.amount,s=e.deleteHandler,a=Object(d.f)();return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsxs)("div",{className:"item",children:[Object(u.jsxs)("div",{className:"group-row",children:[Object(u.jsxs)("div",{className:"item",children:[Object(u.jsx)("h3",{children:c}),Object(u.jsx)("hr",{})]}),Object(u.jsx)("div",{className:"circle",children:Object(u.jsxs)("h6",{children:[r," cards"]})})]}),Object(u.jsx)("p",{children:n})]}),Object(u.jsxs)("div",{className:"footer",children:[Object(u.jsx)("button",{className:"item",onClick:function(){return a.push("/decks/".concat(t))},children:"View"}),Object(u.jsx)("button",{className:"item",onClick:function(){return a.push("/decks/".concat(t,"/study"))},children:"Study"}),Object(u.jsx)("button",{className:"item",onClick:function(){return s(t)},children:"Delete"})]})]})},Y=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),c=t[0],r=t[1],s=Object(d.f)();Object(n.useEffect)((function(){var e=new AbortController;return w(e.signal).then(r),function(){return e.abort()}}),[]);var a=function(){var e=Object(h.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Delete this deck? You will not be able to recover it.")){e.next=9;break}return e.next=4,I(t);case 4:return e.next=6,w();case 6:c=e.sent,r(c),s.push("/");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=c.map((function(e){return Object(u.jsx)(P,{deckId:e.id,name:e.name,description:e.description,amount:e.cards.length,deleteHandler:a},e.id)}));return Object(u.jsx)("main",{children:Object(u.jsx)("section",{children:Object(u.jsxs)("div",{className:"group",children:[Object(u.jsx)("div",{className:"group",children:i}),Object(u.jsx)("button",{className:"item button-create",onClick:function(){return s.push("/decks/new")},children:"Create Deck"})]})})})},_=c(12),U=c(7),M=function(){var e=Object(n.useState)(Object(U.a)({},{name:"",description:""})),t=Object(O.a)(e,2),c=t[0],r=t[1],s=Object(d.f)(),a=function(e){r(Object(U.a)(Object(U.a)({},c),{},Object(_.a)({},e.target.name,e.target.value)))},o=function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,C(c);case 3:s.push("/");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("section",{children:[Object(u.jsxs)("nav",{children:[Object(u.jsx)(i.c,{to:"/",children:"Home"})," / ",Object(u.jsx)("span",{children:"Create Deck"})]}),Object(u.jsx)("h3",{children:"Create Deck"}),Object(u.jsx)("form",{onSubmit:o,children:Object(u.jsxs)("fieldset",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(u.jsx)("input",{id:"name",name:"name",type:"text",required:!0,value:c.name,maxLength:"100",onChange:a})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"description",children:"Description:"}),Object(u.jsx)("textarea",{id:"description",name:"description",required:!0,rows:"3",maxLength:"500",value:c.description,onChange:a})]}),Object(u.jsxs)("div",{className:"group-row",children:[Object(u.jsx)("button",{className:"item",onClick:function(){return s.push("/")},children:"Cancel"}),Object(u.jsx)("button",{className:"item",type:"submit",children:"Submit"})]})]})})]})},R=function(e){var t=e.currentCard,c=e.flipCard;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h5",{children:"Front:"}),Object(u.jsx)("p",{children:t.front})]}),Object(u.jsx)("button",{className:"button-flip",onClick:function(){return c()},children:"Flip"})]})},V=function(e){var t=e.currentCard,c=e.flipCard,n=e.nextCard;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h5",{children:"Back:"}),Object(u.jsx)("p",{children:t.back})]}),Object(u.jsxs)("div",{className:"group-row",children:[Object(u.jsx)("button",{className:"item",onClick:function(){return c()},children:"Flip"}),Object(u.jsx)("button",{className:"item",onClick:function(){return n()},children:"Next"})]})]})},z=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(0),a=Object(O.a)(s,2),o=a[0],j=a[1],l=Object(n.useState)(!0),b=Object(O.a)(l,2),h=b[0],x=b[1],p=Object(d.g)().deckId,f=Object(d.f)();Object(n.useEffect)((function(){var e=new AbortController;return N(p,e.signal).then(r),function(){return e.abort()}}),[p]);var m=function(){window.confirm("Restart cards? Click 'cancel' to return to the home page.")?(j(0),x(!0)):f.push("/")},v=function(){x((function(e){return!e}))};return c.name?Object(u.jsxs)("section",{children:[Object(u.jsxs)("nav",{children:[Object(u.jsx)(i.c,{to:"/",children:"Home"})," / ",Object(u.jsx)(i.c,{to:"/decks/".concat(p),children:c.name})," / ",Object(u.jsx)("span",{children:"Study"})]}),Object(u.jsxs)("h2",{children:["Study : ",Object(u.jsx)("i",{children:c.name})]}),c.cards.length<=2?Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Not enough cards."}),Object(u.jsxs)("p",{children:["You need at least 3 cards to study. There are ",c.cards.length," ","cards in this deck"]}),Object(u.jsx)("button",{onClick:function(){return f.push("/decks/".concat(p,"/cards/new"))},children:"Add Cards"})]}):Object(u.jsxs)("div",{className:"card",children:[Object(u.jsxs)("h4",{children:["Card ",o+1," of ",c.cards.length]}),Object(u.jsx)("hr",{}),h?Object(u.jsx)(R,{currentCard:c.cards[o],flipCard:v}):Object(u.jsx)(V,{currentCard:c.cards[o],flipCard:v,nextCard:function(){o<c.cards.length-1?(j((function(e){return e+1})),x(!0)):m()}})]})]}):null},G=function(e){var t=e.cards,c=e.deckId,n=e.refreshDeck,r=Object(d.f)(),s=function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Delete this card? You will not be able to recover it.")){e.next=7;break}return e.next=4,J(t);case 4:return e.next=6,n();case 6:r.push("/decks/".concat(c));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"group",children:t.map((function(e){return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsxs)("div",{className:"item",children:[Object(u.jsx)("h5",{children:"Front :"}),Object(u.jsx)("p",{children:e.front}),Object(u.jsx)("hr",{})]}),Object(u.jsxs)("div",{className:"item",children:[Object(u.jsx)("h5",{children:"Back :"}),Object(u.jsx)("p",{children:e.back}),Object(u.jsx)("hr",{})]}),Object(u.jsxs)("div",{className:"footer",children:[Object(u.jsx)("button",{className:"item",onClick:function(){return r.push("/decks/".concat(c,"/cards/").concat(e.id,"/edit"))},children:"Edit"}),Object(u.jsx)("button",{className:"item",onClick:function(){return s(e.id)},children:"Delete"})]})]},e.id)}))})},K=function(e){var t=e.deck,c=e.setDeck,r=Object(d.g)().deckId,s=Object(d.f)();Object(n.useEffect)((function(){var e=new AbortController;return N(r,e.signal).then(c),function(){return e.abort()}}),[r,c]);var a=function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Delete this deck? You will not be able to recover it.")){e.next=5;break}return e.next=4,I(t);case 4:s.push("/");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(r);case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return t.id?Object(u.jsx)("section",{children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("nav",{children:[Object(u.jsx)(i.c,{to:"/",children:"Home"})," / ",Object(u.jsx)("span",{children:t.name})]}),Object(u.jsxs)("div",{className:"group",children:[Object(u.jsxs)("div",{className:"item-triple",children:[Object(u.jsx)("h3",{children:t.name}),Object(u.jsx)("p",{children:t.description})]}),Object(u.jsxs)("div",{className:"group-row",children:[Object(u.jsx)("button",{className:"button-deck",onClick:function(){return s.push("/decks/".concat(r,"/edit"))},children:"Edit"}),Object(u.jsx)("button",{className:"button-deck",onClick:function(){return s.push("/decks/".concat(r,"/study"))},children:"Study"}),Object(u.jsx)("button",{className:"button-deck",onClick:function(){return s.push("/decks/".concat(r,"/cards/new"))},children:"Add Cards"}),Object(u.jsx)("button",{className:"button-deck",onClick:function(){return a(r)},children:"Delete Deck"})]})]})]}),Object(u.jsx)("h2",{children:"Cards"}),Object(u.jsx)("hr",{}),Object(u.jsx)(G,{cards:t.cards,deckId:r,refreshDeck:o})]})}):null},Q=function(e){var t=e.deck,c=e.setDeck,r=Object(d.f)(),s=Object(d.g)().deckId;Object(n.useEffect)((function(){var e=new AbortController;return N(s,e.signal).then(c),function(){return e.abort()}}),[s,c]);var a=function(e){c(Object(U.a)(Object(U.a)({},t),{},Object(_.a)({},e.target.name,e.target.value)))},o=function(){var e=Object(h.a)(b.a.mark((function e(c){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,S(t);case 3:r.push("/decks/".concat(s));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("section",{children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("nav",{children:[Object(u.jsx)(i.c,{to:"/",children:"Home"})," / ",Object(u.jsx)(i.c,{to:"/decks/".concat(s),children:t.name})," / ",Object(u.jsx)("span",{children:"Edit Deck"})]}),Object(u.jsx)("h2",{children:"Edit Deck"}),Object(u.jsx)("form",{onSubmit:o,children:Object(u.jsxs)("fieldset",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"name",children:"Name :"}),Object(u.jsx)("input",{id:"name",name:"name",type:"text",required:!0,value:t.name,maxLength:"100",onChange:a})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"description",children:"Description :"}),Object(u.jsx)("textarea",{id:"description",name:"description",required:!0,rows:"3",maxLength:"500",value:t.description,onChange:a})]}),Object(u.jsxs)("div",{className:"group-row",children:[Object(u.jsx)("button",{className:"item",onClick:function(){return r.push("/decks/".concat(s))},children:"Cancel"}),Object(u.jsx)("button",{className:"item",type:"submit",children:"Submit"})]})]})})]})})},W=function(e){var t=e.history,c=e.isNewCard,n=e.card,r=e.deckId,s=e.changeHandler,a=e.submitHandler;return Object(u.jsx)("form",{onSubmit:a,children:Object(u.jsxs)("fieldset",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"front",children:"Front :"}),Object(u.jsx)("textarea",{id:"front",name:"front",required:!0,rows:"3",maxLength:"300",value:n.front,onChange:s})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"back",children:"Back :"}),Object(u.jsx)("textarea",{id:"back",name:"back",required:!0,rows:"3",maxLength:"300",value:n.back,onChange:s})]}),Object(u.jsxs)("div",{className:"group-row",children:[Object(u.jsx)("button",{className:"item",onClick:function(){return t.push("/decks/".concat(r))},children:c?"Done":"Cancel"}),Object(u.jsx)("button",{className:"item",type:"submit",children:c?"Save":"Submit"})]})]})})},X=function(e){var t={front:"",back:""},c=Object(n.useState)(Object(U.a)({},t)),r=Object(O.a)(c,2),s=r[0],a=r[1],o=e.deck,j=e.setDeck,l=Object(d.f)(),x=Object(d.g)().deckId;Object(n.useEffect)((function(){var e=new AbortController;return N(x,e.signal).then(j),function(){return e.abort()}}),[x,j]);var p=function(){var e=Object(h.a)(b.a.mark((function e(c){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,F(x,s);case 3:a(Object(U.a)({},t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.name?Object(u.jsx)("section",{children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("nav",{children:[Object(u.jsx)(i.c,{to:"/",children:"Home"})," / ",Object(u.jsx)(i.c,{to:"/decks/".concat(x),children:o.name})," / ",Object(u.jsx)("span",{children:"Add Card"})]}),Object(u.jsxs)("h2",{children:[Object(u.jsx)("i",{children:o.name})," : Add Card"]}),Object(u.jsx)(W,{history:l,isNewCard:!0,card:s,deckId:x,changeHandler:function(e){a(Object(U.a)(Object(U.a)({},s),{},Object(_.a)({},e.target.name,e.target.value)))},submitHandler:p})]})}):null},Z=function(e){var t=Object(n.useState)(Object(U.a)({},{front:"",back:""})),c=Object(O.a)(t,2),r=c[0],s=c[1],a=e.deck,o=e.setDeck,j=Object(d.f)(),l=Object(d.g)(),x=l.deckId,p=l.cardId;Object(n.useEffect)((function(){var e=new AbortController;return function(e,t){return T.apply(this,arguments)}(p,e.signal).then(s),function(){return e.abort()}}),[p]),Object(n.useEffect)((function(){var e=new AbortController;return N(x,e.signal).then(o),function(){return e.abort()}}),[x,o]);var f=function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,L(r);case 3:j.push("/decks/".concat(x));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.name?Object(u.jsx)("section",{children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("nav",{children:[Object(u.jsx)(i.c,{to:"/",children:"Home"})," / ",Object(u.jsx)(i.c,{to:"/decks/".concat(x),children:a.name})," / ",Object(u.jsxs)("span",{children:["Edit Card ",p]})]}),Object(u.jsx)("h2",{children:"Edit Card"}),Object(u.jsx)(W,{history:j,isNewCard:!1,card:r,deckId:x,changeHandler:function(e){s(Object(U.a)(Object(U.a)({},r),{},Object(_.a)({},e.target.name,e.target.value)))},submitHandler:f})]})}):null},$=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),c=t[0],r=t[1];return Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{exact:!0,path:"/decks/:deckId",children:Object(u.jsx)(K,{deck:c,setDeck:r})}),Object(u.jsx)(d.a,{path:"/decks/:deckId/edit",children:Object(u.jsx)(Q,{deck:c,setDeck:r})}),Object(u.jsx)(d.a,{path:"/decks/:deckId/cards/new",children:Object(u.jsx)(X,{deck:c,setDeck:r})}),Object(u.jsx)(d.a,{path:"/decks/:deckId/cards/:cardId/edit",children:Object(u.jsx)(Z,{deck:c,setDeck:r})})]})};var ee=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(o,{}),Object(u.jsx)("hr",{}),Object(u.jsx)("div",{children:Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{exact:!0,path:"/",children:Object(u.jsx)(Y,{})}),Object(u.jsx)(d.a,{exact:!0,path:"/decks/new",children:Object(u.jsx)(M,{})}),Object(u.jsx)(d.a,{exact:!0,path:"/decks/:deckId/study",children:Object(u.jsx)(z,{})}),Object(u.jsx)(d.a,{path:"/decks/:deckId",children:Object(u.jsx)($,{})}),Object(u.jsx)(d.a,{children:Object(u.jsx)(j,{})})]})})]})};c(35);var te=function(){return Object(u.jsx)(i.b,{basename:"/",children:Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(d.c,{children:Object(u.jsx)(d.a,{path:"/",children:Object(u.jsx)(ee,{})})})})})};c(36).config(),a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(i.a,{children:Object(u.jsx)(te,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.3f8b4ace.chunk.js.map