import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate asset loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode='wait'>
            {isLoading && (
                <motion.div
                    className="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: '#0B0E14',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                    >
                        <h1 style={{
                            fontFamily: 'Syne, sans-serif',
                            fontSize: '4rem',
                            fontWeight: 800,
                            color: 'white',
                            letterSpacing: '-0.02em'
                        }}>
                            CETRA
                        </h1>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            style={{
                                width: '20px',
                                height: '20px',
                                border: '2px solid rgba(255,255,255,0.2)',
                                borderTopColor: '#2E7CF6',
                                borderRadius: '50%'
                            }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
