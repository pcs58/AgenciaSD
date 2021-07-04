// const Vehiculo = require('../models/agencia.models');
const fetch = require('node-fetch');
const https = require('https');


const url = 'https://localhost:3200/api';
const agent = new https.Agent({
    rejectUnauthorized: false,
});

const agenciaMethods = {

    getCollection: async (req, res) => {
        const {coleccion} = req.params;
        fetch(url+'/'+coleccion,  { agent }
        // {
        //                 method: 'GET',
        //                 headers: {
        //                     'Content-Type': 'application/json'
        //                     // 'Autorization': 'Bearer '+token
        //                 },
        //                 agent: agentehttps
        // }
        )
        .then(resp => resp.json())
        .then(json => res.json(json));
    },
    getCollectionByLocation: async (req, res, next) => {
        const {ubicacion, coleccion} = req.params;
        fetch(url+'/'+coleccion+'/'+ubicacion,  { agent })
        .then(resp => {
            if (resp.status == 200) return resp.json();
            else Error(resp.status);
        })
        .then(json => res.json(json))
        .catch(error => next(error.status));
    },
    getCollectionByVehiculo: async (req, res, next) => {
        const {ubicacion, coleccion, fechaEntrada, fechaSalida, plazas} = req.params;
        fetch(url+'/'+coleccion+'/'+ubicacion+'/'+fechaEntrada+'/'+fechaSalida+'/'+plazas,  { agent })
        .then(resp => {
            if (resp.status == 200) return resp.json();
            else Error(resp.status);
        })
        .then(json => res.json(json))
        .catch(error => next(error.status));
    },    
    postCollection: async (req, res) => {
        const { coleccion } = req.params;
        const nuevoElemento = req.body;
        const token = req.headers.authorization;
        const nuevaURL = url+'/'+coleccion;
        console.log(coleccion, nuevaURL);
        fetch(nuevaURL, {
                        method: 'POST',
                        body: JSON.stringify(nuevoElemento),
                        headers: {
                            'Content-Type': 'application/json',
                            'Autorization': 'Bearer '+token
                        },
                        agent: agent
        })
        .then(resp => resp.json())
        .then(json => res.json(json))
    },
    updateCollectionById: async (req, res) => {
        const { coleccion, id } = req.params;
        const nuevoElemento = req.body;
        const token = req.headers.authorization;
        const nuevaURL = url+'/'+coleccion+'/'+id;
        console.log(coleccion, nuevaURL);
        fetch(nuevaURL, {
                        method: 'PUT',
                        body: JSON.stringify(nuevoElemento),
                        headers: {
                            'Content-Type': 'application/json',
                            'Autorization': 'Bearer '+token
                        },
                        agent: agent
        })
        .then(resp => resp.json())
        .then(json => res.json(json))
    },
    deleteCollectionById: async (req, res) => {
        const { coleccion, id } = req.params;
        const token = req.headers.authorization;
        const nuevaURL = url+'/'+coleccion+'/'+id;
        console.log(coleccion, nuevaURL);
        fetch(nuevaURL, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                            'Autorization': 'Bearer '+token
                        },
                        agent: agent
        })
        .then(resp => resp.json())
        .then(json =>  {
            res.json({
                eliminado: true,
                objeto: json
            })
        
        })
    },
}

module.exports = agenciaMethods;