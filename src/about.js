import {createParagraph, createImage} from "./helpers.js";
import restaurant from "../src/images/restaurantthin.jpg";

function createAbout() {
    const mainContent = document.getElementById('content');
    mainContent.appendChild(createParagraph("Hi There"));
    mainContent.appendChild(createImage(restaurant));

    
}

export default createAbout;