"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{3387:function(n,t,r){r.r(t),r.d(t,{default:function(){return j}});var e,a,c,i,u,p,o,s=r(9439),x=r(2791),d=r(7689),f=r(7788),h=r(168),l=r(7691),g=l.ZP.div(e||(e=(0,h.Z)(["\n  padding: 30px;\n  margin: 20px 30px 30px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n"]))),m=l.ZP.ul(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 100%;\n  margin-top: 0;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n  padding: 0;\n  transition-duration: 300ms;\n"]))),v=l.ZP.li(c||(c=(0,h.Z)(["\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  width: 100%;\n  max-width: 100px;\n  margin: 10px;\n  border-radius: 5px;\n  display: inline-block;\n  text-decoration: none;\n  color: black;\n  transition-duration: 300ms;\n"]))),b=l.ZP.img(i||(i=(0,h.Z)(["\n  padding: 0px;\n  margin: 0px;\n  height: 125px;\n  width: 100%;\n  display: block;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n"]))),w=l.ZP.div(u||(u=(0,h.Z)(["\n  padding: 5px;\n  margin: 0px;\n  font-size: 14px;\n"]))),Z=l.ZP.h3(p||(p=(0,h.Z)(["\n  margin: 0px;\n"]))),k=l.ZP.p(o||(o=(0,h.Z)(["\n  margin: 0px;\n"]))),y=r(184),j=function(){var n=(0,d.UO)("movieId").movieId,t=(0,x.useState)([]),r=(0,s.Z)(t,2),e=r[0],a=r[1];return(0,x.useEffect)((function(){(0,f.M1)(n).then(a)}),[n]),(0,y.jsx)(g,{children:0!==e.length?(0,y.jsx)(m,{children:e.map((function(n){var t=n.id,r=n.profile_path,e=n.name,a=n.character;return(0,y.jsxs)(v,{children:[(0,y.jsx)(b,{src:r?f.XW.concat(r):"https://cdn-icons-png.flaticon.com/512/6386/6386976.png",alt:e}),(0,y.jsxs)(w,{children:[(0,y.jsx)(Z,{children:e}),(0,y.jsxs)(k,{children:["Character: ",a]})]})]},t)}))}):(0,y.jsx)("p",{children:"We don`t have any cast for this movie"})})}},7788:function(n,t,r){r.d(t,{Df:function(){return o},IR:function(){return s},M1:function(){return d},TP:function(){return x},XW:function(){return u},tx:function(){return f}});var e=r(5861),a=r(4687),c=r.n(a),i=r(1912),u="https://image.tmdb.org/t/p/w500/",p=new URLSearchParams({api_key:"97ef9993bd447e99925f501c00d1b05a",language:"en-US",include_adult:!1});i.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,e.Z)(c().mark((function n(){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/all/week?".concat(p));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?".concat(p,"&query=").concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"?").concat(p));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/credits?").concat(p));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/reviews?").concat(p));case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.bedaab55.chunk.js.map