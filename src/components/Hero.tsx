import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { Container, Button, Heading, Text } from './StyledComponents';
import videoClinica from '../assets/videoclinica.mp4';

const HeroWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg, ${theme.colors.primary[600]} 0%, ${theme.colors.primary[800]} 100%);
  padding-top: 80px; // Espaço para o header fixo
`;

const HeroInner = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
`;

const HeroContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
  width: 100%;
  display: flex;
  align-items: center;

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 0 ${theme.spacing.lg};
  }
`;

const VideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(54, 162, 116, 0.7) 0%,
      rgba(26, 71, 53, 0.8) 100%
    );
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  color: ${theme.colors.white};
  max-width: 700px;
  padding: ${theme.spacing.xl} 0;
  text-align: left;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    max-width: 600px;
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg};
    max-width: none;
  }
`;

const HeroTitle = styled(Heading)`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: ${theme.spacing.lg};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  line-height: 1.2;
  
  span {
    color: ${theme.colors.primary[200]};
  }
`;

const HeroSubtitle = styled(Text)`
  font-family: ${theme.typography.fontFamily.medical};
  font-size: clamp(1.125rem, 2vw, 1.375rem);
  margin-bottom: ${theme.spacing.xl};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  color: ${theme.colors.neutral[100]};
  line-height: 1.6;
`;

const CTAGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;
  margin-bottom: ${theme.spacing['2xl']};
  
  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const ReviewBadge = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  margin: ${theme.spacing.md} 0 ${theme.spacing.xl} 0;
  max-width: 280px;
  gap: ${theme.spacing.sm};
  position: relative;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -25px;
    right: 15px;
    width: 50px;
    height: 25px;
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-top: none;
    border-left: none;
    border-radius: 0 0 25px 0;
    opacity: 0.7;
  }
`;

const ReviewAvatars = styled.div`
  display: flex;
  margin-right: ${theme.spacing.xs};
  
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid ${theme.colors.white};
    margin-left: -8px;
    
    &:first-child {
      margin-left: 0;
    }
  }
`;

const ReviewText = styled.div`
  display: flex;
  align-items: center;
  font-family: ${theme.typography.fontFamily.medical};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.white};
  font-weight: ${theme.typography.fontWeight.semibold};
  gap: ${theme.spacing.xs};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const Stars = styled.div`
  display: flex;
  gap: 2px;
  margin-right: ${theme.spacing.xs};
  
  .star {
    color: #ffd700;
    font-size: 14px;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: ${theme.spacing.lg};
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.xs};
  cursor: pointer;
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
  
  &:hover {
    opacity: 0.8;
  }
`;

const ArrowDown = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid ${theme.colors.white};
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
`;

interface HeroProps {
  onBookAppointment: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookAppointment }) => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('services');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroWrapper id="home">
      <VideoBackground>
        <video autoPlay muted loop playsInline>
          <source src={videoClinica} type="video/mp4" />
          {/* Fallback para caso não tenha vídeo */}
        </video>
      </VideoBackground>
      
      <HeroInner>
        <HeroContainer>
          <HeroContent>
          <HeroTitle $level={1} $color={theme.colors.white} $align="left">
            Cuidando da sua <span>saúde</span> com excelência e dedicação
          </HeroTitle>
          
          <HeroSubtitle $align="left">
            Profissionais qualificados e tecnologia de ponta para oferecer 
            o melhor atendimento médico para você e sua família.
          </HeroSubtitle>
          
          <ReviewBadge>
            <ReviewAvatars>
              <img src="https://images.unsplash.com/photo-1494790108755-2616b612b04c?w=64&h=64&fit=crop&crop=face" alt="Paciente 1" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face" alt="Paciente 2" />
            </ReviewAvatars>
            <Stars>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </Stars>
            <ReviewText>
              +3k
            </ReviewText>
          </ReviewBadge>
          
          <CTAGroup>
            <Button $variant="primary" $size="lg" onClick={onBookAppointment}>
              Agendar Consulta
            </Button>
            <Button $variant="outline" $size="lg">
              Conheça Nossos Serviços
            </Button>
          </CTAGroup>
          </HeroContent>
        </HeroContainer>
      </HeroInner>
      
      <ScrollIndicator onClick={scrollToNextSection}>
        <Text $size="sm" $color={theme.colors.white}>
          Explore
        </Text>
        <ArrowDown />
      </ScrollIndicator>
    </HeroWrapper>
  );
};

export default Hero;