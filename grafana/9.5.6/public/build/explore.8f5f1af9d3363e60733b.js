(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9782],{80414:(ge,V,l)=>{"use strict";l.d(V,{K:()=>se});var t=l(671),P=l(65583),_=l(86647),R=l(34177);const te=({sourceUID:I,targetUID:oe,...ne})=>({...ne,source:(0,_.F)().getInstanceSettings(I),target:(0,_.F)().getInstanceSettings(oe)}),p=I=>I.map(te);function z(I){return I.data}const se=()=>{const{backend:I}=(0,R.p)(),[oe,ne]=(0,t.Z)(()=>(0,P.n)(I.fetch({url:"/api/datasources/correlations",method:"GET",showErrorAlert:!1})).then(z).then(p),[I]),[A,B]=(0,t.Z)(({sourceUID:ue,...ve})=>I.post(`/api/datasources/uid/${ue}/correlations`,ve).then(te),[I]),[j,ae]=(0,t.Z)(({sourceUID:ue,uid:ve})=>I.delete(`/api/datasources/uid/${ue}/correlations/${ve}`),[I]),[Y,U]=(0,t.Z)(({sourceUID:ue,uid:ve,...ze})=>I.patch(`/api/datasources/uid/${ue}/correlations/${ve}`,ze).then(te),[I]);return{create:{execute:B,...A},update:{execute:U,...Y},get:{execute:ne,...oe},remove:{execute:ae,...j}}}},21258:(ge,V,l)=>{"use strict";l.r(V),l.d(V,{default:()=>or});var t=l(68404),P=l(35645),_=l(87513),R=l(81168),te=l(25e3),p=l(9892),z=l(82897),se=l(98101),I=l(49922),oe=l(37932),ne=l(60325),A=l(53546),B=l(80177),j=l(34177),ae=l(60499),Y=l(76770),U=l(3032),ue=l(36578),ve=l(80414),ze=l(58166),K=l(48197),W=l(73257),Ae=l(75090);const hs=({exploreIdLeft:e,exploreIdRight:n})=>{const[s,o]=(0,t.useState)([]),{query:a}=(0,ze.useKBar)(),r=(0,R.useDispatch)(),i=(0,R.useSelector)(Ae.p);return(0,t.useEffect)(()=>{const c={name:"Explore",priority:ze.Priority.HIGH+1},d=[];i?(d.push({id:"explore/run-query-left",name:"Run query (left)",keywords:"query left",perform:()=>{r((0,W.aA)(e))},section:c}),n&&(d.push({id:"explore/run-query-right",name:"Run query (right)",keywords:"query right",perform:()=>{r((0,W.aA)(n))},section:c}),d.push({id:"explore/split-view-close-left",name:"Close split view left",keywords:"split",perform:()=>{r((0,K.YV)(e))},section:c}),d.push({id:"explore/split-view-close-right",name:"Close split view right",keywords:"split",perform:()=>{r((0,K.YV)(n))},section:c}))):(d.push({id:"explore/run-query",name:"Run query",keywords:"query",perform:()=>{r((0,W.aA)(e))},section:c}),d.push({id:"explore/split-view-open",name:"Open split view",keywords:"split",perform:()=>{r((0,K.bW)())},section:c})),o(d)},[e,n,i,a,r]),(0,ze.useRegisterActions)(a?s:[],[s,a]),null};var Ee=l(58635),le=l(36635),gs=l(85081),Me=l(68183),H=l(41818),L=l(72648),Ie=l(47694),ee=l(58379),pe=l(55935),Oe=l(63496),Be=l(91162),Ce=l(25405),ms=l(89050),k=l(90595),We=l(86647),ke=l(45253),vt=l(68226),Et=l(72080),xt=l(13580),_e=l(18271),fs=l(41141);const St=e=>{const n={transition:`opacity ${e.duration}ms linear`,opacity:0},s={exited:{opacity:0,display:"none"},entering:{opacity:0},entered:{opacity:1},exiting:{opacity:0}};return t.createElement(fs.ZP,{in:e.in,timeout:e.duration,unmountOnExit:e.unmountOnExit||!1,onExited:e.onExited},o=>t.createElement("div",{style:{...n,...s[o]}},e.children))};var Fe=l(40967),ys=l(68545),et=l(45984),Ne=l(40400),bt=l(18607),vs=l(97394),Es=function(){var e=function(n,s){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,a){o.__proto__=a}||function(o,a){for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(o[r]=a[r])},e(n,s)};return function(n,s){e(n,s);function o(){this.constructor=n}n.prototype=s===null?Object.create(s):(o.prototype=s.prototype,new o)}}(),Z=function(){return Z=Object.assign||function(e){for(var n,s=1,o=arguments.length;s<o;s++){n=arguments[s];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Z.apply(this,arguments)},wt={width:"100%",height:"10px",top:"0px",left:"0px",cursor:"row-resize"},Ct={width:"10px",height:"100%",top:"0px",left:"0px",cursor:"col-resize"},Qe={width:"20px",height:"20px",position:"absolute"},xs={top:Z(Z({},wt),{top:"-5px"}),right:Z(Z({},Ct),{left:void 0,right:"-5px"}),bottom:Z(Z({},wt),{top:void 0,bottom:"-5px"}),left:Z(Z({},Ct),{left:"-5px"}),topRight:Z(Z({},Qe),{right:"-10px",top:"-10px",cursor:"ne-resize"}),bottomRight:Z(Z({},Qe),{right:"-10px",bottom:"-10px",cursor:"se-resize"}),bottomLeft:Z(Z({},Qe),{left:"-10px",bottom:"-10px",cursor:"sw-resize"}),topLeft:Z(Z({},Qe),{left:"-10px",top:"-10px",cursor:"nw-resize"})},Ss=function(e){Es(n,e);function n(){var s=e!==null&&e.apply(this,arguments)||this;return s.onMouseDown=function(o){s.props.onResizeStart(o,s.props.direction)},s.onTouchStart=function(o){s.props.onResizeStart(o,s.props.direction)},s}return n.prototype.render=function(){return t.createElement("div",{className:this.props.className||"",style:Z(Z({position:"absolute",userSelect:"none"},xs[this.props.direction]),this.props.replaceStyles||{}),onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart},this.props.children)},n}(t.PureComponent),bs=function(){var e=function(n,s){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,a){o.__proto__=a}||function(o,a){for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(o[r]=a[r])},e(n,s)};return function(n,s){e(n,s);function o(){this.constructor=n}n.prototype=s===null?Object.create(s):(o.prototype=s.prototype,new o)}}(),ce=function(){return ce=Object.assign||function(e){for(var n,s=1,o=arguments.length;s<o;s++){n=arguments[s];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ce.apply(this,arguments)},ws={width:"auto",height:"auto"},Ue=function(e,n,s){return Math.max(Math.min(e,s),n)},Rt=function(e,n){return Math.round(e/n)*n},Re=function(e,n){return new RegExp(e,"i").test(n)},Ve=function(e){return Boolean(e.touches&&e.touches.length)},Cs=function(e){return Boolean((e.clientX||e.clientX===0)&&(e.clientY||e.clientY===0))},Tt=function(e,n,s){s===void 0&&(s=0);var o=n.reduce(function(r,i,c){return Math.abs(i-e)<Math.abs(n[r]-e)?c:r},0),a=Math.abs(n[o]-e);return s===0||a<s?n[o]:e},tt=function(e){return e=e.toString(),e==="auto"||e.endsWith("px")||e.endsWith("%")||e.endsWith("vh")||e.endsWith("vw")||e.endsWith("vmax")||e.endsWith("vmin")?e:e+"px"},Ze=function(e,n,s,o){if(e&&typeof e=="string"){if(e.endsWith("px"))return Number(e.replace("px",""));if(e.endsWith("%")){var a=Number(e.replace("%",""))/100;return n*a}if(e.endsWith("vw")){var a=Number(e.replace("vw",""))/100;return s*a}if(e.endsWith("vh")){var a=Number(e.replace("vh",""))/100;return o*a}}return e},Rs=function(e,n,s,o,a,r,i){return o=Ze(o,e.width,n,s),a=Ze(a,e.height,n,s),r=Ze(r,e.width,n,s),i=Ze(i,e.height,n,s),{maxWidth:typeof o>"u"?void 0:Number(o),maxHeight:typeof a>"u"?void 0:Number(a),minWidth:typeof r>"u"?void 0:Number(r),minHeight:typeof i>"u"?void 0:Number(i)}},Ts=["as","style","className","grid","snap","bounds","boundsByDirection","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent","scale","resizeRatio","snapGap"],Lt="__resizable_base__",Ls=function(e){bs(n,e);function n(s){var o=e.call(this,s)||this;return o.ratio=1,o.resizable=null,o.parentLeft=0,o.parentTop=0,o.resizableLeft=0,o.resizableRight=0,o.resizableTop=0,o.resizableBottom=0,o.targetLeft=0,o.targetTop=0,o.appendBase=function(){if(!o.resizable||!o.window)return null;var a=o.parentNode;if(!a)return null;var r=o.window.document.createElement("div");return r.style.width="100%",r.style.height="100%",r.style.position="absolute",r.style.transform="scale(0, 0)",r.style.left="0",r.style.flex="0 0 100%",r.classList?r.classList.add(Lt):r.className+=Lt,a.appendChild(r),r},o.removeBase=function(a){var r=o.parentNode;r&&r.removeChild(a)},o.ref=function(a){a&&(o.resizable=a)},o.state={isResizing:!1,width:typeof(o.propsSize&&o.propsSize.width)>"u"?"auto":o.propsSize&&o.propsSize.width,height:typeof(o.propsSize&&o.propsSize.height)>"u"?"auto":o.propsSize&&o.propsSize.height,direction:"right",original:{x:0,y:0,width:0,height:0},backgroundStyle:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:"auto",opacity:0,position:"fixed",zIndex:9999,top:"0",left:"0",bottom:"0",right:"0"},flexBasis:void 0},o.onResizeStart=o.onResizeStart.bind(o),o.onMouseMove=o.onMouseMove.bind(o),o.onMouseUp=o.onMouseUp.bind(o),o}return Object.defineProperty(n.prototype,"parentNode",{get:function(){return this.resizable?this.resizable.parentNode:null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"window",{get:function(){return!this.resizable||!this.resizable.ownerDocument?null:this.resizable.ownerDocument.defaultView},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"propsSize",{get:function(){return this.props.size||this.props.defaultSize||ws},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"size",{get:function(){var s=0,o=0;if(this.resizable&&this.window){var a=this.resizable.offsetWidth,r=this.resizable.offsetHeight,i=this.resizable.style.position;i!=="relative"&&(this.resizable.style.position="relative"),s=this.resizable.style.width!=="auto"?this.resizable.offsetWidth:a,o=this.resizable.style.height!=="auto"?this.resizable.offsetHeight:r,this.resizable.style.position=i}return{width:s,height:o}},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"sizeStyle",{get:function(){var s=this,o=this.props.size,a=function(c){if(typeof s.state[c]>"u"||s.state[c]==="auto")return"auto";if(s.propsSize&&s.propsSize[c]&&s.propsSize[c].toString().endsWith("%")){if(s.state[c].toString().endsWith("%"))return s.state[c].toString();var d=s.getParentSize(),h=Number(s.state[c].toString().replace("px","")),u=h/d[c]*100;return u+"%"}return tt(s.state[c])},r=o&&typeof o.width<"u"&&!this.state.isResizing?tt(o.width):a("width"),i=o&&typeof o.height<"u"&&!this.state.isResizing?tt(o.height):a("height");return{width:r,height:i}},enumerable:!1,configurable:!0}),n.prototype.getParentSize=function(){if(!this.parentNode)return this.window?{width:this.window.innerWidth,height:this.window.innerHeight}:{width:0,height:0};var s=this.appendBase();if(!s)return{width:0,height:0};var o=!1,a=this.parentNode.style.flexWrap;a!=="wrap"&&(o=!0,this.parentNode.style.flexWrap="wrap"),s.style.position="relative",s.style.minWidth="100%",s.style.minHeight="100%";var r={width:s.offsetWidth,height:s.offsetHeight};return o&&(this.parentNode.style.flexWrap=a),this.removeBase(s),r},n.prototype.bindEvents=function(){this.window&&(this.window.addEventListener("mouseup",this.onMouseUp),this.window.addEventListener("mousemove",this.onMouseMove),this.window.addEventListener("mouseleave",this.onMouseUp),this.window.addEventListener("touchmove",this.onMouseMove,{capture:!0,passive:!1}),this.window.addEventListener("touchend",this.onMouseUp))},n.prototype.unbindEvents=function(){this.window&&(this.window.removeEventListener("mouseup",this.onMouseUp),this.window.removeEventListener("mousemove",this.onMouseMove),this.window.removeEventListener("mouseleave",this.onMouseUp),this.window.removeEventListener("touchmove",this.onMouseMove,!0),this.window.removeEventListener("touchend",this.onMouseUp))},n.prototype.componentDidMount=function(){if(!(!this.resizable||!this.window)){var s=this.window.getComputedStyle(this.resizable);this.setState({width:this.state.width||this.size.width,height:this.state.height||this.size.height,flexBasis:s.flexBasis!=="auto"?s.flexBasis:void 0})}},n.prototype.componentWillUnmount=function(){this.window&&this.unbindEvents()},n.prototype.createSizeForCssProperty=function(s,o){var a=this.propsSize&&this.propsSize[o];return this.state[o]==="auto"&&this.state.original[o]===s&&(typeof a>"u"||a==="auto")?"auto":s},n.prototype.calculateNewMaxFromBoundary=function(s,o){var a=this.props.boundsByDirection,r=this.state.direction,i=a&&Re("left",r),c=a&&Re("top",r),d,h;if(this.props.bounds==="parent"){var u=this.parentNode;u&&(d=i?this.resizableRight-this.parentLeft:u.offsetWidth+(this.parentLeft-this.resizableLeft),h=c?this.resizableBottom-this.parentTop:u.offsetHeight+(this.parentTop-this.resizableTop))}else this.props.bounds==="window"?this.window&&(d=i?this.resizableRight:this.window.innerWidth-this.resizableLeft,h=c?this.resizableBottom:this.window.innerHeight-this.resizableTop):this.props.bounds&&(d=i?this.resizableRight-this.targetLeft:this.props.bounds.offsetWidth+(this.targetLeft-this.resizableLeft),h=c?this.resizableBottom-this.targetTop:this.props.bounds.offsetHeight+(this.targetTop-this.resizableTop));return d&&Number.isFinite(d)&&(s=s&&s<d?s:d),h&&Number.isFinite(h)&&(o=o&&o<h?o:h),{maxWidth:s,maxHeight:o}},n.prototype.calculateNewSizeFromDirection=function(s,o){var a=this.props.scale||1,r=this.props.resizeRatio||1,i=this.state,c=i.direction,d=i.original,h=this.props,u=h.lockAspectRatio,g=h.lockAspectRatioExtraHeight,m=h.lockAspectRatioExtraWidth,v=d.width,f=d.height,y=g||0,E=m||0;return Re("right",c)&&(v=d.width+(s-d.x)*r/a,u&&(f=(v-E)/this.ratio+y)),Re("left",c)&&(v=d.width-(s-d.x)*r/a,u&&(f=(v-E)/this.ratio+y)),Re("bottom",c)&&(f=d.height+(o-d.y)*r/a,u&&(v=(f-y)*this.ratio+E)),Re("top",c)&&(f=d.height-(o-d.y)*r/a,u&&(v=(f-y)*this.ratio+E)),{newWidth:v,newHeight:f}},n.prototype.calculateNewSizeFromAspectRatio=function(s,o,a,r){var i=this.props,c=i.lockAspectRatio,d=i.lockAspectRatioExtraHeight,h=i.lockAspectRatioExtraWidth,u=typeof r.width>"u"?10:r.width,g=typeof a.width>"u"||a.width<0?s:a.width,m=typeof r.height>"u"?10:r.height,v=typeof a.height>"u"||a.height<0?o:a.height,f=d||0,y=h||0;if(c){var E=(m-f)*this.ratio+y,x=(v-f)*this.ratio+y,w=(u-y)/this.ratio+f,S=(g-y)/this.ratio+f,C=Math.max(u,E),T=Math.min(g,x),M=Math.max(m,w),Q=Math.min(v,S);s=Ue(s,C,T),o=Ue(o,M,Q)}else s=Ue(s,u,g),o=Ue(o,m,v);return{newWidth:s,newHeight:o}},n.prototype.setBoundingClientRect=function(){if(this.props.bounds==="parent"){var s=this.parentNode;if(s){var o=s.getBoundingClientRect();this.parentLeft=o.left,this.parentTop=o.top}}if(this.props.bounds&&typeof this.props.bounds!="string"){var a=this.props.bounds.getBoundingClientRect();this.targetLeft=a.left,this.targetTop=a.top}if(this.resizable){var r=this.resizable.getBoundingClientRect(),i=r.left,c=r.top,d=r.right,h=r.bottom;this.resizableLeft=i,this.resizableRight=d,this.resizableTop=c,this.resizableBottom=h}},n.prototype.onResizeStart=function(s,o){if(!(!this.resizable||!this.window)){var a=0,r=0;if(s.nativeEvent&&Cs(s.nativeEvent)?(a=s.nativeEvent.clientX,r=s.nativeEvent.clientY):s.nativeEvent&&Ve(s.nativeEvent)&&(a=s.nativeEvent.touches[0].clientX,r=s.nativeEvent.touches[0].clientY),this.props.onResizeStart&&this.resizable){var i=this.props.onResizeStart(s,o,this.resizable);if(i===!1)return}this.props.size&&(typeof this.props.size.height<"u"&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),typeof this.props.size.width<"u"&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.ratio=typeof this.props.lockAspectRatio=="number"?this.props.lockAspectRatio:this.size.width/this.size.height;var c,d=this.window.getComputedStyle(this.resizable);if(d.flexBasis!=="auto"){var h=this.parentNode;if(h){var u=this.window.getComputedStyle(h).flexDirection;this.flexDir=u.startsWith("row")?"row":"column",c=d.flexBasis}}this.setBoundingClientRect(),this.bindEvents();var g={original:{x:a,y:r,width:this.size.width,height:this.size.height},isResizing:!0,backgroundStyle:ce(ce({},this.state.backgroundStyle),{cursor:this.window.getComputedStyle(s.target).cursor||"auto"}),direction:o,flexBasis:c};this.setState(g)}},n.prototype.onMouseMove=function(s){var o=this;if(!(!this.state.isResizing||!this.resizable||!this.window)){if(this.window.TouchEvent&&Ve(s))try{s.preventDefault(),s.stopPropagation()}catch{}var a=this.props,r=a.maxWidth,i=a.maxHeight,c=a.minWidth,d=a.minHeight,h=Ve(s)?s.touches[0].clientX:s.clientX,u=Ve(s)?s.touches[0].clientY:s.clientY,g=this.state,m=g.direction,v=g.original,f=g.width,y=g.height,E=this.getParentSize(),x=Rs(E,this.window.innerWidth,this.window.innerHeight,r,i,c,d);r=x.maxWidth,i=x.maxHeight,c=x.minWidth,d=x.minHeight;var w=this.calculateNewSizeFromDirection(h,u),S=w.newHeight,C=w.newWidth,T=this.calculateNewMaxFromBoundary(r,i);this.props.snap&&this.props.snap.x&&(C=Tt(C,this.props.snap.x,this.props.snapGap)),this.props.snap&&this.props.snap.y&&(S=Tt(S,this.props.snap.y,this.props.snapGap));var M=this.calculateNewSizeFromAspectRatio(C,S,{width:T.maxWidth,height:T.maxHeight},{width:c,height:d});if(C=M.newWidth,S=M.newHeight,this.props.grid){var Q=Rt(C,this.props.grid[0]),J=Rt(S,this.props.grid[1]),N=this.props.snapGap||0;C=N===0||Math.abs(Q-C)<=N?Q:C,S=N===0||Math.abs(J-S)<=N?J:S}var F={width:C-v.width,height:S-v.height};if(f&&typeof f=="string"){if(f.endsWith("%")){var b=C/E.width*100;C=b+"%"}else if(f.endsWith("vw")){var $=C/this.window.innerWidth*100;C=$+"vw"}else if(f.endsWith("vh")){var G=C/this.window.innerHeight*100;C=G+"vh"}}if(y&&typeof y=="string"){if(y.endsWith("%")){var b=S/E.height*100;S=b+"%"}else if(y.endsWith("vw")){var $=S/this.window.innerWidth*100;S=$+"vw"}else if(y.endsWith("vh")){var G=S/this.window.innerHeight*100;S=G+"vh"}}var X={width:this.createSizeForCssProperty(C,"width"),height:this.createSizeForCssProperty(S,"height")};this.flexDir==="row"?X.flexBasis=X.width:this.flexDir==="column"&&(X.flexBasis=X.height),(0,vs.flushSync)(function(){o.setState(X)}),this.props.onResize&&this.props.onResize(s,m,this.resizable,F)}},n.prototype.onMouseUp=function(s){var o=this.state,a=o.isResizing,r=o.direction,i=o.original;if(!(!a||!this.resizable)){var c={width:this.size.width-i.width,height:this.size.height-i.height};this.props.onResizeStop&&this.props.onResizeStop(s,r,this.resizable,c),this.props.size&&this.setState(this.props.size),this.unbindEvents(),this.setState({isResizing:!1,backgroundStyle:ce(ce({},this.state.backgroundStyle),{cursor:"auto"})})}},n.prototype.updateSize=function(s){this.setState({width:s.width,height:s.height})},n.prototype.renderResizer=function(){var s=this,o=this.props,a=o.enable,r=o.handleStyles,i=o.handleClasses,c=o.handleWrapperStyle,d=o.handleWrapperClass,h=o.handleComponent;if(!a)return null;var u=Object.keys(a).map(function(g){return a[g]!==!1?t.createElement(Ss,{key:g,direction:g,onResizeStart:s.onResizeStart,replaceStyles:r&&r[g],className:i&&i[g]},h&&h[g]?h[g]:null):null});return t.createElement("div",{className:d,style:c},u)},n.prototype.render=function(){var s=this,o=Object.keys(this.props).reduce(function(i,c){return Ts.indexOf(c)!==-1||(i[c]=s.props[c]),i},{}),a=ce(ce(ce({position:"relative",userSelect:this.state.isResizing?"none":"auto"},this.props.style),this.sizeStyle),{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box",flexShrink:0});this.state.flexBasis&&(a.flexBasis=this.state.flexBasis);var r=this.props.as||"div";return t.createElement(r,ce({ref:this.ref,style:a,className:this.props.className},o),this.state.isResizing&&t.createElement("div",{style:this.state.backgroundStyle}),this.props.children,this.renderResizer())},n.defaultProps={as:"div",onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0,scale:1,resizeRatio:1,snapGap:0},n}(t.PureComponent),zs=l(7804);const Is=e=>p.keyframes`
  0% {
    transform: translateY(${e.components.horizontalDrawer.defaultHeight}px);
  }

  100% {
    transform: translateY(0px);
  }
`,Fs=(0,zs.B)(e=>({container:p.css`
      position: fixed !important;
      bottom: 0;
      background: ${e.colors.background.primary};
      border-top: 1px solid ${e.colors.border.weak};
      margin: ${e.spacing(0,-2,0,-2)};
      box-shadow: ${e.shadows.z3};
      z-index: ${e.zIndex.navbarFixed};
    `,drawerActive:p.css`
      opacity: 1;
      animation: 0.5s ease-out ${Is(e)};
    `,rzHandle:p.css`
      background: ${e.colors.secondary.main};
      transition: 0.3s background ease-in-out;
      position: relative;
      width: 200px !important;
      height: 7px !important;
      left: calc(50% - 100px) !important;
      top: -4px !important;
      cursor: grab;
      border-radius: ${e.shape.radius.pill};
      &:hover {
        background: ${e.colors.secondary.shade};
      }
    `}));function zt(e){const{width:n,children:s,onResize:o}=e,a=(0,L.l4)(),r=Fs(a),i=`${n+31.5}px`;return t.createElement(Ls,{className:(0,p.cx)(r.container,r.drawerActive),defaultSize:{width:i,height:`${a.components.horizontalDrawer.defaultHeight}px`},handleClasses:{top:r.rzHandle},enable:{top:!0,right:!1,bottom:!1,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},maxHeight:"100vh",maxWidth:i,minWidth:i,onResize:o},s)}var Ns=l(21957),Ds=l(46835),Ps=l(18893),Hs=l(82090),$s=l(72062);function As(e){const{loading:n,width:s,onClose:o,queryResponse:a,timeZone:r}=e,i=a?.series||[];let c=a?.errors;!c?.length&&a?.error&&(c=[a.error]),(0,t.useEffect)(()=>{(0,H.ff)("grafana_explore_query_inspector_opened")},[]);const d={label:"Stats",value:"stats",icon:"chart-line",content:t.createElement(Hs.f,{data:a,timeZone:a?.request?.timezone})},h={label:"JSON",value:"json",icon:"brackets-curly",content:t.createElement(Ps.W,{data:a,onClose:o})},u={label:"Data",value:"data",icon:"database",content:t.createElement(Ns.E,{data:i,isLoading:n,options:{withTransforms:!1,withFieldConfig:!1},timeZone:r,app:Ne.zj.Explore})},g={label:"Query",value:"query",icon:"info-circle",content:t.createElement($s.D,{data:i,onRefreshQuery:()=>e.runQueries(e.exploreId)})},m=[d,g,h,u];if(c?.length){const v={label:"Error",value:"error",icon:"exclamation-triangle",content:t.createElement(Ds.l,{errors:c})};m.push(v)}return t.createElement(zt,{width:s},t.createElement(bt.W,{tabs:m,onClose:o,closeIconTooltip:"Close query inspector"}))}function Ms(e,{exploreId:n}){const o=e.explore[n],{loading:a,queryResponse:r}=o;return{loading:a,queryResponse:r}}const Os={runQueries:W.aA},Bs=(0,le.connect)(Ms,Os)(As);var Ws=l(53117),Ge=l(5562),xe=l(64319),It=l(26202),ks=l(41490),Qs=l(35224),Us=l(95379),Te=l(77582),Ft=l(57465),Vs=l(64503),Zs=l(19349),Nt=l(54294),me=l(46519),Dt=l(21053),Gs=l(32873),Pt=l(5242),De=l(6554);function js(e){const{onClick:n,isSynced:s}=e,o=()=>{const{isSynced:a}=e,r=a?"Unsync all views":"Sync all views to this time range";return t.createElement(t.Fragment,null,r)};return t.createElement(De.u,{content:o,placement:"bottom"},t.createElement(xe.h,{icon:"link",variant:s?"active":"canvas","aria-label":s?"Synced times":"Unsynced times",onClick:n}))}class Ys extends t.Component{constructor(){super(...arguments),this.onMoveTimePicker=n=>{const{range:s,onChangeTime:o,timeZone:a}=this.props,{from:r,to:i}=(0,Pt.e)(n,s),c={from:(0,me.GY)(a,r),to:(0,me.GY)(a,i)};o(c)},this.onMoveForward=()=>this.onMoveTimePicker(1),this.onMoveBack=()=>this.onMoveTimePicker(-1),this.onChangeTimePicker=n=>{const s=Dt.isMathString(n.raw.from)?n.raw.from:n.from,o=Dt.isMathString(n.raw.to)?n.raw.to:n.to;this.props.onChangeTime({from:s,to:o}),(0,H.ff)("grafana_explore_time_picker_time_range_changed",{timeRangeFrom:s,timeRangeTo:o})},this.onZoom=()=>{const{range:n,onChangeTime:s,timeZone:o}=this.props,{from:a,to:r}=(0,Pt.h)(n,2),i={from:(0,me.GY)(o,a),to:(0,me.GY)(o,r)};s(i)}}render(){const{range:n,timeZone:s,fiscalYearStartMonth:o,splitted:a,syncedTimes:r,onChangeTimeSync:i,hideText:c,onChangeTimeZone:d,onChangeFiscalYearStartMonth:h}=this.props,u=a?t.createElement(js,{onClick:i,isSynced:r}):void 0,g={value:n,timeZone:s,fiscalYearStartMonth:o,onMoveBackward:this.onMoveBack,onMoveForward:this.onMoveForward,onZoom:this.onZoom,hideText:c};return t.createElement(Gs.a,{isOnCanvas:!0,...g,timeSyncButton:u,isSynced:r,widthOverride:a?window.innerWidth/2:void 0,onChange:this.onChangeTimePicker,onChangeTimeZone:d,onChangeFiscalYearStartMonth:h})}}var Ht=l(22163);function Ks(e){const{start:n,pause:s,resume:o,isLive:a,isPaused:r,stop:i,splitted:c}=e,d=a&&!r?"active":"canvas",h=a?r?o:s:n;return t.createElement(It.h,null,t.createElement(De.u,{content:a&&!r?t.createElement(t.Fragment,null,"Pause the live stream"):t.createElement(t.Fragment,null,"Start live stream your logs"),placement:"bottom"},t.createElement(xe.h,{iconOnly:c,variant:d,icon:!a||r?"play":"pause",onClick:h},a&&r?"Paused":"Live")),t.createElement(Ht.Z,{mountOnEnter:!0,unmountOnExit:!0,timeout:100,in:a,classNames:{enter:je.stopButtonEnter,enterActive:je.stopButtonEnterActive,exit:je.stopButtonExit,exitActive:je.stopButtonExitActive}},t.createElement(De.u,{content:t.createElement(t.Fragment,null,"Stop and exit the live stream"),placement:"bottom"},t.createElement(xe.h,{variant:d,onClick:i,icon:"square-shape"}))))}const je={stopButtonEnter:p.css`
    label: stopButtonEnter;
    width: 0;
    opacity: 0;
    overflow: hidden;
  `,stopButtonEnterActive:p.css`
    label: stopButtonEnterActive;
    opacity: 1;
    width: 32px;
  `,stopButtonExit:p.css`
    label: stopButtonExit;
    width: 32px;
    opacity: 1;
    overflow: hidden;
  `,stopButtonExitActive:p.css`
    label: stopButtonExitActive;
    opacity: 0;
    width: 0;
  `};var $t=l(46526),Se=l(86297);function Js(e){const n=(0,R.useDispatch)(),s=(0,t.useCallback)(()=>{n((0,W.sQ)({exploreId:e,isPaused:!0}))},[e,n]),o=(0,t.useCallback)(()=>{n((0,W.sQ)({exploreId:e,isPaused:!1}))},[e,n]),a=(0,t.useCallback)(()=>{s(),n((0,Se.oz)(e,Ge.dP.offOption.value)),n((0,W.aA)(e))},[e,n,s]),r=(0,t.useCallback)(()=>{n((0,Se.oz)(e,Ge.dP.liveOption.value))},[e,n]);return{pause:s,resume:o,stop:a,start:r}}function At(e){const n=Js(e.exploreId);return e.children(n)}const Xs=(0,t.lazy)(()=>l.e(2319).then(l.bind(l,2319)).then(({AddToDashboard:e})=>({default:e}))),qs=(e,n)=>({rotateIcon:(0,p.css)({"> div > svg":{transform:e==="left"&&n||e==="right"&&!n?"rotate(180deg)":"none"}})});class _s extends t.PureComponent{constructor(){super(...arguments),this.onChangeDatasource=async n=>{const{changeDatasource:s,exploreId:o}=this.props;s(o,n.uid,{importQueries:!0})},this.onRunQuery=(n=!1)=>{const{runQueries:s,cancelQueries:o,exploreId:a}=this.props;return n?o(a):s(a)},this.onChangeRefreshInterval=n=>{const{changeRefreshInterval:s,exploreId:o}=this.props;s(o,n)},this.onChangeTimeSync=()=>{const{syncTimes:n,exploreId:s}=this.props;n(s)},this.onCopyShortLink=async()=>{await(0,Ft.L)(window.location.href),(0,H.ff)("grafana_explore_shortened_link_clicked")},this.onOpenSplitView=()=>{const{split:n}=this.props;n(),(0,H.ff)("grafana_explore_split_view_opened",{origin:"menu"})},this.onCloseSplitView=()=>{const{closeSplit:n,exploreId:s}=this.props;n(s),(0,H.ff)("grafana_explore_split_view_closed")},this.renderRefreshPicker=n=>{const{loading:s,refreshInterval:o,isLive:a}=this.props;let r=s?"Cancel":"Run query",i,c="108px";return n&&(i=r,r=void 0,c="35px"),t.createElement(Ge.dP,{key:"refreshPicker",onIntervalChanged:this.onChangeRefreshInterval,value:o,isLoading:s,text:r,tooltip:i,intervals:(0,Zs.$t)().getValidIntervals(Ge.o5),isLive:a,onRefresh:()=>this.onRunQuery(s),noIntervalPicker:a,primary:!0,width:c})},this.renderActions=()=>{const{splitted:n,isLive:s,exploreId:o,range:a,timeZone:r,fiscalYearStartMonth:i,onChangeTime:c,syncedTimes:d,onChangeTimeZone:h,onChangeFiscalYearStartMonth:u,isPaused:g,hasLiveOption:m,containerWidth:v,largerExploreId:f}=this.props,y=n||v<1210,E=f===o,x=qs(o,E),w=Te.Vt.hasAccess(R.AccessControlAction.DashboardsCreate,Te.Vt.isEditor)||Te.Vt.hasAccess(R.AccessControlAction.DashboardsWrite,Te.Vt.isEditor),S=()=>{E?this.props.evenPaneResizeAction():this.props.maximizePaneAction({exploreId:o})};return[n?t.createElement(It.h,{key:"split-controls"},t.createElement(xe.h,{variant:"canvas",tooltip:`${E?"Narrow":"Widen"} pane`,onClick:S,icon:E?"gf-movepane-left":"gf-movepane-right",iconOnly:!0,className:x.rotateIcon}),t.createElement(xe.h,{tooltip:"Close split pane",onClick:this.onCloseSplitView,icon:"times",variant:"canvas"},"Close")):t.createElement(xe.h,{variant:"canvas",key:"split",tooltip:"Split the pane",onClick:this.onOpenSplitView,icon:"columns",disabled:s},"Split"),w&&t.createElement(t.Suspense,{key:"addToDashboard",fallback:null},t.createElement(Xs,{exploreId:o})),!s&&t.createElement(Ys,{key:"timeControls",exploreId:o,range:a,timeZone:r,fiscalYearStartMonth:i,onChangeTime:c,splitted:n,syncedTimes:d,onChangeTimeSync:this.onChangeTimeSync,hideText:y,onChangeTimeZone:h,onChangeFiscalYearStartMonth:u}),this.renderRefreshPicker(y),m&&t.createElement(At,{key:"liveControls",exploreId:o},C=>{const T={...C,start:()=>{(0,H.ff)("grafana_explore_logs_live_tailing_clicked",{datasourceType:this.props.datasourceType}),C.start()}};return t.createElement(Ks,{splitted:n,isLive:s,isPaused:g,start:T.start,pause:T.pause,resume:T.resume,stop:T.stop})})].filter(Boolean)}}render(){const{datasourceMissing:n,exploreId:s,splitted:o,containerWidth:a,topOfViewRef:r,refreshInterval:i,loading:c}=this.props,d=(o?a<700:a<800)||!1,h=P.v.featureToggles.topnav,u=t.createElement(Vs.u,{key:"share",tooltip:"Copy shortened link",icon:"share-alt",onClick:this.onCopyShortLink,"aria-label":"Copy shortened link"}),g=()=>!n&&t.createElement(Ws.q,{key:`${s}-ds-picker`,mixed:P.v.featureToggles.exploreMixedDatasource===!0,onChange:this.onChangeDatasource,current:this.props.datasourceRef,hideTextValue:d,width:d?8:void 0}),m=[!h&&s===U.Kd.left&&u,g()].filter(Boolean);return t.createElement("div",{ref:r},i&&t.createElement(ks.F,{func:this.onRunQuery,interval:i,loading:c}),h&&t.createElement("div",{ref:r},t.createElement(Us.A,{actions:[u,t.createElement("div",{style:{flex:1},key:"spacer"})]})),t.createElement(Qs.X,{"aria-label":"Explore toolbar",title:s===U.Kd.left&&!h?"Explore":void 0,pageIcon:s===U.Kd.left&&!h?"compass":void 0,leftItems:m,forceShowLeftItems:!0},this.renderActions()))}}const eo=(e,{exploreId:n})=>{const{syncedTimes:s,largerExploreId:o}=e.explore,a=e.explore[n],{datasourceInstance:r,datasourceMissing:i,range:c,refreshInterval:d,loading:h,isLive:u,isPaused:g,containerWidth:m}=a,v=!!r?.meta?.streaming;return{datasourceMissing:i,datasourceRef:r?.getRef(),datasourceType:r?.type,loading:h,range:c,timeZone:(0,Ce.Z)(e.user),fiscalYearStartMonth:(0,Ce.i)(e.user),splitted:(0,Ae.p)(e),refreshInterval:d,hasLiveOption:v,isLive:u,isPaused:g,syncedTimes:s,containerWidth:m,largerExploreId:o}},to={changeDatasource:$t.zU,changeRefreshInterval:Se.oz,cancelQueries:W.ci,runQueries:W.aA,closeSplit:K.YV,split:K.bW,syncTimes:Se.mG,onChangeTimeZone:Nt.YT,onChangeFiscalYearStartMonth:Nt.rf,maximizePaneAction:K.nL,evenPaneResizeAction:K.AP},so=(0,le.connect)(eo,to)(_s);var oo=l(8433);const no=e=>{const n=(0,L.wW)(s=>ao(s));return t.createElement("div",{className:n.container},t.createElement(oo.Z,{data:e.dataFrames[0],app:Ne.zj.Explore}))},ao=e=>({container:p.css`
    background: ${e.colors.background.primary};
    display: flow-root;
    padding: 0 ${e.spacing(1)} ${e.spacing(1)} ${e.spacing(1)};
    border: 1px solid ${e.components.panel.borderColor};
    border-radius: ${e.shape.borderRadius(1)};
  `});var fe=l(2352),Mt=l(16983),ro=l(39778),io=l(66926),Ye=l(36998),lo=l(89890),co=l(29431),uo=l(98825),D=l(40538),ye=l(39904),O=l(31403),Ot=l(56703),po=l(91551),ho=l(39493);function go(e,n){return(0,ho.ZP)(e,s=>{s.defaults.custom===void 0&&(s.defaults.custom={});const{custom:o}=s.defaults;switch(o.stacking===void 0&&(o.stacking={group:"A"}),n){case"lines":o.drawStyle=D.l8.Line,o.stacking.mode=D.o0.None,o.fillOpacity=0;break;case"bars":o.drawStyle=D.l8.Bars,o.stacking.mode=D.o0.None,o.fillOpacity=100;break;case"points":o.drawStyle=D.l8.Points,o.stacking.mode=D.o0.None,o.fillOpacity=0;break;case"stacked_lines":o.drawStyle=D.l8.Line,o.stacking.mode=D.o0.Normal,o.fillOpacity=100;break;case"stacked_bars":o.drawStyle=D.l8.Bars,o.stacking.mode=D.o0.Normal,o.fillOpacity=100;break;default:{const a=n;throw new Error(`Invalid graph-style: ${a}`)}}})}var mo=function(e){return(e+1)%1e6};function fo(){var e=(0,t.useReducer)(mo,0),n=e[1];return n}function be(e,n){return typeof e=="function"?e.length?e(n):e():e}function yo(e){var n=(0,t.useRef)(be(e)),s=fo();return(0,t.useMemo)(function(){return[function(){return n.current},function(o){n.current=be(o,n.current),s()}]},[])}function vo(e,n,s){e===void 0&&(e=0),n===void 0&&(n=null),s===void 0&&(s=null);var o=be(e);typeof o!="number"&&console.error("initialValue has to be a number, got "+typeof e),typeof s=="number"?o=Math.max(o,s):s!==null&&console.error("min has to be a number, got "+typeof s),typeof n=="number"?o=Math.min(o,n):n!==null&&console.error("max has to be a number, got "+typeof n);var a=yo(o),r=a[0],i=a[1];return[r(),(0,t.useMemo)(function(){var c=function(d){var h=r(),u=be(d,h);h!==u&&(typeof s=="number"&&(u=Math.max(u,s)),typeof n=="number"&&(u=Math.min(u,n)),h!==u&&i(u))};return{get:r,set:c,inc:function(d){d===void 0&&(d=1);var h=be(d,r());typeof h!="number"&&console.error("delta has to be a number or function returning a number, got "+typeof h),c(function(u){return u+h})},dec:function(d){d===void 0&&(d=1);var h=be(d,r());typeof h!="number"&&console.error("delta has to be a number or function returning a number, got "+typeof h),c(function(u){return u-h})},reset:function(d){d===void 0&&(d=o);var h=be(d,r());typeof h!="number"&&console.error("value has to be a number or function returning a number, got "+typeof h),o=h,c(h)}}},[o,s,n])]}var Eo=l(54291),Bt=l(38067);function xo(e){const[n,{inc:s}]=vo(0),o=(0,Eo.Z)(e);return(0,t.useMemo)(()=>{o&&!(0,Bt.nl)(e,o,Bt.Ch)&&s()},[e,o,s]),n}const st=20;function Wt({data:e,height:n,width:s,timeZone:o,absoluteRange:a,onChangeTime:r,loadingState:i,annotations:c,onHiddenSeriesChanged:d,splitOpenFn:h,graphStyle:u,tooltipDisplayMode:g=D.f3.Single,anchorToZero:m=!1,eventBus:v}){const f=(0,L.l4)(),y=(0,L.wW)(So),[E,x]=(0,t.useState)(!1),w={from:(0,me.CQ)(a.from),to:(0,me.CQ)(a.to),raw:{from:(0,me.CQ)(a.from),to:(0,me.CQ)(a.to)}},S=(0,t.useMemo)(()=>(0,ro.j)((0,Ot.F)(Ot.r),"Explore"),[]),[C,T]=(0,t.useState)({defaults:{min:m?0:void 0,color:{mode:io.S.PaletteClassic},custom:{drawStyle:D.l8.Line,fillOpacity:0,pointSize:5}},overrides:[]}),M=(0,t.useMemo)(()=>go(C,u),[C,u]),Q=(0,t.useMemo)(()=>(0,Ye.SM)({fieldConfig:M,data:E?e:e.slice(0,st),timeZone:o,replaceVariables:b=>b,theme:f,fieldConfigRegistry:S}),[S,e,o,f,M,E]),J=xo(Q);(0,t.useEffect)(()=>{if(d){const b=[];Q.forEach($=>{$.fields.map(X=>X.config?.custom?.hideFrom?.viz).every(z.identity)&&b.push((0,lo.n)($))}),d(b)}},[Q,d]);const N={eventBus:v,sync:()=>co.m.Crosshair,onSplitOpen:h,onToggleSeriesVisibility(b,$){T((0,po.N)(b,$,C,e))}},F=(0,t.useMemo)(()=>({tooltip:{mode:g,sort:D.As.None},legend:{displayMode:D.jK.List,showLegend:!0,placement:"bottom",calcs:[]}}),[g]);return t.createElement(ne._w,{value:N},e.length>st&&!E&&t.createElement("div",{className:y.timeSeriesDisclaimer},t.createElement(ye.J,{className:y.disclaimerIcon,name:"exclamation-triangle"}),"Showing only ",st," time series.",t.createElement(O.zx,{variant:"primary",fill:"text",onClick:()=>x(!0),className:y.showAllButton},"Show all ",e.length)),t.createElement(uo.$,{data:{series:Q,timeRange:w,state:i,annotations:c,structureRev:J},pluginId:"timeseries",title:"",width:s,height:n,onChangeTimeRange:r,timeZone:o,options:F}))}const So=e=>({timeSeriesDisclaimer:p.css`
    label: time-series-disclaimer;
    margin: ${e.spacing(1)} auto;
    padding: 10px 0;
    text-align: center;
  `,disclaimerIcon:p.css`
    label: disclaimer-icon;
    color: ${e.colors.warning.main};
    margin-right: ${e.spacing(.5)};
  `,showAllButton:p.css`
    margin-left: ${e.spacing(.5)};
  `});var kt=l(52081),Ke=l(2594);const bo=R.EXPLORE_GRAPH_STYLES.map(e=>({value:e,label:e[0].toUpperCase()+e.slice(1).replace(/_/," ")}));function wo(e){const{graphStyle:n,onChangeGraphStyle:s}=e;return t.createElement(kt.Lh,{justify:"space-between",wrap:!0},"Graph",t.createElement(Ke.S,{size:"sm",options:bo,value:n,onChange:s}))}const Qt="grafana.explore.style.graph",gr=e=>{store.set(Qt,e)},Co=()=>To(ee.Z.get(Qt)),Ro="lines",To=e=>R.EXPLORE_GRAPH_STYLES.find(s=>s===e)??Ro,Lo=({loading:e,data:n,eventBus:s,height:o,width:a,absoluteRange:r,timeZone:i,annotations:c,onChangeTime:d,splitOpenFn:h,loadingState:u})=>{const[g,m]=(0,t.useState)(Co),v=(0,L.l4)(),f=parseInt(v.spacing(2).slice(0,-2),10),y=(0,t.useCallback)(E=>{(0,Mt.FG)(E),m(E)},[]);return t.createElement(fe.U,{label:t.createElement(wo,{graphStyle:g,onChangeGraphStyle:y}),loading:e,isOpen:!0},t.createElement(Wt,{graphStyle:g,data:n,height:o,width:a-f,absoluteRange:r,onChangeTime:d,timeZone:i,annotations:c,splitOpenFn:h,loadingState:u,eventBus:s}))};var Ut=l(28550),ot=l(38849),zo=l(25287),Io=l(34282),Fo=l(78337),No=l(53739);const Vt=150,Do=({resetKey:e,humanize:n,className:s})=>{const[o,a]=(0,t.useState)(0);return(0,Fo.Z)(()=>a(o+Vt),Vt),(0,t.useEffect)(()=>a(0),[e]),t.createElement(No.q,{timeInMs:o,className:s,humanize:n})},Po=e=>({logsRowsLive:p.css`
    label: logs-rows-live;
    font-family: ${e.typography.fontFamilyMonospace};
    font-size: ${e.typography.bodySmall.fontSize};
    display: flex;
    flex-flow: column nowrap;
    height: 60vh;
    overflow-y: scroll;
    :first-child {
      margin-top: auto !important;
    }
  `,logsRowFade:p.css`
    label: logs-row-fresh;
    color: ${e.colors.text};
    background-color: ${(0,Ut.Z)(e.colors.info.transparent).setAlpha(.25).toString()};
    animation: fade 1s ease-out 1s 1 normal forwards;
    @keyframes fade {
      from {
        background-color: ${(0,Ut.Z)(e.colors.info.transparent).setAlpha(.25).toString()};
      }
      to {
        background-color: transparent;
      }
    }
  `,logsRowsIndicator:p.css`
    font-size: ${e.typography.h6.fontSize};
    padding-top: ${e.spacing(1)};
    display: flex;
    align-items: center;
  `,button:p.css`
    margin-right: ${e.spacing(1)};
  `,fullWidth:p.css`
    width: 100%;
  `});class Ho extends t.PureComponent{constructor(n){super(n),this.liveEndDiv=null,this.scrollContainerRef=t.createRef(),this.onScroll=s=>{const{isPaused:o,onPause:a}=this.props,{scrollTop:r,clientHeight:i,scrollHeight:c}=s.currentTarget;c-(r+i)>=5&&!o&&a()},this.rowsToRender=()=>{const{isPaused:s}=this.props;let{logRowsToRender:o=[]}=this.state;return s||(o=o.slice(-100)),o},this.state={logRowsToRender:n.logRows}}static getDerivedStateFromProps(n,s){return n.isPaused?null:{logRowsToRender:n.logRows}}render(){const{theme:n,timeZone:s,onPause:o,onResume:a,isPaused:r}=this.props,i=Po(n),{logsRow:c,logsRowLocalTime:d,logsRowMessage:h}=(0,Io.h)(n);return t.createElement("div",null,t.createElement("table",{className:i.fullWidth},t.createElement("tbody",{onScroll:r?void 0:this.onScroll,className:i.logsRowsLive,ref:this.scrollContainerRef},this.rowsToRender().map(u=>t.createElement("tr",{className:(0,p.cx)(c,i.logsRowFade),key:u.uid},t.createElement("td",{className:d},(0,ot.dq)(u.timeEpochMs,{timeZone:s})),t.createElement("td",{className:h},u.hasAnsi?t.createElement(zo.Q,{value:u.raw}):u.entry))),t.createElement("tr",{ref:u=>{this.liveEndDiv=u,this.liveEndDiv&&this.scrollContainerRef.current?.scrollTo&&!r&&this.scrollContainerRef.current?.scrollTo(0,this.scrollContainerRef.current.scrollHeight)}}))),t.createElement("div",{className:i.logsRowsIndicator},t.createElement(O.zx,{variant:"secondary",onClick:r?a:o,className:i.button},t.createElement(ye.J,{name:r?"play":"pause"}),"\xA0",r?"Resume":"Pause"),t.createElement(O.zx,{variant:"secondary",onClick:this.props.stopLive,className:i.button},t.createElement(ye.J,{name:"square-shape",size:"lg",type:"mono"}),"\xA0 Exit live mode"),r||t.createElement("span",null,"Last line received: ",t.createElement(Do,{resetKey:this.props.logRows,humanize:!0})," ago")))}}const $o=(0,L.HE)(Ho);var Zt=l(55294),Ao=l(33180),Mo=l(11543),he=l(81764),we=l(8944),nt=l(37959),Gt=l(28947),Oo=l(3574),Bo=l.n(Oo),at=l(38484),Wo=l(71698),ko=l(65066),Qo=l(54972),Uo=l(48955),jt=l(81042);const Yt=e=>({metaContainer:p.css`
    flex: 1;
    color: ${e.colors.text.secondary};
    margin-bottom: ${e.spacing(2)};
    min-width: 30%;
    display: flex;
    flex-wrap: wrap;
  `,metaItem:p.css`
    margin-right: ${e.spacing(2)};
    margin-top: ${e.spacing(.5)};
    display: flex;
    align-items: center;

    .logs-meta-item__error {
      color: ${e.colors.error.text};
    }
  `,metaLabel:p.css`
    margin-right: calc(${e.spacing(2)} / 2);
    font-size: ${e.typography.bodySmall.fontSize};
    font-weight: ${e.typography.fontWeightMedium};
  `,metaValue:p.css`
    font-family: ${e.typography.fontFamilyMonospace};
    font-size: ${e.typography.bodySmall.fontSize};
  `}),Vo=(0,t.memo)(function(n){const s=(0,L.wW)(Yt),{label:o,value:a}=n;return t.createElement("div",{"data-testid":"meta-info-text-item",className:s.metaItem},o&&t.createElement("span",{className:s.metaLabel},o,":"),t.createElement("span",{className:s.metaValue},a))}),rt=(0,t.memo)(function(n){const s=(0,L.wW)(Yt),{metaItems:o}=n;return t.createElement("div",{className:s.metaContainer,"data-testid":"meta-info-text"},o.map((a,r)=>t.createElement(Vo,{key:`${r}-${a.label}`,label:a.label,value:a.value})))}),Zo=()=>({metaContainer:p.css`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
  `});var Go=(e=>(e.Text="text",e.Json="json",e))(Go||{});const Kt=t.memo(({meta:e,dedupStrategy:n,dedupCount:s,displayedFields:o,clearDetectedFields:a,hasUnescapedContent:r,forceEscape:i,onEscapeNewlines:c,logRows:d})=>{const h=(0,L.wW)(Zo),u=v=>{switch((0,H.ff)("grafana_logs_download_logs_clicked",{app:Ne.zj.Explore,format:v,area:"logs-meta-row"}),v){case"text":(0,ko.Fc)({meta:e,rows:d},"Explore");break;case"json":const f=(0,jt.Di)(d),y=new Blob([JSON.stringify(f)],{type:"application/json;charset=utf-8"}),E=`Explore-logs-${(0,ot.dq)(new Date)}.json`;Bo()(y,E);break}},g=[...e];n!==D.Y4.none&&g.push({label:"Deduplication count",value:s,kind:k.Ku.Number}),d.some(v=>v.entry.length>Uo.n)&&g.push({label:"Info",value:"Logs with more than 100,000 characters could not be parsed and highlighted",kind:k.Ku.String}),o?.length>0&&g.push({label:"Showing only selected fields",value:Jt(o,k.Ku.LabelsMap)},{label:"",value:t.createElement(O.zx,{variant:"secondary",size:"sm",onClick:a},"Show original line")}),r&&g.push({label:"Your logs might have incorrectly escaped content",value:t.createElement(De.u,{content:"Fix incorrectly escaped newline and tab sequences in log lines. Manually review the results to confirm that the replacements are correct.",placement:"right"},t.createElement(O.zx,{variant:"secondary",size:"sm",onClick:c},i?"Remove escaping":"Escape newlines"))});const m=t.createElement(at.v,null,t.createElement(at.v.Item,{label:"txt",onClick:()=>u("text")}),t.createElement(at.v.Item,{label:"json",onClick:()=>u("json")}));return t.createElement(t.Fragment,null,g&&t.createElement("div",{className:h.metaContainer},t.createElement(rt,{metaItems:g.map(v=>({label:v.label,value:"kind"in v?Jt(v.value,v.kind):v.value}))}),t.createElement(Wo.L,{overlay:m},t.createElement(xe.h,{isOpen:!1,variant:"canvas",icon:"download-alt"},"Download"))))});Kt.displayName="LogsMetaRow";function Jt(e,n){return n===k.Ku.LabelsMap?t.createElement(Qo.j,{labels:e}):n===k.Ku.Error?t.createElement("span",{className:"logs-meta-item__error"},e):e}var it=l(67487),jo=l(13211),Yo=l(47513);function Ko({pages:e,currentPageIndex:n,oldestLogsFirst:s,timeZone:o,loading:a,changeTime:r}){const i=u=>`${(0,ot.dq)(u,{format:Yo.U6.interval.second,timeZone:o})}`,c=(u,g)=>{if(n===g&&a)return t.createElement(it.$,null);const m=i(s?u.logsRange.from:u.logsRange.to),v=i(s?u.logsRange.to:u.logsRange.from);return`${m} \u2014 ${v}`},d=(0,L.l4)(),h=Jo(d,a);return t.createElement(vt.$,{autoHide:!0},t.createElement("div",{className:h.pagesWrapper,"data-testid":"logsNavigationPages"},t.createElement("div",{className:h.pagesContainer},e.map((u,g)=>t.createElement("button",{type:"button","data-testid":`page${g+1}`,className:(0,p.cx)((0,O.gN)(d),h.page),key:u.queryRange.to,onClick:()=>{(0,H.ff)("grafana_explore_logs_pagination_clicked",{pageType:"page",pageNumber:g+1}),!a&&r({from:u.queryRange.from,to:u.queryRange.to})}},t.createElement("div",{className:(0,p.cx)(h.line,{selectedBg:n===g})}),t.createElement("div",{className:(0,p.cx)(h.time,{selectedText:n===g})},c(u,g)))))))}const Jo=(e,n)=>({pagesWrapper:p.css`
      height: 100%;
      padding-left: ${e.spacing(.5)};
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      &::after {
        content: '';
        display: block;
        background: repeating-linear-gradient(
          135deg,
          ${e.colors.background.primary},
          ${e.colors.background.primary} 5px,
          ${e.colors.background.secondary} 5px,
          ${e.colors.background.secondary} 15px
        );
        width: 3px;
        height: inherit;
        margin-bottom: 8px;
      }
    `,pagesContainer:p.css`
      display: flex;
      padding: 0;
      flex-direction: column;
    `,page:p.css`
      display: flex;
      margin: ${e.spacing(2)} 0;
      cursor: ${n?"auto":"pointer"};
      white-space: normal;
      .selectedBg {
        background: ${e.colors.primary.main};
      }
      .selectedText {
        color: ${e.colors.primary.main};
      }
    `,line:p.css`
      width: 3px;
      height: 100%;
      align-items: center;
      background: ${e.colors.text.secondary};
    `,time:p.css`
      width: 60px;
      min-height: 80px;
      font-size: ${e.v1.typography.size.sm};
      padding-left: ${e.spacing(.5)};
      display: flex;
      align-items: center;
    `});function Xo({absoluteRange:e,logsSortOrder:n,timeZone:s,loading:o,onChangeTime:a,scrollToTopLogs:r,visibleRange:i,queries:c,clearCache:d,addResultsToCache:h}){const[u,g]=(0,t.useState)([]),[m,v]=(0,t.useState)(0),f=(0,t.useRef)(),y=(0,t.useRef)(),E=(0,t.useRef)(0),x=n===D.UV.Ascending,w=x?m===u.length-1:m===0,S=x?m===0:m===u.length-1,C=(0,L.l4)(),T=_o(C,x,o);(0,t.useEffect)(()=>{const F={logsRange:i,queryRange:e};let b=[];if(!(0,z.isEqual)(y.current,e)||!(0,z.isEqual)(f.current,c))d(),g([F]),v(0),f.current=c,E.current=e.to-e.from;else{g(G=>(b=G.filter(X=>!(0,z.isEqual)(F.queryRange,X.queryRange)),b=[...b,F].sort((X,qe)=>Q(X,qe,n)),b));const $=b.findIndex(G=>G.queryRange.to===e.to);v($)}h()},[i,e,n,c,d,h]),(0,t.useEffect)(()=>{d()},[]);const M=({from:F,to:b})=>{y.current={from:F,to:b},a({from:F,to:b})},Q=(F,b,$)=>$===D.UV.Ascending?F.queryRange.to>b.queryRange.to?1:-1:F.queryRange.to>b.queryRange.to?-1:1,J=t.createElement(O.zx,{"data-testid":"olderLogsButton",className:T.navButton,variant:"secondary",onClick:()=>{if((0,H.ff)("grafana_explore_logs_pagination_clicked",{pageType:"olderLogsButton"}),S)M({from:i.from-E.current,to:i.from});else{const F=x?-1:1;M({from:u[m+F].queryRange.from,to:u[m+F].queryRange.to})}},disabled:o},t.createElement("div",{className:T.navButtonContent},o?t.createElement(it.$,null):t.createElement(ye.J,{name:x?"angle-up":"angle-down",size:"lg"}),"Older logs")),N=t.createElement(O.zx,{"data-testid":"newerLogsButton",className:T.navButton,variant:"secondary",onClick:()=>{if((0,H.ff)("grafana_explore_logs_pagination_clicked",{pageType:"newerLogsButton"}),!w){const F=x?1:-1;M({from:u[m+F].queryRange.from,to:u[m+F].queryRange.to})}},disabled:o||w},t.createElement("div",{className:T.navButtonContent},o&&t.createElement(it.$,null),w||o?null:t.createElement(ye.J,{name:x?"angle-down":"angle-up",size:"lg"}),w?"Start of range":"Newer logs"));return t.createElement("div",{className:T.navContainer},x?J:N,t.createElement(Ko,{pages:u,currentPageIndex:m,oldestLogsFirst:x,timeZone:s,loading:o,changeTime:M}),x?N:J,t.createElement(O.zx,{"data-testid":"scrollToTop",className:T.scrollToTopButton,variant:"secondary",onClick:r,title:"Scroll to top"},t.createElement(ye.J,{name:"arrow-up",size:"lg"})))}const qo=(0,t.memo)(Xo),_o=(e,n,s)=>{const o=e.flags.topnav?`calc(100vh - 2*${e.spacing(2)} - 2*${jo.$}px)`:"95vh";return{navContainer:p.css`
      max-height: ${o};
      display: flex;
      flex-direction: column;
      justify-content: ${n?"flex-start":"space-between"};
      position: sticky;
      top: ${e.spacing(2)};
      right: 0;
    `,navButton:p.css`
      width: 58px;
      height: 68px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      line-height: 1;
    `,navButtonContent:p.css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      white-space: normal;
    `,scrollToTopButton:p.css`
      width: 40px;
      height: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: ${e.spacing(1)};
    `}};function en(e){const{width:n,timeZone:s,splitOpen:o,onUpdateTimeRange:a,onHiddenSeriesChanged:r}=e,i=(0,L.l4)(),c=(0,L.wW)(tn),d=parseInt(i.spacing(2).slice(0,-2),10),h=150;if(e.logsVolumeData===void 0)return null;const u=e.logsVolumeData,g=(0,k.Js)(u?.data);let m=g?`${g.name}`:"";(0,k.FP)(u.data)&&(m=[m,"This datasource does not support full-range histograms. The graph below is based on the logs seen in the response."].filter(z.identity).join(". "));const v=(0,k.FP)(u.data)?(0,k.a6)(u.data,e.absoluteRange):e.absoluteRange;let f;u?.data&&(u.data.length>0?f=t.createElement(Wt,{graphStyle:"lines",loadingState:u.state??I.Gu.Done,data:u.data,height:h,width:n-d*2,absoluteRange:v,onChangeTime:a,timeZone:s,splitOpenFn:o,tooltipDisplayMode:D.f3.Multi,onHiddenSeriesChanged:r,anchorToZero:!0,eventBus:e.eventBus}):f=t.createElement("span",null,"No volume data."));let y=t.createElement("span",null,m);return u.state===I.Gu.Streaming&&(y=t.createElement(t.Fragment,null,y,t.createElement(De.u,{content:"Streaming"},t.createElement(ye.J,{name:"circle-mono",size:"md",className:c.streaming,"data-testid":"logs-volume-streaming"})))),t.createElement("div",{style:{height:h},className:c.contentContainer},f,y&&t.createElement("div",{className:c.extraInfoContainer},y))}const tn=e=>({extraInfoContainer:p.css`
      display: flex;
      justify-content: end;
      position: absolute;
      right: 5px;
      top: -10px;
      font-size: ${e.typography.bodySmall.fontSize};
      color: ${e.colors.text.secondary};
    `,contentContainer:p.css`
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    `,streaming:p.css`
      color: ${e.colors.success.text};
    `});function lt(e){const[n,s]=(0,t.useState)(!1),o=100,{error:a,title:r,suggestedAction:i,onSuggestedAction:c,onRemove:d,severity:h="warning"}=e,u=a?.message||a?.data?.message||"",g=!n&&u.length>o;return t.createElement(ke.b,{title:r,severity:h,onRemove:d},g?t.createElement(O.zx,{variant:"secondary",size:"xs",onClick:()=>{s(!0)}},"Show details"):u,i&&c&&t.createElement(O.zx,{variant:"primary",size:"xs",onClick:c},i))}function sn(e){return!e||!e.error&&!e.errors?!1:(e.error?[e.error]:e.errors||[]).some(s=>(`${s.message||s.data?.message}`?.toLowerCase()).includes("timeout"))}const on=({logsVolumeData:e,absoluteRange:n,onUpdateTimeRange:s,width:o,onLoadLogsVolume:a,onHiddenSeriesChanged:r,eventBus:i,splitOpen:c,timeZone:d,onClose:h})=>{const u=(0,t.useMemo)(()=>{const y=(0,z.groupBy)(e?.data||[],"meta.custom.datasourceName");return(0,z.mapValues)(y,E=>(0,jt._c)(E))},[e]),g=(0,L.wW)(nn),m=Object.keys(u).length,v=Object.values(u).some(y=>{const E=an(y,n);return!(0,k.FP)(y)&&E&&E<1}),f=sn(e);return e?.state===I.Gu.Loading?t.createElement("span",null,"Loading..."):f?t.createElement(lt,{title:"The logs volume query is taking too long and has timed out",severity:"info",suggestedAction:"Retry",onSuggestedAction:a,onRemove:h}):e?.error!==void 0?t.createElement(lt,{error:e.error,title:"Failed to load log volume for this query"}):t.createElement("div",{className:g.listContainer},Object.keys(u).map((y,E)=>{const x={data:u[y]};return t.createElement(en,{key:E,absoluteRange:n,width:o,logsVolumeData:x,onUpdateTimeRange:s,timeZone:d,splitOpen:c,onLoadLogsVolume:a,onHiddenSeriesChanged:m>1?()=>{}:r,eventBus:i})}),v&&t.createElement("div",{className:g.extraInfoContainer},t.createElement(he._,{label:"Reload log volume",transparent:!0},t.createElement(O.zx,{size:"xs",icon:"sync",variant:"secondary",onClick:a,id:"reload-volume"}))))},nn=e=>({listContainer:p.css`
      padding-top: 10px;
    `,extraInfoContainer:p.css`
      display: flex;
      justify-content: end;
      position: absolute;
      right: 5px;
      top: 5px;
    `,oldInfoText:p.css`
      font-size: ${e.typography.bodySmall.fontSize};
      color: ${e.colors.text.secondary};
    `});function an(e,n){const s=e&&e[0]&&e[0].meta?.custom?.absoluteRange;return s?(n.from-n.to)/(s.from-s.to):void 0}const ie={showLabels:"grafana.explore.logs.showLabels",showTime:"grafana.explore.logs.showTime",wrapLogMessage:"grafana.explore.logs.wrapLogMessage",prettifyLogMessage:"grafana.explore.logs.prettifyLogMessage",logsSortOrder:"grafana.explore.logs.sortOrder"},rn=p.css`
  & > div {
    overflow: visible;
    & > div {
      overflow: visible;
    }
  }
`,ln=[D.Y4.none,D.Y4.exact,D.Y4.numbers,D.Y4.signature];class cn extends t.PureComponent{constructor(n){super(n),this.topLogsRef=(0,t.createRef)(),this.state={showLabels:ee.Z.getBool(ie.showLabels,!1),showTime:ee.Z.getBool(ie.showTime,!0),wrapLogMessage:ee.Z.getBool(ie.wrapLogMessage,!0),prettifyLogMessage:ee.Z.getBool(ie.prettifyLogMessage,!1),dedupStrategy:D.Y4.none,hiddenLogLevels:[],logsSortOrder:ee.Z.get(ie.logsSortOrder)||D.UV.Descending,isFlipping:!1,displayedFields:[],forceEscape:!1},this.onLogRowHover=s=>{s?this.props.eventBus.publish(new Zt.es({point:{time:s.timeEpochMs}})):this.props.eventBus.publish(new Zt.xH)},this.onChangeLogsSortOrder=()=>{this.setState({isFlipping:!0}),this.flipOrderTimer=window.setTimeout(()=>{this.setState(s=>{const o=s.logsSortOrder===D.UV.Descending?D.UV.Ascending:D.UV.Descending;return ee.Z.set(ie.logsSortOrder,o),{logsSortOrder:o}})},0),this.cancelFlippingTimer=window.setTimeout(()=>this.setState({isFlipping:!1}),1e3)},this.onEscapeNewlines=()=>{this.setState(s=>({forceEscape:!s.forceEscape}))},this.onChangeDedup=s=>{(0,H.ff)("grafana_explore_logs_deduplication_clicked",{deduplicationType:s,datasourceType:this.props.datasourceType}),this.setState({dedupStrategy:s})},this.onChangeLabels=s=>{const{target:o}=s;if(o){const a=o.checked;this.setState({showLabels:a}),ee.Z.set(ie.showLabels,a)}},this.onChangeTime=s=>{const{target:o}=s;if(o){const a=o.checked;this.setState({showTime:a}),ee.Z.set(ie.showTime,a)}},this.onChangeWrapLogMessage=s=>{const{target:o}=s;if(o){const a=o.checked;this.setState({wrapLogMessage:a}),ee.Z.set(ie.wrapLogMessage,a)}},this.onChangePrettifyLogMessage=s=>{const{target:o}=s;if(o){const a=o.checked;this.setState({prettifyLogMessage:a}),ee.Z.set(ie.prettifyLogMessage,a)}},this.onToggleLogLevel=s=>{const o=s.map(a=>k.in[a]);this.setState({hiddenLogLevels:o})},this.onToggleLogsVolumeCollapse=s=>{this.props.onSetLogsVolumeEnabled(s),(0,H.ff)("grafana_explore_logs_histogram_toggle_clicked",{datasourceType:this.props.datasourceType,type:s?"open":"close"})},this.onClickScan=s=>{s.preventDefault(),this.props.onStartScanning&&this.props.onStartScanning()},this.onClickStopScan=s=>{s.preventDefault(),this.props.onStopScanning&&this.props.onStopScanning()},this.showField=s=>{this.state.displayedFields.indexOf(s)===-1&&this.setState(a=>({displayedFields:a.displayedFields.concat(s)}))},this.hideField=s=>{this.state.displayedFields.indexOf(s)>-1&&this.setState(a=>({displayedFields:a.displayedFields.filter(r=>s!==r)}))},this.clearDetectedFields=()=>{this.setState(s=>({displayedFields:[]}))},this.checkUnescapedContent=(0,Ee.Z)(s=>!!s.some(o=>o.hasUnescapedContent)),this.dedupRows=(0,Ee.Z)((s,o)=>{const a=(0,nt.UW)(s,o),r=a.reduce((i,c)=>c.duplicates?i+c.duplicates:i,0);return{dedupedRows:a,dedupCount:r}}),this.filterRows=(0,Ee.Z)((s,o)=>(0,nt.nu)(s,new Set(o))),this.createNavigationRange=(0,Ee.Z)(s=>{if(!s||s.length===0)return;const o=s[0].timeEpochMs,a=s[s.length-1].timeEpochMs;return a<o?{from:a,to:o}:{from:o,to:a}}),this.scrollToTopLogs=()=>this.topLogsRef.current?.scrollIntoView(),this.logsVolumeEventBus=n.eventBus.newScopedBus("logsvolume",{onlyLocal:!1})}componentWillUnmount(){this.flipOrderTimer&&window.clearTimeout(this.flipOrderTimer),this.cancelFlippingTimer&&window.clearTimeout(this.cancelFlippingTimer)}render(){const{width:n,splitOpen:s,logRows:o,logsMeta:a,logsVolumeEnabled:r,logsVolumeData:i,loadLogsVolumeData:c,loading:d=!1,onClickFilterLabel:h,onClickFilterOutLabel:u,timeZone:g,scanning:m,scanRange:v,showContextToggle:f,absoluteRange:y,onChangeTime:E,getFieldLinks:x,theme:w,logsQueries:S,clearCache:C,addResultsToCache:T,exploreId:M,scrollElement:Q,getRowContext:J,getLogRowContextUi:N}=this.props,{showLabels:F,showTime:b,wrapLogMessage:$,prettifyLogMessage:G,dedupStrategy:X,hiddenLogLevels:qe,logsSortOrder:ft,isFlipping:nr,displayedFields:us,forceEscape:ps}=this.state,q=un(w,$),ar=o&&o.length>0,rr=this.checkUnescapedContent(o),ir=this.filterRows(o,qe),{dedupedRows:lr,dedupCount:cr}=this.dedupRows(ir,X),dr=this.createNavigationRange(o),ur=v?`Scanning ${Ao.describeTimeRange(v)}`:"Scanning...";return t.createElement(t.Fragment,null,t.createElement(fe.U,{label:"Logs volume",collapsible:!0,isOpen:r,onToggle:this.onToggleLogsVolumeCollapse},r&&t.createElement(on,{absoluteRange:y,width:n,logsVolumeData:i,onUpdateTimeRange:E,timeZone:g,splitOpen:s,onLoadLogsVolume:c,onHiddenSeriesChanged:this.onToggleLogLevel,eventBus:this.logsVolumeEventBus,onClose:()=>this.onToggleLogsVolumeCollapse(!1)})),t.createElement(fe.U,{label:"Logs",loading:d,isOpen:!0,className:rn},t.createElement("div",{className:q.logOptions,ref:this.topLogsRef},t.createElement(Mo.Z,null,t.createElement(he._,{label:"Time",className:q.horizontalInlineLabel,transparent:!0},t.createElement(we.x,{value:b,onChange:this.onChangeTime,className:q.horizontalInlineSwitch,transparent:!0,id:`show-time_${M}`})),t.createElement(he._,{label:"Unique labels",className:q.horizontalInlineLabel,transparent:!0},t.createElement(we.x,{value:F,onChange:this.onChangeLabels,className:q.horizontalInlineSwitch,transparent:!0,id:`unique-labels_${M}`})),t.createElement(he._,{label:"Wrap lines",className:q.horizontalInlineLabel,transparent:!0},t.createElement(we.x,{value:$,onChange:this.onChangeWrapLogMessage,className:q.horizontalInlineSwitch,transparent:!0,id:`wrap-lines_${M}`})),t.createElement(he._,{label:"Prettify JSON",className:q.horizontalInlineLabel,transparent:!0},t.createElement(we.x,{value:G,onChange:this.onChangePrettifyLogMessage,className:q.horizontalInlineSwitch,transparent:!0,id:`prettify_${M}`})),t.createElement(he._,{label:"Deduplication",className:q.horizontalInlineLabel,transparent:!0},t.createElement(Ke.S,{options:ln.map(yt=>({label:(0,z.capitalize)(yt),value:yt,description:k.Uv[yt]})),value:X,onChange:this.onChangeDedup,className:q.radioButtons}))),t.createElement("div",null,t.createElement(he._,{label:"Display results",className:q.horizontalInlineLabel,transparent:!0},t.createElement(Ke.S,{disabled:nr,options:[{label:"Newest first",value:D.UV.Descending,description:"Show results newest to oldest"},{label:"Oldest first",value:D.UV.Ascending,description:"Show results oldest to newest"}],value:ft,onChange:this.onChangeLogsSortOrder,className:q.radioButtons})))),t.createElement(Kt,{logRows:o,meta:a||[],dedupStrategy:X,dedupCount:cr,hasUnescapedContent:rr,forceEscape:ps,displayedFields:us,onEscapeNewlines:this.onEscapeNewlines,clearDetectedFields:this.clearDetectedFields}),t.createElement("div",{className:q.logsSection},t.createElement("div",{className:q.logRows,"data-testid":"logRows"},t.createElement(Gt.w,{logRows:o,deduplicatedRows:lr,dedupStrategy:X,getRowContext:J,getLogRowContextUi:N,onClickFilterLabel:h,onClickFilterOutLabel:u,showContextToggle:f,showLabels:F,showTime:b,enableLogDetails:!0,forceEscape:ps,wrapLogMessage:$,prettifyLogMessage:G,timeZone:g,getFieldLinks:x,logsSortOrder:ft,displayedFields:us,onClickShowField:this.showField,onClickHideField:this.hideField,app:Ne.zj.Explore,scrollElement:Q,onLogRowHover:this.onLogRowHover}),!d&&!ar&&!m&&t.createElement("div",{className:q.noData},"No logs found.",t.createElement(O.zx,{size:"sm",variant:"secondary",onClick:this.onClickScan},"Scan for older logs")),m&&t.createElement("div",{className:q.noData},t.createElement("span",null,ur),t.createElement(O.zx,{size:"sm",variant:"secondary",onClick:this.onClickStopScan},"Stop scan"))),t.createElement(qo,{logsSortOrder:ft,visibleRange:dr??y,absoluteRange:y,timeZone:g,onChangeTime:E,loading:d,queries:S??[],scrollToTopLogs:this.scrollToTopLogs,addResultsToCache:T,clearCache:C}))))}}const dn=(0,L.HE)(cn),un=(e,n)=>({noData:p.css`
      > * {
        margin-left: 0.5em;
      }
    `,logOptions:p.css`
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      flex-wrap: wrap;
      background-color: ${e.colors.background.primary};
      padding: ${e.spacing(1,2)};
      border-radius: ${e.shape.borderRadius()};
      margin: ${e.spacing(0,0,1)};
      border: 1px solid ${e.colors.border.medium};
    `,headerButton:p.css`
      margin: ${e.spacing(.5,0,0,1)};
    `,horizontalInlineLabel:p.css`
      > label {
        margin-right: 0;
      }
    `,horizontalInlineSwitch:p.css`
      padding: 0 ${e.spacing(1)} 0 0;
    `,radioButtons:p.css`
      margin: 0;
    `,logsSection:p.css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    `,logRows:p.css`
      overflow-x: ${n?"unset":"scroll"};
      overflow-y: visible;
      width: 100%;
    `}),ct=500,dt=100,pn=(0,Ee.Z)(()=>({logsEnter:p.css`
      label: logsEnter;
      position: absolute;
      opacity: 0;
      height: auto;
      width: 100%;
    `,logsEnterActive:p.css`
      label: logsEnterActive;
      opacity: 1;
      transition: opacity ${ct}ms ease-out ${dt}ms;
    `,logsExit:p.css`
      label: logsExit;
      position: absolute;
      opacity: 1;
      height: auto;
      width: 100%;
    `,logsExitActive:p.css`
      label: logsExitActive;
      opacity: 0;
      transition: opacity ${ct}ms ease-out ${dt}ms;
    `}));function Xt(e){const{visible:n,children:s}=e,o=pn();return t.createElement(Ht.Z,{in:n,mountOnEnter:!0,unmountOnExit:!0,timeout:ct+dt,classNames:{enter:o.logsEnter,enterActive:o.logsEnterActive,exit:o.logsExit,exitActive:o.logsExitActive}},s)}var Je=l(41611);class hn extends t.PureComponent{constructor(){super(...arguments),this.onChangeTime=n=>{const{exploreId:s,updateTimeRange:o}=this.props;o({exploreId:s,absoluteRange:n})},this.getLogRowContext=async(n,s)=>{const{datasourceInstance:o,logsQueries:a}=this.props;if((0,k.Q4)(o)){const r=(a??[]).find(i=>i.refId===n.dataFrame.refId&&i.datasource!=null&&i.datasource.type===o.type);return o.getLogRowContext(n,s,r)}return[]},this.getLogRowContextUi=(n,s)=>{const{datasourceInstance:o}=this.props;return(0,k.xW)(o)&&o.getLogRowContextUi?o.getLogRowContextUi(n,s):t.createElement(t.Fragment,null)},this.showContextToggle=n=>{const{datasourceInstance:s}=this.props;return(0,k.Q4)(s)?s.showContextToggle(n):!1},this.getFieldLinks=(n,s,o)=>{const{splitOpenFn:a,range:r}=this.props;return(0,Je.a_)({field:n,rowIndex:s,splitOpenFn:a,range:r,dataFrame:o})}}render(){const{loading:n,loadingState:s,logRows:o,logsMeta:a,logsSeries:r,logsQueries:i,loadSupplementaryQueryData:c,setSupplementaryQueryEnabled:d,onClickFilterLabel:h,onClickFilterOutLabel:u,onStartScanning:g,onStopScanning:m,absoluteRange:v,timeZone:f,visibleRange:y,scanning:E,range:x,width:w,splitOpenFn:S,isLive:C,exploreId:T,addResultsToCache:M,clearCache:Q,scrollElement:J,logsVolume:N}=this.props;return o?t.createElement(t.Fragment,null,t.createElement(Xt,{visible:C},t.createElement(fe.U,{label:"Logs",loading:!1,isOpen:!0},t.createElement(At,{exploreId:T},F=>t.createElement($o,{logRows:o,timeZone:f,stopLive:F.stop,isPaused:this.props.isPaused,onPause:F.pause,onResume:F.resume})))),t.createElement(Xt,{visible:!C},t.createElement(dn,{exploreId:T,datasourceType:this.props.datasourceInstance?.type,logRows:o,logsMeta:a,logsSeries:r,logsVolumeEnabled:N.enabled,onSetLogsVolumeEnabled:F=>d(T,F,k.v8.LogsVolume),logsVolumeData:N.data,logsQueries:i,width:w,splitOpen:S,loading:n,loadingState:s,loadLogsVolumeData:()=>c(T,k.v8.LogsVolume),onChangeTime:this.onChangeTime,onClickFilterLabel:h,onClickFilterOutLabel:u,onStartScanning:g,onStopScanning:m,absoluteRange:v,visibleRange:y,timeZone:f,scanning:E,scanRange:x.raw,showContextToggle:this.showContextToggle,getRowContext:this.getLogRowContext,getLogRowContextUi:this.getLogRowContextUi,getFieldLinks:this.getFieldLinks,addResultsToCache:()=>M(T),clearCache:()=>Q(T),scrollElement:J,eventBus:this.props.eventBus}))):null}}function gn(e,{exploreId:n}){const o=e.explore[n],{logsResult:a,loading:r,scanning:i,datasourceInstance:c,isLive:d,isPaused:h,range:u,absoluteRange:g,supplementaryQueries:m}=o,v=(0,Ce.Z)(e.user),f=m[k.v8.LogsVolume];return{loading:r,logRows:a?.rows,logsMeta:a?.meta,logsSeries:a?.series,logsQueries:a?.queries,visibleRange:a?.visibleRange,scanning:i,timeZone:v,datasourceInstance:c,isLive:d,isPaused:h,range:u,absoluteRange:g,logsVolume:f}}const mn={updateTimeRange:Se.cD,addResultsToCache:W.K8,clearCache:W.LK,loadSupplementaryQueryData:W.W1,setSupplementaryQueryEnabled:W.z0},fn=(0,le.connect)(gn,mn)(hn);function yn(e){const{queryResponse:n,timeZone:s,enabled:o,setLogsSampleEnabled:a,datasourceInstance:r,queries:i,splitOpen:c}=e,d=(0,L.wW)(vn),h=m=>{a(m),(0,H.ff)("grafana_explore_logs_sample_toggle_clicked",{datasourceType:r?.type??"unknown",type:m?"open":"close"})},u=()=>{if(!(0,k.mN)(r,k.v8.LogsSample))return null;const m=i.map(f=>r.getSupplementaryQuery(k.v8.LogsSample,f)).filter(f=>!!f);if(!m.length)return null;const v=()=>{c({queries:m,datasourceUid:r.uid}),(0,H.ff)("grafana_explore_logs_sample_split_button_clicked",{datasourceType:r?.type??"unknown",queriesCount:m.length})};return t.createElement(O.zx,{size:"sm",className:d.logSamplesButton,onClick:v},"Open logs in split view")};let g;if(n===void 0)g=null;else if(n.error!==void 0)g=t.createElement(lt,{error:n.error,title:"Failed to load logs sample for this query"});else if(n.state===I.Gu.Loading)g=t.createElement("span",null,"Logs sample is loading...");else if(n.data.length===0||n.data[0].length===0)g=t.createElement("span",null,"No logs sample data.");else{const m=(0,nt.aB)(n.data);g=t.createElement(t.Fragment,null,t.createElement(u,null),t.createElement("div",{className:d.logContainer},t.createElement(Gt.w,{logRows:m.rows,dedupStrategy:D.Y4.none,showLabels:ee.Z.getBool(ie.showLabels,!1),showTime:ee.Z.getBool(ie.showTime,!0),wrapLogMessage:ee.Z.getBool(ie.wrapLogMessage,!0),prettifyLogMessage:ee.Z.getBool(ie.prettifyLogMessage,!1),timeZone:s,enableLogDetails:!0})))}return n?.state!==I.Gu.NotStarted?t.createElement(fe.U,{label:"Logs sample",isOpen:o,collapsible:!0,onToggle:h},g):null}const vn=e=>({logSamplesButton:p.css`
    position: absolute;
    top: ${e.spacing(1)};
    right: ${e.spacing(1)};
  `,logContainer:p.css`
    overflow-x: scroll;
  `}),En=()=>{const e=(0,L.wW)(xn);return t.createElement(t.Fragment,null,t.createElement(Et.l,{"data-testid":"explore-no-data",className:e.wrapper},t.createElement("span",{className:e.message},"No data")))},xn=e=>({wrapper:p.css`
    label: no-data-card;
    padding: ${e.spacing(3)};
    background: ${e.colors.background.primary};
    border-radius: ${e.shape.radius.default};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  `,message:p.css`
    font-size: ${e.typography.h2.fontSize};
    padding: ${e.spacing(4)};
    color: ${e.colors.text.disabled};
  `});var Sn=l(97097);const bn=()=>{const e=(0,L.l4)(),n=Te.Vt.hasPermission(R.AccessControlAction.DataSourcesCreate)&&Te.Vt.hasPermission(R.AccessControlAction.DataSourcesWrite),s="Explore requires at least one data source. Once you have added a data source, you can query it here.",o=t.createElement(t.Fragment,null,t.createElement(ye.J,{name:"rocket"}),t.createElement(t.Fragment,null," ProTip: You can also define data sources through configuration files. "),t.createElement("a",{href:"http://docs.grafana.org/administration/provisioning/#datasources?utm_source=explore",target:"_blank",rel:"noreferrer",className:"text-link"},"Learn more")),a=t.createElement(O.Qj,{size:"lg",href:"datasources/new",icon:"database",disabled:!n},"Add data source"),r=p.css`
    max-width: ${e.breakpoints.values.lg}px;
    margin-top: ${e.spacing(2)};
    align-self: center;
  `;return t.createElement(Sn._,{callToActionElement:a,className:r,footer:o,message:s})};var wn=l(86253),Cn=l(74538),Rn=l(85506);const Tn=e=>({warningText:p.css`
    label: warningText;
    font-size: ${e.typography.bodySmall.fontSize};
    color: ${e.colors.text.secondary};
  `});function Ln(e){const{dataFrames:n,range:s,splitOpenFn:o,withTraceView:a,datasourceType:r}=e,i=(0,Je.u8)(s,o),c=(0,L.l4)(),d=(0,L.wW)(Tn),h=(0,Ye.SM)({fieldConfig:{defaults:{},overrides:[]},data:n,replaceVariables:C=>C,theme:c}),{nodes:u}=(0,Rn.Y)(h),[g,m]=(0,wn.Z)(!1),v=()=>{m(),(0,H.ff)("grafana_traces_node_graph_panel_clicked",{datasourceType:r,grafana_version:P.v.buildInfo.version,isExpanded:!g})},{height:f}=(0,se.Z)(),y=(0,t.useRef)(null),[E,x]=(0,t.useState)(250);(0,t.useEffect)(()=>{if(y.current){const{top:C}=y.current.getBoundingClientRect();x(C)}},[y]);const w=f-E-32,S=a&&u[0]?.length>1e3?t.createElement("span",{className:d.warningText}," (",u[0].length," nodes, can be slow to load)"):null;return t.createElement(fe.U,{label:t.createElement("span",null,"Node graph",S," "),collapsible:a,isOpen:a?g:!0,onToggle:a?()=>v():void 0},t.createElement("div",{ref:y,style:a?{height:500}:{minHeight:600,height:w}},t.createElement(Cn.E,{dataFrames:h,getLinks:i})))}function zn(e,{exploreId:n}){return{range:e.explore[n].range}}const In=(0,le.connect)(zn,{})(Ln);var Pe=l(90158),Fn=l(99822),Nn=l(84457);const Dn=e=>{const n=(0,Ae.F)(e);return{getQueries:(0,Pe.P1)(n,s=>s.queries),getQueryResponse:(0,Pe.P1)(n,s=>s.queryResponse),getHistory:(0,Pe.P1)(n,s=>s.history),getEventBridge:(0,Pe.P1)(n,s=>s.eventBridge),getDatasourceInstanceSettings:(0,Pe.P1)(n,s=>(0,Be.ak)().getInstanceSettings(s.datasourceInstance?.uid))}},Pn=({exploreId:e})=>{const n=(0,R.useDispatch)(),{getQueries:s,getDatasourceInstanceSettings:o,getQueryResponse:a,getHistory:r,getEventBridge:i}=(0,t.useMemo)(()=>Dn(e),[e]),c=(0,R.useSelector)(s),d=(0,R.useSelector)(o),h=(0,R.useSelector)(a),u=(0,R.useSelector)(r),g=(0,R.useSelector)(i),m=(0,t.useCallback)(()=>{n((0,W.aA)(e))},[n,e]),v=(0,t.useCallback)(w=>{n((0,W.qV)({exploreId:e,queries:w}))},[n,e]),f=(0,t.useCallback)(w=>{v([...c,{...w,refId:(0,Fn.Hs)(c)}])},[v,c]),y=()=>{(0,H.ff)("grafana_explore_query_row_copy")},E=()=>{(0,H.ff)("grafana_explore_query_row_remove")},x=w=>{(0,H.ff)("grafana_query_row_toggle",w===void 0?{}:{queryEnabled:w})};return t.createElement(Nn.l,{dsSettings:d,queries:c,onQueriesChange:v,onAddQuery:f,onRunQueries:m,onQueryCopied:y,onQueryRemoved:E,onQueryToggled:x,data:h,app:Ne.zj.Explore,history:u,eventBus:g})};var qt=l(88144),_t=l(84952),Hn=l(75478),es=l(24799),$n=l(20112);const ut=" ",An=e=>{const n={},s=[],o=e.fields.filter(i=>!["Time"].includes(i.name));let a=o.find(i=>i.name==="__name__")?.values.toArray()??[];!a.length&&o.length&&o[0].values.length&&(a=Array(o[0].values.length).fill(""));const r=e.fields.filter(i=>!["__name__"].includes(i.name));return a.forEach(function(i,c){n[i]={};const d=n[i][c]??{};for(const h of r){const u=h.name;if(u!=="Time")if(typeof h?.display=="function"){const g=(0,$n.zc)(h?.display(h.values.get(c)));g?d[u]=g:u.includes("Value #")&&(d[u]=ut)}else console.warn("Field display method is missing!")}s.push({...d,__name__:i})}),s};var ts=l(8366),Mn=l(3823),Le=l(8180);const On=(e,n)=>({rowWrapper:p.css`
    position: relative;
    min-width: ${Xe};
    padding-right: 5px;
  `,rowValue:p.css`
    white-space: nowrap;
    overflow-x: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    display: block;
    padding-right: 10px;

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari and Opera */
    }

    &:before {
      pointer-events: none;
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: linear-gradient(to right, transparent calc(100% - 25px), ${e.colors.background.primary});
    }
  `,rowValuesWrap:p.css`
    padding-left: ${os};
    width: calc(${n} * ${Xe});
    display: flex;
  `}),Bn=({totalNumberOfValues:e,values:n,hideFieldsWithoutValues:s})=>{const o=(0,L.wW)(a=>On(a,e));return t.createElement("div",{role:"cell",className:o.rowValuesWrap},n?.map(a=>s&&(a.value===void 0||a.value===ut)?null:t.createElement("span",{key:a.key,className:o.rowWrapper},t.createElement("span",{className:o.rowValue},a.value))))},Wn=e=>{const n=e.isDark?"#ce9178":"#a31515",s=e.isDark?"#73bf69":"#56a64b";return{metricName:p.css`
      color: ${s};
    `,metricValue:p.css`
      color: ${n};
    `,expanded:p.css`
      display: block;
      text-indent: 1em;
    `}},kn=({value:e,index:n,length:s,isExpandedView:o})=>{const a=(0,L.wW)(Wn),r=e.key,i=e.value;return t.createElement("span",{className:o?a.expanded:"",key:n},t.createElement("span",{className:a.metricName},r),t.createElement("span",null,"="),t.createElement("span",null,'"'),t.createElement("span",{className:a.metricValue},i),t.createElement("span",null,'"'),n<s-1&&t.createElement("span",null,", "))},ss="20px",Xe="80px",os="25px",Qn=(e,n,s)=>({rowWrapper:p.css`
    border-bottom: 1px solid ${e.colors.border.medium};
    display: flex;
    position: relative;
    padding-left: 22px;
    ${s?"":"align-items: center;"}
    ${s?"":"height: 100%;"}
  `,copyToClipboardWrapper:p.css`
    position: absolute;
    left: 0;
    ${s?"":"bottom: 0;"}
    ${s?"top: 4px;":"top: 0;"}
    margin: auto;
    z-index: 1;
    height: 16px;
    width: 16px;
  `,rowLabelWrapWrap:p.css`
    position: relative;
    width: calc(100% - (${n} * ${Xe}) - ${os});
  `,rowLabelWrap:p.css`
    white-space: nowrap;
    overflow-x: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    padding-right: ${ss};

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari and Opera */
    }

    &:after {
      pointer-events: none;
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: linear-gradient(
        to right,
        transparent calc(100% - ${ss}),
        ${e.colors.background.primary}
      );
    }
  `});function Un(e){let n=[],s=[];for(const o in e)o in e&&e[o]&&!o.includes("Value")?n.push({key:o,value:e[o]}):o in e&&e[o]&&o.includes("Value")&&s.push({key:o,value:e[o]});return{values:s,attributeValues:n}}const Vn=({listItemData:e,listKey:n,totalNumberOfValues:s,valueLabels:o,isExpandedView:a})=>{const{__name__:r,...i}=e,[c,d]=(0,Mn.Z)(),h=o?.length??s,u=(0,L.wW)(E=>Qn(E,h,a)),{values:g,attributeValues:m}=Un(i),v=E=>E==="\u221E"?"+Inf":E,f=`${r}{${m.map(E=>E.key!=="le"?`${E.key}="${v(E.value)}"`:"")}}`,y=Boolean(o&&o?.length);return t.createElement(t.Fragment,null,o!==void 0&&a&&t.createElement(ns,{valueLabels:o,expanded:a}),t.createElement("div",{key:n,className:u.rowWrapper},t.createElement("span",{className:u.copyToClipboardWrapper},t.createElement(Le.h,{tooltip:"Copy to clipboard",onClick:()=>{(0,H.ff)("grafana_explore_prometheus_instant_query_ui_raw_toggle_expand"),d(f)},name:"copy"})),t.createElement("span",{role:"cell",className:u.rowLabelWrapWrap},t.createElement("div",{className:u.rowLabelWrap},t.createElement("span",null,r),t.createElement("span",null,"{"),t.createElement("span",null,m.map((E,x)=>t.createElement(kn,{isExpandedView:a,value:E,key:x,index:x,length:m.length}))),t.createElement("span",null,"}"))),t.createElement(Bn,{hideFieldsWithoutValues:y,totalNumberOfValues:h,values:g})))},Zn=(e,n)=>({valueNavigation:p.css`
      width: ${Xe};
      font-weight: bold;
    `,valueNavigationWrapper:p.css`
      display: flex;
      justify-content: flex-end;
    `,itemLabelsWrap:p.css`
      ${n?"":`border-bottom: 1px solid ${e.colors.border.medium}`};
    `}),Gn=e=>e.includes(ts.QG)?e.replace(ts.QG,""):e,ns=({valueLabels:e,expanded:n})=>{const s=(0,L.wW)(o=>Zn(o,n));return t.createElement("div",{className:s.itemLabelsWrap},t.createElement("div",{className:s.valueNavigationWrapper},e.map((o,a)=>t.createElement("span",{className:s.valueNavigation,key:o.name},Gn(o.name)))))},He={wrapper:p.css`
    height: 100%;
    overflow: scroll;
  `,switchWrapper:p.css`
    display: flex;
    flex-direction: row;
    margin-bottom: 0;
  `,switchLabel:p.css`
    margin-left: 15px;
    margin-bottom: 0;
  `,switch:p.css`
    margin-left: 10px;
  `,resultCount:p.css`
    margin-bottom: 4px;
  `,header:p.css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    font-size: 12px;
    line-height: 1.25;
  `},jn=480,Yn=2,Kn=e=>{const{tableResult:n}=e,s=(0,z.cloneDeep)(n),o=(0,t.useRef)(null),a=s.fields.filter(m=>m.name.includes("Value")),r=An(s),{width:i}=(0,se.Z)(),[c,d]=(0,t.useState)(i<=jn||a.length>Yn),h=()=>{d(!c);const m={isExpanded:!c};(0,H.ff)("grafana_explore_prometheus_instant_query_ui_raw_toggle_expand",m)};(0,t.useEffect)(()=>{o.current?.resetAfterIndex(0,!0)},[c]);const u=m=>{if(m<10){let y=0;for(let E=0;E<m;E++)y+=g(E,!0);return Math.min(600,y)}return 600},g=(m,v)=>{if(!v)return 32;const E=r[m];return 1.5*32+(Object.keys(E).length-a.length)*22};return t.createElement("section",null,t.createElement("header",{className:He.header},t.createElement(es.g,{className:He.switchWrapper,label:"Expand results",htmlFor:"isExpandedView"},t.createElement("div",{className:He.switch},t.createElement(we.r,{onChange:h,id:"isExpandedView",value:c,label:"Expand results"}))),t.createElement("div",{className:He.resultCount},"Result series: ",r.length)),t.createElement("div",{role:"table"},t.createElement(t.Fragment,null,a.length>1&&!c&&t.createElement(ns,{valueLabels:a,expanded:c}),t.createElement(Hn.S_,{ref:o,itemCount:r.length,className:He.wrapper,itemSize:m=>g(m,c),height:u(r.length),width:"100%"},({index:m,style:v})=>{let f;return c&&(f=a.filter(y=>{const E=r[m][y.name];return E&&E!==ut})),t.createElement("div",{role:"row",style:{...v,overflow:"hidden"}},t.createElement(Vn,{isExpandedView:c,valueLabels:f,totalNumberOfValues:a.length,listKey:r[m].__name__,listItemData:r[m]}))}))))};function Jn(e,{exploreId:n}){const o=e.explore[n],{loading:a,tableResult:r,rawPrometheusResult:i,range:c}=o,d=i?[i]:[],h=(r?.length??!1)>0&&i?r:d;return{loading:h&&h.length>0?!1:a,tableResult:h,range:c}}const Xn=(0,le.connect)(Jn,{});class qn extends t.PureComponent{constructor(n){super(n),this.onChangeResultsStyle=s=>{this.setState({resultsStyle:s})},this.renderLabel=()=>{const s=(0,p.css)({display:"flex",justifyContent:"space-between"}),o=U.zN.map(a=>({value:a,label:a[0].toUpperCase()+a.slice(1).replace(/_/," ")}));return t.createElement("div",{className:s},this.state.resultsStyle===R.TABLE_RESULTS_STYLE.raw?"Raw":"Table",t.createElement(Ke.S,{onClick:()=>{const a={state:this.state.resultsStyle===R.TABLE_RESULTS_STYLE.table?R.TABLE_RESULTS_STYLE.raw:R.TABLE_RESULTS_STYLE.table};(0,H.ff)("grafana_explore_prometheus_instant_query_ui_toggle_clicked",a)},size:"sm",options:o,value:this.state?.resultsStyle,onChange:this.onChangeResultsStyle}))},n.showRawPrometheus&&(this.state={resultsStyle:R.TABLE_RESULTS_STYLE.raw})}getMainFrame(n){return n?.find(s=>s.meta?.custom?.parentRowIndex===void 0)||n?.[0]}getTableHeight(){const{tableResult:n}=this.props,s=this.getMainFrame(n);return!s||s.length===0?200:Math.max(Math.min(600,s.length*35)+35)}render(){const{loading:n,onCellFilterAdded:s,tableResult:o,width:a,splitOpenFn:r,range:i,ariaLabel:c,timeZone:d}=this.props,h=this.getTableHeight(),u=a-Ie.vc.theme.panelPadding*2-_t.QO;let g=o;if(g?.length){g=(0,Ye.SM)({data:g,timeZone:d,theme:Ie.vc.theme2,replaceVariables:E=>E,fieldConfig:{defaults:{},overrides:[]}});for(const E of g)for(const x of E.fields)x.getLinks=w=>(0,Je.a_)({field:x,rowIndex:w.valueRowIndex,splitOpenFn:r,range:i,dataFrame:E})}const m=this.getMainFrame(g),v=g?.filter(E=>E.meta?.custom?.parentRowIndex!==void 0),f=this.state?.resultsStyle!==void 0?this.renderLabel():"Table",y=!this.state?.resultsStyle||this.state?.resultsStyle===R.TABLE_RESULTS_STYLE.table;return t.createElement(fe.U,{label:f,loading:n,isOpen:!0},m?.length&&t.createElement(t.Fragment,null,y&&t.createElement(qt.i,{ariaLabel:c,data:m,subData:v,width:u,height:h,onCellFilterAdded:s}),this.state?.resultsStyle===R.TABLE_RESULTS_STYLE.raw&&t.createElement(Kn,{tableResult:m})),!m?.length&&t.createElement(rt,{metaItems:[{value:"0 series returned"}]}))}}const _n=Xn(qn),ea=e=>{const{queryError:n}=e,s=!!n,o=s?100:10,a=n?"Query error":"Unknown error",r=n?.message||n?.data?.message||null;return t.createElement(St,{in:s,duration:o},t.createElement(ke.b,{severity:"error",title:a,topSpacing:2},r))};function ta(e){const n=(0,R.useSelector)(o=>o.explore[e.exploreId]?.queryResponse),s=n?.state===I.Gu.Error?n?.error:void 0;return s?.refId?null:t.createElement(ea,{queryError:s})}var de=l(13582),re=l(51424),sa=l(97759),$e=l(53217),as=l(14747),oa=l(22350),na=l(97379),aa=l(61744),pt=l(659),ht=l(3153);function ra(e,{exploreId:n}){const s=e.explore,{datasourceInstance:o}=s[n];return{exploreId:n,datasourceInstance:o}}const ia={changeDatasource:$t.zU,deleteHistoryItem:de.NV,commentHistoryItem:de.Ff,starHistoryItem:de.ev,setQueries:W.KO},la=(0,le.connect)(ra,ia),ca=e=>{const n="240px",s="170px",o=e.colors.background.secondary;return{queryCard:p.css`
      position: relative;
      display: flex;
      flex-direction: column;
      border: 1px solid ${e.colors.border.weak};
      margin: ${e.spacing(1)} 0;
      background-color: ${o};
      border-radius: ${e.shape.borderRadius(1)};
      .starred {
        color: ${e.v1.palette.orange};
      }
    `,cardRow:p.css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: ${e.spacing(1)};
      border-bottom: none;
      :first-of-type {
        border-bottom: 1px solid ${e.colors.border.weak};
        padding: ${e.spacing(.5,1)};
      }
      img {
        height: ${e.typography.fontSize}px;
        max-width: ${e.typography.fontSize}px;
        margin-right: ${e.spacing(1)};
      }
    `,queryActionButtons:p.css`
      max-width: ${s};
      display: flex;
      justify-content: flex-end;
      font-size: ${e.typography.size.base};
      button {
        margin-left: ${e.spacing(1)};
      }
    `,queryContainer:p.css`
      font-weight: ${e.typography.fontWeightMedium};
      width: calc(100% - ${n});
    `,updateCommentContainer:p.css`
      width: calc(100% + ${n});
      margin-top: ${e.spacing(1)};
    `,comment:p.css`
      overflow-wrap: break-word;
      font-size: ${e.typography.bodySmall.fontSize};
      font-weight: ${e.typography.fontWeightRegular};
      margin-top: ${e.spacing(.5)};
    `,commentButtonRow:p.css`
      > * {
        margin-right: ${e.spacing(1)};
      }
    `,textArea:p.css`
      width: 100%;
    `,runButton:p.css`
      max-width: ${s};
      display: flex;
      justify-content: flex-end;
      button {
        height: auto;
        padding: ${e.spacing(.5,2)};
        line-height: 1.4;
        span {
          white-space: normal !important;
        }
      }
    `,loader:p.css`
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${e.colors.background.secondary};
    `}};function da(e){const{query:n,commentHistoryItem:s,starHistoryItem:o,deleteHistoryItem:a,changeDatasource:r,exploreId:i,datasourceInstance:c,setQueries:d}=e,[h,u]=(0,t.useState)(!1),[g,m]=(0,t.useState)(n.comment),{value:v,loading:f}=(0,oa.Z)(async()=>{let b;try{b=await(0,We.F)().get(n.datasourceUid)}catch{}return{dsInstance:b,queries:await Promise.all(n.queries.map(async $=>{let G;if(b?.meta.mixed)try{G=await(0,We.F)().get($.datasource)}catch{}else G=b;return{query:$,datasource:G}}))}},[n.datasourceUid,n.queries]),y=(0,L.wW)(ca),E=async()=>{const b=n.queries,$=n.datasourceUid!==c?.uid;$&&await r(i,n.datasourceUid),d(i,b),(0,H.ff)("grafana_explore_query_history_run",{queryHistoryEnabled:P.v.queryHistoryEnabled,differentDataSource:$})},x=async()=>{const b=[...n.queries.map(G=>G.datasource?.type||"unknown")];if((0,H.ff)("grafana_explore_query_history_copy_query",{datasources:b,mixed:Boolean(v?.dsInstance?.meta.mixed)}),f||!v)return;const $=v.queries.map(G=>(0,re.OH)(G.query,G.datasource)).join(`
`);(0,pe.n9)($),(0,ht.WI)((0,pt.$l)((0,ae.AT)("Query copied to clipboard")))},w=async()=>{const b=(0,re.t2)(n);await(0,Ft.L)(b)},S=()=>{const b=$=>{a($),(0,ht.WI)((0,pt.$l)((0,ae.AT)("Query deleted"))),(0,H.ff)("grafana_explore_query_history_deleted",{queryHistoryEnabled:P.v.queryHistoryEnabled})};n.starred?_e.Z.publish(new et.VJ({title:"Delete",text:"Are you sure you want to permanently delete your starred query?",yesText:"Delete",icon:"trash-alt",onConfirm:()=>b(n.id)})):b(n.id)},C=()=>{o(n.id,!n.starred),(0,H.ff)("grafana_explore_query_history_starred",{queryHistoryEnabled:P.v.queryHistoryEnabled,newValue:!n.starred})},T=()=>u(!h),M=()=>{s(n.id,g),u(!1),(0,H.ff)("grafana_explore_query_history_commented",{queryHistoryEnabled:P.v.queryHistoryEnabled})},Q=()=>{u(!1),m(n.comment)},J=b=>{b.key==="Enter"&&(b.shiftKey||b.ctrlKey)&&M(),b.key==="Escape"&&Q()},N=t.createElement("div",{className:y.updateCommentContainer,"aria-label":g?"Update comment form":"Add comment form"},t.createElement(na.K,{onKeyDown:J,value:g,placeholder:g?void 0:"An optional description of what the query does.",onChange:b=>m(b.currentTarget.value),className:y.textArea}),t.createElement("div",{className:y.commentButtonRow},t.createElement(O.zx,{onClick:M},"Save comment"),t.createElement(O.zx,{variant:"secondary",onClick:Q},"Cancel"))),F=t.createElement("div",{className:y.queryActionButtons},t.createElement(Le.h,{name:"comment-alt",onClick:T,title:n.comment?.length>0?"Edit comment":"Add comment"}),t.createElement(Le.h,{name:"copy",onClick:x,title:"Copy query to clipboard"}),v?.dsInstance&&t.createElement(Le.h,{name:"share-alt",onClick:w,title:"Copy shortened link to clipboard"}),t.createElement(Le.h,{name:"trash-alt",title:"Delete query",onClick:S}),t.createElement(Le.h,{name:n.starred?"favorite":"star",iconType:n.starred?"mono":"default",onClick:C,title:n.starred?"Unstar query":"Star query"}));return t.createElement("div",{className:y.queryCard},t.createElement("div",{className:y.cardRow},t.createElement(rs,{dsApi:v?.dsInstance,size:"sm"}),F),t.createElement("div",{className:(0,p.cx)(y.cardRow)},t.createElement("div",{className:y.queryContainer},v?.queries.map((b,$)=>t.createElement(pa,{query:b,key:`${b}-${$}`,showDsInfo:v?.dsInstance?.meta.mixed})),!h&&n.comment&&t.createElement("div",{"aria-label":"Query comment",className:y.comment},n.comment),h&&N),!h&&t.createElement("div",{className:y.runButton},t.createElement(O.zx,{variant:"secondary",onClick:E,disabled:!v?.dsInstance||v.queries.some(b=>!b.datasource)},c?.uid===n.datasourceUid?"Run query":"Switch data source and run query"))),f&&t.createElement(aa.u,{text:"loading...",className:y.loader}))}const ua=e=>({queryRow:p.css`
    border-top: 1px solid ${e.colors.border.weak};
    display: flex;
    flex-direction: row;
    padding: 4px 0px;
    gap: 4px;
    :first-child {
      border-top: none;
    }
  `,dsInfoContainer:p.css`
    display: flex;
    align-items: center;
  `,queryText:p.css`
    word-break: break-all;
  `}),pa=({query:e,showDsInfo:n=!1})=>{const s=(0,L.wW)(ua);return t.createElement("div",{className:s.queryRow},n&&t.createElement("div",{className:s.dsInfoContainer},t.createElement(rs,{dsApi:e.datasource,size:"md"}),": "),t.createElement("span",{"aria-label":"Query text",className:s.queryText},(0,re.OH)(e.query,e.datasource)))},ha=e=>n=>p.css`
    display: flex;
    align-items: center;
    font-size: ${n.typography[e==="sm"?"bodySmall":"body"].fontSize};
    font-weight: ${n.typography.fontWeightMedium};
    white-space: nowrap;
  `;function rs({dsApi:e,size:n}){const s=(0,t.useCallback)(a=>ha(n)(a),[n]),o=(0,L.wW)(s);return t.createElement("div",{className:o},t.createElement("img",{src:e?.meta.info.logos.small||"public/img/icn-datasource.svg",alt:e?.type||"Data source does not exist anymore","aria-label":"Data source icon"}),t.createElement("div",{"aria-label":"Data source name"},e?.name||"Data source does not exist anymore"))}const is=la(da),ga=(e,n)=>{const s=e.isLight?e.v1.palette.gray5:e.v1.palette.dark4;return{container:p.css`
      display: flex;
    `,labelSlider:p.css`
      font-size: ${e.typography.bodySmall.fontSize};
      &:last-of-type {
        margin-top: ${e.spacing(3)};
      }
      &:first-of-type {
        font-weight: ${e.typography.fontWeightMedium};
        margin-bottom: ${e.spacing(2)};
      }
    `,containerContent:p.css`
      /* 134px is based on the width of the Query history tabs bar, so the content is aligned to right side of the tab */
      width: calc(100% - 134px);
    `,containerSlider:p.css`
      width: 129px;
      margin-right: ${e.spacing(1)};
    `,fixedSlider:p.css`
      position: fixed;
    `,slider:p.css`
      bottom: 10px;
      height: ${n-180}px;
      width: 129px;
      padding: ${e.spacing(1)} 0;
    `,selectors:p.css`
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    `,filterInput:p.css`
      margin-bottom: ${e.spacing(1)};
    `,multiselect:p.css`
      width: 100%;
      margin-bottom: ${e.spacing(1)};
      .gf-form-select-box__multi-value {
        background-color: ${s};
        padding: ${e.spacing(.25,.5,.25,1)};
        border-radius: ${e.shape.borderRadius(1)};
      }
    `,sort:p.css`
      width: 170px;
    `,sessionName:p.css`
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin-top: ${e.spacing(3)};
      h4 {
        margin: 0 10px 0 0;
      }
    `,heading:p.css`
      font-size: ${e.typography.h4.fontSize};
      margin: ${e.spacing(2,.25,1,.25)};
    `,footer:p.css`
      height: 60px;
      margin: ${e.spacing(3)} auto;
      display: flex;
      justify-content: center;
      font-weight: ${e.typography.fontWeightLight};
      font-size: ${e.typography.bodySmall.fontSize};
      a {
        font-weight: ${e.typography.fontWeightMedium};
        margin-left: ${e.spacing(.25)};
      }
    `,queries:p.css`
      font-size: ${e.typography.bodySmall.fontSize};
      font-weight: ${e.typography.fontWeightRegular};
      margin-left: ${e.spacing(.5)};
    `}};function ma(e){const{queries:n,totalQueries:s,loading:o,richHistorySearchFilters:a,updateFilters:r,clearRichHistoryResults:i,loadMoreRichHistory:c,richHistorySettings:d,exploreId:h,height:u,activeDatasourceInstance:g}=e,m=(0,L.wW)((0,t.useCallback)(x=>ga(x,u),[u])),v=(0,re.DR)();if((0,t.useEffect)(()=>{const x=!d.activeDatasourceOnly&&d.lastUsedDatasourceFilters?d.lastUsedDatasourceFilters:[g],w={search:"",sortOrder:re.As.Descending,datasourceFilters:x,from:0,to:d.retentionPeriod,starred:!1};return r(w),()=>{i()}},[]),!a)return t.createElement("span",null,"Loading...");const f=(0,re.k4)(n,a.sortOrder),y=cs(),E=n.length&&n.length!==s;return t.createElement("div",{className:m.container},t.createElement("div",{className:m.containerSlider},t.createElement("div",{className:m.fixedSlider},t.createElement("div",{className:m.labelSlider},"Filter history"),t.createElement("div",{className:m.labelSlider},(0,re.bQ)(a.from)),t.createElement("div",{className:m.slider},t.createElement(sa.U,{tooltipAlwaysVisible:!1,min:0,max:d.retentionPeriod,value:[a.from,a.to],orientation:"vertical",formatTooltipResult:re.bQ,reverse:!0,onAfterChange:x=>{r({from:x[0],to:x[1]})}})),t.createElement("div",{className:m.labelSlider},(0,re.bQ)(a.to)))),t.createElement("div",{className:m.containerContent},t.createElement("div",{className:m.selectors},!d.activeDatasourceOnly&&t.createElement($e.NU,{className:m.multiselect,options:v.map(x=>({value:x.name,label:x.name})),value:a.datasourceFilters,placeholder:"Filter queries for data sources(s)","aria-label":"Filter queries for data sources(s)",onChange:x=>{r({datasourceFilters:x.map(w=>w.value)})}}),t.createElement("div",{className:m.filterInput},t.createElement(as.H,{escapeRegex:!1,placeholder:"Search queries",value:a.search,onChange:x=>r({search:x})})),t.createElement("div",{"aria-label":"Sort queries",className:m.sort},t.createElement($e.Ph,{value:y.filter(x=>x.value===a.sortOrder),options:y,placeholder:"Sort queries by",onChange:x=>r({sortOrder:x.value})}))),o&&t.createElement("span",null,"Loading results..."),!o&&Object.keys(f).map(x=>t.createElement("div",{key:x},t.createElement("div",{className:m.heading},x," ",t.createElement("span",{className:m.queries},E?"Displaying ":"",f[x].length," queries")),f[x].map(w=>t.createElement(is,{query:w,key:w.id,exploreId:h})))),E?t.createElement("div",null,"Showing ",n.length," of ",s," ",t.createElement(O.zx,{onClick:c},"Load more")):null,t.createElement("div",{className:m.footer},P.v.queryHistoryEnabled?"":"The history is local to your browser and is not shared with others.")))}var fa=l(66719);const ya=e=>({container:p.css`
      font-size: ${e.typography.bodySmall.fontSize};
    `,spaceBetween:p.css`
      margin-bottom: ${e.spacing(3)};
    `,input:p.css`
      max-width: 200px;
    `,bold:p.css`
      font-weight: ${e.typography.fontWeightBold};
    `,bottomMargin:p.css`
      margin-bottom: ${e.spacing(1)};
    `}),ls=[{value:2,label:"2 days"},{value:5,label:"5 days"},{value:7,label:"1 week"},{value:14,label:"2 weeks"}];function va(e){const{retentionPeriod:n,starredTabAsFirstTab:s,activeDatasourceOnly:o,onChangeRetentionPeriod:a,toggleStarredTabAsFirstTab:r,toggleactiveDatasourceOnly:i,deleteRichHistory:c}=e,d=(0,L.wW)(ya),h=ls.find(g=>g.value===n),u=()=>{_e.Z.publish(new et.VJ({title:"Delete",text:"Are you sure you want to permanently delete your query history?",yesText:"Delete",icon:"trash-alt",onConfirm:()=>{c(),(0,ht.WI)((0,pt.$l)((0,ae.AT)("Query history deleted")))}}))};return t.createElement("div",{className:d.container},(0,Fe.X)().changeRetention?t.createElement(es.g,{label:"History time span",description:`Select the period of time for which Grafana will save your query history. Up to ${fa.H6} entries will be stored.`},t.createElement("div",{className:d.input},t.createElement($e.Ph,{value:h,options:ls,onChange:a}))):t.createElement(ke.b,{severity:"info",title:"History time span"},"Grafana will keep entries up to ",h?.label,"."),t.createElement(he._,{label:"Change the default active tab from \u201CQuery history\u201D to \u201CStarred\u201D",className:d.spaceBetween},t.createElement(we.x,{id:"explore-query-history-settings-default-active-tab",value:s,onChange:r})),(0,Fe.X)().onlyActiveDataSource&&t.createElement(he._,{label:"Only show queries for data source currently active in Explore",className:d.spaceBetween},t.createElement(we.x,{id:"explore-query-history-settings-data-source-behavior",value:o,onChange:i})),(0,Fe.X)().clearHistory&&t.createElement("div",null,t.createElement("div",{className:d.bold},"Clear query history"),t.createElement("div",{className:d.bottomMargin},"Delete all of your query history, permanently."),t.createElement(O.zx,{variant:"destructive",onClick:u},"Clear query history")))}const Ea=e=>{const n=e.isLight?e.v1.palette.gray5:e.v1.palette.dark4;return{container:p.css`
      display: flex;
    `,containerContent:p.css`
      width: 100%;
    `,selectors:p.css`
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    `,multiselect:p.css`
      width: 100%;
      margin-bottom: ${e.spacing(1)};
      .gf-form-select-box__multi-value {
        background-color: ${n};
        padding: ${e.spacing(.25,.5,.25,1)};
        border-radius: ${e.shape.borderRadius(1)};
      }
    `,filterInput:p.css`
      margin-bottom: ${e.spacing(1)};
    `,sort:p.css`
      width: 170px;
    `,footer:p.css`
      height: 60px;
      margin-top: ${e.spacing(3)};
      display: flex;
      justify-content: center;
      font-weight: ${e.typography.fontWeightLight};
      font-size: ${e.typography.bodySmall.fontSize};
      a {
        font-weight: ${e.typography.fontWeightMedium};
        margin-left: ${e.spacing(.25)};
      }
    `}};function xa(e){const{updateFilters:n,clearRichHistoryResults:s,loadMoreRichHistory:o,activeDatasourceInstance:a,richHistorySettings:r,queries:i,totalQueries:c,loading:d,richHistorySearchFilters:h,exploreId:u}=e,g=(0,L.wW)(Ea),m=(0,re.DR)();if((0,t.useEffect)(()=>{const f=r.activeDatasourceOnly&&r.lastUsedDatasourceFilters?r.lastUsedDatasourceFilters:[a],y={search:"",sortOrder:re.As.Descending,datasourceFilters:f,from:0,to:r.retentionPeriod,starred:!0};return n(y),()=>{s()}},[]),!h)return t.createElement("span",null,"Loading...");const v=cs();return t.createElement("div",{className:g.container},t.createElement("div",{className:g.containerContent},t.createElement("div",{className:g.selectors},!r.activeDatasourceOnly&&t.createElement($e.NU,{className:g.multiselect,options:m.map(f=>({value:f.name,label:f.name})),value:h.datasourceFilters,placeholder:"Filter queries for data sources(s)","aria-label":"Filter queries for data sources(s)",onChange:f=>{n({datasourceFilters:f.map(y=>y.value)})}}),t.createElement("div",{className:g.filterInput},t.createElement(as.H,{escapeRegex:!1,placeholder:"Search queries",value:h.search,onChange:f=>n({search:f})})),t.createElement("div",{"aria-label":"Sort queries",className:g.sort},t.createElement($e.Ph,{value:v.filter(f=>f.value===h.sortOrder),options:v,placeholder:"Sort queries by",onChange:f=>n({sortOrder:f.value})}))),d&&t.createElement("span",null,"Loading results..."),!d&&i.map(f=>t.createElement(is,{query:f,key:f.id,exploreId:u})),i.length&&i.length!==c?t.createElement("div",null,"Showing ",i.length," of ",c," ",t.createElement(O.zx,{onClick:o},"Load more")):null,t.createElement("div",{className:g.footer},P.v.queryHistoryEnabled?"":"The history is local to your browser and is not shared with others.")))}var gt=(e=>(e.RichHistory="Query history",e.Starred="Starred",e.Settings="Settings",e))(gt||{});const cs=()=>[{label:"Newest first",value:re.As.Descending},{label:"Oldest first",value:re.As.Ascending},{label:"Data source A-Z",value:re.As.DatasourceAZ},{label:"Data source Z-A",value:re.As.DatasourceZA}].filter(e=>(0,Fe.X)().availableFilters.includes(e.value));class Sa extends t.PureComponent{constructor(){super(...arguments),this.state={loading:!1},this.updateSettings=n=>{this.props.updateHistorySettings({...this.props.richHistorySettings,...n})},this.updateFilters=n=>{const s={...this.props.richHistorySearchFilters,...n,page:1};this.props.updateHistorySearchFilters(this.props.exploreId,s),this.loadRichHistory()},this.clearResults=()=>{this.props.clearRichHistoryResults(this.props.exploreId)},this.loadRichHistory=(0,z.debounce)(()=>{this.props.loadRichHistory(this.props.exploreId),this.setState({loading:!0})},300),this.onChangeRetentionPeriod=n=>{n.value!==void 0&&this.updateSettings({retentionPeriod:n.value})},this.toggleStarredTabAsFirstTab=()=>this.updateSettings({starredTabAsFirstTab:!this.props.richHistorySettings.starredTabAsFirstTab}),this.toggleActiveDatasourceOnly=()=>this.updateSettings({activeDatasourceOnly:!this.props.richHistorySettings.activeDatasourceOnly})}componentDidUpdate(n){n.richHistory!==this.props.richHistory&&this.setState({loading:!1})}render(){const{richHistory:n,richHistoryTotal:s,height:o,exploreId:a,deleteRichHistory:r,onClose:i,firstTab:c,activeDatasourceInstance:d}=this.props,{loading:h}=this.state,u={label:"Query history",value:"Query history",content:t.createElement(ma,{queries:n,totalQueries:s||0,loading:h,updateFilters:this.updateFilters,clearRichHistoryResults:()=>this.props.clearRichHistoryResults(this.props.exploreId),loadMoreRichHistory:()=>this.props.loadMoreRichHistory(this.props.exploreId),activeDatasourceInstance:d,richHistorySettings:this.props.richHistorySettings,richHistorySearchFilters:this.props.richHistorySearchFilters,exploreId:a,height:o}),icon:"history"},g={label:"Starred",value:"Starred",content:t.createElement(xa,{queries:n,totalQueries:s||0,loading:h,activeDatasourceInstance:d,updateFilters:this.updateFilters,clearRichHistoryResults:()=>this.props.clearRichHistoryResults(this.props.exploreId),loadMoreRichHistory:()=>this.props.loadMoreRichHistory(this.props.exploreId),richHistorySettings:this.props.richHistorySettings,richHistorySearchFilters:this.props.richHistorySearchFilters,exploreId:a}),icon:"star"},m={label:"Settings",value:"Settings",content:t.createElement(va,{retentionPeriod:this.props.richHistorySettings.retentionPeriod,starredTabAsFirstTab:this.props.richHistorySettings.starredTabAsFirstTab,activeDatasourceOnly:this.props.richHistorySettings.activeDatasourceOnly,onChangeRetentionPeriod:this.onChangeRetentionPeriod,toggleStarredTabAsFirstTab:this.toggleStarredTabAsFirstTab,toggleactiveDatasourceOnly:this.toggleActiveDatasourceOnly,deleteRichHistory:r}),icon:"sliders-v-alt"};let v=[u,g,m];return t.createElement(bt.W,{tabs:v,onClose:i,defaultTab:c,closeIconTooltip:"Close query history"})}}const ba=(0,L.HE)(Sa);function wa(e,{exploreId:n}){const s=e.explore,o=s[n],a=o.richHistorySearchFilters,r=s.richHistorySettings,{datasourceInstance:i}=o,c=r?.starredTabAsFirstTab?gt.Starred:gt.RichHistory,{richHistory:d,richHistoryTotal:h}=o;return{richHistory:d,richHistoryTotal:h,firstTab:c,activeDatasourceInstance:i.name,richHistorySettings:r,richHistorySearchFilters:a}}const Ca={initRichHistory:de.sO,loadRichHistory:de.TV,loadMoreRichHistory:de.io,clearRichHistoryResults:de.Cs,updateHistorySettings:de.ch,updateHistorySearchFilters:de.KZ,deleteRichHistory:de.ik},Ra=(0,le.connect)(wa,Ca);function Ta(e){const n=(0,L.l4)(),[s,o]=(0,t.useState)(n.components.horizontalDrawer.defaultHeight),{richHistory:a,richHistoryTotal:r,width:i,firstTab:c,activeDatasourceInstance:d,exploreId:h,deleteRichHistory:u,initRichHistory:g,loadRichHistory:m,loadMoreRichHistory:v,clearRichHistoryResults:f,richHistorySettings:y,updateHistorySettings:E,richHistorySearchFilters:x,updateHistorySearchFilters:w,onClose:S}=e;return(0,t.useEffect)(()=>{g(),(0,H.ff)("grafana_explore_query_history_opened",{queryHistoryEnabled:P.v.queryHistoryEnabled})},[g]),y?t.createElement(zt,{width:i,onResize:(C,T,M)=>{o(Number(M.style.height.slice(0,-2)))}},t.createElement(ba,{richHistory:a,richHistoryTotal:r,firstTab:c,activeDatasourceInstance:d,exploreId:h,onClose:S,height:s,deleteRichHistory:u,richHistorySettings:y,richHistorySearchFilters:x,updateHistorySettings:E,updateHistorySearchFilters:w,loadRichHistory:m,loadMoreRichHistory:v,clearRichHistoryResults:f})):t.createElement("span",null,"Loading...")}const La=Ra(Ta),za=e=>({containerMargin:p.css`
      margin-top: ${e.spacing(2)};
    `});function Ia(e){const n=(0,L.l4)(),s=za(n);return t.createElement("div",{className:s.containerMargin},t.createElement(kt.Lh,null,!e.addQueryRowButtonHidden&&t.createElement(O.zx,{variant:"secondary","aria-label":"Add row button",onClick:e.onClickAddQueryRowButton,disabled:e.addQueryRowButtonDisabled,icon:"plus"},"Add query"),!e.richHistoryRowButtonHidden&&t.createElement(O.zx,{variant:"secondary","aria-label":"Rich history button",className:(0,p.cx)({["explore-active-button"]:e.richHistoryButtonActive}),onClick:e.onClickRichHistoryButton,icon:"history"},"Query history"),t.createElement(O.zx,{variant:"secondary","aria-label":"Query inspector button",className:(0,p.cx)({["explore-active-button"]:e.queryInspectorButtonActive}),onClick:e.onClickQueryInspectorButton,icon:"info-circle"},"Inspector")))}function Fa(e,{exploreId:n}){const o=e.explore[n],{loading:a,tableResult:r,range:i}=o;return{loading:r&&r.length>0?!1:a,tableResult:r,range:i}}const Na=(0,le.connect)(Fa,{});class Da extends t.PureComponent{getMainFrame(n){return n?.find(s=>s.meta?.custom?.parentRowIndex===void 0)||n?.[0]}getTableHeight(){const{tableResult:n}=this.props,s=this.getMainFrame(n);return!s||s.length===0?200:Math.min(600,Math.max(s.length*35,300)+35)}render(){const{loading:n,onCellFilterAdded:s,tableResult:o,width:a,splitOpenFn:r,range:i,ariaLabel:c,timeZone:d}=this.props,h=this.getTableHeight(),u=a-Ie.vc.theme.panelPadding*2-_t.QO;let g=o;if(g?.length){g=(0,Ye.SM)({data:g,timeZone:d,theme:Ie.vc.theme2,replaceVariables:f=>f,fieldConfig:{defaults:{},overrides:[]}});for(const f of g)for(const y of f.fields)y.getLinks=E=>(0,Je.a_)({field:y,rowIndex:E.valueRowIndex,splitOpenFn:r,range:i,dataFrame:f})}const m=this.getMainFrame(g),v=g?.filter(f=>f.meta?.custom?.parentRowIndex!==void 0);return t.createElement(fe.U,{label:"Table",loading:n,isOpen:!0},m?.length?t.createElement(qt.i,{ariaLabel:c,data:m,subData:v,width:u,height:h,onCellFilterAdded:s}):t.createElement(rt,{metaItems:[{value:"0 series returned"}]}))}}const Pa=Na(Da);var Ha=l(94619),$a=l(72169),Aa=l(93183),Ma=l(75151),Oa=l(335);const Ba=e=>({container:p.css`
    label: container;
    margin-bottom: ${e.spacing(1)};
    background-color: ${e.colors.background.primary};
    border: 1px solid ${e.colors.border.medium};
    position: relative;
    border-radius: ${e.shape.radius.default};
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 1 0;
    padding: ${P.v.featureToggles.newTraceView?0:e.spacing(e.components.panel.padding)};
  `});function Wa(e){const n=e.dataFrames[0],s=(0,L.wW)(Ba),{dataFrames:o,splitOpenFn:a,exploreId:r,scrollElement:i,topOfViewRef:c,queryResponse:d}=e,h=(0,t.useMemo)(()=>(0,Oa.N)(n),[n]),{search:u,setSearch:g,spanFindMatches:m}=(0,Ma.R)(h?.spans),[v,f]=(0,t.useState)(""),[y,E]=(0,t.useState)(""),x=(0,R.useSelector)(S=>S.explore[e.exploreId]?.datasourceInstance??void 0),w=x?x?.type:"unknown";return h?t.createElement("div",{className:s.container},!P.v.featureToggles.newTraceView&&t.createElement($a.Z,{navigable:!0,searchValue:u,setSearch:g,spanFindMatches:m,searchBarSuffix:y,setSearchBarSuffix:E,focusedSpanIdForSearch:v,setFocusedSpanIdForSearch:f,datasourceType:w}),t.createElement(Ha.m,{exploreId:r,dataFrames:o,splitOpenFn:a,scrollElement:i,traceProp:h,spanFindMatches:m,search:u,focusedSpanIdForSearch:v,queryResponse:d,datasource:x,topOfViewRef:c,topOfViewRefType:Aa.l4.Explore})):null}var mt=l(93713);const ka=e=>({exploreMain:p.css`
      label: exploreMain;
      // Is needed for some transition animations to work.
      position: relative;
      margin-top: 21px;
    `,button:p.css`
      label: button;
      margin: 1em 4px 0 0;
    `,queryContainer:p.css`
      label: queryContainer;
      // Need to override normal css class and don't want to count on ordering of the classes in html.
      height: auto !important;
      flex: unset !important;
      display: unset !important;
      padding: ${e.spacing(1)};
    `,exploreContainer:p.css`
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      padding: ${e.spacing(2)};
      padding-top: 0;
    `});var Qa=(e=>(e[e.RichHistory=0]="RichHistory",e[e.QueryInspector=1]="QueryInspector",e))(Qa||{});class Ua extends t.PureComponent{constructor(n){super(n),this.topOfViewRef=(0,t.createRef)(),this.onChangeTime=s=>{const{updateTimeRange:o,exploreId:a}=this.props;o({exploreId:a,rawRange:s})},this.onClickExample=s=>{this.props.setQueries(this.props.exploreId,[s])},this.onCellFilterAdded=s=>{const{value:o,key:a,operator:r}=s;r===xt.PT&&this.onClickFilterLabel(a,o),r===xt.tE&&this.onClickFilterOutLabel(a,o)},this.onClickFilterLabel=(s,o)=>{this.onModifyQueries({type:"ADD_FILTER",options:{key:s,value:o}})},this.onClickFilterOutLabel=(s,o)=>{this.onModifyQueries({type:"ADD_FILTER_OUT",options:{key:s,value:o}})},this.onClickAddQueryRowButton=()=>{const{exploreId:s,queryKeys:o}=this.props;this.props.addQueryRow(s,o.length)},this.onMakeAbsoluteTime=()=>{const{makeAbsoluteTime:s}=this.props;s()},this.onModifyQueries=s=>{const o=async(a,r)=>{const{datasource:i}=a;if(i==null)return a;const c=await(0,We.F)().get(i);return c.modifyQuery?c.modifyQuery(a,r):a};this.props.modifyQueries(this.props.exploreId,s,o)},this.onResize=s=>{this.props.changeSize(this.props.exploreId,s)},this.onStartScanning=()=>{this.props.scanStart(this.props.exploreId)},this.onStopScanning=()=>{this.props.scanStopAction({exploreId:this.props.exploreId})},this.onUpdateTimeRange=s=>{const{exploreId:o,updateTimeRange:a}=this.props;a({exploreId:o,absoluteRange:s})},this.toggleShowRichHistory=()=>{this.setState(s=>({openDrawer:s.openDrawer===0?void 0:0}))},this.toggleShowQueryInspector=()=>{this.setState(s=>({openDrawer:s.openDrawer===1?void 0:1}))},this.onSplitOpen=s=>async o=>{if(this.props.splitOpen(o),o&&this.props.datasourceInstance){const a=(await(0,We.F)().get(o.datasourceUid)).type,r=this.props.datasourceInstance.uid===Oe.D?(0,z.get)(this.props.queries,"0.datasource.type"):this.props.datasourceInstance.type,i={origin:"panel",panelType:s,source:r,target:a,exploreId:this.props.exploreId};(0,H.ff)("grafana_explore_split_view_opened",i)}},this.memoizedGetNodeGraphDataFrames=(0,Ee.Z)(ys.Ee),this.state={openDrawer:void 0},this.graphEventBus=n.eventBus.newScopedBus("graph",{onlyLocal:!1}),this.logsEventBus=n.eventBus.newScopedBus("logs",{onlyLocal:!1})}componentDidMount(){this.absoluteTimeUnsubsciber=_e.Z.subscribe(et.QI,this.onMakeAbsoluteTime)}componentWillUnmount(){this.absoluteTimeUnsubsciber?.unsubscribe()}renderEmptyState(n){return t.createElement("div",{className:(0,p.cx)(n)},t.createElement(bn,null))}renderNoData(){return t.createElement(En,null)}renderCompactUrlWarning(){return t.createElement(St,{in:!0,duration:100},t.createElement(ke.b,{severity:"warning",title:"Compact URL Deprecation Notice",topSpacing:2},"The URL that brought you here was a compact URL - this format will soon be deprecated. Please replace the URL previously saved with the URL available now."))}renderGraphPanel(n){const{graphResult:s,absoluteRange:o,timeZone:a,queryResponse:r,loading:i,showFlameGraph:c}=this.props;return t.createElement(Lo,{loading:i,data:s,height:c?180:400,width:n,absoluteRange:o,timeZone:a,onChangeTime:this.onUpdateTimeRange,annotations:r.annotations,splitOpenFn:this.onSplitOpen("graph"),loadingState:r.state,eventBus:this.graphEventBus})}renderTablePanel(n){const{exploreId:s,timeZone:o}=this.props;return t.createElement(Pa,{ariaLabel:Me.wl.pages.Explore.General.table,width:n,exploreId:s,onCellFilterAdded:this.onCellFilterAdded,timeZone:o,splitOpenFn:this.onSplitOpen("table")})}renderRawPrometheus(n){const{exploreId:s,datasourceInstance:o,timeZone:a}=this.props;return t.createElement(_n,{showRawPrometheus:!0,ariaLabel:Me.wl.pages.Explore.General.table,width:n,exploreId:s,onCellFilterAdded:o?.modifyQuery?this.onCellFilterAdded:void 0,timeZone:a,splitOpenFn:this.onSplitOpen("table")})}renderLogsPanel(n){const{exploreId:s,syncedTimes:o,theme:a,queryResponse:r}=this.props,i=parseInt(a.spacing(2).slice(0,-2),10);return t.createElement(fn,{exploreId:s,loadingState:r.state,syncedTimes:o,width:n-i,onClickFilterLabel:this.onClickFilterLabel,onClickFilterOutLabel:this.onClickFilterOutLabel,onStartScanning:this.onStartScanning,onStopScanning:this.onStopScanning,scrollElement:this.scrollElement,eventBus:this.logsEventBus,splitOpenFn:this.onSplitOpen("logs")})}renderLogsSamplePanel(){const{logsSample:n,timeZone:s,setSupplementaryQueryEnabled:o,exploreId:a,datasourceInstance:r,queries:i}=this.props;return t.createElement(yn,{queryResponse:n.data,timeZone:s,enabled:n.enabled,queries:i,datasourceInstance:r,splitOpen:this.onSplitOpen("logsSample"),setLogsSampleEnabled:c=>o(a,c,k.v8.LogsSample)})}renderNodeGraphPanel(){const{exploreId:n,showTrace:s,queryResponse:o,datasourceInstance:a}=this.props,r=a?a?.type:"unknown";return t.createElement(In,{dataFrames:this.memoizedGetNodeGraphDataFrames(o.series),exploreId:n,withTraceView:s,datasourceType:r,splitOpenFn:this.onSplitOpen("nodeGraph")})}renderFlameGraphPanel(){const{queryResponse:n}=this.props;return t.createElement(no,{dataFrames:n.flameGraphFrames})}renderTraceViewPanel(){const{queryResponse:n,exploreId:s}=this.props,o=n.series.filter(a=>a.meta?.preferredVisualisationType==="trace");return o.length&&t.createElement(Wa,{exploreId:s,dataFrames:o,splitOpenFn:this.onSplitOpen("traceView"),scrollElement:this.scrollElement,queryResponse:n,topOfViewRef:this.topOfViewRef})}render(){const{datasourceInstance:n,datasourceMissing:s,exploreId:o,graphResult:a,queryResponse:r,isLive:i,theme:c,showMetrics:d,showTable:h,showRawPrometheus:u,showLogs:g,showTrace:m,showNodeGraph:v,showFlameGraph:f,timeZone:y,isFromCompactUrl:E,showLogsSample:x}=this.props,{openDrawer:w}=this.state,S=ka(c),C=r&&r.state!==I.Gu.NotStarted,T=w===0,M=!(0,Fe.X)().queryHistoryAvailable,Q=w===1,J=r.state===I.Gu.Done&&[r.logsFrames,r.graphFrames,r.nodeGraphFrames,r.flameGraphFrames,r.tableFrames,r.rawPrometheusFrames,r.traceFrames].every(N=>N.length===0);return t.createElement(vt.$,{testId:Me.wl.pages.Explore.General.scrollView,autoHeightMin:"100%",scrollRefCallback:N=>this.scrollElement=N||void 0},t.createElement(so,{exploreId:o,onChangeTime:this.onChangeTime,topOfViewRef:this.topOfViewRef}),E?this.renderCompactUrlWarning():null,s?this.renderEmptyState(S.exploreContainer):null,n&&t.createElement("div",{className:S.exploreContainer},t.createElement(Et.l,{className:S.queryContainer},t.createElement(Pn,{exploreId:o}),t.createElement(Ia,{addQueryRowButtonDisabled:i,addQueryRowButtonHidden:!1,richHistoryRowButtonHidden:M,richHistoryButtonActive:T,queryInspectorButtonActive:Q,onClickAddQueryRowButton:this.onClickAddQueryRowButton,onClickRichHistoryButton:this.toggleShowRichHistory,onClickQueryInspectorButton:this.toggleShowQueryInspector}),t.createElement(ta,{exploreId:o})),t.createElement(ms.Z,{onResize:this.onResize,disableHeight:!0},({width:N})=>N===0?null:t.createElement("main",{className:(0,p.cx)(S.exploreMain),style:{width:N}},t.createElement(A.z4,null,C&&t.createElement(t.Fragment,null,d&&a&&t.createElement(A.z4,null,this.renderGraphPanel(N)),u&&t.createElement(A.z4,null,this.renderRawPrometheus(N)),h&&t.createElement(A.z4,null,this.renderTablePanel(N)),g&&t.createElement(A.z4,null,this.renderLogsPanel(N)),v&&t.createElement(A.z4,null,this.renderNodeGraphPanel()),f&&t.createElement(A.z4,null,this.renderFlameGraphPanel()),m&&t.createElement(A.z4,null,this.renderTraceViewPanel()),P.v.featureToggles.logsSampleInExplore&&x&&t.createElement(A.z4,null,this.renderLogsSamplePanel()),J&&t.createElement(A.z4,null,this.renderNoData())),T&&t.createElement(La,{width:N,exploreId:o,onClose:this.toggleShowRichHistory}),Q&&t.createElement(Bs,{exploreId:o,width:N,onClose:this.toggleShowQueryInspector,timeZone:y}))))))}}function Va(e,{exploreId:n}){const s=e.explore,{syncedTimes:o}=s,a=s[n],r=(0,Ce.Z)(e.user),{datasourceInstance:i,datasourceMissing:c,queryKeys:d,queries:h,isLive:u,graphResult:g,tableResult:m,logsResult:v,showLogs:f,showMetrics:y,showTable:E,showTrace:x,absoluteRange:w,queryResponse:S,showNodeGraph:C,showFlameGraph:T,loading:M,isFromCompactUrl:Q,showRawPrometheus:J,supplementaryQueries:N}=a,F=N[k.v8.LogsSample],b=!!(F.dataProvider!==void 0&&!v&&(g||m));return{datasourceInstance:i,datasourceMissing:c,queryKeys:d,queries:h,isLive:u,graphResult:g,logsResult:v??void 0,absoluteRange:w,queryResponse:S,syncedTimes:o,timeZone:r,showLogs:f,showMetrics:y,showTable:E,showTrace:x,showNodeGraph:C,showRawPrometheus:J,showFlameGraph:T,splitted:(0,Ae.p)(e),loading:M,isFromCompactUrl:Q||!1,logsSample:F,showLogsSample:b}}const Za={changeSize:mt.qN,modifyQueries:W.sK,scanStart:W.EA,scanStopAction:W.P4,setQueries:W.KO,updateTimeRange:Se.cD,makeAbsoluteTime:Se.F9,addQueryRow:W.CS,splitOpen:K.bW,setSupplementaryQueryEnabled:W.z0},Ga=(0,le.connect)(Va,Za),ja=(0,L.HE)(Ga(Ua)),Ya=e=>({explore:p.css`
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      overflow: hidden;
      min-width: 600px;
      & + & {
        border-left: 1px dotted ${e.colors.border.medium};
      }
    `});class Ka extends t.PureComponent{constructor(n){super(n),this.el=null,this.refreshExplore=s=>{const{exploreId:o,urlQuery:a}=this.props;a!==s&&a!==K.IS[o]&&this.props.refreshExplore(o,a)},this.getRef=s=>{this.el=s},this.exploreEvents=new gs.F,this.state={openDrawer:void 0}}async componentDidMount(){const{initialized:n,exploreId:s,initialDatasource:o,initialQueries:a,initialRange:r,panelsState:i,orgId:c,isFromCompactUrl:d}=this.props,h=this.el?.offsetWidth??0;if(!n){let u,g;if((!a||a.length===0)&&o&&!(o===Oe.D||o.uid===Oe.D)){const{instance:y}=await(0,Mt.r_)(c,o);u=y.getRef()}let m=await(0,pe.Z8)(a,u);if(!(0,pe._o)(m).noneHaveDatasource&&!(0,pe._o)(m).allDatasourceSame)if(Ie.vc.featureToggles.exploreMixedDatasource)g=await(0,Be.ak)().get(Oe.D);else{const f=m.find(y=>y.datasource?.uid).datasource.uid;if(f){g=f;const y=await(0,Be.ak)().get(f),E=await(0,Be.ak)().get(o);await this.props.importQueries(s,m,E,y),await this.props.stateSave({replace:!0}),m=this.props.initialQueries}}d&&(0,H.ff)("grafana_explore_compact_notice"),this.props.initializeExplore(s,g||m[0]?.datasource||o,m,r,h,this.exploreEvents,i,d)}}componentWillUnmount(){this.exploreEvents.removeAllListeners()}componentDidUpdate(n){this.refreshExplore(n.urlQuery)}render(){const{theme:n,exploreId:s,initialized:o,eventBus:a}=this.props,r=Ya(n);return t.createElement("div",{className:r.explore,ref:this.getRef,"data-testid":Me.wl.pages.Explore.General.container},o&&t.createElement(ja,{exploreId:s,eventBus:a}))}}const Ja=(0,Ee.Z)(pe.vP);function Xa(e,n){const s=(0,pe.J5)(n.urlQuery),o=(0,Ce.Z)(e.user),a=(0,Ce.i)(e.user),{datasource:r,queries:i,range:c,panelsState:d}=s||{},h=r||ee.Z.get((0,pe.I$)(e.user.orgId)),u=c?Ja(c,o,a):(0,pe.OQ)(o,pe.UI,a);return{initialized:e.explore[n.exploreId]?.initialized,initialDatasource:h,initialQueries:i,initialRange:u,panelsState:d,orgId:e.user.orgId,isFromCompactUrl:s.isFromCompactUrl||!1}}const qa={initializeExplore:mt.CK,refreshExplore:mt.Om,importQueries:W.GJ,stateSave:K.og},_a=(0,le.connect)(Xa,qa),ds=(0,L.HE)(_a(Ka)),er={pageScrollbarWrapper:p.css`
    width: 100%;
    flex-grow: 1;
    min-height: 0;
    height: 100%;
    position: relative;
  `};function tr(e){sr();const n=(0,R.useDispatch)(),s=e.queryParams,{keybindings:o,chrome:a,config:r}=(0,j.p)(),i=(0,Y.q)("explore"),{get:c}=(0,ve.K)(),{warning:d}=(0,ae.iG)(),h=(0,ne.R9)(),u=(0,t.useRef)(h.eventBus.newScopedBus("explore",{onlyLocal:!1})),[g,m]=(0,t.useState)(.5),{width:v}=(0,se.Z)(),f=200,y=(0,R.useSelector)(S=>S.explore);(0,t.useEffect)(()=>{a.update({sectionNav:i.node})},[a,i]),(0,t.useEffect)(()=>{o.setupTimeRangeBindings(!1)},[o]),(0,t.useEffect)(()=>{r.featureToggles.correlations?c.execute():n((0,K.CL)([]))},[]),(0,t.useEffect)(()=>{c.value?n((0,K.CL)(c.value)):c.error&&(n((0,K.CL)([])),d("Could not load correlations.","Correlations data could not be loaded, DataLinks may have partial data."))},[c.value,c.error,n,d]),(0,t.useEffect)(()=>{K.IS.left=void 0,K.IS.right=void 0;const S=oe.E1.getSearchObject();return(S.from||S.to)&&oe.E1.partial({from:void 0,to:void 0},!0),()=>{n((0,K.WK)())}},[]);const E=S=>{const C=v/2,T=(0,z.inRange)(S,C-100,C+100);n(T?(0,K.Sx)({largerExploreId:void 0}):(0,K.Sx)({largerExploreId:S>C?U.Kd.right:U.Kd.left})),m(S/v)},x=Boolean(s.left)&&Boolean(s.right);let w=0;return x&&(!y.evenSplitPanes&&y.maxedExploreId?w=y.maxedExploreId===U.Kd.right?v-f:f:y.evenSplitPanes?w=Math.floor(v/2):g!==void 0&&(w=v*g)),t.createElement("div",{className:er.pageScrollbarWrapper},t.createElement(hs,{exploreIdLeft:U.Kd.left,exploreIdRight:U.Kd.right}),t.createElement(B.U,{splitOrientation:"vertical",paneSize:w,minSize:f,maxSize:f*-1,primary:"second",splitVisible:x,paneStyle:{overflow:"auto",display:"flex",flexDirection:"column"},onDragFinished:S=>{S&&E(S)}},t.createElement(A.z4,{style:"page"},t.createElement(ds,{exploreId:U.Kd.left,urlQuery:s.left,eventBus:u.current})),x&&t.createElement(A.z4,{style:"page"},t.createElement(ds,{exploreId:U.Kd.right,urlQuery:s.right,eventBus:u.current}))))}const sr=()=>{const e=(0,Y.q)("explore"),n=(0,R.useSelector)(s=>[s.explore.left.datasourceInstance?.name,s.explore.right?.datasourceInstance?.name].filter(I.fQ));document.title=`${e.main.text} - ${n.join(" | ")} - ${ue.c.AppTitle}`};function or(e){const{isLoading:n}=(0,te.zJ)(),{hasDatasource:s}=(0,R.useSelector)(i=>({hasDatasource:i.dataSources.dataSourcesCount>0})),[o,a]=(0,t.useState)(P.v.featureToggles.datasourceOnboarding);return s||!o?t.createElement(tr,{...e}):t.createElement(_.O,{onCTAClick:()=>a(!1),loading:n,title:"Welcome to Grafana Explore!",CTAText:"Or explore sample data",navId:"explore"})}},75090:(ge,V,l)=>{"use strict";l.d(V,{F:()=>_,p:()=>P});var t=l(81168);const P=R=>Boolean(R.explore[t.ExploreId.left]&&R.explore[t.ExploreId.right]),_=R=>te=>te.explore[R]},3823:(ge,V,l)=>{"use strict";l.d(V,{Z:()=>se});var t=l(81582),P=l.n(t),_=l(68404),R=l(24015),te=function(I){I===void 0&&(I={});var oe=(0,_.useState)(I),ne=oe[0],A=oe[1],B=(0,_.useCallback)(function(j){A(function(ae){return Object.assign({},ae,j instanceof Function?j(ae):j)})},[]);return[ne,B]};const p=te;var z=function(){var I=(0,R.Z)(),oe=p({value:void 0,error:void 0,noUserInteraction:!0}),ne=oe[0],A=oe[1],B=(0,_.useCallback)(function(j){if(I()){var ae,Y;try{if(typeof j!="string"&&typeof j!="number"){var U=new Error("Cannot copy typeof "+typeof j+" to clipboard, must be a string");A({value:j,error:U,noUserInteraction:!0});return}else if(j===""){var U=new Error("Cannot copy empty string to clipboard.");A({value:j,error:U,noUserInteraction:!0});return}Y=j.toString(),ae=P()(Y),A({value:Y,error:void 0,noUserInteraction:ae})}catch(ue){A({value:Y,error:ue,noUserInteraction:ae})}}},[]);return[ne,B]};const se=z},78337:(ge,V,l)=>{"use strict";l.d(V,{Z:()=>_});var t=l(68404),P=function(R,te){var p=(0,t.useRef)(function(){});(0,t.useEffect)(function(){p.current=R}),(0,t.useEffect)(function(){if(te!==null){var z=setInterval(function(){return p.current()},te||0);return function(){return clearInterval(z)}}},[te])};const _=P},81582:(ge,V,l)=>{"use strict";var t=l(66259),P={"text/plain":"Text","text/html":"Url",default:"Text"},_="Copy to clipboard: #{key}, Enter";function R(p){var z=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return p.replace(/#{\s*key\s*}/g,z)}function te(p,z){var se,I,oe,ne,A,B,j=!1;z||(z={}),se=z.debug||!1;try{oe=t(),ne=document.createRange(),A=document.getSelection(),B=document.createElement("span"),B.textContent=p,B.style.all="unset",B.style.position="fixed",B.style.top=0,B.style.clip="rect(0, 0, 0, 0)",B.style.whiteSpace="pre",B.style.webkitUserSelect="text",B.style.MozUserSelect="text",B.style.msUserSelect="text",B.style.userSelect="text",B.addEventListener("copy",function(Y){if(Y.stopPropagation(),z.format)if(Y.preventDefault(),typeof Y.clipboardData>"u"){se&&console.warn("unable to use e.clipboardData"),se&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var U=P[z.format]||P.default;window.clipboardData.setData(U,p)}else Y.clipboardData.clearData(),Y.clipboardData.setData(z.format,p);z.onCopy&&(Y.preventDefault(),z.onCopy(Y.clipboardData))}),document.body.appendChild(B),ne.selectNodeContents(B),A.addRange(ne);var ae=document.execCommand("copy");if(!ae)throw new Error("copy command was unsuccessful");j=!0}catch(Y){se&&console.error("unable to copy using execCommand: ",Y),se&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(z.format||"text",p),z.onCopy&&z.onCopy(window.clipboardData),j=!0}catch(U){se&&console.error("unable to copy using clipboardData: ",U),se&&console.error("falling back to prompt"),I=R("message"in z?z.message:_),window.prompt(I,p)}}finally{A&&(typeof A.removeRange=="function"?A.removeRange(ne):A.removeAllRanges()),B&&document.body.removeChild(B),oe()}return j}ge.exports=te},66259:ge=>{ge.exports=function(){var V=document.getSelection();if(!V.rangeCount)return function(){};for(var l=document.activeElement,t=[],P=0;P<V.rangeCount;P++)t.push(V.getRangeAt(P));switch(l.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":l.blur();break;default:l=null;break}return V.removeAllRanges(),function(){V.type==="Caret"&&V.removeAllRanges(),V.rangeCount||t.forEach(function(_){V.addRange(_)}),l&&l.focus()}}}}]);

//# sourceMappingURL=explore.8f5f1af9d3363e60733b.js.map