import { createRoot} from "react-dom/client";
import App from "./App";
import './style.css'
import axios from "axios";
import { Canvas } from "@react-three/fiber"
import Principal from "./Principal";
import Religion from "./Religion";
import Arte from "./Arte";
import Cultura from "./Cultura";
import Arquitectura from "./Arquitectura";
import Economia from "./Economia";
const root = createRoot(document.querySelector('#root'));
const handleSubmit = async (e) => {
    e.preventDefault();

    // Aquí se envia el formulario al servidor

    const nombre = "hola";
    const email = "hola@gmail.com";
    const password = "1111";

    try {
        const url = "http://localhost:4000/api/usuarios/login"
        const respuesta = await axios.post(url, { email, password });
        console.log(respuesta)
    } catch (error) {
        console.log(error)
    }
};
root.render(
    <Economia/>
)