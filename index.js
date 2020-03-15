/// Name of browser
function ua() {
	return window.navigator && navigator.userAgent != null && navigator.userAgent.toLowerCase();
}

/// Autoplay video in Safari
function safari_hack() {
	const video_element = document.querySelector("#drone_video");
	if (null == video_element) {
		return;
	}
	const trigger_play = function(evt) {
		const played = video_element.play();
		// if (null != played) {
		// 	played.catch(function() {
		// 		video_element.controls = true;
		// 	});
		// }
	};
	if (video_element.paused) {
		// Accept gesture to play video
		const el = document.querySelector('#drone_video_box');
		el.addEventListener("click", trigger_play);
		el.addEventListener("touchstart", trigger_play);
	}
}

(function() {
	safari_hack();
})();