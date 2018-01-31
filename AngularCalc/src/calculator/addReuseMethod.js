function add(x,y){
	element(by.model("first")).sendKeys(x);
    element(by.model("second")).sendKeys(y);
    element(by.buttonText("Go!")).click();
}

describe('angularjs homepage', function() {
	//by adding x in front of "it" this will disable the "it" like xit
  it('should greet the named user', function() {
    browser.get("http://way2automation.com/angularjs-protractor/calc/");
    
   add(3,4);
   add(65,78);
   add(3,98);
   
  });
}); 