
import { useGLTF } from "@react-three/drei";

export default function DAztecaModel(){
    const warrior = useGLTF("/Dios-Azteca.glb");
    //console.log(nodes, materials)
    return (
      

        <primitive
        object={ warrior.scene }
        scale={ 8 }
        position={ [ -2, 3.9, 8.4 ] }
        rotation={[-Math.PI / 180 * 34, 0, 0]} // Rotación en radianes (10 grados en el eje X)
        />
      
      
    

    );
}

useGLTF.preload("/Dios-Azteca.glb");