/**************************
*Definitions
**************************/
var FAQ = [];
var events = [];
var speakersList = [];
var sponsorsList = [];
var FAQListContainer = $("#FAQListContainer");
var eventsListDay1Container = $("#eventsListDay1");
var eventsListDay2Container = $("#eventsListDay2");
var speakerListContainer = $("#speakers");
var sponsorsListContainer = $("#sponsors");
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
* Speakers Section
***************************
*Append Format: 
	speakersList[X] = {name:"", details:"", speakerImage:""};
		name: Speaker's Name
		details: Speaker's Details
		speakerImage: Image of speaker
**************************/
	speakersList[0] = {name:"Sample", details:"Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample Sample SampleSample SampleSample SampleSample SampleSample SampleSample Sample", speakerImage: "./assets/images/speakers/sample.jpg"};
	speakersList[1] = {name:"Sample", details:"Sample", speakerImage: "./assets/images/speakers/sample.jpg"};
	speakersList[2] = {name:"Sample", details:"Sample", speakerImage: "./assets/images/speakers/sample.jpg"};
	speakersList[3] = {name:"Sample", details:"Sample", speakerImage: "./assets/images/speakers/sample.jpg"};
	speakersList[4] = {name:"Sample", details:"Sample", speakerImage: "./assets/images/speakers/sample.jpg"};
	speakersList[5] = {name:"Sample", details:"Sample", speakerImage: "./assets/images/speakers/sample.jpg"};
	speakersList[6] = {name:"Sample", details:"Sample", speakerImage: "./assets/images/speakers/sample.jpg"};
	speakersList[7] = {name:"Sample", details:"Sample", speakerImage: "./assets/images/speakers/sample.jpg"};
for (var x in speakersList){
	var html = '<div class="col-centered col-xs-12 col-md-4 col-lg-3"><div class="col-centered speakerBox card hoverable"><div class="speakerImage"><img src="'+speakersList[x].speakerImage+'"><div class="speakerDetails">'+speakersList[x].name+'<p>'+speakersList[x].details+'</p></div></div></div></div>';
	speakerListContainer.append(html);
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
events[0] = {title:"Sample Title 1", description:"This is Sample Content! I Should be studing currently! I'll definatly start from tommorrow! Sample!Sample!Sampl! Sample!Sample!Sampl!  Sample!Sample!Sampl! Sample!Sample!Sampl! Sample!Sample!Sampl!", eventLocation:"This Location", date:"C", time:"D", speaker:"Full Name", cta:"https://goo.gl/maps/g7jWu5ehByH2", day:"1"};
events[1] = {title:"Sample Title 2", description:"A", eventLocation:"B", date:"C", time:"D", speaker:"E", day:"1"};
events[2] = {title:"Sample Title 3", description:"A", eventLocation:"B", date:"C", time:"D", speaker:"E", day:"1"};
events[3] = {title:"Sample Title 4", description:"A", eventLocation:"B", date:"C", time:"D", speaker:"E", day:"1"};
events[4] = {title:"Sample Title 5", description:"A", eventLocation:"B", date:"C", time:"D", speaker:"E", day:"2"};
events[5] = {title:"Sample Title 6", description:"A", eventLocation:"B", date:"C", time:"D", speaker:"E", day:"2"};
events[6] = {title:"Sample Title 7", description:"A", eventLocation:"B", date:"C", time:"D", speaker:"E", day:"2"};
for (var x in events){
	if(events[x].day == 1)
	{var html1 = '<li><div class="collapsible-header"><i class="fa fa-angle-double-right" aria-hidden="true"></i>'+events[x].title+'</div><div class="collapsible-body"><div><div class="col-xs-12 eventsDescription">'+events[x].description+'</div><div class="commonDescriptionDesign col-xs-6">'+events[x].speaker+'</div><div class="commonDescriptionDesign col-xs-6">'+events[x].eventLocation+'</div><div class="commonDescriptionDesign col-xs-6">'+events[x].date+'</div><div class="commonDescriptionDesign col-xs-6">'+events[x].time+'</div></div></div></li>';
	eventsListDay1Container.append(html1);
	} else {
	var html2 = '<li><div class="collapsible-header"><i class="fa fa-angle-double-right" aria-hidden="true"></i>'+events[x].title+'</div><div class="collapsible-body"><div><div class="col-xs-12 eventsDescription">'+events[x].description+'</div><div class="commonDescriptionDesign col-xs-6">'+events[x].speaker+'</div><div class="commonDescriptionDesign col-xs-6">'+events[x].eventLocation+'</div><div class="commonDescriptionDesign col-xs-6">'+events[x].date+'</div><div class="commonDescriptionDesign col-xs-6">'+events[x].time+'</div></div></div></li>';
	eventsListDay2Container.append(html2);
	}
}
/**************************
* Events Section
***************************
*Append Format: 
	sponsorsList[X] = {name:"", logo:""};
		name: Sponsor Name
		logo: Sponsor Logo
**************************/
sponsorsList[0] = {name:"Amity", logo:"./assets/images/sponsors/amity.png"};
sponsorsList[1] = {name:"Amity", logo:"./assets/images/sponsors/amity.png"};
sponsorsList[2] = {name:"Amity", logo:"./assets/images/sponsors/amity.png"};
for (var x in sponsorsList){
	var html = '<div class="col-centered col-xs-12 col-md-4"><div class="col-centered sponsorsBox"><div class="sponsorsLogo"><img src="'+sponsorsList[x].logo+'"></div><div class="sponsorsName">'+speakersList[x].name+'</div></div></div>';
	sponsorsListContainer.append(html);
}