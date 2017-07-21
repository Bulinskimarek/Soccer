var element = document.getElementById("circle");

function move(){
  
  element.style.marginLeft=randSize();
}

function randSize(){
	randomSize = randomNumer(1, 500);
	element.style.marginLeft = randomSize+"px";
	element.style.top = randomSize+"px";
    
}

function randomNumer(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//setInterval(randSize, 1000);