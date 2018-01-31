var transactionsPage=function(){
	this.clickTransactions=function(){
		element(by.css('[ng-click="transactions()"]')).click();
		return this;
	}
	this.verifyTransactions=function(currency,transactionType){
		var row=element.all(by.repeater("tx in transactions | orderBy:sortType:sortReverse | sDate:startDate:end")).last();
		
		console.log("in Transaction page");
		row.all(by.tagName('td')).then(function(columns){
			console.log("in Transaction page column");
			columns[0].getText().then(function(time){
                console.log('Time:   ' + time);
            });
            /* For getting text in amount column*/
            columns[1].getText().then(function(amount){
                console.log('Amount:   ' + amount);
                expect(amount).toBe(currency);
                
            });
            /* For getting text in transaction column*/
            columns[2].getText().then(function(transaction){
                console.log('Transaction-Type:   ' + transaction);
                expect(transaction).toBe(transactionType);
               // console.log("\n");
            });
		})
	
		return require('./transactionReset.js');
	}
	this.clickBackToGoAccountPage=function(){
		element(by.buttonText("Back")).click();
		return require('./withDrawError.js');
	}
}
module.exports=new transactionsPage();