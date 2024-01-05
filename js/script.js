function showCPPModal(event) {
	event.preventDefault();
	var modal = document.getElementById("CPPModal");
	modal.style.display = "block";

	modal.animate([
		{ opacity: 0 },
		{ opacity: 1 }
	], {
		duration: 100,
	});

	var span = document.getElementsByClassName("close")[0];
	span.onclick = function () {
		modal.animate([
			{ opacity: 1 },
			{ opacity: 0 }
		], {
			duration: 100,
		}).onfinish = function () {
			modal.style.display = "none";
		}
	}

	window.onclick = function (event) {
		if (event.target == modal) {
			modal.animate([
				{ opacity: 1 },
				{ opacity: 0 }
			], {
				duration: 100,
			}).onfinish = function () {
				modal.style.display = "none";
			}
		}
	}

	document.onkeydown = function (evt) {
		evt = evt || window.event;
		if (evt.key === "Escape" || evt.key === "Esc") {
			modal.animate([
				{ opacity: 1 },
				{ opacity: 0 }
			], {
				duration: 100,
			}).onfinish = function () {
				modal.style.display = "none";
			}
		}
	};
}

function typeLogin() {
	const username = document.getElementById('username');
	const login = "rrouille";
	let i = 0;
	function typeCharacter() {
		if (i < login.length) {
			username.value += login.charAt(i);
			i++;
			setTimeout(typeCharacter, 100);
		}
	}
	typeCharacter();
}

function closePopup() {
	document.getElementById('popup').style.display = 'none';
	document.getElementById('overlay').style.display = 'none';
	typeLogin();
}
