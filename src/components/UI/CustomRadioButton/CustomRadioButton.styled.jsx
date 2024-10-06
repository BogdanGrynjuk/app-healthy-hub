import styled from 'styled-components';
import { Field } from 'formik';

export const RadioMark = styled.span`
  min-width: 12px;
  min-height: 12px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.gray};
  border-radius: 50%;
  position: relative;

  &:after {
    content: '';
    min-width: 6px;
    min-height: 6px;
    background-color: ${props => props.theme.colors.yellow};
    border-radius: 50%;
    position: absolute;
    opacity: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const RadioInput = styled(Field)`
  display: none;
  margin-right: 8px;

  &:checked + ${RadioMark} {
    &:after {
      opacity: 1;
    }
  }
`;

export const LabelWithRadio = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover > ${RadioMark} {
    border-color: ${props => props.theme.colors.greenLite};
  }
`;
