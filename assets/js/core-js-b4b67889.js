var fa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Jg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function Xg(r){var e=r.default;if(typeof e=="function"){var t=function(){return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach(function(a){var n=Object.getOwnPropertyDescriptor(r,a);Object.defineProperty(t,a,n.get?n:{enumerable:!0,get:function(){return r[a]}})}),t}var Cr=function(r){return r&&r.Math==Math&&r},S=Cr(typeof globalThis=="object"&&globalThis)||Cr(typeof window=="object"&&window)||Cr(typeof self=="object"&&self)||Cr(typeof fa=="object"&&fa)||function(){return this}()||Function("return this")(),ir={},E=function(r){try{return!!r()}catch{return!0}},Wi=E,_=!Wi(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),Vi=E,zr=!Vi(function(){var r=function(){}.bind();return typeof r!="function"||r.hasOwnProperty("prototype")}),Yi=zr,xr=Function.prototype.call,T=Yi?xr.bind(xr):function(){return xr.apply(xr,arguments)},lo={},so={}.propertyIsEnumerable,fo=Object.getOwnPropertyDescriptor,qi=fo&&!so.call({1:2},1);lo.f=qi?function(e){var t=fo(this,e);return!!t&&t.enumerable}:so;var Qr=function(r,e){return{enumerable:!(r&1),configurable:!(r&2),writable:!(r&4),value:e}},$o=zr,po=Function.prototype,ot=po.call,Hi=$o&&po.bind.bind(ot,ot),yo=$o?Hi:function(r){return function(){return ot.apply(r,arguments)}},go=yo,Ji=go({}.toString),Xi=go("".slice),Y=function(r){return Xi(Ji(r),8,-1)},zi=Y,Qi=yo,O=function(r){if(zi(r)==="Function")return Qi(r)},Zi=O,rv=E,ev=Y,ge=Object,tv=Zi("".split),ho=rv(function(){return!ge("z").propertyIsEnumerable(0)})?function(r){return ev(r)=="String"?tv(r,""):ge(r)}:ge,q=function(r){return r==null},av=q,nv=TypeError,j=function(r){if(av(r))throw nv("Can't call method on "+r);return r},ov=ho,iv=j,Er=function(r){return ov(iv(r))},it=typeof document=="object"&&document.all,vv=typeof it>"u"&&it!==void 0,Oo={all:it,IS_HTMLDDA:vv},bo=Oo,uv=bo.all,b=bo.IS_HTMLDDA?function(r){return typeof r=="function"||r===uv}:function(r){return typeof r=="function"},$a=b,So=Oo,cv=So.all,L=So.IS_HTMLDDA?function(r){return typeof r=="object"?r!==null:$a(r)||r===cv}:function(r){return typeof r=="object"?r!==null:$a(r)},he=S,lv=b,sv=function(r){return lv(r)?r:void 0},F=function(r,e){return arguments.length<2?sv(he[r]):he[r]&&he[r][e]},fv=O,Zr=fv({}.isPrototypeOf),$v=F,re=$v("navigator","userAgent")||"",Eo=S,Oe=re,da=Eo.process,pa=Eo.Deno,ya=da&&da.versions||pa&&pa.version,ga=ya&&ya.v8,C,Wr;ga&&(C=ga.split("."),Wr=C[0]>0&&C[0]<4?1:+(C[0]+C[1]));!Wr&&Oe&&(C=Oe.match(/Edge\/(\d+)/),(!C||C[1]>=74)&&(C=Oe.match(/Chrome\/(\d+)/),C&&(Wr=+C[1])));var wt=Wr,ha=wt,dv=E,Io=!!Object.getOwnPropertySymbols&&!dv(function(){var r=Symbol();return!String(r)||!(Object(r)instanceof Symbol)||!Symbol.sham&&ha&&ha<41}),pv=Io,To=pv&&!Symbol.sham&&typeof Symbol.iterator=="symbol",yv=F,gv=b,hv=Zr,Ov=To,bv=Object,mo=Ov?function(r){return typeof r=="symbol"}:function(r){var e=yv("Symbol");return gv(e)&&hv(e.prototype,bv(r))},Sv=String,ee=function(r){try{return Sv(r)}catch{return"Object"}},Ev=b,Iv=ee,Tv=TypeError,U=function(r){if(Ev(r))return r;throw Tv(Iv(r)+" is not a function")},mv=U,Rv=q,vr=function(r,e){var t=r[e];return Rv(t)?void 0:mv(t)},be=T,Se=b,Ee=L,Pv=TypeError,Cv=function(r,e){var t,a;if(e==="string"&&Se(t=r.toString)&&!Ee(a=be(t,r))||Se(t=r.valueOf)&&!Ee(a=be(t,r))||e!=="string"&&Se(t=r.toString)&&!Ee(a=be(t,r)))return a;throw Pv("Can't convert object to primitive value")},te={exports:{}},Oa=S,xv=Object.defineProperty,_t=function(r,e){try{xv(Oa,r,{value:e,configurable:!0,writable:!0})}catch{Oa[r]=e}return e},wv=S,_v=_t,ba="__core-js_shared__",jv=wv[ba]||_v(ba,{}),jt=jv,Sa=jt;(te.exports=function(r,e){return Sa[r]||(Sa[r]=e!==void 0?e:{})})("versions",[]).push({version:"3.26.0",mode:"global",copyright:"\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE",source:"https://github.com/zloirock/core-js"});var Av=j,Nv=Object,ae=function(r){return Nv(Av(r))},Dv=O,Lv=ae,Mv=Dv({}.hasOwnProperty),x=Object.hasOwn||function(e,t){return Mv(Lv(e),t)},Fv=O,Uv=0,Bv=Math.random(),Gv=Fv(1 .toString),Ro=function(r){return"Symbol("+(r===void 0?"":r)+")_"+Gv(++Uv+Bv,36)},kv=S,Kv=te.exports,Ea=x,Wv=Ro,Ia=Io,Po=To,J=Kv("wks"),K=kv.Symbol,Ta=K&&K.for,Vv=Po?K:K&&K.withoutSetter||Wv,I=function(r){if(!Ea(J,r)||!(Ia||typeof J[r]=="string")){var e="Symbol."+r;Ia&&Ea(K,r)?J[r]=K[r]:Po&&Ta?J[r]=Ta(e):J[r]=Vv(e)}return J[r]},Yv=T,ma=L,Ra=mo,qv=vr,Hv=Cv,Jv=I,Xv=TypeError,zv=Jv("toPrimitive"),Qv=function(r,e){if(!ma(r)||Ra(r))return r;var t=qv(r,zv),a;if(t){if(e===void 0&&(e="default"),a=Yv(t,r,e),!ma(a)||Ra(a))return a;throw Xv("Can't convert object to primitive value")}return e===void 0&&(e="number"),Hv(r,e)},Zv=Qv,ru=mo,At=function(r){var e=Zv(r,"string");return ru(e)?e:e+""},eu=S,Pa=L,vt=eu.document,tu=Pa(vt)&&Pa(vt.createElement),ne=function(r){return tu?vt.createElement(r):{}},au=_,nu=E,ou=ne,Co=!au&&!nu(function(){return Object.defineProperty(ou("div"),"a",{get:function(){return 7}}).a!=7}),iu=_,vu=T,uu=lo,cu=Qr,lu=Er,su=At,fu=x,$u=Co,Ca=Object.getOwnPropertyDescriptor;ir.f=iu?Ca:function(e,t){if(e=lu(e),t=su(t),$u)try{return Ca(e,t)}catch{}if(fu(e,t))return cu(!vu(uu.f,e,t),e[t])};var A={},du=_,pu=E,xo=du&&pu(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42}),yu=L,gu=String,hu=TypeError,m=function(r){if(yu(r))return r;throw hu(gu(r)+" is not an object")},Ou=_,bu=Co,Su=xo,wr=m,xa=At,Eu=TypeError,Ie=Object.defineProperty,Iu=Object.getOwnPropertyDescriptor,Te="enumerable",me="configurable",Re="writable";A.f=Ou?Su?function(e,t,a){if(wr(e),t=xa(t),wr(a),typeof e=="function"&&t==="prototype"&&"value"in a&&Re in a&&!a[Re]){var n=Iu(e,t);n&&n[Re]&&(e[t]=a.value,a={configurable:me in a?a[me]:n[me],enumerable:Te in a?a[Te]:n[Te],writable:!1})}return Ie(e,t,a)}:Ie:function(e,t,a){if(wr(e),t=xa(t),wr(a),bu)try{return Ie(e,t,a)}catch{}if("get"in a||"set"in a)throw Eu("Accessors not supported");return"value"in a&&(e[t]=a.value),e};var Tu=_,mu=A,Ru=Qr,Ir=Tu?function(r,e,t){return mu.f(r,e,Ru(1,t))}:function(r,e,t){return r[e]=t,r},wo={exports:{}},ut=_,Pu=x,_o=Function.prototype,Cu=ut&&Object.getOwnPropertyDescriptor,Nt=Pu(_o,"name"),xu=Nt&&function(){}.name==="something",wu=Nt&&(!ut||ut&&Cu(_o,"name").configurable),oe={EXISTS:Nt,PROPER:xu,CONFIGURABLE:wu},_u=O,ju=b,ct=jt,Au=_u(Function.toString);ju(ct.inspectSource)||(ct.inspectSource=function(r){return Au(r)});var Dt=ct.inspectSource,Nu=S,Du=b,wa=Nu.WeakMap,Lu=Du(wa)&&/native code/.test(String(wa)),Mu=te.exports,Fu=Ro,_a=Mu("keys"),Lt=function(r){return _a[r]||(_a[r]=Fu(r))},Mt={},Uu=Lu,jo=S,Bu=L,Gu=Ir,Pe=x,Ce=jt,ku=Lt,Ku=Mt,ja="Object already initialized",lt=jo.TypeError,Wu=jo.WeakMap,Vr,br,Yr,Vu=function(r){return Yr(r)?br(r):Vr(r,{})},Yu=function(r){return function(e){var t;if(!Bu(e)||(t=br(e)).type!==r)throw lt("Incompatible receiver, "+r+" required");return t}};if(Uu||Ce.state){var w=Ce.state||(Ce.state=new Wu);w.get=w.get,w.has=w.has,w.set=w.set,Vr=function(r,e){if(w.has(r))throw lt(ja);return e.facade=r,w.set(r,e),e},br=function(r){return w.get(r)||{}},Yr=function(r){return w.has(r)}}else{var X=ku("state");Ku[X]=!0,Vr=function(r,e){if(Pe(r,X))throw lt(ja);return e.facade=r,Gu(r,X,e),e},br=function(r){return Pe(r,X)?r[X]:{}},Yr=function(r){return Pe(r,X)}}var ie={set:Vr,get:br,has:Yr,enforce:Vu,getterFor:Yu},qu=E,Hu=b,_r=x,st=_,Ju=oe.CONFIGURABLE,Xu=Dt,Ao=ie,zu=Ao.enforce,Qu=Ao.get,Ur=Object.defineProperty,Zu=st&&!qu(function(){return Ur(function(){},"length",{value:8}).length!==8}),rc=String(String).split("String"),ec=wo.exports=function(r,e,t){String(e).slice(0,7)==="Symbol("&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),t&&t.getter&&(e="get "+e),t&&t.setter&&(e="set "+e),(!_r(r,"name")||Ju&&r.name!==e)&&(st?Ur(r,"name",{value:e,configurable:!0}):r.name=e),Zu&&t&&_r(t,"arity")&&r.length!==t.arity&&Ur(r,"length",{value:t.arity});try{t&&_r(t,"constructor")&&t.constructor?st&&Ur(r,"prototype",{writable:!1}):r.prototype&&(r.prototype=void 0)}catch{}var a=zu(r);return _r(a,"source")||(a.source=rc.join(typeof e=="string"?e:"")),r};Function.prototype.toString=ec(function(){return Hu(this)&&Qu(this).source||Xu(this)},"toString");var tc=b,ac=A,nc=wo.exports,oc=_t,H=function(r,e,t,a){a||(a={});var n=a.enumerable,o=a.name!==void 0?a.name:e;if(tc(t)&&nc(t,o,a),a.global)n?r[e]=t:oc(e,t);else{try{a.unsafe?r[e]&&(n=!0):delete r[e]}catch{}n?r[e]=t:ac.f(r,e,{value:t,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return r},No={},ic=Math.ceil,vc=Math.floor,uc=Math.trunc||function(e){var t=+e;return(t>0?vc:ic)(t)},cc=uc,ve=function(r){var e=+r;return e!==e||e===0?0:cc(e)},lc=ve,sc=Math.max,fc=Math.min,Do=function(r,e){var t=lc(r);return t<0?sc(t+e,0):fc(t,e)},$c=ve,dc=Math.min,ur=function(r){return r>0?dc($c(r),9007199254740991):0},pc=ur,ue=function(r){return pc(r.length)},yc=Er,gc=Do,hc=ue,Aa=function(r){return function(e,t,a){var n=yc(e),o=hc(n),i=gc(a,o),v;if(r&&t!=t){for(;o>i;)if(v=n[i++],v!=v)return!0}else for(;o>i;i++)if((r||i in n)&&n[i]===t)return r||i||0;return!r&&-1}},Lo={includes:Aa(!0),indexOf:Aa(!1)},Oc=O,xe=x,bc=Er,Sc=Lo.indexOf,Ec=Mt,Na=Oc([].push),Mo=function(r,e){var t=bc(r),a=0,n=[],o;for(o in t)!xe(Ec,o)&&xe(t,o)&&Na(n,o);for(;e.length>a;)xe(t,o=e[a++])&&(~Sc(n,o)||Na(n,o));return n},Ft=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Ic=Mo,Tc=Ft,mc=Tc.concat("length","prototype");No.f=Object.getOwnPropertyNames||function(e){return Ic(e,mc)};var Fo={};Fo.f=Object.getOwnPropertySymbols;var Rc=F,Pc=O,Cc=No,xc=Fo,wc=m,_c=Pc([].concat),jc=Rc("Reflect","ownKeys")||function(e){var t=Cc.f(wc(e)),a=xc.f;return a?_c(t,a(e)):t},Da=x,Ac=jc,Nc=ir,Dc=A,Lc=function(r,e,t){for(var a=Ac(e),n=Dc.f,o=Nc.f,i=0;i<a.length;i++){var v=a[i];!Da(r,v)&&!(t&&Da(t,v))&&n(r,v,o(e,v))}},Mc=E,Fc=b,Uc=/#|\.prototype\./,Tr=function(r,e){var t=Gc[Bc(r)];return t==Kc?!0:t==kc?!1:Fc(e)?Mc(e):!!e},Bc=Tr.normalize=function(r){return String(r).replace(Uc,".").toLowerCase()},Gc=Tr.data={},kc=Tr.NATIVE="N",Kc=Tr.POLYFILL="P",Uo=Tr,we=S,Wc=ir.f,Vc=Ir,Yc=H,qc=_t,Hc=Lc,Jc=Uo,R=function(r,e){var t=r.target,a=r.global,n=r.stat,o,i,v,u,c,l;if(a?i=we:n?i=we[t]||qc(t,{}):i=(we[t]||{}).prototype,i)for(v in e){if(c=e[v],r.dontCallGetSet?(l=Wc(i,v),u=l&&l.value):u=i[v],o=Jc(a?v:t+(n?".":"#")+v,r.forced),!o&&u!==void 0){if(typeof c==typeof u)continue;Hc(c,u)}(r.sham||u&&u.sham)&&Vc(c,"sham",!0),Yc(i,v,c,r)}},Xc=Y,zc=S,mr=Xc(zc.process)=="process",Qc=b,Zc=String,rl=TypeError,el=function(r){if(typeof r=="object"||Qc(r))return r;throw rl("Can't set "+Zc(r)+" as a prototype")},tl=O,al=m,nl=el,Bo=Object.setPrototypeOf||("__proto__"in{}?function(){var r=!1,e={},t;try{t=tl(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(e,[]),r=e instanceof Array}catch{}return function(n,o){return al(n),nl(o),r?t(n,o):n.__proto__=o,n}}():void 0),ol=A.f,il=x,vl=I,La=vl("toStringTag"),Ut=function(r,e,t){r&&!t&&(r=r.prototype),r&&!il(r,La)&&ol(r,La,{configurable:!0,value:e})},ul=F,cl=A,ll=I,sl=_,Ma=ll("species"),fl=function(r){var e=ul(r),t=cl.f;sl&&e&&!e[Ma]&&t(e,Ma,{configurable:!0,get:function(){return this}})},$l=Zr,dl=TypeError,pl=function(r,e){if($l(e,r))return r;throw dl("Incorrect invocation")},yl=I,gl=yl("toStringTag"),Go={};Go[gl]="z";var hl=String(Go)==="[object z]",Ol=hl,bl=b,Br=Y,Sl=I,El=Sl("toStringTag"),Il=Object,Tl=Br(function(){return arguments}())=="Arguments",ml=function(r,e){try{return r[e]}catch{}},Bt=Ol?Br:function(r){var e,t,a;return r===void 0?"Undefined":r===null?"Null":typeof(t=ml(e=Il(r),El))=="string"?t:Tl?Br(e):(a=Br(e))=="Object"&&bl(e.callee)?"Arguments":a},Rl=O,Pl=E,ko=b,Cl=Bt,xl=F,wl=Dt,Ko=function(){},_l=[],Wo=xl("Reflect","construct"),Gt=/^\s*(?:class|function)\b/,jl=Rl(Gt.exec),Al=!Gt.exec(Ko),lr=function(e){if(!ko(e))return!1;try{return Wo(Ko,_l,e),!0}catch{return!1}},Vo=function(e){if(!ko(e))return!1;switch(Cl(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Al||!!jl(Gt,wl(e))}catch{return!0}};Vo.sham=!0;var Nl=!Wo||Pl(function(){var r;return lr(lr.call)||!lr(Object)||!lr(function(){r=!0})||r})?Vo:lr,Dl=Nl,Ll=ee,Ml=TypeError,Fl=function(r){if(Dl(r))return r;throw Ml(Ll(r)+" is not a constructor")},Fa=m,Ul=Fl,Bl=q,Gl=I,kl=Gl("species"),Yo=function(r,e){var t=Fa(r).constructor,a;return t===void 0||Bl(a=Fa(t)[kl])?e:Ul(a)},Kl=zr,qo=Function.prototype,Ua=qo.apply,Ba=qo.call,kt=typeof Reflect=="object"&&Reflect.apply||(Kl?Ba.bind(Ua):function(){return Ba.apply(Ua,arguments)}),Ga=O,Wl=U,Vl=zr,Yl=Ga(Ga.bind),Kt=function(r,e){return Wl(r),e===void 0?r:Vl?Yl(r,e):function(){return r.apply(e,arguments)}},ql=F,Ho=ql("document","documentElement"),Hl=O,Jl=Hl([].slice),Xl=TypeError,zl=function(r,e){if(r<e)throw Xl("Not enough arguments");return r},Ql=re,Jo=/(?:ipad|iphone|ipod).*applewebkit/i.test(Ql),P=S,Zl=kt,rs=Kt,ka=b,es=x,ts=E,Ka=Ho,as=Jl,Wa=ne,ns=zl,os=Jo,is=mr,ft=P.setImmediate,$t=P.clearImmediate,vs=P.process,_e=P.Dispatch,us=P.Function,Va=P.MessageChannel,cs=P.String,je=0,gr={},Ya="onreadystatechange",Sr,B,Ae,Ne;try{Sr=P.location}catch{}var Wt=function(r){if(es(gr,r)){var e=gr[r];delete gr[r],e()}},De=function(r){return function(){Wt(r)}},qa=function(r){Wt(r.data)},Ha=function(r){P.postMessage(cs(r),Sr.protocol+"//"+Sr.host)};(!ft||!$t)&&(ft=function(e){ns(arguments.length,1);var t=ka(e)?e:us(e),a=as(arguments,1);return gr[++je]=function(){Zl(t,void 0,a)},B(je),je},$t=function(e){delete gr[e]},is?B=function(r){vs.nextTick(De(r))}:_e&&_e.now?B=function(r){_e.now(De(r))}:Va&&!os?(Ae=new Va,Ne=Ae.port2,Ae.port1.onmessage=qa,B=rs(Ne.postMessage,Ne)):P.addEventListener&&ka(P.postMessage)&&!P.importScripts&&Sr&&Sr.protocol!=="file:"&&!ts(Ha)?(B=Ha,P.addEventListener("message",qa,!1)):Ya in Wa("script")?B=function(r){Ka.appendChild(Wa("script"))[Ya]=function(){Ka.removeChild(this),Wt(r)}}:B=function(r){setTimeout(De(r),0)});var Xo={set:ft,clear:$t},ls=re,ss=S,fs=/ipad|iphone|ipod/i.test(ls)&&ss.Pebble!==void 0,$s=re,ds=/web0s(?!.*chrome)/i.test($s),W=S,Ja=Kt,ps=ir.f,Le=Xo.set,ys=Jo,gs=fs,hs=ds,Me=mr,Xa=W.MutationObserver||W.WebKitMutationObserver,za=W.document,Qa=W.process,jr=W.Promise,Za=ps(W,"queueMicrotask"),zo=Za&&Za.value,sr,G,hr,rr,Fe,Ue,Ar,rn;zo||(sr=function(){var r,e;for(Me&&(r=Qa.domain)&&r.exit();G;){e=G.fn,G=G.next;try{e()}catch(t){throw G?rr():hr=void 0,t}}hr=void 0,r&&r.enter()},!ys&&!Me&&!hs&&Xa&&za?(Fe=!0,Ue=za.createTextNode(""),new Xa(sr).observe(Ue,{characterData:!0}),rr=function(){Ue.data=Fe=!Fe}):!gs&&jr&&jr.resolve?(Ar=jr.resolve(void 0),Ar.constructor=jr,rn=Ja(Ar.then,Ar),rr=function(){rn(sr)}):Me?rr=function(){Qa.nextTick(sr)}:(Le=Ja(Le,W),rr=function(){Le(sr)}));var Os=zo||function(r){var e={fn:r,next:void 0};hr&&(hr.next=e),G||(G=e,rr()),hr=e},bs=S,Ss=function(r,e){var t=bs.console;t&&t.error&&(arguments.length==1?t.error(r):t.error(r,e))},Vt=function(r){try{return{error:!1,value:r()}}catch(e){return{error:!0,value:e}}},Qo=function(){this.head=null,this.tail=null};Qo.prototype={add:function(r){var e={item:r,next:null};this.head?this.tail.next=e:this.head=e,this.tail=e},get:function(){var r=this.head;if(r)return this.head=r.next,this.tail===r&&(this.tail=null),r.item}};var Es=Qo,Is=S,ce=Is.Promise,Zo=typeof Deno=="object"&&Deno&&typeof Deno.version=="object",Ts=Zo,ms=mr,Rs=!Ts&&!ms&&typeof window=="object"&&typeof document=="object",Ps=S,Or=ce,Cs=b,xs=Uo,ws=Dt,_s=I,js=Rs,As=Zo,Be=wt;Or&&Or.prototype;var Ns=_s("species"),dt=!1,ri=Cs(Ps.PromiseRejectionEvent),Ds=xs("Promise",function(){var r=ws(Or),e=r!==String(Or);if(!e&&Be===66)return!0;if(!Be||Be<51||!/native code/.test(r)){var t=new Or(function(o){o(1)}),a=function(o){o(function(){},function(){})},n=t.constructor={};if(n[Ns]=a,dt=t.then(function(){})instanceof a,!dt)return!0}return!e&&(js||As)&&!ri}),Rr={CONSTRUCTOR:Ds,REJECTION_EVENT:ri,SUBCLASSING:dt},cr={},en=U,Ls=TypeError,Ms=function(r){var e,t;this.promise=new r(function(a,n){if(e!==void 0||t!==void 0)throw Ls("Bad Promise constructor");e=a,t=n}),this.resolve=en(e),this.reject=en(t)};cr.f=function(r){return new Ms(r)};var Fs=R,qr=mr,M=S,or=T,tn=H,an=Bo,Us=Ut,Bs=fl,Gs=U,Gr=b,ks=L,Ks=pl,Ws=Yo,ei=Xo.set,Yt=Os,Vs=Ss,Ys=Vt,qs=Es,ti=ie,Hr=ce,qt=Rr,ai=cr,le="Promise",ni=qt.CONSTRUCTOR,Hs=qt.REJECTION_EVENT,Js=qt.SUBCLASSING,Ge=ti.getterFor(le),Xs=ti.set,er=Hr&&Hr.prototype,k=Hr,Nr=er,oi=M.TypeError,pt=M.document,Ht=M.process,yt=ai.f,zs=yt,Qs=!!(pt&&pt.createEvent&&M.dispatchEvent),ii="unhandledrejection",Zs="rejectionhandled",nn=0,vi=1,rf=2,Jt=1,ui=2,Dr,on,ef,vn,ci=function(r){var e;return ks(r)&&Gr(e=r.then)?e:!1},li=function(r,e){var t=e.value,a=e.state==vi,n=a?r.ok:r.fail,o=r.resolve,i=r.reject,v=r.domain,u,c,l;try{n?(a||(e.rejection===ui&&af(e),e.rejection=Jt),n===!0?u=t:(v&&v.enter(),u=n(t),v&&(v.exit(),l=!0)),u===r.promise?i(oi("Promise-chain cycle")):(c=ci(u))?or(c,u,o,i):o(u)):i(t)}catch($){v&&!l&&v.exit(),i($)}},si=function(r,e){r.notified||(r.notified=!0,Yt(function(){for(var t=r.reactions,a;a=t.get();)li(a,r);r.notified=!1,e&&!r.rejection&&tf(r)}))},fi=function(r,e,t){var a,n;Qs?(a=pt.createEvent("Event"),a.promise=e,a.reason=t,a.initEvent(r,!1,!0),M.dispatchEvent(a)):a={promise:e,reason:t},!Hs&&(n=M["on"+r])?n(a):r===ii&&Vs("Unhandled promise rejection",t)},tf=function(r){or(ei,M,function(){var e=r.facade,t=r.value,a=un(r),n;if(a&&(n=Ys(function(){qr?Ht.emit("unhandledRejection",t,e):fi(ii,e,t)}),r.rejection=qr||un(r)?ui:Jt,n.error))throw n.value})},un=function(r){return r.rejection!==Jt&&!r.parent},af=function(r){or(ei,M,function(){var e=r.facade;qr?Ht.emit("rejectionHandled",e):fi(Zs,e,r.value)})},tr=function(r,e,t){return function(a){r(e,a,t)}},nr=function(r,e,t){r.done||(r.done=!0,t&&(r=t),r.value=e,r.state=rf,si(r,!0))},gt=function(r,e,t){if(!r.done){r.done=!0,t&&(r=t);try{if(r.facade===e)throw oi("Promise can't be resolved itself");var a=ci(e);a?Yt(function(){var n={done:!1};try{or(a,e,tr(gt,n,r),tr(nr,n,r))}catch(o){nr(n,o,r)}}):(r.value=e,r.state=vi,si(r,!1))}catch(n){nr({done:!1},n,r)}}};if(ni&&(k=function(e){Ks(this,Nr),Gs(e),or(Dr,this);var t=Ge(this);try{e(tr(gt,t),tr(nr,t))}catch(a){nr(t,a)}},Nr=k.prototype,Dr=function(e){Xs(this,{type:le,done:!1,notified:!1,parent:!1,reactions:new qs,rejection:!1,state:nn,value:void 0})},Dr.prototype=tn(Nr,"then",function(e,t){var a=Ge(this),n=yt(Ws(this,k));return a.parent=!0,n.ok=Gr(e)?e:!0,n.fail=Gr(t)&&t,n.domain=qr?Ht.domain:void 0,a.state==nn?a.reactions.add(n):Yt(function(){li(n,a)}),n.promise}),on=function(){var r=new Dr,e=Ge(r);this.promise=r,this.resolve=tr(gt,e),this.reject=tr(nr,e)},ai.f=yt=function(r){return r===k||r===ef?new on(r):zs(r)},Gr(Hr)&&er!==Object.prototype)){vn=er.then,Js||tn(er,"then",function(e,t){var a=this;return new k(function(n,o){or(vn,a,n,o)}).then(e,t)},{unsafe:!0});try{delete er.constructor}catch{}an&&an(er,Nr)}Fs({global:!0,constructor:!0,wrap:!0,forced:ni},{Promise:k});Us(k,le,!1);Bs(le);var Pr={},nf=I,of=Pr,vf=nf("iterator"),uf=Array.prototype,cf=function(r){return r!==void 0&&(of.Array===r||uf[vf]===r)},lf=Bt,cn=vr,sf=q,ff=Pr,$f=I,df=$f("iterator"),$i=function(r){if(!sf(r))return cn(r,df)||cn(r,"@@iterator")||ff[lf(r)]},pf=T,yf=U,gf=m,hf=ee,Of=$i,bf=TypeError,Sf=function(r,e){var t=arguments.length<2?Of(r):e;if(yf(t))return gf(pf(t,r));throw bf(hf(r)+" is not iterable")},Ef=T,ln=m,If=vr,Tf=function(r,e,t){var a,n;ln(r);try{if(a=If(r,"return"),!a){if(e==="throw")throw t;return t}a=Ef(a,r)}catch(o){n=!0,a=o}if(e==="throw")throw t;if(n)throw a;return ln(a),t},mf=Kt,Rf=T,Pf=m,Cf=ee,xf=cf,wf=ue,sn=Zr,_f=Sf,jf=$i,fn=Tf,Af=TypeError,kr=function(r,e){this.stopped=r,this.result=e},$n=kr.prototype,di=function(r,e,t){var a=t&&t.that,n=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),i=!!(t&&t.IS_ITERATOR),v=!!(t&&t.INTERRUPTED),u=mf(e,a),c,l,$,f,s,p,d,g=function(y){return c&&fn(c,"normal",y),new kr(!0,y)},h=function(y){return n?(Pf(y),v?u(y[0],y[1],g):u(y[0],y[1])):v?u(y,g):u(y)};if(o)c=r.iterator;else if(i)c=r;else{if(l=jf(r),!l)throw Af(Cf(r)+" is not iterable");if(xf(l)){for($=0,f=wf(r);f>$;$++)if(s=h(r[$]),s&&sn($n,s))return s;return new kr(!1)}c=_f(r,l)}for(p=o?r.next:c.next;!(d=Rf(p,c)).done;){try{s=h(d.value)}catch(y){fn(c,"throw",y)}if(typeof s=="object"&&s&&sn($n,s))return s}return new kr(!1)},Nf=I,pi=Nf("iterator"),yi=!1;try{var Df=0,dn={next:function(){return{done:!!Df++}},return:function(){yi=!0}};dn[pi]=function(){return this},Array.from(dn,function(){throw 2})}catch{}var Lf=function(r,e){if(!e&&!yi)return!1;var t=!1;try{var a={};a[pi]=function(){return{next:function(){return{done:t=!0}}}},r(a)}catch{}return t},Mf=ce,Ff=Lf,Uf=Rr.CONSTRUCTOR,gi=Uf||!Ff(function(r){Mf.all(r).then(void 0,function(){})}),Bf=R,Gf=T,kf=U,Kf=cr,Wf=Vt,Vf=di,Yf=gi;Bf({target:"Promise",stat:!0,forced:Yf},{all:function(e){var t=this,a=Kf.f(t),n=a.resolve,o=a.reject,i=Wf(function(){var v=kf(t.resolve),u=[],c=0,l=1;Vf(e,function($){var f=c++,s=!1;l++,Gf(v,t,$).then(function(p){s||(s=!0,u[f]=p,--l||n(u))},o)}),--l||n(u)});return i.error&&o(i.value),a.promise}});var qf=R,Hf=Rr.CONSTRUCTOR,ht=ce,Jf=F,Xf=b,zf=H,pn=ht&&ht.prototype;qf({target:"Promise",proto:!0,forced:Hf,real:!0},{catch:function(r){return this.then(void 0,r)}});if(Xf(ht)){var yn=Jf("Promise").prototype.catch;pn.catch!==yn&&zf(pn,"catch",yn,{unsafe:!0})}var Qf=R,Zf=T,r$=U,e$=cr,t$=Vt,a$=di,n$=gi;Qf({target:"Promise",stat:!0,forced:n$},{race:function(e){var t=this,a=e$.f(t),n=a.reject,o=t$(function(){var i=r$(t.resolve);a$(e,function(v){Zf(i,t,v).then(a.resolve,n)})});return o.error&&n(o.value),a.promise}});var o$=R,i$=T,v$=cr,u$=Rr.CONSTRUCTOR;o$({target:"Promise",stat:!0,forced:u$},{reject:function(e){var t=v$.f(this);return i$(t.reject,void 0,e),t.promise}});var c$=m,l$=L,s$=cr,f$=function(r,e){if(c$(r),l$(e)&&e.constructor===r)return e;var t=s$.f(r),a=t.resolve;return a(e),t.promise},$$=R,d$=F,p$=Rr.CONSTRUCTOR,y$=f$;d$("Promise");$$({target:"Promise",stat:!0,forced:p$},{resolve:function(e){return y$(this,e)}});var g$=Bt,h$=String,N=function(r){if(g$(r)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return h$(r)},O$=m,hi=function(){var r=O$(this),e="";return r.hasIndices&&(e+="d"),r.global&&(e+="g"),r.ignoreCase&&(e+="i"),r.multiline&&(e+="m"),r.dotAll&&(e+="s"),r.unicode&&(e+="u"),r.unicodeSets&&(e+="v"),r.sticky&&(e+="y"),e},Xt=E,b$=S,zt=b$.RegExp,Qt=Xt(function(){var r=zt("a","y");return r.lastIndex=2,r.exec("abcd")!=null}),S$=Qt||Xt(function(){return!zt("a","y").sticky}),E$=Qt||Xt(function(){var r=zt("^r","gy");return r.lastIndex=2,r.exec("str")!=null}),Oi={BROKEN_CARET:E$,MISSED_STICKY:S$,UNSUPPORTED_Y:Qt},bi={},I$=Mo,T$=Ft,m$=Object.keys||function(e){return I$(e,T$)},R$=_,P$=xo,C$=A,x$=m,w$=Er,_$=m$;bi.f=R$&&!P$?Object.defineProperties:function(e,t){x$(e);for(var a=w$(t),n=_$(t),o=n.length,i=0,v;o>i;)C$.f(e,v=n[i++],a[v]);return e};var j$=m,A$=bi,gn=Ft,N$=Mt,D$=Ho,L$=ne,M$=Lt,hn=">",On="<",Ot="prototype",bt="script",Si=M$("IE_PROTO"),ke=function(){},Ei=function(r){return On+bt+hn+r+On+"/"+bt+hn},bn=function(r){r.write(Ei("")),r.close();var e=r.parentWindow.Object;return r=null,e},F$=function(){var r=L$("iframe"),e="java"+bt+":",t;return r.style.display="none",D$.appendChild(r),r.src=String(e),t=r.contentWindow.document,t.open(),t.write(Ei("document.F=Object")),t.close(),t.F},Lr,Kr=function(){try{Lr=new ActiveXObject("htmlfile")}catch{}Kr=typeof document<"u"?document.domain&&Lr?bn(Lr):F$():bn(Lr);for(var r=gn.length;r--;)delete Kr[Ot][gn[r]];return Kr()};N$[Si]=!0;var Zt=Object.create||function(e,t){var a;return e!==null?(ke[Ot]=j$(e),a=new ke,ke[Ot]=null,a[Si]=e):a=Kr(),t===void 0?a:A$.f(a,t)},U$=E,B$=S,G$=B$.RegExp,k$=U$(function(){var r=G$(".","s");return!(r.dotAll&&r.exec(`
`)&&r.flags==="s")}),K$=E,W$=S,V$=W$.RegExp,Y$=K$(function(){var r=V$("(?<a>b)","g");return r.exec("b").groups.a!=="b"||"b".replace(r,"$<a>c")!=="bc"}),ar=T,se=O,q$=N,H$=hi,J$=Oi,X$=te.exports,z$=Zt,Q$=ie.get,Z$=k$,rd=Y$,ed=X$("native-string-replace",String.prototype.replace),Jr=RegExp.prototype.exec,St=Jr,td=se("".charAt),ad=se("".indexOf),nd=se("".replace),Ke=se("".slice),Et=function(){var r=/a/,e=/b*/g;return ar(Jr,r,"a"),ar(Jr,e,"a"),r.lastIndex!==0||e.lastIndex!==0}(),Ii=J$.BROKEN_CARET,It=/()??/.exec("")[1]!==void 0,od=Et||It||Ii||Z$||rd;od&&(St=function(e){var t=this,a=Q$(t),n=q$(e),o=a.raw,i,v,u,c,l,$,f;if(o)return o.lastIndex=t.lastIndex,i=ar(St,o,n),t.lastIndex=o.lastIndex,i;var s=a.groups,p=Ii&&t.sticky,d=ar(H$,t),g=t.source,h=0,y=n;if(p&&(d=nd(d,"y",""),ad(d,"g")===-1&&(d+="g"),y=Ke(n,t.lastIndex),t.lastIndex>0&&(!t.multiline||t.multiline&&td(n,t.lastIndex-1)!==`
`)&&(g="(?: "+g+")",y=" "+y,h++),v=new RegExp("^(?:"+g+")",d)),It&&(v=new RegExp("^"+g+"$(?!\\s)",d)),Et&&(u=t.lastIndex),c=ar(Jr,p?v:t,y),p?c?(c.input=Ke(c.input,h),c[0]=Ke(c[0],h),c.index=t.lastIndex,t.lastIndex+=c[0].length):t.lastIndex=0:Et&&c&&(t.lastIndex=t.global?c.index+c[0].length:u),It&&c&&c.length>1&&ar(ed,c[0],v,function(){for(l=1;l<arguments.length-2;l++)arguments[l]===void 0&&(c[l]=void 0)}),c&&s)for(c.groups=$=z$(null),l=0;l<s.length;l++)f=s[l],$[f[0]]=c[f[1]];return c});var fe=St,id=R,Sn=fe;id({target:"RegExp",proto:!0,forced:/./.exec!==Sn},{exec:Sn});var En=O,In=H,vd=fe,Tn=E,Ti=I,ud=Ir,cd=Ti("species"),We=RegExp.prototype,ra=function(r,e,t,a){var n=Ti(r),o=!Tn(function(){var c={};return c[n]=function(){return 7},""[r](c)!=7}),i=o&&!Tn(function(){var c=!1,l=/a/;return r==="split"&&(l={},l.constructor={},l.constructor[cd]=function(){return l},l.flags="",l[n]=/./[n]),l.exec=function(){return c=!0,null},l[n](""),!c});if(!o||!i||t){var v=En(/./[n]),u=e(n,""[r],function(c,l,$,f,s){var p=En(c),d=l.exec;return d===vd||d===We.exec?o&&!s?{done:!0,value:v(l,$,f)}:{done:!0,value:p($,l,f)}:{done:!1}});In(String.prototype,r,u[0]),In(We,n,u[1])}a&&ud(We[n],"sham",!0)},ea=O,ld=ve,sd=N,fd=j,$d=ea("".charAt),mn=ea("".charCodeAt),dd=ea("".slice),Rn=function(r){return function(e,t){var a=sd(fd(e)),n=ld(t),o=a.length,i,v;return n<0||n>=o?r?"":void 0:(i=mn(a,n),i<55296||i>56319||n+1===o||(v=mn(a,n+1))<56320||v>57343?r?$d(a,n):i:r?dd(a,n,n+2):(i-55296<<10)+(v-56320)+65536)}},pd={codeAt:Rn(!1),charAt:Rn(!0)},yd=pd.charAt,ta=function(r,e,t){return e+(t?yd(r,e).length:1)},Pn=T,gd=m,hd=b,Od=Y,bd=fe,Sd=TypeError,aa=function(r,e){var t=r.exec;if(hd(t)){var a=Pn(t,r,e);return a!==null&&gd(a),a}if(Od(r)==="RegExp")return Pn(bd,r,e);throw Sd("RegExp#exec called on incompatible receiver")},Ed=T,Id=ra,Td=m,md=q,Rd=ur,Ve=N,Pd=j,Cd=vr,xd=ta,Cn=aa;Id("match",function(r,e,t){return[function(n){var o=Pd(this),i=md(n)?void 0:Cd(n,r);return i?Ed(i,n,o):new RegExp(n)[r](Ve(o))},function(a){var n=Td(this),o=Ve(a),i=t(e,n,o);if(i.done)return i.value;if(!n.global)return Cn(n,o);var v=n.unicode;n.lastIndex=0;for(var u=[],c=0,l;(l=Cn(n,o))!==null;){var $=Ve(l[0]);u[c]=$,$===""&&(n.lastIndex=xd(o,Rd(n.lastIndex),v)),c++}return c===0?null:u}]});var na=O,wd=ae,_d=Math.floor,Ye=na("".charAt),jd=na("".replace),qe=na("".slice),Ad=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,Nd=/\$([$&'`]|\d{1,2})/g,Dd=function(r,e,t,a,n,o){var i=t+r.length,v=a.length,u=Nd;return n!==void 0&&(n=wd(n),u=Ad),jd(o,u,function(c,l){var $;switch(Ye(l,0)){case"$":return"$";case"&":return r;case"`":return qe(e,0,t);case"'":return qe(e,i);case"<":$=n[qe(l,1,-1)];break;default:var f=+l;if(f===0)return c;if(f>v){var s=_d(f/10);return s===0?c:s<=v?a[s-1]===void 0?Ye(l,1):a[s-1]+Ye(l,1):c}$=a[f-1]}return $===void 0?"":$})},Ld=kt,xn=T,$e=O,Md=ra,Fd=E,Ud=m,Bd=b,Gd=q,kd=ve,Kd=ur,z=N,Wd=j,Vd=ta,Yd=vr,qd=Dd,Hd=aa,Jd=I,Tt=Jd("replace"),Xd=Math.max,zd=Math.min,Qd=$e([].concat),He=$e([].push),wn=$e("".indexOf),_n=$e("".slice),Zd=function(r){return r===void 0?r:String(r)},rp=function(){return"a".replace(/./,"$0")==="$0"}(),jn=function(){return/./[Tt]?/./[Tt]("a","$0")==="":!1}(),ep=!Fd(function(){var r=/./;return r.exec=function(){var e=[];return e.groups={a:"7"},e},"".replace(r,"$<a>")!=="7"});Md("replace",function(r,e,t){var a=jn?"$":"$0";return[function(o,i){var v=Wd(this),u=Gd(o)?void 0:Yd(o,Tt);return u?xn(u,o,v,i):xn(e,z(v),o,i)},function(n,o){var i=Ud(this),v=z(n);if(typeof o=="string"&&wn(o,a)===-1&&wn(o,"$<")===-1){var u=t(e,i,v,o);if(u.done)return u.value}var c=Bd(o);c||(o=z(o));var l=i.global;if(l){var $=i.unicode;i.lastIndex=0}for(var f=[];;){var s=Hd(i,v);if(s===null||(He(f,s),!l))break;var p=z(s[0]);p===""&&(i.lastIndex=Vd(v,Kd(i.lastIndex),$))}for(var d="",g=0,h=0;h<f.length;h++){s=f[h];for(var y=z(s[0]),D=Xd(zd(kd(s.index),v.length),0),de=[],pe=1;pe<s.length;pe++)He(de,Zd(s[pe]));var ye=s.groups;if(c){var la=Qd([y],de,D,v);ye!==void 0&&He(la,ye);var sa=z(Ld(o,void 0,la))}else sa=qd(y,v,D,de,ye,o);D>=g&&(d+=_n(v,g,D)+sa,g=D+y.length)}return d+_n(v,g)}]},!ep||!rp||jn);var tp=L,ap=Y,np=I,op=np("match"),mi=function(r){var e;return tp(r)&&((e=r[op])!==void 0?!!e:ap(r)=="RegExp")},ip=mi,vp=TypeError,oa=function(r){if(ip(r))throw vp("The method doesn't accept regular expressions");return r},up=I,cp=up("match"),ia=function(r){var e=/./;try{"/./"[r](e)}catch{try{return e[cp]=!1,"/./"[r](e)}catch{}}return!1},lp=R,Ri=O,sp=ir.f,fp=ur,An=N,$p=oa,dp=j,pp=ia,Nn=Ri("".startsWith),yp=Ri("".slice),gp=Math.min,Pi=pp("startsWith"),hp=!Pi&&!!function(){var r=sp(String.prototype,"startsWith");return r&&!r.writable}();lp({target:"String",proto:!0,forced:!hp&&!Pi},{startsWith:function(e){var t=An(dp(this));$p(e);var a=fp(gp(arguments.length>1?arguments[1]:void 0,t.length)),n=An(e);return Nn?Nn(t,n,a):yp(t,a,a+n.length)===n}});var Op=I,bp=Zt,Sp=A.f,mt=Op("unscopables"),Rt=Array.prototype;Rt[mt]==null&&Sp(Rt,mt,{configurable:!0,value:bp(null)});var Ep=function(r){Rt[mt][r]=!0},Ip=E,Tp=!Ip(function(){function r(){}return r.prototype.constructor=null,Object.getPrototypeOf(new r)!==r.prototype}),mp=x,Rp=b,Pp=ae,Cp=Lt,xp=Tp,Dn=Cp("IE_PROTO"),Pt=Object,wp=Pt.prototype,Ci=xp?Pt.getPrototypeOf:function(r){var e=Pp(r);if(mp(e,Dn))return e[Dn];var t=e.constructor;return Rp(t)&&e instanceof t?t.prototype:e instanceof Pt?wp:null},_p=E,jp=b,Ap=L,Ln=Ci,Np=H,Dp=I,Ct=Dp("iterator"),xi=!1,V,Je,Xe;[].keys&&(Xe=[].keys(),"next"in Xe?(Je=Ln(Ln(Xe)),Je!==Object.prototype&&(V=Je)):xi=!0);var Lp=!Ap(V)||_p(function(){var r={};return V[Ct].call(r)!==r});Lp&&(V={});jp(V[Ct])||Np(V,Ct,function(){return this});var wi={IteratorPrototype:V,BUGGY_SAFARI_ITERATORS:xi},Mp=wi.IteratorPrototype,Fp=Zt,Up=Qr,Bp=Ut,Gp=Pr,kp=function(){return this},Kp=function(r,e,t,a){var n=e+" Iterator";return r.prototype=Fp(Mp,{next:Up(+!a,t)}),Bp(r,n,!1),Gp[n]=kp,r},Wp=R,Vp=T,_i=oe,Yp=b,qp=Kp,Mn=Ci,Fn=Bo,Hp=Ut,Jp=Ir,ze=H,Xp=I,zp=Pr,ji=wi,Qp=_i.PROPER,Zp=_i.CONFIGURABLE,Un=ji.IteratorPrototype,Mr=ji.BUGGY_SAFARI_ITERATORS,fr=Xp("iterator"),Bn="keys",$r="values",Gn="entries",ry=function(){return this},ey=function(r,e,t,a,n,o,i){qp(t,e,a);var v=function(h){if(h===n&&f)return f;if(!Mr&&h in l)return l[h];switch(h){case Bn:return function(){return new t(this,h)};case $r:return function(){return new t(this,h)};case Gn:return function(){return new t(this,h)}}return function(){return new t(this)}},u=e+" Iterator",c=!1,l=r.prototype,$=l[fr]||l["@@iterator"]||n&&l[n],f=!Mr&&$||v(n),s=e=="Array"&&l.entries||$,p,d,g;if(s&&(p=Mn(s.call(new r)),p!==Object.prototype&&p.next&&(Mn(p)!==Un&&(Fn?Fn(p,Un):Yp(p[fr])||ze(p,fr,ry)),Hp(p,u,!0))),Qp&&n==$r&&$&&$.name!==$r&&(Zp?Jp(l,"name",$r):(c=!0,f=function(){return Vp($,this)})),n)if(d={values:v($r),keys:o?f:v(Bn),entries:v(Gn)},i)for(g in d)(Mr||c||!(g in l))&&ze(l,g,d[g]);else Wp({target:e,proto:!0,forced:Mr||c},d);return l[fr]!==f&&ze(l,fr,f,{name:n}),zp[e]=f,d},ty=function(r,e){return{value:r,done:e}},ay=Er,va=Ep,kn=Pr,Ai=ie,ny=A.f,oy=ey,Fr=ty,iy=_,Ni="Array Iterator",vy=Ai.set,uy=Ai.getterFor(Ni),cy=oy(Array,"Array",function(r,e){vy(this,{type:Ni,target:ay(r),index:0,kind:e})},function(){var r=uy(this),e=r.target,t=r.kind,a=r.index++;return!e||a>=e.length?(r.target=void 0,Fr(void 0,!0)):t=="keys"?Fr(a,!1):t=="values"?Fr(e[a],!1):Fr([a,e[a]],!1)},"values"),Kn=kn.Arguments=kn.Array;va("keys");va("values");va("entries");if(iy&&Kn.name!=="values")try{ny(Kn,"name",{value:"values"})}catch{}var ly={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},sy=ne,Qe=sy("span").classList,Wn=Qe&&Qe.constructor&&Qe.constructor.prototype,fy=Wn===Object.prototype?void 0:Wn,Vn=S,Di=ly,$y=fy,yr=cy,Ze=Ir,Li=I,rt=Li("iterator"),Yn=Li("toStringTag"),et=yr.values,Mi=function(r,e){if(r){if(r[rt]!==et)try{Ze(r,rt,et)}catch{r[rt]=et}if(r[Yn]||Ze(r,Yn,e),Di[e]){for(var t in yr)if(r[t]!==yr[t])try{Ze(r,t,yr[t])}catch{r[t]=yr[t]}}}};for(var tt in Di)Mi(Vn[tt]&&Vn[tt].prototype,tt);Mi($y,"DOMTokenList");var dy=U,py=ae,yy=ho,gy=ue,hy=TypeError,qn=function(r){return function(e,t,a,n){dy(t);var o=py(e),i=yy(o),v=gy(o),u=r?v-1:0,c=r?-1:1;if(a<2)for(;;){if(u in i){n=i[u],u+=c;break}if(u+=c,r?u<0:v<=u)throw hy("Reduce of empty array with no initial value")}for(;r?u>=0:v>u;u+=c)u in i&&(n=t(n,i[u],u,o));return n}},Oy={left:qn(!1),right:qn(!0)},by=E,Fi=function(r,e){var t=[][r];return!!t&&by(function(){t.call(null,e||function(){return 1},1)})},Sy=R,Ey=Oy.left,Iy=Fi,Hn=wt,Ty=mr,my=Iy("reduce"),Ry=!Ty&&Hn>79&&Hn<83;Sy({target:"Array",proto:!0,forced:!my||Ry},{reduce:function(e){var t=arguments.length;return Ey(this,e,t,t>1?arguments[1]:void 0)}});var Py=R,Ui=O,Cy=ir.f,xy=ur,Jn=N,wy=oa,_y=j,jy=ia,Xn=Ui("".endsWith),Ay=Ui("".slice),Ny=Math.min,Bi=jy("endsWith"),Dy=!Bi&&!!function(){var r=Cy(String.prototype,"endsWith");return r&&!r.writable}();Py({target:"String",proto:!0,forced:!Dy&&!Bi},{endsWith:function(e){var t=Jn(_y(this));wy(e);var a=arguments.length>1?arguments[1]:void 0,n=t.length,o=a===void 0?n:Ny(xy(a),n),i=Jn(e);return Xn?Xn(t,i,o):Ay(t,o-i.length,o)===i}});var Ly=At,My=A,Fy=Qr,Uy=function(r,e,t){var a=Ly(e);a in r?My.f(r,a,Fy(0,t)):r[a]=t},zn=Do,By=ue,Gy=Uy,ky=Array,Ky=Math.max,Wy=function(r,e,t){for(var a=By(r),n=zn(e,a),o=zn(t===void 0?a:t,a),i=ky(Ky(o-n,0)),v=0;n<o;n++,v++)Gy(i,v,r[n]);return i.length=v,i},Vy=kt,dr=T,ua=O,Yy=ra,qy=m,Hy=q,Jy=mi,Qn=j,Xy=Yo,zy=ta,Qy=ur,at=N,Zy=vr,Zn=Wy,ro=aa,rg=fe,eg=Oi,tg=E,Q=eg.UNSUPPORTED_Y,eo=4294967295,ag=Math.min,Gi=[].push,ng=ua(/./.exec),Z=ua(Gi),pr=ua("".slice),og=!tg(function(){var r=/(?:)/,e=r.exec;r.exec=function(){return e.apply(this,arguments)};var t="ab".split(r);return t.length!==2||t[0]!=="a"||t[1]!=="b"});Yy("split",function(r,e,t){var a;return"abbc".split(/(b)*/)[1]=="c"||"test".split(/(?:)/,-1).length!=4||"ab".split(/(?:ab)*/).length!=2||".".split(/(.?)(.?)/).length!=4||".".split(/()()/).length>1||"".split(/.?/).length?a=function(n,o){var i=at(Qn(this)),v=o===void 0?eo:o>>>0;if(v===0)return[];if(n===void 0)return[i];if(!Jy(n))return dr(e,i,n,v);for(var u=[],c=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(n.sticky?"y":""),l=0,$=new RegExp(n.source,c+"g"),f,s,p;(f=dr(rg,$,i))&&(s=$.lastIndex,!(s>l&&(Z(u,pr(i,l,f.index)),f.length>1&&f.index<i.length&&Vy(Gi,u,Zn(f,1)),p=f[0].length,l=s,u.length>=v)));)$.lastIndex===f.index&&$.lastIndex++;return l===i.length?(p||!ng($,""))&&Z(u,""):Z(u,pr(i,l)),u.length>v?Zn(u,0,v):u}:"0".split(void 0,0).length?a=function(n,o){return n===void 0&&o===0?[]:dr(e,this,n,o)}:a=e,[function(o,i){var v=Qn(this),u=Hy(o)?void 0:Zy(o,r);return u?dr(u,o,v,i):dr(a,at(v),o,i)},function(n,o){var i=qy(this),v=at(n),u=t(a,i,v,o,a!==e);if(u.done)return u.value;var c=Xy(i,RegExp),l=i.unicode,$=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(Q?"g":"y"),f=new c(Q?"^(?:"+i.source+")":i,$),s=o===void 0?eo:o>>>0;if(s===0)return[];if(v.length===0)return ro(f,v)===null?[v]:[];for(var p=0,d=0,g=[];d<v.length;){f.lastIndex=Q?0:d;var h=ro(f,Q?pr(v,d):v),y;if(h===null||(y=ag(Qy(f.lastIndex+(Q?d:0)),v.length))===p)d=zy(v,d,l);else{if(Z(g,pr(v,p,d)),g.length===s)return g;for(var D=1;D<=h.length-1;D++)if(Z(g,h[D]),g.length===s)return g;d=p=y}}return Z(g,pr(v,p)),g}]},!og,Q);var ki=`	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`,ig=O,vg=j,ug=N,cg=ki,to=ig("".replace),Xr="["+cg+"]",lg=RegExp("^"+Xr+Xr+"*"),sg=RegExp(Xr+Xr+"*$"),nt=function(r){return function(e){var t=ug(vg(e));return r&1&&(t=to(t,lg,"")),r&2&&(t=to(t,sg,"")),t}},fg={start:nt(1),end:nt(2),trim:nt(3)},$g=oe.PROPER,dg=E,ao=ki,no="\u200B\x85\u180E",pg=function(r){return dg(function(){return!!ao[r]()||no[r]()!==no||$g&&ao[r].name!==r})},yg=R,gg=fg.trim,hg=pg;yg({target:"String",proto:!0,forced:hg("trim")},{trim:function(){return gg(this)}});var Og=R,bg=O,Sg=Lo.indexOf,Eg=Fi,xt=bg([].indexOf),oo=!!xt&&1/xt([1],1,-0)<0,Ig=Eg("indexOf");Og({target:"Array",proto:!0,forced:oo||!Ig},{indexOf:function(e){var t=arguments.length>1?arguments[1]:void 0;return oo?xt(this,e,t)||0:Sg(this,e,t)}});var Tg=R,mg=O,Rg=oa,Pg=j,io=N,Cg=ia,xg=mg("".indexOf);Tg({target:"String",proto:!0,forced:!Cg("includes")},{includes:function(e){return!!~xg(io(Pg(this)),io(Rg(e)),arguments.length>1?arguments[1]:void 0)}});var wg=Y,_g=Array.isArray||function(e){return wg(e)=="Array"},jg=R,Ag=O,Ng=_g,Dg=Ag([].reverse),vo=[1,2];jg({target:"Array",proto:!0,forced:String(vo)===String(vo.reverse())},{reverse:function(){return Ng(this)&&(this.length=this.length),Dg(this)}});var Lg=T,Mg=x,Fg=Zr,Ug=hi,uo=RegExp.prototype,Bg=function(r){var e=r.flags;return e===void 0&&!("flags"in uo)&&!Mg(r,"flags")&&Fg(uo,r)?Lg(Ug,r):e},Gg=oe.PROPER,kg=H,Kg=m,co=N,Wg=E,Vg=Bg,ca="toString",Yg=RegExp.prototype,Ki=Yg[ca],qg=Wg(function(){return Ki.call({source:"a",flags:"b"})!="/a/b"}),Hg=Gg&&Ki.name!=ca;(qg||Hg)&&kg(RegExp.prototype,ca,function(){var e=Kg(this),t=co(e.source),a=co(Vg(e));return"/"+t+"/"+a},{unsafe:!0});export{Jg as a,fa as c,Xg as g};
