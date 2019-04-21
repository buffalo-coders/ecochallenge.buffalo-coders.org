(function () {
    var sitenav = document.getElementById("sitenav");
    var offsetTop = sitenav.offsetTop;

    window.onscroll = function () {
        if (window.pageYOffset >= offsetTop) {
            sitenav.classList.add("sticky")
        } else {
            sitenav.classList.remove("sticky");
        }
    };
})();