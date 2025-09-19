import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { Container, Flex } from './StyledComponents';

const HeaderWrapper = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.$scrolled 
    ? 'rgba(255, 255, 255, 0.9)' 
    : 'rgba(255, 255, 255, 0.1)'
  };
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: ${props => props.$scrolled 
    ? `1px solid rgba(54, 162, 116, 0.1)` 
    : `1px solid rgba(255, 255, 255, 0.1)`
  };
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: ${theme.spacing.md} 0;
  box-shadow: ${props => props.$scrolled 
    ? '0 4px 32px rgba(54, 162, 116, 0.1)' 
    : 'none'
  };
`;

const Logo = styled.div<{ $scrolled: boolean }>`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${props => props.$scrolled 
    ? theme.colors.primary[700] 
    : theme.colors.white
  };
  transition: color 0.4s ease;
  cursor: pointer;
  letter-spacing: -0.02em;
  
  span {
    color: ${props => props.$scrolled 
      ? theme.colors.primary[500] 
      : theme.colors.primary[200]
    };
    transition: color 0.4s ease;
    font-weight: ${theme.typography.fontWeight.normal};
  }
  
  &:hover {
    opacity: 0.8;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xl};
  flex: 1;
  justify-content: center;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`;

const MobileNav = styled.nav<{ $isOpen: boolean; $scrolled: boolean }>`
  display: none;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    display: block;
    position: fixed;
    top: 85px;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(54, 162, 116, 0.1);
    padding: ${theme.spacing.xl};
    transform: translateY(${props => props.$isOpen ? '0' : '-100%'});
    opacity: ${props => props.$isOpen ? '1' : '0'};
    visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 8px 32px rgba(54, 162, 116, 0.15);
    z-index: 999;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: ${theme.spacing.lg};
  margin: 0;
  padding: 0;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    flex-direction: column;
    gap: ${theme.spacing.md};
    margin-bottom: ${theme.spacing.lg};
  }
`;

const NavItem = styled.li``;

const NavLink = styled.button<{ $scrolled: boolean }>`
  background: none;
  border: none;
  font-family: ${theme.typography.fontFamily.medical};
  font-weight: ${theme.typography.fontWeight.medium};
  font-size: ${theme.typography.fontSize.base};
  color: ${props => props.$scrolled 
    ? theme.colors.neutral[700] 
    : theme.colors.white
  };
  transition: all 0.3s ease;
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.lg};
  cursor: pointer;
  position: relative;
  letter-spacing: 0.01em;
  
  &:hover {
    color: ${props => props.$scrolled 
      ? theme.colors.primary[600] 
      : theme.colors.primary[200]
    };
    background: ${props => props.$scrolled 
      ? 'rgba(54, 162, 116, 0.08)' 
      : 'rgba(255, 255, 255, 0.12)'
    };
    transform: translateY(-1px);
  }
  
  @media (max-width: ${theme.breakpoints.lg}) {
    color: ${theme.colors.neutral[700]};
    width: 100%;
    text-align: left;
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    
    &:hover {
      color: ${theme.colors.primary[600]};
      background: rgba(54, 162, 116, 0.05);
    }
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    flex-direction: column;
    width: 100%;
    gap: ${theme.spacing.sm};
  }
`;

const PhoneButton = styled.button<{ $scrolled: boolean }>`
  background: none;
  border: 2px solid ${props => props.$scrolled 
    ? theme.colors.primary[500] 
    : 'rgba(255, 255, 255, 0.4)'
  };
  color: ${props => props.$scrolled 
    ? theme.colors.primary[600] 
    : theme.colors.white
  };
  padding: ${theme.spacing.xs} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.xl};
  font-family: ${theme.typography.fontFamily.medical};
  font-weight: ${theme.typography.fontWeight.medium};
  font-size: ${theme.typography.fontSize.sm};
  transition: all 0.3s ease;
  cursor: pointer;
  letter-spacing: 0.02em;
  
  &:hover {
    background: ${props => props.$scrolled 
      ? theme.colors.primary[500] 
      : 'rgba(255, 255, 255, 0.25)'
    };
    color: ${props => props.$scrolled 
      ? theme.colors.white 
      : theme.colors.white
    };
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(54, 162, 116, 0.25);
  }
  
  @media (max-width: ${theme.breakpoints.lg}) {
    border-color: ${theme.colors.primary[500]};
    color: ${theme.colors.primary[600]};
    width: 100%;
    
    &:hover {
      background: ${theme.colors.primary[500]};
      color: ${theme.colors.white};
    }
  }
`;

const AppointmentButton = styled.button<{ $scrolled: boolean }>`
  background: ${props => props.$scrolled 
    ? theme.colors.primary[500] 
    : 'rgba(54, 162, 116, 0.95)'
  };
  border: 2px solid ${props => props.$scrolled 
    ? theme.colors.primary[500] 
    : 'rgba(54, 162, 116, 0.95)'
  };
  color: ${theme.colors.white};
  padding: ${theme.spacing.xs} ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.xl};
  font-family: ${theme.typography.fontFamily.medical};
  font-weight: ${theme.typography.fontWeight.semibold};
  font-size: ${theme.typography.fontSize.sm};
  transition: all 0.3s ease;
  cursor: pointer;
  letter-spacing: 0.02em;
  box-shadow: 0 2px 8px rgba(54, 162, 116, 0.2);
  
  &:hover {
    background: ${theme.colors.primary[600]};
    border-color: ${theme.colors.primary[600]};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(54, 162, 116, 0.35);
  }
  
  @media (max-width: ${theme.breakpoints.lg}) {
    width: 100%;
    background: ${theme.colors.primary[500]};
    border-color: ${theme.colors.primary[500]};
  }
`;

const MobileMenuButton = styled.button<{ $isOpen: boolean; $scrolled: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    display: flex;
  }
  
  span {
    width: 24px;
    height: 2px;
    background: ${props => props.$scrolled 
      ? theme.colors.neutral[700] 
      : theme.colors.white
    };
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    margin: 2px 0;
    transform-origin: center;
    
    &:nth-child(1) {
      transform: ${props => props.$isOpen 
        ? 'translateY(6px) rotate(45deg)' 
        : 'translateY(0) rotate(0)'
      };
    }
    
    &:nth-child(2) {
      opacity: ${props => props.$isOpen ? '0' : '1'};
      transform: ${props => props.$isOpen 
        ? 'translateX(-20px)' 
        : 'translateX(0)'
      };
    }
    
    &:nth-child(3) {
      transform: ${props => props.$isOpen 
        ? 'translateY(-6px) rotate(-45deg)' 
        : 'translateY(0) rotate(0)'
      };
    }
  }
`;

interface HeaderProps {
  onBookAppointment: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookAppointment }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <HeaderWrapper $scrolled={scrolled}>
        <Container>
          <Flex $justify="between" $align="center">
            <Logo $scrolled={scrolled} onClick={() => scrollToSection('home')}>
              Clínica<span>Pro</span>
            </Logo>
            
            <DesktopNav>
              <NavList>
                <NavItem>
                  <NavLink $scrolled={scrolled} onClick={() => scrollToSection('home')}>
                    Início
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink $scrolled={scrolled} onClick={() => scrollToSection('services')}>
                    Serviços
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink $scrolled={scrolled} onClick={() => scrollToSection('about')}>
                    Sobre
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink $scrolled={scrolled} onClick={() => scrollToSection('contact')}>
                    Contato
                  </NavLink>
                </NavItem>
              </NavList>
              
              <CTAButtons>
                <PhoneButton $scrolled={scrolled}>
                  (11) 99999-9999
                </PhoneButton>
                <AppointmentButton $scrolled={scrolled} onClick={onBookAppointment}>
                  Agendar Consulta
                </AppointmentButton>
              </CTAButtons>
            </DesktopNav>
            
            <MobileMenuButton
              $isOpen={mobileMenuOpen}
              $scrolled={scrolled}
              onClick={toggleMobileMenu}
            >
              <span />
              <span />
              <span />
            </MobileMenuButton>
          </Flex>
        </Container>
      </HeaderWrapper>
      
      <MobileNav $isOpen={mobileMenuOpen} $scrolled={scrolled}>
        <NavList>
          <NavItem>
            <NavLink $scrolled={true} onClick={() => scrollToSection('home')}>
              Início
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink $scrolled={true} onClick={() => scrollToSection('services')}>
              Serviços
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink $scrolled={true} onClick={() => scrollToSection('about')}>
              Sobre
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink $scrolled={true} onClick={() => scrollToSection('contact')}>
              Contato
            </NavLink>
          </NavItem>
        </NavList>
        
        <CTAButtons>
          <PhoneButton $scrolled={true}>
            (11) 99999-9999
          </PhoneButton>
          <AppointmentButton $scrolled={true} onClick={onBookAppointment}>
            Agendar Consulta
          </AppointmentButton>
        </CTAButtons>
      </MobileNav>
    </>
  );
};

export default Header;