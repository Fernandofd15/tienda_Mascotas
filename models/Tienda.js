const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const childSchema = new Schema({ 
    idCompra:{
        type: Schema.ObjectId,
        ref:'Compra',
    },
    idUsuario:{
        type: Schema.ObjectId,
        ref:'Usuario',
    },
    nmbPrecio:{
        type:Number,
    }
});
const tiendasSchema = new Schema({
strNombre:{
    type: String,
    trim:true,
    },
strDireccion:{
    type:String,
    trim:true,
},
strTelefono:{
    type:String,
    trim:true,
    
},
strUrlWeb:{
    type:String,
    trim:false,
    default: null,
},
arrAnimalitosDisponibles: [{
    idAnimalito:{
        type: Schema.ObjectId,
        ref:'Animalito',
    },
}],
aJsnCompra:[{
    idCompra:{
        type: Schema.ObjectId,
        ref:'Compra',
    },
    idUsuario:{
        type: Schema.ObjectId,
        ref:'Usuario',
    },
    nmbPrecio:{
        type:Number,
    }
}],
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

module.exports = mongoose.model('Tienda', tiendasSchema);