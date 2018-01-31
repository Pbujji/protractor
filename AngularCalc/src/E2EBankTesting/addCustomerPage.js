var addCustomerPage=function(){
	
		
	this.enterFirstName=function(fName){
		element(by.model("fName")).sendKeys(fName);
		return this;
	}
	this.enterLastName=function(lName){
		element(by.model("lName")).sendKeys(lName);
		return this;
	}
	this.enterPostCode=function(postCode){
		element(by.model("postCd")).sendKeys(postCode);
		return this;
	}
	this.submitCustomer=function(){
		element(by.className("btn btn-default")).click();
		return require('./openAccountForDollarPage.js')
 		;
	}
	
	this.acceptAlert=function(){
		var alertText=browser.switchTo().alert();
		alertText.accept();
	 return alertText.getText();			
		
	}
}
module.exports=new addCustomerPage();