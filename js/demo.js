$('#demo5_box')
        .bind('dragstart',function( event ){
                if ( !$(event.target).is('.handle') ) return false;
                $( this ).addClass('active');
                })
        .bind('drag',function( event ){
                $( this ).css({
                        top: event.offsetY,
                        left: event.offsetX
                        });
                })
        .bind('dragend',function( event ){
                $( this ).removeClass('active');
                });