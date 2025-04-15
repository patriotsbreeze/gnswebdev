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
        },
        {
          type: 'html',
          content: `
            <div style="color: #f0f0f0;">
              <h2 style="font-size: 2rem; margin-bottom: 2rem; color: #64ffda;">What is Web Development?</h2>
              <ul style="font-size: 1.2rem; line-height: 1.8; text-align: left; list-style-type: none;">
                <li>• Building and maintaining websites and web applications</li>
                <li>• Combines design and functionality</li>
                <li>• Requires understanding of multiple technologies</li>
                <li>• Constantly evolving field</li>
              </ul>
            </div>
          `
        },
        {
          type: 'html',
          content: `
            <div style="color: #f0f0f0;">
              <h2 style="font-size: 2rem; margin-bottom: 2rem; color: #64ffda;">Frontend vs Backend</h2>
              <div style="display: flex; justify-content: space-around; text-align: left;">
                <div style="flex: 1; padding: 1rem;">
                  <h3 style="color: #64ffda; margin-bottom: 1rem;">Frontend</h3>
                  <ul style="list-style-type: none;">
                    <li>• HTML</li>
                    <li>• CSS</li>
                    <li>• JavaScript</li>
                    <li>• React, Vue, Angular</li>
                    <li>• User Interface</li>
                  </ul>
                </div>
                <div style="flex: 1; padding: 1rem;">
                  <h3 style="color: #64ffda; margin-bottom: 1rem;">Backend</h3>
                  <ul style="list-style-type: none;">
                    <li>• Node.js, Python, Ruby</li>
                    <li>• Express, Django, Rails</li>
                    <li>• Databases</li>
                    <li>• APIs</li>
                    <li>• Server Logic</li>
                  </ul>
                </div>
              </div>
            </div>
          `
        },
        {
          type: 'html',
          content: `
            <div style="color: #f0f0f0;">
              <h2 style="font-size: 2rem; margin-bottom: 2rem; color: #64ffda;">Modern Web Development</h2>
              <ul style="font-size: 1.2rem; line-height: 1.8; text-align: left; list-style-type: none;">
                <li>• Single Page Applications (SPAs)</li>
                <li>• Progressive Web Apps (PWAs)</li>
                <li>• Responsive Design</li>
                <li>• API-first Development</li>
                <li>• Serverless Architecture</li>
              </ul>
            </div>
          `
        },
        {
          type: 'html',
          content: `
            <div style="text-align: center; color: #f0f0f0;">
              <h2 style="font-size: 2.5rem; margin-bottom: 2rem; color: #64ffda;">Thank You!</h2>
              <p style="font-size: 1.5rem; margin-bottom: 1rem;">Questions?</p>
              <p style="font-size: 1.2rem; color: #a0a0a0;">Next Week: HTML & CSS Fundamentals</p>
            </div>
          `
        }
      ]
    },
    {
      title: "React.js Fundamentals",
      description: "Learn the core concepts of React.js, including components, props, state, and hooks. This presentation covers everything you need to start building React applications.",
      slides: [
        {
          type: 'html',
          content: `
            <div style="text-align: center; color: #f0f0f0;">
              <h1 style="font-size: 3rem; margin-bottom: 2rem; color: #64ffda;">React.js Fundamentals</h1>
              <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">GNS Web Development Club</h2>
              <p style="font-size: 1.2rem; color: #a0a0a0;">Advanced Workshop Series</p>
            </div>
          `
        },
        {
          type: 'html',
          content: `
            <div style="color: #f0f0f0;">
              <h2 style="font-size: 2rem; margin-bottom: 2rem; color: #64ffda;">What is React?</h2>
              <ul style="font-size: 1.2rem; line-height: 1.8; text-align: left; list-style-type: none;">
                <li>• JavaScript library for building user interfaces</li>
                <li>• Developed and maintained by Facebook</li>
                <li>• Component-based architecture</li>
                <li>• Virtual DOM for efficient updates</li>
                <li>• Declarative programming model</li>
              </ul>
            </div>
          `
        },
        {
          type: 'html',
          content: `
            <div style="color: #f0f0f0;">
              <h2 style="font-size: 2rem; margin-bottom: 2rem; color: #64ffda;">Core Concepts</h2>
              <ul style="font-size: 1.2rem; line-height: 1.8; text-align: left; list-style-type: none;">
                <li>• Components</li>
                <li>• Props</li>
                <li>• State</li>
                <li>• Lifecycle Methods</li>
                <li>• Hooks</li>
              </ul>
            </div>
          `
        },
        {
          type: 'html',
          content: `
            <div style="color: #f0f0f0;">
              <h2 style="font-size: 2rem; margin-bottom: 2rem; color: #64ffda;">Component Example</h2>
              <pre style="background: #1e1e1e; padding: 1rem; border-radius: 8px; overflow: auto; text-align: left;">
<code style="color: #f0f0f0; font-family: monospace;">
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    &lt;div&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;
        Click me
      &lt;/button&gt;
    &lt;/div&gt;
  );
}

export default Counter;
</code>
              </pre>
            </div>
          `
        },
        {
          type: 'html',
          content: `
            <div style="text-align: center; color: #f0f0f0;">
              <h2 style="font-size: 2.5rem; margin-bottom: 2rem; color: #64ffda;">Thank You!</h2>
              <p style="font-size: 1.5rem; margin-bottom: 1rem;">Questions?</p>
              <p style="font-size: 1.2rem; color: #a0a0a0;">Next Week: State Management with Redux</p>
            </div>
          `
        }
      ]
    },
    {
      title: "Web Design Principles",
      description: "Explore the fundamental principles of effective web design, including layout, typography, color theory, and user experience considerations.",
      slides: [
        {
          type: 'html',
          content: `
            <div style="text-align: center; color: #f0f0f0;">
              <h1 style="font-size: 3rem; margin-bottom: 2rem; color: #64ffda;">Web Design Principles</h1>
              <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">GNS Web Development Club</h2>
              <p style="font-size: 1.2rem; color: #a0a0a0;">Design Workshop Series</p>
            </div>
          `
        },
        {
          type: 'html',
          content: `
            <div style="color: #f0f0f0;">
              <h2 style="font-size: 2rem; margin-bottom: 2rem; color: #64ffda;">Core Design Principles</h2>
              <ul style="font-size: 1.2rem; line-height: 1.8; text-align: left; list-style-type: none;">
                <li>• Balance</li>
                <li>• Contrast</li>
                <li>• Emphasis</li>
                <li>• Proportion</li>
                <li>• Hierarchy</li>
                <li>• Repetition</li>
                <li>• Rhythm</li>
                <li>• Unity</li>
              </ul>
            </div>
          `
        },
        {
          type: 'html',
          content: `
            <div style="color: #f0f0f0;">
              <h2 style="font-size: 2rem; margin-bottom: 2rem; color: #64ffda;">Color Theory</h2>
              <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem;">
                <div style="width: 100px; height: 100px; background: #FF5252; border-radius: 8px; display: flex; justify-content: center; align-items: center;">Red</div>
                <div style="width: 100px; height: 100px; background: #FFEB3B; border-radius: 8px; display: flex; justify-content: center; align-items: center; color: #333;">Yellow</div>
                <div style="width: 100px; height: 100px; background: #2196F3; border-radius: 8px; display: flex; justify-content: center; align-items: center;">Blue</div>
                <div style="width: 100px; height: 100px; background: #4CAF50; border-radius: 8px; display: flex; justify-content: center; align-items: center;">Green</div>
                <div style="width: 100px; height: 100px; background: #9C27B0; border-radius: 8px; display: flex; justify-content: center; align-items: center;">Purple</div>
                <div style="width: 100px; height: 100px; background: #FF9800; border-radius: 8px; display: flex; justify-content: center; align-items: center;">Orange</div>
              </div>
            </div>
          `
        },
        {
          type: 'html',
          content: `
            <div style="color: #f0f0f0;">
              <h2 style="font-size: 2rem; margin-bottom: 2rem; color: #64ffda;">Typography</h2>
              <div style="text-align: left;">
                <p style="font-family: serif; font-size: 1.5rem; margin-bottom: 1rem;">Serif Fonts: Times New Roman, Georgia</p>
                <p style="font-family: sans-serif; font-size: 1.5rem; margin-bottom: 1rem;">Sans-serif Fonts: Arial, Helvetica</p>
                <p style="font-family: monospace; font-size: 1.5rem; margin-bottom: 1rem;">Monospace Fonts: Courier, Roboto Mono</p>
                <p style="font-family: cursive; font-size: 1.5rem; margin-bottom: 1rem;">Cursive Fonts: Brush Script, Comic Sans</p>
              </div>
            </div>
          `
        },
        {
          type: 'html',
          content: `
            <div style="text-align: center; color: #f0f0f0;">
              <h2 style="font-size: 2.5rem; margin-bottom: 2rem; color: #64ffda;">Thank You!</h2>
              <p style="font-size: 1.5rem; margin-bottom: 1rem;">Questions?</p>
              <p style="font-size: 1.2rem; color: #a0a0a0;">Next Week: Responsive Design Techniques</p>
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
