var historyArea = document.getElementById("history");

var urlArea = document.getElementById("url");
chrome.storage.local.get(null, function(items) {
    urlArea.value = items.url;
    var dump="";
    for(i in items.history){
        dump+=items.history[i]+"<br>"
    }
    historyArea.innerHTML = dump;
});

var urlChange = document.getElementById("urlChange");
urlChange.addEventListener("click", function() {
    chrome.storage.local.set({'url': urlArea.value}, function() {
        chrome.runtime.reload()
    });
});