import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CursorWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CursorDot = styled(motion.div)`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: white;
`;

const CursorRing = styled(motion.div)`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.8);
`;

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      transition: {
        type: 'spring',
        mass: 0.6,
        damping: 28,
      },
    },
    hover: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      width: 60,
      height: 60,
      transition: {
        type: 'spring',
        mass: 0.6,
        damping: 28,
      },
    },
    click: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      width: 20,
      height: 20,
      transition: {
        type: 'spring',
        mass: 0.6,
        damping: 28,
      },
    },
  };

  const dotVariants = {
    default: {
      width: 8,
      height: 8,
    },
    hover: {
      width: 12,
      height: 12,
    },
    click: {
      width: 14,
      height: 14,
    },
  };

  useEffect(() => {
    const handleMouseDown = () => setCursorVariant('click');
    const handleMouseUp = () => setCursorVariant('default');
    
    const handleMouseEnter = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => setCursorVariant('hover'));
        el.addEventListener('mouseleave', () => setCursorVariant('default'));
      });
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('DOMContentLoaded', handleMouseEnter);

    // Initial setup for existing elements
    handleMouseEnter();

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('DOMContentLoaded', handleMouseEnter);
    };
  }, []);

  return (
    <CursorWrapper variants={variants} animate={cursorVariant}>
      <CursorRing />
      <CursorDot variants={dotVariants} animate={cursorVariant} />
    </CursorWrapper>
  );
};

export default CursorEffect;
