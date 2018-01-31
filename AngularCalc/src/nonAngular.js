describe('NonAngularjs homepage', function() {
	
	//by adding x in front of "it" this will disable the "it" like xit
  it('should greet the named user', function() {
	  browser.ignoreSynchronization=true;
    browser.get("https://login.salesforce.com/");
    browser.sleep(2000);
   element(by.xpath("//input[@id='username']")).sendKeys("bujji");
   });
}); 