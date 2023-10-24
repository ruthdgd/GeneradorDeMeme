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

// $(".open-window-image").addEventListener("click", () => {
//     $(".open-window-image").classList.toggle("active")
//     $(".window-image-container").classList.toggle("visibility--hidden")
// })

// $(".open-window-title").addEventListener("click", () => {
//     $(".open-window-title").classList.toggle("active")
//     $(".window-title-container").classList.toggle("visibility--hidden")
// })

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

//select filters==================

$("#filters-select").addEventListener("input", (e) => {
    $(".meme-box").style.mixBlendMode = e.target.value
})

//checkbox con/sin texto================

$("#check-top-text").addEventListener("input", (e) => {
    if(e.target.checked){
        $(".top-text").style.display = "none"
    }else{
        $(".top-text").style.display = "block"
    }
})

$("#check-bottom-text").addEventListener("input", (e) => {
    if(e.target.checked){
        $(".bottom-text").style.display = "none"
    }else{ 
        $(".bottom-text").style.display = "block"
    }
})

$("#font--select").addEventListener("input", (e) => {
    $(".top-text").style.fontFamily = e.target.value
    $(".bottom-text").style.fontFamily = e.target.value
})

// input font size====================================

$("#font--size").addEventListener("input", (e) => {
    const fontSizeMeme = e.target.value + "px"
    $(".top-text").style.fontSize = fontSizeMeme 
 })

 $("#font--size").addEventListener("input", (e) => {
    const fontSizeMeme  = e.target.value + "px"
    $(".bottom-text").style.fontSize = fontSizeMeme 
 })

 //text align buttons=========================================

$(".fa-align-left").addEventListener("click", () => {
    $(".top-text").style.textAlign = ("left")
    $(".bottom-text").style.textAlign = ("left")
})

$(".fa-align-center").addEventListener("click", () => {
    $(".top-text").style.textAlign = ("center")
    $(".bottom-text").style.textAlign = ("center")
})

$(".fa-align-right").addEventListener("click", () => {
    $(".top-text").style.textAlign = ("right")
    $(".bottom-text").style.textAlign = ("right")
})

$("#check-transparent").addEventListener("input", (e) => {
    if(e.target.checked){
        $(".top-text").style.backgroundColor = "transparent"
        $(".bottom-text").style.backgroundColor = "transparent"
    }else{
        $(".top-text").style.backgroundColor = "aliceblue"
        $(".bottom-text").style.backgroundColor = "aliceblue"
    }
})

$(".unset-tone").addEventListener("click", () => {
    $(".top-text").style.filter = "none"
    $(".bottom-text").style.filter = "none"
})

$(".light-tone").addEventListener("click", () => {
    $(".top-text").style.webkitTextStroke = "2px white"
    $(".bottom-text").style.webkitTextStroke = "2px white"
})

$(".dark-tone").addEventListener("click", () => {
    $(".top-text").style.webkitTextStroke = " 2px black"
    $(".bottom-text").style.webkitTextStroke = "2px black"
})

$("#text--space").addEventListener("input", (e) => {
    const spacing = e.target.value + "px"
    $(".top-text").style.padding = spacing
})

$("#text--space").addEventListener("input", (e) => {
    const spacing = e.target.value + "px"
    $(".bottom-text").style.padding = spacing
})

//INTERLINEADO ==============================================

$("#text-space-items").addEventListener("input", (e) => {
    $(".top-text").style.lineHeight = e.target.value
})

$("#text-space-items").addEventListener("input", (e) => {
    $(".bottom-text").style.lineHeight = e.target.value
})

const downloadMeme = () => {
    domtoimage.toBlob($(".meme-container-box")).then((blob) => {
        saveAs(blob, "my-meme.png")
    })
}

$(".meme-download").addEventListener("click",downloadMeme)

// ventana modal======================================================================

$("#open-window-image").addEventListener("click", () => {
    $(".window-image-container").style.display = "block"
})

$("#btn-close-image").addEventListener("click", () => {
    $(".window-image-container").style.display = "none"
})

$("#open-window-title").addEventListener("click", () => {
    $(".window-title-container").style.display = "block"
})

$("#btn-close-title").addEventListener("click", () => {
    $(".window-title-container").style.display = "none"
})

// aleternar paneles =====================









   

  




