import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { theme } from '../styles/theme';
import { 
  Container, 
  Section, 
  Heading, 
  Text, 
  Grid, 
  Button,
  Input,
  Textarea,
  FormGroup,
  Label,
  ErrorMessage,
  Flex,
  Card
} from './StyledComponents';
import { ContactFormData } from '../types';
import { contactsAPI } from '../services/api';

const FooterWrapper = styled.footer`
  background: linear-gradient(135deg, ${theme.colors.neutral[800]}, ${theme.colors.neutral[900]});
  color: ${theme.colors.white};
`;

const ContactSection = styled(Section)`
  padding-bottom: 0;
`;

const ContactCard = styled(Card)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  
  .icon {
    width: 48px;
    height: 48px;
    background: ${theme.colors.primary[500]};
    border-radius: ${theme.borderRadius.lg};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    flex-shrink: 0;
  }
`;

const ContactDetails = styled.div`
  h4 {
    font-weight: ${theme.typography.fontWeight.semibold};
    margin-bottom: ${theme.spacing.xs};
    color: ${theme.colors.white};
  }
  
  p {
    color: ${theme.colors.neutral[300]};
    margin: 0;
  }
`;

const FormCard = styled(ContactCard)`
  padding: ${theme.spacing.xl};
`;

const SuccessMessage = styled.div`
  text-align: center;
  padding: ${theme.spacing.xl};
  
  .icon {
    width: 64px;
    height: 64px;
    background: ${theme.colors.success};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing.md};
    color: ${theme.colors.white};
    font-size: 32px;
  }
`;

const MapSection = styled.div`
  margin: ${theme.spacing.xl} 0;
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  height: 300px;
  background: ${theme.colors.neutral[700]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BottomFooter = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: ${theme.spacing.lg} 0;
  margin-top: ${theme.spacing.xl};
`;

const FooterGrid = styled(Grid)`
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }
`;

const QuickLinks = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      margin-bottom: ${theme.spacing.sm};
      
      a {
        color: ${theme.colors.neutral[300]};
        transition: color 0.2s ease;
        
        &:hover {
          color: ${theme.colors.primary[400]};
        }
      }
    }
  }
`;

const Hours = styled.div`
  .day {
    display: flex;
    justify-content: space-between;
    margin-bottom: ${theme.spacing.xs};
    padding: ${theme.spacing.xs} 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    &:last-child {
      border-bottom: none;
    }
  }
  
  .time {
    color: ${theme.colors.neutral[300]};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.md};
  
  a {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    transition: all 0.2s ease;
    
    &:hover {
      background: ${theme.colors.primary[500]};
      transform: translateY(-2px);
    }
  }
`;

const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  phone: yup.string(),
  subject: yup.string().required('Assunto é obrigatório'),
  message: yup.string().required('Mensagem é obrigatória'),
});

const Footer: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema) as any,
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      await contactsAPI.create(data);
      setSuccess(true);
      reset();
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Endereço',
      details: ['Rua das Flores, 123', 'Centro, São Paulo - SP', 'CEP: 01234-567'],
    },
    {
      icon: '📞',
      title: 'Telefone',
      details: ['(11) 3333-4444', '(11) 99999-9999'],
    },
    {
      icon: '✉️',
      title: 'Email',
      details: ['contato@clinicapro.com.br', 'agendamentos@clinicapro.com.br'],
    },
  ];

  const workingHours = [
    { day: 'Segunda - Sexta', time: '08:00 - 18:00' },
    { day: 'Sábado', time: '08:00 - 12:00' },
    { day: 'Domingo', time: 'Fechado' },
    { day: 'Emergência 24h', time: '(11) 99999-9999' },
  ];

  const quickLinks = [
    'Página Inicial',
    'Nossos Serviços',
    'Sobre Nós',
    'Convênios',
    'Exames',
    'Política de Privacidade',
    'Termos de Uso',
    'Trabalhe Conosco',
  ];

  return (
    <FooterWrapper id="contact">
      <ContactSection>
        <Container>
          <Heading $level={2} $size="4xl" $align="center" $color={theme.colors.white} $margin={`0 0 ${theme.spacing.xl}`}>
            Entre em Contato
          </Heading>
          
          <Grid $columns={2} $gap={theme.spacing['2xl']}>
            <ContactInfo>
              {contactInfo.map((item, index) => (
                <ContactItem key={index}>
                  <div className="icon">{item.icon}</div>
                  <ContactDetails>
                    <h4>{item.title}</h4>
                    {item.details.map((detail, i) => (
                      <p key={i}>{detail}</p>
                    ))}
                  </ContactDetails>
                </ContactItem>
              ))}
              
              <div>
                <Heading $level={4} $color={theme.colors.white} $margin={`0 0 ${theme.spacing.md}`}>
                  Horários de Funcionamento
                </Heading>
                <Hours>
                  {workingHours.map((schedule, index) => (
                    <div className="day" key={index}>
                      <span>{schedule.day}</span>
                      <span className="time">{schedule.time}</span>
                    </div>
                  ))}
                </Hours>
              </div>
            </ContactInfo>
            
            <FormCard>
              {success ? (
                <SuccessMessage>
                  <div className="icon">✓</div>
                  <Heading $level={4} $color={theme.colors.success} $margin={`0 0 ${theme.spacing.md}`}>
                    Mensagem Enviada!
                  </Heading>
                  <Text $color={theme.colors.neutral[300]} $align="center">
                    Obrigado pelo contato. Responderemos em breve.
                  </Text>
                  <Button 
                    $variant="primary" 
                    $size="md" 
                    onClick={() => setSuccess(false)}
                    style={{ marginTop: theme.spacing.lg }}
                  >
                    Enviar Nova Mensagem
                  </Button>
                </SuccessMessage>
              ) : (
                <>
                  <Heading $level={3} $color={theme.colors.white} $margin={`0 0 ${theme.spacing.lg}`}>
                    Envie sua Mensagem
                  </Heading>
                  
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid $columns={2} $gap={theme.spacing.md}>
                      <FormGroup>
                        <Label style={{ color: theme.colors.neutral[200] }}>Nome *</Label>
                        <Input
                          {...register('name')}
                          placeholder="Seu nome"
                          $error={!!errors.name}
                        />
                        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                      </FormGroup>

                      <FormGroup>
                        <Label style={{ color: theme.colors.neutral[200] }}>Email *</Label>
                        <Input
                          {...register('email')}
                          type="email"
                          placeholder="seu@email.com"
                          $error={!!errors.email}
                        />
                        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                      </FormGroup>
                    </Grid>

                    <Grid $columns={2} $gap={theme.spacing.md}>
                      <FormGroup>
                        <Label style={{ color: theme.colors.neutral[200] }}>Telefone</Label>
                        <Input
                          {...register('phone')}
                          placeholder="(11) 99999-9999"
                        />
                      </FormGroup>

                      <FormGroup>
                        <Label style={{ color: theme.colors.neutral[200] }}>Assunto *</Label>
                        <Input
                          {...register('subject')}
                          placeholder="Assunto da mensagem"
                          $error={!!errors.subject}
                        />
                        {errors.subject && <ErrorMessage>{errors.subject.message}</ErrorMessage>}
                      </FormGroup>
                    </Grid>

                    <FormGroup>
                      <Label style={{ color: theme.colors.neutral[200] }}>Mensagem *</Label>
                      <Textarea
                        {...register('message')}
                        placeholder="Digite sua mensagem aqui..."
                        rows={4}
                        $error={!!errors.message}
                      />
                      {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
                    </FormGroup>

                    <Button
                      type="submit"
                      $variant="primary"
                      $size="lg"
                      $fullWidth
                      disabled={loading}
                    >
                      {loading ? 'Enviando...' : 'Enviar Mensagem'}
                    </Button>
                  </form>
                </>
              )}
            </FormCard>
          </Grid>
          
          <MapSection>
            <Text $color={theme.colors.neutral[400]} $align="center">
              📍 Mapa da localização da clínica
            </Text>
          </MapSection>
        </Container>
      </ContactSection>
      
      <BottomFooter>
        <Container>
          <FooterGrid $columns={4} $gap={theme.spacing.lg}>
            <div>
              <Heading $level={4} $color={theme.colors.white} $margin={`0 0 ${theme.spacing.md}`}>
                ClínicaPro
              </Heading>
              <Text $color={theme.colors.neutral[300]} style={{ marginBottom: theme.spacing.md }}>
                Cuidando da sua saúde com excelência, tecnologia e dedicação há mais de 15 anos.
              </Text>
              <SocialLinks>
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="LinkedIn">💼</a>
                <a href="#" aria-label="WhatsApp">💬</a>
              </SocialLinks>
            </div>
            
            <div>
              <Heading $level={4} $color={theme.colors.white} $margin={`0 0 ${theme.spacing.md}`}>
                Links Rápidos
              </Heading>
              <QuickLinks>
                <ul>
                  {quickLinks.slice(0, 4).map((link, index) => (
                    <li key={index}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </QuickLinks>
            </div>
            
            <div>
              <Heading $level={4} $color={theme.colors.white} $margin={`0 0 ${theme.spacing.md}`}>
                Mais Informações
              </Heading>
              <QuickLinks>
                <ul>
                  {quickLinks.slice(4).map((link, index) => (
                    <li key={index}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </QuickLinks>
            </div>
            
            <div>
              <Heading $level={4} $color={theme.colors.white} $margin={`0 0 ${theme.spacing.md}`}>
                Newsletter
              </Heading>
              <Text $color={theme.colors.neutral[300]} style={{ marginBottom: theme.spacing.md }}>
                Receba dicas de saúde e novidades da clínica.
              </Text>
              <Flex $gap={theme.spacing.sm}>
                <Input 
                  type="email" 
                  placeholder="Seu email"
                  style={{ flex: 1 }}
                />
                <Button $variant="primary" $size="md">
                  Assinar
                </Button>
              </Flex>
            </div>
          </FooterGrid>
          
          <div style={{ 
            textAlign: 'center', 
            marginTop: theme.spacing.xl,
            paddingTop: theme.spacing.lg,
            borderTop: `1px solid rgba(255, 255, 255, 0.1)`
          }}>
            <Text $color={theme.colors.neutral[400]}>
              © 2024 ClínicaPro. Todos os direitos reservados. | 
              CNPJ: 00.000.000/0001-00 | 
              CRM: 123456-SP
            </Text>
          </div>
        </Container>
      </BottomFooter>
    </FooterWrapper>
  );
};

export default Footer;