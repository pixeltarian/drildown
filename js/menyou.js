$(document).ready(function () {
	
// slide down menu
	var $piggy = $("#piggy"), oHeight = $piggy.height();
	$("#piggyrub").hover(function () {
		$piggy.show().animate({height: oHeight}, "fast");
    	$piggy.stop().animate({height: oHeight}, "fast");

	}, function(){
    	$piggy.stop().animate({height: 0}, "fast", 
		function(){ $(this).hide() });
	}).mouseleave();	
		
  // inside menu
	$("#piglet").hide();
	$("#pigletpush").click(function () {
		$("#piglet").slideToggle("fast");
	});
	
});

