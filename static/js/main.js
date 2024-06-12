

const oggi = new XMLHttpRequest();


let from = document.getElementById("from");
let to = document.getElementById("to");

let burger = document.getElementById("burger");
let cross = document.getElementById("cross");
let menu = document.getElementById("menu");

let scroll = document.getElementById("scroll");
let cerca = document.getElementById("cerca");
let review = document.getElementsByClassName("review");


duplicateChildNodes("logos")

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
  // User is accessing the page on a mobile device
  scroll.classList.add("scrollbar-hide")
} else {
  // User is accessing the page on a desktop device
  scroll.classList.remove("scrollbar-hide")
}

function toggleMenu() {
  if (menu.classList.contains("-translate-y-[200%]")) {
    menu.classList.remove("-translate-y-[200%]");
    menu.classList.add("transition");
    burger.style.display = "block";
    menu.style.display = "flex";
    burger.style.display = "none";


    cross.style.display = "block";
  } else {
    menu.classList.add("-translate-y-[200%]");
    menu.style.display = "none";
    burger.style.display = "block";
    menu.style.display = "none";
    cross.style.display = "none";
    menu.classList.remove("transform");
  }
}

function duplicateChildNodes(parentId) {
  var parent = document.getElementById(parentId);
  NodeList.prototype.forEach = Array.prototype.forEach;
  var children = parent.childNodes;
  children.forEach(function (item) {
    var cln = item.cloneNode(true);
    parent.appendChild(cln);
  });
};

cerca.addEventListener("click", golist);

burger.addEventListener("click", toggleMenu);

cross.addEventListener("click", toggleMenu);



function golist() {

  if(new Date(from.value) > new Date(to.value) || (new Date(from.value).getDate() ) < (new Date().getDate()) || from.value == "" || to.value == "" ){
    from.classList.add("outline-2" , "shadow-lg", "shadow-red-500", "border-red-500") 
    to.classList.add("outline-2" , "shadow-lg", "shadow-red-500", "border-red-500")
    return;
  }
  let alve = new URL("https://shy-neon.github.io/list.html");
  //let alve = new URL("http://127.0.0.1:5501/list.html");
  alve.searchParams.append('inizio', from.value.toString());
  alve.searchParams.append('fine', to.value.toString());
  window.location.href = alve.toString();
}

function setStars(stars) {
  switch (stars) {
    case 0:
      return "./static/images/stars/0s.png"
      break;
    case 1:
      return "./static/images/stars/1s.png"
      break;
    case 2:
      return "./static/images/stars/2s.png"
      break;
    case 3:
      return "./static/images/stars/3s.png"
    case 4:
      return "./static/images/stars/4s.png"
      break;
    case 5:
      return "./static/images/stars/5s.png"
      break;
  }
}