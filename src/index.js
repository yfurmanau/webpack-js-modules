const button = document.createElement("button");
button.innerText = "Click me";
button.onclick = async () => {
  const module = await import("./image-viewer");
  module.default();
};

document.body.appendChild(button);
