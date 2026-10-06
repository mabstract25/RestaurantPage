function createContact () {
    const mainContent = document.getElementById('content');
    const newdiv = document.createElement("div");
    newdiv.classList.add("contactcontent");
    mainContent.replaceChildren(newdiv);
}

export default createContact;