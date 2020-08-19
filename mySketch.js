function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	//用RGB的話效果不太一樣
	colorMode(HSB)
	//先產生一橫排在產直列
	for(var i=0; i<width; i+=50){
		var h = map(i,0,width,0,360)
		for(var j=0; j<height;j+=50){
		fill((h+j+frameCount*5)/2%360,mouseY/5,mouseX/5)
		ellipse(i, j, 100)
		// ellipse(i, j, 70)
		// ellipse(i, j, 40)
		// ellipse(i, j, 10)
	}
}
	
	

	
		//中圓
	for(var i=0; i<width; i+=50){
		var h = map(i,0,width,0,360)
		for(var j=0; j<height;j+=50){
		fill((h+j+frameCount*6)/2%360,mouseY/5,mouseX/5)
		ellipse(i-15,j-15,20)
	}
}
	
	
		//小圓
	for(var i=0; i<width; i+=50){
		var h = map(i,0,width,0,360)
		for(var j=0; j<height;j+=50){
		fill((h+j+frameCount*7)/2%360,mouseY/5,mouseX/5)
		ellipse(i, j, 10)
	}
	}
		
		//小圓
	for(var i=0; i<width; i+=50){
		var h = map(i,0,width,0,360)
		for(var j=0; j<height;j+=50){
		fill((h+j+frameCount*8)/2%360,mouseY/5,mouseX/5)
		ellipse(i-30,j-30,10)
	}
		
		
}
	
	
}