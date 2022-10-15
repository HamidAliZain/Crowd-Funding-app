let bookmark = document.querySelector("#bookmark");
let bookmarClicked = true;
function myFunc() {
  if (bookmarClicked) {
    bookmarClicked = false;
    bookmark.innerHTML = "Bookmarked";
    document.getElementById("pop-up").style.display = "flex";
    document.getElementById("bookmark-container").style.color = "gray";
    document.getElementById("icon").style.backgroundColor = "gray";
  } else {
    bookmarClicked = true;
    bookmark.innerHTML = "Bookmark";
    document.getElementById("bookmark-container").style.color = "green";
    document.getElementById("icon").style.backgroundColor =
      "hsl(176, 72%, 28%)";
  }
}
// function bookmarkFunc() {
//   if (bookmark.innerHTML === "Bookmark") {
//     bookmark.innerHTML = "Bookmarked ";
//     document.getElementById("pop-up").style.display = "flex";
//     document.getElementById("bookmark-container").style.color = "gray";
//     document.getElementById("icon").style.backgroundColor = "gray";
//   } else {
//     bookmark.innerHTML = "Bookmark";
//     document.getElementById("bookmark-container").style.color = "green";
//     document.getElementById("icon").style.backgroundColor =
//       "hsl(176, 72%, 28%)";
//   }
// }
function popOut() {
  document.getElementById("pop-up").style.display = "none";
}
