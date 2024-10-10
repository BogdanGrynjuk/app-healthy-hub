import { Field, Form } from 'formik';
import styled from 'styled-components';

const BaseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 20px;
  cursor: pointer;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: calc(320px - (2 * 10px));

  @media screen and (${props => props.theme.mq.tablet}) {
    width: calc(834px - (2 * 27px));
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    width: calc(1440px - (2 * 34px));
  }
`;

export const Modal = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  width: 100%;
  padding: 24px;
  background-color: ${p => p.theme.colors.black2};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 0 4px 14px 0 rgba(227, 255, 168, 0.2);
  opacity: 0;
  transform: translate(0, 0px) scale(0);
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms;
  color: ${p => p.theme.colors.white};

  &.active {
    transform: translate(0, 0px) scale(1);
    opacity: 1;
  }

  &:not(.active) {
    transform: translate(0, 0px) scale(0);
    opacity: 0;
  }

  @media screen and (${props => props.theme.mq.tablet}) {
    top: 100px;
    width: auto;
  }
`;

export const ButtonClose = styled(BaseButton)`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const IconClose = styled.img`
  width: 16px;
  height: 16px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: 8px;
`;

export const Description = styled.p`
  color: ${props => props.theme.colors.gray};
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes.xs};
  margin-bottom: 16px;
  max-width: 284px;
`;
export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
  column-gap: 12px;
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${p =>
    p.$checked ? `${p.theme.colors.violet}` : `${p.theme.colors.white}`};
  cursor: pointer;
`;
export const Input = styled(Field)`
  display: none;
`;
export const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: ${props => props.theme.radii.normal};
  outline: ${p =>
    p.$checked
      ? `2px solid ${p.theme.colors.violet}`
      : `1px solid ${p.theme.colors.gray1}`};
`;
export const IconGoal = styled.img`
  width: 20px;
  height: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;

  @media screen and (${props => props.theme.mq.tablet}) {
    flex-direction: row;
  }
`;

export const CancelButton = styled(BaseButton)`
  color: ${props => props.theme.colors.white};

  width: 100%;
  padding: 8px 12px;
  border: ${p => p.theme.borders.normal} transparent;
  border-radius: ${props => props.theme.radii.normal};
  cursor: pointer;

  &:hover {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.greenLite};
  }

  @media screen and (${props => props.theme.mq.tablet}) {
    width: 212px;
  }
`;

export const ConfirmButton = styled(BaseButton)`
  background-color: ${props => props.theme.colors.greenLite};
  width: 212px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.greenLite};
  border-radius: ${props => props.theme.radii.normal};
  padding: 8px;
  cursor: pointer;

  @media screen and (max-width: 833px) {
    width: 100%;
  }
`;
