import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import MeetingSlidesPage from './pages/MeetingSlidesPage';
import ProjectsPage from './pages/ProjectsPage';
import PodcastPage from './pages/PodcastPage';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #0f0f0f;
    color: #f0f0f0;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    outline: none;
    background: none;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #0f0f0f;
  }

  ::-webkit-scrollbar-thumb {
    background: #64ffda;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #4cd3b0;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }
  
  @media (max-width: 480px) {
    html {
      font-size: 12px;
    }
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 80px; /* Height of the navigation bar */
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Navigation />
        <MainContent>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/slides" element={<MeetingSlidesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/podcast" element={<PodcastPage />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
