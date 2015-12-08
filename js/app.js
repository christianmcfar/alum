

//required courses for the program
var programCourses = ["CP104","CP114","MA110","MA121","MA122"]; 

//courses input by student
var inputCourses = ["CP104","CP114","MA110"];




//student adds a coruses to their current list  
function addCourse(course) {
	inputCourses.push(course);
}; 

//student removes a course from their current list
function removeCourse(course) {
	for (i=0; i < inputCourses.length; i++) {	
		if (inputCourses[i] === course) {
			delete inputCourses[i]	
		}
	}
};

//checks if student is able to graduate based on their current courses
function eligibility() {
	var completedCourses = [];
	var missingCourses = programCourses;

	for (i=0; i < programCourses.length; i++) {
		if (inputCourses[i] === programCourses) {
			completedCourses.push(missingCourses.pop());
		} else { 
			missingCourses.push(programCourses[i]);
		}
	}
};







function tablePage(){
	$.mobile.changePage("#table");
}

function signInPage(){
	$.mobile.changePage("#signIn");
}


