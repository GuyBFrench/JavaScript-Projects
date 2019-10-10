function Le_function() {
    var hour = new Date().getHours();
    var hello;
    if (hour < 10) {
        hello = "Good morning";
    } else if (hour < 20) {
        hello = "Good day!";
    } else {
        hello = "Good evening";
    }
    document.getElementById("LeButton").innerHTML = hello;    
    
};

