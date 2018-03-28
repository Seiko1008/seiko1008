var App = function(){
	this.modules = {
		bank: new Bank()
	}

	this.spec = {
		start:function(){
			mocha.run();
		}
	}
}

var app = new App();