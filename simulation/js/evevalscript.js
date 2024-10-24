
function smatrix(){
      
	  let a = parseFloat(document.getElementById("a").value);
	  let d = parseFloat(document.getElementById("d").value); 
	  let b = 0;
	  let c = parseFloat(document.getElementById("c").value);
	 
		   // Loop through each input field
	  var isValid = true;
	  var inputs = document.getElementsByClassName("basisinput");
	  for (var i = 0; i < inputs.length; i++) {
		  if (inputs[i].value === "") {
			  isValid = false;
			  break;
		  }
	  }
	  // Display alert if any input is empty
	  if (!isValid) {
		  alert("Please enter all the values.");
	  }
	   else {
		document.getElementById("mat").innerHTML ="\\[ A =  \\begin{pmatrix} "+a+" & "+b+" \\\\"  +c+" & "+d+"\\end{pmatrix} \\]";
		MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
		
	  document.getElementById("res1btn").style.display="block";
	  }
	}
	function eigenValues() {
		var a = parseFloat(document.getElementById("a").value);
		var b = parseFloat(document.getElementById("b").value);
		var c = parseFloat(document.getElementById("c").value);
		var d = parseFloat(document.getElementById("d").value);
	
		var determinant = a * d - b * c;
		var trace = a + d;
		var discriminant = Math.sqrt(trace * trace - 4 * determinant);
		
		if((trace * trace - 4 * determinant)<0){
			document.getElementById("result1").innerHTML="";
			document.getElementById("result2").innerHTML="";
			document.getElementById("result1.1").innerHTML="Eigen value does not exist";
			document.getElementById("res2btn").style.display="none";
			return false
		}
		
		var lambda1 = (trace + discriminant) / 2;
		var lambda2 = (trace - discriminant) / 2;
	
		var v1 = [1, (lambda1 - a) / b];
		var v2 = [1, (lambda2 - a) / b];
		
	
		document.getElementById("res2btn").style.display="block";
		document.getElementById('lam1val').innerHTML=lambda1;
		document.getElementById('lam2val').innerHTML=lambda2;
	}
	
	function forprereq(){
		document.getElementById("prereq-h").innerHTML =" <p>&emsp;Discussion on solution of linear equation ux + vy = 0;</p>";
		
		document.getElementById("expln").innerHTML ="&emsp;Case (i): u = 0, v &NotEqual; 0 ; Solution: (x, 0); x&isin;R <br>&emsp;Case (ii): u &NotEqual; 0, v = 0 ; Solution: (0, y); y&isin;R <br>&emsp;Case (iii): u &NotEqual; 0, v &NotEqual; 0 ; Solution: (x, <sup>u</sup>&frasl;<sub>v</sub> x) or (<sup>-v</sup>&frasl;<sub>u</sub>y, y); x,y&isin;R <br>&emsp;Case (iv): u = 0, v = 0 ; Solution: (x, y); x,y&isin;R <br>&emsp;(x, y) &NotEqual; (0, 0);";
	
	}
	function eigenVector() {
		var a = parseFloat(document.getElementById("a").value);
		var b = parseFloat(document.getElementById("b").value);
		var c = parseFloat(document.getElementById("c").value);
		var d = parseFloat(document.getElementById("d").value);

		var va = (a+ "- &lambda;")
		var vd = (d+ "- &lambda;")
		


		var symb = "&lambda;" ;
	
		var determinant = a * d - b * c;
		var trace = a + d;
		var discriminant = Math.sqrt(trace * trace - 4 * determinant);
	
		var lambda1 = (trace + discriminant) / 2;
		var lambda2 = (trace - discriminant) / 2;
	
		var v1 = [1, (lambda1 - a) / b];
		var v2 = [1, (lambda2 - a) / b];

		var det = b*b-4*a*c

			var alambda=d-lambda2;
			let dlambda=d-lambda1;
			let postiveOfdLam = Math.abs(dlambda);
 
    var trace = a + d;
    var trace1 = a - d;
    var trace2 = c % trace1;
    var eq = c / postiveOfdLam;
	var eqdec = parseFloat(eq.toFixed(2));

        var latexCode = `(x, \\frac{${c}x}{${dlambda}})`;
		var latexCode1 = `(x, \\frac{${c}x}{${postiveOfdLam}})`;
		var latexCode2 = `(x, \\frac{${-c}x}{${alambda}})`;
		
			if(lambda1 == a && c !== 0 && d - a == 0){
			
				document.getElementById("ttl1").innerHTML ="<li><b>Eigenvector:</b> (0, y); x&isin;R and y&ne;0</li>"
			document.getElementById("ttl2").style.display="none"
			document.getElementById("see-exp").innerHTML ="&emsp;<li>Eigenvector: (x, y) satisfies AX = &lambda;X</li>";
			document.getElementById("matexp").innerHTML ="\\[ \\begin{pmatrix} "+a+" & "+b+" \\\\"  +c+" & "+d+"\\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = "+lambda1+" \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\] <br><li>Equation 1: "+ a + "x+" + b + "y = " +lambda1+ "x  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +a+ "x - " +lambda1+ "x +" +b+ "y = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+alambda+"x + "+b+"y = 0<br> &emsp; Equation 2: "+ c + "x+" + d + "y = " +lambda1+ "y  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +c+  "x + " +d+ "y - " +lambda1+"y = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+c+"x + "+dlambda+"y = 0</li>" ;
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

			document.getElementById("see-exp2").style.display="none"
			document.getElementById("matexp2").style.display="none"
			
			document.getElementById("res4btn").style.display="none";
			document.getElementById("lam1").style.display="block";
			 }
			 else if(lambda1 == a && c !== 0 && d - a !== 0){
			
				document.getElementById("see-exp2").style.display="block"
			document.getElementById("matexp2").style.display="block"
				document.getElementById('ttl1').innerHTML = `\\[ Eigenvector: ${latexCode1}, x&isin;R&emsp;and&emsp;x&ne;0 &emsp;\\] `;
				MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
				
		
			document.getElementById("see-exp").innerHTML ="&emsp;<li>Eigenvector: (x, y) satisfies AX = &lambda;X</li>";
			document.getElementById("matexp").innerHTML ="\\[ \\begin{pmatrix} "+a+" & "+b+" \\\\"  +c+" & "+d+"\\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = "+lambda1+" \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\] <br><li>Equation 1: "+ a + "x+" + b + "y = " +lambda1+ "x  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +a+ "x - " +lambda1+ "x +" +b+ "y = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+alambda+"x + "+b+"y = 0<br> &emsp; Equation 2: "+ c + "x+" + d + "y = " +lambda1+ "y  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +c+  "x + " +d+ "y - " +lambda1+"y = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+c+"x  "+dlambda+"y = 0" ;
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

			//LAMBDA == D 

			document.getElementById("ttl2").innerHTML ="<li><b>Eigenvector:</b> (0, y); x&isin;R and y&ne;0</li>";
				document.getElementById("ttl2").style.display="block";
			document.getElementById("see-exp2").innerHTML ="&emsp;<li>Eigenvector: (x, y) satisfies AX = &lambda;X</li>";
			document.getElementById("matexp2").innerHTML ="\\[ \\begin{pmatrix} "+a+" & "+b+" \\\\"  +c+" & "+d+"\\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = "+lambda2+" \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\] <br><li>Equation 1: "+ a + "x+" + b + "y = " +lambda2+ "x  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +a+ "x - " +lambda2+ "x +" +b+ "y = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+dlambda+"x + "+b+"y = 0<br> &emsp; Equation 2: "+ c + "x+" + d + "y = " +lambda2+ "y  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +c+  "x + " +d+ "y - " +lambda2+"y = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+c+"x + "+alambda+"y = 0" ;
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

			document.getElementById("res4btn").style.display="block";
			document.getElementById("lam1").style.display="block";
			 }
				
			 else if(lambda1 == d && c !== 0 && d - a !== 0){
				document.getElementById("see-exp2").style.display="block"
			document.getElementById("matexp2").style.display="block"
				document.getElementById("ttl1").innerHTML ="<li><b>Eigenvector:</b> (0, y); x&isin;R and y&ne;0</li>";
			document.getElementById("see-exp").innerHTML ="&emsp;<li>Eigenvector: (x, y) satisfies AX = &lambda;X</li>";
			document.getElementById("matexp").innerHTML ="\\[ \\begin{pmatrix} "+a+" & "+b+" \\\\"  +c+" & "+d+"\\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = "+lambda1+" \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\] <br><li>Equation 1: "+ a + "x+" + b + "y = " +lambda1+ "x  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +a+ "x - " +lambda1+ "x +" +b+ "y = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+alambda+"x + "+b+"y = 0<br> &emsp;  Equation 2: "+ c + "x+" + d + "y = " +lambda1+ "y  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +c+  "x + " +d+ "y - " +lambda1+"y = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+c+"x + "+dlambda+"y = 0" ;
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

				//LAMBDA2 == A
			document.getElementById('ttl2').innerHTML = `\\[ Eigenvector: ${latexCode2}, x&isin;R&emsp;and&emsp;x&ne;0 &emsp;\\] `;
			document.getElementById("ttl2").style.display="block";
				MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
			document.getElementById("see-exp2").innerHTML ="&emsp;<li>Eigenvector: (x, y) satisfies AX = &lambda;X</li>";
			document.getElementById("matexp2").innerHTML ="\\[ \\begin{pmatrix} "+a+" & "+b+" \\\\"  +c+" & "+d+"\\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = "+lambda2+" \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\] <br><li>Equation 1: "+ a + "x+" + b + "y = " +lambda2+ "x  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +a+ "x - " +lambda2+ "x +" +b+ "y = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+dlambda+"x + "+b+"y = 0<br> &emsp;  Equation 2: "+ c + "x+" + d + "y = " +lambda2+ "y  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +c+  "x + " +d+ "y - " +lambda2+"y = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+c+"x +"+alambda+"y = 0" ;
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

			document.getElementById("res4btn").style.display="block";
			document.getElementById("lam1").style.display="block";

			 }
			 else if(lambda1 == d && c == 0 && d - a !== 0){
				document.getElementById("ttl1").innerHTML ="<li><b>Eigenvector:</b> (0, y); x&isin;R and y&ne;0</li>"
				document.getElementById("ttl2").innerHTML="Similarly we can find the eigen vector corresponding to the eigen value <b>&lambda;<sub>2</sub></b> also. ";
				document.getElementById("ttl2").style.display="block";
			document.getElementById("see-exp").innerHTML ="&emsp;<li>Eigenvector: (x, y) satisfies AX = &lambda;X</li>";
			document.getElementById("matexp").innerHTML ="\\[ \\begin{pmatrix} "+a+" & "+b+" \\\\"  +c+" & "+d+"\\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = "+lambda1+" \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\] <br><li>Equation 1: "+ a + "x+" + b + "y = " +lambda1+ "x  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +a+ "x - " +lambda1+ "x +" +b+ "y = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+alambda+"x + "+b+"y = 0<br> &emsp;  Equation 2: "+ c + "x+" + d + "y = " +lambda1+ "y  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +c+  "x + " +d+ "y - " +lambda1+"y = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+c+"x + "+dlambda+"y = 0" ;
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);


			document.getElementById('ttl2').innerHTML = `\\[ Eigenvector: ${latexCode2}, x&isin;R&emsp;and&emsp;x&ne;0 &emsp;\\] `;
				MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
			document.getElementById("see-exp2").innerHTML ="&emsp;<li>Eigenvector: (x, y) satisfies AX = &lambda;X</li>";
			document.getElementById("matexp2").innerHTML ="\\[ \\begin{pmatrix} "+a+" & "+b+" \\\\"  +c+" & "+d+"\\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = "+lambda2+" \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\] <br><li>Equation 1: "+ a + "x+" + b + "y = " +lambda2+ "x  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +a+ "x - " +lambda2+ "x +" +b+ "y = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+dlambda+"x + "+b+"y = 0<br> &emsp;  Equation 2: "+ c + "x+" + d + "y = " +lambda2+ "y  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +c+  "x + " +d+ "y - " +lambda2+"y = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+c+"x +"+alambda+"y = 0" ;
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
			document.getElementById("see-exp2").style.display="block";
			document.getElementById("ttl2").style.display="block";
			document.getElementById("matexp2").style.display="block";
			document.getElementById("res4btn").style.display="block";
			document.getElementById("lam1").style.display="block";
			 }
			 else if(lambda1 == d && c == 0 && d - a == 0){
				document.getElementById("ttl1").innerHTML ="<li><b>Eigenvector:</b> (x, y); x&isin;R and y&ne;0</li>"
				document.getElementById("see-exp").innerHTML ="&emsp;<li>Eigenvector: (x, y) satisfies AX = &lambda;X</li>";
			document.getElementById("matexp").innerHTML ="\\[ \\begin{pmatrix} "+a+" & "+b+" \\\\"  +c+" & "+d+"\\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = "+lambda1+" \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\] <br><li>Equation 1: "+ a + "x+" + b + "y = " +lambda1+ "x  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +a+ "x - " +lambda1+ "x +" +b+ "y = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+alambda+"x + "+b+"y = 0<br> &emsp;  Equation 2: "+ c + "x+" + d + "y = " +lambda1+ "y  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +c+  "x + " +d+ "y - " +lambda1+"y = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+c+"x + "+dlambda+"y = 0" ;
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

			document.getElementById("see-exp2").style.display="none";
			document.getElementById("ttl2").style.display="none";
			document.getElementById("matexp2").style.display="none";
			document.getElementById("res4btn").style.display="none";
			document.getElementById("lam1").style.display="block";
			 }
			 else if(lambda1 == a && c == 0 && d - a !== 0){
				document.getElementById("ttl1").innerHTML ="<li><b>Eigenvector:</b> (0, y); x&isin;R and y&ne;0</li>"
				document.getElementById("ttl2").innerHTML="Similarly we can find the eigen vector corresponding to the eigen value <b>&lambda;<sub>2</sub></b> also. ";
				document.getElementById("ttl2").style.display="block";
			document.getElementById("see-exp").innerHTML ="&emsp;<li>Eigenvector: (x, y) satisfies AX = &lambda;X</li>";
			document.getElementById("matexp").innerHTML ="\\[ \\begin{pmatrix} "+a+" & "+b+" \\\\"  +c+" & "+d+"\\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = "+lambda1+" \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\] <br><li>Equation 1: "+ a + "x+" + b + "y = " +lambda1+ "x  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +a+ "x - " +lambda1+ "x +" +b+ "y = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+alambda+"x + "+b+"y = 0<br> &emsp;  Equation 2: "+ c + "x+" + d + "y = " +lambda1+ "y  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +c+  "x + " +d+ "y - " +lambda1+"y = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+c+"x + "+dlambda+"y = 0" ;
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);


			document.getElementById('ttl2').innerHTML = `\\[ Eigenvector: ${latexCode2}, x&isin;R&emsp;and&emsp;x&ne;0 &emsp;\\] `;
				MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
			document.getElementById("see-exp2").innerHTML ="&emsp;<li>Eigenvector: (x, y) satisfies AX = &lambda;X</li>";
			document.getElementById("matexp2").innerHTML ="\\[ \\begin{pmatrix} "+a+" & "+b+" \\\\"  +c+" & "+d+"\\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = "+lambda2+" \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\] <br><li>Equation 1: "+ a + "x+" + b + "y = " +lambda2+ "x  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +a+ "x - " +lambda2+ "x +" +b+ "y = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+dlambda+"x + "+b+"y = 0<br> &emsp;  Equation 2: "+ c + "x+" + d + "y = " +lambda2+ "y  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +c+  "x + " +d+ "y - " +lambda2+"y = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+c+"x +"+alambda+"y = 0" ;
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
			
			document.getElementById("see-exp2").style.display="block";
			document.getElementById("ttl2").style.display="block";
			document.getElementById("matexp2").style.display="block";
			document.getElementById("res4btn").style.display="block";
			document.getElementById("lam1").style.display="block";
			 }
	}
	
	function forlamda2() {
		var a = parseFloat(document.getElementById("a").value);
		var b = parseFloat(document.getElementById("b").value);
		var c = parseFloat(document.getElementById("c").value);
		var d = parseFloat(document.getElementById("d").value);

		var va = (a+ "- &lambda;")
		var vd = (d+ "- &lambda;")
		


		var symb = "&lambda;" ;
	
		var determinant = a * d - b * c;
		var trace = a + d;
		var discriminant = Math.sqrt(trace * trace - 4 * determinant);
	
		var lambda1 = (trace + discriminant) / 2;
		var lambda2 = (trace - discriminant) / 2;
	
		var v1 = [1, (lambda1 - a) / b];
		var v2 = [1, (lambda2 - a) / b];

		var det = b*b-4*a*c
		
		var alambda2=a-lambda2;
			var dlambda2=d-lambda2;


			document.getElementById("see-exp2").innerHTML ="&emsp;Eigenvector: (x, y) satisfies AX = &lambda;X";
			document.getElementById("matexp2").innerHTML ="\\[ \\begin{pmatrix} "+a+" & "+b+" \\\\"  +c+" & "+d+"\\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = "+lambda2+" \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\] <br>&emsp;&emsp;Equation 1: ("+ a + ")x+(" + b + ")y = " +lambda2+ "x  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(" +a+ ")x - (" +lambda2+ ")x +" +b+ "y = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;("+alambda2+")x + ("+b+")y = 0 <br>&emsp;&emsp;Equation 2: ("+ c + ")x+(" + d + ")y = " +lambda2+ "y  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +c+ "x +(" +d+  ")y - (" +lambda2+")y = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;("+c+")x + ("+dlambda2+")y = 0" ;
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

		
			document.getElementById("lam2").innerHTML ="<p>&emsp;An eigenvector (x, y) satisfies the following: </p>&emsp;(i) (x, y) &NotEqual; (0, 0) <br>&emsp;(ii)(x, y) is a solution of <br>&emsp;&emsp;&nbsp; Equation 1: ("+ alambda2 +")x +(" + b + ")y = 0 <br>&emsp;&emsp;&nbsp; & <br>&emsp;&emsp;&nbsp; Equation 2: (" +c+ ")x + ("+ dlambda2 + ")y = 0<br>&emsp;(iii) Solution of these equations can be obtained by using the discussion given in the prerequisites."   ;
			
	}
	
	function expln2() {
		var a = parseFloat(document.getElementById("a").value);
		var b = parseFloat(document.getElementById("b").value);
		var c = parseFloat(document.getElementById("c").value);
		var d = parseFloat(document.getElementById("d").value);

		var va = (a+ "- &lambda;")
		var vd = (d+ "- &lambda;")
		var symb = "&lambda;" ;
		var determinant = a * d - b * c;
		var trace = a + d;
		var discriminant = Math.sqrt(trace * trace - 4 * determinant);
	
		var lambda1 = (trace + discriminant) / 2;
		var lambda2 = (trace - discriminant) / 2;
	
		var v1 = [1, (lambda1 - a) / b];
		var v2 = [1, (lambda2 - a) / b];

		var det = b*b-4*a*c
		var alambda2=a-lambda2;
			var dlambda2=d-lambda2;

			document.getElementById("see-exp2").innerHTML ="&emsp;Eigenvector: (x, y) satisfies AX = &lambda;X";
			document.getElementById("matexp2").innerHTML ="\\[ \\begin{pmatrix} "+a+" & "+b+" \\\\"  +c+" & "+d+"\\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = "+lambda2+" \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\] <br>&emsp;&emsp;Equation 1: ("+ a + ")x+(" + b + ")y = " +lambda2+ "x  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(" +a+ ")x - (" +lambda2+ ")x +" +b+ "y = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;("+alambda2+")x + ("+b+")y = 0 <br>&emsp;&emsp;Equation 2: ("+ c + ")x+(" + d + ")y = " +lambda2+ "y  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +c+ "x +(" +d+  ")y - (" +lambda2+")y = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;("+c+")x + ("+dlambda2+")y = 0" ;
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
	}


	function chEqe(){
		var a = parseFloat(document.getElementById("a").value);
		var b = parseFloat(document.getElementById("b").value);
		var c = parseFloat(document.getElementById("c").value);
		var d = parseFloat(document.getElementById("d").value);

		var va = (a+ "- &lambda;")
		var vd = (d+ "- &lambda;")
		var symb = "&lambda;" ;
		var determinant = a * d - b * c;
		var trace = a + d;
		var discriminant = Math.sqrt(trace * trace - 4 * determinant);
	
		var lambda1 = (trace + discriminant) / 2;
		var lambda2 = (trace - discriminant) / 2;

		if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
        alert("Please enter all the values.");
    }
	
		else 
			{
				document.getElementById('lam1val').innerHTML=lambda1;
		document.getElementById('lam2val').innerHTML=lambda2;
		document.getElementById("cheqe0.1").innerHTML ="&emsp;&emsp;&emsp;&emsp;i.e."; 
		document.getElementById("cheqe1").innerHTML =" &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;("+va+") (" +vd+ ") = 0" ;
		document.getElementById("result1.1").innerHTML = "&emsp;&emsp; <strong>&lambda;<sub>1</sub> </strong> =" +lambda1 + ", <strong> &lambda;<sub>2</sub></strong> = " + lambda2+ " [&because; Eigen values are roots of charcteristic equation] ";
		document.getElementById("cheqe2").innerHTML ="&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Roots: &lambda;<sub>1</sub>  =" +lambda1 + ", &lambda;<sub>2</sub> = " + lambda2;
		
		
	   document.getElementById("cheqe").innerHTML ="\\[ det \\begin{vmatrix} "+va+" & "+b+" \\\\"  +c+" & "+vd+"\\end{vmatrix} = 0 \\]" ;
	MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
	   document.getElementById("cheqhead").innerHTML="&emsp; Charcteristic Equation:";
	   
	   document.getElementById("res1.01").style.display="block"
	   
	}
   }