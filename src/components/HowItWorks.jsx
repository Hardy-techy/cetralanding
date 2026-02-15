import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight, TrendingUp, Landmark } from 'lucide-react';

const steps = [
    {
        icon: <Landmark size={32} />,
        title: "1. Supply Assets",
        description: "Deposit your PC, WETH, or USDC into Cetra's secure lending pools."
    },
    {
        icon: <ArrowLeftRight size={32} />,
        title: "2. Borrow Liquidity",
        description: "Use your supplied assets as collateral to borrow stablecoins or other assets."
    },
    {
        icon: <TrendingUp size={32} />,
        title: "3. Earn Yield",
        description: "Sit back and watch your supplied assets grow with optimized APYs."
    }
];

const HowItWorks = () => {
    return (
        <section className="container" style={{ padding: '6rem 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '3rem', fontWeight: 700, fontFamily: "'Syne', sans-serif", marginBottom: '1rem' }}
                >
                    How Cetra Works
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    style={{ color: '#aaa', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}
                >
                    Start earning or borrowing in minutes. No paperwork, just instant liquidity.
                </motion.p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '3rem',
                position: 'relative',
                zIndex: 1
            }}>
                {/* Connecting Line (Desktop) */}
                <div style={{
                    position: 'absolute',
                    top: '40px', // Align with icon center approximately
                    left: '10%',
                    right: '10%',
                    height: '2px',
                    background: 'rgba(255,255,255,0.05)',
                    zIndex: -1,
                    display: 'none', // Hide on mobile, show via media query if possible or js logic
                }} className="desktop-only-line"></div>
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            padding: '3rem 2rem',
                            borderRadius: '24px',
                            textAlign: 'center',
                            position: 'relative'
                        }}
                    >
                        <div style={{
                            background: 'rgba(91, 104, 223, 0.1)',
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 2rem auto',
                            color: '#5b68df'
                        }}>
                            {step.icon}
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>{step.title}</h3>
                        <p style={{ color: '#888', lineHeight: 1.6 }}>{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
