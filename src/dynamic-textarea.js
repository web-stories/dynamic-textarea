/*!
 * Dynamic Textarea v0.0.1
 * https://github.com/web-stories/dynamic-textarea
 *
 * Copyright 2015 Web Stories
 * Released under the MIT license
 */
(function( init ) {
	if ( typeof define === "function" && define.amd ) {
		define(function() {
			init();
		});
	} else {
		document.addEventListener( "DOMContentLoaded", init );
	}
}(function() {
	var originalHeight;
	function update( textarea ) {
		originalHeight = originalHeight || window.getComputedStyle( textarea ).height;
		textarea.style.overflow = "hidden";
		textarea.style.height = originalHeight;
		if ( textarea.scrollHeight > textarea.clientHeight ) {
			textarea.style.height = textarea.scrollHeight + "px";
		}
	};
	[ "keyup", "keydown" ].forEach(function( eventType ) {
		document.addEventListener( eventType, function( event ) {
			if ( event.target.nodeName !== "TEXTAREA" ) {
				return;
			}
			if ( !event.target.dataset.hasOwnProperty( "dynamic" ) ) {
				return;
			}
			update( element );
		});
	});
	var i = 0;
	var textareas = document.querySelectorAll( "[data-dynamic]" );
	for ( ; i < textareas.length; i += 1 ) {
		update( textareas[ i ] );
	}
}));