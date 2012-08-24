var boardIds = {a0: null,a1: null,a2: null,b0: null,b1: null,b2: null,c0: null,c1: null,c2: null};
window.addEventListener('click',MainMorpion, false);

function MainMorpion(event){
	var id = event.originalTarget.id;
	if(id in boardIds){
		console.log('DEBUG: The clicked id\'s element : '+id);
	}else
		console.log('DEBUG: Nothing todo');
}
