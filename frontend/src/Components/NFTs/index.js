import React, { Component } from 'react';
import mypoks from './pokes.css';
import NFTMypoke from '../../abis/NFTMypokes.json';
import Web3 from 'web3';
import { Link } from 'react-router-dom';

class index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      account: '',
      contract: null,
      totalSupply: 0,
      images: [],
      metaData: [],
      imageData_name: '',
      imageData_description: '',
      imageData_price: '',
      loading: true
    }
  }

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      console.log(window.web3);
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    // Load account
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] })

    const networkId = await web3.eth.net.getId()
    const networkData = NFTMypoke.networks[networkId]
    if (networkData) {
      const abi = NFTMypoke.abi
      const address = networkData.address
      const contract = new web3.eth.Contract(abi, address)
      // console.log(contract)
      this.setState({ contract })
      const totalSupply = await contract.methods.allNFTs().call()
      console.log(totalSupply)
      // this.setState({ totalSupply })


      // Load NFTs
      // for (var i = 1; i <= totalSupply; i++) {
      //     const id = await contract.methods.images(i - 1).call()
      //     console.log(id)
      //     this.setState({
      //         images: [...this.state.images, id]
      //     })
      //     console.log(this.state.images,'images');
      // }
      // for (var i = 1; i <= totalSupply; i++) {
      //   const metadata = await contract.methods.imageData(i - 1).call();
      //   this.setState({
      //     metaData: [...this.state.metaData, metadata],
      //   })
      // }
      // console.log(this.state.metaData);
      // Load Owner

      // Load NFTs Data 
      // for (i = 1; i <= totalSupply; i++) {
      //     const metadata = await contract.methods.imageData(i - 1).call()
      //     // console.log(metadata)
      //     this.setState({
      //         imageData_name: [...this.state.imageData_name, metadata.name],
      //         imageData_price: [...this.state.imageData_price, metadata.price]
      //     })
      // }

    } else {
      window.alert('Smart contract not deployed to detected network.')
    }
  }
  render() {
    return (
      <>
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">All NFTs MyPokes</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                  <li className="breadcrumb-item active">NFTs MyPokes</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <section className="content mt-5 ">
          <div className="container-fluid">
            <div className="row ">
              {this.state.metaData.map((item, index) => {
                return (
                  <div className="col-md-3" key={index}>
                    <div className="card h-100 bg-color text-light" style={{ width: '18rem' }}>
                      <img className="card-img-top" src={`https://ipfs.infura.io/ipfs/${item.url}`} alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        {/* <p className="card-text">{item.description}</p> */}
                        <p className="card-text text-light">BNB:{item.price}</p>
                      </div>
                      <div className="card-body">
                        <div className="text-uppercase">owner</div>
                        <a href="#" className="card-link">{this.state.account}</a>
                      </div>
                    </div>
                  </div>
                )
              })

              }


            </div>
          </div>
        </section>
      </>
    );
  }
}

export default index;