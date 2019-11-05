import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputWrapper = styled.input.attrs({ type: 'radio' })`
  opacity: 0;
  margin: 0;
  width: 0;
`;
const RadioBody = styled.span`
  position: relative;
  cursor: ${({ disabled }) => disabled ? '' : 'pointer;' };
  width: 18px;
  height: 18px;
  font-size: 18px;
  border-radius: 50%;
  border: ${({ disabled }) => disabled ? '2px solid #D2DCE4' : '2px solid #0084FF'};
`;

const RadioContainer = styled.label`
  display: inline-flex;
  align-items: center;
  margin: 2px;
  ${InputWrapper}:checked + ${RadioBody}:before, ${InputWrapper}:not(:checked) + ${RadioBody}:before{
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #0084FF;
    transition: all 0.2s ease;
  }
  ${InputWrapper}:not(:checked) + ${RadioBody}:before {
    opacity: 0;
    transform: scale(0)
  }
  ${InputWrapper}:checked + ${RadioBody}:before {
    opacity: 1;
    transform: scale(1);
  }
`;

const Radio = ({ disabled, ...other }) => {
  return (
    <RadioContainer>
      <InputWrapper disabled={disabled} {...other}/>
      <RadioBody disabled={disabled} />
    </RadioContainer>
  )
}

Radio.propTypes = {
  /** If **true** disable the radio button */
  disabled: PropTypes.bool,
};
// TODO: Check the checked property
Radio.defaultProps = {
  disabled: false,
};

export default Radio;
