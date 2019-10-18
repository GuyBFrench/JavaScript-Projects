function my_Dictionary() {
    var Favorite = {
        favColor: "Green",
        favNumber: 8,
        favPlace: "Home",
    };
    delete Favorite.favColor;
    document.getElementById("Favorite").innerHTML = Favorite.favColor;
};