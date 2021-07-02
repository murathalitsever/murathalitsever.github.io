var cards = document.querySelector("#cards");

function openMenu() {

}

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

