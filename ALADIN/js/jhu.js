jQuery(document).ready(function($) {
	
	$(".answer").hide();
	$(".faqBox").on("click",function(){
		$(this).children('.answer').toggle();
	});
});