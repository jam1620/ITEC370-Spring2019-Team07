var qNums = [1];
var count = 1;


function qStart() {
  document.getElementById("q1").style.display = "block";
}


function adv() {


  for (var i = 0; i < qNums.length; i++) {
    //var rand = parseInt(Math.random(1)*10); RANDOM ORDER - ADD IF TO ELEM ANSWERED QUESTIONS
    //qNums[i] = rand;
    qNums[i] +=1;

    switch (qNums[i]) {

        case 1:
        document.getElementById("q1").style.display = "block";
        document.getElementById("q2").style.display = "none";
        document.getElementById("q3").style.display = "none";
        document.getElementById("q4").style.display = "none";
        document.getElementById("q5").style.display = "none";
        document.getElementById("q6").style.display = "none";
        document.getElementById("q7").style.display = "none";
        document.getElementById("q8").style.display = "none";
        document.getElementById("q9").style.display = "none";
        document.getElementById("q10").style.display = "none";

        break;
      case 2:
        document.getElementById("q1").style.display = "none";
        document.getElementById("q2").style.display = "block";
        document.getElementById("q3").style.display = "none";
        document.getElementById("q4").style.display = "none";
        document.getElementById("q5").style.display = "none";
        document.getElementById("q6").style.display = "none";
        document.getElementById("q7").style.display = "none";
        document.getElementById("q8").style.display = "none";
        document.getElementById("q9").style.display = "none";
        document.getElementById("q10").style.display = "none";
        break;
      case 3:
        document.getElementById("q1").style.display = "none";
        document.getElementById("q2").style.display = "none";
        document.getElementById("q3").style.display = "block";
        document.getElementById("q4").style.display = "none";
        document.getElementById("q5").style.display = "none";
        document.getElementById("q6").style.display = "none";
        document.getElementById("q7").style.display = "none";
        document.getElementById("q8").style.display = "none";
        document.getElementById("q9").style.display = "none";
        document.getElementById("q10").style.display = "none";

        break;
      case 4:
        document.getElementById("q1").style.display = "none";
        document.getElementById("q2").style.display = "none";
        document.getElementById("q3").style.display = "none";
        document.getElementById("q4").style.display = "block";
        document.getElementById("q5").style.display = "none";
        document.getElementById("q6").style.display = "none";
        document.getElementById("q7").style.display = "none";
        document.getElementById("q8").style.display = "none";
        document.getElementById("q9").style.display = "none";
        document.getElementById("q10").style.display = "none";
        break;
      case 5:
        document.getElementById("q1").style.display = "none";
        document.getElementById("q2").style.display = "none";
        document.getElementById("q3").style.display = "none";
        document.getElementById("q4").style.display = "none";
        document.getElementById("q5").style.display = "block";
        document.getElementById("q6").style.display = "none";
        document.getElementById("q7").style.display = "none";
        document.getElementById("q8").style.display = "none";
        document.getElementById("q9").style.display = "none";
        document.getElementById("q10").style.display = "none";
        break;
      case 6:
        document.getElementById("q1").style.display = "none";
        document.getElementById("q2").style.display = "none";
        document.getElementById("q3").style.display = "none";
        document.getElementById("q4").style.display = "none";
        document.getElementById("q5").style.display = "none";
        document.getElementById("q6").style.display = "block";
        document.getElementById("q7").style.display = "none";
        document.getElementById("q8").style.display = "none";
        document.getElementById("q9").style.display = "none";
        document.getElementById("q10").style.display = "none";
        break;
      case 7:
        document.getElementById("q1").style.display = "none";
        document.getElementById("q2").style.display = "none";
        document.getElementById("q3").style.display = "none";
        document.getElementById("q4").style.display = "none";
        document.getElementById("q5").style.display = "none";
        document.getElementById("q6").style.display = "none";
        document.getElementById("q7").style.display = "block";
        document.getElementById("q8").style.display = "none";
        document.getElementById("q9").style.display = "none";
        document.getElementById("q10").style.display = "none";
        break;
      case 8:
        document.getElementById("q1").style.display = "none";
        document.getElementById("q2").style.display = "none";
        document.getElementById("q3").style.display = "none";
        document.getElementById("q4").style.display = "none";
        document.getElementById("q5").style.display = "none";
        document.getElementById("q6").style.display = "none";
        document.getElementById("q7").style.display = "none";
        document.getElementById("q8").style.display = "block";
        document.getElementById("q9").style.display = "none";
        document.getElementById("q10").style.display = "none";
        break;
      case 9:
        document.getElementById("q1").style.display = "none";
        document.getElementById("q2").style.display = "none";
        document.getElementById("q3").style.display = "none";
        document.getElementById("q4").style.display = "none";
        document.getElementById("q5").style.display = "none";
        document.getElementById("q6").style.display = "none";
        document.getElementById("q7").style.display = "none";
        document.getElementById("q8").style.display = "none";
        document.getElementById("q9").style.display = "block";
        document.getElementById("q10").style.display = "none";
        break;
      case 10:
        document.getElementById("q1").style.display = "none";
        document.getElementById("q2").style.display = "none";
        document.getElementById("q3").style.display = "none";
        document.getElementById("q4").style.display = "none";
        document.getElementById("q5").style.display = "none";
        document.getElementById("q6").style.display = "none";
        document.getElementById("q7").style.display = "none";
        document.getElementById("q8").style.display = "none";
        document.getElementById("q9").style.display = "none";
        document.getElementById("q10").style.display = "block";
        break;
      default:
        document.getElementById("q10").style.display = "none";

    }
  }
    //alert(qNums);
  if(qNums > 10) {
    alert("Congratulations! Click 'Submit' to view your score!");
    qNums = 10;

  }


  document.getElementById("qNum").innerHTML = "Question Number: " + qNums;
  count++;
}

function print_certificate(cert) {
     var printContents = document.getElementById(cert).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
}

var cCorrect = 0;
function subQ() {

  if(qNums == 1 ) {
    if(document.getElementById("ques1a").checked == true) {
        cCorrect++;
        adv();
    } else if(document.getElementById("ques1b").checked == true) {
        adv();
    } else if(document.getElementById("ques1c").checked == true) {
       adv();
    }
  } else if(qNums == 2) {
    if(document.getElementById("ques2a").checked == true) {
        cCorrect++;
        adv();
    } else if(document.getElementById("ques2b").checked == true) {
        adv();
    } else if(document.getElementById("ques2c").checked == true) {
       adv();
    }
  } else if(qNums == 3) {
    if(document.getElementById("ques3a").checked == true) {
        cCorrect++;
        adv();
    } else if(document.getElementById("ques3b").checked == true) {
        adv();
    } else if(document.getElementById("ques3c").checked == true) {
       adv();
    }
  } else if(qNums == 4) {
    if(document.getElementById("ques4a").checked == true) {
        cCorrect++;
        adv();
    } else if(document.getElementById("ques4b").checked == true) {
        adv();
    } else if(document.getElementById("ques4c").checked == true) {
       adv();
    }
  } else if(qNums == 5) {
    if(document.getElementById("ques5a").checked == true) {
        cCorrect++;
        adv();
    } else if(document.getElementById("ques5b").checked == true) {
        adv();
    } else if(document.getElementById("ques5c").checked == true) {
       adv();
    }
  } else if(qNums == 6) {
    if(document.getElementById("ques6a").checked == true) {
        cCorrect++;
        adv();
    } else if(document.getElementById("ques6b").checked == true) {
        adv();
    } else if(document.getElementById("ques6c").checked == true) {
       adv();
    }
  } else if(qNums == 7 ) {
    if(document.getElementById("ques7a").checked == true) {
        cCorrect++;
        adv();
    } else if(document.getElementById("ques7b").checked == true) {
        adv();
    } else if(document.getElementById("ques7c").checked == true) {
       adv();
    }
  } else if(qNums == 8) {
    if(document.getElementById("ques8a").checked == true) {
        cCorrect++;
        adv();
    } else if(document.getElementById("ques8b").checked == true) {
        adv();
    } else if(document.getElementById("ques8c").checked == true) {
       adv();
    }
  } else if(qNums == 9) {
    if(document.getElementById("ques9a").checked == true) {
        cCorrect++;
        adv();
    } else if(document.getElementById("ques9b").checked == true) {
        adv();
    } else if(document.getElementById("ques9c").checked == true) {
       adv();
    }
  } else if(qNums == 10) {
    if(document.getElementById("ques10a").checked == true) {
        cCorrect++;
        adv();
    } else if(document.getElementById("ques10b").checked == true) {
        adv();
    } else if(document.getElementById("ques10c").checked == true) {
       adv();
    }
    if(cCorrect >= 10) {
      cCorrect = 10;
    }
    alert("Your score is: " + cCorrect + " / 10!");

  }



  if(cCorrect >= 7 && qNums == 10) {
    	window.location = "print_certificate.html";
  }
}
