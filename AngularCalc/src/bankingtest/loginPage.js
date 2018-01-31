var loginPage=function(){
	this.isCustomerLogin=function(){
		element(by.css('[ng-click="customer()"]')).isDisplayed();
		return this;
	}
	this.isManagerLogin=function(){
		element(by.css('[ng-click="manager()"]')).isDisplayed();
		return this;
	}
}
module.exports=new loginPage();
