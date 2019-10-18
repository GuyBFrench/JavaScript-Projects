function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride = " to ride.";
};

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    };
};

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " +Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
};

function Person(Name, Age, Origin, Quote) {
    this.Person_Name = Name;
    this.Person_Age = Age;
    this.Person_Origin = Origin;
    this.Person_Quote = Quote;
}

var Joe = new Person("Joe", 47, "Kentucky", "Go on den git!");
var Alucard = new Person("Alucard", 794, "Romania", "You done goofed!");
var Inigo = new Person("Inigo Montoya", 31, "Unknown", "\"Hello, my name is Inigo Montoya, you killed my father prepare to die!\"");
function functionPerson() {
    document.getElementById("New_and_This").innerHTML = 
    Inigo.Person_Name + "'s Origin is " + Inigo.Person_Origin + ". He is " + Inigo.Person_Age + " years old. His best quote is " + Inigo.Person_Quote;
}