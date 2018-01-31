var depositMoneyPage=function(){
	this.selectAccount1006=function(){
		element(by.model("accountNo")).click();
		element.all(by.tagName("option")).then(function(options){
			
			options[2].click();
		});
		return this;
	}
	this.clickDepositTab=function(){
		element(by.css('[ng-click="deposit()"]')).click();
		return this;
	}
	this.enterCurrency=function(currency){
		element(by.model("amount")).sendKeys(currency);
		return this;
	}
	this.submitDeposit=function(){
		element.all(by.buttonText("Deposit")).get(1).click();
		return require('./transactions.js');
	}
	
}
module.exports=new depositMoneyPage();