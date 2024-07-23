import { Platform, StyleSheet, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE, Region } from "react-native-maps";
import { GetMapsData } from "../utils/request_utils";
import { useEffect, useState } from "react";
// import {GOOGLE_MAPS_API_KEY} from '@env'


const apiKey = process.env.GOOGLE_MAPS_API_KEY_DEV;

    

const INITIAL_REGION:Region = {
    latitude: 45.8992,
    longitude: 6.1294,
    latitudeDelta: 0.05, //zoom level
    longitudeDelta: 0.05,
}

const HomeScreen:React.FC = () => {

    console.log("apiKey = ",apiKey)

    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        fetchData();
      }, []);

    const fetchData = async () => {
        const url:string ="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=45.8992,6.1294&radius=1500&type=cafe"
        const data = await GetMapsData(url);
        // console.log(data);

        const places = data.results.map((place:any,index:number) => ({
            id: index,
            name: place.name,
            coordinate: {
              latitude: place.geometry.location.lat,
              longitude: place.geometry.location.lng,
            },
            address: place.vicinity,
        }));
        console.log(places)
        setMarkers(places);

    }
    
    // console.log(GOOGLE_MAPS_API_KEY) 
    return (
    <View style={styles.container}>
        {/* <Text style={styles.text}>HomeScreen</Text> */}
        <MapView 
            style={styles.map}
            provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
            initialRegion={INITIAL_REGION}
            showsUserLocation={true}
            showsMyLocationButton={true}
            googleMapId="db8097c6f15ab417"
            
            >
        {markers.map((marker:any) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.name}
            description={marker.address}
            />
        ))}
        </MapView>
    </View>)
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'red',
        fontSize: 30,
    },
    map: {
        width: '100%',
        height: '100%',
      },
})

export default HomeScreen;