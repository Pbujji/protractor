var urlpage=function(){
	this.getURL=function(url){
		browser.get(url);
		return this;
	}
}
module.exports=new urlpage();