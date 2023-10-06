let text1 = document.getElementById("service-text1");
let style1 = getComputedStyle(text1);
let text2 = document.getElementById("service-text2");
let style2 = getComputedStyle(text2);
let text3 = document.getElementById("service-text3");
let style3 = getComputedStyle(text3);
let text4 = document.getElementById("service-text4");
let style4 = getComputedStyle(text4);

function openModal1() {
  if (style1.display == "none") {
    text1.style.display = "block";
    text2.style.display = "none";
    text3.style.display = "none";
    text4.style.display = "none";
  } else {
    text1.style.display = "none";
  }
}
function openModal2() {
  if (style2.display == "none") {
    text2.style.display = "block";
    text1.style.display = "none";
    text3.style.display = "none";
    text4.style.display = "none";
  } else {
    text2.style.display = "none";
  }
}
function openModal3() {
  if (style3.display == "none") {
    text3.style.display = "block";
    text1.style.display = "none";
    text2.style.display = "none";
    text4.style.display = "none";
  } else {
    text3.style.display = "none";
  }
}
function openModal4() {
  if (style4.display == "none") {
    text4.style.display = "block";
    text1.style.display = "none";
    text2.style.display = "none";
    text3.style.display = "none";
  } else {
    text4.style.display = "none";
  }
}
function qwerty(){
  console.log(1234);
}
