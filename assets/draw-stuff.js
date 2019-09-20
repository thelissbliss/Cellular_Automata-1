/* Laura Solorio laurasolorio98@csu.fullerton.edu
   Alyssa Bright alyssabright@csu.fullerton.edu

   File Description: This javascript file contains all functions
	1. Draw Grid
	2. Determines the direction for North, East, South, or West
       Displays white triangle
	3. Colors in the cell
	4. Changes current state of the cell; Change color; change ant
	   direction
*/

// ======  draw_grid ====
function draw_grid( rctx, rminor, rmajor, rstroke, rfill  ) 
{
    rctx.save( );
    rctx.strokeStyle = rstroke;
    rctx.fillStyle = rfill;
    let width = rctx.canvas.width;
    let height = rctx.canvas.height;
    for ( var ix = 0; ix < width; ix += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( ix, 0 );
        rctx.lineTo( ix, height );
        rctx.lineWidth = ( ix % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( ix % rmajor == 0 ) { rctx.fillText( ix/10, ix, 10 ); }
    }
    for ( var iy = 0; iy < height; iy += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( 0, iy );
        rctx.lineTo( width, iy );
        rctx.lineWidth = ( iy % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( iy % rmajor == 0 ) {rctx.fillText( iy/10, 0, iy + 10 );}
    }
    rctx.restore( ); 
}

//Determines the direction for North, East, South, or West
//Displays white triangle
function pointThis(direction, triangle, yaxis,xaxis) {
	//Points North on a given input
    if(direction==0){
		triangle.save();
		triangle.beginPath();
  		triangle.moveTo(xaxis-6, yaxis+6);
  		triangle.lineTo(xaxis, yaxis-6);
  		triangle.lineTo(xaxis+6,yaxis+6);
		triangle.closePath();
		triangle.fillStyle = 'white';
		triangle.fill();
		triangle.strokeStyle = 'black';
		triangle.stroke();
		triangle.restore();
		
	}
	
	//Points East on a given input
	else if(direction==1){
		triangle.save();
		triangle.beginPath();
  		triangle.moveTo(xaxis-6, yaxis-6);
  		triangle.lineTo(xaxis+6, yaxis);
  		triangle.lineTo(xaxis-6,yaxis+6);
		triangle.closePath();
		triangle.fillStyle = 'white';
		triangle.fill();
		triangle.strokeStyle = 'black';
		triangle.stroke();
		triangle.restore();
		
	}
	
	//Point South on a given direction
	else if(direction==2){
		triangle.save();
		triangle.beginPath();
  		triangle.moveTo(xaxis+6, yaxis-6);
  		triangle.lineTo(xaxis, yaxis+6);
  		triangle.lineTo(xaxis-6,yaxis-6);
		triangle.closePath();
		triangle.fillStyle = 'white';
		triangle.fill();
		triangle.strokeStyle = 'black';
		triangle.stroke();
		triangle.restore();
		
	}
	
	//Points West on a given input
	else if(direction==3){ 
		triangle.save();
		triangle.beginPath();
  		triangle.moveTo(xaxis+6, yaxis+6);
  		triangle.lineTo(xaxis-6, yaxis);
  		triangle.lineTo(xaxis+6,yaxis-6);
		triangle.closePath();
		triangle.fillStyle = 'white';
		triangle.fill();
		triangle.strokeStyle = 'black';
		triangle.stroke();
		triangle.restore();
	}
	
	//Check if ant values are not in above peramiters
	//Message will be displayed
	else{
		throw "Too big";
	}
}

//Colors in the cell
function fillSquare(square, yaxis,xaxis, color, colorCount){
	square.beginPath();
	square.rect(xaxis, yaxis, 10, 10);
	square.fillStyle = color[colorCount];
	square.fill();
}

//Changes current state of the cell
function changeStateArray(square, xaxis, yaxis, color,direction,stateArray) {
	var counter =0;
	var i = xaxis/10;
	var j= yaxis/10;
	
	//loops though until it hits1000
	while(counter<=1000){
		//Ant moved to a cell with a value of 0 or null.
		//Cell value will now change to 1
		//The color and position of the triangle will now change
		//The new cell color will change.
		if (stateArray[i][j] == 0 || stateArray[i][j] ==null){
			stateArray[i][j]=1;
			//calls cell coloring function
			fillSquare(square, yaxis,xaxis, color, 1)
			//triange will point to direction of next cell
			//pointThis(direction, context, yaxis,xaxis);
			//move to next cell
			if(i<40 && j <40){
				if(direction==0){
					xaxis=xaxis+10;
					i++;
					direction=1;
				}
				else if(direction==1){
					j++;
					yaxis=yaxis+10
					direction=2;
				}
				else if(direction==2){
					i--;
					xaxis=xaxis-10;
					direction=3;
				}
				else if(direction==3){
					j--;
					yaxis=yaxis-10;
					direction=0;
				}
				else{
					throw "Too big";
				}
			}
		}
		
		//Ant moved to a cell with a value of 1.
		//Cell value will now change to 2
		//The color and position of the triangle will now change
		//The new cell color will change.
		else if(stateArray[i][j] == 1){
			stateArray[i][j]=2;
			fillSquare(square, yaxis,xaxis, color, 2)
			//pointThis(direction, context, yaxis,xaxis);
			//move to next cell
			if(i<40 && j <40){
				if(direction==0){
					xaxis=xaxis-10;
					i--;
					direction=3;
				}
				
				else if(direction==1){
					j--;
					yaxis=yaxis-10
					direction=0;
				}
				else if(direction==2){
					i++;
					xaxis=xaxis+10;
					direction=1;
				}
				else if(direction==3){
					j++;
					yaxis=yaxis+10;
					direction=2;
				}
				else{
					throw "Too big";
				}
			}
	}
		
		//Ant moved to a cell with a value of 2.
		//Cell value will not change to 3
		//The color and position of the triangle will now change
		//The new cell color will change.
		else if(stateArray[i][j] == 2){
				stateArray[i][j]=3;
				fillSquare(square, yaxis,xaxis, color, 3)
				//pointThis(direction, context, yaxis,xaxis);
				//move to next cell
				if(i<40 && j <40){
					if(direction==0){
						xaxis=xaxis-10;
						i--;
						direction=3;
					}

					else if(direction==1){
						j--;
						yaxis=yaxis-10
						direction=0;
					}
					else if(direction==2){
						i++;
						xaxis=xaxis+10;
						direction=1;
					}
					else if(direction==3){
						j++;
						yaxis=yaxis+10;
						direction=2;
					}
					else{
						throw "Too big";
					}
				}
		}
		
		//Ant moved to a cell with a value greater than 3.
		//Cell value will now change to 0
		//The color and position of the triangle will now change
		//The new cell color will change.
		else{
			stateArray[i][j]=0;
			fillSquare(square, yaxis,xaxis, color, 0)
			//pointThis(direction, context, yaxis,xaxis);
			//move to next cell
			if(i<40 && j <40){
				if(direction==0){
					xaxis=xaxis+10;
					i++;
					direction=1;
				}

				else if(direction==1){
					j++;
					yaxis=yaxis+10
					direction=2;
				}
				else if(direction==2){
					i--;
					xaxis=xaxis-10;
					direction=3;
				}
				else if(direction==3){
					j--;
					yaxis=yaxis-10;
					direction=0;
				}
				else{
					throw "Too big";
				}
			}
		}
	//loop counter
	counter++;
	}
}
