var transactionResetPage=function(){
	this.clickReset=function(){
		element(by.buttonText("Reset")).click();
		return require('./logout.js');
	}
}
module.exports=new transactionResetPage();