var jsonValue=require('./bank.json');
var webUri=require('./urlPage.js');
var login=require('./loginPage.js');
var winston=require('winston');
describe("XYZ BANK",function(){
	it("login",function(){
		webUri.getURL(jsonValue.bank.url);
		//browser.manage().timeouts().implicitlyWait(3000);
		expect(login.isCustomerLogin()).toBeTruthy();
		expect(login.isManagerLogin()).toBeTruthy();
		winston.log("info","customer and Manger login pages are displayed");
		 global.managerLogin=login.clickManager();
	});
	it('manager login page',function(){
		expect(managerLogin.isAddCustomer()).toBeTruthy();
		expect(managerLogin.isOpenAccount()).toBeTruthy();
		expect(managerLogin.isCustomers()).toBeTruthy();
		winston.log("info","AddCustomer,openAccount and Customers are Displayed in Manager Login Page");
		global.addCustomer=managerLogin.clickAddCustomer();
	});
	it('Add Customer ',function(){
		addCustomer.enterFirstName(jsonValue.bank.firstName);
		addCustomer.enterLastName(jsonValue.bank.lastName);
		addCustomer.enterPostCode(jsonValue.bank.postCode);
		global.openAccountForDollar=addCustomer.submitCustomer();
		//browser.wait(protractor.ExpectedConditions.alertIsPresent(), 2000); 
		expect(addCustomer.acceptAlert()).toContain('Customer added successfully with customer id :6');
		
	});
	
		it('open Account for Dollar ',function(){
		
		openAccountForDollar.clickOpenAccount();
		openAccountForDollar.selectCustomer();
		openAccountForDollar.selectCurrency();
		global.openAccountForPound=openAccountForDollar.clickProcess();
		//browser.wait(protractor.ExpectedConditions.alertIsPresent(), 1000); 
		expect(openAccountForDollar.acceptAlert()).toContain('Account created successfully with account Number ');
		winston.log("info","open Account for Dollar completed");
		});
		it('open Account for pound ',function(){
		openAccountForPound.clickOpenAccount();
		openAccountForPound.selectCustomer();
		openAccountForPound.selectCurrency();
		global.openAccountForRupee=openAccountForPound.clickProcess();
		browser.wait(protractor.ExpectedConditions.alertIsPresent(), 1000); 
		expect(openAccountForPound.acceptAlert()).toContain('Account created successfully with account Number ');
		winston.log("info","open Account for POund completed");
		});
		it('open Account fro Rupee ',function(){
		openAccountForRupee.clickOpenAccount();
		openAccountForRupee.selectCustomer();
		openAccountForRupee.selectCurrency();
		global.deleteCustomer=openAccountForRupee.clickProcess();
		//browser.wait(protractor.ExpectedConditions.alertIsPresent(), 1000); 
		expect(openAccountForRupee.acceptAlert()).toContain('Account created successfully with account Number ');
		winston.log("info","open Account for Rupee completed");
		});
		it('Delete Customer ',function(){
		deleteCustomer.clickCustomers();
		deleteCustomer.getLastCustomer();
		deleteCustomer.deleteCustomer();
		deleteCustomer.clearsearchCustomer();
		deleteCustomer.isLastCustomerExist();
		winston.log("info","Customer Deleted");
		});
		it('Customer Login Page ',function(){
		winston.log("info","Customer Login  Page ")
		//customer login Page
		login.clickMainButton();
		global.verifyCurrencyType=login.clickCustomer();
		});
		it('Verify Currency Type ',function(){
		verifyCurrencyType.selectCustomer();
		verifyCurrencyType.clickLogin();
		global.intialTransaction=verifyCurrencyType.selectAccountAndVerifyCurrency();
		winston.log("info","verified currency Type");
		});
		it('Verify Intial Transaction ',function(){
		intialTransaction.clickTransactions();
		intialTransaction.isTransactionsEmpty();
		global.depositMoney=intialTransaction.clickBackToGoAccountPage();
		winston.log("info","Verify intialTransaction should be Empty");
		});
		it('Deposit Money ',function(){
		depositMoney.selectAccount1006();
		depositMoney.clickDepositTab();
		depositMoney.enterCurrency(jsonValue.bank.creditCurrency);
		global.transactionAfterDeposit=depositMoney.submitDeposit();
		winston.log("info","Currency deposited");
		});
		it('Transaction After Deposit ',function(){
		browser.sleep(2000);
		transactionAfterDeposit.clickTransactions();
		transactionAfterDeposit.verifyTransactions(jsonValue.bank.creditCurrency,jsonValue.bank.credit);
		global.withDrawError=transactionAfterDeposit.clickBackToGoAccountPage();
		winston.log("info","Transaction validation completed after deposit");
		});
		it('WithDraw Error ',function(){
		withDrawError.clickWithdrawl();
		withDrawError.enterCurrency(jsonValue.bank.wrongCurrency);	
		global.withDrawSuccess=withDrawError.submitWithdraw();
		winston.log("error","Transaction Failed. You can not withdraw amount more than the balance.");
		});
		it('With Draw Success',function(){
		withDrawSuccess.clearAndEnterCurrency(jsonValue.bank.debitCurrency);
		global.transactionAfterWithDraw=withDrawSuccess.submitWithdraw();
		winston.log("info","with draw success");
		});
	it('Transaction After with Draw',function(){
		browser.sleep(2000);
		transactionAfterWithDraw.clickTransactions();
		global.transactionReset=transactionAfterWithDraw.verifyTransactions(jsonValue.bank.debitCurrency,jsonValue.bank.debit);
		winston.log("info","Transaction validation completed after with draw");
	});
	it('Transaction Reset ',function(){
		global.mainPageAndLogout=transactionReset.clickReset();
     winston.log("info","transaction reset done");
	});
	it('LogOut ',function(){
		mainPageAndLogout.gotoBack();
		mainPageAndLogout.logout();
		winston.log("info","Logout from Account");
	});
	
});