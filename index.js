// ======== VARIABLES ================

const $ = (selector) => document.querySelector(selector)

// ======== VENTANA MODAL ============

// $("#close-window-image").addEventListener("click", ()=>{
//     $("#window-image-container").style.display= "none"
// })

// $ ("#open-window-image").addEventListener("click", ()=>{
//     $("#window-image-container").style.display= "block"
// })


// $ ("#open-window-title").addEventListener("click", ()=>{
//     $("#window-title-container").style.display= "block"
// })

// $("#close-window-title").addEventListener("click", ()=>{
//     $("#window-title-container").style.display= "none"
// })

// =======================MODO CLARO MODO OSCURO=======================

$(".change-mode").addEventListener("click", ()=>{
    const currentTheme = $("body").getAttribute("change-theme")
    if (currentTheme){
        $("body").removeAttribute("change-theme", "light-theme")
    }else{
        $("body").setAttribute("change-theme", "light-theme")
    }
    $("#lightbulb-off").classList.toggle("hidden")
    $("#lightbulb-on").classList.toggle("hidden")
})



// ================================= acorddion===================

$(".open-window-image").addEventListener("click", () => {
    $(".open-window-image").classList.toggle("active")
    $(".window-image-container").classList.toggle("visibility--hidden")
})

$(".open-window-title").addEventListener("click", () => {
    $(".open-window-title").classList.toggle("active")
    $(".window-title-container").classList.toggle("visibility--hidden")
})