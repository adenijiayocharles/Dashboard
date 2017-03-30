function displayNews(data){
	var newsBox = document.getElementsByClassName("content-box");
	for(var i = 0; i < newsBox.length; i++){
		console.log(newsBox[i]);
	}
	// var dataLength = data.length;
	// var boxLength = newsBox.length;
	// for (var i = 0; i < boxLength; i++) { 
 //    	console.log(data.articles.url);
	// }
}


(function () {
	var news = document.getElementById("content");
	var newsBox = document.getElementsByClassName("content-box");
	var url = "https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=af43753d90494370bb8627019c2b0941";
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function(){
		if(xhr.readyState < 4){
			console.log("loading");
		}

		if(xhr.readyState === 4 && xhr.status === 200){
			var response = JSON.parse(xhr.responseText);
			var articles = response.articles;
			var count = articles.length;

			var html = "";
			for(i = 0; i < count; i++){
				var url = articles[i].url;
				var title = articles[i].title;
				var urlToImage = articles[i].urlToImage;

				html += "<div class='content-box'><div class='image'><img src="+ urlToImage +"></div><div class='headline'>"+ title +"</div></div>";
			}
			news.insertAdjacentHTML('beforeend', html);
		}
	};
	xhr.send();
}

)();


