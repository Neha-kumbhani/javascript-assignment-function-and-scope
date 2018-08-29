
// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
var items = [1, 2, 3, 4, 5, 6];

function isEven(n) {
	return n % 2 == 0
}

function partitionOn(pred, items) {
    var pEven = [];
    var pOdd = [];
    items.forEach( 
		function(value) {
			if (isEven(value)) { 
				pEven.push(value);
			} else {
				pOdd.push(value);
			}
		}
	);
    items = pOdd.concat(pEven);
    return pEven.length, items;
}
console.log(partitionOn(3,items)); //returns {1,3,5,2,4,6}