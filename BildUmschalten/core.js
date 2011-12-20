var allow_image=false;

function image_callback(info)
{
	// console.log("catched: " + info.url);
	// return {redirectUrl: };
	return {cancel: !allow_image};
}

chrome.webRequest.onBeforeRequest.addListener(
	image_callback
	, {
		urls: ["http://*/*", "https://*/*"],
		types: ["image"]
	}
	, ["blocking"]
);


function refresh_icon()
{
	if (allow_image) {
		chrome.browserAction.setIcon({path: "allow.png"});
	} else {
		chrome.browserAction.setIcon({path: "disallow.png"});
	}
}


function altern_state() {
	allow_image = !allow_image;
	refresh_icon();
}

chrome.browserAction.onClicked.addListener(altern_state);

refresh_icon();
