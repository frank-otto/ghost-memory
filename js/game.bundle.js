/* Ghost Memory — bundled with three.js (MIT, (c) 2010-2026 three.js authors) */
(()=>{var Rm=Object.defineProperty;var Cm=(n,t)=>{for(var e in t)Rm(n,e,{get:t[e],enumerable:!0})};var Yd=0,Rh=1,$d=2;var ps=1,Zd=2,lr=3,Vi=0,en=1,Ve=2,Ln=0,cr=1,Be=2,Ch=3,Ph=4,Jd=5;var ms=100,Kd=101,Qd=102,jd=103,tf=104,ef=200,nf=201,sf=202,rf=203,Ih=204,Lh=205,af=206,of=207,lf=208,cf=209,hf=210,uf=211,df=212,ff=213,pf=214,Io=0,Lo=1,Do=2,Ys=3,No=4,Uo=5,Fo=6,Oo=7,Dh=0,mf=1,gf=2,$n=0,Sa=1,ba=2,Ta=3,gs=4,Ea=5,wa=6,Aa=7;var Nh=300,Wi=301,xs=302,fl=303,pl=304,Ra=306,os=1e3,ei=1001,Bo=1002,Ze=1003,xf=1004;var Ca=1005;var je=1006,ml=1007;var Xi=1008;var mn=1009,Uh=1010,Fh=1011,hr=1012,gl=1013,Zn=1014,Dn=1015,We=1016,xl=1017,_l=1018,ur=1020,Oh=35902,Bh=35899,kh=1021,zh=1022,Nn=1023,si=1026,qi=1027,vl=1028,yl=1029,Yi=1030,Ml=1031;var Sl=1033,Pa=33776,Ia=33777,La=33778,Da=33779,bl=35840,Tl=35841,El=35842,wl=35843,Al=36196,Rl=37492,Cl=37496,Pl=37488,Il=37489,Na=37490,Ll=37491,Dl=37808,Nl=37809,Ul=37810,Fl=37811,Ol=37812,Bl=37813,kl=37814,zl=37815,Hl=37816,Gl=37817,Vl=37818,Wl=37819,Xl=37820,ql=37821,Yl=36492,$l=36494,Zl=36495,Jl=36283,Kl=36284,Ua=36285,Ql=36286;var Wr=2300,ko=2301,Co=2302,ph=2303,mh=2400,gh=2401,xh=2402;var _f=3200;var jl=0,vf=1,Mi="",Ge="srgb",Xr="srgb-linear",qr="linear",ue="srgb";var Po=7680;var yf=519,Mf=512,Sf=513,bf=514,tc=515,Tf=516,Ef=517,ec=518,wf=519,Hh=35044,dr=35048;var Gh="300 es",Wn=2e3,$s=2001;function Pm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Im(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Yr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Af(){let n=Yr("canvas");return n.style.display="block",n}var ud={},Zs=null;function $r(...n){let t="THREE."+n.shift();Zs?Zs("log",t,...n):console.log(t,...n)}function Rf(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Vt(...n){n=Rf(n);let t="THREE."+n.shift();if(Zs)Zs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Gt(...n){n=Rf(n);let t="THREE."+n.shift();if(Zs)Zs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function as(...n){let t=n.join(" ");t in ud||(ud[t]=!0,Vt(...n))}function Cf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Pf={[Io]:Lo,[Do]:Fo,[No]:Oo,[Ys]:Uo,[Lo]:Io,[Fo]:Do,[Oo]:No,[Uo]:Ys},ri=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dd=1234567,zr=Math.PI/180,Js=180/Math.PI;function ii(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function Qt(n,t,e){return Math.max(t,Math.min(e,n))}function Vh(n,t){return(n%t+t)%t}function Lm(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Dm(n,t,e){return n!==t?(e-n)/(t-n):0}function Hr(n,t,e){return(1-e)*n+e*t}function Nm(n,t,e,i){return Hr(n,t,1-Math.exp(-e*i))}function Um(n,t=1){return t-Math.abs(Vh(n,t*2)-t)}function Fm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Om(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Bm(n,t){return n+Math.floor(Math.random()*(t-n+1))}function km(n,t){return n+Math.random()*(t-n)}function zm(n){return n*(.5-Math.random())}function Hm(n){n!==void 0&&(dd=n);let t=dd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Gm(n){return n*zr}function Vm(n){return n*Js}function Wm(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Xm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function qm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ym(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),d=r((t-i)/2),u=a((t-i)/2),f=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*d,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*d,o*c);break;case"ZXZ":n.set(l*d,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*h,o*c);break;default:Vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ye(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Fa={DEG2RAD:zr,RAD2DEG:Js,generateUUID:ii,clamp:Qt,euclideanModulo:Vh,mapLinear:Lm,inverseLerp:Dm,lerp:Hr,damp:Nm,pingpong:Um,smoothstep:Fm,smootherstep:Om,randInt:Bm,randFloat:km,randFloatSpread:zm,seededRandom:Hm,degToRad:Gm,radToDeg:Vm,isPowerOfTwo:Wm,ceilPowerOfTwo:Xm,floorPowerOfTwo:qm,setQuaternionFromProperEuler:Ym,normalize:ye,denormalize:Vn},Zh=class Zh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zh.prototype.isVector2=!0;var nt=Zh,Mn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],g=r[a+2],M=r[a+3];if(d!==M||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*M;m<0&&(u=-u,f=-f,g=-g,M=-M,m=-m);let p=1-o;if(m<.9995){let b=Math.acos(m),A=Math.sin(b);p=Math.sin(p*b)/A,o=Math.sin(o*b)/A,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+M*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+M*o;let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Jh=class Jh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Vc.copy(this).projectOnVector(t),this.sub(Vc)}reflect(t){return this.sub(Vc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Jh.prototype.isVector3=!0;var C=Jh,Vc=new C,fd=new Mn,Kh=class Kh{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],M=s[0],m=s[3],p=s[6],b=s[1],A=s[4],y=s[7],E=s[2],T=s[5],P=s[8];return r[0]=a*M+o*b+l*E,r[3]=a*m+o*A+l*T,r[6]=a*p+o*y+l*P,r[1]=c*M+h*b+d*E,r[4]=c*m+h*A+d*T,r[7]=c*p+h*y+d*P,r[2]=u*M+f*b+g*E,r[5]=u*m+f*A+g*T,r[8]=u*p+f*y+g*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=d*M,t[1]=(s*c-h*i)*M,t[2]=(o*i-s*a)*M,t[3]=u*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=f*M,t[7]=(i*l-c*e)*M,t[8]=(a*e-i*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return as("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wc.makeScale(t,e)),this}rotate(t){return as("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wc.makeRotation(-t)),this}translate(t,e){return as("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Kh.prototype.isMatrix3=!0;var Yt=Kh,Wc=new Yt,pd=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),md=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $m(){let n={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ue&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(s.r=qs(s.r),s.g=qs(s.g),s.b=qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return as("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return as("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Xr]:{primaries:t,whitePoint:i,transfer:qr,toXYZ:pd,fromXYZ:md,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:i,transfer:ue,toXYZ:pd,fromXYZ:md,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),n}var te=$m();function vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Rs,zo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Rs===void 0&&(Rs=Yr("canvas")),Rs.width=t.width,Rs.height=t.height;let s=Rs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Rs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Yr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=vi(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(vi(e[i]/255)*255):e[i]=vi(e[i]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zm=0,Ks=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=ii(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xc(s[a].image)):r.push(Xc(s[a]))}else r=Xc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Xc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?zo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var Jm=0,qc=new C,un=class n extends ri{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ei,s=ei,r=je,a=Xi,o=Nn,l=mn,c=n.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=ii(),this.name="",this.source=new Ks(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qc).x}get height(){return this.source.getSize(qc).y}get depth(){return this.source.getSize(qc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case os:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case Bo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case os:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case Bo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Nh;un.DEFAULT_ANISOTROPY=1;var Qh=class Qh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,y=(f+1)/2,E=(p+1)/2,T=(h+u)/4,P=(d+M)/4,v=(g+m)/4;return A>y&&A>E?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=T/i,r=P/i):y>E?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=T/s,r=v/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=P/r,s=v/r),this.set(i,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-M)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qh.prototype.isVector4=!0;var Ue=Qh,Ho=class extends ri{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new un(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ks(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oe=class extends Ho{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Zr=class extends un{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Go=class extends un{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var dl=class dl{constructor(t,e,i,s,r,a,o,l,c,h,d,u,f,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,d,u,f,g,M,m)}set(t,e,i,s,r,a,o,l,c,h,d,u,f,g,M,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Cs.setFromMatrixColumn(t,0).length(),r=1/Cs.setFromMatrixColumn(t,1).length(),a=1/Cs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,M=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-M*c,e[9]=-o*l,e[2]=M-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,M=c*d;e[0]=u+M*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=M+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,M=c*d;e[0]=u-M*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=M-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,M=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+M,e[1]=l*d,e[5]=M*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=M-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-M*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,M=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+M,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=M*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Km,t,Qm)}lookAt(t,e,i){let s=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ii.crossVectors(i,vn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ii.crossVectors(i,vn)),Ii.normalize(),eo.crossVectors(vn,Ii),s[0]=Ii.x,s[4]=eo.x,s[8]=vn.x,s[1]=Ii.y,s[5]=eo.y,s[9]=vn.y,s[2]=Ii.z,s[6]=eo.z,s[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],M=i[6],m=i[10],p=i[14],b=i[3],A=i[7],y=i[11],E=i[15],T=s[0],P=s[4],v=s[8],w=s[12],I=s[1],N=s[5],O=s[9],V=s[13],U=s[2],k=s[6],q=s[10],X=s[14],at=s[3],Y=s[7],j=s[11],it=s[15];return r[0]=a*T+o*I+l*U+c*at,r[4]=a*P+o*N+l*k+c*Y,r[8]=a*v+o*O+l*q+c*j,r[12]=a*w+o*V+l*X+c*it,r[1]=h*T+d*I+u*U+f*at,r[5]=h*P+d*N+u*k+f*Y,r[9]=h*v+d*O+u*q+f*j,r[13]=h*w+d*V+u*X+f*it,r[2]=g*T+M*I+m*U+p*at,r[6]=g*P+M*N+m*k+p*Y,r[10]=g*v+M*O+m*q+p*j,r[14]=g*w+M*V+m*X+p*it,r[3]=b*T+A*I+y*U+E*at,r[7]=b*P+A*N+y*k+E*Y,r[11]=b*v+A*O+y*q+E*j,r[15]=b*w+A*V+y*X+E*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],M=t[7],m=t[11],p=t[15],b=l*f-c*u,A=o*f-c*d,y=o*u-l*d,E=a*f-c*h,T=a*u-l*h,P=a*d-o*h;return e*(M*b-m*A+p*y)-i*(g*b-m*E+p*T)+s*(g*A-M*E+p*P)-r*(g*y-M*T+m*P)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],M=t[13],m=t[14],p=t[15],b=e*o-i*a,A=e*l-s*a,y=e*c-r*a,E=i*l-s*o,T=i*c-r*o,P=s*c-r*l,v=h*M-d*g,w=h*m-u*g,I=h*p-f*g,N=d*m-u*M,O=d*p-f*M,V=u*p-f*m,U=b*V-A*O+y*N+E*I-T*w+P*v;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/U;return t[0]=(o*V-l*O+c*N)*k,t[1]=(s*O-i*V-r*N)*k,t[2]=(M*P-m*T+p*E)*k,t[3]=(u*T-d*P-f*E)*k,t[4]=(l*I-a*V-c*w)*k,t[5]=(e*V-s*I+r*w)*k,t[6]=(m*y-g*P-p*A)*k,t[7]=(h*P-u*y+f*A)*k,t[8]=(a*O-o*I+c*v)*k,t[9]=(i*I-e*O-r*v)*k,t[10]=(g*T-M*y+p*b)*k,t[11]=(d*y-h*T-f*b)*k,t[12]=(o*w-a*N-l*v)*k,t[13]=(e*N-i*w+s*v)*k,t[14]=(M*A-g*E-m*b)*k,t[15]=(h*E-d*A+u*b)*k,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,M=a*h,m=a*d,p=o*d,b=l*c,A=l*h,y=l*d,E=i.x,T=i.y,P=i.z;return s[0]=(1-(M+p))*E,s[1]=(f+y)*E,s[2]=(g-A)*E,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(u+p))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(g+A)*P,s[9]=(m-b)*P,s[10]=(1-(u+M))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Cs.set(s[0],s[1],s[2]).length(),o=Cs.set(s[4],s[5],s[6]).length(),l=Cs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),kn.copy(this);let c=1/a,h=1/o,d=1/l;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,e.setFromRotationMatrix(kn),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=Wn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===Wn)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===$s)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Wn,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s),g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===Wn)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===$s)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};dl.prototype.isMatrix4=!0;var he=dl,Cs=new C,kn=new he,Km=new C(0,0,0),Qm=new C(1,1,1),Ii=new C,eo=new C,vn=new C,gd=new he,xd=new Mn,In=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return gd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xd.setFromEuler(this),this.setFromQuaternion(xd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};In.DEFAULT_ORDER="XYZ";var Qs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jm=0,_d=new C,Ps=new Mn,fi=new he,no=new C,Pr=new C,t0=new C,e0=new Mn,vd=new C(1,0,0),yd=new C(0,1,0),Md=new C(0,0,1),Sd={type:"added"},n0={type:"removed"},Is={type:"childadded",child:null},Yc={type:"childremoved",child:null},Je=class n extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new C,e=new In,i=new Mn,s=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Yt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.premultiply(Ps),this}rotateX(t){return this.rotateOnAxis(vd,t)}rotateY(t){return this.rotateOnAxis(yd,t)}rotateZ(t){return this.rotateOnAxis(Md,t)}translateOnAxis(t,e){return _d.copy(t).applyQuaternion(this.quaternion),this.position.add(_d.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vd,t)}translateY(t){return this.translateOnAxis(yd,t)}translateZ(t){return this.translateOnAxis(Md,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?no.copy(t):no.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(Pr,no,this.up):fi.lookAt(no,Pr,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(fi),this.quaternion.premultiply(Ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sd),Is.child=t,this.dispatchEvent(Is),Is.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(n0),Yc.child=t,this.dispatchEvent(Yc),Yc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sd),Is.child=t,this.dispatchEvent(Is),Is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,t,t0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Je.DEFAULT_UP=new C(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var be=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},i0={type:"move"},js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,i),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(i0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new be;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},If={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},io={h:0,s:0,l:0};function $c(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var wt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=Vh(t,1),e=Qt(e,0,1),i=Qt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=$c(a,r,t+1/3),this.g=$c(a,r,t),this.b=$c(a,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=Ge){function i(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let i=If[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=qs(t.r),this.g=qs(t.g),this.b=qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return te.workingToColorSpace(an.copy(this),t),Math.round(Qt(an.r*255,0,255))*65536+Math.round(Qt(an.g*255,0,255))*256+Math.round(Qt(an.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(an.copy(this),e);let i=an.r,s=an.g,r=an.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=Ge){te.workingToColorSpace(an.copy(this),t);let e=an.r,i=an.g,s=an.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL(io);let i=Hr(Li.h,io.h,e),s=Hr(Li.s,io.s,e),r=Hr(Li.l,io.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new wt;wt.NAMES=If;var Jr=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new wt(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Kr=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},zn=new C,pi=new C,Zc=new C,mi=new C,Ls=new C,Ds=new C,bd=new C,Jc=new C,Kc=new C,Qc=new C,jc=new Ue,th=new Ue,eh=new Ue,_i=class n{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),zn.subVectors(t,e),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){zn.subVectors(s,e),pi.subVectors(i,e),Zc.subVectors(t,e);let a=zn.dot(zn),o=zn.dot(pi),l=zn.dot(Zc),c=pi.dot(pi),h=pi.dot(Zc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mi.x),l.addScaledVector(a,mi.y),l.addScaledVector(o,mi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return jc.setScalar(0),th.setScalar(0),eh.setScalar(0),jc.fromBufferAttribute(t,e),th.fromBufferAttribute(t,i),eh.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(jc,r.x),a.addScaledVector(th,r.y),a.addScaledVector(eh,r.z),a}static isFrontFacing(t,e,i,s){return zn.subVectors(i,e),pi.subVectors(t,e),zn.cross(pi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),zn.cross(pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Ls.subVectors(s,i),Ds.subVectors(r,i),Jc.subVectors(t,i);let l=Ls.dot(Jc),c=Ds.dot(Jc);if(l<=0&&c<=0)return e.copy(i);Kc.subVectors(t,s);let h=Ls.dot(Kc),d=Ds.dot(Kc);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Ls,a);Qc.subVectors(t,r);let f=Ls.dot(Qc),g=Ds.dot(Qc);if(g>=0&&f<=g)return e.copy(r);let M=f*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Ds,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return bd.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(bd,o);let p=1/(m+M+u);return a=M*p,o=u*p,e.copy(i).addScaledVector(Ls,a).addScaledVector(Ds,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ai=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Hn):Hn.fromBufferAttribute(r,a),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),so.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),so.copy(i.boundingBox)),so.applyMatrix4(t.matrixWorld),this.union(so)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ir),ro.subVectors(this.max,Ir),Ns.subVectors(t.a,Ir),Us.subVectors(t.b,Ir),Fs.subVectors(t.c,Ir),Di.subVectors(Us,Ns),Ni.subVectors(Fs,Us),ns.subVectors(Ns,Fs);let e=[0,-Di.z,Di.y,0,-Ni.z,Ni.y,0,-ns.z,ns.y,Di.z,0,-Di.x,Ni.z,0,-Ni.x,ns.z,0,-ns.x,-Di.y,Di.x,0,-Ni.y,Ni.x,0,-ns.y,ns.x,0];return!nh(e,Ns,Us,Fs,ro)||(e=[1,0,0,0,1,0,0,0,1],!nh(e,Ns,Us,Fs,ro))?!1:(ao.crossVectors(Di,Ni),e=[ao.x,ao.y,ao.z],nh(e,Ns,Us,Fs,ro))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},gi=[new C,new C,new C,new C,new C,new C,new C,new C],Hn=new C,so=new ai,Ns=new C,Us=new C,Fs=new C,Di=new C,Ni=new C,ns=new C,Ir=new C,ro=new C,ao=new C,is=new C;function nh(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){is.fromArray(n,r);let o=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),l=t.dot(is),c=e.dot(is),h=i.dot(is);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var He=new C,oo=new nt,s0=0,Te=class extends ri{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:s0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Hh,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)oo.fromBufferAttribute(this,e),oo.applyMatrix3(t),this.setXY(e,oo.x,oo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ye(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),i=ye(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),i=ye(i,this.array),s=ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),i=ye(i,this.array),s=ye(s,this.array),r=ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Qr=class extends Te{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var jr=class extends Te{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var se=class extends Te{constructor(t,e,i){super(new Float32Array(t),e,i)}},r0=new ai,Lr=new C,ih=new C,yi=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):r0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lr.subVectors(t,this.center);let e=Lr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Lr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ih.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lr.copy(t.center).add(ih)),this.expandByPoint(Lr.copy(t.center).sub(ih))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},a0=0,Pn=new he,sh=new Je,Os=new C,yn=new ai,Dr=new ai,$e=new C,Ee=class n extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pm(t)?jr:Qr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Yt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,i){return Pn.makeTranslation(t,e,i),this.applyMatrix4(Pn),this}scale(t,e,i){return Pn.makeScale(t,e,i),this.applyMatrix4(Pn),this}lookAt(t){return sh.lookAt(t),sh.updateMatrix(),this.applyMatrix4(sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new se(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];yn.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let i=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Dr.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(yn.min,Dr.min),yn.expandByPoint($e),$e.addVectors(yn.max,Dr.max),yn.expandByPoint($e)):(yn.expandByPoint(Dr.min),yn.expandByPoint(Dr.max))}yn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared($e));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)$e.fromBufferAttribute(o,c),l&&(Os.fromBufferAttribute(t,c),$e.add(Os)),s=Math.max(s,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Te(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new C,l[v]=new C;let c=new C,h=new C,d=new C,u=new nt,f=new nt,g=new nt,M=new C,m=new C;function p(v,w,I){c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,I),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,I),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(N),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(N),o[v].add(M),o[w].add(M),o[I].add(M),l[v].add(m),l[w].add(m),l[I].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let v=0,w=b.length;v<w;++v){let I=b[v],N=I.start,O=I.count;for(let V=N,U=N+O;V<U;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let A=new C,y=new C,E=new C,T=new C;function P(v){E.fromBufferAttribute(s,v),T.copy(E);let w=o[v];A.copy(w),A.sub(E.multiplyScalar(E.dot(w))).normalize(),y.crossVectors(T,w);let N=y.dot(l[v])<0?-1:1;a.setXYZW(v,A.x,A.y,A.z,N)}for(let v=0,w=b.length;v<w;++v){let I=b[v],N=I.start,O=I.count;for(let V=N,U=N+O;V<U;V+=3)P(t.getX(V+0)),P(t.getX(V+1)),P(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,d=new C;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),M=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Te(u,h,d)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ta=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Hh,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},hn=new C,tr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)hn.fromBufferAttribute(this,e),hn.applyMatrix4(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)hn.fromBufferAttribute(this,e),hn.applyNormalMatrix(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)hn.fromBufferAttribute(this,e),hn.transformDirection(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ye(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Vn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),i=ye(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),i=ye(i,this.array),s=ye(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),i=ye(i,this.array),s=ye(s,this.array),r=ye(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){$r("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){$r("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},rh=new C,o0=new C,l0=new Yt,Gn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=rh.subVectors(i,e).cross(o0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(rh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||l0.getNormalMatrix(t),s=this.coplanarPoint(rh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},c0=0,oi=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=cr,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ih,this.blendDst=Lh,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Po,this.stencilZFail=Po,this.stencilZPass=Po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new wt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Gn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new nt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new nt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},tn=class extends oi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Bs,Nr=new C,ks=new C,zs=new C,Hs=new nt,Ur=new nt,Lf=new he,lo=new C,Fr=new C,co=new C,Td=new nt,ah=new nt,Ed=new nt,dn=class extends Je{constructor(t=new tn){if(super(),this.isSprite=!0,this.type="Sprite",Bs===void 0){Bs=new Ee;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ta(e,5);Bs.setIndex([0,1,2,0,2,3]),Bs.setAttribute("position",new tr(i,3,0,!1)),Bs.setAttribute("uv",new tr(i,2,3,!1))}this.geometry=Bs,this.material=t,this.center=new nt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Gt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ks.setFromMatrixScale(this.matrixWorld),Lf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),zs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ks.multiplyScalar(-zs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;ho(lo.set(-.5,-.5,0),zs,a,ks,s,r),ho(Fr.set(.5,-.5,0),zs,a,ks,s,r),ho(co.set(.5,.5,0),zs,a,ks,s,r),Td.set(0,0),ah.set(1,0),Ed.set(1,1);let o=t.ray.intersectTriangle(lo,Fr,co,!1,Nr);if(o===null&&(ho(Fr.set(-.5,.5,0),zs,a,ks,s,r),ah.set(0,1),o=t.ray.intersectTriangle(lo,co,Fr,!1,Nr),o===null))return;let l=t.ray.origin.distanceTo(Nr);l<t.near||l>t.far||e.push({distance:l,point:Nr.clone(),uv:_i.getInterpolation(Nr,lo,Fr,co,Td,ah,Ed,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ho(n,t,e,i,s,r){Hs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Ur.x=r*Hs.x-s*Hs.y,Ur.y=s*Hs.x+r*Hs.y):Ur.copy(Hs),n.copy(t),n.x+=Ur.x,n.y+=Ur.y,n.applyMatrix4(Lf)}var xi=new C,oh=new C,uo=new C,fo=new C,er=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xi.copy(this.origin).addScaledVector(this.direction,e),xi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){oh.copy(t).add(e).multiplyScalar(.5),uo.copy(e).sub(t).normalize(),fo.copy(this.origin).sub(oh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(uo),o=fo.dot(this.direction),l=-fo.dot(uo),c=fo.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let M=1/h;d*=M,u*=M,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(oh).addScaledVector(uo,u),f}intersectSphere(t,e){if(t.radius<0)return null;xi.subVectors(t.center,this.origin);let i=xi.dot(this.direction),s=xi.dot(xi)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,xi)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,M=e.y-a.y,m=e.z-a.z,p=i.x-a.x,b=i.y-a.y,A=i.z-a.z,y=Math.abs(l),E=Math.abs(c),T=Math.abs(h),P,v,w,I,N,O,V,U,k,q,X,at;if(y>=E&&y>=T?(w=l,O=d,k=g,at=p,l>=0?(P=c,v=h,I=u,N=f,V=M,U=m,q=b,X=A):(P=h,v=c,I=f,N=u,V=m,U=M,q=A,X=b)):E>=T?(w=c,O=u,k=M,at=b,c>=0?(P=h,v=l,I=f,N=d,V=m,U=g,q=A,X=p):(P=l,v=h,I=d,N=f,V=g,U=m,q=p,X=A)):(w=h,O=f,k=m,at=A,h>=0?(P=l,v=c,I=d,N=u,V=g,U=M,q=p,X=b):(P=c,v=l,I=u,N=d,V=M,U=g,q=b,X=p)),w===0)return null;let Y=P/w,j=v/w,it=1/w,Nt=I-Y*O,Rt=N-j*O,fe=V-Y*k,ee=U-j*k,le=q-Y*at,J=X-j*at,tt=le*ee-J*fe,yt=Nt*J-Rt*le,Wt=fe*Rt-ee*Nt;if(s){if(tt<0||yt<0||Wt<0)return null}else if((tt<0||yt<0||Wt<0)&&(tt>0||yt>0||Wt>0))return null;let Tt=tt+yt+Wt;if(Tt===0)return null;let Xt=it*(tt*O+yt*k+Wt*at);return(Tt>0?Xt<0:Xt>0)?null:this.at(Xt/Tt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class extends oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},wd=new he,ss=new er,po=new yi,Ad=new C,mo=new C,go=new C,xo=new C,lh=new C,_o=new C,Rd=new C,vo=new C,De=class extends Je{constructor(t=new Ee,e=new xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){_o.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(lh.fromBufferAttribute(d,t),a?_o.addScaledVector(lh,h):_o.addScaledVector(lh.sub(e),h))}e.add(_o)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(r),ss.copy(t.ray).recast(t.near),!(po.containsPoint(ss.origin)===!1&&(ss.intersectSphere(po,Ad)===null||ss.origin.distanceToSquared(Ad)>(t.far-t.near)**2))&&(wd.copy(r).invert(),ss.copy(t.ray).applyMatrix4(wd),!(i.boundingBox!==null&&ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let m=u[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),A=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,E=A;y<E;y+=3){let T=o.getX(y),P=o.getX(y+1),v=o.getX(y+2);s=yo(this,p,t,i,c,h,d,T,P,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){let b=o.getX(m),A=o.getX(m+1),y=o.getX(m+2);s=yo(this,a,t,i,c,h,d,b,A,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let m=u[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,E=A;y<E;y+=3){let T=y,P=y+1,v=y+2;s=yo(this,p,t,i,c,h,d,T,P,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){let b=m,A=m+1,y=m+2;s=yo(this,a,t,i,c,h,d,b,A,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function h0(n,t,e,i,s,r,a,o){let l;if(t.side===en?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Vi,o),l===null)return null;vo.copy(o),vo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(vo);return c<e.near||c>e.far?null:{distance:c,point:vo.clone(),object:n}}function yo(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,mo),n.getVertexPosition(l,go),n.getVertexPosition(c,xo);let h=h0(n,t,e,i,mo,go,xo,Rd);if(h){let d=new C;_i.getBarycoord(Rd,mo,go,xo,d),s&&(h.uv=_i.getInterpolatedAttribute(s,o,l,c,d,new nt)),r&&(h.uv1=_i.getInterpolatedAttribute(r,o,l,c,d,new nt)),a&&(h.normal=_i.getInterpolatedAttribute(a,o,l,c,d,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new C,materialIndex:0};_i.getNormal(mo,go,xo,u.normal),h.face=u,h.barycoord=d}return h}var ea=class extends un{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Ze,h=Ze,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nr=class extends Te{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Gs=new he,Cd=new he,Mo=[],Pd=new ai,u0=new he,Or=new De,Br=new yi,na=class extends De{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new nr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,u0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Gs),Pd.copy(t.boundingBox).applyMatrix4(Gs),this.boundingBox.union(Pd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Gs),Br.copy(t.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Br)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Or.geometry=this.geometry,Or.material=this.material,Or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Br.copy(this.boundingSphere),Br.applyMatrix4(i),t.ray.intersectsSphere(Br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gs),Cd.multiplyMatrices(i,Gs),Or.matrixWorld=Cd,Or.raycast(t,Mo);for(let a=0,o=Mo.length;a<o;a++){let l=Mo[a];l.instanceId=r,l.object=this,e.push(l)}Mo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new nr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ea(new Float32Array(s*this.count),s,this.count,vl,Dn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},rs=new yi,d0=new nt(.5,.5),So=new C,ir=class{constructor(t=new Gn,e=new Gn,i=new Gn,s=new Gn,r=new Gn,a=new Gn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Wn,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],M=r[9],m=r[10],p=r[11],b=r[12],A=r[13],y=r[14],E=r[15];if(s[0].setComponents(c-a,f-h,p-g,E-b).normalize(),s[1].setComponents(c+a,f+h,p+g,E+b).normalize(),s[2].setComponents(c+o,f+d,p+M,E+A).normalize(),s[3].setComponents(c-o,f-d,p-M,E-A).normalize(),i)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,f-u,p-m,E-y).normalize();else if(s[4].setComponents(c-l,f-u,p-m,E-y).normalize(),e===Wn)s[5].setComponents(c+l,f+u,p+m,E+y).normalize();else if(e===$s)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){rs.center.set(0,0,0);let e=d0.distanceTo(t.center);return rs.radius=.7071067811865476+e,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(So.x=s.normal.x>0?t.max.x:t.min.x,So.y=s.normal.y>0?t.max.y:t.min.y,So.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(So)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Vo=class extends oi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Id=new he,_h=new er,bo=new yi,To=new C,Fi=class extends Je{constructor(t=new Ee,e=new Vo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(s),bo.radius+=r,t.ray.intersectsSphere(bo)===!1)return;Id.copy(s).invert(),_h.copy(t.ray).applyMatrix4(Id);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,M=f;g<M;g++){let m=c.getX(g);To.fromBufferAttribute(d,m),Ld(To,m,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,M=f;g<M;g++)To.fromBufferAttribute(d,g),Ld(To,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ld(n,t,e,i,s,r,a){let o=_h.distanceSqToPoint(n);if(o<e){let l=new C;_h.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ia=class extends un{constructor(t=[],e=Wi,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ls=class extends un{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Oi=class extends un{constructor(t,e,i=Zn,s,r,a,o=Ze,l=Ze,c,h=si,d=1){if(h!==si&&h!==qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ks(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Wo=class extends Oi{constructor(t,e=Zn,i=Wi,s,r,a=Ze,o=Ze,l,c=si){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},sa=class extends un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Xn=class n extends Ee{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(d,2));function g(M,m,p,b,A,y,E,T,P,v,w){let I=y/P,N=E/v,O=y/2,V=E/2,U=T/2,k=P+1,q=v+1,X=0,at=0,Y=new C;for(let j=0;j<q;j++){let it=j*N-V;for(let Nt=0;Nt<k;Nt++){let Rt=Nt*I-O;Y[M]=Rt*b,Y[m]=it*A,Y[p]=U,c.push(Y.x,Y.y,Y.z),Y[M]=0,Y[m]=0,Y[p]=T>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(Nt/P),d.push(1-j/v),X+=1}}for(let j=0;j<v;j++)for(let it=0;it<P;it++){let Nt=u+it+k*j,Rt=u+it+k*(j+1),fe=u+(it+1)+k*(j+1),ee=u+(it+1)+k*j;l.push(Nt,Rt,ee),l.push(Rt,fe,ee),at+=6}o.addGroup(f,at,w),f+=at,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var qn=class n extends Ee{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,M=[],m=i/2,p=0;b(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(f,2));function b(){let y=new C,E=new C,T=0,P=(e-t)/i;for(let v=0;v<=r;v++){let w=[],I=v/r,N=I*(e-t)+t;for(let O=0;O<=s;O++){let V=O/s,U=V*l+o,k=Math.sin(U),q=Math.cos(U);E.x=N*k,E.y=-I*i+m,E.z=N*q,d.push(E.x,E.y,E.z),y.set(k,P,q).normalize(),u.push(y.x,y.y,y.z),f.push(V,1-I),w.push(g++)}M.push(w)}for(let v=0;v<s;v++)for(let w=0;w<r;w++){let I=M[w][v],N=M[w+1][v],O=M[w+1][v+1],V=M[w][v+1];(t>0||w!==0)&&(h.push(I,N,V),T+=3),(e>0||w!==r-1)&&(h.push(N,O,V),T+=3)}c.addGroup(p,T,0),p+=T}function A(y){let E=g,T=new nt,P=new C,v=0,w=y===!0?t:e,I=y===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*I,0),u.push(0,I,0),f.push(.5,.5),g++;let N=g;for(let O=0;O<=s;O++){let U=O/s*l+o,k=Math.cos(U),q=Math.sin(U);P.x=w*q,P.y=m*I,P.z=w*k,d.push(P.x,P.y,P.z),u.push(0,I,0),T.x=k*.5+.5,T.y=q*.5*I+.5,f.push(T.x,T.y),g++}for(let O=0;O<s;O++){let V=E+O,U=N+O;y===!0?h.push(U,U+1,V):h.push(U+1,U,V),v+=3}c.addGroup(p,v,y===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},cs=class n extends qn{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xo=class n extends Ee{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let A=new C,y=new C,E=new C;for(let T=0;T<e.length;T+=3)f(e[T+0],A),f(e[T+1],y),f(e[T+2],E),l(A,y,E,b)}function l(b,A,y,E){let T=E+1,P=[];for(let v=0;v<=T;v++){P[v]=[];let w=b.clone().lerp(y,v/T),I=A.clone().lerp(y,v/T),N=T-v;for(let O=0;O<=N;O++)O===0&&v===T?P[v][O]=w:P[v][O]=w.clone().lerp(I,O/N)}for(let v=0;v<T;v++)for(let w=0;w<2*(T-v)-1;w++){let I=Math.floor(w/2);w%2===0?(u(P[v][I+1]),u(P[v+1][I]),u(P[v][I])):(u(P[v][I+1]),u(P[v+1][I+1]),u(P[v+1][I]))}}function c(b){let A=new C;for(let y=0;y<r.length;y+=3)A.x=r[y+0],A.y=r[y+1],A.z=r[y+2],A.normalize().multiplyScalar(b),r[y+0]=A.x,r[y+1]=A.y,r[y+2]=A.z}function h(){let b=new C;for(let A=0;A<r.length;A+=3){b.x=r[A+0],b.y=r[A+1],b.z=r[A+2];let y=m(b)/2/Math.PI+.5,E=p(b)/Math.PI+.5;a.push(y,1-E)}g(),d()}function d(){for(let b=0;b<a.length;b+=6){let A=a[b+0],y=a[b+2],E=a[b+4],T=Math.max(A,y,E),P=Math.min(A,y,E);T>.9&&P<.1&&(A<.2&&(a[b+0]+=1),y<.2&&(a[b+2]+=1),E<.2&&(a[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function f(b,A){let y=b*3;A.x=t[y+0],A.y=t[y+1],A.z=t[y+2]}function g(){let b=new C,A=new C,y=new C,E=new C,T=new nt,P=new nt,v=new nt;for(let w=0,I=0;w<r.length;w+=9,I+=6){b.set(r[w+0],r[w+1],r[w+2]),A.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),T.set(a[I+0],a[I+1]),P.set(a[I+2],a[I+3]),v.set(a[I+4],a[I+5]),E.copy(b).add(A).add(y).divideScalar(3);let N=m(E);M(T,I+0,b,N),M(P,I+2,A,N),M(v,I+4,y,N)}}function M(b,A,y,E){E<0&&b.x===1&&(a[A]=b.x-1),y.x===0&&y.z===0&&(a[A]=E/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var Sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new nt:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new C,s=[],r=[],a=[],o=new C,l=new he;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Qt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Qt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},sr=class extends Sn{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new nt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},qo=class extends sr{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Wh(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Dd=new C,Nd=new C,ch=new Wh,hh=new Wh,uh=new Wh,Yo=class extends Sn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new C){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Nd.subVectors(s[0],s[1]).add(s[0]),c=Nd);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Dd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Dd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),M=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),ch.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,M,m),hh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,M,m),uh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,M,m)}else this.curveType==="catmullrom"&&(ch.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),hh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),uh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(ch.calc(l),hh.calc(l),uh.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ud(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function f0(n,t){let e=1-n;return e*e*t}function p0(n,t){return 2*(1-n)*n*t}function m0(n,t){return n*n*t}function Gr(n,t,e,i){return f0(n,t)+p0(n,e)+m0(n,i)}function g0(n,t){let e=1-n;return e*e*e*t}function x0(n,t){let e=1-n;return 3*e*e*n*t}function _0(n,t){return 3*(1-n)*n*n*t}function v0(n,t){return n*n*n*t}function Vr(n,t,e,i,s){return g0(n,t)+x0(n,e)+_0(n,i)+v0(n,s)}var ra=class extends Sn{constructor(t=new nt,e=new nt,i=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new nt){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Vr(t,s.x,r.x,a.x,o.x),Vr(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$o=class extends Sn{constructor(t=new C,e=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new C){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Vr(t,s.x,r.x,a.x,o.x),Vr(t,s.y,r.y,a.y,o.y),Vr(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},aa=class extends Sn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zo=class extends Sn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oa=class extends Sn{constructor(t=new nt,e=new nt,i=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new nt){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Gr(t,s.x,r.x,a.x),Gr(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jo=class extends Sn{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Gr(t,s.x,r.x,a.x),Gr(t,s.y,r.y,a.y),Gr(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},la=class extends Sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(Ud(o,l.x,c.x,h.x,d.x),Ud(o,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new nt().fromArray(s))}return this}},vh=Object.freeze({__proto__:null,ArcCurve:qo,CatmullRomCurve3:Yo,CubicBezierCurve:ra,CubicBezierCurve3:$o,EllipseCurve:sr,LineCurve:aa,LineCurve3:Zo,QuadraticBezierCurve:oa,QuadraticBezierCurve3:Jo,SplineCurve:la}),Ko=class extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vh[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new vh[s.type]().fromJSON(s))}return this}},ca=class extends Ko{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new aa(this.currentPoint.clone(),new nt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new oa(this.currentPoint.clone(),new nt(t,e),new nt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new ra(this.currentPoint.clone(),new nt(t,e),new nt(i,s),new nt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new la(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new sr(t,e,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},li=class extends ca{constructor(t){super(t),this.uuid=ii(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new ca().fromJSON(s))}return this}};function y0(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Df(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=E0(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=n[u],g=n[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return ha(r,a,e,o,l,c,0),a}function Df(n,t,e,i,s){let r;if(s===F0(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=Fd(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=Fd(a/i|0,n[a],n[a+1],r);return r&&rr(r,r.next)&&(da(r),r=r.next),r}function hs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(rr(e,e.next)||Fe(e.prev,e,e.next)===0)){if(da(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ha(n,t,e,i,s,r,a){if(!n)return;!a&&r&&P0(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?S0(n,i,s,r):M0(n)){t.push(l.i,n.i,c.i),da(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=b0(hs(n),t),ha(n,t,e,i,s,r,2)):a===2&&T0(n,t,e,i,s,r):ha(hs(n),t,e,i,s,r,1);break}}}function M0(n){let t=n.prev,e=n,i=n.next;if(Fe(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&kr(s,o,r,l,a,c,g.x,g.y)&&Fe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function S0(n,t,e,i){let s=n.prev,r=n,a=n.next;if(Fe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),M=Math.max(o,l,c),m=Math.max(h,d,u),p=yh(f,g,t,e,i),b=yh(M,m,t,e,i),A=n.prevZ,y=n.nextZ;for(;A&&A.z>=p&&y&&y.z<=b;){if(A.x>=f&&A.x<=M&&A.y>=g&&A.y<=m&&A!==s&&A!==a&&kr(o,h,l,d,c,u,A.x,A.y)&&Fe(A.prev,A,A.next)>=0||(A=A.prevZ,y.x>=f&&y.x<=M&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&kr(o,h,l,d,c,u,y.x,y.y)&&Fe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;A&&A.z>=p;){if(A.x>=f&&A.x<=M&&A.y>=g&&A.y<=m&&A!==s&&A!==a&&kr(o,h,l,d,c,u,A.x,A.y)&&Fe(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;y&&y.z<=b;){if(y.x>=f&&y.x<=M&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&kr(o,h,l,d,c,u,y.x,y.y)&&Fe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function b0(n,t){let e=n;do{let i=e.prev,s=e.next.next;!rr(i,s)&&Uf(i,e,e.next,s)&&ua(i,s)&&ua(s,i)&&(t.push(i.i,e.i,s.i),da(e),da(e.next),e=n=s),e=e.next}while(e!==n);return hs(e)}function T0(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&D0(a,o)){let l=Ff(a,o);a=hs(a,a.next),l=hs(l,l.next),ha(a,t,e,i,s,r,0),ha(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function E0(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=Df(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(L0(c))}s.sort(w0);for(let r=0;r<s.length;r++)e=A0(s[r],e);return e}function w0(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function A0(n,t){let e=R0(n,t);if(!e)return t;let i=Ff(e,n);return hs(i,i.next),hs(e,e.next)}function R0(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(rr(n,e))return e;do{if(rr(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Nf(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let d=Math.abs(s-e.y)/(i-e.x);ua(e,n)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&C0(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function C0(n,t){return Fe(n.prev,n,t.prev)<0&&Fe(t.next,n,n.next)<0}function P0(n,t,e,i){let s=n;do s.z===0&&(s.z=yh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,I0(s)}function I0(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function yh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function L0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Nf(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function kr(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&Nf(n,t,e,i,s,r,a,o)}function D0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!N0(n,t)&&(ua(n,t)&&ua(t,n)&&U0(n,t)&&(Fe(n.prev,n,t.prev)||Fe(n,t.prev,t))||rr(n,t)&&Fe(n.prev,n,n.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function rr(n,t){return n.x===t.x&&n.y===t.y}function Uf(n,t,e,i){let s=wo(Fe(n,t,e)),r=wo(Fe(n,t,i)),a=wo(Fe(e,i,n)),o=wo(Fe(e,i,t));return!!(s!==r&&a!==o||s===0&&Eo(n,e,t)||r===0&&Eo(n,i,t)||a===0&&Eo(e,n,i)||o===0&&Eo(e,t,i))}function Eo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function wo(n){return n>0?1:n<0?-1:0}function N0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Uf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function ua(n,t){return Fe(n.prev,n,n.next)<0?Fe(n,t,n.next)>=0&&Fe(n,n.prev,t)>=0:Fe(n,t,n.prev)<0||Fe(n,n.next,t)<0}function U0(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Ff(n,t){let e=Mh(n.i,n.x,n.y),i=Mh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Fd(n,t,e,i){let s=Mh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function da(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Mh(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function F0(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Sh=class{static triangulate(t,e,i=2){return y0(t,e,i)}},ni=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Od(t),Bd(i,t);let a=t.length;e.forEach(Od);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Bd(i,e[l]);let o=Sh.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Od(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Bd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var us=class n extends Ee{constructor(t=new li([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new se(s,3)),this.setAttribute("uv",new se(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:O0,A,y=!1,E,T,P,v;if(p){A=p.getSpacedPoints(h),y=!0,u=!1;let et=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(h,et),T=new C,P=new C,v=new C}u||(m=0,f=0,g=0,M=0);let w=o.extractPoints(c),I=w.shape,N=w.holes;if(!ni.isClockWise(I)){I=I.reverse();for(let et=0,ot=N.length;et<ot;et++){let ct=N[et];ni.isClockWise(ct)&&(N[et]=ct.reverse())}}function V(et){let ct=10000000000000001e-36,ht=et[0];for(let ft=1;ft<=et.length;ft++){let zt=ft%et.length,Bt=et[zt],qt=Bt.x-ht.x,$t=Bt.y-ht.y,L=qt*qt+$t*$t,pe=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(ht.x),Math.abs(ht.y)),ne=ct*pe*pe;if(L<=ne){et.splice(zt,1),ft--;continue}ht=Bt}}V(I),N.forEach(V);let U=N.length,k=I;for(let et=0;et<U;et++){let ot=N[et];I=I.concat(ot)}function q(et,ot,ct){return ot||Gt("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(ot,ct)}let X=I.length;function at(et,ot,ct){let ht,ft,zt,Bt=et.x-ot.x,qt=et.y-ot.y,$t=ct.x-et.x,L=ct.y-et.y,pe=Bt*Bt+qt*qt,ne=Bt*L-qt*$t;if(Math.abs(ne)>Number.EPSILON){let R=Math.sqrt(pe),x=Math.sqrt($t*$t+L*L),B=ot.x-qt/R,G=ot.y+Bt/R,$=ct.x-L/x,ut=ct.y+$t/x,dt=(($-B)*L-(ut-G)*$t)/(Bt*L-qt*$t);ht=B+Bt*dt-et.x,ft=G+qt*dt-et.y;let Z=ht*ht+ft*ft;if(Z<=2)return new nt(ht,ft);zt=Math.sqrt(Z/2)}else{let R=!1;Bt>Number.EPSILON?$t>Number.EPSILON&&(R=!0):Bt<-Number.EPSILON?$t<-Number.EPSILON&&(R=!0):Math.sign(qt)===Math.sign(L)&&(R=!0),R?(ht=-qt,ft=Bt,zt=Math.sqrt(pe)):(ht=Bt,ft=qt,zt=Math.sqrt(pe/2))}return new nt(ht/zt,ft/zt)}let Y=[];for(let et=0,ot=k.length,ct=ot-1,ht=et+1;et<ot;et++,ct++,ht++)ct===ot&&(ct=0),ht===ot&&(ht=0),Y[et]=at(k[et],k[ct],k[ht]);let j=[],it,Nt=Y.concat();for(let et=0,ot=U;et<ot;et++){let ct=N[et];it=[];for(let ht=0,ft=ct.length,zt=ft-1,Bt=ht+1;ht<ft;ht++,zt++,Bt++)zt===ft&&(zt=0),Bt===ft&&(Bt=0),it[ht]=at(ct[ht],ct[zt],ct[Bt]);j.push(it),Nt=Nt.concat(it)}let Rt;if(m===0)Rt=ni.triangulateShape(k,N);else{let et=[],ot=[];for(let ct=0;ct<m;ct++){let ht=ct/m,ft=f*Math.cos(ht*Math.PI/2),zt=g*Math.sin(ht*Math.PI/2)+M;for(let Bt=0,qt=k.length;Bt<qt;Bt++){let $t=q(k[Bt],Y[Bt],zt);yt($t.x,$t.y,-ft),ht===0&&et.push($t)}for(let Bt=0,qt=U;Bt<qt;Bt++){let $t=N[Bt];it=j[Bt];let L=[];for(let pe=0,ne=$t.length;pe<ne;pe++){let R=q($t[pe],it[pe],zt);yt(R.x,R.y,-ft),ht===0&&L.push(R)}ht===0&&ot.push(L)}}Rt=ni.triangulateShape(et,ot)}let fe=Rt.length,ee=g+M;for(let et=0;et<X;et++){let ot=u?q(I[et],Nt[et],ee):I[et];y?(P.copy(E.normals[0]).multiplyScalar(ot.x),T.copy(E.binormals[0]).multiplyScalar(ot.y),v.copy(A[0]).add(P).add(T),yt(v.x,v.y,v.z)):yt(ot.x,ot.y,0)}for(let et=1;et<=h;et++)for(let ot=0;ot<X;ot++){let ct=u?q(I[ot],Nt[ot],ee):I[ot];y?(P.copy(E.normals[et]).multiplyScalar(ct.x),T.copy(E.binormals[et]).multiplyScalar(ct.y),v.copy(A[et]).add(P).add(T),yt(v.x,v.y,v.z)):yt(ct.x,ct.y,d/h*et)}for(let et=m-1;et>=0;et--){let ot=et/m,ct=f*Math.cos(ot*Math.PI/2),ht=g*Math.sin(ot*Math.PI/2)+M;for(let ft=0,zt=k.length;ft<zt;ft++){let Bt=q(k[ft],Y[ft],ht);yt(Bt.x,Bt.y,d+ct)}for(let ft=0,zt=N.length;ft<zt;ft++){let Bt=N[ft];it=j[ft];for(let qt=0,$t=Bt.length;qt<$t;qt++){let L=q(Bt[qt],it[qt],ht);y?yt(L.x,L.y+A[h-1].y,A[h-1].x+ct):yt(L.x,L.y,d+ct)}}}le(),J();function le(){let et=s.length/3;if(u){let ot=0,ct=X*ot;for(let ht=0;ht<fe;ht++){let ft=Rt[ht];Wt(ft[2]+ct,ft[1]+ct,ft[0]+ct)}ot=h+m*2,ct=X*ot;for(let ht=0;ht<fe;ht++){let ft=Rt[ht];Wt(ft[0]+ct,ft[1]+ct,ft[2]+ct)}}else{for(let ot=0;ot<fe;ot++){let ct=Rt[ot];Wt(ct[2],ct[1],ct[0])}for(let ot=0;ot<fe;ot++){let ct=Rt[ot];Wt(ct[0]+X*h,ct[1]+X*h,ct[2]+X*h)}}i.addGroup(et,s.length/3-et,0)}function J(){let et=s.length/3,ot=0;tt(k,ot),ot+=k.length;for(let ct=0,ht=N.length;ct<ht;ct++){let ft=N[ct];tt(ft,ot),ot+=ft.length}i.addGroup(et,s.length/3-et,1)}function tt(et,ot){let ct=et.length;for(;--ct>=0;){let ht=ct,ft=ct-1;ft<0&&(ft=et.length-1);for(let zt=0,Bt=h+m*2;zt<Bt;zt++){let qt=X*zt,$t=X*(zt+1),L=ot+ht+qt,pe=ot+ft+qt,ne=ot+ft+$t,R=ot+ht+$t;Tt(L,pe,ne,R)}}}function yt(et,ot,ct){l.push(et),l.push(ot),l.push(ct)}function Wt(et,ot,ct){Xt(et),Xt(ot),Xt(ct);let ht=s.length/3,ft=b.generateTopUV(i,s,ht-3,ht-2,ht-1);ve(ft[0]),ve(ft[1]),ve(ft[2])}function Tt(et,ot,ct,ht){Xt(et),Xt(ot),Xt(ht),Xt(ot),Xt(ct),Xt(ht);let ft=s.length/3,zt=b.generateSideWallUV(i,s,ft-6,ft-3,ft-2,ft-1);ve(zt[0]),ve(zt[1]),ve(zt[3]),ve(zt[1]),ve(zt[2]),ve(zt[3])}function Xt(et){s.push(l[et*3+0]),s.push(l[et*3+1]),s.push(l[et*3+2])}function ve(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return B0(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new vh[s.type]().fromJSON(s)),new n(i,t.options)}},O0={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new nt(r,a),new nt(o,l),new nt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],M=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new nt(a,1-l),new nt(c,1-d),new nt(u,1-g),new nt(M,1-p)]:[new nt(o,1-l),new nt(h,1-d),new nt(f,1-g),new nt(m,1-p)]}};function B0(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var fa=class n extends Xo{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},pa=class n extends Ee{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Qt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new C,u=new nt,f=new C,g=new C,M=new C,m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,M.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(M.x,M.y,M.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=M.x,f.y+=M.y,f.z+=M.z,f.normalize(),l.push(f.x,f.y,f.z),M.copy(g)}for(let b=0;b<=e;b++){let A=i+b*h*s,y=Math.sin(A),E=Math.cos(A);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*y,d.y=t[T].y,d.z=t[T].x*E,a.push(d.x,d.y,d.z),u.x=b/e,u.y=T/(t.length-1),o.push(u.x,u.y);let P=l[3*T+0]*y,v=l[3*T+1],w=l[3*T+0]*E;c.push(P,v,w)}}for(let b=0;b<e;b++)for(let A=0;A<t.length-1;A++){let y=A+b*t.length,E=y,T=y+t.length,P=y+t.length+1,v=y+1;r.push(E,T,v),r.push(P,v,T)}this.setIndex(r),this.setAttribute("position",new se(a,3)),this.setAttribute("uv",new se(o,2)),this.setAttribute("normal",new se(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var bn=class n extends Ee{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],M=[],m=[];for(let p=0;p<h;p++){let b=p*u-a;for(let A=0;A<c;A++){let y=A*d-r;g.push(y,-b,0),M.push(0,0,1),m.push(A/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let A=b+c*p,y=b+c*(p+1),E=b+1+c*(p+1),T=b+1+c*p;f.push(A,y,T),f.push(y,E,T)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(M,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var ma=class n extends Ee{constructor(t=new li([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new se(s,3)),this.setAttribute("normal",new se(r,3)),this.setAttribute("uv",new se(a,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,g=u.holes;ni.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let b=g[m];ni.isClockWise(b)===!0&&(g[m]=b.reverse())}let M=ni.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let b=g[m];f=f.concat(b)}for(let m=0,p=f.length;m<p;m++){let b=f[m];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let m=0,p=M.length;m<p;m++){let b=M[m],A=b[0]+d,y=b[1]+d,E=b[2]+d;i.push(A,y,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return k0(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];i.push(a)}return new n(i,t.curveSegments)}};function k0(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var ci=class n extends Ee{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new C,u=new C,f=[],g=[],M=[],m=[];for(let p=0;p<=i;p++){let b=[],A=p/i,y=a+A*o,E=t*Math.cos(y),T=Math.sqrt(t*t-E*E),P=0;p===0&&a===0?P=.5/e:p===i&&l===Math.PI&&(P=-.5/e);for(let v=0;v<=e;v++){let w=v/e,I=s+w*r;d.x=-T*Math.cos(I),d.y=E,d.z=T*Math.sin(I),g.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),m.push(w+P,1-A),b.push(c++)}h.push(b)}for(let p=0;p<i;p++)for(let b=0;b<e;b++){let A=h[p][b+1],y=h[p][b],E=h[p+1][b],T=h[p+1][b+1];(p!==0||a>0)&&f.push(A,y,T),(p!==i-1||l<Math.PI)&&f.push(y,E,T)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(M,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Bi=class n extends Ee{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new C,f=new C,g=new C;for(let M=0;M<=i;M++){let m=a+M/i*o;for(let p=0;p<=s;p++){let b=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(b),f.y=(t+e*Math.cos(m))*Math.sin(b),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(b),u.y=t*Math.sin(b),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(M/i)}}for(let M=1;M<=i;M++)for(let m=1;m<=s;m++){let p=(s+1)*M+m-1,b=(s+1)*(M-1)+m-1,A=(s+1)*(M-1)+m,y=(s+1)*M+m;l.push(p,b,y),l.push(b,A,y)}this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function _s(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(kd(s))s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(kd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function on(n){let t={};for(let e=0;e<n.length;e++){let i=_s(n[e]);for(let s in i)t[s]=i[s]}return t}function kd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function z0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Xh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Si={clone:_s,merge:on},H0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ae=class extends oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=H0,this.fragmentShader=G0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=z0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new wt().setHex(s.value);break;case"v2":this.uniforms[i].value=new nt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new C().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ue().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Yt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new he().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ar=class extends Ae{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Yn=class extends oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jl,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Qo=class extends oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},jo=class extends oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Vs(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function dh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ki=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},tl=class extends ki{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mh,endingEnd:mh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case gh:r=t,o=2*e-i;break;case xh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case gh:a=t,l=2*i-e;break;case xh:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),M=g*g,m=M*g,p=-u*m+2*u*M-u*g,b=(1+u)*m+(-1.5-2*u)*M+(-.5+u)*g+1,A=(-1-f)*m+(1.5+f)*M+.5*g,y=f*m-f*M;for(let E=0;E!==o;++E)r[E]=p*a[h+E]+b*a[c+E]+A*a[l+E]+y*a[d+E];return r}},el=class extends ki{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},nl=class extends ki{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},il=class extends ki{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-e)/(s-e),M=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*M+a[l+m]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let M=a[c+g],m=a[l+g],p=f*u+g*2,b=d[p],A=d[p+1],y=t*u+g*2,E=h[y],T=h[y+1],P=W0(i,e,b,E,s);r[g]=Of(P,M,A,T,m)}return r}};function Of(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function V0(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function W0(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Of(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=V0(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Tn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vs(e,this.TimeBufferType),this.values=Vs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Vs(t.times,Array),values:Vs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),dh(t.settings)&&(i.settings={inTangents:Vs(t.settings.inTangents,Array),outTangents:Vs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new el(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new il(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Wr:e=this.InterpolantFactoryMethodDiscrete;break;case ko:e=this.InterpolantFactoryMethodLinear;break;case Co:e=this.InterpolantFactoryMethodSmooth;break;case ph:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Vt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return ko;case this.InterpolantFactoryMethodSmooth:return Co;case this.InterpolantFactoryMethodBezier:return ph}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;dh(this.settings)&&(zd(this.settings.inTangents,t),zd(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Gt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Gt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Gt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Gt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Im(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Gt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Co,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let M=e[d+g];if(M!==e[u+g]||M!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,dh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function zd(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=ko;var zi=class extends Tn{constructor(t,e,i){super(t,e,i)}};zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Wr;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends Tn{constructor(t,e,i,s){super(t,e,i,s)}};sl.prototype.ValueTypeName="color";var rl=class extends Tn{constructor(t,e,i,s){super(t,e,i,s)}};rl.prototype.ValueTypeName="number";var al=class extends ki{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Mn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ga=class extends Tn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new al(this.times,this.values,this.getValueSize(),t)}};ga.prototype.ValueTypeName="quaternion";ga.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends Tn{constructor(t,e,i){super(t,e,i)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Wr;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends Tn{constructor(t,e,i,s){super(t,e,i,s)}};ol.prototype.ValueTypeName="vector";var ll=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Bf=new ll,cl=class{constructor(t){this.manager=t!==void 0?t:Bf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};cl.DEFAULT_MATERIAL_NAME="__DEFAULT";var or=class extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},xa=class extends or{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},fh=new he,Hd=new C,Gd=new C,_a=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Hd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hd),Gd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){fh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(fh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===$s||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(fh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ao=new C,Ro=new Mn,ti=new C,va=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ao,Ro,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ao,Ro,ti.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ao,Ro,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ao,Ro,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ui=new C,Vd=new nt,Wd=new nt,Qe=class extends va{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-t/Ui.z)}getViewSize(t,e){return this.getViewBounds(t,Vd,Wd),e.subVectors(Wd,Vd)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(zr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var bh=class extends _a{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0}},ds=class extends or{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new bh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Gi=class extends va{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Th=class extends _a{constructor(){super(new Gi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fs=class extends or{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new Th}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ws=-90,Xs=1,hl=class extends Je{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qe(Ws,Xs,t,e);s.layers=this.layers,this.add(s);let r=new Qe(Ws,Xs,t,e);r.layers=this.layers,this.add(r);let a=new Qe(Ws,Xs,t,e);a.layers=this.layers,this.add(a);let o=new Qe(Ws,Xs,t,e);o.layers=this.layers,this.add(o);let l=new Qe(Ws,Xs,t,e);l.layers=this.layers,this.add(l);let c=new Qe(Ws,Xs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$s)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ul=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},ya=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=X0.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function X0(){this._document.hidden===!1&&this.reset()}var qh="\\[\\]\\.:\\/",q0=new RegExp("["+qh+"]","g"),Yh="[^"+qh+"]",Y0="[^"+qh.replace("\\.","")+"]",$0=/((?:WC+[\/:])*)/.source.replace("WC",Yh),Z0=/(WCOD+)?/.source.replace("WCOD",Y0),J0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yh),K0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yh),Q0=new RegExp("^"+$0+Z0+J0+K0+"$"),j0=["material","materials","bones","map"],Eh=class{constructor(t,e,i){let s=i||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Le=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(q0,"")}static parseTrackName(t){let e=Q0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);j0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Gt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Le.Composite=Eh;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var BM=new Float32Array(1);var Xd=new he,Ma=class{constructor(t,e,i=0,s=1/0){this.ray=new er(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Qs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Gt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Xd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xd),this}intersectObject(t,e=!0,i=[]){return wh(t,this,i,e),i.sort(qd),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)wh(t[s],this,i,e);return i.sort(qd),i}};function qd(n,t){return n.distance-t.distance}function wh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)wh(r[a],t,e,!0)}}var jh=class jh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};jh.prototype.isMatrix2=!0;var Ah=jh;function $h(n,t,e,i){let s=tg(i);switch(e){case kh:return n*t;case vl:return n*t/s.components*s.byteLength;case yl:return n*t/s.components*s.byteLength;case Yi:return n*t*2/s.components*s.byteLength;case Ml:return n*t*2/s.components*s.byteLength;case zh:return n*t*3/s.components*s.byteLength;case Nn:return n*t*4/s.components*s.byteLength;case Sl:return n*t*4/s.components*s.byteLength;case Pa:case Ia:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case La:case Da:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Tl:case wl:return Math.max(n,16)*Math.max(t,8)/4;case bl:case El:return Math.max(n,8)*Math.max(t,8)/2;case Al:case Rl:case Pl:case Il:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Cl:case Na:case Ll:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case kl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case zl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ql:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Yl:case $l:case Zl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Jl:case Kl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ua:case Ql:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tg(n){switch(n){case mn:case Uh:return{byteLength:1,components:1};case hr:case Fh:case We:return{byteLength:2,components:1};case xl:case _l:return{byteLength:2,components:4};case Zn:case gl:case Dn:return{byteLength:4,components:1};case Oh:case Bh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ap(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function rg(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],M=d[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,d[u]=M)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let M=d[f];n.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ag=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,og=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_g=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Cg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ig=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Lg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ng=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ug=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Og=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$g=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Qg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,jg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ex=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ix=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ax=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ox=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,cx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ux=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,px=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_x=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ex=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Px=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ix=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ux=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Fx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ox=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$x=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,t_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,e_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,n_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,i_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,r_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,a_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,f_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,p_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,m_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,__=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,M_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,E_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,A_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,R_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,I_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,U_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:ag,alphahash_pars_fragment:og,alphamap_fragment:lg,alphamap_pars_fragment:cg,alphatest_fragment:hg,alphatest_pars_fragment:ug,aomap_fragment:dg,aomap_pars_fragment:fg,batching_pars_vertex:pg,batching_vertex:mg,begin_vertex:gg,beginnormal_vertex:xg,bsdfs:_g,iridescence_fragment:vg,bumpmap_pars_fragment:yg,clipping_planes_fragment:Mg,clipping_planes_pars_fragment:Sg,clipping_planes_pars_vertex:bg,clipping_planes_vertex:Tg,color_fragment:Eg,color_pars_fragment:wg,color_pars_vertex:Ag,color_vertex:Rg,common:Cg,cube_uv_reflection_fragment:Pg,defaultnormal_vertex:Ig,displacementmap_pars_vertex:Lg,displacementmap_vertex:Dg,emissivemap_fragment:Ng,emissivemap_pars_fragment:Ug,colorspace_fragment:Fg,colorspace_pars_fragment:Og,envmap_fragment:Bg,envmap_common_pars_fragment:kg,envmap_pars_fragment:zg,envmap_pars_vertex:Hg,envmap_physical_pars_fragment:Qg,envmap_vertex:Gg,fog_vertex:Vg,fog_pars_vertex:Wg,fog_fragment:Xg,fog_pars_fragment:qg,gradientmap_pars_fragment:Yg,lightmap_pars_fragment:$g,lights_lambert_fragment:Zg,lights_lambert_pars_fragment:Jg,lights_pars_begin:Kg,lights_toon_fragment:jg,lights_toon_pars_fragment:tx,lights_phong_fragment:ex,lights_phong_pars_fragment:nx,lights_physical_fragment:ix,lights_physical_pars_fragment:sx,lights_fragment_begin:rx,lights_fragment_maps:ax,lights_fragment_end:ox,lightprobes_pars_fragment:lx,logdepthbuf_fragment:cx,logdepthbuf_pars_fragment:hx,logdepthbuf_pars_vertex:ux,logdepthbuf_vertex:dx,map_fragment:fx,map_pars_fragment:px,map_particle_fragment:mx,map_particle_pars_fragment:gx,metalnessmap_fragment:xx,metalnessmap_pars_fragment:_x,morphinstance_vertex:vx,morphcolor_vertex:yx,morphnormal_vertex:Mx,morphtarget_pars_vertex:Sx,morphtarget_vertex:bx,normal_fragment_begin:Tx,normal_fragment_maps:Ex,normal_pars_fragment:wx,normal_pars_vertex:Ax,normal_vertex:Rx,normalmap_pars_fragment:Cx,clearcoat_normal_fragment_begin:Px,clearcoat_normal_fragment_maps:Ix,clearcoat_pars_fragment:Lx,iridescence_pars_fragment:Dx,opaque_fragment:Nx,packing:Ux,premultiplied_alpha_fragment:Fx,project_vertex:Ox,dithering_fragment:Bx,dithering_pars_fragment:kx,roughnessmap_fragment:zx,roughnessmap_pars_fragment:Hx,shadowmap_pars_fragment:Gx,shadowmap_pars_vertex:Vx,shadowmap_vertex:Wx,shadowmask_pars_fragment:Xx,skinbase_vertex:qx,skinning_pars_vertex:Yx,skinning_vertex:$x,skinnormal_vertex:Zx,specularmap_fragment:Jx,specularmap_pars_fragment:Kx,tonemapping_fragment:Qx,tonemapping_pars_fragment:jx,transmission_fragment:t_,transmission_pars_fragment:e_,uv_pars_fragment:n_,uv_pars_vertex:i_,uv_vertex:s_,worldpos_vertex:r_,background_vert:a_,background_frag:o_,backgroundCube_vert:l_,backgroundCube_frag:c_,cube_vert:h_,cube_frag:u_,depth_vert:d_,depth_frag:f_,distance_vert:p_,distance_frag:m_,equirect_vert:g_,equirect_frag:x_,linedashed_vert:__,linedashed_frag:v_,meshbasic_vert:y_,meshbasic_frag:M_,meshlambert_vert:S_,meshlambert_frag:b_,meshmatcap_vert:T_,meshmatcap_frag:E_,meshnormal_vert:w_,meshnormal_frag:A_,meshphong_vert:R_,meshphong_frag:C_,meshphysical_vert:P_,meshphysical_frag:I_,meshtoon_vert:L_,meshtoon_frag:D_,points_vert:N_,points_frag:U_,shadow_vert:F_,shadow_frag:O_,sprite_vert:B_,sprite_frag:k_},vt={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},ui={basic:{uniforms:on([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:on([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new wt(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:on([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:on([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:on([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new wt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:on([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:on([vt.points,vt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:on([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:on([vt.common,vt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:on([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:on([vt.sprite,vt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:on([vt.common,vt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:on([vt.lights,vt.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};ui.physical={uniforms:on([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var nc={r:0,b:0,g:0},z_=new he,op=new Yt;op.set(-1,0,0,0,1,0,0,0,1);function H_(n,t,e,i,s,r){let a=new wt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){let y=b.backgroundBlurriness>0;A=t.get(A,y)}return A}function g(b){let A=!1,y=f(b);y===null?m(a,o):y&&y.isColor&&(m(y,1),A=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(b,A){let y=f(A);y&&(y.isCubeTexture||y.mapping===Ra)?(c===void 0&&(c=new De(new Xn(1,1,1),new Ae({name:"BackgroundCubeMaterial",uniforms:_s(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(z_.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(op),c.material.toneMapped=te.getTransfer(y.colorSpace)!==ue,(h!==y||d!==y.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new De(new bn(2,2),new Ae({name:"BackgroundMaterial",uniforms:_s(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=te.getTransfer(y.colorSpace)!==ue,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,A){b.getRGB(nc,Xh(n)),e.buffers.color.setClear(nc.r,nc.g,nc.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,A=1){a.set(b),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:M,dispose:p}}function G_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(N,O,V,U,k){let q=!1,X=d(N,U,V,O);r!==X&&(r=X,c(r.object)),q=f(N,U,V,k),q&&g(N,U,V,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(N,O,V,U),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function h(N){return n.deleteVertexArray(N)}function d(N,O,V,U){let k=U.wireframe===!0,q=i[O.id];q===void 0&&(q={},i[O.id]=q);let X=N.isInstancedMesh===!0?N.id:0,at=q[X];at===void 0&&(at={},q[X]=at);let Y=at[V.id];Y===void 0&&(Y={},at[V.id]=Y);let j=Y[k];return j===void 0&&(j=u(l()),Y[k]=j),j}function u(N){let O=[],V=[],U=[];for(let k=0;k<e;k++)O[k]=0,V[k]=0,U[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:U,object:N,attributes:{},index:null}}function f(N,O,V,U){let k=r.attributes,q=O.attributes,X=0,at=V.getAttributes();for(let Y in at)if(at[Y].location>=0){let it=k[Y],Nt=q[Y];if(Nt===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(Nt=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(Nt=N.instanceColor)),it===void 0||it.attribute!==Nt||Nt&&it.data!==Nt.data)return!0;X++}return r.attributesNum!==X||r.index!==U}function g(N,O,V,U){let k={},q=O.attributes,X=0,at=V.getAttributes();for(let Y in at)if(at[Y].location>=0){let it=q[Y];it===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(it=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(it=N.instanceColor));let Nt={};Nt.attribute=it,it&&it.data&&(Nt.data=it.data),k[Y]=Nt,X++}r.attributes=k,r.attributesNum=X,r.index=U}function M(){let N=r.newAttributes;for(let O=0,V=N.length;O<V;O++)N[O]=0}function m(N){p(N,0)}function p(N,O){let V=r.newAttributes,U=r.enabledAttributes,k=r.attributeDivisors;V[N]=1,U[N]===0&&(n.enableVertexAttribArray(N),U[N]=1),k[N]!==O&&(n.vertexAttribDivisor(N,O),k[N]=O)}function b(){let N=r.newAttributes,O=r.enabledAttributes;for(let V=0,U=O.length;V<U;V++)O[V]!==N[V]&&(n.disableVertexAttribArray(V),O[V]=0)}function A(N,O,V,U,k,q,X){X===!0?n.vertexAttribIPointer(N,O,V,k,q):n.vertexAttribPointer(N,O,V,U,k,q)}function y(N,O,V,U){M();let k=U.attributes,q=V.getAttributes(),X=O.defaultAttributeValues;for(let at in q){let Y=q[at];if(Y.location>=0){let j=k[at];if(j===void 0&&(at==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),at==="instanceColor"&&N.instanceColor&&(j=N.instanceColor)),j!==void 0){let it=j.normalized,Nt=j.itemSize,Rt=t.get(j);if(Rt===void 0)continue;let fe=Rt.buffer,ee=Rt.type,le=Rt.bytesPerElement,J=ee===n.INT||ee===n.UNSIGNED_INT||j.gpuType===gl;if(j.isInterleavedBufferAttribute){let tt=j.data,yt=tt.stride,Wt=j.offset;if(tt.isInstancedInterleavedBuffer){for(let Tt=0;Tt<Y.locationSize;Tt++)p(Y.location+Tt,tt.meshPerAttribute);N.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Tt=0;Tt<Y.locationSize;Tt++)m(Y.location+Tt);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let Tt=0;Tt<Y.locationSize;Tt++)A(Y.location+Tt,Nt/Y.locationSize,ee,it,yt*le,(Wt+Nt/Y.locationSize*Tt)*le,J)}else{if(j.isInstancedBufferAttribute){for(let tt=0;tt<Y.locationSize;tt++)p(Y.location+tt,j.meshPerAttribute);N.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let tt=0;tt<Y.locationSize;tt++)m(Y.location+tt);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let tt=0;tt<Y.locationSize;tt++)A(Y.location+tt,Nt/Y.locationSize,ee,it,Nt*le,Nt/Y.locationSize*tt*le,J)}}else if(X!==void 0){let it=X[at];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv(Y.location,it);break;case 3:n.vertexAttrib3fv(Y.location,it);break;case 4:n.vertexAttrib4fv(Y.location,it);break;default:n.vertexAttrib1fv(Y.location,it)}}}}b()}function E(){w();for(let N in i){let O=i[N];for(let V in O){let U=O[V];for(let k in U){let q=U[k];for(let X in q)h(q[X].object),delete q[X];delete U[k]}}delete i[N]}}function T(N){if(i[N.id]===void 0)return;let O=i[N.id];for(let V in O){let U=O[V];for(let k in U){let q=U[k];for(let X in q)h(q[X].object),delete q[X];delete U[k]}}delete i[N.id]}function P(N){for(let O in i){let V=i[O];for(let U in V){let k=V[U];if(k[N.id]===void 0)continue;let q=k[N.id];for(let X in q)h(q[X].object),delete q[X];delete k[N.id]}}}function v(N){for(let O in i){let V=i[O],U=N.isInstancedMesh===!0?N.id:0,k=V[U];if(k!==void 0){for(let q in k){let X=k[q];for(let at in X)h(X[at].object),delete X[at];delete k[q]}delete V[U],Object.keys(V).length===0&&delete i[O]}}}function w(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:m,disableUnusedAttributes:b}}function V_(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function W_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Nn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let v=P===We&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==mn&&P!==Dn&&!v&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:y,maxSamples:E,samples:T}}function X_(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Gn,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:i,A=b*4,y=p.clippingState||null;l.value=y,y=h(g,u,A,f);for(let E=0;E!==A;++E)y[E]=e[E];p.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=l.value,g!==!0||m===null){let p=f+M*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,y=f;A!==M;++A,y+=4)a.copy(d[A]).applyMatrix4(b,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var pr=4,q_=6,Y_=20,$_=256,Oa=new Gi,kf=new wt,tu=null,eu=0,nu=0,iu=!1,Z_=new C,vs=new C,sc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Z_}=r;tu=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),nu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(tu,eu,nu),this._renderer.xr.enabled=iu,t.scissorTest=!1,fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wi||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tu=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),nu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:je,minFilter:je,generateMipmaps:!1,type:We,format:Nn,colorSpace:Xr,depthBuffer:!1},s=zf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zf(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=J_(r)),this._blurMaterial=Q_(r,t,e),this._ggxMaterial=K_(r,t,e)}return s}_compileMaterial(t){let e=new De(new Ee,t);this._renderer.compile(e,Oa)}_sceneToCubeUV(t,e,i,s,r){let l=new Qe(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(kf),d.toneMapping=$n,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new De(new Xn,new xe({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,p=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,p=!0):(m.color.copy(kf),p=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));let E=this._cubeSize;fr(s,y*E,A>2?E:0,E,E),d.setRenderTarget(s),p&&d.render(M,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Wi||t.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;fr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Oa)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,M=this._sizeLods[i],m=3*M*(i>g-pr?i-g+pr:0),p=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,fr(r,m,p,3*M,2*M),s.setRenderTarget(r),s.render(o,Oa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,fr(t,m,p,3*M,2*M),s.setRenderTarget(t),s.render(o,Oa)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-pr?s-this._lodMax+pr:0),u=4*(this._cubeSize-h);fr(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Oa)}};function J_(n){let t=[],e=[],i=n,s=n-pr+1+q_;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),M=new Float32Array(f*u*d);for(let p=0;p<d;p++){let b=p%3*2/3-1,A=p>2?0:-1,y=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];g.set(y,f*u*p);for(let E=0;E<u;E++){let T=h[E*2]*2-1,P=h[E*2+1]*2-1;p===0?vs.set(1,P,T):p===1?vs.set(-T,1,-P):p===2?vs.set(-T,P,1):p===3?vs.set(-1,P,-T):p===4?vs.set(-T,-1,P):vs.set(T,P,-1),vs.toArray(M,(p*u+E)*f)}}let m=new Ee;m.setAttribute("position",new Te(g,f)),m.setAttribute("outputDirection",new Te(M,f)),e.push(new De(m,null)),i>pr&&i--}return{lodMeshes:e,sizeLods:t}}function zf(n,t,e){let i=new Oe(n,t,e);return i.texture.mapping=Ra,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function K_(n,t,e){return new Ae({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Q_(n,t,e){return new Ae({name:"SphericalGaussianBlur",defines:{SAMPLES:Y_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Hf(){return new Ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Gf(){return new Ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function oc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var rc=class extends Oe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ia(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Xn(5,5,5),r=new Ae({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:Ln});r.uniforms.tEquirect.value=e;let a=new De(s,r),o=e.minFilter;return e.minFilter===Xi&&(e.minFilter=je),new hl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function j_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===fl||f===pl)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let M=new rc(g.height);return M.fromEquirectangularTexture(n,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===fl||f===pl,M=f===Wi||f===xs;if(g||M){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new sc(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return g&&b&&b.height>0||M&&b&&l(b)?(i===null&&(i=new sc(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===fl?u.mapping=Wi:f===pl&&(u.mapping=xs),u}function l(u){let f=0,g=6;for(let M=0;M<g;M++)u[M]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function tv(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&as("WebGLRenderer: "+i+" extension not supported."),s}}}function ev(n,t,e,i){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],n.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,M=0;if(g===void 0)return;if(f!==null){let b=f.array;M=f.version;for(let A=0,y=b.length;A<y;A+=3){let E=b[A+0],T=b[A+1],P=b[A+2];u.push(E,T,T,P,P,E)}}else{let b=g.array;M=g.version;for(let A=0,y=b.length/3-1;A<y;A+=3){let E=A+0,T=A+1,P=A+2;u.push(E,T,T,P,P,E)}}let m=new(g.count>=65535?jr:Qr)(u,1);m.version=M;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function nv(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),e.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*a,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let M=0;for(let m=0;m<f;m++)M+=u[m];e.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function iv(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Gt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function sv(n,t,e){let i=new WeakMap,s=new Ue;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let w=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),M===!0&&(A=3);let y=o.attributes.position.count*A,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*E*4*d),P=new Zr(T,y,E,d);P.type=Dn,P.needsUpdate=!0;let v=A*4;for(let I=0;I<d;I++){let N=m[I],O=p[I],V=b[I],U=y*E*4*I;for(let k=0;k<N.count;k++){let q=k*v;f===!0&&(s.fromBufferAttribute(N,k),T[U+q+0]=s.x,T[U+q+1]=s.y,T[U+q+2]=s.z,T[U+q+3]=0),g===!0&&(s.fromBufferAttribute(O,k),T[U+q+4]=s.x,T[U+q+5]=s.y,T[U+q+6]=s.z,T[U+q+7]=0),M===!0&&(s.fromBufferAttribute(V,k),T[U+q+8]=s.x,T[U+q+9]=s.y,T[U+q+10]=s.z,T[U+q+11]=V.itemSize===4?s.w:1)}}u={count:d,texture:P,size:new nt(y,E)},i.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function rv(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var av={[Sa]:"LINEAR_TONE_MAPPING",[ba]:"REINHARD_TONE_MAPPING",[Ta]:"CINEON_TONE_MAPPING",[gs]:"ACES_FILMIC_TONE_MAPPING",[wa]:"AGX_TONE_MAPPING",[Aa]:"NEUTRAL_TONE_MAPPING",[Ea]:"CUSTOM_TONE_MAPPING"};function ov(n,t,e,i,s,r){let a=new Oe(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ee;c.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new se([0,2,0,0,2,0],2));let h=new ar({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new De(c,h),u=new Gi(-1,1,1,-1,0,1),f=null,g=null,M=!1,m,p=null,b=[],A=!1;this.setSize=function(y,E){a.setSize(y,E),o!==null&&o.setSize(y,E),l!==null&&l.setSize(y,E);for(let T=0;T<b.length;T++){let P=b[T];P.setSize&&P.setSize(y,E)}},this.setEffects=function(y){b=y,A=b.length>0&&b[0].isRenderPass===!0;let E=a.width,T=a.height;b.length>0&&o===null&&(o=new Oe(E,T,{type:We,depthBuffer:!1,stencilBuffer:!1}),l=new Oe(E,T,{type:We,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<b.length;P++){let v=b[P];v.setSize&&v.setSize(E,T)}},this.begin=function(y,E){if(M||y.toneMapping===$n&&b.length===0)return!1;if(p=E,E!==null){let T=E.width,P=E.height;(a.width!==T||a.height!==P)&&this.setSize(T,P)}return A===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=$n,!0},this.hasRenderPass=function(){return A},this.end=function(y,E){y.toneMapping=m,M=!0;let T=a,P=o;for(let v=0;v<b.length;v++){let w=b[v];w.enabled!==!1&&(w.render(y,P,T,E),w.needsSwap!==!1&&(T=P,P=P===o?l:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,h.defines={},te.getTransfer(f)===ue&&(h.defines.SRGB_TRANSFER="");let v=av[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(p),y.render(d,u),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var lp=new un,au=new Oi(1,1),cp=new Zr,hp=new Go,up=new ia,Vf=[],Wf=[],Xf=new Float32Array(16),qf=new Float32Array(9),Yf=new Float32Array(4);function gr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Vf[s];if(r===void 0&&(r=new Float32Array(s),Vf[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Xe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function qe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function lc(n,t){let e=Wf[t];e===void 0&&(e=new Int32Array(t),Wf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function lv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function cv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;n.uniform2fv(this.addr,t),qe(e,t)}}function hv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;n.uniform3fv(this.addr,t),qe(e,t)}}function uv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;n.uniform4fv(this.addr,t),qe(e,t)}}function dv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,i))return;Yf.set(i),n.uniformMatrix2fv(this.addr,!1,Yf),qe(e,i)}}function fv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,i))return;qf.set(i),n.uniformMatrix3fv(this.addr,!1,qf),qe(e,i)}}function pv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Xe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,i))return;Xf.set(i),n.uniformMatrix4fv(this.addr,!1,Xf),qe(e,i)}}function mv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function gv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;n.uniform2iv(this.addr,t),qe(e,t)}}function xv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;n.uniform3iv(this.addr,t),qe(e,t)}}function _v(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;n.uniform4iv(this.addr,t),qe(e,t)}}function vv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function yv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;n.uniform2uiv(this.addr,t),qe(e,t)}}function Mv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;n.uniform3uiv(this.addr,t),qe(e,t)}}function Sv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;n.uniform4uiv(this.addr,t),qe(e,t)}}function bv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(au.compareFunction=e.isReversedDepthBuffer()?ec:tc,r=au):r=lp,e.setTexture2D(t||r,s)}function Tv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||hp,s)}function Ev(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||up,s)}function wv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||cp,s)}function Av(n){switch(n){case 5126:return lv;case 35664:return cv;case 35665:return hv;case 35666:return uv;case 35674:return dv;case 35675:return fv;case 35676:return pv;case 5124:case 35670:return mv;case 35667:case 35671:return gv;case 35668:case 35672:return xv;case 35669:case 35673:return _v;case 5125:return vv;case 36294:return yv;case 36295:return Mv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return bv;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return Ev;case 36289:case 36303:case 36311:case 36292:return wv}}function Rv(n,t){n.uniform1fv(this.addr,t)}function Cv(n,t){let e=gr(t,this.size,2);n.uniform2fv(this.addr,e)}function Pv(n,t){let e=gr(t,this.size,3);n.uniform3fv(this.addr,e)}function Iv(n,t){let e=gr(t,this.size,4);n.uniform4fv(this.addr,e)}function Lv(n,t){let e=gr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Dv(n,t){let e=gr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Nv(n,t){let e=gr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Uv(n,t){n.uniform1iv(this.addr,t)}function Fv(n,t){n.uniform2iv(this.addr,t)}function Ov(n,t){n.uniform3iv(this.addr,t)}function Bv(n,t){n.uniform4iv(this.addr,t)}function kv(n,t){n.uniform1uiv(this.addr,t)}function zv(n,t){n.uniform2uiv(this.addr,t)}function Hv(n,t){n.uniform3uiv(this.addr,t)}function Gv(n,t){n.uniform4uiv(this.addr,t)}function Vv(n,t,e){let i=this.cache,s=t.length,r=lc(e,s);Xe(i,r)||(n.uniform1iv(this.addr,r),qe(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=au:a=lp;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Wv(n,t,e){let i=this.cache,s=t.length,r=lc(e,s);Xe(i,r)||(n.uniform1iv(this.addr,r),qe(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||hp,r[a])}function Xv(n,t,e){let i=this.cache,s=t.length,r=lc(e,s);Xe(i,r)||(n.uniform1iv(this.addr,r),qe(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||up,r[a])}function qv(n,t,e){let i=this.cache,s=t.length,r=lc(e,s);Xe(i,r)||(n.uniform1iv(this.addr,r),qe(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||cp,r[a])}function Yv(n){switch(n){case 5126:return Rv;case 35664:return Cv;case 35665:return Pv;case 35666:return Iv;case 35674:return Lv;case 35675:return Dv;case 35676:return Nv;case 5124:case 35670:return Uv;case 35667:case 35671:return Fv;case 35668:case 35672:return Ov;case 35669:case 35673:return Bv;case 5125:return kv;case 36294:return zv;case 36295:return Hv;case 36296:return Gv;case 35678:case 36198:case 36298:case 36306:case 35682:return Vv;case 35679:case 36299:case 36307:return Wv;case 35680:case 36300:case 36308:case 36293:return Xv;case 36289:case 36303:case 36311:case 36292:return qv}}var ou=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Av(e.type)}},lu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yv(e.type)}},cu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},su=/(\w+)(\])?(\[|\.)?/g;function $f(n,t){n.seq.push(t),n.map[t.id]=t}function $v(n,t,e){let i=n.name,s=i.length;for(su.lastIndex=0;;){let r=su.exec(i),a=su.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){$f(e,c===void 0?new ou(o,n,t):new lu(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new cu(o),$f(e,d)),e=d}}}var mr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);$v(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Zf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Zv=37297,Jv=0;function Kv(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Jf=new Yt;function Qv(n){te._getMatrix(Jf,te.workingColorSpace,n);let t=`mat3( ${Jf.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case qr:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Kf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Kv(n.getShaderSource(t),o)}else return r}function jv(n,t){let e=Qv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var ty={[Sa]:"Linear",[ba]:"Reinhard",[Ta]:"Cineon",[gs]:"ACESFilmic",[wa]:"AgX",[Aa]:"Neutral",[Ea]:"Custom"};function ey(n,t){let e=ty[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ic=new C;function ny(){te.getLuminanceCoefficients(ic);let n=ic.x.toFixed(4),t=ic.y.toFixed(4),e=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ka).join(`
`)}function sy(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ry(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function ka(n){return n!==""}function Qf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ay=/^[ \t]*#include +<([\w\d./]+)>/gm;function hu(n){return n.replace(ay,ly)}var oy=new Map;function ly(n,t){let e=Kt[t];if(e===void 0){let i=oy.get(t);if(i!==void 0)e=Kt[i],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return hu(e)}var cy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tp(n){return n.replace(cy,hy)}function hy(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ep(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var uy={[ps]:"SHADOWMAP_TYPE_PCF",[lr]:"SHADOWMAP_TYPE_VSM"};function dy(n){return uy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var fy={[Wi]:"ENVMAP_TYPE_CUBE",[xs]:"ENVMAP_TYPE_CUBE",[Ra]:"ENVMAP_TYPE_CUBE_UV"};function py(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":fy[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var my={[xs]:"ENVMAP_MODE_REFRACTION"};function gy(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":my[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var xy={[Dh]:"ENVMAP_BLENDING_MULTIPLY",[mf]:"ENVMAP_BLENDING_MIX",[gf]:"ENVMAP_BLENDING_ADD"};function _y(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":xy[n.combine]||"ENVMAP_BLENDING_NONE"}function vy(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function yy(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=dy(e),c=py(e),h=gy(e),d=_y(e),u=vy(e),f=iy(e),g=sy(r),M=s.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ka).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ka).join(`
`),p.length>0&&(p+=`
`)):(m=[ep(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),p=[ep(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?Kt.tonemapping_pars_fragment:"",e.toneMapping!==$n?ey("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,jv("linearToOutputTexel",e.outputColorSpace),ny(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ka).join(`
`)),a=hu(a),a=Qf(a,e),a=jf(a,e),o=hu(o),o=Qf(o,e),o=jf(o,e),a=tp(a),o=tp(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=b+m+a,y=b+p+o,E=Zf(s,s.VERTEX_SHADER,A),T=Zf(s,s.FRAGMENT_SHADER,y);s.attachShader(M,E),s.attachShader(M,T),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function P(N){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(M)||"",V=s.getShaderInfoLog(E)||"",U=s.getShaderInfoLog(T)||"",k=O.trim(),q=V.trim(),X=U.trim(),at=!0,Y=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(at=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,E,T);else{let j=Kf(s,E,"vertex"),it=Kf(s,T,"fragment");Gt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+j+`
`+it)}else k!==""?Vt("WebGLProgram: Program Info Log:",k):(q===""||X==="")&&(Y=!1);Y&&(N.diagnostics={runnable:at,programLog:k,vertexShader:{log:q,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(E),s.deleteShader(T),v=new mr(s,M),w=ry(s,M)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(M,Zv)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jv++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=T,this}var My=0,uu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new du(t),e.set(t,i)),i}},du=class{constructor(t){this.id=My++,this.code=t,this.usedTimes=0}};function Sy(n){return n===Yi||n===Na||n===Ua}function by(n,t,e,i,s,r){let a=new Qs,o=new uu,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function M(v,w,I,N,O,V){let U=N.fog,k=O.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,at=t.get(v.envMap||q,X),Y=at&&at.mapping===Ra?at.image.height:null,j=f[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&Vt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let it=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Nt=it!==void 0?it.length:0,Rt=0;k.morphAttributes.position!==void 0&&(Rt=1),k.morphAttributes.normal!==void 0&&(Rt=2),k.morphAttributes.color!==void 0&&(Rt=3);let fe,ee,le,J;if(j){let Ce=ui[j];fe=Ce.vertexShader,ee=Ce.fragmentShader}else{fe=v.vertexShader,ee=v.fragmentShader;let Ce=o.getVertexShaderStage(v),me=o.getFragmentShaderStage(v);o.update(v,Ce,me),le=Ce.id,J=me.id}let tt=n.getRenderTarget(),yt=n.state.buffers.depth.getReversed(),Wt=O.isInstancedMesh===!0,Tt=O.isBatchedMesh===!0,Xt=!!v.map,ve=!!v.matcap,et=!!at,ot=!!v.aoMap,ct=!!v.lightMap,ht=!!v.bumpMap&&v.wireframe===!1,ft=!!v.normalMap,zt=!!v.displacementMap,Bt=!!v.emissiveMap,qt=!!v.metalnessMap,$t=!!v.roughnessMap,L=v.anisotropy>0,pe=v.clearcoat>0,ne=v.dispersion>0,R=v.retroreflectivity>0,x=v.iridescence>0,B=v.sheen>0,G=v.transmission>0,$=L&&!!v.anisotropyMap,ut=pe&&!!v.clearcoatMap,dt=pe&&!!v.clearcoatNormalMap,Z=pe&&!!v.clearcoatRoughnessMap,Q=x&&!!v.iridescenceMap,pt=x&&!!v.iridescenceThicknessMap,Ut=B&&!!v.sheenColorMap,_t=B&&!!v.sheenRoughnessMap,mt=!!v.specularMap,Ft=!!v.specularColorMap,Ht=!!v.specularIntensityMap,Zt=G&&!!v.transmissionMap,F=G&&!!v.thicknessMap,gt=!!v.gradientMap,K=!!v.alphaMap,xt=v.alphaTest>0,bt=!!v.alphaHash,rt=!!v.extensions,Ot=$n;v.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ot=n.toneMapping);let It={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:fe,fragmentShader:ee,defines:v.defines,customVertexShaderID:le,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Tt,batchingColor:Tt&&O._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&O.instanceColor!==null,instancingMorph:Wt&&O.morphTexture!==null,outputColorSpace:tt===null?n.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Xt,matcap:ve,envMap:et,envMapMode:et&&at.mapping,envMapCubeUVHeight:Y,aoMap:ot,lightMap:ct,bumpMap:ht,normalMap:ft,displacementMap:zt,emissiveMap:Bt,normalMapObjectSpace:ft&&v.normalMapType===vf,normalMapTangentSpace:ft&&v.normalMapType===jl,packedNormalMap:ft&&v.normalMapType===jl&&Sy(v.normalMap.format),metalnessMap:qt,roughnessMap:$t,anisotropy:L,anisotropyMap:$,clearcoat:pe,clearcoatMap:ut,clearcoatNormalMap:dt,clearcoatRoughnessMap:Z,dispersion:ne,retroreflection:R,iridescence:x,iridescenceMap:Q,iridescenceThicknessMap:pt,sheen:B,sheenColorMap:Ut,sheenRoughnessMap:_t,specularMap:mt,specularColorMap:Ft,specularIntensityMap:Ht,transmission:G,transmissionMap:Zt,thicknessMap:F,gradientMap:gt,opaque:v.transparent===!1&&v.blending===cr&&v.alphaToCoverage===!1,alphaMap:K,alphaTest:xt,alphaHash:bt,combine:v.combine,mapUv:Xt&&g(v.map.channel),aoMapUv:ot&&g(v.aoMap.channel),lightMapUv:ct&&g(v.lightMap.channel),bumpMapUv:ht&&g(v.bumpMap.channel),normalMapUv:ft&&g(v.normalMap.channel),displacementMapUv:zt&&g(v.displacementMap.channel),emissiveMapUv:Bt&&g(v.emissiveMap.channel),metalnessMapUv:qt&&g(v.metalnessMap.channel),roughnessMapUv:$t&&g(v.roughnessMap.channel),anisotropyMapUv:$&&g(v.anisotropyMap.channel),clearcoatMapUv:ut&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:dt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:_t&&g(v.sheenRoughnessMap.channel),specularMapUv:mt&&g(v.specularMap.channel),specularColorMapUv:Ft&&g(v.specularColorMap.channel),specularIntensityMapUv:Ht&&g(v.specularIntensityMap.channel),transmissionMapUv:Zt&&g(v.transmissionMap.channel),thicknessMapUv:F&&g(v.thicknessMap.channel),alphaMapUv:K&&g(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ft||L),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!k.attributes.uv&&(Xt||K),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&ft===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:yt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:Rt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Xt&&v.map.isVideoTexture===!0&&te.getTransfer(v.map.colorSpace)===ue,decodeVideoTextureEmissive:Bt&&v.emissiveMap.isVideoTexture===!0&&te.getTransfer(v.emissiveMap.colorSpace)===ue,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ve,flipSided:v.side===en,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:rt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&v.extensions.multiDraw===!0||Tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function m(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)w.push(I),w.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(p(w,v),b(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function p(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function b(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function A(v){let w=f[v.type],I;if(w){let N=ui[w];I=Si.clone(N.uniforms)}else I=v.uniforms;return I}function y(v,w){let I=h.get(w);return I!==void 0?++I.usedTimes:(I=new yy(n,w,v,s),c.push(I),h.set(w,I)),I}function E(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function P(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:A,acquireProgram:y,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:P}}function Ty(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Ey(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function np(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ip(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,M,m,p){let b=n[t];return b===void 0?(b={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:p},n[t]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=g,b.materialVariant=a(u),b.groupOrder=M,b.renderOrder=u.renderOrder,b.z=m,b.group=p),t++,b}function l(u,f,g,M,m,p,b){b.reversedDepth===!0&&(m=-m);let A=o(u,f,g,M,m,p);g.transmission>0?i.push(A):g.transparent===!0?s.push(A):e.push(A)}function c(u,f,g,M,m,p){let b=o(u,f,g,M,m,p);g.transmission>0?i.unshift(b):g.transparent===!0?s.unshift(b):e.unshift(b)}function h(u,f){e.length>1&&e.sort(u||Ey),i.length>1&&i.sort(f||np),s.length>1&&s.sort(f||np)}function d(){for(let u=t,f=n.length;u<f;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function wy(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new ip,n.set(i,[a])):s>=r.length?(a=new ip,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Ay(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new wt};break;case"SpotLight":e={position:new C,direction:new C,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function Ry(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Cy=0;function Py(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Iy(n){let t=new Ay,e=Ry(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let s=new C,r=new he,a=new he;function o(c){let h=0,d=0,u=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let f=0,g=0,M=0,m=0,p=0,b=0,A=0,y=0,E=0,T=0,P=0,v=0,w=0,I=0;c.sort(Py);for(let O=0,V=c.length;O<V;O++){let U=c[O],k=U.color,q=U.intensity,X=U.distance,at=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Yi?at=U.shadow.map.texture:at=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=k.r*q,d+=k.g*q,u+=k.b*q;else if(U.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(U.sh.coefficients[Y],q);I++}else if(U.isSunLight){let Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let j=U.shadow,it=e.get(U);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[g]=it,i.sunShadowMap[g]=at;let Nt=j.getViewportCount();for(let Rt=0;Rt<Nt;Rt++)i.sunShadowMatrix[M+Rt]=j.getMatrix(Rt),i.sunShadowCascade[M+Rt]=j._cascadeData[Rt];M+=Nt,g++}i.sun[f]=Y,f++}else if(U.isDirectionalLight){let Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let j=U.shadow,it=e.get(U);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,i.directionalShadow[m]=it,i.directionalShadowMap[m]=at,i.directionalShadowMatrix[m]=U.shadow.matrix,E++}i.directional[m]=Y,m++}else if(U.isSpotLight){let Y=t.get(U);Y.position.setFromMatrixPosition(U.matrixWorld),Y.color.copy(k).multiplyScalar(q),Y.distance=X,Y.coneCos=Math.cos(U.angle),Y.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Y.decay=U.decay,i.spot[b]=Y;let j=U.shadow;if(U.map&&(i.spotLightMap[v]=U.map,v++,j.updateMatrices(U),U.castShadow&&w++),i.spotLightMatrix[b]=j.matrix,U.castShadow){let it=e.get(U);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,i.spotShadow[b]=it,i.spotShadowMap[b]=at,P++}b++}else if(U.isRectAreaLight){let Y=t.get(U);Y.color.copy(k).multiplyScalar(q),Y.halfWidth.set(U.width*.5,0,0),Y.halfHeight.set(0,U.height*.5,0),i.rectArea[A]=Y,A++}else if(U.isPointLight){let Y=t.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),Y.distance=U.distance,Y.decay=U.decay,U.castShadow){let j=U.shadow,it=e.get(U);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,it.shadowCameraNear=j.camera.near,it.shadowCameraFar=j.camera.far,i.pointShadow[p]=it,i.pointShadowMap[p]=at,i.pointShadowMatrix[p]=U.shadow.matrix,T++}i.point[p]=Y,p++}else if(U.isHemisphereLight){let Y=t.get(U);Y.skyColor.copy(U.color).multiplyScalar(q),Y.groundColor.copy(U.groundColor).multiplyScalar(q),i.hemi[y]=Y,y++}}A>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let N=i.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==b||N.rectAreaLength!==A||N.hemiLength!==y||N.numSunShadows!==g||N.numDirectionalShadows!==E||N.numPointShadows!==T||N.numSpotShadows!==P||N.numSpotMaps!==v||N.numLightProbes!==I)&&(i.sun.length=f,i.directional.length=m,i.spot.length=b,i.rectArea.length=A,i.point.length=p,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=P,i.spotShadowMap.length=P,i.spotLightMatrix.length=P+v-w,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=I,N.sunLength=f,N.directionalLength=m,N.pointLength=p,N.spotLength=b,N.rectAreaLength=A,N.hemiLength=y,N.numSunShadows=g,N.numDirectionalShadows=E,N.numPointShadows=T,N.numSpotShadows=P,N.numSpotMaps=v,N.numLightProbes=I,i.version=Cy++)}function l(c,h){let d=0,u=0,f=0,g=0,M=0,m=0,p=h.matrixWorldInverse;for(let b=0,A=c.length;b<A;b++){let y=c[b];if(y.isSunLight){let E=i.sun[d];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(y.isSpotLight){let E=i.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let E=i.rectArea[M];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let E=i.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function sp(n){let t=new Iy(n),e=[],i=[],s=[];function r(u){d.camera=u,e.length=0,i.length=0,s.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Ly(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new sp(n),t.set(s,[o])):r>=a.length?(o=new sp(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Dy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ny=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Uy=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Fy=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],rp=new he,Ba=new C,ru=new C;function Oy(n,t,e){let i=new ir,s=new nt,r=new nt,a=new Ue,o=new Qo,l=new jo,c={},h=e.maxTextureSize,d={[Vi]:en,[en]:Vi,[Ve]:Ve},u=new Ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Dy,fragmentShader:Ny}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ee;g.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new De(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ps;let p=this.type;this.render=function(T,P,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Zd&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ps);let w=n.getRenderTarget(),I=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Ln),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let V=p!==this.type;V&&P.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(k=>k.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,k=T.length;U<k;U++){let q=T[U],X=q.shadow;if(X===void 0){Vt("WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let at=X.getFrameExtents();s.multiply(at),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,X.mapSize.y=r.y));let Y=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Y,X.map===null||V===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===lr){if(q.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Oe(s.x,s.y,{format:Yi,type:We,minFilter:je,magFilter:je,generateMipmaps:!1}),X.map.texture.name=q.name+".shadowMap",X.map.depthTexture=new Oi(s.x,s.y,Dn),X.map.depthTexture.name=q.name+".shadowMapDepth",X.map.depthTexture.format=si,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ze,X.map.depthTexture.magFilter=Ze}else q.isPointLight?(X.map=new rc(s.x),X.map.depthTexture=new Wo(s.x,Zn)):(X.map=new Oe(s.x,s.y),X.map.depthTexture=new Oi(s.x,s.y,Zn)),X.map.depthTexture.name=q.name+".shadowMap",X.map.depthTexture.format=si,this.type===ps?(X.map.depthTexture.compareFunction=Y?ec:tc,X.map.depthTexture.minFilter=je,X.map.depthTexture.magFilter=je):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Ze,X.map.depthTexture.magFilter=Ze);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let j=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();q.isPointLight!==!0&&X.updateMatrices(q,v);for(let it=0;it<j;it++){let Nt=X.getCamera(it);if(q.isPointLight){let Rt=X.camera,fe=X.matrix,ee=q.distance||Rt.far;ee!==Rt.far&&(Rt.far=ee,Rt.updateProjectionMatrix()),Ba.setFromMatrixPosition(q.matrixWorld),Rt.position.copy(Ba),ru.copy(Rt.position),ru.add(Uy[it]),Rt.up.copy(Fy[it]),Rt.lookAt(ru),Rt.updateMatrixWorld(),fe.makeTranslation(-Ba.x,-Ba.y,-Ba.z),rp.multiplyMatrices(Rt.projectionMatrix,Rt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(rp,Rt.coordinateSystem,Rt.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,it),n.clear();else{it===0&&(n.setRenderTarget(X.map),n.clear());let Rt=X.getViewport(it);a.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),O.viewport(a)}i=X.getFrustum(it),y(P,v,Nt,q,this.type)}X.isPointLightShadow!==!0&&this.type===lr&&b(X,v),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,I,N)};function b(T,P){let v=t.update(M);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Oe(s.x,s.y,{format:Yi,type:We}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(P,null,v,u,M,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(P,null,v,f,M,null)}function A(T,P,v,w){let I=null,N=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)I=N;else if(I=v.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let O=I.uuid,V=P.uuid,U=c[O];U===void 0&&(U={},c[O]=U);let k=U[V];k===void 0&&(k=I.clone(),U[V]=k,P.addEventListener("dispose",E)),I=k}if(I.visible=P.visible,I.wireframe=P.wireframe,w===lr?I.side=P.shadowSide!==null?P.shadowSide:P.side:I.side=P.shadowSide!==null?P.shadowSide:d[P.side],I.alphaMap=P.alphaMap,I.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,I.map=P.map,I.clipShadows=P.clipShadows,I.clippingPlanes=P.clippingPlanes,I.clipIntersection=P.clipIntersection,I.displacementMap=P.displacementMap,I.displacementScale=P.displacementScale,I.displacementBias=P.displacementBias,I.wireframeLinewidth=P.wireframeLinewidth,I.linewidth=P.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let O=n.properties.get(I);O.light=v}return I}function y(T,P,v,w,I){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===lr)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let V=t.update(T),U=T.material;if(Array.isArray(U)){let k=V.groups;for(let q=0,X=k.length;q<X;q++){let at=k[q],Y=U[at.materialIndex];if(Y&&Y.visible){let j=A(T,Y,w,I);T.onBeforeShadow(n,T,P,v,V,j,at),n.renderBufferDirect(v,null,V,j,T,at),T.onAfterShadow(n,T,P,v,V,j,at)}}}else if(U.visible){let k=A(T,U,w,I);T.onBeforeShadow(n,T,P,v,V,k,null),n.renderBufferDirect(v,null,V,k,T,null),T.onAfterShadow(n,T,P,v,V,k,null)}}let O=T.children;for(let V=0,U=O.length;V<U;V++)y(O[V],P,v,w,I)}function E(T){T.target.removeEventListener("dispose",E);for(let v in c){let w=c[v],I=T.target.uuid;I in w&&(w[I].dispose(),delete w[I])}}}function By(n,t){function e(){let F=!1,gt=new Ue,K=null,xt=new Ue(0,0,0,0);return{setMask:function(bt){K!==bt&&!F&&(n.colorMask(bt,bt,bt,bt),K=bt)},setLocked:function(bt){F=bt},setClear:function(bt,rt,Ot,It,Ce){Ce===!0&&(bt*=It,rt*=It,Ot*=It),gt.set(bt,rt,Ot,It),xt.equals(gt)===!1&&(n.clearColor(bt,rt,Ot,It),xt.copy(gt))},reset:function(){F=!1,K=null,xt.set(-1,0,0,0)}}}function i(){let F=!1,gt=!1,K=null,xt=null,bt=null;return{setReversed:function(rt){if(gt!==rt){let Ot=t.get("EXT_clip_control");rt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),gt=rt;let It=bt;bt=null,this.setClear(It)}},getReversed:function(){return gt},setTest:function(rt){rt?tt(n.DEPTH_TEST):yt(n.DEPTH_TEST)},setMask:function(rt){K!==rt&&!F&&(n.depthMask(rt),K=rt)},setFunc:function(rt){if(gt&&(rt=Pf[rt]),xt!==rt){switch(rt){case Io:n.depthFunc(n.NEVER);break;case Lo:n.depthFunc(n.ALWAYS);break;case Do:n.depthFunc(n.LESS);break;case Ys:n.depthFunc(n.LEQUAL);break;case No:n.depthFunc(n.EQUAL);break;case Uo:n.depthFunc(n.GEQUAL);break;case Fo:n.depthFunc(n.GREATER);break;case Oo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xt=rt}},setLocked:function(rt){F=rt},setClear:function(rt){bt!==rt&&(bt=rt,gt&&(rt=1-rt),n.clearDepth(rt))},reset:function(){F=!1,K=null,xt=null,bt=null,gt=!1}}}function s(){let F=!1,gt=null,K=null,xt=null,bt=null,rt=null,Ot=null,It=null,Ce=null;return{setTest:function(me){F||(me?tt(n.STENCIL_TEST):yt(n.STENCIL_TEST))},setMask:function(me){gt!==me&&!F&&(n.stencilMask(me),gt=me)},setFunc:function(me,Bn,Qn){(K!==me||xt!==Bn||bt!==Qn)&&(n.stencilFunc(me,Bn,Qn),K=me,xt=Bn,bt=Qn)},setOp:function(me,Bn,Qn){(rt!==me||Ot!==Bn||It!==Qn)&&(n.stencilOp(me,Bn,Qn),rt=me,Ot=Bn,It=Qn)},setLocked:function(me){F=me},setClear:function(me){Ce!==me&&(n.clearStencil(me),Ce=me)},reset:function(){F=!1,gt=null,K=null,xt=null,bt=null,rt=null,Ot=null,It=null,Ce=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],M=null,m=!1,p=null,b=null,A=null,y=null,E=null,T=null,P=null,v=new wt(0,0,0),w=0,I=!1,N=null,O=null,V=null,U=null,k=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,at=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=at>=1):Y.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=at>=2);let j=null,it={},Nt=n.getParameter(n.SCISSOR_BOX),Rt=n.getParameter(n.VIEWPORT),fe=new Ue().fromArray(Nt),ee=new Ue().fromArray(Rt);function le(F,gt,K,xt){let bt=new Uint8Array(4),rt=n.createTexture();n.bindTexture(F,rt),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ot=0;Ot<K;Ot++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(gt,0,n.RGBA,1,1,xt,0,n.RGBA,n.UNSIGNED_BYTE,bt):n.texImage2D(gt+Ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,bt);return rt}let J={};J[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(n.DEPTH_TEST),a.setFunc(Ys),ht(!1),ft(Rh),tt(n.CULL_FACE),ot(Ln);function tt(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function yt(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function Wt(F,gt){return u[F]!==gt?(n.bindFramebuffer(F,gt),u[F]=gt,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=gt),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=gt),!0):!1}function Tt(F,gt){let K=g,xt=!1;if(F){K=f.get(gt),K===void 0&&(K=[],f.set(gt,K));let bt=F.textures;if(K.length!==bt.length||K[0]!==n.COLOR_ATTACHMENT0){for(let rt=0,Ot=bt.length;rt<Ot;rt++)K[rt]=n.COLOR_ATTACHMENT0+rt;K.length=bt.length,xt=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,xt=!0);xt&&n.drawBuffers(K)}function Xt(F){return M!==F?(n.useProgram(F),M=F,!0):!1}let ve={[ms]:n.FUNC_ADD,[Kd]:n.FUNC_SUBTRACT,[Qd]:n.FUNC_REVERSE_SUBTRACT};ve[jd]=n.MIN,ve[tf]=n.MAX;let et={[ef]:n.ZERO,[nf]:n.ONE,[sf]:n.SRC_COLOR,[Ih]:n.SRC_ALPHA,[hf]:n.SRC_ALPHA_SATURATE,[lf]:n.DST_COLOR,[af]:n.DST_ALPHA,[rf]:n.ONE_MINUS_SRC_COLOR,[Lh]:n.ONE_MINUS_SRC_ALPHA,[cf]:n.ONE_MINUS_DST_COLOR,[of]:n.ONE_MINUS_DST_ALPHA,[uf]:n.CONSTANT_COLOR,[df]:n.ONE_MINUS_CONSTANT_COLOR,[ff]:n.CONSTANT_ALPHA,[pf]:n.ONE_MINUS_CONSTANT_ALPHA};function ot(F,gt,K,xt,bt,rt,Ot,It,Ce,me){if(F===Ln){m===!0&&(yt(n.BLEND),m=!1);return}if(m===!1&&(tt(n.BLEND),m=!0),F!==Jd){if(F!==p||me!==I){if((b!==ms||E!==ms)&&(n.blendEquation(n.FUNC_ADD),b=ms,E=ms),me)switch(F){case cr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Be:n.blendFunc(n.ONE,n.ONE);break;case Ch:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ph:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Gt("WebGLState: Invalid blending: ",F);break}else switch(F){case cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Be:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ch:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ph:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",F);break}A=null,y=null,T=null,P=null,v.set(0,0,0),w=0,p=F,I=me}return}bt=bt||gt,rt=rt||K,Ot=Ot||xt,(gt!==b||bt!==E)&&(n.blendEquationSeparate(ve[gt],ve[bt]),b=gt,E=bt),(K!==A||xt!==y||rt!==T||Ot!==P)&&(n.blendFuncSeparate(et[K],et[xt],et[rt],et[Ot]),A=K,y=xt,T=rt,P=Ot),(It.equals(v)===!1||Ce!==w)&&(n.blendColor(It.r,It.g,It.b,Ce),v.copy(It),w=Ce),p=F,I=!1}function ct(F,gt){F.side===Ve?yt(n.CULL_FACE):tt(n.CULL_FACE);let K=F.side===en;gt&&(K=!K),ht(K),F.blending===cr&&F.transparent===!1?ot(Ln):ot(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let xt=F.stencilWrite;o.setTest(xt),xt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Bt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?tt(n.SAMPLE_ALPHA_TO_COVERAGE):yt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ht(F){N!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),N=F)}function ft(F){F!==Yd?(tt(n.CULL_FACE),F!==O&&(F===Rh?n.cullFace(n.BACK):F===$d?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):yt(n.CULL_FACE),O=F}function zt(F){F!==V&&(X&&n.lineWidth(F),V=F)}function Bt(F,gt,K){F?(tt(n.POLYGON_OFFSET_FILL),(U!==gt||k!==K)&&(U=gt,k=K,a.getReversed()&&(gt=-gt),n.polygonOffset(gt,K))):yt(n.POLYGON_OFFSET_FILL)}function qt(F){F?tt(n.SCISSOR_TEST):yt(n.SCISSOR_TEST)}function $t(F){F===void 0&&(F=n.TEXTURE0+q-1),j!==F&&(n.activeTexture(F),j=F)}function L(F,gt,K){K===void 0&&(j===null?K=n.TEXTURE0+q-1:K=j);let xt=it[K];xt===void 0&&(xt={type:void 0,texture:void 0},it[K]=xt),(xt.type!==F||xt.texture!==gt)&&(j!==K&&(n.activeTexture(K),j=K),n.bindTexture(F,gt||J[F]),xt.type=F,xt.texture=gt)}function pe(){let F=it[j];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ne(){try{n.compressedTexImage2D(...arguments)}catch(F){Gt("WebGLState:",F)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(F){Gt("WebGLState:",F)}}function x(){try{n.texSubImage2D(...arguments)}catch(F){Gt("WebGLState:",F)}}function B(){try{n.texSubImage3D(...arguments)}catch(F){Gt("WebGLState:",F)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(F){Gt("WebGLState:",F)}}function $(){try{n.compressedTexSubImage3D(...arguments)}catch(F){Gt("WebGLState:",F)}}function ut(){try{n.texStorage2D(...arguments)}catch(F){Gt("WebGLState:",F)}}function dt(){try{n.texStorage3D(...arguments)}catch(F){Gt("WebGLState:",F)}}function Z(){try{n.texImage2D(...arguments)}catch(F){Gt("WebGLState:",F)}}function Q(){try{n.texImage3D(...arguments)}catch(F){Gt("WebGLState:",F)}}function pt(F){return d[F]!==void 0?d[F]:n.getParameter(F)}function Ut(F,gt){d[F]!==gt&&(n.pixelStorei(F,gt),d[F]=gt)}function _t(F){fe.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),fe.copy(F))}function mt(F){ee.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ee.copy(F))}function Ft(F,gt){let K=c.get(gt);K===void 0&&(K=new WeakMap,c.set(gt,K));let xt=K.get(F);xt===void 0&&(xt=n.getUniformBlockIndex(gt,F.name),K.set(F,xt))}function Ht(F,gt){let xt=c.get(gt).get(F);l.get(gt)!==xt&&(n.uniformBlockBinding(gt,xt,F.__bindingPointIndex),l.set(gt,xt))}function Zt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,it={},u={},f=new WeakMap,g=[],M=null,m=!1,p=null,b=null,A=null,y=null,E=null,T=null,P=null,v=new wt(0,0,0),w=0,I=!1,N=null,O=null,V=null,U=null,k=null,fe.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:yt,bindFramebuffer:Wt,drawBuffers:Tt,useProgram:Xt,setBlending:ot,setMaterial:ct,setFlipSided:ht,setCullFace:ft,setLineWidth:zt,setPolygonOffset:Bt,setScissorTest:qt,activeTexture:$t,bindTexture:L,unbindTexture:pe,compressedTexImage2D:ne,compressedTexImage3D:R,texImage2D:Z,texImage3D:Q,pixelStorei:Ut,getParameter:pt,updateUBOMapping:Ft,uniformBlockBinding:Ht,texStorage2D:ut,texStorage3D:dt,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:G,compressedTexSubImage3D:$,scissor:_t,viewport:mt,reset:Zt}}function ky(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,x){return g?new OffscreenCanvas(R,x):Yr("canvas")}function m(R,x,B){let G=1,$=ne(R);if(($.width>B||$.height>B)&&(G=B/Math.max($.width,$.height)),G<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ut=Math.floor(G*$.width),dt=Math.floor(G*$.height);u===void 0&&(u=M(ut,dt));let Z=x?M(ut,dt):u;return Z.width=ut,Z.height=dt,Z.getContext("2d").drawImage(R,0,0,ut,dt),Vt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ut+"x"+dt+")."),Z}else return"data"in R&&Vt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function p(R){return R.generateMipmaps}function b(R){n.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(R,x,B,G,$,ut=!1){if(R!==null){if(n[R]!==void 0)return n[R];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let dt;G&&(dt=t.get("EXT_texture_norm16"),dt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=x;if(x===n.RED&&(B===n.FLOAT&&(Z=n.R32F),B===n.HALF_FLOAT&&(Z=n.R16F),B===n.UNSIGNED_BYTE&&(Z=n.R8),B===n.UNSIGNED_SHORT&&dt&&(Z=dt.R16_EXT),B===n.SHORT&&dt&&(Z=dt.R16_SNORM_EXT)),x===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.R8UI),B===n.UNSIGNED_SHORT&&(Z=n.R16UI),B===n.UNSIGNED_INT&&(Z=n.R32UI),B===n.BYTE&&(Z=n.R8I),B===n.SHORT&&(Z=n.R16I),B===n.INT&&(Z=n.R32I)),x===n.RG&&(B===n.FLOAT&&(Z=n.RG32F),B===n.HALF_FLOAT&&(Z=n.RG16F),B===n.UNSIGNED_BYTE&&(Z=n.RG8),B===n.UNSIGNED_SHORT&&dt&&(Z=dt.RG16_EXT),B===n.SHORT&&dt&&(Z=dt.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RG8UI),B===n.UNSIGNED_SHORT&&(Z=n.RG16UI),B===n.UNSIGNED_INT&&(Z=n.RG32UI),B===n.BYTE&&(Z=n.RG8I),B===n.SHORT&&(Z=n.RG16I),B===n.INT&&(Z=n.RG32I)),x===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),B===n.UNSIGNED_INT&&(Z=n.RGB32UI),B===n.BYTE&&(Z=n.RGB8I),B===n.SHORT&&(Z=n.RGB16I),B===n.INT&&(Z=n.RGB32I)),x===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),B===n.UNSIGNED_INT&&(Z=n.RGBA32UI),B===n.BYTE&&(Z=n.RGBA8I),B===n.SHORT&&(Z=n.RGBA16I),B===n.INT&&(Z=n.RGBA32I)),x===n.RGB&&(B===n.UNSIGNED_SHORT&&dt&&(Z=dt.RGB16_EXT),B===n.SHORT&&dt&&(Z=dt.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),x===n.RGBA){let Q=ut?qr:te.getTransfer($);B===n.FLOAT&&(Z=n.RGBA32F),B===n.HALF_FLOAT&&(Z=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Z=Q===ue?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&dt&&(Z=dt.RGBA16_EXT),B===n.SHORT&&dt&&(Z=dt.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function E(R,x){let B;return R?x===null||x===Zn||x===ur?B=n.DEPTH24_STENCIL8:x===Dn?B=n.DEPTH32F_STENCIL8:x===hr&&(B=n.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Zn||x===ur?B=n.DEPTH_COMPONENT24:x===Dn?B=n.DEPTH_COMPONENT32F:x===hr&&(B=n.DEPTH_COMPONENT16),B}function T(R,x){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ze&&R.minFilter!==je?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function P(R){let x=R.target;x.removeEventListener("dispose",P),w(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function v(R){let x=R.target;x.removeEventListener("dispose",v),N(x)}function w(R){let x=i.get(R);if(x.__webglInit===void 0)return;let B=R.source,G=f.get(B);if(G){let $=G[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&I(R),Object.keys(G).length===0&&f.delete(B)}i.remove(R)}function I(R){let x=i.get(R);n.deleteTexture(x.__webglTexture);let B=R.source,G=f.get(B);delete G[x.__cacheKey],a.memory.textures--}function N(R){let x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let $=0;$<x.__webglFramebuffer[G].length;$++)n.deleteFramebuffer(x.__webglFramebuffer[G][$]);else n.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)n.deleteFramebuffer(x.__webglFramebuffer[G]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let B=R.textures;for(let G=0,$=B.length;G<$;G++){let ut=i.get(B[G]);ut.__webglTexture&&(n.deleteTexture(ut.__webglTexture),a.memory.textures--),i.remove(B[G])}i.remove(R)}let O=0;function V(){O=0}function U(){return O}function k(R){O=R}function q(){let R=O;return R>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,R}function X(R){let x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function at(R,x){let B=i.get(R);if(R.isVideoTexture&&L(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){let G=R.image;if(G===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(B,R,x);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+x)}function Y(R,x){let B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){yt(B,R,x);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+x)}function j(R,x){let B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){yt(B,R,x);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+x)}function it(R,x){let B=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){Wt(B,R,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+x)}let Nt={[os]:n.REPEAT,[ei]:n.CLAMP_TO_EDGE,[Bo]:n.MIRRORED_REPEAT},Rt={[Ze]:n.NEAREST,[xf]:n.NEAREST_MIPMAP_NEAREST,[Ca]:n.NEAREST_MIPMAP_LINEAR,[je]:n.LINEAR,[ml]:n.LINEAR_MIPMAP_NEAREST,[Xi]:n.LINEAR_MIPMAP_LINEAR},fe={[Mf]:n.NEVER,[wf]:n.ALWAYS,[Sf]:n.LESS,[tc]:n.LEQUAL,[bf]:n.EQUAL,[ec]:n.GEQUAL,[Tf]:n.GREATER,[Ef]:n.NOTEQUAL};function ee(R,x){if(x.type===Dn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===je||x.magFilter===ml||x.magFilter===Ca||x.magFilter===Xi||x.minFilter===je||x.minFilter===ml||x.minFilter===Ca||x.minFilter===Xi)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Nt[x.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Nt[x.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Nt[x.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Rt[x.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Rt[x.minFilter]),x.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,fe[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ze||x.minFilter!==Ca&&x.minFilter!==Xi||x.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function le(R,x){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",P));let G=x.source,$=f.get(G);$===void 0&&($={},f.set(G,$));let ut=X(x);if(ut!==R.__cacheKey){$[ut]===void 0&&($[ut]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),$[ut].usedTimes++;let dt=$[R.__cacheKey];dt!==void 0&&($[R.__cacheKey].usedTimes--,dt.usedTimes===0&&I(x)),R.__cacheKey=ut,R.__webglTexture=$[ut].texture}return B}function J(R,x,B){return Math.floor(Math.floor(R/B)/x)}function tt(R,x,B,G){let ut=R.updateRanges;if(ut.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,B,G,x.data);else{ut.sort((Ut,_t)=>Ut.start-_t.start);let dt=0;for(let Ut=1;Ut<ut.length;Ut++){let _t=ut[dt],mt=ut[Ut],Ft=_t.start+_t.count,Ht=J(mt.start,x.width,4),Zt=J(_t.start,x.width,4);mt.start<=Ft+1&&Ht===Zt&&J(mt.start+mt.count-1,x.width,4)===Ht?_t.count=Math.max(_t.count,mt.start+mt.count-_t.start):(++dt,ut[dt]=mt)}ut.length=dt+1;let Z=e.getParameter(n.UNPACK_ROW_LENGTH),Q=e.getParameter(n.UNPACK_SKIP_PIXELS),pt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Ut=0,_t=ut.length;Ut<_t;Ut++){let mt=ut[Ut],Ft=Math.floor(mt.start/4),Ht=Math.ceil(mt.count/4),Zt=Ft%x.width,F=Math.floor(Ft/x.width),gt=Ht,K=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Zt),e.pixelStorei(n.UNPACK_SKIP_ROWS,F),e.texSubImage2D(n.TEXTURE_2D,0,Zt,F,gt,K,B,G,x.data)}R.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Z),e.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(n.UNPACK_SKIP_ROWS,pt)}}function yt(R,x,B){let G=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=n.TEXTURE_3D);let $=le(R,x),ut=x.source;e.bindTexture(G,R.__webglTexture,n.TEXTURE0+B);let dt=i.get(ut);if(ut.version!==dt.__version||$===!0){if(e.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let K=te.getPrimaries(te.workingColorSpace),xt=x.colorSpace===Mi?null:te.getPrimaries(x.colorSpace),bt=x.colorSpace===Mi||K===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let Q=m(x.image,!1,s.maxTextureSize);Q=pe(x,Q);let pt=r.convert(x.format,x.colorSpace),Ut=r.convert(x.type),_t=y(x.internalFormat,pt,Ut,x.normalized,x.colorSpace,x.isVideoTexture);ee(G,x);let mt,Ft=x.mipmaps,Ht=x.isVideoTexture!==!0,Zt=dt.__version===void 0||$===!0,F=ut.dataReady,gt=T(x,Q);if(x.isDepthTexture)_t=E(x.format===qi,x.type),Zt&&(Ht?e.texStorage2D(n.TEXTURE_2D,1,_t,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,_t,Q.width,Q.height,0,pt,Ut,null));else if(x.isDataTexture)if(Ft.length>0){Ht&&Zt&&e.texStorage2D(n.TEXTURE_2D,gt,_t,Ft[0].width,Ft[0].height);for(let K=0,xt=Ft.length;K<xt;K++)mt=Ft[K],Ht?F&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,mt.width,mt.height,pt,Ut,mt.data):e.texImage2D(n.TEXTURE_2D,K,_t,mt.width,mt.height,0,pt,Ut,mt.data);x.generateMipmaps=!1}else Ht?(Zt&&e.texStorage2D(n.TEXTURE_2D,gt,_t,Q.width,Q.height),F&&tt(x,Q,pt,Ut)):e.texImage2D(n.TEXTURE_2D,0,_t,Q.width,Q.height,0,pt,Ut,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ht&&Zt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,_t,Ft[0].width,Ft[0].height,Q.depth);for(let K=0,xt=Ft.length;K<xt;K++)if(mt=Ft[K],x.format!==Nn)if(pt!==null)if(Ht){if(F)if(x.layerUpdates.size>0){let bt=$h(mt.width,mt.height,x.format,x.type);for(let rt of x.layerUpdates){let Ot=mt.data.subarray(rt*bt/mt.data.BYTES_PER_ELEMENT,(rt+1)*bt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,rt,mt.width,mt.height,1,pt,Ot)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,mt.width,mt.height,Q.depth,pt,mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,_t,mt.width,mt.height,Q.depth,0,mt.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?F&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,mt.width,mt.height,Q.depth,pt,Ut,mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,K,_t,mt.width,mt.height,Q.depth,0,pt,Ut,mt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ht&&Zt&&e.texStorage2D(n.TEXTURE_2D,gt,_t,Ft[0].width,Ft[0].height);for(let K=0,xt=Ft.length;K<xt;K++)mt=Ft[K],x.format!==Nn?pt!==null?Ht?F&&e.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(n.TEXTURE_2D,K,_t,mt.width,mt.height,0,mt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?F&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,mt.width,mt.height,pt,Ut,mt.data):e.texImage2D(n.TEXTURE_2D,K,_t,mt.width,mt.height,0,pt,Ut,mt.data)}else if(x.isDataArrayTexture)if(Ht){if(Zt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,_t,Q.width,Q.height,Q.depth),F)if(x.layerUpdates.size>0){let K=$h(Q.width,Q.height,x.format,x.type);for(let xt of x.layerUpdates){let bt=Q.data.subarray(xt*K/Q.data.BYTES_PER_ELEMENT,(xt+1)*K/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xt,Q.width,Q.height,1,pt,Ut,bt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pt,Ut,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,_t,Q.width,Q.height,Q.depth,0,pt,Ut,Q.data);else if(x.isData3DTexture)Ht?(Zt&&e.texStorage3D(n.TEXTURE_3D,gt,_t,Q.width,Q.height,Q.depth),F&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pt,Ut,Q.data)):e.texImage3D(n.TEXTURE_3D,0,_t,Q.width,Q.height,Q.depth,0,pt,Ut,Q.data);else if(x.isFramebufferTexture){if(Zt)if(Ht)e.texStorage2D(n.TEXTURE_2D,gt,_t,Q.width,Q.height);else{let K=Q.width,xt=Q.height;for(let bt=0;bt<gt;bt++)e.texImage2D(n.TEXTURE_2D,bt,_t,K,xt,0,pt,Ut,null),K>>=1,xt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let K=n.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),Q.parentNode!==K){K.appendChild(Q),d.add(x),K.onpaint=xt=>{let bt=xt.changedElements;for(let rt of d)bt.includes(rt.image)&&(rt.needsUpdate=!0)},K.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{let bt=n.RGBA,rt=n.RGBA,Ot=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,bt,rt,Ot,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ft.length>0){if(Ht&&Zt){let K=ne(Ft[0]);e.texStorage2D(n.TEXTURE_2D,gt,_t,K.width,K.height)}for(let K=0,xt=Ft.length;K<xt;K++)mt=Ft[K],Ht?F&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,pt,Ut,mt):e.texImage2D(n.TEXTURE_2D,K,_t,pt,Ut,mt);x.generateMipmaps=!1}else if(Ht){if(Zt){let K=ne(Q);e.texStorage2D(n.TEXTURE_2D,gt,_t,K.width,K.height)}F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,Ut,Q)}else e.texImage2D(n.TEXTURE_2D,0,_t,pt,Ut,Q);p(x)&&b(G),dt.__version=ut.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Wt(R,x,B){if(x.image.length!==6)return;let G=le(R,x),$=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+B);let ut=i.get($);if($.version!==ut.__version||G===!0){e.activeTexture(n.TEXTURE0+B);let dt=te.getPrimaries(te.workingColorSpace),Z=x.colorSpace===Mi?null:te.getPrimaries(x.colorSpace),Q=x.colorSpace===Mi||dt===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let pt=x.isCompressedTexture||x.image[0].isCompressedTexture,Ut=x.image[0]&&x.image[0].isDataTexture,_t=[];for(let rt=0;rt<6;rt++)!pt&&!Ut?_t[rt]=m(x.image[rt],!0,s.maxCubemapSize):_t[rt]=Ut?x.image[rt].image:x.image[rt],_t[rt]=pe(x,_t[rt]);let mt=_t[0],Ft=r.convert(x.format,x.colorSpace),Ht=r.convert(x.type),Zt=y(x.internalFormat,Ft,Ht,x.normalized,x.colorSpace),F=x.isVideoTexture!==!0,gt=ut.__version===void 0||G===!0,K=$.dataReady,xt=T(x,mt);ee(n.TEXTURE_CUBE_MAP,x);let bt;if(pt){F&&gt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,Zt,mt.width,mt.height);for(let rt=0;rt<6;rt++){bt=_t[rt].mipmaps;for(let Ot=0;Ot<bt.length;Ot++){let It=bt[Ot];x.format!==Nn?Ft!==null?F?K&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,0,0,It.width,It.height,Ft,It.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,Zt,It.width,It.height,0,It.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,0,0,It.width,It.height,Ft,Ht,It.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,Zt,It.width,It.height,0,Ft,Ht,It.data)}}}else{if(bt=x.mipmaps,F&&gt){bt.length>0&&xt++;let rt=ne(_t[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,Zt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Ut){F?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,_t[rt].width,_t[rt].height,Ft,Ht,_t[rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Zt,_t[rt].width,_t[rt].height,0,Ft,Ht,_t[rt].data);for(let Ot=0;Ot<bt.length;Ot++){let Ce=bt[Ot].image[rt].image;F?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,0,0,Ce.width,Ce.height,Ft,Ht,Ce.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,Zt,Ce.width,Ce.height,0,Ft,Ht,Ce.data)}}else{F?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ft,Ht,_t[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Zt,Ft,Ht,_t[rt]);for(let Ot=0;Ot<bt.length;Ot++){let It=bt[Ot];F?K&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,0,0,Ft,Ht,It.image[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,Zt,Ft,Ht,It.image[rt])}}}p(x)&&b(n.TEXTURE_CUBE_MAP),ut.__version=$.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Tt(R,x,B,G,$,ut){let dt=r.convert(B.format,B.colorSpace),Z=r.convert(B.type),Q=y(B.internalFormat,dt,Z,B.normalized,B.colorSpace),pt=i.get(x),Ut=i.get(B);if(Ut.__renderTarget=x,!pt.__hasExternalTextures){let _t=Math.max(1,x.width>>ut),mt=Math.max(1,x.height>>ut);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?e.texImage3D($,ut,Q,_t,mt,x.depth,0,dt,Z,null):e.texImage2D($,ut,Q,_t,mt,0,dt,Z,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),$t(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,$,Ut.__webglTexture,0,qt(x)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,$,Ut.__webglTexture,ut),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Xt(R,x,B){if(n.bindRenderbuffer(n.RENDERBUFFER,R),x.depthBuffer){let G=x.depthTexture,$=G&&G.isDepthTexture?G.type:null,ut=E(x.stencilBuffer,$),dt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;$t(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qt(x),ut,x.width,x.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,qt(x),ut,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ut,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,dt,n.RENDERBUFFER,R)}else{let G=x.textures;for(let $=0;$<G.length;$++){let ut=G[$],dt=r.convert(ut.format,ut.colorSpace),Z=r.convert(ut.type),Q=y(ut.internalFormat,dt,Z,ut.normalized,ut.colorSpace);$t(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,qt(x),Q,x.width,x.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,qt(x),Q,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Q,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ve(R,x,B){let G=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=i.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",P)),$.__webglTexture===void 0){$.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),ee(n.TEXTURE_CUBE_MAP,x.depthTexture);let pt=r.convert(x.depthTexture.format),Ut=r.convert(x.depthTexture.type),_t;x.depthTexture.format===si?_t=n.DEPTH_COMPONENT24:x.depthTexture.format===qi&&(_t=n.DEPTH24_STENCIL8);for(let mt=0;mt<6;mt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,_t,x.width,x.height,0,pt,Ut,null)}}else at(x.depthTexture,0);let ut=$.__webglTexture,dt=qt(x),Z=G?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,Q=x.depthTexture.format===qi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===si)$t(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,Z,ut,0,dt):n.framebufferTexture2D(n.FRAMEBUFFER,Q,Z,ut,0);else if(x.depthTexture.format===qi)$t(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,Z,ut,0,dt):n.framebufferTexture2D(n.FRAMEBUFFER,Q,Z,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(R){let x=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){let G=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){let $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",$)};G.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=G}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let G=0;G<6;G++)ve(x.__webglFramebuffer[G],R,G);else{let G=R.texture.mipmaps;G&&G.length>0?ve(x.__webglFramebuffer[0],R,0):ve(x.__webglFramebuffer,R,0)}else if(B){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=n.createRenderbuffer(),Xt(x.__webglDepthbuffer[G],R,!1);else{let $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=x.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,ut),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,ut)}}else{let G=R.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Xt(x.__webglDepthbuffer,R,!1);else{let $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ut),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,ut)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(R,x,B){let G=i.get(R);x!==void 0&&Tt(G.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&et(R)}function ct(R){let x=R.texture,B=i.get(R),G=i.get(x);R.addEventListener("dispose",v);let $=R.textures,ut=R.isWebGLCubeRenderTarget===!0,dt=$.length>1;if(dt||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=x.version,a.memory.textures++),ut){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let Q=0;Q<x.mipmaps.length;Q++)B.__webglFramebuffer[Z][Q]=n.createFramebuffer()}else B.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)B.__webglFramebuffer[Z]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(dt)for(let Z=0,Q=$.length;Z<Q;Z++){let pt=i.get($[Z]);pt.__webglTexture===void 0&&(pt.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&$t(R)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<$.length;Z++){let Q=$[Z];B.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);let pt=r.convert(Q.format,Q.colorSpace),Ut=r.convert(Q.type),_t=y(Q.internalFormat,pt,Ut,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),mt=qt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,mt,_t,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Xt(B.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ut){e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),ee(n.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)Tt(B.__webglFramebuffer[Z][Q],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q);else Tt(B.__webglFramebuffer[Z],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(x)&&b(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let Z=0,Q=$.length;Z<Q;Z++){let pt=$[Z],Ut=i.get(pt),_t=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_t=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(_t,Ut.__webglTexture),ee(_t,pt),Tt(B.__webglFramebuffer,R,pt,n.COLOR_ATTACHMENT0+Z,_t,0),p(pt)&&b(_t)}e.unbindTexture()}else{let Z=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Z,G.__webglTexture),ee(Z,x),x.mipmaps&&x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)Tt(B.__webglFramebuffer[Q],R,x,n.COLOR_ATTACHMENT0,Z,Q);else Tt(B.__webglFramebuffer,R,x,n.COLOR_ATTACHMENT0,Z,0);p(x)&&b(Z),e.unbindTexture()}R.depthBuffer&&et(R)}function ht(R){let x=R.textures;for(let B=0,G=x.length;B<G;B++){let $=x[B];if(p($)){let ut=A(R),dt=i.get($).__webglTexture;e.bindTexture(ut,dt),b(ut),e.unbindTexture()}}}let ft=[],zt=[];function Bt(R){if(R.samples>0){if($t(R)===!1){let x=R.textures,B=R.width,G=R.height,$=n.COLOR_BUFFER_BIT,ut=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=i.get(R),Z=x.length>1;if(Z)for(let pt=0;pt<x.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);let Q=R.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let pt=0;pt<x.length;pt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,dt.__webglColorRenderbuffer[pt]);let Ut=i.get(x[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ut,0)}n.blitFramebuffer(0,0,B,G,0,0,B,G,$,n.NEAREST),l===!0&&(ft.length=0,zt.length=0,ft.push(n.COLOR_ATTACHMENT0+pt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(ft.push(ut),zt.push(ut),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,zt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let pt=0;pt<x.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,dt.__webglColorRenderbuffer[pt]);let Ut=i.get(x[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,Ut,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let x=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function qt(R){return Math.min(s.maxSamples,R.samples)}function $t(R){let x=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function L(R){let x=a.render.frame;h.get(R)!==x&&(h.set(R,x),R.update())}function pe(R,x){let B=R.colorSpace,G=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Xr&&B!==Mi&&(te.getTransfer(B)===ue?(G!==Nn||$!==mn)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",B)),x}function ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=V,this.getTextureUnits=U,this.setTextureUnits=k,this.setTexture2D=at,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=it,this.rebindTextures=ot,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function zy(n,t){function e(i,s=Mi){let r,a=te.getTransfer(s);if(i===mn)return n.UNSIGNED_BYTE;if(i===xl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_l)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Oh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Bh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Uh)return n.BYTE;if(i===Fh)return n.SHORT;if(i===hr)return n.UNSIGNED_SHORT;if(i===gl)return n.INT;if(i===Zn)return n.UNSIGNED_INT;if(i===Dn)return n.FLOAT;if(i===We)return n.HALF_FLOAT;if(i===kh)return n.ALPHA;if(i===zh)return n.RGB;if(i===Nn)return n.RGBA;if(i===si)return n.DEPTH_COMPONENT;if(i===qi)return n.DEPTH_STENCIL;if(i===vl)return n.RED;if(i===yl)return n.RED_INTEGER;if(i===Yi)return n.RG;if(i===Ml)return n.RG_INTEGER;if(i===Sl)return n.RGBA_INTEGER;if(i===Pa||i===Ia||i===La||i===Da)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bl||i===Tl||i===El||i===wl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===El)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Al||i===Rl||i===Cl||i===Pl||i===Il||i===Na||i===Ll)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Al||i===Rl)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Cl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Pl)return r.COMPRESSED_R11_EAC;if(i===Il)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Na)return r.COMPRESSED_RG11_EAC;if(i===Ll)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Dl||i===Nl||i===Ul||i===Fl||i===Ol||i===Bl||i===kl||i===zl||i===Hl||i===Gl||i===Vl||i===Wl||i===Xl||i===ql)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ul)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ol)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Bl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xl)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ql)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yl||i===$l||i===Zl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Yl)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jl||i===Kl||i===Ua||i===Ql)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Jl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ur?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Hy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,fu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new sa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ae({vertexShader:Hy,fragmentShader:Gy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new De(new bn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},pu=class extends ri{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,M=typeof XRWebGLBinding<"u",m=new fu,p={},b=e.getContextAttributes(),A=null,y=null,E=[],T=[],P=new nt,v=null,w=null,I=new Qe;I.viewport=new Ue;let N=new Qe;N.viewport=new Ue;let O=[I,N],V=new ul,U=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let tt=E[J];return tt===void 0&&(tt=new js,E[J]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(J){let tt=E[J];return tt===void 0&&(tt=new js,E[J]=tt),tt.getGripSpace()},this.getHand=function(J){let tt=E[J];return tt===void 0&&(tt=new js,E[J]=tt),tt.getHandSpace()};function q(J){let tt=T.indexOf(J.inputSource);if(tt===-1)return;let yt=E[tt];yt!==void 0&&(yt.update(J.inputSource,J.frame,c||a),yt.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",at);for(let J=0;J<E.length;J++){let tt=T[J];tt!==null&&(T[J]=null,E[J].disconnect(tt))}U=null,k=null,m.reset();for(let J in p)delete p[J];if(t.setRenderTarget(A),f=null,u=null,d=null,s=null,y=null,le.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(P.width,P.height,!1),w!==null){let J=w.camera;J.fov=w.fov,J.zoom=w.zoom,J.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",X),s.addEventListener("inputsourceschange",at),b.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(P),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Wt=null,Tt=null;b.depth&&(Tt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=b.stencil?qi:si,Wt=b.stencil?ur:Zn);let Xt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Xt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Oe(u.textureWidth,u.textureHeight,{format:Nn,type:mn,depthTexture:new Oi(u.textureWidth,u.textureHeight,Wt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let yt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Oe(f.framebufferWidth,f.framebufferHeight,{format:Nn,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),le.setContext(s),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function at(J){for(let tt=0;tt<J.removed.length;tt++){let yt=J.removed[tt],Wt=T.indexOf(yt);Wt>=0&&(T[Wt]=null,E[Wt].disconnect(yt))}for(let tt=0;tt<J.added.length;tt++){let yt=J.added[tt],Wt=T.indexOf(yt);if(Wt===-1){for(let Xt=0;Xt<E.length;Xt++)if(Xt>=T.length){T.push(yt),Wt=Xt;break}else if(T[Xt]===null){T[Xt]=yt,Wt=Xt;break}if(Wt===-1)break}let Tt=E[Wt];Tt&&Tt.connect(yt)}}let Y=new C,j=new C;function it(J,tt,yt){Y.setFromMatrixPosition(tt.matrixWorld),j.setFromMatrixPosition(yt.matrixWorld);let Wt=Y.distanceTo(j),Tt=tt.projectionMatrix.elements,Xt=yt.projectionMatrix.elements,ve=Tt[14]/(Tt[10]-1),et=Tt[14]/(Tt[10]+1),ot=(Tt[9]+1)/Tt[5],ct=(Tt[9]-1)/Tt[5],ht=(Tt[8]-1)/Tt[0],ft=(Xt[8]+1)/Xt[0],zt=ve*ht,Bt=ve*ft,qt=Wt/(-ht+ft),$t=qt*-ht;if(tt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX($t),J.translateZ(qt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Tt[10]===-1)J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let L=ve+qt,pe=et+qt,ne=zt-$t,R=Bt+(Wt-$t),x=ot*et/pe*L,B=ct*et/pe*L;J.projectionMatrix.makePerspective(ne,R,x,B,L,pe),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Nt(J,tt){tt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(tt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let tt=J.near,yt=J.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),V.near=N.near=I.near=tt,V.far=N.far=I.far=yt,(U!==V.near||k!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),U=V.near,k=V.far),V.layers.mask=J.layers.mask|6,I.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;let Wt=J.parent,Tt=V.cameras;Nt(V,Wt);for(let Xt=0;Xt<Tt.length;Xt++)Nt(Tt[Xt],Wt);Tt.length===2?it(V,I,N):V.projectionMatrix.copy(I.projectionMatrix),w===null&&J.isPerspectiveCamera&&(w={camera:J,fov:J.fov,zoom:J.zoom}),Rt(J,V,Wt)};function Rt(J,tt,yt){yt===null?J.matrix.copy(tt.matrixWorld):(J.matrix.copy(yt.matrixWorld),J.matrix.invert(),J.matrix.multiply(tt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Js*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(J){return p[J]};let fe=null;function ee(J,tt){if(h=tt.getViewerPose(c||a),g=tt,h!==null){let yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Wt=!1;yt.length!==V.cameras.length&&(V.cameras.length=0,Wt=!0);for(let et=0;et<yt.length;et++){let ot=yt[et],ct=null;if(f!==null)ct=f.getViewport(ot);else{let ft=d.getViewSubImage(u,ot);ct=ft.viewport,et===0&&(t.setRenderTargetTextures(y,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(y))}let ht=O[et];ht===void 0&&(ht=new Qe,ht.layers.enable(et),ht.viewport=new Ue,O[et]=ht),ht.matrix.fromArray(ot.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(ot.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(ct.x,ct.y,ct.width,ct.height),et===0&&(V.matrix.copy(ht.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Wt===!0&&V.cameras.push(ht)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=i.getBinding();let et=d.getDepthInformation(yt[0]);et&&et.isValid&&et.texture&&m.init(et,s.renderState)}if(Tt&&Tt.includes("camera-access")&&M){t.state.unbindTexture(),d=i.getBinding();for(let et=0;et<yt.length;et++){let ot=yt[et].camera;if(ot){let ct=p[ot];ct||(ct=new sa,p[ot]=ct);let ht=d.getCameraImage(ot);ct.sourceTexture=ht}}}}for(let yt=0;yt<E.length;yt++){let Wt=T[yt],Tt=E[yt];Wt!==null&&Tt!==void 0&&Tt.update(Wt,tt,c||a)}fe&&fe(J,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),g=null}let le=new ap;le.setAnimationLoop(ee),this.setAnimationLoop=function(J){fe=J},this.dispose=function(){}}},Vy=new he,dp=new Yt;dp.set(-1,0,0,0,1,0,0,0,1);function Wy(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Xh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,A,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),A=b.envMap,y=b.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(Vy.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(dp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Xy(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){let T=E.program;i.uniformBlockBinding(y,T)}function c(y,E){let T=s[y.id];T===void 0&&(m(y),T=h(y),s[y.id]=T,y.addEventListener("dispose",b));let P=E.program;i.updateUBOMapping(y,P);let v=t.render.frame;r[y.id]!==v&&(u(y),r[y.id]=v)}function h(y){let E=d();y.__bindingPointIndex=E;let T=n.createBuffer(),P=y.__size,v=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,P,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,T),T}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let E=s[y.id],T=y.uniforms,P=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let v=0,w=T.length;v<w;v++){let I=T[v];if(Array.isArray(I))for(let N=0,O=I.length;N<O;N++)f(I[N],v,N,P);else f(I,v,0,P)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,E,T,P){if(M(y,E,T,P)===!0){let v=y.__offset,w=y.value;if(Array.isArray(w)){let I=0;for(let N=0;N<w.length;N++){let O=w[N],V=p(O);g(O,y.__data,I),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(I+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,y.__data)}}function g(y,E,T){typeof y=="number"||typeof y=="boolean"?E[0]=y:y.isMatrix3?(E[0]=y.elements[0],E[1]=y.elements[1],E[2]=y.elements[2],E[3]=0,E[4]=y.elements[3],E[5]=y.elements[4],E[6]=y.elements[5],E[7]=0,E[8]=y.elements[6],E[9]=y.elements[7],E[10]=y.elements[8],E[11]=0):ArrayBuffer.isView(y)?E.set(new y.constructor(y.buffer,y.byteOffset,E.length)):y.toArray(E,T)}function M(y,E,T,P){let v=y.value,w=E+"_"+T;if(P[w]===void 0)return typeof v=="number"||typeof v=="boolean"?P[w]=v:ArrayBuffer.isView(v)?P[w]=v.slice():P[w]=v.clone(),!0;{let I=P[w];if(typeof v=="number"||typeof v=="boolean"){if(I!==v)return P[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(I.equals(v)===!1)return I.copy(v),!0}}return!1}function m(y){let E=y.uniforms,T=0,P=16;for(let w=0,I=E.length;w<I;w++){let N=Array.isArray(E[w])?E[w]:[E[w]];for(let O=0,V=N.length;O<V;O++){let U=N[O],k=Array.isArray(U.value)?U.value:[U.value];for(let q=0,X=k.length;q<X;q++){let at=k[q],Y=p(at),j=T%P,it=j%Y.boundary,Nt=j+it;T+=it,Nt!==0&&P-Nt<Y.storage&&(T+=P-Nt),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=T,T+=Y.storage}}}let v=T%P;return v>0&&(T+=P-v),y.__size=T,y.__cache={},this}function p(y){let E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",y),E}function b(y){let E=y.target;E.removeEventListener("dispose",b);let T=a.indexOf(E.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function A(){for(let y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}var qy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hi=null;function Yy(){return hi===null&&(hi=new ea(qy,16,16,Yi,We),hi.name="DFG_LUT",hi.minFilter=je,hi.magFilter=je,hi.wrapS=ei,hi.wrapT=ei,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}var ac=class{constructor(t={}){let{canvas:e=Af(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=mn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let M=f,m=new Set([Sl,Ml,yl]),p=new Set([mn,Zn,hr,ur,xl,_l]),b=new Uint32Array(4),A=new Int32Array(4),y=new C,E=null,T=null,P=[],v=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,N=!1,O=null,V=null,U=null,k=null;this._outputColorSpace=Ge;let q=0,X=0,at=null,Y=-1,j=null,it=new Ue,Nt=new Ue,Rt=null,fe=new wt(0),ee=0,le=e.width,J=e.height,tt=1,yt=null,Wt=null,Tt=new Ue(0,0,le,J),Xt=new Ue(0,0,le,J),ve=!1,et=new ir,ot=!1,ct=!1,ht=new he,ft=new C,zt=new Ue,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function $t(){return at===null?tt:1}let L=i;function pe(S,D){return e.getContext(S,D)}let ne,R,x,B,G,$,ut,dt,Z,Q,pt,Ut,_t,mt,Ft,Ht,Zt,F,gt,K,xt,bt,rt;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",Bn,!1),L===null){let D="webgl2";if(L=pe(D,S),L===null)throw pe(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ot()}catch(S){throw e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",Bn,!1),Gt("WebGLRenderer: "+S.message),S}function Ot(){ne=new tv(L),ne.init(),xt=new zy(L,ne),R=new W_(L,ne,t,xt),x=new By(L,ne),R.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),V=L.createFramebuffer(),U=L.createFramebuffer(),k=L.createFramebuffer(),B=new iv(L),G=new Ty,$=new ky(L,ne,x,G,R,xt,B),ut=new j_(I),dt=new rg(L),bt=new G_(L,dt),Z=new ev(L,dt,B,bt),Q=new rv(L,Z,dt,bt,B),F=new sv(L,R,$),Ft=new X_(G),pt=new by(I,ut,ne,R,bt,Ft),Ut=new Wy(I,G),_t=new wy,mt=new Ly(ne),Zt=new H_(I,ut,x,Q,g,l),Ht=new Oy(I,Q,R),rt=new Xy(L,B,R,x),gt=new V_(L,ne,B),K=new nv(L,ne,B),B.programs=pt.programs,I.capabilities=R,I.extensions=ne,I.properties=G,I.renderLists=_t,I.shadowMap=Ht,I.state=x,I.info=B}M!==mn&&(w=new ov(M,e.width,e.height,o,s,r));let It=new pu(I,L);this.xr=It,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let S=ne.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ne.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(S){S!==void 0&&(tt=S,this.setSize(le,J,!1))},this.getSize=function(S){return S.set(le,J)},this.setSize=function(S,D,W=!0){if(It.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}le=S,J=D,e.width=Math.floor(S*tt),e.height=Math.floor(D*tt),W===!0&&(e.style.width=S+"px",e.style.height=D+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(le*tt,J*tt).floor()},this.setDrawingBufferSize=function(S,D,W){le=S,J=D,tt=W,e.width=Math.floor(S*W),e.height=Math.floor(D*W),this.setViewport(0,0,S,D)},this.setEffects=function(S){if(M===mn){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let D=0;D<S.length;D++)if(S[D].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(it)},this.getViewport=function(S){return S.copy(Tt)},this.setViewport=function(S,D,W,z){S.isVector4?Tt.set(S.x,S.y,S.z,S.w):Tt.set(S,D,W,z),x.viewport(it.copy(Tt).multiplyScalar(tt).round())},this.getScissor=function(S){return S.copy(Xt)},this.setScissor=function(S,D,W,z){S.isVector4?Xt.set(S.x,S.y,S.z,S.w):Xt.set(S,D,W,z),x.scissor(Nt.copy(Xt).multiplyScalar(tt).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(S){x.setScissorTest(ve=S)},this.setOpaqueSort=function(S){yt=S},this.setTransparentSort=function(S){Wt=S},this.getClearColor=function(S){return S.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,W=!0){let z=0;if(S){let H=!1;if(at!==null){let St=at.texture.format;H=m.has(St)}if(H){let St=at.texture.type,At=p.has(St),Mt=Zt.getClearColor(),Ct=Zt.getClearAlpha(),Lt=Mt.r,Jt=Mt.g,ie=Mt.b;At?(b[0]=Lt,b[1]=Jt,b[2]=ie,b[3]=Ct,L.clearBufferuiv(L.COLOR,0,b)):(A[0]=Lt,A[1]=Jt,A[2]=ie,A[3]=Ct,L.clearBufferiv(L.COLOR,0,A))}else z|=L.COLOR_BUFFER_BIT}D&&(z|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),O=S},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",Bn,!1),Zt.dispose(),_t.dispose(),mt.dispose(),G.dispose(),ut.dispose(),Q.dispose(),bt.dispose(),rt.dispose(),pt.dispose(),It.dispose(),It.removeEventListener("sessionstart",nd),It.removeEventListener("sessionend",id),es.stop()};function Ce(S){S.preventDefault(),$r("WebGLRenderer: Context Lost."),N=!0}function me(){$r("WebGLRenderer: Context Restored."),N=!1;let S=B.autoReset,D=Ht.enabled,W=Ht.autoUpdate,z=Ht.needsUpdate,H=Ht.type;Ot(),B.autoReset=S,Ht.enabled=D,Ht.autoUpdate=W,Ht.needsUpdate=z,Ht.type=H}function Bn(S){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Qn(S){let D=S.target;D.removeEventListener("dispose",Qn),Mm(D)}function Mm(S){Sm(S),G.remove(S)}function Sm(S){let D=G.get(S).programs;D!==void 0&&(D.forEach(function(W){pt.releaseProgram(W)}),S.isShaderMaterial&&pt.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,W,z,H,St){D===null&&(D=Bt);let At=H.isMesh&&H.matrixWorld.determinantAffine()<0,Mt=Em(S,D,W,z,H);x.setMaterial(z,At);let Ct=W.index,Lt=1;if(z.wireframe===!0){if(Ct=Z.getWireframeAttribute(W),Ct===void 0)return;Lt=2}let Jt=W.drawRange,ie=W.attributes.position,Pt=Jt.start*Lt,ge=(Jt.start+Jt.count)*Lt;St!==null&&(Pt=Math.max(Pt,St.start*Lt),ge=Math.min(ge,(St.start+St.count)*Lt)),Ct!==null?(Pt=Math.max(Pt,0),ge=Math.min(ge,Ct.count)):ie!=null&&(Pt=Math.max(Pt,0),ge=Math.min(ge,ie.count));let ze=ge-Pt;if(ze<0||ze===1/0)return;bt.setup(H,z,Mt,W,Ct);let Ie,we=gt;if(Ct!==null&&(Ie=dt.get(Ct),we=K,we.setIndex(Ie)),H.isMesh)z.wireframe===!0?(x.setLineWidth(z.wireframeLinewidth*$t()),we.setMode(L.LINES)):we.setMode(L.TRIANGLES);else if(H.isLine){let sn=z.linewidth;sn===void 0&&(sn=1),x.setLineWidth(sn*$t()),H.isLineSegments?we.setMode(L.LINES):H.isLineLoop?we.setMode(L.LINE_LOOP):we.setMode(L.LINE_STRIP)}else H.isPoints?we.setMode(L.POINTS):H.isSprite&&we.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(ne.get("WEBGL_multi_draw"))we.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let sn=H._multiDrawStarts,Et=H._multiDrawCounts,cn=H._multiDrawCount,ce=Ct?dt.get(Ct).bytesPerElement:1,Cn=G.get(z).currentProgram.getUniforms();for(let jn=0;jn<cn;jn++)Cn.setValue(L,"_gl_DrawID",jn),we.render(sn[jn]/ce,Et[jn])}else if(H.isInstancedMesh)we.renderInstances(Pt,ze,H.count);else if(W.isInstancedBufferGeometry){let sn=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Et=Math.min(W.instanceCount,sn);we.renderInstances(Pt,ze,Et)}else we.render(Pt,ze)};function ed(S,D,W,z){O!==null&&S.isNodeMaterial&&O.setObject(z,S),ot===!0&&Ft.setState(S,W,!1),S.transparent===!0&&S.side===Ve&&S.forceSinglePass===!1?(S.side=en,S.needsUpdate=!0,to(S,D,z),S.side=Vi,S.needsUpdate=!0,to(S,D,z),S.side=Ve):to(S,D,z)}this.compile=function(S,D,W=null){W===null&&(W=S),O!==null&&O.renderStart(S,D,W),T=mt.get(W),T.init(D),v.push(T),W.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),S!==W&&S.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),ct=this.localClippingEnabled,ot=Ft.init(this.clippingPlanes,ct),ot===!0&&Ft.setGlobalState(this.clippingPlanes,D),O!==null&&Ht.render(T.state.shadowsArray,W,D);let z=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let St=H.material;if(St)if(Array.isArray(St))for(let At=0;At<St.length;At++){let Mt=St[At];ed(Mt,W,D,H),z.add(Mt)}else ed(St,W,D,H),z.add(St)}),T=v.pop(),O!==null&&O.renderEnd(),z},this.compileAsync=function(S,D,W=null){let z=this.compile(S,D,W);return new Promise(H=>{function St(){if(z.forEach(function(At){let Ct=G.get(At).currentProgram;(Ct===void 0||Ct.isReady())&&z.delete(At)}),z.size===0){H(S);return}setTimeout(St,10)}ne.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Hc=null;function bm(S){Hc&&Hc(S)}function nd(){es.stop()}function id(){es.start()}let es=new ap;es.setAnimationLoop(bm),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(S){Hc=S,It.setAnimationLoop(S),S===null?es.stop():es.start()},It.addEventListener("sessionstart",nd),It.addEventListener("sessionend",id),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(S,D);let W=It.enabled===!0&&It.isPresenting===!0,z=w!==null&&(at===null||W)&&w.begin(I,at);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(It.cameraAutoUpdate===!0&&It.updateCamera(D),D=It.getCamera()),S.isScene===!0&&S.onBeforeRender(I,S,D,at),T=mt.get(S,v.length),T.init(D),T.state.textureUnits=$.getTextureUnits(),v.push(T),ht.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),et.setFromProjectionMatrix(ht,Wn,D.reversedDepth),ct=this.localClippingEnabled,ot=Ft.init(this.clippingPlanes,ct),E=_t.get(S,P.length),E.init(),P.push(E),It.enabled===!0&&It.isPresenting===!0){let At=I.xr.getDepthSensingMesh();At!==null&&Gc(At,D,-1/0,I.sortObjects)}Gc(S,D,0,I.sortObjects),E.finish(),O!==null&&O.updateLights(T.state.lightsArray),I.sortObjects===!0&&E.sort(yt,Wt),qt=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,qt&&Zt.addToRenderList(E,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ot===!0&&Ft.beginShadows();let H=T.state.shadowsArray;if(Ht.render(H,S,D),ot===!0&&Ft.endShadows(),(z&&w.hasRenderPass())===!1){let At=E.opaque,Mt=E.transmissive;if(T.setupLights(),D.isArrayCamera){let Ct=D.cameras;if(Mt.length>0)for(let Lt=0,Jt=Ct.length;Lt<Jt;Lt++){let ie=Ct[Lt];rd(At,Mt,S,ie)}qt&&Zt.render(S);for(let Lt=0,Jt=Ct.length;Lt<Jt;Lt++){let ie=Ct[Lt];sd(E,S,ie,ie.viewport)}}else Mt.length>0&&rd(At,Mt,S,D),qt&&Zt.render(S),sd(E,S,D)}at!==null&&X===0&&($.updateMultisampleRenderTarget(at),$.updateRenderTargetMipmap(at)),z&&w.end(I),S.isScene===!0&&S.onAfterRender(I,S,D),bt.resetDefaultState(),Y=-1,j=null,v.pop(),v.length>0?(T=v[v.length-1],$.setTextureUnits(T.state.textureUnits),ot===!0&&Ft.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?E=P[P.length-1]:E=null,O!==null&&O.renderEnd()};function Gc(S,D,W,z){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(et)){z&&zt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ht);let At=Q.update(S),Mt=S.material;Mt.visible&&E.push(S,At,Mt,W,zt.z,null,D)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(et))){let At=Q.update(S),Mt=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),zt.copy(S.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),zt.copy(At.boundingSphere.center)),zt.applyMatrix4(S.matrixWorld).applyMatrix4(ht)),Array.isArray(Mt)){let Ct=At.groups;for(let Lt=0,Jt=Ct.length;Lt<Jt;Lt++){let ie=Ct[Lt],Pt=Mt[ie.materialIndex];Pt&&Pt.visible&&E.push(S,At,Pt,W,zt.z,ie,D)}}else Mt.visible&&E.push(S,At,Mt,W,zt.z,null,D)}}let St=S.children;for(let At=0,Mt=St.length;At<Mt;At++)Gc(St[At],D,W,z)}function sd(S,D,W,z){let{opaque:H,transmissive:St,transparent:At}=S;T.setupLightsView(W),ot===!0&&Ft.setGlobalState(I.clippingPlanes,W),z&&x.viewport(it.copy(z)),H.length>0&&ja(H,D,W),St.length>0&&ja(St,D,W),At.length>0&&ja(At,D,W),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function rd(S,D,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){let Pt=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new Oe(1,1,{generateMipmaps:!0,type:Pt?We:mn,minFilter:Xi,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}let St=T.state.transmissionRenderTarget[z.id],At=z.viewport||it;St.setSize(At.z*I.transmissionResolutionScale,At.w*I.transmissionResolutionScale);let Mt=I.getRenderTarget(),Ct=I.getActiveCubeFace(),Lt=I.getActiveMipmapLevel();I.setRenderTarget(St),I.getClearColor(fe),ee=I.getClearAlpha(),ee<1&&I.setClearColor(16777215,.5),I.clear(),qt&&Zt.render(W);let Jt=I.toneMapping;I.toneMapping=$n;let ie=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),ot===!0&&Ft.setGlobalState(I.clippingPlanes,z),ja(S,W,z),$.updateMultisampleRenderTarget(St),$.updateRenderTargetMipmap(St),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let ge=0,ze=D.length;ge<ze;ge++){let Ie=D[ge],{object:we,geometry:sn,material:Et,group:cn}=Ie;if(Et.side===Ve&&we.layers.test(z.layers)){let ce=Et.side;Et.side=en,Et.needsUpdate=!0,ad(we,W,z,sn,Et,cn),Et.side=ce,Et.needsUpdate=!0,Pt=!0}}Pt===!0&&($.updateMultisampleRenderTarget(St),$.updateRenderTargetMipmap(St))}I.setRenderTarget(Mt,Ct,Lt),I.setClearColor(fe,ee),ie!==void 0&&(z.viewport=ie),I.toneMapping=Jt}function ja(S,D,W){let z=D.isScene===!0?D.overrideMaterial:null;for(let H=0,St=S.length;H<St;H++){let At=S[H],{object:Mt,geometry:Ct,group:Lt}=At,Jt=At.material;Jt.allowOverride===!0&&z!==null&&(Jt=z),Mt.layers.test(W.layers)&&ad(Mt,D,W,Ct,Jt,Lt)}}function ad(S,D,W,z,H,St){O!==null&&H.isNodeMaterial&&O.setObject(S,H),S.onBeforeRender(I,D,W,z,H,St),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(I,D,W,z,S,St),H.transparent===!0&&H.side===Ve&&H.forceSinglePass===!1?(H.side=en,H.needsUpdate=!0,I.renderBufferDirect(W,D,z,H,S,St),H.side=Vi,H.needsUpdate=!0,I.renderBufferDirect(W,D,z,H,S,St),H.side=Ve):I.renderBufferDirect(W,D,z,H,S,St),S.onAfterRender(I,D,W,z,H,St)}function to(S,D,W){D.isScene!==!0&&(D=Bt);let z=G.get(S),H=T.state.lights,St=T.state.shadowsArray,At=H.state.version,Mt=pt.getParameters(S,H.state,St,D,W,T.state.lightProbeGridArray),Ct=pt.getProgramCacheKey(Mt),Lt=z.programs;z.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,z.fog=D.fog;let Jt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;z.envMap=ut.get(S.envMap||z.environment,Jt),z.envMapRotation=z.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Lt===void 0&&(S.addEventListener("dispose",Qn),Lt=new Map,z.programs=Lt);let ie=Lt.get(Ct);if(ie!==void 0){if(z.currentProgram===ie&&z.lightsStateVersion===At)return ld(S,Mt),ie}else Mt.uniforms=pt.getUniforms(S),O!==null&&S.isNodeMaterial&&O.build(S,W,Mt),S.onBeforeCompile(Mt,I),ie=pt.acquireProgram(Mt,Ct),Lt.set(Ct,ie),z.uniforms=Mt.uniforms;let Pt=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pt.clippingPlanes=Ft.uniform),ld(S,Mt),z.needsLights=Am(S),z.lightsStateVersion=At,z.needsLights&&(Pt.ambientLightColor.value=H.state.ambient,Pt.lightProbe.value=H.state.probe,Pt.sunLights.value=H.state.sun,Pt.sunLightShadows.value=H.state.sunShadow,Pt.directionalLights.value=H.state.directional,Pt.directionalLightShadows.value=H.state.directionalShadow,Pt.spotLights.value=H.state.spot,Pt.spotLightShadows.value=H.state.spotShadow,Pt.rectAreaLights.value=H.state.rectArea,Pt.ltc_1.value=H.state.rectAreaLTC1,Pt.ltc_2.value=H.state.rectAreaLTC2,Pt.pointLights.value=H.state.point,Pt.pointLightShadows.value=H.state.pointShadow,Pt.hemisphereLights.value=H.state.hemi,Pt.sunShadowMatrix.value=H.state.sunShadowMatrix,Pt.sunShadowCascade.value=H.state.sunShadowCascade,Pt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Pt.spotLightMatrix.value=H.state.spotLightMatrix,Pt.spotLightMap.value=H.state.spotLightMap,Pt.pointShadowMatrix.value=H.state.pointShadowMatrix),z.lightProbeGrid=T.state.lightProbeGridArray.length>0,z.currentProgram=ie,z.uniformsList=null,ie}function od(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=mr.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function ld(S,D){let W=G.get(S);W.outputColorSpace=D.outputColorSpace,W.batching=D.batching,W.batchingColor=D.batchingColor,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.instancingMorph=D.instancingMorph,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function Tm(S,D){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(D.matrixWorld);for(let W=0,z=S.length;W<z;W++){let H=S[W];if(H.texture!==null&&H.boundingBox.containsPoint(y))return H}return null}function Em(S,D,W,z,H){D.isScene!==!0&&(D=Bt),$.resetTextureUnits();let St=D.fog,At=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?D.environment:null,Mt=at===null?I.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:te.workingColorSpace,Ct=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Lt=ut.get(z.envMap||At,Ct),Jt=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ie=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pt=!!W.morphAttributes.position,ge=!!W.morphAttributes.normal,ze=!!W.morphAttributes.color,Ie=$n;z.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Ie=I.toneMapping);let we=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,sn=we!==void 0?we.length:0,Et=G.get(z),cn=T.state.lights;if(ot===!0&&(ct===!0||S!==j)){let Pe=S===j&&z.id===Y;Ft.setState(z,S,Pe)}let ce=!1;z.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==cn.state.version||Et.outputColorSpace!==Mt||H.isBatchedMesh&&Et.batching===!1||!H.isBatchedMesh&&Et.batching===!0||H.isBatchedMesh&&Et.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Et.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Et.instancing===!1||!H.isInstancedMesh&&Et.instancing===!0||H.isSkinnedMesh&&Et.skinning===!1||!H.isSkinnedMesh&&Et.skinning===!0||H.isInstancedMesh&&Et.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Et.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Et.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Et.instancingMorph===!1&&H.morphTexture!==null||Et.envMap!==Lt||z.fog===!0&&Et.fog!==St||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Ft.numPlanes||Et.numIntersection!==Ft.numIntersection)||Et.vertexAlphas!==Jt||Et.vertexTangents!==ie||Et.morphTargets!==Pt||Et.morphNormals!==ge||Et.morphColors!==ze||Et.toneMapping!==Ie||Et.morphTargetsCount!==sn||!!Et.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,Et.__version=z.version);let Cn=Et.currentProgram;ce===!0&&(Cn=to(z,D,H),O&&z.isNodeMaterial&&O.onUpdateProgram(z,Cn,Et));let jn=!1,Ri=!1,ws=!1,Se=Cn.getUniforms(),ke=Et.uniforms;if(x.useProgram(Cn.program)&&(jn=!0,Ri=!0,ws=!0),z.id!==Y&&(Y=z.id,Ri=!0),Et.needsLights){let Pe=Tm(T.state.lightProbeGridArray,H);Et.lightProbeGrid!==Pe&&(Et.lightProbeGrid=Pe,Ri=!0)}if(jn||j!==S){x.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Se.setValue(L,"projectionMatrix",S.projectionMatrix),Se.setValue(L,"viewMatrix",S.matrixWorldInverse);let Pi=Se.map.cameraPosition;Pi!==void 0&&Pi.setValue(L,ft.setFromMatrixPosition(S.matrixWorld)),R.logarithmicDepthBuffer&&Se.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Se.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),j!==S&&(j=S,Ri=!0,ws=!0)}if(Et.needsLights&&(cn.state.sunShadowMap.length>0&&Se.setValue(L,"sunShadowMap",cn.state.sunShadowMap,$),cn.state.directionalShadowMap.length>0&&Se.setValue(L,"directionalShadowMap",cn.state.directionalShadowMap,$),cn.state.spotShadowMap.length>0&&Se.setValue(L,"spotShadowMap",cn.state.spotShadowMap,$),cn.state.pointShadowMap.length>0&&Se.setValue(L,"pointShadowMap",cn.state.pointShadowMap,$)),H.isSkinnedMesh){Se.setOptional(L,H,"bindMatrix"),Se.setOptional(L,H,"bindMatrixInverse");let Pe=H.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),Se.setValue(L,"boneTexture",Pe.boneTexture,$))}H.isBatchedMesh&&(Se.setOptional(L,H,"batchingTexture"),Se.setValue(L,"batchingTexture",H._matricesTexture,$),Se.setOptional(L,H,"batchingIdTexture"),Se.setValue(L,"batchingIdTexture",H._indirectTexture,$),Se.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&Se.setValue(L,"batchingColorTexture",H._colorsTexture,$));let Ci=W.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&F.update(H,W,Cn),(Ri||Et.receiveShadow!==H.receiveShadow)&&(Et.receiveShadow=H.receiveShadow,Se.setValue(L,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&D.environment!==null&&(ke.envMapIntensity.value=D.environmentIntensity),ke.dfgLUT!==void 0&&(ke.dfgLUT.value=Yy()),Ri){if(Se.setValue(L,"toneMappingExposure",I.toneMappingExposure),Et.needsLights&&wm(ke,ws),St&&z.fog===!0&&Ut.refreshFogUniforms(ke,St),Ut.refreshMaterialUniforms(ke,z,tt,J,T.state.transmissionRenderTarget[S.id]),Et.needsLights&&Et.lightProbeGrid){let Pe=Et.lightProbeGrid;ke.probesSH.value=Pe.texture,ke.probesMin.value.copy(Pe.boundingBox.min),ke.probesMax.value.copy(Pe.boundingBox.max),ke.probesResolution.value.copy(Pe.resolution)}mr.upload(L,od(Et),ke,$)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(mr.upload(L,od(Et),ke,$),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Se.setValue(L,"center",H.center),Se.setValue(L,"modelViewMatrix",H.modelViewMatrix),Se.setValue(L,"normalMatrix",H.normalMatrix),Se.setValue(L,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){let Pe=z.uniformsGroups;for(let Pi=0,As=Pe.length;Pi<As;Pi++){let hd=Pe[Pi];rt.update(hd,Cn),rt.bind(hd,Cn)}}return Cn}function wm(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.sunLights.needsUpdate=D,S.sunLightShadows.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function Am(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(S,D,W){let z=G.get(S);z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),G.get(S.texture).__webglTexture=D,G.get(S.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){let W=G.get(S);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,W=0){at=S,q=D,X=W;let z=null,H=!1,St=!1;if(S){let Mt=G.get(S);if(Mt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(L.FRAMEBUFFER,Mt.__webglFramebuffer),it.copy(S.viewport),Nt.copy(S.scissor),Rt=S.scissorTest,x.viewport(it),x.scissor(Nt),x.setScissorTest(Rt),Y=-1;return}else if(Mt.__webglFramebuffer===void 0)$.setupRenderTarget(S);else if(Mt.__hasExternalTextures)$.rebindTextures(S,G.get(S.texture).__webglTexture,G.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Jt=S.depthTexture;if(Mt.__boundDepthTexture!==Jt){if(Jt!==null&&G.has(Jt)&&(S.width!==Jt.image.width||S.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(S)}}let Ct=S.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(St=!0);let Lt=G.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Lt[D])?z=Lt[D][W]:z=Lt[D],H=!0):S.samples>0&&$.useMultisampledRTT(S)===!1?z=G.get(S).__webglMultisampledFramebuffer:Array.isArray(Lt)?z=Lt[W]:z=Lt,it.copy(S.viewport),Nt.copy(S.scissor),Rt=S.scissorTest}else it.copy(Tt).multiplyScalar(tt).floor(),Nt.copy(Xt).multiplyScalar(tt).floor(),Rt=ve;if(W!==0&&(z=V),x.bindFramebuffer(L.FRAMEBUFFER,z)&&x.drawBuffers(S,z),x.viewport(it),x.scissor(Nt),x.setScissorTest(Rt),H){let Mt=G.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,Mt.__webglTexture,W)}else if(St){let Mt=D;for(let Ct=0;Ct<S.textures.length;Ct++){let Lt=G.get(S.textures[Ct]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ct,Lt.__webglTexture,W,Mt)}}else if(S!==null&&W!==0){let Mt=G.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Mt.__webglTexture,W)}Y=-1};function cd(S){let D=G.get(S);return(D.__readFormat!==S.format||D.__readType!==S.type)&&(D.__readFormat=S.format,D.__readType=S.type,D.__formatReadable=R.textureFormatReadable(S.format),D.__typeReadable=R.textureTypeReadable(S.type)),D}this.readRenderTargetPixels=function(S,D,W,z,H,St,At,Mt=0){if(!(S&&S.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&At!==void 0&&(Ct=Ct[At]),Ct){x.bindFramebuffer(L.FRAMEBUFFER,Ct);try{let Lt=S.textures[Mt],Jt=Lt.format,ie=Lt.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Mt);let Pt=cd(Lt);if(Pt.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-z&&W>=0&&W<=S.height-H&&L.readPixels(D,W,z,H,xt.convert(Jt),xt.convert(ie),St)}finally{let Lt=at!==null?G.get(at).__webglFramebuffer:null;x.bindFramebuffer(L.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(S,D,W,z,H,St,At,Mt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&At!==void 0&&(Ct=Ct[At]),Ct)if(D>=0&&D<=S.width-z&&W>=0&&W<=S.height-H){x.bindFramebuffer(L.FRAMEBUFFER,Ct);let Lt=S.textures[Mt],Jt=Lt.format,ie=Lt.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Mt);let Pt=cd(Lt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ge=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ge),L.bufferData(L.PIXEL_PACK_BUFFER,St.byteLength,L.STREAM_READ),L.readPixels(D,W,z,H,xt.convert(Jt),xt.convert(ie),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let ze=at!==null?G.get(at).__webglFramebuffer:null;x.bindFramebuffer(L.FRAMEBUFFER,ze);let Ie=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Cf(L,Ie,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ge),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,St),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ge),L.deleteSync(Ie),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,W=0){let z=Math.pow(2,-W),H=Math.floor(S.image.width*z),St=Math.floor(S.image.height*z),At=D!==null?D.x:0,Mt=D!==null?D.y:0;$.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,At,Mt,H,St),x.unbindTexture()},this.copyTextureToTexture=function(S,D,W=null,z=null,H=0,St=0){let At,Mt,Ct,Lt,Jt,ie,Pt,ge,ze,Ie=S.isCompressedTexture?S.mipmaps[St]:S.image;if(W!==null)At=W.max.x-W.min.x,Mt=W.max.y-W.min.y,Ct=W.isBox3?W.max.z-W.min.z:1,Lt=W.min.x,Jt=W.min.y,ie=W.isBox3?W.min.z:0;else{let ke=Math.pow(2,-H);At=Math.floor(Ie.width*ke),Mt=Math.floor(Ie.height*ke),S.isDataArrayTexture?Ct=Ie.depth:S.isData3DTexture?Ct=Math.floor(Ie.depth*ke):Ct=1,Lt=0,Jt=0,ie=0}z!==null?(Pt=z.x,ge=z.y,ze=z.z):(Pt=0,ge=0,ze=0);let we=xt.convert(D.format),sn=xt.convert(D.type),Et;D.isData3DTexture?($.setTexture3D(D,0),Et=L.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?($.setTexture2DArray(D,0),Et=L.TEXTURE_2D_ARRAY):($.setTexture2D(D,0),Et=L.TEXTURE_2D),x.activeTexture(L.TEXTURE0),x.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),x.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),x.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);let cn=x.getParameter(L.UNPACK_ROW_LENGTH),ce=x.getParameter(L.UNPACK_IMAGE_HEIGHT),Cn=x.getParameter(L.UNPACK_SKIP_PIXELS),jn=x.getParameter(L.UNPACK_SKIP_ROWS),Ri=x.getParameter(L.UNPACK_SKIP_IMAGES);x.pixelStorei(L.UNPACK_ROW_LENGTH,Ie.width),x.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ie.height),x.pixelStorei(L.UNPACK_SKIP_PIXELS,Lt),x.pixelStorei(L.UNPACK_SKIP_ROWS,Jt),x.pixelStorei(L.UNPACK_SKIP_IMAGES,ie);let ws=S.isDataArrayTexture||S.isData3DTexture,Se=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){let ke=G.get(S),Ci=G.get(D),Pe=G.get(ke.__renderTarget),Pi=G.get(Ci.__renderTarget);x.bindFramebuffer(L.READ_FRAMEBUFFER,Pe.__webglFramebuffer),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let As=0;As<Ct;As++)ws&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(S).__webglTexture,H,ie+As),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(D).__webglTexture,St,ze+As)),L.blitFramebuffer(Lt,Jt,At,Mt,Pt,ge,At,Mt,L.DEPTH_BUFFER_BIT,L.NEAREST);x.bindFramebuffer(L.READ_FRAMEBUFFER,null),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||G.has(S)){let ke=G.get(S),Ci=G.get(D);x.bindFramebuffer(L.READ_FRAMEBUFFER,U),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,k);for(let Pe=0;Pe<Ct;Pe++)ws?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ke.__webglTexture,H,ie+Pe):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ke.__webglTexture,H),Se?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ci.__webglTexture,St,ze+Pe):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ci.__webglTexture,St),H!==0?L.blitFramebuffer(Lt,Jt,At,Mt,Pt,ge,At,Mt,L.COLOR_BUFFER_BIT,L.NEAREST):Se?L.copyTexSubImage3D(Et,St,Pt,ge,ze+Pe,Lt,Jt,At,Mt):L.copyTexSubImage2D(Et,St,Pt,ge,Lt,Jt,At,Mt);x.bindFramebuffer(L.READ_FRAMEBUFFER,null),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Se?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(Et,St,Pt,ge,ze,At,Mt,Ct,we,sn,Ie.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(Et,St,Pt,ge,ze,At,Mt,Ct,we,Ie.data):L.texSubImage3D(Et,St,Pt,ge,ze,At,Mt,Ct,we,sn,Ie):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,St,Pt,ge,At,Mt,we,sn,Ie.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,St,Pt,ge,Ie.width,Ie.height,we,Ie.data):L.texSubImage2D(L.TEXTURE_2D,St,Pt,ge,At,Mt,we,sn,Ie);x.pixelStorei(L.UNPACK_ROW_LENGTH,cn),x.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ce),x.pixelStorei(L.UNPACK_SKIP_PIXELS,Cn),x.pixelStorei(L.UNPACK_SKIP_ROWS,jn),x.pixelStorei(L.UNPACK_SKIP_IMAGES,Ri),St===0&&D.generateMipmaps&&L.generateMipmap(Et),x.unbindTexture()},this.initRenderTarget=function(S){G.get(S).__webglFramebuffer===void 0&&$.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?$.setTextureCube(S,0):S.isData3DTexture?$.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?$.setTexture2DArray(S,0):$.setTexture2D(S,0),x.unbindTexture()},this.resetState=function(){q=0,X=0,at=null,x.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var _r={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var En=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},$y=new Gi(-1,1,1,-1,0,1),mu=class extends Ee{constructor(){super(),this.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new se([0,2,0,0,2,0],2))}},Zy=new mu,$i=class{constructor(t){this._mesh=new De(Zy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,$y)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var cc=class extends En{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ae?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Si.clone(t.uniforms),this.material=new Ae({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new $i(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var za=class extends En{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},hc=class extends En{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var uc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new nt);this._width=i.width,this._height=i.height,e=new Oe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:We}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new cc(_r),this.copyPass.material.blending=Ln,this.timer=new ya}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}za!==void 0&&(a instanceof za?i=!0:a instanceof hc&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var dc=class extends En{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new wt}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var fp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new wt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var vr=class n extends En{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new wt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Oe(r,a,{type:We,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Oe(r,a,{type:We,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Oe(r,a,{type:We,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=fp;this.highPassUniforms=Si.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ae({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new nt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Si.clone(_r.uniforms),this.blendMaterial=new Ae({uniforms:this.copyUniforms,vertexShader:_r.vertexShader,fragmentShader:_r.fragmentShader,premultipliedAlpha:!0,blending:Be,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new wt,this._oldClearAlpha=1,this._basic=new xe,this._fsQuad=new $i(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new nt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Ae({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Ae({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};vr.BlurDirectionX=new nt(1,0);vr.BlurDirectionY=new nt(0,1);var Ha={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var fc=class extends En{constructor(){super(),this.isOutputPass=!0,this.uniforms=Si.clone(Ha.uniforms),this.material=new ar({name:Ha.name,uniforms:this.uniforms,vertexShader:Ha.vertexShader,fragmentShader:Ha.fragmentShader}),this._fsQuad=new $i(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},te.getTransfer(this._outputColorSpace)===ue&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Sa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ba?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ta?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===wa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Aa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ea&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function mp(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Ee,c=0;for(let h=0;h<n.length;++h){let d=n[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<n.length;++u){let f=n[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=n[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=pp(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let M=0;M<a[h].length;++M)f.push(a[h][M][u]);let g=pp(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function pp(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Te(a,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){let M=h.getComponent(u,g);o.setComponent(u+d,g,M)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var st=(n,t)=>n+Math.random()*(t-n),gn=(n,t,e)=>n<t?t:n>e?e:n,ln=(n,t,e)=>n+(t-n)*e,mc=(n,t,e,i)=>n+(t-n)*(1-Math.exp(-e*i)),ys=n=>n[Math.random()*n.length|0],pc={v:4242},fn=(n=0,t=1)=>(pc.v=pc.v*16807%2147483647,n+pc.v/2147483647*(t-n));function gp(n){pc.v=Math.abs(Math.floor(n))%2147483646+1}function de(n,t,e,i=!0){let s=document.createElement("canvas");s.width=n,s.height=t,e(s.getContext("2d"),n,t);let r=new ls(s);return i&&(r.colorSpace=Ge),r}function di(n="rgba(255,200,120,1)",t="rgba(255,120,30,0.35)"){return de(128,128,e=>{let i=e.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,n),i.addColorStop(.25,t),i.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=i,e.fillRect(0,0,128,128)})}var Re={get(n,t){try{let e=localStorage.getItem(n);return e==null?t:JSON.parse(e)}catch{return t}},set(n,t){try{localStorage.setItem(n,JSON.stringify(t))}catch{}}};var gu={};function xn(n,t=1,e=1){return n.wrapS=n.wrapT=os,n.repeat.set(t,e),n.anisotropy=8,n}function _n(n,t,e,i,s,r,a,o=1,l=3){for(let c=0;c<i;c++){n.fillStyle=`rgba(${s},${st(r,a)})`;let h=st(o,l);n.fillRect(st(0,t),st(0,e),h,h)}}function _e(n){if(gu[n])return gu[n];let t=Jy[n];return gu[n]=t()}var Jy={asphalt:()=>xn(de(512,512,(n,t,e)=>{n.fillStyle="#3a3646",n.fillRect(0,0,t,e),_n(n,t,e,9e3,"20,18,28",.2,.5,1,3),_n(n,t,e,4e3,"120,112,140",.08,.25,1,2),n.strokeStyle="rgba(15,12,20,0.5)",n.lineWidth=2;for(let i=0;i<6;i++){n.beginPath();let s=st(0,t),r=st(0,e);n.moveTo(s,r);for(let a=0;a<6;a++)s+=st(-30,30),r+=st(10,40),n.lineTo(s,r);n.stroke()}n.fillStyle="rgba(235,220,190,0.75)";for(let i of[t*(.5-1.1/9.6),t*(.5+1.1/9.6)])for(let s=0;s<e;s+=128)n.fillRect(i-4,s+20,8,70);n.fillStyle="rgba(240,190,80,0.6)",n.fillRect(10,0,6,e),n.fillRect(t-16,0,6,e)}),1,4),sidewalk:()=>xn(de(256,256,(n,t,e)=>{n.fillStyle="#7a7486",n.fillRect(0,0,t,e),_n(n,t,e,3e3,"40,36,50",.15,.35),_n(n,t,e,1500,"200,190,210",.05,.15),n.strokeStyle="rgba(30,26,40,0.7)",n.lineWidth=3;for(let i=0;i<=e;i+=64)n.beginPath(),n.moveTo(0,i),n.lineTo(t,i),n.stroke();n.beginPath(),n.moveTo(t/2,0),n.lineTo(t/2,e),n.stroke()}),1,10),grass:()=>xn(de(256,256,(n,t,e)=>{n.fillStyle="#2c3a24",n.fillRect(0,0,t,e);for(let i=0;i<5e3;i++){let s=st(0,t),r=st(0,e),a=st(.5,1.3);n.strokeStyle=`rgba(${60*a|0},${90*a|0},${46*a|0},0.6)`,n.lineWidth=1,n.beginPath(),n.moveTo(s,r),n.lineTo(s+st(-2,2),r-st(3,8)),n.stroke()}for(let i=0;i<70;i++)n.fillStyle=["#b8501a","#d07a20","#8a3410","#c09030"][i%4],n.save(),n.translate(st(0,t),st(0,e)),n.rotate(st(0,6)),n.fillRect(-4,-2,8,4),n.restore()}),4,4),dirt:()=>xn(de(256,256,(n,t,e)=>{n.fillStyle="#4a3424",n.fillRect(0,0,t,e),_n(n,t,e,6e3,"30,20,12",.2,.5,1,4),_n(n,t,e,2e3,"140,110,80",.08,.2),n.strokeStyle="rgba(25,15,8,0.4)",n.lineWidth=6;for(let i=16;i<t;i+=42)n.beginPath(),n.moveTo(i,0),n.lineTo(i+st(-6,6),e),n.stroke()}),3,3),cobble:()=>xn(de(512,512,(n,t,e)=>{n.fillStyle="#2a2430",n.fillRect(0,0,t,e);for(let i=0;i<e;i+=32)for(let s=i/32%2*20;s<t;s+=40){let r=st(.75,1.2);n.fillStyle=`rgb(${92*r|0},${84*r|0},${98*r|0})`,n.beginPath(),n.roundRect(s+2,i+2,36,28,9),n.fill(),n.fillStyle="rgba(255,240,220,0.08)",n.fillRect(s+6,i+5,22,5)}_n(n,t,e,3e3,"20,16,24",.2,.4)}),2,6),siding:()=>xn(de(256,256,(n,t,e)=>{n.fillStyle="#ffffff",n.fillRect(0,0,t,e);for(let i=0;i<e;i+=16){let s=n.createLinearGradient(0,i,0,i+16);s.addColorStop(0,"rgba(0,0,0,0.0)"),s.addColorStop(.85,"rgba(0,0,0,0.12)"),s.addColorStop(1,"rgba(0,0,0,0.42)"),n.fillStyle=s,n.fillRect(0,i,t,16)}_n(n,t,e,1500,"0,0,0",.03,.08)}),2,2),brick:()=>xn(de(256,256,(n,t,e)=>{n.fillStyle="#3a2a28",n.fillRect(0,0,t,e);for(let i=0;i<e;i+=16)for(let s=i/16%2*16;s<t+32;s+=32){let r=st(.7,1.15);n.fillStyle=`rgb(${150*r|0},${78*r|0},${60*r|0})`,n.fillRect(s-16+1,i+1,30,14)}_n(n,t,e,2500,"0,0,0",.05,.2)}),2,2),shingle:()=>xn(de(256,256,(n,t,e)=>{n.fillStyle="#1e1826",n.fillRect(0,0,t,e);for(let i=0;i<e;i+=20)for(let s=i/20%2*14;s<t+28;s+=28){let r=st(.7,1.2);n.fillStyle=`rgb(${52*r|0},${42*r|0},${62*r|0})`,n.fillRect(s-14+1,i,26,18),n.fillStyle="rgba(0,0,0,0.35)",n.fillRect(s-14+1,i+15,26,3)}}),3,2),window:()=>de(128,160,(n,t,e)=>{let i=n.createRadialGradient(64,90,6,64,80,110);i.addColorStop(0,"#fff0b8"),i.addColorStop(.45,"#ffb04a"),i.addColorStop(1,"#a8400c"),n.fillStyle=i,n.fillRect(0,0,t,e),n.fillStyle="rgba(120,30,10,0.55)",n.beginPath(),n.moveTo(0,0),n.quadraticCurveTo(30,60,14,e),n.lineTo(0,e),n.fill(),n.beginPath(),n.moveTo(t,0),n.quadraticCurveTo(t-30,60,t-14,e),n.lineTo(t,e),n.fill(),n.fillStyle="#20140e",n.fillRect(0,0,t,8),n.fillRect(0,e-8,t,8),n.fillRect(0,0,8,e),n.fillRect(t-8,0,8,e),n.fillRect(t/2-4,0,8,e),n.fillRect(0,e/2-4,t,8)}),windowB:()=>de(128,160,(n,t,e)=>{let i=n.createRadialGradient(64,90,6,64,80,110);i.addColorStop(0,"#ffd8a0"),i.addColorStop(.5,"#e07a3a"),i.addColorStop(1,"#5a1a40"),n.fillStyle=i,n.fillRect(0,0,t,e),n.fillStyle="#1a0c10",n.beginPath(),n.ellipse(64,138,22,20,0,0,7),n.fill(),n.beginPath(),n.arc(64,108,14,0,7),n.fill(),n.beginPath(),n.moveTo(52,100),n.lineTo(54,84),n.lineTo(60,96),n.fill(),n.beginPath(),n.moveTo(76,100),n.lineTo(74,84),n.lineTo(68,96),n.fill(),n.fillStyle="#20140e",n.fillRect(0,0,t,8),n.fillRect(0,e-8,t,8),n.fillRect(0,0,8,e),n.fillRect(t-8,0,8,e),n.fillRect(t/2-4,0,8,e/2),n.fillRect(0,e/2-4,t,8)}),door:()=>de(128,256,(n,t,e)=>{n.fillStyle="#4a1e16",n.fillRect(0,0,t,e);for(let[i,s,r,a]of[[14,16,44,90],[70,16,44,90],[14,124,44,116],[70,124,44,116]])n.fillStyle="#5e2a1e",n.fillRect(i,s,r,a),n.strokeStyle="rgba(0,0,0,0.5)",n.lineWidth=4,n.strokeRect(i,s,r,a),n.strokeStyle="rgba(255,200,150,0.15)",n.lineWidth=2,n.strokeRect(i+3,s+3,r-6,a-6);_n(n,t,e,900,"0,0,0",.05,.2),n.fillStyle="#e8b860",n.beginPath(),n.arc(100,136,6,0,7),n.fill()}),pumpkinFace:()=>de(256,256,(n,t,e)=>{n.fillStyle="#000",n.fillRect(0,0,t,e),n.fillStyle="#fff",n.beginPath(),n.moveTo(60,110),n.lineTo(100,60),n.lineTo(112,116),n.fill(),n.beginPath(),n.moveTo(196,110),n.lineTo(156,60),n.lineTo(144,116),n.fill(),n.beginPath(),n.moveTo(118,140),n.lineTo(128,118),n.lineTo(138,140),n.fill(),n.beginPath(),n.moveTo(48,160),n.quadraticCurveTo(128,240,208,160),n.quadraticCurveTo(128,200,48,160),n.fill(),n.fillStyle="#000",n.fillRect(92,168,16,14),n.fillRect(148,168,16,14)},!1),cuteFace:()=>de(256,256,(n,t,e)=>{n.fillStyle="#000",n.fillRect(0,0,t,e),n.fillStyle="#fff",n.beginPath(),n.arc(90,100,22,0,7),n.fill(),n.beginPath(),n.arc(166,100,22,0,7),n.fill(),n.beginPath(),n.moveTo(70,160),n.quadraticCurveTo(128,215,186,160),n.quadraticCurveTo(128,185,70,160),n.fill()},!1),pumpkinSkin:()=>xn(de(256,128,(n,t,e)=>{let i=n.createLinearGradient(0,0,t,0);for(let s=0;s<=8;s++)i.addColorStop(s/8,s%2?"#f08a1c":"#c85a0e");n.fillStyle=i,n.fillRect(0,0,t,e),_n(n,t,e,1200,"90,30,0",.05,.15)}),1,1),stone:()=>xn(de(256,256,(n,t,e)=>{n.fillStyle="#6a6474",n.fillRect(0,0,t,e),_n(n,t,e,6e3,"30,28,38",.1,.35,1,4),_n(n,t,e,900,"70,110,60",.1,.3,2,6)}),1,1),hay:()=>xn(de(256,256,(n,t,e)=>{n.fillStyle="#a07a30",n.fillRect(0,0,t,e);for(let i=0;i<1800;i++){let s=st(.6,1.3);n.strokeStyle=`rgba(${210*s|0},${170*s|0},${80*s|0},0.5)`,n.beginPath();let r=st(0,t),a=st(0,e);n.moveTo(r,a),n.lineTo(r+st(-20,20),a+st(-4,4)),n.stroke()}}),1,1),wood:()=>xn(de(128,256,(n,t,e)=>{n.fillStyle="#5a3a24",n.fillRect(0,0,t,e);for(let i=0;i<60;i++){n.strokeStyle=`rgba(30,16,8,${st(.1,.35)})`,n.beginPath();let s=st(0,t);n.moveTo(s,0),n.bezierCurveTo(s+st(-8,8),e/3,s+st(-8,8),e*2/3,s,e),n.stroke()}}),1,1),web:()=>de(256,256,(n,t,e)=>{n.strokeStyle="rgba(235,235,255,0.75)",n.lineWidth=1.6;for(let i=0;i<=Math.PI/2+.01;i+=Math.PI/14)n.beginPath(),n.moveTo(0,0),n.lineTo(Math.cos(i)*250,Math.sin(i)*250),n.stroke();for(let i=26;i<250;i+=26){n.beginPath();for(let s=0;s<=Math.PI/2+.01;s+=Math.PI/14){let r=i+Math.sin(s*9)*4,a=Math.cos(s)*r,o=Math.sin(s)*r;s===0?n.moveTo(a,o):n.quadraticCurveTo(Math.cos(s-.11)*(r-8),Math.sin(s-.11)*(r-8),a,o)}n.stroke()}}),swirl:()=>de(256,256,(n,t,e)=>{n.fillStyle="#fff4f8",n.fillRect(0,0,t,e),n.translate(128,128);let i=["#ff3a8a","#ffb020","#7a3aff","#28c8a0"];for(let s=0;s<4;s++){n.fillStyle=i[s],n.beginPath();for(let r=0;r<12;r+=.05){let a=r*10.5,o=r+s*Math.PI/2;n.lineTo(Math.cos(o)*a,Math.sin(o)*a)}for(let r=12;r>0;r-=.05){let a=r*10.5,o=r+s*Math.PI/2+.7;n.lineTo(Math.cos(o)*a,Math.sin(o)*a)}n.fill()}}),choco:()=>de(256,128,(n,t,e)=>{n.fillStyle="#7a1a8a",n.fillRect(0,0,t,e),n.fillStyle="#ffb020",n.fillRect(0,44,t,40),n.fillStyle="#5a0e66",n.font="bold 34px Arial Black, Arial",n.textAlign="center",n.fillText("BOO!",128,76),n.fillStyle="rgba(255,255,255,0.25)",n.fillRect(0,8,t,10)}),sign:()=>de(512,128,(n,t,e)=>{n.fillStyle="#2a1408",n.fillRect(0,0,t,e),n.strokeStyle="#ffb040",n.lineWidth=6,n.strokeRect(8,8,t-16,e-16),n.fillStyle="#ffd070",n.font="bold 64px Georgia, serif",n.textAlign="center",n.fillText("CANDY",256,88)}),bandage:()=>xn(de(128,128,(n,t,e)=>{n.fillStyle="#d8ceb0",n.fillRect(0,0,t,e);for(let i=0;i<e;i+=10)n.fillStyle=`rgba(90,70,40,${st(.15,.4)})`,n.save(),n.translate(0,i),n.rotate(st(-.15,.15)),n.fillRect(-10,0,t+20,2),n.restore();_n(n,t,e,600,"80,60,30",.05,.2)}),2,2),fur:()=>xn(de(128,128,(n,t,e)=>{n.fillStyle="#5a3e2a",n.fillRect(0,0,t,e);for(let i=0;i<1600;i++){let s=st(.6,1.4);n.strokeStyle=`rgba(${110*s|0},${80*s|0},${56*s|0},0.6)`,n.beginPath();let r=st(0,t),a=st(0,e);n.moveTo(r,a),n.lineTo(r+st(-2,2),a+st(4,9)),n.stroke()}}),2,2)};var Ms={low:{pr:.85,bloom:0,stars:500,ff:30,leaves:20,fog:4,rays:2,decor:.5,particles:.45,msaa:0,lights:2,shadow:0},mid:{pr:1,bloom:.85,stars:900,ff:60,leaves:40,fog:6,rays:3,decor:.8,particles:.7,msaa:0,lights:4,shadow:0},high:{pr:1.5,bloom:1,stars:1400,ff:100,leaves:60,fog:8,rays:4,decor:1,particles:1,msaa:4,lights:6,shadow:1024},ultra:{pr:2,bloom:1.1,stars:2200,ff:160,leaves:90,fog:11,rays:5,decor:1.25,particles:1.35,msaa:4,lights:6,shadow:2048}},gc=new C(.2,.17,-1).normalize();function Ky(){let n=new ci(400,32,16),t=new Ae({side:en,depthWrite:!1,fog:!1,uniforms:{flash:{value:0},time:{value:0},hor:{value:new C(.3,.08,.3)},mid:{value:new C(.08,.02,.18)},md:{value:gc.clone()}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec3 vP; uniform float flash; uniform float time; uniform vec3 hor; uniform vec3 mid; uniform vec3 md;
      void main(){
        float h = vP.y;
        vec3 top = vec3(0.016,0.006,0.05);
        vec3 c = mix(hor, mid, smoothstep(-0.03, 0.16, h));
        c = mix(c, top, smoothstep(0.16, 0.6, h));
        float m = max(dot(vP, md), 0.0);
        c += vec3(0.6,0.36,0.24) * pow(m, 40.0) * 0.55 + vec3(0.30,0.12,0.36) * pow(m, 5.0) * 0.35;
        // faint aurora-like bands
        float b = sin(vP.x * 6.0 + time * 0.05) * sin(vP.z * 4.0 - time * 0.04);
        c += vec3(0.10,0.03,0.16) * smoothstep(0.4, 1.0, b) * smoothstep(0.05, 0.35, h) * (1.0 - smoothstep(0.35, 0.7, h));
        c += vec3(0.75,0.72,1.0) * flash * (0.35 + 0.65 * smoothstep(0.0, 0.5, h));
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`}),e=new De(n,t);return e.renderOrder=-10,e}function Qy(n){let t=new Float32Array(n*3),e=new Float32Array(n),i=new Float32Array(n);for(let o=0;o<n;o++){let l=st(0,Math.PI*2),c=Math.pow(Math.random(),.7)*.9+.08,h=Math.sqrt(1-c*c);t[o*3]=Math.cos(l)*h*350,t[o*3+1]=c*350,t[o*3+2]=Math.sin(l)*h*350,e[o]=Math.random()<.06?st(2.6,4.4):st(.8,2),i[o]=st(0,6.28)}let s=new Ee;s.setAttribute("position",new Te(t,3)),s.setAttribute("size",new Te(e,1)),s.setAttribute("phase",new Te(i,1));let r=new Ae({transparent:!0,depthWrite:!1,blending:Be,fog:!1,uniforms:{time:{value:0},pr:{value:1},dim:{value:1}},vertexShader:`attribute float size; attribute float phase; uniform float time; uniform float pr; varying float vA;
      void main(){ vA = 0.55 + 0.45 * sin(time * (1.3 + phase * 0.4) + phase * 7.0); gl_PointSize = size * pr; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:"varying float vA; uniform float dim; void main(){ vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)) * dim; gl_FragColor = vec4(vec3(1.0,0.93,0.98) * a * vA, a * vA); }"}),a=new Fi(s,r);return a.frustumCulled=!1,a.renderOrder=-9,a}function jy(){let n=new be,t=de(512,512,a=>{let h=a.createRadialGradient(216,216,10,256,256,150);h.addColorStop(0,"#fffaf0"),h.addColorStop(.6,"#ffe9c0"),h.addColorStop(1,"#f0c890"),a.fillStyle=h,a.beginPath(),a.arc(256,256,150,0,7),a.fill(),a.save(),a.beginPath(),a.arc(256,256,150,0,7),a.clip();for(let[u,f,g,M]of[[200,200,34,.16],[300,270,26,.14],[230,320,20,.12],[320,180,14,.12],[170,280,12,.1],[280,350,30,.1],[350,300,10,.12]]){let m=a.createRadialGradient(u+4,f+4,1,u,f,g);m.addColorStop(0,`rgba(150,110,80,${M})`),m.addColorStop(1,"rgba(150,110,80,0)"),a.fillStyle=m,a.beginPath(),a.arc(u,f,g,0,7),a.fill()}let d=a.createRadialGradient(326,326,150*.6,256,256,150*1.15);d.addColorStop(0,"rgba(0,0,0,0)"),d.addColorStop(1,"rgba(120,60,40,0.35)"),a.fillStyle=d,a.fillRect(0,0,512,512),a.restore()}),e=new dn(new tn({map:t,fog:!1,depthWrite:!1,color:new wt(1.55,1.42,1.25)}));e.scale.set(64,64,1),n.add(e);let i=new dn(new tn({map:di("rgba(255,220,170,0.9)","rgba(255,140,90,0.22)"),fog:!1,depthWrite:!1,blending:Be,transparent:!0,opacity:.5}));i.scale.set(190,190,1),n.add(i);let s=de(256,64,a=>{a.filter="blur(6px)";for(let o=0;o<40;o++){let l=40+o*4.4+st(-6,6),c=32+st(-5,5),h=st(14,24),d=a.createRadialGradient(l,c,0,l,c,h);d.addColorStop(0,"rgba(30,12,48,0.24)"),d.addColorStop(1,"rgba(30,12,48,0)"),a.fillStyle=d,a.fillRect(0,0,256,64)}}),r=[];for(let a=0;a<4;a++){let o=new dn(new tn({map:s,fog:!1,depthWrite:!1,transparent:!0,opacity:.9}));o.scale.set(st(120,180),st(18,28),1),o.position.set(st(-60,60),st(-24,16),3+a),o.userData.v=st(1.5,3)*(a%2?1:-1),n.add(o),r.push(o)}return n.userData.clouds=r,n.userData.halo=i,n.userData.disc=e,n}function tM(){return de(512,256,n=>{for(let i=0;i<80;i++){let s=st(0,512),r=st(80,225),a=st(30,95),o=n.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,"rgba(215,190,240,0.20)"),o.addColorStop(1,"rgba(215,190,240,0)"),n.fillStyle=o,n.fillRect(0,0,512,256)}n.globalCompositeOperation="destination-in";let t=n.createLinearGradient(0,0,0,256);t.addColorStop(0,"rgba(0,0,0,0)"),t.addColorStop(.45,"rgba(0,0,0,0.6)"),t.addColorStop(.85,"rgba(0,0,0,1)"),t.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=t,n.fillRect(0,0,512,256);let e=n.createLinearGradient(0,0,512,0);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(.15,"rgba(0,0,0,1)"),e.addColorStop(.85,"rgba(0,0,0,1)"),e.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=e,n.fillRect(0,0,512,256)})}function eM(){return de(128,512,n=>{let t=n.createImageData(128,512);for(let e=0;e<512;e++)for(let i=0;i<128;i++){let s=(i-64)/64,r=e/512,a=Math.exp(-s*s*5)*Math.pow(1-r,.6)*Math.min(1,r*8)*(.75+.25*Math.sin(i*.4+e*.01)),o=(e*128+i)*4;t.data[o]=255,t.data[o+1]=255,t.data[o+2]=255,t.data[o+3]=Math.round(255*a)}n.putImageData(t,0,0)})}var ae=null,re={};function nM(){if(ae)return ae;let n=t=>new Yn({roughness:.85,metalness:0,...t});return ae={road:n({map:_e("asphalt"),color:12103880,roughness:.78}),roadGrave:n({map:_e("asphalt"),color:9080992,roughness:.8}),cobble:n({map:_e("cobble"),color:13680848,roughness:.7}),dirt:n({map:_e("dirt"),color:12624008}),walk:n({map:_e("sidewalk"),color:11577536}),curb:n({color:6972536}),siding:[10128056,8034952,12098144,6981808,11565690,9075360].map(t=>n({map:_e("siding"),color:t})),trim:n({color:15261928,roughness:.6}),shutter:n({color:2759728}),roof:n({map:_e("shingle"),color:11575488}),found:n({color:3814464}),wood:n({map:_e("wood"),color:10518640}),porch:n({map:_e("wood"),color:9071194}),door:n({map:_e("door"),roughness:.6}),win:new xe({map:_e("window"),color:new wt(1.5,1.25,1)}),winB:new xe({map:_e("windowB"),color:new wt(1.4,1.15,1.05)}),winDark:n({color:1314848,roughness:.2,metalness:.3}),picket:n({color:14209244}),iron:n({color:1380890,roughness:.5,metalness:.5}),pumpkin:n({map:_e("pumpkinSkin"),color:16777215,roughness:.6,emissive:5904384,emissiveIntensity:.35}),stem:n({color:3824160}),face:new xe({alphaMap:_e("pumpkinFace"),color:new wt(3.2,1.7,.45),transparent:!0,depthWrite:!1,blending:Be}),bark:n({color:2760220}),deadBark:n({color:1972770}),leafs:[13127706,14715424,10103316,13672496].map(t=>n({color:t,flatShading:!0,emissive:t,emissiveIntensity:.08})),pole:n({color:1578014,metalness:.6,roughness:.4}),lamp:new xe({color:new wt(3,2,.9)}),stone:n({map:_e("stone"),color:11051184}),stoneD:n({map:_e("stone"),color:7368832}),hay:n({map:_e("hay"),color:13676656}),corn:n({color:9075258,flatShading:!0}),barn:n({map:_e("wood"),color:9054752}),brick:n({map:_e("brick"),color:13676712}),awn:[9054858,13658640,2779738].map(t=>n({color:t,side:Ve})),bulb:[new wt(3,1.6,.4),new wt(2.6,.8,2.6),new wt(1,2.6,1.4),new wt(3,2.6,1.6)].map(t=>new xe({color:t})),wire:new xe({color:789008}),web:new xe({map:_e("web"),transparent:!0,depthWrite:!1,side:Ve,opacity:.7,color:14211312}),sheet:n({color:15920890,roughness:.9,emissive:4209232,emissiveIntensity:.4}),black:new xe({color:328456}),sign:new xe({map:_e("sign"),color:new wt(1.3,1.2,1.1)}),stripe:n({color:15788272}),cloth:n({color:5909018}),blob:new xe({map:di("rgba(0,0,0,0.6)","rgba(0,0,0,0.25)"),transparent:!0,depthWrite:!1,opacity:.8})},ae.glowWarm=new tn({map:di("rgba(255,210,140,1)","rgba(255,120,30,0.3)"),transparent:!0,depthWrite:!1,blending:Be,opacity:.85}),ae.glowPump=new tn({map:di("rgba(255,170,60,1)","rgba(255,90,10,0.3)"),transparent:!0,depthWrite:!1,blending:Be,opacity:.7}),ae.glowWin=new tn({map:di("rgba(255,190,110,0.7)","rgba(255,110,40,0.18)"),transparent:!0,depthWrite:!1,blending:Be,opacity:.5}),ae.glowGreen=new tn({map:di("rgba(170,255,200,1)","rgba(60,200,140,0.3)"),transparent:!0,depthWrite:!1,blending:Be,opacity:.6}),re.box=new Xn(1,1,1),re.cyl=new qn(1,1,1,12),re.cyl6=new qn(1,1,1,6),re.prism=new qn(1,1,1,3,1).rotateX(-Math.PI/2),re.sph=new ci(1,16,12),re.ico=new fa(1,1),re.cone=new cs(1,1,10),re.plane=new bn(1,1),re.pump=(()=>{let t=new ci(1,24,14),e=t.attributes.position;for(let i=0;i<e.count;i++){let s=e.getX(i),r=e.getY(i),a=e.getZ(i),o=Math.atan2(a,s),l=1-.07*Math.pow(Math.abs(Math.cos(o*4)),.5);e.setXYZ(i,s*l,r*(.82+.05*l),a*l)}return t.computeVertexNormals(),t})(),re.halfCyl=new qn(1,1,1,14,1,!1,0,Math.PI).rotateZ(Math.PI/2).rotateY(Math.PI/2),ae}var _u=class{constructor(t){this.parts=new Map,this.extra=[],this.anchors=[],this.houses=[],this.z0=t,this.m4=new he,this.q=new Mn,this.e=new In,this.p=new C,this.s=new C}add(t,e,i,s,r,a=1,o=1,l=1,c=0,h=0,d=0){this.e.set(c,h,d),this.q.setFromEuler(this.e),this.p.set(i,s,r),this.s.set(a,o,l),this.m4.compose(this.p,this.q,this.s);let u=(t.index?t.toNonIndexed():t.clone()).applyMatrix4(this.m4);for(let g of Object.keys(u.attributes))g!=="position"&&g!=="normal"&&g!=="uv"&&u.deleteAttribute(g);let f=this.parts.get(e);f||this.parts.set(e,f=[]),f.push(u)}glow(t,e,i,s,r){let a=new dn(t);return a.position.set(e,i,s),a.scale.set(r,r,1),this.extra.push(a),a}anchor(t,e,i,s=16752720,r=1){this.anchors.push({pos:new C(t,e,i+this.z0),color:new wt(s),power:r})}build(){let t=new be;t.position.z=this.z0;for(let[e,i]of this.parts){let s=mp(i,!1);i.forEach(a=>a.dispose());let r=new De(s,e);r.receiveShadow=!0,r.matrixAutoUpdate=!1,r.updateMatrix(),t.add(r)}for(let e of this.extra)t.add(e);return t}};function iM(n,t,e,i,s=.35,r=!0,a=0){if(n.add(re.pump,ae.pumpkin,t,e+s*.8,i,s,s,s,0,a),n.add(re.cyl6,ae.stem,t,e+s*1.65,i,s*.12,s*.4,s*.12,.2,0,.15),r){let o=t-Math.sin(a+Math.PI/2)*0,l=i;n.add(re.plane,ae.face,t+Math.sin(a)*s*1,e+s*.85,i+Math.cos(a)*s*1,s*1.5,s*1.3,1,0,a),s>.3&&n.glow(ae.glowPump,t+Math.sin(a)*s*1.2,e+s*.9,i+Math.cos(a)*s*1.2,s*4.5)}}function xp(n,t,e,i=0,s=1){let r=fn(),a=fn()<.5?ae.stone:ae.stoneD,o=fn(-.14,.14);r<.45?(n.add(re.box,a,t,.55*s,e,.75*s,1.1*s,.22*s,o,i),n.add(re.halfCyl,a,t,1.1*s,e,.375*s,.22*s,.375*s,o,i+Math.PI/2)):r<.75?(n.add(re.box,a,t,.8*s,e,.18*s,1.6*s,.18*s,o,i),n.add(re.box,a,t,1.15*s,e,.8*s,.18*s,.18*s,o,i)):(n.add(re.box,a,t,.35*s,e,.9*s,.7*s,.9*s,0,i),n.add(re.cone,a,t,1.4*s,e,.3*s,1.4*s,.3*s)),n.add(re.sph,ae.dirt,t,0,e+.7*s*Math.cos(i),.5*s,.12,.9*s,0,i)}function sM(n,t,e,i=2.4,s=!1){n.add(re.cyl6,ae.pole,t,i/2,e,.06,i,.06),n.add(re.box,ae.pole,t,i+.05,e,.42,.06,.42),n.add(re.box,ae.lamp,t,i+.3,e,.26,.4,.26),n.add(re.cone,ae.pole,t,i+.62,e,.3,.26,.3),n.glow(s?ae.glowGreen:ae.glowWarm,t,i+.3,e,3.4),n.anchor(t,i+.2,e,s?9502656:16756832,1.2)}function rM(n,t,e,i=7){n.add(re.cyl,ae.deadBark,t,i*.35,e,.28,i*.7,.28),n.add(re.cone,ae.deadBark,t,i*.85,e,.22,i*.4,.22);for(let s=0;s<7;s++){let r=fn(0,6.28),a=fn(1.4,3.2),o=i*fn(.42,.85);n.add(re.cyl6,ae.deadBark,t+Math.cos(r)*a*.42,o+a*.28,e+Math.sin(r)*a*.42,.07,a,.07,Math.sin(r)*.95,0,-Math.cos(r)*.95);let l=t+Math.cos(r)*a*.8,c=e+Math.sin(r)*a*.8,h=o+a*.55;n.add(re.cyl6,ae.deadBark,l,h+.3,c,.035,a*.5,.035,Math.sin(r+.8)*.6,0,-Math.cos(r+.8)*.6)}}function xu(n,t,e,i,s){let r=Math.hypot(i-t,s-e),a=Math.round(r/.42),o=Math.atan2(i-t,s-e);for(let l=0;l<=a;l++){let c=l/a,h=t+(i-t)*c,d=e+(s-e)*c;n.add(re.box,ae.iron,h,.85,d,.04,1.7,.04),l%3===0&&n.add(re.cone,ae.iron,h,1.8,d,.06,.2,.06)}for(let l of[.25,1.55])n.add(re.box,ae.iron,(t+i)/2,l,(e+s)/2,.05,.05,r,0,o)}function aM(n,t,e,i=1){n.add(re.box,ae.stoneD,t,2.2*i,e,6*i,4.4*i,4.5*i),n.add(re.box,ae.stone,t,.15,e+.4*i,6.8*i,.3,5.4*i),n.add(re.prism,ae.stone,t,(4.4+.75)*i,e,7*i/Math.sqrt(3),1.6*i/1.5,5*i,0,Math.PI/2);for(let s of[-2.2,-.8,.8,2.2])n.add(re.cyl,ae.stone,t+s*i,2.1*i,e+2.45*i,.26*i,4.2*i,.26*i);n.add(re.box,ae.black,t,1.4*i,e+2.26*i,1.5*i,2.8*i,.05),n.glow(ae.glowGreen,t,1.4*i,e+2.4*i,4*i),n.anchor(t,1.6*i,e+3.2*i,8454064,.8)}function bp(n,t){let e=Ms[t]||Ms.high;nM(),gp(777);let i={root:new be,t:0,q:e,fogK:0};if(n.add(i.root),i.fog=new Jr(1839152,.022),n.fog=i.fog,i.sky=Ky(),i.root.add(i.sky),i.sky.material.uniforms.hor.value.set(.34,.1,.36),i.sky.material.uniforms.mid.value.set(.1,.03,.2),i.stars=Qy(e.stars),i.root.add(i.stars),i.moon=jy(),i.root.add(i.moon),i.moon.scale.setScalar(1.25),i.moon.position.set(gc.x*330,gc.y*330+10,gc.z*330),i.hemi=new xa(11048176,3811400,1.6),i.root.add(i.hemi),i.moonLight=new fs(13160703,1.7),i.moonLight.position.set(8,22,-18),i.root.add(i.moonLight),i.root.add(i.moonLight.target),e.shadow){let l=i.moonLight;l.castShadow=!0,l.shadow.mapSize.set(e.shadow,e.shadow);let c=l.shadow.camera;c.left=-12,c.right=12,c.top=12,c.bottom=-12,c.near=1,c.far=70,l.shadow.bias=-8e-4,l.shadow.normalBias=.03}i.rim=new fs(16751200,.45),i.rim.position.set(-14,6,16),i.root.add(i.rim),i.fill=new fs(12097791,.55),i.fill.position.set(0,10,18),i.root.add(i.fill);let s=_e("grass");s.repeat.set(50,50),i.ground=new De(new bn(200,200),new Yn({color:9083520,map:s,roughness:1,emissive:787988,emissiveIntensity:1})),i.ground.rotation.x=-Math.PI/2,i.ground.position.y=-.02,i.ground.receiveShadow=!0,i.root.add(i.ground);let r=new _u(0);for(let l=0;l<Math.round(26*e.decor);l++){let c=fn(-26,26),h=fn(-34,-12);Math.abs(c)<4&&h>-22||xp(r,c,h,fn(-.25,.25),fn(.9,1.2))}for(let l of[-1,1])for(let c=0;c<Math.round(8*e.decor);c++)xp(r,l*fn(10,22),fn(-12,8),l*Math.PI/2*fn(.6,1),fn(.9,1.2));aM(r,-2,-28,1.2);for(let[l,c,h]of[[-12,-8,8],[13,-12,9],[-17,2,7],[16,3,7.5],[-8,-20,6.5],[9,-24,7]])rM(r,l,c,h);xu(r,-9,-11,9,-11),xu(r,-9,-11,-9,10),xu(r,9,-11,9,10);for(let[l,c]of[[-8.2,-10.2],[8.2,-10.2],[-8.2,6],[8.2,6]])sM(r,l,c,2.4,c<0&&l>0);for(let[l,c,h]of[[-7.4,7.5,.45],[7.2,7.8,.4],[-6.6,-9.6,.38],[6.8,-9.2,.42],[-7.9,.5,.33],[7.9,-2.5,.35]])iM(r,l,0,c,h,!0,Math.atan2(-l,12-c)),r.anchor(l,.8,c,16747056,.45);i.static=r.build(),i.static.traverse(l=>{l.isMesh&&(l.castShadow=!!e.shadow)}),i.root.add(i.static),i.anchors=r.anchors,i.pl=[];for(let l=0;l<e.lights;l++){let c=i.anchors[l];if(!c)break;let h=new ds(c.color,7*c.power,14,1.6);h.position.copy(c.pos),i.root.add(h),i.pl.push({l:h,a:c})}let a=tM();i.fogCards=[];for(let l=0;l<e.fog;l++){let c=new De(new bn(26,3),new xe({map:a,transparent:!0,depthWrite:!1,opacity:.3,color:13154536,fog:!1}));c.position.set(st(-10,10),st(.3,1.4),st(-22,3)),c.userData={base:st(.1,.2),v:st(.25,.6)*(l%2?1:-1)},c.renderOrder=2,i.root.add(c),i.fogCards.push(c)}let o=eM();i.rays=[];for(let l=0;l<e.rays;l++){let c=new De(new bn(1,1),new xe({map:o,transparent:!0,depthWrite:!1,blending:Be,opacity:0,fog:!1,color:16769200}));c.userData={ph:st(0,6),base:st(.08,.14)},c.scale.set(st(3,6),st(24,34),1),c.position.set(st(-18,18),14,st(-45,-32)),c.rotation.z=-.3+st(-.1,.1),c.renderOrder=3,i.root.add(c),i.rays.push(c)}{let l=e.ff,c=new Float32Array(l*3),h=new Float32Array(l),d=new Float32Array(l);for(let g=0;g<l;g++)c[g*3]=st(-14,14),c[g*3+1]=st(.3,5),c[g*3+2]=st(-22,8),h[g]=st(0,6.28),d[g]=st(.06,.14);let u=new Ee;u.setAttribute("position",new Te(c,3)),u.setAttribute("phase",new Te(h,1)),u.setAttribute("size",new Te(d,1));let f=new Ae({transparent:!0,depthWrite:!1,blending:Be,uniforms:{time:{value:0},scale:{value:500},col:{value:new C(1,.85,.4)}},vertexShader:`attribute float phase; attribute float size; uniform float time; uniform float scale; varying float vA;
        void main(){ vec3 p = position + vec3(sin(time*0.5+phase*3.0)*0.9, sin(time*0.8+phase)*0.5, cos(time*0.45+phase*2.0)*0.9);
          vec4 mv = modelViewMatrix * vec4(p,1.0); vA = 0.3 + 0.7 * pow(0.5 + 0.5 * sin(time * 2.1 + phase * 5.0), 2.0);
          vA *= smoothstep(2.0, 6.0, -mv.z); gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:"varying float vA; uniform vec3 col; void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d); a *= a; gl_FragColor = vec4(col * a * vA * 1.7, a * vA); }"});i.ff=new Fi(u,f),i.ff.frustumCulled=!1,i.root.add(i.ff)}{let l=e.leaves,c=new bn(.2,.14),h=new Yn({color:16777215,side:Ve,roughness:.8,emissive:4200456,emissiveIntensity:.6});i.leaves=new na(c,h,l),i.leaves.frustumCulled=!1;let d=[13787162,12073490,14715424,9058832,13148208];i.leafData=[];for(let u=0;u<l;u++)i.leaves.setColorAt(u,new wt(d[u%d.length])),i.leafData.push({x:st(-12,12),y:st(0,8),z:st(-16,8),r:st(0,6),w:st(1,4),ph:st(0,6),fall:st(.4,.9)});i.root.add(i.leaves)}return i}var _p=new he,vp=new Mn,yp=new In,Mp=new C,Sp=new C;function Tp(n,t,e){n.t+=t,n.fog.density=.022+.05*n.fogK;let i=n.sky.material.uniforms;i.time.value=n.t,n.sky.position.copy(e.position),n.stars.position.copy(e.position),n.stars.material.uniforms.time.value=n.t;for(let r of n.moon.userData.clouds)r.position.x+=r.userData.v*t,r.position.x>110&&(r.position.x=-110),r.position.x<-110&&(r.position.x=110);n.moon.userData.halo.material.opacity=.42+.06*Math.sin(n.t*.7);for(let r of n.fogCards)r.position.x+=r.userData.v*t,r.position.x>14&&(r.position.x=-14),r.position.x<-14&&(r.position.x=14),r.lookAt(e.position.x,r.position.y,e.position.z),r.material.opacity=r.userData.base*(1+n.fogK*2.2)*gn((r.position.distanceTo(e.position)-5)/6,0,1),r.position.y=.3+.4*n.fogK+Math.sin(n.t*.3+r.userData.v*9)*.15;for(let r of n.rays)r.material.opacity=r.userData.base*(.75+.25*Math.sin(n.t*.7+r.userData.ph))*(1-n.fogK*.6);n.ff.material.uniforms.time.value=n.t;for(let{l:r,a}of n.pl)r.intensity=7*a.power*(.9+.1*Math.sin(n.t*9+a.pos.x))*(1-n.fogK*.4);let s=n.leafData.length;for(let r=0;r<s;r++){let a=n.leafData[r];a.y-=a.fall*t,a.x+=Math.sin(n.t*1.3+a.ph)*t*.7,a.r+=a.w*t,a.y<0&&(a.y=st(5,9),a.z=st(-16,8),a.x=st(-12,12)),yp.set(a.r,a.r*.7+a.ph,Math.sin(a.r)*.8),vp.setFromEuler(yp),Sp.set(a.x,a.y,a.z),Mp.setScalar(1),_p.compose(Sp,vp,Mp),n.leaves.setMatrixAt(r,_p)}n.leaves.instanceMatrix.needsUpdate=!0}var Mu=["pumpkin","witch","bat","skeleton","cat","vampire","mummy","candle","monster","owl","sheet","zombie","devil","spider"];var vc={pumpkin:[16763024,16747056],witch:[14203135,10510591],bat:[12101848,8413376],skeleton:[16052456,13689087],cat:[10130096,7405488],vampire:[15787252,16724064],mummy:[15786688,16765056],candle:[16773328,16756800],monster:[12120240,6356880],owl:[14731432,16760928],sheet:[16316159,12110079],zombie:[12114080,9502560],devil:[16756912,16728096],spider:[11581680,6324479],gold:[16769162,16760864]},xc=null,_c=null;function Ep(){if(xc)return xc;let n=[];for(let i=0;i<=16;i++){let s=i/16*Math.PI/2;n.push(new nt(Math.sin(s)*.42,.18+Math.cos(s)*.42))}for(let i=1;i<=8;i++){let s=i/8;n.push(new nt(.42+.12*s*s,.18-s*.62))}n.push(new nt(.4,-.46));let t=new pa(n,36),e=t.attributes.position;for(let i=0;i<e.count;i++){let s=e.getY(i);if(s<-.1){let r=Math.atan2(e.getZ(i),e.getX(i)),a=gn((-.1-s)/.36,0,1);e.setY(i,s+Math.sin(r*7)*.06*a)}}return t.computeVertexNormals(),xc={body:t,sph:new ci(1,20,14),cone:new cs(1,1,16),cyl:new qn(1,1,1,14),torus:new Bi(1,.22,8,24),band:new Bi(1,.05,6,32),rib:new Bi(1,.02,6,32,Math.PI*.8).rotateZ(Math.PI*.1),smile:new Bi(.075,.018,6,16,Math.PI),box:new Xn(1,1,1),plane:new bn(1,1),wing:(()=>{let i=new li;return i.moveTo(0,0),i.quadraticCurveTo(.25,.28,.55,.22),i.quadraticCurveTo(.5,.08,.56,-.02),i.quadraticCurveTo(.42,.02,.38,-.1),i.quadraticCurveTo(.28,-.02,.2,-.12),i.quadraticCurveTo(.12,-.04,0,-.06),new ma(i)})(),pump:(()=>{let i=new ci(1,28,16),s=i.attributes.position;for(let r=0;r<s.count;r++){let a=s.getX(r),o=s.getY(r),l=s.getZ(r),c=Math.atan2(l,a),h=1+.07*Math.cos(c*8);s.setXYZ(r,a*h,o*.82,l*h)}return i.computeVertexNormals(),i})(),stoneSlab:(()=>{let i=new li,s=.55,r=.92;i.moveTo(-s,0),i.lineTo(-s,r),i.absarc(0,r,s,Math.PI,0,!0),i.lineTo(s,0),i.lineTo(-s,0);let a=new us(i,{depth:.2,bevelEnabled:!0,bevelThickness:.04,bevelSize:.04,bevelSegments:3,curveSegments:16});return a.translate(0,0,-.1),a})(),stoneCross:(()=>{let i=new li;i.moveTo(-.17,0),i.lineTo(-.17,.85),i.lineTo(-.5,.85),i.lineTo(-.5,1.15),i.lineTo(-.17,1.15),i.lineTo(-.17,1.45),i.lineTo(.17,1.45),i.lineTo(.17,1.15),i.lineTo(.5,1.15),i.lineTo(.5,.85),i.lineTo(.17,.85),i.lineTo(.17,0);let s=new us(i,{depth:.2,bevelEnabled:!0,bevelThickness:.035,bevelSize:.035,bevelSegments:2});return s.translate(0,0,-.1),s})(),stonePoint:(()=>{let i=new li;i.moveTo(-.5,0),i.lineTo(-.5,1.05),i.lineTo(0,1.42),i.lineTo(.5,1.05),i.lineTo(.5,0);let s=new us(i,{depth:.22,bevelEnabled:!0,bevelThickness:.04,bevelSize:.04,bevelSegments:2});return s.translate(0,0,-.11),s})()},xc}function wp(){if(_c)return _c;let n=e=>new Yn({roughness:.75,...e}),t=_e("stone");return _c={stone:n({map:t,color:12630220,roughness:.9,emissive:1313824,emissiveIntensity:1}),plaque:new Yn({map:de(256,256,(e,i,s)=>{e.fillStyle="rgba(0,0,0,0)",e.clearRect(0,0,i,s),e.font="900 52px Georgia, serif",e.textAlign="center",e.textBaseline="middle",e.fillStyle="rgba(20,10,30,0.75)",e.fillText("R.I.P.",i/2,s*.36),e.fillStyle="rgba(255,255,255,0.12)",e.fillText("R.I.P.",i/2-2,s*.36-2),e.strokeStyle="rgba(20,10,30,0.6)",e.lineWidth=4,e.beginPath(),e.moveTo(i*.25,s*.55),e.lineTo(i*.75,s*.55),e.stroke(),e.beginPath(),e.arc(i/2,s*.73,22,.5,Math.PI*2-.5),e.stroke();for(let r=0;r<26;r++)e.fillStyle=`rgba(60,110,50,${st(.15,.4)})`,e.beginPath(),e.arc(st(0,i),s-st(0,50),st(4,14),0,7),e.fill()}),transparent:!0,roughness:.9,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),dirt:n({map:_e("dirt"),color:12098184,roughness:1,emissive:1708064}),hole:new xe({color:328200}),black:new xe({color:656912}),white:new xe({color:16777215}),blush:new xe({color:16743080,transparent:!0,opacity:.55,depthWrite:!1}),mouth:new xe({color:2755104}),tongue:new xe({color:16738954}),hat:n({color:2758208,roughness:.6}),band:n({color:16751146,emissive:6957568}),wing:n({color:6965914,side:Ve,roughness:.6,emissive:3807840,emissiveIntensity:.8}),bone:n({color:16051936}),fur:n({color:2761780,roughness:.9}),cape:n({color:1312794,side:Ve}),capeIn:n({color:10489904,side:Ve,emissive:3145744}),bandage:n({map:_e("bandage"),color:16774364,emissive:3155992}),wax:n({color:16773848,emissive:4204560,roughness:.5}),flame:new xe({color:new wt(3.2,1.9,.6)}),bolt:n({color:9079448,metalness:.8,roughness:.3}),hair:n({color:1710626}),beak:n({color:16752672}),brown:n({color:8014378}),horn:n({color:12591120,emissive:4196352}),leg:n({color:2105402}),pump:n({map:_e("pumpkinSkin"),color:16777215,roughness:.55,emissive:5904384,emissiveIntensity:.5}),stem:n({color:3824160}),gold:n({color:16765024,metalness:.6,roughness:.3,emissive:12614144,emissiveIntensity:1.1}),carve:new xe({alphaMap:_e("pumpkinFace"),color:new wt(3.2,1.7,.45),transparent:!0,depthWrite:!1,blending:Be}),brain:n({color:16748720}),rib:n({color:9077912})},_c}var vu={};function Su(n){if(!vu[n]){let t=new wt(n),e=`${t.r*255|0},${t.g*255|0},${t.b*255|0}`;vu[n]=di(`rgba(${e},0.9)`,`rgba(${e},0.25)`)}return new tn({map:vu[n],transparent:!0,depthWrite:!1,blending:Be,opacity:.6})}var Zi={},Dt=(n,t,e,i,s,r,a,o,l)=>{let c=new De(n,t);return c.position.set(e,i,s),c.scale.set(r,a??r,o??r),l&&l.add(c),c};function Ga(n){let t=Ep(),e=wp(),[i,s]=vc[n]||vc.sheet,r=new be,a=new be;r.add(a);let o={type:n,root:r,body:a,t:st(0,10),blinkT:st(1,4),arms:[],extra:{},expr:"happy",mood:0},l=new Yn({color:i,emissive:i,emissiveIntensity:n==="gold"?.5:.28,roughness:.55,transparent:!0,opacity:.93,side:Ve,metalness:n==="gold"?.4:0});o.bodyMat=l;let c=Dt(t.body,l,0,0,0,1,1,1,a);c.castShadow=!0,o.glow=new dn(Su(s)),o.glow.scale.set(2,2,1),o.glow.position.set(0,.15,-.1),a.add(o.glow),o.light=null;let h=new be;return h.position.set(0,.3,.405),a.add(h),o.face=h,o.eyes=[-1,1].map(d=>{let u=new be;return u.position.set(d*.14,.02,0),h.add(u),Dt(t.sph,e.black,0,0,0,.075,.1,.04,u),Dt(t.sph,e.white,-.022,.03,.03,.024,.024,.01,u),Dt(t.sph,e.white,.02,-.03,.03,.011,.011,.01,u),u}),[-1,1].forEach(d=>{let u=Dt(t.sph,e.blush,d*.25,-.1,-.05,.06,.035,.02,h);u.rotation.y=d*.5}),o.smile=Dt(t.smile,e.mouth,0,-.1,0,1,1,1,h),o.smile.rotation.x=-.35,o.smile.rotation.z=Math.PI,o.oMouth=Dt(t.sph,e.mouth,0,-.13,-.01,.045,.06,.02,h),o.oMouth.visible=!1,o.frown=Dt(t.smile,e.mouth,0,-.17,-.02,.8,.8,1,h),o.frown.visible=!1,[-1,1].forEach(d=>{let u=new be;u.position.set(d*.42,0,.05),a.add(u);let f=Dt(t.sph,l,d*.1,-.02,0,.12,.09,.09,u);f.castShadow=!0,o.arms.push(u)}),yu[n]&&yu[n](o,t,e),o}var yu={pumpkin(n,t,e){n.face.position.set(0,.32,.47);let i=Dt(t.pump,e.pump,0,.36,0,.47,.47,.47,n.body);i.castShadow=!0,Dt(t.cyl,e.stem,0,.78,0,.05,.14,.05,n.body).rotation.z=.25,n.eyes.forEach(r=>r.scale.setScalar(1.1));let s=Dt(t.plane,e.carve,0,.3,.39,.46,.4,1,n.body);s.visible=!1},witch(n,t,e){let i=new be;i.position.set(0,.62,0),i.rotation.z=.12,n.body.add(i),Dt(t.cyl,e.hat,0,0,0,.5,.03,.5,i),Dt(t.cyl,e.band,0,.06,0,.27,.08,.27,i);let s=Dt(t.cone,e.hat,0,.35,0,.27,.65,.27,i);s.rotation.z=-.15;let r=Dt(t.cone,e.hat,.1,.72,0,.09,.22,.09,i);r.rotation.z=-.9,n.extra.hat=i},bat(n,t,e){n.extra.wings=[-1,1].map(i=>{let s=new be;s.position.set(i*.36,.36,0),n.body.add(s);let r=Dt(t.wing,e.wing,0,0,0,i*1.3,1.3,1.3,s);return s}),[-1,1].forEach(i=>{let s=Dt(t.cone,e.wing,i*.2,.74,0,.08,.22,.06,n.body);s.rotation.z=-i*.3})},skeleton(n,t,e){n.eyes.forEach(i=>i.scale.set(1.5,1.35,1)),Dt(t.box,e.black,0,.02,.4,.03,.05,.02,n.body);for(let i=-2;i<=2;i++)Dt(t.box,e.bone,i*.04,.14,.395,.028,.04,.02,n.body);for(let i=0;i<3;i++){let s=-.04-i*.11,r=.42+.12*((.18-s)/.62)**2+.005,a=Dt(t.rib,e.rib,0,s,0,r,r,1,n.body);a.rotation.x=Math.PI/2}n.smile.visible=!1,n.noSmile=!0},cat(n,t,e){[-1,1].forEach(r=>{let a=Dt(t.cone,e.fur,r*.24,.68,0,.13,.26,.1,n.body);a.rotation.z=-r*.35,Dt(t.cone,e.blush,r*.24,.66,.04,.07,.15,.02,n.body).rotation.z=-r*.35});for(let r of[-1,1])for(let a of[-1,1]){let o=Dt(t.cyl,e.black,r*.3,.17+a*.025,.36,.006,.22,.006,n.body);o.rotation.z=Math.PI/2+a*r*.15}let i=new be;i.position.set(.32,-.3,-.2),n.body.add(i);let s=Dt(t.torus,e.fur,.15,.15,0,.18,.18,.18,i);s.rotation.y=Math.PI/2,n.extra.tail=i,n.bodyMat.color.set(9077416)},vampire(n,t,e){Dt(t.sph,e.hair,0,.5,-.02,.4,.2,.38,n.body);let i=Dt(t.cone,e.hair,0,.47,.28,.1,.14,.05,n.body);i.rotation.x=Math.PI+.3;for(let s of[-1,1]){let r=Dt(t.plane,e.cape,s*.3,.28,-.08,.38,.5,1,n.body);r.rotation.y=s*.7,r.rotation.z=-s*.25;let a=Dt(t.plane,e.capeIn,s*.29,.27,-.06,.32,.42,1,n.body);a.rotation.y=s*.7,a.rotation.z=-s*.25}for(let s of[-1,1])Dt(t.cone,e.white,s*.035,-.135,.412,.014,.04,.014,n.body).rotation.x=Math.PI},mummy(n,t,e){n.bodyMat.map=_e("bandage");for(let i=0;i<5;i++){let s=.5-i*.19,r=(s>.18?Math.sqrt(Math.max(.01,.42*.42-(s-.18)**2)):.42+.12*((.18-s)/.62)**2)+.01,a=Dt(t.band,e.bandage,0,s,0,r-.015,r-.015,1,n.body);a.rotation.x=Math.PI/2+(i%2?.18:-.15)}n.eyes[1].scale.setScalar(.65)},candle(n,t,e){Dt(t.cyl,e.wax,0,.62,0,.16,.2,.16,n.body);for(let[r,a]of[[-.1,.12],[.08,.18],[0,.09]])Dt(t.sph,e.wax,r,.55-a*.4,.13,.035,a,.035,n.body);let i=Dt(t.sph,e.flame,0,.84,0,.06,.12,.06,n.body);n.extra.flame=i;let s=new dn(Su(16752688));s.scale.set(.9,.9,1),s.position.set(0,.86,0),n.body.add(s),n.extra.fg=s},monster(n,t,e){Dt(t.box,e.hair,0,.62,0,.62,.16,.5,n.body);for(let i=-2;i<=2;i++)Dt(t.box,e.hair,i*.12,.53,.25,.1,.1,.04,n.body);for(let i of[-1,1])Dt(t.cyl,e.bolt,i*.43,.28,0,.04,.16,.04,n.body).rotation.z=Math.PI/2;Dt(t.box,e.black,-.2,.47,.36,.12,.012,.02,n.body)},owl(n,t,e){n.eyes.forEach(i=>{i.scale.setScalar(1.25),Dt(t.torus,e.beak,0,0,-.01,.11,.11,.05,i)}),Dt(t.cone,e.beak,0,-.05,.42,.04,.09,.03,n.body).rotation.x=Math.PI;for(let i of[-1,1]){let s=Dt(t.cone,e.brown,i*.26,.66,0,.08,.24,.06,n.body);s.rotation.z=-i*.5}n.smile.visible=!1,n.noSmile=!0},sheet(n){n.eyes.forEach(t=>t.scale.set(1.15,1.3,1))},zombie(n,t,e){Dt(t.sph,e.brain,.12,.6,0,.17,.11,.15,n.body),Dt(t.box,e.black,-.18,.44,.33,.14,.012,.02,n.body);for(let i=0;i<3;i++)Dt(t.box,e.black,-.23+i*.05,.44,.335,.008,.05,.02,n.body);n.eyes[0].scale.set(1.2,.6,1),n.zombieArms=!0},devil(n,t,e){for(let a of[-1,1]){let o=Dt(t.cone,e.horn,a*.2,.7,0,.07,.22,.07,n.body);o.rotation.z=-a*.45}let i=new be;i.position.set(.25,-.35,-.3),n.body.add(i);let s=Dt(t.cyl,e.horn,.12,.06,0,.02,.32,.02,i);s.rotation.z=-1;let r=Dt(t.cone,e.horn,.27,.16,0,.06,.1,.02,i);r.rotation.z=-1,n.extra.tail=i},spider(n,t,e){n.extra.legs=[];for(let i of[-1,1])for(let s=0;s<4;s++){let r=new be;r.position.set(i*.36,-.05-s*.07,.1-s*.1),n.body.add(r);let a=Dt(t.cyl,e.leg,i*.15,.06,0,.022,.32,.022,r);a.rotation.z=-i*1;let o=Dt(t.cyl,e.leg,i*.32,-.04,0,.018,.26,.018,r);o.rotation.z=i*.5,n.extra.legs.push(r)}for(let[i,s]of[[-.06,.24],[.06,.24],[-.1,.19],[.1,.19]])Dt(t.sph,e.black,i,s+.27,.36,.022,.022,.015,n.body)},gold(n,t,e){yu.pumpkin(n,t,e),n.body.children.forEach(s=>{s.material===e.pump&&(s.material=e.gold)});let i=new be;i.position.set(0,.84,0),n.body.add(i),Dt(t.cyl,e.gold,0,0,0,.2,.08,.2,i);for(let s=0;s<5;s++){let r=s/5*Math.PI*2;Dt(t.cone,e.gold,Math.cos(r)*.17,.1,Math.sin(r)*.17,.05,.14,.05,i)}n.extra.crown=i}};function bi(n,t){n.expr=t,n.noSmile||(n.smile.visible=t==="happy"),n.oMouth.visible=t==="o",n.frown.visible=t==="sad"}function yc(n,t,e={}){n.t+=t;let i=n.t,s=e.bob??1;n.body.position.y=Math.sin(i*2.2)*.07*s,n.body.rotation.z=Math.sin(i*1.3)*.06*s+(e.tilt||0),n.body.rotation.y=Math.sin(i*.9)*.18*s+(e.spin||0);let r=e.squash||0;n.body.scale.set(1+r*.15,1-r*.15,1+r*.15),n.blinkT-=t;let a=1;n.blinkT<0&&(a=Math.max(.08,Math.abs(n.blinkT+.07)/.07),n.blinkT<-.14&&(n.blinkT=st(1.8,4.5)));let o=e.eyes??1;n.eyes.forEach(h=>{h.scale.y=Math.abs(h.scale.x)*1*a*o+1e-4});let l=Math.sin(i*3)*.25*s;n.arms[0].rotation.z=(e.armL??0)+l,n.arms[1].rotation.z=-(e.armR??0)-l,n.zombieArms&&n.arms.forEach(h=>{h.rotation.x=-1.2});let c=n.extra;if(c.wings&&c.wings.forEach((h,d)=>{h.rotation.y=(d?-1:1)*(.3+Math.sin(i*14)*.5)}),c.tail&&(c.tail.rotation.z=Math.sin(i*2.4)*.35),c.flame){let h=1+Math.sin(i*23)*.12+Math.sin(i*37)*.08;c.flame.scale.set(.06*h,.13*h,.06*h),c.fg.material.opacity=.5+.2*h}c.legs&&c.legs.forEach((h,d)=>{h.rotation.x=Math.sin(i*8+d*1.3)*.35}),c.hat&&(c.hat.rotation.z=.12+Math.sin(i*1.7)*.08),c.crown&&(c.crown.rotation.y=i*1.5),n.glow.material.opacity=(.3+.08*Math.sin(i*3))*(e.glow??1)}function bu(n=0){let t=Ep(),e=wp(),i=new be,s={root:i,variant:n,open:0,target:0,hover:0,lift:0,done:!1},r=Dt(t.sph,e.dirt,0,-.02,.62,.62,.12,.62,i);r.receiveShadow=!0,s.hole=Dt(t.sph,e.hole,0,0,.62,.42,.04,.42,i),Zi.hole||(Zi.hole=di("rgba(200,170,255,0.95)","rgba(140,80,255,0.25)")),s.holeGlow=new dn(new tn({map:Zi.hole,transparent:!0,depthWrite:!1,blending:Be,opacity:0})),s.holeGlow.position.set(0,.25,.62),s.holeGlow.scale.set(1.8,1.8,1),i.add(s.holeGlow),s.pivot=new be,s.pivot.position.set(0,0,-.12),i.add(s.pivot);let a=[t.stoneSlab,t.stoneCross,t.stonePoint][n%3];if(s.stoneMat=e.stone.clone(),s.stoneMat.emissive=new wt(1313824),s.slab=Dt(a,s.stoneMat,0,0,.12,1,1,1,s.pivot),s.slab.castShadow=!0,s.slab.receiveShadow=!0,n%3!==1){let o=Dt(t.plane,e.plaque,0,.8,.27,.9,.9,1,s.pivot);o.renderOrder=1}else{let o=Dt(t.plane,e.plaque,0,.95,.27,.5,.5,1,s.pivot);o.renderOrder=1}return s.slab.rotation.z=st(-.05,.05),s.candle=new be,s.candle.position.set(.32,.05,.95),i.add(s.candle),s.candle.visible=!1,Dt(t.cyl,e.wax,0,.1,0,.05,.2,.05,s.candle),s.flame=Dt(t.sph,e.flame,0,.25,0,.025,.05,.025,s.candle),s.cglow=new dn(Su(16756800)),s.cglow.scale.set(.8,.8,1),s.cglow.position.set(0,.26,0),s.candle.add(s.cglow),Zi.hitG||(Zi.hitG=new Xn(1.4,1.6,1.6),Zi.hitM=new xe({visible:!1})),s.hit=new De(Zi.hitG,Zi.hitM),s.hit.position.set(0,.75,.3),i.add(s.hit),s.hit.userData.stone=s,s}function Ap(n,t,e){let i=n.target>n.open?7:9;if(n.open+=(n.target-n.open)*(1-Math.exp(-i*t)),Math.abs(n.target-n.open)<.002&&(n.open=n.target),n.pivot.rotation.x=-1.12*n.open+(n.wob||0)*Math.sin(e*40)*.04,n.wob&&(n.wob=Math.max(0,n.wob-t*3)),n.hover+=((n.hoverOn&&!n.done?1:0)-n.hover)*(1-Math.exp(-12*t)),n.pivot.position.y=n.hover*.06+(n.lift||0),n.stoneMat.emissive.setRGB(.08+n.hover*.22+(n.done?.12:0),.05+n.hover*.14+(n.done?.08:0),.12+n.hover*.3),n.hole.scale.set(.42*n.open+.001,.04,.42*n.open+.001),n.holeGlow.material.opacity=Math.max(n.open*.85,n.done?.25:0),n.candle.visible){let s=1+Math.sin(e*21+n.root.position.x)*.15;n.flame.scale.set(.025*s,.05*s,.025*s),n.cglow.material.opacity=.55*s}}function Rp(n){n.stoneMat.dispose(),n.holeGlow.material.dispose(),n.cglow.material.dispose()}function Cp(n){let t=new Set;n.root.traverse(e=>{e.isSprite&&!t.has(e.material)&&(t.add(e.material),e.material.dispose())}),n.bodyMat.dispose()}function Pp(n,t){n.holeGlow.material.color.set(t)}function Va(n){return(vc[n]||vc.sheet)[1]}var Tu=class{constructor(t,e){this.n=e,this.i=0;let i=new Ee;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.v=new Float32Array(e*3),this.life=new Float32Array(e),this.max=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),i.setAttribute("position",new Te(this.pos,3).setUsage(dr)),i.setAttribute("color",new Te(this.col,3).setUsage(dr)),i.setAttribute("size",new Te(this.size,1).setUsage(dr)),i.setAttribute("alpha",new Te(this.alpha,1).setUsage(dr)),this.mat=new Ae({transparent:!0,depthWrite:!1,blending:Be,uniforms:{scale:{value:500}},vertexShader:`attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float scale;
        void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0); vA = alpha * smoothstep(1.5, 5.0, -mv.z); gl_PointSize = min(size * scale / max(0.5, -mv.z), 90.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:"varying vec3 vC; varying float vA; void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d); a = a * a; gl_FragColor = vec4(vC * a * vA, a * vA); }"}),this.points=new Fi(i,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,t.add(this.points)}spawn(t,e,i,s,r,a,o,l,c,h,d,u=6,f=.98){let g=this.i;this.i=(this.i+1)%this.n;let M=g*3;this.pos[M]=t,this.pos[M+1]=e,this.pos[M+2]=i,this.v[M]=s,this.v[M+1]=r,this.v[M+2]=a,this.col[M]=c,this.col[M+1]=h,this.col[M+2]=d,this.size[g]=o,this.life[g]=l,this.max[g]=l,this.grav[g]=u,this.drag[g]=f,this.alpha[g]=1}update(t){for(let i=0;i<this.n;i++){if(this.life[i]<=0){this.alpha[i]=0;continue}this.life[i]-=t;let s=i*3,r=Math.pow(this.drag[i],t*60);this.v[s]*=r,this.v[s+1]=this.v[s+1]*r-this.grav[i]*t,this.v[s+2]*=r,this.pos[s]+=this.v[s]*t,this.pos[s+1]+=this.v[s+1]*t,this.pos[s+2]+=this.v[s+2]*t;let a=Math.max(0,this.life[i]/this.max[i]);this.alpha[i]=Math.min(1,a*2.2)}let e=this.points.geometry.attributes;e.position.needsUpdate=!0,e.alpha.needsUpdate=!0,e.color.needsUpdate=!0,e.size.needsUpdate=!0}clear(){this.life.fill(0),this.alpha.fill(0)}};function Ip(n){let t={scene:n,scale:1,shakeAmp:0};t.points=new Tu(n,3e3),t.lights=[0,1,2].map(()=>{let i=new ds(16760928,0,14,1.6);return n.add(i),i}),t.li=0;let e=(()=>{let i=document.createElement("canvas");i.width=i.height=256;let s=i.getContext("2d"),r=s.createRadialGradient(128,128,70,128,128,126);r.addColorStop(0,"rgba(255,200,120,0)"),r.addColorStop(.8,"rgba(255,170,80,0.0)"),r.addColorStop(.9,"rgba(255,240,210,0.9)"),r.addColorStop(1,"rgba(255,120,30,0)"),s.fillStyle=r,s.fillRect(0,0,256,256);let a=new ls(i);return a.colorSpace=Ge,a})();t.rings=[];for(let i=0;i<8;i++){let s=new dn(new tn({map:e,blending:Be,depthWrite:!1,transparent:!0,opacity:0,fog:!1}));s.visible=!1,n.add(s),t.rings.push({s,t:1,dur:.5,size:3})}return t}function yr(n,t,e,i=40,s=4,r=.25,a=1,o=1.5){for(let l=0;l<i*n.scale;l++){let c=new C(st(-1,1),st(-1,1),st(-1,1)).normalize().multiplyScalar(st(.5,s));n.points.spawn(t.x,t.y,t.z,c.x,c.y,c.z,st(r*.4,r*1.1),st(a*.5,a*1.2),e[0],e[1],e[2],o,.95)}}function Lp(n,t,e=16760928,i=30){let s=n.lights[n.li=(n.li+1)%n.lights.length];s.position.copy(t),s.intensity=i,s.color.set(e)}function Eu(n,t,e=3,i=.5,s){let r=n.rings.find(a=>a.t>=1)||n.rings[0];r.s.position.copy(t),r.t=0,r.dur=i,r.size=e,r.s.visible=!0,r.s.material.color.set(s||16777215)}function Dp(n,t){n.shakeAmp=Math.max(n.shakeAmp,t)}function Np(n,t){n.points.update(t);for(let e of n.lights)e.intensity*=Math.pow(.002,t);for(let e of n.rings){if(e.t>=1)continue;e.t=Math.min(1,e.t+t/e.dur);let i=1-Math.pow(1-e.t,3);e.s.scale.setScalar(e.size*(.25+i)),e.s.material.opacity=Math.pow(1-e.t,1.5)*.5,e.t>=1&&(e.s.visible=!1)}n.shakeAmp*=Math.pow(.003,t)}function Up(n){return{canvas:n,g:n.getContext("2d"),pops:[],lines:[],dpr:1,w:1,h:1}}function Fp(n,t,e,i){n.dpr=i,n.canvas.width=Math.round(t*i),n.canvas.height=Math.round(e*i),n.w=t,n.h=e}function Op(n,t,e,i,s="#ffd36a",r=30,a=.9){n.pops.length>14&&n.pops.shift(),n.pops.push({x:t,y:e,text:i,color:s,size:r,t:0,life:a})}function wu(n,t,e,i,s){let r=n.g;r.setTransform(n.dpr,0,0,n.dpr,0,0),r.clearRect(0,0,n.w,n.h);let a=Math.round(e*46);for(;n.lines.length<a;)n.lines.push({a:st(0,Math.PI*2),r:st(.25,.6),v:st(1.6,3.2),l:st(.05,.14),w:st(1,2.6)});n.lines.length>a&&(n.lines.length=a);let o=Math.hypot(n.w,n.h)*.6;for(let l of n.lines){l.r+=l.v*t,l.r>1.1&&(l.r=st(.25,.45),l.a=st(0,Math.PI*2));let c=l.r*o,h=(l.r+l.l*(.5+e))*o,d=Math.cos(l.a),u=Math.sin(l.a),f=Math.min(1,(l.r-.25)*3)*.55*Math.min(1,e);r.strokeStyle=`rgba(235,220,255,${f})`,r.lineWidth=l.w,r.beginPath(),r.moveTo(i+d*c,s+u*c),r.lineTo(i+d*h,s+u*h),r.stroke()}for(let l of n.pops)l.t+=t;n.pops=n.pops.filter(l=>l.t<l.life);for(let l of n.pops){let c=l.t/l.life,h=c<.15?.6+c/.15*.6:1.2-Math.min(.2,(c-.15)*.6);r.save(),r.translate(l.x,l.y-c*50),r.scale(h,h),r.globalAlpha=Math.min(1,(1-c)*2.5),r.font=`900 ${l.size}px "Arial Black", "Arial Rounded MT Bold", Impact, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.lineWidth=l.size*.22,r.strokeStyle="rgba(30,6,40,0.85)",r.strokeText(l.text,0,0),r.shadowColor=l.color,r.shadowBlur=16,r.fillStyle=l.color,r.fillText(l.text,0,0),r.restore()}}var zu={};Cm(zu,{audioState:()=>Ou,duck:()=>vM,getAnalyser:()=>MM,isMuted:()=>Fu,setKids:()=>Ec,setMood:()=>mM,setMusicOn:()=>xM,setMusicVolume:()=>Tc,setMuted:()=>Uu,setRate:()=>gM,setSfxOn:()=>_M,setSfxVolume:()=>bc,setWind:()=>Nu,sfx:()=>oe,soundNames:()=>ku,soundsReady:()=>Bu,suspendAudio:()=>qp,unlockAudio:()=>wc});var Ye=null,Gp=null,Mr=null,Ji=null,Ss=null,Un=null,Ti=null,Iu=!0,Lu=!0,Sr=!1,Pu=.9,Du=.6,Ki=!1,Vp=!1,Wp=.55,bs={},Mc=null;function wn(){return Ye?Ye.currentTime:0}function br(){if(!Ye&&!Vp)return null;if(!Ye){let n=window.AudioContext||window.webkitAudioContext;if(!n)return null;try{Ye=new n({latencyHint:"interactive"})}catch{Ye=new n}lM(Ye)}return Ye.state==="suspended"&&Ye.resume().catch(()=>{}),Ye}function lM(n){let t=n.createDynamicsCompressor();t.threshold.value=-3,t.knee.value=0,t.ratio.value=20,t.attack.value=.002,t.release.value=.12,t.connect(n.destination),Gp=t,Mr=n.createGain(),Mr.gain.value=Sr?0:.85,Mr.connect(t),Ji=n.createDynamicsCompressor(),Ji.threshold.value=-18,Ji.ratio.value=3,Ji.attack.value=.005,Ji.release.value=.25,Ji.connect(Mr),Ss=n.createGain(),Ss.gain.value=Pu,Ss.connect(Ji),Ti=n.createBiquadFilter(),Ti.type="lowpass",Ti.frequency.value=9e3,Ti.Q.value=.5,Un=n.createGain(),Un.gain.value=0,Ti.connect(Un),Un.connect(Ji),Xp(n)}function cM(n){let t=atob(n),e=t.length,i=new Uint8Array(e);for(let s=0;s<e;s++)i[s]=t.charCodeAt(s);return i.buffer}function hM(n,t,e){return new Promise(i=>{let s=!1,r=o=>{s||(s=!0,bs[t]=o,i(!0),t.startsWith("music_")&&Tr())},a=()=>{s||(s=!0,i(!1))};try{let o=n.decodeAudioData(cM(e),r,a);o&&o.then&&o.then(r,a)}catch{a()}})}function Xp(n){if(Mc)return Mc;let t=window.GM_SOUNDS||{};return Mc=Object.keys(t).sort((i,s)=>(i.startsWith("music_")?1:0)-(s.startsWith("music_")?1:0)).reduce((i,s)=>i.then(()=>hM(n,s,t[s])),Promise.resolve()).then(()=>Object.keys(bs).length),Mc}var Bp=n=>1+(Math.random()*2-1)*n;function jt(n,{vol:t=1,rate:e=1,delay:i=0,pan:s=0,vary:r=1}={}){if(!Iu)return null;let a=br();if(!a)return null;let o=bs[n];if(!o)return null;let l=a.createBufferSource();l.buffer=o,l.playbackRate.value=e*Bp(.035*r);let c=a.createGain();c.gain.value=Math.max(0,t*Bp(.1*r));let h=l.connect(c);if(s&&a.createStereoPanner){let d=a.createStereoPanner();d.pan.value=Math.max(-1,Math.min(1,s)),h=h.connect(d)}return h.connect(Ss),l.start(wn()+i),l}var Au=(...n)=>n[Math.random()*n.length|0];var uM=0,Xa=null,Ru={start:.5,end:8.5};function dM(){let n=br();if(!n||Xa||!bs.wind)return;let t=n.createBufferSource();t.buffer=bs.wind,t.loop=!0,t.loopStart=Ru.start,t.loopEnd=Ru.end;let e=n.createBiquadFilter();e.type="lowpass",e.frequency.value=900,e.Q.value=.4;let i=n.createGain();i.gain.value=0,t.connect(e).connect(i).connect(Ss),t.start(wn(),Ru.start),Xa={src:t,lp:e,g:i}}function Nu(n,t=!0){if(!Ye||(dM(),!Xa))return;let e=wn(),i=Math.max(0,Math.min(1.6,n));Xa.g.gain.setTargetAtTime(t&&Iu?(.05+.3*i)*(Ki?.8:1):0,e,.6),Xa.lp.frequency.setTargetAtTime(500+1400*i,e,.5)}var kp={pumpkin:["giggle",1.05,.32],witch:["laugh",1.12,.26],bat:["bats",1.15,.3],skeleton:["bone",1,.45],cat:["meow",1,.36],vampire:["boo",.95,.3],mummy:["goo",.9,.4],candle:["whisper_b",1.25,.3],monster:["laugh_kids",.8,.34],owl:["squeak_kids",.85,.34],gold:["giggle_kids",1,.36],sheet:["giggle_kids",1.1,.3],zombie:["goo",.75,.36],devil:["laugh",.9,.24],spider:["squeak_kids",1.2,.3]},zp=-1,oe={flip(n=0){let t=wn();t-zp<.04||(zp=t,jt(Au("grind","grind_b"),{vol:.32,rate:1.25,pan:n}),jt("stone",{vol:.42,rate:.85,pan:n,delay:.05}),jt(Au("thud_a","thud_b"),{vol:.42,rate:.8,pan:n,delay:.16}))},rise(n=0){jt("ghost",{vol:.34,rate:1.15,pan:n}),jt("lift",{vol:.28,rate:1.1,pan:n,delay:.05})},voice(n="sheet",t=0){let e=kp[n]||kp.sheet;jt(e[0],{vol:e[2]*(Ki?.85:1),rate:e[1]*(Ki?1.08:1),pan:t,delay:.18})},match(n=1){let t=Math.min(n,6);jt(["chime_a","chime_b","chime_c"][uM++%3],{vol:.42,rate:.85+.05*t}),jt("harp",{vol:.32+.03*t,rate:.9+.04*t,delay:.08}),jt("magic",{vol:.24,delay:.25}),n>=3&&jt("sparkle",{vol:.32,rate:.9,delay:.3})},swirl(){jt("whoosh",{vol:.3,rate:1.1}),jt("sparkle",{vol:.3,rate:.8,delay:.25})},mismatch(){jt("breath",{vol:.3,rate:1.1}),jt("soft",{vol:.32,rate:.75,delay:.12})},sink(){jt("grind",{vol:.24,rate:1.4}),jt(Au("thud_a","thud_b"),{vol:.3,rate:.75,delay:.32})},swap(){jt("laugh_kids",{vol:.36,rate:.9}),jt("whoosh",{vol:.32,rate:.85,delay:.1}),jt("grind_b",{vol:.3,rate:1.1,delay:.35})},fog(){jt("whisper",{vol:.25,rate:.9})},gold(){jt("bell",{vol:.32,rate:1.1}),jt("choir",{vol:.32,delay:.1}),jt("harp",{vol:.4,delay:.25})},peek(){jt("fwoosh",{vol:.24,rate:.8}),jt("magic",{vol:.24,rate:.85})},turn(){jt("bell",{vol:.22,rate:1.35})},levelWin(){jt("success",{vol:.45}),jt("choir",{vol:.4,delay:.1}),jt("harp",{vol:.42,delay:.3})},celebrate(){jt("epic",{vol:.38}),jt("choir",{vol:.45,delay:.15}),jt("giggle_kids",{vol:.32,delay:.6}),jt("harp",{vol:.42,delay:.5})},star(n=0){jt(["chime_a","chime_b","chime_c"][n%3],{vol:.36,rate:.9+n*.08})},tick(){jt("thud_a",{vol:.16,rate:1.4,vary:.2})},ui(){jt("soft",{vol:.35,rate:1.2,vary:.2})},newBest(){jt("choir",{vol:.5}),jt("harp",{vol:.5,delay:.2}),jt("magic",{vol:.35,delay:.1})}},Cu={start:.05,end:32.9},Sc=null,fM="main";function Tr(){if(!Ye)return;let n=Lu&&!Sr;Un.gain.cancelScheduledValues(wn()),Un.gain.setTargetAtTime(n?Du*Wp*(Ki?.7:1):0,wn(),.3),Ti.frequency.setTargetAtTime(Ki?3500:9e3,wn(),.3),n&&pM()}function pM(){let n=br();if(!n)return;let t=bs.music_graveyard;if(!t||Sc)return;let e=wn(),i=n.createBufferSource();i.buffer=t,i.loop=!0,i.loopStart=Cu.start,i.loopEnd=Math.min(Cu.end,t.duration);let s=n.createGain();s.gain.setValueAtTime(1e-4,e),s.gain.linearRampToValueAtTime(1,e+.4),i.connect(s).connect(Ti),i.start(e,Cu.start),Sc={src:i,gain:s,t0:e}}function mM(n){fM=n,Ye&&Ti&&Ti.frequency.setTargetAtTime(n==="chase"?12e3:Ki?3500:9e3,wn(),.4)}function gM(n){Sc&&Sc.src.playbackRate.setTargetAtTime(n,wn(),.5)}function xM(n){Lu=!!n,Tr()}function _M(n){Iu=!!n}function Uu(n){Sr=!!n,Mr&&Mr.gain.setTargetAtTime(Sr?0:.85,wn(),.05),Tr()}function Fu(){return Sr}function bc(n){Pu=Math.max(0,Math.min(1,n)),Ss&&Ss.gain.setTargetAtTime(Pu,wn(),.05)}function Tc(n){Du=Math.max(0,Math.min(1,n)),Tr()}function Ec(n){Ki=!!n,Tr()}function vM(n=.35,t=1.5){if(!Ye||!Lu||Sr)return;let e=wn(),i=Du*Wp*(Ki?.7:1);Un.gain.cancelScheduledValues(e),Un.gain.setValueAtTime(Un.gain.value,e),Un.gain.linearRampToValueAtTime(i*n,e+.08),Un.gain.setValueAtTime(i*n,e+t),Un.gain.linearRampToValueAtTime(i,e+t+1.2)}function yM(n){try{let t=n.createBuffer(1,1,22050),e=n.createBufferSource();e.buffer=t,e.connect(n.destination),e.start(0)}catch{}}var Hp=!1;function wc(){Vp=!0;try{navigator.audioSession&&navigator.audioSession.type!=="playback"&&(navigator.audioSession.type="playback")}catch{}let n=br();n&&(Hp||(Hp=!0,yM(n)),n.state!=="running"&&n.resume().catch(()=>{}),Tr())}function Ou(){return Ye?Ye.state:"none"}function Bu(){let n=br();return n?Xp(n):Promise.resolve(0)}function ku(){return Object.keys(bs)}function qp(n){Ye&&(n?Ye.suspend().catch(()=>{}):Ye.resume().catch(()=>{}))}var Wa=null;function MM(){let n=br();return n?(Wa||(Wa=n.createAnalyser(),Wa.fftSize=2048,Gp.connect(Wa)),Wa):null}if(typeof window<"u"){let n=()=>{wc(),window.removeEventListener("pointerdown",n,!0),window.removeEventListener("keydown",n,!0),window.removeEventListener("touchend",n,!0)};window.addEventListener("pointerdown",n,!0),window.addEventListener("keydown",n,!0),window.addEventListener("touchend",n,!0),document.addEventListener("visibilitychange",()=>qp(document.hidden))}var Hu={en:{kicker:"A moonlit graveyard memory game",tag:"Flip a gravestone, meet a ghost \u2014 and find its twin before the night is over!",play:"PLAY",play2:"2 PLAYERS",how:"\u{1F5B1}\uFE0F Click or \u{1F4F1} tap a gravestone to flip it &nbsp;\xB7&nbsp; find the matching ghost pairs &nbsp;\xB7&nbsp; \u2328\uFE0F arrows + Enter work too",howKids:"\u{1F5B1}\uFE0F Tap a gravestone &nbsp;\xB7&nbsp; find two friendly ghosts that look the same &nbsp;\xB7&nbsp; no hurry!",kids:"Kids mode",settings:"\u2699 Modes & options",settingsT:"Modes & options",hintTap:"Tap two gravestones \u{1FAA6}\u{1FAA6} \u2013 find the matching ghost pairs!",hintKeys:"Click two gravestones \u{1FAA6}\u{1FAA6} (or arrows + Enter) \u2013 find the matching ghost pairs!",help:"How to play",best:"Best",quality:"Quality",q_low:"Low",q_mid:"Medium",q_high:"High",q_ultra:"Ultra",music:"Music",sfx:"Sound effects",mute:"Mute all",lang:"Language",close:"Done",suggested:"Suggested",fpsLow:"Low frame rate \u2192 quality",paused:"Paused",resume:"RESUME",quit:"Quit game",tut1t:"Flip",tut1:"Click or tap a gravestone. A ghost rises from the grave!",tut2t:"Match",tut2:"Find the second ghost of the same kind. Pairs dance and fly to the stars.",tut3t:"Combo",tut3:"Pairs in a row give a combo bonus. Fewer moves = more stars.",tut4t:"Twists",tut4:"Later: a cheeky ghost swaps stones, fog rolls in, and a golden pumpkin pair hides somewhere.",tutGo:"Got it \u2014 PLAY!",tutSkip:"Skip",level:"Level",moves:"Moves",time:"Time",pairs:"Pairs",score:"Score",combo:"COMBO",match:"MATCH!",nope:"Nope!",gold:"GOLDEN PUMPKIN!",swap:"A cheeky ghost swapped two stones!",fogIn:"The fog rolls in\u2026",peek:"Peek!",memorize:"Remember the ghosts\u2026",levelDone:"LEVEL CLEAR!",next:"NEXT LEVEL \u25B6",finish:"FINISH",turn:"\u2019s turn",wins:"WINS!",draw:"IT\u2019S A TIE!",again:"Go again!",lv1:"The Little Churchyard",lv2:"Lantern Lane",lv3:"The Foggy Crypts",lv4:"Midnight Hill",lvk1:"Tiny Graveyard",lvk2:"Friendly Ghosts",lvk3:"Ghost Party",twistSwap:"\u{1F47B} swaps",twistFog:"\u{1F32B}\uFE0F fog",twistGold:"\u{1F31F} golden pair",endTitle:"ALL GHOSTS FOUND!",endTitleQuit:"GOOD NIGHT!",end2p:"GHOST DUEL",newBest:"NEW BEST!",stScore:"score",stMoves:"moves",stTime:"time",stStars:"stars",stCombo:"best combo",name:"Name",shareT:"Share text",share:"Copy share text",shot:"Download end card",replay:"\u21BB PLAY AGAIN",menu:"Menu",copied:"Share text copied!",copyFail:"Select the text to copy it",saved:"End card saved \u{1F4F8}",p1:"Player 1",p2:"Player 2",mode2:"2-player names",vs:"vs",g_pumpkin:"Pumpkin Ghost",g_witch:"Witch Ghost",g_bat:"Bat Ghost",g_skeleton:"Skeleton Ghost",g_cat:"Cat Ghost",g_vampire:"Vampire Ghost",g_mummy:"Mummy Ghost",g_candle:"Candle Ghost",g_monster:"Monster Ghost",g_owl:"Owl Ghost",g_sheet:"Classic Ghost",g_zombie:"Zombie Ghost",g_devil:"Devil Ghost",g_spider:"Spider Ghost",g_gold:"Golden Pumpkin"},de:{kicker:"Ein Memory auf dem Mondschein-Friedhof",tag:"Dreh einen Grabstein um, triff einen Geist \u2013 und finde seinen Zwilling, bevor die Nacht vorbei ist!",play:"SPIELEN",play2:"2 SPIELER",how:"\u{1F5B1}\uFE0F Klick oder \u{1F4F1} tipp auf einen Grabstein &nbsp;\xB7&nbsp; finde die passenden Geister-Paare &nbsp;\xB7&nbsp; \u2328\uFE0F Pfeile + Enter gehen auch",howKids:"\u{1F5B1}\uFE0F Tipp auf einen Grabstein &nbsp;\xB7&nbsp; finde zwei gleiche, freundliche Geister &nbsp;\xB7&nbsp; ganz ohne Eile!",kids:"Kinder-Modus",settings:"\u2699 Modi & Optionen",settingsT:"Modi & Optionen",hintTap:"Tipp auf zwei Grabsteine \u{1FAA6}\u{1FAA6} \u2013 finde die passenden Geister-Paare!",hintKeys:"Klick zwei Grabsteine \u{1FAA6}\u{1FAA6} an (oder Pfeile + Enter) \u2013 finde die passenden Geister-Paare!",help:"Spielanleitung",best:"Rekord",quality:"Qualit\xE4t",q_low:"Niedrig",q_mid:"Mittel",q_high:"Hoch",q_ultra:"Ultra",music:"Musik",sfx:"Effekte",mute:"Ton aus",lang:"Sprache",close:"Fertig",suggested:"Empfohlen",fpsLow:"Niedrige Bildrate \u2192 Qualit\xE4t",paused:"Pause",resume:"WEITER",quit:"Spiel beenden",tut1t:"Umdrehen",tut1:"Klick oder tipp auf einen Grabstein. Ein Geist steigt aus dem Grab!",tut2t:"Paare",tut2:"Finde den zweiten Geist derselben Art. Paare tanzen und fliegen zu den Sternen.",tut3t:"Kombo",tut3:"Paare hintereinander geben Kombo-Bonus. Weniger Z\xFCge = mehr Sterne.",tut4t:"\xDCberraschungen",tut4:"Sp\xE4ter: ein frecher Geist vertauscht Steine, Nebel zieht auf und ein goldenes K\xFCrbis-Paar versteckt sich.",tutGo:"Alles klar \u2013 LOS!",tutSkip:"\xDCberspringen",level:"Level",moves:"Z\xFCge",time:"Zeit",pairs:"Paare",score:"Punkte",combo:"KOMBO",match:"PAAR!",nope:"N\xF6!",gold:"GOLDENER K\xDCRBIS!",swap:"Ein frecher Geist hat zwei Steine vertauscht!",fogIn:"Der Nebel zieht auf \u2026",peek:"Guck mal!",memorize:"Merk dir die Geister \u2026",levelDone:"LEVEL GESCHAFFT!",next:"N\xC4CHSTES LEVEL \u25B6",finish:"FERTIG",turn:" ist dran",wins:"GEWINNT!",draw:"UNENTSCHIEDEN!",again:"Nochmal!",lv1:"Der kleine Kirchhof",lv2:"Laternengasse",lv3:"Die Nebelgruft",lv4:"Mitternachtsh\xFCgel",lvk1:"Mini-Friedhof",lvk2:"Freundliche Geister",lvk3:"Geisterparty",twistSwap:"\u{1F47B} vertauscht",twistFog:"\u{1F32B}\uFE0F Nebel",twistGold:"\u{1F31F} goldenes Paar",endTitle:"ALLE GEISTER GEFUNDEN!",endTitleQuit:"GUTE NACHT!",end2p:"GEISTER-DUELL",newBest:"NEUER REKORD!",stScore:"Punkte",stMoves:"Z\xFCge",stTime:"Zeit",stStars:"Sterne",stCombo:"beste Kombo",name:"Name",shareT:"Teilen-Text",share:"Text kopieren",shot:"Endkarte speichern",replay:"\u21BB NOCHMAL",menu:"Men\xFC",copied:"Text kopiert!",copyFail:"Text markieren zum Kopieren",saved:"Endkarte gespeichert \u{1F4F8}",p1:"Spieler 1",p2:"Spieler 2",mode2:"Namen f\xFCr 2 Spieler",vs:"gegen",g_pumpkin:"K\xFCrbisgeist",g_witch:"Hexengeist",g_bat:"Fledermausgeist",g_skeleton:"Skelettgeist",g_cat:"Katzengeist",g_vampire:"Vampirgeist",g_mummy:"Mumiengeist",g_candle:"Kerzengeist",g_monster:"Monstergeist",g_owl:"Eulengeist",g_sheet:"Klassik-Geist",g_zombie:"Zombiegeist",g_devil:"Teufelchen",g_spider:"Spinnengeist",g_gold:"Goldener K\xFCrbis"}},Yp=[{min:0,en:"Memory Phantom",de:"Ged\xE4chtnis-Gespenst"},{min:2500,en:"Grave Peeker",de:"Grabstein-Gucker"},{min:6e3,en:"Pair Poltergeist",de:"Paar-Poltergeist"},{min:11e3,en:"Crypt Keeper",de:"Gruft-H\xFCter"},{min:17e3,en:"Moonlight Medium",de:"Mondschein-Medium"},{min:24e3,en:"Ghost Genius",de:"Geister-Genie"}],Ei="en";function $p(){try{let n=navigator.languages&&navigator.languages[0]||navigator.language||"";return/^de\b/i.test(n)?"de":"en"}catch{return"en"}}try{Ei=localStorage.getItem("gm-lang")||$p()}catch{Ei=$p()}function Er(){return Ei}function Ac(n,t=!0){if(Ei=n==="de"?"de":"en",t)try{localStorage.setItem("gm-lang",Ei)}catch{}document.documentElement.lang=Ei}function kt(n,t=Ei){return(Hu[t]&&Hu[t][n])??Hu.en[n]??n}function Rc(n,t=Ei){let e=Yp[0];for(let i of Yp)n>=i.min&&(e=i);return e[t]}function Zp(n){document.querySelectorAll("[data-i18n]").forEach(t=>{t.textContent=kt(t.getAttribute("data-i18n"))}),document.querySelectorAll("[data-i18n-html]").forEach(t=>{let e=t.getAttribute("data-i18n-html");t.innerHTML=kt(n&&e==="how"?"howKids":e)})}function Qi(n,t=Ei){return Math.round(n).toLocaleString(t==="de"?"de-DE":"en-US")}var Cc=n=>(n=Math.max(0,Math.round(n)),`${n/60|0}:${String(n%60).padStart(2,"0")}`);function Pc(n,t){if(n.two){let r=n.winner;return t==="de"?`\u{1F47B} GHOST MEMORY Geister-Duell: ${n.p[0].name} ${n.p[0].pairs} : ${n.p[1].pairs} ${n.p[1].name} \u2013 ${r?r+" gewinnt!":"unentschieden!"} \u{1F3C6}
Auf dem Mondschein-Friedhof Geister-Paare gefunden \u{1F315}\u{1FAA6} #GhostMemory #Halloween`:`\u{1F47B} GHOST MEMORY ghost duel: ${n.p[0].name} ${n.p[0].pairs} : ${n.p[1].pairs} ${n.p[1].name} \u2014 ${r?r+" wins!":"it\u2019s a tie!"} \u{1F3C6}
Matching ghost pairs in a moonlit graveyard \u{1F315}\u{1FAA6} #GhostMemory #Halloween`}let e=Rc(n.score,t),i=Qi(n.score,t),s="\u2B50".repeat(n.stars)+"\u2606".repeat(Math.max(0,n.maxStars-n.stars));return t==="de"?`\u{1F47B} ${n.name} hat in GHOST MEMORY ${n.pairs} Geister-Paare in ${n.moves} Z\xFCgen gefunden \u2013 ${i} Punkte, Rang: ${e}!
${s} \xB7 beste Kombo x${n.bestCombo}${n.gold?" \xB7 goldener K\xFCrbis \u{1F31F}":""}
Schaffst du\u2019s mit weniger Z\xFCgen? \u{1FAA6}\u{1F315} #GhostMemory #Halloween`:`\u{1F47B} ${n.name} found ${n.pairs} ghost pairs in ${n.moves} moves in GHOST MEMORY \u2014 ${i} points, rank: ${e}!
${s} \xB7 best combo x${n.bestCombo}${n.gold?" \xB7 golden pumpkin \u{1F31F}":""}
Can you do it in fewer moves? \u{1FAA6}\u{1F315} #GhostMemory #Halloween`}var lt=n=>document.getElementById(n),Lc=[];function Kn(n,t){Lc.push({t:t/1e3,fn:n})}function SM(n){for(let t=Lc.length-1;t>=0;t--){let e=Lc[t];if(e.t-=n,e.t<=0){Lc.splice(t,1);try{e.fn()}catch(i){console.error(i)}}}}var wr=[{c:4,r:3,name:"lv1"},{c:4,r:4,name:"lv2",gold:!0},{c:5,r:4,name:"lv3",gold:!0,swap:!0},{c:6,r:5,name:"lv4",gold:!0,swap:!0,fog:!0}],Za=[{c:3,r:2,name:"lvk1"},{c:4,r:3,name:"lvk2",gold:!0},{c:4,r:4,name:"lvk3",gold:!0}],Jp=1.9,Kp=2.25,_={state:"attract",mode:"solo",kids:Re.get("gm-kids",!1)===!0,quality:Re.get("gm-quality",""),qualityUser:!!Re.get("gm-quality",""),lvl:0,startLvl:0,cards:[],cols:4,rows:4,sel:[],busy:0,moves:0,time:0,combo:0,bestCombo:0,score:0,total:0,pairsFound:0,pairs:0,gold:!1,totalMoves:0,totalTime:0,totalPairs:0,starsSum:0,starsMax:0,lvStars:[],turn:0,players:[{name:"Player 1",pairs:0,score:0},{name:"Player 2",pairs:0,score:0}],peekT:0,fogT:0,fogOn:!1,swapCd:0,swapAnim:null,focus:0,paused:!1,tut:!1,best:Re.get("gm-best",0)||0,nameV:Re.get("gm-name","Player"),shareLang:Er(),clock:0,log:{flip:0,match:0,miss:0,swap:0,fog:0,gold:0,combo:0,turn:0},aiT:1,endR:null};Ms[_.quality]||(_.quality="");var Dc=lt("gl"),pn=new ac({canvas:Dc,antialias:!0,powerPreference:"high-performance",alpha:!1,stencil:!1});pn.toneMapping=gs;pn.toneMappingExposure=1.15;pn.outputColorSpace=Ge;pn.shadowMap.type=ps;var ji=new Kr,Me=new Qe(46,1,.1,700),An=null,Ke=null,Rn=Ip(ji),On=Up(lt("fx2d")),Ic=1,nn={pos:new C(0,10,10),look:new C(0,.5,0),dist:14,px:0,py:0},Es=new be;ji.add(Es);function Ts(){return _.quality||"high"}function bM(){let n=Ms[Ts()];if(An&&(An.dispose&&An.dispose(),An=null),!n.bloom)return;let t=pn.getDrawingBufferSize(new nt),e=new Oe(t.x,t.y,{type:We,samples:n.msaa});An=new uc(pn,e),An.addPass(new dc(ji,Me)),An.addPass(new vr(new nt(t.x,t.y),.75*n.bloom,.55,.8)),An.addPass(new fc)}function em(){let n=window.innerWidth,t=window.innerHeight,e=Ms[Ts()];Ic=Math.min(window.devicePixelRatio||1,e.pr),pn.setPixelRatio(Ic),pn.setSize(n,t,!1),Me.aspect=n/t,Me.fov=Me.aspect<.9?62:46,Me.updateProjectionMatrix(),An&&(An.setPixelRatio(Ic),An.setSize(n,t)),Fp(On,n,t,Math.min(window.devicePixelRatio||1,2)),Ke&&(Ke.stars.material.uniforms.pr.value=Ic),_.cards.length&&$u(!0)}function Ya(n,t=!1){_.quality=n,t&&(_.qualityUser=!0,Re.set("gm-quality",n));let e=Ms[n],i=Ke?Ke.fogK:0;Ke&&ji.remove(Ke.root),Ke=bp(ji,n),Ke.fogK=i,pn.shadowMap.enabled=!!e.shadow,pn.shadowMap.needsUpdate=!0,Rn.scale=e.particles,bM(),em(),document.querySelectorAll("#qualSeg button").forEach(s=>s.classList.toggle("on",s.dataset.q===n))}function Ar(){return(_.kids?Za:wr)[_.lvl]||wr[0]}function nm(){for(let n of _.cards)Es.remove(n.stone.root),Es.remove(n.gh.root),Rp(n.stone),Cp(n.gh);_.cards=[],_.sel=[],_.evalT=0,_.unlockT=0,_.busy=0}function im(n,t){nm();let e=n.c*n.r,i=e/2;_.pairs=i,_.pairsFound=0;let s=t||[...Mu].sort(()=>Math.random()-.5).slice(0,n.gold?i-1:i);!t&&n.gold&&s.push("gold"),[...s,...s].sort(()=>Math.random()-.5).forEach((a,o)=>{let l=bu(Math.random()*3|0);Es.add(l.root),Pp(l,Va(a));let c=Ga(a);c.root.visible=!1,Es.add(c.root),_.cards.push({i:o,type:a,stone:l,gh:c,state:"down",mode:"hidden",t:0,x:0,z:0,hx:0,hz:0})}),_.defC=n.c,_.defR=n.r,$u(!1)}function $u(n){let t=Me.aspect<.9;_.cols=t&&_.defC>_.defR?_.defR:_.defC,_.rows=_.cards.length/_.cols,_.cards.forEach((c,h)=>{let d=h%_.cols,u=h/_.cols|0;c.x=(d-(_.cols-1)/2)*Jp,c.z=(u-(_.rows-1)/2)*Kp-.4,(!_.swapAnim||!_.swapAnim.cards.includes(c))&&c.stone.root.position.set(c.x,0,c.z),c.hx=c.x,c.hz=c.z+.62});let e=_.cols*Jp+1,i=_.rows*Kp+.8,s=Fa.degToRad(Me.fov),r=2*Math.atan(Math.tan(s/2)*Me.aspect),a=Fa.degToRad(t?50:30),o=e/2/Math.tan(r/2)+1.4,l=i*(t?.6:.45)/Math.tan(s/2)+1.2;nn.dist=Math.max(o,l)*1+1.2,nn.el=a,n||sm()}function sm(){rm(nn.pos),Me.position.copy(nn.pos),Me.lookAt(nn.look)}var Qp=new C;function rm(n){let t=_.clock,e=nn.el+Math.sin(t*.21)*.02,i=Math.sin(t*.13)*.05+nn.px*.04,s=nn.dist*(window.__gmCamK||1);n.set(Math.sin(i)*Math.cos(e)*s,Math.sin(e)*s+.6+nn.py*.3,Math.cos(i)*Math.cos(e)*s+.4);let r=_.state==="attract"?1:0;nn.att=mc(nn.att||0,r,1.5,1/60);let a=Me.aspect<.9;return nn.look.set(Math.sin(t*.17)*.15,.3+nn.att*2.2,(a?-2:-2-_.rows*.2)-nn.att*3),n}function Fn(n,t){n.mode=t,n.t=0,t!=="hidden"&&(n.gh.root.visible=!0)}var wi=n=>1-Math.pow(1-n,3),TM=n=>(n-=1,n*n*((1.70158+1)*n+1.70158)+1);function EM(n,t){n.t+=t;let e=n.gh,i=e.root,s=n.t,r={};if(Ap(n.stone,t,_.clock),n.mode==="hidden"){i.visible=!1;return}let a=Math.atan2(Me.position.x-i.position.x,Me.position.z-i.position.z);if(i.rotation.y=a,n.mode==="rise"){let o=gn(s/.62,0,1),l=TM(o);i.position.set(n.hx,ln(-.6,1.5,l),n.hz),i.scale.setScalar(ln(.25,1,wi(o))),r={spin:(1-wi(o))*Math.PI*2,squash:-.4*(1-o),armL:1.6*o,armR:1.6*o},o>=1&&(Fn(n,"idle"),bi(e,"happy"))}else if(n.mode==="peek"){let o=gn(s/.5,0,1);i.position.set(n.hx,ln(-.4,1,wi(o)),n.hz),i.scale.setScalar(ln(.3,.78,wi(o))),r={bob:.6}}else if(n.mode==="idle")i.position.set(n.hx,1.5,n.hz),i.scale.setScalar(1),r={armL:.4,armR:.4};else if(n.mode==="shrug"){let o=gn(s/.25,0,1),l=Math.sin(s*9)*.12;i.position.set(n.hx,1.5-o*.1,n.hz),r={armL:2.3*o,armR:2.3*o,tilt:l,eyes:.6,bob:.3,squash:.2*o},s>(_.fogOn?.55:.85)&&(Fn(n,"sink"),oe.sink())}else if(n.mode==="sink"){let o=gn(s/.45,0,1),l=o*o;i.position.set(n.hx,ln(1.4,-.8,l),n.hz),i.scale.setScalar(ln(1,.4,l)),r={armL:1.5*(1-o),armR:1.5*(1-o),eyes:.5,bob:.2},s>.12&&n.stone.target&&(n.stone.target=0),o>=1&&(Fn(n,"hidden"),n.stone.wob=1,$a(n,.5),n.state="down")}else if(n.mode==="dance"){let o=n.partner,l=(n.hx+o.hx)/2,c=(n.hz+o.hz)/2+.3,h=gn(s/.45,0,1),d=wi(h),u=n.da+s*5.2,f=ln(Math.hypot(n.hx-l,n.hz-c),.62,d),g=n.hx+(l+Math.cos(u)*f-n.hx)*d,M=n.hz+(c+Math.sin(u)*f-n.hz)*d;i.position.set(g,1.6+Math.abs(Math.sin(s*8))*.35*d+d*.4,M),i.scale.setScalar(1+.08*Math.sin(s*16)),r={armL:2.6,armR:2.6,tilt:Math.sin(s*8)*.25,spin:s*2,squash:Math.sin(s*16)*.15},s>1.45&&(Fn(n,"swirl"),n.sx=i.position.x,n.sz=i.position.z,n.sy=i.position.y,n.lead&&oe.swirl())}else if(n.mode==="swirl"){let o=gn(s/1.15,0,1),l=o*o,c=n.da+5.2*1.45+s*(6+8*o),h=n.partner,d=(n.sx+h.sx)/2,u=(n.sz+h.sz)/2,f=.62*(1-o);i.position.set(d+Math.cos(c)*f,ln(n.sy,8.5,l),u+Math.sin(c)*f),i.scale.setScalar(ln(1,.15,l)),r={armL:2.8,armR:2.8,spin:s*6,glow:1.5},Math.random()<.9&&yr(Rn,i.position,Vu(n.type),3,1.2,.22,.8,-.5),o>=1&&(Fn(n,"hidden"),yr(Rn,i.position,Vu(n.type),40,5,.3,1.2,.6),n.lead&&Eu(Rn,i.position.clone(),4,.6,Va(n.type)))}i.scale.multiplyScalar(1.22),yc(e,t,r)}function Vu(n){let t=new wt(Va(n));return[t.r*1.6+.2,t.g*1.6+.2,t.b*1.6+.2]}function $a(n,t=1){yr(Rn,new C(n.stone.root.position.x,.15,n.stone.root.position.z+.2),[.75,.62,.55],26*t,2.2,.32,.9,1.2)}function wM(n){return n&&n.state==="down"&&!_.busy&&_.sel.length<2&&_.peekT<=0&&!_.swapAnim&&(_.state==="play"||_.state==="attract")&&!_.paused&&!_.tut}function Nc(n){if(typeof n=="number"&&(n=_.cards[n]),!wM(n))return!1;n.state="up",n.stone.target=1,n.stone.wob=.6,_.sel.push(n),Fn(n,"rise"),$a(n);let t=gn(n.x/6,-1,1);return oe.flip(t),oe.rise(t),oe.voice(n.type,t),Lp(Rn,new C(n.hx,1.2,n.hz+.4),Va(n.type),6),_.state==="play"&&_.log.flip++,_.sel.length===2&&(_.busy=1,_.evalT=.85,_.state==="play"&&(_.moves++,_.totalMoves++)),!0}function AM(){if(_.sel.length<2){_.sel=[],_.busy=0;return}let[n,t]=_.sel;_.sel=[];let e=_.state==="play";if(n.type===t.type){n.state=t.state="done",n.partner=t,t.partner=n,n.lead=!0,t.lead=!1;let i=Math.atan2(n.hz-t.hz,n.hx-t.hx);n.da=i,t.da=i+Math.PI,Fn(n,"dance"),Fn(t,"dance"),bi(n.gh,"o"),bi(t.gh,"o"),Kn(()=>{bi(n.gh,"happy"),bi(t.gh,"happy")},500),_.combo++,_.bestCombo=Math.max(_.bestCombo,_.combo),_.pairsFound++;let s=n.type==="gold",r=100+50*(_.combo-1)+(s?500:0);if(e){if(_.log.match++,_.combo>1&&_.log.combo++,s&&(_.log.gold++,_.gold=!0),_.mode==="two"){let o=_.players[_.turn];o.pairs++,o.score+=r}else _.score+=r,_.total+=r;RM()}oe.match(_.combo),s&&oe.gold();let a=pm(new C((n.hx+t.hx)/2,1.8,(n.hz+t.hz)/2));e&&Op(On,a.x,a.y,"+"+r,s?"#ffd040":"#ffe2a8",s?46:36,1.2),e&&Ai(s?kt("gold"):_.combo>1?`${kt("combo")} x${_.combo}`:kt("match"),_.mode==="two"?`${_.players[_.turn].name} \u2014 ${kt("again")}`:kt("g_"+n.type),_.combo>2||s);for(let o of[n,t])yr(Rn,new C(o.hx,1.2,o.hz),Vu(o.type),50,4,.3,1,0);Kn(()=>{n.stone.target=0,t.stone.target=0},1500),Kn(()=>{for(let o of[n,t])o.stone.done=!0,o.stone.candle.visible=!0,o.stone.wob=.7,$a(o,.4);oe.sink()},2050),_.busy=0,_.pairsFound>=_.pairs&&(_.busy=1,Kn(()=>hm(),2700))}else Fn(n,"shrug"),Fn(t,"shrug"),bi(n.gh,"sad"),bi(t.gh,"sad"),oe.mismatch(),_.combo=0,e&&_.log.miss++,e&&_.mode==="two"?(_.turn=1-_.turn,_.log.turn++,oe.turn(),Kn(()=>{_.state==="play"&&Ai(_.players[_.turn].name+kt("turn"),"",_.turn===1)},900)):e&&Ai(kt("nope"),"",!1,!0),_.busy=1,_.unlockT=_.fogOn?1.15:1.45,(e&&Ar().swap&&_.mode!=="two"||e&&Ar().swap&&_.mode==="two")&&_.swapCd--}function RM(){let n=lt("scoreN");n.classList.remove("bump"),n.offsetWidth,n.classList.add("bump")}function Ai(n,t="",e=!1,i=!1){let s=lt("banner");s.className="",s.innerHTML=`<span class="c">${n}</span>${t?`<span class="p">${t}</span>`:""}`,s.style.fontSize=i?"clamp(26px,4.5vw,54px)":"",s.offsetWidth,s.className="show"+(e?" purple":"")}var Jn=null,Gu=[];function CM(n){if(!Gu.length)for(let[a,o]of[["pumpkin",-1],["witch",1],["bat",-1],["cat",1]]){let l=Ga(a);ji.add(l.root),Gu.push({g:l,sd:o,k:0,ph:st(0,6)})}let t=_.state==="attract"||_.state==="end",e=Me.aspect<.9,i=new C,s=new C,r=new C(0,1,0);Me.getWorldDirection(i),s.crossVectors(i,r).normalize(),Gu.forEach((a,o)=>{if(a.k=mc(a.k,t?1:0,3,n),a.g.root.visible=a.k>.02,!a.g.root.visible)return;let l=o<2?0:1,c=6.5+l*2.5,h=c*Math.tan(Fa.degToRad(Me.fov)/2)*Me.aspect,d=a.sd*h*(e||l?.62:.74),u=e?(l?-.2:-1.6)*(c/6.5):(l?.9:-.9)+Math.sin(_.clock*1.4+a.ph)*.2;a.g.root.position.copy(Me.position).addScaledVector(i,c).addScaledVector(s,d*(.6+.4*a.k)).addScaledVector(r,u-(1-a.k)*3),a.g.root.scale.setScalar((e?.7:1)*(l?.75:1)*a.k),a.g.root.lookAt(Me.position),a.g.root.rotation.z+=a.sd*.15,yc(a.g,n,{armL:1.2+Math.sin(_.clock*4+o)*.8,armR:.6,tilt:a.sd*-.12})})}function am(n=!1){let t=_.cards.filter(s=>s.state==="down");if(t.length<4&&!n||t.length<2)return!1;let e=ys(t),i=ys(t.filter(s=>s!==e&&Math.hypot(s.x-e.x,s.z-e.z)<6))||ys(t.filter(s=>s!==e));return Jn||(Jn=Ga("sheet"),Jn.bodyMat.color.set(14199039),Jn.bodyMat.emissive.set(10113279),bi(Jn,"o"),Es.add(Jn.root)),Jn.root.visible=!0,_.swapAnim={a:e,b:i,cards:[e,i],t:0,pa:e.stone.root.position.clone(),pb:i.stone.root.position.clone(),done:!1},_.log.swap++,oe.swap(),Ai("\u{1F47B}\u{1F500}",kt("swap"),!0),!0}function PM(n){let t=_.swapAnim;if(!t)return;t.t+=n;let e=t.t,i=Jn.root,s=t.pa.clone().lerp(t.pb,.5);if(e<.6){let m=wi(e/.6);i.position.set(ln(s.x+6,s.x,m),ln(6,2.6,m),ln(s.z-4,s.z,m))}else if(e<2.2)i.position.set(s.x+Math.sin(e*3)*.3,2.6+Math.sin(e*6)*.15,s.z);else{let m=wi((e-2.2)/.6);i.position.set(ln(s.x,s.x-7,m),ln(2.6,7,m),ln(s.z,s.z-5,m))}i.rotation.y=Math.atan2(Me.position.x-i.position.x,Me.position.z-i.position.z),i.scale.setScalar(1.15),yc(Jn,n,{armL:2.4,armR:2.4,tilt:Math.sin(e*5)*.2});let r=e<.6?0:e<1?wi((e-.6)/.4)*.9:e<1.9?.9:e<2.2?.9*(1-wi((e-1.9)/.3)):0,a=gn((e-1)/.9,0,1),o=a*a*(3-2*a),l=t.pa.clone().lerp(t.pb,o),c=t.pb.clone().lerp(t.pa,o),h=Math.sin(o*Math.PI)*.9,d=t.pb.x-t.pa.x,u=t.pb.z-t.pa.z,f=Math.hypot(d,u)||1,g=-u/f,M=d/f;if(t.a.stone.root.position.set(l.x+g*h,r,l.z+M*h),t.b.stone.root.position.set(c.x-g*h,r,c.z-M*h),e>.6&&e<.7&&!t.g1&&(t.g1=1,oe.flip(0)),e>2.2&&!t.done){t.done=!0,oe.sink(),Dp(Rn,.1);let m=_.cards.indexOf(t.a),p=_.cards.indexOf(t.b);_.cards[m]=t.b,_.cards[p]=t.a,t.a.i=p,t.b.i=m,_.swapAnim=null,$u(!0),$a(t.a,.6),$a(t.b,.6),t.a.stone.wob=1,t.b.stone.wob=1,Kn(()=>{Jn&&(Jn.root.visible=!1)},600),_.swapFly=.6}}function Cr(n){_.fogOn!==n&&(_.fogOn=n,n&&(_.log.fog++,oe.fog(),Ai("\u{1F32B}\uFE0F",kt("fogIn"),!0,!0)),Nu(n?1.2:.2))}function Ja(n="solo",t=_.startLvl){wc(),document.body.classList.contains("sheet")&&ts(!1),_.hintArm=Re.get("gm-hints",0)<2&&!window.__gmNoTut,_.mode=n,_.startLvl=t,_.lvl=t,_.total=0,_.totalMoves=0,_.totalTime=0,_.totalPairs=0,_.starsSum=0,_.starsMax=0,_.lvStars=[],_.bestCombo=0,_.gold=!1;for(let e in _.log)_.log[e]=0;_.players[0]={name:(lt("n1").value||"Player 1").trim(),pairs:0,score:0},_.players[1]={name:(lt("n2").value||"Player 2").trim(),pairs:0,score:0},_.turn=0,Re.set("gm-n1",_.players[0].name),Re.set("gm-n2",_.players[1].name),document.body.classList.toggle("two",n==="two"),lt("start").classList.add("hidden"),lt("end").classList.add("hidden"),lt("lvDone").classList.add("hidden"),lt("hud").classList.remove("hidden"),om()}function om(){let n=Ar();On.pops.length=0,_.state="play",_.paused=!1,_.moves=0,_.time=0,_.combo=0,_.score=0,_.busy=0,_.unlockT=0,_.swapAnim=null,_.swapCd=st(3,5)|0,_.fogT=7,Cr(!1),Ke.fogK=0,im(n),_.peekT=_.kids?3.6:1.3;for(let t of _.cards)t.stone.target=.42,Fn(t,"peek");oe.peek(),Ai(kt(n.name),_.kids?kt("memorize"):kt("peek"),!1),lt("lvName").textContent=`${kt("level")} ${_.lvl+1} \xB7 ${kt(n.name)}`,lt("twists").textContent=[n.swap&&kt("twistSwap"),n.fog&&kt("twistFog"),n.gold&&kt("twistGold")].filter(Boolean).join(" \xB7 "),_.mode==="two"&&Ai(kt(n.name),_.players[0].name+kt("turn")),Ku()}function Wu(){let n=lt("hint");n.textContent=kt(document.body.classList.contains("touch")?"hintTap":"hintKeys"),n.classList.add("show"),_.hintOn=!0,clearTimeout(Wu._t),Wu._t=setTimeout(lm,6500)}function lm(){_.hintOn&&(_.hintOn=!1,lt("hint").classList.remove("show"))}function cm(){_.hintArm&&(_.hintArm=!1,Re.set("gm-hints",Re.get("gm-hints",0)+1),Wu());for(let n of _.cards)n.mode==="peek"&&(Fn(n,"sink"),n.t=.1),n.stone.target=0;oe.sink()}function IM(){if(_.kids)return _.moves<=_.pairs*2?3:2;let n=_.pairs;return _.moves<=Math.ceil(n*1.55)?3:_.moves<=Math.ceil(n*2.2)?2:1}function hm(){if(_.state!=="play")return;if(_.busy=1,Cr(!1),_.mode==="two")return Fc();let n=IM(),t=_.kids?0:Math.max(0,Math.round((_.pairs*9-_.time)*10)),e=n*200;_.score+=t+e,_.total+=t+e,_.starsSum+=n,_.starsMax+=3,_.lvStars.push(n),_.totalTime+=_.time,_.totalPairs+=_.pairs;let i="gm-lv-"+(_.kids?"k":"")+_.lvl;Re.set(i,Math.max(Re.get(i,0),n)),oe.levelWin(),Xu();let s=_.lvl>=(_.kids?Za:wr).length-1;lt("lvStars").querySelectorAll("span").forEach((r,a)=>{r.classList.remove("on"),Kn(()=>{a<n&&(r.classList.add("on"),oe.star(a))},350+a*380)}),lt("lvStats").innerHTML=`<div><b>${_.moves}</b>${kt("moves")}</div>`+(_.kids?"":`<div><b>${Cc(_.time)}</b>${kt("time")}</div>`)+`<div><b>+${Qi(t+e)}</b>${kt("score")}</div>`,lt("btnNext").textContent=s?kt("finish"):kt("next"),_.state="lvdone",Ku(),Kn(()=>lt("lvDone").classList.remove("hidden"),500)}function um(){if(lt("lvDone").classList.add("hidden"),oe.ui(),_.lvl>=(_.kids?Za:wr).length-1)return Fc();_.lvl++,om()}function Xu(){for(let n=0;n<6;n++)Kn(()=>{let t=new C(st(-5,5),st(4,7),st(-4,1));yr(Rn,t,ys([[1.8,1.2,.4],[1.4,.8,1.9],[.8,1.8,1.2]]),70,6,.35,1.4,1.5),Eu(Rn,t,5,.6,16765088)},n*260)}function Uc(){if(_.mode==="two"){let[n,t]=_.players;return{two:!0,p:_.players,winner:n.pairs===t.pairs?n.score===t.score?null:n.score>t.score?n.name:t.name:n.pairs>t.pairs?n.name:t.name,name:_.nameV}}return{name:(_.nameV||"Player").trim()||"Player",score:_.total,pairs:_.totalPairs+(_.state==="play"?_.pairsFound:0),moves:_.totalMoves,time:_.totalTime+(_.state==="play"?_.time:0),stars:_.starsSum,maxStars:Math.max(3,_.starsMax),bestCombo:_.bestCombo,gold:_.gold,levels:_.lvStars.length}}function Fc(n=!1){if(_.state==="end")return;let t=Uc();if(_.endR=t,_.state="end",_.busy=0,Cr(!1),lt("hud").classList.add("hidden"),lt("lvDone").classList.add("hidden"),lt("pauseScr").classList.add("hidden"),t.two)lt("endTitle").textContent=kt("end2p"),lt("endScore").textContent=t.winner?`\u{1F3C6} ${t.winner}`:kt("draw"),lt("endDuel").textContent=`${t.p[0].name} ${t.p[0].pairs} : ${t.p[1].pairs} ${t.p[1].name}`,lt("newBest").classList.add("hidden"),t.winner?Ai(`${t.winner} ${kt("wins")}`,"\u{1F3C6}\u{1F47B}",!0):Ai(kt("draw"),"\u{1F47B}\u{1F47B}"),oe.celebrate(),Xu();else{lt("endTitle").textContent=n?kt("endTitleQuit"):kt("endTitle"),lt("endScore").textContent=Qi(t.score),lt("endStars").textContent="\u2B50".repeat(t.stars)+"\u2606".repeat(Math.max(0,t.maxStars-t.stars));let e=t.score>_.best&&t.score>0;e?(_.best=t.score,Re.set("gm-best",_.best),oe.newBest()):oe.celebrate(),lt("newBest").classList.toggle("hidden",!e),lt("rank").textContent="\u{1F47B} "+Rc(t.score),lt("stPairs").textContent=t.pairs,lt("stMoves").textContent=t.moves,lt("stTime").textContent=Cc(t.time),lt("stCombo").textContent="x"+t.bestCombo,lt("stBest").textContent=Qi(_.best),Xu()}lt("name").value=_.nameV,Oc(),Kn(()=>{lt("end").classList.remove("hidden")},900),Kn(()=>{_.state==="end"&&Zu()},1200)}function Zu(n){_.mode="solo",n||(_.state=_.state==="end"?"end":"attract"),_.busy=0,_.unlockT=0,_.peekT=0,_.swapAnim=null,Cr(!1),Ke&&(Ke.fogK=0),im({c:4,r:3}),_.aiT=.3,_.aiMem={}}function Ju(){let n=_.endR||Uc();return n.two||(n.name=(_.nameV||"Player").trim()||"Player"),n}function Oc(){lt("shareText").textContent=Pc(Ju(),_.shareLang),document.querySelectorAll("#shareLang button").forEach(n=>n.classList.toggle("on",n.dataset.sl===_.shareLang))}function LM(n){if(_.aiT-=n,_.aiT>0||_.busy||_.sel.length>=2||_.swapAnim)return;let t=_.cards.filter(i=>i.state==="down");if(!t.length){Zu(!0);return}let e;if(_.sel.length===1){let i=_.sel[0].type,s=t.find(r=>r.type===i);e=s&&Math.random()<.55?s:ys(t)}else e=ys(t);Nc(e),_.aiT=_.sel.length===1?.55:1.1}var jp=new Ma,tm=new nt,qa=null;function dm(n,t){tm.set(n/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),jp.setFromCamera(tm,Me);let e=jp.intersectObjects(_.cards.map(i=>i.stone.hit),!1);return e.length?_.cards.find(i=>i.stone.hit===e[0].object):null}Dc.addEventListener("pointermove",n=>{nn.px=n.clientX/window.innerWidth*2-1,nn.py=n.clientY/window.innerHeight*2-1,_.state==="play"&&(qa=dm(n.clientX,n.clientY),Dc.style.cursor=qa&&qa.state==="down"?"pointer":"default")});Dc.addEventListener("pointerdown",n=>{if(_.state!=="play")return;_.hintOn&&_.peekT<=0&&setTimeout(lm,700),n.pointerType!=="mouse"&&document.body.classList.add("touch");let t=dm(n.clientX,n.clientY);t&&(qa=t,_.focus=_.cards.indexOf(t),Nc(t))});var fm={on:!1};window.addEventListener("keydown",n=>{if(document.body.classList.contains("sheet")){n.key==="Escape"&&(n.preventDefault(),ts(!1));return}if(n.key==="?"){kc();return}if((n.key==="Enter"||n.key===" ")&&_.state==="attract"&&!_.tut&&!(document.activeElement&&/INPUT|BUTTON/.test(document.activeElement.tagName))){n.preventDefault(),Ja("solo",_.startLvl);return}if(_.state!=="play"||_.paused||_.tut)return;let t=n.key,e=_.focus;if(t==="ArrowLeft")e-=1;else if(t==="ArrowRight")e+=1;else if(t==="ArrowUp")e-=_.cols;else if(t==="ArrowDown")e+=_.cols;else if(t==="Enter"||t===" "){Nc(_.cards[_.focus]),n.preventDefault();return}else if(t==="Escape"||t==="p"){Qa(!0);return}else return;n.preventDefault(),fm.on=!0,_.focus=gn(e,0,_.cards.length-1)});function Ku(){_.mode==="two"?lt("scoreN").textContent=`${_.players[0].pairs} : ${_.players[1].pairs}`:lt("scoreN").textContent=Qi(_.total),lt("pairsN").textContent=`${_.pairsFound}/${_.pairs}`,lt("movesN").textContent=_.moves,lt("timeN").textContent=Cc(_.time),lt("comboN").textContent=_.combo>1?`${kt("combo")} x${_.combo}`:"",lt("comboN").classList.toggle("on",_.combo>1),lt("tp0").textContent=`${_.players[0].name} \xB7 ${_.players[0].pairs}`,lt("tp1").textContent=`${_.players[1].name} \xB7 ${_.players[1].pairs}`,lt("tp0").classList.toggle("on",_.turn===0),lt("tp1").classList.toggle("on",_.turn===1)}function pm(n){let t=n.clone().project(Me);return{x:(t.x+1)/2*window.innerWidth,y:(1-t.y)/2*window.innerHeight}}function Rr(n,t=2200){let e=lt("toast");e.textContent=n,e.classList.add("show"),clearTimeout(Rr._t),Rr._t=setTimeout(()=>e.classList.remove("show"),t)}async function mm(){let n=Pc(Ju(),_.shareLang),t=!1;try{navigator.clipboard&&window.isSecureContext!==!1&&(await navigator.clipboard.writeText(n),t=!0)}catch{}if(!t)try{let e=document.createElement("textarea");e.value=n,e.style.position="fixed",e.style.opacity="0",document.body.appendChild(e),e.select(),t=document.execCommand("copy"),e.remove()}catch{}return window.__gmLastShare=n,Rr(t?kt("copied"):kt("copyFail")),oe.ui(),t}function Bc(){An?An.render():pn.render(ji,Me)}function gm(){Bc();let n=document.createElement("canvas");n.width=1080,n.height=1350;let t=n.getContext("2d"),e=pn.domElement,i=e.width,s=e.height,r=Math.max(1080/i,1350/s);t.drawImage(e,(1080-i*r)/2,(1350-s*r)/2,i*r,s*r);let a=t.createLinearGradient(0,0,0,1350);a.addColorStop(0,"rgba(14,4,24,0.3)"),a.addColorStop(.45,"rgba(14,4,24,0.5)"),a.addColorStop(1,"rgba(14,4,24,0.88)"),t.fillStyle=a,t.fillRect(0,0,1080,1350);let o=_.endR||Uc(),l=Er(),c='Didot, "Bodoni 72", Georgia, "Times New Roman", serif',h='"Arial Black", Impact, sans-serif',d=(g,M,m,p,b,A,y=h,E="900",T=0)=>{t.font=`${E} ${p}px ${y}`,t.textAlign="center",t.textBaseline="middle","letterSpacing"in t&&(t.letterSpacing=T+"px"),t.shadowColor=A,t.shadowBlur=p*.45,t.fillStyle=b,t.fillText(g,M,m),t.shadowBlur=0,"letterSpacing"in t&&(t.letterSpacing="0px")},u=(g,M,m,p,b)=>{let A=t.createLinearGradient(0,g,0,M);return A.addColorStop(0,m),A.addColorStop(.5,p),A.addColorStop(1,b),A};d("GHOST",540,160,132,u(100,220,"#fffbe6","#ffd070","#e0600a"),"rgba(255,140,30,0.9)",c,"900",14),d("MEMORY",540,285,96,u(240,330,"#ffffff","#e2b8ff","#8a3cff"),"rgba(176,77,255,0.95)",c,"900",16);let f=(g,M,m,p,b)=>{t.beginPath(),t.moveTo(g+b,M),t.arcTo(g+m,M,g+m,M+p,b),t.arcTo(g+m,M+p,g,M+p,b),t.arcTo(g,M+p,g,M,b),t.arcTo(g,M,g+m,M,b),t.closePath()};return t.save(),t.fillStyle="rgba(34,12,52,0.62)",t.strokeStyle="rgba(255,190,120,0.5)",t.lineWidth=3,f(100,410,880,760,48),t.shadowColor="rgba(176,77,255,0.5)",t.shadowBlur=50,t.fill(),t.shadowBlur=0,t.stroke(),t.restore(),o.two?(d(kt("end2p",l),540,490,44,"#f2d0ff","rgba(176,77,255,0.9)"),d(o.winner?"\u{1F3C6} "+o.winner.toUpperCase():kt("draw",l),540,620,96,u(560,680,"#fff3c4","#ffb547","#ff6a0a"),"rgba(255,120,20,0.95)"),d(`${o.p[0].name}  ${o.p[0].pairs} : ${o.p[1].pairs}  ${o.p[1].name}`,540,760,56,"#ffffff","rgba(255,140,30,0.7)"),d("\u{1F47B}\u{1F47B} "+kt("pairs",l).toUpperCase(),540,860,32,"rgba(255,240,230,0.8)","rgba(0,0,0,0)",h,"800")):(d("\u{1F47B} "+o.name.toUpperCase(),540,485,44,"#f2d0ff","rgba(176,77,255,0.9)"),d(Qi(o.score,l),540,610,140,u(540,690,"#fff3c4","#ffb547","#ff6a0a"),"rgba(255,120,20,0.95)"),d("\u2B50".repeat(o.stars)+"\u2606".repeat(Math.max(0,o.maxStars-o.stars)),540,715,o.maxStars>9?40:54,"#ffd040","rgba(255,200,40,0.8)"),d(Rc(o.score,l),540,790,50,"#ffd9a8","rgba(255,140,30,0.9)"),[[o.pairs,kt("pairs",l)],[o.moves,kt("stMoves",l)],["x"+o.bestCombo,kt("stCombo",l)]].forEach(([M,m],p)=>{let b=250+p*290;t.fillStyle="rgba(255,255,255,0.08)",f(b-125,860,250,160,26),t.fill(),d(String(M),b,920,52,"#fff0d0","rgba(255,160,60,0.6)"),d(m.toUpperCase(),b,985,22,"rgba(255,240,230,0.8)","rgba(0,0,0,0)",h,"800")})),d(l==="de"?"Findest du alle Geister?":"Can you find every ghost?",540,1100,42,"#ffffff","rgba(255,120,240,0.8)",h,"800"),d("#GhostMemory",540,1265,40,"#ffb547","rgba(255,120,20,0.8)"),n}function DM(){let t=gm().toDataURL("image/png"),e=document.createElement("a");return e.href=t,e.download=`ghost-memory-${Ju().score||"duel"}.png`,document.body.appendChild(e),e.click(),e.remove(),window.__gmLastShot=t.length,Rr(kt("saved")),oe.ui(),t}function kc(n=null){_.tut=!0,_.tutThen=n,lt("tut").classList.remove("hidden")}function Qu(){if(_.tut=!1,lt("tut").classList.add("hidden"),Re.set("gm-tut",!0),oe.ui(),_.tutThen){let n=_.tutThen;_.tutThen=null,n()}}function xm(){let n=_.kids?Za:wr;_.startLvl>=n.length&&(_.startLvl=0),lt("levels").innerHTML=n.map((t,e)=>{let i=Re.get("gm-lv-"+(_.kids?"k":"")+e,0);return`<button data-l="${e}" class="${e===_.startLvl?"on":""}">${e+1}. ${kt(t.name)} <small>${t.c}\xD7${t.r}${i?" "+"\u2B50".repeat(i):""}</small></button>`}).join(""),lt("levels").querySelectorAll("button").forEach(t=>t.onclick=()=>{_.startLvl=+t.dataset.l,xm(),oe.ui()}),lt("playL").textContent=`${kt("level")} ${_.startLvl+1} \xB7 ${kt(n[_.startLvl].name)}`}function Ka(){if(Zp(_.kids),document.querySelectorAll("#langSeg button, #langSeg2 button").forEach(n=>n.classList.toggle("on",n.dataset.lang===Er())),_.state==="end"&&Oc(),xm(),zc(),lt("bestStart").textContent=Qi(_.best),_.state==="play"){let n=Ar();lt("lvName").textContent=`${kt("level")} ${_.lvl+1} \xB7 ${kt(n.name)}`}}function _m(n){_.kids=!!n,Re.set("gm-kids",_.kids),lt("chkKids").checked=_.kids,Ec(_.kids),document.body.classList.toggle("kids",_.kids),_.startLvl=0,Ka()}lt("btnPlay").onclick=()=>Ja("solo",_.startLvl);lt("btnPlay2").onclick=()=>Ja("two",Math.min(_.startLvl,1)||(_.kids,1));lt("btnReplay").onclick=()=>Ja(_.endR&&_.endR.two?"two":"solo",_.startLvl);lt("btnMenu").onclick=()=>{lt("end").classList.add("hidden"),lt("start").classList.remove("hidden"),_.state="attract",Ka(),oe.ui()};lt("btnNext").onclick=()=>um();lt("chkKids").onchange=n=>_m(n.target.checked);document.querySelectorAll("#langSeg button, #langSeg2 button").forEach(n=>n.onclick=()=>{Ac(n.dataset.lang),_.shareLang=Er(),Ka(),oe.ui()});document.querySelectorAll("#shareLang button").forEach(n=>n.onclick=()=>{_.shareLang=n.dataset.sl,Oc(),oe.ui()});document.querySelectorAll("#qualSeg button").forEach(n=>n.onclick=()=>{Ya(n.dataset.q,!0),zc(),oe.ui()});function ts(n){lt("settings").classList.toggle("hidden",!n),lt("btnSettings").setAttribute("aria-expanded",n?"true":"false"),document.body.classList.toggle("sheet",n),n&&zc()}lt("btnSettings").onclick=()=>{ts(!0),oe.ui()};lt("btnCloseSettings").onclick=()=>ts(!1);lt("btnSetX").onclick=()=>ts(!1);lt("settings").onclick=n=>{n.target.id==="settings"&&ts(!1)};lt("volMusic").oninput=n=>{Tc(n.target.value/100),Re.set("gm-vm",+n.target.value)};lt("volSfx").oninput=n=>{bc(n.target.value/100),Re.set("gm-vs",+n.target.value)};function ju(n){Uu(n),lt("chkMute").checked=n,lt("btnMute").textContent=n?"\u{1F507}":"\u{1F50A}",Re.set("gm-mute",!!n)}lt("chkMute").onchange=n=>ju(n.target.checked);lt("btnMute").onclick=()=>ju(!Fu());function Qa(n){_.state==="play"&&(_.paused=n,lt("pauseScr").classList.toggle("hidden",!n))}lt("btnPause").onclick=()=>Qa(!0);lt("btnResume").onclick=()=>Qa(!1);lt("btnQuit").onclick=()=>{Qa(!1),Fc(!0)};lt("btnShare").onclick=()=>mm();lt("btnShot").onclick=()=>DM();lt("btnHelp").onclick=()=>{ts(!1),kc()};lt("btnHelp2").onclick=()=>kc();lt("btnTutGo").onclick=()=>Qu();lt("btnTutSkip").onclick=()=>Qu();lt("name").oninput=n=>{_.nameV=n.target.value,Re.set("gm-name",_.nameV),Oc()};document.addEventListener("visibilitychange",()=>{document.hidden&&Qa(!0)});window.addEventListener("resize",em);var Ne={n:0,t0:0,ema:60,slow:0,decided:!1,samples:0},qu=n=>kt("q_"+n);function zc(){lt("qualHint").textContent=`${kt("suggested")}: ${qu(vm())} (${Math.round(Ne.ema)} fps)`}function vm(){let n=Ne.ema;return n>=56?Math.max(window.screen.width,window.screen.height)>=1400&&(window.devicePixelRatio||1)<=2?"ultra":"high":n>=42?"high":n>=28?"mid":"low"}function NM(n){if(Ne.n++,Ne.t0||(Ne.t0=n),n-Ne.t0>=1e3){let t=Ne.n*1e3/(n-Ne.t0);if(Ne.ema=Ne.decided?Ne.ema*.6+t*.4:t,Ne.n=0,Ne.t0=n,Ne.samples++,zc(),!Ne.decided&&Ne.samples>=3&&(Ne.decided=!0,!_.qualityUser&&!window.__gmNoAutoQ)){let e=vm();e!==Ts()&&(Ya(e),_.state==="play"&&Rr(`${kt("suggested")}: ${qu(e)} (${Math.round(Ne.ema)} fps)`))}if(Ne.decided&&Ne.ema<24&&Ts()!=="low"&&!window.__gmNoAutoQ){if(Ne.slow++,Ne.slow>=4){Ne.slow=0;let e=["low","mid","high","ultra"],i=e[Math.max(0,e.indexOf(Ts())-1)];Ya(i),Rr(`${kt("fpsLow")} ${qu(i)}`)}}else Ne.slow=0}}function UM(n){_.clock+=n;let t=_.state==="play"&&!_.paused&&!_.tut;_.state==="play"&&(_.paused||_.tut)&&(n=0),SM(n),_.peekT>0&&!_.paused&&!_.tut&&(_.peekT-=n,_.peekT<=0&&(_.peekT=0,cm())),_.evalT>0&&(_.evalT-=n,_.evalT<=0&&(_.evalT=0,AM())),_.unlockT>0&&(_.unlockT-=n,_.unlockT<=0&&(_.unlockT=0,_.busy=0,_.state==="play"&&Ar().swap&&_.swapCd<=0&&(_.swapCd=st(3,5)|0,am()))),t&&_.peekT<=0&&_.pairsFound<_.pairs&&(_.time+=n,Ar().fog&&(_.fogT-=n,_.fogT<=0&&(Cr(!_.fogOn),_.fogT=_.fogOn?14:10))),Ke&&(Ke.fogK=mc(Ke.fogK,_.fogOn?1:0,1.5,n)),(_.state==="attract"||_.state==="end")&&LM(n),PM(n),CM(n);for(let e of _.cards)e.stone.hoverOn=_.state==="play"&&(e===qa||fm.on&&_.cards[_.focus]===e)&&e.state==="down",EM(e,n);_.state==="play"&&Ku()}function td(n){UM(n),rm(Qp),Me.position.lerp(Qp,1-Math.exp(-2.5*n)),Rn.shakeAmp>.001&&Me.position.add(new C(st(-1,1),st(-1,1),0).multiplyScalar(Rn.shakeAmp*.3)),Me.lookAt(nn.look),Tp(Ke,n,Me),Np(Rn,n);for(let t of On.pops)t.t+=n;On.pops=On.pops.filter(t=>t.t<t.life)}var Yu=performance.now();function ym(n){requestAnimationFrame(ym);let t=Math.min(.05,Math.max(0,(n-Yu)/1e3));Yu=n,NM(n),!window.__gmHold&&(td(t),Bc(),wu(On,0,0,On.w/2,On.h/2))}function FM(){Ac(Er(),!1),lt("n1").value=Re.get("gm-n1","Player 1"),lt("n2").value=Re.get("gm-n2","Player 2");let n=Re.get("gm-vm",60),t=Re.get("gm-vs",90);lt("volMusic").value=n,lt("volSfx").value=t,Tc(n/100),bc(t/100),ju(!!Re.get("gm-mute",!1)),lt("chkKids").checked=_.kids,Ec(_.kids),document.body.classList.toggle("kids",_.kids),Ya(Ts()),Ka(),Zu();for(let e=0;e<150;e++)td(1/30);sm(),Bc(),document.body.classList.add("ready"),requestAnimationFrame(e=>{Yu=e,ym(e)})}window.__gm={S:_,camera:Me,renderer:pn,scene:ji,get W(){return Ke},LEVELS:wr,KLEVELS:Za,start:(n="solo",t=0)=>Ja(n,t),flip:n=>Nc(_.cards[n]),applyQuality:Ya,setKids:_m,setLang:n=>{Ac(n),Ka()},cards:()=>_.cards.map(n=>({i:n.i,type:n.type,state:n.state,mode:n.mode})),pairOf:n=>_.cards.findIndex((t,e)=>e!==n&&t.type===_.cards[n].type),mismatchOf:n=>_.cards.findIndex((t,e)=>e!==n&&t.type!==_.cards[n].type&&t.state==="down"),ready:()=>!_.busy&&_.peekT<=0&&!_.swapAnim&&_.sel.length===0&&_.evalT<=0,skipPeek:()=>{_.peekT>0&&(_.peekT=0,cm())},swap:()=>am(!0),fog:n=>Cr(!!n),nextLevel:um,endGame:Fc,levelComplete:hm,screenOf:n=>{let t=_.cards[n];return pm(new C(t.stone.root.position.x,.7,t.stone.root.position.z))},snap:()=>({state:_.state,mode:_.mode,lvl:_.lvl,cols:_.cols,rows:_.rows,n:_.cards.length,pairs:_.pairs,found:_.pairsFound,moves:_.moves,time:_.time,combo:_.combo,bestCombo:_.bestCombo,score:_.score,total:_.total,turn:_.turn,players:_.players.map(n=>({...n})),fog:_.fogOn,fogK:Ke?Ke.fogK:0,peek:_.peekT,busy:_.busy,kids:_.kids,gold:_.gold,log:{..._.log},swapping:!!_.swapAnim}),sim:(n=1,t=1/60)=>{for(let e=0;e<n;e++)td(t);return!0},render:()=>(Bc(),wu(On,0,0,On.w/2,On.h/2),!0),hold:n=>{window.__gmHold=!!n},shareText:n=>Pc(_.endR||Uc(),n||_.shareLang),copyShare:mm,makeShot:()=>gm().toDataURL("image/png"),audioState:()=>Ou(),geo:()=>({...pn.info.memory}),sheet:n=>ts(n),tutOpen:kc,tutClose:Qu,sounds:()=>Bu().then(n=>({n,names:ku()})),sfx:oe,audio:zu,quality:()=>Ts(),fps:()=>Ne.ema,drawCalls:()=>pn.info.render.calls,lineup:()=>{nm();let n=[...Mu,"gold"];return n.forEach((t,e)=>{let i=Ga(t);i.root.position.set((e%8-3.5)*1.3,1,(e/8|0)*1.6-.8),Es.add(i.root),_.cards.push({i:e,type:t,stone:bu(0),gh:i,state:"x",mode:"x",t:0})}),_.lineupMode=!0,n.length}};FM();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
