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
		//document.addEventListener("resume", onResume, false);
		
		
		/*if(localStorage.getItem("spinno")!="1"){
			$("#spinnero2").show()
			
			setTimeout (function(){
									
				$("#spinnero2").hide()
				localStorage.setItem("spinno", "1");
				$("#header").show()
									
			}, 4000);
		}
		else{
			
			$("#header").show()
			$("#spinnero2").hide()
			
		}*/
		

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
            
          
			//// PUSH //////
			
			
			var pushNotification;
			var token

			
			pushNotification = window.plugins.pushNotification;
			
			
			pushNotification.register(
			successHandler,
			errorHandler,
			{
				"senderID":"392875420036",
				"ecb":"onNotification"
			});
			
			function tokenHandler (result) {
			
				testa(result);

			}
			
			
			function successHandler (result) {

				testa(result);
			}
			
			function errorHandler (error) {

			}
			
			
			function onNotification(e) {
					   
				switch( e.event )
				{
					case 'registered':
					if ( e.regid.length > 0 )
					{
						//$("#app-status-ul").append('<li>REGISTERED -> REGID:' + e.regid + "</li>");
						// Your GCM push server needs to know the regID before it can push to this device
						// here is where you might want to send it the regID for later use.
						alert("regID = " + e.regid);
					}
					break;
					case 'message':
						// if this flag is set, this notification happened while we were in the foreground.
						// you might want to play a sound to get the user's attention, throw up a dialog, etc.
						if (e.foreground)
						{
							alert('INLINE NOTIFICATION');
							// on Android soundname is outside the payload.
							// On Amazon FireOS all custom attributes are contained within payload
								   
						}
						else
						{	// otherwise we were launched because the user touched a notification in the notification tray.
							if (e.coldstart)
								alert('<li>--COLDSTART NOTIFICATION--');
							else
								alert('<li>--BACKGROUND NOTIFICATION--');
						}
						   
						   alert('<li>MESSAGE -> MSG: ' + e.payload.message + '</li>');
						//android only
						   alert('<li>MESSAGE -> MSGCNT: ' + e.payload.msgcnt + '</li>');
						//amazon-fireos only
						//$("#app-status-ul").append('<li>MESSAGE -> TIMESTAMP: ' + e.payload.timeStamp + '</li>');
					break;
					case 'error':
						alert('<li>ERROR -> MSG:' + e.msg + '</li>');
					break;
					default:
						alert('<li>EVENT -> Unknown, an event was received and we do not know what it is</li>');
					break;
				}
			}
			
			
			///////// PUSH NUOVE /////////
	

			function testa (testo) {
				
				
				setTimeout (function(){
							
				
				$.ajax({
					   type:"GET",
					   url:"http://www.msop.it/tanadelletigri/Check_RegToken.asp",
					   data: {device:testo,platform:"android"},
					   contentType: "application/json",
					   json: 'callback',
					   timeout: 7000,
					   crossDomain: true,
					   success:function(result){
					   
					   $.each(result, function(i,item){
					   
						 setTimeout (function(){
							localStorage.setItem("Token", testo);
							//alert(testo);
						}, 500);
					   
					   });
					   
					   },
					   error: function(){
					   
						 //alert("No")
					   
					   },
					   dataType:"json"});
							
				}, 500);
				
				
			}
	
		   ///// FINE PUSH NOTIFICATION ///////////
		
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
                    var adURL = new Array("pokernelmondo.com","pokeritaliaweb.org","thecasinoperla.com/index.php?id=pokerroom_perla&L=158?utm_source=gameanswer&utm_medium=banner&utm_campaign=Poker%20room%20Perla&utm_content=ITA","gioconews.it");
                    
                    //document.location.href = "http://www." + adURL[thisAd];
                    
                    var ref = window.open('http://www.'+adURL[thisAd]+'', '_system', 'location=no');
                    
                    return false;
                }
                
                
                
                function rotate() {
                    var adImages = new Array("bannermondo.png","bannerpiw.jpg","bannerperla.jpg","gnpoker.png");
                    
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
                

				var thisAd = 0;
				
				initBannerLink()
				
				
				 function initBannerLink() {
                    if (document.getElementById("adBanner").parentNode.tagName == "A") {
                        document.getElementById("adBanner").parentNode.onclick = newLocation;
                    }
                    
                    rotate();
                }
                
                
                
                function newLocation() {
                    var adURL = new Array("pokernelmondo.com","pokeritaliaweb.org","thecasinoperla.com/index.php?id=pokerroom_perla&L=158?utm_source=gameanswer&utm_medium=banner&utm_campaign=Poker%20room%20Perla&utm_content=ITA","gioconews.it");
                    
                    //document.location.href = "http://www." + adURL[thisAd];
                    
                    var ref = window.open('http://www.'+adURL[thisAd]+'', '_system', 'location=no');
                    
                    return false;
                }
                
                
                
                function rotate() {
                    var adImages = new Array("bannermondo.png","bannerpiw.jpg","bannerperla.jpg","gnpoker.png");
                    
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
			
			
		}
		else{
			
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
                    var adURL = new Array("pokernelmondo.com","pokeritaliaweb.org","thecasinoperla.com/index.php?id=pokerroom_perla&L=158?utm_source=gameanswer&utm_medium=banner&utm_campaign=Poker%20room%20Perla&utm_content=ITA","gioconews.it");
                    
                    //document.location.href = "http://www." + adURL[thisAd];
                    
                    var ref = window.open('http://www.'+adURL[thisAd]+'', '_system', 'location=no');
                    
                    return false;
                }
                
                
                
                function rotate() {
                    var adImages = new Array("bannermondo.png","bannerpiw.jpg","bannerperla.jpg","gnpoker.png");
                    
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
                

				var thisAd = 0;
				
				initBannerLink()
				
				
				 function initBannerLink() {
                    if (document.getElementById("adBanner").parentNode.tagName == "A") {
                        document.getElementById("adBanner").parentNode.onclick = newLocation;
                    }
                    
                    rotate();
                }
                
                
                
                function newLocation() {
                    var adURL = new Array("pokernelmondo.com","pokeritaliaweb.org","thecasinoperla.com/index.php?id=pokerroom_perla&L=158?utm_source=gameanswer&utm_medium=banner&utm_campaign=Poker%20room%20Perla&utm_content=ITA","gioconews.it");
                    
                    //document.location.href = "http://www." + adURL[thisAd];
                    
                    var ref = window.open('http://www.'+adURL[thisAd]+'', '_system', 'location=no');
                    
                    return false;
                }
                
                
                
                function rotate() {
                    var adImages = new Array("bannermondo.png","bannerpiw.jpg","bannerperla.jpg","gnpoker.png");
                    
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
		
		$(document).on("touchstart", "#bannerlotto", function(e){
                       
            var ref = window.open('https://m.lottomatica.it/msite/index.html#/public/tana-delle-tigri', '_system', 'location=no');
                       
        });
		
		$(document).on("touchstart", "#gofacebooklotto", function(e){
                       
            var ref = window.open('https://www.facebook.com/Lottomatica/', '_system', 'location=no');
                       
        });
		
		$(document).on("touchstart", "#gogn", function(e){
                       
            var ref = window.open('http://www.gioconews.it', '_system', 'location=no');
                       
        });
		
		$(document).on("touchstart", "#goinstalotto", function(e){
                       
           var ref = window.open('https://www.facebook.com/Lottomatica/', '_system', 'location=no');
         });
        
        
        $(document).on("touchstart", "#goinsta", function(e){
                       
           var ref = window.open('http://www.cdsevents.it', '_system', 'location=no');
         });
		 
		 $(document).on("touchstart", "#gofurie", function(e){
					   
			var ref = window.open('https://www.facebook.com/groups/419856478094424/', '_system', 'location=no');
					   
        });
		
		$(document).on("touchstart", "#goperla", function(e){
					   
		   var ref = window.open('http://www.thecasinoperla.com/index.php?id=pokerroom_perla&L=158?utm_source=gameanswer&utm_medium=banner&utm_campaign=Poker%20room%20Perla&utm_content=ITA', '_system', 'location=no');
					   
	   });
		
		
		
		$(document).on("touchstart", "#loading", function(e){
					   
			localStorage.setItem("session10","0")
			localStorage.setItem("punteggio1","0")
			somma=0
			punto = 0
			$("#somma").html("0")
			$("#totale").html("0")
					   
		});
		
		

		
		$(document).on("touchstart", "#indietro", function(e){
					   
			//window.location.href = "index.html";
			//$.mobile.changePage ($("#home"));
			window.plugins.nativepagetransitions.fade({
                "duration"       :  1000, // in milliseconds (ms), default 400
				"iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
				"androiddelay"   :  500,
                "href" : "index.html"
            });
			
					   
		});
        
        
        $(document).on("touchstart", "#indietro2", function(e){
                       
            //window.location.href = "index.html";
            //$.mobile.changePage ($("#home"));
			
			window.plugins.nativepagetransitions.fade({
                "duration"       :  1000, // in milliseconds (ms), default 400
				"iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
				"androiddelay"   :  500,
                "href" : "index.html"
            });
                       
        });
		
		
		
		$(document).on("touchstart", "#btncount", function(e){
						
			//window.location.href = "index33.html";
			
			window.plugins.nativepagetransitions.fade({
                "duration"       :  1000, // in milliseconds (ms), default 400
				"iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
				"androiddelay"   :  600,
                "href" : "index33.html"
            });
					   
		});
        
        
        $(document).on("touchstart", "#classifica", function(e){
					   
					   
					   $("#spinner1").show()
					   
					   $.ajax({
							  type:"GET",
							  url:"http://msop.it/tanadelletigri/tuned.php",
							  contentType: "application/json",
							  //data: {Lat:3,Longi:4},
							  timeout: 7000,
							  jsonp: 'callback',
							  crossDomain: true,
							  success:function(result){
							  
							  
							  $.each(result, function(i,item){
									 
									 //window.location.href = "#home3";
									 window.plugins.nativepagetransitions.fade({
																			   "duration"       :  700, // in milliseconds (ms), default 400
																			   "iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
																			   "androiddelay"   :  500,
																			   "href" : "#home3"
																			   });
									 
								  if(item.accesso=="0"){
									 
									 $("#menuclassifica").show()
									 $("#soon").hide()
									 $("#spinner1").hide()
								  }
									 
									 
							   });
							  
							  $("#spinner1").hide()
							  
							  },
							  error: function(){
							  
							   $("#spinner1").show()
							  
							  navigator.notification.alert(
														   'Errore di rete, riprova sotto copertura',  // message
														   alertDismissed,         // callback
														   'Errore di Rete',            // title
														   'OK'                  // buttonName
														   );
							  
							  },
							  
							  dataType:"jsonp"});
					   
					   
        });
        
        $(document).on("touchstart", "#satelliti", function(e){
                       
           //window.location.href = "#home4";
		   window.plugins.nativepagetransitions.fade({
                "duration"       :  700, // in milliseconds (ms), default 400
				"iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
				"androiddelay"   :  500,
                "href" : "#home4"
            });
                       
        });
        
        
        $(document).on("touchstart", "#live", function(e){
                       
           // window.location.href = "index2live.html";
			window.plugins.nativepagetransitions.fade({
                "duration"       :  1000, // in milliseconds (ms), default 400
				"iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
				"androiddelay"   :  500,
                "href" : "index2live.html"
            });
                       
        });
        
        
        $(document).on("touchstart", "#online", function(e){
                       
           // window.location.href = "index2online.html";
			window.plugins.nativepagetransitions.fade({
                "duration"       :  1000, // in milliseconds (ms), default 400
				"iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
				"androiddelay"   :  500,
                "href" : "index2online.html"
            });
                       
        });
        
        $(document).on("touchstart", "#satonline", function(e){
                       
            //window.location.href = "index2satonline.html";
			
			window.plugins.nativepagetransitions.fade({
                "duration"       :  1000, // in milliseconds (ms), default 400
				"iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
				"androiddelay"   :  500, 
               "href" : "index2satonline.html"
            });
                       
        });
        
        
        $(document).on("touchstart", "#satlive", function(e){
                       
            //window.location.href = "index2satlive.html";
			
			window.plugins.nativepagetransitions.fade({
                "duration"       :  1000, // in milliseconds (ms), default 400
				"iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
				"androiddelay"   :  500,
                "href" : "index2satlive.html"
            });
                       
        });
        
        
        $(document).on("touchstart", "#tornei", function(e){
                       
            //window.location.href = "#home2";
			
			window.plugins.nativepagetransitions.fade({
                "duration"       :  700, // in milliseconds (ms), default 400
				"iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
				"androiddelay"   :  500,
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
					   
					   $(document).on("touchstart", "#regolamentoonline", function(e){
                       
                       
                       $("#spinner1").show()
                       
                       $.ajax({
                              type:"GET",
                              url:"http://msop.it/tanadelletigri/regolamentoonline.php",
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
	
  $("#spinnero2").show()
  $("#header").hide()
	 
  setTimeout (function(){
									
	$("#spinnero2").hide()
	localStorage.setItem("spinno", "1");
	$("#header").show()
									
  }, 4000);
	
}

function onResume() {
  $("#spinnero2").show()
  $("#header").hide()
	 
  setTimeout (function(){
									
	$("#spinnero2").hide()
	localStorage.setItem("spinno", "1");
	$("#header").show()
									
  }, 4000);	 
	 
}


function alertDismissed() {
	
	//var myTimer = setInterval(onPause3, 2000);
	
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


$(document).on("tap", "#logoanswer", function(e){
			   
	//window.plugin.email.open({
	cordova.plugins.email.open({
		to:      "associazione.gameanswer@gmail.com",
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
