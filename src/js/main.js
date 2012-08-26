var boardIds = {a0: null,a1: null,a2: null,b0: null,b1: null,b2: null,c0: null,c1: null,c2: null};
var player = Math.floor(Math.random()*10)%2; // random value: 1 or 0
var plays = 0;
var resetButton = null;

window.addEventListener('load',initGame, false);
window.addEventListener('click',MainMorpion, false);

function MainMorpion(event){
	var id = event.originalTarget.id;
	if(id in boardIds){
		if(boardIds[id] == null){
			console.log('DEBUG: The clicked id\'s element : '+id);
			if(player%2) { // player 1
				alert('Player 1');
				document.getElementById(id).innerHTML = 'O'
				boardIds[id] = 'O';
			}else{
				alert('Player 2');
				document.getElementById(id).innerHTML = 'X'
				boardIds[id] = 'X';
			}
			plays++;
			if(gameOver())
				return true;
			player++;
		}else
			alert('Already taken ! choose another one !');
	}else
		console.log('DEBUG: Nothing todo');
}

function gameOver() {

	if(plays==9 || isThereAWinner()){
		alert('GameOver !');
		if(isThereAWinner() === 'OOO'){
			alert('Player : 1 is the winner !');
		}else if(isThereAWinner() === 'XXX')
			alert('Player : 2 is the winner !');
		
		resetButton.disabled = false;
		return true;
	}
	return false
}

function isThereAWinner(){
	var res = '';
	var cols = 'abc';
	// look if we have a completed line
	for(i=0; i < 3; i++){
		for(j=0;j<3;j++)
			res += boardIds[cols[i]+j];
		console.log('LINES: '+res);
		if(res === 'OOO' || res === 'XXX')
			return res;
		res = '';
	}
	
	res = '';
	// look if we have a completed column
	for(i=0; i<3;i++){
		for(j=0; j<3; j++)
			res += boardIds[cols[j]+i];
		console.log('COLS : '+res);
	 	if(res === 'OOO' || res === 'XXX')
			return res;
		res = '';
	}

	// look if we have a completed diag
	res = boardIds['a0']+boardIds['b1']+boardIds['c2'];
	console.log('DIAG1: '+res);	
 	if(res === 'OOO' || res === 'XXX')
		return res;

	// look if we have a completed diag
	res = boardIds['a2']+boardIds['b1']+boardIds['c0'];
	console.log('DIAG2: '+res);	
 	if(res === 'OOO' || res === 'XXX')
		return res;

	return null;
}

function resetGame() {
	resetButton.disabled = true;
	cols = 'abc';
	for(i=0; i<3; i++){
		for(j=0; j<3; j++){
			id = cols[i]+j;
			boardIds[id] = null;
			document.getElementById(id).innerHTML = id;
		}
	}
}

function initGame(){
	resetButton = document.getElementById('reset');
}
