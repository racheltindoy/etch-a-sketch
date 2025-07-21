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


linesRow.addEventListener('drag', (e) => {
	// console.log("X: " + e.clientX);
	// console.log("Y: " + e.clientY);
	const pixel = document.createElement('div');
	linesRow.appendChild(pixel);
	pixel.classList.add('pixel');
	pixel.setAttribute('style', `left: ${e.clientX}px; top: ${e.clientY}px`);
});


// linesRow.addEventListener('click', (e) => {
// 	console.log("X: " + e.clientX);
// 	console.log("Y: " + e.clientY);
// 	const pixel = document.createElement('div');
// 	linesRow.appendChild(pixel);
// 	pixel.classList.add('pixel');
// 	pixel.setAttribute('style', `left: ${e.clientX}px; top: ${e.clientY}px`);
// });