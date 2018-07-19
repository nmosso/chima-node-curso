const lugar = require('./lugar/lugar.js');
const argv = require('yargs').options({
    direccion : {
        alias : 'd',
        desc: 'Direccion',
        demand: true
    }
}).argv;

let getInfo = async () => {
    try {
        let coords = await lugar.getLugarLatLng(argv.direccion);
        let temp = await lugar.getClima(coords.lat, coords.lng);
        return `La temperatura de ${argv.direccion} es : ${temp.temp}`;
    } catch(e) {
        return `No se sabe la temperarura de  ${argv.direccion}`;
    }
}

getInfo(argv.direccion)
    .then(msg => console.log(msg))
    .catch(e=>console.log(e));

/*
let resp = lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        //return resp;

    })
    .catch(e=> console.log('Error: ',e));
lugar.getClima(resp.lat,resp.lng)
    .then(resp=> {
        console.log('Temp: ',resp.temp);
    });

//console.log('Response: ',resp);
/*
lugar.getClima(resp.lat,resp.lng)
    .then(resp=> {
        console.log('Temp: ',resp.temp);
    });
*/
