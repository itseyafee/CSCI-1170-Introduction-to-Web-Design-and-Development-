/* 
 * Main scripts file for the timetable website.
 * Assignment 4, CSCI 1170, Winter 2022
 * Starter code provided by Dr. Raghav V. Sampangi
 */

let bag = document.getElementsByClassName("container")
let containerSection=document.createElement("section")



containerSection.className = "course-info"

for(let content in courseInfo){
    let section = document.createElement('section')
    section.className = "course-offering-info"


let heading = document.createElement("h1")
let paragraph = document.createElement("p")
let paragraph1 = document.createElement("p")
let paragraph2 = document.createElement("p")
let paragraph3 = document.createElement("p")
let button = document.createElement("button")


button.addEventListener("click",print)


heading.innerHTML = courseInfo[content].code + ": " + courseInfo[content].name
paragraph.innerHTML = courseInfo[content].prof
paragraph1.innerHTML = "currentEnrollment: " + courseInfo[content].currentEnroll + "(max: " + courseInfo[content].name
paragraph2.innerHTML = "Location: " + courseInfo[content].location + "\n" + "(schedule: " + courseInfo[content].schedule
paragraph3.innerHTML = courseInfo[content].info
button.innerHTML = "Sign up for course"

paragraph3.appendChild(button)
paragraph2.appendChild(paragraph3)
paragraph1.appendChild(paragraph2)
paragraph.appendChild(paragraph1)

heading.appendChild(paragraph)

section.appendChild(heading)
containerSection.appendChild(section)

function print(){
    let para=document.createElement("p")
    para.innerHTML=courseInfo[content].code+": " + courseInfo[content].name + "\n"
    let doc=document.getElementsByClassName("course-selection-bag")
    doc[0].appendChild(para)
}

}

bag[0].appendChild(containerSection)