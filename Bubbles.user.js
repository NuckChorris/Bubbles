// ==UserScript==
// @name           Bubbles
// @version        0.2.0
// @namespace      nuck
// @description    Desktop notifications for dAmn
// @include        *://chat.deviantart.com/chat/*
// @match          *://chat.deviantart.com/chat/*
// ==/UserScript==

/*
 * Clockwork Updater
 * https://github.com/nuckchorris/cwUpdater/
 * Minified by UglifyJS
 */
 
(function(a){a="("+a+")();";var b=document.createElement("script");b.setAttribute("type","application/javascript"),b.textContent=a,document.body.appendChild(b),document.body.removeChild(b)})(function(){if(!window.cwVer){var a=function(){function a(a,b){var g=a[0],h=a[1],i=a[2],j=a[3];g=c(g,h,i,j,b[0],7,-680876936),j=c(j,g,h,i,b[1],12,-389564586),i=c(i,j,g,h,b[2],17,606105819),h=c(h,i,j,g,b[3],22,-1044525330),g=c(g,h,i,j,b[4],7,-176418897),j=c(j,g,h,i,b[5],12,1200080426),i=c(i,j,g,h,b[6],17,-1473231341),h=c(h,i,j,g,b[7],22,-45705983),g=c(g,h,i,j,b[8],7,1770035416),j=c(j,g,h,i,b[9],12,-1958414417),i=c(i,j,g,h,b[10],17,-42063),h=c(h,i,j,g,b[11],22,-1990404162),g=c(g,h,i,j,b[12],7,1804603682),j=c(j,g,h,i,b[13],12,-40341101),i=c(i,j,g,h,b[14],17,-1502002290),h=c(h,i,j,g,b[15],22,1236535329),g=d(g,h,i,j,b[1],5,-165796510),j=d(j,g,h,i,b[6],9,-1069501632),i=d(i,j,g,h,b[11],14,643717713),h=d(h,i,j,g,b[0],20,-373897302),g=d(g,h,i,j,b[5],5,-701558691),j=d(j,g,h,i,b[10],9,38016083),i=d(i,j,g,h,b[15],14,-660478335),h=d(h,i,j,g,b[4],20,-405537848),g=d(g,h,i,j,b[9],5,568446438),j=d(j,g,h,i,b[14],9,-1019803690),i=d(i,j,g,h,b[3],14,-187363961),h=d(h,i,j,g,b[8],20,1163531501),g=d(g,h,i,j,b[13],5,-1444681467),j=d(j,g,h,i,b[2],9,-51403784),i=d(i,j,g,h,b[7],14,1735328473),h=d(h,i,j,g,b[12],20,-1926607734),g=e(g,h,i,j,b[5],4,-378558),j=e(j,g,h,i,b[8],11,-2022574463),i=e(i,j,g,h,b[11],16,1839030562),h=e(h,i,j,g,b[14],23,-35309556),g=e(g,h,i,j,b[1],4,-1530992060),j=e(j,g,h,i,b[4],11,1272893353),i=e(i,j,g,h,b[7],16,-155497632),h=e(h,i,j,g,b[10],23,-1094730640),g=e(g,h,i,j,b[13],4,681279174),j=e(j,g,h,i,b[0],11,-358537222),i=e(i,j,g,h,b[3],16,-722521979),h=e(h,i,j,g,b[6],23,76029189),g=e(g,h,i,j,b[9],4,-640364487),j=e(j,g,h,i,b[12],11,-421815835),i=e(i,j,g,h,b[15],16,530742520),h=e(h,i,j,g,b[2],23,-995338651),g=f(g,h,i,j,b[0],6,-198630844),j=f(j,g,h,i,b[7],10,1126891415),i=f(i,j,g,h,b[14],15,-1416354905),h=f(h,i,j,g,b[5],21,-57434055),g=f(g,h,i,j,b[12],6,1700485571),j=f(j,g,h,i,b[3],10,-1894986606),i=f(i,j,g,h,b[10],15,-1051523),h=f(h,i,j,g,b[1],21,-2054922799),g=f(g,h,i,j,b[8],6,1873313359),j=f(j,g,h,i,b[15],10,-30611744),i=f(i,j,g,h,b[6],15,-1560198380),h=f(h,i,j,g,b[13],21,1309151649),g=f(g,h,i,j,b[4],6,-145523070),j=f(j,g,h,i,b[11],10,-1120210379),i=f(i,j,g,h,b[2],15,718787259),h=f(h,i,j,g,b[9],21,-343485551),a[0]=k(g,a[0]),a[1]=k(h,a[1]),a[2]=k(i,a[2]),a[3]=k(j,a[3])}function b(a,b,c,d,e,f){return b=k(k(b,a),k(d,f)),k(b<<e|b>>>32-e,c)}function c(a,c,d,e,f,g,h){return b(c&d|~c&e,a,c,f,g,h)}function d(a,c,d,e,f,g,h){return b(c&e|d&~e,a,c,f,g,h)}function e(a,c,d,e,f,g,h){return b(c^d^e,a,c,f,g,h)}function f(a,c,d,e,f,g,h){return b(d^(c|~e),a,c,f,g,h)}function g(b){/[\x80-\xFF]/.test(b)&&(b=unescape(encodeURI(b))),txt="";var c=b.length,d=[1732584193,-271733879,-1732584194,271733878],e;for(e=64;e<=b.length;e+=64)a(d,h(b.substring(e-64,e)));b=b.substring(e-64);var f=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<b.length;e++)f[e>>2]|=b.charCodeAt(e)<<(e%4<<3);f[e>>2]|=128<<(e%4<<3);if(e>55){a(d,f);for(e=0;e<16;e++)f[e]=0}return f[14]=c*8,a(d,f),d}function h(a){var b=[],c;for(c=0;c<64;c+=4)b[c>>2]=a.charCodeAt(c)+(a.charCodeAt(c+1)<<8)+(a.charCodeAt(c+2)<<16)+(a.charCodeAt(c+3)<<24);return b}function i(a){var b="",c=0;for(;c<4;c++)b+=l[a>>c*8+4&15]+l[a>>c*8&15];return b}function j(a){for(var b=0;b<a.length;b++)a[b]=i(a[b]);return a.join("")}function k(a,b){return a+b&4294967295}var l="0123456789abcdef".split(""),m=function(a){return j(g(a))};if(m("hello")!="5d41402abc4b2a76b9719d911017c592")function k(a,b){var c=(a&65535)+(b&65535),d=(a>>16)+(b>>16)+(c>>16);return d<<16|c&65535}return m}();(function(a){function b(a){var b=a;return[b[1]||"",b[2]||"",b[3]||""].join(".")+(b[4]||"")+(b[5]||"")}function c(c){return c=a.parse(c),c?b(c):c}function d(b){return typeof b!="string"?null:a.parse(b)&&b.trim().replace(/^[v=]+/,"")}function e(a){return typeof a!="string"?null:a.match(D.parsePackage)&&a.trim()}function f(b){var c=(b||"").trim().replace(D.parseRange,a.rangeReplace).replace(G,H).split(/\s+/).join(" ").split("||").map(function(a){return a.split(" ").map(h).map(j).map(g).join(" ").trim()}).map(function(a){return a.trim().split(/\s+/).filter(function(a){return a.match(D.validComparator)})}).filter(function(a){return a.length});return c}function g(a){return a.trim().replace(E,F)}function h(a){return a.split(/\s+/).map(i).join(" ")}function i(a){return a.trim().replace(D.parseXRange,function(a,b,c,d,e,f){var g=!c||c.toLowerCase()==="x"||c==="*"||!d||d.toLowerCase()==="x"||d==="*"||!e||e.toLowerCase()==="x"||e==="*",h=a;if(b&&g)(!c||c==="*"||c.toLowerCase()==="x")&&(c=0),(!d||d==="*"||d.toLowerCase()==="x")&&(d=0),(!e||e==="*"||e.toLowerCase()==="x")&&(e=0),h=b+c+"."+d+"."+e+"-";else if(!c||c==="*"||c.toLowerCase()==="x")h="*";else if(!d||d==="*"||d.toLowerCase()==="x")h=">="+c+".0.0- <"+(+c+1)+".0.0-";else if(!e||e==="*"||e.toLowerCase()==="x")h=">="+c+"."+d+".0- <"+c+"."+(+d+1)+".0-";return h})}function j(a){return a.trim().replace(D.parseSpermy,function(a,b,c,d,e,f){if(b)throw new Error("Using '"+b+"' with ~ makes no sense. Don't do it.");return!c||c.toLowerCase()==="x"?"":!d||d.toLowerCase()==="x"?">="+c+".0.0- <"+(+c+1)+".0.0-":!e||e.toLowerCase()==="x"?">="+c+"."+d+".0- <"+c+"."+(+d+1)+".0-":(f=f||"-",">="+c+"."+d+"."+e+f+" <"+c+"."+(+d+1)+".0-")})}function k(a){a=g(a);var b=f(a);return b.length===0?null:b.map(function(a){return a.join(" ")}).join("||")}function l(a,b){return a.filter(function(a){return m(a,b)}).sort(n).pop()}function m(a,b){a=d(a);if(!a)return!1;b=f(b);for(var c=0,e=b.length;c<e;c++){var g=!1;for(var h=0,i=b[c].length;h<i;h++){var j=b[c][h],k=j.charAt(0)===">"?w:j.charAt(0)==="<"?p:!1,l=j.charAt(!!k)==="=",m=!!l+!!k;k||(l=!0),j=j.substr(m),j=j===""?j:d(j),g=j===""||l&&j===a||k&&k(a,j);if(!g)break}if(g)return!0}return!1}function n(a,b){var c=w(a,b);return c===null?0:c?1:-1}function o(a,b){return n(b,a)}function p(a,b){return w(b,a)}function q(a,b){return!p(a,b)}function r(a,b){return!w(a,b)}function s(a,b){return w(a,b)===null}function t(a,b){return w(a,b)!==null}function u(a,b,c){switch(b){case">":return w(a,c);case"<":return p(a,c);case">=":return q(a,c);case"<=":return r(a,c);case"==":return s(a,c);case"!=":return t(a,c);case"===":return a===c;case"!==":return a!==c;default:throw new Error("Y U NO USE VALID COMPARATOR!? "+b)}}function v(a){return a===undefined?-1:parseInt((a||"0").replace(/[^0-9]+/g,""),10)}function w(b,c){b=a.parse(b),c=a.parse(c);if(!b||!c)return!1;for(var d=1;d<5;d++){b[d]=v(b[d]),c[d]=v(c[d]);if(b[d]>c[d])return!0;if(b[d]!==c[d])return!1}var e=b[5]||"",f=c[5]||"";return e===f?null:e?f?e>f:!1:!0}function x(c,d){c=a.parse(c);if(!c)return null;var e={major:1,minor:2,patch:3,build:4},f=e[d];if(f===undefined)return null;var g=v(c[f]);c[f]=g===-1?1:g+1;for(var h=f+1;h<5;h++)v(c[h])!==-1&&(c[h]="0");return c[4]&&(c[4]="-"+c[4]),c[5]="",b(c)}var y="\\s*[v=]*\\s*([0-9]+)\\.([0-9]+)\\.([0-9]+)(-[0-9]+-?)?([a-zA-Z-][a-zA-Z0-9-.:]*)?",z="^((<|>)?=?)s*("+y+")$|^$",A="[v=]*([0-9]+|x|X|\\*)(?:\\.([0-9]+|x|X|\\*)(?:\\.([0-9]+|x|X|\\*)([a-zA-Z-][a-zA-Z0-9-.:]*)?)?)?",B="((?:<|>)?=?)?\\s*"+A,C="(?:~>?)"+B,D=a.expressions={parse:new RegExp("^\\s*"+y+"\\s*$"),parsePackage:new RegExp("^\\s*([^/]+)[-@]("+y+")\\s*$"),parseRange:new RegExp("^\\s*("+y+")\\s+-\\s+("+y+")\\s*$"),validComparator:new RegExp("^"+z+"$"),parseXRange:new RegExp("^"+B+"$"),parseSpermy:new RegExp("^"+C+"$")};Object.getOwnPropertyNames(D).forEach(function(b){a[b]=function(a){return(""+(a||"")).match(D[b])}}),a.rangeReplace=">=$1 <=$7",a.clean=c,a.compare=n,a.rcompare=o,a.satisfies=m,a.gt=w,a.gte=q,a.lt=p,a.lte=r,a.eq=s,a.neq=t,a.cmp=u,a.inc=x,a.valid=d,a.validPackage=e,a.validRange=k,a.maxSatisfying=l,a.replaceStars=g,a.toComparators=f;var E=/(<|>)?=?\s*\*/g,F="",G=new RegExp("((<|>)?=?)\\s*("+y+"|"+A+")","g"),H="$1$3"})(typeof exports=="object"?exports:semver={});var b=function(){var a=function(a){for(var b=0,c=a.length;b<c;b++){var d=a[b].string,e=a[b].prop;if(d){if(d.indexOf(a[b].subString)!=-1)return a[b].identity}else if(e)return a[b].identity}},b=[{string:navigator.userAgent,subString:"Chrome",identity:"chrome"},{string:navigator.vendor,subString:"Apple",identity:"safari"},{prop:window.opera,identity:"opera"},{string:navigator.vendor,subString:"KDE",identity:"konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"firefox"},{string:navigator.vendor,subString:"Camino",identity:"camino"},{string:navigator.userAgent,subString:"Gecko",identity:"mozilla"}];return a(b)||"An unknown browser"},c=function(){var a=/\{([a-zA-Z\.0-9]*)\}/mg,b=function(a,b){var c=b.split(".");for(var d=0,e=c.length;d<e;++d){if(!a[c[d]]||a[c[d]]===null)return null;a=a[c[d]]}return a};return function(c,d){if(arguments.length===1)return c;if(arguments.length===2){if(arguments[1]==null)return c;if(typeof arguments[1]=="object")var d=arguments[1];else if(typeof arguments[1]=="Array")var d=arguments[1];else var d=[arguments[1]]}else{if(!(arguments.length>1))return c;var d=Array.slice.call(arguments,1)}return c.replace(a,function(a,c){return b(d,c)||a})}}(),d=function(b){var c=jQuery("<iframe>");c.attr("src",b).hide(),jQuery("body").append(c)};window.cwVer=function(a,b){if(!semver.valid(b))throw new Error("Invalid version");this.url=a,this.version=b,this.load(function(a){semver.gt(a.version,b)&&cwVer.addItem(a)})},cwVer.prototype.load=function(b){var c=a(this.url),d=document.createElement("script");d.setAttribute("type","application/javascript"),d.setAttribute("src",this.url),cwVer.callbacks[c]=function(a){b(a),delete cwVer.callbacks[c],document.body.removeChild(d)},document.body.appendChild(d)},cwVer.menu=jQuery('<td class="oh-hasmenu oh-hashover oh-keep oh-hasbutton" id="cwv-menu"><div class="oh-menuctrl"><div class="oh-menu"><div class="oh-hr"></div><a class="mi" id="cwv-updateAll" style="cursor:pointer"><i class="i13"></i><b>Update All</b></a></div></div><a href="#" class="oh-l" style="color:#C0D0CA !important;"><i class="icon h-icon i0" style="background-image: url(http://i39.tinypic.com/10prqbo.png) !important;"></i> Updates</a></td>'),jQuery(".oh-gap").after(cwVer.menu.hide()),jQuery("#cwv-updateAll",cwVer.menu).unbind("click").click(function(){for(var a=0,b=cwVer.updates.length;a<b;a++)d(cwVer.updates[a].url);return!1}),cwVer.itemTemplate='<a class="mi" href="{url}"><i class="i0" style="background-image: url({icon});"></i><span style="float: right; margin-right: 5px; color: #afc81c; background: transparent;" class="cwv-newversion">{version}</span>{name}</a>',cwVer.menuList=jQuery(".oh-menu",cwVer.menu),cwVer.browser=b(),cwVer.addItem=function(a){cwVer.updates.length===0&&cwVer.menu.show(),a.icon||(a.icon="http://i42.tinypic.com/25k6kc8.png"),a.url=a.downloads[cwVer.browser];if(a.url){cwVer.updates.push(a);var b=$(c(cwVer.itemTemplate,a));cwVer.menuList.prepend(b)}},cwVer.callbacks={},cwVer.updates=[]}})

var contentEval = function (source) {
	if ('function' == typeof source) {
		source = '(' + source + ')();'
	}
	var script = document.createElement('script');
	script.setAttribute("type", "application/javascript");
	script.textContent = source;
	document.body.appendChild(script);
	document.body.removeChild(script);
}
contentEval(function () {

	new cwVer('http://nuckchorris.github.com/Bubbles/cwVer.js', '0.2.0');

	var bootstrap = function (test, limit, spacing) {
		var i = 0
		  , limit = limit || 20
		  , spacing = spacing || 1000;

		return function readyCheck (cb) {
			var interval = setInterval(function () {
				if (test() === true) {
					if (limit !== 0) {
						clearInterval(interval);
					}
					cb();
				}
				if (limit !== 0 && i++ >= limit) {
					clearInterval(interval);
					cb(new Error('Not ready after '+limit+' tries.'));
				}
			}, spacing);
		}
	};

	bootstrap(function () {
		return !!window.MiddleMan;
	})(function (err) {
		var focus = true;
		$(window).on('blur', function () {
			focus = false;
		}).on('focus', function () {
			focus = true;
		});

		if (window.webkitNotifications.checkPermission() !== 0) {
			$('<style>').text("#bubbles_dialog {position: absolute; left: 50%; top: 50%; margin: -60px 0 0 -200px; text-align: center; width: 360px; height: 80px; border-radius: 5px; padding: 20px; text-shadow: 0 1px 0 white; background-color: #C7C7C7; background: -moz-linear-gradient(top,  #D1D1D1 0%, #B1B1B1 100%); background: -webkit-linear-gradient(top, #D1D1D1 0%,#B1B1B1 100%); background: linear-gradient(to bottom,  #D1D1D1 0%,#B1B1B1 100%); border: 1px solid #C5C5C5; border-top: 1px solid white; border-bottom: 1px solid silver; box-shadow: 0 0 3px rgba(0, 0, 0, 0.5); } #bubbles_dialog2 {display: block; width: 100%; height: 20px; position: absolute; top: 50%; margin-top: -10px; left: 0; } #bubbles_dialog .smbutton {color: #02071F; text-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px, rgba(255, 255, 255, 0.1) 0px 1px 1px; margin-top: 15px; } #bubbles_overlay {position: absolute; top: 0; left: 0; height: 100%; width: 100%; z-index: 200; background: rgba(0, 0, 0, 0.5); }").appendTo('head');

			var overlay = $('<div id="bubbles_overlay">').hide();
			var dialog = $('<div id="bubbles_dialog">');
			var wrapperA = $('<span id="bubbles_dialog1">');
			var button = $('<a class="smbutton smbutton-blue smbutton-big"><span>NOTIFIZE ME CAP\'N!<b></b></span></a>');
			var text = $(document.createTextNode('To get desktop notifications, you must give permission.  Clicking below will trigger a request for permission.'));
			var wrapperB = $('<span id="bubbles_dialog2">Now click "allow" to gimme permissions!</span>').hide();

			dialog.appendTo(overlay);

			wrapperA.appendTo(dialog);
			wrapperB.appendTo(dialog);

			text.appendTo(wrapperA);
			button.appendTo(wrapperA);

			button.on('click', function () {
				window.webkitNotifications.requestPermission();

				wrapperA.fadeOut();
				wrapperB.fadeIn();
				var interval = setInterval(function () {
					if (window.webkitNotifications.checkPermission() == 0) {
						overlay.fadeOut();
						clearInterval(interval);
					}
				})
			});

			overlay.click(function (e) {
				if (e.srcElement === overlay[0]) overlay.fadeOut();
			});

			overlay.appendTo('body');

			overlay.fadeIn();
		}

		var icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFB0lEQVR42u2Ye0xWZRzHv9h%2FbM2s1mrLyjm7KyCKKCRySRmQSlwiGhURBHYvl1suW9ZkY%2Baa5bqMiTPEIEQQs0LkItRsuVbhZQRrYIUi7xXe9%2BWc9z2XnnPOe857Lq8b2NmOrvd3dnae5znPeZ7v53d%2Bz%2B9conCdW5TVAiIAVguIAFgtIAJgtYAIwCz789eartkA8N7A7xIBL3Pw4hZi45XzfLCubgv1Vx15dT9e7HdrdNqMtc0UgPf4fxUn4DhaNzEMYsLWRShOV5f7adsv2tyIX%2FjsjPTNGGCSPg2Wo0KiDeLkOqcTp4biNHWpzBnGuDQxieWLys0FcNGnwLLTOrF8WLGlz%2BeHLgRLwP2oqz10Re%2Frr79km0LivZvMBXBQfWCZad1knMqTPMrKi8TOhw8Mi0eODxDxNBiy5xQtJkegcX%2BD4Xq9E8btHqy671VzAWy%2BLjCsTxUC2lApryhRhPvZMbEvzU6BZtygAg7Mi15K1k8AawtS0NpQpwsvTlMft%2FuQfP%2Bb5gKMe78Hw3jD3vbKyudE8T7%2FsHJB7COrcbKzAQkpxejq2CkCBUgI3n5jCtLzM3H0q8%2FChJTUcpkArH5gi7kAFz1HEQh4DN4Xtk1VFWipH4SbOhMCSM5G7%2FFPkJj6EvpPaAFScjNxrOnj8OmV1CccFFIefNtcgL%2BnWiQAtffJ9mJVJZq%2FPAuPf0gMF9nikovRR4SvWLMZP%2FWEABiy3zE3A0nrc9DRvAtQ%2BV52yoSDRupD75gLcGGyEQH%2FlCFjvFBZSbw%2FQLw%2FIMa6bIyYcoNllfgAS%2BHOmzKx8rGN6GypgfIQ4%2BUA4mEjAGkPv2cuwIi7Hn4CoH%2FKlpW%2FjLaGn%2BHwnSaL16sRLZtaPMPSuOvmHCRk56G7dYfG88GpyB3wI2PxB%2BYC%2FOnaBz89CW28As%2BUvY72g70Yn%2BpFUvo2kjZJciS7eOSlcjDJiMeOzmIsuGUjlmUVovfIdtUagAJjcwbw6JJqcwGGnbVagKDXnip9C982dmLMfQLJ6dWY%2FkP7vscRApZlSQZjEL0gGh3dEkDsukL0t2%2FTeF4OS5uTwbqYGnMBhhyfg6ZdUkX3AlZYshWdzd%2Fh7vhMeM9RomBBuCBavc%2BPm4%2Bhs02IIeL7jmxF%2BHcpwE4AMmM%2FNBdg0L5HAuChWQPCpPkl7%2BL4160YsbchNaMOo%2F2jBvExaTE41pOPRbcVImatED5bQp6XBlXKdieLrLiPzAU4b9sNmnJqJ1Vljw1Pvo%2Bew4fEswuX5Elxr4r9ofNN4jlBfE%2FbZo3nQ06RWu1ODtlLd5sLcG5iFyjKpQkdtdcEyyqoBkuKp9qbDAMIwgXrbn1DdQehhI16HAcByInfYy7AmYka0NOuMF7Tvl4Llp67U8xAvGo9d7W%2BFuYbAsY2UncQP61f9qm5AAOXd4CaDreIg1MH74bxC0zVrvQJiVXDyJnNSabZsPwLcwF%2BG99OANyGh442lIICeZ1wBSh83OthnK4o5CbUmgogjv3NL6%2FoPKgTrngRYfvJ9XlzrxxGgvjHV%2BydsTbL%2Fkp0D5YaEoHLNQd5iftmpcuq%2F0L8j39VwefxKH5xuuegIHH%2FrDVZBvDDhQp4PdIHkouIL1xZf1V6LAPoGy0jd8BLxN%2BAJ1YduGotlgGcHCnF2D8UipIO%2FicdlgH0jDyNNffMPuavGQCz5rcSwJS5%2F3e%2F1685iwBYbREAqy0CYLVd9wD%2FAlj4D21rlmCsAAAAAElFTkSuQmCC';

		dAmnChanChat.prototype.makeText_ = dAmnChanChat.prototype.makeText;
		dAmnChanChat.prototype.makeText = function (style, from, text, hilite) {
			try {
				if (hilite === 2 && style.indexOf('other-hl') !== -1 && focus === false) {
					var notif = webkitNotifications.createNotification(icon, 'deviantART Chat', from.slice(4, -4) + ': ' + text);
					notif.show();
				}
				return this.makeText_.apply(this, arguments);
			} catch (e) {
				console.error(e);
				return this.makeText_.apply(this, arguments);
			}
		};
	});
});