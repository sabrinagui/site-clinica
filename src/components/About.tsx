import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { 
  Container, 
  Section, 
  Heading, 
  Text, 
  Grid, 
  Card, 
  Button
} from './StyledComponents';

const AboutWrapper = styled(Section)`
  background: linear-gradient(135deg, ${theme.colors.white} 0%, ${theme.colors.neutral[50]} 100%);
  padding: ${theme.spacing['4xl']} 0;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['3xl']};
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }
`;

const ImageSection = styled.div`
  position: relative;
  border-radius: ${theme.borderRadius['2xl']};
  overflow: hidden;
  height: 500px;
  background: linear-gradient(135deg, ${theme.colors.primary[500]}, ${theme.colors.primary[700]});
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(54, 162, 116, 0.1), rgba(26, 71, 53, 0.2));
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${theme.spacing.lg};
  
  h2 {
    font-family: ${theme.typography.fontFamily.serif};
    text-align: left;
    margin-bottom: ${theme.spacing.lg};
  }
  
  p {
    font-family: ${theme.typography.fontFamily.medical};
    text-align: left;
    line-height: 1.7;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing.lg};
  margin: ${theme.spacing['2xl']} 0;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.md};
  }
  
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.sm};
  }
`;

const StatCard = styled(Card)`
  text-align: center;
  padding: ${theme.spacing.md} ${theme.spacing.sm};
  border: 1px solid ${theme.colors.primary[200]};
  background: linear-gradient(135deg, ${theme.colors.primary[50]}, ${theme.colors.white});
  border-radius: ${theme.borderRadius.lg};
  transition: all 0.3s ease;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(54, 162, 116, 0.15);
    border-color: ${theme.colors.primary[300]};
  }
`;

const StatNumber = styled.div`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary[600]};
  margin-bottom: ${theme.spacing.xs};
  line-height: 1;
`;

const StatLabel = styled(Text)`
  font-family: ${theme.typography.fontFamily.medical};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.neutral[700]};
  font-size: ${theme.typography.fontSize.sm};
  line-height: 1.3;
  text-align: center;
`;

const FeatureList = styled.div`
  margin: ${theme.spacing.lg} 0;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.sm};
  
  .icon {
    width: 24px;
    height: 24px;
    background: ${theme.colors.primary[500]};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    font-size: 14px;
    flex-shrink: 0;
  }
`;

const TeamSection = styled.div`
  margin-top: ${theme.spacing['3xl']};
`;

const TeamGrid = styled(Grid)`
  margin-top: ${theme.spacing.xl};
`;

const TeamCard = styled(Card)`
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.xl};
  }
`;

const TeamPhoto = styled.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, ${theme.colors.primary[400]}, ${theme.colors.primary[600]});
  border-radius: 50%;
  margin: 0 auto ${theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  font-size: 3rem;
`;

const TeamName = styled(Heading)`
  margin-bottom: ${theme.spacing.xs};
`;

const TeamRole = styled(Text)`
  color: ${theme.colors.primary[600]};
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing.sm};
`;

const TeamSpecialty = styled(Text)`
  color: ${theme.colors.neutral[500]};
  font-size: ${theme.typography.fontSize.sm};
`;

const About: React.FC = () => {
  const features = [
    'Profissionais altamente qualificados',
    'Equipamentos de última geração',
    'Atendimento humanizado e personalizado',
    'Tecnologia avançada em diagnósticos',
    'Ambiente seguro e confortável',
    'Convênios com principais planos de saúde',
  ];

  const team = [
    {
      name: 'Dr. João Silva',
      role: 'Diretor Médico',
      specialty: 'Cardiologia',
      icon: '👨‍⚕️',
    },
    {
      name: 'Dra. Maria Santos',
      role: 'Coordenadora',
      specialty: 'Clínica Geral',
      icon: '👩‍⚕️',
    },
    {
      name: 'Dr. Pedro Costa',
      role: 'Especialista',
      specialty: 'Ortopedia',
      icon: '👨‍⚕️',
    },
  ];

  return (
    <AboutWrapper id="about">
      <Container>
        <ContentGrid>
          <ContentSection>
            <Heading $level={2} $size="4xl" $margin={`0 0 ${theme.spacing.md}`}>
              Sobre a <span style={{ color: theme.colors.primary[600] }}>ClínicaPro</span>
            </Heading>
            
            <Text $size="lg" $color={theme.colors.neutral[600]} style={{ marginBottom: theme.spacing.lg }}>
              Há mais de 15 anos oferecemos cuidados médicos de excelência com 
              foco na saúde e bem-estar dos nossos pacientes. Nossa missão é 
              proporcionar atendimento humanizado aliado à mais moderna tecnologia médica.
            </Text>
            
            <FeatureList>
              {features.map((feature, index) => (
                <FeatureItem key={index}>
                  <div className="icon">✓</div>
                  <Text $color={theme.colors.neutral[700]}>{feature}</Text>
                </FeatureItem>
              ))}
            </FeatureList>
            
            <Button $variant="primary" $size="lg" style={{ alignSelf: 'flex-start' }}>
              Conheça Nossa História
            </Button>
          </ContentSection>
          
          <ImageSection>
            <img 
              src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Clínica moderna e profissional"
            />
          </ImageSection>
        </ContentGrid>
        
        <StatsGrid>
          <StatCard>
            <StatNumber>15+</StatNumber>
            <StatLabel>Anos de Experiência</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>50k+</StatNumber>
            <StatLabel>Pacientes Atendidos</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>20+</StatNumber>
            <StatLabel>Especialidades</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>98%</StatNumber>
            <StatLabel>Satisfação</StatLabel>
          </StatCard>
        </StatsGrid>
        
        <TeamSection>
          <Heading $level={2} $size="3xl" $align="center" $margin={`0 0 ${theme.spacing.md}`}>
            Nossa Equipe
          </Heading>
          <Text $size="lg" $align="center" $color={theme.colors.neutral[600]}>
            Profissionais dedicados e altamente qualificados para cuidar da sua saúde
          </Text>
          
          <TeamGrid $columns={3} $gap={theme.spacing.lg}>
            {team.map((member, index) => (
              <TeamCard key={index}>
                <TeamPhoto>
                  {member.icon}
                </TeamPhoto>
                <TeamName $level={4} $size="lg">
                  {member.name}
                </TeamName>
                <TeamRole $size="base">
                  {member.role}
                </TeamRole>
                <TeamSpecialty>
                  {member.specialty}
                </TeamSpecialty>
              </TeamCard>
            ))}
          </TeamGrid>
        </TeamSection>
      </Container>
    </AboutWrapper>
  );
};

export default About;