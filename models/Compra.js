const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comprasSchema = new Schema({
    
    idUsuario:{
        type: Schema.ObjectId,
        ref:'Usuario',
    },
    idAnimalito:{
        type: Schema.ObjectId,
        ref:'Animalito',
    },
    dteFechaCompra:{
        type: Date,
        default:Date.now,
    },
    nmbPrecio:{
        type:Number,
    },
    blnActivo:{
        type: Boolean,
        default:true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    uptdatedAt:{
        type: Date,
        default: Date.now,
    },
    
});

module.exports = mongoose.model('Compra', comprasSchema);