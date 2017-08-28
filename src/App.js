import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dashboard from './components/Dashboard';

const App = () => (
    <MuiThemeProvider>
        <Dashboard />
    </MuiThemeProvider>
);

export default App;
