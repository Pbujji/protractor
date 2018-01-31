var interestPage=function(){
	this.checkRadio=function(val) {
		element.all(by.model("formData.type")).get(val).click();
		return this;
	}
	this.clickNextButton=function(){
		element(by.linkText("Next Section")).click();
		return require('./payment.js');
	}
}
module.exports=new interestPage();