$(document).ready(function () {

	$("#about-link").click(function(){goToByScroll("about-link")});
	$("#about-nav-link").click(function(){goToByScroll("about-link")});
	$("#work-link").click(function(){goToByScroll("work-link")});
	$("#work-nav-link").click(function(){goToByScroll("work-link")});
	$("#contact-link").click(function(){goToByScroll("contact-link")});
	$("#contact-nav-link").click(function(){goToByScroll("contact-link")});

	function goToByScroll(id){
     	$('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
	}

    var phillips_html = '<div id="phillips0"><img class="projectimg" src="img/projects/phillips0.png"></div><div id="phillips1"><img class="projectimg" src="img/projects/phillips1.png"></div><div id="phillips2"><img class="projectimg" src="img/projects/phillips2.png"></div><div id="phillips3"><img class="projectimg" src="img/projects/phillips3.png"></div>';

    var sears_html = '<div id="sears0"><img class="projectimg" src="img/projects/sears0.jpg"></div><div id="sears1"><img class="projectimg" src="img/projects/sears1.jpg"></div><div id="sears2"><img class="projectimg" src="img/projects/sears2.jpg"></div><div id="sears3"><img class="projectimg" src="img/projects/sears3.jpg"></div><div id="sears4"><img class="projectimg" src="img/projects/sears4.jpg"></div><div id="sears5"><img class="projectimg" src="img/projects/sears5.jpg"></div><div id="sears6"><img class="projectimg" src="img/projects/sears6.jpg"></div><div id="sears7"><img class="projectimg" src="img/projects/sears7.jpg"></div><div id="sears8"><img class="projectimg" src="img/projects/sears8.jpg"></div>';

    var android_html = '<div id="android0"><img class="projectimg" src="img/projects/android0.jpg"></div><div id="android1"><img class="projectimg" src="img/projects/android1.jpg"></div><div id="android2"><img class="projectimg" src="img/projects/android2.jpg"></div><div id="android3"><img class="projectimg" src="img/projects/android3.jpg"></div><div id="android4"><img class="projectimg" src="img/projects/android4.jpg"></div><div id="android5"><img class="projectimg" src="img/projects/android5.jpg"></div>';

    var wildswans_html = '<iframe src="http://player.vimeo.com/video/35960103?title=0&byline=0&portrait=0&color=d46fab" width="720" height="396" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';

    var freise_html = '<div id="freise0"><img class="projectimg" src="img/projects/freise0.jpg"></div><div id="freise1"><img class="projectimg" src="img/projects/freise1.jpg"></div><div id="freise2"><img class="projectimg" src="img/projects/freise2.jpg"></div><div id="freise3"><img class="projectimg" src="img/projects/freise3.jpg"></div>';

    var kayak_html = '<div id="kayak0"><img class="projectimg" src="img/projects/kayak0.png"></div><div id="kayak1"><img class="projectimg" src="img/projects/kayak1.png"></div><div id="kayak2"><img class="projectimg" src="img/projects/kayak2.png"></div><div id="kayak3"><img class="projectimg" src="img/projects/kayak3.png"></div><div id="kayak4"><img class="projectimg" src="img/projects/kayak4.png"></div><div id="kayak5"><img class="projectimg" src="img/projects/kayak5.png"></div>';

    var tree_html = '<iframe src="http://player.vimeo.com/video/35948137?title=0&byline=0&portrait=0&color=d46fab&autoplay=1&loop=1" width="400" height="400" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';

    var pirates_html = '<img src="img/pirates.png" alt="pirates">';

    $("#phillips-imgs").html(phillips_html);
    $("#sears-imgs").html(sears_html);
    $("#android-imgs").html(android_html);
    $("#wildswans1").html(wildswans_html);
    $("#freise-imgs").html(freise_html);
    $("#kayak-imgs").html(kayak_html);
    $("#tree1").html(tree_html);
    $("#pirates1").html(pirates_html);

    $(function() {
		var zIndexNumber = 1000;
		$('div').each(function() {
			$(this).css('zIndex', zIndexNumber);
			zIndexNumber -= 10;
		});
	});

	//adjusting text shadows based on browser
	if($.browser.chrome){
		$("#intro-top").css("color", "#545454");
		$("#intro-top").css("text-shadow", "0.015em 0.02em 0.09em #888888");
	}
	else if($.browser.mozilla){
		$("#intro-top").css("text-shadow", "0.005em 0.02em 0.04em #666666");
	}

	/*if(jQuery.browser.mobile){
		$("#navbar ul").css("font-weight", "400");
	}*/

	//logo 
	$("#ba").fadeOut(0);

	$("#logo").hover(
		function(){ $("#ba").fadeIn(200); },
		function(){ $("#ba").fadeOut(200); }
	);

	//project swap and fade logic
	var numProjects = 12;
	var currProject = 0;
	var fadeTime = 400;

	for (var i=1; i<numProjects; i++){
		$("#project" + i).fadeOut(0); //fade out all except first
	}

	//starting project
	projectImages("phillips", 4);

	$(".button").click(function() {
		var currButtonID = $(this).attr('id');
  		$("#project" + currProject).fadeOut(fadeTime, 
  			function(){
	  			if (currButtonID == "button-right"){
		  			currProject++;
		  		}else if (currButtonID == "button-left"){
		  			currProject--;
		  		}

				if (currProject == numProjects){
					currProject = 0;
				}

				if (currProject < 0){
					currProject = numProjects-1;
				}

		  		$("#project" + currProject).fadeIn(fadeTime);

		  		$("#numbers").html("" + (currProject+1) + " / " + numProjects);

		  		if (currProject == 4) {
		  			projectImages("sears", 9);
		  		}else if (currProject == 8){
		  			projectImages("kayak", 6);
		  		}else if (currProject == 3){
		  			projectImages("android", 6);
		  		}else if (currProject == 0){ 
		  			projectImages("phillips", 4);
		  		}else if (currProject == 7){ 
		  			projectImages("freise", 4);
		  		}
  			}
  		);
	});

	/*$("#button-right").click(function() {
		$(this).effect("bounce", { direction:'left', times:5 }, 200);
	});

    $("#button-left").effect("bounce", { direction:'right', times:5 }, 200);*/

	//history logo hovers 
	/*$("#history-img1").hover(
          function(){this.src = this.src.replace("img/cornell.png","img/history1.png");},
          function(){this.src = this.src.replace("img/history1.png","img/cornell.png");
     });
	
	$("#history-img2").hover(
          function(){this.src = this.src.replace("img/cornell.png","img/history2.png");},
          function(){this.src = this.src.replace("img/history2.png","img/cornell.png");
     });
	
	$("#history-img3").hover(
          function(){this.src = this.src.replace("img/transistor.png","img/history3.png");},
          function(){this.src = this.src.replace("img/history3.png","img/transistor.png");
     });
	
	$("#history-img4").hover(
          function(){this.src = this.src.replace("img/sva.png","img/history4.png");},
          function(){this.src = this.src.replace("img/history4.png","img/sva.png");
     });

	$("#history-img5").hover(
          function(){this.src = this.src.replace("img/google.png","img/history5.png");},
          function(){this.src = this.src.replace("img/history5.png","img/google.png");
     });*/
	////////////////////////////////////////////////////////////////////////////////////////

	//projects
	function projectImages(projectName, numImages){
		for (var i=1; i<numImages; i++){
			$("#" + projectName + i).fadeOut(0); //fade out all except first
		}

		var k = 0;
		var changeTime = fadeTime*10;
		var delayTime = fadeTime*2;
		var timesrun = 0;
		var shouldFlip = true;

		var interval = setInterval(
			function fadeImage(){
				/*$("#" + projectName + k).hover(
					function(){
						console.log("hover over");
						shouldFlip = false;
					},
					function(){
						console.log("hover off");
						shouldFlip = true;
					}
				);*/

				if (shouldFlip){
					$("#" + projectName + k).fadeOut(fadeTime, fadeNext());
					timesrun++;
				}

				if (timesrun >= 2*numImages) {
					clearInterval(interval);
				}
			}, changeTime
		);

		function fadeNext(){
			if (k==numImages-1){
				k=0;	
			}else {
				k++;
			}

			$("#" + projectName + k).delay(delayTime).fadeIn(fadeTime);
		}
	}
	////////////////////////////////////////////////////////////////////////////////////////


	// arrow hovers 
	$("#button-right-img").hover(
		function(){this.src = this.src.replace("img/arrow_right.png","img/arrow_right_hover.png");},
		function(){this.src = this.src.replace("img/arrow_right_hover.png","img/arrow_right.png");
    });

    $("#button-left-img").hover(
		function(){this.src = this.src.replace("img/arrow_left.png","img/arrow_left_hover.png");},
		function(){this.src = this.src.replace("img/arrow_left_hover.png","img/arrow_left.png");
    });

	//link logo hovers
	$("#pinterest-img").hover(
		function(){this.src = this.src.replace("img/github.png","img/github_hover.png");},
		function(){this.src = this.src.replace("img/github_hover.png","img/github.png");
	});

	$("#linkedin-img").hover(
		function(){this.src = this.src.replace("img/linkedin.png","img/linkedin_hover.png");},
		function(){this.src = this.src.replace("img/linkedin_hover.png","img/linkedin.png");
	});

	$("#email-img").hover(
		function(){this.src = this.src.replace("img/email_circle.png","img/email_circle_hover.png");},
		function(){this.src = this.src.replace("img/email_circle_hover.png","img/email_circle.png");
	});

	$("#resume-img").hover(
		function(){this.src = this.src.replace("img/resume_circle.png","img/resume_circle_hover.png");},
		function(){this.src = this.src.replace("img/resume_circle_hover.png","img/resume_circle.png");
	});

	swfobject.embedSWF("flash/haagen_five.swf", "haagen1", "300", "250", "9.0.0", "js/expressInstall.swf");
	swfobject.embedSWF("flash/haagen_five2.swf", "haagen2", "720", "90", "9.0.0", "js/expressInstall.swf");
	swfobject.embedSWF("flash/quaker_apple.swf", "quaker1", "300", "250", "9.0.0", "js/expressInstall.swf");
	swfobject.embedSWF("flash/quaker_coconut.swf", "quaker2", "300", "250", "9.0.0", "js/expressInstall.swf");
	swfobject.embedSWF("flash/castle.swf", "castle1", "680", "425", "9.0.0", "js/expressInstall.swf");
	swfobject.embedSWF("flash/forest.swf", "forest1", "680", "425", "9.0.0", "js/expressInstall.swf");
	//swfobject.embedSWF("http://jennylin.s3.amazonaws.com/portfolio/images/projects/twitter/twitter.swf", "rmgallery1", "120", "450", "9.0.0", "js/expressInstall.swf");
});