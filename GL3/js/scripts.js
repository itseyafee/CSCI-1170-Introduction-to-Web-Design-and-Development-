document.getElementById("input-button").onclick = function () {

    let First_name = document.getElementById("firstname-input").value

    let handler = document.getElementById("chatterhandle-input").value

    let message = "Hi " + First_name + "Welcome to ChatterBox" + " :) " + "We have reserved a chatter handle called" + " @ "+ handler + "for you " + " ." + "Happy chatting"+"!"
     
    window.alert(message)
}

//Creating the function for enabling the dark mode 

    document.getElementById("dark-mode").onclick = function () {
  
    document.getElementById("pg-main-content").style.backgroundColor = "black"

//Code for Font colours

    document.getElementById("paragraph-1").style.color = "white"

    document.getElementById("paragraph-2").style.color = "white"

    document.getElementById("paragraph-3").style.color = "white"

    document.getElementById("paragraph-4").style.color = "white"

//Code for regester box

    document.getElementById("register-1").style.color = "white"

    document.getElementById("register-2").style.color = "white"

    document.getElementById("register-3").style.color = "white"

    document.getElementById("register-4").style.color = "white"
}