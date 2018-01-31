// An example configuration file.
exports.config = {
  directConnect: true,
	//seleniumAddress: 'http://localhost:4444/wd/hub',
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
   // shardTestFiles:true,
   // maxInstances :2,
  },
//      multiCapabilities:[
//                         {
//                        	 'browserName' :'chrome',
//                         },{
//                        	 'browserName' :'firefox'
//                         }
//                         ],
/*  suites:{
	  regression:['./src/regression/logging.js','./src/regression/debug.js'],
	  E2E:['./src/pageobjectmodel/E2Eformdata.js','./src/pageobjectmodel/E2EAutoFormScript.js'],
  },
  */
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs:
	  
	   ['./src/calculator/add_spec.js'],
	  //when use multi chrome instance use like this
	  //['./src/calculator/add_spec.js','./src/calculator/calc_spec.js','./src/nonAngular.js'],

	 // ['./src/calculator/add_spec.js'],
	 // ['./src/nonAngular.js'],
	  //['./src/calculator/addReuseMethod.js'],
	  //['./src/jsonexample/calcJSON.js'],
	  //['./src/xlsxexample/readxlsx.js'],
	  //['./src/xlsxexample/writexlsx.js'],
	  //['./src/regression/logging.js'],
	 // ['./src/regression/debug.js'],
	//  ['./src/pageobjectmodel/E2Eformdata.js'],
	//  ['./src/pageobjectmodel/E2EAutoFormScript.js'],
	  //	['./src/registeration/registeration.js'],
	 	
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
