var deleteCustomerPage=function(){
	this.clickCustomers=function(){
		element(by.css('[ng-click="showCust()"]')).click();
		return this;
	}
	this.getLastCustomer=function(){
     var row=element.all(by.repeater("cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer")).last();
		
		console.log("in customers page");
		row.all(by.tagName('td')).then(function(columns){
			console.log("in Transaction page column");
			columns[0].getText().then(function(custName){
				element(by.model("searchCustomer")).sendKeys(custName);
				//return custName;
			});
		});
		
		return this;
	}
	this.deleteCustomer=function(){
		element(by.css('[ng-click="deleteCust(cust)"]')).click();
		return this;
	}
	this.clearsearchCustomer=function(){
		element(by.model("searchCustomer")).clear();
		return this;
	}
	this.isLastCustomerExist=function(){
		var row=element.all(by.repeater("cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer")).last();
		

		row.all(by.tagName('td')).then(function(columns){
		
	columns[0].getText().then(function(custName1){
		console.log(custName1);
		//return custName1;
		expect(custName1).not.toContain("customerA");
		//winston.log("info","validation completed there is no customer with name customerA")
	});
	});
		return this;
	}
	
}
module.exports=new deleteCustomerPage();