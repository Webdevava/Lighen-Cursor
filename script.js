const stars = document.querySelector(".stars");

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  stars.style.left = x + "px";
  stars.style.top = y + "px";
});
