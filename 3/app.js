var element = document.getElementById("5");

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

// setInterval(randSize, 1000);
function createPlayer(id, top, left){
$("#field").append('<div id='+id+' style=top:'+top+'px;margin-left:'+left+'px; class="circle">'+id+'</div>');
}

function createTeam(players){
	$("#field").html('<div></div>')
	for (var i =0; i<players;i++){
		createPlayer(randomNumer(1,12),randomNumer(10,580),randomNumer(10,980));
	}
}
setInterval(function(){
	createTeam(11);	
}
	, 1000);

// createTeam(11);
// createPlayer(randomNumer(1,12),randomNumer(1,440),randomNumer(1,480));
// createPlayer(randomNumer(1,12),randomNumer(1,440),randomNumer(1,480));
// createPlayer(randomNumer(1,12),randomNumer(1,440),randomNumer(1,480));
