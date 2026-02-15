import React from 'react';
import { motion } from 'framer-motion';

const assets = [
    { symbol: "PC", name: "PUSH CHAIN", image: "/PC.png" },
    { symbol: "WETH", name: "WRAPPED ETHER", image: "/ethereum.png" },
    { symbol: "USDC", name: "USD COIN", image: "/usdc.png" },
    { symbol: "CET", name: "CETRA GOV", image: "/cet.png" },
    // Duplicate for smooth loop
    { symbol: "PC", name: "PUSH CHAIN", image: "/PC.png" },
    { symbol: "WETH", name: "WRAPPED ETHER", image: "/ethereum.png" },
    { symbol: "USDC", name: "USD COIN", image: "/usdc.png" },
    { symbol: "CET", name: "CETRA GOV", image: "/cet.png" },
];

const AssetMarquee = () => {
    return (
        <div style={{
            width: '100%',
            overflow: 'hidden',
            background: 'rgba(255,255,255,0.02)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            padding: '2rem 0',
            position: 'relative',
            display: 'flex'
        }}>
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                style={{ display: 'flex', gap: '6rem', whiteSpace: 'nowrap', paddingLeft: '4rem' }}
            >
                {[...assets, ...assets, ...assets].map((asset, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: 0.7 }}>
                        <div style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={asset.image} alt={asset.symbol} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>
                            {asset.symbol}
                        </span>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-grey)', letterSpacing: '0.1em' }}>
                            {asset.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default AssetMarquee;
