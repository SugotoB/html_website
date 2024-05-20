var navbar = document.querySelector(".navbar")
window.onscroll = ()=>{
    this.scrollY > 20 ? navbar.classList.add("sticky"):
    navbar.classList.remove("sticky")
}

const form = document.querySelector(".container");
  
form.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Order submitted!");
  const inputs = form.querySelectorAll("input");
  inputs.forEach(input => {
    input.value = "";
  });
});