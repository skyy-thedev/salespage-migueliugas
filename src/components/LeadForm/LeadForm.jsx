import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { COLORS } from '../../utils/constants';
import Container from '../common/Container';
import Button from '../common/Button';
import { useInView } from '../../hooks';

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

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      // Simular envio de dados
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Dados do formulário:', data);
      
      // Aqui você integraria com um serviço real (RD Station, Mailchimp, etc)
      // const response = await fetch('/api/leads', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });

      setIsSubmitted(true);
      reset();
      
      // Auto-reset após 5 segundos
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Erro ao enviar:', error);
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
            Inscrição realizada com sucesso! Você receberá em breve todas as informações no seu e-mail e WhatsApp.
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
