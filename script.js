let input = document.querySelector(".search_input");
let topicContainer = document.querySelector(".topic_container");
let container = document.querySelector(".post_container");
let colorStrip = document.querySelector(".color_strip");
let createPost = document.querySelector(".create_post");
let topicTitle = document.querySelector(".title");
let sub_reddit_title = document.querySelector(".sub_reddit_title");
let topicText = document.querySelector(".topic_image");
function getRandomColor() {
	var myArray = [
		"#009595",
		"#FF0000",
		"#3f9ade",
		"#FF006D",
		"#FF4500",
		"#ff6a32",
		"#FFC033",
		"#1c1c1c",
		"#73AD34"
	];
	var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
	return randomItem;
}
function displayData(data) {
	topicContainer.style.display = "block";
	let articles = data.data.children;
	console.log(articles);
	container.innerHTML = "";
	createPost.style.display = "flex";
	colorStrip.style.background = getRandomColor();
	topicTitle.innerHTML = input.value;
	sub_reddit_title.innerHTML = `r/${input.value}`;
	input.value = "";
	for (let i = 0; i < articles.length; i++) {
		let article = document.createElement("div");
		article.classList.add("articles");
		article.innerHTML = `
    <div class="col-1">
      <span class="up_arrow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style="enable-background:new 0 0 512 512;"
        xml:space="preserve"
        width="512px"
        height="512px"
      >
        <path
          d="M445.771,238.813L264.438,4.146c-2.019-2.612-5.223-4.143-8.428-4.146c-3.211-0.003-6.424,1.529-8.447,4.146    L66.229,238.813c-2.49,3.219-2.927,7.573-1.135,11.219c1.792,3.656,5.5,5.969,9.573,5.969h96v245.333    c0,5.896,4.771,10.667,10.667,10.667h149.333c5.896,0,10.667-4.771,10.667-10.667V256h96c4.073,0,7.781-2.313,9.573-5.969    C448.698,246.385,448.26,242.031,445.771,238.813z"
          data-original="#000000"
          class="active-path"
          data-old_color="#000000"
          fill="#878A8C"
        />
      </svg>
    </span>
    <span class="votes_count">${articles[i].data.ups}</span>
    <span class="down_arrow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style="enable-background:new 0 0 512 512;"
        xml:space="preserve"
        width="512px"
        height="512px"
      >
        <g
          transform="matrix(-1 -1.22465e-16 1.22465e-16 -1 512 512)"
        >
          <path
            d="M445.771,238.813L264.438,4.146c-2.019-2.612-5.223-4.143-8.428-4.146c-3.211-0.003-6.424,1.529-8.447,4.146    L66.229,238.813c-2.49,3.219-2.927,7.573-1.135,11.219c1.792,3.656,5.5,5.969,9.573,5.969h96v245.333    c0,5.896,4.771,10.667,10.667,10.667h149.333c5.896,0,10.667-4.771,10.667-10.667V256h96c4.073,0,7.781-2.313,9.573-5.969    C448.698,246.385,448.26,242.031,445.771,238.813z"
            data-original="#000000"
            class="active-path"
            data-old_color="#000000"
            fill="#878A8C"
          />
        </g>
      </svg>
    </span>
  </div>
  <div class="col-2">
    <h1 class="post_title">
      ${articles[i].data.title}
    </h1>
    <a href="articles[i].data.url" class="post_url">
      ${articles[i].data.url} 
    </a>
    <p class="post_description">
    ${articles[i].data.selftext}
    </p>
    <div class="footer">
      <div class="post_footer">
        <span>
          <img src="assets/media/chat.svg" />
          ${articles[i].data.num_comments} Comments
        </span>
        <span>
          <img src="assets/media/star.svg" />
           Give Award
        </span>
        <span>
          <img src="assets/media/share.svg" />
          Share
        </span>
      </div>
    </div>  
  </div>
      `;
		container.appendChild(article);
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
