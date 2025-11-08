import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 2rem 5% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0f0f0f;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(100, 255, 218, 0.05) 0%, rgba(15, 15, 15, 0) 70%);
    z-index: 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PageTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #64ffda, #00bfa5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
`;

const Instruction = styled(motion.p)`
  font-size: clamp(1rem, 3vw, 1.2rem);
  font-weight: 400;
  margin-bottom: 3rem;
  color: #a0a0a0;
  line-height: 1.6;
`;

const shakeAnimation = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  10% { transform: translate(-10px, -5px) rotate(-5deg); }
  20% { transform: translate(10px, 5px) rotate(5deg); }
  30% { transform: translate(-10px, 5px) rotate(-5deg); }
  40% { transform: translate(10px, -5px) rotate(5deg); }
  50% { transform: translate(-10px, -5px) rotate(-5deg); }
  60% { transform: translate(10px, 5px) rotate(5deg); }
  70% { transform: translate(-5px, -5px) rotate(-3deg); }
  80% { transform: translate(5px, 5px) rotate(3deg); }
  90% { transform: translate(-5px, 0) rotate(-2deg); }
`;

const ShakeButton = styled(motion.button)`
  padding: 1.5rem 3rem;
  font-size: clamp(1.1rem, 3vw, 1.4rem);
  font-weight: 600;
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  border: 2px solid #64ffda;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;

  &:hover {
    background: rgba(100, 255, 218, 0.2);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &.shaking {
    animation: ${shakeAnimation} 0.5s ease-in-out;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(100, 255, 218, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:active::before {
    width: 300px;
    height: 300px;
  }
`;

const QuoteContainer = styled(motion.div)`
  margin-top: 3rem;
  padding: 2.5rem;
  background: rgba(30, 30, 30, 0.7);
  border-radius: 20px;
  border: 2px solid rgba(100, 255, 218, 0.3);
  box-shadow: 0 8px 32px rgba(100, 255, 218, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 6rem;
    color: rgba(100, 255, 218, 0.1);
    font-family: Georgia, serif;
    line-height: 1;
  }
`;

const QuoteText = styled(motion.p)`
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 500;
  color: #f0f0f0;
  line-height: 1.8;
  font-style: italic;
  position: relative;
  z-index: 1;
  margin-bottom: 1rem;
`;

const QuoteAuthor = styled(motion.p)`
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  font-weight: 400;
  color: #64ffda;
  text-align: right;
  margin-top: 1.5rem;
  position: relative;
  z-index: 1;

  &::before {
    content: '— ';
  }
`;

const FooterContainer = styled.footer`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 1.5rem 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  margin-top: auto;
`;

const AffiliationLink = styled(motion.a)`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 400;
  color: #666;
  text-decoration: none;
  transition: all 0.3s ease;
  opacity: 0.6;

  &:hover {
    color: #64ffda;
    opacity: 1;
    transform: translateY(-2px);
  }

  &::before {
    content: 'In partnership with the ';
  }
`;

const quotes = [
  {
    text: "No act of kindness, no matter how small, is ever wasted.",
    author: "Aesop"
  },
  {
    text: "Be kind, for everyone you meet is fighting a harder battle.",
    author: "Plato"
  },
  {
    text: "Kindness is a language which the deaf can hear and the blind can see.",
    author: "Mark Twain"
  },
  {
    text: "The best way to find yourself is to lose yourself in the service of others.",
    author: "Mahatma Gandhi"
  },
  {
    text: "In a world where you can be anything, be kind.",
    author: "Unknown"
  },
  {
    text: "Kindness is the sunshine in which virtue grows.",
    author: "Robert Green Ingersoll"
  },
  {
    text: "A warm smile is the universal language of kindness.",
    author: "William Arthur Ward"
  },
  {
    text: "Remember there's no such thing as a small act of kindness. Every act creates a ripple with no logical end.",
    author: "Scott Adams"
  },
  {
    text: "Kindness is like snow—it beautifies everything it covers.",
    author: "Kahlil Gibran"
  },
  {
    text: "Wherever there is a human being, there is an opportunity for a kindness.",
    author: "Lucius Annaeus Seneca"
  },
  {
    text: "Kindness in words creates confidence. Kindness in thinking creates profoundness. Kindness in giving creates love.",
    author: "Lao Tzu"
  },
  {
    text: "The simplest acts of kindness are by far more powerful than a thousand heads bowing in prayer.",
    author: "Mahatma Gandhi"
  },
  {
    text: "Your acts of kindness are iridescent wings of divine love, which linger and continue to uplift others long after your sharing.",
    author: "Rumi"
  },
  {
    text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou"
  },
  {
    text: "Kind hearts are the gardens, kind thoughts are the roots, kind words are the flowers, kind deeds are the fruits.",
    author: "Henry Wadsworth Longfellow"
  }
];

const KindnessPage = () => {
  const [currentQuote, setCurrentQuote] = useState(null);
  const shakeThreshold = 15; // Threshold for shake detection
  const buttonRef = useRef(null);
  const lastShakeTimeRef = useRef(0);

  const handleShake = useCallback(() => {
    // Trigger button shake animation
    if (buttonRef.current) {
      buttonRef.current.classList.add('shaking');
      setTimeout(() => {
        buttonRef.current?.classList.remove('shaking');
      }, 500);
    }

    // Show a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(randomQuote);
  }, []);

  // Device shake detection - improved implementation
  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let lastZ = 0;
    let lastTime = Date.now();
    let isListening = false;

    const handleDeviceMotion = (event) => {
      // Use acceleration (without gravity) if available, otherwise use accelerationIncludingGravity
      const acceleration = event.acceleration || event.accelerationIncludingGravity;
      
      if (!acceleration || (acceleration.x === null && acceleration.y === null && acceleration.z === null)) {
        return;
      }

      const currentTime = Date.now();
      const timeDifference = currentTime - lastTime;

      // Only process every 100ms to reduce computational load
      if (timeDifference > 100) {
        const currentX = acceleration.x || 0;
        const currentY = acceleration.y || 0;
        const currentZ = acceleration.z || 0;

        // Calculate change in acceleration
        const deltaX = Math.abs(currentX - lastX);
        const deltaY = Math.abs(currentY - lastY);
        const deltaZ = Math.abs(currentZ - lastZ);

        // Calculate total acceleration change
        const totalAcceleration = Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);

        // Detect shake if acceleration exceeds threshold
        if (totalAcceleration > shakeThreshold) {
          const now = Date.now();
          // Prevent too frequent shakes (at least 1 second apart)
          if (now - lastShakeTimeRef.current > 1000) {
            lastShakeTimeRef.current = now;
            handleShake();
          }
        }

        // Update last known values
        lastX = currentX;
        lastY = currentY;
        lastZ = currentZ;
        lastTime = currentTime;
      }
    };

    // Function to start listening for device motion
    const startListening = () => {
      if (isListening) return;
      
      // Request permission for device motion on iOS 13+
      if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
        DeviceMotionEvent.requestPermission()
          .then(permissionState => {
            if (permissionState === 'granted') {
              window.addEventListener('devicemotion', handleDeviceMotion, { passive: true });
              isListening = true;
            } else {
              console.log('Device motion permission denied');
            }
          })
          .catch(error => {
            console.error('Error requesting device motion permission:', error);
          });
      } else if (typeof DeviceMotionEvent !== 'undefined') {
        // For Android and other devices that don't require permission
        try {
          window.addEventListener('devicemotion', handleDeviceMotion, { passive: true });
          isListening = true;
        } catch (error) {
          console.error('Error adding device motion listener:', error);
        }
      }
    };

    // Start listening on first user interaction (required for iOS)
    const handleUserInteraction = () => {
      startListening();
      // Remove listeners after first interaction
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
    };

    // Add event listeners for user interaction
    document.addEventListener('touchstart', handleUserInteraction, { once: true });
    document.addEventListener('click', handleUserInteraction, { once: true });

    // Also try to start immediately for devices that don't require permission
    // This will work for Android and desktop browsers
    if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission !== 'function') {
      startListening();
    }

    return () => {
      window.removeEventListener('devicemotion', handleDeviceMotion);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
    };
  }, [handleShake, shakeThreshold]);

  const handleButtonClick = () => {
    // Request permission on iOS if not already granted (button click counts as user interaction)
    if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
      DeviceMotionEvent.requestPermission()
        .then(permissionState => {
          if (permissionState === 'granted') {
            // Permission granted, shake detection will work now
          }
        })
        .catch(() => {
          // Permission denied or error, but still allow button click
        });
    }
    handleShake();
  };

  return (
    <PageContainer>
      <ContentWrapper>
        <PageTitle
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Spread Kindness
        </PageTitle>
        
        <Instruction
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Shake your device or click the button to reveal a quote about kindness
          <br />
          <span style={{ fontSize: '0.85em', opacity: 0.7, display: 'block', marginTop: '0.5rem' }}>
            (Mobile: Shake your phone | Desktop: Click the button)
          </span>
        </Instruction>

        <ShakeButton
          ref={buttonRef}
          onClick={handleButtonClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Shake for Kindness
        </ShakeButton>

        <AnimatePresence mode="wait">
          {currentQuote && (
            <QuoteContainer
              key={currentQuote.text}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            >
              <QuoteText
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {currentQuote.text}
              </QuoteText>
              <QuoteAuthor
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {currentQuote.author}
              </QuoteAuthor>
            </QuoteContainer>
          )}
        </AnimatePresence>
      </ContentWrapper>
      
      <FooterContainer>
        <AffiliationLink
          href="https://gns-sadd.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ opacity: 1 }}
        >
          GNS SADD Club
        </AffiliationLink>
      </FooterContainer>
    </PageContainer>
  );
};

export default KindnessPage;
