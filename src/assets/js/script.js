
//Menú de opciones

$(document).ready(function(){
    $('#principal').show();
    $('#quienes-somos').hide();
    $('#ellas').hide();
    $('#ellos').hide();
    $('#niños').hide();
    $('#niñas').hide();
    $('#galeria').hide();
    $('#seccion').hide();
    $('#creador').hide();
    $('#enlaces-de-interes').hide();
    $('#coleccion').hide();
    $('#haz-tu-pedido').hide();

    $('.menu2 li').click(function(){
      var number = $(this).index();
        switch(number) {
            case 0:
                $('#principal').fadeIn(500);
                $('#quienes-somos').hide();
                $('#ellas').hide();
                $('#ellos').hide();
                $('#niños').hide();
                $('#niñas').hide();
                $('#galeria').hide();
                $('#seccion').hide();
                $('#creador').hide();
                $('#enlaces-de-interes').hide();
                $('#coleccion').hide();
                $('#haz-tu-pedido').hide();
                break;
                
            case 1:
                $('#ellos').fadeIn(500);
                $('#principal').hide();
                $('#quienes-somos').hide();
                $('#ellas').hide();                
                $('#niños').hide();
                $('#coleccion').hide();
                $('#galeria').hide();
                $('#seccion').hide();
                $('#creador').hide();
                $('#enlaces-de-interes').hide();
                $('#niñas').hide();
                $('#haz-tu-pedido').hide();
                break;      
            
            case 2:
                $('#ellas').fadeIn(500);
                $('#principal').hide();
                $('#quienes-somos').hide();
                $('#ellos').hide();
                $('#niños').hide();
                $('#niñas').hide();
                $('#galeria').hide();
                $('#seccion').hide();
                $('#creador').hide();
                $('#enlaces-de-interes').hide();
                $('#coleccion').hide();
                $('#haz-tu-pedido').hide();
                break;
                
            case 3:
                $('#principal').hide();
                $('#quienes-somos').hide();
                $('#ellas').hide();
                $('#niños').fadeIn(500);
                $('#ellos').hide();
                $('#niñas').hide();
                $('#galeria').hide();
                $('#seccion').hide();
                $('#creador').hide();
                $('#enlaces-de-interes').hide();
                $('#coleccion').hide();
                $('#haz-tu-pedido').hide();
                break;
                
            case 4:
                $('#principal').hide();
                $('#quienes-somos').hide();
                $('#ellas').hide();
                $('#niñas').fadeIn(500);
                $('#niños').hide();
                $('#ellos').hide();
                $('#galeria').hide();
                $('#seccion').hide();
                $('#creador').hide();
                $('#enlaces-de-interes').hide();
                $('#coleccion').hide();
                $('#haz-tu-pedido').hide();
                break;
                
            case 5:
                $('#principal').hide();
                $('#quienes-somos').hide();
                $('#ellas').hide();
                $('#ellos').hide();
                $('#niños').hide();
                $('#niñas').hide();
                $('#galeria').hide();
                $('#seccion').hide();
                $('#creador').hide();
                $('#enlaces-de-interes').hide();
                $('#coleccion').fadeIn(500);
                $('#haz-tu-pedido').hide();
                break;
                
             default:
                break;
                
                
                
                
                
                
                
        }
    }); 
    
    
    $('.menu1 li').click(function(){
      var number = $(this).index();
        switch(number) {
            case 0:
                break;
                
            case 1:
                break;      
            
            case 2:
                $('#ellas').hide();
                $('#principal').hide();
                $('#quienes-somos').hide();
                $('#ellos').hide();
                $('#niños').hide();
                $('#niñas').hide();
                $('#galeria').hide();
                $('#seccion').hide();
                $('#creador').hide();
                $('#enlaces-de-interes').hide();
                $('#coleccion').hide();
                $('#haz-tu-pedido').fadeIn(500);
                break;
                
            case 3:
                break;
                
            case 4:
                break;
                
            case 5:
                break;
                
             default:
                break;
                
                
                
                
                
                
                
        }
    }); 
 }); 



