function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Tickle").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function my_Random() {
    var tickle_Random = window.alert(Math.random() * 100);
    document.getElementById("TopHat").innerHTML = "Random Number: " + tickle_Random;
}

function my_Pie() {
    var tickle_Pie = Math.PI;
    document.getElementById("HeckinBet").innerHTML = "PI: " + tickle_Pie;
}