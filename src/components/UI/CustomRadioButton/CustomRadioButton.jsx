import React from 'react';
import PropTypes from 'prop-types';
import {
  LabelWithRadio,
  RadioInput,
  RadioMark,
} from './CustomRadioButton.styled';

const CustomRadioButton = ({ name, value, selectedValue, text }) => {
  return (
    <LabelWithRadio>
      <RadioInput
        type="radio"
        name={name}
        value={value}
        checked={selectedValue === value}
      />
      <RadioMark />
      {text}
    </LabelWithRadio>
  );
};

CustomRadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CustomRadioButton;
