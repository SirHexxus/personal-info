(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/bioPic.b0d341a8.png"},33:function(e,t,a){e.exports=a(62)},38:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(29),r=a.n(c),o=(a(38),a(5)),i=a(6),m=a(8),s=a(7),u=a(9),E=a(10);function p(){return l.a.createElement("div",{className:"navBrand"},l.a.createElement("h3",null,"JMS Web Designs"))}function d(){return l.a.createElement("div",{className:"linkList"},l.a.createElement("div",{className:"flexItem"},l.a.createElement(E.b,{to:"/"},"Home"),l.a.createElement(E.b,{to:"/portfolio"},"Portfolio")),l.a.createElement("div",{className:"flexItem"},l.a.createElement(E.b,{to:"/services"},"Services"),l.a.createElement(E.b,{to:"/about"},"About Me")))}function f(){return l.a.createElement("div",{className:"nav"},l.a.createElement(p,null),l.a.createElement(d,null))}var h=a(12);function g(){return l.a.createElement("div",{className:"pageCol index"},l.a.createElement("div",{className:"card dark"},l.a.createElement("h1",null,"INDEX PAGE"),l.a.createElement("h2",null,"This Page is under construction.")))}function b(e){var t=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{className:"flexRow"},t))}function v(e){var t=e.project;return l.a.createElement("li",{className:"list-group-item"},l.a.createElement("div",{className:"card light"},l.a.createElement(E.b,{to:"/project/".concat(t._id),className:"flexCol"},l.a.createElement("strong",null,t.title),l.a.createElement("img",{src:t.image,alt:""}))))}var j=a(14),N=a.n(j),k={getProjects:function(){return N.a.get("/api/projects")},getProject:function(e){return N.a.get("/api/project/".concat(e))},deleteProject:function(e){return N.a.delete("/api/project/".concat(e))},saveProject:function(e){return N.a.post("/api/project/",e)},updateProject:function(e,t){return N.a.put("/api/project/".concat(e),t)}},y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={projects:[]},a.loadProjects=function(){var e=this;k.getProjects().then(function(t){return e.setState({projects:t.data})}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.loadProjects()}},{key:"render",value:function(){var e=this.state.projects;return console.log(e),l.a.createElement("div",{className:"pageCol"},l.a.createElement("div",{className:"card accentDark jumbotron"},l.a.createElement("h1",null,"My Portfolio")),e.length>0?l.a.createElement("div",{className:"card accentLight flexCol",style:{marginTop:"10rem",width:"90vw"}},l.a.createElement("h1",null,"Projects:"),l.a.createElement(b,null,e.map(function(e){return l.a.createElement(v,{key:e._id,project:e})}))):l.a.createElement("div",{className:"card light"},l.a.createElement("h3",null,"No Results to Display")))}}]),t}(n.Component);function w(){return l.a.createElement("div",{className:"card dark flexCol"},l.a.createElement("h4",{className:"greeting"},"Hello! My name is:"),l.a.createElement("h1",{className:"name"},l.a.createElement("strong",null,"James Stacy")),l.a.createElement("h4",{className:"title"},l.a.createElement("span",null,"Full Stack Web and Mobile Developer")),l.a.createElement("hr",null),l.a.createElement("p",null,"I am a Full Stack Web Developer with a background in Weighing and Measurement and a life-long dedication to solving problems. I have been recognized as effective at solving problems based on customer or client needs, and being able to adapt to unfamiliar situations. I am also well known for my quick wit, attention to detail, and decisive leadership as a Project Manager in several small projects."),l.a.createElement("ul",{className:"list info"},l.a.createElement("h3",null,"Contact and Location Info:"),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-home"})," Southern California"),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-phone"})," 1(951) 805-3811"),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-envelope"})," ",l.a.createElement("a",{href:"mailto:jamesmichaelstacy@gmail.com"},"JamesMichaelStacy@gmail.com"))),l.a.createElement("ul",{className:"list social"},l.a.createElement("h3",null,"Professional Social Media:"),l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-facebook"})," ",l.a.createElement("a",{href:"https://www.facebook.com/jmswebdesigns/"},"Facebook")),l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-github"})," ",l.a.createElement("a",{href:"https://github.com/SirHexxus"},"Github")),l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-linkedin"})," ",l.a.createElement("a",{href:"https://www.linkedin.com/in/james-m-stacy"},"LinkedIn"))))}var O=a(32),P=a.n(O),C=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"pageRow"},l.a.createElement("img",{className:"bioPic",src:P.a,alt:!0}),l.a.createElement(w,null))}}]),t}(n.Component);function S(){return l.a.createElement("div",{className:"pageCol"},l.a.createElement("div",{className:"card dark"},l.a.createElement("h1",null,"404 Not Found",l.a.createElement("span",{role:"img","aria-label":"Face with rolling eyes"},"\ud83d\ude44")),l.a.createElement("a",{href:"/"},"\u2190 Back To Home")))}var D=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"pageRow"},l.a.createElement("div",{className:"card dark"},l.a.createElement("h1",null,"ADMIN PAGE"),l.a.createElement("h2",null,"This Page is under construction.")))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={project:{}},a.loadProject=function(){k.getProject(a.props.match.params.id).then(function(e){console.log(e.data),a.setState({project:e.data})}).catch(function(e){console.log("err: ".concat(e))})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.loadProject()}},{key:"render",value:function(){var e=this.state.project,t=e.title,a=e.repoURL,n=e.deployedURL,c=e.image,r=this.state.project,o=r._id,i=r.description;return l.a.createElement("div",{className:"card flexCol accentDark",style:{marginTop:"10rem",height:"75vh"}},l.a.createElement("p",null,l.a.createElement("strong",null,"Title"),": ",t),l.a.createElement("img",{src:c,alt:t}),l.a.createElement("span",null,l.a.createElement("strong",null,"ID"),": ",o),l.a.createElement("p",null,l.a.createElement("strong",null,"Description:")," ",i),l.a.createElement("ul",{className:"flexCol"},n?l.a.createElement("li",null,l.a.createElement("a",{href:n},"See It Live")):l.a.createElement("li",null,l.a.createElement("p",null,"No Deployment Link (See Description)")),l.a.createElement("li",null,l.a.createElement("a",{href:a},"See The Source Code")),l.a.createElement("br",null),l.a.createElement("li",null,l.a.createElement("a",{href:"/portfolio"},"\u2190 Back To Portfolio"))))}}]),t}(n.Component);function I(){return l.a.createElement("div",{className:"pageRow"},l.a.createElement("h1",null,"SERVICES PAGE"))}function M(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.c,null,l.a.createElement(h.a,{exact:!0,path:"/",component:g}),l.a.createElement(h.a,{path:"/portfolio",component:y}),l.a.createElement(h.a,{path:"/admin",component:D}),l.a.createElement(h.a,{path:"/project/:id",component:x}),l.a.createElement(h.a,{path:"/about",component:C}),l.a.createElement(h.a,{path:"/services",component:I}),l.a.createElement(h.a,{path:"*",component:S})))}function A(){return l.a.createElement("div",{className:"footer"},l.a.createElement("span",null,"Copyright JMS Web Designs/James Stacy \xa9"," ",(new Date).getFullYear()),l.a.createElement("br",null),l.a.createElement("span",null,"All rights reserved"))}a(61);var F=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E.a,{className:"flexContainer"},l.a.createElement(f,null),l.a.createElement(M,null),l.a.createElement(A,null)))}}]),t}(n.Component);r.a.render(l.a.createElement(F,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.25b2d969.chunk.js.map