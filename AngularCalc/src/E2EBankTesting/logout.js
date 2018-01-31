var logoutPage=function(){
	this.gotoBack=function(){
		element(by.buttonText("Back")).click();
		return this;
	}
	this.logout=function(){
		element(by.buttonText("Logout")).click();
		return this;
	}
}
module.exports=new logoutPage();