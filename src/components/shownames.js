import React, { Component } from 'react';

import Items from '../components/items';
import ItemsList from '../components/listitems';

class ShowNames extends Component {
    render() {
      return (
        <div className="list-details">
            <ItemsList myProp={Items} />
        </div>
      );
    }
}

export default ShowNames;