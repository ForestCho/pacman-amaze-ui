// JavaScript Document
function goTopEx(){
        var obj=document.getElementById("goTopBtn");
        function getScrollTop(){
                return document.documentElement.scrollTop|document.body.scrollTop;
            }
        function setScrollTop(value){
                document.documentElement.scrollTop=value;
                document.body.scrollTop=value;
            }    
        window.onscroll=function(){getScrollTop()>60?obj.style.display="":obj.style.display="none";}
        obj.onclick=function(){
            var goTop=setInterval(scrollMove,10);
            function scrollMove(){
                    setScrollTop(getScrollTop()/1.1);
                    if(getScrollTop()<1)clearInterval(goTop);
                }
        }
    }

// JavaScript Document

function displaySide(){
        var obj = $('#displayside');
		var imgobj = $('#imgaside');
		var sideobj = $('#asidepart');
		var mainobj = $('#main'); 
        obj.click(function(){	
               if(sideobj.length > 0){
		    if(sideobj.css("display") != 'none'){
				imgobj.attr("title","显示侧边栏");    
				imgobj.attr("src","/img/side.png");   
				sideobj.css("display","none"); 
				mainobj.addClass("nodisp").css("width","90%").css("float","none").css("margin-left","5%").css("margin-top","1em");  
			}else{
				imgobj.attr("title","隐藏侧边栏");    	
				imgobj.attr("src","/img/noside.png");    			
				sideobj.css("display","");  
				mainobj.addClass("disp").css("width","75%").css("float","left").css("margin","1em 0 0");  
			}
                }
		})
    }
