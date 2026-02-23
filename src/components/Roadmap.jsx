import React from 'react';
import { motion } from 'framer-motion';

const phases = [
    {
        phase: "Phase 1",
        title: "Foundation",
        items: ["APR Implementation", "Epoch 1 Deployment", "Epoch 2 Expansion"],
        desc: "Laying the groundwork with initial yield generation mechanisms and epoch-based reward structures."
    },
    {
        phase: "Phase 2",
        title: "Integration",
        items: ["Price Feed Oracles", "APY Optimization", "Health Factor Monitoring"],
        desc: "Integrating robust oracle networks for accurate real-time data and precise risk assessment tools."
    },
    {
        phase: "Phase 3",
        title: "Governance",
        items: ["Reputation-based Lending", "Borrowing Incentives", "CET Governance"],
        desc: "Empowering the community with decentralized governance and introducing reputation-based credit systems."
    },
    {
        phase: "Phase 4",
        title: "Expansion",
        items: ["Mainnet Launch", "Comprehensive Audits", "Push Chain Deployment", "MIDL Deployment"],
        desc: "Full deployment on Push Chain & MIDL Mainnets to ensure scalability, security, and mass adoption."
    }
];

const Roadmap = () => {
    return (
        <section className="container" style={{ padding: '8rem 2rem', position: 'relative' }}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ fontSize: '3rem', fontWeight: 700, fontFamily: "'Syne', sans-serif", marginBottom: '5rem', textAlign: 'center' }}
            >
                Protocol Roadmap
            </motion.h2>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    visible: { transition: { staggerChildren: 0.2 } }
                }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Default responsive
                    // Ideally we want 4 cols on large screens, simplified here via minmax
                    gap: '2rem',
                    position: 'relative'
                }}
            >
                {/* Connecting Line (Desktop) - Animated */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        top: '40px', // Align with top part of cards or timeline
                        left: '0',
                        width: '100%',
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, #5b68df, transparent)',
                        zIndex: 0,
                        transformOrigin: 'left',
                        display: 'none' // Hidden by default, enable via CSS for large screens if possible, or just keep as subtle bg
                    }}
                    className="desktop-line-animated"
                />

                {phases.map((phase, index) => (
                    <RoadmapCard key={index} data={phase} index={index} />
                ))}
            </motion.div>
        </section>
    );
};

const RoadmapCard = ({ data, index }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } }
            }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                padding: '2rem',
                borderRadius: '20px',
                position: 'relative',
                zIndex: 1,
                backdropFilter: 'blur(10px)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
            }}
        >
            <div style={{
                position: 'absolute',
                top: '-10px',
                left: '2rem',
                background: '#0a0a0f',
                padding: '0 0.5rem',
                color: '#5b68df',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                border: '1px solid #5b68df',
                borderRadius: '4px'
            }}>
                {data.phase}
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '0.5rem', marginBottom: '1rem', fontFamily: "'Syne', sans-serif" }}>{data.title}</h3>

            <ul style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                {data.items.map((item, i) => (
                    <li key={i} style={{ color: '#ccc', marginBottom: '0.5rem', lineHeight: 1.4, fontSize: '0.95rem' }}>{item}</li>
                ))}
            </ul>

            <p style={{ color: '#777', fontSize: '0.85rem', lineHeight: 1.6, borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                {data.desc}
            </p>
        </motion.div>
    );
};

export default Roadmap;
