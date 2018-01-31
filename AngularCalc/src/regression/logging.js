var winston=require('winston');
winston.log("info","start");
//if specify below in console we won't see info .
//winston.level="warn";
//winston.level="otther";
winston.remove(winston.transports.Console);
winston.add(winston.transports.File,{filename:'winston-basic.log'});
describe('angularjs homepage', function(){
	it('should greet the named user',function(){
		browser.get('http://www.angularjs.org');
		winston.log("info","url has been opened");
		element(by.model('yourName')).sendKeys('julie');
		winston.log("info","name entered");
		var greeting=element(by.binding('yourName'));
		expect(greeting.getText()).toEqual('Hello julie!');
		//winston.log("otther","closing");
	});
});