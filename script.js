let input = document.querySelector(".search_input");

function displayData(data) {
	console.log(data);
	let articles = data.data.children;
	for (let i = 0; i < articles.length; i++) {
		console.log(articles[i].data.title);
	}
}
function getData(event) {
	if (event.keyCode == 13) {
		fetch(`https://api.reddit.com/r/${input.value}`)
			.then(response => {
				return response.json();
			})
			.then(jsonData => {
				console.log(jsonData);
				displayData(jsonData);
			});
	}
}
input.addEventListener("keydown", getData);
