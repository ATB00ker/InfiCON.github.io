/**************************
*Definitions
**************************/
var FAQ = [];
var events = [];
var FAQListContainer = $("#FAQListContainer");
var eventsListContainer = $("#eventsList");
var titleContainer = $("#title");
var eventLocationContainer = $("#eventLocation");
var timeContainer = $("#time");
var dateContainer = $("#date");
var descriptionContainer = $("#description");
var speakerContainer = $("#speaker");
var ctaContainer = $("#cta");
/**************************
* FAQ Section
***************************
*Append Format: 
	FAQ[X] = {
		question:"Enter Question Here",
		answer:"Enter Answer Here"};
**************************/
FAQ[0] = {question:"(Sample)What is this section?", answer:"This is a FAQ section to be use as a About us! This is text! Test Text!This is a FAQ section to be use as a About us! This is text! Test Text!This is a FAQ section to be use as a About us! This is text! Test Text!"};
FAQ[1] = {question:"(Sample)", answer:"This is a FAQ section to be use as a About us! This is text! Test Text!This is a FAQ section to be use as a About us! This is text! Test Text!This is a FAQ section to be use as a About us! This is text! Test Text!"};
FAQ[2] = {question:"(Sample)What is this section?", answer:"This is a FAQ section to be use as a About us!"};
FAQ[3] = {question:"(Sample)What is this section?", answer:"This is a FAQ section to be use as a About us!"};
for (var x in FAQ){
	var html = '<div class="col-centered col-xs-4 FAQBox"><div class="FAQquestion">'+FAQ[x].question+'</div><div class="FAQanswer">'+FAQ[x].answer+'</div></div>';
	FAQListContainer.append(html);
}
/**************************
* Events Section
***************************
*Append Format: 
	events[X] = {
		title:"Enter Event title Here",
		eventLocation:"Enter Event eventLocation Here",
		date:"Enter Event date Here",
		time:"Enter Event time Here",
		speaker:"Enter Event speaker name Here",
		cta:"Enter Event eventLocation google map link Here",
		description:"Enter Event Description Here"};
**************************/
events[0] = {title:"Sample Title 1", description:"This is Sample Content! I Should be studing currently! I'll definatly start from tommorrow!Sample!Sample!Sample!Sample!Sample!Sample! Sample!Sample!Sample! Sample!Sample!Sample!Sample!Sample!Sample!", eventLocation:"This Location", date:"C", time:"D", speaker:"Full Name", cta:"https://goo.gl/maps/g7jWu5ehByH2"};
events[1] = {title:"Sample Title 2", description:"A", eventLocation:"B", date:"C", time:"D", speaker:"E", cta:"F"};
events[2] = {title:"Sample Title 3", description:"A", eventLocation:"B", date:"C", time:"D", speaker:"E", cta:"F"};
events[3] = {title:"Sample Title 4", description:"A", eventLocation:"B", date:"C", time:"D", speaker:"E", cta:"F"};
events[4] = {title:"Sample Title 5", description:"A", eventLocation:"B", date:"C", time:"D", speaker:"E", cta:"F"};
for (var x in events){
	var html = '<div class="col-xs-12" onclick="displayEventInformation('+x+')"><div class="eventsList">'+events[x].title+'</div></div>';
	eventsListContainer.append(html);
}
displayEventInformation(0);
function displayEventInformation(x){
	var html = events[x].title;
	titleContainer.text(html);
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
}