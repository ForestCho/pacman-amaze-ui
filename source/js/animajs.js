$(document).ready(function(){
	$("#navbar").delegate("a","click",function(){
		var idstr = $(this).attr("id");
		var lastidstr = $(".current").attr("id");
		var id = idstr.substring(3);
		var lid = lastidstr.substring(3);
		
		if(id == lid){
			return ;
		}
		var contentid = "#content_"+id;
		var lcontentid = "#content_"+lid;
		var curContentObj = $(contentid);		
		var lContentObj = $(lcontentid); 
		$(".current").toggleClass('current');
		$(this).toggleClass("current");
		curContentObj.toggleClass("locate2") 	
		lContentObj.toggleClass("locate2") 	   
		if(id > lid){ 
			lContentObj.toggleClass("locate1") 	
			curContentObj.removeClass("locate1") 	
			curContentObj.removeClass("locate3") 	
		}else{
			lContentObj.toggleClass("locate3") 		 	
			curContentObj.removeClass("locate1") 	
			curContentObj.removeClass("locate3") 	
		}
	});

});