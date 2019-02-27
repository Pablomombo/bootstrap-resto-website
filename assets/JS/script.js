// register service worker - BEGINNING
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/bootstrap-resto-website/assets/JS/sw.js', { scope: '/bootstrap-resto-website/' }).then(function(reg) {

    if(reg.installing) {
      console.log('Service worker installing');
    } else if(reg.waiting) {
      console.log('Service worker installed');
    } else if(reg.active) {
      console.log('Service worker active');
    }

  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}
// register service worker – END

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
	    
	if ((h>=12 && h<=15) || (h>=19 && h<=23) || (days[w]==["Dimanche","Mardi","Mercredi","Jeudi","Vendredi","Samedi"])) {
		document.getElementById("time").innerHTML = days[w] + " " + d + " " + months[c] + " " + y + "," + " " + h + "h" + min + " " + "-------->" + " " + "Nous sommes ouvert!";


	} else {
		document.getElementById("time").innerHTML = days[w] + " " + d + " " + months[c] + " " + y + "," + " " + h + "h" + min + " " + "-------->" + " " + "Nous sommes fermé";	
	}
};

	heure();
