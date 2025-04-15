import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const SlideViewerContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  aspect-ratio: 16 / 9;
  background: rgba(20, 20, 20, 0.8);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(100, 255, 218, 0.2);
`;

const SlideContent = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  padding: 2rem;
  background: rgba(20, 20, 20, 0.9);
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const NavigationButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(15, 15, 15, 0.7);
  color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  border: 1px solid rgba(100, 255, 218, 0.3);
  backdrop-filter: blur(5px);
  
  &:hover {
    background: rgba(100, 255, 218, 0.2);
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed !important;
  }
  
  &.prev {
    left: 20px;
  }
  
  &.next {
    right: 20px;
  }
`;

const SlideCounter = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(15, 15, 15, 0.7);
  color: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(100, 255, 218, 0.3);
  z-index: 10;
`;

const SlideNavigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

const SlideNavDot = styled(motion.button)`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.active ? '#64ffda' : 'rgba(255, 255, 255, 0.2)'};
  border: none;
  
  &:hover {
    background: ${props => props.active ? '#64ffda' : 'rgba(255, 255, 255, 0.4)'};
  }
`;

const SlideViewer = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };
  
  return (
    <>
      <SlideViewerContainer>
        <NavigationButton 
          className="prev" 
          onClick={prevSlide} 
          disabled={currentSlide === 0}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fas fa-chevron-left"></i>
        </NavigationButton>
        
        <AnimatePresence initial={false} custom={currentSlide}>
          <SlideContent
            key={currentSlide}
            custom={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            {slides[currentSlide].type === 'image' ? (
              <img src={slides[currentSlide].content} alt={`Slide ${currentSlide + 1}`} />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: slides[currentSlide].content }} />
            )}
          </SlideContent>
        </AnimatePresence>
        
        <NavigationButton 
          className="next" 
          onClick={nextSlide} 
          disabled={currentSlide === slides.length - 1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fas fa-chevron-right"></i>
        </NavigationButton>
        
        <SlideCounter>
          {currentSlide + 1} / {slides.length}
        </SlideCounter>
      </SlideViewerContainer>
      
      <SlideNavigation>
        {slides.map((_, index) => (
          <SlideNavDot 
            key={index} 
            active={index === currentSlide} 
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </SlideNavigation>
    </>
  );
};

export default SlideViewer;
