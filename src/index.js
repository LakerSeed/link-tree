const theme_switch = document.getElementById("theme")
const html = document.body
const buttons = document.querySelectorAll(".button")
const modal = document.getElementById("modal")

//theme switch logic
theme_switch.addEventListener("change",function myfunction(){
    html.classList.toggle("light")
})

// variable that stores a link value
let address

// this function show the modal and assing a value to adress
function goToLink(link){
    //reset the animation
    modal.classList.remove('disappear')
    modal.classList.add('appear')
    modal.style.display = "flex"
    address = link.value
}
//this function manage if the user really want go to another page
function confirm(i){
    if(i.value == "open"){
        window.open(address)
        modal.classList.remove('appear')
        modal.classList.add('disappear')
        setTimeout(closeModal, 500)
    }
    else
        modal.classList.remove('appear')
        modal.classList.add('disappear')
        setTimeout(closeModal, 500)
}
function closeModal(){
    modal.style.display = "none"
}