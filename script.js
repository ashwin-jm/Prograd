let p1=0
let p2=0
let turn = 1
function calculateScore(){
	let no = Math.floor(Math.random()*6)+1
	if(turn==1){
		p1=p1+no
		turn = 2
		document.getElementById("p1").innerHTML = p1
		if(p1>=50){
			document.getElementById("btn").disabled = true;
			document.getElementById("winner").innerHTML = "Player 1 wins!!"
			
		}
	}
	else{
		p2=p2+no
		turn = 1
		document.getElementById("p2").innerHTML = p2
		if(p2>=50){
			document.getElementById("btn").disabled = true;
			document.getElementById("winner").innerHTML = "Player 2 wins!!"
			
		}
	}
}