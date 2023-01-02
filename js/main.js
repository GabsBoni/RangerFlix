$(window).on("load scroll", function(){
	$(".mostrar").each(function(){
		var el = $(this);
		var eleHeight = el.outerHeight(); // altura da div
		var eleTopo = el.offset().top; // distancia da div ao topo do documento
		var scrlTopo = $(window).scrollTop(); // quanto foi rolada a janela
		var distance = eleTopo-scrlTopo; // distancia da div ao topo da janela
		var altJanela = window.innerHeight; // altura da janela
		if(distance <= altJanela-(eleHeight/2)) {
			el.animate({ 'opacity': 1 }, 400);
		}
	});
});