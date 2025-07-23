const body = document.querySelector('body');
const linesRow = document.createElement('div');
const linesColumn = document.createElement('div');


linesRow.setAttribute('id', 'row');
linesColumn.setAttribute('id', 'column');
body.appendChild(linesRow);
body.appendChild(linesColumn);


// Create rows

function createRows(val = 16) {
	for(let i = 0; i < val; i++) {
		const linesRowGrid = document.createElement('div');
		linesRow.appendChild(linesRowGrid);
		linesRowGrid.classList.add('row_grid');
	}
}


// Create columns
let val;
function createColumns(newVal, gridType) {
	// ------------- TEST ZONE ---------------
	// console.log('ONE: VAL: ' + val);
	// console.log('FIVE: newVal: ' + newVal);
	// console.log(`IS ${newVal} < ${val}?`);
	// console.log(newVal < val ? true : false);
	// END TEST ZONE
	
	initializeGrid();

	if (newVal < val) {
		let lengthToRemove = val-newVal;
		for(let i = 0; i < lengthToRemove; i++ ) {
			let lastchild = linesColumn.lastElementChild;
			linesColumn.removeChild(lastchild);
			console.log("FOUR: i" + i);
		}

		val = newVal;

		// ------------- TEST ZONE ---------------
		// console.log("FOUR: " + val);
		// console.log('FOUR: lengthToRemove: ' + lengthToRemove);
		// console.log("FOUR: newVal: " + newVal);
		// console.log('FOUR: val: ' + val);
		// END TEST ZONE
	}

	// ------------- TEST ZONE ---------------
	// console.log("THREE: VAL: " + val);
	// END TEST ZONE

	if (newVal > val) {
		let lengthToAdd = newVal-val;
		for (let i = 0; i < lengthToAdd; i++) {
			const linesColumnGrid = document.createElement('div');
			linesColumn.appendChild(linesColumnGrid);
			linesColumnGrid.classList.add('column_grid');
			val = newVal; 
			}
		val = newVal;
	}
}


let valX;
let valY;
function initializeGrid() {

	if(!valY || !valX) { 
		for(let i = 0; i < 16; i++) {
			const linesColumnGrid = document.createElement('div');
			linesColumn.appendChild(linesColumnGrid);
			linesColumnGrid.classList.add('column_grid');

			const linesRowGrid = document.createElement('div');
			linesRow.appendChild(linesRowGrid);
			linesRowGrid.classList.add('row_grid');
		}

		// ------------- TEST ZONE ---------------
		// console.log("TWO: VAL: " + val);
		// END TEST ZONE

		valY = 16;
		valX = 16;
		val = 16;
	}
}

function addGrid(newVal, gridType) {
	
}


function findAllXGridPositions() {
	let xGrids = document.querySelectorAll('.row_grid');
	let xGridsNum = xGrids.length;

	let xBottomArray = [];

	for(let i = 0; i<xGridsNum; i++) {
		const x = xGrids[i].getBoundingClientRect();
		// const x = xGrids[i].offsetTop;
		const xBottom = x.bottom;

		xBottomArray.push(xBottom);
	}

	return xBottomArray;
}


function findAllYGridPositions() {
	let yGrids = document.querySelectorAll('.column_grid');
	let yGridsNum = yGrids.length;

	let yRightArray = [];

	for(let i = 0; i<yGridsNum; i++) {
		const y = yGrids[i].getBoundingClientRect();
		// const y = yGrids[i].offsetLeft;
		const yRight = y.right;

		yRightArray.push(yRight);
	}

	return yRightArray;
}


body.addEventListener('click', (e) => {
	let yGrids = findAllXGridPositions();
	let xGrids = findAllYGridPositions();
	console.log("X GRIDS: " + xGrids);
	console.log("Y GRIDS: " + yGrids);

	const x = e.clientX;
	const y = e.clientY;
	const xGridsLength = xGrids.length;
	const yGridsLength = yGrids.length;
	let x1;
	let x2;
	let y1;
	let y2;
	
	let pixel = document.createElement('div');

	for(let i = 0; i <= xGridsLength; i++) {
		let j;
		if(i !== xGridsLength) { j = i+1; } else { j = i; }

		if(x >= xGrids[i] && x < xGrids[j]) {
			x1 = xGrids[i];
			x2 = xGrids[j];
			console.log("X1: " + x1);
			console.log("X2: " + x2);
			// console.log("XGRIDS[i]: " + xGrids[i]);
			// console.log("XGRIDS[j]" + xGrids[j]);
		}
	}

	for(let i = 0; i <= yGridsLength; i++) {
		let j;
		if(i !== yGridsLength) { j = i+1; } else { j = i; }

		if(y >= yGrids[i] && y < yGrids[j]) {
			y1 = yGrids[i];
			y2 = yGrids[j];

			console.log("Y1: " + y1);
			console.log("Y2: " + y2);
			// console.log("YGRIDS[i]: " + yGrids[i]);
			// console.log("YGRIDS[j]" + yGrids[j]);
		}
	}

	
	let rColor = generateRGBValue();
	let gColor = generateRGBValue();
	let bColor = generateRGBValue();

	let width = x2-x1-1;
	let height = y2-y1-1;

	pixel.setAttribute('style', 
		`
		width: ${width}px; 
		height: ${height}px; 
		position: absolute; 
		top: ${y1}px; 
		left: ${x1}px; 
		background-color: rgb(${rColor}, ${gColor}, ${bColor})
		`
	);

	// console.log("RGB " + rgb(colorValue, colorValue, colorValue))

	linesRow.appendChild(pixel);

	console.log("---------------------------------------------");
	console.log("x: " + x);
	console.log("y: " + y);
	console.log("x1: " + x1);
	console.log("x2: " + x2);
	console.log("y1: " + y1);
	console.log("y2: " + y2);
	console.log("---------------------------------------------");
	
});


function generateRGBValue() {
	const randomNumber = Math.floor(Math.random() * 256);
	return randomNumber;
}


const buttonX = document.createElement('button');
buttonX.textContent = 'Change Grid X';
buttonX.id = 'buttonX';
body.appendChild(buttonX);


buttonX.addEventListener('click', (e) => {
	let val = prompt('X Grid #: ');
	createRows(val);

	console.log('clicked');
	e.stopPropagation();
});

const buttonY = document.createElement('button');
buttonY.textContent = 'Change Grid Y';
buttonY.id = 'buttonY';
body.appendChild(buttonY);

buttonY.addEventListener('click', (e) => {
	
	let newVal = parseInt(prompt('Y Grid #: '));
	// createRows(val);
	// console.log("THE VALUE IS: " + newVal);
	createColumns(newVal);

	// console.log('clicked');
	e.stopPropagation();
});

createColumns();

// linesRow.addEventListener('click', (e) => {
// 	console.log("X: " + e.clientX);
// 	console.log("Y: " + e.clientY);
// 	const pixel = document.createElement('div');
// 	linesRow.appendChild(pixel);
// 	pixel.classList.add('pixel');
// 	pixel.setAttribute('style', `left: ${e.clientX}px; top: ${e.clientY}px`);
// });


// let x_grid = document.querySelectorAll('.row_grid');
// 	const x = x_grid[0].getBoundingClientRect();
// 	const xTop = x.bottom;
// 	// console.log(xTop);

// 	let x2_grid = document.querySelectorAll('.row_grid');
// 	const x2 = x_grid[1].getBoundingClientRect();
// 	const x2Top = x2.top;
// console.log(x2Top);


// let y_grid = document.querySelectorAll('.column_grid');
// const y = y_grid[0].getBoundingClientRect();
// const yTop = y.right;
// console.log(yTop);

// let y2_grid = document.querySelectorAll('.column_grid');
// const y2 = y_grid[1].getBoundingClientRect();
// const y2Top = y2.left;
// console.log(y2Top);



// draw on mousemove
// function draw() {
// 	let isDrawing = false;

// 	linesRow.addEventListener('mousedown', () => {
// 		isDrawing = true;
// 	})

// 	linesRow.addEventListener('mouseup', () => {
// 		isDrawing = false;
// 	});

// 	linesRow.addEventListener('mousemove', (e) => {
// 		// console.log("X: " + e.clientX);
// 		// console.log("Y: " + e.clientY);
// 		if(!isDrawing) {return}

// 		let pixel = document.createElement('div');
// 		pixel.classList.add('pixel');
// 		linesRow.appendChild(pixel);
// 		pixel.setAttribute('style', `left: ${e.clientX}px; top: ${e.clientY}px`);

// 	});
// }