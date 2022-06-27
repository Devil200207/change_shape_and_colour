import "./styles.css";

var butt1 = document.getElementById("bt1");
var butt2 = document.getElementById("bt2");
var cc = document.getElementById("outer");
var c2 = document.getElementById("inner");

var count = 0;
var count1 = 0;

function ccolor() {
  count++;
  if (count % 2 != 0) {
    cc.style.backgroundColor = "purple";
  } else {
    cc.style.backgroundColor = "green";
  }
}

var available_shapes = ["circle", "square"];

function shape1() {
  count1++;
  if (count1 % 2 != 0) {
    var next_shape = available_shapes[0];
    c2.setAttribute("class", next_shape);
  } else {
    var next_shape = available_shapes[1];
    c2.setAttribute("class", next_shape);
  }
}

butt2.addEventListener("click", ccolor);
butt1.addEventListener("click", shape1);
