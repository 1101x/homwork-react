import e,{createElement as E}from"https://esm.sh/react";import{createRoot as n}from"https://esm.sh/react-dom";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function p(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(t){if(t.ep)return;t.ep=!0;const r=p(t);fetch(t.href,r)}})();const f=E("span",{id:"sr-only"},"난 울지 않아"),s={title:"환승연애3",src:"https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231204/0755/P001749878.jpg/dims/resize/F_webp,480",alt:"환승연애3 포스터"},u={width:"200px"},g=e.createElement("header",{className:"헤더",style:{background:"black"}},e.createElement("a",{href:"https://jfam.netlify.app/",target:"_black"},"jfam")),h=e.createElement("section",{className:"bigbanner",style:{background:"SteelBlue",height:"200px"}},e.createElement("h2",{className:"sr-only"},"최상단 배너 영역")),y=e.createElement("section",{className:"programs"},e.createElement("h2",null,"JFAM에서 꼭 봐야하는 콘텐츠"),e.createElement("div",{className:"wrapper"},e.createElement("div",{style:{background:"RosyBrown"}},e.createElement("figure",null,e.createElement("a",{href:"https://search.naver.com/search.naver?where=nexearch&sm=top_sug.pre&fbm=0&acr=1&acq=%EC%9B%B0%EC%BB%B4&qdt=0&ie=utf8&query=%EC%9B%B0%EC%BB%B4%ED%88%AC%EC%82%BC%EB%8B%AC%EB%A6%AC",target:"_black"},e.createElement("img",{style:u,src:"https://image.tving.com/ntgs/contents/CTC/caip/CAIP0900/ko/20231202/1025/P001749248.jpg/dims/resize/F_webp,480",alt:"웰컴투삼달리 포스터"})),e.createElement("figcaption",null,"웰컴투삼달리"))),e.createElement("div",{style:{background:"Goldenrod"}},e.createElement("figure",null,e.createElement("a",{href:"https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%ED%99%98%EC%8A%B9%EC%97%B0%EC%95%A03&oquery=%EC%9B%B0%EC%BB%B4%ED%88%AC%EC%82%BC%EB%8B%AC%EB%A6%AC&tqi=ij0x%2BwqVN8ossZyJ2V8ssssssiC-143917",target:"_black"},e.createElement("img",{style:u,src:s.src,alt:s.alt})),e.createElement("figcaption",null,s.title))))),B=e.createElement("footer",{className:"footer",style:{background:"black"}},e.createElement("p",null,"copyright © 주식회사 이듬 All right reserved."),e.createElement("address",null,"웹 사이트 문의 : ",e.createElement("a",{href:"mailto:000@0000.000"}," 000@0000.000"),e.createElement("a",{href:"tel:+82 0200000000"}," +82 (02) 0000-0000"))),b=document.getElementById("root"),C=n(b);C.render(f);const a=document.createElement("div");a.setAttribute("id","header");document.body.append(a);const A=n(a);A.render(g);const l=document.createElement("main");l.setAttribute("id","contents");document.body.append(l);const v=n(l);v.render(h);const i=document.createElement("div");i.setAttribute("id","programs01");document.body.append(i);const N=n(i);N.render(y);const m=document.createElement("div");m.setAttribute("id","footer");document.body.append(m);const w=n(m);w.render(B);
