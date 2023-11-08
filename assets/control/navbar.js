const navIcon = document.querySelector("#navElement");
const menuElement = document.querySelector("#memuElement");
const wrapperElement = document.querySelector("#wrapperElement");

if (navIcon) {
    navIcon.onclick = () => {
        menuElement.classList.toggle("active")
        wrapperElement.classList.toggle("active")
    }
}