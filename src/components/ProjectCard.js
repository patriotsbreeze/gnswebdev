import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCardContainer = styled(motion.div)`
  background: rgba(30, 30, 30, 0.5);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(100, 255, 218, 0.3);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ProjectCardContainer}:hover & img {
    transform: scale(1.05);
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #f0f0f0;
`;

const ProjectType = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #64ffda;
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 20px;
  width: fit-content;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #a0a0a0;
  flex: 1;
  margin-bottom: 1.5rem;
`;

const ProjectContributors = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
`;

const Contributor = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  color: #d0d0d0;
`;

const ContributorAvatar = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #64ffda;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  color: #0f0f0f;
  font-weight: 600;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const ProjectLink = styled(motion.a)`
  width: 36px;
  height: 36px;
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
  }
`;

const ProjectCard = ({ project, index }) => {
  return (
    <ProjectCardContainer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.6, 
          delay: 0.1 * (index % 6), // Stagger animation in groups of 6
          ease: "easeOut"
        }
      }}
      viewport={{ once: true }}
    >
      <ProjectImage>
        <img src={project.image} alt={project.title} />
      </ProjectImage>
      <ProjectInfo>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectType>{project.type}</ProjectType>
        <ProjectDescription>{project.description}</ProjectDescription>
        
        <ProjectContributors>
          {project.contributors.map((contributor, idx) => (
            <Contributor key={idx}>
              <ContributorAvatar>
                {contributor.charAt(0).toUpperCase()}
              </ContributorAvatar>
              {contributor}
            </Contributor>
          ))}
        </ProjectContributors>
        
        <ProjectLinks>
          {project.github && (
            <ProjectLink 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={18} />
            </ProjectLink>
          )}
          {project.demo && (
            <ProjectLink 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaExternalLinkAlt size={18} />
            </ProjectLink>
          )}
        </ProjectLinks>
      </ProjectInfo>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
