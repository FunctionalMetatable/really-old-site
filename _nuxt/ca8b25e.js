(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3],{199:function(t,n,e){var content=e(201);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(58).default)("cb8fb07c",content,!0,{sourceMap:!1})},200:function(t,n,e){"use strict";e(199)},201:function(t,n,e){var l=e(57)((function(i){return i[1]}));l.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]),l.push([t.i,'nav{\n  font-family:"Roboto",sans-serif;\n  margin:0\n}\nnav ul{\n  list-style-type:none;\n  margin:0;\n  padding:0;\n  overflow:hidden;\n  background-color:#151618\n}\nnav li .align-left a{\n  float:left\n}\nnav li .align-left a,nav li .align-right a{\n  display:block;\n  color:#fff;\n  text-align:center;\n  text-decoration:none;\n  font-family:"Roboto",sans-serif;\n  text-size:55px;\n  padding:22px 16px;\n  background-color:#151618\n}\nnav li .align-right a{\n  float:right\n}\nnav li .bg a:hover{\n  background-color:#00f\n}\nnav li .logo a{\n  display:block;\n  color:#fff;\n  text-align:center;\n  text-decoration:none;\n  font-family:"Roboto",sans-serif;\n  text-size:55px;\n  padding:0;\n  float:left;\n  background-color:#151618\n}',""]),l.locals={},t.exports=l},202:function(t,n,e){var content=e(206);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(58).default)("bad8e090",content,!0,{sourceMap:!1})},203:function(t,n,e){"use strict";e.r(n);var l={},o=(e(200),e(34)),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",{staticClass:"nav"},[e("li",{staticClass:"nav-item"},[e("div",{staticClass:"logo"},[e("center",[e("a",{attrs:{href:"/",target:"_top"}},[e("img",{attrs:{src:"{{ site.logoUrl }}",width:"50px",height:"50px"}})])])],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",{staticClass:"nav-item"},[e("div",{staticClass:"align-left"},[e("div",{staticClass:"bg"},[e("a",{attrs:{href:"/projects",target:"_top"}},[t._v("Projects")])])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",{staticClass:"nav-item"},[e("div",{staticClass:"align-left"},[e("div",{staticClass:"bg"},[e("a",{attrs:{href:"/lol",target:"_top"}},[t._v("Memes")])])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",{staticClass:"nav-item"},[e("div",{staticClass:"align-left"},[e("div",{staticClass:"bg"},[e("a",{attrs:{href:"/blog"}},[t._v("Blog")])])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",{staticClass:"nav-item"},[e("div",{staticClass:"align-right"},[e("a",{attrs:{id:"ocular",title:"This is an ocular status. You can set yours at my-ocular.jeffalo.net."}}),t._v(" "),e("script",[t._v('\n        var node = document.getElementById("ocular");\n        async function updateOcular() {\n          var pull = await fetch(\n            "https://my-ocular.jeffalo.net/api/user/9gr"\n          );\n          var json = await pull.json();\n          node.innerText = json.status || "";\n          node.style = "color:" + json.color;\n          setTimeout(updateOcular, 100000);\n        }\n        updateOcular();\n      ')])])])}],!1,null,null,null);n.default=component.exports},204:function(t,n,e){"use strict";e.r(n);var l={},o=e(34),component=Object(o.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("hr")}),[],!1,null,null,null);n.default=component.exports},205:function(t,n,e){"use strict";e(202)},206:function(t,n,e){var l=e(57)((function(i){return i[1]}));l.push([t.i,'.container{\n  margin:0 auto;\n  min-height:100vh;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  text-align:center\n}\n.title{\n  font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n  display:block;\n  font-weight:300;\n  font-size:100px;\n  color:#35495e;\n  letter-spacing:1px\n}\n.subtitle{\n  font-weight:300;\n  font-size:42px;\n  color:#526488;\n  word-spacing:5px;\n  padding-bottom:15px\n}\n.links{\n  padding-top:15px\n}',""]),l.locals={},t.exports=l},207:function(t,n,e){"use strict";e.r(n);var l={},o=(e(205),e(34)),component=Object(o.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("Header")}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Header:e(203).default,Footer:e(204).default})}}]);