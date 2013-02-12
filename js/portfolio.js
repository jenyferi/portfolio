$(document).ready(function () {

	var phillips_html = '<div id="phillips0"><img class="projectimg" src="img/projects/phillips0.png"></div><div id="phillips1"><img class="projectimg" src="img/projects/phillips1.png"></div><div id="phillips2"><img class="projectimg" src="img/projects/phillips2.png"></div><div id="phillips3"><img class="projectimg" src="img/projects/phillips3.png"></div>';

    var sears_html = '<div id="sears0"><img class="projectimg" src="img/projects/sears0.jpg"></div><div id="sears1"><img class="projectimg" src="img/projects/sears1.jpg"></div><div id="sears2"><img class="projectimg" src="img/projects/sears2.jpg"></div><div id="sears3"><img class="projectimg" src="img/projects/sears3.jpg"></div><div id="sears4"><img class="projectimg" src="img/projects/sears4.jpg"></div><div id="sears5"><img class="projectimg" src="img/projects/sears5.jpg"></div><div id="sears6"><img class="projectimg" src="img/projects/sears6.jpg"></div><div id="sears7"><img class="projectimg" src="img/projects/sears7.jpg"></div><div id="sears8"><img class="projectimg" src="img/projects/sears8.jpg"></div>';

    var android_html = '<div id="android0"><img class="projectimg" src="img/projects/android0.jpg"></div><div id="android1"><img class="projectimg" src="img/projects/android1.jpg"></div><div id="android2"><img class="projectimg" src="img/projects/android2.jpg"></div><div id="android3"><img class="projectimg" src="img/projects/android3.jpg"></div><div id="android4"><img class="projectimg" src="img/projects/android4.jpg"></div><div id="android5"><img class="projectimg" src="img/projects/android5.jpg"></div>';

    var wildswans_html = '<iframe id="player1" src="http://player.vimeo.com/video/35960103?title=0&byline=0&portrait=0&color=d46fab&player_id=player1&api=1" width="720" height="396" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';

    var freise_html = '<div id="freise0"><img class="projectimg" src="img/projects/freise0.jpg"></div><div id="freise1"><img class="projectimg" src="img/projects/freise1.jpg"></div><div id="freise2"><img class="projectimg" src="img/projects/freise2.jpg"></div><div id="freise3"><img class="projectimg" src="img/projects/freise3.jpg"></div>';

    var kayak_html = '<div id="kayak0"><img class="projectimg" src="img/projects/kayak0.png"></div><div id="kayak1"><img class="projectimg" src="img/projects/kayak1.png"></div><div id="kayak2"><img class="projectimg" src="img/projects/kayak2.png"></div><div id="kayak3"><img class="projectimg" src="img/projects/kayak3.png"></div><div id="kayak4"><img class="projectimg" src="img/projects/kayak4.png"></div><div id="kayak5"><img class="projectimg" src="img/projects/kayak5.png"></div>';

    var tree_html = '<iframe id="player2" src="http://player.vimeo.com/video/35948137?title=0&byline=0&portrait=0&color=d46fab&autoplay=1&loop=1" width="400" height="400" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';

    var pirates_html = '<img src="img/pirates.png" alt="pirates">';

    $("#phillips-imgs").html(phillips_html);
    $("#sears-imgs").html(sears_html);
    $("#android-imgs").html(android_html);
    $("#wildswans1").html(wildswans_html);
    $("#freise-imgs").html(freise_html);
    $("#kayak-imgs").html(kayak_html);
    $("#tree1").html(tree_html);
    $("#pirates1").html(pirates_html);

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
	/*$("#logo").hover(
		function(){ $("#ba").fadeIn(200); },
		function(){ $("#ba").fadeOut(200); }
	);*/

	//communicate with vimeo player
	var iframe = $('#player1')[0];
    var player = $f(iframe);
    var is_ws_playing = false;

	// When the player is ready, add listeners for pause, finish, and playProgress
	player.addEvent('ready', function() {
	    //console.log("ready");
	    
	    player.addEvent('pause', onPause);
	    player.addEvent('finish', onFinish);
	    player.addEvent('play', onPlay);
	});

	// Call the API when a button is pressed
	$('button').bind('click', function() {
	    player.api($(this).text().toLowerCase());
	});

	function onPause(id) {
		is_ws_playing = false;
	    //console.log("paused");
	}

	function onFinish(id) {
		is_ws_playing = false;
	    //console.log("finished");
	}

	function onPlay(id) {
		is_ws_playing = true;
	    //console.log("play");
	}

	function pausePlayer(){
		player.api("pause");
	}

	//project swap and fade logic
	var numProjects = 12;
	var currProject = 0;
	var fadeTime = 400;

	for (var i=1; i<numProjects; i++){
		$("#project" + i).fadeOut(0); //fade out all except first
	}

	//starting project
	projectImages("phillips", 4);

	var hashname = "project";
	var prevProject = 1; //first project
	var newProject = 1;

	$(".button").click(function() {
		var currButtonID = $(this).attr('id');

		updateCurrentProject(currButtonID);
		changeHash();
	});

	function changeHash() {
		location.hash = hashname + (currProject+1);
	}

	function updateCurrentProject(currButtonID) {
		currProject = newProject-1;

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
	}

	// hashchange jquery library
	$(window).hashchange( function(){
		var hashlength = location.hash.length;
		var difference = hashlength - hashname.length;
		prevProject = newProject;
		newProject = location.hash.substring(hashlength - difference + 1);

		//if someone types in a wrong project #
		if (newProject > numProjects || newProject <= 0){
			if (newProject != ""){
				location.hash = hashname + "" + 1;
			}
			newProject = 1;
		}

		loadProject(newProject); 
	})

	$(window).hashchange();


	function loadProject(hashID){
		hashID = hashID - 1;
		prevProject = prevProject - 1;
		//console.log("previous project = " + prevProject);
		$("#project" + prevProject).fadeOut(fadeTime, 
  			function(){
				if (is_ws_playing){
					pausePlayer();
					is_ws_playing = false;
				}

		  		$("#project" + hashID).fadeIn(fadeTime);

		  		$("#numbers").html("" + (hashID+1) + " / " + numProjects);

		  		if (hashID == 4) {
		  			projectImages("sears", 9);
		  		}else if (hashID == 8){
		  			projectImages("kayak", 6);
		  		}else if (hashID == 3){
		  			projectImages("android", 6);
		  		}else if (hashID == 0){ 
		  			projectImages("phillips", 4);
		  		}else if (hashID == 7){ 
		  			projectImages("freise", 4);
		  		}else {
		  			removeImageDots();
		  		}
  			}
  		);
	}

	//projects
	function projectImages(projectName, numImages){

		var dotshtml = "";
		var delayTime = fadeTime*0.5;
		var k = 0;
		var inTransition = false;

		//var shouldFlip = true;

		for (var i=0; i<numImages; i++){

			//fade out all except first, fade in first
			if (i==0){
				$("#" + projectName + 0).fadeIn(fadeTime); 
			}else {
				$("#" + projectName + i).fadeOut(0); 
			}

			dotshtml += '<span id="dot' + i + '">.</span>';

			$("#" + projectName + i).click(
				function(){
					fadeMe(-1);
				}
			);
		}

		$("#img-dots").html(dotshtml);
		$("#dot0").css("color", "#e98a9f"); //highlight first image

		for (var l=0; l<numImages; l++){
			$("#dot" + l).click(
				function(){
					var dotNo = $(this).attr("id")[3]; //get the last index, which is the #
					fadeMe(dotNo);
				}
			);
			$("#dot" + l).hover(
				function(){$(this).css("cursor","pointer")},
				function(){$(this).css("cursor","default")}
			);
		}

		function fadeMe(clickedDot){
			if (!inTransition && (clickedDot != k)){
				$("#" + projectName + k).delay(delayTime).fadeOut(fadeTime, fadeNext(clickedDot));
				inTransition = true;
			}
		}

		function fadeNext(clickedDot){
			$("#dot" + k).css("color", "#9ec0bc"); //changes old dot to old color

			if (clickedDot != -1){ //if this was a clicked dot
				k = clickedDot;
			}else { //this was a clicked image
				if (k>=numImages-1){
					k=0;	
				}else {
					k++;
				}
			}

			$("#dot" + k).css("color", "#e98a9f");

			$("#" + projectName + k).delay(delayTime).fadeIn(fadeTime, 
				function(){
					inTransition = false;
				}
			);
		}
	}

	function removeImageDots(){
		$("#img-dots").html("");
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
});