// ==UserScript==
// @name           Bubbles
// @version        0.2.0
// @namespace      nuck
// @description    Desktop notifications for dAmn
// @include        *://chat.deviantart.com/chat/*
// @match          *://chat.deviantart.com/chat/*
// ==/UserScript==

//@include lib/cwUpdater/cwUpdater.js

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