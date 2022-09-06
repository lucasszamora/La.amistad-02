const nav= document.querySelector(".nav");
const boton= document.querySelector(".burger__link")


boton.addEventListener("click", () => {
    const visible = nav.getAttribute("data-visible")

if(visible === "false"){
 nav.setAttribute("data-visible",true)
 boton.setAttribute("aria-expanded",true)
}else if(visible === "true"){
 nav.setAttribute("data-visible", false)
 boton.setAttribute("aria-expanded",false)
 
}})
