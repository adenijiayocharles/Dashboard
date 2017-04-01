function displayNews(data){
	var news = document.getElementById("content");
	var html = "";
	var count = data.length;
	for(i = 0; i < count; i++){
		var url = data[i].url;
		var title = data[i].title;
		var urlToImage = data[i].urlToImage;
		html += "<div class='content-box'><div class='image'><img src="+ urlToImage +"></div><div class='headline'>"+ title +"</div></div>";
	}
	news.insertAdjacentHTML('beforeend', html);
}


(function () {
	//get page url
	var pageUrl = window.location.href;
	//get news source id from url
	var urlIndex = pageUrl.lastIndexOf("=");
	var sourceId = pageUrl.slice(urlIndex+1);
	var spinner = document.getElementById("spinner");
	var newsHeadline = document.getElementById("newssource");
	var newsBox = document.getElementsByClassName("content-box");
	var url = "https://newsapi.org/v1/articles?source="+ sourceId +"&apiKey=af43753d90494370bb8627019c2b0941";
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function(){
		if(xhr.readyState < 4){
			console.log("loading");
		}

		if(xhr.readyState === 4 && xhr.status === 200){
			var response = JSON.parse(xhr.responseText);
			var articles = response.articles;
			newsHeadline.innerHTML = (sourceId.replace("-", " ")).toUpperCase();
			spinner.style.display = "none";
			displayNews(articles);
		}
	};
	xhr.send();
}
)();


