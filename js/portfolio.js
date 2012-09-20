$(document).ready(function () {
	
	//adjusting text shadows based on browser
	if($.browser.chrome){
		$("#intro-top").css("color", "#222222");
		$("#intro-top").css("text-shadow", "0.015em 0.02em 0.09em #888888");
	}

	if($.browser.mozilla){
		$("#intro-top").css("text-shadow", "0.005em 0.02em 0.04em #666666");
	}

	/*$("$pinterest-img").hover(
		this.src = this.src.replace("img/pinterest_off.png","img/pinterest_on.png");
	);*/

	swfobject.embedSWF("http://jennylin.s3.amazonaws.com/portfolio/images/projects/haagen/haagen_five.swf", "haagen1", "300", "250", "9.0.0", "js/expressInstall.swf");
	swfobject.embedSWF("http://jennylin.s3.amazonaws.com/portfolio/images/projects/haagen/haagen_five2.swf", "haagen2", "720", "90", "9.0.0", "js/expressInstall.swf");
	swfobject.embedSWF("http://jennylin.s3.amazonaws.com/portfolio/images/projects/quaker/quaker_apple.swf", "quaker1", "300", "250", "9.0.0", "js/expressInstall.swf");
	swfobject.embedSWF("http://jennylin.s3.amazonaws.com/portfolio/images/projects/quaker/quaker_coconut.swf", "quaker2", "300", "250", "9.0.0", "js/expressInstall.swf");
});