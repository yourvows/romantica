var text = "Подними громкость \n Нажми на сердечку)";
var b = document.querySelector("input");
b.addEventListener("click", change);
function change() {

  var i = Math.floor(Math.random() * 100) + 1;
  var j = Math.floor(Math.random() * 500) + 1;
  // var p = j - 50;

  b.style.left = i + "px";
  b.style.top = j + "px";
  // b.style.top = p + "px";

  if (i > 200) {
    b.style.left = 150 + "px";
  }
  else {
    b.style.left = i + "px";
  }
  if (j > 260) {
    b.style.top = 155 + "px";
  }
  else {
    b.style.top = j + "px";
  }
  console.log(i);
  console.log(j);
}
var input = document.querySelector("#noid")
input.addEventListener("click", abortHandler)
function abortHandler() {
  console.log('fsafsd')
  var audio = document.getElementById("audio");
  audio.play();
  alert(text)
}