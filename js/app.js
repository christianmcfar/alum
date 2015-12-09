

var programCourses = ["CP114","CP120","CP213","BU127"];
var currentCourses = ["CP114","MA122","CP213"];




function addCourse(course, currentCourses) {
	currentCourses.push(course);
}; 

function removeCourse(course, currentCourses) {
	for (i=0; i < currentCourses.length; i++) {	
		if (currentCourses[i] === course) {
			delete currentCourses[i]	
		}
	}
};

var eligibility = function eligibility(currentCourses, programCourses) {
	var completedCourses = [];
	var missingCourses = [];
	var electiveCourses = [];
	var notElec = [];

	for (i=0; i < programCourses.length; i++){
		for (j=0; j < currentCourses.length; j++){

			if (currentCourses[j] === programCourses[i]){
				completedCourses.push(currentCourses[j]);
				notElec.push(currentCourses[j]);
			}
		}
		if (completedCourses[completedCourses.length-1] !== programCourses[i]){
			missingCourses.push(programCourses[i]);
			notElec.push(programCourses[i]);
		} 
	}

	var check = 0;
	for (k=0; k < (currentCourses.length-1); k++){
		check = notElec.indexOf(currentCourses[k]);
		if (check === -1){
			electiveCourses.push(currentCourses[k]);
		}
	}

	document.getElementById("completed").innerHTML = completedCourses.toString();
	document.getElementById("missing").innerHTML = missingCourses.toString();
	document.getElementById("elective").innerHTML = electiveCourses.toString();

	return [completedCourses, missingCourses, electiveCourses];
};

function signInPage(){
	$.mobile.changePage("#signIn");
}

function year(){

	for (i = new Date().getFullYear(); i <= 2030; i++){
	    $('#yearpicker').append($('<option />').val(i).html(i));
	}	
}

function gradPage(){
	$.mobile.changePage("#congratulations");
}

function uneligiblePage(){
	$.mobile.changePage("#notEligible");
}

function fillMissingList(missingCourses){
	for (i=0; i <= missingCourses.length-1; i++){
		$("#missinglist").append($('<a class="ui-li-static ui-body-inherit" />').html(missingCourses[i]));
	}
}

function saveProfile(){
	sessionStorage.program = $( "#program option:selected" ).text();
	sessionStorage.year = $( "#yearpicker" ).val();
	$.mobile.changePage("#table");	
}

function saveUser(){
	sessionStorage.studentId = $("#studentId").val();
	sessionStorage.password = $("#password").val();
	$.mobile.changePage("#programSelect");
}






