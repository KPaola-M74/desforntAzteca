import { useGLTF } from "@react-three/drei";


export default function CulturaModel(){
    const figura = useGLTF("/cultura.glb");
    //console.log(nodes, materials)
    return (
      

        <primitive
        object={ figura.scene }
        scale={ 16 }
        position={ [ 0.6, 1.1, 2.4 ] }
        rotation={[-Math.PI / 180 * 36, 0, 0]} // Rotación en radianes (10 grados en el eje X)
        />
      
      
    

    );
}

useGLTF.preload("/cultura.glb");