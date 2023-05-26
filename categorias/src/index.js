import { createRoot} from "react-dom/client";
import App from "./App";
import './style.css'
import axios from "axios";
import { Canvas } from "@react-three/fiber"
import Principal from "./Principal";
import Religion from "./Religion";
import Arte from "./Arte";
import Cultura from "./Cultura";
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
    /** 
    <Canvas 
     camera={ {
            fov: 90,
            near: 0.1,
            far: 200,
            position: [ 0, 7, 10 ]
        } }>
       <Principal></Principal><App ></App>
    </Canvas>
    */
    //<Religion />
    //<Arte />
 <button onClick={handleSubmit}> precioname</button>
)