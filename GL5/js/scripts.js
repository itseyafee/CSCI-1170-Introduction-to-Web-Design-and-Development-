let button = document.querySelector("#input-button")

button.addEventListener("click", helper)

function helper(){
    
    let Firstname = document.getElementById("firstname-input").value

    let Lastname = document.getElementById("lastname-input").value

    let email = document.getElementById("email-input").value

    let MessageSubject = document.getElementById("Message-subject").value

    let MessageInput = document.getElementById("Message-input").value
    

const obj = {
    firstName: Firstname, lastName: Lastname, email: email, messageSubject: MessageSubject, message: MessageInput
}

console.log(obj)

let likha = JSON.stringify(obj)
console.log(likha)

let textMessage;

if(confirm(likha + "This is the data you have submitted. Are you sure you wish to submit the message?") == true){
    
    let container = document.querySelector(".container")
    let section1 = document.getElementsByClassName("contact-section").value
    let examplesec=document.createElement("section")

    let heading =document.createElement("h2")
    heading.innerHTML="The information you submitted."

    examplesec.appendChild(heading)
 

    let join = JSON.parse(likha)
    console.log(join)
    let unorderList=document.createElement("ul")
    
    for(content in join){
        let list =document.createElement("li")
        list.innerHTML+=join[content]
        unorderList.appendChild(list)
        console.log()
    }

    examplesec.appendChild(unorderList)
    container.appendChild(examplesec)
    console.log
}


else{
    text = "Thank you. Your message was not submitted.";
    window.alert(text)
}
}
