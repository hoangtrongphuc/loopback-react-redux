import React, {Component, PropTypes} from "react";
import Header from '../components/Header';

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

  render() {
    return (
      <div >
        <MuiThemeProvider >
          <div >
            <Header/>
            {this.props.children}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;