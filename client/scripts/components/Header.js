import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';

class Header extends Component {
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}


export default Header;