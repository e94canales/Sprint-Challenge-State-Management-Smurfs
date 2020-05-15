import React from "react";
import "./App.css";
import { connect } from 'react-redux'
import SmurfNode from '../components/SmurfNode'
import Form from '../components/Form'

const App = props =>{
  
    return (
      <div className="App">
        <Form />
        <SmurfNode data={props} smurfData={props.apiData}/>
      </div>
    );
}
const mapStateToProps = state => {

  return {
    name: state.name,
    age: state.age,
    height: state.height,
    id: state.id,
    apiData: state.apiData
  }
}
export default connect(mapStateToProps, {})(App);
