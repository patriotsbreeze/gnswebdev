import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AudioPlayer from '../components/AudioPlayer';

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

const PodcastSection = styled.section`
  padding: 2rem 0 6rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const EpisodesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const EpisodeCard = styled(motion.div)`
  background: rgba(30, 30, 30, 0.5);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(100, 255, 218, 0.3);
  }
`;

const EpisodeHeader = styled.div`
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EpisodeInfo = styled.div`
  flex: 1;
`;

const EpisodeTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #f0f0f0;
`;

const EpisodeDetails = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  color: #a0a0a0;
  flex-wrap: wrap;
`;

const EpisodeDate = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const EpisodeDuration = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const EpisodeToggle = styled.div`
  font-size: 1.2rem;
  color: #64ffda;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(100, 255, 218, 0.2);
  }
`;

const EpisodeContent = styled.div`
  padding: 0 1.5rem 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const EpisodeDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #a0a0a0;
  margin-bottom: 1.5rem;
`;

const PlayerContainer = styled.div`
  margin-top: 1.5rem;
`;

const SeasonTitle = styled(motion.h2)`
  font-size: 1.8rem;
  font-weight: 600;
  margin: 3rem 0 2rem;
  color: #f0f0f0;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: #64ffda;
  }
`;

const PodcastPage = () => {
  const [expandedEpisode, setExpandedEpisode] = useState(null);
  
  // Sample podcast episodes data
  const podcastEpisodes = [
    {
      season: "Season 1: Web Development Fundamentals",
      episodes: [
        {
          id: 1,
          title: "Getting Started with Web Development",
          date: "January 15, 2025",
          duration: "45 min",
          description: "In this inaugural episode, we discuss the fundamentals of web development and what beginners need to know to get started in this exciting field. We cover the basic technologies, learning resources, and career paths available to aspiring web developers.",
          audioUrl: "https://example.com/podcast/ep1.mp3" // This would be a real URL in production
        },
        {
          id: 2,
          title: "HTML & CSS Deep Dive",
          date: "January 29, 2025",
          duration: "52 min",
          description: "We explore the building blocks of the web: HTML and CSS. Learn about semantic markup, CSS selectors, the box model, and responsive design principles that will help you create beautiful and accessible websites.",
          audioUrl: "https://example.com/podcast/ep2.mp3"
        },
        {
          id: 3,
          title: "JavaScript Essentials",
          date: "February 12, 2025",
          duration: "58 min",
          description: "JavaScript is the programming language of the web. In this episode, we cover core concepts like variables, functions, objects, and DOM manipulation that every web developer needs to master.",
          audioUrl: "https://example.com/podcast/ep3.mp3"
        },
        {
          id: 4,
          title: "Responsive Design & Mobile First",
          date: "February 26, 2025",
          duration: "49 min",
          description: "With mobile devices accounting for over half of web traffic, responsive design is more important than ever. We discuss mobile-first design principles, media queries, and testing strategies to ensure your sites look great on all devices.",
          audioUrl: "https://example.com/podcast/ep4.mp3"
        }
      ]
    },
    {
      season: "Season 2: Frontend Frameworks",
      episodes: [
        {
          id: 5,
          title: "Introduction to React",
          date: "March 12, 2025",
          duration: "61 min",
          description: "React has revolutionized how we build user interfaces. We introduce the core concepts of React including components, props, state, and the virtual DOM, and explain why it's become so popular among developers.",
          audioUrl: "https://example.com/podcast/ep5.mp3"
        },
        {
          id: 6,
          title: "State Management with Redux",
          date: "March 26, 2025",
          duration: "55 min",
          description: "Managing state in complex applications can be challenging. We explore Redux, a popular state management library, and discuss when and how to use it effectively in your React applications.",
          audioUrl: "https://example.com/podcast/ep6.mp3"
        },
        {
          id: 7,
          title: "Vue.js: The Progressive Framework",
          date: "April 9, 2025",
          duration: "53 min",
          description: "Vue.js offers a more approachable learning curve while still providing powerful features. We discuss Vue's reactivity system, component architecture, and how it compares to other frameworks like React and Angular.",
          audioUrl: "https://example.com/podcast/ep7.mp3"
        }
      ]
    },
    {
      season: "Season 3: Backend Development",
      episodes: [
        {
          id: 8,
          title: "Node.js & Express Fundamentals",
          date: "April 23, 2025",
          duration: "57 min",
          description: "Node.js allows JavaScript to run on the server. We explore how to build backend services with Node.js and Express, covering routing, middleware, and connecting to databases.",
          audioUrl: "https://example.com/podcast/ep8.mp3"
        },
        {
          id: 9,
          title: "RESTful API Design",
          date: "May 7, 2025",
          duration: "50 min",
          description: "APIs are the backbone of modern web applications. We discuss REST principles, resource design, authentication, and best practices for creating APIs that developers will love to use.",
          audioUrl: "https://example.com/podcast/ep9.mp3"
        },
        {
          id: 10,
          title: "Database Options for Web Developers",
          date: "May 21, 2025",
          duration: "59 min",
          description: "Choosing the right database is crucial for application performance and scalability. We compare SQL and NoSQL options, discussing the strengths and weaknesses of PostgreSQL, MongoDB, Redis, and more.",
          audioUrl: "https://example.com/podcast/ep10.mp3"
        }
      ]
    }
  ];
  
  const toggleEpisode = (id) => {
    if (expandedEpisode === id) {
      setExpandedEpisode(null);
    } else {
      setExpandedEpisode(id);
    }
  };
  
  // We don't need to find the current episode separately since we're using the episode directly in the map function
  
  return (
    <PageContainer>
      <HeroSection>
        <PageTitle
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Web Dev Podcast
        </PageTitle>
        <PageSubtitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Listen to our club's podcast where we discuss web development topics, interview industry professionals, 
          and share insights about the latest trends and technologies in the field.
        </PageSubtitle>
      </HeroSection>
      
      <PodcastSection>
        {podcastEpisodes.map((season, seasonIndex) => (
          <div key={seasonIndex}>
            <SeasonTitle
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {season.season}
            </SeasonTitle>
            
            <EpisodesContainer>
              {season.episodes.map((episode, episodeIndex) => (
                <EpisodeCard
                  key={episode.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * episodeIndex }}
                  viewport={{ once: true }}
                >
                  <EpisodeHeader onClick={() => toggleEpisode(episode.id)}>
                    <EpisodeInfo>
                      <EpisodeTitle>{episode.title}</EpisodeTitle>
                      <EpisodeDetails>
                        <EpisodeDate>
                          <i className="far fa-calendar-alt"></i>
                          {episode.date}
                        </EpisodeDate>
                        <EpisodeDuration>
                          <i className="far fa-clock"></i>
                          {episode.duration}
                        </EpisodeDuration>
                      </EpisodeDetails>
                    </EpisodeInfo>
                    <EpisodeToggle>
                      <i className={expandedEpisode === episode.id ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
                    </EpisodeToggle>
                  </EpisodeHeader>
                  
                  {expandedEpisode === episode.id && (
                    <EpisodeContent>
                      <EpisodeDescription>{episode.description}</EpisodeDescription>
                      <PlayerContainer>
                        <AudioPlayer episode={episode} />
                      </PlayerContainer>
                    </EpisodeContent>
                  )}
                </EpisodeCard>
              ))}
            </EpisodesContainer>
          </div>
        ))}
      </PodcastSection>
    </PageContainer>
  );
};

export default PodcastPage;
