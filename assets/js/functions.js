//** Set Container Height **//
var height = $(window).height();
$(".container-fluid").css("height",height);
$("#venue").css("height",height);
$("#logo img").css("marginTop",height/2);
$("#logo img").css("transform","translateY(-50%)");
$("#logo i").css("marginTop",height-0.15*height);
$("#aboutVenueContainer").css("height",height);
function scrollToFAQ(){
	$('html, body').animate({
	scrollTop: $("#about").offset().top-100}, 300);
}
//** Owl Initiate **//
$("#FAQListContainer").owlCarousel({
	center: true,
	loop:true,
	autoWidth: true,
	autoplay:true,
	autoplayTimeout:2000,
	autoplayHoverPause:true
});
	$("#aboutIconsContainer").owlCarousel({
		center: true,
		loop:true,
		items:1,
		autoplay:true,
		autoplayTimeout:2000,
		smartSpeed: 200
	});
$('#eventsListContainer').perfectScrollbar();
$('#eventsDescriptionContainer').perfectScrollbar();
$('.card-content').perfectScrollbar();
$('.speakerDetails p').perfectScrollbar();
$('.abouticons').perfectScrollbar();