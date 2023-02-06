"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310,62],{9245:function(n,e,t){t.d(e,{Z:function(){return u}});var r,a=t(8402),i=t(168),o=t(7691).ZP.div(r||(r=(0,i.Z)(["\n  position: relative;\n  top: 10vh;\n  display: flex;\n  justify-content: center;\n"]))),c=t(184),u=function(){return(0,c.jsx)(o,{children:(0,c.jsx)(a.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}},6062:function(n,e,t){t.r(e),t.d(e,{default:function(){return c}});var r,a=t(168),i=t(7691).ZP.h2(r||(r=(0,a.Z)(["\n  font-weight: 700;\n  color: orangered;\n  margin: 30px, 0;\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n"]))),o=t(184),c=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i,{children:"Sorry, but there is no movie with that name."})})}},5310:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,a,i,o,c,u,s,p,d=t(9439),l=t(2791),x=t(1087),f=t(7689),h=t(7788),g=t(6062),b=t(9245),v=t(168),m=t(7691),Z=m.ZP.form(r||(r=(0,v.Z)(["\n  margin: 10px 0 20px;\n  max-width: 600px;\n  display: inline-flex;\n  justify-content: center;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n"]))),w=m.ZP.input(a||(a=(0,v.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n"]))),y=m.ZP.button(i||(i=(0,v.Z)(["\n  display: inline-block;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  color: orangered;\n  &:hover {\n    opacity: 1;\n  }\n"]))),k=m.ZP.ul(o||(o=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 100%;\n  margin-top: 0;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n  padding: 0;\n"]))),j=m.ZP.li(c||(c=(0,v.Z)(["\n  background: rgb(255, 255, 255);\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  width: 100%;\n  max-width: 200px;\n  margin: 10px;\n  border-radius: 5px;\n  display: inline-block;\n  text-decoration: none;\n  color: black;\n  transition-duration: 300ms;\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.03);\n    box-shadow: rgb(0 0 0 / 8%) 0px 10px 25px;\n  }\n"]))),P=(0,m.ZP)(x.rU)(u||(u=(0,v.Z)(["\n  text-decoration: none;\n"]))),S=m.ZP.img(s||(s=(0,v.Z)(["\n  padding: 0px;\n  margin: 0px;\n  height: 260px;\n  width: 100%;\n  display: block;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n"]))),_=m.ZP.div(p||(p=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 5px;\n  margin: 0px;\n  font-size: 10px;\n  color: #000000;\n"]))),z=t(184),C=function(){var n=(0,l.useState)(""),e=(0,d.Z)(n,2),t=e[0],r=e[1],a=(0,l.useState)([]),i=(0,d.Z)(a,2),o=i[0],c=i[1],u=(0,x.lr)(),s=(0,d.Z)(u,2),p=s[0],v=s[1],m=(0,l.useState)("resolved"),C=(0,d.Z)(m,2),R=C[0],U=C[1],q=(0,f.TH)();(0,l.useEffect)((function(){var n,e=null!==(n=p.get("query"))&&void 0!==n?n:"";e&&(0,h.IR)(e).then((function(n){if(U("pending"),0===n.length)return U("rejected");U("resolved"),c(n)}))}),[p]);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(Z,{onSubmit:function(n){n.preventDefault(),t?v({query:t}):alert("Please enter something :)")},children:[(0,z.jsx)(w,{type:"text",value:t,onChange:function(n){r(n.target.value)}}),(0,z.jsx)(y,{type:"submit",children:"Search"})]}),"pending"===R&&(0,z.jsx)(b.Z,{}),"rejected"===R&&(0,z.jsx)(g.default,{}),"resolved"===R&&o.length>0&&(0,z.jsx)(k,{children:o.map((function(n){var e=n.id,t=n.title,r=n.name,a=n.poster_path;return(0,z.jsx)(j,{children:(0,z.jsxs)(P,{to:"/movies/".concat(e),state:{from:q},children:[(0,z.jsx)(S,{src:a?h.XW.concat(a):"https://cdn-icons-png.flaticon.com/512/6386/6386976.png",alt:null!==t&&void 0!==t?t:r}),(0,z.jsx)(_,{children:(0,z.jsx)("h3",{children:null!==t&&void 0!==t?t:r})})]})},e)}))})]})}},7788:function(n,e,t){t.d(e,{Df:function(){return s},IR:function(){return p},M1:function(){return l},TP:function(){return d},XW:function(){return c},tx:function(){return x}});var r=t(5861),a=t(4687),i=t.n(a),o=t(1912),c="https://image.tmdb.org/t/p/w500/",u=new URLSearchParams({api_key:"97ef9993bd447e99925f501c00d1b05a",language:"en-US",include_adult:!1});o.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/all/week?".concat(u));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?".concat(u,"&query=").concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"?").concat(u));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/credits?").concat(u));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/reviews?").concat(u));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=310.7a043286.chunk.js.map