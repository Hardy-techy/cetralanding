import React from 'react';
import { motion } from 'framer-motion';

const SupportedChains = () => {
    return (
        <section style={{
            padding: '4rem 2rem',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            background: 'linear-gradient(180deg, rgba(20,20,30,0) 0%, rgba(91,104,223,0.03) 50%, rgba(20,20,30,0) 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                    color: '#888',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontSize: '0.9rem',
                    marginBottom: '2rem',
                    fontWeight: 600
                }}
            >
                Secured By & Deployed On
            </motion.p>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4rem',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                {/* Push Chain */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        background: 'rgba(255,255,255,0.02)',
                        padding: '1rem 2.5rem',
                        borderRadius: '24px',
                        border: '1px solid rgba(255,255,255,0.05)',
                        cursor: 'default',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <img src="/PC.png" alt="Push Chain" style={{ height: '40px', width: 'auto' }} />
                    <span style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: "'Syne', sans-serif" }}>Push Chain</span>
                </motion.div>

                {/* MIDL L2 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        background: 'rgba(255,255,255,0.02)',
                        padding: '1rem 2.5rem',
                        borderRadius: '24px',
                        border: '1px solid rgba(255,255,255,0.05)',
                        cursor: 'default',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    <img src="/midllogo.jpg" alt="MIDL" style={{ height: '40px', width: '40px', borderRadius: '50%' }} />
                    <span style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: "'Syne', sans-serif" }}>MIDL</span>
                </motion.div>
            </div>
        </section>
    );
};

export default SupportedChains;
