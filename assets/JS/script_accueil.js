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

(function(){
/* nom du visiteur */
var nom = prompt("Quel est votre prénom?");
document.getElementById("question").innerHTML = "Bonjour" + " " + nom + " " + "!";

})();