function clearForm() {
  document.getElementById("medicalForm").reset();
}
function clearForm() {
    document.getElementById("medicalForm").reset();
  }

  document.getElementById("other").addEventListener("click", function() {
    document.getElementById("otherGender").style.display = "block";
  });

  document.getElementById("male").addEventListener("click", function() {
    document.getElementById("otherGender").style.display = "none";
  });

  document.getElementById("female").addEventListener("click", function() {
    document.getElementById("otherGender").style.display = "none";
  });
