import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import upload from '../../backgrounds/upload.svg';
import correct from '../../backgrounds/correct.svg';

const UploadFile = ({ multiple, onChange, value, ...other }) => {
  const [files , setFiles] = useState([]);
  const InputWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 592px;
    height: 87px;
    max-width: 100%;
    border: dashed 2px #d8d8d8;
    border-radius: 2px;
    transition: 0.2s;
    &.is-active {
      border: 1px dashed blue;
    }
    span:last-of-type {
      color: #989898;
    }
    input {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      cursor: pointer;
      opacity:0;
      &:focus {
        outline: none;
      }
    }
`;
  const handleChange = (event)=> {
    const files = event.target.files;
    setFiles(files);
    if (onChange) onChange(event.target.files) ;
  }
  return (
    <InputWrapper>
      { !multiple & files.length ? <img src={correct} /> : <img src={upload} />}
      { !multiple & files.length ? <span>{ files[0].name }</span> :<span>Choose from computer or drag any file here</span>}
      { !multiple & files.length ? <span>File uploaded 100%</span> : <span>Size limit: 10mb</span>}
      <input type='file' multiple={multiple ? true : false } onChange={ (event) => handleChange(event) } {...other}/>
    </InputWrapper>
  )
};

UploadFile.propTypes = {
  multiple: PropTypes.bool,
};

UploadFile.defaultProps = {
  multiple: false,
}

export default UploadFile;
