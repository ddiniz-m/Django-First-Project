
window.onpopstate = function (event) {
	showPage(event.state.page);
}

function showPage(page){
	console.log("Show Page: ", page);
	fetch(`/${page}`)
	.then((response) => {
		console.log(response.json());
		return response.body;
	})
	.then(data => {
		console.log("Data:", data);
		document.querySelector('#content').innerHTML = data.innerHTML;
	})
	.catch(error => console.log("Errors: ", error));
}

document.addEventListener("DOMContentLoaded", function() {
	document.querySelectorAll("button").forEach(button => {
		button.onclick = function () {
			const page = this.dataset.pagebutton;
			// history.pushState({page: page}, "", `/${page}`);
			showPage(page);
		};
	});
});


const formRegister = document.getElementById("form-register");
formRegister?.addEventListener("submit", async function(event) {

	const formData = new FormData(event.target);

	fetch(`${page}`, {
		method: 'POST',
		headers: {
			"X-CSRFToken": getCookie('csrftoken'),
			"Accept": "application/json",
		},
		body: formData,
	})
	.then(response => response.json())
	.then(data => {
		console.log("Data:", data);
		showPage('success')
	});
})

const formLogin = document.getElementById("form-login");
formLogin?.addEventListener("submit", async function(event) {

	const formData = new FormData(event.target);

	fetch(`${page}`, {
		method: 'POST',
		headers: {
			"X-CSRFToken": getCookie('csrftoken'),
			"Accept": "application/json",
		},
		body: formData,
	})
	.then(response => response.json())
	.then(data => {
		console.log("Data:", data);
		showPage('success')
	});
})

function getCookie(name) {
	let cookieValue = null;
	if (document.cookie && document.cookie !== '') {
		const cookies = document.cookie.split(';');
		for (let i = 0; i < cookies.length; i++) {
			const cookie = cookies[i].trim();
			if (cookie.substring(0, name.length + 1) === (name + '=')) {
				cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
				break;
			}
		}
	}
	return cookieValue;
}