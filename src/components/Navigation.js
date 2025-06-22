import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 5%;
  z-index: 100;
  backdrop-filter: blur(10px);
  background: rgba(15, 15, 15, 0.8);
`;

const Logo = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #f0f0f0;
  
  span {
    color: #64ffda;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-left: auto;

  @media (max-width: 768px) {
    display: none;
    margin-left: 0;
  }
`;

const NavLink = styled(motion.div)`
  position: relative;
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.active ? '#64ffda' : '#f0f0f0'};
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background-color: #64ffda;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.35rem;
    padding: 0.7rem 0;
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: #f0f0f0;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
  
  @media (max-width: 768px) {
    display: flex;
    margin-left: auto;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background: rgba(15, 15, 15, 0.95);
  z-index: 5;
  padding: 2rem;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Slides', path: '/slides' },
    { name: 'Projects', path: '/projects' },
    { name: 'Join', path: '/join' }
  ];
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <>
      <NavContainer>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            GNS<span> WebDev</span>
          </Logo>
        </Link>
        
        <NavLinks>
          {links.map((link, index) => (
            <Link to={link.path} key={index} style={{ display: 'block' }}>
              <NavLink 
                active={location.pathname === link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </NavLink>
            </Link>
          ))}
        </NavLinks>

        <MobileMenuButton onClick={toggleMobileMenu}>
          <div />
          <div />
          <div />
        </MobileMenuButton>
      </NavContainer>
      
      {mobileMenuOpen && (
        <MobileMenu
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {links.map((link, index) => (
            <Link 
              to={link.path} 
              key={index} 
              style={{ display: 'block' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <NavLink 
                active={location.pathname === link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </NavLink>
            </Link>
          ))}
        </MobileMenu>
      )}
    </>
  );
};

export default Navigation;
