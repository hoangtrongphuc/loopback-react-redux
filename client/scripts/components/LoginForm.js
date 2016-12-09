import React, {PropTypes, Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Fingerprint from 'material-ui/svg-icons/action/fingerprint';
import Face from 'material-ui/svg-icons/action/Face';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null
        }
    }
    handleUsernameChange(e) {
        this.setState(Object.assign({}, this.state, {username: e.target.value}))
    }
    handlePasswordChange(e) {
        this.setState(Object.assign({}, this.state, {password: e.target.value}))
    }
    handleClick(e) {
        this.props.handleLoginClick(this.state)
    }
    render() {
        let data = this.state;
        return (
            <div style={{
                textAlign: "center"
            }}>
            <br/>
                <TextField
                    id='username'
                    onChange={this.handleUsernameChange.bind(this)}
                    type="text"
                    fullWidth={true}
                    hintText="username"
                    autoFocus="true"/>
                <br/>
                <TextField
                    id='password'
                    onChange={this.handlePasswordChange.bind(this)}
                    type="password"
                    fullWidth={true}
                    hintText="password"
                    autoFocus="true"/>
                <br/>
                <br/>
                <RaisedButton
                    label="Login"
                    onClick={this.handleClick.bind(this)}
                    secondary={true}
                    icon={< Fingerprint />}/>

            </div>
        );
    }
}

LoginForm.propTypes = {
    handleLoginClick: PropTypes.func
};

export default LoginForm;