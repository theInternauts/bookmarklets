javascript: (function(window) {
  var HOST_LIST = ['l.afar.com:3000','staging.afar.com','staging2.afar.com','www.afar.com'];
  var initialHostIndex = HOST_LIST.indexOf(window.location.host)
  if (initialHostIndex >= 0){
    window.stop();
    newHost = HOST_LIST[(initialHostIndex+1) % HOST_LIST.length]
    window.location.href = window.location.href.replace('https://', 'http://').replace(window.location.host, newHost);
  }else{
    console.log("You aren't starting on one of the AFAR URLs: ", HOST_LIST.toString())
  }
})(window);