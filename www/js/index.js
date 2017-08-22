/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
		//document.addEventListener("pause", onPause, false);
		

		document.addEventListener("touchmove",function(e) {
			e.preventDefault();
		},
		false
		);
		

		
		if (localStorage.getItem("nomefoto") === null || localStorage.getItem("nomefoto")=="null" || typeof(localStorage.getItem("nomefoto")) == 'undefined' || localStorage.getItem("nomefoto")==0 || localStorage.getItem("nomefoto")=="") {
			
			localStorage.setItem("foto","default.png")
			
		}
		else{
			nomefoto = localStorage.getItem("nomefoto")+".jpg";
			localStorage.setItem("foto",nomefoto)
		}
        
        
        IDPage = getParameterByName('id');
        
        if(IDPage==3){
          window.location.href = "#home3";
        }
        
        if(IDPage==2){
            window.location.href = "#home2";
        }
        if(IDPage==4){
            window.location.href = "#home4";
        }
		
        
        //$("#prima").show()
        

		////////// controllo internet ///////////////
		
		var connectionStatus = false;
		connectionStatus = navigator.onLine ? 'online' : 'offline';
		
		if(connectionStatus=='online'){
            
          //prendibannertop()
		
		  var uno;
		  var due;
		  var tre;
		  var quattro;
		  var numero = 1;
		  var numero1 = 2;
		  var numero2 = 3;
		  var numero3 = 4;
		  var numero4 = 5;
		  var numero5 = 6;
			
		  $("#lastpunt").hide()
			
		 //DATA
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1;//January is 0, so always add + 1
			
			var ora = today.getHours()
			if(ora<10){ora="0"+ora}
			
			var minuti = today.getMinutes();
			if(minuti<10){minuti="0"+minuti}
			
			var secondi = today.getSeconds();
			if(secondi<10){secondi="0"+secondi}
			
			var yyyy = today.getFullYear();
			if(dd<10){dd="0"+dd}
			if(mm<10){mm="0"+mm}
			today = dd+'/'+mm+'/'+yyyy;
			
			$("#stamp").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
			var ora_cell = yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00";
			
			localStorage.setItem("ora_cell", ora_cell);
			
			
            localStorage.setItem("start","0")
			
			localStorage.setItem("punteggio1","0")
			
			$("#spinner1").hide()
			
			
			if (localStorage.getItem("email") === null || localStorage.getItem("email")=="null" || typeof(localStorage.getItem("email")) == 'undefined' || localStorage.getItem("email")==0 || localStorage.getItem("email")=="") {
				
                var thisAd = 0;
                
                initBannerLink()
                
                
                function initBannerLink() {
                    if (document.getElementById("adBanner").parentNode.tagName == "A") {
                        document.getElementById("adBanner").parentNode.onclick = newLocation;
                    }
                    
                    rotate();
                }
                
                
                
                function newLocation() {
                    var adURL = new Array("pokeritaliaweb.org","http://msop.it/waddall/splash.html");
                    
                    //document.location.href = "http://www." + adURL[thisAd];
                    
                    var ref = window.open('http://www.'+adURL[thisAd]+'', '_system', 'location=no');
                    
                    return false;
                }
                
                
                
                function rotate() {
                    var adImages = new Array("img/bannerpiw.png","img/banneradd.png");
                    
                    thisAd++;
                    if (thisAd == adImages.length) {
                        thisAd = 0;
                    }
                    
                    document.getElementById("adBanner").src = adImages[thisAd];
                    
                    
                    
                    setTimeout (function(){
                                
                                rotate();
                                
                                }, 4000);
                    
                    
                }

			}
			else{
                
				
				//admob.initAdmob("ca-app-pub-5263503085775846/1999366017","ca-app-pub-5263503085775846~9522632812"); //admob IOS
				//admob.showBanner(admob.BannerSize.BANNER,admob.Position.BOTTOM_APP);
				
				//// AD MOB ////
				
				
				//// ANDROID //////
				
				/*var admobid = {};
				 
				 if( /(android)/i.test(navigator.userAgent) ) {
				 admobid = {
				 banner: 'ca-app-pub-5263503085775846/1999366017',
				 interstitial: 'ca-app-pub-5263503085775846~9522632812'
				 };
				 } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
				 admobid = {
				 banner: 'ca-app-pub-5263503085775846/1999366017',
				 interstitial: 'ca-app-pub-5263503085775846~9522632812'
				 };
				 } else {
				 admobid = {
				 banner: 'ca-app-pub-5263503085775846/1999366017',
				 interstitial: 'ca-app-pub-5263503085775846~9522632812'
				 };
				 }
				 
				 if(AdMob) AdMob.createBanner( {
				 adId:admobid.banner,
				 position:AdMob.AD_POSITION.BOTTOM_CENTER,
				 autoShow:true} );
				 
				 
				 
				 if(AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} );
				 
				 if(AdMob) AdMob.showInterstitial();*/
				
				///// FINE /////
				
				
				////// AD MOB FINE ////
				
				var thisAd = 0;
				
				initBannerLink()
				
				
				function initBannerLink() {
					if (document.getElementById("adBanner").parentNode.tagName == "A") {
						document.getElementById("adBanner").parentNode.onclick = newLocation;
					}
					
					rotate();
				}
				
				
				
				function newLocation() {
					var adURL = new Array("negrino.com","sun.com","microsoft.com");
					
					//document.location.href = "http://www." + adURL[thisAd];
					
					var ref = window.open('http://www.'+adURL[thisAd]+'', '_system', 'location=no');
					
					return false;
				}
				
				
				
				function rotate() {
					var adImages = new Array("images/banner1.jpg","images/banner2.png","images/banner3.png");
					
					thisAd++;
					if (thisAd == adImages.length) {
						thisAd = 0;
					}
					
					document.getElementById("adBanner").src = adImages[thisAd];
					
			
					
					setTimeout (function(){
								
                        rotate();
								
					}, 3000);
					
					
				}
				
			}
			
			
		}
		
		//////////////////////////////////////////
        
        
        function prendibannertop(){
            
            window.location.href = "tornei.html";
            
            /*$("#spinner1").show()
            
            
            $.ajax({
                   type:"GET",
                   url:"http://msop.it/tanadelletigri/home.php",
                   contentType: "application/json",
                   //data: {Lat:3,Longi:4},
                   timeout: 7000,
                   jsonp: 'callback',
                   crossDomain: true,
                   success:function(result){
                   
                   
                   $.each(result, function(i,item){
                        
                          window.location.href = "#home2";
                          
                          setTimeout (function(){
                                      
                            $("#bannerhome").attr("src",item.tophome)
                                      
                          }, 700);
                          
                          
                    });
                   
                   $("#spinner1").hide()
                   
                   },
                   error: function(){
                   
 
                   navigator.notification.alert(
                                                'Errore di rete, riprova sotto copertura',  // message
                                                alertDismissed,         // callback
                                                'Errore di Rete',            // title
                                                'OK'                  // buttonName
                                                );
                   
                   },
                   
                   dataType:"jsonp"});*/
        }
        
        
        
        
		
		$(document).on("touchstart", "#condividi", function(e){
					   
					   
			if(localStorage.getItem("emailfacebook") == "1"){
				window.plugins.socialsharing.shareViaFacebook('Sfidami su AddAll', 'http://www.msop.it/addall/logo.png', 'www.msop.it', function() {console.log('share ok')}, function(onPause){})
			}
			else{
					navigator.notification.alert(
					 							'Devi fare login con Facebook',  // message
												 alertDismissed,         // callback
												 'Login',            // title
												 'OK'                  // buttonName
					);
			}
					   
					   e.stopImmediatePropagation();
					   
					   e.preventDefault();
					   
					   return false;
					   
					   if ($.browser.iphone || $.browser.ipad) $(this).trigger('click');
		});
        
        
        $(document).on("touchstart", "#gofacebook", function(e){
                       
            var ref = window.open('https://www.facebook.com/groups/tanadelletigripoker/', '_system', 'location=no');
                       
        });
        
        
        $(document).on("touchstart", "#goinsta", function(e){
                       
           var ref = window.open('http://www.cdsevents.it', '_system', 'location=no');
         });
		
		
		
		$(document).on("touchstart", "#loading", function(e){
					   
			localStorage.setItem("session10","0")
			localStorage.setItem("punteggio1","0")
			somma=0
			punto = 0
			$("#somma").html("0")
			$("#totale").html("0")
					   
		});
		
		
		
		
		$(document).on("touchstart", "#bliard", function(e){
					   
			//admob.showBanner(admob.BannerSize.BANNER,admob.Position.BOTTOM_APP);
					   
			//window.location.href = "spec.html";
					   
		});
		
		
		
		// FINE //
		
		$(document).on("touchstart", "#btnlancia2", function(e){
			$("#lastpunt").hide()
			localStorage.setItem("round","1")
			localStorage.setItem("sfidalanciata","1")
		    localStorage.setItem("sfida","1")
			
			$("#lastpunt").hide()
			
			$("#tbllancia").show()
		});
		
		
		
		$(document).on("touchstart", "#indietro", function(e){
					   
			//window.location.href = "index.html";
			//$.mobile.changePage ($("#home"));
			window.plugins.nativepagetransitions.slide({
                'direction': 'right',
                'duration': 400,
                'androiddelay': 50,
                'href': 'index.html'
            });
			
					   
		});
        
        
        $(document).on("touchstart", "#indietro2", function(e){
                       
            //window.location.href = "index.html";
            //$.mobile.changePage ($("#home"));
			
			window.plugins.nativepagetransitions.slide({
                'direction': 'right',
                'duration': 400,
                'androiddelay': 50,
                'href': 'index.html'
            });
                       
        });
		
		
		
		$(document).on("touchstart", "#btncount", function(e){
						
			//window.location.href = "index33.html";
			
			window.plugins.nativepagetransitions.slide({
                
                "href" : "index33.html"
            });
					   
		});
        
        
        $(document).on("touchstart", "#classifica", function(e){
                       
            window.location.href = "#home3";
                       
        });
        
        $(document).on("touchstart", "#satelliti", function(e){
                       
           window.location.href = "#home4";
                       
        });
        
        
        $(document).on("touchstart", "#live", function(e){
                       
           // window.location.href = "index2live.html";
			window.plugins.nativepagetransitions.slide({
                
                "href" : "index2live.html"
            });
                       
        });
        
        
        $(document).on("touchstart", "#online", function(e){
                       
           // window.location.href = "index2online.html";
			window.plugins.nativepagetransitions.slide({
                
                "href" : "index2online.html"
            });
                       
        });
        
        $(document).on("touchstart", "#satonline", function(e){
                       
            //window.location.href = "index2satonline.html";
			
			window.plugins.nativepagetransitions.fade({
               // the defaults for direction, duration, etc are all fine
               "href" : "index2satonline.html"
            });
                       
        });
        
        
        $(document).on("touchstart", "#satlive", function(e){
                       
            //window.location.href = "index2satlive.html";
			
			window.plugins.nativepagetransitions.fade({
               // the defaults for direction, duration, etc are all fine
               "href" : "index2satlive.html"
            });
                       
        });
        
        
        $(document).on("touchstart", "#tornei", function(e){
                       
            //window.location.href = "#home2";
			
			window.plugins.nativepagetransitions.slide({
                
                "href" : "#home2"
            });
                       
            
                           
        });
        
        $(document).on("touchstart", "#programma2", function(e){
                       
                       
                       $("#spinner1").show()
                       
                       $.ajax({
                              type:"GET",
                              url:"http://msop.it/tanadelletigri/programma.php",
                              contentType: "application/json",
                              //data: {Lat:3,Longi:4},
                              timeout: 7000,
                              jsonp: 'callback',
                              crossDomain: true,
                              success:function(result){
                              
                              //alert("2")
                              
                              $.each(result, function(i,item){
                                     
                                     var win = window.open( item.tophome, "_system", "location=yes" );
                                     
                                     });
                              
                              $("#spinner1").hide()
                              
                              },
                              error: function(){
                              
                              
                              navigator.notification.alert(
                                                           'Errore di rete, riprova sotto copertura',  // message
                                                           alertDismissed,         // callback
                                                           'Errore di Rete',            // title
                                                           'OK'                  // buttonName
                                                           );
                              
                              },
                              
                              dataType:"jsonp"});
                       
                       });
        
        
        
        
        $(document).on("touchstart", "#struttura", function(e){
                       
                       
                       $("#spinner1").show()
                       
                       $.ajax({
                              type:"GET",
                              url:"http://msop.it/tanadelletigri/struttura.php",
                              contentType: "application/json",
                              //data: {Lat:3,Longi:4},
                              timeout: 7000,
                              jsonp: 'callback',
                              crossDomain: true,
                              success:function(result){
                              
                              //alert("2")
                              
                              $.each(result, function(i,item){
                                     
                                     var win = window.open( item.tophome, "_system", "location=yes" );
                                     
                                     });
                              
                              $("#spinner1").hide()
                              
                              },
                              error: function(){
                              
                              
                              navigator.notification.alert(
                                                           'Errore di rete, riprova sotto copertura',  // message
                                                           alertDismissed,         // callback
                                                           'Errore di Rete',            // title
                                                           'OK'                  // buttonName
                                                           );
                              
                              },
                              
                              dataType:"jsonp"});
                       
                       });
        
        
        
        $(document).on("touchstart", "#regolamento", function(e){
                       
                       
                       $("#spinner1").show()
                       
                       $.ajax({
                              type:"GET",
                              url:"http://msop.it/tanadelletigri/regolamento.php",
                              contentType: "application/json",
                              //data: {Lat:3,Longi:4},
                              timeout: 7000,
                              jsonp: 'callback',
                              crossDomain: true,
                              success:function(result){
                              
                              //alert("2")
                              
                              $.each(result, function(i,item){
                                     
                                     var win = window.open( item.tophome, "_system", "location=yes" );
                                     
                                     });
                              
                              $("#spinner1").hide()
                              
                              },
                              error: function(){
                              
                              
                              navigator.notification.alert(
                                                           'Errore di rete, riprova sotto copertura',  // message
                                                           alertDismissed,         // callback
                                                           'Errore di Rete',            // title
                                                           'OK'                  // buttonName
                                                           );
                              
                              },
                              
                              dataType:"jsonp"});
                       
                       });
        
        $(document).on("touchstart", "#redraw", function(e){
                       
                       
                       $("#spinner1").show()
                       
                       $.ajax({
                              type:"GET",
                              url:"http://msop.it/tanadelletigri/redraw.php",
                              contentType: "application/json",
                              //data: {Lat:3,Longi:4},
                              timeout: 7000,
                              jsonp: 'callback',
                              crossDomain: true,
                              success:function(result){
                              
                              //alert("2")
                              
                              $.each(result, function(i,item){
                                     
                                     var win = window.open( item.tophome, "_system", "location=yes" );
                                     
                                     });
                              
                              $("#spinner1").hide()
                              
                              },
                              error: function(){
                              
                              
                              navigator.notification.alert(
                                                           'Errore di rete, riprova sotto copertura',  // message
                                                           alertDismissed,         // callback
                                                           'Errore di Rete',            // title
                                                           'OK'                  // buttonName
                                                           );
                              
                              },
                              
                              dataType:"jsonp"});
                       
                       });
        
        
        $(document).on("touchstart", "#programma", function(e){
                       
                       
                       $("#spinner1").show()
                       
                       $.ajax({
                              type:"GET",
                              url:"http://msop.it/tanadelletigri/programma.php",
                              contentType: "application/json",
                              //data: {Lat:3,Longi:4},
                              timeout: 7000,
                              jsonp: 'callback',
                              crossDomain: true,
                              success:function(result){
                              
                              //alert("2")
                              
                              $.each(result, function(i,item){
                                     
                                     var win = window.open( item.tophome, "_system", "location=yes" );
                                     
                                     });
                              
                              $("#spinner1").hide()
                              
                              },
                              error: function(){
                              
                              
                              navigator.notification.alert(
                                                           'Errore di rete, riprova sotto copertura',  // message
                                                           alertDismissed,         // callback
                                                           'Errore di Rete',            // title
                                                           'OK'                  // buttonName
                                                           );
                              
                              },
                              
                              dataType:"jsonp"});
                       
                       });
		
		
		
		$(document).on("touchstart", "#indietro2", function(e){
					   
		    $("#allenati").hide()
			$("#btnallenati").show()
			$("#btnsfida").show()
			$("#bliard").show()
			$("#btnlancia").show()
			$("#risultati").show()
		});
		
		
		
		$(document).on("touchstart", "#going", function(e){
					   
					   navigator.notification.confirm(
													  'ROUND 1 la somma delle palle colpite deve essere 10',  // message
													  onConfirm1,              // callback to invoke with index of button pressed
													  'Spegni',            // title
													  'Inizia,Annulla'      // buttonLabels
													  );
					   
						

		});
		
		
		function onConfirm1(button) {
			
			if(button==1){    //If User selected No, then we just do nothing
				
				localStorage.setItem("sfida","0")
				localStorage.setItem("round","1")
				
				$("#load").show()
				
				localStorage.setItem("session10","0")
				
				localStorage.setItem("esatte","0")
				$("#esatte2").html("0")
				$("#esatte3").html("0")
				
				$("#totale").html("0/10")
				$("#bianca0").hide()
				$("#bianca").hide()
				$("#bianca1").hide()
				$("#bianca2").hide()
				
				$("#allenati").hide()
				$("#lastpunt").hide()
				
				var uno;
				var due;
				var tre;
				var quattro;
				var numero = 1;
				var numero1 = 2;
				var numero2 = 3;
				var numero3 = 4;
				var numero4 = 5;
				var numero5 = 6;
				
				//DATA
				var today = new Date();
				var dd = today.getDate();
				var mm = today.getMonth()+1;//January is 0, so always add + 1
				
				var ora = today.getHours()
				if(ora<10){ora="0"+ora}
				
				var minuti = today.getMinutes();
				if(minuti<10){minuti="0"+minuti}
				
				var secondi = today.getSeconds();
				if(secondi<10){secondi="0"+secondi}
				
				
				var yyyy = today.getFullYear();
				if(dd<10){dd="0"+dd}
				if(mm<10){mm="0"+mm}
				today = dd+'/'+mm+'/'+yyyy;
				
				$("#stamp").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
				$("#stamp2").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
				var ora_cell = yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00";
				
				localStorage.setItem("ora_cell", ora_cell);
				
				
				localStorage.setItem("start","0")
				localStorage.setItem("punteggio1","0")
				var somma=0;
				var punto=0;
				
				
				//admob.hideBanner()
				
				//AdMob.removeBanner();
				
				localStorage.setItem("esatte",0)
				$("#esatte2").html("0")
				$("#esatte3").html("0")
				
				playAudio('successSound');
				
				localStorage.setItem("session10","0")
				localStorage.setItem("punteggio1","0")
				somma=0
				punto = 0
				$("#somma").html("0")
				$("#totale").html("0")
				$("#gioco").show()
				
				
				$("#going").hide()
				
				setTimeout(function() {
						   
						   playAudio('successSound2');
						   
						   $("#load").hide()
						   
						   $("#dati").show()
						   $("#dati0").show()
								 
						   $("#biliardo").show();
						   
						   $("#somma").html("0")
						   $("#totale").html("0")
						   countdown1(0);
						   
						   }, 1000);
				
				localStorage.setItem("start","0")
				
				prendinumeri3(0)

			}
			
		}

		
		
		$(document).on("touchstart", "#going2", function(e){
					   
					   navigator.notification.confirm(
													  'ROUND 2 la somma delle palle colpite deve essere 15',  // message
													  onConfirm2,              // callback to invoke with index of button pressed
													  'Spegni',            // title
													  'Inizia,Annulla'      // buttonLabels
													  );
					   
					   

		});
		
		
		function onConfirm2(button) {
			
			if(button==1){    //If User selected No, then we just do nothing
				
				localStorage.setItem("sfida","0")
				localStorage.setItem("round","2")
				
				$("#load").show()
				
				localStorage.setItem("session10","0")
				
				localStorage.setItem("esatte","0")
				$("#esatte2").html("0")
				$("#esatte3").html("0")
				
				$("#totale").html("0/15")
				$("#bianca0").hide()
				$("#bianca").hide()
				$("#bianca1").hide()
				$("#bianca2").hide()
				
				$("#allenati").hide()
				$("#lastpunt").hide()
				
				var uno;
				var due;
				var tre;
				var quattro;
				var numero = 2;
				var numero1 = 3;
				var numero2 = 4;
				var numero3 = 5;
				var numero4 = 6;
				var numero5 = 7;
				
				//DATA
				var today = new Date();
				var dd = today.getDate();
				var mm = today.getMonth()+1;//January is 0, so always add + 1
				
				var ora = today.getHours()
				if(ora<10){ora="0"+ora}
				
				var minuti = today.getMinutes();
				if(minuti<10){minuti="0"+minuti}
				
				var secondi = today.getSeconds();
				if(secondi<10){secondi="0"+secondi}
				
				
				var yyyy = today.getFullYear();
				if(dd<10){dd="0"+dd}
				if(mm<10){mm="0"+mm}
				today = dd+'/'+mm+'/'+yyyy;
				
				$("#stamp").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
				$("#stamp2").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
				var ora_cell = yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00";
				
				localStorage.setItem("ora_cell", ora_cell);
				
				
				localStorage.setItem("start","0")
				localStorage.setItem("punteggio1","0")
				var somma=0;
				var punto=0;
				
				
				//admob.hideBanner()
				
				//AdMob.removeBanner();
				
				localStorage.setItem("esatte",0)
				$("#esatte2").html("0")
				$("#esatte3").html("0")
				
				playAudio('successSound');
				
				localStorage.setItem("session10","0")
				localStorage.setItem("punteggio1","0")
				somma=0
				punto = 0
				$("#somma").html("0")
				$("#totale").html("0")
				$("#gioco").show()
				
				
				$("#going").hide()
				
				setTimeout(function() {
						   
						   playAudio('successSound2');
						   
						   $("#load").hide()
						   
						   $("#dati").show()
						   $("#dati0").show()
						   
						   $("#biliardo").show();
						   
						   $("#somma").html("0")
						   $("#totale").html("0")
						   countdown1(0);
						   
						   }, 1000);
				
				localStorage.setItem("start","0")
				
				prendinumeri3_15(0)
				
			}
			
		}

		
		function going2(){
			// SONO ARRIVATO QUI
			
			// devo correggere andando a prendere BTNSFIDA aggiungendo il Round 2
			
			          navigator.notification.alert(
						'ROUND 2, la somma delle palle colpite deve essere 15',  // message
						alertDismissed,         // callback
						'Somma 15',            // title
						'OK'                  // buttonName
					  );
			
					   localStorage.setItem("sfida","1")
					   localStorage.setItem("round","2")
					   
					   $("#load").show()
			
					   $("#totale").html("0/15")
					   $("#bianca0").hide()
					   $("#bianca").hide()
					   $("#bianca1").hide()
					   $("#bianca2").hide()
					   
					   $("#allenati").hide()
					   
					   var uno;
					   var due;
					   var tre;
					   var quattro;
					   var numero = 2;
					   var numero1 = 3;
					   var numero2 = 4;
					   var numero3 = 5;
					   var numero4 = 6;
					   var numero5 = 7;
					   
					   //DATA
					   var today = new Date();
					   var dd = today.getDate();
					   var mm = today.getMonth()+1;//January is 0, so always add + 1
					   
					   var ora = today.getHours()
					   if(ora<10){ora="0"+ora}
					   
					   var minuti = today.getMinutes();
					   if(minuti<10){minuti="0"+minuti}
					   
					   var secondi = today.getSeconds();
					   if(secondi<10){secondi="0"+secondi}
					   
					   
					   var yyyy = today.getFullYear();
					   if(dd<10){dd="0"+dd}
					   if(mm<10){mm="0"+mm}
					   today = dd+'/'+mm+'/'+yyyy;
					   
					   $("#stamp").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
					   $("#stamp2").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
					   var ora_cell = yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00";
					   
					   localStorage.setItem("ora_cell", ora_cell);
			
					   
					    playAudio('successSound');
			
						localStorage.setItem("esatte",0)
						$("#esatte2").html("0")
						$("#esatte3").html("0")
			
						var somma=0;

					   $("#gioco").show()
			
					   $("#going").hide()
			
			
					   setTimeout(function() {
								  
							playAudio('successSound2');
								  
							$("#load").hide()
								  
							$("#dati").show()
							$("#dati0").show()
								  
							$("#biliardo").show();

							countdown1(0);
								  
							$("#somma").html("0")
							$("#totale").html("0")
								  
						}, 1000);
					   
					   localStorage.setItem("start","0")
					   
					   prendinumeri3_15(0)
					   
		}
		
		
		$(document).on("touchstart", "#going3", function(e){
					   
					   navigator.notification.alert(
													'Solo a pagamento',  // message
													alertDismissed,         // callback
													'Round 3',            // title
													'OK'                  // buttonName
													);
		});
		
		
		
		
		$(document).on("touchstart", "#back", function(e){
			$("#lastpunt").hide()
			window.location.href = "index.html";		   
		});


		
		$(document).on("tap", "#altro", function(e){
					   
			$("#btnpanel").click();
					   
		});
		
        
        $(document).on("tap", "#altro1", function(e){
                       
          $("#btnpanel1").click();
                       
        });
        
        $(document).on("tap", "#altro2", function(e){
                       
            $("#btnpanel2").click();
                       
        });
        
        $(document).on("tap", "#altro3", function(e){
                       
           $("#btnpanel3").click();
                       
        });
		
		
		$(document).on("tap", "#impostazioni", function(e){
					   
			alert("fine");
					   
		});
		
		
		
		$(document).on("touchstart", "#esci", function(e){
					   
			localStorage.setItem("email", "");
			localStorage.setItem("emailpass", "");
					   
			window.location.href = "index33.html";
					   
		});
		

		
    }
}




function gpsonError(){
	
	//alert()

}



function onPause() {
	
	//var myTimer = setInterval(onPause3, 2000);
	
}



function alertDismissed() {
	
	//var myTimer = setInterval(onPause3, 2000);
	
}



function onPause3() {
	
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;//January is 0, so always add + 1
	
	var ora = today.getHours()
	if(ora<10){ora="0"+ora}
	
	var minuti = today.getMinutes();
	if(minuti<10){minuti="0"+minuti}
	
	var secondi = today.getSeconds();
	if(secondi<10){secondi="0"+secondi}
	
	//self.document.formia.ora.value = ora + ":" + minuti
	
	var yyyy = today.getFullYear();
	if(dd<10){dd="0"+dd}
	if(mm<10){mm="0"+mm}
	today = dd+'/'+mm+'/'+yyyy;
	
	$("#distanza3").html("<span style = 'font-size: 18px;'>"+ ora +","+ minuti +","+ secondi +"</span>");
	
	//if(secondi==10){
		//clearInterval(myTimer);
	//}
	
	$.ajax({
		   type:"GET",
		   url:"http://gtechplay.com/mycollection/www/Posizione.asp",
		   contentType: "application/json",
		   data: {Lat:3,Longi:4},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   //$.each(result, function(i,item){
		   //});
		   
		   
		   },
		   error: function(){
		   
		   
		   },
		   dataType:"jsonp"});
	
}


function playAudio(id) {
	var audioElement = document.getElementById(id);
	var url = audioElement.getAttribute('src');
	var my_media = new Media(url,
							 // success callback
							 function () { console.log("playAudio():Audio Success"); },
							 // error callback
							 function (err) { console.log("playAudio():Audio Error: " + err); }
							 );
	
	my_media.play();
	
	
	/*setTimeout(function() {
			   my_media.stop();
			   }, 3000);*/
	
}


$(document).on("tap", "#mandaemail", function(e){
			   
	window.plugin.email.open({
		to:      "eventipoker@gmail.com",
		subject: "Contattaci",
		body:    "Richiedi informazioni",
		isHtml:  true
	});
			   
});


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
                          var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                          results = regex.exec(location.search);
                          return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
                          }
