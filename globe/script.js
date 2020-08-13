const wrap = document.getElementById("wrap");

const particles = () => {
  for (i = 0; i < 300; i++) {
    let createDiv = document.createElement("div");
    wrap.appendChild(createDiv);
    createDiv.classList.add("c");
  }
};

particles();
