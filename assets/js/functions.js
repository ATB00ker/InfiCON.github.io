//** Set Container Height **//
var height = $(window).height();
$(".container-fluid").css("height",height);
$("#logo img").css("marginTop",height/2);
$("#logo img").css("transform","translateY(-50%)");
$("#logo i").css("marginTop",height-0.15*height);
function scrollToFAQ(){
	$('html, body').animate({
	scrollTop: $("#FAQListContainer").offset().top}, 300);
}

//** Owl Initiate **//
$("#FAQListContainer").owlCarousel({
	dots: false,
	center: true,
	loop:true,
	autoWidth: true,
	autoplay:true,
	autoplayTimeout:3000,
	autoplayHoverPause:true
});

$('#eventsListContainer').perfectScrollbar();
$('#eventsDescriptionContainer').perfectScrollbar();