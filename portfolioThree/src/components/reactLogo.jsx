import {useGLTF} from "@react-three/drei";

const ReactLogo = () => {
    const {scene} = useGLTF()
    return (

        <mesh>
            <primitive/>
        </mesh>
    )
}
export default ReactLogo
