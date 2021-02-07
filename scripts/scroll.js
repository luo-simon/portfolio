function scrollTo(id) {
    $('html, body').animate({
        scrollTop: $("#" + id).offset().top
    }, 1000);
}
document.getElementById("scroll_btn_down").onclick = function () { scrollTo("scroll_btn_up"); };
function scrollTo(id) {
    $('html, body').animate({
        scrollTop: $("#" + id).offset().top
    }, 1000);
}
document.getElementById("scroll_btn_up").onclick = function () { scrollTo("network_bg"); };