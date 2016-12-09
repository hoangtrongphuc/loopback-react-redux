import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './containers/App';
import AuthContainer from './containers/AuthContainer';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={AuthContainer}/>
    </Route>
)