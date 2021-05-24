var cards = document.querySelector("#cards");

if(cards) {
fetch('https://api.github.com/users/halitsever/repos?sort=updated')
    .then(response => response.json())
    .then((data) => {
        var firstreponame = document.querySelector("#project1");
        var firstrepodesc = document.querySelector("#project1desc");
        var secondreponame = document.querySelector("#project2");
        var secondrepodesc = document.querySelector("#project2desc");
        var thirdreponame = document.querySelector("#project3");
        var thirdrepodesc = document.querySelector("#project3desc");
        var fourthreponame = document.querySelector("#project4");
        var fourthrepodesc = document.querySelector("#project4desc");
        var fifthreponame = document.querySelector("#project5");
        var fifthrepodesc = document.querySelector("#project5desc");
        var sixthreponame = document.querySelector("#project6");
        var sixthrepodesc = document.querySelector("#project6desc");

        firstreponame.innerHTML = data[0].name;
        firstreponame.setAttribute("href", data[0].clone_url)
        firstrepodesc.innerHTML = data[0].description;
        secondreponame.innerHTML = data[1].name;
        secondreponame.setAttribute("href", data[1].clone_url)
        secondrepodesc.innerHTML = data[1].description;
        thirdreponame.innerHTML = data[2].name;
        thirdrepodesc.innerHTML = data[2].description;
        thirdreponame.setAttribute("href", data[2].clone_url)
        fourthreponame.innerHTML = data[3].name;
        fourthrepodesc.innerHTML = data[3].description;
        fourthreponame.setAttribute("href", data[3].clone_url)
        fifthreponame.innerHTML = data[4].name;
        fifthrepodesc.innerHTML = data[4].description;
        fifthreponame.setAttribute("href", data[4].clone_url)
        sixthreponame.innerHTML = data[5].name;
        sixthrepodesc.innerHTML = data[5].description;
        sixthreponame.setAttribute("href", data[5].clone_url)
    });
}
