$(window).load(function() {
    mCustomScrollbars();
    inizializeBtnPopovers();
   
});
function mostraModalCoordinates(){
    $('#latLongModal').modal('show') 
}

function inizializeBtnPopovers(){
     $(function () {
              $("div[rel=popover]")
                .popover({
                  offset: 10,
                  placement: 'left'
                })
                .click(function(e) {
                  e.preventDefault()
                })
            })
}

function switchNarrator(pulsante){
    
    switch (pulsante){
        case 'mappa':
            $("#tabella").fadeOut(500, function(){
                document.getElementById('map').style.display = 'block';    
            }
            );
            break;
        case 'tabella':
            $("#map").fadeOut(500, function(){
                document.getElementById('tabella').style.display = 'block';    
            }
            );
            break;
        default:
                
    }
    
}
//funzione gestione scroller - credits @http://manos.malihu.gr/jquery-custom-content-scroller
function mCustomScrollbars(){
    /* 
        malihu custom scrollbar function parameters: 
        1) scroll type (values: "vertical" or "horizontal")
        2) scroll easing amount (0 for no easing) 
        3) scroll easing type 
        4) extra bottom scrolling space for vertical scroll type only (minimum value: 1)
        5) scrollbar height/width adjustment (values: "auto" or "fixed")
        6) mouse-wheel support (values: "yes" or "no")
        7) scrolling via buttons support (values: "yes" or "no")
        8) buttons scrolling speed (values: 1-20, 1 being the slowest)
     */
    $("#mcs3_container").mCustomScrollbar("vertical",900,"easeOutCirc",1.05,"auto","yes","yes",2); 
}

/* function to fix the -10000 pixel limit of jquery.animate */
$.fx.prototype.cur = function(){
    if ( this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null) ) {
        return this.elem[ this.prop ];
    }
    var r = parseFloat( jQuery.css( this.elem, this.prop ) );
    return typeof r == 'undefined' ? 0 : r;
}


