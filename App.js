
import './App.css';
import { Component, Fragment } from 'react';
import {Card} from './components/card';
import { Modal } from './components/modal';
import {Filter} from './components/filter';

class App extends Component {
  constructor(){
    super();
    this.state = {
      rockets : [],
      selectedHeight: 0 
    };
  }
  componentDidMount(){
    fetch("https://api.spaceXdata.com/v3/launches?limit=100")
    .then((response) => response.json())
    .then(rockets => this.setState({rockets : rockets}))
    
  }
  handleChange(e){
    this.setState({selectedHeight : e.target.value})


  }
  render(){
    return (
    <div className="container">
      <h1 color = "white">SpaceX Encyclopedia</h1>
      <Filter onChange={this.handleChange}/>
      <div className="row">
      {this.state.rockets.map((rocket) => (
        <Fragment>
        < Card rocket = {rocket}/>
        <Modal rocket = {rocket}/>
</Fragment>
        
      ))}
      </div>
    </div>
  );
}
}
export default App;
