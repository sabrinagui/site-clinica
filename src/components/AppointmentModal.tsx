import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { theme } from '../styles/theme';
import { 
  Button, 
  Input, 
  Textarea, 
  Select, 
  FormGroup, 
  Label, 
  ErrorMessage,
  Heading,
  Text,
  Card
} from './StyledComponents';
import { Service, AppointmentFormData } from '../types';
import { servicesAPI, appointmentsAPI } from '../services/api';

const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  padding: ${theme.spacing.md};
`;

const ModalContent = styled(Card)`
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  transform: ${props => props.style?.transform || 'scale(0.9)'};
  transition: transform 0.3s ease;
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${theme.spacing.md};
  right: ${theme.spacing.md};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${theme.colors.neutral[100]};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${theme.colors.neutral[600]};
  transition: all 0.2s ease;
  
  &:hover {
    background: ${theme.colors.neutral[200]};
    color: ${theme.colors.neutral[800]};
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.md};
  
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
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

const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  phone: yup.string().required('Telefone é obrigatório'),
  service_id: yup.number().required('Selecione um serviço'),
  appointment_date: yup.string().required('Data é obrigatória'),
  appointment_time: yup.string().required('Horário é obrigatório'),
  message: yup.string().optional(),
});

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormData>({
    resolver: yupResolver(schema) as any,
  });

  useEffect(() => {
    if (isOpen) {
      loadServices();
    }
  }, [isOpen]);

  const loadServices = async () => {
    try {
      const data = await servicesAPI.getAll();
      setServices(data);
    } catch (error) {
      console.error('Erro ao carregar serviços:', error);
    }
  };

  const onSubmit = async (data: AppointmentFormData) => {
    setLoading(true);
    try {
      await appointmentsAPI.create(data);
      setSuccess(true);
      reset();
    } catch (error) {
      console.error('Erro ao agendar consulta:', error);
      alert('Erro ao agendar consulta. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
    reset();
    onClose();
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 8; hour <= 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(time);
      }
    }
    return slots;
  };

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay $isOpen={isOpen} onClick={handleClose}>
      <ModalContent 
        onClick={(e) => e.stopPropagation()}
        style={{ transform: isOpen ? 'scale(1)' : 'scale(0.9)' }}
      >
        <CloseButton onClick={handleClose}>
          ×
        </CloseButton>

        {success ? (
          <SuccessMessage>
            <div className="icon">✓</div>
            <Heading $level={3} $color={theme.colors.success} $margin={`0 0 ${theme.spacing.md}`}>
              Agendamento Realizado!
            </Heading>
            <Text $color={theme.colors.neutral[600]} $align="center">
              Seu agendamento foi realizado com sucesso. Em breve entraremos em contato 
              para confirmar sua consulta.
            </Text>
            <Button 
              $variant="primary" 
              $size="lg" 
              onClick={handleClose}
              style={{ marginTop: theme.spacing.lg }}
            >
              Fechar
            </Button>
          </SuccessMessage>
        ) : (
          <>
            <Heading $level={2} $margin={`0 0 ${theme.spacing.lg}`}>
              Agendar Consulta
            </Heading>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormGrid>
                <FormGroup>
                  <Label>Nome Completo *</Label>
                  <Input
                    {...register('name')}
                    placeholder="Seu nome completo"
                    $error={!!errors.name}
                  />
                  {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label>Email *</Label>
                  <Input
                    {...register('email')}
                    type="email"
                    placeholder="seu@email.com"
                    $error={!!errors.email}
                  />
                  {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                </FormGroup>
              </FormGrid>

              <FormGrid>
                <FormGroup>
                  <Label>Telefone *</Label>
                  <Input
                    {...register('phone')}
                    placeholder="(11) 99999-9999"
                    $error={!!errors.phone}
                  />
                  {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label>Serviço *</Label>
                  <Select
                    {...register('service_id')}
                    $error={!!errors.service_id}
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map(service => (
                      <option key={service.id} value={service.id}>
                        {service.name} {service.price && `- R$ ${service.price}`}
                      </option>
                    ))}
                  </Select>
                  {errors.service_id && <ErrorMessage>{errors.service_id.message}</ErrorMessage>}
                </FormGroup>
              </FormGrid>

              <FormGrid>
                <FormGroup>
                  <Label>Data *</Label>
                  <Input
                    {...register('appointment_date')}
                    type="date"
                    min={getMinDate()}
                    $error={!!errors.appointment_date}
                  />
                  {errors.appointment_date && <ErrorMessage>{errors.appointment_date.message}</ErrorMessage>}
                </FormGroup>

                <FormGroup>
                  <Label>Horário *</Label>
                  <Select
                    {...register('appointment_time')}
                    $error={!!errors.appointment_time}
                  >
                    <option value="">Selecione um horário</option>
                    {generateTimeSlots().map(time => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </Select>
                  {errors.appointment_time && <ErrorMessage>{errors.appointment_time.message}</ErrorMessage>}
                </FormGroup>
              </FormGrid>

              <FormGroup>
                <Label>Observações</Label>
                <Textarea
                  {...register('message')}
                  placeholder="Alguma observação sobre a consulta (opcional)"
                  rows={4}
                />
              </FormGroup>

              <FormGroup>
                <Button
                  type="submit"
                  $variant="primary"
                  $size="lg"
                  $fullWidth
                  disabled={loading}
                >
                  {loading ? 'Agendando...' : 'Agendar Consulta'}
                </Button>
              </FormGroup>
            </form>
          </>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default AppointmentModal;