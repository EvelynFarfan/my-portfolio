// $(window).bind('scroll', function () {
//   if ($(window).scrollTop() > 668) {
//     $(".menu").addClass('fixed');
//     $(".menu").css("display", "block")
//   } else {
//     $(".menu").removeClass('fixed');
//     $(".menu").css("display", "none");
//   }
// });

$("#menu-hamb").on("click", function(){
	/*Esto se va a ejecutar cuando alguien
		haga clic sobre el icono del menu

		addClass para añadir una clase
		removeClass para remover una clase
		toggleClass para alternar una clase
	*/
	$(".zonaMenu").toggleClass("mostrarMenu");
	$("#menu-none").css("display", "none");
		
})