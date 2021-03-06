var transactionAfterDepositPage=function(){
	this.clickTransactions=function(){
		element(by.css('[ng-click="transactions()"]')).click();
		return this;
	}
	this.verifyTransactions=function(){
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
                expect(amount).toBe('2000');
                
            });
            /* For getting text in transaction column*/
            columns[2].getText().then(function(transactionType){
                console.log('Transaction-Type:   ' + transactionType);
                expect(transactionType).toBe('Credit');
               // console.log("\n");
            });
		});
		return this;
	}
	this.gotoAccount=function(){
		element(by.buttonText("Back")).click();
		return this;
	}
}