function update() {
  fetch("/data.json")
    .then((response) => response.json())
    .then((rsp) => {
      //console.log(rsp.data);
      rsp.data.forEach((element) => {
         // country = element.country;
         latitude = element.latitude;
         longitude = element.longitude;

        cases = element.infected;
        if(cases > 800){
            color = `rgb(0,0,0)`;
        }
        else{
            color = `rgb(${255-0.2*cases},0,0)`;
        }

        //mark ont the map
        new mapboxgl.Marker({
          draggable: false,
          color: color
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    });
}

update();
