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
              href="https://www.instagram.com/gnswebdevelopment/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src = "https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" width="24"></img>
            </SocialIcon>
            <SocialIcon 
              href="https://discord.gg/8aVAxHSZkg" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.0371A19.7363 19.7363 0 0 0 3.677 4.3698a.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276c-.598.3428-1.2205.6447-1.8733.8923a.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6601a.061.061 0 0 0-.0312-.0286zM8.02 15.3312c-1.1835 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1835 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" fill="#fff"/>
              </svg>
            </SocialIcon>
            <SocialIcon 
              href="https://classroom.google.com/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ padding: 0 }}
            >
              <img src = "https://img.icons8.com/?size=100&id=Q7ugqmSRhVY4&format=png&color=000000" width = "24"></img>
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
            href="/join"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Join
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
            Location: Great Neck South Library Computer Lab
          </FooterText>
          <FooterText>
            Meeting Times: Thursdays, 2:45PM - 3:30PM
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

