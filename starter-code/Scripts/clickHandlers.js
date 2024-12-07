const div = document.createElement("div");
const header = document.querySelector("header");


function blockSpace() {
  header.appendChild(div);
  div.classList.toggle(["block-space"], window.innerWidth >= 1440);
  if (!div) {
    const h1 = styleHeading("MODERN" + "GALLERY")
    div.appendChild(h1);
  }
}


function styleHeading(valueOne, valueTwo) {
  const h1 = document.createElement("h1");
  const whiteText = document.createTextNode(valueOne);
  h1.appendChild(whiteText)
  return h1;
}

window.addEventListener("resize", blockSpace);
blockSpace();
