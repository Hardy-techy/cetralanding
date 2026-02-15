import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import CetraLogo from './CetraLogo';

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            overflow: 'hidden',
        }}>

            {/* Background Atmosphere */}
            <div style={{ position: 'absolute', top: 0, right: 0, width: '60vw', height: '100vh', background: 'radial-gradient(circle at 100% 50%, rgba(20, 20, 30, 1) 0%, rgba(3, 3, 4, 0) 100%)', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', top: '20%', right: '10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(91,104,223,0.08) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(80px)', zIndex: 0 }}></div>

            {/* Header */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', padding: '2rem 4vw', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', zIndex: 50 }}>
                <CetraLogo size={32} />
            </div>

            <div className="container" style={{ width: '100%', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 10, marginTop: '4rem' }}>

                {/* LEFT: Content & Typography */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: '#5b68df', fontWeight: 600, letterSpacing: '0.05em', fontSize: '0.9rem' }}
                    >
                        <span style={{ width: '8px', height: '8px', background: 'currentColor', borderRadius: '50%' }}></span>
                        V3 PROTOCOL LIVE
                    </motion.div>

                    <div style={{ overflow: 'hidden', marginBottom: '2rem' }}>
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: { transition: { staggerChildren: 0.1 } }
                            }}
                            style={{
                                fontSize: 'clamp(3rem, 7.5vw, 6rem)',
                                lineHeight: 0.95,
                                fontWeight: 800,
                                color: 'white',
                                fontFamily: "'Syne', sans-serif"
                            }}
                        >
                            <div style={{ overflow: 'hidden' }}>
                                <motion.div variants={{
                                    hidden: { y: '100%' },
                                    visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                }}>
                                    UNLOCK
                                </motion.div>
                            </div>
                            <div style={{ overflow: 'hidden' }}>
                                <motion.div variants={{
                                    hidden: { y: '100%' },
                                    visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                                }}>
                                    <span style={{ color: '#888' }}>LIQUIDITY.</span>
                                </motion.div>
                            </div>
                        </motion.h1>
                    </div>

                    <p style={{
                        fontSize: '1.25rem',
                        lineHeight: 1.6,
                        color: '#aaa',
                        maxWidth: '540px',
                        marginBottom: '3rem',
                        borderLeft: '2px solid rgba(255,255,255,0.1)',
                        paddingLeft: '1.5rem'
                    }}>
                        Suppy assets, borrow against them, and earn optimized yields on Push Chain.
                        Cetra allows you to leverage your <span style={{ color: 'white' }}>PC, WETH, and CET</span> holdings without selling them.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}
                    >
                        <motion.a
                            href="https://testnet.cetra.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(91,104,223,0.5)' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: 'white',
                                color: 'black',
                                padding: '1.2rem 2.5rem',
                                border: '2px solid #5b68df',
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                borderRadius: '12px',
                                textDecoration: 'none',
                                display: 'inline-block'
                            }}
                        >
                            Start Earning
                        </motion.a>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', justifyContent: 'center' }}>
                            <span style={{ fontSize: '0.8rem', color: '#666', textTransform: 'uppercase' }}>Total Value Locked</span>
                            <span style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: "'Syne', sans-serif" }}>$63,020</span>
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT: Clean Asset Stack */}
                <div style={{ position: 'relative', height: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '2rem' }}>

                    {/* The Stack */}
                    <div style={{ position: 'relative' }}>
                        <StackedCard
                            symbol="PC"
                            name="Push Chain"
                            apy="6%"
                            image="/PC.png"
                            color="#ec4899"
                            index={0}
                        />
                        <StackedCard
                            symbol="WETH"
                            name="Ethereum"
                            apy="1.25%"
                            image="/ethereum.png"
                            color="#627EEA"
                            index={1}
                        />
                        <StackedCard
                            symbol="USDC"
                            name="USD Coin"
                            apy="5%"
                            image="/usdc.png"
                            color="#2775CA"
                            index={2}
                        />
                        <StackedCard
                            symbol="CET"
                            name="Cetra Gov"
                            apy="6.6%"
                            image="/cet.png"
                            color="#8B5CF6"
                            index={3}
                            highlight
                        />
                    </div>

                    {/* Background Decorative Line */}
                    <div style={{ position: 'absolute', right: '10%', top: '10%', bottom: '10%', width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.2), transparent)' }}></div>
                </div>
            </div>
        </section>
    );
};

const StackedCard = ({ symbol, name, apy, image, color, index, highlight }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100, rotate: 10 }}
            animate={{
                opacity: 1,
                x: 0,
                rotate: 0,
                y: [0, -15, 0] // Gentle Levitation
            }}
            transition={{
                duration: 0.8,
                delay: 0.2 + (index * 0.15),
                y: {
                    repeat: Infinity,
                    duration: 4 + index, // Varied speeds
                    ease: "easeInOut"
                }
            }}
            whileHover={{
                scale: 1.05,
                x: -10,
                zIndex: 50,
                boxShadow: `0 20px 40px -10px ${color}66` // Glow on hover
            }}
            style={{
                background: highlight ? 'rgba(255,255,255,0.08)' : 'rgba(10, 10, 15, 0.6)',
                backdropFilter: 'blur(20px)',
                border: highlight ? `1px solid ${color}` : '1px solid rgba(255,255,255,0.1)',
                padding: '1.25rem 1.5rem',
                borderRadius: '16px',
                width: '100%',
                maxWidth: '380px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem',
                marginLeft: `${index * 20}px`, // Cascading effect
                cursor: 'pointer',
                boxShadow: '0 10px 30px -5px rgba(0,0,0,0.3)',
                position: 'relative',
                zIndex: 10 - index,
                transformOrigin: 'center left'
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                    width: '42px',
                    height: '42px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: symbol === 'CET' ? '2px' : '6px'
                }}>
                    <img src={image} alt={symbol} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, fontFamily: "'Syne', sans-serif" }}>{symbol}</div>
                    <div style={{ fontSize: '0.8rem', color: '#666' }}>{name}</div>
                </div>
            </div>

            <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.2rem' }}>APR</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: highlight ? color : 'white' }}>{apy}</div>
            </div>
        </motion.div>
    )
}

export default Hero;
