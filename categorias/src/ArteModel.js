import { useGLTF } from "@react-three/drei";


export default function ArteModel(){
    const figura = useGLTF("/figurilla_azteca.glb");
    //console.log(nodes, materials)
    return (
      

        <primitive
        object={ figura.scene }
        scale={ 8 }
        position={ [ -5.6, 5.1, 5.4 ] }
        rotation={[-Math.PI / 180 * 14, 0, 0]} // Rotación en radianes (10 grados en el eje X)
        />
      
      
    

    );
}

useGLTF.preload("/figurilla_azteca.glb");