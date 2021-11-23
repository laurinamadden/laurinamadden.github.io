//wk7 javaScript File
function output(){
	<!--stop page from refreshing-->
	event.preventDefault();
	<!--hide the form-->
	document.getElementById("hideForm").style.display = "none";
	<!--get name and email from input on html--> 
	var name=document.getElementById("formName").value;
	var email=document.getElementById("formEmail").value;
	<!--[insert user name], thank you for your details.--> 
	<!--We will be in touch via [insert user email] shortly-->
	alert(name+", thank you for your details. We will be in touch via "+email+" shortly");
}	
