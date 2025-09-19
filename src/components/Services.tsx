import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { Container, Section, Heading, Text } from './StyledComponents';

const ServicesWrapper = styled(Section)`
  background: linear-gradient(135deg, ${theme.colors.neutral[50]} 0%, ${theme.colors.primary[50]} 100%);
  padding: ${theme.spacing['4xl']} 0;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${theme.spacing.xl};
  margin-top: ${theme.spacing['2xl']};
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;

const ServiceCard = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius['2xl']};
  padding: ${theme.spacing.xl};
  box-shadow: 0 8px 25px rgba(54, 162, 116, 0.08);
  border: 1px solid rgba(54, 162, 116, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${theme.colors.primary[500]}, ${theme.colors.medical[500]});
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(54, 162, 116, 0.15);
    border-color: ${theme.colors.primary[300]};
    
    &::before {
      opacity: 1;
    }
  }
`;

const ServiceIcon = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, ${theme.colors.primary[500]}, ${theme.colors.primary[600]});
  border-radius: ${theme.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.white};
  font-size: 1.8rem;
  transition: all 0.3s ease;
  
  ${ServiceCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    background: linear-gradient(135deg, ${theme.colors.medical[500]}, ${theme.colors.medical[600]});
  }
`;

const ServiceTitle = styled(Heading)`
  font-family: ${theme.typography.fontFamily.serif};
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.neutral[800]};
  font-size: ${theme.typography.fontSize['xl']};
`;

const ServiceDescription = styled(Text)`
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.neutral[600]};
  line-height: 1.7;
  font-family: ${theme.typography.fontFamily.medical};
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${theme.spacing.lg} 0;
`;

const ServiceFeature = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing.xs};
  font-family: ${theme.typography.fontFamily.medical};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.neutral[600]};
  
  &::before {
    content: '✓';
    color: ${theme.colors.primary[500]};
    font-weight: bold;
    margin-right: ${theme.spacing.sm};
    font-size: ${theme.typography.fontSize.base};
  }
`;

const ServiceCTA = styled.button`
  background: linear-gradient(135deg, ${theme.colors.primary[500]}, ${theme.colors.primary[600]});
  border: none;
  border-radius: ${theme.borderRadius.lg};
  color: ${theme.colors.white};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  font-family: ${theme.typography.fontFamily.medical};
  font-weight: ${theme.typography.fontWeight.semibold};
  font-size: ${theme.typography.fontSize.sm};
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
  width: 100%;
  
  &:hover {
    background: linear-gradient(135deg, ${theme.colors.primary[600]}, ${theme.colors.primary[700]});
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(54, 162, 116, 0.3);
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
`;

const services = [
  {
    id: 1,
    icon: '🩺',
    title: 'Clínica Geral',
    description: 'Atendimento médico completo para prevenção, diagnóstico e tratamento de diversas condições de saúde.',
    features: [
      'Consultas preventivas',
      'Check-ups completos',
      'Atendimento de emergência',
      'Acompanhamento contínuo'
    ]
  },
  {
    id: 2,
    icon: '❤️',
    title: 'Cardiologia',
    description: 'Especialistas em saúde cardiovascular com equipamentos modernos para diagnóstico e tratamento.',
    features: [
      'Eletrocardiograma',
      'Ecocardiograma',
      'Teste ergométrico',
      'Monitoramento cardíaco'
    ]
  },
  {
    id: 3,
    icon: '🦴',
    title: 'Ortopedia',
    description: 'Tratamento especializado para problemas ósseos, articulares e do sistema músculo-esquelético.',
    features: [
      'Fraturas e luxações',
      'Dores articulares',
      'Lesões esportivas',
      'Fisioterapia'
    ]
  },
  {
    id: 4,
    icon: '🧠',
    title: 'Neurologia',
    description: 'Diagnóstico e tratamento de distúrbios do sistema nervoso central e periférico.',
    features: [
      'Enxaquecas e cefaleias',
      'Epilepsia',
      'AVC e sequelas',
      'Doenças neurodegenerativas'
    ]
  },
  {
    id: 5,
    icon: '🔬',
    title: 'Laboratório',
    description: 'Exames laboratoriais completos com resultados rápidos e precisos.',
    features: [
      'Exames de sangue',
      'Análises clínicas',
      'Testes hormonais',
      'Microbiologia'
    ]
  },
  {
    id: 6,
    icon: '👁️',
    title: 'Oftalmologia',
    description: 'Cuidados especializados para a saúde dos seus olhos e prevenção de problemas visuais.',
    features: [
      'Exames de vista',
      'Tratamento de glaucoma',
      'Cirurgias oculares',
      'Consultas pediátricas'
    ]
  }
];

interface ServicesProps {
  onBookAppointment: () => void;
}

const Services: React.FC<ServicesProps> = ({ onBookAppointment }) => {
  return (
    <ServicesWrapper id="services">
      <Container>
        <SectionHeader>
          <Heading 
            $level={2} 
            $size="4xl" 
            $align="center" 
            $margin={`0 0 ${theme.spacing.md}`}
            style={{ 
              color: theme.colors.neutral[800] 
            }}
          >
            Nossos Serviços Especializados
          </Heading>
          <Text 
            $size="lg" 
            $align="center" 
            $color={theme.colors.neutral[600]}
            style={{ 
              lineHeight: '1.6' 
            }}
          >
            Oferecemos atendimento médico de excelência com profissionais altamente 
            qualificados e tecnologia de ponta para cuidar da sua saúde.
          </Text>
        </SectionHeader>

        <ServicesGrid>
          {services.map(service => (
            <ServiceCard key={service.id}>
              <ServiceIcon>
                {service.icon}
              </ServiceIcon>
              
              <ServiceTitle $level={3}>
                {service.title}
              </ServiceTitle>
              
              <ServiceDescription>
                {service.description}
              </ServiceDescription>
              
              <ServiceFeatures>
                {service.features.map((feature, index) => (
                  <ServiceFeature key={index}>
                    {feature}
                  </ServiceFeature>
                ))}
              </ServiceFeatures>
              
              <ServiceCTA onClick={onBookAppointment}>
                Agendar Consulta
              </ServiceCTA>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesWrapper>
  );
};

export default Services;