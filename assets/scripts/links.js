(function () {
    // mark all external links as target=_blank and rel=noopener
    var links = document.links;
    for (var i = 0; i < links.length; i++) {
        if (window.location.hostname != links[i].hostname) {
            links[i].target = '_blank';
            links[i].rel = 'noopener';
        }
    }
})();