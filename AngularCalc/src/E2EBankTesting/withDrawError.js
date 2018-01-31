var withDrawErrorPage=function(){
	
	this.clickWithdrawl=function(){
		element(by.css('[ng-click="withdrawl()"]')).click();
		return this;
	}
	this.enterCurrency=function(wrongCurrency){
		element(by.model("amount")).sendKeys(wrongCurrency);
		return this;
	}
	this.submitWithdraw=function(){
		element(by.buttonText("Withdraw")).click();
		return require('./withDrawSuccess.js');
	}
}
module.exports=new withDrawErrorPage();