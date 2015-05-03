javascript: (function(window) {
  var DOMAIN_LIST = ['l.afar.com:3000','staging.afar.com','staging2.afar.com','www.afar.com'];
  var newIndex = DOMAIN_LIST.indexOf(window.location.host)
  if (newIndex >= 0){
    window.stop();
    newD = DOMAIN_LIST[(newIndex+1) % DOMAIN_LIST.length]
    window.location.href = window.location.href.replace(window.location.host, newD)
  }else{
    console.log("You aren't starting on one of the AFAR URLs: ", DOMAIN_LIST.toString())
  }
})(window);