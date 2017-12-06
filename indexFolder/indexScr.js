

	function scrollHome() {
	$(document).on('click', "#home", function(e) {
		e.preventDefault();
	e = document.body.scrollTop - $('body').offset().top;
		 $('html, body').stop().scrollTo({top: '900px', left: '0px'},800);
		
	});
	};
	
		
	function scrollToForm() {
	$(document).on('click', "#scrolld", function(event) {
		event.preventDefault();
		$('html,body').stop().animate({
			scrollTop: '750px',
			scrollLeft: '0px'
  },800);
  });
};
	
$(document).ready(function() {
	
	$(document).on('click', "#stbtn", function(e) { 
		e.preventDefault();
		$('body').css("overflow-y","visible");
		$("#stbtn").hide('fast',"linear");
		$("#scrolld").show('fast',"linear");
		formActivate();	
	});
	
	function formActivate() {
	$(".q-naire").show("linear");
	$("#blocker").show("linear");
	};
  
$("#ff").change(function() {
	 var opt = $(this).find("option:selected").attr("id");
	 var evt = $(".desc").animate({ opacity: 0 },.5, function() { $(".desc").animate({ background: "rgba(255,255,255,0.6)", opacity: 1 },1000);  });
	
	switch (opt) {
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
		$("#blocker").css('z-index', 3);
		$("input[type=radio][name=status]:checked").val(function() {
		$(this).prop("checked",false);
		});
	});
		
  $(lawful).click(function() {
		$("#lawStat").fadeTo(400,"1");
		$("#blocker").css('z-index', -1);
	});
	
  $(commuter).click(function() {
		$("#lawStat").fadeTo(400,"1");
		$("#blocker").css('z-index', -1);
	});
	
	(function(){

  var parallax = document.querySelectorAll(".parallax"),
      speed = 0.4;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

      el.style.backgroundPosition = elBackgrounPos;

    });
  };

})();

});