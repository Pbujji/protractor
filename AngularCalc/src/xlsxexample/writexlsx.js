var XLSX=require('xlsx');
describe("protractor demo app",function(){
	xit("should have a title",function(){
		var workbook=XLSX.readFile('./src/Workbook2.xlsx');
		var sheet=workbook.SheetNames[0];
		var worksheet=workbook.Sheets[sheet];
		var cell=worksheet['B1'];
		var res=cell.v;
		//cell.v=3;
		worksheet['A1'].v="Hello Xlsx"
		console.log("The B1 cell value"+res);
		XLSX.writeFile(workbook,'./src/Workbook2.xlsx');
	});
	it("reading all data",function(){
		var workbook=XLSX.readFile('./src/Workbook2.xlsx');
		var sheet_name_list=workbook.SheetNames;
		console.log("Sheet_list ="+sheet_name_list);
		sheet_name_list.forEach(function(y) {
			var worksheet=workbook.Sheets[y];
			for(z in worksheet){
				console.log("z contains="+z);
				if(z[0]==='!')continue;
				console.log(y + "!" +z +"=" +JSON.stringify(worksheet[z].v))
			}
		})
	})
});