import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Fingerprint from 'material-ui/svg-icons/action/fingerprint';
import Face from 'material-ui/svg-icons/action/Face';
import React, {Component, PropTypes} from 'react';

class RegisterForm extends Component {
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
    render() {
        return (
            <div style={{
                textAlign: "center"
            }}>
                <br/>

                <TextField
                    id='username'
                    type="text"
                    fullWidth={true}
                    style={{
                textAlign: "center"
            }}
                    hintText="username"
                    autoFocus="true"/>
                <br/>
                <TextField
                    id='email'
                    hintText="email"
                    type="text"
                    fullWidth={true}
                    autoFocus="true"/>
                <br/>
                <TextField
                    id='password'
                    type="password"
                    fullWidth={true}
                    hintText="password"
                    autoFocus="true"/>
                <br/>
                <TextField
                    id='rePassword'
                    type="password"
                    fullWidth={true}
                    hintText="confirm password"
                    autoFocus="true"/>
                <br/>

                <br/>

                <RaisedButton
                    target="_blank"
                    label="Register"
                    onClick={this.props.handleRegisterClick}
                    secondary={true}
                    icon={< Face />}/>
            </div>
        );
    }
}

RegisterForm.propTypes = {
    handleRegisterClick: PropTypes.func
};

export default RegisterForm;