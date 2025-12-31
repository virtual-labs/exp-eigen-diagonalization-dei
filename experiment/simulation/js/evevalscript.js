
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
			
				document.getElementById("ttl1").innerHTML ="<li><b>Eigenvector:</b> (0, <i>y</i>); <i>x</i>&isin;<i>R</i> and <i>y</i>&ne;0</li>"
			document.getElementById("ttl2").style.display="none"
			document.getElementById("see-exp").innerHTML ="&emsp;<li>Eigenvector: (<i>x, y</i>) satisfies <i>AX = &lambda;X</i></li>";
			document.getElementById("matexp").innerHTML ="\\[ \\begin{pmatrix} "+a+" & "+b+" \\\\"  +c+" & "+d+"\\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = "+lambda1+" \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\] <br><li>Equation 1: "+ a + "<i>x</i>+" + b + "<i>y</i> = " +lambda1+ "<i>x</i>  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +a+ "<i>x</i> - " +lambda1+ "<i>x</i> +" +b+ "<i>y</i> = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+alambda+"<i>x</i> + "+b+"<i>y</i> = 0<br> &emsp; Equation 2: "+ c + "<i>x</i>+" + d + "<i>y</i> = " +lambda1+ "<i>y</i>  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +c+  "<i>x</i> + " +d+ "<i>y</i> - " +lambda1+"<i>y</i> = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+c+"<i>x</i> + "+dlambda+"<i>y</i> = 0</li>" ;
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

			document.getElementById("see-exp2").style.display="none"
			document.getElementById("matexp2").style.display="none"
			
			document.getElementById("res4btn").style.display="none";
			document.getElementById("lam1").style.display="block";
			 }
			 else if(lambda1 == a && c !== 0 && d - a !== 0){
			
				document.getElementById("see-exp2").style.display="block"
			document.getElementById("matexp2").style.display="block"
				document.getElementById('ttl1').innerHTML = `<b>Eigenvector:</b> \\( ${latexCode1}, x&isin;R&emsp;and&emsp;x&ne;0 &emsp;\\) `;
				MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
				
		
			document.getElementById("see-exp").innerHTML ="&emsp;<li>Eigenvector: (<i>x, y</i>) satisfies <i>AX = &lambda;X</i></li>";
			document.getElementById("matexp").innerHTML ="\\[ \\begin{pmatrix} "+a+" & "+b+" \\\\"  +c+" & "+d+"\\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = "+lambda1+" \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\] <br><li>Equation 1: "+ a + "<i>x</i>+" + b + "<i>y</i> = " +lambda1+ "<i>x</i>  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +a+ "<i>x</i> - " +lambda1+ "<i>x</i> +" +b+ "<i>y</i> = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+alambda+"<i>x</i> + "+b+"<i>y</i> = 0<br> &emsp; Equation 2: "+ c + "<i>x</i>+" + d + "<i>y</i> = " +lambda1+ "<i>y</i>  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +c+  "<i>x</i> + " +d+ "<i>y</i> - " +lambda1+"<i>y</i> = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+c+"<i>x</i>  "+dlambda+"<i>y</i> = 0" ;
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

			//LAMBDA == D 

			document.getElementById("ttl2").innerHTML ="<li><b>Eigenvector:</b> (0, <i>y</i>); <i>x</i>&isin;<i>R</i> and <i>y</i>&ne;0</li>";
				document.getElementById("ttl2").style.display="block";
			document.getElementById("see-exp2").innerHTML ="&emsp;<li>Eigenvector: (<i>x, y</i>) satisfies <i>AX = &lambda;X</i></li>";
			document.getElementById("matexp2").innerHTML ="\\[ \\begin{pmatrix} "+a+" & "+b+" \\\\"  +c+" & "+d+"\\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = "+lambda2+" \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\] <br><li>Equation 1: "+ a + "<i>x</i>+" + b + "<i>y</i> = " +lambda2+ "<i>x</i>  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +a+ "<i>x</i> - " +lambda2+ "<i>x</i> +" +b+ "<i>y</i> = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+dlambda+"<i>x</i> + "+b+"<i>y</i> = 0<br> &emsp; Equation 2: "+ c + "<i>x</i>+" + d + "<i>y</i> = " +lambda2+ "<i>y</i>  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +c+  "<i>x</i> + " +d+ "<i>y</i> - " +lambda2+"<i>y</i> = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+c+"<i>x</i> + "+alambda+"<i>y</i> = 0" ;
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

			document.getElementById("res4btn").style.display="block";
			document.getElementById("lam1").style.display="block";
			 }
				
			 else if(lambda1 == d && c !== 0 && d - a !== 0){
				document.getElementById("see-exp2").style.display="block"
			document.getElementById("matexp2").style.display="block"
				document.getElementById("ttl1").innerHTML ="<li><b>Eigenvector:</b> (0, <i>y</i>); <i>x</i>&isin;<i>R</i> and <i>y</i>&ne;0</li>";
			document.getElementById("see-exp").innerHTML ="&emsp;<li>Eigenvector: (<i>x, y</i>) satisfies <i>AX = &lambda;X</i></li>";
			document.getElementById("matexp").innerHTML ="\\[ \\begin{pmatrix} "+a+" & "+b+" \\\\"  +c+" & "+d+"\\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = "+lambda1+" \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\] <br><li>Equation 1: "+ a + "<i>x</i>+" + b + "<i>y</i> = " +lambda1+ "<i>x</i>  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +a+ "<i>x</i> - " +lambda1+ "<i>x</i> +" +b+ "<i>y</i> = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+alambda+"<i>x</i> + "+b+"<i>y</i> = 0<br> &emsp;  Equation 2: "+ c + "<i>x</i>+" + d + "<i>y</i> = " +lambda1+ "<i>y</i>  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +c+  "<i>x</i> + " +d+ "<i>y</i> - " +lambda1+"<i>y</i> = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+c+"<i>x</i> + "+dlambda+"<i>y</i> = 0" ;
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

				//LAMBDA2 == A
			document.getElementById('ttl2').innerHTML = document.getElementById('ttl1').innerHTML = `<b>Eigenvector:</b> \\( ${latexCode1},\\; x \\in \\mathbb{R},\\; \\text{and}\\; x \\neq 0 \\)`;
			document.getElementById("ttl2").style.display="block";
				MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
			document.getElementById("see-exp2").innerHTML ="&emsp;<li>Eigenvector: (<i>x, y</i>) satisfies <i>AX = &lambda;X</i></li>";
			document.getElementById("matexp2").innerHTML ="\\[ \\begin{pmatrix} "+a+" & "+b+" \\\\"  +c+" & "+d+"\\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = "+lambda2+" \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\] <br><li>Equation 1: "+ a + "<i>x</i>+" + b + "<i>y</i> = " +lambda2+ "<i>x</i>  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +a+ "<i>x</i> - " +lambda2+ "<i>x</i> +" +b+ "<i>y</i> = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+dlambda+"<i>x</i> + "+b+"<i>y</i> = 0<br> &emsp;  Equation 2: "+ c + "<i>x</i>+" + d + "<i>y</i> = " +lambda2+ "<i>y</i>  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +c+  "<i>x</i> + " +d+ "<i>y</i> - " +lambda2+"<i>y</i> = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+c+"<i>x</i> +"+alambda+"<i>y</i> = 0" ;
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

			document.getElementById("res4btn").style.display="block";
			document.getElementById("lam1").style.display="block";

			 }
			 else if(lambda1 == d && c == 0 && d - a !== 0){
				document.getElementById("ttl1").innerHTML ="<li><b>Eigenvector:</b> (0, <i>y</i>); <i>x</i>&isin;<i>R</i> and <i>y</i>&ne;0</li>"
				document.getElementById("ttl2").innerHTML="Similarly we can find the eigen vector corresponding to the eigen value <b>&lambda;<sub>2</sub></b> also. ";
				document.getElementById("ttl2").style.display="block";
			document.getElementById("see-exp").innerHTML ="&emsp;<li>Eigenvector: (<i>x, y</i>) satisfies <i>AX = &lambda;X</i></li>";
			document.getElementById("matexp").innerHTML ="\\[ \\begin{pmatrix} "+a+" & "+b+" \\\\"  +c+" & "+d+"\\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = "+lambda1+" \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\] <br><li>Equation 1: "+ a + "<i>x</i>+" + b + "<i>y</i> = " +lambda1+ "<i>x</i>  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +a+ "<i>x</i> - " +lambda1+ "<i>x</i> +" +b+ "<i>y</i> = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+alambda+"<i>x</i> + "+b+"<i>y</i> = 0<br> &emsp;  Equation 2: "+ c + "<i>x</i>+" + d + "<i>y</i> = " +lambda1+ "<i>y</i>  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +c+  "<i>x</i> + " +d+ "<i>y</i> - " +lambda1+"<i>y</i> = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+c+"<i>x</i> + "+dlambda+"<i>y</i> = 0" ;
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);


			document.getElementById('ttl2').innerHTML = `\\[ Eigenvector: ${latexCode2}, x&isin;R&emsp;and&emsp;x&ne;0 &emsp;\\] `;
				MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
			document.getElementById("see-exp2").innerHTML ="&emsp;<li>Eigenvector: (<i>x, y</i>) satisfies <i>AX = &lambda;X</i></li>";
			document.getElementById("matexp2").innerHTML ="\\[ \\begin{pmatrix} "+a+" & "+b+" \\\\"  +c+" & "+d+"\\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = "+lambda2+" \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\] <br><li>Equation 1: "+ a + "<i>x</i>+" + b + "<i>y</i> = " +lambda2+ "<i>x</i>  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +a+ "<i>x</i> - " +lambda2+ "<i>x</i> +" +b+ "<i>y</i> = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+dlambda+"<i>x</i> + "+b+"<i>y</i> = 0<br> &emsp;  Equation 2: "+ c + "<i>x</i>+" + d + "<i>y</i> = " +lambda2+ "<i>y</i>  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +c+  "<i>x</i> + " +d+ "<i>y</i> - " +lambda2+"<i>y</i> = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+c+"<i>x</i> +"+alambda+"<i>y</i> = 0" ;
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
			document.getElementById("see-exp2").style.display="block";
			document.getElementById("ttl2").style.display="block";
			document.getElementById("matexp2").style.display="block";
			document.getElementById("res4btn").style.display="block";
			document.getElementById("lam1").style.display="block";
			 }
			 else if(lambda1 == d && c == 0 && d - a == 0){
				document.getElementById("ttl1").innerHTML ="<li><b>Eigenvector:</b> (<i>x, y</i>); <i>x</i>&isin;<i>R</i> and <i>y</i>&ne;0</li>"
				document.getElementById("see-exp").innerHTML ="&emsp;<li>Eigenvector: (<i>x, y</i>) satisfies <i>AX = &lambda;X</i></li>";
			document.getElementById("matexp").innerHTML ="\\[ \\begin{pmatrix} "+a+" & "+b+" \\\\"  +c+" & "+d+"\\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = "+lambda1+" \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\] <br><li>Equation 1: "+ a + "<i>x</i>+" + b + "<i>y</i> = " +lambda1+ "<i>x</i>  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +a+ "<i>x</i> - " +lambda1+ "<i>x</i> +" +b+ "<i>y</i> = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+alambda+"<i>x</i> + "+b+"<i>y</i> = 0<br> &emsp;  Equation 2: "+ c + "<i>x</i>+" + d + "<i>y</i> = " +lambda1+ "<i>y</i>  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +c+  "<i>x</i> + " +d+ "<i>y</i> - " +lambda1+"<i>y</i> = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+c+"<i>x</i> + "+dlambda+"<i>y</i> = 0" ;
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

			document.getElementById("see-exp2").style.display="none";
			document.getElementById("ttl2").style.display="none";
			document.getElementById("matexp2").style.display="none";
			document.getElementById("res4btn").style.display="none";
			document.getElementById("lam1").style.display="block";
			 }
			 else if(lambda1 == a && c == 0 && d - a !== 0){
				document.getElementById("ttl1").innerHTML ="<li><b>Eigenvector:</b> (0, <i>y</i>); <i>x</i>&isin;<i>R</i> and <i>y</i>&ne;0</li>"
				document.getElementById("ttl2").innerHTML="Similarly we can find the eigen vector corresponding to the eigen value <b>&lambda;<sub>2</sub></b> also. ";
				document.getElementById("ttl2").style.display="block";
			document.getElementById("see-exp").innerHTML ="&emsp;<li>Eigenvector: (<i>x, y</i>) satisfies <i>AX = &lambda;X</i></li>";
			document.getElementById("matexp").innerHTML ="\\[ \\begin{pmatrix} "+a+" & "+b+" \\\\"  +c+" & "+d+"\\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = "+lambda1+" \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\] <br><li>Equation 1: "+ a + "<i>x</i>+" + b + "<i>y</i> = " +lambda1+ "<i>x</i>  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +a+ "<i>x</i> - " +lambda1+ "<i>x</i> +" +b+ "<i>y</i> = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+alambda+"<i>x</i> + "+b+"<i>y</i> = 0<br> &emsp;  Equation 2: "+ c + "<i>x</i>+" + d + "<i>y</i> = " +lambda1+ "<i>y</i>  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +c+  "<i>x</i> + " +d+ "<i>y</i> - " +lambda1+"<i>y</i> = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+c+"<i>x</i> + "+dlambda+"<i>y</i> = 0" ;
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);


			document.getElementById('ttl2').innerHTML = `<b>Eigenvector:</b> \\( ${latexCode2}, x&isin;R&emsp;and&emsp;x&ne;0 &emsp;\\) `;
				MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
			document.getElementById("see-exp2").innerHTML ="&emsp;<li>Eigenvector: (<i>x, y</i>) satisfies <i>AX = &lambda;X</i></li>";
			document.getElementById("matexp2").innerHTML ="\\[ \\begin{pmatrix} "+a+" & "+b+" \\\\"  +c+" & "+d+"\\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = "+lambda2+" \\begin{pmatrix} x \\\\ y \\end{pmatrix} \\] <br><li>Equation 1: "+ a + "<i>x</i>+" + b + "<i>y</i> = " +lambda2+ "<i>x</i>  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +a+ "<i>x</i> - " +lambda2+ "<i>x</i> +" +b+ "<i>y</i> = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+dlambda+"<i>x</i> + "+b+"<i>y</i> = 0<br> &emsp;  Equation 2: "+ c + "<i>x</i>+" + d + "<i>y</i> = " +lambda2+ "<i>y</i>  <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +c+  "<i>x</i> + " +d+ "<i>y</i> - " +lambda2+"<i>y</i> = 0<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"+c+"<i>x</i> +"+alambda+"<i>y</i> = 0" ;
			MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
			
			document.getElementById("see-exp2").style.display="block";
			document.getElementById("ttl2").style.display="block";
			document.getElementById("matexp2").style.display="block";
			document.getElementById("res4btn").style.display="block";
			document.getElementById("lam1").style.display="block";
			 }
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
		document.getElementById("result1_1").innerHTML = "&emsp;&emsp; <strong>&lambda;<sub>1</sub> </strong> =" +lambda1 + ", <strong> &lambda;<sub>2</sub></strong> = " + lambda2+ " [&because; Eigen values are roots of charcteristic equation] ";
	   document.getElementById("cheqe").innerHTML ="\\[ det \\begin{vmatrix} "+va+" & "+b+" \\\\"  +c+" & "+vd+"\\end{vmatrix} = 0 \\] \\[ \\text{i.e. } \\quad ("+va+") (" +vd+ ") = 0 \\] \\[ \\text{Roots: }\\quad \\lambda_{1} = " + lambda1 + ", \\; \\lambda_{2} = " + lambda2 + " \\]" ;
	MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
	   
	   document.getElementById("res1").style.display="block"
	   document.getElementById("cheqhead").style.display="block"
	   
	}
   }