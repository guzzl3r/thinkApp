var time_title = document.querySelector('.time-title')
const socket = io('http://127.0.0.1:3000')
//var data = require('electron').remote.getGlobal('sharedObject').example, esto uede servir para pasar los días activos
			
function setTime() {
	let date = new Date()
	let time = date.toLocaleTimeString()
	time_title.innerHTML = time
}
			
const createClock = setInterval(setTime, 1000)

document.querySelector('.submit-button').addEventListener('click',  function() {
	var input_value = $('#input').val()
	$('#input').val('')
	var error = document.querySelector('.error')
	if (input_value != '') {
		var date = new Date()
		error.style.display = 'none'

		console.log(input_value)
		var data = {text: input_value, date: date.toLocaleString()}
		console.log(data)

		socket.emit('note', data)
	}else {
		console.log('Sorry, try another time')

		error.innerHTML = 'PLEASE COMPLETE THE FORM'
		error.style.display = 'block'
	}

	document.querySelector('.form-control').focus()
})
//Esta es la única lógica admitida para este tipò de codigo?
//Qué pense yo en este momento, que complicado es esto de acordarse de cosas.