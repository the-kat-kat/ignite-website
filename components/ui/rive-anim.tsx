'use client';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import { useEffect } from 'react';

interface RiveProps {
    src: string;
    stateMachine?: string;
    inputX?: string;
    inputY?: string;
    className?: string;
}

export default function RiveAnim({
    src,
    stateMachine = "State Machine 1",
    inputX = "mouseX",
    inputY = "mouseY",
    className = "w-full aspect-square"
}: RiveProps) {

    const { rive, RiveComponent } = useRive({
        src: src,
        stateMachines: stateMachine,
        autoplay: true,
    });

    const mouseXInput = useStateMachineInput(rive, stateMachine, inputX);
    const mouseYInput = useStateMachineInput(rive, stateMachine, inputY);

    useEffect(() => {
        if (!rive || !mouseXInput || !mouseYInput) return;

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
        <div className={className}>
            <RiveComponent/>
        </div>
    );
}
