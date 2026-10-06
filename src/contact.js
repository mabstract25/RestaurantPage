import { createParagraph } from "./helpers.js";


function createContact () {
    const mainContent = document.getElementById('content');
    const newdiv = document.createElement("div");
    const map = document.createElement("div");
    map.id = 'map';
    newdiv.classList.add("contactcontent");
    newdiv.appendChild(createParagraph("Tel:0800 00 1066"));
    newdiv.appendChild(map);
    mainContent.replaceChildren(newdiv);
}

export default createContact;