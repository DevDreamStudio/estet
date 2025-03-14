import{c5 as C,g as v,r as M,o as _,b as m,w as S,e as t,f as g,t as p,n as V,i as w,A as $,bS as k,C as b,k as h,l as L,Y as B,K as I,F as x,j as F,m as P,p as y,V as q,c as D,c1 as A,B as H,T as N,c4 as U,c6 as z}from"./index-26a5ca52.js";const j={key:0,class:"main__cart-card"},Q={key:0,class:"main__cart-card-img"},T=["alt"],E={class:"main__cart-card-content"},K={class:"main__cart-card-content-left"},O={class:"main__cart-card-content-left-text"},R={class:"main__cart-card-content-left-text-title"},Y={class:"main__cart-card-content-left-text-subtitle"},Z={class:"main__cart-card-content-left-counter"},G={class:"main__cart-card-content-left-counter-wrapper"},J=t("path",{d:"M9.59844 6L2.39844 6","stroke-width":"2","stroke-linecap":"round"},null,-1),W=[J],X={class:"main__cart-card-content-left-counter-wrapper-count"},tt=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none"},[t("path",{d:"M5.99844 2.3999L5.99844 9.5999M9.59844 5.9999L2.39844 5.9999","stroke-width":"2","stroke-linecap":"round"})],-1),ot=[tt],at=t("span",{class:"main__cart-card-content-left-counter-type"}," товар ",-1),nt={class:"main__cart-card-content-right"},st={class:"main__cart-card-content-right-cost"},et={class:"main__cart-card-content-right-cost-price"},ct={class:"main__cart-card-content-right-cost-sale"},it=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[t("path",{d:"M2.39844 5.3998H21.5984M8.39844 1.7998H15.5984M9.59844 17.3998V10.1998M14.3984 17.3998V10.1998M16.1984 22.1998H7.79844C6.47295 22.1998 5.39844 21.1253 5.39844 19.7998L4.85052 6.64976C4.82211 5.96801 5.36714 5.3998 6.04948 5.3998H17.9474C18.6297 5.3998 19.1748 5.96801 19.1464 6.64976L18.5984 19.7998C18.5984 21.1253 17.5239 22.1998 16.1984 22.1998Z","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),rt=[it],dt={__name:"CartCardItem",props:["productData"],setup(n){const o=C(),c=n,s=v(c.productData.quantity),i=v(!0),r=()=>{i.value=!1,o.deleteFromCart(c.productData)},l=()=>{s.value>1&&(s.value--,o.changeQuantity("-",c.productData))},a=()=>{s.value++,o.changeQuantity("+",c.productData)};return(e,d)=>{const f=M("lazy");return i.value?(_(),m("div",j,[n.productData.product_images.length?(_(),m("div",Q,[S(t("img",{alt:n.productData.title},null,8,T),[[f,n.productData.product_images[0].image]])])):g("",!0),t("div",E,[t("div",K,[t("div",O,[t("span",R,p(n.productData.category),1),t("span",Y,p(n.productData.title),1)]),t("div",Z,[t("div",G,[t("button",{onClick:d[0]||(d[0]=u=>{l(),e.$emit("infoChanged")}),class:"main__cart-card-content-left-counter-wrapper-minus"},[(_(),m("svg",{class:V({disable:s.value===1}),xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none"},W,2))]),t("span",X,p(s.value),1),t("button",{onClick:d[1]||(d[1]=u=>{a(),e.$emit("infoChanged")}),class:"main__cart-card-content-left-counter-wrapper-plus"},ot)]),at])]),t("div",nt,[t("div",st,[t("span",et,p(n.productData.price)+"р",1),t("span",ct,p(n.productData.discount)+"р",1)]),t("button",{onClick:d[2]||(d[2]=u=>{r(),e.$emit("infoChanged")}),class:"main__cart-card-content-right-cart"},rt)])])])):g("",!0)}}},lt={class:"main__cart-info"},_t={class:"main__cart-info-top"},ut={class:"main__cart-info-top-text"},pt=t("span",null,"Итого:",-1),mt={class:"main__cart-info-top-price"},ht={class:"main__cart-info-top-price-sale"},ft={class:"main__cart-info-top-price-cost"},vt=B('<div class="main__cart-info-bottom"><div class="main__cart-info-bottom-content"><div class="main__cart-info-bottom-content-warning"><h5>ВАЖНО!</h5><p> На нашем сайте вы можете приобрести товары только на самовызов и забрать их в клинике по адресу: </p></div><div class="main__cart-info-bottom-content-address"><a href="#!">г. Кемерово, ул. Терешковой 18</a><a href="tel:+7 (904) 376-25-12">+7 (904) 376-25-12</a><p>Работаем ежедневно: 9:00-21:00</p></div><span class="main__cart-info-bottom-content-notification"> На нашем сайте нет доставки, надеемся на ваше понимание </span></div></div>',1),gt=t("button",{class:"main__cart-info-btn"}," оформить заказ ",-1),Ct={__name:"CartInfo",props:["cart","infoChanging"],emits:["infoUpdated"],setup(n,{emit:o}){const c=C(),s=o,i=n,r=v({productCount:0,totalPrice:0,totalDiscount:0}),l=()=>{var d;const a=(d=c.getCartFromLocal())==null?void 0:d.products;let e={productCount:0,totalPrice:0,totalDiscount:0};for(let f=0;f<(a==null?void 0:a.length);f++){const u=a[f];e.productCount+=u.quantity,e.totalDiscount+=u.discount*u.quantity,e.totalPrice+=u.price*u.quantity}r.value={...e}};return w(()=>{l(),$.refresh()}),k(()=>i.infoChanging,a=>{a==!0&&l(),s("infoUpdated")}),(a,e)=>{const d=b("router-link");return _(),m("div",lt,[t("div",_t,[t("div",ut,[pt,t("span",null,p(`${r.value.productCount} ${r.value.productCount==1?"товар":"товаров"}`),1)]),t("div",mt,[t("span",ht,p(r.value.totalDiscount)+" Р",1),t("span",ft,p(r.value.totalPrice.toLocaleString())+" Р",1)])]),vt,h(d,{to:"data-cart"},{default:L(()=>[gt]),_:1})])}}},wt={class:"main__cart-products"},$t=t("h2",{class:"main__cart-products-title"},"корзина",-1),yt={class:"main__cart-products-wrapper","data-aos":"fade-down"},Dt={class:"main__cart-products-wrapper-cards"},kt={__name:"CartProductsInfo",setup(n){const o=C(),c=I(),s=o.getCartFromLocal(),i=v(!1);return w(async()=>{$.refresh(),o.getCartFromLocal()}),k(()=>o.cart.products,r=>{o.cart.products.length===0&&c.push("empty-cart")}),(r,l)=>(_(),m("div",wt,[$t,t("div",yt,[t("div",Dt,[(_(!0),m(x,null,F(y(s).products,a=>(_(),P(dt,{key:a.id,productData:a,onInfoChanged:l[0]||(l[0]=e=>i.value=!0)},null,8,["productData"]))),128))]),h(Ct,{cart:y(s).products,infoChanging:i.value,onInfoUpdated:l[1]||(l[1]=a=>i.value=!1)},null,8,["cart","infoChanging"])])]))}},bt={class:"main"},xt={__name:"CartProductsPage",setup(n){const o=v(!1),c=q(),s=D(()=>c.actionList),i=A(),r=D(()=>i.products);return w(async()=>{$.refresh(),document.body.classList.add("no-scroll");try{await Promise.all([i.getProducts({limit:10}),c.getActions()])}finally{o.value=!0,document.body.classList.remove("no-scroll")}}),H(()=>{o.value===!1&&document.body.classList.remove("no-scroll")}),(l,a)=>{const e=b("Preloader");return _(),m(x,null,[h(N,{name:"preloader"},{default:L(()=>[o.value?g("",!0):(_(),P(e,{key:0}))]),_:1}),t("div",bt,[h(kt),h(U,{discountsContent:s.value},null,8,["discountsContent"]),h(z,{title:"вам понравится",productData:r.value},null,8,["productData"])])],64)}}};export{xt as default};
