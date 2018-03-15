var Bank = function(){
	this.model_path = './modules/bank/model.json'
	this.model = {};
	this.snyatie = (karta) => {
		
	}

	this.load_model = () => {
		$.get(this.model_path, (res)=>{
			console.log(res)
			this.model = res;
		})
	}

	this.init = () => {
		this.load_model();
	}
	this.init();
} 