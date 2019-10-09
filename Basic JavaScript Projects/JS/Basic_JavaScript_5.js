function my_Function() {
    var X = 2e310;
    document.getElementById("BetFam").innerHTML = "Number is " + X;
};

var my_Word = "Tickle";

document.write(typeof "my_Word");

console.log(2>3);

document.write("10" + 5);

document.write(10==10);

document.write(10==12);

document.write(10==="12");

document.write(10===10);

document.write(10==="10");

document.write(10==12 && 10==10);

document.write(10==10 && 12==12);

document.write(10==12 || 10==10);

document.write(10==10 || 12==12);

document.write(10==12);

document.write(10===12);

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 20);
}