import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 3rem 5%;
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const FooterContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const FooterSection = styled(motion.div)`
  flex: 1;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #64ffda;
  margin-bottom: 1rem;
`;

const FooterLink = styled(motion.a)`
  font-size: 0.9rem;
  color: #f0f0f0;
  transition: color 0.3s ease;
  
  &:hover {
    color: #64ffda;
  }
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  color: #a0a0a0;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f0f0f0;
  transition: all 0.3s ease;
  
  &:hover {
    background: #64ffda;
    color: #0f0f0f;
    transform: translateY(-5px);
  }
`;

const Copyright = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: #a0a0a0;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <FooterTitle>GNS Web Dev Club</FooterTitle>
          <FooterText>
            We are a community of passionate web developers dedicated to learning, 
            creating, and sharing knowledge about modern web technologies.
          </FooterText>
          <SocialLinks>
            <SocialIcon 
              href="#" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-github"></i>
            </SocialIcon>
            <SocialIcon 
              href="#" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-twitter"></i>
            </SocialIcon>
            <SocialIcon 
              href="#" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-instagram"></i>
            </SocialIcon>
            <SocialIcon 
              href="#" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-linkedin"></i>
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink 
            href="/"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Home
          </FooterLink>
          <FooterLink 
            href="/about"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            About the Board
          </FooterLink>
          <FooterLink 
            href="/slides"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Meeting Slides
          </FooterLink>
          <FooterLink 
            href="/projects"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Projects
          </FooterLink>
          <FooterLink 
            href="/podcast"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Podcast
          </FooterLink>
        </FooterSection>
        
        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <FooterTitle>Contact Us</FooterTitle>
          <FooterText>
            Email: info@gnswebdev.club
          </FooterText>
          <FooterText>
            Location: GNS Campus, Room 42
          </FooterText>
          <FooterText>
            Meeting Times: Wednesdays, 4:00 PM - 6:00 PM
          </FooterText>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        © {currentYear} GNS Web Development Club. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
