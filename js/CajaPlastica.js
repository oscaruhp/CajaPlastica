$.fn.extend({CajaPlastica: function(opciones) {
	var CajaPlastica=this;
					
	defaults = {};
	var opciones = $.extend({}, defaults, opciones);
	var uniqid = Date.now();
    
    $(CajaPlastica).append('<ul id="'+uniqid+'" class="cajasPlasticas"></ul>');
   
    
    $.each(opciones, function(i,Elemento) {
        $('#'+uniqid).append('<li  class="cajaPlastica"><a href="'+Elemento.link+'" target="_blank"><img src="'+Elemento.url+'"  class="coverart" /><div class="grooves"><span class="groove1"><span class="groove2"></span></span></div><div class="cover"><span class="glow"></span><span class="holder top-left"></span><span class="holder top-right"></span><span class="holder bottom-left"></span><span class="holder bottom-right"></span></div><div class="information"><span class="title">'+Elemento.title+'</span><br/><span class="artist">'+Elemento.artist+'</span></div></a></li>'); });
                    
	}
             
             
});
$.fn.extend({CajaPlasticaUnica: function(opciones) {
	var CajaPlasticaUnica=this;
	defaults = {};
	var opciones = $.extend({}, defaults, opciones);
	var uniqid = Date.now();
    
    $(CajaPlasticaUnica).before('<ul id="'+uniqid+'" class="cajasPlasticas"></ul>');
   
    srcImg=$(CajaPlasticaUnica).attr('src');
    link=$(CajaPlasticaUnica).attr('link');
    if((opciones.idyoutube)!=null){
        srcImg="http://img.youtube.com/vi/"+opciones.idyoutube+"/default.jpg";
        link="https://www.youtube.com/watch?v="+opciones.idyoutube;
    }
       
    $('#'+uniqid).append('<li  class="cajaPlastica"><a href="'+link+'" target="_blank"><img src="'+srcImg+'" alt="jewelcase" class="coverart" /><div class="grooves"><span class="groove1"><span class="groove2"></span></span></div><div class="cover"><span class="glow"></span><span class="holder top-left"></span><span class="holder top-right"></span><span class="holder bottom-left"></span><span class="holder bottom-right"></span></div><div class="information"><span class="title">'+$(CajaPlasticaUnica).attr('title')+'</span><br/><span class="artist">'+$(CajaPlasticaUnica).attr('artist')+'</span></div></a></li>');
     $(CajaPlasticaUnica).remove();
                    
	}
             
             
});