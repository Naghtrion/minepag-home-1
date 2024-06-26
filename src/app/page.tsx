'use client';

import { Box } from '@chakra-ui/react';
import FeatureList from '../components/FeatureList';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import Pricing from '../components/Pricing';

export default function Home() {
  return (
    <>
      <Box bgImage="radial-gradient(102.29% 81.78% at 50% 30%, var(--chakra-colors-gray-50) 5%, var(--chakra-colors-gray-200) 100%)">
        <NavBar />
        <Hero />
      </Box>

      <Features />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ height: '15rem', width: '100%' }}
      >
        <path fill="#F9FAFB" d="M0,256L1440,32L1440,0L0,0Z"></path>
      </svg>

      <FeatureList />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 900 450"
        preserveAspectRatio="none"
        style={{ height: '15rem', width: '100%' }}
      >
        <rect x="0" y="0" width="900" height="450" fill="#FFF"></rect>
        <path
          d="M0 179L37.5 187.3C75 195.7 150 212.3 225 221.2C300 230 375 231 450 218.3C525 205.7 600 179.3 675 168C750 156.7 825 160.3 862.5 162.2L900 164L900 451L862.5 451C825 451 750 451 675 451C600 451 525 451 450 451C375 451 300 451 225 451C150 451 75 451 37.5 451L0 451Z"
          fill="#EDF2F7"
          strokeLinecap="round"
          strokeLinejoin="miter"
        ></path>
      </svg>

      <Pricing />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 900 450"
        preserveAspectRatio="none"
        style={{ height: '15rem', width: '100%', marginTop: '-4rem' }}
      >
        <rect x="0" y="0" width="900" height="450" fill="white"></rect>
        <path
          d="M0 179L37.5 187.3C75 195.7 150 212.3 225 221.2C300 230 375 231 450 218.3C525 205.7 600 179.3 675 168C750 156.7 825 160.3 862.5 162.2L900 164L900 451L862.5 451C825 451 750 451 675 451C600 451 525 451 450 451C375 451 300 451 225 451C150 451 75 451 37.5 451L0 451Z"
          fill="#F7FAFC"
          strokeLinecap="round"
          strokeLinejoin="miter"
        ></path>
      </svg>

      <Footer />
    </>
  );
}
