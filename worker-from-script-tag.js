/*
 * For generating a web worker from an inline SCRIPT tag
 *
 * By Will Voelcker
 *
 * http://www.willv.net
 */


var WV_WorkerFromScriptTag = (function() {

	function generate(id, onmessage) {
		var blob, worker;

		blob = new Blob([document.querySelector('#'+id).textContent]);
		worker = new Worker(window.URL.createObjectURL(blob));
		worker.onmessage = onmessage;

		return worker;
	}

	return {
		"generate": generate
	}

})();


// Export the object for use elsewhere
if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

	// AMD. Register as an anonymous module.
	define(function() {
		return WV_WorkerFromScriptTag;
	});
} else if (typeof module !== 'undefined' && module.exports) {
	module.exports = WV_WorkerFromScriptTag;
} else if (typeof window != "undefined") {
	window.WV_WorkerFromScriptTag = WV_WorkerFromScriptTag;
}