let bookmark = document.querySelector("#bookmark");
let clicked = true;
function myFunc() {
  if (clicked) {
    clicked = false;
    bookmark.innerHTML = "Bookmarked";
    document.getElementById("pop-up").style.display = "flex";
    document.getElementById("bookmark-container").style.color = "gray";
    document.getElementById("icon").style.backgroundColor = "gray";
  } else {
    clicked = true;
    bookmark.innerHTML = "Bookmark";
    document.getElementById("bookmark-container").style.color = "green";
    document.getElementById("icon").style.backgroundColor =
      "hsl(176, 72%, 28%)";
  }
}

function popOut() {
  document.getElementById("pop-up").style.display = "none";
}
// Pledge  //
function backto() {
  document.getElementById("plegde").style.display = "block";
}

function cancelOut() {
  document.getElementById("plegde").style.display = "none";
}
//  pledgeText //

function funding(price,check) {
  if (clicked) {
    clicked = false;
    document.querySelector(price).style.display = "flex";
    document.querySelector(price).classList.add("pricinSection");
    document.querySelector(check).style.backgroundColor = "hsl(176, 72%, 28%)";
    document.querySelector(check).style.borderColor = "white";
  } else {
    clicked = true;
    document.querySelector(price).style.display = "none";
    document.querySelector(check).style.backgroundColor = "white";
    document.querySelector(check).style.borderColor = "green";
  }
}
