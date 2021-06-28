const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config');


function createToken(userId, secret, time) {
    return jwt.sign({id: userId}, secret, {expiresIn: time});
}

const userExport = {
    login: async (req, res) => {
        const {email, password} = req.body;
        const user      = await User.findOne({email: email})

        if (!user)      return res.status(404).send("The email doesn't exists");  // Si no existe el usuario
        const passOk    = await user.validatePass(password);                      // Valida contraseña
        if (!passOk)    return res.status(401).json({auth: false, token: null})   // Si la contraseña conincide con la del usuario
        const token     = createToken(user._id, config.secret, 60*60*24)          // Si todo va bien creamos token
        
        res.json({auth: true, token: token});                                     // Devolvemos un JSON con el token
    }, 
    register: async (req, res) => {
        const {username, email, password, rol} = req.body;  

        const user      = new User({
            username,
            email,
            password,
            rol: (!rol)? 'user': rol
        });
        
        const eTem      = await User.findOne({email: email});                     // Obtengo email de la base de datos                  
        if (eTem)       return res.status(404).send("This email already exists"); // Compruebo si el email existe
        user.password   = await user.encryptPass(user.password);                  // Cambio pass en request
        const savedUser = await user.save();                                      // Inserto el usuario a la base de datos
        const token     = createToken(savedUser._id, config.secret, 60*60*24);    // Creo token con: id, codigo secreto, y tiempo de duración
        res.status(201).json({token});                                            // Devuelvo un status 201 y el token
    },
    profile: async(req, res) => {
        const user = await User.findById(req.userId, {password: 0});              // password a 0 para que no se devuelva

        if (!user) { // si no existe el usuario  
            return res.status(404).send('No user found');
        }
        res.json(user);
    },
    logout: async (req, res) => {
        req.userId = null;
        req.headers.authorization = null;   
    }
}
module.exports = userExport;
