var Mouse = require('./Mouse');

function Cat (mouse) {
	this.stomach = [];
}

Cat.prototype.eat = function(animal) {
	if (animal instanceof Mouse){
		this.stomach.push(animal);
	} else {
		throw new Error('Cat can only eat mouse');
	}

};

module.exports = Cat;