import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 2rem 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeroSection = styled.section`
  padding: 6rem 0 2rem;
  text-align: center;
  position: relative;
  width: 100%;
  max-width: 600px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(100, 255, 218, 0.08) 0%, rgba(15, 15, 15, 0) 70%);
    z-index: -1;
  }
`;

const PageTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #64ffda, #00bfa5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
`;

const PageSubtitle = styled(motion.p)`
  font-size: clamp(1rem, 4vw, 1.2rem);
  font-weight: 400;
  margin-bottom: 2.5rem;
  color: #a0a0a0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const LinksGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const SocialButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.2rem 2rem;
  border-radius: 16px;
  background: rgba(30, 30, 30, 0.7);
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 4px 24px rgba(100, 255, 218, 0.08);
  border: 1.5px solid rgba(100, 255, 218, 0.15);
  transition: background 0.2s, border 0.2s, color 0.2s;
  cursor: pointer;

  &:hover {
    background: #222;
    color: #64ffda;
    border: 1.5px solid #64ffda;
    transform: translateY(-3px) scale(1.03);
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(100, 255, 218, 0.12);
`;

const ClassroomBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.2rem 2rem;
  border-radius: 16px;
  background: rgba(30, 30, 30, 0.7);
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  box-shadow: 0 4px 24px rgba(100, 255, 218, 0.08);
  border: 1.5px solid rgba(100, 255, 218, 0.15);
`;

const JoinPage = () => {
  return (
    <PageContainer>
      <HeroSection>
        <PageTitle
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Join the Club!
        </PageTitle>
        <PageSubtitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Connect with us on social media and join our Google Classroom to stay up to date with events, meetings, and resources!
        </PageSubtitle>
        <LinksGrid>
          <SocialButton
            href="https://www.instagram.com/gnswebdevelopment/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <IconWrapper>
              {/* Instagram SVG */}
              <img src = "https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" width="28" alt="Instagram"></img>
            </IconWrapper>
            Instagram
          </SocialButton>
          <SocialButton
            href="https://discord.gg/9PCdqhgajy"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <IconWrapper>
              {/* Discord SVG */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.0371A19.7363 19.7363 0 0 0 3.677 4.3698a.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276c-.598.3428-1.2205.6447-1.8733.8923a.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6601a.061.061 0 0 0-.0312-.0286zM8.02 15.3312c-1.1835 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1835 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" fill="#fff"/>
              </svg>
            </IconWrapper>
            Discord
          </SocialButton>
          <ClassroomBox>
            <IconWrapper>
              {/* Google Classroom SVG */}
              <img src = "https://img.icons8.com/?size=100&id=Q7ugqmSRhVY4&format=png&color=000000" width="28" alt="Google Classroom"></img>
            </IconWrapper>
            Google Classroom:<span style={{ fontWeight: 700, color: '#64ffda', marginLeft: '0.5rem' }}>xozs5q5</span>
          </ClassroomBox>
        </LinksGrid>
      </HeroSection>
    </PageContainer>
  );
};

export default JoinPage;
