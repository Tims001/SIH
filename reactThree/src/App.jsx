import {Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {useRef} from "react";

const RotatingDeck = () => {
    const meshRef = useRef();
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01;
            meshRef.current.position.y = 2;
        }
    })
    return (
        <mesh ref={meshRef}>
            <dodecahedronGeometry args={[1,0]} />
            <meshStandardMaterial color="#f85" emmisive="#468585" />
        </mesh>
    )
}

const FlatFloor = () =>{
    const floorRef = useRef();
    useFrame(() => {
        if (floorRef.current) {
            floorRef.current.position.y = -0.5;
        }
    })
    return (
        <mesh ref={floorRef}>
            <boxGeometry args={[5,0.05,5]} />
            <meshStandardMaterial color="#468585" emmisive="#468585" />
        </mesh>
    )
}

const App = () => {
    return (
        <Canvas style={{height:'100vh', width: '100vw', display: 'flex', alignItems: 'center',
            justifyContent: 'center'}}>
            <OrbitControls enableZoom enablePan enableRotate/>
            <spotLight position={[1,5,5]} intensity={50} color={0xffffff} />
            <color attach = "background" args={['#000000']} />

            <RotatingDeck />
            <FlatFloor />
        </Canvas>
    )
}
export default App;