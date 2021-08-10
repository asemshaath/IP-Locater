
// https://maps.google.com/maps?q=Portland,Oregon,UnitedStates&t=&z=13&ie=UTF8&iwloc=&output=embed


var api = "https://ipapi.co/json/";

var googleMap1 = "https://maps.google.com/maps?q=";
var googleMap2 = "&t=&z=13&ie=UTF8&iwloc=&output=embed";

var ip;
var placeName; // city, country e.g.(London, England or New York, USA)
var long;
var lat;



function load(){

    loadAPI();
}

async function loadAPI(){


    // alert("Page Loaded");

    const response = await fetch(api);
    const data = await response.json();

    // init vars
    ip = data["ip"];
    placeName = data["city"] + ", " + data["region"] + ", " + data["country_name"];
    long = data["longitude"];
    lat = data["latitude"];
    countryCode = data["country"]

    console.log(ip);
    console.log(placeName);
    console.log(long);
    console.log(lat);

    // alert(ip + "\n" + placeName + "\n" + long + "\n" + lat);

    document.getElementById("ipAddress").innerHTML = ip;
    document.getElementById("location").innerHTML = placeName;
    document.getElementById("flag").src = "https://www.countryflags.io/" + countryCode +"/flat/64.png";
    document.getElementById("map").src = googleMap1 + lat + " " + long + googleMap2;

}