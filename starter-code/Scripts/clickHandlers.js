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

  if (window.innerWidth >= 1440) {
    div.classList.add("block-space");

    let h1 = div.querySelector("h1");
    if (!h1) {
      console.log("THIS IS HAS AN H1");
      h1 = styleHeading("MODER", "N", "ART", "GAL", "LERY");
      div.appendChild(h1);
    }
  } else {
    div.classList.remove("block-space");
    let h1 = div.querySelector("h1");
    if (h1) {
      div.removeChild(h1);
    }
  }
}

// ------------------------------------------------------------

function styleHeading(moder, n, art, gal, lery) {
  console.log(moder, n, gal, lery);

  // Create the h1 element
  const h1 = document.createElement("h1");

  const moderSpan = document.createElement("span");
  moderSpan.textContent = moder;
  moderSpan.style.color = "white"; // white text
  h1.appendChild(moderSpan);

  const span1 = document.createElement("span");
  span1.textContent = n;
  span1.style.color = "white"; // White text
  h1.appendChild(span1);

  h1.appendChild(document.createTextNode(" "));

  const artSpan = document.createElement("span");
  artSpan.textContent = art;
  artSpan.style.color = "white"; // Black text
  h1.appendChild(artSpan);

  h1.appendChild(document.createTextNode(" "));

  const galSpan = document.createElement("span");
  galSpan.textContent = gal;
  galSpan.style.color = "white"; // white text
  h1.appendChild(galSpan);

  const span2 = document.createElement("span");
  span2.textContent = lery;
  span2.style.color = "black"; // black text
  h1.appendChild(span2);

  return h1;
}

window.addEventListener(
  "resize",

  debounce(blockSpace, 300)
);
blockSpace();
