const filterButtons = document.querySelectorAll("nav button")

function filter(type) {
    if (type === "all"){
        document.querySelectorAll(".box").forEach(box => {box.style.display = "block"})
        return;
    }
    document.querySelectorAll(`.box.${type}`).forEach(box => {box.style.display = "block"})
    document.querySelectorAll(`.box:not(.${type})`).forEach(box => {box.style.display = "none"})
}
filterButtons.forEach(button => button.addEventListener("click",()=>filter(button.dataset.filter)))







