// TinyColor v0.9.16
// https://github.com/bgrins/TinyColor
// 2013-08-10, Brian Grinstead, MIT License
(function(){var t=/^[\s,#]+/,n=/\s+$/,o=0,a=Math,A=a.round,h=a.min,k=a.max,j=a.random;function y(J,G){J=(J)?J:"";G=G||{};if(typeof J=="object"&&J.hasOwnProperty("_tc_id")){return J}var L=p(J);var H=L.r,K=L.g,M=L.b,N=L.a,I=A(100*N)/100,O=G.format||L.format;if(H<1){H=A(H)}if(K<1){K=A(K)}if(M<1){M=A(M)}return{ok:L.ok,format:O,_tc_id:o++,alpha:N,getAlpha:function(){return N},setAlpha:function(P){N=q(P);I=A(100*N)/100},toHsv:function(){var P=s(H,K,M);return{h:P.h*360,s:P.s,v:P.v,a:N}},toHsvString:function(){var Q=s(H,K,M);var S=A(Q.h*360),R=A(Q.s*100),P=A(Q.v*100);return(N==1)?"hsv("+S+", "+R+"%, "+P+"%)":"hsva("+S+", "+R+"%, "+P+"%, "+I+")"},toHsl:function(){var P=B(H,K,M);return{h:P.h*360,s:P.s,l:P.l,a:N}},toHslString:function(){var Q=B(H,K,M);var S=A(Q.h*360),R=A(Q.s*100),P=A(Q.l*100);return(N==1)?"hsl("+S+", "+R+"%, "+P+"%)":"hsla("+S+", "+R+"%, "+P+"%, "+I+")"},toHex:function(P){return z(H,K,M,P)},toHexString:function(P){return"#"+this.toHex(P)},toHex8:function(){return e(H,K,M,N)},toHex8String:function(){return"#"+this.toHex8()},toRgb:function(){return{r:A(H),g:A(K),b:A(M),a:N}},toRgbString:function(){return(N==1)?"rgb("+A(H)+", "+A(K)+", "+A(M)+")":"rgba("+A(H)+", "+A(K)+", "+A(M)+", "+I+")"},toPercentageRgb:function(){return{r:A(D(H,255)*100)+"%",g:A(D(K,255)*100)+"%",b:A(D(M,255)*100)+"%",a:N}},toPercentageRgbString:function(){return(N==1)?"rgb("+A(D(H,255)*100)+"%, "+A(D(K,255)*100)+"%, "+A(D(M,255)*100)+"%)":"rgba("+A(D(H,255)*100)+"%, "+A(D(K,255)*100)+"%, "+A(D(M,255)*100)+"%, "+I+")"},toName:function(){if(N===0){return"transparent"}return F[z(H,K,M,true)]||false},toFilter:function(S){var T="#"+e(H,K,M,N);var Q=T;var P=G&&G.gradientType?"GradientType = 1, ":"";if(S){var R=y(S);Q=R.toHex8String()}return"progid:DXImageTransform.Microsoft.gradient("+P+"startColorstr="+T+",endColorstr="+Q+")"},toString:function(T){var Q=!!T;T=T||this.format;var S=false;var P=!Q&&N<1&&N>0;var R=P&&(T==="hex"||T==="hex6"||T==="hex3"||T==="name");if(T==="rgb"){S=this.toRgbString()}if(T==="prgb"){S=this.toPercentageRgbString()}if(T==="hex"||T==="hex6"){S=this.toHexString()}if(T==="hex3"){S=this.toHexString(true)}if(T==="hex8"){S=this.toHex8String()}if(T==="name"){S=this.toName()}if(T==="hsl"){S=this.toHslString()}if(T==="hsv"){S=this.toHsvString()}if(R){return this.toRgbString()}return S||this.toHexString()}}}y.fromRatio=function(G,J){if(typeof G=="object"){var H={};for(var I in G){if(G.hasOwnProperty(I)){if(I==="a"){H[I]=G[I]}else{H[I]=g(G[I])}}}G=H}return y(G,J)};function p(H){var I={r:0,g:0,b:0};var G=1;var J=false;var K=false;if(typeof H=="string"){H=i(H)}if(typeof H=="object"){if(H.hasOwnProperty("r")&&H.hasOwnProperty("g")&&H.hasOwnProperty("b")){I=l(H.r,H.g,H.b);J=true;K=String(H.r).substr(-1)==="%"?"prgb":"rgb"}else{if(H.hasOwnProperty("h")&&H.hasOwnProperty("s")&&H.hasOwnProperty("v")){H.s=g(H.s);H.v=g(H.v);I=w(H.h,H.s,H.v);J=true;K="hsv"}else{if(H.hasOwnProperty("h")&&H.hasOwnProperty("s")&&H.hasOwnProperty("l")){H.s=g(H.s);H.l=g(H.l);I=m(H.h,H.s,H.l);J=true;K="hsl"}}}if(H.hasOwnProperty("a")){G=H.a}}G=q(G);return{ok:J,format:H.format||K,r:h(255,k(I.r,0)),g:h(255,k(I.g,0)),b:h(255,k(I.b,0)),a:G}}function l(I,H,G){return{r:D(I,255)*255,g:D(H,255)*255,b:D(G,255)*255}}function B(G,K,M){G=D(G,255);K=D(K,255);M=D(M,255);var N=k(G,K,M),I=h(G,K,M);var J,O,H=(N+I)/2;if(N==I){J=O=0}else{var L=N-I;O=H>0.5?L/(2-N-I):L/(N+I);switch(N){case G:J=(K-M)/L+(K<M?6:0);break;case K:J=(M-G)/L+2;break;case M:J=(G-K)/L+4;break}J/=6}return{h:J,s:O,l:H}}function m(L,O,K){var G,M,N;L=D(L,360);O=D(O,100);K=D(K,100);function J(R,Q,P){if(P<0){P+=1}if(P>1){P-=1}if(P<1/6){return R+(Q-R)*6*P}if(P<1/2){return Q}if(P<2/3){return R+(Q-R)*(2/3-P)*6}return R}if(O===0){G=M=N=K}else{var H=K<0.5?K*(1+O):K+O-K*O;var I=2*K-H;G=J(I,H,L+1/3);M=J(I,H,L);N=J(I,H,L-1/3)}return{r:G*255,g:M*255,b:N*255}}function s(G,J,L){G=D(G,255);J=D(J,255);L=D(L,255);var M=k(G,J,L),H=h(G,J,L);var I,O,N=M;var K=M-H;O=M===0?0:K/M;if(M==H){I=0}else{switch(M){case G:I=(J-L)/K+(J<L?6:0);break;case J:I=(L-G)/K+2;break;case L:I=(G-J)/K+4;break}I/=6}return{h:I,s:O,v:N}}function w(K,R,P){K=D(K,360)*6;R=D(R,100);P=D(P,100);var J=a.floor(K),M=K-J,I=P*(1-R),H=P*(1-M*R),Q=P*(1-(1-M)*R),O=J%6,G=[P,H,I,I,Q,P][O],L=[Q,P,P,H,I,I][O],N=[I,I,Q,P,P,H][O];return{r:G*255,g:L*255,b:N*255}}function z(J,I,G,K){var H=[f(A(J).toString(16)),f(A(I).toString(16)),f(A(G).toString(16))];if(K&&H[0].charAt(0)==H[0].charAt(1)&&H[1].charAt(0)==H[1].charAt(1)&&H[2].charAt(0)==H[2].charAt(1)){return H[0].charAt(0)+H[1].charAt(0)+H[2].charAt(0)}return H.join("")}function e(K,J,G,H){var I=[f(C(H)),f(A(K).toString(16)),f(A(J).toString(16)),f(A(G).toString(16))];return I.join("")}y.equals=function(H,G){if(!H||!G){return false}return y(H).toRgbString()==y(G).toRgbString()};y.random=function(){return y.fromRatio({r:j(),g:j(),b:j()})};y.desaturate=function(H,I){I=(I===0)?0:(I||10);var G=y(H).toHsl();G.s-=I/100;G.s=v(G.s);return y(G)};y.saturate=function(H,I){I=(I===0)?0:(I||10);var G=y(H).toHsl();G.s+=I/100;G.s=v(G.s);return y(G)};y.greyscale=function(G){return y.desaturate(G,100)};y.lighten=function(H,I){I=(I===0)?0:(I||10);var G=y(H).toHsl();G.l+=I/100;G.l=v(G.l);return y(G)};y.darken=function(H,I){I=(I===0)?0:(I||10);var G=y(H).toHsl();G.l-=I/100;G.l=v(G.l);return y(G)};y.complement=function(H){var G=y(H).toHsl();G.h=(G.h+180)%360;return y(G)};y.triad=function(H){var G=y(H).toHsl();var I=G.h;return[y(H),y({h:(I+120)%360,s:G.s,l:G.l}),y({h:(I+240)%360,s:G.s,l:G.l})]};y.tetrad=function(H){var G=y(H).toHsl();var I=G.h;return[y(H),y({h:(I+90)%360,s:G.s,l:G.l}),y({h:(I+180)%360,s:G.s,l:G.l}),y({h:(I+270)%360,s:G.s,l:G.l})]};y.splitcomplement=function(H){var G=y(H).toHsl();var I=G.h;return[y(H),y({h:(I+72)%360,s:G.s,l:G.l}),y({h:(I+216)%360,s:G.s,l:G.l})]};y.analogous=function(H,K,L){K=K||6;L=L||30;var G=y(H).toHsl();var J=360/L;var I=[y(H)];for(G.h=((G.h-(J*K>>1))+720)%360;--K;){G.h=(G.h+J)%360;I.push(y(G))}return I};y.monochromatic=function(I,L){L=L||6;var K=y(I).toHsv();var N=K.h,M=K.s,H=K.v;var J=[];var G=1/L;while(L--){J.push(y({h:N,s:M,v:H}));H=(H+G)%1}return J};y.readability=function(K,I){var J=y(K).toRgb();var H=y(I).toRgb();var G=(J.r*299+J.g*587+J.b*114)/1000;var M=(H.r*299+H.g*587+H.b*114)/1000;var L=(Math.max(J.r,H.r)-Math.min(J.r,H.r)+Math.max(J.g,H.g)-Math.min(J.g,H.g)+Math.max(J.b,H.b)-Math.min(J.b,H.b));return{brightness:Math.abs(G-M),color:L}};y.readable=function(H,G){var I=y.readability(H,G);return I.brightness>125&&I.color>500};y.mostReadable=function(N,M){var J=null;var H=0;var O=false;for(var L=0;L<M.length;L++){var I=y.readability(N,M[L]);var K=I.brightness>125&&I.color>500;var G=3*(I.brightness/125)+(I.color/500);if((K&&!O)||(K&&O&&G>H)||((!K)&&(!O)&&G>H)){O=K;H=G;J=y(M[L])}}return J};var r=y.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var F=y.hexNames=d(r);function d(I){var H={};for(var G in I){if(I.hasOwnProperty(G)){H[I[G]]=G}}return H}function q(G){G=parseFloat(G);if(isNaN(G)||G<0||G>1){G=1}return G}function D(I,G){if(u(I)){I="100%"}var H=E(I);I=h(G,k(0,parseFloat(I)));if(H){I=parseInt(I*G,10)/100}if((a.abs(I-G)<0.000001)){return 1}return(I%G)/parseFloat(G)}function v(G){return h(1,k(0,G))}function c(G){return parseInt(G,16)}function u(G){return typeof G=="string"&&G.indexOf(".")!=-1&&parseFloat(G)===1}function E(G){return typeof G==="string"&&G.indexOf("%")!=-1}function f(G){return G.length==1?"0"+G:""+G}function g(G){if(G<=1){G=(G*100)+"%"}return G}function C(G){return Math.round(parseFloat(G)*255).toString(16)}function x(G){return(c(G)/255)}var b=(function(){var K="[-\\+]?\\d+%?";var J="[-\\+]?\\d*\\.\\d+%?";var G="(?:"+J+")|(?:"+K+")";var I="[\\s|\\(]+("+G+")[,|\\s]+("+G+")[,|\\s]+("+G+")\\s*\\)?";var H="[\\s|\\(]+("+G+")[,|\\s]+("+G+")[,|\\s]+("+G+")[,|\\s]+("+G+")\\s*\\)?";return{rgb:new RegExp("rgb"+I),rgba:new RegExp("rgba"+H),hsl:new RegExp("hsl"+I),hsla:new RegExp("hsla"+H),hsv:new RegExp("hsv"+I),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}})();function i(H){H=H.replace(t,"").replace(n,"").toLowerCase();var G=false;if(r[H]){H=r[H];G=true}else{if(H=="transparent"){return{r:0,g:0,b:0,a:0,format:"name"}}}var I;if((I=b.rgb.exec(H))){return{r:I[1],g:I[2],b:I[3]}}if((I=b.rgba.exec(H))){return{r:I[1],g:I[2],b:I[3],a:I[4]}}if((I=b.hsl.exec(H))){return{h:I[1],s:I[2],l:I[3]}}if((I=b.hsla.exec(H))){return{h:I[1],s:I[2],l:I[3],a:I[4]}}if((I=b.hsv.exec(H))){return{h:I[1],s:I[2],v:I[3]}}if((I=b.hex8.exec(H))){return{a:x(I[1]),r:c(I[2]),g:c(I[3]),b:c(I[4]),format:G?"name":"hex8"}}if((I=b.hex6.exec(H))){return{r:c(I[1]),g:c(I[2]),b:c(I[3]),format:G?"name":"hex"}}if((I=b.hex3.exec(H))){return{r:c(I[1]+""+I[1]),g:c(I[2]+""+I[2]),b:c(I[3]+""+I[3]),format:G?"name":"hex"}}return false}if(typeof module!=="undefined"&&module.exports){module.exports=y}else{if(typeof define!=="undefined"){define(function(){return y})}else{window.tinycolor=y}}})();