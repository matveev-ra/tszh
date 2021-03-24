
$(document).ready(function () {



    $('#AddFoto').click(function (e) { // клик по первой кнопке
        $('#FormaFoto').fadeToggle(); // вкл/выкл формы 1
        $('#FormaVideo').hide(); // скрыть форму 2
        return false;
    });

    $('#AddVideo').click(function (e) {
        $('#FormaVideo').fadeToggle();
        $('#FormaFoto').hide();

        return false;
    });

    $('#Btn-join').click(function (e) { // клик по первой кнопке
        $('#Forma-join').fadeToggle(); // вкл/выкл формы 1
        $('#Forma-edit').hide(); // скрыть форму 2
        return false;
    });

    $('#Btn-edit').click(function (e) {
        $('#Forma-edit').fadeToggle();
        $('#Forma-join').hide();

        return false;
    });

    $('#Add-answer').click(function (e) {
        $('#BAnswer').fadeToggle();
        
        return false;
    });

   
   
       $('#AddFoto2').click(function (e) {
   
           if ($("#RubFiltr").is(":visible")) {
               // скрыть селект показать форму
               $('#RubFiltr').hide();
               $('#FormaFoto2').show();
               $('#FormaVideo2').hide();
            } else if ($("#FormaVideo2").is(":visible")){
                $('#RubFiltr').hide();
                $('#FormaFoto2').show();
                $('#FormaVideo2').hide();
            } else {
                $('#RubFiltr').show();
                $('#FormaFoto2').hide();
                $('#FormaVideo2').hide();
           }
           return false;
       });
   
       $('#AddVideo2').click(function (e) {
        
            if ($("#RubFiltr").is(":visible")) {
                // скрыть селект показать форму
                $('#RubFiltr').hide();
                $('#FormaVideo2').show();
            } else if ($("#FormaFoto2").is(":visible")){
                $('#RubFiltr').hide();
                $('#FormaVideo2').show();
                $('#FormaFoto2').hide();
            
            } else {
                $('#RubFiltr').show();
                $('#FormaVideo2').hide();
                $('#FormaFoto2').hide();
            }
   
           return false;
       });

    


   $('#AddBtn').click(function (e) {
        // e.stopPropagation();
        $('.Video-Foto').fadeToggle();
        $('.Forma-board').fadeToggle();
        // $(this).toggleClass('active');
        return false;
    });
    


$(".Hdblock").click(function() {
    var el = $(this).parent().find(".hidden");

    el.toggleClass( "active" );

    el.each(function(){

    if(el.hasClass('active')) {
        $(this).parent().find('.updown').addClass('up');
        $(this).parent().find('.updown').removeClass('down');
            el.fadeIn();
            
        } else {
            $(this).parent().find('.updown').removeClass('up');
            $(this).parent().find('.updown').addClass('down');
            el.fadeOut();
        }
        return false;
     });
    });



    $(".Btnlogin").click(function() {
        var el = $(this).parent().parent().find(".LoginForma");
    
        el.toggleClass( "active" );
    
        if(el.hasClass('active')) {
            $(this).addClass('up');
                // el.fadeIn();
                
            } else {
                
                $(this).removeClass('up');
                // el.fadeOut();
            }
            return false;
        });
  
      
            // var width = $(window).width(); // Ширина экрана
            // if(width <= 540){
            //  $('.innnerFoto').addClass('owl-carousel');
            // }
         


        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            items:1,
            dots:false,
            autoHeight:true
            // navClass: ['owl-prev1','owl-next1'],
            // navText: ['<span class="icon owlarrow"></span>','<span class="icon owlarrow"></span>'],
            // responsiveClass:true,
            // responsive:{
            //     320:{
            //         nav:false,
            //         dots:true
            //     },
            //     768:{
            //         nav:true,
            //         items:1,
            //         dots:false
            //     }
            // }
            
        });


        let fields = document.querySelectorAll('.field__file');
        Array.prototype.forEach.call(fields, function (input) {
          let label = input.nextElementSibling,
            labelVal = label.querySelector('.field__file-fake').innerText;
      
          input.addEventListener('change', function (e) {
            let countFiles = '';
            if (this.files && this.files.length >= 1)
              countFiles = this.files.length;
      
            if (countFiles)
              label.querySelector('.field__file-fake').innerText = 'Выбрано файлов: ' + countFiles;
            else
              label.querySelector('.field__file-fake').innerText = labelVal;
          });
        });
        




});//$(document).ready(function ()