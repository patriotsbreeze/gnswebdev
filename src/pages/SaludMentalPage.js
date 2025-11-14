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


const quotes = [
    {
        text: "Normalicemos no estar en nuestro mejor momento. La vida no siempre tiene que ser perfecta. No estamos hechos para sentirnos bien todo el tiempo. Está bien sentirse triste, querer estar solo, pasar por etapas de duelo o simplemente no tener energía. Somos seres humanos, y como las estaciones, también atravesamos ciclos. Y eso está bien.",
        author: "La psicóloga holística (Dra. Nicole LePera)"
      },
      {
        text: "Has atravesado muchas tormentas para llegar hasta aquí. Tal vez no lo veas, pero eres valiente y magnífico.",
        author: "Charlie Mackesy"
      },
      {
        text: "Tu trauma es válido, incluso si no puedes explicarlo completamente a los demás.",
        author: "El autocuidado es para todos (@selfcareisforeveryone)"
      },
      {
        text: "Mereces todas las cosas hermosas con las que sueñas.",
        author: "Ruby Alice Rose"
      },
      {
        text: "Sin arruinarte el final… todo va a estar bien.",
        author: "Inspiración Sunny Bloom (@sunnybloominspiration)"
      },
      {
        text: "Sigue con vida por las personas en las que te convertirás. Eres mucho más que un mal día o un mal año. Eres un futuro lleno de infinitas posibilidades. Eres una versión de ti mismo, en algún punto del tiempo, que mirará hacia atrás con gratitud porque este tú, el que hoy se siente perdido, decidió resistir.",
        author: "Matt Haig"
      },
      {
        text: "Nadie se beneficia cuando eres duro contigo mismo, pero todos se benefician cuando te animas y te tratas con compasión. Entonces, ¿por qué tantos de nosotros, especialmente quienes vivimos con ansiedad, tenemos el hábito de criticarnos sin descanso hasta alcanzar nuestras metas?",
        author: "Ansiedad Josh (Terapeuta Josh)"
      },
      {
        text: "Estás haciendo lo mejor que puedes, y ese \"mejor\" se verá diferente hoy en comparación con cómo se vio ayer o cómo se verá mañana. Algunos días, tu mejor versión es muy productiva, y otros días consiste simplemente en lograr lo mínimo. Pero cualquier día en el que te levantas e intentas dar lo mejor de ti, es un buen día, porque tu mejor esfuerzo es suficiente cada día.",
        author: "Laura Jane Ilustraciones"
      },
      {
        text: "No confíes en la forma en que te ves a ti misma cuando tu mente está agitada, y recuerda que incluso el dolor es temporal. Honra tus límites, trátate con suavidad, suelta la perfección y permite sentir tus emociones sin dejar que te controlen. Tienes la experiencia suficiente para enfrentar la tormenta… y evolucionar a partir de ella.",
        author: "Yung Pueblo"
      },
      {
        text: "Un recordatorio amable: resiste la urgencia de comparar obsesivamente tu camino de vida —que conoces íntimamente— con los momentos destacados de otras personas —que solo ves de pasada.",
        author: "Michell Clark"
      },
      {
        text: "—No puedo creer todo lo que nos queda para llegar —suspiró el Pequeño Dragón. \nEl Gran Panda miró hacia el valle y respondió: —No puedo creer lo lejos que hemos llegado.",
        author: "James Norbury (El gran Panda & el pequeño Dragon)"
      },
      {
        text: "¿Cómo puedo ser tan cruel conmigo misma cuando estoy haciendo lo mejor que puedo? \n— Sé amable",
        author: "Rupi Kaur"
      },
      {
        text: "No sé qué viene después, pero estoy empezando a vislumbrar algo hermoso.",
        author: "Morgan Harper Nichols"
      },
      {
        text: "Lo que los demás piensen de ti no es tu problema.",
        author: "Bryony Gordon"
      },
      {
        text: "Si está fuera de tus manos, merece estar fuera de tu mente también.",
        author: "Citas de Christie"
      },
      {
        text: "No necesitas una rutina matutina con agua con limón, velas y un diario si eso te está abrumando.",
        author: "Seerut K. Chawla"
      },
      {
        text: "Siempre habrá otros caminos y otros días, pero nunca habrá otro tú.",
        author: "Todo a bordo (All On The Board)"
      },
      {
        text: "Los pensamientos no son hecho. No te creas todo lo que piensas.",
        author: "Calma (Aplicación Calm)"
      }
];

const SaludMentalPage = () => {
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

  // Handle button click - no cooldown, also requests permission and enables shake if needed
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
      } else if (permissionStateRef.current.granted && startListeningRef.current) {
        // If permission already granted, make sure we're listening
        startListeningRef.current();
      }
    } else {
      // For non-iOS devices, start listening when button is clicked
      if (startListeningRef.current) {
        startListeningRef.current();
      }
    }
    triggerShake();
  }, [triggerShake]);

  // Device shake detection - enabled only after button click
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

    // Don't start listening automatically - wait for button click to enable shake feature
    // This ensures users must tap the button first to enable shake detection

    return () => {
      if (motionListener) {
        window.removeEventListener('devicemotion', motionListener);
      }
    };
  }, [handleShakeFromDevice, shakeThreshold]);

  return (
    <PageContainer data-page-container>
      <ContentWrapper>
        <PageTitle
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Salud Mental
        </PageTitle>
        
        <Instruction
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Agita tu tableta o toca el botón para ver una cita sobre salud mental.
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
          Agita para Salud Mental
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
    </PageContainer>
  );
};

export default SaludMentalPage;

