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
        // now names contains all of the names of checked check boxes
        // do something with it
		
		document.getElementById("subCourse").innerHTML = arrayCourse[0];
 }
 
 function addCourseCheckbox (courses) {
	var i;
	//$("#test").html('<fieldset data-role="controlgroup"><legend>Select courses you have completed:</legend></fieldset>');

	for (i = 0; i < courses.length; i++) {
		$("#test").append('<label>' +	'<input type="checkbox" name=' + courses[i] + ' id=' + courses[i] + ' value=' + courses[i] + '>' + courses[i] + '</label>');
	}
	
	$("#test").trigger("create");
 }
 
 function BU (){
	 var courses = ["BU111","BU121","BU127","BU205","BU208","BU223","BU225",
	 "BU227","BU231","BU233","BU247","BU255","BU275","BU283","BU288","BU311","BU321",
	 "BU352","BU353","BU354","BU357","BU362","BU383","BU385","BU387","BU393","BU395",
	 "BU397","BU398","BU400","BU403","BU405","BU408","BU409","BU410","BU411","BU412",
	 "BU413","BU414","BU415","BU416","BU417","BU418","BU419","BU421","BU422","BU423",
	 "BU429","BU432","BU433","BU435","BU440","BU442","BU443","BU445","BU447","BU448",
	 "BU449","BU451","BU452","BU453","BU455","BU456","BU457","BU459","BU460","BU461",
	 "BU462","BU463","BU464","BU466","BU467","BU468","BU469","BU470","BU471","BU472",
	 "BU473","BU474","BU476","BU477","BU479","BU480","BU481","BU482","BU483","BU485",
	 "BU486","BU487","BU488","BU489","BU490","BU491","BU492","BU493","BU495","BU496",
	 "BU497","BU498","BU499"];
	 
	 return courses;
 }

 function EC (){
	 var courses = ["EC120","EC140","EC205","EC207","EC223","EC227","EC233",
	 "EC236","EC238","EC239","EC245","EC246","EC247","EC248","EC249","EC250",
	 "EC255","EC260","EC270","EC285","EC290","EC295","EC301","EC303","EC304",
	 "EC305","EC306","EC307","EC310","EC313","EC315","EC316","EC318","EC322",
	 "EC325","EC327","EC328","EC335","EC345","EC355","EC370","EC381","EC390",
	 "EC410","EC450","EC451","EC455","EC470","EC480","EC481","EC490"];
	 
	 return courses;
 }
 
 function PS(){
	 var courses = ["PS100","PS101","PS102","PS240","PS245","PS260","PS261",
	 "PS262","PS263","PS264","PS267","PS268","PS270","PS271","PS272","PS275",
	 "PS276","PS277","PS280","PS282","PS283","PS284","PS285","PS286","PS287",
	 "PS288","PS291","PS292","PS295","PS296","PS330","PS345","PS360","PS361",
	 "PS362","PS363","PS365","PS366","PS367","PS370","PS374","PS375","PS378",
	 "PS379","PS381","PS382","PS383","PS390","PS394","PS395","PS397","PS398",
	 "PS460","PS461","PS462","PS463","PS467","PS470","PS475","PS480","PS482",
	 "PS490","PS499"];
	 
	 return courses;
 }
 
 function CP(){
	 var courses = ["CP102","CP104","CP164","CP202","CP212","CP213","CP216",
	 "CP217","CP220","CP264","CP300","CP310","CP312","CP315","CP316","CP317",
	 "CP319","CP320","CP331","CP351","CP363","CP364","CP372","CP373","CP386",
	 "CP395","CP400","CP411","CP412","CP414","CP460","CP463","CP464","CP465",
	 "CP467","CP468","CP469","CP471","CP472","CP476","CP480","CP493","CP494",
	 "CP495","CP496","CP497"];
	 
	 return courses;
 }
 
  function PC(){
	 var courses = ["PC131","PC132","PC141","PC142","PC151","PC152","PC161",
	 "PC162","PC212","PC220","PC221","PC235","PC236","PC237","PC242","PC300",
	 "PC310","PC315","PC319","PC320","PC321","PC322","PC331","PC344","PC351",
	 "PC360","PC364","PC395","PC400","PC421","PC454","PC474","PC475","PC481",
	 "PC482","PC491","PC492","PC495","PC496","PC497"];
	 
	 return courses;
 }
 
  function MA(){
	 var courses = ["MA100","MA101","MA103","MA104","MA110","MA121","MA122",
	 "MA127","MA129","MA141","MA170","MA201","MA205","MA215","MA218","MA222",
	 "MA233","MA235","MA238","MA240","MA241","MA242","MA250","MA255","MA270",
	 "MA273","MA304","MA305","MA307","MA317","MA318","MA323","MA338","MA339",
	 "MA340","MA341","MA343","MA344","MA348","MA349","MA350","MA360","MA365",
	 "MA370","MA371","MA372","MA395","MA419","MA422","MA425","MA450","MA451",
	 "MA455","MA465","MA470","MA471","MA475","MA480","MA485","MA487","MA489",
	 "MA490","MA492","MA495","ST230","ST259","ST260","ST359"];
	 
	 return courses;
 }