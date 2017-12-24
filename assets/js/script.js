// global variables
let broswerWidth, browserHeight


window.onload = ()=>{
    console.log('window has been loaded');
    
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		console.log('mobile device detected');
		broswerWidth = screen.width;
		browserHeight = screen.height;
		console.log(browserHeight);
	}
	else{
		browserHeight = window.innerHeight;
    	broswerWidth = window.innerWidth;
	}
    
    
}

$(document).ready(()=>{
	$("#navi").hide();
	
    //change the height of the cover background
	$("#title").css('height', browserHeight);
	let clock = new Vue({
		el: '#time',
		data: {
			currentTime: '',
			date: ''
		}
	});
	$(window).scroll(function(){                          
		if ($(this).scrollTop() > (browserHeight / 4)) {
			$('#navi').fadeIn(500);
		} else {
			$('#navi').fadeOut(500);
		}
	});
	let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
	setInterval(updateTime, 1000);
	updateTime();

	// time update per second update
	function updateTime() {
		let currentTime = new Date();
		clock.currentTime = 
		fillUpwithZerios(currentTime.getHours(), 2) + 
		':' + fillUpwithZerios(currentTime.getMinutes(), 2) + 
		':' + fillUpwithZerios(currentTime.getSeconds(), 2);
		clock.date = 
		fillUpwithZerios(currentTime.getFullYear(), 4) + 
		'-' + fillUpwithZerios(currentTime.getMonth()+1, 2) + 
		'-' + fillUpwithZerios(currentTime.getDate(), 2) + 
		' ' + week[currentTime.getDay()];
		if(currentTime.getHours() >= 11 && currentTime.getHours()<=23){
			$("#currentTime").addClass("opened").removeClass("closed");
			$("#opened").addClass("selected").removeClass('non-selected');
			$("#closed").removeClass("selected").addClass('non-selected');
		}
		else{
			$("#currentTime").addClass("closed").removeClass("opened");
			$("#closed").addClass("selected").removeClass('non-selected');
			$("#opened").removeClass("selected").addClass('non-selected');
		}
	};
	
	function fillUpwithZerios(num, digit) {
		let zero = '';
		for(let i = 0; i < digit; i++) {
			zero += '0';
		}
		return (zero + num).slice(-digit);
	}


	$('a').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top - 56
		}, 500);
		return false;
	});
});







