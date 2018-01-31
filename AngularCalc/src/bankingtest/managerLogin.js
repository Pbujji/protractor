var bankJson=require('./bank.json');
var winston=require('winston');
describe('XYZ BAnk application',function(){
	var manager;
	//var name;
	it('Login Page',function(){
		browser.get(bankJson.bank.url);
		expect(element(by.css('[ng-click="customer()"]')).isDisplayed()).toBeTruthy();
		 manager=element(by.css('[ng-click="manager()"]'));
		expect(manager.isDisplayed()).toBeTruthy();
		winston.log("info","customer login and Bank Manager Login are displayed");
	});
	it('Manager Login',function(){
		manager.click();
		expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/manager');
		winston.log("info","entered in to manager login page");
		expect(element(by.css('[ng-click="addCust()"]')).isDisplayed()).toBeTruthy();
		expect(element(by.css('[ng-click="openAccount()"]')).isDisplayed()).toBeTruthy();
		expect(element(by.css('[ng-click="showCust()"]')).isDisplayed()).toBeTruthy();
		winston.log("info","Add Customer,Open Account and Customers are displayed in manager login page");
	});
	
	it('Add Customer',function(){
		element(by.css('[ng-click="addCust()"]')).click();
		element(by.model("fName")).sendKeys("customerA");
		element(by.model("lName")).sendKeys("LastA");
		element(by.model("postCd")).sendKeys("100");
		
		element(by.className("btn btn-default")).click();
		//browser.wait(protractor.ExpectedConditions.alertIsPresent(), 1000); 
	      var alertDialog = browser.switchTo().alert();
	      alertDialog.accept();
	      expect(alertDialog.getText()).toContain('Customer added successfully with customer id :6');
	      
	
		
	});
	it('To open Account for dollar',function(){
		browser.manage().timeouts().implicitlyWait(2000);
		element(by.css('[ng-click="openAccount()"]')).click();
		//var cust=element(by.model("custId")).click();
		//cust.all(by.repeater("cust in Customers")).get(1).click();
		element(by.model('custId')).$("[value='6']").click();
		var dollar=element(by.model("currency")).click();
		dollar.all(by.tagName("option")).get(1).click();
		element(by.xpath("html/body/div[3]/div/div[2]/div/div[2]/div/div/form/button")).click();
		
		//	browser.wait(protractor.ExpectedConditions.alertIsPresent(), 1000); 
		      var alertDialog = browser.switchTo().alert();

		      expect(alertDialog.getText()).toContain('Account created successfully with account Number :1016');	    	 
    		  alertDialog.accept();   
		      
    		  winston.log("info","Account created  for Dollar");
	      
	});
	it('To open Account for Pound',function(){
		browser.manage().timeouts().implicitlyWait(2000);
		element(by.css('[ng-click="openAccount()"]')).click();
		//var cust=element(by.model("custId")).click();
		// name=cust.all(by.repeater("cust in Customers")).get(1).click();
		element(by.model('custId')).$("[value='6']").click();
		var dollar=element(by.model("currency")).click();
		dollar.all(by.tagName("option")).get(2).click();
		element(by.xpath("html/body/div[3]/div/div[2]/div/div[2]/div/div/form/button")).click();
		//In case of Unexpected alert open occured then add  wait method 
		//browser.wait(protractor.ExpectedConditions.alertIsPresent(), 1000); 

	      var alertDialog = browser.switchTo().alert();
	      expect(alertDialog.getText()).toContain('Account created successfully with account Number :1017');
	      alertDialog.accept();
	      winston.log("info","Account created  for Pound");
        });
	
	it('To open Account for Rupees',function(){
		browser.manage().timeouts().implicitlyWait(2000);
		element(by.css('[ng-click="openAccount()"]')).click();
		//var cust=element(by.model("custId")).click();
		 //name=cust.all(by.repeater("cust in Customers")).get(1).click();
		element(by.model('custId')).$("[value='6']").click();
		
		var dollar=element(by.model("currency")).click();
		dollar.all(by.tagName("option")).get(3).click();
		element(by.xpath("html/body/div[3]/div/div[2]/div/div[2]/div/div/form/button")).click();
		
		browser.wait(protractor.ExpectedConditions.alertIsPresent(), 1000); 

	      var alertDialog = browser.switchTo().alert();
	      expect(alertDialog.getText()).toContain('Account created successfully with account Number :');
	      alertDialog.accept();
	      winston.log("info","Account created for Rupees");
	    
        });
	it('To delete Customer',function(){
		
		element(by.css('[ng-click="showCust()"]')).click();
		var customerName;
		var row=element.all(by.repeater("cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer")).last();
		
		console.log("in customers page");
		row.all(by.tagName('td')).then(function(columns){
			console.log("in Transaction page column");
			columns[0].getText().then(function(custName){
				customerName=custName;
				element(by.model("searchCustomer")).sendKeys(custName);
				
			})
		    browser.sleep(2000);
				element(by.css('[ng-click="deleteCust(cust)"]')).click();
				winston.log("info","account deleted");
				
		});
		element(by.model("searchCustomer")).clear();
		browser.sleep(3000);
		
var row=element.all(by.repeater("cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer")).last();
	

			row.all(by.tagName('td')).then(function(columns){
			
		columns[0].getText().then(function(custName1){
			console.log(custName1)
			expect(custName1).not.toContain("customerA");
			winston.log("info","validation completed there is no customer with name customerA")
		});
		});
   
	});
	
	
	/*
	 * element(by.model('custId')).$("[value='6']").click(); // to select 6th customer from drop down
 
element(by.model('currency')).$("[value='Dollar']").click(); // to select dollar from drop down
//containg 
element.all(by.cssContainingText("option",fname)).click();
this.validateAccountPage = function(username,account,balance,currency){
 
expect(element(by.css("strong span")).getText()).toBe(username);
 
element.all(by.css("div div div div div strong")).getText().then(function(data){
 
var str = "Welcome "+username+" !!";
 
expect(data[0]).toBe(str);
 
expect(data[1]).toBe(account);
 
expect(data[2]).toBe(balance);
 
expect(data[3]).toBe(currency);
 
});
 
return this;
 
}
	 */
});