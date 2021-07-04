const Hotel = require('../models/hotel');

const hotelMethods = {
    get: async (req, res) => { // Obtener todos los artículos
        const hoteles = await Hotel.find();
        // console.log(hoteles);
        res.status(200).json(hoteles);
    },
    getById: async (req, res) => {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    },
    getByLocation: async (req, res) => {
        const {location} = req.params;
        const hoteles = await Hotel.find({"ubicacion": location});
        // console.log(hoteles);
        res.status(200).json(hoteles);
    },
    post: async (req, res) => { // Crear todos los artículos
        const { nombre,precio,  ubicacion, imagen, fechas, habitaciones, personas } = req.body;
        const newhotel= new Hotel({
            nombre, 
            ubicacion,
            precio,
            imagen, 
            fechas, 
            habitaciones,
            personas, 
        });
        const hotelSaved = await newhotel.save(); 
        res.status(201).json(hotelSaved);
    },
    updateById: async (req, res) => {

        const {id} = req.params;
        const hotelActualizado = await Hotel.findByIdAndUpdate(id, req.body, { new: true});
        res.status(201).json(hotelActualizado);
    },
    deleteById: async (req, res) => {
        const {id} = req.params;
        const hotelBorrado = await Hotel.findByIdAndRemove(id);
        res.status(201).json(hotelBorrado);
    },
    ocupado: async (req, res) => {
        const {id, fechaInicio, fechaFin} = req.params;
        const dateI = new Date(fechaInicio);
        const dateF = new Date(fechaFin);
        const nuevaFecha = dateI;
        const fechas = [];

        timeDifference = Math.abs(dateI.getTime() - dateF.getTime()) / (1000*3600*24);
        const hotel = await Hotel.findById(id);
        for(var i=0; i< timeDifference; i++) {
            fechas[i] = nuevaFecha.setDate(nuevaFecha.getDate() + 1).toString;
            if(hotel.fechas.find(e => e == fechas[i])) {
                console.log(hotel.fechas, fechas);
                res.status(404).json({response: false});
            }
        }
        res.status(201).json({response: true});        
    }
}
module.exports = hotelMethods;
