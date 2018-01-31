var intialTransactionPage=function(){
	this.clickTransactions=function(){
		element(by.css('[ng-click="transactions()"]')).click();
		return this;
	}
	this.isTransactionsEmpty=function(){
		element.all(by.className("table table-bordered table-striped")).count();
		return this;
	}
	this.clickBackToGoAccountPage=function(){
		element(by.buttonText("Back")).click();
		return require('./depositMoney.js');
	}
}
module.exports=new intialTransactionPage();