$function(){

}

var animals = ["dog", "cat", "rabbit", "hamster", "skunk", 
				"goldfish", "bird", "ferret", "turtle", 
				"sugar glider", "chinchilla"]


function populate(useArray, newClass, addArea){
	$(addArea).empty();

	for (var i = 0, i < useArray.length; i++){
		var a = $('<button>')
		a.addClass(newClass);
		a.attr('data-type', useArray[i]);
		a.text(useArray[i]);
		$(addArea).append(a);
	}
}	

//click event on the animal button
$(document).on('click', '.animalName', function(){
	$('#animals').empty();
	$('.animalName').removeClass('active');
	$(this).addClass('active');

	var type = $(this).data('type');
	var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + 
				type + "&api_key=dc6zaTOxFJmzC&limit=10";

	$.ajax({url: queryUrl, method: 'GET'})
	.done(function(response) {
		var results = response.data;

		for (var i = 0; i < results.length; i++){
			//create div for every result
			var div = $('<div>')
			//include rating of each result
			var rating = results[i].rating;
			//create p tag
			//include text for rating
			var p = $('<p>').text("Rating: " + rating);


		}
	})
})







document.querySelector(".submit").onclick = function(event) {
	//retrieve the input from the search box
	var search = document.querySelector(".name");
	var key = search.value;
	console.log(key);
	//form the url 
	var url = "http://api.giphy.com/v1/gifs/search?q=" + key + "&api_key=dc6zaTOxFJmzC&limit=10";
	//set request function to x, this is a function from ajax
	var x = new XMLHttpRequest();
	x.open("GET", "url", true);
	x.send();
	console.log(x.responseText);

	event.preventDefault();
}
