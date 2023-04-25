const featureBtn = document.querySelector(".feature-btn")
const featureMenu = document.querySelector(".feature-menu")
const companyBtn = document.querySelector(".company-btn")
const companyMenu = document.querySelector(".company-menu")

featureBtn.addEventListener("click", () => {
    featureMenu.classList.toggle("hidden");
})

companyBtn.addEventListener("click", () => {
    companyMenu.classList.toggle("hidden");
})