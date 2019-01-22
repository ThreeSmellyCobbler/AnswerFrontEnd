$('.compile-nav a').hover(function(){
	$(this).parent().addClass("active");
	$('.compile-nav a').not(this).parent().removeClass("active");
})
$("#user_img").click(function(){
	$("#user_info").toggle();
})