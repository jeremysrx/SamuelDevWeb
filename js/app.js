/*

javascript natif pour changer une les éléments de la liste javascript-list

const elements = document.querySelectorAll("#javascript-list li");

elements.forEach((element) => {
  element.textContent = "Javascipt";
});

// Jquery pour changer les éléments de la liste jquerry-list

$("#jquery-list li")
.text("Jquery")
.css({
"color", "red",
font-size", "30px"
});



// javascript natif pour creer une alerte au click sur TEST 2 de javascript-list

document
  .querySelector("#javascript-list li:nth-child(2)")
  .addEventListener("click", function () {
    alert("Javascript");
  });

// Jquery pour creer une alerte au click sur TEST 2 de jquery-list

$("#jquery-list li:nth-child(2)").on("click", function () {
  alert("Test 2");
});

*/

// quand on clique sur le bouton Click Js, le carré disparait et quand on reclique dessus il réapparait en javascript natif

let display = true;

document.querySelector("#btn-js").addEventListener("click", function () {
  if (display === true) {
    document.querySelector("#carre").style.display = "none";
  } else {
    document.querySelector("#carre").style.display = "block";
  }
  display = !display;
});

// quand on clique sur le bouton Click-querry, le carré disparait et quand on re clique dessus il réapparait en jquerry

let displayJquery = true;

$("#btn-jquery").on("click", function () {
  $("#carre").toggle();
});
