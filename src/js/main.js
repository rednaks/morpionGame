var boardIds = {a0: null,a1: null,a2: null,b0: null,b1: null,b2: null,c0: null,c1: null,c2: null};
var player = Math.floor(Math.random()*10)%2; // random value: 1 or 0
var plays = 0;
window.addEventListener('click',MainMorpion, false);

function MainMorpion(event){
	var id = event.originalTarget.id;
	if(id in boardIds){
		console.log('DEBUG: The clicked id\'s element : '+id);
		if(player%2) { // player 1
			alert('Player 1');
			document.getElementById(id).innerHTML = 'O'
		}else{
			alert('Player 2');
			document.getElementById(id).innerHTML = 'X'
		}
		plays++;
		gameOver();
		player++;
	}else
		console.log('DEBUG: Nothing todo');
}

function gameOver() {

	if(plays==9){
		alert('GameOver !');
		alert('Player : '+((player%2)+1)+' is the winner !');
	}
}
