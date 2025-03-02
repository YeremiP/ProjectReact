import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "./Maps.css";

function Maps() {
  // const position = [28.12804,-15.451524];
  return (
    <>
      <MapContainer className="locations-map-container" center={[28.12804,-15.451524]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[28.128834,-15.448951]}>
          <Popup>
            <p className='bold'>FootBambas</p> The best shoes in GC.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  )
}

export default Maps