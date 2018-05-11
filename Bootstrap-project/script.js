$(document).mousemove(function(e){
    $("#image").css({left:e.pageX, top:e.pageY});
});

$(window).on('load resize', function() {
    let width = $(window).width();

    if (width <= 1400) {
        //Restaurant page
        $('#restoInfo').addClass('d-flex flex-column align-items-center');
        $('#removeRestoCol1, #removeRestoCol3').removeClass('col-2');
        $('#removeRestoCol2').removeClass('col-6');
        $('#removeRestoFlex').removeClass('flex-column');
        $('#removeRestoFlex').addClass('flex-row justify-content-center pb-3');
        $('.cut2').addClass('d-flex');
        $('.addCol').addClass('col-6');
    } else {
        //Restaurant page
        $('#restoInfo').removeClass('d-flex flex-column align-items-center');
        $('#removeRestoCol1, #removeRestoCol3').addClass('col-2');
        $('#removeRestoCol2').addClass('col-6');
        $('#removeRestoFlex').addClass('flex-column');
        $('#removeRestoFlex').removeClass('flex-row justify-content-center pb-3');
        $('.cut2').removeClass('d-flex');
        $('.addCol').removeClass('col-6');
    }

    if (width <= 1115) {
        //menu page
        $('#removeCol1').removeClass('col-2');
        $('#removeCol2').removeClass('col-10');
        $('#menu').addClass('d-flex flex-column');
        $('#noColumn').removeClass('flex-column');
        $('#noColumn').addClass('justify-content-center');
        $('#removeCol1').addClass('pb-3');
    } else {
        //menu page
        $('#removeCol1').addClass('col-2');
        $('#removeCol2').addClass('col-10');
        $('#menu').removeClass('d-flex flex-column');
        $('#noColumn').addClass('flex-column');
        $('#noColumn').removeClass('justify-content-center');
        $('#removeCol1').removeClass('pb-3');
    }

    if (width <= 960) {
        //homepage
        $('#removeHomeCol1').removeClass('col-12');
        $('.removeHomeCol2').removeClass('col-6');
        $('#removeHomeCol1').addClass('flex-column');
        $('.removeHomeCol2').addClass('m-2');

        //gallery page
        $('.removeGalleryCol1 ').removeClass('col-12');
        $('.removeGalleryCol1 ').addClass('flex-column');
    } else {
        //homepage
        $('#removeHomeCol1').addClass('col-12');
        $('.removeHomeCol2').addClass('col-6');
        $('#removeHomeCol1').removeClass('flex-column');
        $('.removeHomeCol2').removeClass('m-2');

        //gallery page
        $('.removeGalleryCol1 ').addClass('col-12');
        $('.removeGalleryCol1 ').removeClass('flex-column');
    }

    if(width <= 660) {
        //restaurant page
        $('.justifyCenter').addClass('justify-content-center');
        $('.titleResto').removeClass('display-3');
        $('.titleResto').addClass('display-4');

        // contact page
        $('#contactTitle').removeClass('display-3');
        $('#contactTitle').addClass('size5');
    } else {
        // restaurant page
        $('.justifyCenter').removeClass('justify-content-center');
        $('.titleResto').removeClass('size5');
        $('.titleResto').addClass('display-3');
        
        // contact page
        $('#contactTitle').addClass('display-3');
        $('#contactTitle').removeClass('display-4');
    }

    if(width <= 450) {
        // homepage
        $('.card-title').removeClass('display-4');
        $('.card-title').addClass('size5');
        $('.card-text').addClass('size2');
    } else {
        // homepage
        $('.card-title').addClass('display-4');
        $('.card-title').removeClass('size5');
        $('.card-text').removeClass('size2');
    }
})
