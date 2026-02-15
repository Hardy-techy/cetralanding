import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="navbar"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                padding: '1.5rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 100,
                background: 'rgba(11, 14, 20, 0.8)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
            }}
        >
            <div className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <img src="/onlylogo.png" alt="Cetra Logo" style={{ height: '32px' }} />
                <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>Cetra</span>
            </div>
            <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                {['Market', 'Dashboard', 'Governance'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        style={{
                            textDecoration: 'none',
                            color: 'var(--text-grey)',
                            fontWeight: 500,
                            fontSize: '0.9rem',
                            transition: 'color 0.3s'
                        }}
                        onMouseEnter={(e) => e.target.style.color = 'white'}
                        onMouseLeave={(e) => e.target.style.color = 'var(--text-grey)'}
                    >
                        {item}
                    </a>
                ))}
                <button className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '0.6rem 1.2rem' }}>
                    Connect Wallet
                </button>
            </nav>
        </motion.header>
    );
};

export default Navbar;
