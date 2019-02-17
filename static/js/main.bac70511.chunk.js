(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(37)},27:function(e,t,a){},33:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),c=a.n(o),l=(a(27),a(8)),i=a(5),s=a(6),u=a(9),b=a(7),h=a(10),d=function(e){var t=e.name,a=e.email,n=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(n,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))},p=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,a){return r.a.createElement(d,{key:a,id:t[a].id,name:t[a].name,email:t[a].email})}))},m=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{"aria-label":"searchbox",className:"pa3 ba b--greeb bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t}))},g=(a(33),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"600px"}},e.children)}),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oppps that is not good"):this.props.children}}]),t}(n.Component),E=a(3),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={robot:{name:"",email:"",id:null}},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("input",{"aria-label":"robot name",type:"text",name:"robotName",placeholder:"Name",className:"pa3 ba b--greeb bg-lightest-blue",onChange:function(t){var a=Object(E.a)({},e.state.robot);a.name=t.target.value,e.setState({robot:a}),console.log(e.state.robot)}}),r.a.createElement("input",{"aria-label":"robot email",type:"email",name:"robotEmail",placeholder:"Email",className:"pa3 ba b--greeb bg-lightest-blue",onChange:function(t){var a=Object(E.a)({},e.state.robot);a.email=t.target.value,e.setState({robot:a}),console.log(e.state.robot)}}),r.a.createElement("button",{className:"bg-lightest-blue",style:{padding:"5px",marginLeft:"10px",borderRadius:"5px",height:"50px"},onClick:function(){var t=e.props.robots,a=Math.random(),n=Object(E.a)({},e.state.robot);n.id=a,e.setState({robot:n}),t.push(e.state.robot),e.props.onAddRobot(t)}},"Add Robot"))}}]),t}(n.Component),v=Object(l.b)(function(e){return{robots:e.robotsReducer.robots}},function(e){return{onAddRobot:function(t){return e(function(e){return{type:"ADD_ROBOT",payload:e}}(t))}}})(O),y=function(){return r.a.createElement("div",null,r.a.createElement("input",{"aria-label":"robot name",type:"text",placeholder:"Robot Name",className:"pa3 ba b--greeb bg-lightest-blue"}),r.a.createElement("button",{className:"bg-lightest-blue",style:{padding:"5px",marginLeft:"10px",borderRadius:"5px",height:"50px"}},"Delete Robot"))},j=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this,t=this.props.robots,a=t.filter(function(t){return t.name.toLocaleLowerCase().includes(e.props.searchField.toLocaleLowerCase())});return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f2"},"RoboFriends"),r.a.createElement(v,null),r.a.createElement(y,null),r.a.createElement(m,{searchChange:this.props.onSearchChange}),r.a.createElement(g,null,r.a.createElement(f,null,r.a.createElement(p,{robots:a})))):r.a.createElement("h1",null,"Loading...")}}]),t}(n.Component),R=Object(l.b)(function(e){return{searchField:e.searchFieldReducer.searchField,robots:e.robotsReducer.robots,isPending:e.robotsReducer.isPending}},function(e){return{onSearchChange:function(t){return e({type:"SEARCH_CHANGE",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"FETCH_ROBOTS_START"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"FETCH_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"FETCH_ROBOTS_FAIL",payload:t})})})}}})(j);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(35);var C=a(11),S={searchField:""},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_CHANGE":return Object(E.a)({},e,{searchField:t.payload});default:return e}},T={robots:[],isPending:!1,error:null,robot:{robotName:"",robotEmail:""}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ROBOTS_START":return Object(E.a)({},e,{isPending:!0});case"FETCH_ROBOTS_SUCCESS":return Object(E.a)({},e,{robots:t.payload,isPending:!1});case"FETCH_ROBOTS_FAIL":return Object(E.a)({},e,{error:t.payload,isPending:!1});case"ADD_ROBOT":return Object(E.a)({},e,{robots:t.payload});default:return e}},N=a(20),_=a(21),x=Object(N.createLogger)(),A=Object(C.c)({robotsReducer:F,searchFieldReducer:w}),k=Object(C.d)(A,Object(C.a)(_.a,x));c.a.render(r.a.createElement(l.a,{store:k},r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.bac70511.chunk.js.map