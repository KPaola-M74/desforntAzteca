import { OrbitControls, Html, Text,Float } from '@react-three/drei'
import { Suspense, useRef , useState} from 'react'
import { FrontSide, LinearFilter, VideoTexture, TextureLoader } from 'three'
import CulturaModel from './CulturaModal';
import { Canvas } from '@react-three/fiber';

import './style.css'
export default function Cultura()
{
    
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
        enableRotate = {false}
        
        mouseButtons-RIGHT = {false}/>
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />
       {/**  <mesh position-y={-1.5} position-z={1} rotation-x={-Math.PI*.2}  scale ={4}  >
            <planeGeometry args={[4,4]} />
            <meshBasicMaterial map={texture2} />
        </mesh>*/}
        <CulturaModel/>
        <Html
            position={[0.09,7.0,9]}
            wrapperClass='label'
            center
            distanceFactor={5}
            fontSize ={9}
        >
            Agricultura
        </Html>
       
        <Text
            font='./RiverStonePersonalUse-qZaE1.otf'
            fontSize={0.3}
            color= 'black'
            position-y={5.5}
            masWidth= {-1}
            textAlign = 'center'
            distanceFactor={4}
            rotation-x={-Math.PI*.2}
            >
                La agricultura azteca, también conocida como agricultura mesoamericana, fue  
  {'\n'}
  una práctica fundamental en la sociedad azteca. Los aztecas desarrollaron  
  {'\n'}
  sistemas agrícolas sofisticados que les permitieron cultivar una amplia variedad
  {'\n'}
  de alimentos para alimentar a su población en constante crecimiento.
  
            </Text> 

    </Canvas>
}