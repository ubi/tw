<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <!-- Start ext css-->
        <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/themes/base/jquery-ui.css" rel="stylesheet"/>
        <link href="css/extLib/bootstrap.css" rel="stylesheet"/>
        <link href="css/extLib/jquery.mCustomScrollbar.css" rel="stylesheet"/>
        <link href="css/mainStyleSheet.css" rel="stylesheet"/>  
        <link href="css/extLib/jquery.notice.css" rel="stylesheet"/>
        <!-- start ext JS -->
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true&libraries=geometry"></script>
        <script type="text/javascript" src="js/extLib/gears_init.js"></script>
        <script type="text/javascript" src="js/extLib/jquery.min.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
        <script src ="js/extLib/jquery.notice.js" type="text/javascript"></script>
        <script type="text/javascript" src="js/extLib/jquery.easing.1.3.js"></script>
        <script type="text/javascript" src="js/extLib/jquery.mCustomScrollbar.js"></script>
        <script type="text/javascript" src="js/extLib/jquery.mousewheel.min.js"></script>
        <script type="text/javascript" src="http://twitter.github.com/bootstrap/1.4.0/bootstrap-modal.js"></script>
        <script type="text/javascript" src="http://twitter.github.com/bootstrap/1.4.0/bootstrap-twipsy.js"></script>
        <script type="text/javascript" src="http://twitter.github.com/bootstrap/1.4.0/bootstrap-popover.js"></script>
        <!-- start OWN js -->
        <script type="text/javascript" src="js/popupHandler.js"></script>
        <script type="text/javascript" src="js/effectsLib.js"></script>
        <script src="js/geolocation.js" type="text/javascript"></script>
        <script type="text/javascript" src="js/mapCreator.js"></script>
        <link rel="stylesheet" href="css/overRider.css"/>
        <title>MetaMarket</title>
    </head>
    <body>
        <div class="container-fluid" style="height: 100%;">
            <div class="sidebar">
                <div id="mcs3_container">
                    <img id="logo" alt="Logo" src="img/logoHead.png"/>
                    <div class="customScrollBox">
                        <div class="container" style="top: 0px; ">
                            <div class="content">
                                <p id="spacer">
                                    &nbsp;
                                    &nbsp;
                                </p>
                                <p></p>

                            </div>
                            <!-- asd-->
                        </div>
                        <div class="dragger_container" style="display: block; ">
                            <div class="dragger ui-draggable" style="display: block; height: 60px; line-height: 60px; top: 0px; "></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content" style="padding-top: 20px;">
                <div id="nav">
                    <div id="selectorMappa" class="switcher" rel="popover" title="Mappa" data-content="Narratore per la visualizzazione georeferenziata di dati aggregati" placement="left" onclick="switchNarrator('mappa')" style="float: left;">
                        <img alt ="globo2" src="img/globo2.png"/>
                    </div>                
                    <br>
                    <br><br>
                    <div id="selectorTabella" class="switcher" rel="popover" title="Tabella" data-content="Narratore per la visualizzazione di dati aggregati in forma tabellare" placement="left" onclick="switchNarrator('tabella')">
                        <img alt="tabella" src="img/tab.png"/>
                    </div>  
                    <br><br>
                    <div id="selectorGeocoding" class="switcher" rel="popover" title="Geocoding" data-content="click per impostare i dati sulla tua posizione attuale" placement="left" onclick="$('#latLongModal').modal('show');">
                        <img alt="tabella" src="img/geocode.png"/>
                    </div>  
                </div>
                <div id="map" style="height: 550px;"></div>
                <script type="text/javascript">
                    window.onload = generaMappa('map')
                </script>
                <div id="tabella" style="height: 550px; display: none">asdasdasd</div>
                <!-- Example row of columns -->
                <div class="row">
                    <div class="span6">
                        <h2>Heading</h2>
                        <p>Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                        <p><a class="btn" href="#">View details &raquo;</a></p>
                    </div>
                    <div class="span5">
                        <h2>Heading</h2>
                        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                        <p><a class="btn" href="#">View details &raquo;</a></p>
                    </div>
                </div>
                <hr>
            </div>
            <!--finestra modale immissione latitudine / longitudine-->
            <div id="latLongModal" class="modal hide fade" >
                <div class="modal-header">
                    <a href="#" class="close">×</a>
                    <h3>Inserisci manualmente le coordinate</h3>
                </div>
                <div class="modal-body">
                    <form class="form-stacked" name="customLocationForm">
                        <div>
                            <div id="latCont" style="float:left;" class="clearfix" >
                                <label for="latInput">Latitudine</label>
                                <div class="input">
                                    <input class="xlarge span4"  style="float: left;" id="latInput" name="latInput" size ="10" type="text"/>
                                </div>
                            </div>
                            <div id="longCont" style="padding-left: 15px" class="clearfix">
                                <label for="longInput" style="padding-left: 222px;">Longitudine</label>
                                <div class="input">
                                    <input style="margin-left: 15px;" class="xlarge span4 "  id="longInput" name="longInput" size ="10" type="text"/>
                                </div>
                            </div>
                            <span id="errLatLongIn" class="label important" style="visibility: hidden"> Compilare correttamente tutti i campi</span>  
                        </div>
                        <br>
                        <div class="modal-header">
                            <h3 style="margin-left: -36px;">Oppure immetti l'indirizzo!</h3>
                        </div>
                        &nbsp;
                        <div>
                            <label for="address">Indirizzo</label>
                            <input class="xlarge span8" id="address" name="address" size ="30" type="text"/>
                            <br>
                            <p></p>
                        </div>
                        <span class="label success">Nota:</span>  Pattern consigliato: "Citta, indirizzo, numero civico"
                    </form>
                </div>
                <div class="modal-footer">
                    <a href="#" class="btn primary" onclick="customLocations()">Geolocalizzati!</a>
                </div>
            </div>
        </div>
        <script src="js/geolocation.js" type="text/javascript"></script>
    </body>
</html>
