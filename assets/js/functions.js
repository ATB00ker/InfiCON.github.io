//** Set Container Height **//
var height = $(window).height();
$(".container-fluid").css("height",height);
$("#logo img").css("marginTop",height/2);
$("#logo img").css("transform","translateY(-50%)");
$("#logo i").css("marginTop",height-0.15*height);
function scrollToFAQ(){
	$('html, body').animate({
	scrollTop: $(".container").offset().top}, 300);
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
		smartSpeed: 100
	});	
$('#eventsListContainer').perfectScrollbar();
$('#eventsDescriptionContainer').perfectScrollbar();
$('.card.horizontal .card-stacked .card-content').perfectScrollbar();
$('.abouticons').perfectScrollbar();