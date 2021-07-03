const csv = require('csv');
const fs = require('fs');

fs.createReadStream('./data/data.csv')
	.pipe(csv.parse())
	.pipe(csv.stringify())
	.pipe(process.stdout)

