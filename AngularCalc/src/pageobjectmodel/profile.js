var profilePage=function(){
	this.enterUserName=function(name){
		element(by.model("formData.name")).sendKeys(name);
		return this;
	}
	this.enterEmail=function(email){
		element(by.model("formData.email")).sendKeys(email);
		return this;
	}
	this.clickNextButton=function(){
		element(by.linkText("Next Section")).click();
		return require('./interest.js');
	}
}
module.exports=new profilePage();