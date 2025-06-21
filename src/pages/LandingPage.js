import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 0 5%;
  
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

const HeroContent = styled.div`
  max-width: 1200px;
  text-align: center;
  z-index: 1;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #64ffda, #00bfa5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  text-shadow: 0px 4px 15px rgba(71, 153, 105, 0.3);
`;

const HeroSubtitle = styled(motion.h2)`
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 700;
  margin-bottom: 2rem;
  color: #f0f0f0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroButton = styled(motion.button)`
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  background: transparent;
  color: #64ffda;
  border: 2px solid #64ffda;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }
`;

const FloatingShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`;

const Shape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: rgba(100, 255, 218, 0.1);
  filter: blur(20px);
  box-shadow: var(--shadow-2xs);
`;

const AboutSection = styled.section`
  padding: 8rem 5%;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const AboutCard = styled(motion.div)`
  background: rgba(30, 30, 30, 0.5);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(100, 255, 218, 0.3);
  }
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  color: #64ffda;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #f0f0f0;
`;

const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #a0a0a0;
`;

const FeaturesSection = styled.section`
  padding: 8rem 5%;
  background: #0f0f0f;
  position: relative;
`;

const FeaturesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FeaturesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
`;

const FeatureItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FeatureNumber = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: #64ffda;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #f0f0f0;
`;

const FeatureText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #a0a0a0;
`;

const CTASection = styled.section`
  padding: 8rem 5%;
  background: linear-gradient(to bottom, #0a0a0a, #0f0f0f);
  position: relative;
  overflow: hidden;
`;

const CTAContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const CTATitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #f0f0f0;
`;

const CTAText = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #a0a0a0;
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(motion.button)`
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  background: #64ffda;
  color: #0f0f0f;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #4cd3b0;
    transform: translateY(-5px);
  }
`;

const SecondaryButton = styled(motion.button)`
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  background: transparent;
  color: #64ffda;
  border: 2px solid #64ffda;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-5px);
  }
`;

const LandingPage = () => {
  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  const subtitleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
    }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.6, ease: "easeOut" }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: 0.2 * i,
        ease: "easeOut"
      }
    }),
    hover: { 
      y: -10,
      transition: { duration: 0.3 }
    }
  };
  
  const featureVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6, 
        delay: 0.2 * i,
        ease: "easeOut"
      }
    })
  };
  
  // Generate random positions for floating shapes
  const generateShapes = () => {
    const shapes = [];
    for (let i = 0; i < 6; i++) {
      const size = Math.random() * 200 + 50;
      shapes.push({
        id: i,
        size: size,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5
      });
    }
    return shapes;
  };
  
  const shapes = generateShapes();
  
  return (
    <>
      <HeroSection>
        <FloatingShapes>
          {shapes.map((shape) => (
            <Shape
              key={shape.id}
              style={{
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                top: `${shape.y}%`,
                left: `${shape.x}%`,
              }}
              animate={{
                x: [0, 30, -30, 0],
                y: [0, -30, 30, 0],
              }}
              transition={{
                duration: shape.duration,
                delay: shape.delay,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </FloatingShapes>
        
        <HeroContent>
          <HeroTitle
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            GNS Web Development Club
          </HeroTitle>
          
          <HeroSubtitle
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
          >
            Building the future of the web, one project at a time. Join us to learn, create, and innovate with modern web technologies.
          </HeroSubtitle>
          
          <Link to="/join" style={{ textDecoration: 'none' }}>
            <HeroButton
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
            >
              Join the Club
            </HeroButton>
          </Link>
        </HeroContent>
      </HeroSection>
      
      <AboutSection>
        <AboutContainer>
          <SectionTitle
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What We Do
          </SectionTitle>
          
          <AboutContent>
            <AboutCard
              variants={cardVariants}
              custom={0}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <CardIcon>
                <i className="fas fa-code"></i>
              </CardIcon>
              <CardTitle>Learn Modern Web Development</CardTitle>
              <CardText>
                We provide hands-on workshops, tutorials, and resources to help members learn the latest web technologies, frameworks, and best practices. From HTML/CSS basics to advanced React applications, we cover it all.
              </CardText>
            </AboutCard>
            
            <AboutCard
              variants={cardVariants}
              custom={1}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <CardIcon>
                <i className="fas fa-laptop-code"></i>
              </CardIcon>
              <CardTitle>Build Real-World Projects</CardTitle>
              <CardText>
                Apply your skills by working on real projects that solve actual problems. Our collaborative environment encourages teamwork, code reviews, and agile development practices that prepare you for industry work.
              </CardText>
            </AboutCard>
            
            <AboutCard
              variants={cardVariants}
              custom={2}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <CardIcon>
                <i className="fas fa-users"></i>
              </CardIcon>
              <CardTitle>Connect with the Community</CardTitle>
              <CardText>
                Join a vibrant community of like-minded developers. Network with peers, collaborate on projects, and learn from each other's experiences. We also invite industry professionals for guest talks and mentorship.
              </CardText>
            </AboutCard>
          </AboutContent>
        </AboutContainer>
      </AboutSection>
      
      <FeaturesSection>
        <FeaturesContainer>
          <SectionTitle
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Club Activities
          </SectionTitle>
          
          <FeaturesList>
            <FeatureItem
              variants={featureVariants}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FeatureNumber>01</FeatureNumber>
              <FeatureTitle>Weekly Workshops</FeatureTitle>
              <FeatureText>
                Participate in our weekly hands-on workshops where we explore different web technologies, frameworks, and tools. Each session focuses on practical skills you can immediately apply to your projects.
              </FeatureText>
            </FeatureItem>
            
            <FeatureItem
              variants={featureVariants}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FeatureNumber>02</FeatureNumber>
              <FeatureTitle>Hackathons</FeatureTitle>
              <FeatureText>
                Test your skills and creativity in our regular hackathons. Work in teams to build innovative web applications within a limited timeframe, with prizes for the most impressive projects.
              </FeatureText>
            </FeatureItem>
            
            <FeatureItem
              variants={featureVariants}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FeatureNumber>03</FeatureNumber>
              <FeatureTitle>Project Collaborations</FeatureTitle>
              <FeatureText>
                Join ongoing project teams working on various web applications. From personal portfolios to complex web apps, there's always something exciting to contribute to and learn from.
              </FeatureText>
            </FeatureItem>
            
            <FeatureItem
              variants={featureVariants}
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FeatureNumber>04</FeatureNumber>
              <FeatureTitle>Tech Talks</FeatureTitle>
              <FeatureText>
                Listen to and participate in discussions about the latest trends, technologies, and best practices in web development. We regularly invite industry professionals to share their insights.
              </FeatureText>
            </FeatureItem>
            
            <FeatureItem
              variants={featureVariants}
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FeatureNumber>05</FeatureNumber>
              <FeatureTitle>Code Reviews</FeatureTitle>
              <FeatureText>
                Improve your coding skills through constructive feedback. Our regular code review sessions help members write cleaner, more efficient, and more maintainable code.
              </FeatureText>
            </FeatureItem>
            
            <FeatureItem
              variants={featureVariants}
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FeatureNumber>06</FeatureNumber>
              <FeatureTitle>Engage in Your Community</FeatureTitle>
              <FeatureText>
                Impact the community by creating websites for local businesses, school clubs, or any organizations in need of a digital presence to enhance outreach and engagement.
              </FeatureText>
            </FeatureItem>
          </FeaturesList>
        </FeaturesContainer>
      </FeaturesSection>
      
    </>
  );
};

export default LandingPage;
