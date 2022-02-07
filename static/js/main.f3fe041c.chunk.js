(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(t,e,c){t.exports={item:"CartItem_item__xAyld",details:"CartItem_details__1EZHk",quantity:"CartItem_quantity__2QqmG",price:"CartItem_price__hbnjT",itemprice:"CartItem_itemprice__2Y1l1",actions:"CartItem_actions__1vJqt"}},,,,function(t,e,c){t.exports={item:"ProductItem_item__2zHJV",price:"ProductItem_price__24j8B",actions:"ProductItem_actions__2ARKm"}},function(t,e,c){t.exports={notification:"Notification_notification__37TlO",error:"Notification_error__16P3q",success:"Notification_success__3ktqj"}},,,function(t,e,c){t.exports={button:"CartButton_button__3-wtj",badge:"CartButton_badge__2vB80"}},,function(t,e,c){t.exports={card:"Card_card__cvmTk"}},function(t,e,c){t.exports={cart:"Cart_cart__1ZiMW"}},function(t,e,c){t.exports={header:"MainHeader_header__36SPH"}},function(t,e,c){t.exports={products:"Products_products__3qUf4"}},,,,,,,,function(t,e,c){},,,function(t,e,c){"use strict";c.r(e);var n=c(7),a=c.n(n),i=c(2),r=(c(25),c(14)),s=c.n(r),o=c(0),u=function(t){return Object(o.jsx)("section",{className:"".concat(s.a.card," ").concat(t.className?t.className:""),children:t.children})},d=c(15),l=c.n(d),j=c(4),p=c.n(j),b=c(5),f=Object(b.b)({name:"cart",initialState:{items:[],totalQuantity:0,changed:!1},reducers:{replaceCart:function(t,e){t.totalQuantity=e.payload.totalQuantity?e.payload.totalQuantity:0,t.items=e.payload.items?e.payload.items:[]},addItemToCart:function(t,e){var c=e.payload,n=t.items.find((function(t){return t.id===c.id}));t.totalQuantity++,t.changed=!0,n?(n.quantity++,n.totalPrice=n.totalPrice+c.price):t.items.push({id:c.id,price:c.price,quantity:1,totalPrice:c.price,name:c.name})},removeItemFromCart:function(t,e){var c=e.payload,n=t.items.find((function(t){return t.id===c}));t.totalQuantity--,t.changed=!0,1===n.quantity?t.items=t.items.filter((function(t){return t.id!==c})):(n.quantity--,n.totalPrice=n.totalPrice-n.price)}}}),h=f.actions,m=f,x=function(t){var e=Object(i.b)(),c=t.item,n=c.id,a=c.title,r=c.quantity,s=c.total,u=c.price;return Object(o.jsxs)("li",{className:p.a.item,children:[Object(o.jsxs)("header",{children:[Object(o.jsx)("h3",{children:a}),Object(o.jsxs)("div",{className:p.a.price,children:["$",s.toFixed(2)," ",Object(o.jsxs)("span",{className:p.a.itemprice,children:["($",u.toFixed(2),"/item)"]})]})]}),Object(o.jsxs)("div",{className:p.a.details,children:[Object(o.jsxs)("div",{className:p.a.quantity,children:["x ",Object(o.jsx)("span",{children:r})]}),Object(o.jsxs)("div",{className:p.a.actions,children:[Object(o.jsx)("button",{onClick:function(){e(h.removeItemFromCart(n))},children:"-"}),Object(o.jsx)("button",{onClick:function(){e(h.addItemToCart({id:n,title:a,quantity:r,total:s,price:u}))},children:"+"})]})]})]})},O=function(t){var e=Object(i.c)((function(t){return t.cart.items}));return Object(o.jsxs)(u,{className:l.a.cart,children:[Object(o.jsx)("h2",{children:"Your Shopping Cart"}),Object(o.jsx)("ul",{children:e.map((function(t){return Object(o.jsx)(x,{item:{title:t.name,quantity:t.quantity,total:t.totalPrice,price:t.price,id:t.id}},t.id)}))})]})},_=c(1),y=c(12),v=c.n(y),g=Object(b.b)({name:"ui",initialState:{cartIsVisible:!1,notification:null},reducers:{toggle:function(t){t.cartIsVisible=!t.cartIsVisible},showNotification:function(t,e){t.notification={status:e.payload.status,title:e.payload.title,message:e.payload.message}}}}),N=g.actions,C=g,k=function(t){var e=Object(i.b)(),c=Object(i.c)((function(t){return t.cart.totalQuantity}));return Object(o.jsxs)("button",{className:v.a.button,onClick:function(){e(N.toggle(void 0))},children:[Object(o.jsx)("span",{children:"My Cart"}),Object(o.jsx)("span",{className:v.a.badge,children:c})]})},w=c(16),I=c.n(w),q=function(t){return Object(o.jsxs)("header",{className:I.a.header,children:[Object(o.jsx)("h1",{children:"ReduxCart"}),Object(o.jsx)("nav",{children:Object(o.jsx)("ul",{children:Object(o.jsx)("li",{children:Object(o.jsx)(k,{})})})})]})},P=function(t){return Object(o.jsxs)(_.Fragment,{children:[Object(o.jsx)(q,{}),Object(o.jsx)("main",{children:t.children})]})},S=c(8),Q=c.n(S),E=function(t){var e=Object(i.b)(),c=t.title,n=t.price,a=t.description,r=t.id;return Object(o.jsx)("li",{className:Q.a.item,children:Object(o.jsxs)(u,{children:[Object(o.jsxs)("header",{children:[Object(o.jsx)("h3",{children:c}),Object(o.jsxs)("div",{className:Q.a.price,children:["$",n.toFixed(2)]})]}),Object(o.jsx)("p",{children:a}),Object(o.jsx)("div",{className:Q.a.actions,children:Object(o.jsx)("button",{onClick:function(){e(h.addItemToCart({id:r,price:n,title:c}))},children:"Add to Cart"})})]})})},B=c(17),T=c.n(B),F=[{id:"P1",price:142.5,title:"Alice Marta Bag",description:"Nute - Khaki"},{id:"P2",price:31.1,title:"Marhen.J",description:"KONY POCKET Beige"}],J=function(t){return Object(o.jsxs)("section",{className:T.a.products,children:[Object(o.jsx)("h2",{children:"Buy your favorite products"}),Object(o.jsx)("ul",{children:F.map((function(t){return Object(o.jsx)(E,{title:t.title,price:t.price,description:t.description,id:t.id},t.id)}))})]})},M=c(9),V=c.n(M),A=function(t){var e="";"error"===t.status&&(e=V.a.error),"success"===t.status&&(e=V.a.success);var c="".concat(V.a.notification," ").concat(e);return Object(o.jsxs)("section",{className:c,children:[Object(o.jsx)("h2",{children:t.title}),Object(o.jsx)("p",{children:t.message})]})},H=c(6),K=c(3),Y=c.n(K),$=!0;var G=function(){var t=Object(i.b)(),e=Object(i.c)((function(t){return t.ui.cartIsVisible})),c=Object(i.c)((function(t){return t.cart})),n=Object(i.c)((function(t){return t.ui.notification}));return Object(_.useEffect)((function(){t(function(){var t=Object(H.a)(Y.a.mark((function t(e){var c,n;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(){var t=Object(H.a)(Y.a.mark((function t(){var e,c;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://myapptest-30de9-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json");case 2:if((e=t.sent).ok){t.next=5;break}throw new Error("Could not fetch cart data!");case 5:return t.next=7,e.json();case 7:return c=t.sent,t.abrupt("return",c);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.prev=1,t.next=4,c();case 4:n=t.sent,e(h.replaceCart(n)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0),e(N.showNotification({status:"error",title:"Error!",message:"Get cart data failed!"}));case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}())}),[t]),Object(_.useEffect)((function(){$?$=!1:c.changed&&t(function(t){return function(){var e=Object(H.a)(Y.a.mark((function e(c){var n;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(N.showNotification({status:"pending",title:"Sending...",message:"Sending cart data!"})),n=function(){var e=Object(H.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://myapptest-30de9-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",{method:"PUT",body:JSON.stringify({items:t.items,totalQuantity:t.totalQuantity})});case 2:if(e.sent.ok){e.next=5;break}throw new Error("Sending cart data failed.");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=2,e.next=5,n();case 5:c(N.showNotification({status:"success",title:"Success!",message:"Send cart data successfully!"})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0),c(N.showNotification({status:"error",title:"Error!",message:"Send cart data failed!"}));case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()}(c))}),[c,t]),Object(o.jsxs)(o.Fragment,{children:[n&&Object(o.jsx)(A,{status:n.status,title:n.title,message:n.message}),Object(o.jsxs)(P,{children:[e&&Object(o.jsx)(O,{}),Object(o.jsx)(J,{})]})]})},R=Object(b.a)({reducer:{ui:C.reducer,cart:m.reducer}});a.a.render(Object(o.jsx)(i.a,{store:R,children:Object(o.jsx)(G,{})}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.f3fe041c.chunk.js.map