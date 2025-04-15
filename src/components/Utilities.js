import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Meta component for SEO optimization
const MetaTags = () => {
  return (
    <>
      <meta name="description" content="GNS Web Development Club - Learn, create, and innovate with modern web technologies" />
      <meta name="keywords" content="web development, coding, programming, react, javascript, club, GNS" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0f0f0f" />
    </>
  );
};

// Lazy loading wrapper for images
const LazyImage = ({ src, alt, ...props }) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      loading="lazy" 
      {...props} 
    />
  );
};

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '2rem', 
          textAlign: 'center', 
          color: '#f0f0f0',
          background: 'rgba(255, 0, 0, 0.1)',
          borderRadius: '8px',
          margin: '2rem'
        }}>
          <h2>Something went wrong.</h2>
          <p>Please try refreshing the page or contact support if the issue persists.</p>
          <button 
            onClick={() => this.setState({ hasError: false })}
            style={{
              padding: '0.5rem 1rem',
              background: '#64ffda',
              color: '#0f0f0f',
              border: 'none',
              borderRadius: '4px',
              marginTop: '1rem',
              cursor: 'pointer'
            }}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading spinner component
const LoadingSpinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(100, 255, 218, 0.1);
  border-top: 5px solid #64ffda;
  border-radius: 50%;
  margin: 2rem auto;
`;

// Responsive container for consistent layout
const ResponsiveContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

// Button with consistent styling
const StyledButton = styled(motion.button)`
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  background: ${props => props.primary ? '#64ffda' : 'transparent'};
  color: ${props => props.primary ? '#0f0f0f' : '#64ffda'};
  border: ${props => props.primary ? 'none' : '2px solid #64ffda'};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.primary ? '#4cd3b0' : 'rgba(100, 255, 218, 0.1)'};
    transform: translateY(-3px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

export { 
  MetaTags, 
  LazyImage, 
  ErrorBoundary, 
  LoadingSpinner, 
  ResponsiveContainer, 
  StyledButton 
};
