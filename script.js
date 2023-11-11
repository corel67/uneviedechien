const html = document.getElementsByTagName("html")[0]
const navList = document.getElementById("navList")

document.getElementById("navToggle").addEventListener("click", function () {
    navList.classList.toggle("open")
    html.classList.toggle("disable-scroll")
})

navList.querySelectorAll("a").forEach(element => {
    element.addEventListener("click", function () {
        navList.classList.remove("open")
        html.classList.remove("disable-scroll")
    })
})