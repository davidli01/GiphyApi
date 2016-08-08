$(function() {
	populate(animals, 'animalName', '.animalName');
});

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
	$('.gifAnimal').empty();
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
			//save url and still
			var animated = results[i].images.fixed_height.url;
			var still = results[i].images.fixed_still.url;
			//create image tag
			var image = $('<img>');
			//include following attributes on the tag
			image.attr('src', still);
			image.attr('data-state', still);
			image.addClass('animalImage');
			//append p and image onto div
			div.append(p);
			div.append(image);
			//append div to the html
			$('gifAnimal').append(div);
		}
	});
});
//click event on image tag thats created from search loop
$(document).on('click', '.image', function(){

})