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

// input url======

$("#url").addEventListener("input", (e)=>{
    $(".meme-box").style.backgroundImage = `url(${e.target.value})`
})

// input text========

$("#texts").addEventListener("input", (e)=>{
    $(".top-text").innerText= e.target.value
})

$("#textb").addEventListener("input", (e)=>{
    $(".bottom-text").innerText= e.target.value
})


// FILTROS INPUT RANGE=============================

// funcion de filtros

const filtersRange= () => {
    $(".meme-box").style.filter = `brightness(${$("#brightness").value}) opacity(${$("#opacity").value}) contrast(${$("#contrast").value}%) blur(${$("#blur").value}px) grayscale(${$("#grayscale").value}%) sepia(${$("#sepia").value}%) hue-rotate(${$("#hue-rotate").value}deg) saturation(${$("#saturation").value}%) invert(${$("#invert").value})`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
}

// eventos filtros

$("#brightness").addEventListener("input", filtersRange)

$("#opacity").addEventListener("input", filtersRange)

$("#contrast").addEventListener("input", filtersRange)

$("#blur").addEventListener("input", filtersRange)

$("#grayscale").addEventListener("input", filtersRange)

$("#sepia").addEventListener("input", filtersRange)

$("#hue-rotate").addEventListener("input", filtersRange)

$("#saturation").addEventListener("input", filtersRange)

$("#invert").addEventListener("input", filtersRange)

