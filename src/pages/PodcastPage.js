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
          title: "title",
          date: "date",
          duration: "___min",
          description: "",
          audioUrl: "link to audio" 
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
