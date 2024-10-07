const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// console.log (AuthenticatorAssertionResponse)

// var a = document.querySelector("#elem1")
// var abc = a.getAnimations("class")
// console.log(abc)

// get attribute  = takes attribute
//  set attributte to se an image in div when hover with mouse

// var elemC = document.querySelector("#elem-container")
// var  fixed = document.querySelector("#fixed-image")
// elemC.addEventListener("mouseentre",function(){
//   fixed.style.display = "block"
// })
// elemC.addEventListener("mouseleave",function(){
//     fixed.style.display = "none"
// })

var elemC = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-images");

elemC.addEventListener("mouseenter", function() {
  fixed.style.display = "block";
});

elemC.addEventListener("mouseleave", function() {
  fixed.style.display = "none";
});
// var elem1 = document.querySelector("#elem1")
// elem1.addEventListener("mouseenter",function(){
//   var image =  elem1.getAttribute("data-image")
//   fixed.style.background = `url(${image})` //this is called template litrels
// })
var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
e.addEventListener("mouseenter",function(){
    var image = e.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
})
})