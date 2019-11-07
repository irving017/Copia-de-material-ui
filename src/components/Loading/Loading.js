import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LoadingBody = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${({ borderRadius }) => borderRadius }
  background-color: #E7E7E7;
  overflow: hidden;
  ${({ type }) => type === 'shine'
  ? `animation-name: shine;
    animation-duration: 800ms;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    @keyframes shine {
      0% {
        background-color: #f1f1f1;
      }
      100% {
        background-color: #E7E7E7;
      }
    }`
  : ''
  }
  ${({ type, charizard }) => type === 'move'
  ? `&::after {
    content: '';
    display: block;
    width: 40%;
    height: 100%;
    ${ !charizard
      ? 'background: linear-gradient(90deg, #E7E7E7, #f1f1f1 ,#E7E7E7);' 
      : `background-image: url('https://i.pinimg.com/originals/cb/b8/54/cbb854131b0f06e3ccd0a2452b6abc6f.png');
        background-size: contain;
        background-repeat: no-repeat;`
    }
    animation-name: move;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-iteration-count: infinite;
  }
  @keyframes move {
    0% {
      margin-left: -30% ;
    }
  
    100% {
      margin-left: 100%;
    }
  }`
  :''}
`;

const Loading = ({ type, borderRadius ,charizard }) => (
    <LoadingBody type={type} charizard={charizard} borderRadius={borderRadius}/>
);

Loading.propTypes = {
  /** If **true** disable the radio button */
  type: PropTypes.string,
  /**@ignore*/
  charizard: PropTypes.bool,
  /** Set the border radius in string like **"50%"** */
  borderRadius: PropTypes.string,
};
// TODO: Check the checked property
Loading.defaultProps = {
  type: 'move',
  charizard: false,
  borderRadius: '0px',
};

export default Loading;
