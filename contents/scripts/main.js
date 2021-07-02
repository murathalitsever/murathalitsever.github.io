fetch("https://api.github.com/users/halitsever/repos?sort=updated")
.then((response) => response.json())
.then((data) => {
  for(var i = 0; 6>i; i++) {
    if (i === 0) {
    title = document.querySelector("#project" + 1);
    description = document.querySelector("#project" + 1 + "desc");
    }
    else {
    title = document.querySelector("#project" + i);
    description = document.querySelector("#project" + i + "desc");
    }
    //  For lastest repo names data[<nmbr>].name;
    //  For lastest repo descriptions data[<nmbr>].description;
    //  For lastest repo link  data[<nmbr>].clone_url
      title.innerHTML  = data[i].name;
      title.setAttribute("href", data[i].clone_url);
      description.innerHTML = data[i].description
  }
});




var cards = document.querySelector("#cards");
var body = document.querySelector("body");
var header = document.querySelector(".header");
var lista = document.querySelectorAll("a");
var listh = document.querySelectorAll("h2");
var listp = document.querySelectorAll("p");
function lightMode() {
for (var i = 0; lista.length > lista.length - 1; i++) {
  console.log(i);
  lista[i].style.color = "black";
  if (i === lista.length - 1) break;
}
for (var i = 0; listh.length > listh.length - 1; i++) {
  console.log(i);
  listh[i].style.color = "black";
  if (i === listh.length - 1) break;
}
for (var i = 0; listp.length > listp.length - 1; i++) {
  console.log(i);
  listp[i].style.color = "black";
  if (i === listp.length - 1) break;
}
body.style.backgroundColor = "whitesmoke";
header.style.backgroundColor = "#dbdbdb";
}



function darkMode() {
  for (var i = 0; lista.length > lista.length - 1; i++) {
    console.log(i);
    lista[i].style.color = "white";
    if (i === lista.length - 1) break;
  }
  for (var i = 0; listh.length > listh.length - 1; i++) {
    console.log(i);
    listh[i].style.color = "white";
    if (i === listh.length - 1) break;
  }
  for (var i = 0; listp.length > listp.length - 1; i++) {
    console.log(i);
    listp[i].style.color = "white";
    if (i === listp.length - 1) break;
  }
  body.style.backgroundColor = "#393e46";
  header.style.backgroundColor = "#222831";
  }


function openMenu() {

}