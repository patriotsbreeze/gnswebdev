import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SlideViewer from '../components/SlideViewer';

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

const SlidesSection = styled.section`
  padding: 2rem 0 6rem;
  max-width: 1200px;
  margin: 0 auto;
`;

// Removed unused SectionTitle component

const SlideDecksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

const SlideDeck = styled(motion.div)`
  margin-bottom: 2rem;
`;

const SlideTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #f0f0f0;
  text-align: center;
`;

const SlideDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #a0a0a0;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const MeetingSlidesPage = () => {
  // Sample slide decks data
  const slideDecks = [
    {
      title: "Introduction to Web Development",
      description: "An overview of modern web development technologies and practices. This presentation covers HTML, CSS, JavaScript, and introduces popular frameworks.",
      slides: [
        {
          type: 'html',
          content: `
            <div style="text-align: center; color: #f0f0f0;">
              <h1 style="font-size: 3rem; margin-bottom: 2rem; color: #64ffda;">Introduction to Web Development</h1>
              <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">GNS Web Development Club</h2>
              <p style="font-size: 1.2rem; color: #a0a0a0;">Fall 2024 Workshop Series</p>
            </div>
          `
        }
      ]
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
          Meeting Slides
        </PageTitle>
        <PageSubtitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Browse through our collection of presentation slides from past meetings and workshops. 
          These resources cover various web development topics and are available for all club members to review.
        </PageSubtitle>
      </HeroSection>
      
      <SlidesSection>
        <SlideDecksContainer>
          {slideDecks.map((deck, index) => (
            <SlideDeck
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SlideTitle>{deck.title}</SlideTitle>
              <SlideDescription>{deck.description}</SlideDescription>
              <SlideViewer slides={deck.slides} />
            </SlideDeck>
          ))}
        </SlideDecksContainer>
      </SlidesSection>
    </PageContainer>
  );
};

export default MeetingSlidesPage;
