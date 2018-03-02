
function scrollHome() {
	event.preventDefault();
	$.scrollTo({
		top: '0px',
		left: '0px',
		interupt: true,
		margin: true
	}, 800);
};

function scrollToForm() {
	$(document).on('click', "#scrolld", function (event) {
		$('html,body').stop().scrollTo({ // .stop() kills current animation being performed on selected element;
			top: $("#questionaire").offset().top,
			left: "0px",
			interupt: true
		}, 800);
	});
};

function txtSize() {
	$(window).resize(function () {
		var i = $(this).width();

		if (i < 1280) {
			$('.banner > h1').css("font-size", i / 16 + 'px');
		}
	});
};

function myFunction() {
	var x = document.getElementById("myTopnav");

	if (x.className === "topnav" || x.className === "topnav sticky") {
		x.className += " responsive"; // adds responsive class to topnav after being called upon browser resize;
	} else {
		x.className = "topnav";
	}
}

function preloadImages(array, waitForOtherResources, timeout) {
	var loaded = false,
	list = preloadImages.list,
	imgs = array.slice(0),
	t = timeout || 15 * 1000,
	timer;
	if (!preloadImages.list) {
		preloadImages.list = [];
	}
	if (!waitForOtherResources || document.readyState === 'complete') {
		loadNow();
	} else {
		window.addEventListener("load", function () {
			clearTimeout(timer);
			loadNow();
		});
		// in case window.addEventListener doesn't get called (sometimes some resource gets stuck)
		// then preload the images anyway after some timeout time
		timer = setTimeout(loadNow, t);
	}

	function loadNow() {
		if (!loaded) {
			loaded = true;
			for (var i = 0; i < imgs.length; i++) {
				var img = new Image();
				img.onload = img.onerror = img.onabort = function () {
					var index = list.indexOf(this);
					if (index !== -1) {
						// remove image from the array once it's loaded
						// for memory consumption reasons
						list.splice(index, 1);
					}
				}
				list.push(img);
				img.src = imgs[i];
			}
		}
	}
}

preloadImages(["immg.jpg", "Immigrat2ion.jpg", "Immirat3ion.jpg"], true);
preloadImages(["/indexFolder/images/Immigration.jpg"], true);

$(document).ready(function () {

	window.onscroll = function () {
		navScroll()
	};

	// Get the navbar
	var navbar = document.getElementById("myTopnav");

	// Get the offset position of the navbar
	var sticky = navbar.offsetTop;

	// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function navScroll() {
		if (window.pageYOffset >= sticky) {
			navbar.classList.add("sticky")
		} else {
			navbar.classList.remove("sticky");
		}
	}

	$(document).on('click', "#stbtn", function (e) { //on start button click, hides start button, displays start button, and calls formActivate();
		e.preventDefault();
		$('body').css("overflow-y", "visible");
		$("#stbtn").hide('fast', "linear");
		$("#scrolld").show('fast', "linear");
		formActivate();
	});

	function formActivate() { //Displays form;
		$(".q-naire").show("linear");
		$("#blocker").show("linear");
	};

	$("#ff").change(function () {
		var opt = $(this).find("option:selected").attr("id"); //Get option selected;
		var evt = $(".desc").animate({
				opacity: 0
			}, .5, function () {
				$(".desc").animate({
					background: "rgba(255,255,255,0.6)",
					opacity: 1
				}, 1000);
			});
		//Animate description change;

		switch (opt) { //Changes description on option select;
		case "AR":
			$(".desc").html("<p>Alien’s Change of Address Card</p>");
			break;
		case "EO":
			$(".desc").html("<p>Use this form to appeal a USCIS decision on a Form I-130 or Form I-360 (Widow(er) only).</p>");
			break;
		case "G28":
			$(".desc").html("<p>To provide information on your eligibility to act on behalf of an applicant, petitioner, or respondent.</p>");
			break;
		case "G32":
			$(".desc").html("<p>Use this form to provide biographic information.</p>");
			break;
		case "G63":
			$(".desc").html("<p>Use this form to request access to information under the Freedom of Information and Privacy Act.</p>");
			break;
		case "G845":
			$(".desc").html("<p>To verify the immigration status of applications for federal state or local public benefits and licenses.</p>");
			break;
		case "G845S":
			$(".desc").html("<p>This form reflects information that may be relevant to eligibility for federal, state, and local public benefits under the Personal Responsibility and Work Opportunity Reconciliation Act of 1996, Pub. L. 104-193.</p>");
			break;
		case "G884":
			$(".desc").html("<p>To request the return of original documents submitted to establish eligibility for an immigration benefit.</p>");
			break;
		default:
			$(".desc").html("<p> </p>");
			break;
		}
	});

	var conditional = document.getElementById('conperm');
	var lawful = document.getElementById('perm')
		var commuter = document.getElementById('comperm');

	$(conditional).click(function () {
		$("#lawStat").fadeTo(400, '0.4');
		$("#blocker").css('z-index', 3);
		$("input[type=radio][name=status]:checked").val(function () {
			$(this).prop("checked", false);
		});
		if ($(this).prop('checked')) {
			$('#re').prop("required", false);
		};
	});

	$(lawful).click(function () {
		$("#lawStat").fadeTo(400, "1");
		$("#blocker").css('z-index', -1);
	});

	$(commuter).click(function () {
		$("#lawStat").fadeTo(400, "1");
		$("#blocker").css('z-index', -1);
	});

	/*(function(){

	var parallax = document.querySelectorAll(".parallax"),
	speed = 0.4;

	window.onscroll = function(){
	[].slice.call(parallax).forEach(function(el,i){

	var windowYOffset = window.pageYOffset,
	elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

	el.style.backgroundPosition = elBackgrounPos;

	});
	};*/

	txtSize();

	$(".rslides").responsiveSlides({
		auto: true, // Boolean: Animate automatically, true or false
		speed: 2000, // Integer: Speed of the transition, in milliseconds
		timeout: 6000, // Integer: Time between slide transitions, in milliseconds
		pager: false, // Boolean: Show pager, true or false
		nav: false, // Boolean: Show navigation, true or false
		random: true, // Boolean: Randomize the order of the slides, true or false
		pause: false, // Boolean: Pause on hover, true or false
		pauseControls: true, // Boolean: Pause when hovering controls, true or false
		prevText: "Previous", // String: Text for the "previous" button
		nextText: "Next", // String: Text for the "next" button
		maxwidth: "", // Integer: Max-width of the slideshow, in pixels
		navContainer: "", // Selector: Where controls should be appended to, default is after the 'ul'
		manualControls: "", // Selector: Declare custom pager navigation
		namespace: "rslides", // String: Change the default namespace used
		before: function () {}, // Function: Before callback
		after: function () {}
		// Function: After callback
	});
});
