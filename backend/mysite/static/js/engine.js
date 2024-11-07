
function loadHtml(url){
	url = `static/html/${url}.html`
	console.log('url: ', url);
	fetch(url)
	.then(response => response.text())
	.then(data => {
		console.log("data: ", data);
		document.getElementById('index').innerHTML = '';
		document.getElementById('index').innerHTML = data;
	})
	.catch(error => {
		console.error('Error loading html: ', error);
	});
}

document.addEventListener("DOMContentLoaded", function() {
	document.querySelectorAll("button").forEach(button => {
		button.onclick = function () {
			let page = this.dataset.pagebutton;
			// history.pushState({page: page}, "", `/${page}`);
			loadHtml(page);
		};
	});
});

// const formRegister = document.getElementById("form-register");
// formRegister?.addEventListener("submit", async function(event) {

// 	const formData = new FormData(event.target);
// 	console.log()
// 	fetch(`${page}`, {
// 		method: 'POST',
// 		headers: {
// 			"X-CSRFToken": getCookie('csrftoken'),
// 			"Accept": "application/json",
// 		},
// 		body: formData,
// 	})
// 	.then(response => response.json())
// 	.then(data => {
// 		console.log("Data:", data);
// 	});
// })

// const formLogin = document.getElementById("form-login");
// formLogin?.addEventListener("submit", async function(event) {

// 	const formData = new FormData(event.target);

// 	fetch(`${page}`, {
// 		method: 'POST',
// 		headers: {
// 			"X-CSRFToken": getCookie('csrftoken'),
// 			"Accept": "application/json",
// 		},
// 		body: formData,
// 	})
// 	.then(response => response.json())
// 	.then(data => {
// 		console.log("Data:", data);
// 	});
// })

// function getCookie(name) {
// 	let cookieValue = null;
// 	if (document.cookie && document.cookie !== '') {
// 		const cookies = document.cookie.split(';');
// 		for (let i = 0; i < cookies.length; i++) {
// 			const cookie = cookies[i].trim();
// 			if (cookie.substring(0, name.length + 1) === (name + '=')) {
// 				cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
// 				break;
// 			}
// 		}
// 	}
// 	return cookieValue;
// }