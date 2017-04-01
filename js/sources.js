function displayNews(data){
	var news = document.getElementById("content");
	var html = "";
	var count = data.length;
	for(i = 0; i < count; i++){
		var name = data[i].name;
		var description = data[i].description.substr(0,50);
		var urlToImage = data[i].urlsToLogos.medium;
		html += "<div class='content-box'><div class='image'><a href=''><img src="+ urlToImage +"></div><div class='headline'>"+ description +"</div></a></div>";
	}
	news.insertAdjacentHTML('beforeend', html);
}

(function () {
	var spinner = document.getElementById("spinner");
	var newsBox = document.getElementsByClassName("content-box");
	var url = "https://newsapi.org/v1/sources?language=en&apiKey=af43753d90494370bb8627019c2b0941";
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function(){
		if(xhr.readyState < 4){
			console.log("loading");
		}

		if(xhr.readyState === 4 && xhr.status === 200){
			var response = JSON.parse(xhr.responseText);
			var articles = response.sources;
			spinner.style.display = "none";
			// console.log(spinner);
			displayNews(articles);
		}
	};
	xhr.send();
}
)();