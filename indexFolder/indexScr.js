
	
	function scrollHome() {
	$(document).on('click', "#home", function(e) {
		e.preventDefault();
	e = document.body.scrollTop - $('body').offset().top;
		 $('html, body').stop().scrollTo({top: '900px', left: '0px'},800);
		
	});
	};
		
	function scrollToForm() {
	$(document).on('click', "#scrolld", function(event) {
		event.preventDefault();	//prevent default action
		$('html,body').stop().animate({ // .stop() kills current animation being performed on selected element;
			scrollTop: '650px',
			scrollLeft: '0px'
  },800);
  });
};

	$(window).resize(async function() {
			 var size = await sizeDet($(window).width());
			 return size;
		});
		
	async function loadTxt() {
		var size = await sizeDet($(window).width());
		return size;
	};
	
	 function sizeDet(i) {
		return new Promise(pixels => {
			var result;
			if (i < 1280) {
			result = $('.banner > h1').css("font-size",i/16 + 'px');
		}
		else {
			result = $('.banner > h1').css("font-size",'82px');
		}
			pixels(result);
			});
	};
	
	function myFunction() {
	var x = document.getElementById("myTopnav");
	
    if (x.className === "topnav" || x.className === "topnav sticky") {
       return  x.className += " responsive";	// adds responsive class to topnav after being called upon browser resize;
    } else {
       return x.className = "topnav";
    }
}

$(document).ready(function() {
	
	window.onscroll = function() {navScroll()};

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
	 
	$(document).on('click', "#stbtn", function(e) { //on start button click, hides start button, displays start button, and calls formActivate();
		e.preventDefault();
		$('body').css("overflow-y","visible");
		$("#stbtn").hide('fast',"linear");
		$("#scrolld").show('fast',"linear");
		formActivate();	
	});
	
	function formActivate() {	//Displays form;
	$(".q-naire").show("linear");
	$("#blocker").show("linear");
	};
  
$("#ff").change(function() {
	 var opt = $(this).find("option:selected").attr("id"); //Get option selected;
	 var evt = $(".desc").animate({ opacity: 0 },0, function() { $(".desc").animate({ background: "rgba(255,255,255,0.6)", opacity: 1 },1000);  });
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
	default:  $(".desc").html("<p> </p>");
	break;
	}
 });
  
  var conditional = document.getElementById('conperm');
  var lawful = document.getElementById('perm')
  var commuter = document.getElementById('comperm');
  
  $(conditional).click(function() {
		$("#lawStat").fadeTo(400,'0.4');
		$("input[type=radio][name=status]").attr("disabled",true);
		$("input[type=radio][name=status]:checked").val(function() {
		$(this).prop("checked",false);
		});
		if($(this).prop('checked')) {
		$('#re').prop("required", false);
		};
	});
		
  $(lawful).click(function() {
		$("#lawStat").fadeTo(400,"1");
		$("input[type=radio][name=status]").attr("disabled",false);
		$("input[type=radio][name=status]").attr("required",'');
	});
	
  $(commuter).click(function() {
		$("#lawStat").fadeTo(400,"1");
		$("input[type=radio][name=status]").attr("disabled",false);
		$("input[type=radio][name=status]").attr("required",'');
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
  
  loadTxt();
  
	$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 2000,            // Integer: Speed of the transition, in milliseconds
  timeout: 6000,          // Integer: Time between slide transitions, in milliseconds
  pager: false,           // Boolean: Show pager, true or false
  nav: false,             // Boolean: Show navigation, true or false
  random: true,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "Previous",   // String: Text for the "previous" button
  nextText: "Next",       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});
});
