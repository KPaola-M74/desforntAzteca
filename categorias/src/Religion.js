import { OrbitControls, Html, Text,Float } from '@react-three/drei'
import { Suspense, useRef , useState} from 'react'
import { FrontSide, LinearFilter, VideoTexture, TextureLoader } from 'three'
import DAztecaModel from './DAzteca';
import { Canvas } from '@react-three/fiber';

import './style.css'
export default function Religion()
{
    const texture2 = new TextureLoader().load('aztecas.jpg');
    texture2.repeat.set(0.8, 1.6);
    return <Canvas
    camera={ {
            fov: 90,
            near: 0.1,
            far: 200,
            position: [ 0, 7, 10 ]
        } }>
          <OrbitControls maxPolarAngle = {Math.PI/2} 
        maxDistance = {40} 
        minDistance = {10} 
        makeDefault = {true} 
        
        mouseButtons-RIGHT = {false}/>
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />
       {/**  <mesh position-y={-1.5} position-z={1} rotation-x={-Math.PI*.2}  scale ={4}  >
            <planeGeometry args={[4,4]} />
            <meshBasicMaterial map={texture2} />
        </mesh>*/}
        <DAztecaModel/>
        <Html
            position={[0.09,6.9,9]}
            wrapperClass='label'
            center
            distanceFactor={5}
            fontSize ={9}
        >
            Dios Quetzalcoatl
        </Html>
       
        <Text
            font='./RiverStonePersonalUse-qZaE1.otf'
            fontSize={0.3}
            color= 'black'
            position-y={4.5}
            masWidth= {-1}
            textAlign = 'center'
            distanceFactor={4}
            rotation-x={-Math.PI*.2}
            >
                Es uno de los dioses más importantes de la mitología azteca.
  {'\n'}
  Su nombre se deriva de las palabras náhuatl "quetzalli" que significa "pluma preciosa" y
  {'\n'}
  "coatl" que significa "serpiente", por lo que su nombre se traduce como "Serpiente Emplumada".
  {'\n'}
  Según la mitología azteca, Quetzalcoatl fue uno de los principales dioses que participó en la creación del mundo y la humanidad. 
  
            </Text> 

    </Canvas>
}