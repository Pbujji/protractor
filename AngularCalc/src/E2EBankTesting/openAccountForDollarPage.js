var openAccountForDollarPage=function(){
	
	this.clickOpenAccount=function(){
		element(by.css('[ng-click="openAccount()"]')).click();
		return this;
	}
	this.selectCustomer=function(){
		element(by.model('custId')).$("[value='6']").click();
		return this;
	}
	this.selectCurrency=function(){
		var dollar=element(by.model("currency")).click();
		dollar.all(by.tagName("option")).get(1).click();
		return this;
	}
	this.clickProcess=function(){
		element(by.xpath("html/body/div[3]/div/div[2]/div/div[2]/div/div/form/button")).click();
		return require('./openAccountForPound.js');;
	}
	this.acceptAlert=function(){
		var alertText = browser.switchTo().alert();
		alertText.accept();
		
		  return alertText.getText();
		}
}
module.exports=new openAccountForDollarPage();