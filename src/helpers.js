// ONLY for generic helper functions

function createParagraph(text) {
    const para = document.createElement("p");
    para.textContent = text;
    return para;
}

function createImage(src) {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("img");
    return img;
}


export {createParagraph, createImage}
