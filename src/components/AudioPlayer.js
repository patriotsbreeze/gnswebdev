import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PlayerContainer = styled.div`
  width: 100%;
  background: rgba(30, 30, 30, 0.5);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
  margin-bottom: 2rem;
`;

const PlayerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PlayButton = styled(motion.button)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #64ffda;
  color: #0f0f0f;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  flex-shrink: 0;
  
  &:disabled {
    background: rgba(100, 255, 218, 0.3);
    cursor: not-allowed !important;
  }
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
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.3rem;
  }
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

const ProgressContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.progress}%;
    background: #64ffda;
    border-radius: 3px;
    transition: width 0.1s linear;
  }
`;

const TimeDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #a0a0a0;
  margin-top: 0.5rem;
`;

const PlayerControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const ControlButton = styled(motion.button)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed !important;
  }
`;

const VolumeControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-left: auto;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const VolumeSlider = styled.input`
  -webkit-appearance: none;
  width: 100px;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  outline: none;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #64ffda;
    cursor: pointer;
  }
  
  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #64ffda;
    cursor: pointer;
    border: none;
  }
`;

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

const AudioPlayer = ({ episode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  
  useEffect(() => {
    // Reset player when episode changes
    setIsPlaying(false);
    setCurrentTime(0);
    
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.src = episode.audioUrl;
      audioRef.current.load();
    }
  }, [episode]);
  
  useEffect(() => {
    const audio = audioRef.current;
    
    const setAudioData = () => {
      setDuration(audio.duration);
    };
    
    const setAudioTime = () => {
      setCurrentTime(audio.currentTime);
    };
    
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      audio.currentTime = 0;
    };
    
    // Add event listeners
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', handleEnded);
    
    // Set volume
    audio.volume = volume;
    
    // Cleanup
    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [volume]);
  
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  
  const handleProgress = (e) => {
    const progressBar = progressBarRef.current;
    const position = (e.pageX - progressBar.getBoundingClientRect().left) / progressBar.offsetWidth;
    const newTime = position * duration;
    
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };
  
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };
  
  const handleRewind = () => {
    const newTime = Math.max(0, currentTime - 15);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };
  
  const handleForward = () => {
    const newTime = Math.min(duration, currentTime + 15);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };
  
  const progress = duration ? (currentTime / duration) * 100 : 0;
  
  return (
    <PlayerContainer>
      <audio ref={audioRef} src={episode.audioUrl} preload="metadata" />
      
      <PlayerHeader>
        <PlayButton 
          onClick={togglePlay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={!episode.audioUrl}
        >
          <i className={isPlaying ? "fas fa-pause" : "fas fa-play"}></i>
        </PlayButton>
        
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
      </PlayerHeader>
      
      <ProgressContainer>
        <ProgressBar 
          ref={progressBarRef}
          progress={progress}
          onClick={handleProgress}
        />
        <TimeDisplay>
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </TimeDisplay>
      </ProgressContainer>
      
      <PlayerControls>
        <ControlButton 
          onClick={handleRewind}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={!episode.audioUrl || currentTime < 1}
        >
          <i className="fas fa-undo-alt"></i>
        </ControlButton>
        
        <PlayButton 
          onClick={togglePlay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={!episode.audioUrl}
          style={{ width: '50px', height: '50px' }}
        >
          <i className={isPlaying ? "fas fa-pause" : "fas fa-play"}></i>
        </PlayButton>
        
        <ControlButton 
          onClick={handleForward}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          disabled={!episode.audioUrl || currentTime >= duration}
        >
          <i className="fas fa-redo-alt"></i>
        </ControlButton>
        
        <VolumeControl>
          <i className={
            volume === 0 
              ? "fas fa-volume-mute" 
              : volume < 0.5 
                ? "fas fa-volume-down" 
                : "fas fa-volume-up"
          }></i>
          <VolumeSlider 
            type="range" 
            min="0" 
            max="1" 
            step="0.01" 
            value={volume} 
            onChange={handleVolumeChange} 
          />
        </VolumeControl>
      </PlayerControls>
    </PlayerContainer>
  );
};

export default AudioPlayer;
