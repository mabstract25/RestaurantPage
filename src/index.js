import "./styles.css";
import createAbout from "./about.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";
import menuImages from "./menu.js";

const aboutButton = document.getElementById('aboutbutton');
const menuButton = document.getElementById('menubutton');
const contactButton = document.getElementById('contactbutton');
menuButton.addEventListener("click", createMenu);
aboutButton.addEventListener("click", createAbout);
contactButton.addEventListener("click", createContact);
createAbout();
