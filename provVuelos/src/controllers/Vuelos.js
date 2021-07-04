const Vuelo = require('../models/Vuelo');

const vuelosMethod = {
    get: async (req, res) => { // Obtener todos los artículos
        const vuelos = await Vuelo.find();
        // console.log(vuelos);
        res.status(200).json(vuelos);
    },
    getById: async (req, res) => {
        const Vuelo = await Vuelo.findById(req.params.id);
        res.status(200).json(Vuelo);
    },
    getByLocation: async (req, res) => {
        const {location} = req.params;
        const vuelos = await Vuelo.find({"ubicacion": location});
        // console.log(vuelos);
        res.status(200).json(vuelos);
    },
    post: async (req, res) => { // Crear todos los artículos
        const { nombre,precio,  ubicacion, imagen, fechas, habitaciones, personas } = req.body;
        const newVuelo= new Vuelo({
            nombre, 
            ubicacion,
            precio,
            imagen, 
            fechas, 
            habitaciones,
            personas, 
        });
        const VueloSaved = await newVuelo.save(); 
        res.status(201).json(VueloSaved);
    },
    updateById: async (req, res) => {

        const {id} = req.params;
        const VueloActualizado = await Vuelo.findByIdAndUpdate(id, req.body, { new: true});
        res.status(201).json(VueloActualizado);
    },
    deleteById: async (req, res) => {
        const {id} = req.params;
        const VueloBorrado = await Vuelo.findByIdAndRemove(id);
        res.status(201).json(VueloBorrado);
    },
    ocupado: async (req, res) => {
        const {id, fechaInicio, fechaFin} = req.params;
        const dateI = new Date(fechaInicio);
        const dateF = new Date(fechaFin);
        const nuevaFecha = dateI;
        const fechas = [];

        timeDifference = Math.abs(dateI.getTime() - dateF.getTime()) / (1000*3600*24);
        const Vuelo = await Vuelo.findById(id);
        for(var i=0; i< timeDifference; i++) {
            fechas[i] = nuevaFecha.setDate(nuevaFecha.getDate() + 1).toString;
            if(Vuelo.fechas.find(e => e == fechas[i])) {
                console.log(Vuelo.fechas, fechas);
                res.status(404).json({response: false});
            }
        }
        res.status(201).json({response: true});        
    }
}
module.exports = vuelosMethod;
