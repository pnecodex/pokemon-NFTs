import React,{useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import Web3 from 'web3';
import './layout.css';
const Header = () => {
  const [connect, setConnect] = useState('connect');
  const wellatConnectHandler = async () =>{
    
    if(window.ethereum){
      window.ethereum.request({method:'wallet_addEthereumChain'})
      console.log('connect wellat');
    }else{
      console.log('install the metamask');
    }
  }
  return (
    <header>
      <nav className="navbar navbar-expand bg-color">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button onClick={wellatConnectHandler} className="btn-connect-wallet text-light" data-widget="control-sidebar" data-slide="true">
              {connect}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
