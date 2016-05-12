// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener('deviceready', function() {
		$('#beep').tap(function (){
			navigator.notification.beep(3);//numero de veces que quieras que notifique
		});//beep
		$('#btnvibrar').on('tap', function() {
			navigator.notification.vibrate(2000);
		});
	});
});