$(document).ready(function () {
	
	//adjusting text shadows based on browser
	if($.browser.chrome){
		$("#intro-top").css("color", "#545454");
		$("#intro-top").css("text-shadow", "0.015em 0.02em 0.09em #888888");
	}

	if($.browser.mozilla){
		$("#intro-top").css("text-shadow", "0.005em 0.02em 0.04em #666666");
	}

	//project swap and fade logic
	var numProjects = 7;
	var currProject = 0;
	var fadeTime = 400;

	for (var i=1; i<numProjects; i++){
		$("#project" + i).fadeOut(0);
	}

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
  			}
  		);
	});

	/*$("#button-right").click(function() {
		$(this).effect("bounce", { direction:'left', times:5 }, 200);
	});

    $("#button-left").effect("bounce", { direction:'right', times:5 }, 200);*/

	//history logo hovers 
	$("#history-img1").hover(
          function(){this.src = this.src.replace("img/computer.png","img/history1.png");},
          function(){this.src = this.src.replace("img/history1.png","img/computer.png");
     });
	
	$("#history-img2").hover(
          function(){this.src = this.src.replace("img/computer.png","img/history2.png");},
          function(){this.src = this.src.replace("img/history2.png","img/computer.png");
     });
	
	$("#history-img3").hover(
          function(){this.src = this.src.replace("img/computer.png","img/history3.png");},
          function(){this.src = this.src.replace("img/history3.png","img/computer.png");
     });
	
	$("#history-img4").hover(
          function(){this.src = this.src.replace("img/computer.png","img/history4.png");},
          function(){this.src = this.src.replace("img/history4.png","img/computer.png");
     });

	$("#history-img5").hover(
          function(){this.src = this.src.replace("img/computer.png","img/history5.png");},
          function(){this.src = this.src.replace("img/history5.png","img/computer.png");
     });

	//link logo hovers
	 $("#pinterest-img").hover(
          function(){this.src = this.src.replace("img/pinterest.png","img/pinterest_hover.png");},
          function(){this.src = this.src.replace("img/pinterest_hover.png","img/pinterest.png");
     });

	 $("#linkedin-img").hover(
          function(){this.src = this.src.replace("img/linkedin.png","img/linkedin_hover.png");},
          function(){this.src = this.src.replace("img/linkedin_hover.png","img/linkedin.png");
     });

	 $("#email-img").hover(
          function(){this.src = this.src.replace("img/email.png","img/email_hover.png");},
          function(){this.src = this.src.replace("img/email_hover.png","img/email.png");
     });

	 $("#resume-img").hover(
          function(){this.src = this.src.replace("img/resume.png","img/resume_hover.png");},
          function(){this.src = this.src.replace("img/resume_hover.png","img/resume.png");
     });

	swfobject.embedSWF("http://jennylin.s3.amazonaws.com/portfolio/images/projects/haagen/haagen_five.swf", "haagen1", "300", "250", "9.0.0", "js/expressInstall.swf");
	swfobject.embedSWF("http://jennylin.s3.amazonaws.com/portfolio/images/projects/haagen/haagen_five2.swf", "haagen2", "720", "90", "9.0.0", "js/expressInstall.swf");
	swfobject.embedSWF("http://jennylin.s3.amazonaws.com/portfolio/images/projects/quaker/quaker_apple.swf", "quaker1", "300", "250", "9.0.0", "js/expressInstall.swf");
	swfobject.embedSWF("http://jennylin.s3.amazonaws.com/portfolio/images/projects/quaker/quaker_coconut.swf", "quaker2", "300", "250", "9.0.0", "js/expressInstall.swf");
	swfobject.embedSWF("http://jennylin.s3.amazonaws.com/portfolio/images/projects/castle/scene1.swf", "castle1", "680", "425", "9.0.0", "js/expressInstall.swf");
	swfobject.embedSWF("http://jennylin.s3.amazonaws.com/portfolio/images/projects/forest/scene2.swf", "forest1", "680", "425", "9.0.0", "js/expressInstall.swf");
	//swfobject.embedSWF("http://jennylin.s3.amazonaws.com/portfolio/images/projects/twitter/twitter.swf", "rmgallery1", "120", "450", "9.0.0", "js/expressInstall.swf");
});