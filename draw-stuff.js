// Draw stuff
// ------------------------------------------------------------
let ruleset = [0, 0, 0 , 0, 1, 1, 0, 0];
let stateArray = [ ];

// =====================================================  draw_grid ====
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

//Determines the direection for North, East, South, or West
//Displays white triangle
function pointThis(direction, triangle, yaxis,xaxis) {
	//Points North on a given input
    if(direction==0){
		//direction = 0;
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
	//Points east on a given input
	else if(direction==1){
		//east
		//direction = 1;
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
	//Points Wouth on a given input
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
}
//Do for further config.
//Still need to choose what colors will be used

function fillSquare(square, yaxis,xaxis){
	square.beginPath();
	square.rect(xaxis, yaxis, 10, 10);
	/**This may turn into a conditional statment
	  Depending on the color*****/
	square.fillStyle = 'red';
	square.fill();
}

function walkto(context, yaxis,xaxis){
	
}
