import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

import HowItWorks from './components/HowItWorks'
import Tokenomics from './components/Tokenomics'
import Roadmap from './components/Roadmap'
import FAQ from './components/FAQ'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="app-container">
      <div className="grain-overlay"></div>
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Tokenomics />
        <Roadmap />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
