var paymentPage=function(){
	this.clickSubmitButton=function(){
		element(by.buttonText("Submit")).click();
		browser.sleep(3000);
		return this;
	}
	this.acceptPopup=function(){
		browser.switchTo().alert().accept();
		return this;
	}
}
module.exports=new paymentPage();