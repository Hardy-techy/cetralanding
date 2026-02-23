import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Shield, PieChart } from 'lucide-react';

const features = [
    {
        icon: <Wallet size={32} className="accent-text" />,
        title: "Supply & Earn",
        description: "Deposit assets like mBTC, PC, WETH, and USDC to earn compounding interest instantly."
    },
    {
        icon: <PieChart size={32} className="accent-text" />,
        title: "Flexible Borrowing",
        description: "Use your assets as collateral to borrow liquidity without selling your holdings."
    },
    {
        icon: <Shield size={32} className="accent-text" />,
        title: "Automated Risk",
        description: "Programmatic liquidation engines and solvency checks ensure protocol safety 24/7."
    }
];

const Features = () => {
    return (
        <section className="container" style={{ padding: '8rem 2rem' }}>
            {/* Stats Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } }
                }}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderTop: '1px solid var(--glass-border)',
                    borderBottom: '1px solid var(--glass-border)',
                    padding: '2rem 0',
                    marginBottom: '6rem',
                    flexWrap: 'wrap',
                    gap: '2rem'
                }}>
                <Stat label="Total Value Locked" value="$63,020" />
                <Stat label="Total Supplied" value="$51,880" />
                <Stat label="Total Borrowed" value="$11,130" />
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2rem'
            }}>
                {features.map((feature, index) => (
                    <SpotlightCard key={index} feature={feature} index={index} />
                ))}
            </div>
        </section>
    );
};

const SpotlightCard = ({ feature, index }) => {
    const divRef = React.useRef(null);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = React.useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <motion.div
            ref={divRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                padding: '3rem',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Spotlight Gradient */}
            <div style={{
                pointerEvents: 'none',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(91, 104, 223, 0.15), transparent 40%)`,
                opacity: opacity,
                transition: 'opacity 0.3s',
                zIndex: 0
            }} />

            {/* Border Highlight */}
            <div style={{
                pointerEvents: 'none',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.1), transparent 40%)`,
                opacity: opacity,
                zIndex: 0,
                mixBlendMode: 'overlay'
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    background: 'rgba(59, 130, 246, 0.1)',
                    width: 'fit-content',
                    padding: '1rem',
                    borderRadius: '16px',
                    marginBottom: '1.5rem',
                    color: '#5b68df'
                }}>
                    {feature.icon}
                </div>
                <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}>{feature.title}</h3>
                    <p style={{ color: 'var(--text-grey)', lineHeight: 1.6 }}>{feature.description}</p>
                </div>
            </div>
        </motion.div>
    );
};

const Stat = ({ label, value }) => (
    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
        <div style={{ color: 'var(--text-grey)', fontSize: '0.875rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
        <div style={{ fontSize: '2.5rem', fontWeight: 500, fontFamily: 'var(--font-main)' }}>{value}</div>
    </motion.div>
);

export default Features;
