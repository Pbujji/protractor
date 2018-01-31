//var jsonValue=require('./login.json');
var webUri=require('./url.js');
var profile=require('./profile.js');
describe("signup by payment",function(){
	it("signup",function(){
		//browser.get(jsonValue.login.url);
		webUri.getURL(jsonValue.login.url);
		profile.enterUserName(jsonValue.login.name);
		profile.enterEmail(jsonValue.login.email);
		var interest=profile.clickNextButton();
		
		interest.checkRadio(0);
		var payment=interest.clickNextButton();
		browser.sleep(2000);
		payment.clickSubmitButton();
		browser.sleep(2000);
		payment.acceptPopup();
	})
})