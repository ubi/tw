/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function showNotification(testo,stay){
    $(function(){
        jQuery.noticeAdd({
            text: testo,
            stay: stay
        });
    });
}

