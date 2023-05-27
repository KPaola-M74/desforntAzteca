import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import generarId from '../helpers/generarId.js'

const usuarioSchema = mongoose.Schema({
    nombre:  String,
       
    password: String,
        
    email:  String,
        
});


const Usuario = mongoose.model("Usuarios", usuarioSchema);
<<<<<<< HEAD
export default Usuario;
=======
export default Usuario; 
>>>>>>> 8f76f9dd5f51a1813f9335859d71c4e559b6e61e
