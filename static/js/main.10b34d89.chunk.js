(this["webpackJsonphooks-app"]=this["webpackJsonphooks-app"]||[]).push([[0],{18:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(20),o=n.n(r),s=n(11),i=(n(28),n(3)),l=n(2),j=n(0),m=a.a.memo((function(e){var t=e.numero,n=e.incrementar;return console.log("  Me volv\xed a generar :(  "),Object(j.jsx)("button",{className:"btn btn-primary mb-2",onClick:function(){return n(t)},children:t})})),u=function(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useCallback)((function(e){a((function(t){return t+e}))}),[a]);return Object(j.jsxs)("div",{className:"animate__animated animate__backInDown",children:[Object(j.jsx)("h1",{children:"Padre"}),Object(j.jsxs)("p",{children:[" Total: ",n," "]}),Object(j.jsx)("hr",{}),[2,4,6,8,10].map((function(e){return Object(j.jsx)(m,{numero:e,incrementar:r},e)}))]})},b=a.a.memo((function(e){var t=e.increment;return console.log("Me estrese y me volv\xed a generar"),Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){t(5)},children:"Increment"})})),d=function(){var e=Object(c.useState)(10),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useCallback)((function(e){a((function(t){return t+e}))}),[a]);return Object(j.jsxs)("div",{className:"animate__animated animate__backInDown",children:[Object(j.jsx)("h1",{children:"useCallback Hook"}),Object(j.jsxs)("h3",{children:[" Counter: ",n," "]}),Object(j.jsx)("hr",{}),Object(j.jsx)(b,{increment:r})]})},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=Object(c.useState)(e),n=Object(l.a)(t,2),a=n[0],r=n[1],o=function(){return r(a+1)},s=function(){return r(a-1)},i=function(){return e!==a&&r(e)};return{state:a,increment:o,decrement:s,reset:i}},O=function(){var e=h(5e3),t=e.state,n=e.increment,a=Object(c.useState)(!0),r=Object(l.a)(a,2),o=r[0],s=r[1],i=Object(c.useMemo)((function(){return function(e){for(var t=0;t<e;t++)console.log("Let\xb4s Go...");return"".concat(e," iteraciones realizadas.")}(t)}),[t]);return Object(j.jsxs)("div",{className:"animate__animated animate__backInDown",children:[Object(j.jsx)("h1",{children:"Memo Hook"}),Object(j.jsxs)("h3",{children:["Counter: ",Object(j.jsx)("small",{children:t})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("p",{children:[" ",i," "]}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:n,children:"+ 1"}),Object(j.jsxs)("button",{className:"btn btn-primary mt-2",onClick:function(){s(!o)},children:["Show/Hide ",JSON.stringify(o)]})]})},x=Object(c.memo)((function(e){var t=e.value;return console.log("Me renderice de nuevo, me va dar ansiedad!!"),Object(j.jsx)("small",{children:t})})),f=function(){var e=h(10),t=e.state,n=e.increment,a=Object(c.useState)(!0),r=Object(l.a)(a,2),o=r[0],s=r[1];return Object(j.jsxs)("div",{className:"animate__animated animate__backInDown",children:[Object(j.jsxs)("h1",{children:["Counter: ",Object(j.jsx)(x,{value:t})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:n,children:"+ 1"}),Object(j.jsxs)("button",{className:"btn btn-primary mt-2",onClick:function(){s(!o)},children:["Show/Hide ",JSON.stringify(o)]})]})},p=function(e){var t=Object(c.useRef)(!0),n=Object(c.useState)({data:null,loading:!0,error:null}),a=Object(l.a)(n,2),r=a[0],o=a[1];return Object(c.useEffect)((function(){return function(){t.current=!1}}),[]),Object(c.useEffect)((function(){o({data:null,loading:!0,error:null}),fetch(e).then((function(e){return e.json()})).then((function(e){setTimeout((function(){t.current&&o({data:e,loading:!1,error:null})}),4e3)}))}),[e]),r},v=function(){var e=h(1),t=e.state,n=e.increment,a=e.decrement,r=p("https://www.breakingbadapi.com/api/characters/".concat(t)).data,o=(!!r&&r[0]).img,s=Object(c.useRef)(),i=Object(c.useState)({}),m=Object(l.a)(i,2),u=m[0],b=m[1];return Object(c.useLayoutEffect)((function(){b(s.current.getBoundingClientRect())}),[o]),Object(j.jsxs)("div",{className:"animate__animated animate__backInDown",children:[Object(j.jsx)("h1",{style:{display:"flex",justifyContent:"center"},children:" Layout Effect "}),Object(j.jsxs)("div",{className:"card",style:{width:"100%"},children:[Object(j.jsx)("img",{src:o,className:"card-img-top",alt:"...",ref:s}),Object(j.jsx)("code",{children:Object(j.jsx)("pre",{children:JSON.stringify(u,null,3)})}),Object(j.jsxs)("div",{className:"stats ",children:[t>1&&Object(j.jsx)("button",{className:"btn btn-primary m-2",onClick:a,children:"Prev"}),Object(j.jsx)("button",{className:"btn btn-primary m-2",onClick:n,children:"Next"})]})]})]})},g=function(){var e=Object(c.useRef)();return Object(j.jsxs)("div",{className:"animate__animated animate__backInDown",children:[Object(j.jsx)("h1",{children:"Focus Screen"}),Object(j.jsx)("hr",{}),Object(j.jsx)("input",{ref:e,className:"form-control",placeholder:"Your name"}),Object(j.jsx)("button",{className:"btn btn-outline-primary mt-2",onClick:function(){e.current.select()},children:"Focus"})]})},N=function(){var e=h(1),t=e.state,n=e.increment,c=e.decrement,a=p("https://www.breakingbadapi.com/api/characters/".concat(t)),r=a.loading,o=a.data,s=!!o&&o[0],i=s.name,l=s.occupation,m=s.img,u=s.status,b=s.nickname;return Object(j.jsxs)("div",{className:"animate__animated animate__backInDown",children:[Object(j.jsx)("h1",{children:"Breaking Bad API"}),Object(j.jsxs)("div",{className:"card",style:{width:"100%"},children:[r?Object(j.jsx)("div",{className:"alert alert-info text-center",children:"Loading..."}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("img",{src:m,className:"card-img-top",alt:"..."}),Object(j.jsxs)("div",{className:"card-body",style:{color:"#000"},children:[Object(j.jsx)("div",{className:"card-title",children:Object(j.jsx)("h4",{children:i})}),Object(j.jsx)("p",{className:"card-text",children:"Nickname: ".concat(b)}),Object(j.jsxs)("p",{className:"card-text",children:["Status: ",Object(j.jsx)("span",{className:"badge rounded-pill bg-".concat("Alive"===u?"primary":"danger"),children:u})]})]}),Object(j.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(j.jsx)("li",{className:"list-group-item",children:"Occupation"}),l.map((function(e,t){return Object(j.jsx)("li",{className:"list-group-item",children:e},"item-"+t)}))]})]}),Object(j.jsxs)("div",{className:"stats",children:[t>1&&Object(j.jsx)("button",{className:"btn btn-primary m-2",onClick:c,children:"Prev"}),Object(j.jsx)("button",{className:"btn btn-primary m-2",onClick:n,children:"Next"})]})]})]})},k=N,y=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)("div",{className:"animate__animated animate__backInDown",children:[Object(j.jsx)("h1",{children:"Ref Example"}),Object(j.jsx)("hr",{}),n&&Object(j.jsx)(N,{}),Object(j.jsx)("button",{className:"btn btn-primary mt-2",onClick:function(){a(!n)},children:"Show/Hide"})]})},_=(n(18),n(10)),C=n(5),w=function(e){var t=Object(c.useState)(e),n=Object(l.a)(t,2),a=n[0],r=n[1];return[a,function(e){var t=e.target;r(Object(C.a)(Object(C.a)({},a),{},Object(_.a)({},t.name,t.value)))},function(){r(e)}]},S=function(){var e=w({name:"",email:"",password:""}),t=Object(l.a)(e,2),n=t[0],a=t[1],r=n.name,o=n.email,s=n.password;Object(c.useEffect)((function(){console.log("email change")}),[o]);return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(n)},className:"animate__animated animate__backInDown",children:[Object(j.jsx)("h1",{children:"Form with custom hook "}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"text",name:"name",className:"form-control",placeholder:"Your name",autoComplete:"off",value:r,onChange:a})}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"email",name:"email",className:"form-control",placeholder:"example@example.com",autoComplete:"off",value:o,onChange:a})}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"password",name:"password",className:"form-control",placeholder:"Password",autoComplete:"off",value:s,onChange:a})}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Guardar"})]})},D=function(){var e=Object(c.useState)({counter1:10,counter2:20,counter3:30}),t=Object(l.a)(e,2),n=t[0],a=t[1],r=n.counter1,o=n.counter2;return Object(j.jsxs)("div",{className:"animate__animated animate__backInDown",children:[Object(j.jsxs)("h1",{children:["Counter1: ",r]}),Object(j.jsxs)("h1",{children:["Counter2: ",o]}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{className:"stats",children:Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){a((function(e){return Object(C.a)(Object(C.a)({},e),{},{counter1:r+1})}))},children:"+ 1"})}),Object(j.jsx)("code",{children:JSON.stringify(n)})]})},E=function(){var e=h(100),t=e.state,n=e.increment,c=e.decrement,a=e.reset;return Object(j.jsxs)("div",{className:"animate__animated animate__backInDown",children:[Object(j.jsx)("h1",{children:"Counter with custom hook"}),Object(j.jsxs)("h1",{children:["Counter ",t]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"stats",children:[Object(j.jsx)("button",{className:"btn btn-primary m-2",onClick:n,children:"+ 1"}),Object(j.jsx)("button",{className:"btn btn-primary m-2",onClick:a,children:"Reset"}),Object(j.jsx)("button",{className:"btn btn-primary m-2",onClick:c,children:"- 1"})]})]})},I=function(){var e=Object(c.useState)({x:0,y:0}),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=function(e){var t={x:e.x,y:e.y};a(t)};return window.addEventListener("mousemove",e),function(){window.removeEventListener("mousemove",e)}}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Eres genial!"}),Object(j.jsx)("p",{children:Object(j.jsx)("code",{children:JSON.stringify(n)})})]})},H=function(){var e=Object(c.useState)({name:"",email:""}),t=Object(l.a)(e,2),n=t[0],a=t[1],r=n.name,o=n.email,s=function(e){var t=e.target;a(Object(C.a)(Object(C.a)({},n),{},Object(_.a)({},t.name,t.value)))};return Object(c.useEffect)((function(){}),[]),Object(c.useEffect)((function(){}),[n]),Object(c.useEffect)((function(){}),[r]),Object(c.useEffect)((function(){}),[o]),Object(j.jsxs)("div",{className:"animate__animated animate__backInDown",children:[Object(j.jsx)("h1",{children:"Effects Hook"}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"text",name:"name",className:"form-control",placeholder:"Your name",autoComplete:"off",value:r,onChange:s})}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"email",name:"email",className:"form-control",placeholder:"example@example.com",autoComplete:"off",value:o,onChange:s})}),"Diana"===r&&Object(j.jsx)(I,{})]})},T=n(23),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(null===t||void 0===t?void 0:t.type){case"add":return[].concat(Object(T.a)(e),[t.payload]);case"delete":return e.filter((function(e){return e.id!==t.payload}));case"toggle":case"toggle-old":return e.map((function(e){return e.id===t.payload?Object(C.a)(Object(C.a)({},e),{},{done:!e.done}):e}));default:return e}},J=(n(30),function(e){var t=e.index,n=e.id,c=e.desc,a=e.done,r=e.handleTogggle,o=e.handleDelete;return Object(j.jsxs)("li",{className:"list-group-item",children:[Object(j.jsxs)("p",{className:a&&"complete",onClick:function(){return r(n)},children:[t+1,".- ",c]}),Object(j.jsx)("button",{onClick:function(){return o(n)},className:"btn btn-danger btn-noBlock",children:"Borrar"})]})}),L=function(e){var t=e.toDo,n=e.handleDelete,c=e.handleTogggle;return Object(j.jsx)("ul",{className:"list-group list-group-flush",children:t.map((function(e,t){return Object(j.jsx)(J,Object(C.a)(Object(C.a)({index:t},e),{},{handleDelete:n,handleTogggle:c}),e.id)}))})},R=function(e){var t=e.handleAdd,n=w({description:""}),c=Object(l.a)(n,3),a=c[0].description,r=c[1],o=c[2];return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.trim().length<=1||(t({id:(new Date).getTime(),desc:a,done:!1}),o())},children:[Object(j.jsx)("input",{type:"text",name:"description",className:"form-control",placeholder:"Lerning...",autoComplete:"off",value:a,onChange:r}),Object(j.jsx)("button",{type:"submit",className:"btn btn-outline-success mt-2 btn-block",children:"Agregar"})]})},F=function(){return JSON.parse(localStorage.getItem("toDo"))||[{id:(new Date).getTime(),desc:"Learn React",done:!1}]},M=[{to:"/",text:"ToDo App",component:function(){var e=Object(c.useReducer)(A,[],F),t=Object(l.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){localStorage.setItem("toDo",JSON.stringify(n))}),[n]);return Object(j.jsxs)("div",{style:{width:"100%"},className:"animate__animated animate__backInDown",children:[Object(j.jsxs)("h1",{children:["ToDo App (",n.length,")"]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-7",children:Object(j.jsx)(L,{toDo:n,handleDelete:function(e){a({type:"delete",payload:e})},handleTogggle:function(e){a({type:"toggle",payload:e})}})}),Object(j.jsxs)("div",{className:"col-5",children:[Object(j.jsx)("h4",{children:"Add ToDo"}),Object(j.jsx)("hr",{}),Object(j.jsx)(R,{handleAdd:function(e){a({type:"add",payload:e})}})]})]})]})}},{to:"/father",text:"Father",component:u},{to:"/callback-hook",text:"Callback Hook",component:d},{to:"/memo-hook",text:"Memo Hook",component:O},{to:"/memorize",text:"Memorize",component:f},{to:"/layout",text:"Layout",component:v},{to:"/focus-screen",text:"Focus Screen",component:g},{to:"/ref-example",text:"Ref Example",component:y},{to:"/form-with-custom-hook",text:"Form With Custom Hook",component:S},{to:"/multiple-custom-hooks",text:"Multiple Custom Hooks",component:k},{to:"/counter-app",text:"Counter App",component:D},{to:"/counter-with-custom-hook",text:"Counter With Custom Hook",component:E},{to:"/simple-form",text:"Simple Form",component:H}],B=function(){return Object(j.jsx)("header",{children:M.map((function(e,t){return Object(j.jsx)(s.b,{to:e.to,className:"btn btn-outline-primary mb-2",children:e.text},"link-".concat(t))}))})},P=function(){return Object(j.jsxs)("div",{className:"container-div",children:[Object(j.jsx)(B,{}),Object(j.jsx)("main",{children:Object(j.jsx)(i.c,{children:M.map((function(e,t){return Object(j.jsx)(i.a,{exact:!0,path:e.to,component:e.component},"route-".concat(t))}))})})]})};o.a.render(Object(j.jsx)(s.a,{children:Object(j.jsx)(P,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.10b34d89.chunk.js.map