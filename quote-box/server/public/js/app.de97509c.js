(function(e){function t(t){for(var r,s,a=t[0],u=t[1],c=t[2],l=0,h=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&h.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(h.length)h.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"2f11":function(e,t,n){},"305b":function(e,t,n){"use strict";var r=n("9d5a"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"container"}},[n("Header",{attrs:{loggedIn:e.loggedIn,currentUser:e.currentUser},on:{"register-click":e.registerClick,"login-click":e.loginClick,"logout-click":e.logoutClick}}),n("div",{attrs:{id:"controlPanel"}},[n("span",[e._v("Word:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.word,expression:"word"}],attrs:{type:"text",onClick:"this.setSelectionRange(0, this.value.length)"},domProps:{value:e.word},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)},input:function(t){t.target.composing||(e.word=t.target.value)}}}),n("br"),n("span",[e._v("Author:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.author,expression:"author"}],attrs:{type:"text",onClick:"this.setSelectionRange(0, this.value.length)"},domProps:{value:e.author},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)},input:function(t){t.target.composing||(e.author=t.target.value)}}}),n("div",{attrs:{id:"buttons"}},[n("button",{on:{click:e.search}},[e._v("Search")]),e.myQuotes?e._e():n("button",{on:{click:e.randomQuote}},[e._v("Random")]),e.myQuotes?e._e():n("button",{on:{click:e.clear}},[e._v("Clear")]),e.myQuotes?n("button",{on:{click:e.showAll}},[e._v("Show All")]):e._e(),e.myQuotes?n("button",{on:{click:e.addNewQuote}},[e._v("New Quote")]):e._e()])]),n("QuoteBox",{attrs:{quotes:e.quotes,showRegister:e.showRegister,showLogin:e.showLogin,loggedIn:e.loggedIn,loggedInAsAdmin:e.loggedInAsAdmin,addQuote:e.addQuote,noResults:e.noResults},on:{"user-added":e.userAdded,"add-to-myquotes":function(t){return e.addToMyQuotes(t)},"delete-quote":function(t){return e.deleteQuote(t)},"edit-quote":function(t){return e.saveEditedQuote(t)},"add-quote":function(t){return e.saveNewQuote(t)},"user-logged-in":function(t){return e.userLoggedIn(t)},"login-admin":function(t){return e.loginAdmin(t)},"hide-new-quote":e.hideNewQuote,"cancel-login":e.cancelLogin}}),n("Footer",{attrs:{loggedIn:e.loggedIn,myQuotes:e.myQuotes},on:{"collection-click":e.collectionClick,"myquotes-click":e.myQuotesClick}})],1)])},i=[],s=(n("4de4"),n("4160"),n("c975"),n("a434"),n("498a"),n("159b"),n("96cf"),n("89ba")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"headerContainer"}},[n("div",{attrs:{id:"title"}},[e._v("quoteBox")]),n("div",{attrs:{id:"headerControls"}},[e.loggedIn?n("div",{attrs:{id:"usernameDisplay"}},[n("i",{staticClass:"fas fa-user"}),e._v(" "+e._s(e.currentUser)+" ")]):e._e(),e.loggedIn?e._e():n("button",{attrs:{id:"register"},on:{click:function(t){return e.$emit("register-click")}}},[e._v(" Register ")]),e.loggedIn?e._e():n("button",{attrs:{id:"login"},on:{click:function(t){return e.$emit("login-click")}}},[e._v(" Log In ")]),e.loggedIn?n("button",{attrs:{id:"logout"},on:{click:function(t){return e.$emit("logout-click")}}},[e._v(" Log Out ")]):e._e()])])},u=[],c={name:"Header",props:["loggedIn","currentUser"],data:function(){return{username:"",password:""}}},d=c,l=(n("8c29"),n("2877")),h=Object(l["a"])(d,a,u,!1,null,"4e80cea3",null),m=h.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"footerContainer"}},[n("button",{class:{selected:!e.myQuotes},attrs:{id:"collection",disabled:!e.loggedIn},on:{click:function(t){return e.$emit("collection-click")}}},[e._v("Collection")]),n("div",{staticClass:"tooltip"},[n("button",{class:{selected:e.myQuotes},attrs:{id:"myQuotes",disabled:!e.loggedIn},on:{click:function(t){return e.$emit("myquotes-click")}}},[e._v("MyQuotes")]),e.loggedIn?e._e():n("span",{staticClass:"tooltiptext"},[e._v("Please log in or register to use MyQuotes")])])])},p=[],f={name:"Footer",props:["loggedIn","myQuotes"]},v=f,w=(n("7e41"),Object(l["a"])(v,g,p,!1,null,"5906050b",null)),y=w.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"quoteBoxContainer"}},[n("transition",{attrs:{name:"drop"}},[1==e.showRegister?n("Register",{on:{"user-added":function(t){return e.$emit("user-added")},"user-logged-in":function(t){return e.$emit("user-logged-in",t)}}}):e._e()],1),n("transition",{attrs:{name:"drop"}},[1==e.showLogin?n("Login",{on:{"user-logged-in":function(t){return e.$emit("user-logged-in",t)},"login-admin":function(t){return e.$emit("login-admin",t)},"cancel-login":function(t){return e.$emit("cancel-login")}}}):e._e()],1),n("transition",{attrs:{name:"drop"}},[1==e.addQuote?n("Quote",{attrs:{quote:null,author:null,source:null,myQuote:!0,openEdit:!0},on:{"edit-quote":function(t){return e.$emit("add-quote",t)},"hide-new-quote":function(t){return e.$emit("hide-new-quote")}}}):e._e()],1),n("transition-group",{attrs:{name:"drop",tag:"div"}},e._l(e.quotes,(function(t){return n("Quote",{key:t._id,attrs:{id:t._id,quote:t.quote,author:t.author,source:t.source,myQuote:t.myQuote,loggedIn:e.loggedIn,loggedInAsAdmin:e.loggedInAsAdmin,openEdit:!1},on:{"add-to-myquotes":function(n){return e.$emit("add-to-myquotes",t._id)},"delete-quote":function(n){return e.$emit("delete-quote",t._id)},"edit-quote":function(t){return e.$emit("edit-quote",t)}}})})),1),n("transition",{attrs:{name:"drop"}},[1==e.noResults?n("Quote",{attrs:{quote:e.noResultsMessage,author:e.noResultsAuthor,openEdit:!1}}):e._e()],1)],1)},b=[],x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"container"}},[n("div",{attrs:{id:"form"}},[n("div",{staticClass:"input"},[n("label",{attrs:{for:"username"}},[e._v("Username:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",name:"username",maxlength:"10"},domProps:{value:e.username},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.registerUser(t)},input:function(t){t.target.composing||(e.username=t.target.value)}}})]),n("div",{staticClass:"input"},[n("label",{attrs:{for:"password"}},[e._v("Password:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"password"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.registerUser(t)},input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("div",[n("button",{on:{click:e.cancelReg}},[e._v("Cancel")]),n("button",{on:{click:e.registerUser}},[e._v("Register")])]),n("div",{attrs:{id:"messageBox"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:1==e.created,expression:"created == true"}]},[e._v("New user created!")]),n("div",{directives:[{name:"show",rawName:"v-show",value:1==e.error,expression:"error == true"}]},[e._v("Please enter a username and password...")]),n("div",{directives:[{name:"show",rawName:"v-show",value:1==e.taken,expression:"taken == true"}]},[e._v("Username already in use.")])])])])])},_=[],Q=(n("d3b7"),n("99af"),n("9f12")),q=n("53fe"),R=n("bc3a"),A=n.n(R),I="quotes",O=function(){function e(){Object(Q["a"])(this,e)}return Object(q["a"])(e,null,[{key:"getRandomQuote",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="",e.next=3,A.a.get("".concat(I,"/random")).then((function(e){t=e.data}),(function(e){console.log(e)}));case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"showAll",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="",e.next=3,A.a.get("".concat(I,"/showall/").concat(t)).then((function(e){n=e.data}),(function(e){console.log(e)}));case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"wordSearch",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="",e.next=3,A.a.get("".concat(I,"/wordsearch/").concat(t,"/").concat(n)).then((function(e){r=e.data}),(function(e){console.log(e)}));case 3:return e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"authorSearch",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="",e.next=3,A.a.get("".concat(I,"/authorsearch/").concat(t,"/").concat(n)).then((function(e){r=e.data}),(function(e){console.log(e)}));case 3:return e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"combinedSearch",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n,r){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o="",e.next=3,A.a.get("".concat(I,"/combinedsearch/").concat(t,"/").concat(n,"/").concat(r)).then((function(e){o=e.data}),(function(e){console.log(e)}));case 3:return e.abrupt("return",o);case 4:case"end":return e.stop()}}),e)})));function t(t,n,r){return e.apply(this,arguments)}return t}()},{key:"addToMyQuotes",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.a.post("".concat(I,"/add/").concat(t),n);case 2:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"addNewQuote",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.a.post("".concat(I,"/addNew/").concat(t),n);case 2:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"updateEditedQuote",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.a.put("".concat(I,"/edit/").concat(t),n);case 2:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"deleteFromMyQuotes",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.a.delete("".concat(I,"/delete/").concat(t,"/").concat(n));case 2:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"registerUser",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="",e.next=3,A.a.post("".concat(I,"/register/").concat(t,"/").concat(n)).then((function(e){r=e.data}),(function(e){console.log(e)}));case 3:return e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"loginUser",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="",e.next=3,A.a.post("".concat(I,"/login/").concat(t,"/").concat(n)).then((function(e){r=e.data}),(function(e){console.log(e)}));case 3:return e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()}]),e}(),C=O,$={name:"Register",data:function(){return{username:"",password:"",created:!1,error:!1,taken:!1}},methods:{sleep:function(e){return new Promise((function(t){return setTimeout(t,e)}))},registerUser:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!=this.username&&""!=this.password){e.next=5;break}this.error=!0,this.taken=!1,e.next=21;break;case 5:return e.next=7,C.registerUser(this.username,this.password);case 7:if(t=e.sent,"created"!=t){e.next=20;break}return this.error=!1,this.taken=!1,this.created=!0,e.next=14,this.sleep(1e3);case 14:this.$emit("user-added"),this.$emit("user-logged-in",this.username),this.username="",this.password="",e.next=21;break;case 20:"taken"==t&&(this.taken=!0,this.error=!1);case 21:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cancelReg:function(){this.username="",this.password="",this.$emit("user-added")}}},E=$,j=(n("e90c"),Object(l["a"])(E,x,_,!1,null,"173b35b2",null)),U=j.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"container"}},[n("div",{attrs:{id:"form"}},[n("div",{staticClass:"input"},[n("label",{attrs:{for:"username"}},[e._v("Username:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",name:"username",maxlength:"10"},domProps:{value:e.username},on:{change:function(t){e.error=!1},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.loginUser(t)},input:function(t){t.target.composing||(e.username=t.target.value)}}})]),n("div",{staticClass:"input"},[n("label",{attrs:{for:"password"}},[e._v("Password:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"password"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.loginUser(t)},input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("div",[n("button",{on:{click:e.cancelLogin}},[e._v("Cancel")]),n("button",{on:{click:e.loginUser}},[e._v("Log In")])]),n("div",{attrs:{id:"messageBox"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:1==e.error,expression:"error == true"}]},[e._v("Please enter a username and password...")]),n("div",{directives:[{name:"show",rawName:"v-show",value:1==e.incorrect,expression:"incorrect == true"}]},[e._v("Incorrect username or password.")]),n("div",{directives:[{name:"show",rawName:"v-show",value:1==e.success,expression:"success == true"}]},[e._v("Login successful!")])])])])])},N=[],P={name:"Login",data:function(){return{username:"",password:"",error:!1,incorrect:!1,success:!1}},methods:{sleep:function(e){return new Promise((function(t){return setTimeout(t,e)}))},loginUser:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!=this.username&&""!=this.password){e.next=5;break}this.error=!0,this.incorrect=!1,e.next=33;break;case 5:return e.next=7,C.loginUser(this.username,this.password);case 7:if(t=e.sent,"fail"!=t){e.next=13;break}this.error=!1,this.incorrect=!0,e.next=33;break;case 13:if("success"!=t){e.next=24;break}return this.error=!1,this.incorrect=!1,this.success=!0,e.next=19,this.sleep(1e3);case 19:this.$emit("user-logged-in",this.username),this.username="",this.password="",e.next=33;break;case 24:if("login-admin"!=t){e.next=33;break}return this.error=!1,this.incorrect=!1,this.success=!0,e.next=30,this.sleep(1e3);case 30:this.$emit("login-admin",this.username),this.username="",this.password="";case 33:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cancelLogin:function(){this.username="",this.password="",this.$emit("cancel-login")}}},L=P,M=(n("305b"),Object(l["a"])(L,S,N,!1,null,"626d964c",null)),T=M.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"background"}},[0==e.editing?n("div",{attrs:{id:"quoteContainer"}},[n("div",{attrs:{id:"quote"}},[e._v(e._s(e.quote))]),n("div",{attrs:{id:"author"}},[n("span",[e._v(e._s(e.author))]),void 0!=e.source&&""!=e.source?n("span",{attrs:{id:"source"}},[e._v(", "+e._s(e.source))]):e._e()]),0==e.myQuote&&1==e.loggedIn?n("div",{staticClass:"overlay"},[n("div",{attrs:{id:"addButton"},on:{click:e.addToMyQuotes}},[n("span",[e._v("Add to MyQuotes")])])]):e._e(),1==e.myQuote||1==e.loggedInAsAdmin?n("div",{staticClass:"overlay"},[n("div",{attrs:{id:"editButton"}},[n("span",{on:{click:e.editQuote}},[e._v("Edit")]),n("span",{on:{click:function(t){return e.$emit("delete-quote")}}},[e._v("Delete")])])]):e._e()]):e._e(),1==e.editing?n("div",{attrs:{id:"editBox"}},[n("div",{staticClass:"label"},[e._v("Quote:")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.editedQuote,expression:"editedQuote"}],ref:"quoteEdit",staticClass:"editField",attrs:{oninput:"this.style.height=''; this.style.height =\n        this.scrollHeight + 'px'"},domProps:{value:e.editedQuote},on:{input:function(t){t.target.composing||(e.editedQuote=t.target.value)}}}),n("div",{staticClass:"label"},[e._v("Author:")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.editedAuthor,expression:"editedAuthor"}],ref:"authorEdit",staticClass:"editField",domProps:{value:e.editedAuthor},on:{input:function(t){t.target.composing||(e.editedAuthor=t.target.value)}}}),n("div",{staticClass:"label"},[e._v("Source:")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.editedSource,expression:"editedSource"}],ref:"sourceEdit",staticClass:"editField",domProps:{value:e.editedSource},on:{input:function(t){t.target.composing||(e.editedSource=t.target.value)}}}),n("div",{attrs:{id:"buttons"}},[n("button",{on:{click:e.cancelEdit}},[e._v("Cancel")]),n("button",{on:{click:e.saveEdit}},[e._v("Save")])])]):e._e()])},F=[],H={name:"Quote",data:function(){return{editing:this.openEdit,editedQuote:this.quote,editedAuthor:this.author,editedSource:this.source}},props:["quote","author","source","id","myQuote","loggedIn","loggedInAsAdmin","openEdit"],methods:{addToMyQuotes:function(){this.$emit("add-to-myquotes")},editQuote:function(){var e=this;this.editing=!0,this.$nextTick((function(){e.$refs.quoteEdit.style.height=e.$refs.quoteEdit.scrollHeight+"px"}))},cancelEdit:function(){this.editing=!1,this.editedQuote=this.quote,this.editedAuthor=this.author,this.editedSource=this.source,this.$emit("hide-new-quote")},saveEdit:function(){this.editing=!1,this.$emit("edit-quote",{quote:this.editedQuote,author:this.editedAuthor,source:this.editedSource,id:this.id})}}},D=H,J=(n("7e4f"),Object(l["a"])(D,B,F,!1,null,"11c1c689",null)),W=J.exports,z={name:"QuoteBox",components:{Quote:W,Register:U,Login:T},data:function(){return{noResultsMessage:"Sorry, we couldn't find anything matching that search.",noResultsAuthor:"quoteBox"}},props:["quotes","showRegister","showLogin","loggedIn","loggedInAsAdmin","addQuote","noResults"]},G=z,K=(n("9fe2"),Object(l["a"])(G,k,b,!1,null,"42325172",null)),V=K.exports,X=n("c64e"),Y=n.n(X),Z={name:"app",components:{QuoteBox:V,Header:m,Footer:y},data:function(){return{quotes:[],word:"",author:"",showRegister:!1,showLogin:!1,loggedIn:!1,loggedInAsAdmin:!1,currentUser:"",myQuotes:!1,addQuote:!1,randomSearch:!1,noResults:!1}},methods:{randomQuote:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.getRandomQuote();case 2:t=e.sent,this.randomSearch?this.quotes.unshift(t[0]):this.quotes=t,this.randomSearch=!0,this.noResults=!1;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),search:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""==this.word.trim()||""==this.author.trim()){e.next=7;break}return e.next=3,C.combinedSearch(this.word.trim(),this.author.trim(),this.myQuotes?"user.".concat(this.currentUser):"main");case 3:t=e.sent,this.quotes=t,e.next=22;break;case 7:if(""==this.word.trim()){e.next=14;break}return e.next=10,C.wordSearch(this.word.trim(),this.myQuotes?"user.".concat(this.currentUser):"main");case 10:n=e.sent,this.quotes=n,e.next=22;break;case 14:if(""==this.author.trim()){e.next=21;break}return e.next=17,C.authorSearch(this.author.trim(),this.myQuotes?"user.".concat(this.currentUser):"main");case 17:r=e.sent,this.quotes=r,e.next=22;break;case 21:return e.abrupt("return");case 22:0==this.quotes.length?this.noResults=!0:this.noResults=!1,!this.loggedInAsAdmin&&this.removeDuplicates(),this.randomSearch=!1;case 25:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),removeDuplicates:function(){var e=this;this.quotes.forEach((function(t){for(var n=e.quotes.indexOf(t)+1;n<e.quotes.length;n++)e.quotes[n].quote==t.quote&&e.quotes.splice(n,1)}))},addToMyQuotes:function(e){var t=this;this.quotes.forEach((function(n){n._id==e&&(n.myQuote=!0,n._id=n._id+"MQ",C.addToMyQuotes("user.".concat(t.currentUser),n))}))},deleteQuote:function(e){this.quotes=this.quotes.filter((function(t){return t._id!=e})),C.deleteFromMyQuotes(this.loggedInAsAdmin?"main":"user.".concat(this.currentUser),e)},saveEditedQuote:function(e){var t=this;this.quotes.forEach((function(n){n._id==e.id&&(n.quote=e.quote,n.author=e.author,n.source=e.source,C.updateEditedQuote(t.loggedInAsAdmin?"main":"user.".concat(t.currentUser),e))}))},saveNewQuote:function(e){this.addQuote=!1,this.loggedInAsAdmin?e.myQuote=!1:e.myQuote=!0,!this.loggedInAsAdmin&&(e._id=Y()()),this.quotes.unshift(e),C.addNewQuote(this.loggedInAsAdmin?"main":"user.".concat(this.currentUser),e)},addNewQuote:function(){this.addQuote=!0},showAll:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.showAll("user.".concat(this.currentUser));case 2:t=e.sent,this.quotes=t,this.randomSearch=!1,this.noResults=!1;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),clear:function(){this.quotes=[],this.noResults=!1},collectionClick:function(){this.myQuotes=!1,this.clear()},myQuotesClick:function(){this.myQuotes=!0,this.showAll()},registerClick:function(){!this.showLogin&&(this.showRegister=!0)},loginClick:function(){!this.showRegister&&(this.showLogin=!0)},logoutClick:function(){this.loggedIn=!1,this.loggedInAsAdmin=!1,this.currentUser="",this.myQuotes=!1},cancelLogin:function(){this.showLogin=!1},hideNewQuote:function(){this.addQuote=!1},userAdded:function(){this.showRegister=!1},userLoggedIn:function(e){this.showLogin=!1,this.currentUser=e,this.loggedIn=!0},loginAdmin:function(e){this.showLogin=!1,this.loggedInAsAdmin=!0,this.currentUser=e,this.loggedIn=!0}}},ee=Z,te=(n("034f"),n("ac2b"),Object(l["a"])(ee,o,i,!1,null,"500ae982",null)),ne=te.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(ne)}}).$mount("#app")},"7de0":function(e,t,n){},"7e41":function(e,t,n){"use strict";var r=n("2f11"),o=n.n(r);o.a},"7e4f":function(e,t,n){"use strict";var r=n("af8d"),o=n.n(r);o.a},"85ec":function(e,t,n){},"8c29":function(e,t,n){"use strict";var r=n("bd13"),o=n.n(r);o.a},"9d5a":function(e,t,n){},"9fe2":function(e,t,n){"use strict";var r=n("7de0"),o=n.n(r);o.a},a55e:function(e,t,n){},ac2b:function(e,t,n){"use strict";var r=n("d7e2"),o=n.n(r);o.a},af8d:function(e,t,n){},bd13:function(e,t,n){},d7e2:function(e,t,n){},e90c:function(e,t,n){"use strict";var r=n("a55e"),o=n.n(r);o.a}});
//# sourceMappingURL=app.de97509c.js.map