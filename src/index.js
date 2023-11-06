document.body.onload = main;

function addElement(breed) {

    const divCon = document.getElementById("container");

    const divItem = document.createElement("div");
    divItem.className = "wiki-item";

    const h1 = document.createElement("h1");
    h1.className = "wiki-header";
    h1.textContent = breed

    const divContent = document.createElement("div")
    divContent.className = "wiki-content";

    const p = document.createElement("p");
    p.className = "wiki-text";

    divContent.appendChild(p);

    divItem.appendChild(h1);
    divItem.appendChild(divContent);

    divItem.appendChild(divContent);

    divCon.appendChild(divItem);

}

function addPicture(website, i) {

    const divCon = document.getElementsByClassName("wiki-content")

    const get = "https://dog.ceo/api/breed/" + website + "/images/random";

    const divImgCon = document.createElement("div");
    divImgCon.className = "img-container";

    const divImg = document.createElement("img");
    divImg.className = "wiki-img";

    fetch(get).then(function (response) {return response.json();
    }).then(function (data) {
        divImg.src = data.message;
    })

    divImgCon.appendChild(divImg);

    divCon[i].appendChild(divImgCon);

}

function addWiki(breed, i) {
    const get = "https://en.wikipedia.org/api/rest_v1/page/summary/" + breed;

    const wikiText = document.getElementsByClassName("wiki-text")

    fetch(get).then(function (response) {return response.json();
    }).then(function (data) {        
        wikiText[i].textContent = data.extract;
    })

}

function main() {
    const breeds = ["Border Terrier", "Buhund", "Shetland Sheepdog", "Shiba", "Whippet"]
    const website = ["terrier/border", "buhund", "sheepdog/shetland", "shiba", "whippet"]
    const wiki = ["border_terrier", "buhund", "shetland_sheepdog", "shiba", "whippet"]

    const divCon = document.createElement("div");
    divCon.className = "container";
    divCon.id = "container";

    body.appendChild(divCon);

    for (let i = 0; i < 5; i++) {
        addElement(breeds[i]);
        addPicture(website[i], i);
        addWiki(wiki[i], i);
        
    }

    
    
}




