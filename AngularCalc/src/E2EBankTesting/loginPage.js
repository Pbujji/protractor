var loginPage=function(){
	this.isCustomerLogin=function(){
		element(by.css('[ng-click="customer()"]')).isDisplayed();
		return this;
	}
	this.isManagerLogin=function(){
		element(by.css('[ng-click="manager()"]')).isDisplayed();
		return this;
	}
	this.clickManager=function(manager){
		element(by.css('[ng-click="manager()"]')).click();
		return require('./managerLogin.js');
	}
	this.clickCustomer=function(){
		element(by.css('[ng-click="customer()"]')).click();
		return require('./verifyCurrencyType.js');
	}
	this.clickMainButton=function(){
		element(by.buttonText("Home")).click();
		return this;
	}
}
module.exports=new loginPage();
