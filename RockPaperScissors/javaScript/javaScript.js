function result(outcome){
	//user choice
	let userChoice=outcome;
	//consolePrint userChoice 
	console.log(userChoice);
	
	//computer array
	const compArray=["Rock","Paper","Scissors"];
	//consolePrint compArray
	console.log(compArray);
	//computer choice
	let compChoice=compArray[parseInt(Math.random()*3)];
	//consolePrint compChoice
	console.log(compChoice);
	
	//game - if statements
	if(userChoice==compChoice){
		msg="Draw. Please Try Again!";
	}
	else if(userChoice=="Rock"){
		if(compChoice=="Paper"){
			msg="You Win! Well Done!";
		}
		else if(compChoice=="Scissors"){
			msg="You Lose. Please Try Again!";
		}
	}
	else if(userChoice=="Paper"){
		if(compChoice=="Rock"){
			msg="You Win! Well Done!";
		}
		else if(compChoice=="Scissors"){
			msg="You Lose. Please Try Again!";
		}
	}
	else if(userChoice=="Scissors"){
		if(compChoice=="Rock"){
			msg="You Lose. Please Try Again!";
		}
		else if(compChoice=="Paper"){
			msg="You Win! Well Done!";
		}
	}
	//hide the options
	if(msg=="You Win! Well Done!"){	
		document.getElementById("RPS").style.display = "none";
	}
	//print statement to user
	document.getElementById("message").innerHTML=msg;
}