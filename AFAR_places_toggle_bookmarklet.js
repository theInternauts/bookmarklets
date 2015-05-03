javascript: (function(url) {
  var newURL = url;
  console.log("in: ", newURL);

  if(newURL.indexOf('/highlights/') >= 0) {
    newURL = newURL.replace('/highlights/', '/places/');
    if (newURL.indexOf('&open=sesame') < 0 && newURL.indexOf('?open=sesame') < 0) {
      (newURL.indexOf('?') >= 0) ? newURL+='&open=sesame' : newURL += '?open=sesame';
    }
  } else {
    newURL = newURL.replace('/places/', '/highlights/');
  }

  console.log(newURL);
  window.location.href = newURL;
})(window.location.href);