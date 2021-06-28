const Comments = require('../models/Comment');

const commentsMethods = {
    get: async (req, res) => {
        const comments = await Comments.find({'idArticle': req.params.idArticle});
        console.log(comments);
        res.status(200).json(comments);
    },
    create: async (req, res) => {
        const { idArticle, idAuthor, title, text, rating } = req.body;
        
        const newComment= new Comments({
            idArticle: req.params.idArticle,
            idAuthor: req.userId,
            title,
            text, 
            rating
        });
    
        const commentSaved = await newComment.save();
        res.status(201).json(commentSaved); 
    },
    updateById: async (req, res) => {
        const comment = await Comments.find({'idArticle': req.params.idArticle}).findOneAndUpdate({'_id': String(req.params._id)}, req.body,{new: true});
        res.status(200).json(comment);     
    },
    deleteById: async (req, res) => {
        const comment = await Comments.find({'idArticle': req.params.idArticle}).findOneAndRemove({'_id': String(req.params._id)});
        res.status(204).json();
    }    
}
module.exports = commentsMethods;



    