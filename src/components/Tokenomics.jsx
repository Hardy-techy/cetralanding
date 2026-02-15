import React from 'react';
import { motion } from 'framer-motion';

const Tokenomics = () => {
    return (
        <section className="container" style={{ padding: '8rem 2rem', position: 'relative', overflow: 'hidden' }}>

            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(0,0,0,0) 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }}></div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>

                {/* Visuals */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        animate={{ y: [0, -20, 0] }}
                        // Continuous floating animation
                        style={{
                            width: '300px',
                            height: '300px',
                            background: 'rgba(255,255,255,0.03)',
                            borderRadius: '50%',
                            border: '1px solid rgba(255,255,255,0.1)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: '0 0 50px rgba(139, 92, 246, 0.2), inset 0 0 20px rgba(139, 92, 246, 0.1)',
                            position: 'relative'
                        }}
                    >
                        {/* Orbiting Ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                border: '1px dashed rgba(139, 92, 246, 0.3)',
                                pointerEvents: 'none'
                            }}
                        />

                        <img src="/cet.png" alt="CET Token" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', filter: 'drop-shadow(0 0 15px rgba(139, 92, 246, 0.4))' }} />
                    </motion.div>
                </div>

                {/* Content */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '3rem', fontWeight: 700, fontFamily: "'Syne', sans-serif", marginBottom: '1.5rem' }}
                    >
                        Powering the <br /> <span style={{ color: '#8B5CF6' }}>Protocol</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{ color: '#aaa', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '2.5rem' }}
                    >
                        $CET is the native utility and governance token of the Cetra ecosystem.
                        Stake to earn rewards, participate in governance, and unlock exclusive platform benefits.
                    </motion.p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                        <FeatureItem title="Governance" desc="Vote on protocol upgrades and parameter changes." delay={0.2} />
                        <FeatureItem title="Staking Rewards" desc="Earn a share of protocol revenue by staking CET." delay={0.3} />
                        <FeatureItem title="Fee Discounts" desc="Enjoy reduced borrowing fees when using CET." delay={0.4} />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeatureItem = ({ title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay }}
    >
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: 1.5 }}>{desc}</p>
    </motion.div>
);

export default Tokenomics;
