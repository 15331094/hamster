var circle=new Array("one-one","one-two","one-three","one-four","one-five","one-six","one-seven","one-eight","one-nine","one-ten",
	"two-one","two-two","two-three","two-four","two-five","two-six","two-seven","two-eight","two-nine","two-ten",
	"three-one","three-two","three-three","three-four","three-five","three-six","three-seven","three-eight","three-nine","three-ten",
	"four-one","four-two","four-three","four-four","four-five","four-six","four-seven","four-eight","four-nine","four-ten",
	"five-one","five-two","five-three","five-four","five-five","five-six","five-seven","five-eight","five-nine","five-ten");

var time = 30;
var START = false;
var hamster;
var next;


function start() {
	if (!START && time == 30) {

		time = 30;
		document.getElementById("clock").value = "30";
		document.getElementById("scorenum").value = "0";

		hamster = Math.ceil(Math.random()*50) - 1;

		var Hamster=document.getElementById(circle[hamster]);
		Hamster.style.borderWidth="3px";
		Hamster.style.borderColor="blue";

		document.getElementById("gameover").value = "Game Satrt";

		START = true;
	}
	else if(START && time != 30) {
		START = false;
		document.getElementById("gameover").value = "Game Stop";
	}
	else if(!START && time != 30) {
		START = true;
		document.getElementById("gameover").value = "Game Satrt";
	}
}


var timer = setInterval(function(){
	if (START) {
		if(time== -1){
        	clearInterval(timer);
        }else{
        	document.getElementById("clock").value = time;
        	--time;
        	if(time == -1) {
        		document.getElementById("gameover").value = "Game Over";
        		document.getElementById(circle[hamster]).style.borderColor = "black";
				document.getElementById(circle[hamster]).style.borderWidth = "1px";
				alert("Game Over!\n" + "You Score: " + document.getElementById("scorenum").value);
				START = false;
				time = 30;
        	}
    	}
	}
},1000);



function hit(num) {
	if(START && time >= 0 && num == hamster) {
		document.getElementById(circle[hamster]).style.borderColor = "black";
		document.getElementById(circle[hamster]).style.borderWidth = "1px";

		for(;;) {
        	next = Math.ceil(Math.random()*50) -1;
        	if(next != hamster) {
        		hamster = next;
        		break;
        	}
        }
		document.getElementById(circle[hamster]).style.borderColor = "blue";
		document.getElementById(circle[hamster]).style.borderWidth = "3px";
		document.getElementById("scorenum").value = parseInt(document.getElementById("scorenum").value) + 1 + "";
	}

	else if(START && time >= 0 && num != hamster) {
		document.getElementById("scorenum").value = parseInt(document.getElementById("scorenum").value) - 1 + "";
	}
}