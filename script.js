document.getElementById("navToggle").addEventListener("click", function () {
    document.getElementById("navList").classList.toggle("open")
    document.getElementsByTagName("html")[0].classList.toggle("disable-scroll")
})