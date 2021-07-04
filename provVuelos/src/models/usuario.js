const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema ({
    username: {
        type: String
    },
    email: {
        type:String,
        unique: true
    },
    password: {
        type: String
    },
    rol: {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false
});

userSchema.methods.encryptPass = async (password) => {
    const salt=  await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

userSchema.methods.validatePass = function (password)  {
    return bcrypt.compare(password, this.password);
}
module.exports = model('user', userSchema);