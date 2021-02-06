let boton = document.getElementById('icono'),
	enlaces = document.getElementById('enlaces'),
	body = document.getElementById('body'),
	contador = 0;

boton.addEventListener("click", function () {
	// body...
	if (contador == 0) {
		enlaces.className = ('enlaces dos');
		contador = 1;
		boton.style.color = 'white';
		body.style.overflow = 'hidden'
	} else {
		enlaces.classList.remove('dos');
		enlaces.className = ('enlaces uno');
		contador = 0;
		boton.style.color = 'black';
		body.style.overflow = 'scroll'
	}
})