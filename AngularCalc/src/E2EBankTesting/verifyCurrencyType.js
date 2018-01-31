var winston=require('winston');
var verifyCurrencyType=function(){
	
	this.selectCustomer=function(){
		element(by.model("custId")).click();
		element.all(by.repeater("cust in Customers")).then(function(options) {
			options[1].click();
		});
		return this;
	}
	this.clickLogin=function(){
		element(by.buttonText("Login")).click();
		return this;
	}
	this.selectAccountAndVerifyCurrency=function(){
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
			
			
		});
		return require('./intialTransaction.js');
	}
}
module.exports=new verifyCurrencyType();