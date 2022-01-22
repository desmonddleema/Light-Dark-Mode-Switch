const dot = document.querySelector(".dot");
const section = document.querySelector(".section");

dot.onclick = function(e){
    dot.classList.toggle("active");
    section.classList.toggle("active");
}

document.addEventListener("mousemove", function(e){
    const dot = document.querySelector(".dot");
    dot.style.left = e.pageX + "px";
    dot.style.top = e.pageY + "px";
});

