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

const SADDLogoImage = styled(motion.img)`
  width: clamp(120px, 30vw, 200px);
  height: auto;
  margin: 1rem auto 2rem;
  max-width: 100%;
  object-fit: contain;
  display: block;
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
  [
    {
      text: "This too shall pass.",
      author: "Persian proverb"
    },
    {
      text: "In the middle of winter, I found there was, within me, an invincible summer.",
      author: "Albert Camus"
    },
    {
      text: "No rain, no flowers.",
      author: "SADD"
    },
    {
      text: "There is a crack in everything; that’s how the light gets in.",
      author: "Leonard Cohen"
    },
    {
      text: "You are stronger than you know and loved more than you realize.",
      author: "SADD"
    },
    {
      text: "Even the darkest night will end and the sun will rise.",
      author: "Victor Hugo"
    },
    {
      text: "Be gentle with yourself. You’re doing the best you can.",
      author: "SADD"
    },
    {
      text: "Sometimes when things are falling apart, they may actually be falling into place.",
      author: "SADD"
    },
    {
      text: "The wound is the place where the light enters you.",
      author: "Rumi"
    },
    {
      text: "You’ve survived 100% of your bad days so far.",
      author: "SADD"
    },
    {
      text: "Just because you’re struggling doesn’t mean you’re failing.",
      author: "SADD"
    },
    {
      text: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
      author: "J.K. Rowling"
    },
    {
      text: "When you can’t look on the bright side, I will sit with you in the dark.",
      author: "Alice in Wonderland (paraphrased)"
    },
    {
      text: "You matter. You really, really matter.",
      author: "SADD"
    },
    {
      text: "Your story isn’t over yet.",
      author: "SADD"
    },
    {
      text: "Sometimes the smallest step in the right direction becomes the biggest step of your life.",
      author: "Naeem Callaway"
    },
    {
      text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      author: "Ralph Waldo Emerson"
    },
    {
      text: "Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, ‘I will try again tomorrow.’",
      author: "Mary Anne Radmacher"
    },
    {
      text: "If you’re going through hell, keep going.",
      author: "Winston Churchill"
    },
    {
      text: "Difficult roads often lead to beautiful destinations.",
      author: "SADD"
    },
    {
      text: "Breathe. You’re going to be okay. You’ve made it this far.",
      author: "SADD"
    },
    {
      text: "Your future self is already thanking you for not giving up today.",
      author: "SADD"
    },
    {
      text: "You have no idea how far you can go — don’t stop before you find out.",
      author: "SADD"
    },
    {
      text: "One day you will say: ‘This is why I kept going.’",
      author: "SADD"
    },
    {
      text: "If you can’t see the light yet, become it.",
      author: "SADD"
    },
    {
      text: "You owe it to yourself to see what happens if you don’t quit.",
      author: "SADD"
    },
    {
      text: "Consistency will beat talent when talent stops trying.",
      author: "SADD"
    },
    {
      text: "Small steps are still steps — success is built in centimeters, not miles.",
      author: "SADD"
    },
    {
      text: "Your only real competition is who you were yesterday.",
      author: "SADD"
    },
    {
      text: "Direction is more important than speed — keep moving.",
      author: "SADD"
    },
    {
      text: "Discipline is choosing what you want most over what you want now.",
      author: "SADD"
    },
    {
      text: "You are not ‘too late.’ You are exactly on time for your story.",
      author: "SADD"
    },
    {
      text: "Stop waiting for perfect — progress comes from action, not permission.",
      author: "SADD"
    },
    {
      text: "You’ve survived every challenge so far; you’re already powerful.",
      author: "SADD"
    },
    {
      text: "Your dreams are valid even if they scare others.",
      author: "SADD"
    },
    {
      text: "Walk like you’re carrying something the world needs — because you are.",
      author: "SADD"
    },
    {
      text: "Don’t downgrade your dream to fit your comfort zone — upgrade your habits.",
      author: "SADD"
    },
    {
      text: "Feeling unmotivated doesn’t mean you’re unworthy — move anyway.",
      author: "SADD"
    },
    {
      text: "Your fears are loud, but your potential is louder.",
      author: "SADD"
    },
    {
      text: "You’re allowed to struggle, just not allowed to surrender.",
      author: "SADD"
    },
    {
      text: "You are building a life in the future you will be proud to live.",
      author: "SADD"
    },
    {
      text: "Every challenge is a tool — not a punishment — shaping who you become.",
      author: "SADD"
    },
    {
      text: "The ones who succeed are the ones who keep going after they fail.",
      author: "SADD"
    },
    {
      text: "Your growth is not an accident — it’s a choice.",
      author: "SADD"
    },
    {
      text: "You weren’t born to be average; you were built to evolve.",
      author: "SADD"
    },
    {
      text: "I knew that if I failed I wouldn’t regret that, but I knew the one thing I might regret is not trying.",
      author: "Jeff Bezos"
    },
    {
      text: "Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you.",
      author: "Mary Kay Ash"
    },
    {
      text: "When something is important enough, you do it even if the odds are not in your favor.",
      author: "Elon Musk"
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Don’t be afraid to give up the good to go for the great.",
      author: "John D. Rockefeller"
    },
    {
      text: "Your time is limited, don’t waste it living someone else’s life.",
      author: "Steve Jobs"
    },
    {
      text: "Most people who are criticizing you haven’t even tried what you failed at.",
      author: "David Goggins"
    },
    {
      text: "Don’t stop when you’re tired, stop when you’re done.",
      author: "David Goggins"
    },
    {
      text: "Success is the most vulnerable place to be — it blinds you.",
      author: "Andrew Tate"
    },
    {
      text: "Aspire to be the person you’re afraid to be.",
      author: "Andrew Tate"
    },
    {
      text: "Yesterday is history; tomorrow is a mystery; today is a gift, that’s why it’s called the present",
      author: "Master Oogway from Kung Fu Panda"
    },
    {
      text: "The flower that blooms in adversity is the most rare and beautiful of all.",
      author: "Mulan"
    },
    {
      text: "It’s only after we’ve lost everything that we’re free to do anything.",
      author: "Fight Club"
    },
    {
      text: "Just keep swimming.",
      author: "Finding Nemo"
    },
    {
      text: "Oh yes, the past can hurt. But you can either run from it or learn from it.",
      author: "The Lion King"
    },
    {
      text: "Adventure is out there!",
      author: "Up"
    },
    {
      text: "To infinity… and beyond.",
      author: "Toy Story"
    },
    {
      text: "Sometimes the right path is not the easiest one.",
      author: "Pocahontas"
    }
  ]
];

const KindnessPage = () => {
  const [currentQuote, setCurrentQuote] = useState(null);
  const shakeThreshold = 15; // Threshold for shake detection
  const buttonRef = useRef(null);
  const lastShakeTimeRef = useRef(0);
  const permissionStateRef = useRef({ requested: false, granted: false });
  const startListeningRef = useRef(null);

  // Core shake function - triggers animation and shows quote
  const triggerShake = useCallback(() => {
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

  // Handle shake from device motion - with 1 second cooldown
  const handleShakeFromDevice = useCallback(() => {
    const now = Date.now();
    // Check if 1 second has passed since last shake
    if (now - lastShakeTimeRef.current > 1000) {
      lastShakeTimeRef.current = now;
      triggerShake();
    }
  }, [triggerShake]);

  // Handle button click - no cooldown, also requests permission if needed
  const handleButtonClick = useCallback(() => {
    // Request permission on iOS if not already granted (button click is a user gesture)
    if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
      if (!permissionStateRef.current.granted && !permissionStateRef.current.requested) {
        DeviceMotionEvent.requestPermission()
          .then(permissionState => {
            if (permissionState === 'granted') {
              permissionStateRef.current.granted = true;
              // Start listening immediately if we have the function
              if (startListeningRef.current) {
                startListeningRef.current();
              }
            }
          })
          .catch(() => {
            // Permission denied or error - button still works
          });
        permissionStateRef.current.requested = true;
      }
    }
    triggerShake();
  }, [triggerShake]);

  // Device shake detection - enabled immediately on page load
  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let lastZ = 0;
    let lastTime = Date.now();
    let motionListener = null;

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
          handleShakeFromDevice();
        }

        // Update last known values
        lastX = currentX;
        lastY = currentY;
        lastZ = currentZ;
        lastTime = currentTime;
      }
    };

    // Function to start listening for device motion - stored in ref so button can call it
    const startListening = () => {
      if (motionListener) return; // Already listening
      
      try {
        window.addEventListener('devicemotion', handleDeviceMotion, { passive: true });
        motionListener = handleDeviceMotion;
        permissionStateRef.current.granted = true;
      } catch (error) {
        console.error('Error adding device motion listener:', error);
      }
    };

    // Store function in ref so button click handler can call it
    startListeningRef.current = startListening;

    // Request permission for iOS devices
    const requestIOSPermission = async () => {
      if (permissionStateRef.current.requested) return; // Already requested
      permissionStateRef.current.requested = true;

      if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
        try {
          const permissionState = await DeviceMotionEvent.requestPermission();
          if (permissionState === 'granted') {
            startListening();
          } else {
            console.log('Device motion permission denied');
          }
        } catch (error) {
          console.error('Error requesting device motion permission:', error);
        }
      } else {
        // For non-iOS devices, start listening immediately
        startListening();
      }
    };

    // Comprehensive interaction handler - captures ANY user interaction
    const handleAnyInteraction = () => {
      // Only request permission if not already requested or granted
      if (!permissionStateRef.current.granted && !permissionStateRef.current.requested) {
        requestIOSPermission();
      }
    };

    // Try to start immediately for non-iOS devices
    if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission !== 'function') {
      // Android and other devices - start immediately
      startListening();
      permissionStateRef.current.granted = true;
    } else if (typeof DeviceMotionEvent !== 'undefined') {
      // iOS devices - request permission on first interaction
      // Use capture phase to catch interaction as early as possible
      const options = { capture: true, passive: true, once: true };
      
      // Listen for ANY touch or interaction anywhere on the page
      document.addEventListener('touchstart', handleAnyInteraction, options);
      document.addEventListener('touchend', handleAnyInteraction, options);
      document.addEventListener('touchmove', handleAnyInteraction, options);
      document.addEventListener('click', handleAnyInteraction, options);
      document.addEventListener('mousedown', handleAnyInteraction, options);
      window.addEventListener('scroll', handleAnyInteraction, { passive: true, once: true });
      
      // Also add to body and document element for maximum coverage
      if (document.body) {
        document.body.addEventListener('touchstart', handleAnyInteraction, options);
      }
    }

    return () => {
      if (motionListener) {
        window.removeEventListener('devicemotion', motionListener);
      }
      document.removeEventListener('touchstart', handleAnyInteraction, { capture: true });
      document.removeEventListener('touchend', handleAnyInteraction, { capture: true });
      document.removeEventListener('touchmove', handleAnyInteraction, { capture: true });
      document.removeEventListener('click', handleAnyInteraction, { capture: true });
      document.removeEventListener('mousedown', handleAnyInteraction, { capture: true });
      window.removeEventListener('scroll', handleAnyInteraction);
      if (document.body) {
        document.body.removeEventListener('touchstart', handleAnyInteraction, { capture: true });
      }
    };
  }, [handleShakeFromDevice, shakeThreshold]);

  return (
    <PageContainer data-page-container>
      <ContentWrapper>
        <SADDLogoImage
          src="https://ca.reduceteencrashes.info/sites/default/files/SADD%20Logo%20Final%20Updated-white%20lettering-blackSADD.png"
          alt="SADD Club Logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />
        <PageTitle
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
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
