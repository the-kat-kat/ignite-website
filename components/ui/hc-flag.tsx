'use client';
import { useRive, useStateMachineInput, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import Link from 'next/link';


export default function HCFlag() {
    const { rive, RiveComponent } = useRive({
        src: '/hc-flag.riv',
        stateMachines: 'State Machine 1',
        autoplay: true,
        layout: new Layout({
            fit: Fit.Contain,
            alignment: Alignment.TopCenter,
        }),
        onLoad: () => {
            rive?.resizeDrawingSurfaceToCanvas();
        },
    });

    const isHoveredInput = useStateMachineInput(rive, 'State Machine 1', 'isHovered');

    return (
        <Link href="https://www.hackclub.com" target="_blank" rel="noopener noreferrer">
            <div
                className="h-70 w-70 top-0 pointer-events-auto cursor-pointer relative z-50"
                onMouseEnter={() => {
                    // eslint-disable-next-line react-hooks/immutability
                    if (isHoveredInput) isHoveredInput.value = true;
                }}
                onMouseLeave={() => {
                    // eslint-disable-next-line react-hooks/immutability
                    if (isHoveredInput) isHoveredInput.value = false;
                }}
            >
                <RiveComponent />
            </div>
        </Link>
    );
}