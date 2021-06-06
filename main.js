$(document).ready(function(){
	$('.nav-menu--secciones article').hide();
	$('.nav-menu--secciones article:first').show();

	$('ul.nav-menu li a').click(function(){
		
		$('.nav-menu--secciones article').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;
	});
});