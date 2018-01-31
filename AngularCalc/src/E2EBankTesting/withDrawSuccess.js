var withDrawSuccessPage=function(){
	this.clearAndEnterCurrency=function(currency){
		element(by.model("amount")).clear().sendKeys(currency);
		return this;
	}
	this.submitWithdraw=function(){
		element(by.buttonText("Withdraw")).click();
		return require('./transactions.js');
	}
	this.verifyTransactions=function(){
		element(by.css('[ng-click="transactions()"]')).click();
		
		var row=element.all(by.repeater("tx in transactions | orderBy:sortType:sortReverse | sDate:startDate:end")).last();
			
				row.all(by.tagName('td')).then(function(columns){
					console.log("in Transaction page column");
					
					columns[0].getText().then(function(time){
		                console.log('Time:   ' + time);
		            });
		            /* For getting text in amount column*/
		            columns[1].getText().then(function(amount){
		                console.log('Amount:   ' + amount);
		                expect(amount).toBe('1000');
		                
		            });
		            /* For getting text in transaction column*/
		            columns[2].getText().then(function(transactionType){
		                console.log('Transaction-Type:   ' + transactionType);
		                expect(transactionType).toBe("Debit");
		               // console.log("\n");
		            });
				});
				return this;
			
	}
}
module.exports=new withDrawSuccessPage();