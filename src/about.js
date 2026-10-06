import {createParagraph, createImage} from "./helpers.js";
import restaurant from "../src/images/restaurantthin.jpg";

function createAbout() {
    const mainContent = document.getElementById('content');
    const newdiv = document.createElement("div");
    newdiv.classList.add("aboutcontent")
    newdiv.appendChild(createParagraph("Hi There"));
    newdiv.appendChild(createImage(restaurant));
    mainContent.replaceChildren(newdiv);

}

export default createAbout;