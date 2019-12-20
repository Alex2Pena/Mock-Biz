var computerOrder = function(){
    var computer = prompt ("Would you like to purchase a mac or pc");
    var answer = "";

    if(computer === "mac") {
        answer = "Awesome";
    } 
    else if(computer === "pc") {
        alert("Ewwwwwwww");
    }
    else {
        alert("Can't decide?")
    }
    return answer;
}




