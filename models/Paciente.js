import moongoose from 'mongoose';

const pacienteSchema = new moongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    propietario: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    fecha: {
        type: Date,
        required: true,
        default: Date.now(),
        
    },
    sintomas: {
        type: String,
        required: true,
    },
    veterinario: {
        type: moongoose.Schema.Types.ObjectId,
        ref: 'Veterinario', // Referencia al modelo Veterinario
    },
},{
    timestamps: true,
});

const Paciente = moongoose.model('Paciente', pacienteSchema);

export default Paciente;