let input = document.querySelector(".search_input");
let topicContainer = document.querySelector(".topic_container");
let container = document.querySelector(".post_container");
function displayData(data) {
	topicContainer.style.display = "block";
	let articles = data.data.children;
	console.log(articles);
	for (let i = 0; i < articles.length; i++) {
		container.innerHTML = `
		<div class="articles">
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
						<p class="post_description">
            ${articles[i].data.selftext}
						</p>
					</div>
				</div>
      </div>
      `;
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
