import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import MaterialTable from './components/MaterialTable';
import FlexTable from './components/FlexTable/FlexTable';
import GridTable from './components/GridTable/GridTable';
import EnhancedTable from './components/LearningSort';
import UploadFile from './components/UploadFile/uploadFile';
import Toggle from './components/Toggle/Toggle';
import DragDrop from './components/DragDrop/DragDrop';
// import Tooltip from './components/Tooltip/Tooltip';
import Radio from './components/Radio/Radio';
import Loading from './components/Loading/Loading';
import backgrounds from './backgrounds';
import { Form, Field } from 'react-final-form';
import { Tooltip } from 'generation-ui-components/dist/generation-ui-components';

function App() {
  const [checked , setChecked] = useState(false);
  const [pokemon, setPokemon] = useState(window.localStorage.getItem('pokemon') || 'charizard');
  const onSubmit = (values) => {
    console.log(values)
  }
  const changeBackground = (event) => {
    if (backgrounds[event.target.value]) {
      window.localStorage.setItem('pokemon', event.target.value);
      return setPokemon(event.target.value)
    }
    return 
  };

  const handleChangeExample = (event) => {
    console.log(event.target.value);
  }


  return (
    <div style={{backgroundImage: `url(${backgrounds[pokemon]})`, backgroundSize: 'cover' ,backgroundRepeat: 'no-repeat', height: '100vh', position:'absolute', margin:0, width:'100vw', transition: 'background-image 1s ease-out'}}>
      <Route path='/'>
          <TextField
            id="standard-basic"
            label="Pokemon"
            margin="normal"
            onChange={changeBackground}
            style= {{position:'absolute', right: 0, margin:'0'}}
          />
      </Route>
      <Switch>
        <Route path='/materialTable'>
          <MaterialTable/>
        </Route>
        <Route path='/dnd'>
          <div style={{position: "absolute", top: "25vh", left: "5vw"}}>
            <DragDrop />
          </div>
        </Route>
        <Route path='/radio'>
          <div style={{position: "absolute", top: "25vh", left: "5vw"}}>
              <p>Mira chots</p>
              <Radio name='radio' value= 'castor' onChange={handleChangeExample}/>
              <Radio name='radio' value= 'nutria' onChange={handleChangeExample}/>
              <Radio name='radio' value= 'koala' onChange={handleChangeExample}/>
              <p>con transicion y todo</p>
          </div>
        </Route>
        <Route path='/flexTable'>
          <FlexTable/>
        </Route>
        <Route path='/tooltip'>
          <div style={{position: "absolute", top: "40vh", left: "20vw"}}>
            <Tooltip title='Pausa' placement='top'>
              <PauseCircleOutlineIcon />
            </Tooltip>
          </div>
        </Route>
        <Route path='/gridTable'>
          <GridTable/>
        </Route>
        <Route path='/sortTable'>
          <EnhancedTable/>
        </Route>
        <Route path='/loading'>
          <div style={{ width: '50vw', height: '50px', margin: '50px'}}><Loading /></div>
          <div style={{ width: '20vw', height: '50px', margin: '50px'}}><Loading /></div>
          <div style={{ width: '80vw', height: '50px', margin: '50px'}}><Loading/></div>
          <div style={{ width: '100px', height: '100px', margin: '50px', borderRadius:'50%'}}>
            <Loading borderRadius='50%'/>
          </div>
        </Route>
        <Route path='/toggle'>
          <div style={{position: "absolute", top: "25vh", left: "5vw"}}>
            <Toggle checked={checked} onChange={(event) => setChecked(!checked)} />
          </div>
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
