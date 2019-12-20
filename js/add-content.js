// var computerOrder = function(){
//     var computer = prompt ("Would you like to purchase a mac or pc");
//     var answer = "";

//     if(computer === "mac") {
//         answer = "Awesome";
//     } 
//     else if(computer === "pc") {
//         alert("Ewwwwwwww");
//     }
//     else {
//         alert("Can't decide?")
//     }
//     return answer;
// }




var showOrder = function(){
    var order = prompt("Would you like a Mac or PC?");
    var item;
    var quantity;
    var cart = "";

    while(order !== "Mac" && order !== "PC") {
        order = prompt("Please choose Mac or PC...");
    }
    // Ask for quantity
    quantity = prompt("How many would you like?");
    quantity = Number(quantity);
    // Validate the input
    while(isNaN(quantity)) {
        quantity = prompt("Please input a quantity");
        quantity = Number(quantity);
    }
    if (order === "Mac"){
        item = '<img src="Images/mac pic.jpg">';
    }
    else {
        item = '<img src="Images/pc pic.png">';
    }
    //Build a list of items
    for(var i= 0; i < quantity; i++){
        cart = cart + item;
    }
    return cart;
}