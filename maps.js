          function init_map() {
            var myOptions = {
              zoom: 17,
              center: new google.maps.LatLng(30.5160865, 76.659899999),
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(
              document.getElementById("gmap_canvas"),
              myOptions
            );
            marker = new google.maps.Marker({
              map: map,
              animation: google.maps.Animation.BOUNCE,
              position: new google.maps.LatLng(30.5160865, 76.659899999)
            });
            infowindow = new google.maps.InfoWindow({
              content: "<strong>Chitkara University</strong><br>Chandigarh-Patiala National Highway (NH- 64), Village, Jansla, Rajpura, Punjab 140401<br> Punjab<br>"
            });
            google.maps.event.addListener(marker, "click", function () {
              infowindow.open(map, marker);
            });
            infowindow.open(map, marker);
          }
          google.maps.event.addDomListener(window, "load", init_map);
        