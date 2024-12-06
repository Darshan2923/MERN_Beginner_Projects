import { useGSAP } from '@gsap/react';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import React, { useRef, useEffect } from 'react';

const Target = (props) => {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');
    const targetRef = useRef();

    // GSAP animation
    useEffect(() => {
        if (targetRef.current) {
            gsap.to(targetRef.current.position, {
                y: targetRef.current.position.y + 0.5,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
            });
        }
    }, []);

    return (
        <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
            {/* Use <group> instead of <mesh> to avoid applying unnecessary rotation */}
            <primitive object={scene} />
        </mesh>
    );
};

export default Target;
