import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

import ShowNames from '../components/shownames'; 

class ShowHide extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      visible: false,
      buttontext: 'Show'        
    };
    this.visSwap = this.visSwap.bind(this);
  }
  
  visSwap() {
    const hidden = this.state.visible == true ? false : true;
    const btnswitch = this.state.buttontext == 'Hide' ? 'Show' : 'Hide';
    this.setState({ visible: hidden, buttontext: btnswitch});
  }
  
  content() {
    if (this.state.visible == true) {
      return <ShowNames />;
    } else {
      return null;
    }
  }
  
  render() {
    return(
      <div>
        <button onClick={this.visSwap}>{this.state.buttontext}</button>
        <div>
          {this.content()}
        </div>
      </div>
    );
  }
}

render(
<ShowHide />, 
document.getElementById('app'));