$(document).ready(function(){
			

			var topBtn = $('.down');
			var tinggi = $( window ).height();
		    topBtn.click(function () {
				$('body,html').animate({
					scrollTop: tinggi
				}, 800);
				return false;
		    });

		    $(".show").click(function(){
				$(".fix").css({"visibility":"visible"});
				$(".menu").css({"transform":"translateX(0)"});
			});

			$(".fix").click(function(){
				$(".fix").css({"visibility":"hidden"});
				$(".menu").css({"transform":"translateX(100%)"});
			});

		    $(".st").click(function(){ 
				$(".slide").animate({ scrollTop: 0},"slow"); 
			}); 
			$(".nd").click(function(){ 
				$(".slide").animate({ scrollTop: 330},"slow"); 
			});
			$(".rd").click(function(){ 
				$(".slide").animate({ scrollTop: 660},"slow"); 
			});
		});