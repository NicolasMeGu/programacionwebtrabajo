import React from 'react';
import './styles/Global.css'
import Layout from './containers/Layout';
import Login from './containers/Login'
import RecoveryPassword from './containers/RecoveryPassword';

function App() {
  return (
    
    <Layout>
      <Login/>
      <RecoveryPassword/>
    </Layout>
  );
}

export default App;
