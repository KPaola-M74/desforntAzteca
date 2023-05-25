import { useGLTF } from "@react-three/drei";


export default function WarriorModel(){
    const warrior = useGLTF("/templo.glb");
    //console.log(nodes, materials)
    return (
      

        <primitive
        object={ warrior.scene }
        scale={ 4 }
        position={ [ 0.5, 4.9, 7.4 ] }
        rotation={[-Math.PI / 180 * 34, 0, 0]} // Rotación en radianes (10 grados en el eje X)
        />
      
      
    

    );
}

useGLTF.preload("/templo.glb");