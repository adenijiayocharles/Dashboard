(function(){
	var news = document.getElementById("content");
	var url = "https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=af43753d90494370bb8627019c2b0941";
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function(){
		if(xhr.readyState < 4){
			news.innerHTML = "loading .....";
		}

		if(xhr.readyState === 4 && xhr.status === 200){
			var response = xhr.responseText;
			news.innerHTML = response;
		}
	};
	xhr.send();
})();