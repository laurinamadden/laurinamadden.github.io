//Rock Paper Scissors javaScript file with for loop
function game(){
	for(i=0;i<=2;i=i+1){
//		if(i<3){ 
//		while(i<=2){
			result(outcome);
//		}
		//console.log("Test");
//		else{
//			document.getElementById("TryAgain").innerHTML="You have had three tries. Game Over.";
//			document.getElementById("RPS").style.display = "none";
		}
//	}
}	
function result(outcome){
//tried for loop on so many lines and couldnt get it to stop looping

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
	
	//print statement to user
	document.getElementById("message").innerHTML=msg;

	//hide the options
	if(msg=="You Win! Well Done!"){	
		document.getElementById("RPS").style.display = "none";
	}
	
	
}
