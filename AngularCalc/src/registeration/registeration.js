describe('angular registeration page',function(){
	it('register in angular page',function(){
		browser.get("http://way2automation.com/angularjs-protractor/registeration/#/login");
		element(by.model("Auth.user.name")).sendKeys("angular");
		element(by.model("Auth.user.password")).sendKeys("password");
		element(by.model("model[options.key]")).sendKeys("bujji@gmail.com");
		element(by.buttonText("Login")).click();
	})
})