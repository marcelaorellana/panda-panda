//Panda Panda
var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];

var fotos = document.getElementById("fotosId");
pictures.forEach(function(valor){
	fotos.innerHTML += "<a class='xxx' href='#'>x</a><img class='fotitos' src=" + valor + "> ";
}); 

var cerrar = Array.from(document.getElementsByClassName("xxx"));
var cajas = Array.from(document.getElementsByClassName("fotitos"));

var botonOrigen = document.getElementById("origen");
var botonextincion = document.getElementById("extincion");
var botonRestaurar = document.getElementById("restaurar");


cajas.forEach(function(e){	
	e.addEventListener("click", function(){
		this.classList.toggle("no");
	}); 
});
	
botonRestaurar.addEventListener("click", function(el){
		
	el.preventDefault();

	cajas.forEach(function(e){
		e.classList.remove("no");
	});
		
});

//document.getElementById("lorem1")
botonOrigen.addEventListener("click", function(){
	document.getElementById("lorem1").classList.toggle("no");
});
botonextincion.addEventListener("click", function(){
	document.getElementById("lorem2").classList.toggle("no");
});