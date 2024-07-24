const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenuOpenBtn = document.querySelector(".submenu-open-btn");
const submenu =document.querySelector(".submenu");

toggleThemeBtns.forEach(btn => {
    btn.addEventListener("click" , function() {
        if (localStorage.theme === "dark"){
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme" , "dark");
        }     
    })
})


submenuOpenBtn.addEventListener("click", (e) => {
    console.log(e.currentTarget);
    submenu.classList.toggle("submenu--open");
});
