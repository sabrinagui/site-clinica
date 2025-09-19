import styled, { createGlobalStyle } from 'styled-components';
import { theme } from '../styles/theme';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.typography.fontFamily.sans.join(', ')};
    font-size: ${theme.typography.fontSize.base};
    font-weight: ${theme.typography.fontWeight.normal};
    line-height: 1.6;
    color: ${theme.colors.neutral[800]};
    background-color: ${theme.colors.white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  input, textarea, select {
    font-family: inherit;
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 0 ${theme.spacing.lg};
  }
`;

export const Section = styled.section<{ $background?: string; $padding?: string }>`
  padding: ${props => props.$padding || `${theme.spacing['3xl']} 0`};
  background: ${props => props.$background || 'transparent'};
`;

export const Button = styled.button<{
  $variant?: 'primary' | 'secondary' | 'outline';
  $size?: 'sm' | 'md' | 'lg';
  $fullWidth?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.xs};
  padding: ${props => {
    switch (props.$size) {
      case 'sm': return `${theme.spacing.xs} ${theme.spacing.md}`;
      case 'lg': return `${theme.spacing.md} ${theme.spacing.xl}`;
      default: return `${theme.spacing.sm} ${theme.spacing.lg}`;
    }
  }};
  font-size: ${props => {
    switch (props.$size) {
      case 'sm': return theme.typography.fontSize.sm;
      case 'lg': return theme.typography.fontSize.lg;
      default: return theme.typography.fontSize.base;
    }
  }};
  font-weight: ${theme.typography.fontWeight.semibold};
  border-radius: ${theme.borderRadius.lg};
  transition: all 0.2s ease;
  width: ${props => props.$fullWidth ? '100%' : 'auto'};
  
  ${props => {
    switch (props.$variant) {
      case 'secondary':
        return `
          background: ${theme.colors.neutral[100]};
          color: ${theme.colors.neutral[800]};
          border: 1px solid ${theme.colors.neutral[200]};
          
          &:hover {
            background: ${theme.colors.neutral[200]};
            border-color: ${theme.colors.neutral[300]};
          }
        `;
      case 'outline':
        return `
          background: transparent;
          color: ${theme.colors.primary[600]};
          border: 2px solid ${theme.colors.primary[600]};
          
          &:hover {
            background: ${theme.colors.primary[600]};
            color: ${theme.colors.white};
          }
        `;
      default:
        return `
          background: ${theme.colors.accent[500]};
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors.accent[500]};
          
          &:hover {
            background: ${theme.colors.accent[600]};
            border-color: ${theme.colors.accent[600]};
            transform: translateY(-1px);
            box-shadow: ${theme.shadows.lg};
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }
`;

export const Card = styled.div<{ $hover?: boolean }>`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.md};
  padding: ${theme.spacing.lg};
  transition: all 0.3s ease;
  
  ${props => props.$hover && `
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${theme.shadows.xl};
    }
  `}
`;

export const Input = styled.input<{ $error?: boolean }>`
  width: 100%;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.base};
  border: 2px solid ${props => props.$error ? theme.colors.error : theme.colors.neutral[200]};
  border-radius: ${theme.borderRadius.lg};
  background: ${theme.colors.white};
  transition: border-color 0.2s ease;
  
  &:focus {
    border-color: ${props => props.$error ? theme.colors.error : theme.colors.primary[500]};
  }
  
  &::placeholder {
    color: ${theme.colors.neutral[400]};
  }
`;

export const Textarea = styled.textarea<{ $error?: boolean }>`
  width: 100%;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.base};
  border: 2px solid ${props => props.$error ? theme.colors.error : theme.colors.neutral[200]};
  border-radius: ${theme.borderRadius.lg};
  background: ${theme.colors.white};
  transition: border-color 0.2s ease;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  
  &:focus {
    border-color: ${props => props.$error ? theme.colors.error : theme.colors.primary[500]};
  }
  
  &::placeholder {
    color: ${theme.colors.neutral[400]};
  }
`;

export const Select = styled.select<{ $error?: boolean }>`
  width: 100%;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.base};
  border: 2px solid ${props => props.$error ? theme.colors.error : theme.colors.neutral[200]};
  border-radius: ${theme.borderRadius.lg};
  background: ${theme.colors.white};
  transition: border-color 0.2s ease;
  cursor: pointer;
  
  &:focus {
    border-color: ${props => props.$error ? theme.colors.error : theme.colors.primary[500]};
  }
`;

export const ErrorMessage = styled.span`
  color: ${theme.colors.error};
  font-size: ${theme.typography.fontSize.sm};
  margin-top: ${theme.spacing.xs};
  display: block;
`;

export const Label = styled.label`
  display: block;
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.neutral[700]};
  margin-bottom: ${theme.spacing.xs};
  font-size: ${theme.typography.fontSize.sm};
`;

export const FormGroup = styled.div`
  margin-bottom: ${theme.spacing.md};
`;

export const Grid = styled.div<{ $columns?: number; $gap?: string }>`
  display: grid;
  grid-template-columns: repeat(${props => props.$columns || 1}, 1fr);
  gap: ${props => props.$gap || theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const Flex = styled.div<{
  $direction?: 'row' | 'column';
  $justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  $align?: 'start' | 'center' | 'end' | 'stretch';
  $gap?: string;
  $wrap?: boolean;
}>`
  display: flex;
  flex-direction: ${props => props.$direction || 'row'};
  justify-content: ${props => {
    switch (props.$justify) {
      case 'start': return 'flex-start';
      case 'center': return 'center';
      case 'end': return 'flex-end';
      case 'between': return 'space-between';
      case 'around': return 'space-around';
      default: return 'flex-start';
    }
  }};
  align-items: ${props => {
    switch (props.$align) {
      case 'start': return 'flex-start';
      case 'center': return 'center';
      case 'end': return 'flex-end';
      case 'stretch': return 'stretch';
      default: return 'flex-start';
    }
  }};
  gap: ${props => props.$gap || '0'};
  flex-wrap: ${props => props.$wrap ? 'wrap' : 'nowrap'};
`;

export const Text = styled.p<{
  $size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  $weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  $color?: string;
  $align?: 'left' | 'center' | 'right';
}>`
  font-size: ${props => theme.typography.fontSize[props.$size || 'base']};
  font-weight: ${props => theme.typography.fontWeight[props.$weight || 'normal']};
  color: ${props => props.$color || theme.colors.neutral[600]};
  text-align: ${props => props.$align || 'left'};
  line-height: 1.6;
`;

export const Heading = styled.h1<{
  $level?: 1 | 2 | 3 | 4 | 5 | 6;
  $size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  $weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  $color?: string;
  $align?: 'left' | 'center' | 'right';
  $margin?: string;
}>`
  font-size: ${props => {
    if (props.$size) return theme.typography.fontSize[props.$size];
    switch (props.$level) {
      case 1: return theme.typography.fontSize['4xl'];
      case 2: return theme.typography.fontSize['3xl'];
      case 3: return theme.typography.fontSize['2xl'];
      case 4: return theme.typography.fontSize.xl;
      case 5: return theme.typography.fontSize.lg;
      case 6: return theme.typography.fontSize.base;
      default: return theme.typography.fontSize['3xl'];
    }
  }};
  font-weight: ${props => theme.typography.fontWeight[props.$weight || 'bold']};
  color: ${props => props.$color || theme.colors.neutral[800]};
  text-align: ${props => props.$align || 'left'};
  line-height: 1.2;
  margin: ${props => props.$margin || '0'};
`;