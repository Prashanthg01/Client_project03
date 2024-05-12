function showDiv(divNumber) {
    var divs = document.getElementsByClassName("content");
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.remove("active");
    }
    var divId = "div" + divNumber;
    document.getElementById(divId).classList.add("active");
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active-button");
    }
    var buttonId = "button" + divNumber;
    document.getElementById(buttonId).classList.add("active-button");
}


function showDiv1(divNumber) {
  // Hide all divs
  var divs = document.getElementsByClassName("contents");
  for (var i = 0; i < divs.length; i++) {
      divs[i].classList.remove("active2");
  }

  // Show the selected div
  var divId = "block" + divNumber;
  document.getElementById(divId).classList.add("active2");

  // Update active button
  var buttons = document.getElementsByTagName("button");
  for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active-btn");
  }
  var buttonId = "btn" + divNumber;
  document.getElementById(buttonId).classList.add("active-btn");
}
