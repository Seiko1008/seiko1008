var data = 
	{
		"name":"test",
		"top_arrow":[
			{
				"name":"pravila"
			}
		],
		"bottom_arrow":[
			{
				"name":"bankomat",
				"properties":[
					{
						"count":100
					},
					{
						"crash":0.01
					}
				]
			},
			{
				"name":"people",
				"properties":[
					{
						"count":100
					}
				]
			},
			
		],
		"left_arrow":[
			{
				"name":"karta"
			}
		],
		"right_arrow":[
			{
				"name":"money"
			}
		]
	}

var bank = new Bank();
bank.model = data;
console.log(bank.model)
//проверяем правильно ли работает генератор чисел
describe("Модель банкомата", function() {

  it("если октазоустойчивость банкомата 98%, то ожидаю удовлетворить 80% клиентов", function() {

	var param1 = bank.model.bottom_arrow[1].properties[0].count;
	var param2 = bank.model.bottom_arrow[0].properties[0].count;
	
  	var operation = bank.snyatie()

    assert.equal((rand_value >=20 && rand_value <= 30), true);
  });

});
