const jwt = require('jsonwebtoken');
// const { get } = require('mongoose');
const config = require('../config');
const User = require('../models/usuario.models');
// const { login } = require('./user');

function getUserRol(rol) {
    switch(rol) {
        case 'usurio': return 0;
        case 'proveedor': return 1;
    }

    return -1;
}

const utils = {
    guard: (rol) => {
        /**
         * Retorno funcion para verificar un rol en específico con autenticación por tokens
         */
        return async (req, res, next)  => {
            const {authorization}  = req.headers;

            if (!authorization) {
                return res.status(401).json({
                    auth: false,
                    message: 'No token provided'
                })
            }
            
            const token        = authorization.replace("Bearer ", "");           // Token formalizado
            const tokenDecoded = jwt.verify(token, config.secret);               // decodificamos el token
            req.userId         = tokenDecoded.id;                                // idUsuarioSolicitud = id
            const user         = await User.findById(req.userId, {password: 0}); // password a 0 para que no se devuelva
        
            const rolNecessary = getUserRol(rol);                                // Obtenemos el valor en digito del rol necesario
            const rolUser      = getUserRol(user.rol);                           // Obtenemos el valor en digito dle rol del usuario

            if (rolUser >= rolNecessary) return next();                          // Si el rol es mayor o igual al necesario next.

            return res.status(401).json({ message: "401 Unauthorized user"});
        }
    },
    // Solo se puede utilizar si se ha verificado el rol antes con la función guard.
    verifyUserId: (type) => {
        return async (req, res, next)  => {
            var obj;
            if(type == 'Article') var obj = await Article.findById(req.params.id);
            else                  var obj = await Comment.findOne({_id: req.params._id, idArticle: req.params.idArticle});

            if (!obj) return res.status(404).json({message: `404 ${type} not found`});
            const id  = obj.idAuthor;

            if (req.userId == id)  next();
            else return res.status(401).json({message: "401 Unauthorized user"});
        };
    }, 
    verifyUrl: (condicion) => {
        return (req, res, next) => {
            correcto = false;
            const {coleccion} = req.params;
            condicion.forEach(c => {
                correcto = correcto || (coleccion == c);
            });
            (correcto)? next() : res.status(404).json({message: "404 Not found"});
        }
    }

}

module.exports = utils;