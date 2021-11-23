//wk9 Song javaScript
function song(){		
	//trying confirm pop up
	//set up of choice confirm pop up
	var choice=false;
	choice=confirm("Would you like to see the lyrics for 99 Green Bottles On The Wall?");
	if(choice==true){
		//song loop
		for(i=99;i>=0;i=i-1){
			//song if statements
			if(i==1){
				song="1 green bottle hanging on the wall, If 1 green bottle should accentently fall, there would be no green bottles hanging on the wall. <br />";
				//console.log("Test");
				document.getElementById("lyrics").innerHTML+=song;
			}
			else if(i==0){
				song="No green bottles hanging on the wall, no more bottles hangin on the wall... so why not... go buy some more ! 99 bottles hanging on the wall...";
				document.getElementById("lyrics").innerHTML+=song;
			}
			else{
				song=i+" green bottles hanging on the wall, If 1 green bottle should accentently fall, there would be "+(i-1)+" green bottles hanging on the wall.  <br />";
				document.getElementById("lyrics").innerHTML+=song;
			}
		}
	}
	<!--hide the button-->
	document.getElementById("hideButton").style.display = "none";
}			