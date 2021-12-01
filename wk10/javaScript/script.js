// wk10 Lab
//Create a grocery list application where users can add and remove items from a list. 
//The list should be displayed as a bulleted unordered list

var shoppingItems=[];
//let shoppingItems=["eggs","milk","chocolate"];

function listItems(){
	//getting rid of old list
	document.getElementById("List").innerHTML=("");
	//want to list items
	//shoppingItems=[];
	for(i=0;i<shoppingItems.length;i++){
		document.getElementById("List").innerHTML+=("<li>"+shoppingItems[i]+"</li>");
		//document.getElementById("List").innerHTML+=("<li>"+shoppingItems.toString+"</li>");
	}
}
function addToList(){
	//alert("Test"); - worked
	//prompt("Test"); - worked
	var amount=parseInt(prompt("How many items would you like to add ?"));
	//traversing array to populate items
	for(i=0;i<amount;i++){
		shoppingItems[i]=prompt("Please enter an item to add to your shopping list");
	}
	listItems();
}	
function addItemTop(){
	shoppingItems.unshift(prompt("Please enter item to add to the top of your shopping list"));
	listItems();
}
function addItemBottom(){
	shoppingItems.push(prompt("Please enter item to add to the end of your shopping list"));
	listItems();
}
function removeItemsTop(){
	alert("Removing "+shoppingItems.shift()+" from your shopping list");
	listItems();
}
function removeItemsBottom(){
	alert("Removing "+shoppingItems.pop()+" from your shopping list");
	listItems();
}
function addItemToSecondPostion(){
	shoppingItems.splice(1,0,prompt("Enter item to add to second from the top of your list"));
	listItems();
}
function addItemTothirdPostion(){
	shoppingItems.splice(2,0,prompt("Enter item to add to third from the top of your list"));
	listItems();
}
function addItemTOAnyWhere(){
	userPostion=(parseInt(prompt("What postion would you like to add an item to?"))-1);
	shoppingItems.splice(userPostion,0,prompt("Enter item to add to "+((userPostion)+1)+" from the top of your list"));
	listItems();
}
function removeItemFromAnyWhere(){
	userPostion=(parseInt(prompt("What postion would you like to remove an item from?"))-1);
	//shoppingItems.splice(userPostion,1,alert("Item will be removed from "+((userPostion)+1)+" from the top of your list"));
	shoppingItems.splice(userPostion,1);
	alert("Item will be removed from "+((userPostion)+1)+" from the top of your list")
	listItems();
}
