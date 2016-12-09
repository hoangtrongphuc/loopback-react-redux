import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import Snackbar from 'material-ui/Snackbar';
import {Tabs, Tab} from 'material-ui/Tabs';
import * as AuthActions from '../actions/auth';
import {login, register} from '../core/userApi.js';
class AuthContainer extends Component {
    constructor(props) {
        super(props);
    }

    handleLogin(data) {
        if (data.username == null || data.password == null) {
            this
                .props
                .validate('Please fill username and password')
        } else {
            this
                .props
                .login({username: data.username, password: data.password})
        }

    }
    handleRegister(data) {
        this
            .props
            .register({username: data.username, password: data.password})
    }
    render() {
        return (
            <div
                style={{
                marginTop: '10%',
                marginLeft: '3%',
                marginRight: '3%'
            }}>
                <Tabs>
                    <Tab label="Login">
                        <div>
                            <LoginForm
                                handleLoginClick={this
                                .handleLogin
                                .bind(this)}/>
                        </div>
                    </Tab>
                    <Tab label="Register">
                        <div>
                            <RegisterForm
                                handleRegisterClick={this
                                .handleRegister
                                .bind(this)}/>
                        </div>
                    </Tab>

                </Tabs>
                <Snackbar
                    open={this.props.error}
                    message={this.props.message || 'Welcome!'}
                    bodyStyle={{
                    background: "#ff3399",
                    textAlign: 'center'
                }}
                    autoHideDuration={5000}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {message: state.auth.error, error: true};
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: data => dispatch(AuthActions.loginRequest(data)),
        validate: data => dispatch(AuthActions.validation(data)),
        register: data => dispatch(AuthActions.registerRequest(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
