/**
 * Created by cuitao-pc on 16/7/18.
 */
import 'bootstrap/less/bootstrap.less';

function createElement(name, classes, parent) {
  var element = document.createElement(name);
  var css = document.createAttribute("class");
  if (classes) {
    css.value = Array.isArray(classes) ? classes.reduce((a, b) => a + " " + b) : classes;
    element.setAttributeNode(css);
  }

  if(parent) parent.appendChild(element);
  return element;
}
let div = createElement("div", "container", document.body);
let btn = createElement("button", ["btn", "btn-success"], div);
btn.textContent = "go";
btn.addEventListener('click', () => alert("go clicked"));