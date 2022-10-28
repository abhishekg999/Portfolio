function cookie_prompt_handler(){
    setInterval(() => {
        document.getElementById('cookie-prompt').classList.add("show"); 
        setInterval(() => {
            if (document.getElementById('cookie-prompt') != null && document.getElementById('cookie-prompt').classList.contains("show")){
               document.getElementById('cookie-prompt').classList.remove("show") 
            }
        }, 10000);
    }, 1000);   
}

function sleep(time, callback){
    setInterval(callback, time);
}

function init_main() {
    var header = document.getElementById("header");
    var self_in = document.getElementById("self-intro");
    header.classList.remove("opacity-0")

    sleep(500, function() {

    });
}

var app = angular.module("portfolio", []);
window.addEventListener('load', function() {
    var loading_screen = document.getElementById("loading-screen");
    var loading_logo = document.getElementById("loading-logo");

    loading_logo.addEventListener("animationend", function(event) {
        sleep(100, function () {
            loading_screen.classList.add("opacity-0")
            loading_screen.addEventListener("transitionend", function(event) {
                loading_screen.classList.add("d-none"); 
                init_main(); 
            });
        })

    });
});







