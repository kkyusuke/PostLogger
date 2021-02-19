var url="https://example.com/";
chrome.storage.local.get(null, function(items) {
    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
            if(details.method=="POST"){
                const date = new Date();
                const now = date.toLocaleString()
                var history = items.history;
                if(history==null){
                    history = [now];
                }else{
                    history.unshift(now)
                    while(history.length>10){
                        history.pop()
                    }
                }
                chrome.storage.local.set({'history': history}, function() {
                });
            }
        },
        {urls: [items.url]}
    );
});
