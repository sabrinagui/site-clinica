import axios from 'axios';
import { Service, Appointment, Contact, AppointmentFormData, ContactFormData } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Services API
export const servicesAPI = {
  getAll: (): Promise<Service[]> =>
    api.get('/services/public').then(response => response.data),
  
  getById: (id: number): Promise<Service> =>
    api.get(`/services/${id}`).then(response => response.data),
};

// Appointments API
export const appointmentsAPI = {
  create: (data: AppointmentFormData): Promise<Appointment> =>
    api.post('/appointments/book', data).then(response => response.data),
  
  getAll: (): Promise<Appointment[]> =>
    api.get('/appointments').then(response => response.data),
  
  getById: (id: number): Promise<Appointment> =>
    api.get(`/appointments/${id}`).then(response => response.data),
  
  update: (id: number, data: Partial<Appointment>): Promise<Appointment> =>
    api.put(`/appointments/${id}`, data).then(response => response.data),
  
  delete: (id: number): Promise<void> =>
    api.delete(`/appointments/${id}`).then(response => response.data),
};

// Contacts API
export const contactsAPI = {
  create: (data: ContactFormData): Promise<Contact> =>
    api.post('/contacts/send', data).then(response => response.data),
  
  getAll: (): Promise<Contact[]> =>
    api.get('/contacts').then(response => response.data),
  
  getById: (id: number): Promise<Contact> =>
    api.get(`/contacts/${id}`).then(response => response.data),
  
  update: (id: number, data: Partial<Contact>): Promise<Contact> =>
    api.put(`/contacts/${id}`, data).then(response => response.data),
  
  delete: (id: number): Promise<void> =>
    api.delete(`/contacts/${id}`).then(response => response.data),
};

export default api;