import React from 'react';
import { Form, Field } from 'react-final-form';
import UploadFile from './uploadFile';
import AWS from 'aws-sdk';


AWS.config.update({
  accessKeyId: 'AKIAQ4AFMYXA675WGEHT',
  secretAccessKey: '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',
  region: 'us-east-1'
});

const s3 = new AWS.S3();

const uploadFileForm = () => {

  const UploadFiles = (objectOfFiles, bucketName, ACLRule) => {
    const arrayOfFiles = Object.entries(objectOfFiles);
    const arrayOfPromises = arrayOfFiles.map(file => {
      const params = {
        Bucket: bucketName,
        ACL: ACLRule,
        Key: file[1].name,
        Body: file[1],
        ContentType: file[1].type,
      };
      return s3.upload(params).promise();
    });
    return Promise.all(arrayOfPromises);
  }

  const onSubmit = async (values) => {
    const files = await UploadFiles(values.input, 'gentestbucket', 'public-read');
    console.log(files)
    // s3.upload(params, (error, data) => {
    //   if (error) console.log('valio verga', error);
    //   if (data) console.log('Te cagaste aqui esta el valor', data);
    // });
  };

  const handleChange = (values) => {
    console.log(values);
  }
  
  return (
    <div style={{backgroundColor: "#FFFFFF", position: "absolute", top: "25vh", left: "5vw"}}>
      <Form
      onSubmit={onSubmit}
      render = { ({ handleSubmit }) =>(
        <form onSubmit={handleSubmit}>
          <Field name="input">
            {props => {
              return (
              <UploadFile
                name={props.input.name}
                value={props.input.value}
                onChange={props.input.onChange}
                accept='image/*'
                multiple          
              />
            )
            }}
          </Field>
          <Field name="text" component="input" placeholder="First Name"></Field>
          <button type="submit">Submit</button>
        </form>
      )}
      >
      </Form>
    </div>
  );
};

export default uploadFileForm;
