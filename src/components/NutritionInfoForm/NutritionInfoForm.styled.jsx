import styled from 'styled-components';
import { ErrorMessage, Field } from 'formik';

export const Container = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(2, 1fr);

  & > div:nth-child(-n + 3) {
    grid-column-start: 1;
    grid-column-end: ${({ $hasRemoveButton }) => ($hasRemoveButton ? 4 : 3)};
  }

  @media screen and (${p => p.theme.mq.tablet}) {
    grid-template-columns: ${({ $hasRemoveButton }) =>
      $hasRemoveButton
        ? '40.5% 15.3% 11.5% 7.5% 13% 2.5%'
        : '41% 15.8% 12% 8% 13.5% 0%'};

    & > div:nth-child(1) {
      grid-column-start: 1;
      grid-column-end: 2;
    }

    & > div:nth-child(2) {
      grid-column-start: 2;
      grid-column-end: 3;
    }

    & > div:nth-child(3) {
      grid-column-start: 3;
      grid-column-end: 4;
    }

    & > div:nth-child(4) {
      grid-column-start: 4;
      grid-column-end: 5;
    }

    & > div:nth-child(5) {
      grid-column-start: 5;
      grid-column-end: ${({ $hasRemoveButton }) => ($hasRemoveButton ? 6 : 7)};
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  margin-left: 5px;
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 26px;
  letter-spacing: 0em;
  color: ${p => p.theme.colors.white};
`;

export const Input = styled(Field)`
  padding: 8px 10px;
  width: 100%;
  border: ${p =>
    p.error
      ? `${p.theme.borders.normal} ${p.theme.colors.error}`
      : p.value === ''
      ? `${p.theme.borders.normal} ${p.theme.colors.greenLite}`
      : `${p.theme.borders.normal} ${p.theme.colors.correct}`};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.black2};
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 20px;
  letter-spacing: 0em;
  color: ${p => p.theme.colors.white};

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${p => p.theme.colors.gray};
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  padding: 0 5px;
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: 10px;
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 12px;
  letter-spacing: 0em;
  color: ${p => p.theme.colors.error};
`;

export const ButtonRemove = styled.button`
  padding: 0;
  margin: 0;
  border: ${p => p.theme.borders.none};
  background-color: transparent;
  cursor: pointer;
`;
