var e,t,n,r,o,s,i={},_=[],l=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function u(e,t){for(var n in t)e[n]=t[n];return e}function c(e){var t=e.parentNode;t&&t.removeChild(e)}function a(e,t,n){var r,o=arguments,s={};for(r in t)"key"!==r&&"ref"!==r&&(s[r]=t[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(s.children=n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===s[r]&&(s[r]=e.defaultProps[r]);return p(e,s,t&&t.key,t&&t.ref,null)}function p(t,n,r,o,s){var i={type:t,props:n,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:s};return null==s&&(i.__v=i),e.vnode&&e.vnode(i),i}function h(e){return e.children}function d(e,t){this.props=e,this.context=t}function f(e,t){if(null==t)return e.__?f(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?f(e):null}function v(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return v(e)}}function m(s){(!s.__d&&(s.__d=!0)&&t.push(s)&&!n++||o!==e.debounceRendering)&&((o=e.debounceRendering)||r)(y)}function y(){for(var e;n=t.length;)e=t.sort((function(e,t){return e.__v.__b-t.__v.__b})),t=[],e.some((function(e){var t,n,r,o,s,i,_;e.__d&&(i=(s=(t=e).__v).__e,(_=t.__P)&&(n=[],(r=u({},s)).__v=r,o=P(_,s,r,t.__n,void 0!==_.ownerSVGElement,null,n,null==i?f(s):i),E(n,s),o!=i&&v(s)))}))}function b(e,t,n,r,o,s,l,u,a){var p,h,d,v,m,y,b,k=n&&n.__k||_,C=k.length;if(u==i&&(u=null!=s?s[0]:C?f(n,0):null),p=0,t.__k=g(t.__k,(function(n){if(null!=n){if(n.__=t,n.__b=t.__b+1,null===(d=k[p])||d&&n.key==d.key&&n.type===d.type)k[p]=void 0;else for(h=0;h<C;h++){if((d=k[h])&&n.key==d.key&&n.type===d.type){k[h]=void 0;break}d=null}if(v=P(e,n,d=d||i,r,o,s,l,u,a),(h=n.ref)&&d.ref!=h&&(b||(b=[]),d.ref&&b.push(d.ref,null,n),b.push(h,n.__c||v,n)),null!=v){var _;if(null==y&&(y=v),void 0!==n.__d)_=n.__d,n.__d=void 0;else if(s==d||v!=u||null==v.parentNode){e:if(null==u||u.parentNode!==e)e.appendChild(v),_=null;else{for(m=u,h=0;(m=m.nextSibling)&&h<C;h+=2)if(m==v)break e;e.insertBefore(v,u),_=u}"option"==t.type&&(e.value="")}u=void 0!==_?_:v.nextSibling,"function"==typeof t.type&&(t.__d=u)}else u&&d.__e==u&&u.parentNode!=e&&(u=f(d))}return p++,n})),t.__e=y,null!=s&&"function"!=typeof t.type)for(p=s.length;p--;)null!=s[p]&&c(s[p]);for(p=C;p--;)null!=k[p]&&x(k[p],k[p]);if(b)for(p=0;p<b.length;p++)A(b[p],b[++p],b[++p])}function g(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var r=0;r<e.length;r++)g(e[r],t,n);else n.push(t?t("string"==typeof e||"number"==typeof e?p(null,e,null,null,e):null!=e.__e||null!=e.__c?p(e.type,e.props,e.key,null,e.__v):e):e);return n}function k(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===l.test(t)?n+"px":null==n?"":n}function C(e,t,n,r,o){var s,i,_,l,u;if(o?"className"===t&&(t="class"):"class"===t&&(t="className"),"style"===t)if(s=e.style,"string"==typeof n)s.cssText=n;else{if("string"==typeof r&&(s.cssText="",r=null),r)for(l in r)n&&l in n||k(s,l,"");if(n)for(u in n)r&&n[u]===r[u]||k(s,u,n[u])}else"o"===t[0]&&"n"===t[1]?(i=t!==(t=t.replace(/Capture$/,"")),_=t.toLowerCase(),t=(_ in e?_:t).slice(2),n?(r||e.addEventListener(t,w,i),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,w,i)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function w(t){this.l[t.type](e.event?e.event(t):t)}function P(t,n,r,o,s,i,_,l,c){var a,p,f,v,m,y,g,k,C,w,P=n.type;if(void 0!==n.constructor)return null;(a=e.__b)&&a(n);try{e:if("function"==typeof P){if(k=n.props,C=(a=P.contextType)&&o[a.__c],w=a?C?C.props.value:a.__:o,r.__c?g=(p=n.__c=r.__c).__=p.__E:("prototype"in P&&P.prototype.render?n.__c=p=new P(k,w):(n.__c=p=new d(k,w),p.constructor=P,p.render=M),C&&C.sub(p),p.props=k,p.state||(p.state={}),p.context=w,p.__n=o,f=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=P.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=u({},p.__s)),u(p.__s,P.getDerivedStateFromProps(k,p.__s))),v=p.props,m=p.state,f)null==P.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==P.getDerivedStateFromProps&&k!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(k,w),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(k,p.__s,w)||n.__v===r.__v&&!p.__){for(p.props=k,p.state=p.__s,n.__v!==r.__v&&(p.__d=!1),p.__v=n,n.__e=r.__e,n.__k=r.__k,p.__h.length&&_.push(p),a=0;a<n.__k.length;a++)n.__k[a]&&(n.__k[a].__=n);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(k,p.__s,w),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,m,y)}))}p.context=w,p.props=k,p.state=p.__s,(a=e.__r)&&a(n),p.__d=!1,p.__v=n,p.__P=t,a=p.render(p.props,p.state,p.context),n.__k=null!=a&&a.type==h&&null==a.key?a.props.children:Array.isArray(a)?a:[a],null!=p.getChildContext&&(o=u(u({},o),p.getChildContext())),f||null==p.getSnapshotBeforeUpdate||(y=p.getSnapshotBeforeUpdate(v,m)),b(t,n,r,o,s,i,_,l,c),p.base=n.__e,p.__h.length&&_.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==i&&n.__v===r.__v?(n.__k=r.__k,n.__e=r.__e):n.__e=S(r.__e,n,r,o,s,i,_,c);(a=e.diffed)&&a(n)}catch(t){n.__v=null,e.__e(t,n,r)}return n.__e}function E(t,n){e.__c&&e.__c(n,t),t.some((function(n){try{t=n.__h,n.__h=[],t.some((function(e){e.call(n)}))}catch(t){e.__e(t,n.__v)}}))}function S(e,t,n,r,o,s,l,u){var c,a,p,h,d,f=n.props,v=t.props;if(o="svg"===t.type||o,null!=s)for(c=0;c<s.length;c++)if(null!=(a=s[c])&&((null===t.type?3===a.nodeType:a.localName===t.type)||e==a)){e=a,s[c]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),s=null,u=!1}if(null===t.type)f!==v&&e.data!=v&&(e.data=v);else{if(null!=s&&(s=_.slice.call(e.childNodes)),p=(f=n.props||i).dangerouslySetInnerHTML,h=v.dangerouslySetInnerHTML,!u){if(f===i)for(f={},d=0;d<e.attributes.length;d++)f[e.attributes[d].name]=e.attributes[d].value;(h||p)&&(h&&p&&h.__html==p.__html||(e.innerHTML=h&&h.__html||""))}(function(e,t,n,r,o){var s;for(s in n)"children"===s||"key"===s||s in t||C(e,s,null,n[s],r);for(s in t)o&&"function"!=typeof t[s]||"children"===s||"key"===s||"value"===s||"checked"===s||n[s]===t[s]||C(e,s,t[s],n[s],r)})(e,v,f,o,u),t.__k=t.props.children,h||b(e,t,n,r,"foreignObject"!==t.type&&o,s,l,i,u),u||("value"in v&&void 0!==v.value&&v.value!==e.value&&(e.value=null==v.value?"":v.value),"checked"in v&&void 0!==v.checked&&v.checked!==e.checked&&(e.checked=v.checked))}return e}function A(t,n,r){try{"function"==typeof t?t(n):t.current=n}catch(t){e.__e(t,r)}}function x(t,n,r){var o,s,i;if(e.unmount&&e.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||A(o,null,n)),r||"function"==typeof t.type||(r=null!=(s=t.__e)),t.__e=t.__d=void 0,null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){e.__e(t,n)}o.base=o.__P=null}if(o=t.__k)for(i=0;i<o.length;i++)o[i]&&x(o[i],n,r);null!=s&&c(s)}function M(e,t,n){return this.constructor(e,n)}e={__e:function(e,t){for(var n,r;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(e)),r)return m(n.__E=n)}catch(t){e=t}throw e}},d.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=u({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&u(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),m(this))},d.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),m(this))},d.prototype.render=h,t=[],n=0,r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,s=i;var N,j,O=[],R=e.__r,H=e.diffed,T=e.__c,L=e.unmount;function D(){O.some((function(t){if(t.__P)try{t.__H.__h.forEach(F),t.__H.__h.forEach(U),t.__H.__h=[]}catch(n){return t.__H.__h=[],e.__e(n,t.__v),!0}})),O=[]}function F(e){e.t&&e.t()}function U(e){var t=e.__();"function"==typeof t&&(e.t=t)}e.__r=function(e){R&&R(e),(N=e.__c).__H&&(N.__H.__h.forEach(F),N.__H.__h.forEach(U),N.__H.__h=[])},e.diffed=function(t){H&&H(t);var n=t.__c;if(n){var r=n.__H;r&&r.__h.length&&(1!==O.push(n)&&j===e.requestAnimationFrame||((j=e.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);"undefined"!=typeof window&&(t=requestAnimationFrame(n))})(D))}},e.__c=function(t,n){n.some((function(t){try{t.__h.forEach(F),t.__h=t.__h.filter((function(e){return!e.__||U(e)}))}catch(r){n.some((function(e){e.__h&&(e.__h=[])})),n=[],e.__e(r,t.__v)}})),T&&T(t,n)},e.unmount=function(t){L&&L(t);var n=t.__c;if(n){var r=n.__H;if(r)try{r.__.forEach((function(e){return e.t&&e.t()}))}catch(t){e.__e(t,n.__v)}}};var I=function e(t,n,r,o){var s;n[0]=0;for(var i=1;i<n.length;i++){var _=n[i++],l=n[i]?(n[0]|=_?1:2,r[n[i++]]):n[++i];3===_?o[0]=l:4===_?o[1]=Object.assign(o[1]||{},l):5===_?(o[1]=o[1]||{})[n[++i]]=l:6===_?o[1][n[++i]]+=l+"":_?(s=t.apply(l,e(t,l,r,["",null])),o.push(s),l[0]?n[0]|=2:(n[i-2]=0,n[i]=s)):o.push(l)}return o},W=new Map,q=function(e){var t=W.get(this);return t||(t=new Map,W.set(this,t)),(t=I(this,t.get(e)||(t.set(e,t=function(e){for(var t,n,r=1,o="",s="",i=[0],_=function(e){1===r&&(e||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?i.push(0,e,o):3===r&&(e||o)?(i.push(3,e,o),r=2):2===r&&"..."===o&&e?i.push(4,e,0):2===r&&o&&!e?i.push(5,0,!0,o):r>=5&&((o||!e&&5===r)&&(i.push(r,0,o,n),r=6),e&&(i.push(r,e,0,n),r=6)),o=""},l=0;l<e.length;l++){l&&(1===r&&_(),_(l));for(var u=0;u<e[l].length;u++)t=e[l][u],1===r?"<"===t?(_(),i=[i],r=3):o+=t:4===r?"--"===o&&">"===t?(r=1,o=""):o=t+o[0]:s?t===s?s="":o+=t:'"'===t||"'"===t?s=t:">"===t?(_(),r=1):r&&("="===t?(r=5,n=o,o=""):"/"===t&&(r<5||">"===e[l][u+1])?(_(),3===r&&(i=i[0]),r=i,(i=i[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(_(),r=2):o+=t),3===r&&"!--"===o&&(r=4,i=i[0])}return _(),i}(e)),t),arguments,[])).length>1?t:t[0]}.bind(a);function z(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()}function B(){var e,t,n=(e=['\n          <style>\n              span {\n                width: 4rem;\n                display: inline-block;\n                text-align: center;\n                font-size: 200%;\n              }\n        \n              button {\n                width: 64px;\n                height: 64px;\n                border: none;\n                border-radius: 10px;\n                background-color: seagreen;\n                color: white;\n                font-size: 200%;\n              }\n          </style>\n          <button onClick="','">-</button>\n          <span>','</span>\n          <button onClick="','">+</button>\n        '],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return B=function(){return n},n}!function(e,t){var n=function(e){if(!e)return[];var t=[];return Object.keys(e).forEach((n=>{(null==e[n].observed||e[n].observed)&&t.push(z(n))})),t}(t.props);window.customElements.get(e)||window.customElements.define(e,class extends HTMLElement{static get observedAttributes(){return n}connectedCallback(){this._checkInit(),this._preprocess()}disconnectedCallback(){"function"==typeof this.removed&&(this.removed(),this.isRemovedCalled=!0)}attributeChangedCallback(){this._checkInit(),this._preprocess()}get initialised(){return this._props&&this._state&&this._computed&&this.templateRenderer}_checkInit(){this.initialised||this._init(t)}_init(e){if(this._props=e.props||{},this._computed=e.computed||{},e.state&&"function"!=typeof e.state)throw new Error("State must be a function!");this._state=e.state||{},this.computedCache={},this.status="render",this.props=this._processProps(),"function"==typeof this._state&&(this._state=this._state.bind(this)()),this.state=this._monitorState(this._state),this._processMethodsAndComputedProps(e),this.root=this._processRoot(e.root),this.slots=this._processSlots(),this.render=e.render||null,this.templateRenderer=e.renderer,this.template=null,this.created=e.created||null,this.mounted=e.mounted||null,this.updated=e.updated||null,this.removed=e.removed||null,this.isCreatedCalled=!1,this.isMountedCalled=!1,this.isRemovedCalled=!1,this.emit=(e,t)=>{!function(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=Object.assign({},{bubbles:!0,cancelable:!0,composed:!1},r);"composed"in CustomEvent.prototype?n=new CustomEvent(t,o):((n=document.createEvent("CustomEvent")).initCustomEvent(t,o.bubbles,o.cancelable,o.detail),Object.defineProperty(n,"composed",{value:o.composed})),e.dispatchEvent(n)}(this,e,{detail:t})},this._processInstanceProps(this._props),"function"!=typeof this.created||this.isCreatedCalled||(this.created(),this.isCreatedCalled=!0)}_processProps(){var e={};return Object.keys(this._props).forEach((t=>{var n={},r=this._props[t],o=this._getAttribute(t),s=null;if(null!=r.default&&(s=r.default),r.required&&null==o)null!=s?(console.info("No biggie, the required prop '".concat(t,"' has no value set, so the default has been set")),n[t]=s):(n[t]=null,console.error("The required prop '".concat(t,"' has no value set")));else switch(r.type){case String:default:n[t]=o||s;break;case Number:n[t]=null!=o?parseFloat(o):null!=s?s:0;break;case Boolean:n[t]=null!=o?"true"===o.toString():null!=s&&s;break;case Object:try{n[t]=null!=o?JSON.parse(o):null!=s?s:void 0}catch(e){n[t]=null!=s?s:void 0,console.error("An object parse issue occurred",e)}}e[t]=n[t],this._instanceProps&&this._instanceProps[t]&&(e[t]=this._instanceProps[t])})),e}_processMethodsAndComputedProps(e){var t=this,n=["state","created","mounted","updated","removed","render","renderer"],r=Object.keys(e);r.length&&r.forEach((r=>{t[r]||n.includes(r)||"function"!=typeof e[r]||(t[r]=e[r].bind(t)),"computed"===r&&this._processComputed(e[r])}))}_processRoot(e){switch(e){case"standard":default:return this;case"shadow":return this.attachShadow({mode:"open"});case"shadow:closed":return this.attachShadow({mode:"closed"})}}_processComputed(e){var t=this,n=Object.keys(e);n.length&&n.forEach((n=>{t[n]?console.warn("Computed property '".concat(n,"' already exists on the component instance")):Object.defineProperty(t,n,{get:()=>(t.computedCache[n]||(t.computedCache[n]=e[n].bind(t)()),t.computedCache[n])})}))}_processRender(){var e=this.render?this.render():void 0;e&&(this.template=e,this._updateRender())}_monitorState(e){var t=this;return new Proxy(e,{set:(e,n,r)=>(e[n]===r||(e[n]=r,t.computedCache={},"render"===t.status&&t._processRender()),!0)})}_processSlots(){var e=this.childNodes,t={default:[]};return e.length>0&&[...e].forEach((e=>{var n=e.getAttribute?e.getAttribute("slot"):null;n?t[n]=e:t.default.push(e)})),t}_getAttribute(e){try{return this.getAttribute(z(e))}catch(e){return console.error("A get prop error occurred",e),""}}_processInstanceProps(e){var t=this,n=Object.keys(e);e&&n.forEach((e=>{var n;t[e]&&(n=t[e],delete t[e]),Object.defineProperty(t,e,{get(){return this._instanceProps&&this._instanceProps[e]?this._instanceProps[e]:this.getAttribute(z(e))},set(t){return this._instanceProps||(this._instanceProps={}),this._instanceProps[e]=t,this.setAttribute(z(e),"object"==typeof t?JSON.stringify(t):t.toString()),this.attributeChangedCallback(),!0},enumerable:!0}),n&&(t[e]=n)}))}_preprocess(){this.computedCache={},this.props=this._processProps(),this._processRender()}_updateRender(){var e;this.template&&("object"!=typeof(e=this.template)&&"function"!=typeof e||"function"!=typeof e.then?(this.templateRenderer(this.template,this.root),this._callLifecycleMethods()):this.template.then((e=>{this.templateRenderer(e,this.root),this._callLifecycleMethods()})).catch((e=>console.error("A component render error occurred",e))))}_callLifecycleMethods(){"function"!=typeof this.mounted||this.isMountedCalled||(this.mounted(),this.isMountedCalled=!0),"function"==typeof this.updated&&this.isMountedCalled&&this.updated()}})}("my-counter",{renderer:function(t,n,r){var o,l,u;e.__&&e.__(t,n),l=(o=r===s)?null:r&&r.__k||n.__k,t=a(h,null,[t]),u=[],P(n,(o?n:r||n).__k=t,l||i,i,void 0!==n.ownerSVGElement,r&&!o?[r]:l?null:_.slice.call(n.childNodes),u,r||i,o),E(u,t)},state:()=>({count:0}),dec(){this.state.count=this.state.count-1},inc(){this.state.count=this.state.count+1},render(){return q(B(),this.dec,this.state.count,this.inc)}});
