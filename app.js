// Select all elements with the class 'fqa-head'
const fqaHeads = document.querySelectorAll(".fqa-head");

// Add a click event listener to each 'fqa-head'
fqaHeads.forEach((fqaHead) => {
  fqaHead.addEventListener("click", function () {
    // Toggle the visibility of the associated description
    const fqaDesc = this.nextElementSibling; // Get the next sibling element
    if (fqaDesc.style.display === "block") {
      fqaDesc.style.display = "none"; // Hide the description
    } else {
      fqaDesc.style.display = "block"; // Show the description
    }

    // Toggle the caret icon class for up/down effect
    const caretIcon = this.querySelector(".fa-caret-up, .fa-caret-down");
    if (caretIcon) {
      caretIcon.classList.toggle("fa-caret-up");
      caretIcon.classList.toggle("fa-caret-down");
    }
  });
});
