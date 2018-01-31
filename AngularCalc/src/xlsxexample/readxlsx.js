var XLSX=require('xlsx');
describe("protractor demo app",function(){
	it("should have a title",function(){
		var workbook=XLSX.readFile('./src/Workbook2.xlsx');
		var sheet=workbook.SheetNames[0];
		var worksheet=workbook.Sheets[sheet];
		var cell=worksheet['B1'];
		var res=cell.v;
		//cell.v=3;
		console.log("The first value"+res);
	});
});