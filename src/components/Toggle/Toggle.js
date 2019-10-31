import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 20px;
  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  input:checked + span{
    background-color: #01ba66;
  }
  input:checked + span:before{
    border-radius: 50%;
    left: 0px;
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #d2dce4;
  -webkit-transition: .3s;
  transition: .3s;
  border-radius: 16px;
  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 1.1px;
    bottom: 1px;
    background-color: #FFFFFF;
    border-radius: 50%;
    -webkit-transition: .3s;
    transition: .3s;
  }
`;
const Toggle = ({ checked, ...other }) => {
  return (
    <ToggleSwitch>
      <input type="checkbox" checked={checked} {...other}/>
      <ToggleSlider />
    </ToggleSwitch>
  )
};

Toggle.protoType = {
  checked: PropTypes.bool,
};

Toggle.defaultProps = {
  checked: false,
};

export default Toggle;
