function randomNumer(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createPlayer(id, top, left){
$("#field").append('<div id='+id+' style=top:'+top+'px;margin-left:'+left+'px; class="circle">'+id+'</div>');
}

function createTeam(players){
	$("#field").html('<div></div>')
	for (let i =0; i<players;i++){
		createPlayer(randomNumer(1,12),randomNumer(10,650),randomNumer(10,980));
	}
}
setInterval(function(){
	createTeam(11);	
}
	, 1000);

// createPlayer(randomNumer(1,12),randomNumer(1,440),randomNumer(1,480));
