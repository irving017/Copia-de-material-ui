import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './Tooltip.css'

const handlerPlacement = (placement)=> {
  switch(placement) {
    case 'top':
      return (
        `bottom: 100%;
        left: 50%;
        padding-bottom: 4px;
        transform: translateX(-50%);
        &::after {
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid #0084FF;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }`
      )
    case 'bottom': 
      return (
        `top: 100%;
        left: 50%;
        padding-top: 4px;
        transform: translateX(-50%);
        &::after {
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid #0084FF;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }`
      )
    case 'left': 
      return (
        `top: 50%;
        right: 100%;
        padding-right: 4px;
        transform: translateY(-50%);
        &::after {
          border-left: 4px solid #0084FF;
          border-top: 4px solid transparent;
          border-bottom: 4px solid transparent;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
        }`
      )
    case 'right':
      return (
        `top: 50%;
        left: 100%;
        padding-left: 4px;
        transform: translateY(-50%);
        &::after {
          border-right: 4px solid #0084FF;
          border-top: 4px solid transparent;
          border-bottom: 4px solid transparent;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }`
      )
    default:
      return (
        `width: fit-content;
        margin-right: auto;
        margin-left: auto;
        margin-bottom: 6px;
        bottom: 100%;
        left: -101%;
        right: -100%;`)
  }

}

const TooltipBubble = styled.div`
  visibility: hidden;
  position: absolute;
  z-index: 10;
  &::after {
    content: '';
    position: absolute;
  }
  ${({ placement }) => handlerPlacement(placement)}
`;

const TooltipMessage = styled.div`
  background: #0084FF;
  border-radius: 2px;
  color: white;
  padding: 4px;
  text-align: center;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

const TooltipWrapper = styled.span`
  position: relative;
  display: inline-block;
  padding: 3px;
  &:hover ${TooltipBubble} {
    visibility: visible;
  }
`;

const Tooltip = ({ placement, title, children }) => (
  <TooltipWrapper>
    <TooltipBubble placement={placement}>
      <TooltipMessage>{title}</TooltipMessage>
    </TooltipBubble>
    {children}
  </TooltipWrapper>
//   <span className='tooltip'>
//   <div className={`tooltip-bubble tooltip-${placement}`}>
//     <div className='tooltip-message'>{title}</div>
//   </div>
//     {children}
// </span>
);

Tooltip.propTypes = {
  /** Add the text for the tooltip */
  title: PropTypes.string,
  /** @ignore */
  children: PropTypes.node,
  /** Defines the position of the tooltip */
  placement: PropTypes.string,

};
// TODO: Check the checked property
Tooltip.defaultProps = {
  placement: 'top',
  title: 'tooltip',
};

export default Tooltip;
