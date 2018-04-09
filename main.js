searchGoogle = function(word){
    var query = word.selectionText;
    chrome.windows.create({url: "http://www.google.com/search?q=" + query, "incognito": true});
 };


chrome.contextMenus.create({
 title: "Search selection in Google InCognito",
 contexts:["selection"],
 onclick: searchGoogle
});