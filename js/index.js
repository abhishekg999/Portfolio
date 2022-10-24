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

window.onload = cookie_prompt_handler();