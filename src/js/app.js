import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

import Items from '../components/items';
import ItemsList from '../components/listitems';

class Hello extends Component {
    render() {
      return (
          <ItemsList myProp={Items} />
      );
    }
}

render(
<Hello />, 
document.getElementById('app'));