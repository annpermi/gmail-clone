(this.webpackJsonpgm=this.webpackJsonpgm||[]).push([[0],{109:function(e,c,t){},113:function(e,c,t){},120:function(e,c,t){},121:function(e,c,t){},122:function(e,c,t){},124:function(e,c,t){},125:function(e,c,t){},126:function(e,c,t){},128:function(e,c,t){},129:function(e,c,t){},130:function(e,c,t){},131:function(e,c,t){"use strict";t.r(c);var s=t(2),a=t.n(s),n=t(31),i=t.n(n),j=(t(109),t(66)),l=t.n(j),r=t(67),o=t.n(r),d=t(53),b=t.n(d),O=t(68),m=t.n(O),x=t(69),u=t.n(x),h=t(147),p=t(150),v=t(16),f=(t(113),t(37)),_=Object(f.b)({name:"user",initialState:{user:null},reducers:{login:function(e,c){e.user=c.payload},logout:function(e){e.user=null}}}),g=_.actions,N=g.login,M=g.logout,I=function(e){return e.user.user},S=_.reducer,w=t(39),y=w.a.initializeApp({apiKey:"AIzaSyD88Qa0n4r1uUsAJkuNXbSr3OkBmQB5qF8",authDomain:"clone-8281e.firebaseapp.com",projectId:"clone-8281e",storageBucket:"clone-8281e.appspot.com",messagingSenderId:"112096799021",appId:"1:112096799021:web:fa5f420cd722e197a5cba4",measurementId:"G-YF6Q373C9H"}).firestore(),k=w.a.auth(),R=new w.a.auth.GoogleAuthProvider,L=t(3);var C=function(){var e=Object(v.c)(I),c=Object(v.b)();return Object(L.jsxs)("div",{className:"header",children:[Object(L.jsxs)("div",{className:"header__left",children:[Object(L.jsx)(h.a,{children:Object(L.jsx)(l.a,{})}),Object(L.jsx)("img",{src:"https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg",alt:"Gmail logo"})]}),Object(L.jsxs)("div",{className:"header__middle",children:[Object(L.jsx)(o.a,{}),Object(L.jsx)("input",{placeholder:"Search mail",type:"text"}),Object(L.jsx)(b.a,{})]}),Object(L.jsxs)("div",{className:"header__right",children:[Object(L.jsx)(h.a,{children:Object(L.jsx)(m.a,{})}),Object(L.jsx)(h.a,{children:Object(L.jsx)(u.a,{})}),Object(L.jsx)(h.a,{children:Object(L.jsx)(p.a,{src:null===e||void 0===e?void 0:e.photoUrl,onClick:function(){k.signOut().then((function(){c(M())}))}})})]})]})},q=t(148),B=t(70),U=t.n(B),A=t(54),z=t.n(A),E=t(71),D=t.n(E);t(120);var G=function(e){var c=e.Icon,t=e.title,s=e.number,a=e.selected;return Object(L.jsxs)("div",{className:"sidebarOption ".concat(a&&"sidebarOption--active"),children:[Object(L.jsx)(c,{}),Object(L.jsx)("h3",{children:t}),Object(L.jsx)("p",{children:s})]})},P=t(72),T=t.n(P),W=t(44),F=t.n(W),J=t(73),Q=t.n(J),Y=t(74),H=t.n(Y),V=t(75),K=t.n(V),X=t(76),Z=t.n(X),$=t(77),ee=t.n($),ce=t(78),te=t.n(ce),se=Object(f.b)({name:"mail",initialState:{selectedMail:null,sendMessageIsOpen:!1},reducers:{selectMail:function(e,c){e.selectedMail=c.payload},openSendMessage:function(e){e.sendMessageIsOpen=!0},closeSendMessage:function(e){e.sendMessageIsOpen=!1}}}),ae=se.actions,ne=ae.selectMail,ie=ae.openSendMessage,je=ae.closeSendMessage,le=function(e){return e.mail.selectedMail},re=function(e){return e.mail.sendMessageIsOpen},oe=se.reducer;t(121);var de=function(){var e=Object(v.b)();return Object(L.jsxs)("div",{className:"sidebar",children:[Object(L.jsx)(q.a,{startIcon:Object(L.jsx)(U.a,{fontSize:"large"}),className:"sidebar__compose",onClick:function(){return e(ie())},children:"Compose"}),Object(L.jsx)(G,{Icon:z.a,title:"Inbox",number:54,selected:!0}),Object(L.jsx)(G,{Icon:D.a,title:"Starred",number:54}),Object(L.jsx)(G,{Icon:T.a,title:"Snoozed",number:54}),Object(L.jsx)(G,{Icon:F.a,title:"Important",number:54}),Object(L.jsx)(G,{Icon:Q.a,title:"Sent",number:54}),Object(L.jsx)(G,{Icon:H.a,title:"Drafts",number:54}),Object(L.jsx)(G,{Icon:K.a,title:"More",number:54}),Object(L.jsx)("div",{className:"sidebar__footer",children:Object(L.jsxs)("div",{className:"sidebar__footerIcons",children:[Object(L.jsx)(h.a,{children:Object(L.jsx)(Z.a,{})}),Object(L.jsx)(h.a,{children:Object(L.jsx)(ee.a,{})}),Object(L.jsx)(h.a,{children:Object(L.jsx)(te.a,{})})]})})]})},be=t(51),Oe=t(15),me=t(79),xe=t.n(me),ue=t(80),he=t.n(ue),pe=t(81),ve=t.n(pe),fe=t(82),_e=t.n(fe),ge=t(83),Ne=t.n(ge),Me=t(84),Ie=t.n(Me),Se=t(55),we=t.n(Se),ye=t(85),ke=t.n(ye),Re=t(86),Le=t.n(Re),Ce=t(87),qe=t.n(Ce),Be=t(88),Ue=t.n(Be);t(122);var Ae=function(){var e=Object(Oe.f)(),c=Object(v.c)(le);return Object(L.jsxs)("div",{className:"mail",children:[Object(L.jsxs)("div",{className:"mail__tools",children:[Object(L.jsxs)("div",{className:"mail__toolsLeft",children:[Object(L.jsx)(h.a,{onClick:function(){return e.push("/")},children:Object(L.jsx)(xe.a,{})}),Object(L.jsx)(h.a,{children:Object(L.jsx)(he.a,{})}),Object(L.jsx)(h.a,{children:Object(L.jsx)(ve.a,{})}),Object(L.jsx)(h.a,{children:Object(L.jsx)(_e.a,{})}),Object(L.jsx)(h.a,{children:Object(L.jsx)(Ne.a,{})}),Object(L.jsx)(h.a,{children:Object(L.jsx)(Ie.a,{})}),Object(L.jsx)(h.a,{children:Object(L.jsx)(ke.a,{})}),Object(L.jsx)(h.a,{children:Object(L.jsx)(F.a,{})}),Object(L.jsx)(h.a,{children:Object(L.jsx)(we.a,{})})]}),Object(L.jsxs)("div",{className:"mail__toolsRight",children:[Object(L.jsx)(h.a,{children:Object(L.jsx)(Le.a,{})}),Object(L.jsx)(h.a,{children:Object(L.jsx)(qe.a,{})}),Object(L.jsx)(h.a,{children:Object(L.jsx)(Ue.a,{})})]})]}),Object(L.jsxs)("div",{className:"mail__body",children:[Object(L.jsxs)("div",{className:"mail__bodyHeader",children:[Object(L.jsx)("h2",{children:null===c||void 0===c?void 0:c.subject}),Object(L.jsx)(F.a,{className:"mail__important"}),Object(L.jsx)("p",{children:null===c||void 0===c?void 0:c.title}),Object(L.jsx)("p",{className:"mail__time",children:null===c||void 0===c?void 0:c.time})]}),Object(L.jsx)("div",{className:"mail__message",children:Object(L.jsx)("p",{children:null===c||void 0===c?void 0:c.description})})]})]})},ze=t(28),Ee=t(149),De=t(91),Ge=t.n(De),Pe=t(92),Te=t.n(Pe),We=t(93),Fe=t.n(We),Je=t(94),Qe=t.n(Je),Ye=t(95),He=t.n(Ye),Ve=t(96),Ke=t.n(Ve),Xe=t(97),Ze=t.n(Xe);t(124);var $e=function(e){var c=e.Icon,t=e.title,s=e.color,a=e.selected;return Object(L.jsxs)("div",{className:"section ".concat(a&&"section--selected"),style:{borderBottom:"3px solid ".concat(s),color:"".concat(a&&s)},children:[Object(L.jsx)(c,{}),Object(L.jsx)("h4",{children:t})]})},ec=t(89),cc=t.n(ec),tc=t(90),sc=t.n(tc);t(125);var ac=function(e){var c=e.id,t=e.title,s=e.subject,a=e.description,n=e.time,i=Object(Oe.f)(),j=Object(v.b)();return Object(L.jsxs)("div",{onClick:function(){j(ne({id:c,title:t,subject:s,description:a,time:n})),i.push("/mail")},className:"emailRow",children:[Object(L.jsxs)("div",{className:"emailRow__options",children:[Object(L.jsx)(Ee.a,{}),Object(L.jsx)(h.a,{children:Object(L.jsx)(cc.a,{})}),Object(L.jsx)(h.a,{children:Object(L.jsx)(sc.a,{})})]}),Object(L.jsx)("h3",{className:"emailRow__title",children:t}),Object(L.jsx)("div",{className:"emailRow__message",children:Object(L.jsxs)("h4",{children:[s," ",Object(L.jsxs)("span",{className:"emailRow__description",children:["- ",a]})]})}),Object(L.jsx)("p",{className:"emailRow__time",children:n})]})};t(126);var nc=function(){var e=Object(s.useState)([]),c=Object(ze.a)(e,2),t=c[0],a=c[1];return Object(s.useEffect)((function(){y.collection("emails").orderBy("timestamp","desc").onSnapshot((function(e){return a(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(L.jsxs)("div",{className:"emailList",children:[Object(L.jsxs)("div",{className:"emailList__settings",children:[Object(L.jsxs)("div",{className:"emailList__settingsLeft",children:[Object(L.jsx)(Ee.a,{}),Object(L.jsx)(h.a,{children:Object(L.jsx)(b.a,{})}),Object(L.jsx)(h.a,{children:Object(L.jsx)(Ge.a,{})}),Object(L.jsx)(h.a,{children:Object(L.jsx)(we.a,{})})]}),Object(L.jsxs)("div",{className:"emailList__settingsRight",children:[Object(L.jsx)(h.a,{children:Object(L.jsx)(Te.a,{})}),Object(L.jsx)(h.a,{children:Object(L.jsx)(Fe.a,{})}),Object(L.jsx)(h.a,{children:Object(L.jsx)(Qe.a,{})}),Object(L.jsx)(h.a,{children:Object(L.jsx)(He.a,{})})]})]}),Object(L.jsxs)("div",{className:"emailList__sections",children:[Object(L.jsx)($e,{Icon:z.a,title:"Primary",color:"red",selected:!0}),Object(L.jsx)($e,{Icon:Ke.a,title:"Social",color:"#1A73E8"}),Object(L.jsx)($e,{Icon:Ze.a,title:"Promotions",color:"green"})]}),Object(L.jsx)("div",{className:"emailList__list",children:t.map((function(e){var c=e.id,t=e.data,s=t.to,a=t.subject,n=t.message,i=t.timestamp;return Object(L.jsx)(ac,{id:c,title:s,subject:a,description:n,time:new Date(1e3*(null===i||void 0===i?void 0:i.seconds)).toUTCString()},c)}))})]})},ic=t(57),jc=t(98),lc=t.n(jc),rc=t(99);t(128);var oc=function(){var e=Object(rc.a)(),c=e.register,t=e.handleSubmit,s=(e.watch,e.formState.errors),a=Object(v.b)();return Object(L.jsxs)("div",{className:"sendMail",children:[Object(L.jsxs)("div",{className:"sendMail__header",children:[Object(L.jsx)("h3",{children:"New message"}),Object(L.jsx)(lc.a,{onClick:function(){return a(je())},className:"sendMail__close"})]}),Object(L.jsxs)("form",{onSubmit:t((function(e){console.log(e),y.collection("emails").add({to:e.to,subject:e.subject,message:e.message,timestamp:w.a.firestore.FieldValue.serverTimestamp()}),a(je())})),children:[Object(L.jsx)("input",Object(ic.a)({type:"email",placeholder:"To"},c("to",{required:!0}))),s.to&&Object(L.jsx)("p",{className:"sendMail__error",children:"To is Required!"}),Object(L.jsx)("input",Object(ic.a)({placeholder:"Subject",type:"text"},c("subject",{required:!0}))),s.subject&&Object(L.jsx)("p",{className:"sendMail__error",children:"Subject is Required!"}),Object(L.jsx)("input",Object(ic.a)({placeholder:"Message...",type:"text",className:"sendMail__message"},c("message",{required:!0}))),s.message&&Object(L.jsx)("p",{className:"sendMail__error",children:"Message is Required!"}),Object(L.jsx)("div",{className:"sendMail__options",children:Object(L.jsx)(q.a,{type:"submit",className:"sendMail__send",children:"Send"})})]})]})};t(129);var dc=function(){var e=Object(v.b)();return Object(L.jsx)("div",{className:"login",children:Object(L.jsxs)("div",{className:"login__container",children:[Object(L.jsx)("img",{src:"https://www.google.com/gmail/about/static-2.0/images/logo-gmail.png?fingerprint=c2eaf4aae389c3f885e97081bb197b97",alt:"Gmail logo"}),Object(L.jsx)(q.a,{variant:"contained",color:"primary",onClick:function(){k.signInWithPopup(R).then((function(c){var t=c.user;e(N({displayName:t.displayName,email:t.email,photoUrl:t.photoURL}))})).catch((function(e){return alert("Error message")}))},children:"Login"})]})})};t(130);var bc=function(){var e=Object(v.c)(re),c=Object(v.c)(I),t=Object(v.b)();return Object(s.useEffect)((function(){k.onAuthStateChanged((function(e){e&&t(N({displayName:e.displayName,email:e.email,photoUrl:e.photoURL}))}))}),[]),Object(L.jsx)(be.a,{children:c?Object(L.jsxs)("div",{className:"app",children:[Object(L.jsx)(C,{}),Object(L.jsxs)("div",{className:"app__body",children:[Object(L.jsx)(de,{}),Object(L.jsxs)(Oe.c,{children:[Object(L.jsx)(Oe.a,{path:"/mail",children:Object(L.jsx)(Ae,{})}),Object(L.jsx)(Oe.a,{children:Object(L.jsx)(nc,{path:"/"})})]})]}),e&&Object(L.jsx)(oc,{})]}):Object(L.jsx)(dc,{})})},Oc=Object(f.a)({reducer:{mail:oe,user:S}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(L.jsx)(a.a.StrictMode,{children:Object(L.jsx)(v.a,{store:Oc,children:Object(L.jsx)(bc,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[131,1,2]]]);
//# sourceMappingURL=main.36bf49f6.chunk.js.map