import{_ as p,C as r,o as a,b as i,e as t,k as s,l as d,I as f,g as h,c2 as C,c,W as v,i as L,A as y,B as g,T as w,c7 as x,c5 as k,F as B,m as P,f as V,G as $}from"./index-15bf22bb.js";const b="/estet/assets/emptycart-5da2ee21.png",A={},N={class:"main__cart-empty","data-aos":"fade-down"},E={class:"main__cart-empty-title"},T=t("h2",null,"Ваша корзина пуста",-1),D=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 28 28"},[t("path",{d:"M20.6357 16.8975L20.627 8.07324C20.627 7.45801 20.2227 7.03613 19.5898 7.03613H10.7568C10.1592 7.03613 9.74609 7.48438 9.74609 8.01172C9.74609 8.53027 10.1943 8.96094 10.7305 8.96094H13.8857L17.6123 8.83789L16.0127 10.2441L7.67188 18.5938C7.46973 18.8047 7.35547 19.0508 7.35547 19.2969C7.35547 19.8154 7.83008 20.3076 8.36621 20.3076C8.6123 20.3076 8.8584 20.2021 9.06934 20L17.4189 11.6504L18.8428 10.0508L18.6934 13.6191V16.9238C18.6934 17.4688 19.124 17.9258 19.6602 17.9258C20.1875 17.9258 20.6357 17.4775 20.6357 16.8975Z"})],-1),F=t("div",{class:"main__cart-empty-img"},[t("img",{src:b,alt:""})],-1);function H(l,e){const o=r("router-link");return a(),i("div",N,[t("div",E,[T,s(o,{to:"/products"},{default:d(()=>[f(" выбрать товар "),D]),_:1})]),F])}const M=p(A,[["render",H]]),S={class:"main"},U={__name:"EmptyCartPage",setup(l){const e=h(!1),o=C(),_=c(()=>o.products),n=v(),m=c(()=>n.actionList);return L(async()=>{y.refresh(),document.body.classList.add("no-scroll");try{await Promise.all([o.getProducts({limit:10}),n.getActions()])}finally{e.value=!0,document.body.classList.remove("no-scroll")}}),g(()=>{e.value===!1&&document.body.classList.remove("no-scroll")}),(G,I)=>{const u=r("Preloader");return a(),i(B,null,[s(w,{name:"preloader"},{default:d(()=>[e.value?V("",!0):(a(),P(u,{key:0}))]),_:1}),t("div",S,[s(M),s(x,{title:"вам понравится",productData:_.value},null,8,["productData"]),s(k,{discountsContent:m.value},null,8,["discountsContent"]),s($)])],64)}}};export{U as default};
