import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BoardMemberCard = styled(motion.div)`
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

const MemberImage = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${BoardMemberCard}:hover & img {
    transform: scale(1.05);
  }
`;

const MemberInfo = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #f0f0f0;
`;

const MemberRole = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #64ffda;
`;

const MemberBio = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #a0a0a0;
  flex: 1;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled(motion.a)`
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

const BoardMember = ({ member, index }) => {
  return (
    <BoardMemberCard
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.6, 
          delay: 0.1 * index,
          ease: "easeOut"
        }
      }}
      viewport={{ once: true }}
    >
      <MemberImage>
        <img src={member.image} alt={member.name} />
      </MemberImage>
      <MemberInfo>
        <MemberName>{member.name}</MemberName>
        <MemberRole>{member.role}</MemberRole>
        <MemberBio>{member.bio}</MemberBio>
        <SocialLinks>
          {member.social.github && (
            <SocialIcon 
              href={member.social.github} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-github"></i>
            </SocialIcon>
          )}
          {member.social.linkedin && (
            <SocialIcon 
              href={member.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-linkedin-in"></i>
            </SocialIcon>
          )}
          {member.social.twitter && (
            <SocialIcon 
              href={member.social.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-twitter"></i>
            </SocialIcon>
          )}
          {member.social.portfolio && (
            <SocialIcon 
              href={member.social.portfolio} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-globe"></i>
            </SocialIcon>
          )}
        </SocialLinks>
      </MemberInfo>
    </BoardMemberCard>
  );
};

export default BoardMember;
