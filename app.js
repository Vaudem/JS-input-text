var log = function(data){
	console.log(data);
};


var cake = function(n,f,q){
	return {
		name: n,
		flavour: f,
		quantity: q
	};
};


var inputName = document.getElementById("inputName");
var inputQuantity = document.getElementById("inputQuantity");
var inputFlavour = document.getElementById("inputFlavour");



var affiche = function(){
	var ul = document.querySelector("ul");
	var li = document.createElement("li");
	var createTxt = document.createTextNode(`You ordered ${inputQuantity.value} ${inputName.value}(s), flavour : ${inputFlavour.value}. Bon appétit!`);
	//var createTxt = document.createTextNode("You ordered " + inputQuantity.value + " " + inputName.value + ", flavour: " + inputFlavour.value + "." + "Bon appétit!")
	li.appendChild(createTxt);
	ul.appendChild(li);
	log(ul);
	}; 



var click = function(){
	var btn = document.getElementById("btn");
    btn.addEventListener("click", function(){
    	affiche();
    });
};




var start = function(){
	log(click());
};


window.addEventListener("DOMContentLoaded", start);
// pas start(), car on veut que la fonction s'exécute une fois que DOMContentLoaded a scanné.












