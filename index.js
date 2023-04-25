const featureBtn = document.querySelector(".feature-btn")
const featureMenu = document.querySelector(".feature-menu")
const companyBtn = document.querySelector(".company-btn")
const companyMenu = document.querySelector(".company-menu")
const openMenuBtn = document.querySelector(".open-menu-btn")
const mobileMenuBtn = document.querySelector(".close-mobile-menu-btn")
const mobileMenu = document.querySelector(".mobile-menu")

featureBtn.addEventListener("click", () => {
    featureMenu.classList.toggle("hidden");
})

companyBtn.addEventListener("click", () => {
    companyMenu.classList.toggle("hidden");
})

openMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
})

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
})

