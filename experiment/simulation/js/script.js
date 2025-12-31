function mulX2(){
    document.getElementById('multX').src='images/multX.png';
}
function txfun(){
    document.getElementById('tximg').src='images/tx111.png';
}




function ques1(){
      const selected = document.getElementById("vectorSelect").value;
  const result = document.getElementById("result");
  if(selected === "a"){
    result.textContent = "Please select the option!";
    result.style.color = "blue";
  }
else{
  if (selected === "e") {
    result.innerHTML = "<span style='color:black;'>Answer:</span>✅ Correct!";
    result.style.color = "green";
   
  } else {
    result.innerHTML = "<span style='color:black;'>Answer:</span>❌ Incorrect. Correct Answer: (&radic;2, &radic;2)";
    result.style.color = "red";
    
  }}
}

function ques2(){
      const selected = document.getElementById("vectorSelect2").value;
  const result = document.getElementById("result2");
  if(selected === "a"){
    result.textContent = "Please select the option!";
    result.style.color = "blue";
  }
else{
  if (selected === "c") {
    result.innerHTML = "<span style='color:black;'>Answer:</span>✅ Correct!";
    result.style.color = "green";
   
  } else {
    result.innerHTML = "<span style='color:black;'>Answer:</span>❌ Incorrect. Correct Answer: (2, -2)";
    result.style.color = "red";
    
  }}
}

function ques3(){
      const selected = document.getElementById("vectorSelect3").value;
  const result = document.getElementById("result3");
  if(selected === "a"){
    result.textContent = "Please select the option!";
    result.style.color = "blue";
  }
else{
  if (selected === "d") {
    result.innerHTML = "<span style='color:black;'>Answer:</span>✅ Correct!";
    result.style.color = "green";
   
  } else {
    result.innerHTML = "<span style='color:black;'>Answer:</span>❌ Incorrect! Correct Answer: (2, 0)";
    result.style.color = "red";
    
  }}
}

function ques4(){
      const selected = document.getElementById("vectorSelect4").value;
  const result = document.getElementById("result4");
  if(selected === "a"){
    result.textContent = "Please select the option!";
    result.style.color = "blue";
  }
else{
  if (selected === "c") {
    result.innerHTML = "<span style='color:black;'>Answer:</span>✅ Correct!";
    result.style.color = "green";
   
  } else {
    result.innerHTML = "<span style='color:black;'>Answer:</span>❌ Incorrect! Correct Answer: (-2, 3)";
    result.style.color = "red";
    
  }}
}



function ques5(){
      const selected = document.getElementById("vectorSelect5").value;
  const result = document.getElementById("result5");
  if(selected === "a"){
    result.textContent = "Please select the option!";
    result.style.color = "blue";
  }
else{
  if (selected === "d") {
    result.innerHTML = "<span style='color:black;'>Answer:</span>✅ Correct!";
    result.style.color = "green";
   
  } else {
    result.innerHTML = "<span style='color:black;'>Answer:</span>❌ Incorrect! Correct Answer: for some <i>x</i>&ne;0, <i>x</i>&isin;<i>R</i><sup>2</sup>.";
    result.style.color = "red";
    
  }}
}


function ques6(){
      const selected = document.getElementById("vectorSelect6").value;
  const result = document.getElementById("result6");
  if(selected === "a"){
    result.textContent = "Please select the option!";
    result.style.color = "blue";
  }
else{
  if (selected === "b") {
    result.innerHTML = "<span style='color:black;'>Answer:</span>✅ Correct!";
    result.style.color = "green";
   
  } else {
    result.innerHTML = "<span style='color:black;'>Answer:</span>❌ Incorrect! Correct Answer: <i>x</i>&ne;(0, 0).";
    result.style.color = "red";
    
  }}
}
function infren(){
    document.getElementById('infr').src='images/infrn.png';
}
function eveval(){
    document.getElementById('evev').src='images/eveval111.png';

}


// ================================= PAGE 2 SCRIPT =============================================



function p2que0(){
  
      const selected = document.getElementById("valSelect0").value;
  const result = document.getElementById("p2result0");
  if(selected === "a"){
    result.textContent = "Please select the option!";
    result.style.color = "blue";
  }
else{
  if (selected === "c") {
    result.innerHTML = "<span style='color:black;'>Answer:</span> ✅ Correct! <br> <span style='color:black;'>Reason: T(1, 1) = (1, 1) = 1.(1, 1) <br> &emsp;&emsp; &emsp; T(1, -1) = (-1, 1) = (-1).(1 -1)";
    result.style.color = "green";
   
  } else {
    result.innerHTML = "<span style='color:black;'>Answer:</span>❌ Incorrect! Correct Answer: 1 & -1 <br> <span style='color:black;'>Reason: T(1, 1) = (1, 1) = 1.(1, 1) <br> &emsp;&emsp; &emsp; T(1, -1) = (-1, 1) = (-1).(1 -1)";
    result.style.color = "red";
    
  }}
}


function p2que1(){
  
      const selected = document.getElementById("vectorSelect1").value;
  const result = document.getElementById("p2result1");
  if(selected === "a"){
    result.textContent = "Please select the option!";
    result.style.color = "blue";
  }
else{
  if (selected === "c") {
    result.innerHTML = "<span style='color:black;'>Answer:</span> ✅ Correct! <br> <span style='color:black;'>Reason: T(1, 1) = (1, 1) = 1.(1, 1)</span>";
    result.style.color = "green";
   
  } else {
    result.innerHTML = "<span style='color:black;'>Answer:</span>❌ Incorrect! Correct Answer: (1, 1) <br> <span style='color:black;'>Reason: T(1, 1) = (1, 1) = 1.(1, 1)</span>";
    result.style.color = "red";
    
  }}
}


function p2que2(){
  
      const selected = document.getElementById("vectorSelect2").value;
  const result = document.getElementById("p2result2");
  if(selected === "a"){
    result.textContent = "Please select the option!";
    result.style.color = "blue";
  }
else{
  if (selected === "d") {
    result.innerHTML = "<span style='color:black;'>Answer:</span> ✅ Correct!";
    result.style.color = "green";
   
  } else {
    result.innerHTML = "<span style='color:black;'>Answer:</span>❌ Incorrect! Correct Answer: (<i>x, x</i>), <i>x</i> ≠ 0, <i>x</i> ∈ <i>R</i>.";
    result.style.color = "red";
    
  }}
}

function p2que3(){
  
      const selected = document.getElementById("vectorSelect3").value;
  const result = document.getElementById("p2result3");
  if(selected === "a"){
    result.textContent = "Please select the option!";
    result.style.color = "blue";
  }
else{
  if (selected === "b") {
    result.innerHTML = "<span style='color:black;'>Answer:</span> ✅ Correct! <br> <span style='color:black;'>Reason: T(1, -1) = (-1, 1) = (-1).(1 -1)</span>";
    result.style.color = "green";
   
  } else {
    result.innerHTML = "<span style='color:black;'>Answer:</span>❌ Incorrect! Correct Answer: (1, -1) <br> <span style='color:black;'>Reason: T(1, -1) = (-1, 1) = (-1).(1 -1)</span>";
    result.style.color = "red";
    
  }}
}


function p2que4(){
  
      const selected = document.getElementById("vectorSelect4").value;
  const result = document.getElementById("p2result4");
  if(selected === "a"){
    result.textContent = "Please select the option!";
    result.style.color = "blue";
  }
else{
  if (selected === "b") {
    result.innerHTML = "<span style='color:black;'>Answer:</span> ✅ Correct! ";
    result.style.color = "green";
   
  } else {
    result.innerHTML = "<span style='color:black;'>Answer:</span>❌ Incorrect! Correct Answer: (-<i>x, x</i>), <i>x</i> ≠ 0, <i>x</i> ∈ <i>R</i>.";
    result.style.color = "red";
    
  }}
}