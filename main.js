
document.getElementById('submitA').addEventListener('click', () => {
	let elementA = document.getElementById('emisorA');
	let elementB = document.getElementById('receptorB');
	if (elementA.value == ""){
		document.getElementById('validacionA').innerHTML = 'El campo no debe estár vacío';
		document.getElementById('emisorA').style.borderColor = "#ff0080";
	}else{
		document.getElementById('validacionA').innerHTML = "";
		document.getElementById('emisorA').style.borderColor = "#ccc";
	}
	valor = elementA.value
	elementB.value = valor;
});


document.getElementById('submitB').addEventListener('click', () => {
	let elementB = document.getElementById('emisorB');
	let elementA = document.getElementById('receptorA');
	if (elementB.value == ""){
		document.getElementById('validacionB').innerHTML = 'El campo no debe estár vacío';
		document.getElementById('emisorB').style.borderColor = "#ff0080";
	}else{
		document.getElementById('validacionB').innerHTML = "";
		document.getElementById('emisorB').style.borderColor = "#ccc";
	}
	valor = elementB.value
	elementA.value = valor;
});

