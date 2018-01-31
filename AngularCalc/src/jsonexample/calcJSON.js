var jsonValue=require('./data.json');
describe('angularjs homepage', function() {
	beforeEach(function() {
		browser.get(jsonValue.data.urlValue);
		browser.manage().window().maximize();
		console.log("before each done");
	});
	afterEach(function() {
		browser.sleep(3000);
		console.log("afterEach done");
	});
	//by adding x in front of "it" this will disable the "it" like xit
  it('should greet the named user', function() {
    
    
    element(by.model("first")).sendKeys(jsonValue.data.firstValue);
    element(by.model("second")).sendKeys(jsonValue.data.secondValue);
    element.all(by.css('select option')).then(function(data){
    	data[3].click();
    })
    
    element(by.buttonText("Go!")).click();
    
  });
}); 