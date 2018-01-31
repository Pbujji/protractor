describe('angularjs homepage', function(){
	it('should greet the named user',function(){
		browser.get('http://www.angularjs.org');
		//browser.pause();
		element(by.model('yourName')).sendKeys('julie');
		
		var greeting=element(by.binding('yourName'));
		expect(greeting.getText()).toEqual('Hello julie!');
		//winston.log("otther","closing");
	});
});