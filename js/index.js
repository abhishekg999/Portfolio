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

function csleep(time, callback){
    setInterval(callback, time);
}

function init_main() {
    var name_header = document.getElementById("name-header");
    name_header.classList.remove("opacity-0");
}

var app = angular.module("portfolio", []);
window.addEventListener('load', function() {

    var loading_screen = document.getElementById("loading-screen");
    var loading_logo = document.getElementById("loading-logo");
    var loading_svg = document.getElementById("loading-svg");
    var name_header = document.getElementById("name-header");

    if (!loading_screen.classList.contains("d-none")){
        name_header.classList.add("opacity-0")

        loading_logo.addEventListener("animationend", function(event) {
            csleep(500, function(){
                loading_screen.classList.add("opacity-0")
                if (!loading_screen.classList.contains("d-none")){
                    loading_screen.addEventListener("transitionend", function(event) {
                        loading_screen.classList.add("d-none");
                        csleep(200, function(){    
                            init_main(); 
                        });
                    });    
                }
            });  
        });
    }
    
});





