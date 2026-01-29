import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { COLORS } from '../../utils/constants';
import Container from '../common/Container';
import Button from '../common/Button';
import { useInView } from '../../hooks';

// Hotmart Widget Integration
const HOTMART_CHECKOUT_URL = 'https://pay.hotmart.com/O104135207P?off=589e9hof';

// Validação com Yup
const validationSchema = yup.object({
  fullName: yup.string()
    .required('Nome completo é obrigatório')
    .min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: yup.string()
    .required('E-mail é obrigatório')
    .email('E-mail inválido'),
  whatsapp: yup.string()
    .required('WhatsApp é obrigatório')
    .matches(/^[\d\s()+-]+$/, 'WhatsApp inválido'),
  profession: yup.string()
    .required('Profissão é obrigatória')
    .min(3, 'Profissão deve ter pelo menos 3 caracteres'),
});

const LeadFormSectionWrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 100px 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, ${COLORS.gray300} 100%);

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const FormWrapper = styled(Container)`
  max-width: 700px;
  background: ${COLORS.white};
  border-radius: 40px;
  padding: 60px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  transform: translateY(-80px);
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 40px 25px;
    border-radius: 24px;
    transform: translateY(-40px);
  }
`;

const FormTitle = styled.h2`
  color: ${COLORS.dark};
  text-align: center;
  margin-bottom: 10px;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const FormSubtitle = styled.p`
  color: ${COLORS.textLight};
  text-align: center;
  margin-bottom: 40px;
  font-size: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 25px;

  &:last-of-type {
    margin-bottom: 35px;
  }
`;

const Label = styled.label`
  display: block;
  color: ${COLORS.text};
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 0.95rem;

  span {
    color: ${COLORS.error};
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 16px 18px;
  background: ${props => props.$error ? 'rgba(231, 76, 60, 0.05)' : '#f8f9fa'};
  border: 2px solid ${props => props.$error ? COLORS.error : props.$validated ? COLORS.success : COLORS.gray200};
  border-radius: 12px;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;

  &:focus {
    background: ${COLORS.white};
    border-color: ${props => props.$error ? COLORS.error : COLORS.primary};
    box-shadow: 0 0 0 3px ${props => props.$error ? 'rgba(231, 76, 60, 0.1)' : 'rgba(102, 126, 234, 0.1)'};
  }

  &::placeholder {
    color: ${COLORS.textLight};
  }
`;

const ErrorMessage = styled.span`
  display: block;
  color: ${COLORS.error};
  font-size: 0.85rem;
  margin-top: 6px;
  font-weight: 500;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  margin-bottom: 20px;
`;

const PrivacyNote = styled.p`
  color: ${COLORS.textLight};
  font-size: 0.9rem;
  text-align: center;
  font-weight: 500;

  svg {
    width: 16px;
    height: 16px;
    display: inline;
    margin-right: 6px;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: rgba(39, 174, 96, 0.1);
  border: 2px solid ${COLORS.success};
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  color: ${COLORS.success};
  font-weight: 600;
`;

const LeadForm = () => {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Load Hotmart widget script and setup event listeners
  useEffect(() => {
    const loadHotmartWidget = () => {
      // Load Hotmart JS
      if (!document.querySelector('script[src*="hotmart.com/checkout/widget"]')) {
        const script = document.createElement('script');
        script.src = 'https://static.hotmart.com/checkout/widget.min.js';
        script.type = 'text/javascript';
        document.head.appendChild(script);
      }
      
      // Load Hotmart CSS
      if (!document.querySelector('link[href*="hotmart-fb.min.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css';
        document.head.appendChild(link);
      }
    };
    
    loadHotmartWidget();

    // Listen for Hotmart checkout events via postMessage
    const handleHotmartMessage = (event) => {
      // Verify origin is from Hotmart
      if (event.origin && event.origin.includes('hotmart.com')) {
        const data = event.data;
        
        // Check for successful purchase events
        if (data && (
          data.event === 'purchase_complete' ||
          data.event === 'purchase.complete' ||
          data.event === 'PURCHASE_COMPLETE' ||
          data.type === 'purchase_complete' ||
          data.status === 'approved' ||
          data.status === 'complete' ||
          (typeof data === 'string' && data.includes('purchase'))
        )) {
          console.log('Hotmart purchase completed:', data);
          // Redirect to thank you page
          navigate('/obrigado');
        }
      }
    };

    // Listen for messages from Hotmart iframe
    window.addEventListener('message', handleHotmartMessage);

    // Also check for URL changes that might indicate checkout completion
    const checkForCheckoutClose = () => {
      // When Hotmart widget closes after purchase, redirect
      const overlay = document.querySelector('.hotmart-fb-overlay');
      if (overlay) {
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
              const display = window.getComputedStyle(overlay).display;
              // If overlay was visible and now hidden, check if we should redirect
              if (display === 'none') {
                const purchaseComplete = localStorage.getItem('hotmartPurchaseComplete');
                if (purchaseComplete === 'true') {
                  localStorage.removeItem('hotmartPurchaseComplete');
                  navigate('/obrigado');
                }
              }
            }
          });
        });
        observer.observe(overlay, { attributes: true });
      }
    };

    // Delay observer setup to allow Hotmart to create elements
    setTimeout(checkForCheckoutClose, 2000);

    return () => {
      window.removeEventListener('message', handleHotmartMessage);
    };
  }, [navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const formData = watch();

  const openHotmartCheckout = (data) => {
    // Build Hotmart URL with pre-filled data
    const params = new URLSearchParams({
      checkoutMode: '2', // Widget mode
      name: data.fullName,
      email: data.email,
      phonenumber: data.whatsapp.replace(/\D/g, ''), // Remove non-digits
    });
    
    // Use & since HOTMART_CHECKOUT_URL already has query params
    const checkoutUrl = `${HOTMART_CHECKOUT_URL}&${params.toString()}`;
    
    // Open Hotmart widget
    if (window.hotmart_fb) {
      window.hotmart_fb.checkout(checkoutUrl);
    } else {
      // Fallback: open in new window
      window.open(checkoutUrl, '_blank');
    }
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      console.log('Dados do formulário:', data);
      
      // Store lead data in localStorage for thank you page
      localStorage.setItem('leadData', JSON.stringify({
        name: data.fullName,
        email: data.email,
        whatsapp: data.whatsapp,
        profession: data.profession,
        timestamp: new Date().toISOString()
      }));
      
      // Small delay for UX
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Open Hotmart checkout widget with pre-filled data
      openHotmartCheckout(data);
      
      setIsSubmitted(true);
      
    } catch (error) {
      console.error('Erro ao processar:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <LeadFormSectionWrapper ref={ref} id="lead-form">
      <FormWrapper
        as={motion.div}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={formVariants}
      >
        <FormTitle>Garanta Sua Vaga</FormTitle>
        <FormSubtitle>
          Preencha o formulário e receba todas as informações para participar
        </FormSubtitle>

        {isSubmitted ? (
          <SuccessMessage
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            ✓ Checkout aberto! Complete o pagamento na janela do Hotmart. Após a confirmação, você receberá um e-mail com todos os detalhes.
          </SuccessMessage>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label>
                Nome Completo <span>*</span>
              </Label>
              <Input
                {...register('fullName')}
                placeholder="Seu nome completo"
                $error={!!errors.fullName}
                $validated={formData.fullName && !errors.fullName}
              />
              {errors.fullName && <ErrorMessage>{errors.fullName.message}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label>
                Melhor E-mail <span>*</span>
              </Label>
              <Input
                {...register('email')}
                type="email"
                placeholder="seu@email.com"
                $error={!!errors.email}
                $validated={formData.email && !errors.email}
              />
              {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label>
                WhatsApp <span>*</span>
              </Label>
              <Input
                {...register('whatsapp')}
                placeholder="(11) 99999-9999"
                $error={!!errors.whatsapp}
                $validated={formData.whatsapp && !errors.whatsapp}
              />
              {errors.whatsapp && <ErrorMessage>{errors.whatsapp.message}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label>
                Profissão <span>*</span>
              </Label>
              <Input
                {...register('profession')}
                placeholder="Sua profissão"
                $error={!!errors.profession}
                $validated={formData.profession && !errors.profession}
              />
              {errors.profession && <ErrorMessage>{errors.profession.message}</ErrorMessage>}
            </FormGroup>

            <SubmitButton
              variant="secondary"
              size="large"
              rounded
              type="submit"
              disabled={!isValid || isLoading}
            >
              {isLoading ? '⏳ Processando...' : '✓ CONFIRMAR INSCRIÇÃO'}
            </SubmitButton>

            <PrivacyNote>
              Seus dados estão seguros. Não enviamos spam.
            </PrivacyNote>
          </form>
        )}
      </FormWrapper>
    </LeadFormSectionWrapper>
  );
};

export default LeadForm;
