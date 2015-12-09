function saveProfile(){
	sessionStorage.program = $( "#program option:selected" ).text();
	sessionStorage.year = $( "#year" ).val();
	document.getElementById("resultProgram").innerHTML = sessionStorage.program;
	document.getElementById("resultYear").innerHTML = sessionStorage.year;
}

function courseList() {
        var arrayCourse = [];
		
        $('#selCourse input:checked').each(function() {
            arrayCourse.push(this.name);
        });
        // now names contains all of the names of checked checkboxes
        // do something with it
		
		document.getElementById("subCourse").innerHTML = arrayCourse[0];
 }