$(function(){
	var navbar = $('.scrolling-navbar');
	
	$(window).scroll(function(){
		if($(window).scrollTop() <= 40){
			navbar.removeClass('navbar-scroll');
		} else {
			navbar.addClass('navbar-scroll');
		}
	});
});
$(document).on('click', function () {
    $('.navbar-collapse').collapse('hide');
});
/*--------------------------------------------------------------------------------------------------------------*/ 
popupWhatsApp = () => {
  
  let btnClosePopup = document.querySelector('.closePopup');
  let btnOpenPopup = document.querySelector('.whatsapp-button');
  let popup = document.querySelector('.popup-whatsapp');
  let sendBtn = document.getElementById('send-btn');

  btnClosePopup.addEventListener("click",  () => {
    popup.classList.toggle('is-active-whatsapp-popup')
  })
  
  btnOpenPopup.addEventListener("click",  () => {
    popup.classList.toggle('is-active-whatsapp-popup')
     popup.style.animation = "fadeIn .6s 0.0s both";
  })
  
  sendBtn.addEventListener("click", () => {
  let msg = document.getElementById('whats-in').value;
  let relmsg = msg.replace(/ /g,"%20");  
   window.open('https://wa.me/+51999674777?text='+relmsg, '_blank'); 
  });

  setTimeout(() => {
    popup.classList.toggle('is-active-whatsapp-popup');
  }, 4000);
}

popupWhatsApp();
/*--------------------------------------------------------------------------------------------------------------*/ 
const typed = new Typed('.typed', {
	strings: [
		'<i class="producto">nuestros Brownies</i>',
		'<i class="producto">nuestras Chocotejas</i>',
		'<i class="producto">nuestros Alfajores</i>',
		'<i class="producto">...</i>'
	],

	typeSpeed: 75,
	startDelay: 300, 
	backSpeed: 75, 
	smartBackspace: true, 
	shuffle: false, 
	backDelay: 1500, 
	loop: true, 
	loopCount: false, 
	showCursor: true, 
	cursorChar: '|', 
	contentType: 'html', 
});
/*--------------------------------------------------------------------------------------------------------------*/ 