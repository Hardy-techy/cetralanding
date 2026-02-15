import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "What makes Cetra different?",
        answer: "Cetra is built natively on Push Chain, offering sub-second transaction speeds and cross-chain compatibility, ensuring you get the best rates with minimal latency."
    },
    {
        question: "Is my collateral safe?",
        answer: "Yes. Cetra uses over-collateralized lending pools and real-time risk engines to maintain solvency. Smart contracts are audited to ensure maximum security."
    },
    {
        question: "Are the rates fixed or variable?",
        answer: "Cetra offers a Fixed APR model. This ensures predictable yields for suppliers and stable interest rates for borrowers, avoiding the volatility of dynamic rates."
    },
    {
        question: "Can I withdraw my assets anytime?",
        answer: "Absolutely. There are no lock-up periods. You can supply and withdraw your assets at any time, provided there is sufficient liquidity in the pool."
    }
];

const FAQ = () => {
    return (
        <section className="container" style={{ padding: '6rem 2rem 10rem 2rem' }}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ fontSize: '3rem', fontWeight: 700, fontFamily: "'Syne', sans-serif", marginBottom: '4rem', textAlign: 'center' }}
            >
                Everything you need to know
            </motion.h2>

            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {faqs.map((item, index) => (
                    <AccordionItem key={index} question={item.question} answer={item.answer} index={index} />
                ))}
            </div>
        </section>
    );
};

const AccordionItem = ({ question, answer, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            style={{
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                overflow: 'hidden'
            }}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    padding: '1.5rem 0',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    color: 'white',
                    fontSize: '1.25rem',
                    textAlign: 'left',
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 600
                }}
            >
                {question}
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown color="#5b68df" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <p style={{ color: '#aaa', paddingBottom: '1.5rem', lineHeight: 1.6 }}>
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default FAQ;
