 import {createParagraph, createImage} from "./helpers.js";
 import pasta from "../src/menuimages/pasta.jpg";
 import pizza from "../src/menuimages/pizza.jpg";
 import tomatoes from "../src/menuimages/tomatoes.jpg";


function createMenu() {
    const mainContent = document.getElementById('content');
    const newdiv = document.createElement("div");
    newdiv.classList.add("menucontent");
    newdiv.appendChild(createImage(pasta));
    newdiv.appendChild(createParagraph("This is some pasta - yum!"))
    newdiv.appendChild(createImage(pizza));
    newdiv.appendChild(createParagraph("This is some pizza - yum!"))
    newdiv.appendChild(createImage(tomatoes));
    newdiv.appendChild(createParagraph("These are some tomatoes - yum!"))
    mainContent.replaceChildren(newdiv);

}

export default createMenu;