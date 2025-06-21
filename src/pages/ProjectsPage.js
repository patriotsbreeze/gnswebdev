import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

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

const ProjectsSection = styled.section`
  padding: 2rem 0 6rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const FilterButton = styled(motion.button)`
  padding: 0.6rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  background: ${props => props.active ? 'rgba(100, 255, 218, 0.2)' : 'transparent'};
  color: ${props => props.active ? '#64ffda' : '#f0f0f0'};
  border: 1px solid ${props => props.active ? '#64ffda' : 'rgba(255, 255, 255, 0.2)'};
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(100, 255, 218, 0.1);
    border-color: #64ffda;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;
`;

const ProjectsPage = () => {
  const [filter, setFilter] = React.useState('all');
  
  // Generate placeholder image URLs using a color based on the seed
  const generateProjectImage = (seed) => {
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
    
    // Return a data URI for a simple SVG gradient
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${color.replace('#', '%23')}" /><stop offset="100%" stop-color="${secondaryColor.replace('#', '%23')}" /></linearGradient></defs><rect width="300" height="300" fill="url(%23grad)" /></svg>`;
  };
  
  // Sample projects data
  const projects = [
    {
      title: "GNS Club Website",
      type: "Frontend",
      description: "The official website for the GNS Web Development Club, featuring information about the club, events, projects, and resources for members.",
      image: "https://i.postimg.cc/wv1M70DV/gnswebdevproject.png",
      contributors: ["Brendan Lo", "Thomas Liu"],
      github: "https://github.com/patriotsbreeze/gnswebdev",
      demo: "https://gnswebdev.club"
    },
    {
      title: "GNS SADD Website",
      type: "Frontend",
      description: "The GNS SADD website promotes youth leadership and peer-driven prevention of destructive decisions through events, education, and community involvement.",
      image: "https://i.postimg.cc/66R6g7cy/gns-saddprojectimg.png",
      contributors: ["Brendan Lo", "Felix Kong"],
      github: "https://github.com/patriotsbreeze/gns-sadd",
      demo: "https://gns-sadd.vercel.app"
    },
    {
      title: "GNS Research Website",
      type: "Frontend",
      description: "The GNS Research Club website displays the projects of the research program, and also the achievements of the GNS Research students.",
      image: "https://i.postimg.cc/x1WcQFjv/gns-research-page.png",
      contributors: ["Brendan Lo", "Marvin Zhong"],
      github: "https://github.com/patriotsbreeze/gns-research",
      demo: "https://gns-research.vercel.app"
    },
    {
      title: "GNS Astronomy Website",
      type: "Frontend",
      description: "The GNS Astronomy Website displays the club's participation in earth science olympiad, observation nights, and learning sessions. ",
      image: "https://i.postimg.cc/wjYCdX8t/gns-astronomypage.png",
      contributors: ["Brendan Lo", "Marvin Zhong", "Jiahao Yu"],
      github: "https://github.com/patriotsbreeze/gns-astronomy",
      demo: "https://gns-astronomy.vercel.app"
    },
    {
      title: "GNS Astronomy Website",
      type: "Frontend",
      description: "The GNS Astronomy Website displays the club's participation in earth science olympiad, observation nights, and learning sessions. ",
      image: "https://i.postimg.cc/wjYCdX8t/gns-astronomypage.png",
      contributors: ["Brendan Lo", "Marvin Zhong", "Jiahao Yu"],
      github: "https://github.com/patriotsbreeze/gns-astronomy",
      demo: "https://gns-astronomy.vercel.app"
    },
    {
      title: "2638 Robotics Website",
      type: "Frontend",
      description: "The Rebel Robotics (FRC Team 2638) website showcases the Great Neck South High School robotics team's mission, achievements, and community involvement, highlighting event updates, outreach programs, and student accomplishments in competitive robotics and STEM leadership.",
      image: "https://i.postimg.cc/fyXyDC9r/rebelroboticswebsiteimage.png",
      contributors: ["Reid Fleishman", "Carolina Dea", "Brendan Lo"],
      github: "https://github.com/thereidfleish/2638-website",
      demo: "https://www.gnsrobotics.com"
    },
    {
      title: "Daniel Kosukhin Portfolio",
      type: "Frontend",
      description: "A personal portfolio website showcasing Daniel Kosukhin’s frontend projects and problem-solving skills, with a focus on clean design and practical technology solutions.",
      image: "https://i.postimg.cc/26sVBMdw/daniel-eng-portfolio.png",
      contributors: ["Daniel Kosukhin"],
      github: "https://github.com/fishnos/daniel-eng-portfolio",
      demo: "https://daniel-eng-portfolio.vercel.app"
    }
  ];
  
  // Filter projects based on selected filter
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter);
  
  return (
    <PageContainer>
      <HeroSection>
        <PageTitle
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Projects
        </PageTitle>
        <PageSubtitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore the diverse range of projects created by our club members. From web applications to mobile apps, 
          these projects showcase the skills and creativity of our talented developers.
        </PageSubtitle>
      </HeroSection>
      
      <ProjectsSection>
        <FilterContainer>
          <FilterButton 
            active={filter === 'all'} 
            onClick={() => setFilter('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All Projects
          </FilterButton>
          <FilterButton 
            active={filter === 'Frontend'} 
            onClick={() => setFilter('Frontend')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Frontend
          </FilterButton>
          <FilterButton 
            active={filter === 'Backend'} 
            onClick={() => setFilter('Backend')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Backend
          </FilterButton>
          <FilterButton 
            active={filter === 'Full Stack'} 
            onClick={() => setFilter('Full Stack')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Full Stack
          </FilterButton>
          <FilterButton 
            active={filter === 'Mobile App'} 
            onClick={() => setFilter('Mobile App')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Mobile Apps
          </FilterButton>
        </FilterContainer>
        
        <ProjectsGrid>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </ProjectsGrid>
      </ProjectsSection>
    </PageContainer>
  );
};

export default ProjectsPage;
