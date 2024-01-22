const audio = document.querySelector('audio');
const container = document.querySelector('.container');
const audioDuration = document.querySelector('.duration');
const playAndin = document.querySelector('.play-andin');
const playBaiti = document.querySelector('.play-baiti');
const playSyai = document.querySelector('.play-syai');
const playRida = document.querySelector('.play-rida');
const playIrfan = document.querySelector('.play-irfan');
const playAgi = document.querySelector('.play-agi');
const playWang = document.querySelector('.play-wang');
var andin = document.getElementById("andin"); 
var baiti = document.getElementById("baiti"); 
var syai = document.getElementById("syai"); 
var rida = document.getElementById("rida"); 
var irfan = document.getElementById("irfan"); 
var agi = document.getElementById("agi"); 
var wang = document.getElementById("wang"); 
let isPlaying = false;

const toggleAndin = (event) => {
	if (isPlaying) {
		audio.pause()
		isPlaying = false
		playAndin.classList.remove('playing')
	} else {
		audio.play()
		isPlaying = true
		playAndin.classList.add('playing')
	}
}
const toggleBaiti = (event) => {
	if (isPlaying) {
		baiti.pause()
		isPlaying = false
		playBaiti.classList.remove('playing')
	} else {
		baiti.play()
		isPlaying = true
		playBaiti.classList.add('playing')
	}
} 

const toggleSyai = (event) => {
	if (isPlaying) {
		syai.pause()
		isPlaying = false
		playSyai.classList.remove('playing')
	} else {
		syai.play()
		isPlaying = true
		playSyai.classList.add('playing')
	}
} 

const toggleRida = (event) => {
	if (isPlaying) {
		rida.pause()
		isPlaying = false
		playRida.classList.remove('playing')
	} else {
		rida.play()
		isPlaying = true
		playRida.classList.add('playing')
	}
} 
const toggleIrfan = (event) => {
	if (isPlaying) {
		irfan.pause()
		isPlaying = false
		playIrfan.classList.remove('playing')
	} else {
		irfan.play()
		isPlaying = true
		playIrfan.classList.add('playing')
	}
}

const toggleAgi = (event) => {
	if (isPlaying) {
		agi.pause()
		isPlaying = false
		playAgi.classList.remove('playing')
	} else {
		agi.play()
		isPlaying = true
		playAgi.classList.add('playing')
	}
}

const toggleWang = (event) => {
	if (isPlaying) {
		wang.pause()
		isPlaying = false
		playWang.classList.remove('playing')
	} else {
		wang.play()
		isPlaying = true
		playWang.classList.add('playing')
	}
} 

audio.onloadedmetadata = () => {
	let minutes = Math.floor(audio.duration / 60)
	let seconds = Math.floor(audio.duration - minutes * 60)
	audioDuration.innerHTML = `${minutes}:${seconds}`
}