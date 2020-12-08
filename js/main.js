const body = document.querySelector("body").style;
const globe = document.querySelector(".globe");

document.getElementById("africa").onclick = africaBgd;
document.getElementById("antarctica").onclick = antarcticaBgd;
document.getElementById("asia").onclick = asiaBgd;
document.getElementById("australia").onclick = australiaBgd;
document.getElementById("europe").onclick = europeBgd;
document.getElementById("northAmerica").onclick = northAmericaBgd;
document.getElementById("southAmerica").onclick = southAmericaBgd;
document.getElementById("ocean").onclick = oceanBgd;
document.getElementById("reset").onclick = reset;

function clickHandler() {
  return globe.setAttribute("hidden", "true");
}

function africaBgd() {
  body.backgroundImage =
    "url(https://images.unsplash.com/photo-1528140184621-c7c98a8bd418?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)";
  body.color = "white";
  clickHandler();
}

function antarcticaBgd() {
  body.backgroundImage =
    "url(https://lh3.googleusercontent.com/proxy/2JeamQbPUrv_krcPCqpxfIQRUJ_zpHjKULeswzgjzEIlV9fSOySecccU_s5uBLL1uAe7_vrjRU1xs3dyNWeQU2rop5mcwM59yfxmGZG2Pcc8uJ5AqwfcqFpR89O-DsGuls5_X6nYZOxezuVKzs6QrKRmjDCvc8cL9R3zyZ49K3L6fYerDboe)";
  body.color = "red";
  clickHandler();
}

function asiaBgd() {
  body.backgroundImage =
    "url(https://onekindplanet.org/wp-content/uploads/2017/09/SunBear-edit-445x300.jpg)";
  body.color = "white";
  clickHandler();
}

function australiaBgd() {
  body.backgroundImage =
    "url(https://images.unsplash.com/photo-1577933820756-f56e44762567?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80)";
  body.color = "goldenrod";
  clickHandler();
}

function europeBgd() {
  body.backgroundImage =
    "url(https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/11234019/Bulldog-standing-in-the-grass.jpg)";
  body.color = "red";
  clickHandler();
}

function northAmericaBgd() {
  body.backgroundImage =
    "url(https://images.unsplash.com/photo-1586579741307-b0408f66fe9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80)";
  body.color = "rgb(5, 9, 212)";
  clickHandler();
}

function southAmericaBgd() {
  body.backgroundImage =
    "url(https://zootampa.org/wp-content/uploads/2019/10/outreach-two-toed-sloth-agnes-feb-5-2014-scaled.jpg)";
  body.color = "white";
  clickHandler();
}

function oceanBgd() {
  body.backgroundImage =
    "url(https://images.unsplash.com/photo-1568430462989-44163eb1752f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1352&q=80)";
  body.color = "white";
  clickHandler();
}

function reset() {
  body.backgroundImage =
    "url(https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)";
  body.backgroundColor = "black";
  body.color = "white";
  globe.removeAttribute("hidden");
}
