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
