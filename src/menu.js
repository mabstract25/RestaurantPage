import {createParagraph, createImage} from "./helpers.js";
import pasta from "../src/menuimages/pasta.jpg";
import pizza from "../src/menuimages/pizza.jpg";
import tomatoes from "../src/menuimages/tomatoes.jpg";

function menuFactory(item,url,text) {
    return {
        name: item,
        src: url,
        para: text,
    }
};

let pastadish = menuFactory("pasta",pasta,"Yum pasta!");
let pizzadish = menuFactory("pizza",pizza,"Yum pizza!");
let tomatodish = menuFactory("tomatoes",tomatoes,"Yum tomatoes!");

console.log(pastadish.name)

function createMenu() {
    const mainContent = document.getElementById('content');
    const newdiv = document.createElement("div");
    newdiv.classList.add("menucontent");
    newdiv.appendChild(createImage(pastadish.src));
    newdiv.appendChild(createParagraph(pastadish.para));
    newdiv.appendChild(createImage(pizzadish.src));
    newdiv.appendChild(createParagraph(pizzadish.para));
    newdiv.appendChild(createImage(tomatodish.src));
    newdiv.appendChild(createParagraph(tomatodish.para));
    mainContent.replaceChildren(newdiv);
    
}

export default createMenu;