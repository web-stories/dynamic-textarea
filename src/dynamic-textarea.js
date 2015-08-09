/*!
 * Dynamic Textarea v0.0.1
 * https://github.com/web-stories/dynamic-textarea
 *
 * Copyright 2015 Web Stories
 * Released under the MIT license
 */
(function( init ) {
	if ( typeof define === "function" && define.amd ) {
		define( init );
	} else {
		init();
	}
}(function() {
	var eventTypes = [ "keyup", "keydown" ];
	function init() {
		var originalHeight;
		eventTypes.forEach(function( eventType ) {
			document.addEventListener( eventType, function( event ) {
				var element = event.target;
				if ( element.nodeName !== "TEXTAREA" ) {
					return;
				}
				if ( !element.dataset.hasOwnProperty( "dynamic" ) ) {
					return;
				}
				originalHeight = originalHeight || window.getComputedStyle( element ).height;
				element.style.overflow = "hidden";
				element.style.height = originalHeight;
				if ( element.scrollHeight > element.clientHeight ) {
					element.style.height = element.scrollHeight + "px";
				}
			});
		});
	};
	document.addEventListener( "DOMContentLoaded", init );
}));