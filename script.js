const body = document.querySelector('body');
const linesRow = document.createElement('div');
const linesColumn = document.createElement('div');

linesRow.setAttribute('id', 'row');
linesColumn.setAttribute('id', 'column');

body.appendChild(linesRow);
body.appendChild(linesColumn);

for(let i = 0; i < 16; i++) {
	const linesRowGrid = document.createElement('div');
	linesRow.appendChild(linesRowGrid);
	linesRowGrid.classList.add('row_grid');
}

for(let i = 0; i < 16; i++) {
	const linesColumnGrid = document.createElement('div');
	linesColumn.appendChild(linesColumnGrid);
	linesColumnGrid.classList.add('column_grid');
}

function findAllXGridPositions() {
	let xGrids = document.querySelectorAll('.row_grid');
	let xGridsNum = xGrids.length;

	let xBottomArray = [];

	for(let i = 0; i<xGridsNum; i++) {
		const x = xGrids[i].getBoundingClientRect();
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
		const yRight = y.right;

		yRightArray.push(yRight);
	}

	return yRightArray;
}

const xGrids = findAllXGridPositions();
const yGrids = findAllYGridPositions();

console.log(xGrids);
console.log(yGrids);

let x_grid = document.querySelectorAll('.row_grid');
	const x = x_grid[0].getBoundingClientRect();
	const xTop = x.bottom;
	// console.log(xTop);

	let x2_grid = document.querySelectorAll('.row_grid');
	const x2 = x_grid[1].getBoundingClientRect();
	const x2Top = x2.top;
	// console.log(x2Top);


// let isDrawing = false;

// linesRow.addEventListener('mousedown', () => {
// 	isDrawing = true;
// })

// linesRow.addEventListener('mouseup', () => {
// 	isDrawing = false;
// });

// linesRow.addEventListener('mousemove', (e) => {
// 	// console.log("X: " + e.clientX);
// 	// console.log("Y: " + e.clientY);
// 	if(!isDrawing) {return}

// 	let pixel = document.createElement('div');
// 	pixel.classList.add('pixel');
// 	linesRow.appendChild(pixel);
// 	pixel.setAttribute('style', `left: ${e.clientX}px; top: ${e.clientY}px`);

// });





let y_grid = document.querySelectorAll('.column_grid');
const y = y_grid[0].getBoundingClientRect();
const yTop = y.right;
// console.log(yTop);

let y2_grid = document.querySelectorAll('.column_grid');
const y2 = y_grid[1].getBoundingClientRect();
const y2Top = y2.left;
// console.log(y2Top);


linesRow.addEventListener('click', () => {
	let pixel = document.createElement('div');
	pixel.setAttribute('style', `width: ${y2Top - yTop}px; height: ${x2Top - xTop}px; position: absolute; top: ${xTop}px; left: ${yTop}px; background: red`);
	linesRow.appendChild(pixel);

	console.log("it's clicked");
});




// const rect = myDiv.getBoundingClientRect();



// linesRow.addEventListener('click', (e) => {
// 	console.log("X: " + e.clientX);
// 	console.log("Y: " + e.clientY);
// 	const pixel = document.createElement('div');
// 	linesRow.appendChild(pixel);
// 	pixel.classList.add('pixel');
// 	pixel.setAttribute('style', `left: ${e.clientX}px; top: ${e.clientY}px`);
// });