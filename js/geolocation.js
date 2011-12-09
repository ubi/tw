/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function geolocalizeMe(){
    navigator.geolocation.getCurrentPosition(
        gotPosition,
        errorGettingPosition,
        {
            'enableHighAccuracy':true,
            'timeout':10000,
            'maximumAge':0
        });
    function gotPosition(position)
    {
        var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        aggiungiMarcatorePosizione(pos);
    }
    function errorGettingPosition(err)
    {
        if(err.code==1)
        {
            showNotification("Hai negato la possibilità di geolocalizzarti "+ '<a href="#" onclick="mostraModalCoordinates()" >Imposta manualmente le coordinate</a>', true);
        }
        else if(err.code==2)
        {
            showNotification("Posizione non disponibile... Browser non compatibile? "+ '<a href="#" onclick="mostraModalCoordinates()" >Imposta manualmente le coordinate</a>', true);
        }
        else if(err.code==3)
        {
            showNotification("Timeout raggiunto. "+ '<a href="#" onclick="mostraModalCoordinates()" >Imposta manualmente le coordinate</a>', true);
        }
        else
        {
            showNotification("Errore: "+err.message+ ' <a href="#" onclick="mostraModalCoordinates()" >Imposta manualmente le coordinate</a>', true);           
        }
    }
}
function customLocations(){
    errore = false;
    validLat = false;
    validLong = false;
    document.getElementById("latCont").className = "clearfix";
    document.getElementById("longCont").className = "clearfix";
    document.getElementById("errLatLongIn").style.visibility = "hidden";
    customLocationForm = document.customLocationForm;
    lengthLat = customLocationForm.latInput.value.length;
    lengthLong = customLocationForm.longInput.value.length;
    lati = customLocationForm.latInput.value;
    longi = customLocationForm.longInput.value;
    addressLong =customLocationForm.address.value.length;
   
    if(customLocationForm.address.value.length == 0 ){
        if(lengthLat == 0 || lengthLong == 0){
            //trig error
            errorCoordInput();
        }else if(lengthLat != 0 && lengthLong != 0){
            validLat = isValidLat(lati);
            validLong = isValidLong(longi);        
            if((validLat && validLong)== true){
                pos = new google.maps.LatLng(lati, longi);
                aggiungiMarcatorePosizione(pos);
                errore = false
            } else{
                errorCoordInput()         
            } 
        } else {
            errorCoordInput();            
        }           
    } else {
        indirizzo = customLocationForm.address.value;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode( {
            'address': indirizzo
        }, function(results,status) {
            if (status == google.maps.GeocoderStatus.OK) {
                errore = false;
                aggiungiMarcatorePosizione(results[0].geometry.location);
            } else {
                showNotification("Impossibile trovare l'indirizzo specificato", false);
                errore = true
            }
        });
    }
    if(errore == false){
        $('#latLongModal').modal('hide');
    }
    
}
function errorCoordInput(){
    document.getElementById("latCont").className = "clearfix error";          
    document.getElementById("longCont").className = "clearfix error";
    document.getElementById("errLatLongIn").style.visibility = "visible";
    errore = true;
}  
function isValidLat(Latitude){
    if(Latitude <=90 && Latitude>=-90){
        return true;
    } else{
        return false;
    } 
}
function isValidLong(Longitude){
    if(Longitude <=180 && Longitude>=-180){
        return true;
    } else{
        return false;
    } 
}