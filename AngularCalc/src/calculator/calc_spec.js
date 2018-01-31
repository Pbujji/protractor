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
    
    element(by.model("first")).sendKeys(5);
    element(by.model("second")).sendKeys(4);
    element.all(by.css('select option')).then(function(data){
    	data[1].click();
    })
    element(by.buttonText("Go!")).click();
    element(by.binding("latest")).getText().then(function(text) {
		//expect(text).toBe('20');
	});
   // bowser.sleep(8000);
  });
  xit('getting row info',function(){
	  element.all(by.repeater("result in memory").row(0)).getText().then(function(text) {
		console.log(text);
	});
  });
  xit('getting column info',function(){
	  element.all(by.repeater("result in memory").column("result.timestamp | date:'mediumTime'")).getText()
	  .then(function(data){
		  console.log(data)
	  });
  });
  //Read all rows from table
  it('getting all row info',function(){
	  let i=1;
	  element.all(by.repeater('result in memory')).then(function(rows){
		  //browser.pause();
		    rows.forEach(function(row){
		    	
		        row.all(by.tagName('td')).then(function(columns){
		        	console.log("\n"+i+" Row information");
		            /* For getting text in Time column*/
		            columns[0].getText().then(function(timeText){
		                console.log('Time:   ' + timeText);
		            });
		            /* For getting text in Expression column*/
		            columns[1].getText().then(function(expressionText){
		                console.log('Expression:   ' + expressionText);
		            });
		            /* For getting text in Result column*/
		            columns[2].getText().then(function(resultText){
		                console.log('Result:   ' + resultText);
		               // console.log("\n");
		            });
		            i++;
		        });
		        
		    });
		    
		});
	});
	 
 
  });
