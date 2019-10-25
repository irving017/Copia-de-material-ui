import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MaterialTable from './components/MaterialTable';
import FlexTable from './components/FlexTable/FlexTable';
import GridTable from './components/GridTable/GridTable';
import EnhancedTable from './components/LearningSort';
import UploadFile from './components/UploadFile/uploadFile';
import { Form, Field } from 'react-final-form'

const onSubmit = (values) => {
  console.log(values)
}

function App() {
  return (
    <div>
      <Switch>
        <Route path='/materialTable'>
          <MaterialTable/>
        </Route>
        <Route path='/flexTable'>
          <FlexTable/>
        </Route>
        <Route path='/gridTable'>
          <GridTable/>
        </Route>
        <Route path='/sortTable'>
          <EnhancedTable/>
        </Route>
        <Route path='/uploadFile'>
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
        </Route>
      </Switch>
    </div>
  );
}

export default App;
