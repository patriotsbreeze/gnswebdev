import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BoardMember from '../components/BoardMember';

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 2rem 5%;
`;

const HeroSection = styled.section`
  padding: 6rem 0 4rem;
  text-align: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(100, 255, 218, 0.1) 0%, rgba(15, 15, 15, 0) 70%);
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
  margin-bottom: 3rem;
  color: #a0a0a0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const BoardSection = styled.section`
  padding: 4rem 0;
`;

const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #f0f0f0;
  position: relative;
  display: inline-block;
  text-align: center;
  width: 100%;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: #64ffda;
  }
`;

const AboutPage = () => {
  // Generate placeholder avatar URLs using a color based on the seed
  const generateAvatar = (seed) => {
    // Simple hash function to generate a color from a string
    const hashString = str => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      return hash;
    };
    
    const intToRGB = hash => {
      const c = (hash & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();
      return '#' + '00000'.substring(0, 6 - c.length) + c;
    };
    
    const color = intToRGB(hashString(seed));
    const secondaryColor = intToRGB(hashString(seed + 'secondary'));
    
    // Return a data URI for a simple SVG gradient with a circle (avatar-like)
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${color.replace('#', '%23')}" /><stop offset="100%" stop-color="${secondaryColor.replace('#', '%23')}" /></linearGradient></defs><circle cx="150" cy="150" r="150" fill="url(%23grad)" /></svg>`;
  };

  
  const boardMembers = [
    {
      name: "Brendan Lo",
      role: "Co-President / Co-Founder",
      bio: "Brendan does web development (obviously), biology research (wet-lab and AI/ML), and game development ",
      image: generateAvatar("alex"),
      social: {
        github: "https://github.com/patriotsbreeze",
        linkedin: "https://www.linkedin.com/in/brendan-lo-8b0b80247/",
        twitter: null,
        portfolio: "https://www.brendanlo.xyz"
      }
    },
    {
      name: "Thomas Liu",
      role: "Co-President / Co-Founder",
      bio: "Thomas does web development, ",
      image: generateAvatar("taylor"),
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: null,
        portfolio: "https://taylorrodriguez.design"
      }
    },
    {
      name: "Jason (Jiahao) Yu",
      role: "Vice President",
      bio: "jia ",
      image: generateAvatar("jordan"),
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        portfolio: null
      }
    },
    {
      name: "Marvin Zhong",
      role: "Treasurer",
      bio: "Marvin ",
      image: generateAvatar("morgan"),
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: null,
        portfolio: "https://morgansmith.tech"
      }
    },
    {
      name: "Felix Kong",
      role: "Secretary",
      bio: "felix",
      image: generateAvatar("casey"),
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        portfolio: null
      }
    },
    {
      name: "Sahil Gupta (possibly)",
      role: "???",
      bio: "??",
      image: generateAvatar("riley"),
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        portfolio: "https://rileychen.io"
      }
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <PageTitle
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Board
        </PageTitle>
        <PageSubtitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our dedicated team of student leaders works tirelessly to create valuable learning experiences, 
          organize engaging events, and foster a supportive community for all members of the GNS Web Development Club.
        </PageSubtitle>
      </HeroSection>
      
      <BoardSection>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Board Members
        </SectionTitle>
        
        <BoardGrid>
          {boardMembers.map((member, index) => (
            <BoardMember key={index} member={member} index={index} />
          ))}
        </BoardGrid>
      </BoardSection>
    </PageContainer>
  );
};

export default AboutPage;
