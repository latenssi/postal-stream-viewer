!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var o=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,r,n,o){var i=t&&t.defaultProps,a=arguments.length-3;if(r||0===a||(r={}),r&&i)for(var l in i)void 0===r[l]&&(r[l]=i[l]);else r||(r=i||{});if(1===a)r.children=o;else if(a>1){for(var u=Array(a),s=0;a>s;s++)u[s]=arguments[s+3];r.children=u}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:r,_owner:null}}}(),i=r(1),a=(n(i),r(3)),l=r(4);(0,a.render)(o(l.App,{}),document.getElementById("app"))},function(e,t){e.exports=React},function(e,t){e.exports=ReactRouter},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,r,n,o){var i=t&&t.defaultProps,a=arguments.length-3;if(r||0===a||(r={}),r&&i)for(var l in i)void 0===r[l]&&(r[l]=i[l]);else r||(r=i||{});if(1===a)r.children=o;else if(a>1){for(var u=Array(a),s=0;a>s;s++)u[s]=arguments[s+3];r.children=u}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:r,_owner:null}}}(),s=r(1),c=(n(s),r(2)),f=r(8),p=r(11);r(12),r(16),r(14),r(15);var d=u(f.MainNavigation,{brandName:"Postal"}),v=function(e){return u("div",{},void 0,d,u("div",{className:"container-fluid"},void 0,e.children))};v.propTypes={children:s.PropTypes.node};var y=u(c.Router,{history:c.browserHistory},void 0,u(c.Route,{path:"/",component:v},void 0,u(c.IndexRoute,{component:p.Home}),u(c.Route,{path:"stream"},void 0,u(c.IndexRoute,{component:p.ViewStream}),u(c.Route,{path:":stream",component:p.ViewStream}))));t.App=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return y}}]),t}(s.Component)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Player=void 0;var l=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,r,n,o){var i=t&&t.defaultProps,a=arguments.length-3;if(r||0===a||(r={}),r&&i)for(var l in i)void 0===r[l]&&(r[l]=i[l]);else r||(r=i||{});if(1===a)r.children=o;else if(a>1){for(var u=Array(a),s=0;a>s;s++)u[s]=arguments[s+3];r.children=u}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:r,_owner:null}}}(),u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(1),c=n(s),f=r(3),p=n(f),d=window.flowplayer,v="stream.postal.fi",y="1935",m=function(e){function t(e){o(this,t);var r=i(this,Object.getPrototypeOf(t).call(this,e));return r.loading=!1,r.clip=null,r.stillLoading=!1,r.lastTime=0,r.offline=!1,r.check=r.check.bind(r),r}return a(t,e),u(t,[{key:"createPlayer",value:function(){var e=this,t=p["default"].findDOMNode(this.refs.container),r={debug:!1,autoplay:!1,live:!0,embed:!1,splash:!0,speeds:[1],rtmp:{url:"rtmp://"+v+":"+y+"/player",rtmpt:!1,subscribe:!1,bufferTime:0},clip:this.clip};this.player=d(t,r),this.player.on("load",function(){return e.loading=!0}),this.player.on("ready",function(t,r,n){e.loading=!1,e.lastTime=n.time,e.offline=!1})}},{key:"changeVideo",value:function(e){this.clip={sources:[e]},this.player?this.player.load(this.clip):this.createPlayer()}},{key:"check",value:function(){var e=this.player.video.time,t=void 0===e?0:e;!this.offline&&t>0&&this.lastTime>0&&t===this.lastTime&&(this.player.unload(),this.offline=!0),this.lastTime=t,this.loading&&!this.stillLoading?this.stillLoading=!0:this.loading&&this.stillLoading?(this.loading=!1,this.player.unload(),this.player.load(this.clip)):this.stillLoading=!1}},{key:"componentDidMount",value:function(){this.timer=setInterval(this.check,2e3);var e=this.props.video;e&&this.changeVideo(e)}},{key:"componentWillReceiveProps",value:function(e){var t=e.video,r=this.props.video;!t||!t.src||r&&r.src&&t.src===r.src||this.changeVideo(t)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer),this.player&&this.player.shutdown()}},{key:"render",value:function(){return l("div",{className:"player"},void 0,c["default"].createElement("div",{className:"player-wrap",ref:"container"}))}}]),t}(s.Component);m.propTypes={video:s.PropTypes.object.isRequired},t.Player=m},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.SelectStream=void 0;var o=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,r,n,o){var i=t&&t.defaultProps,a=arguments.length-3;if(r||0===a||(r={}),r&&i)for(var l in i)void 0===r[l]&&(r[l]=i[l]);else r||(r=i||{});if(1===a)r.children=o;else if(a>1){for(var u=Array(a),s=0;a>s;s++)u[s]=arguments[s+3];r.children=u}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:r,_owner:null}}}(),i=r(1),a=(n(i),r(2)),l=o("button",{className:"btn btn-default dropdown-toggle",type:"button",id:"dropdownMenu1","data-toggle":"dropdown"},void 0,"Select stream ",o("span",{className:"caret"})),u=t.SelectStream=function(e){var t=e.streams;return o("div",{className:"btn-group"},void 0,l,o("ul",{className:"dropdown-menu"},void 0,t.map(function(e,t){return o("li",{},t,o(a.Link,{to:"/stream/"+e},void 0,e))})))};u.propTypes={streams:i.PropTypes.array.isRequired}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.MainNavigation=void 0;var l=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,r,n,o){var i=t&&t.defaultProps,a=arguments.length-3;if(r||0===a||(r={}),r&&i)for(var l in i)void 0===r[l]&&(r[l]=i[l]);else r||(r=i||{});if(1===a)r.children=o;else if(a>1){for(var u=Array(a),s=0;a>s;s++)u[s]=arguments[s+3];r.children=u}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:r,_owner:null}}}(),u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(1),c=(n(s),r(2)),f=l("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"},void 0,l("span",{className:"sr-only"},void 0,"Avaa / sulje valikko"),l("span",{className:"icon-bar"}),l("span",{className:"icon-bar"}),l("span",{className:"icon-bar"})),p=l("div",{id:"navbar",className:"navbar-collapse collapse"},void 0,l("ul",{className:"nav navbar-nav"},void 0,l("li",{},void 0,l(c.Link,{to:"/stream"},void 0,"Stream")))),d=t.MainNavigation=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){var e=this.props.brandName;return l("nav",{className:"navbar navbar-inverse navbar-static-top"},void 0,l("div",{className:"container-fluid"},void 0,l("div",{className:"navbar-header"},void 0,f,l(c.IndexLink,{to:"/",className:"navbar-brand"},void 0,e)),p))}}]),t}(s.Component);d.propTypes={brandName:s.PropTypes.string.isRequired}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(7);Object.defineProperty(t,"MainNavigation",{enumerable:!0,get:function(){return n.MainNavigation}})},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Home=void 0;var o=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,r,n,o){var i=t&&t.defaultProps,a=arguments.length-3;if(r||0===a||(r={}),r&&i)for(var l in i)void 0===r[l]&&(r[l]=i[l]);else r||(r=i||{});if(1===a)r.children=o;else if(a>1){for(var u=Array(a),s=0;a>s;s++)u[s]=arguments[s+3];r.children=u}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:r,_owner:null}}}(),i=r(1),a=(n(i),o("div",{},void 0,"Nothing to see here ...")),l=t.Home=function(){return a};l.propTypes={}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.ViewStream=void 0;var u=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,r,n,o){var i=t&&t.defaultProps,a=arguments.length-3;if(r||0===a||(r={}),r&&i)for(var l in i)void 0===r[l]&&(r[l]=i[l]);else r||(r=i||{});if(1===a)r.children=o;else if(a>1){for(var u=Array(a),s=0;a>s;s++)u[s]=arguments[s+3];r.children=u}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:r,_owner:null}}}(),s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(1),f=(n(c),r(2)),p=r(19),d=n(p),v=r(13),y=r(5),m=r(6),b="stream_publish",h="https://postal-dev.stamplayapp.com/api/cobject/v1/stream_publisher",g="stream.postal.fi",_=u("div",{className:"well well-lg"},void 0,u("h4",{},void 0,"Open Broadcaster settings:"),u("ul",{},void 0,u("li",{},void 0,u("h5",{},void 0,"Settings > Broadcast Settings / Stream"),u("ul",{},void 0,u("li",{},void 0,u("strong",{},void 0,"Stream type:")," ",u("code",{},void 0,"Custom streaming server")),u("li",{},void 0,u("strong",{},void 0,"URL:")," ",u("code",{},void 0,"rtmp://",g,"/pub_(code)")),u("li",{},void 0,u("strong",{},void 0,"Stream key / Play path:")," ",u("code",{},void 0,"username"),' (e.g. "mutsis")')))),u("p",{},void 0,u("strong",{},void 0,"* Get the ",u("em",{},void 0,"(code)")," from an admin"))),w=function(e){function t(e){i(this,t);var r=a(this,Object.getPrototypeOf(t).call(this,e)),n=r.props.params.stream,o=void 0===n?null:n;return r.state={streamers:[],selectedVideo:o?{src:o,type:"video/flash"}:null},r}return l(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this;d["default"].get(h).then(function(e){return e.data.data}).then(function(t){return e.setState({streamers:t.map(function(e){return e.name})})}),this.streamChannel=v.pusher.subscribe(b),this.streamChannel.bind("publish",function(t){return e.setState({streamers:[].concat(o(e.state.streamers.filter(function(e){return e!==t.name})),[t.name])})}),this.streamChannel.bind("publish_done",function(t){return e.setState({streamers:e.state.streamers.filter(function(e){return e!==t.name})})})}},{key:"componentWillUnmount",value:function(){v.pusher.unsubscribe(b)}},{key:"componentWillReceiveProps",value:function(e){var t=e.params.stream,r=void 0===t?null:t,n=this.props.params.stream;r?r&&r!==n&&this.setState({selectedVideo:{src:r,type:"video/flash"}}):this.setState({selectedVideo:null})}},{key:"renderInstructions",value:function(){return _}},{key:"render",value:function(){var e=this.state,t=e.selectedVideo,r=e.streamers;return u("div",{},void 0,u("div",{className:"stream-controls btn-group btn-group-justified",style:{marginBottom:"20px"}},void 0,u(m.SelectStream,{streams:r}),u(f.Link,{className:"btn btn-default",to:"/stream",disabled:!t},void 0,"Close")),!!t&&u(y.Player,{video:t}),!t&&this.renderInstructions())}}]),t}(c.Component);w.propTypes={params:c.PropTypes.object.isRequired},t.ViewStream=w},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(9);Object.defineProperty(t,"Home",{enumerable:!0,get:function(){return n.Home}});var o=r(10);Object.defineProperty(t,"ViewStream",{enumerable:!0,get:function(){return o.ViewStream}})},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.OneSignal=void 0;var o=r(17),i=n(o),a={appId:"a8af001d-b4ab-4ac1-aa42-797ba89cc9a6",autoRegister:!0,notifyButton:{enable:!0}};i["default"].push(["init",a]),t.OneSignal=i["default"]},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.pusher=void 0;var o=r(18),i=n(o);i["default"].logToConsole=!1;var a=new i["default"]("b0f4966203a3d23a3ab4",{cluster:"eu",encrypted:!0});t.pusher=a},function(e,t,r){e.exports=r.p+"OneSignalSDKUpdaterWorker.js"},function(e,t,r){e.exports=r.p+"OneSignalSDKWorker.js"},function(e,t,r){e.exports=r.p+"manifest.json"},function(e,t){e.exports=OneSignal},function(e,t){e.exports=Pusher},function(e,t){e.exports=axios}]);