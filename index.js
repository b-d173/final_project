
function darkTheme() {
  var body = document.body;
  body.classList.toggle("dark-mode");
}

function validateForm() {
  var nameinput = document.forms["contactForm"]["fname"].value;
  if (nameinput == "" || nameinput == null) {
    alert("Form must be filled out");
  }
}