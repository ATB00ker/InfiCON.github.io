/**************************
*Definitions
**************************/
var FAQ = [];
var events = [];
var FAQListContainer = $("#FAQListContainer");
var eventsListContainer = $("#eventsList");
var eventLocationContainer = $("#eventLocation");
var timeContainer = $("#time");
var dateContainer = $("#date");
var descriptionContainer = $("#description");
var speakerContainer = $("#speaker");
var ctaContainer = $("#cta");
var boxInRow;
/**************************
* FAQ Section
***************************
*Append Format: 
	FAQ[X] = {question:"",answer:""};
		question:Enter FAQ Question
		answer:Enter FAQ Answer
**************************/
FAQ[0] = {question:"What is InfiCON?", answer:"InfiCON is  ..."};
FAQ[1] = {question:"(Sample)What is this section?", answer:"This is a FAQ section to be use as a About us! This is text! Test Text!This is a FAQ section to be use as a About us! This is text! Test Text!This is a FAQ section to be use as a About us! This is text! Test Text!"};
FAQ[2] = {question:"(Sample)", answer:"This is a FAQ section to be use as a About us! This is text! Test Text!This is a FAQ section to be use as a About us! This is text! Test Text!This is a FAQ section to be use as a About us! This is text! Test Text!"};
FAQ[3] = {question:"(Sample)What is this section?", answer:"This is a FAQ section to be use as a About us!"};
FAQ[4] = {question:"(Sample)What is this section?", answer:"This is a FAQ section to be use as a About us!"};
for (var x in FAQ){
var html = '<div class="card hoverable small FAQBox"><div class="card-image"><img src="assets/images/techbg.jpg"><span class="card-title FAQquestion">'+FAQ[x].question+'</span></div><div class="card-content FAQanswer">'+FAQ[x].answer+'</div></div></div></div>';
FAQListContainer.append(html);
}
/**************************
* Events Section
***************************
*Append Format: 
	events[X] = {title:"", eventLocation:"", date:"", time:"", speaker:"", cta:"", description:""};
		title: Enter Event title
		eventLocation: Enter Event eventLocation
		date: Enter Event date
		time: Enter Event time
		speaker: Enter Event speaker name
		cta: Enter Event eventLocation google map link
		description: Enter Event Description
**************************/
events[0] = {title:"Sample Title 1", description:"This is Sample Content! I Should be studing currently! I'll definatly start from tommorrow! Sample!Sample!Sample! Sample!Sample!Sample!  Sample!Sample!Sample! Sample!Sample!Sample! Sample!Sample!Sample!", eventLocation:"This Location", date:"C", time:"D", speaker:"Full Name", cta:"https://goo.gl/maps/g7jWu5ehByH2"};
events[1] = {title:"Sample Title 2", description:"A", eventLocation:"B", date:"C", time:"D", speaker:"E", cta:"F"};
events[2] = {title:"Sample Title 3", description:"A", eventLocation:"B", date:"C", time:"D", speaker:"E", cta:"F"};
events[3] = {title:"Sample Title 4", description:"A", eventLocation:"B", date:"C", time:"D", speaker:"E", cta:"F"};
events[4] = {title:"Sample Title 5", description:"A", eventLocation:"B", date:"C", time:"D", speaker:"E", cta:"F"};
events[5] = {title:"Sample Title 6", description:"A", eventLocation:"B", date:"C", time:"D", speaker:"E", cta:"F"};
events[6] = {title:"Sample Title 7", description:"A", eventLocation:"B", date:"C", time:"D", speaker:"E", cta:"F"};
for (var x in events){
	var html = '<li class="collection-item itemNumber'+x+'" onclick="displayEventInformation('+x+')"><div class="eventsList"><i class="fa fa-angle-double-right" aria-hidden="true"></i>&nbsp;'+  events[x].title+'</div></li>';
	eventsListContainer.append(html);
}
displayEventInformation(0);
var prevItem;
function displayEventInformation(x){
	var html = events[x].description;
	descriptionContainer.text(html);
	var html = 'Time: '+ events[x].time;
	timeContainer.text(html);
	var html = 'Date: '+ events[x].date;
	dateContainer.text(html);
	var html = 'Speaker: '+events[x].speaker; 
	speakerContainer.text(html);
	var html = 'Location: '+ events[x].eventLocation;
	eventLocationContainer.text(html);
	ctaContainer.attr("href",events[x].cta);
	ctaContainer.text(html);
	$(prevItem).removeClass("active");
	prevItem = ".itemNumber"+x;
	$(prevItem).addClass("active");
}