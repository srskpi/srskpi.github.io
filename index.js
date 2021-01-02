// after click the button, copy to clipboard email adress

// https://www.openstreetmap.org/#map=19/50.44688/30.45148 - shtab srs
// Making a map and tiles
const mymap = L.map("location").setView([50.44688, 30.45148], 18);
const attribution =
  'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>';
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, {
  attribution
});
tiles.addTo(mymap);

const marker = L.marker([50.44688, 30.45148]).addTo(mymap);

/*
https://mail.google.com/mail/?view=cm&fs=1&to=srs@kpi.ua&su=Зміни тему на більш відповідну
*/