export interface Service {
  id: number;
  name: string;
  description: string;
  icon?: string;
  price?: number;
  duration?: number;
  active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Appointment {
  id: number;
  name: string;
  email: string;
  phone: string;
  service_id: number;
  service?: Service;
  appointment_date: string;
  appointment_time: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  created_at: string;
  updated_at: string;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  created_at: string;
  updated_at: string;
}

export interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  service_id: number;
  appointment_date: string;
  appointment_time: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}