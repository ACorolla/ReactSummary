function queryApi(url, sucCallback, errCallback) {
  var xhr, result;
  xhr = new XMLHttpRequest();
  xhr.open('GET',url,true);
  xhr.onload = function (e) {
    if(xhr.status === 200) {
      sucCallback(JSON.parse(xhr.responseText));
    } else {
      errCallback(new Error(xhr.statusText));
    }
  };
  xhr.onerror =function () {
    errCallback(new Error(xhr.statusText));
  };
  xhr.send();
}