'use client';
import {useRive, useStateMachineInput } from '@rive-app/react-canvas';
import {useEffect } from 'react';

export default function EyeTracker() {
    const { rive, RiveComponent } = useRive({
        src: '/flame.riv',
        stateMachines: 'State Machine 1',
        autoplay: true,
    });

    const mouseXInput = useStateMachineInput(rive, 'State Machine 1', 'mouseX');
    const mouseYInput = useStateMachineInput(rive, 'State Machine 1', 'mouseY');

    useEffect(() => {
        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = (e.clientX / window.innerWidth) * 100;
            mouseY = (e.clientY / window.innerHeight) * 100;
        };

        const animate = () => {
            if (rive && mouseXInput && mouseYInput) {
                currentX += (mouseX - currentX) * 0.1;
                currentY += (mouseY - currentY) * 0.1;
                mouseXInput.value = currentX;
                mouseYInput.value = currentY;
            }
            requestAnimationFrame(animate);
        }

        const frameId = requestAnimationFrame(animate);
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove); cancelAnimationFrame(frameId);
        };
    }, [rive, mouseXInput, mouseYInput]);

        return (
            <div style={{ width: '400px', height: '400px' }}>
                <RiveComponent />
            </div>
        );
    }
