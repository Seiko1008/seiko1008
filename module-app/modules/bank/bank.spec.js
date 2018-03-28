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
						"snyat":100
					}
				]
			}
		],
		"left_arrow":[
			{
				"name":"karta",
				"properties":[
					{
					"est":1000
					}
				]
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

  it("на карте есть 1000р. хочу снять 100р. ожидаю увидеть остаток на карте = 900", function() {

	var param1 = bank.model.left_arrow[0].properties[0].est;
	var param2 = bank.model.bottom_arrow[1].properties[0].snyat;
	
  	var operation = bank.snyatie(param1,param2)
	console.log(operation);

    assert.equal((operation==900), true);

  });

});
