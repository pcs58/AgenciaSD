const Hotel = require('../models/hotel');

const hotelMethods = {
    create: async (req, res) => { // Crear todos los artículos
        const { title, text, idAuthor, imgUrl } = req.body;
        
        // nuevo articulo, por defecto se crea sin commentarios
        const newhotel= new Hotel({
            title,
            text,
            idAuthor: req.userId,
            imgUrl
        });
        console.log(req);

        const hotelSaved = await newhotel.save(); // se guarda el artículo en la base de datos
        res.status(201).json(hotelSaved); // se ha creado un nuevo recurso
    },
    get: async (req, res) => { // Obtener todos los artículos
        const hotel = await hotel.find();
        res.status(200).json(hotel);
    },
    getById: async (req, res) => { // Obtener un artículo mediante una ID
        const hotel = await hotel.findById(req.params.id);
        res.status(200).json(hotel);
    },
    updateById: async (req, res) => {
        const hotel = await hotel.findOneAndUpdate({_id: req.params.id}, req.body,{ new:true });
        res.status(200).json(hotel);  
    },
    deleteById: async (req, res) => {
        const hotel = await hotel.findOneAndDelete(req.params.id);
        res.status(204).json();
    }
}
module.exports = hotelMethods;
