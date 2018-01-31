describe('angularjs homepage', function() {
	//by adding x in front of "it" this will disable the "it" like xit
  it('should greet the named user', function() {
    browser.get("http://way2automation.com/angularjs-protractor/calc/");
    
    element(by.model("first")).sendKeys(5);
    element(by.model("second")).sendKeys(4);
    element.all(by.css('select option')).then(function(data){
    	data[3].click();
    })
    element(by.buttonText("Go!")).click();
    element(by.binding("latest")).getText().then(function(text) {
		expect(text).not.toBe('25');
	});
  });
}); 