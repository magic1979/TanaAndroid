document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	
	document.ontouchmove = function(e){
		e.preventDefault();
	}
	
	
	//$('#classifica').listview('refresh');
    
    document.addEventListener("touchmove",function(e) {
        e.preventDefault();
    },
    false
    );

    
    var myScroll;
    
    myScroll = new IScroll('#wrapper', {
                           click: true,
                           useTransform: false,
                           //bounce: false,
                           onBeforeScrollStart: function (e)
                           {
                           var target = e.target;
                           while (target.nodeType != 1) {
                           target = target.parentNode;
                           }
                           
                           if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA' && target.tagName != 'OPTION') {
                           e.preventDefault();
                           }
                           }
                           });
    
    
    setTimeout (function(){
                myScroll.refresh();
                
                }, 500);
	
	 data();
	
	
	function test () {
		//alert();
		//data(1);
	}
	
	
	/*setTimeout(function() {
			   
		myScroll = new IScroll('#wrapper', { click: true });
			   
			   
		setTimeout (function(){
			myScroll.refresh();
						   
		}, 500);
			   

		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	}, 500);*/
	

}

function data(){
	var classifica = "<tr><td align='center' width='100%' colspan='3'><br></td></tr>";
    var conta = 1
    
    $("#spinner1").show()
	
	$.ajax({
	 type:"GET",
	 url:"http://msop.it/tanadelletigri/satellitionline.php",
	 contentType: "application/json",
	 //data: {ID:ID},
	 timeout: 7000,
	 jsonp: 'callback',
	 crossDomain: true,
	 success:function(result){

	 
	   $.each(result, function(i,item){
	 
              if(item.Token=="1"){
                classifica = classifica + "<tr><td align='center' width='50'><font color='black' size='2'><b>"+ item.ora+"</b></td><td align='center' width='70'><font color='black' size='2'><b>"+item.data+"</b></font></td><td align='center' width='200'><font color='black' size='2'><b>"+ item.torneo+"</b></td></tr><tr><td align='center' width='100%' colspan='3'><font color='black' size='2'>"+item.note+"</font></td></tr>"
              }
              else{
                classifica = classifica + "<tr><td align='center' width='100%' colspan='3'><font color='black' size='1'>Nessun torneo al momento</font></td></tr>"
                $("#spinner1").hide()
              }
              
        conta = conta +1
	 
	   });
           
           
           $('#classifica').html(classifica);
       //$('#classifica').listview('refresh');
           
           
       $("#spinner1").hide()
           
           setTimeout (function(){
                       myScroll.refresh();
                       
                       }, 500);
	 
	 
	   },
	   error: function(){
           
           $("#spinner1").hide()
           
           navigator.notification.alert(
                                        'errore di rete, riprova in seguito',  // message
                                        alertDismissed,         // callback
                                        'Error',            // title
                                        'OK'                  // buttonName
                                        );
	 
	 
	   },
	 
	 dataType:"jsonp"});
	
    
	//alert("scroll")
    
    //<img src='images/fiches.png' width='20px'>

	/*setTimeout(function() {
	 
	 myScroll = new IScroll('#wrapper', { click: true });
	 
	 setTimeout (function(){
	 myScroll.refresh();
	 
	 }, 500);
	 
		}, 500);*/
	
	
}

$(document).on("touchstart", "#indietro", function(e){
			   
		window.location.href = "satelliti.html";
			   
});


$(document).on("tap", "#altro", function(e){
               
               $("#btnpanel").click();
               
});

function alertDismissed() {
    
    //var myTimer = setInterval(onPause3, 2000);
    
}

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

$(document).on("touchstart", "#gofacebook", function(e){
               
               var ref = window.open('https://www.facebook.com/groups/tanadelletigripoker/', '_system', 'location=no');
               
               });


$(document).on("touchstart", "#goinsta", function(e){
               
               var ref = window.open('http://www.cdsevents.it', '_system', 'location=no');
               });
