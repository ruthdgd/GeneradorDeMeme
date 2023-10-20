// ======== VARIABLES ================

const $ = (selector) => document.querySelector(selector)

const memeBox = document.querySelector(".meme-box");
const brightnessInput = document.querySelector("#brightness");
const opacityInput = document.querySelector("#opacity");
const contrastInput = document.querySelector("#contrast");
const blurInput = document.querySelector("#blur");
const grayscaleInput = document.querySelector("#grayscale");
const sepiaInput = document.querySelector("#sepia");
const hueRotationInput = document.querySelector("#hue-rotate");
const saturationInput = document.querySelector("#saturate");
const invertInput = document.querySelector("#invert");

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





// funcion de filtros

const filtersRange = () => {
    memeBox.style.filter = `brightness(${brightnessInput.value}) opacity(${opacityInput.value}) contrast(${contrastInput.value}%) blur(${blurInput.value}px) grayscale(${grayscaleInput.value}%) sepia(${sepiaInput.value}%) hue-rotate(${hueRotationInput.value}deg) saturate(${saturationInput.value}%) invert(${invertInput.value})`
  }

// eventos filtros

brightnessInput.addEventListener("input", filtersRange)
opacityInput.addEventListener("input", filtersRange)
contrastInput.addEventListener("input", filtersRange)
blurInput.addEventListener("input", filtersRange)
grayscaleInput.addEventListener("input", filtersRange)
sepiaInput.addEventListener("input", filtersRange)
hueRotationInput.addEventListener("input", filtersRange)
saturationInput.addEventListener("input", filtersRange)
invertInput.addEventListener("input", filtersRange)

//Reset filters=========================================

$("#reset").addEventListener("click", () => {
    $("#brightness").value = "0"
    $("#opacity").value = "0"
    $("#contrast").value = "0"
    $("#blur").value = "0"
    $("#grayscale").value = "0"
    $("#sepia").value = "0"
    $("#hue-rotate").value = "0"
    $("#saturate").value = "0"
    $("#invert").value = "0"
    $(".meme-box").style.filter = "none"
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

$("#color-back-meme").addEventListener("input", (e) =>{
    $(".meme-box").style.backgroundColor=e.target.value
})

$("#color-text").addEventListener("input", (e) =>{
    $(".top-text").style.color=e.target.value
})

$("#color-text").addEventListener("input", (e) =>{
    $(".bottom-text").style.color=e.target.value
})

$("#color-back-text").addEventListener("input", (e) =>{
    $(".bottom-text").style.backgroundColor=e.target.value
})

$("#color-back-text").addEventListener("input", (e) =>{
    $(".top-text").style.backgroundColor=e.target.value
})


