(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(6),i=a.n(n),r=a(8),s=a(2),c=(a(13),a(1)),l=a(7),o=a.n(l),d=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],u=a(0),m=function(e){var t=e.userId,a=d.find((function(e){return e.id===t}))||null;if(a){var n=a.name,i=a.email;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(i),children:n})}return null},j=function(e){var t=e.todo,a=t.title,n=t.userId,i=t.id;return Object(u.jsxs)("article",{"data-id":i,className:o()("TodoInfo",{"TodoInfo--completed":!1}),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:a}),n&&Object(u.jsx)(m,{userId:n})]})},h=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(j,{todo:e},e.id)}))})},b=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],O=function(){var e=Object(c.useState)(b),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(""),l=Object(s.a)(i,2),o=l[0],m=l[1],j=Object(c.useState)(!1),O=Object(s.a)(j,2),f=O[0],p=O[1],x=Object(c.useState)(0),v=Object(s.a)(x,2),y=v[0],S=v[1],I=Object(c.useState)(!1),g=Object(s.a)(I,2),N=g[0],C=g[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(e.preventDefault(),o||p(!0),y||C(!0),o.length>0&&0!==y){var t={id:a.length+1,title:o,completed:!1,userId:y};n((function(e){return[].concat(Object(r.a)(e),[t])})),m(""),S(0),p(!1),C(!1)}},children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsxs)("label",{htmlFor:"title",children:["Title: ",Object(u.jsx)("input",{type:"text",name:"tilte","data-cy":"titleInput",value:o,placeholder:"Enter a title",onChange:function(e){m(e.target.value)}})]}),f&&0===o.length&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsxs)("label",{htmlFor:"user",children:["User: ",Object(u.jsxs)("select",{"data-cy":"userSelect",name:"user",value:y,onChange:function(e){S(+e.target.value)},children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),d.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),N&&0===y&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(u.jsx)(h,{todos:a})]})};i.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6cb5c757.chunk.js.map