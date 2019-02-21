/* heure du jour */
var today = new Date();
	var d = today.getDate();
	var w = today.getDay();
    var c = today.getMonth();
    var y = today.getFullYear();
    var h = today.getHours();
    var min = today.getMinutes();
    var days = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
    var months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];

    function heure(){
    	if (min<10) {
    		min ="0"+min;
	    }

	if ((h>=12 && h<=15) || (h>=19 && h<=23) || (days=["Dimanche","Mardi","Mercredi","Jeudi","Vendredi","Samedi"])) {
		document.getElementById("time").innerHTML = days[w] + " " + d + " " + months[c] + " " + y + "," + " " + h + "h" + min + " " + "-------->" + " " + "Nous sommes ouvert!";


	} else {
		document.getElementById("time").innerHTML = days[w] + " " + d + " " + months[c] + " " + y + "," + " " + h + "h" + min + " " + "-------->" + " " + "Nous sommes fermé";	
	}
};

	heure();
