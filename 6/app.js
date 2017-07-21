function randomNumer(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//dynamically add player
function createPlayer(id, top, left){
$("#field").append('<div id='+id+' style=top:'+top+'px;margin-left:'+left+'px; class="circle">'+id+'</div>');
}


function createTeam(players){
	$("#field").html('<div></div>')
	for (let i =0; i<players;i++){
		createPlayer(randomNumer(1,12),randomNumer(10,650),randomNumer(10,980));
	}
}

// setInterval(function(){
// 	createTeam(11);	
// }
// 	, 1000);

// createPlayer(randomNumer(1,12),randomNumer(1,440),randomNumer(1,480));


		console.log(data);
		// data.player_positions.length;
		for (let i =0; i<data.player_positions.length; i++) {
			(function myLoop (time) {          
			   setTimeout(function () {   
			    
			  	$("#field").html('<div></div>');    
			for(let j = 0;j<data.player_positions[i].length;j++){
				for(let k=0; k<3;k++){
					switch(k) {
					    case 0:
					        var playerId = data.player_positions[i][j][k]
					        break;
					    case 1:
					        var coordinateX = data.player_positions[i][j][k]*1000;
					        break;
					     case 2:
					        var coordinateY = data.player_positions[i][j][k]*1000;
					        break;
					    default:
					        console.log("error");
					}
					// console.log(data.player_positions[i][j][k]);
				}
				console.log(data.player_positions[i][j]);
				createPlayer(playerId,coordinateX,coordinateY);
			}
			// console.log(data.player_positions[i]);

			      if (--time) myLoop(time);      //  decrement time and call myLoop again if time > 0
			   }, 100)
			})(100); 



			// for(let j = 0;j<data.player_positions[i].length;j++){
			// 	for(let k=0; k<3;k++){
			// 		switch(k) {
			// 		    case 0:
			// 		        var playerId = data.player_positions[i][j][k]
			// 		        break;
			// 		    case 1:
			// 		        var coordinateX = data.player_positions[i][j][k]*1000;
			// 		        break;
			// 		     case 2:
			// 		        var coordinateY = data.player_positions[i][j][k]*1000;
			// 		        break;
			// 		    default:
			// 		        console.log("error");
			// 		}
			// 		// console.log(data.player_positions[i][j][k]);
			// 	}
			// 	console.log(data.player_positions[i][j]);
			// 	createPlayer(playerId,coordinateX,coordinateY);
			// }
			// // console.log(data.player_positions[i]);
		}

		// console.log(playerId);
		// console.log(coordinateX);
		// console.log(coordinateY);
		// createPlayer(playerId,coordinateX,coordinateY);