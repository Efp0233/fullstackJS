import moongoose from 'mongoose';
import bcrypt from 'bcrypt';
import generarID from '../helpers/generarID.js';

const VeterinarioSchema = moongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
    password: {
        type: String,
        required: true,
        trim: true,
    },
     email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    telefono: {
        type: String,
        default: null,
        trim: true,
    },
    web: {
        type: String,
        default: null,
    },
    token: {
        type: String,
        default: generarID(),
    },
    confirmado: {
        type: Boolean,
        default: false,
    },
});
//hash password
VeterinarioSchema.pre('save', async function(next) {
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});
//comprobar password
VeterinarioSchema.methods.comprobarPassword = async function(passwordFormulario) {
    return await bcrypt.compare(passwordFormulario, this.password);
};



const Veterinario = moongoose.model('Veterinario', VeterinarioSchema);
export default Veterinario;