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
	rtl:true,
	center: true,
	loop:true,
	autoWidth: true,
	autoplay:true,
	autoplayTimeout:2000,
	autoplayHoverPause:true
});
$('#speakers').owlCarousel({
	loop:true,
	margin: 20,
	autoplay:true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	responsive:{
        0:{items:1},
        900:{items:2}
    }
})

$('#eventsListContainer').perfectScrollbar();
$('#eventsDescriptionContainer').perfectScrollbar();
$('#speakers').perfectScrollbar();