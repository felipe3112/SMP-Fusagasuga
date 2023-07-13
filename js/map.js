function iniciarMap(){
    var coord = {lat: 4.3430509 ,lng: -74.3621872};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 15,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}