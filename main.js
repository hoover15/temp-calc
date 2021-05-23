//Get the input from the document and convert that value to kelvin
//Also print out the new row on the table
//once there are 10 calculations: hide the oldest calculation

let celsius = 0;
let kelvin = 0;
let count = 0;
let hideRowNum = -1;

let button = document.getElementById('calculate');
button.onclick = () => {
	celsius = Math.round(parseFloat(document.getElementById('temparea').value, 10));
	count++;
	
	if(Number.isNaN(celsius)) {
		window.alert('Please enter a number!');
	} else {
		kelvin = Math.round(celsius + 273);
		let outputRow = document.createElement('tr');
		outputRow.className = 0;
		document.querySelector('.outputtable').appendChild(outputRow);
		
		if(count >= 10) {
			hideRowNum++;
			let firstCalc = document.getElementsByClassName('0')[hideRowNum];
			firstCalc.style.display = 'none';
		}
		
		if(celsius < -9) {
			outputRow.innerHTML = `<td>${celsius}&#8451</td> <td>${kelvin} K</td><td><i class="fa fa-snowflake-o" aria-hidden="true"></i></td>`;
		} else if(celsius > -9 && celsius < 15) {
			outputRow.innerHTML = `<td>${celsius}&#8451</td> <td>${kelvin} K</td><td><i class="fa fa-tint" aria-hidden="true"></i></td>`;
		} else if(celsius > 15 && celsius < 22) {
			outputRow.innerHTML = `<td>${celsius}&#8451</td> <td>${kelvin} K</td><td><i class="fa fa-cloud" aria-hidden="true"></i></td>`;
		} else {
			outputRow.innerHTML = `<td>${celsius}&#8451</td> <td>${kelvin} K</td><td><i class="fa fa-sun-o" aria-hidden="true"></i></td>`;
		}
	}
	
}