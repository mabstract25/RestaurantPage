function createMenu() {
    const mainContent = document.getElementById('content');
    const newdiv = document.createElement("div");
    newdiv.classList.add("menucontent");
    mainContent.replaceChildren(newdiv);

}

export default createMenu;