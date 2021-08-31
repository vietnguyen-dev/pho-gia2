import React from 'react'
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoidmlldG5ndXllbjIyIiwiYSI6ImNrNmljeTl5MDFobXAzbnA2aGJpbWNlZ28ifQ.-lgz3jfRHGla4er4nmxbuA",
});

let mapStyles = { url: "mapbox://styles/mapbox/streets-v9" };

const MapBox = () => {
    return (
      <Map
        style={mapStyles.url}
        containerStyle={{
          height: "30vh",
          width: "100vw",
        }}
        center={[-122.61550993616476, 45.39545466153778]}
        zoom={[16]}
      >
        <Marker
          style={{ width: "25px", height: "25px" }}
          coordinates={[-122.61549440153343, 45.39561252270781]}
          anchor="bottom"
        >
        <img src="https://dtc-wsuv.org/vnguyen19/pho-gia-img/mapMarker.png" alt="map point"  />
        </Marker>
      </Map>
    );
}

export default MapBox
