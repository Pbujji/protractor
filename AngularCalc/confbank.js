// An example configuration file.
exports.config = {
  directConnect: true,
	//seleniumAddress: 'http://localhost:4444/wd/hub',
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs:// ['./src/bankingtest/customerLogin.js'],
	  //['./src/bankingtest/managerLogin.js'],
	  ['./src/E2EBankTesting/E2EBankingScript.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
//  onprepare:function(){
//	  browser.ignoreSynchronization=true;
//	  browser.driver.manage().timeouts().implicitlyWait(10000);
//	  jasmine.getEnv().addReporter(
//			  new htmlReport({
//				  savePath:'targetHtmlReport/screenshots',
//				  takeScreenshots:true
//				  				  
//			  })
//		 );
//  }
};
