import { OrbitControls, Html, Text,Float } from '@react-three/drei'
import { Suspense, useRef , useState} from 'react'
import { FrontSide, LinearFilter, VideoTexture, TextureLoader } from 'three'

import { Canvas } from '@react-three/fiber';

import './style.css'
export default function App()
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
          <OrbitControls maxPolarAngle = {Math.PI/3} 
        maxDistance = {20} 
        minDistance = {10} 
        makeDefault = {true} 
        
        mouseButtons-RIGHT = {false}/>
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />
       {/**  <mesh position-y={-1.5} position-z={1} rotation-x={-Math.PI*.2}  scale ={4}  >
            <planeGeometry args={[4,4]} />
            <meshBasicMaterial map={texture2} />
        </mesh>*/}
        <WarriorModel/>
        <Html
            position={[0.09,6.9,9]}
            wrapperClass='label'
            center
            distanceFactor={5}
            fontSize ={9}
        >
            Templo Mayor
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
                El Templo Mayor de Tenochtitlán, también conocido como Templo Mayor Azteca.
  {'\n'}
   Era uno de los principales templos y centros religiosos de la antigua ciudad azteca
  {'\n'}
  de Tenochtitlán, que actualmente se encuentra en el corazón de la Ciudad de México.
  {'\n'}
   
  
            </Text> 

    </Canvas>
}