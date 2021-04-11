(this["webpackJsonpnews-explorer-frontend"]=this["webpackJsonpnews-explorer-frontend"]||[]).push([[0],{30:function(e,n,t){},31:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t(1),s=t.n(c),i=t(22),o=t.n(i),r=t(8),l=(t(30),t(24)),d=t(12),u=t(13),h=t(2),b=t(3),m=(t(31),s.a.createContext());var j=function(e){var n=e.loggedIn,t=e.isMainPage,i=e.handleSignout,o=e.handleSigninButtonClick,l=e.handleMenuIconClick,d=e.showAllNavLinks,u=e.handleResize,h=e.windowInnerWidth,b=e.modalIsOpen,j=s.a.useContext(m);return Object(c.useEffect)((function(){window.addEventListener("resize",u)})),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("nav",{className:"header-nav__links ".concat(d&&h<768?"header-nav__links_mobile":""),children:[Object(a.jsx)(r.b,{to:"/",className:"header-nav__title ".concat(!d&&!t&&!h<768?"header-nav__title_dark":""),children:"NewsExplorer"}),h<768&&Object(a.jsx)("button",{type:"button","aria-label":"show-header-links-menu",onClick:l,className:"header-nav__menu ".concat(d||b?"header-nav__menu_type_close":"header-nav__menu_type_burger".concat(t?"":"-dark"))}),(h>=768||d)&&Object(a.jsxs)("ul",{className:"header-nav__links-container ".concat(d?"header-nav__links-container_mobile":""),children:[Object(a.jsx)("li",{className:"header-nav__home clickable ".concat(t&&"header-nav__bottom-border"),children:Object(a.jsx)(r.b,{onClick:l,onKeyDown:l,className:"header-nav__home-text ".concat(t||d?"":"header-nav__home-text_dark"),to:"/",children:"Home"})}),(n||d)&&Object(a.jsx)("li",{className:"header-nav__saved-news clickable ".concat(!t&&"header-nav__bottom-border_dark"),children:Object(a.jsx)(r.b,{onClick:l,onKeyDown:l,className:"header-nav__saved-news-text ".concat(t||d?"header-nav__saved-news-text_light":""),to:"/saved-news",children:"Saved articles"})}),n?Object(a.jsx)("li",{className:"header-nav__user-button-container",children:Object(a.jsxs)("button",{onClick:i,type:"button",className:"header-nav__user-button clickable ".concat(t||d?"":"header-nav__user-button_dark"),children:[j.name,Object(a.jsx)("img",{className:"header-nav__logout-icon",src:t||d?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAJFBMVEUAAAD///////////////////////////////////////////+0CY3pAAAAC3RSTlMA3yAQz++fYFBAMM5jkV0AAABYSURBVBjTYyAPlO7ejeBIgzgKUA5InCMMicMlnYDgMChuM0BwmKSdoRyw1BYDCEcQCER3O0M4u8FACEnZRgVMA6D6IRyoBJzDDrWTIRrk0AlQtxUCOeQDAJTKHWfi5/b0AAAAAElFTkSuQmCC":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAJFBMVEUAAAAZGiEYGCAQECAaGyEaGyIZGyEZGyEZGSAYGCAbGyAaGyIZyq+vAAAAC3RSTlMA3yAQz++fYFBAMM5jkV0AAABYSURBVBjTYyAPlO7ejeBIgzgKUA5InCMMicMlnYDgMChuM0BwmKSdoRyw1BYDCEcQCER3O0M4u8FACEnZRgVMA6D6IRyoBJzDDrWTIRrk0AlQtxUCOeQDAJTKHWfi5/b0AAAAAElFTkSuQmCC",alt:"Logout icon"})]})}):Object(a.jsx)("li",{className:"header-nav__signin-container",children:Object(a.jsx)("button",{type:"button",className:"header-nav__signin clickable",onClick:o,children:"Sign in"})})]})]})})};var p=function(e){var n=e.showAllNavLinks,t=e.handleSearchChange,c=e.searchTerm,s=e.handleSearchSubmit,i=e.isLoading;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("section",{className:"search-form ".concat(n?"search-form_mobile-menu":""),children:[Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{className:"search-form__title",children:"What's going on in the world?"}),Object(a.jsx)("p",{className:"search-form__subtitle",children:"Find the latest news on any topic and save them in your personal account."})]}),Object(a.jsxs)("form",{className:"search-form__form",children:[Object(a.jsx)("input",{className:"search-form__search-bar",type:"search",id:"search",name:"search","aria-label":"search-for-articles",placeholder:"Enter topic",disabled:"search"===i,onChange:t,value:c}),Object(a.jsx)("button",{type:"submit",onClick:s,className:"search-form__search-button clickable",children:"Search"})]})]})})},g=["January","February","March","April","May","June","July","August","September","October","November","December"],_=["keyword","title","description","publishedAt","source","url","urlToImage"],O=function(e){var n=e.split("-"),t=Object(h.a)(n,2),a=t[0],c=t[1],s=e.split("-")[2].split("T"),i=Object(h.a)(s,1)[0];return"".concat(g[c-1]," ").concat(i,", ").concat(a)},f=function(e,n){var t,a=!1;return n.forEach((function(n){(function(e,n){return _.every((function(t){return e[t]===n[t]}))})(e,n)&&(a=!0,t=n._id)})),[a,t]},v=function(e){var n={};e.forEach((function(e){n[e.keyword]=n[e.keyword]?n[e.keyword]+1:1}));var t=Object.keys(n).sort((function(e,t){return n[t]-n[e]}));return t=t.map((function(e){return e[0].toUpperCase()+e.slice(1)}))};var k=function(e){var n=e.cards,t=function(e){var n=v(e);return 1===n.length?Object(h.a)(n,1)[0]:2===n.length?"".concat(n[0]," and ").concat(n[1]):3===n.length?"".concat(n[0],", ").concat(n[1]," and ").concat(n[2]):"".concat(n[0],", ").concat(n[1]," and ").concat(n.length-2," other").concat(n.length-2!==1?"s":"")}(n),c=s.a.useContext(m);return Object(a.jsx)("section",{className:"saved-news-header",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{className:"saved-news-header__title",children:"Saved articles"}),Object(a.jsxs)("p",{className:"saved-news-header__greeting",children:[c&&c.name,", you have"," ".concat(n.length)," ","saved article",1!==n.length?"s":"","."]}),Object(a.jsxs)("p",{className:"saved-news-header__keywords",children:[n.length>0&&"By keywords: ",n.length>0&&Object(a.jsx)("span",{className:"saved-news-header__keywords saved-news-header__keywords_emphasized",children:t})]})]})})};var w=function(e){var n=e.cards,t=e.loggedIn,c=e.isMainPage,s=e.handleSignout,i=e.handleSigninButtonClick,o=e.handleMenuIconClick,r=e.showAllNavLinks,l=e.handleResize,d=e.windowInnerWidth,u=e.modalIsOpen,h=e.handleSearchChange,b=e.handleSearchSubmit,m=e.setShowAllNavLinks,g=e.searchTerm,_=e.isLoading;return Object(a.jsxs)("div",{className:"header__background ".concat(c?"header__background_image":"","\n      "),children:[Object(a.jsx)("header",{className:"header",children:Object(a.jsx)(j,{loggedIn:t,isMainPage:c,handleSignout:s,handleSigninButtonClick:i,handleMenuIconClick:o,showAllNavLinks:r,setShowAllNavLinks:m,handleResize:l,windowInnerWidth:d,modalIsOpen:u})}),c?Object(a.jsx)(p,{modalIsOpen:u,windowInnerWidth:d,showAllNavLinks:r,handleSearchChange:h,handleSearchSubmit:b,searchTerm:g,isLoading:_}):Object(a.jsx)(k,{cards:n,showAllNavLinks:r})]})},S=s.a.createContext(),x={server:"Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.",keyword:"Please enter a keyword",cardButton:"Something went wrong..."},y={notFound:"Nothing found",noCards:"Nothing here",searchError:"Something happened"},A={notFound:"Sorry, but nothing matched your search terms.",noCards:"Go save some articles!",searchError:"Please enter a keyword."},C="https://api.knews.students.nomoreparties.site";var N=function(e){var n=e.card,t=e.isMainPage,s=e.loggedIn,i=e.handleSigninButtonClick,o=e.handleBookmarkClick,r=e.handleDeleteClick,l=Object(c.useContext)(S);return Object(a.jsx)(a.Fragment,{children:n&&Object(a.jsxs)("li",{className:"card",children:[!t&&Object(a.jsx)("p",{className:"card__keyword",children:n.keyword[0].toUpperCase()+n.keyword.slice(1)}),t?Object(a.jsx)("button",{type:"button","aria-label":"save-article",onClick:s?o.bind(this,n):i,className:"card__button ".concat(s?"clickable":"").concat(n.isSaved?" card__button_type_bookmark-saved":" card__button_type_bookmark")}):Object(a.jsx)("button",{type:"button","aria-label":"delete-article",onClick:r.bind(this,n),className:"card__button clickable card__button_type_delete"}),(!t||!s||"cardButton"===l.type)&&Object(a.jsxs)("div",{type:"button",className:"card__tooltip clickable ".concat("cardButton"===l.type&&l.cardId===n._id?"card__tooltip_visible":""),children:["cardButton"===l.type&&l.cardId===n._id&&Object(a.jsx)("p",{children:x[l.type]}),"cardButton"!==l.type&&Object(a.jsx)("p",{children:s?"Remove from saved":"Sign in to save articles"})]}),Object(a.jsx)("img",{className:"card__image",src:n.urlToImage,alt:n.title}),Object(a.jsx)("p",{className:"card__date",children:O(n.publishedAt)}),Object(a.jsx)("h3",{className:"card__title",children:n.title}),Object(a.jsx)("p",{className:"card__text",children:n.description}),Object(a.jsx)("a",{href:n.url,className:"card__source clickable",children:n.source})]})})};var I=function(e){var n=e.type;return Object(a.jsxs)("div",{className:"not-found",children:[Object(a.jsx)("div",{className:"not-found__icon"}),Object(a.jsx)("h3",{className:"not-found__title",children:y[n]}),Object(a.jsx)("p",{className:"not-found__text",children:A[n]})]})};var B=function(e){var n=e.cards,t=e.loggedIn,c=e.isSaved,i=e.isLoading,o=e.isMainPage,r=e.showAllCards,l=e.onShowMore,d=e.handleDeleteClick,u=e.handleBookmarkClick,h=e.handleSigninButtonClick,b=e.numCardsShown,m=e.setNumCardsShown,j=e.notFound,p=s.a.useContext(S);return Object(a.jsx)("section",{className:"news-cards-list",children:"search"===i?Object(a.jsxs)("div",{className:"circle-preloader",children:[Object(a.jsx)("i",{className:"circle-preloader__circle"}),Object(a.jsx)("p",{className:"circle-preloader__text",children:"Searching for news..."})]}):Object(a.jsx)(a.Fragment,{children:n.length>0?Object(a.jsxs)("div",{className:"news-cards-list__container",children:[o&&Object(a.jsx)("h2",{className:"news-cards-list__title",children:"Search Results"}),Object(a.jsx)("ul",{className:"news-cards-list__list",children:n&&n.slice(0,r?n.length:Math.min(b,n.length)).map((function(e){return Object(a.jsx)(N,{handleSigninButtonClick:h,handleBookmarkClick:u,handleDeleteClick:d,isMainPage:o,loggedIn:t,isSaved:c,card:e},e._id?e._id:n.indexOf(e))}))}),b<n.length&&Object(a.jsx)("button",{type:"button","aria-label":"show-all-cards",className:"news-cards-list__button clickable",onClick:l.bind(this,b,m),children:"Show more"})]}):Object(a.jsxs)(a.Fragment,{children:[!o&&Object(a.jsx)(I,{type:"noCards"}),j&&Object(a.jsx)(I,{type:"notFound"}),p.type.length>0&&Object(a.jsx)(I,{type:"searchError"})]})})})},M=t.p+"static/media/kevin-3.7dc4e085.png";var E=function(){return Object(a.jsxs)("section",{className:"about",children:[Object(a.jsx)("img",{className:"about__image",src:M,alt:"Author of the website"}),Object(a.jsxs)("div",{className:"about__text-container",children:[Object(a.jsx)("h2",{className:"about__title",children:"About the author"}),Object(a.jsx)("p",{className:"about__text",children:"Hi, my name is Kevin and this is my final project in the 10 month web development course at Practicum by Yandex, where I am a student and a member of the student support team."}),Object(a.jsx)("p",{className:"about__text",children:"The project has a frontend in React and a backend in Express, and allows users to search for news articles using a public News API service."})]})]})};var F=function(e){var n=e.cards,t=e.loggedIn,c=e.isSaved,i=e.isLoading,o=e.isMainPage,r=e.onShowMore,l=e.handleBookmarkClick,d=e.handleDeleteClick,u=e.numCardsShown,h=e.notFound,b=e.handleSigninButtonClick,m=e.setNumCardsShown,j=s.a.useContext(S);return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("main",{children:[(n.length>0||h||i||j.type.length>0)&&Object(a.jsx)(B,{cards:n,loggedIn:t,isSaved:c,isLoading:i,isMainPage:o,onShowMore:r,handleSigninButtonClick:b,handleBookmarkClick:l,handleDeleteClick:d,numCardsShown:u,setNumCardsShown:m,notFound:h}),Object(a.jsx)(E,{})]})})},L=t.p+"static/media/github-icon.2e9e6d20.svg",T=t.p+"static/media/facebook-icon.4c3c64e4.svg";var P=function(){return Object(a.jsxs)("footer",{className:"footer",children:[Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Supersite, Powered by News API"}),Object(a.jsxs)("nav",{className:"footer__nav",children:[Object(a.jsx)(r.b,{className:"footer__link clickable",to:"/",children:"Home"}),Object(a.jsx)("a",{className:"footer__link clickable",href:"https://practicum.yandex.com/",children:"Practicum by Yandex"}),Object(a.jsx)("a",{className:"footer__link footer__link_icon-container clickable",href:"https://github.com/kvnloughead/",children:Object(a.jsx)("img",{className:"footer__icon clickable",src:L,alt:"Github icon"})}),Object(a.jsx)("a",{className:"footer__link footer__link_icon-container clickable",href:"https://www.facebook.com/",children:Object(a.jsx)("img",{className:"footer__icon clickable",src:T,alt:"Facebook icon"})})]})]})};var R=function(e){var n=e.cards,t=e.loggedIn,s=e.onShowMore,i=e.numCardsShown,o=e.setNumCardsShown,r=e.handleSigninButtonClick,l=e.handleBookmarkClick,d=e.handleDeleteClick,u=Object(b.e)();return Object(c.useEffect)((function(){t||(u.push("/"),r())})),Object(a.jsx)(B,{cards:n,loggedIn:t,onShowMore:s,numCardsShown:i,setNumCardsShown:o,isMainPage:!1,handleBookmarkClick:l,handleDeleteClick:d})};var D=function(e){var n=e.modalType,t=e.modalIsOpen,s=e.closeModal,i=e.handleSigninButtonClick,o=e.handleSignupButtonClick,r=e.windowInnerWidth,l=e.handleInputFocus,d=e.isValid,u=e.handleChange,h=e.resetForm,b=e.errors,m=e.values,j=e.handleSignupSubmit,p=e.handleSigninSubmit,g=e.submitError,_=e.isLoading;return Object(c.useEffect)((function(){return document.addEventListener("keydown",s),function(){document.removeEventListener("keydown",s)}})),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{role:"button","aria-label":"close-modal",tabIndex:0,className:"popup__overlay".concat(t?" popup__overlay_visible":""),onClick:s,onKeyDown:s}),Object(a.jsxs)("div",{className:"popup".concat(t?" popup_visible":"").concat("success"===n?" popup_success":""),children:[r>767&&Object(a.jsx)("button",{type:"button","aria-label":"close-modal",className:"popup__close-button clickable",onClick:s}),Object(a.jsx)("h2",{className:"popup__title",children:"success"===n?"Registration successfully completed!":"Sign ".concat("signin"===n?"in":"up")}),"success"!==n&&Object(a.jsxs)("form",{onSubmit:"signin"===n?p:j,id:"".concat(n,"-form"),name:"".concat(n,"Form"),className:"popup__form",action:"#",noValidate:!0,onReset:h,children:[Object(a.jsx)("label",{className:"popup__input-label",htmlFor:"email",children:"Email"}),Object(a.jsx)("input",{className:"popup__input",type:"email",id:"email",name:"email",placeholder:"Enter email",required:!0,autoComplete:"on",onFocus:l,onBlur:l,onChange:u,value:m.email||"",disabled:"auth"===_}),Object(a.jsx)("span",{className:"popup__input-error",id:"email-input-error",children:b.email}),Object(a.jsx)("label",{className:"popup__input-label",htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{className:"popup__input",type:"password",id:"password",name:"password",placeholder:"Enter password",required:!0,autoComplete:"on",onFocus:l,onBlur:l,onChange:u,minLength:4,disabled:"auth"===_}),Object(a.jsx)("span",{className:"popup__input-error",id:"password-input-error",children:b.password}),"signup"===n&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("label",{className:"popup__input-label",htmlFor:"username",children:"Username"}),Object(a.jsx)("input",{className:"popup__input",type:"text",id:"username",name:"username",placeholder:"Enter your username",required:!0,autoComplete:"on",onFocus:l,onBlur:l,onChange:u,minLength:4,disabled:"auth"===_}),Object(a.jsx)("span",{className:"popup__input-error",id:"username-input-error",children:b.username})]}),Object(a.jsx)("span",{className:"popup__input-error popup__input-error_submit-error",id:"submit-error",children:g}),Object(a.jsxs)("button",{className:"popup__submit-button ".concat(d?"popup__submit-button_active clickable":""),disabled:!d,type:"submit",value:"Sign ".concat("signin"===n?"in":"up"),"aria-label":"submit-sign".concat("signin"===n?"in":"up"),children:["Sign","signin"===n?" in":" up"]})]}),Object(a.jsxs)("p",{className:"popup__go-elsewhere ".concat("success"===n?"popup__go-elsewhere_success":""),children:["success"!==n?"or ":"",Object(a.jsxs)("button",{type:"button","aria-label":"signin"===n?"sign-up":"sign-in",onClick:"signin"===n?o:i,className:"popup__go-elsewhere popup__go-elsewhere_link",children:["Sign","signin"===n?" up":" in"]})]})]})]})};var z=function(e){var n=e.loggedIn,t=e.userName,c=e.isMainPage,s=e.handleSignout,i=e.handleSigninButtonClick,o=e.handleMenuIconClick,r=e.showAllNavLinks,l=e.setShowAllNavLinks,d=e.handleResize,u=e.windowInnerWidth,h=e.modalIsOpen;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"header__mobile-overlay",children:Object(a.jsx)(j,{loggedIn:n,userName:t,isMainPage:c,handleSignout:s,handleSigninButtonClick:i,handleMenuIconClick:o,showAllNavLinks:r,setShowAllNavLinks:l,handleResize:d,windowInnerWidth:u,modalIsOpen:h})})})};var W=function(){return Object(a.jsx)("div",{className:"keyboard"})},U=t(15),J=t(16),K=new(function(){function e(n){Object(U.a)(this,e),this.baseUrl=n.baseUrl,this.headers=n.headers,this.apiKey=n.apiKey,this.today=n.today,this.lastWeek=n.lastWeek,this.newsApiUrl=n.newsApiUrl,this.practicumUrl=n.practicumUrl}return Object(J.a)(e,[{key:"getArticles",value:function(e){return fetch("".concat(this.practicumUrl,"/v2/everything?q=").concat(e)+"&from=".concat(this.lastWeek.toISOString())+"&to=".concat(this.today.toISOString())+"&sortBy=popularity&pageSize=100&apiKey=".concat(this.apiKey),{headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json()})).then((function(e){return e.articles}))}}]),e}())({newsApiUrl:"http://newsapi.org",apiKey:"ee3e693144704e9c8d98437bdd341b2b",today:new Date,lastWeek:new Date(Date.now()-6048e5),practicumUrl:"https://nomoreparties.co/news"}),Y=new(function(){function e(){Object(U.a)(this,e)}return Object(J.a)(e,[{key:"register",value:function(e,n,t){return fetch("".concat(C,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:n,name:t})}).then((function(e){return e.json()}))}},{key:"authorize",value:function(e,n){return fetch("".concat(C,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:n})}).then((function(e){return e.json()})).then((function(e){return e.message||localStorage.setItem("token",e.token),e}))}},{key:"getContent",value:function(e){return fetch("".concat(C,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.ok?e.json():Promise.reject(new Error("".concat(e.status," - ").concat(e.message)))})).then((function(e){return e}))}},{key:"getArticles",value:function(e){return fetch("".concat(C,"/articles"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()}))}},{key:"saveArticle",value:function(e,n){var t=e.keyword,a=e.description,c=e.publishedAt,s=e.source,i=e.title,o=e.url,r=e.urlToImage;return fetch("".concat(C,"/articles"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({keyword:t,title:i,description:a,publishedAt:c,source:s,url:o,urlToImage:r})}).then((function(e){return e.json()}))}},{key:"deleteArticle",value:function(e,n){return fetch("".concat(C,"/articles/").concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}})}}]),e}());var G=function(){var e=Object(c.useState)([]),n=Object(h.a)(e,2),t=n[0],s=n[1],i=Object(c.useState)([]),o=Object(h.a)(i,2),r=o[0],j=o[1],p=Object(c.useState)(!0),g=Object(h.a)(p,2),_=g[0],O=g[1],k=Object(c.useState)(""),x=Object(h.a)(k,2),y=x[0],A=x[1],C=Object(c.useState)(!1),N=Object(h.a)(C,2),I=N[0],B=N[1],M=Object(c.useState)(""),E=Object(h.a)(M,2),L=E[0],T=E[1],U=Object(c.useState)(!1),J=Object(h.a)(U,2),G=J[0],V=J[1],Q=Object(c.useState)(window.innerWidth),q=Object(h.a)(Q,2),Z=q[0],H=q[1],X=Object(c.useState)(!1),$=Object(h.a)(X,2),ee=$[0],ne=$[1],te=Object(c.useState)(""),ae=Object(h.a)(te,2),ce=ae[0],se=ae[1],ie=Object(c.useState)(!1),oe=Object(h.a)(ie,2),re=oe[0],le=oe[1],de=Object(c.useState)(""),ue=Object(h.a)(de,2),he=ue[0],be=ue[1],me=Object(c.useState)({}),je=Object(h.a)(me,2),pe=je[0],ge=je[1],_e=Object(c.useState)(localStorage.getItem("token")),Oe=Object(h.a)(_e,2),fe=Oe[0],ve=Oe[1],ke=Object(c.useState)(3),we=Object(h.a)(ke,2),Se=we[0],xe=we[1],ye=Object(c.useState)(3),Ae=Object(h.a)(ye,2),Ce=Ae[0],Ne=Ae[1],Ie=Object(c.useState)({type:""}),Be=Object(h.a)(Ie,2),Me=Be[0],Ee=Be[1],Fe=Object(c.useState)({}),Le=Object(h.a)(Fe,2),Te=Le[0],Pe=Le[1],Re=Object(c.useState)({}),De=Object(h.a)(Re,2),ze=De[0],We=De[1],Ue=Object(c.useState)(!1),Je=Object(h.a)(Ue,2),Ke=Je[0],Ye=Je[1],Ge=Object(b.e)();Object(c.useEffect)((function(){localStorage.getItem("searchResults")&&s(JSON.parse(localStorage.getItem("searchResults"))),localStorage.getItem("savedCards")&&j(JSON.parse(localStorage.getItem("savedCards")))}),[]);var Ve=function(e,n,t){"savedCards"===t&&(e=function(e){var n=v(e);return e.sort((function(e,t){return n.indexOf(e.keyword)-n.indexOf(t.keyword)})),e}(e)),n(e),localStorage.setItem(t,JSON.stringify(e))};Object(c.useEffect)((function(){fe&&!localStorage.getItem("savedCards")&&Y.getArticles(fe).then((function(e){if(e.message)throw new Error(e.message);var n=e.filter((function(e){return e.owner===pe._id}));Ve(n,j,"savedCards"),t.forEach((function(e){var n=f(e,r),t=Object(h.a)(n,2),a=t[0],c=t[1];a&&(e.isSaved=!0,e._id=c)}))})).catch((function(e){"Authorization Required"!==e.message&&Ee({type:"server"})}))}),[_]);var Qe=Object(c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{email:"",password:"",username:""},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Pe(e),We(n),Ye(t),be("")}),[Pe,We,Ye]),qe=function(){O(!0)};Object(c.useEffect)((function(){fe?Y.getContent(fe).then((function(e){O(!0),ge(e)})).catch((function(e){401!==e.statusCode&&Ee({type:"server"})})):O(!1)}),[]);var Ze=function(e){se(e.target.value)},He=function(e){e.preventDefault(),0!==ce.length?(A("search"),K.getArticles(ce).then((function(e){ne(0===e.length),e.forEach((function(e){if(e.keyword=ce,e.source=e.source.name,_){var n=f(e,r),t=Object(h.a)(n,2),a=t[0],c=t[1];a&&(e.isSaved=!0,e._id=c)}e.urlToImage&&0!==e.urlToImage.length||(e.urlToImage="https://visualsound.com/wp-content/uploads/2019/05/unavailable-image.jpg")})),s(e),Ee({type:""}),localStorage.setItem("searchResults",JSON.stringify(e))})).catch((function(){Ee({type:"server"})})).finally((function(){return A("")}))):Ee({type:"keyword"})},Xe=function(e){"show-header-links-menu"===e.target.ariaLabel?V(!G):V(!1)};Object(c.useEffect)((function(){I&&Z<768?V(!0):Z>=768&&V(!1)}),[Z,I]);var $e=function(){H(window.innerWidth)},en=function(){B(!0),Z<=767&&V(!0),T("signin")},nn=function(e){Y.deleteArticle(e._id,fe).then((function(n){if(n.ok){e.isSaved=!1;var a=r.filter((function(n){return n._id!==e._id}));Ve(a,j,"savedCards");var c=t.map((function(n){return n._id===e._id?e:n}));Ve(c,s,"searchResults")}})).catch((function(){return Ee({type:"cardButton",cardId:e._id})}))},tn=function(e){e.isSaved?nn(e):Y.saveArticle(e,fe).then((function(n){if(n.message)throw new Error(n.message);n.isSaved=!0;var a=[].concat(Object(l.a)(r),[n]);Ve(a,j,"savedCards");var c=t.map((function(t){return t===e?n:t}));Ve(c,s,"searchResults")})).catch((function(){return Ee({type:"cardButton",cardId:e._id})}))},an=function(e,n){n(e+3)},cn=function(){localStorage.clear();var e=t;e.forEach((function(e){e.isSaved=!1})),s(e),O(!1)};return Object(c.useEffect)((function(){_||Ge.push("/")})),Object(a.jsx)(m.Provider,{value:pe,children:Object(a.jsxs)(S.Provider,{value:Me,children:[Object(a.jsxs)(b.a,{exact:!0,path:"/",children:[Object(a.jsx)(w,{loggedIn:_,isMainPage:!0,handleSignout:cn,handleSigninButtonClick:en,handleMenuIconClick:Xe,showAllNavLinks:G,handleResize:$e,windowInnerWidth:Z,modalIsOpen:I,handleSearchSubmit:He,handleSearchChange:Ze,setShowAllNavLinks:V,searchTerm:ce,isLoading:y}),Object(a.jsx)(F,{cards:t,loggedIn:_,isLoading:y,isMainPage:!0,onShowMore:an,handleSigninButtonClick:en,handleBookmarkClick:tn,handleDeleteClick:nn,numCardsShown:Se,setNumCardsShown:xe,notFound:ee}),Object(a.jsx)(D,{modalType:L,modalIsOpen:I,closeModal:function(e){e.stopPropagation(),"click"!==e.type&&"Escape"!==e.key||(Qe(),B(!1))},handleSignupButtonClick:function(){B(!0),T("signup")},handleSigninButtonClick:en,handleSignin:qe,handleSignup:function(){T("success")},windowInnerWidth:Z,handleInputFocus:function(){le(!re)},showKeyboard:re,isValid:Ke,handleChange:function(e){var n=e.target,t=n.name,a=n.value;Pe(Object(u.a)(Object(u.a)({},Te),{},Object(d.a)({},t,a))),We(Object(u.a)(Object(u.a)({},ze),{},Object(d.a)({},t,n.validationMessage))),Ye(n.closest("form").checkValidity())},resetForm:Qe,errors:ze,values:Te,handleSignupSubmit:function(e){e.preventDefault(),A("auth"),Y.register(Te.email,Te.password,Te.username).then((function(e){if(e.message)throw new Error(e.message);T("success")})).catch((function(e){return be(e.message)})).finally((function(){A(""),be("")}))},handleSigninSubmit:function(e){e.preventDefault(),A("auth"),Y.authorize(Te.email,Te.password).then((function(e){if(e.message)throw new Error(e.message);if(e&&e.token)ve(e.token),localStorage.setItem("token",e.token),ge({email:Te.email,name:e.username,_id:e._id});else{if(Qe(),!Te.email||!Te.password)throw new Error("One or more of the fields were not provided");if(!e)throw new Error("Bad email or password")}})).then((function(){qe(),Qe()})).then((function(){B(!1)})).catch((function(e){return be(e.message)})).finally((function(){return A("")}))},submitError:he,isLoading:y}),G&&Object(a.jsx)(z,{loggedIn:_,isMainPage:!0,handleSignout:cn,handleSigninButtonClick:en,handleMenuIconClick:Xe,showAllNavLinks:G,setShowAllNavLinks:V,handleResize:$e,windowInnerWidth:Z,modalIsOpen:I})]}),Object(a.jsxs)(b.a,{exact:!0,path:"/saved-news",children:[Object(a.jsx)(w,{loggedIn:_,isMainPage:!1,cards:r,handleSignout:cn,handleResize:$e,handleMenuIconClick:Xe,showAllNavLinks:G,windowInnerWidth:Z,modalIsOpen:I,handleSearchSubmit:He,handleSearchChange:Ze,searchTerm:ce,setShowAllNavLinks:V}),Object(a.jsx)(R,{cards:r,loggedIn:_,isMainPage:!1,onShowMore:an,numCardsShown:Ce,setNumCardsShown:Ne,handleSigninButtonClick:en,handleBookmarkClick:tn,handleDeleteClick:nn,handleResize:$e,handleMenuIconClick:Xe,showAllNavLinks:G,windowInnerWidth:Z}),G&&Object(a.jsx)(z,{loggedIn:_,isMainPage:!1,handleSignout:cn,handleSigninButtonClick:en,handleMenuIconClick:Xe,setShowAllNavLinks:V,handleResize:$e,showAllNavLinks:G,windowInnerWidth:Z,modalIsOpen:I})]}),re&&Object(a.jsx)(W,{}),Object(a.jsx)(P,{})]})})},V=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,38)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,s=n.getLCP,i=n.getTTFB;t(e),a(e),c(e),s(e),i(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(r.a,{basename:"/news-explorer-frontend",children:Object(a.jsx)(G,{})})}),document.getElementById("root")),V()}},[[37,1,2]]]);
//# sourceMappingURL=main.a6576d77.chunk.js.map