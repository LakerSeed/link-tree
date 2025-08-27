const theme_switch = document.getElementById("theme")
const html = document.body
theme_switch.addEventListener("change",function myfunction(){
    html.classList.toggle("light")
}) 
function gotolink(link){
    alert(link.value)
}