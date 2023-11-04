import "./styles.css";

document.body.onload = main;

function addElement(breed) {

    const body = document.getElementById("body");

    const divCon = document.createElement("div");
    divCon.className = "container";

    const divItem = document.createElement("div");
    divItem.className = "wiki-item";

    const h1 = document.createElement("h1");
    h1.className = "wiki-header";
    h1.textContent = breed

    const divContent = document.createElement("div")
    divContent.className = "wiki-content";

    const p = document.createElement("p");
    p.className = "wiki-text";
    p.textContent = "text of breed";

    divContent.appendChild(p);

    divItem.appendChild(h1);
    divItem.appendChild(divContent);

    const divImgCon = document.createElement("div");
    divImgCon.className = "img-container";

    const divImg = document.createElement("img");
    divImg.className = "wiki-img";
    divImg.src = "";

    divImgCon.appendChild(divImg);

    divContent.appendChild(divImgCon);

    divItem.appendChild(divContent);

    divCon.appendChild(divItem);

    body.appendChild(divCon);


}

function main() {
    const breeds = ["border terrier", "buhund", "shetland Sheepdog", "shiba", "whippet"]

    for (let i = 0; i < 5; i++) {
        addElement(breeds[i]);
        
    }
}




