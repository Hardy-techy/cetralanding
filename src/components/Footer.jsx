import React from 'react';
import { motion } from 'framer-motion';
import CetraLogo from './CetraLogo';

const Footer = () => {
    return (
        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '5rem 2rem 3rem 2rem', background: 'rgba(10, 10, 15, 0.5)' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem' }}>

                {/* Brand */}
                <div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <CetraLogo size={24} />
                    </div>
                    <p style={{ color: '#666', lineHeight: 1.6, maxWidth: '280px' }}>
                        The next generation lending protocol on Push Chain. Unlock liquidity without selling your assets.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h4 style={{ fontWeight: 700, marginBottom: '1.5rem', fontFamily: "'Syne', sans-serif" }}>Protocol</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <li><FooterLink href="#">Markets</FooterLink></li>
                        <li><FooterLink href="#">Documentation</FooterLink></li>
                        <li><FooterLink href="#">Governance</FooterLink></li>
                        <li><FooterLink href="#">Security</FooterLink></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ fontWeight: 700, marginBottom: '1.5rem', fontFamily: "'Syne', sans-serif" }}>Community</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <li><FooterLink href="#">Discord</FooterLink></li>
                        <li><FooterLink href="https://x.com/Cetra_app" target="_blank" rel="noopener noreferrer">Twitter</FooterLink></li>
                        <li><FooterLink href="#">Blog</FooterLink></li>
                        <li><FooterLink href="#">Brand Kit</FooterLink></li>
                    </ul>
                </div>
            </div>

            <div style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: '#444', fontSize: '0.9rem' }}>
                &copy; {new Date().getFullYear()} Cetra Finance. All rights reserved.
            </div>
        </footer>
    );
};

const FooterLink = ({ href, children, ...props }) => (
    <motion.a
        href={href}
        {...props}
        style={{ color: '#aaa', textDecoration: 'none', display: 'inline-block' }}
        whileHover={{ color: 'white', x: 5 }}
        transition={{ duration: 0.2 }}
    >
        {children}
    </motion.a>
);

export default Footer;
