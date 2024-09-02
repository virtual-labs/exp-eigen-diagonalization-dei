function txfun(){
    document.getElementById('tximg').src='images/tx111.png';
}

function mulX(){
    document.getElementById('multX').src='images/multX.png';
}
function infren(){
    document.getElementById('infr').src='images/infrn.png';
}
function eveval(){
    document.getElementById('evev').src='images/eveval111.png';
    document.getElementById('evevtext').innerHTML = "<ul><li>T(x) = &lambda;x, for some x&ne;0 and for some &lambda;&isin;R</li><li>x is eigen vector, λ is eigen value</ul>";
    // document.getElementById('evevtext1').innerHTML = "T(x) = &lambda;x";
}


	
	
// var grid_size = 12;
// var x_axis_distance_grid_lines = 10;
// var y_axis_distance_grid_lines = 5;
// var x_axis_starting_point = { number: 1, suffix: '' };
// var y_axis_starting_point = { number: 1, suffix: '' };

// var canvas = document.getElementById("my-canvas");

// var ctx = canvas.getContext("2d");

// var canvas_width = canvas.width;
// var canvas_height = canvas.height;

// var num_lines_x = Math.floor(canvas_width/grid_size);
// var num_lines_y = Math.floor(canvas_height/grid_size);
        
// // Draw grid lines along X-axis
// for(var i=0; i<=num_lines_x; i++) {
//     ctx.beginPath();
//     ctx.lineWidth = 1;
    
//     // If line represents X-axis draw in different color
//     if(i == x_axis_distance_grid_lines) 
//         ctx.strokeStyle = "#000000";
//     else
//         ctx.strokeStyle = "#dcdcdc";
    
//     if(i == num_lines_x) {
//         ctx.moveTo(0, grid_size*i);
//         ctx.lineTo(canvas_width, grid_size*i);
//     }
//     else {
//         ctx.moveTo(0, grid_size*i+0.5);
//         ctx.lineTo(canvas_width, grid_size*i+0.5);
//     }
//     ctx.stroke();
// }

// // Draw grid lines along Y-axis
// for(i=0; i<=num_lines_y; i++) {
//     ctx.beginPath();
//     ctx.lineWidth = 1;
    
//     // If line represents X-axis draw in different color
//     if(i == y_axis_distance_grid_lines) 
//         ctx.strokeStyle = "#000000";
//     else
//         ctx.strokeStyle = "#dcdcdc";

//     if(i == num_lines_y) {
//         ctx.moveTo(grid_size*i, 0);
//         ctx.lineTo(grid_size*i, window.canvas_height);
//     }
//     else {
//         ctx.moveTo(grid_size*i+0.5, 0);
//         ctx.lineTo(grid_size*i+0.5, canvas_height);
//     }
    
//     ctx.stroke();
// }

// // Translate to the new origin. Now Y-axis of the canvas is opposite to the Y-axis of the graph. So the y-coordinate of each element will be negative of the actual
// ctx.translate(y_axis_distance_grid_lines*grid_size, x_axis_distance_grid_lines*grid_size);

// // Ticks marks along the positive X-axis
// for(i=1; i<(num_lines_y - y_axis_distance_grid_lines); i++) {
//     ctx.beginPath();
//     ctx.lineWidth = 1;
//     ctx.strokeStyle = "#000000";

//     // Draw a tick mark 6px long (-3 to 3)
//     ctx.moveTo(grid_size*i+0.5, -3);
//     ctx.lineTo(grid_size*i+0.5, 3);
//     ctx.stroke();

//     // Text value at that point
//     ctx.font = '9px Arial';
//     ctx.textAlign = 'start';
//     ctx.fillText(x_axis_starting_point.number*i + x_axis_starting_point.suffix, grid_size*i-2, 15);
// }

// // Ticks marks along the negative X-axis
// for(i=1; i<y_axis_distance_grid_lines; i++) {
//     ctx.beginPath();
//     ctx.lineWidth = 1;
//     ctx.strokeStyle = "#000000";

//     // Draw a tick mark 6px long (-3 to 3)
//     ctx.moveTo(-grid_size*i+0.5, -3);
//     ctx.lineTo(-grid_size*i+0.5, 3);
//     ctx.stroke();

//     // Text value at that point
//     ctx.font = '9px Arial';
//     ctx.textAlign = 'end';
//     ctx.fillText(-x_axis_starting_point.number*i + x_axis_starting_point.suffix, -grid_size*i+3, 15);
// }

// // Ticks marks along the negative Y-axis
// for(i=1; i<( x_axis_distance_grid_lines); i++) {
//     ctx.beginPath();
//     ctx.lineWidth = 1;
//     ctx.strokeStyle = "#000000";

//     // Draw a tick mark 6px long (-3 to 3)
//     ctx.moveTo(-3, grid_size*i+0.5);
//     ctx.lineTo(3, grid_size*i+0.5);
//     ctx.stroke();

//     // Text value at that point
//     ctx.font = '9px Arial';
//     ctx.textAlign = 'start';
//     ctx.fillText(-y_axis_starting_point.number*i + y_axis_starting_point.suffix, 8, grid_size*i+3);
// }

// // Ticks marks along the positive Y-axis
// for(i=1; i<(num_lines_x - x_axis_distance_grid_lines); i++) {
//     ctx.beginPath();
//     ctx.lineWidth = 1;
//     ctx.strokeStyle = "#000000";

//     // Draw a tick mark 6px long (-3 to 3)
//     ctx.moveTo(-3, -grid_size*i+0.5);
//     ctx.lineTo(3, -grid_size*i+0.5);
//     ctx.stroke();

//     // Text value at that point
//     ctx.font = '9px Arial';
//     ctx.textAlign = 'start';
//     ctx.fillText(y_axis_starting_point.number*i + y_axis_starting_point.suffix, 8, -grid_size*i+3);
//     ctx.beginPath();
//     // ctx.arc(2*grid_size, -4*grid_size, 3, 0, 2 * Math.PI);
//     ctx.fill();
// ctx.moveTo(-10*grid_size, 10*grid_size);
// ctx.lineTo(15*grid_size, -15*grid_size);
// ctx.moveTo(15*grid_size, 15*grid_size);
// ctx.lineTo(-15*grid_size, -15*grid_size);

// // Draw the Path
// ctx.stroke();
    
// }
// function exmp1(){
// 		let x1=parseFloat(document.getElementById('x1').value);
// 		let y1=parseFloat(document.getElementById('y1').value);
// 		document.getElementById('exmp1res').innerHTML="T("+x1+", "+y1+") = <span style='color:red;'>("+y1+", "+x1+")</span>";
// 		ctx.beginPath();
// 	    ctx.arc(y1*grid_size, -x1*grid_size, 3, 0, 2 * Math.PI);
	    
// 	    ctx.fillStyle = "red";
// 	    ctx.fill();
// 	}