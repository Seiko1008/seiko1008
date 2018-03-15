var App = function(){
	this.modules = {
		random: new RandGenerator(),
		bank: new Bank()
	}

	this.spec = {
		start:function(){
			mocha.run();
		}
	}
}

var app = new App();