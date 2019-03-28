var count =0;

function allowDrop1(ev) {
  ev.preventDefault();
}

function drag1(ev) {
  ev.dataTransfer.setData("text1", ev.target.id);
}

function drop1(ev) {
  ev.preventDefault();
  var data1 = ev.dataTransfer.getData("text1");
  ev.target.appendChild(document.getElementById(data1));
  document.getElementById("drop1a").style.borderColor = "#37d642";
  document.getElementById("drop1a").style.borderWidth = "8px";
  count++;
  if(count == 5){
    document.getElementById("nextBtn").style.display = "block";
  }
}

function allowDrop2(ev) {
  ev.preventDefault();
}

function drag2(ev) {
  ev.dataTransfer.setData("text2", ev.target.id);
}

function drop2(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text2");
  ev.target.appendChild(document.getElementById(data));
  document.getElementById("drop2a").style.borderColor = "#37d642";
  document.getElementById("drop2a").style.borderWidth = "8px";
  count++;
  if(count == 5){
    document.getElementById("nextBtn").style.display = "block";
  }
}

function allowDrop3(ev) {
  ev.preventDefault();
}

function drag3(ev) {
  ev.dataTransfer.setData("text3", ev.target.id);
}

function drop3(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text3");
  ev.target.appendChild(document.getElementById(data));
  document.getElementById("drop3a").style.borderColor = "#37d642";
  document.getElementById("drop3a").style.borderWidth = "8px";
  count++;
  if(count == 5){
    document.getElementById("nextBtn").style.display = "block";
  }
}

function allowDrop4(ev) {
  ev.preventDefault();
}

function drag4(ev) {
  ev.dataTransfer.setData("text4", ev.target.id);
}

function drop4(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text4");
  ev.target.appendChild(document.getElementById(data));
  document.getElementById("drop4a").style.borderColor = "#37d642";
  document.getElementById("drop4a").style.borderWidth = "8px";
  count++;
  if(count == 5){
    document.getElementById("nextBtn").style.display = "block";
  }
}

function allowDrop5(ev) {
  ev.preventDefault();
}

function drag5(ev) {
  ev.dataTransfer.setData("text5", ev.target.id);
}

function drop5(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text5");
  ev.target.appendChild(document.getElementById(data));
  document.getElementById("drop5a").style.borderColor = "#37d642";
  document.getElementById("drop5a").style.borderWidth = "8px";
  count++;
  if(count == 5){
    document.getElementById("nextBtn").style.display = "block";
  }
}



function rand() {
  var questions = $(".qs");
  for(var i = 0; i < questions.length; i++){
      var target = Math.floor(Math.random() * questions.length -1) + 1;
      var target2 = Math.floor(Math.random() * questions.length -1) +1;
      questions.eq(target).before(questions.eq(target2));
  }

  var answers = $(".as");
  for(var i = 0; i < answers.length; i++){
      var target = Math.floor(Math.random() * answers.length -1) + 1;
      var target2 = Math.floor(Math.random() * answers.length -1) +1;
      answers.eq(target).before(answers.eq(target2));
  }
}
