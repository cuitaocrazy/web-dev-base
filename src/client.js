/**
 * Created by cuitao-pc on 16/7/18.
 */
import 'bootstrap/less/bootstrap.less';

function createElement(name, classes) {
  var element = document.createElement(name);
  var css = document.createAttribute("class");
  css.value = classes.reduce((a, b) => a + " " + b);
  element.setAttributeNode(css);
  return element;
}
let div = createElement("div", ["container"]);
let btn = createElement("button", ["btn", "btn-success"]);
btn.textContent = "go";
btn.addEventListener('click', () => alert("go clicked"));
div.appendChild(btn);
document.body.appendChild(div);