 $(document).ready( function() {
     
     
     $("#dayselect ul li").on("click", function(event){
         var day = $(this).text();
         //alert($(this).text());
         if(day == "All Days")
         {
             day = "";
         }    
         myTable.fnFilter(day,2);
         $('#dayinput').val(day); 
         event.preventDefault();
     });
     
     $("#areaselect ul li").on("click", function(event){
         var area = $(this).text();
         //alert($(this).text());
         if(area == "All Areas")
         {
             area = "";
             
         }
         myTable.fnFilter(area,6);
         $('#areainput').val(area);
         event.preventDefault();
     }); 
     
     $("#busselect ul li").on("click", function(event){
         var bus = $(this).text();
         //alert($(this).text());
         if(bus == "All")
         {
             bus = "";
         }    
         myTable.fnFilter(bus,9);
         $('#businput').val(bus); 
         event.preventDefault();
         
     });   
     
     $("#typeselect ul li").on("click", function(event){
         var type = $(this).attr('id')
         var fielddata = $(this).text();
         //alert(type)
         //alert($(this).text());
         if(type == "All")
         {
             type = "";
         }    
         myTable.fnFilter(type,15); 
         $('#typeinput').val(fielddata); 
         event.preventDefault();
         
     });         
     
     $("#reset").on("click", function(event){
         var filter = "";
         myTable.fnFilter(filter,2); // reset day
         myTable.fnFilter(filter,6); // reset area
         myTable.fnFilter(filter,15); // reset type
         myTable.fnFilter(filter,9); // reset bus
         //myTable.fnFilterClear();
         $('#areainput').val(filter); 
         $('#dayinput').val(filter);
         $('#typeinput').val(filter);
         $('#businput').val(filter);
         event.preventDefault();
         
     });      
   
   
     var myTable = $('#mytable').dataTable({
                                    "sDom": "<'row-fluid'<'span6'Tl><f>r>t<'row-fluid'<'span6'i><p>>",
                                    //"sDom": "<'row-fluid'<'span6'T><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
                                    "iDisplayLength": 10,
                                    "aaSorting": [[13, 'asc'],[14, 'asc']],
                                    "aoColumns": [
                                         {"bVisible":    false},
                                         null,
                                         { "aDataSort": [ 13, 14 ] },
                                         { "aDataSort": [ 14 ] },
                                         null,
                                         null,
                                         null,
                                         null,
                                         { "bSortable": false },
                                         { "bSortable": false },
                                         {"bVisible":    false},
                                         {"bVisible":    false},
                                         {"bVisible":    false},
                                         {"bVisible":    false},
                                         {"bVisible":    false},
                                         {"bVisible":    false}
                                        
                                     ],
                                     "oTableTools": {
                                                   "aButtons": [ ],
                                                    "sRowSelect": "single"
                                        },
                                            
                                    
                                    "sAjaxSource": "meetings/meetingcontroller/getMeetingTable"
                                    
                }); //end Meeting Details Table

 
     $('#mytable tbody tr').live('click',function (event) { //why do we have to use live switched to .on and doesn't work?
         var aData = myTable.fnGetData( this );
         //alert(aData[0]); // assuming the id is in the first column
         var modalMeetingName   = aData[1];
         var modalDay           = aData[2];
         var modalTime          = aData[3];
         var modalAddress       = aData[5];
         var modalArea          = aData[6];
         var modalZip           = aData[7];
         var modalSymbol        = aData[8];
         var modalLatitude      = aData[11];
         var modalLongitude     = aData[12];
        
         //var mapAddress = modalAddress.split(" ");
         //alert(mapAddress);
         $("#modalDayTime").text(modalDay +" "+modalTime);
         $("#modalCustomHeading").text(modalMeetingName);
         $("#modalMeetingNameAddAreaZip").html(modalAddress+"<br>"+modalArea+"<br/>"+modalZip+"<br/>");
         $("#modalMeetingTypeSymbol").html(" <strong>Meeting Type</strong><br> <a href=\"#mtmodal\" data-toggle=\"modal\">"+modalSymbol+"</a>");
         
          var myLatlng   = new google.maps.LatLng(modalLatitude, modalLongitude);

         $('#responsive').on('shown', function () {
             //alert("onShowModel");
                renderMap(myLatlng);
                //alert(modalAddress+"hey");
                //$("#directionsMessage").html("<a href='http://maps.google.com/maps?q=" + encodeURIComponent(modalAddress) + "' target='_blank'>Get Directions Here</a>");
                
                $("#directionsMessage").html("<a href=http://maps.google.com/maps?daddr="+encodeURIComponent(modalAddress)+ " target='_blank'>"+"Get Directions to Here</a>");
                
                //google.maps.event.trigger(map, "resize");
         });
 
         //drop the modal window
         
         $("#responsive").modal({
                //backdrop: false
         });
         

         
     });

     


    $('.showmap tbody tr').on("click", function(event){
            //alert($(this).attr('recordid'));
            var id = $(this).attr('recordid');
            $.ajax({
                    url: "meetings/meetingcontroller/getMeeting",
                    dataType: "json",
                    type: "post",
                    crossDomain: true,
                    data: {
                        i: id
                    },
                    success: function(data){
                         //alert(data);
                         var title = data[0].MeetingName;
                         //alert(title);
                         var modalMeetingName   = data[0].MeetingName;
                         var modalDay           = data[0].Day;
                         var modalTime          = data[0].Time;
                         var modalAddress       = data[0].Address;
                         var modalArea          = data[0].Area;
                         var modalZip           = data[0].Zip;
                         var modalSymbol        = data[0].Symbol;
                         var modalLatitude      = data[0].latitude;
                         var modalLongitude     = data[0].Longitude;
                         //alert(modalLongitude);

                         //var mapAddress = modalAddress.split(" ");
                         //alert(mapAddress);
                         $("#modalDayTime").text(modalDay +" "+modalTime);
                         $("#modalCustomHeading").text(modalMeetingName);
                         $("#modalMeetingNameAddAreaZip").html(modalAddress+"<br>"+modalArea+"<br/>"+modalZip+"<br/>");

                         $("#modalMeetingTypeSymbol").html(" <strong>Meeting Type</strong><br> <a href=\"#mtmodal\" data-toggle=\"modal\">"+modalSymbol+"</a>");
                          var myLatlng   = new google.maps.LatLng(modalLatitude, modalLongitude);

                         $('#responsive').on('shown', function () {
                             //alert("onShowModel");
                                renderMap(myLatlng);
                                //alert(modalAddress+"hey");
                                //$("#directionsMessage").html("<a href='http://maps.google.com/maps?q=" + encodeURIComponent(modalAddress) + "' target='_blank'>Get Directions Here</a>");

                                $("#directionsMessage").html("<a href=http://maps.google.com/maps?daddr="+encodeURIComponent(modalAddress)+ " target='_blank'>"+"Get Directions to Here</a>");

                                //google.maps.event.trigger(map, "resize");
                         });

                         //drop the modal window

                         $("#responsive").modal({
                                //backdrop: false
                         });

                    }
                });
            return false;
    });
    
    function renderMap(myLatlng){
         var marker;
         //var geocoder  = new google.maps.Geocoder();
         var point = myLatlng;
         var mapOptions = {
                    zoom: 13,
                    center: point,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
             
         };
         var map    = new google.maps.Map($("#customMap").get(0),mapOptions);
         //var address = modalAddress;
         if(marker)
         {
             marker.setMap(null);
             alert("insideMarker"+marker);
         } 
        marker = new google.maps.Marker({ position: point, map: map, icon: 'http://www.google.com/intl/en_us/mapfiles/ms/icons/red-dot.png' });
       
        
         
        
     };

 });