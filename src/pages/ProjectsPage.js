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
      image: generateProjectImage("gns-website"),
      contributors: ["Alex Johnson", "Taylor Rodriguez"],
      github: "https://github.com",
      demo: "https://gnswebdev.club"
    },
    {
      title: "Study Buddy",
      type: "Full Stack",
      description: "A collaborative study platform that helps students find study partners, create study groups, and share resources for their courses.",
      image: generateProjectImage("study-buddy"),
      contributors: ["Jordan Lee", "Casey Williams", "Riley Chen"],
      github: "https://github.com",
      demo: "https://studybuddy.app"
    },
    {
      title: "Campus Events",
      type: "Mobile App",
      description: "A mobile application that aggregates and displays all campus events, allowing students to discover, save, and RSVP to events they're interested in.",
      image: generateProjectImage("campus-events"),
      contributors: ["Morgan Smith", "Alex Johnson"],
      github: "https://github.com",
      demo: null
    },
    {
      title: "Code Review Bot",
      type: "Backend",
      description: "A GitHub bot that automatically reviews pull requests, checks for code quality issues, and provides suggestions for improvements.",
      image: generateProjectImage("code-review-bot"),
      contributors: ["Jordan Lee", "Riley Chen"],
      github: "https://github.com",
      demo: null
    },
    {
      title: "Virtual Classroom",
      type: "Full Stack",
      description: "A virtual classroom platform with video conferencing, interactive whiteboard, and real-time collaboration tools for remote learning.",
      image: generateProjectImage("virtual-classroom"),
      contributors: ["Taylor Rodriguez", "Casey Williams", "Morgan Smith"],
      github: "https://github.com",
      demo: "https://virtualclassroom.edu"
    },
    {
      title: "Budget Tracker",
      type: "Frontend",
      description: "A personal finance application that helps users track expenses, set budgets, and visualize spending patterns with interactive charts.",
      image: generateProjectImage("budget-tracker"),
      contributors: ["Alex Johnson", "Riley Chen"],
      github: "https://github.com",
      demo: "https://budgettracker.io"
    },
    {
      title: "Recipe Finder",
      type: "Frontend",
      description: "A web application that allows users to search for recipes based on ingredients they have, dietary restrictions, and cooking time.",
      image: generateProjectImage("recipe-finder"),
      contributors: ["Morgan Smith", "Taylor Rodriguez"],
      github: "https://github.com",
      demo: "https://recipefinder.app"
    },
    {
      title: "Fitness Tracker",
      type: "Mobile App",
      description: "A mobile app that tracks workouts, provides exercise recommendations, and visualizes progress over time with detailed analytics.",
      image: generateProjectImage("fitness-tracker"),
      contributors: ["Casey Williams", "Jordan Lee"],
      github: "https://github.com",
      demo: null
    },
    {
      title: "Weather Dashboard",
      type: "Frontend",
      description: "A weather dashboard that displays current conditions, forecasts, and historical weather data with beautiful visualizations.",
      image: generateProjectImage("weather-dashboard"),
      contributors: ["Riley Chen", "Alex Johnson"],
      github: "https://github.com",
      demo: "https://weatherdash.io"
    },
    {
      title: "Task Manager",
      type: "Full Stack",
      description: "A collaborative task management system with features like task assignment, due dates, priority levels, and progress tracking.",
      image: generateProjectImage("task-manager"),
      contributors: ["Jordan Lee", "Morgan Smith", "Taylor Rodriguez"],
      github: "https://github.com",
      demo: "https://taskmanager.app"
    },
    {
      title: "E-commerce Platform",
      type: "Full Stack",
      description: "A complete e-commerce solution with product listings, shopping cart, secure checkout, and order management capabilities.",
      image: generateProjectImage("ecommerce-platform"),
      contributors: ["Casey Williams", "Riley Chen", "Alex Johnson"],
      github: "https://github.com",
      demo: "https://shopnow.store"
    },
    {
      title: "Social Media Dashboard",
      type: "Frontend",
      description: "A dashboard that aggregates and displays social media metrics and analytics from multiple platforms in one centralized interface.",
      image: generateProjectImage("social-dashboard"),
      contributors: ["Taylor Rodriguez", "Jordan Lee"],
      github: "https://github.com",
      demo: "https://socialdash.app"
    },
    {
      title: "Language Learning App",
      type: "Mobile App",
      description: "A language learning application with interactive lessons, speech recognition, and spaced repetition for effective vocabulary retention.",
      image: generateProjectImage("language-app"),
      contributors: ["Morgan Smith", "Casey Williams"],
      github: "https://github.com",
      demo: null
    },
    {
      title: "Job Board",
      type: "Full Stack",
      description: "A job board platform where employers can post openings and job seekers can search, filter, and apply for positions that match their skills.",
      image: generateProjectImage("job-board"),
      contributors: ["Riley Chen", "Taylor Rodriguez", "Jordan Lee"],
      github: "https://github.com",
      demo: "https://jobmatch.careers"
    },
    {
      title: "Music Player",
      type: "Frontend",
      description: "A web-based music player with playlist management, audio visualization, and integration with popular streaming services.",
      image: generateProjectImage("music-player"),
      contributors: ["Alex Johnson", "Morgan Smith"],
      github: "https://github.com",
      demo: "https://waveplayer.app"
    },
    {
      title: "Note Taking App",
      type: "Full Stack",
      description: "A feature-rich note-taking application with markdown support, tagging, search functionality, and real-time synchronization across devices.",
      image: generateProjectImage("note-app"),
      contributors: ["Jordan Lee", "Casey Williams"],
      github: "https://github.com",
      demo: "https://quicknotes.app"
    },
    {
      title: "Portfolio Generator",
      type: "Frontend",
      description: "A tool that helps developers create professional portfolios by inputting their projects, skills, and experience to generate a customized website.",
      image: generateProjectImage("portfolio-generator"),
      contributors: ["Taylor Rodriguez", "Riley Chen"],
      github: "https://github.com",
      demo: "https://portfoliobuilder.dev"
    },
    {
      title: "Meal Planner",
      type: "Mobile App",
      description: "A meal planning application that helps users plan weekly meals, generate shopping lists, and track nutritional information.",
      image: generateProjectImage("meal-planner"),
      contributors: ["Morgan Smith", "Alex Johnson", "Casey Williams"],
      github: "https://github.com",
      demo: null
    },
    {
      title: "Chat Application",
      type: "Full Stack",
      description: "A real-time chat application with features like direct messaging, group chats, file sharing, and end-to-end encryption.",
      image: generateProjectImage("chat-app"),
      contributors: ["Jordan Lee", "Riley Chen", "Taylor Rodriguez"],
      github: "https://github.com",
      demo: "https://chatwave.app"
    },
    {
      title: "Code Playground",
      type: "Frontend",
      description: "An interactive code editor and playground that supports multiple programming languages with real-time preview and collaboration features.",
      image: generateProjectImage("code-playground"),
      contributors: ["Alex Johnson", "Jordan Lee", "Morgan Smith"],
      github: "https://github.com",
      demo: "https://codeplayground.dev"
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
