/**
 * Created by cuitao-pc on 16/7/18.
 */

function createElement(name) {
  var element = document.createElement(name);

  return appendClasses.bind(element)
}

function appendClasses(classes) {
  var css = document.createAttribute("class");
  if (classes) {
    css.value = Array.isArray(classes) ? classes.reduce((a, b) => a + " " + b) : classes;
    this.setAttributeNode(css);
  }
  return appendToParent.bind(this);
}

function appendToParent(parent) {
  if(parent) parent.appendChild(this);
  return this;
}

let div = createElement("div")("container")(document.body);
let btn = createElement("button")(["btn", "btn-success"])(div);
btn.textContent = "go";
btn.addEventListener('click', () => alert("go clicked"));
