function myTickle() {
var str = "Hahaha!";
var result = str.fontcolor("red");
document.getElementById("Tickle_Me").innerHTML = result;
}

function myConcat() {
    var tickle = "This is for to concatenate";
    tickle += " to this!";
    document.getElementById("Concatenate").innerHTML = tickle;
}