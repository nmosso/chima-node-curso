const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodedUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyCj4k3V6SeuJAXVKgELbu6KVoDwioCiefk`);

    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error(`NO hay resultados para ${direccion}`);
    }

    let location = resp.data.results[0];
    let address = location.formatted_address;
    let {lat,lng} = location.geometry.location;
    return {
        direccion:address,
        lat,
        lng
    };
}
const getClima = async(lat, lng) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=29d99edbef37d36066b4a2e8aa125112`;
    //console.log('URL: ', url);
    let resp = await axios.get(url);

   // if (resp.data.status === "ZERO_RESULTS") {
   //     throw new Error(`NO hay resultados para ${direccion}`);
   // }

    return resp.data.main;

}


module.exports = {
    getLugarLatLng, getClima
};

