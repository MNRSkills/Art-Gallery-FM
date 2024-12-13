const div = document.createElement("div");
const header = document.querySelector("header");

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// BLOCK SPACE FUNCTION WILL APPEND THE ELEMENTS TO THE DOM
function blockSpace() {
  header.appendChild(div);
  div.classList.add("block-space");
  const h1 = styleHeading("MODER", "N", "ART", "GAL", "L", "ERY");
  if (window.innerWidth >= 1440) {
    div.appendChild(h1);
  } else {
    div.classList.remove("block-space");
    const h1 = styleHeading();
    div.removeChild(h1);
  }
}

// ------------------------------------------------------------

function styleHeading(moder, n, br, art, gal, l, ery) {
  //   console.log(moder, n, gal, l, ery);

  const h1 = document.createElement("h1");
  const whiteText = document.createTextNode(moder);
  h1.appendChild(whiteText);

  const span1 = document.createElement("span");
  //   const span2 = document.createElement("span");
  //   const br = document.createElement("br");
  span1.textContent = n;
  //   span2.textContent = art;
  span1.style.color =
    "linear-gradient(90deg, rgba(14,14,14,1) 43%, rgba(255,255,255,1) 44%)";

  h1.appendChild(span1);
  //   h1.appendChild(span2);
  return h1;
}

window.addEventListener("resize", debounce(blockSpace, 300));
blockSpace();
