(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{29:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c(0),r=c(16),a=c.n(r),o=c(10),l=(c(29),c(12)),i=c(13),j=c(15),b=c(14),m=c(3),h=c(49),d=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){return Object(s.jsxs)("form",{children:[Object(s.jsx)("h3",{children:"Log in"}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Email"}),Object(s.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Password"}),Object(s.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password"})]}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(s.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),Object(s.jsx)("label",{className:"custom-control-label",htmlFor:"customCheck1",children:"Remember me"})]})}),Object(s.jsx)(h.a,{component:o.b,to:"/Home",children:"Sign In"}),Object(s.jsxs)("p",{className:"forgot-password text-right",children:["Forgot ",Object(s.jsx)("a",{href:"#",children:"password?"})]})]})}}]),c}(n.Component),u=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){return Object(s.jsxs)("form",{children:[Object(s.jsx)("h3",{children:"Register"}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"First name"}),Object(s.jsx)("input",{type:"text",className:"form-control",placeholder:"First name"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Last name"}),Object(s.jsx)("input",{type:"text",className:"form-control",placeholder:"Last name"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Email"}),Object(s.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Password"}),Object(s.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password"})]}),Object(s.jsx)(h.a,{component:o.b,to:"/Home",children:"Register"}),Object(s.jsxs)("p",{className:"forgot-password text-right",children:["Already registered ",Object(s.jsx)("a",{href:"#",children:"log in?"})]})]})}}]),c}(n.Component),p=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(e){var s;return Object(l.a)(this,c),(s=t.call(this,e)).state={error:null,isLoaded:!1,items:[]},s}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://itunes.apple.com/us/rss/topmovies/limit=25/json").then((function(e){return e.json()})).then((function(t){e.setState({items:t.feed.entry})}),(function(e){}))}},{key:"render",value:function(){var e=this.state.items;return Object(s.jsxs)("div",{children:[Object(s.jsx)("ul",{children:e.map((function(e){return Object(s.jsxs)("li",{children:[Object(s.jsx)("h1",{}),"Title : ",e.title.label,Object(s.jsx)("h1",{}),"Summary :",e.summary.label,Object(s.jsx)("h1",{}),Object(s.jsx)("img",{src:e["im:image"][0].label}),";"]},e.id)}))}),Object(s.jsx)("ul",{children:e.map((function(e){return Object(s.jsxs)("li",{children:[Object(s.jsx)("h1",{}),"Title : ",e.title.label,Object(s.jsx)("h1",{}),"Summary :",e.summary.label,Object(s.jsx)("h1",{}),Object(s.jsx)("img",{src:e["im:image"][0].label}),";"]},e.id)}))})]})}}]),c}(n.Component),O=(c(35),function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(i.a)(c,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(h.a,{component:o.b,to:"/Login",children:"Login"}),Object(s.jsx)(h.a,{component:o.b,to:"/SignUp",children:"Sign Up"}),Object(s.jsxs)(m.c,{children:[Object(s.jsx)(m.a,{path:"/SignUp",component:u}),Object(s.jsx)(m.a,{path:"/Login",component:d}),Object(s.jsx)(m.a,{path:"/Home",component:p})]})]})}}]),c}(n.Component));a.a.render(Object(s.jsx)(o.a,{children:Object(s.jsx)(O,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.1440f8f6.chunk.js.map