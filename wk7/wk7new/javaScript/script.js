function output(){
	<!--[insert user name], thank you for your details.--> 
	<!--We will be in touch via [insert user email] shortly-->
	document.getElementById("name").innerHTML+=name+=", thank you for your details. ";
	document.getElementById("email").innerHTML+="We will be in touch via "+=email+=" shortly.";
	hideForm()
}	

function hideForm(){
	document.getElementById("hide").style/style.css.display = "none";
}