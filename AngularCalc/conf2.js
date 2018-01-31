var htmlReport=require('protractor-jasmine2-html-reporter');
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
  specs: //['./src/calc_spec.js'],
	  //['./src/add_spec.js'],
	 // ['./src/nonAngular.js'],
	 // ['./src/addReuseMethod.js'],
	  //['./src/calcJSON.js'],
	  //['./src/readxlsx.js'],
	  //['./src/writexlsx.js'],
	  //['./src/regression/logging.js'],
	  ['./src/regression/debug.js'],
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  onPrepare:function(){
	  browser.ignoreSynchronization=true;
	  browser.driver.manage().timeouts().implicitlyWait(10000);
	  jasmine.getEnv().addReporter(
			  new htmlReport({
				  savePath:'targetHtmlReport/screenshots',
				  takeScreenshots:true
				  
				  
			  })
		 );
  }
};
