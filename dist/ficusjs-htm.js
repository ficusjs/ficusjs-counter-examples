var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,n=t||s||Function("return this")();function r(e,t){for(var s=-1,n=t.length,r=e.length;++s<n;)e[r+s]=t[s];return e}var o=Object.prototype,i=o.hasOwnProperty,a=o.toString,c=n.Symbol,l=o.propertyIsEnumerable,h=c?c.isConcatSpreadable:void 0;function u(e,t,s,n,o){var i=-1,a=e.length;for(s||(s=d),o||(o=[]);++i<a;){var c=e[i];t>0&&s(c)?t>1?u(c,t-1,s,n,o):r(o,c):n||(o[o.length]=c)}return o}function d(e){return f(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&function(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!function(e){var t=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}(e)?a.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}(e)}(e)}(e)&&i.call(e,"callee")&&(!l.call(e,"callee")||"[object Arguments]"==a.call(e))}(e)||!!(h&&e&&e[h])}var p,f=Array.isArray,b=function(e){return e&&e.length?u(e,1):[]},m=function(e){for(var t,s,n=arguments,r=this,o=1,i="",a="",c=[0],l=e=>{1===o&&(e||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(e?n[e]:i):3===o&&(e||i)?(c[1]=e?n[e]:i,o=2):2===o&&"..."===i&&e?c[2]=Object.assign(c[2]||{},n[e]):2===o&&i&&!e?(c[2]=c[2]||{})[i]=!0:o>=5&&(5===o?((c[2]=c[2]||{})[s]=e?i?i+n[e]:n[e]:i,o=6):(e||i)&&(c[2][s]+=e?i+n[e]:i)),i=""},h=0;h<e.length;h++){h&&(1===o&&l(),l(h));for(var u=0;u<e[h].length;u++)t=e[h][u],1===o?"<"===t?(l(),c=[c,"",null],o=3):i+=t:4===o?"--"===i&&">"===t?(o=1,i=""):i=t+i[0]:a?t===a?a="":i+=t:'"'===t||"'"===t?a=t:">"===t?(l(),o=1):o&&("="===t?(o=5,s=i,i=""):"/"===t&&(o<5||">"===e[h][u+1])?(l(),3===o&&(c=c[0]),o=c,(c=c[0]).push(r.apply(null,o.slice(1))),o=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(l(),o=2):i+=t),3===o&&"!--"===i&&(o=4,c=c[0])}return l(),c.length>2?c.slice(1):c[1]}.bind((function(e,t){var s=null,n=!1;for(var r in["svg","use","symbol","path","g","defs","title"].indexOf(e)>-1?(s=document.createElementNS("http://www.w3.org/2000/svg",e),n=!0):s=document.createElement(e),t)if("on"===r.slice(0,2)){var o=r.slice(2),i=t[r];if(null==i)continue;s.addEventListener(o,i)}else if(["disabled","selected","checked"].indexOf(r)>-1)t[r]&&s.setAttribute(r,r);else if("xlinkHref"===r&&n)t[r]&&s.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t[r]);else if("href"===r&&n)t[r]&&s.setAttributeNS("http://www.w3.org/1999/xlink","href",t[r]);else{if(null==t[r])continue;s.setAttribute(r,t[r])}for(var a=arguments.length,c=new Array(a>2?a-2:0),l=2;l<a;l++)c[l-2]=arguments[l];return 0===c.length?s:(b(c).forEach((e=>{e instanceof Node?s.appendChild(e):s.appendChild(document.createTextNode(e))})),null==e?s.children:s)}));function v(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()}function g(e){return("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}!function(e,t){var s=function(e){if(!e)return[];var t=[];return Object.keys(e).forEach((s=>{(null==e[s].observed||e[s].observed)&&t.push(v(s))})),t}(t.props);window.customElements.get(e)||window.customElements.define(e,class extends HTMLElement{static get observedAttributes(){return s}get componentTagName(){return e}connectedCallback(){this._checkInit(),this._preprocess()}disconnectedCallback(){"function"==typeof this.removed&&(this.removed(),this.isRemovedCalled=!0)}attributeChangedCallback(){this._checkInit(),this._preprocess()}get initialised(){return this._props&&this._state&&this._computed&&this.templateRenderer}_checkInit(){this.initialised||this._init(t)}_init(e){if(this._props=e.props||{},this._computed=e.computed||{},e.state&&"function"!=typeof e.state)throw new Error("State must be a function!");this._state=e.state||{},this.computedCache={},this.status="render",this.props=this._processProps(),"function"==typeof this._state&&(this._state=this._state.bind(this)()),this.state=this._monitorState(this._state),this._processMethodsAndComputedProps(e),this.root=this._processRoot(e.root),this.slots=this._processSlots(),this.render=e.render||null,this.templateRenderer=e.renderer,this.template=null,this.created=e.created||null,this.mounted=e.mounted||null,this.updated=e.updated||null,this.removed=e.removed||null,this.isCreatedCalled=!1,this.isMountedCalled=!1,this.isRemovedCalled=!1,this.emit=(e,t)=>{!function(e,t){var s,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=Object.assign({},{bubbles:!0,cancelable:!0,composed:!1},n);"composed"in CustomEvent.prototype?s=new CustomEvent(t,r):((s=document.createEvent("CustomEvent")).initCustomEvent(t,r.bubbles,r.cancelable,r.detail),Object.defineProperty(s,"composed",{value:r.composed})),e.dispatchEvent(s)}(this,e,{detail:t})},this.setState=(e,t)=>{var s=e=>{if(e&&"object"==typeof e){var s=this.updated;for(var n in t&&(this.updated=()=>{setTimeout(t),this.updated=s||void 0}),this.status="transaction",e)this.state[n]&&this.state[n]===e[n]||(this.state[n]=e[n]);this.status="render",this._processRender()}},n=e(this.state);g(n)?n.then(s):s(n)},this._processInstanceProps(this._props),"function"!=typeof this.created||this.isCreatedCalled||(this.created(),this.isCreatedCalled=!0)}_processProps(){var e={};return Object.keys(this._props).forEach((t=>{var s={},n=this._props[t],r=this._getAttribute(t),o=null;if(null!=n.default&&(o=n.default),n.required&&null==r)null!=o?(console.info("No biggie, the required prop '".concat(t,"' has no value set, so the default has been set")),s[t]=o):(s[t]=null,console.error("The required prop '".concat(t,"' has no value set")));else switch(n.type){case String:default:s[t]=r||o;break;case Number:s[t]=null!=r?parseFloat(r):null!=o?o:0;break;case Boolean:s[t]=null!=r?"true"===r.toString():null!=o&&o;break;case Object:try{s[t]=null!=r?JSON.parse(r):null!=o?o:void 0}catch(e){s[t]=null!=o?o:void 0,console.error("An object parse issue occurred",e)}}e[t]=s[t],this._instanceProps&&this._instanceProps[t]&&(e[t]=this._instanceProps[t])})),e}_processMethodsAndComputedProps(e){var t=this,s=["state","created","mounted","updated","removed","render","renderer"],n=Object.keys(e);n.length&&n.forEach((n=>{t[n]||s.includes(n)||"function"!=typeof e[n]||(t[n]=e[n].bind(t)),"computed"===n&&this._processComputed(e[n])}))}_processRoot(e){switch(e){case"standard":default:return this;case"shadow":return this.attachShadow({mode:"open"});case"shadow:closed":return this.attachShadow({mode:"closed"})}}_processComputed(e){var t=this,s=Object.keys(e);s.length&&s.forEach((s=>{t[s]?console.warn("Computed property '".concat(s,"' already exists on the component instance")):Object.defineProperty(t,s,{get:()=>(t.computedCache[s]||(t.computedCache[s]=e[s].bind(t)()),t.computedCache[s])})}))}_processRender(){var e=this.render?this.render():void 0;e&&(this.template=e,this._updateRender())}_monitorState(e){var t=this;return new Proxy(e,{set:(e,s,n)=>(e[s]===n||(e[s]=n,t.computedCache={},"render"===t.status&&t._processRender()),!0)})}_processSlots(){var e=this.childNodes,t={default:[]};return e.length>0&&[...e].forEach((e=>{var s=e.getAttribute?e.getAttribute("slot"):null;s?t[s]=e:t.default.push(e)})),t}_getAttribute(e){try{return this.getAttribute(v(e))}catch(e){return console.error("A get prop error occurred",e),""}}_processInstanceProps(e){var t=this,s=Object.keys(e);e&&s.forEach((e=>{var s;t[e]&&(s=t[e],delete t[e]),Object.defineProperty(t,e,{get(){return this._instanceProps&&this._instanceProps[e]?this._instanceProps[e]:this.getAttribute(v(e))},set(t){return this._instanceProps||(this._instanceProps={}),this._instanceProps[e]=t,this.setAttribute(v(e),"object"==typeof t?JSON.stringify(t):t.toString()),this.attributeChangedCallback(),!0},enumerable:!0}),s&&(t[e]=s)}))}_preprocess(){this.computedCache={},this.props=this._processProps(),this._processRender()}_updateRender(){this.template&&(g(this.template)?this.template.then((e=>{this.templateRenderer(e,this.root),this._callLifecycleMethods()})).catch((e=>console.error("A component render error occurred",e))):(this.templateRenderer(this.template,this.root),this._callLifecycleMethods()))}_callLifecycleMethods(){"function"!=typeof this.mounted||this.isMountedCalled||this.mounted(),this.isMountedCalled=!0,"function"==typeof this.updated&&this.isMountedCalled&&this.updated()}})}("my-counter",{renderer:function(e,t){for(;t.firstChild;)t.removeChild(t.firstChild);Array.isArray(e)?e.forEach((e=>t.appendChild(e))):t.appendChild(e)},state:()=>({count:0}),dec(){this.state.count=this.state.count-1},inc(){this.state.count=this.state.count+1},render(){return m(p||(e=['\n          <style>\n              span {\n                width: 4rem;\n                display: inline-block;\n                text-align: center;\n                font-size: 200%;\n              }\n        \n              button {\n                width: 64px;\n                height: 64px;\n                border: none;\n                border-radius: 10px;\n                background-color: seagreen;\n                color: white;\n                font-size: 200%;\n              }\n          </style>\n          <button onClick="','">-</button>\n          <span>','</span>\n          <button onClick="','">+</button>\n        '],t||(t=e.slice(0)),p=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))),this.dec,this.state.count,this.inc);var e,t}});