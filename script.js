$(document).ready(function(){

$('#term').focus(function(){
	var full = $('#poster').has("img").length ? true : false;
	if(full == false){
		$('#poster').empty();
	}

});

var getPoster = function(){
	var film = $('#term').val();
	if (film == ''){
		$('#poster').html("<h2 class='loading'> Ha! We haven't forgotten to validate the form! Please enter something. </h2");
	} else {
		$('#poster').html("<h2 class'loading'> Your poster is on its way!</h2>");
			
}

}

$('#search').click(getPoster);










});