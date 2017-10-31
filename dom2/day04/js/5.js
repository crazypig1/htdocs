(()=>{
	var canMove=false;
	var offsetX,offsetY=0;
	pop.onmousedown=function(e){
		canMove=true;
		offsetX=e.offsetX;
		offsetY=e.offsetY;
		// console.log(offsetX,offsetY);
		// console.log(canMove);
	}
	
	window.onmousemove=function(e){
		if (canMove) {
		pop.style.left=(e.clientX-offsetX)+"px";
		pop.style.top=(e.clientY-offsetY)+"px";
		// console.log(left,top);
		}
	}
	
	window.onmouseup=function(){
		canMove=false;
	}









})()