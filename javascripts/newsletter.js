var navbar = document.querySelector(".navbar")
window.onscroll = ()=>{
    this.scrollY > 20 ? navbar.classList.add("sticky"):
    navbar.classList.remove("sticky")
}
  // Select the form
  const form = document.querySelector(".container");
  
  form.addEventListener("submit", function(e) {
    // prevent the usual form submission
    e.preventDefault();
    
    // display an alert
    alert("Signed up for newsletter!");
    
    // select all input fields within the form
    const inputs = form.querySelectorAll("input");
    
    // clear each input field
    inputs.forEach(input => {
      input.value = "";
    });
    
    // clear the checkbox
    document.getElementById("terms").checked = false;
  });