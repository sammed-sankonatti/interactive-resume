(this["webpackJsonpinteractive-resume"]=this["webpackJsonpinteractive-resume"]||[]).push([[0],{100:function(e,a,t){},111:function(e,a,t){},112:function(e,a,t){},113:function(e,a,t){},114:function(e,a,t){},116:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),i=t(11),r=t.n(i);t(68),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(69);var s=t(16),o=t(17),c=t(21),m=t(20),d=(t(70),t(12)),u=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={isClose:!0},e.handleUserClick=function(a){window.innerWidth<=850&&e.setState({isClose:!e.state.isClose})},e.toggleHamburgerIconClass=function(a){e.setState({isClose:!e.state.isClose})},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.handleScrollEvent)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.handleScrollEvent)}},{key:"handleScrollEvent",value:function(){var e=document.getElementById("navbar");window.pageYOffset>=window.innerHeight?e.classList.add("sticky"):e.classList.remove("sticky")}},{key:"handleSetActive",value:function(e){window.innerWidth>850&&"nav-Main"===e&&!this.state.isClose&&this.setState({isClose:!this.state.isClose})}},{key:"handleSetInactive",value:function(e){window.innerWidth>850&&"nav-Main"===e&&this.state.isClose&&this.setState({isClose:!this.state.isClose})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{id:"navbar",className:"navbar"},l.a.createElement("div",{className:"hamburger-menu"},l.a.createElement("div",{id:"hamburger-icon",className:this.state.isClose?"":"open",onClick:this.toggleHamburgerIconClass},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("nav",{className:"nav-menu",style:this.state.isClose?{display:"none"}:{display:"block"}},l.a.createElement("div",{id:"nav-Main"},l.a.createElement(d.Link,{activeClass:"active",to:"Main",spy:!0,smooth:!0,offset:0,duration:500,onSetActive:function(){return e.handleSetActive("nav-Main")},onSetInactive:function(){return e.handleSetInactive("nav-Main")}})),l.a.createElement(d.Link,{activeClass:"active",to:"Profile",spy:!0,smooth:!0,offset:0,duration:500,onClick:this.handleUserClick},l.a.createElement("div",{className:"nav-item"},l.a.createElement("div",{className:"title"},"Profile "))),l.a.createElement(d.Link,{activeClass:"active",to:"Experiences",spy:!0,smooth:!0,offset:0,duration:500,onClick:this.handleUserClick},l.a.createElement("div",{className:"nav-item"},l.a.createElement("div",{className:"title"},"Education"))),l.a.createElement(d.Link,{activeClass:"active",to:"Projects",spy:!0,smooth:!0,offset:0,duration:500,onClick:this.handleUserClick},l.a.createElement("div",{className:"nav-item"},l.a.createElement("div",{className:"title"},"Projects"))),l.a.createElement(d.Link,{activeClass:"active",to:"Skills",spy:!0,smooth:!0,offset:0,duration:500,onClick:this.handleUserClick},l.a.createElement("div",{className:"nav-item"},l.a.createElement("div",{className:"title"},"Skills"))),l.a.createElement(d.Link,{activeClass:"active",to:"Volunteer",spy:!0,smooth:!0,offset:0,duration:500,onClick:this.handleUserClick},l.a.createElement("div",{className:"nav-item"},l.a.createElement("div",{className:"title"},"Volunteer"))),l.a.createElement(d.Link,{activeClass:"active",to:"Contact",spy:!0,smooth:!0,offset:0,duration:500,onClick:this.handleUserClick},l.a.createElement("div",{className:"nav-item"},l.a.createElement("div",{className:"title"},"Contact")))))}}]),t}(l.a.Component),E=(t(81),t(46)),v=(t(82),t(47));function p(){return l.a.createElement("div",{className:"jumbotron main-card"},l.a.createElement("p",{className:"name"},"SAMMED SANKONATTI"),l.a.createElement("hr",{className:"line"}),l.a.createElement("h4",{className:"status"},"\ud83c\udd72\ud83c\udd7e\ud83c\udd7c\ud83c\udd7f\ud83c\udd74\ud83c\udd83\ud83c\udd70\ud83c\udd83\ud83c\udd78\ud83c\udd85\ud83c\udd74 \ud83c\udd72\ud83c\udd7e\ud83c\udd73\ud83c\udd74\ud83c\udd81"),l.a.createElement("h5",{className:"status1"},"Looking for my next challenge"),l.a.createElement(d.Link,{activeClass:"active",to:"Profile",spy:!0,smooth:!0,offset:0,duration:500},l.a.createElement("div",{className:"scroll"},l.a.createElement("h6",{className:"scrollText"},"Resume"),l.a.createElement("div",{className:"scrollIcon"},l.a.createElement(v.a,{size:40})))))}function h(){return l.a.createElement("div",{id:"Main",className:"Main"},l.a.createElement(p,null),l.a.createElement(E.a,{className:"ParticlesBg",num:20,color:"#3341FF",type:"polygon",bg:!1}))}t(83);var f=t(48),g=t.n(f),b=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Profile",id:"Profile"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"profile-title"},"Profile"),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4 about-me-col"},l.a.createElement("h2",{className:"sub-title"},"About me"),l.a.createElement("div",null,l.a.createElement("p",{className:"about-me"},"Electrical Engineering Student with Bachelor's degree from  BMS College of engineering Bangalore.")),l.a.createElement("div",null,l.a.createElement("p",{className:"about-me"},"Fashionated coder and interested in competative coding.")),l.a.createElement("div",null,l.a.createElement("p",{className:"about-me"},"Interested in software development")),l.a.createElement("div",null,l.a.createElement("p",{className:"about-me"},"Team player, hard-worker, self-learner and work on my skills.")),l.a.createElement("div",null,l.a.createElement("p",{className:"about-me"},"Looking for a new challenge as a Software engineer or a full-stack position, with the possibility of a Full-time job starting from 2021."))),l.a.createElement("div",{className:"col-sm-5 image-col"},l.a.createElement("img",{className:"proflie-img",src:g.a,alt:"profile"})),l.a.createElement("div",{className:"col-sm-3 details-col"},l.a.createElement("h2",{className:"sub-title"},"Detials"),l.a.createElement("div",null,l.a.createElement("h5",null,"Name"),l.a.createElement("h6",null,"Sammed Sankonatti")),l.a.createElement("div",null,l.a.createElement("h5",null,"Age"),l.a.createElement("h6",null,"21 Years")),l.a.createElement("div",null,l.a.createElement("h5",null,"Location"),l.a.createElement("h6",null,"Bangalore, India")))),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h5",null,"My dream has always been to be in a position that can affect millions of people around the world, especially in companies with an unlimited vision that reflects my personality."))))}}]),t}(l.a.Component);t(84);function N(e){var a=e.title,t=e.quotes,n=e.quotesAuthor;return l.a.createElement("div",null,l.a.createElement("h1",{className:"section-title"},a),l.a.createElement("div",{className:"quotes"},l.a.createElement("h5",{className:"quotes"},t),l.a.createElement("h6",{className:"quotes"},n)),l.a.createElement("hr",null))}t(85);var C=t(52),y=t(49);function k(e){var a=e.title,t=e.subTitle,n=e.date,i=e.location,r=e.details,s=e.detailsType,o=e.myVideoId;return l.a.createElement("div",{className:"row card-row"},l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("h4",{className:"card-name"},a),l.a.createElement("p",{className:"card-date"},n),l.a.createElement("div",{className:"card-location"},l.a.createElement(C.a,null)," ",i)),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("div",{className:"card-details"},l.a.createElement("h6",{className:"card-details-title"},t),"p"===s?r.map((function(e,a){return l.a.createElement("p",{key:a,className:"par-details"},e)})):"li"===s?l.a.createElement("ul",{className:"list"},r.map((function(e,a){return l.a.createElement("li",{key:a},e)}))):null,l.a.createElement("div",{style:""===o?{display:"none"}:{}},l.a.createElement(y.a,{className:"youtubeVideo",videoId:o,opts:{width:"100%"}})))))}function S(){return l.a.createElement("div",{className:"section",id:"Experiences",style:{backgroundColor:"#e0e0e0"}},l.a.createElement("div",{className:"container"},l.a.createElement(N,{title:"EDUCATION",quotes:O,quotesAuthor:T}),l.a.createElement(k,{title:"BMS College",subTitle:"B.Tech Electrical Engineering.",date:"Aug.2017 \u2013 Jun.2021",location:"Bangalore, In",details:w,detailsType:"p",myVideoId:""}),l.a.createElement("hr",null),l.a.createElement(k,{title:"Tungal Science College",subTitle:"PU in Science with Mathematics and Statistics.",date:"Jun.2015 \u2013 May.2017",location:"Jamkhandi, Ka",details:P,detailsType:"p",myVideoId:""})))}var O='"Education is the most powerful weapon which you can use to change the world"',T="Nelson Mandela.",w=[" CGPA: 8.2, Excelling and determined student .","Top Courses: Data Structures, Algorithms, C++, OOPS, Operating System, Linux, Database Systems and Computer Networks."],P=["passed out with 92% in PU board and CET score of 4500.","participated in Atheletic sports like Running and Chess. ","cleared NDA(National Defence Academy) test during 2nd PUC April 2017"],A=t(53),j=t.n(A),I=t(54),_=t.n(I);t(97);function x(e){var a=e.name,t=e.details,n=e.projectLink,i=e.pic;return l.a.createElement("div",{className:"row project"},l.a.createElement("div",{className:"col-sm-4 project-detials"},l.a.createElement("h5",null,a),t.map((function(e,a){return l.a.createElement("p",{key:a},e)})),l.a.createElement("button",{style:void 0===n?{display:"none"}:{display:"block"},onClick:function(){return window.open(n,"_blank","noopener,noreferrer")},type:"button",className:"btn btn-secondary"},"Website")),l.a.createElement("div",{className:"col-sm-8 project-pic"},void 0===n?l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:i,alt:"sorting project",className:"project-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"text"}))):void 0!==n?l.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:i,alt:a,className:"project-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"text"},"Website")))):null))}var L=t(29),D=t(55),R=t(56),W=(t(98),l.a.createElement(L.b,{size:70})),M=l.a.createElement(L.a,{size:70}),B=l.a.createElement(D.a,{size:70}),H=l.a.createElement(R.a,{size:70});function q(e){var a=e.myClassName,t=e.myHref,n="linkedin"===a?W:"github"===a?M:"mail"===a?B:"phone"===a?H:null;return l.a.createElement("a",{className:a,href:t,target:"_blank",rel:"noopener noreferrer"},n)}function F(){return l.a.createElement("div",{id:"Projects",className:"section"},l.a.createElement("div",{className:"container"},l.a.createElement(N,{title:"PROJECTS",quotes:z,quotesAuthor:J}),l.a.createElement(x,{name:"Pathfinding Visualizer",details:U,projectLink:"https://sammed-sankonatti.github.io/pathfinder/",pic:j.a}),l.a.createElement("hr",null),l.a.createElement(x,{name:"Sorting Visualizer",details:V,projectLink:"https://sammed-sankonatti.github.io/sorting-visualizer/",pic:_.a}),l.a.createElement("hr",null),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h5",null,"See more projects"),l.a.createElement(q,{myClassName:"github",myHref:"https://github.com/sammed-sankonatti"}))))}var U=["Built React/ Redux application for visualizing pathfinding algorithms.","Implemented Algorithm:","A* Search.","Dijkstra\u2019s Algorithm.","Breadth First Search (BFS).","Depth First Search (DFS)."],V=["Built React application for visualizing sorting algorithms.","Implemented Algorithm:","Selection Sort, Bubble Sort.","Insertion Sort, Merge Sort.","Quick Sort, Heap Sort."],z='"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program."',J="Linus Torvalds",K=(t(99),t(22)),Y=(t(100),t(8)),G=t(14),$=t(33),Q=t.n($),X=t(138),Z=t(142),ee=t(141),ae=t(140),te=t(58),ne=t.n(te),le=t(59),ie=t.n(le),re=t(40),se={disabled:{"&:before":{backgroundColor:"transparent !important"}},underline:{"&:hover:not($disabled):before,&:before":{borderColor:"#D2D2D2 !important",borderWidth:"1px !important"},"&:after":{borderColor:"#ff6600"}},labelRoot:Object(re.a)(Object(re.a)({},{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"300",lineHeight:"1.5em"}),{},{color:"#AAAAAA !important",fontWeight:"400",fontSize:"14px",lineHeight:"1.42857",letterSpacing:"unset"}),feedback:{position:"absolute",top:"18px",right:"0",zIndex:"2",display:"block",width:"24px",height:"24px",textAlign:"center",pointerEvents:"none"},marginTop:{marginTop:"16px"},formControl:{paddingBottom:"10px",margin:"27px 0 0 0",position:"relative",verticalAlign:"unset"}},oe=Object(X.a)(se);function ce(e){var a,t,n=oe(),i=e.formControlProps,r=e.labelText,s=e.id,o=e.name,c=e.labelProps,m=e.inputProps,d=e.error,u=e.success,E=Q()((a={},Object(G.a)(a," "+n.labelRootError,d),Object(G.a)(a," "+n.labelRootSuccess,u&&!d),a)),v=Q()((t={},Object(G.a)(t,n.underlineError,d),Object(G.a)(t,n.underlineSuccess,u&&!d),Object(G.a)(t,n.underline,!0),t)),p=Q()(Object(G.a)({},n.marginTop,void 0===r));return l.a.createElement(Z.a,Object.assign({},i,{className:i.className+" "+n.formControl}),void 0!==r?l.a.createElement(ee.a,Object.assign({className:n.labelRoot+E,htmlFor:s},c),r):null,l.a.createElement(ae.a,Object.assign({classes:{root:p,disabled:n.disabled,underline:v},id:s,name:o},m)),d?l.a.createElement(ne.a,{className:n.feedback+" "+n.labelRootError}):u?l.a.createElement(ie.a,{className:n.feedback+" "+n.labelRootSuccess}):null)}t(104);var me=t(60);t(107).config(),Y.a.configure();var de=function(e){Object(c.a)(n,e);var a=Object(m.a)(n);function n(e){var t;return Object(s.a)(this,n),(t=a.call(this,e)).handleOnSubmit=t.handleOnSubmit.bind(Object(K.a)(t)),t.validateEmail=t.validateEmail.bind(Object(K.a)(t)),t.validateForm=t.validateForm.bind(Object(K.a)(t)),t}return Object(o.a)(n,[{key:"validateForm",value:function(e){var a=new FormData(e.target);Y.a.configure();var t=!0,n=a.get("first-name"),l=a.get("last-name"),i=a.get("email-address"),r=a.get("message");return""===n?(t=!1,Y.a.error("first name required..!",{position:Y.a.POSITION.TOP_CENTER,autoClose:2e3})):""===l?(t=!1,Y.a.error("last name required..!",{position:Y.a.POSITION.TOP_CENTER,autoClose:2e3})):""===i?(t=!1,Y.a.error("E-mail Address required..!",{position:Y.a.POSITION.TOP_CENTER,autoClose:2e3})):this.validateEmail(i)?""===r&&(t=!1,Y.a.error("message required..!",{position:Y.a.POSITION.TOP_CENTER,autoClose:2e3})):(t=!1,Y.a.error("E-mail Address unvalid..!",{position:Y.a.POSITION.TOP_CENTER,autoClose:2e3})),t}},{key:"validateEmail",value:function(e){return t(110).validate(e)}},{key:"handleOnSubmit",value:function(e){e.preventDefault(),this.validateForm(e)&&(me.sendForm(Object({NODE_ENV:"production",PUBLIC_URL:"/interactive-resume",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_EMAILJS_SERVICE_ID,Object({NODE_ENV:"production",PUBLIC_URL:"/interactive-resume",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_EMAILJS_TEMPLATE_ID,e.target,Object({NODE_ENV:"production",PUBLIC_URL:"/interactive-resume",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_EMAILJS_USER_ID).then((function(){Y.a.success("Sent!",{position:Y.a.POSITION.TOP_CENTER,autoClose:5e3})}),(function(e){Y.a.error("Sorry, we are unable to send the message now, please try later.",{position:Y.a.POSITION.TOP_CENTER,autoClose:1e4})})),e.target.reset())}},{key:"render",value:function(){return l.a.createElement("form",{id:"myForm",className:"card",onSubmit:this.handleOnSubmit},l.a.createElement("div",{className:"cardHeader"},l.a.createElement("h5",{style:{color:"white"}},"I am sure that the combination of my skills and motivation with your company vision will lead to the greatest technologies that change the world for the better.")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement(ce,{labelText:"First Name",id:"first-name",name:"first-name",formControlProps:{fullWidth:!0}})),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement(ce,{labelText:"Last Name",id:"last-name",name:"last-name",formControlProps:{fullWidth:!0}}))),l.a.createElement(ce,{labelText:"Email address",id:"email-address",name:"email-address",formControlProps:{fullWidth:!0}}),l.a.createElement(ce,{labelText:"Message",id:"message",name:"message",formControlProps:{fullWidth:!0},inputProps:{multiline:!0,rows:5}}),l.a.createElement("div",{className:"send-button-div"},l.a.createElement("button",{className:"sendButton"},"SEND")))}}]),n}(l.a.Component);function ue(){return l.a.createElement("div",{className:"section",id:"Contact",style:{textAlign:"center",backgroundColor:"#e0e0e0"}},l.a.createElement("div",{className:"container"},l.a.createElement(N,{title:"Lets work together",quotes:"",quotesAuthor:""}),l.a.createElement(de,null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement(q,{myClassName:"linkedin",myHref:"https://www.linkedin.com/in/sammed-sankonatti"}),l.a.createElement(q,{myClassName:"github",myHref:"https://github.com/sammed-sankonatti"})),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement(q,{myClassName:"mail",myHref:"mailto:sammed.sankonatti45@gmail.com"}),l.a.createElement(q,{myClassName:"phone",myHref:"tel:+918317379314"}))),l.a.createElement("h6",{className:"info"},"sammed.sankonatti45@gmail.com"),l.a.createElement("h6",{className:"info"},"+91 831-737-9314"),l.a.createElement("button",{onClick:function(){return window.open("")},type:"button",className:"btn btn-outline-danger"},"View full CV"),l.a.createElement("hr",null)))}t(111),t(112);t(113);t(114);function Ee(){return l.a.createElement("div",{className:"progress animation-progress",style:{height:"25px"}},l.a.createElement("div",{className:"progress-bar animation-progress-bar"},l.a.createElement("div",{className:"progress-text"}," Self Learning - 100%")))}t(115);function ve(){return l.a.createElement("div",{className:"section",id:"Skills",style:{backgroundColor:"#e0e0e0"}},l.a.createElement("div",{className:"container"},l.a.createElement(N,{title:"Skills",quotes:"",quotesAuthor:""}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"skills"},l.a.createElement("div",{className:"col-sm-3 skill"},l.a.createElement("i",{class:"devicon-cplusplus-plain colored"}),l.a.createElement("i",{class:"devicon-javascript-plain colored"}),l.a.createElement("br",null),l.a.createElement("i",{class:"devicon-python-plain colored"}),l.a.createElement("i",{class:"devicon-java-plain-wordmark colored"})),l.a.createElement("div",{className:"col-sm-3 skill"},l.a.createElement("i",{class:"devicon-html5-plain-wordmark colored"}),l.a.createElement("i",{class:"devicon-css3-plain-wordmark colored"}),l.a.createElement("br",null),l.a.createElement("i",{class:"devicon-react-original colored"}),l.a.createElement("i",{class:"devicon-bootstrap-plain colored"})),l.a.createElement("div",{className:"col-sm-3 skill"},l.a.createElement("i",{class:"devicon-nodejs-plain colored"}),l.a.createElement("i",{class:"devicon-express-original colored"}),l.a.createElement("br",null),l.a.createElement("i",{class:"devicon-mongodb-plain-wordmark colored"}),l.a.createElement("i",{class:"devicon-mysql-plain-wordmark colored"})),l.a.createElement("div",{className:"col-sm-3 skill"},l.a.createElement("i",{class:"devicon-git-plain colored"}),l.a.createElement("i",{class:"devicon-visualstudio-plain colored"}),l.a.createElement("br",null),l.a.createElement("i",{class:"devicon-linux-plain colored"}),l.a.createElement("i",{class:"devicon-github-plain colored"})))),l.a.createElement(Ee,null)))}function pe(){return l.a.createElement("div",{className:"section",id:"Volunteer"},l.a.createElement("div",{className:"container"},l.a.createElement(N,{title:"VOLUNTEE",quotes:he,quotesAuthor:fe}),l.a.createElement(k,{title:"Phase Shift",subTitle:"Volunteered at \u201cPhase Shift\u201d Program in College.",date:"Sep.2019",location:"Bangalore",details:ge,detailsType:"p",myVideoId:""}),l.a.createElement(k,{title:"Workshops",subTitle:"conducted various workshops and volunteered them during 3rd year of college.",date:"Oct.2019\u2013 Nov.2019",location:"Bangalore",details:be,detailsType:"p",myVideoId:""})))}var he='"Remember that the happiest people are not those getting more, but those giving more."',fe="H. Jackson Brown Jr.",ge=["Accompanying small businesses in the periphery and setting up digital tools such as a landing page through Wix, a Facebook business page, Google my business profile."],be=[" workshops for high school youth to give them the spirit of volunteering and a volunteer days in schools and institutions for Children with disabilities."];r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement(u,null),l.a.createElement(b,null),l.a.createElement(S,null),l.a.createElement(F,null),l.a.createElement(ve,null),l.a.createElement(pe,null),l.a.createElement(ue,null),l.a.createElement("footer",{id:"footer"},l.a.createElement("h6",{className:"rights"},"Copyright \xa9 ",(new Date).getFullYear()," sammed.sankonatti")))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},48:function(e,a,t){e.exports=t.p+"static/media/ali-proflie.5ed2b0a4.jpg"},53:function(e,a,t){e.exports=t.p+"static/media/pathfinding.0f23d6ec.png"},54:function(e,a,t){e.exports=t.p+"static/media/sorting.186f05f8.png"},63:function(e,a,t){e.exports=t(116)},68:function(e,a,t){},70:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){},97:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){}},[[63,1,2]]]);
//# sourceMappingURL=main.84870c0c.chunk.js.map