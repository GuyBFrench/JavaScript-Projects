function Call_Loop() {
    var text = "";
    var i = 0; 
    while (i < 15) {
        text += "<br>The number is " + i;
        i++;
    }
    document.getElementById("Loop").innerHTML = text;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>"; 
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function constant_Function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}