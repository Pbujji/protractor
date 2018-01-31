var bankJson=require("./bank.json");
var winston=require('winston');
describe('XYZ Bank Application',function(){
//	beforeEach(function() {
//		console.log("Before each started");
//		browser.get(bankJson.bank.url);
//	});
	it('Login Page',function(){
		browser.get(bankJson.bank.url);
		var customer=element(by.css('[ng-click="customer()"]'));
		expect(customer.isDisplayed()).toBeTruthy();
		expect(element(by.css('[ng-click="manager()"]')).isDisplayed()).toBeTruthy();
		winston.log("info","customer login and Bank Manager Login are displayed");
		customer.click();
		console.log("got clicked");
		browser.driver.wait(function() {
            return browser.driver.getCurrentUrl().then(function(url) {
                return (/customer/).test(url);
            });
        });
	// compare actual and expected value
	expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/customer');
	winston.log("info","navigated to customer displayed  url")
	});
	it('verify Currency Type',function(){
		browser.get(bankJson.bank.customerURL);
		element(by.model("custId")).click();
		element.all(by.repeater("cust in Customers")).then(function(options) {
			options[1].click();
		});
		element(by.buttonText("Login")).click();
		element(by.model("accountNo")).click();
		element.all(by.tagName("option")).then(function(options){
			//browser.sleep(5000);
			options[0].click();
			var dollar=element(by.xpath("html/body/div[3]/div/div[2]/div/div[2]/strong[3]"));
			expect(dollar.getText()).toBe("Dollar");
			winston.log("info","it is a dollar");
			options[1].click();
			var pound=element(by.xpath("html/body/div[3]/div/div[2]/div/div[2]/strong[3]"));
			expect(pound.getText()).toBe("Pound");
			winston.log("info","it is a pound");
			options[2].click();
			var rupee=element(by.xpath("html/body/div[3]/div/div[2]/div/div[2]/strong[3]"));
			expect(rupee.getText()).toBe("Rupee");
			winston.log("info","it is a rupee");
			//intial Transactio case 3
			element(by.css('[ng-click="transactions()"]')).click();
			expect(element.all(by.className("table table-bordered table-striped")).count()).toEqual(1);
			element(by.buttonText("Back")).click();
			
		});
		
	});
	it('Deposit Money',function(){
//		browser.get(bankJson.bank.customerURL);
//		element(by.model("custId")).click();
//		element.all(by.repeater("cust in Customers")).then(function(options) {
//			options[1].click();
//		});
//		element(by.buttonText("Login")).click();
		element(by.model("accountNo")).click();
		element.all(by.tagName("option")).then(function(options){
			
			options[2].click();
		
			element(by.css('[ng-click="deposit()"]')).click();
			browser.sleep(4000);
			element(by.model("amount")).sendKeys("2000");
			browser.sleep(4000);
			element.all(by.className("btn btn-default")).click();
		});
			
		
	});
	it('Transaction After Deposit',function(){
		//browser.get(bankJson.bank.customerURL);
//		element(by.model("custId")).click();
//		element.all(by.repeater("cust in Customers")).then(function(options) {
//			options[1].click();
//		});
//		element(by.buttonText("Login")).click();
//		element(by.model("accountNo")).click();
//		element.all(by.tagName("option")).then(function(options){
//			
//			options[2].click();
//			element(by.css('[ng-click="deposit()"]')).click();
//			element(by.model("amount")).sendKeys("2000");
//			element.all(by.buttonText("Deposit")).get(1).click();
//			browser.sleep(4000);
browser.sleep(3000);
			element(by.css('[ng-click="transactions()"]')).click();
			//console.log("in Transaction page");
			browser.sleep(4000);
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
			                expect(transactionType).toBe("Credit");
			               // console.log("\n");
			            });
					})
				
			
		
	});
	it('withdrawError',function(){
//		browser.get(bankJson.bank.customerURL);
//		element(by.model("custId")).click();
//		element.all(by.repeater("cust in Customers")).then(function(options) {
//			options[1].click();
//		});
//		element(by.buttonText("Login")).click();
//		element(by.model("accountNo")).click();
//		element.all(by.tagName("option")).then(function(options){
//			
//			options[2].click();
		element(by.buttonText("Back")).click();
		browser.sleep(2000);
			element(by.css('[ng-click="withdrawl()"]')).click();
			element(by.model("amount")).sendKeys("2001");
			browser.sleep(4000);
			element(by.buttonText("Withdraw")).click();
			winston.log("error","Transaction Failed. You can not withdraw amount more than the balance.");
		//});
	});
	
	it('withdrawSuccess',function(){
	/*	browser.get(bankJson.bank.customerURL);
		element(by.model("custId")).click();
		element.all(by.repeater("cust in Customers")).then(function(options) {
			options[1].click();
		});
		element(by.buttonText("Login")).click();
		element(by.model("accountNo")).click();*/
		//element.all(by.tagName("option")).then(function(options){
		
			
			//options[2].click();
			//element(by.css('[ng-click="withdrawl()"]')).click();
			browser.manage().timeouts().implicitlyWait(2000);
			element(by.model("amount")).clear().sendKeys("1000");
			browser.sleep(3000);
			element(by.buttonText("Withdraw")).click();
//			var msg=element(by.text("Transaction successful"));
//			winston.log("info",msg);
			browser.sleep(3000);
			element(by.css('[ng-click="transactions()"]')).click();
			//browser.sleep(4000);
			//console.log("in Transaction page");
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
					})
				
		
		//});
		
	});
	it('TransactionAfterWithdraw',function(){
//		browser.get(bankJson.bank.customerURL);
//		element(by.model("custId")).click();
//		element.all(by.repeater("cust in Customers")).then(function(options) {
//			options[1].click();
//		});
//		element(by.buttonText("Login")).click();
//		element(by.model("accountNo")).click();
//		element.all(by.tagName("option")).then(function(options){
//			
//			options[2].click();
//			
			//element(by.css('[ng-click="transactions()"]')).click();
			//browser.sleep(4000);
			//console.log("in Transaction page");
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
			                expect(amount).toBe('1000');
			                
			            });
			            /* For getting text in transaction column*/
			            columns[2].getText().then(function(transactionType){
			                console.log('Transaction-Type:   ' + transactionType);
			                expect(transactionType).toBe("Debit");
			               // console.log("\n");
			            });
					})
				
			
		//});
	});
});