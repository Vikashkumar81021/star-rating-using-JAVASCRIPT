let star = document.getElementsByClassName("star");
let output = document.getElementById("output");

const genStar = (num) => {
  for (let i = 0; i < num; i++) {
    if (num == 1) cls = "one";
    else if (num == 2) cls = "two";
    else if (num == 3) cls = "three";
    else if (num == 4) cls = "four";
    else if (num == 5) cls = "five";
    star[i].className = "star " + cls;
  }
  output.innerText = "Rating is :" + n + "/5";
};
