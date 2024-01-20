import{G as re}from"./index.4a6444ac.js";var Gt={exports:{}};/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.9.2
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2023
 * @license MIT
 */(function(A){(function(){var v="input is invalid type",wt="finalize already called",k=typeof window=="object",p=k?window:{};p.JS_SHA3_NO_WINDOW&&(k=!1);var Vt=!k&&typeof self=="object",Yt=!p.JS_SHA3_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;Yt?p=re:Vt&&(p=self);for(var Lt=!p.JS_SHA3_NO_COMMON_JS&&!0&&A.exports,Mt=!p.JS_SHA3_NO_ARRAY_BUFFER&&typeof ArrayBuffer!="undefined",b="0123456789abcdef".split(""),$t=[31,7936,2031616,520093696],Nt=[4,1024,262144,67108864],Xt=[1,256,65536,16777216],Zt=[6,1536,393216,100663296],d=[0,8,16,24],Dt=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],gt=[224,256,384,512],Et=[128,256],Ht=["hex","buffer","arrayBuffer","array","digest"],zt={128:168,256:136},qt=p.JS_SHA3_NO_NODE_JS||!Array.isArray?function(t){return Object.prototype.toString.call(t)==="[object Array]"}:Array.isArray,Qt=Mt&&(p.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)?function(t){return typeof t=="object"&&t.buffer&&t.buffer.constructor===ArrayBuffer}:ArrayBuffer.isView,Ot=function(t){var e=typeof t;if(e==="string")return[t,!0];if(e!=="object"||t===null)throw new Error(v);if(Mt&&t.constructor===ArrayBuffer)return[new Uint8Array(t),!1];if(!qt(t)&&!Qt(t))throw new Error(v);return[t,!1]},Kt=function(t){return Ot(t)[0].length===0},Jt=function(t,e,r){return function(n){return new h(t,e,t).update(n)[r]()}},Pt=function(t,e,r){return function(n,a){return new h(t,e,a).update(n)[r]()}},Ut=function(t,e,r){return function(n,a,i,f){return x["cshake"+t].update(n,a,i,f)[r]()}},mt=function(t,e,r){return function(n,a,i,f){return x["kmac"+t].update(n,a,i,f)[r]()}},C=function(t,e,r,n){for(var a=0;a<Ht.length;++a){var i=Ht[a];t[i]=e(r,n,i)}return t},Tt=function(t,e){var r=Jt(t,e,"hex");return r.create=function(){return new h(t,e,t)},r.update=function(n){return r.create().update(n)},C(r,Jt,t,e)},st=function(t,e){var r=Pt(t,e,"hex");return r.create=function(n){return new h(t,e,n)},r.update=function(n,a){return r.create(a).update(n)},C(r,Pt,t,e)},te=function(t,e){var r=zt[t],n=Ut(t,e,"hex");return n.create=function(a,i,f){return Kt(i)&&Kt(f)?x["shake"+t].create(a):new h(t,e,a).bytepad([i,f],r)},n.update=function(a,i,f,o){return n.create(i,f,o).update(a)},C(n,Ut,t,e)},ee=function(t,e){var r=zt[t],n=mt(t,e,"hex");return n.create=function(a,i,f){return new It(t,e,i).bytepad(["KMAC",f],r).bytepad([a],r)},n.update=function(a,i,f,o){return n.create(a,f,o).update(i)},C(n,mt,t,e)},jt=[{name:"keccak",padding:Xt,bits:gt,createMethod:Tt},{name:"sha3",padding:Zt,bits:gt,createMethod:Tt},{name:"shake",padding:$t,bits:Et,createMethod:st},{name:"cshake",padding:Nt,bits:Et,createMethod:te},{name:"kmac",padding:Nt,bits:Et,createMethod:ee}],x={},F=[],y=0;y<jt.length;++y)for(var _=jt[y],w=_.bits,S=0;S<w.length;++S){var Rt=_.name+"_"+w[S];if(F.push(Rt),x[Rt]=_.createMethod(w[S],_.padding),_.name!=="sha3"){var Wt=_.name+w[S];F.push(Wt),x[Wt]=x[Rt]}}function h(t,e,r){this.blocks=[],this.s=[],this.padding=e,this.outputBits=r,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(t<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=r>>5,this.extraBytes=(r&31)>>3;for(var n=0;n<50;++n)this.s[n]=0}h.prototype.update=function(t){if(this.finalized)throw new Error(wt);var e=Ot(t);t=e[0];for(var r=e[1],n=this.blocks,a=this.byteCount,i=t.length,f=this.blockCount,o=0,l=this.s,u,c;o<i;){if(this.reset)for(this.reset=!1,n[0]=this.block,u=1;u<f+1;++u)n[u]=0;if(r)for(u=this.start;o<i&&u<a;++o)c=t.charCodeAt(o),c<128?n[u>>2]|=c<<d[u++&3]:c<2048?(n[u>>2]|=(192|c>>6)<<d[u++&3],n[u>>2]|=(128|c&63)<<d[u++&3]):c<55296||c>=57344?(n[u>>2]|=(224|c>>12)<<d[u++&3],n[u>>2]|=(128|c>>6&63)<<d[u++&3],n[u>>2]|=(128|c&63)<<d[u++&3]):(c=65536+((c&1023)<<10|t.charCodeAt(++o)&1023),n[u>>2]|=(240|c>>18)<<d[u++&3],n[u>>2]|=(128|c>>12&63)<<d[u++&3],n[u>>2]|=(128|c>>6&63)<<d[u++&3],n[u>>2]|=(128|c&63)<<d[u++&3]);else for(u=this.start;o<i&&u<a;++o)n[u>>2]|=t[o]<<d[u++&3];if(this.lastByteIndex=u,u>=a){for(this.start=u-a,this.block=n[f],u=0;u<f;++u)l[u]^=n[u];B(l),this.reset=!0}else this.start=u}return this},h.prototype.encode=function(t,e){var r=t&255,n=1,a=[r];for(t=t>>8,r=t&255;r>0;)a.unshift(r),t=t>>8,r=t&255,++n;return e?a.push(n):a.unshift(n),this.update(a),a.length},h.prototype.encodeString=function(t){var e=Ot(t);t=e[0];var r=e[1],n=0,a=t.length;if(r)for(var i=0;i<t.length;++i){var f=t.charCodeAt(i);f<128?n+=1:f<2048?n+=2:f<55296||f>=57344?n+=3:(f=65536+((f&1023)<<10|t.charCodeAt(++i)&1023),n+=4)}else n=a;return n+=this.encode(n*8),this.update(t),n},h.prototype.bytepad=function(t,e){for(var r=this.encode(e),n=0;n<t.length;++n)r+=this.encodeString(t[n]);var a=(e-r%e)%e,i=[];return i.length=a,this.update(i),this},h.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex,r=this.blockCount,n=this.s;if(t[e>>2]|=this.padding[e&3],this.lastByteIndex===this.byteCount)for(t[0]=t[r],e=1;e<r+1;++e)t[e]=0;for(t[r-1]|=2147483648,e=0;e<r;++e)n[e]^=t[e];B(n)}},h.prototype.toString=h.prototype.hex=function(){this.finalize();for(var t=this.blockCount,e=this.s,r=this.outputBlocks,n=this.extraBytes,a=0,i=0,f="",o;i<r;){for(a=0;a<t&&i<r;++a,++i)o=e[a],f+=b[o>>4&15]+b[o&15]+b[o>>12&15]+b[o>>8&15]+b[o>>20&15]+b[o>>16&15]+b[o>>28&15]+b[o>>24&15];i%t===0&&(B(e),a=0)}return n&&(o=e[a],f+=b[o>>4&15]+b[o&15],n>1&&(f+=b[o>>12&15]+b[o>>8&15]),n>2&&(f+=b[o>>20&15]+b[o>>16&15])),f},h.prototype.arrayBuffer=function(){this.finalize();var t=this.blockCount,e=this.s,r=this.outputBlocks,n=this.extraBytes,a=0,i=0,f=this.outputBits>>3,o;n?o=new ArrayBuffer(r+1<<2):o=new ArrayBuffer(f);for(var l=new Uint32Array(o);i<r;){for(a=0;a<t&&i<r;++a,++i)l[i]=e[a];i%t===0&&B(e)}return n&&(l[a]=e[a],o=o.slice(0,f)),o},h.prototype.buffer=h.prototype.arrayBuffer,h.prototype.digest=h.prototype.array=function(){this.finalize();for(var t=this.blockCount,e=this.s,r=this.outputBlocks,n=this.extraBytes,a=0,i=0,f=[],o,l;i<r;){for(a=0;a<t&&i<r;++a,++i)o=i<<2,l=e[a],f[o]=l&255,f[o+1]=l>>8&255,f[o+2]=l>>16&255,f[o+3]=l>>24&255;i%t===0&&B(e)}return n&&(o=i<<2,l=e[a],f[o]=l&255,n>1&&(f[o+1]=l>>8&255),n>2&&(f[o+2]=l>>16&255)),f};function It(t,e,r){h.call(this,t,e,r)}It.prototype=new h,It.prototype.finalize=function(){return this.encode(this.outputBits,!0),h.prototype.finalize.call(this)};var B=function(t){var e,r,n,a,i,f,o,l,u,c,E,O,R,I,M,N,D,g,H,z,K,J,P,U,m,T,j,W,G,V,Y,L,$,X,Z,q,Q,s,tt,et,rt,nt,at,ot,it,ft,ut,ct,ht,lt,pt,bt,dt,vt,xt,yt,At,kt,_t,Ft,St,Bt,Ct;for(n=0;n<48;n+=2)a=t[0]^t[10]^t[20]^t[30]^t[40],i=t[1]^t[11]^t[21]^t[31]^t[41],f=t[2]^t[12]^t[22]^t[32]^t[42],o=t[3]^t[13]^t[23]^t[33]^t[43],l=t[4]^t[14]^t[24]^t[34]^t[44],u=t[5]^t[15]^t[25]^t[35]^t[45],c=t[6]^t[16]^t[26]^t[36]^t[46],E=t[7]^t[17]^t[27]^t[37]^t[47],O=t[8]^t[18]^t[28]^t[38]^t[48],R=t[9]^t[19]^t[29]^t[39]^t[49],e=O^(f<<1|o>>>31),r=R^(o<<1|f>>>31),t[0]^=e,t[1]^=r,t[10]^=e,t[11]^=r,t[20]^=e,t[21]^=r,t[30]^=e,t[31]^=r,t[40]^=e,t[41]^=r,e=a^(l<<1|u>>>31),r=i^(u<<1|l>>>31),t[2]^=e,t[3]^=r,t[12]^=e,t[13]^=r,t[22]^=e,t[23]^=r,t[32]^=e,t[33]^=r,t[42]^=e,t[43]^=r,e=f^(c<<1|E>>>31),r=o^(E<<1|c>>>31),t[4]^=e,t[5]^=r,t[14]^=e,t[15]^=r,t[24]^=e,t[25]^=r,t[34]^=e,t[35]^=r,t[44]^=e,t[45]^=r,e=l^(O<<1|R>>>31),r=u^(R<<1|O>>>31),t[6]^=e,t[7]^=r,t[16]^=e,t[17]^=r,t[26]^=e,t[27]^=r,t[36]^=e,t[37]^=r,t[46]^=e,t[47]^=r,e=c^(a<<1|i>>>31),r=E^(i<<1|a>>>31),t[8]^=e,t[9]^=r,t[18]^=e,t[19]^=r,t[28]^=e,t[29]^=r,t[38]^=e,t[39]^=r,t[48]^=e,t[49]^=r,I=t[0],M=t[1],ft=t[11]<<4|t[10]>>>28,ut=t[10]<<4|t[11]>>>28,W=t[20]<<3|t[21]>>>29,G=t[21]<<3|t[20]>>>29,Ft=t[31]<<9|t[30]>>>23,St=t[30]<<9|t[31]>>>23,nt=t[40]<<18|t[41]>>>14,at=t[41]<<18|t[40]>>>14,X=t[2]<<1|t[3]>>>31,Z=t[3]<<1|t[2]>>>31,N=t[13]<<12|t[12]>>>20,D=t[12]<<12|t[13]>>>20,ct=t[22]<<10|t[23]>>>22,ht=t[23]<<10|t[22]>>>22,V=t[33]<<13|t[32]>>>19,Y=t[32]<<13|t[33]>>>19,Bt=t[42]<<2|t[43]>>>30,Ct=t[43]<<2|t[42]>>>30,vt=t[5]<<30|t[4]>>>2,xt=t[4]<<30|t[5]>>>2,q=t[14]<<6|t[15]>>>26,Q=t[15]<<6|t[14]>>>26,g=t[25]<<11|t[24]>>>21,H=t[24]<<11|t[25]>>>21,lt=t[34]<<15|t[35]>>>17,pt=t[35]<<15|t[34]>>>17,L=t[45]<<29|t[44]>>>3,$=t[44]<<29|t[45]>>>3,U=t[6]<<28|t[7]>>>4,m=t[7]<<28|t[6]>>>4,yt=t[17]<<23|t[16]>>>9,At=t[16]<<23|t[17]>>>9,s=t[26]<<25|t[27]>>>7,tt=t[27]<<25|t[26]>>>7,z=t[36]<<21|t[37]>>>11,K=t[37]<<21|t[36]>>>11,bt=t[47]<<24|t[46]>>>8,dt=t[46]<<24|t[47]>>>8,ot=t[8]<<27|t[9]>>>5,it=t[9]<<27|t[8]>>>5,T=t[18]<<20|t[19]>>>12,j=t[19]<<20|t[18]>>>12,kt=t[29]<<7|t[28]>>>25,_t=t[28]<<7|t[29]>>>25,et=t[38]<<8|t[39]>>>24,rt=t[39]<<8|t[38]>>>24,J=t[48]<<14|t[49]>>>18,P=t[49]<<14|t[48]>>>18,t[0]=I^~N&g,t[1]=M^~D&H,t[10]=U^~T&W,t[11]=m^~j&G,t[20]=X^~q&s,t[21]=Z^~Q&tt,t[30]=ot^~ft&ct,t[31]=it^~ut&ht,t[40]=vt^~yt&kt,t[41]=xt^~At&_t,t[2]=N^~g&z,t[3]=D^~H&K,t[12]=T^~W&V,t[13]=j^~G&Y,t[22]=q^~s&et,t[23]=Q^~tt&rt,t[32]=ft^~ct&lt,t[33]=ut^~ht&pt,t[42]=yt^~kt&Ft,t[43]=At^~_t&St,t[4]=g^~z&J,t[5]=H^~K&P,t[14]=W^~V&L,t[15]=G^~Y&$,t[24]=s^~et&nt,t[25]=tt^~rt&at,t[34]=ct^~lt&bt,t[35]=ht^~pt&dt,t[44]=kt^~Ft&Bt,t[45]=_t^~St&Ct,t[6]=z^~J&I,t[7]=K^~P&M,t[16]=V^~L&U,t[17]=Y^~$&m,t[26]=et^~nt&X,t[27]=rt^~at&Z,t[36]=lt^~bt&ot,t[37]=pt^~dt&it,t[46]=Ft^~Bt&vt,t[47]=St^~Ct&xt,t[8]=J^~I&N,t[9]=P^~M&D,t[18]=L^~U&T,t[19]=$^~m&j,t[28]=nt^~X&q,t[29]=at^~Z&Q,t[38]=bt^~ot&ft,t[39]=dt^~it&ut,t[48]=Bt^~vt&yt,t[49]=Ct^~xt&At,t[0]^=Dt[n],t[1]^=Dt[n+1]};if(Lt)A.exports=x;else for(y=0;y<F.length;++y)p[F[y]]=x[F[y]]})()})(Gt);var ne=Gt.exports;function oe(A){return/^(0x)?[0-9a-f]{40}$/i.test(A)}function ie(A){if(!A)return;let v=A.toLowerCase().replace("0x",""),wt=ne.keccak256(v),k="0x";for(let p=0;p<v.length;p++)parseInt(wt[p],16)>=8?k+=v[p].toUpperCase():k+=v[p];return k}export{oe as I,ie as t};
