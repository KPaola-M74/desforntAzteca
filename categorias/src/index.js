import { createRoot} from "react-dom/client";
import App from "./App";
import './style.css'
import { Canvas } from "@react-three/fiber"
import Principal from "./Principal";
import Religion from "./Religion";
import Arte from "./Arte";
import Cultura from "./Cultura";
const root = createRoot(document.querySelector('#root'));

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
 <Cultura />
)