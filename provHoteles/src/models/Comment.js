const {Schema, model} = require('mongoose');

// structure
const commentSchema = new Schema ({
    idArticle: String,
    idAuthor: String,
    title: String,
    text: String,
    rating: Number
}, {
    timestamps: true,
    versionKey: false
});
// methods


// export model
module.exports = model('comment',commentSchema);