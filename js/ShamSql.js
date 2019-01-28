
var User={
	email:[
			'123@163.com','456@163.com','789@qq.com'
	],
	register:{
		"message":"ok"
	},
	user:[
		{"email":"123@163.com","password":"123"},
		{"email":"456@163.com","password":"123"},
		{"email":"789@qq.com","password":"123"}
	]
	
}
Mock.mock("http://login.com",'post',function(option){
		console.log(option);
		var email=decodeURIComponent(option.body.split("&")[0].split("=")[1]);
		var password=decodeURIComponent(option.body.split("&")[1].split("=")[1]);
		 var m=Mock.mock({
			'code|1':'ok',
			'data': Mock.Random.zip(),
			"message": "string"
		})	
		for(var i in User.user){
			
			if(User.user[i].email==email&&User.user[i].password==password){
				return m;
			}
		} 
	})

Mock.mock("http://emali.com",'post',function(option){
		var email=decodeURIComponent(option.body.split("=")[1]);
		var m=Mock.mock({
			'code|1':'ok',
			'data': Mock.Random.zip(),
			"message": "string"
		})	
		for(var i in User.email){
			if(User.email[i]==email){
				return m;
			}
		}
	})
	
Mock.mock("http://register.com",'post',function(option){
		var m=Mock.mock({
			 
			"message": User.register.message
		})	
		return m;
		
	})