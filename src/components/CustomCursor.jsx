import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [visible, setVisible] = useState(false);

    const cursorSize = hovered ? 60 : 20;

    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    };

    // Smoother, tighter spring for consistent tracking
    const smoothOptions = { damping: 25, stiffness: 400, mass: 0.2 };
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    };

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
        // Check if mouse is within window bounds to handle visibility
        if (clientX >= 0 && clientY >= 0 && clientX <= window.innerWidth && clientY <= window.innerHeight) {
            setVisible(true);
        } else {
            setVisible(false);
        }

        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);
    };

    const manageMouseOver = (e) => {
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button') || e.target.closest('.pointer-item')) {
            setHovered(true);
        } else {
            setHovered(false);
        }
    }

    const manageMouseDown = () => setClicked(true);
    const manageMouseUp = () => setClicked(false);

    useEffect(() => {
        window.addEventListener('mousemove', manageMouseMove);
        window.addEventListener('mouseover', manageMouseOver);
        window.addEventListener('mousedown', manageMouseDown);
        window.addEventListener('mouseup', manageMouseUp);
        return () => {
            window.removeEventListener('mousemove', manageMouseMove);
            window.removeEventListener('mouseover', manageMouseOver);
            window.removeEventListener('mousedown', manageMouseDown);
            window.removeEventListener('mouseup', manageMouseUp);
        };
    }, [cursorSize]);

    return (
        <>
            {/* Main Dot */}
            <motion.div
                style={{
                    position: 'fixed',
                    left: smoothMouse.x,
                    top: smoothMouse.y,
                    width: cursorSize,
                    height: cursorSize,
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'exclusion', // Better visibility on dark/light
                    opacity: visible ? 1 : 0
                }}
                animate={{
                    width: cursorSize,
                    height: cursorSize,
                    scale: clicked ? 0.8 : 1,
                    x: hovered ? -20 : 0,
                    y: hovered ? -20 : 0,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
            />
            {/* Trailing Ring (Optional, for "High End" feel) */}
            <motion.div
                style={{
                    position: 'fixed',
                    left: smoothMouse.x,
                    top: smoothMouse.y,
                    width: cursorSize,
                    height: cursorSize,
                    borderRadius: '50%',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'exclusion',
                    opacity: visible ? 1 : 0
                }}
                animate={{
                    scale: hovered ? 1.2 : 1,
                    x: hovered ? -20 : 0,
                    y: hovered ? -20 : 0,
                }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
            />
        </>
    );
};

export default CustomCursor;
