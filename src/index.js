import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// routing
import { BrowserRouter } from 'react-router-dom';
import {Web3ReactProvider} from "@web3-react/core"
import Web3 from 'web3'
import { Web3Provider } from "@ethersproject/providers";


function getLibrary(provider, connector)  {

  return new Web3(provider)

}



ReactDOM.render(
  <BrowserRouter>
    <Web3ReactProvider getLibrary={getLibrary} >
    <App />
    </Web3ReactProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

