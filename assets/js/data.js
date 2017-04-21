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
/**Checking the boxes in Row to avoid making border line at the end of the last box of the row**/
Refresh();
function Refresh(){
FAQListContainer.empty(html);
boxInRow = Math.floor(($(window).width()/275)-1);
var flag=0;
	for (var x in FAQ){
	if(boxInRow<=0){
	var html = '<div class="col-centered col-xs-4 FAQBox" style="border-width: 0px 2px 0px 2px;border-style: solid;">';
	}
	else if((FAQ.length)-1 == x){
	var html = '<div class="col-centered col-xs-4 FAQBox">';
	}
	else if(flag == boxInRow){
	var html = '<div class="col-centered col-xs-4 FAQBox">';
	flag=-1;	
	}
	else{
	var html = '<div class="col-centered col-xs-4 FAQBox" style="border-width: 0px 2px 0px 0px;border-style: solid;">';}
	flag++;
	html += '<div class="FAQquestion">'+FAQ[x].question+'</div><div class="FAQanswer">'+FAQ[x].answer+'</div></div>';
	FAQListContainer.append(html);
	}
}
$(window).resize(function() {
  //resize just happened, pixels changed
	if(boxInRow!=Math.floor(($(window).width()/275)-1)){
	Refresh();
	}
});
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