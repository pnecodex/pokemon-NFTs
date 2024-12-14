import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mypoks from './pokes.css';
import NFTMypoke from '../../abis/NFTMypokes.json';
import Web3 from 'web3';
import {create} from 'ipfs-http-client'
//Declare IPFS
// const ipfsClient = require('ipfs-http-client');
// const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

const ipfs = create("https://ipfs.infura.io:5001/api/v0");
const ipfsBaseUrl = "https://ipfs.infura.io/ipfs/";
class CreateMypoke extends Component {
  constructor(props) {
    super(props);
    this.state = {
        account: '',
        contract: null,
        images: [],
        new_name: '',
        new_description:'',
        new_price: '',
        new_royalties: '',
        loading: true,
    }

    this.startMintingProcess = this.startMintingProcess.bind(this)
    this.captureFile = this.captureFile.bind(this)
    this.CreateMetaDataAnMint = this.CreateMetaDataAnMint.bind(this)
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
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    const networkId = await web3.eth.net.getId()
    const networkData = NFTMypoke.networks[networkId]
    if (networkData) {
      const abi = NFTMypoke.abi
      const address = networkData.address
      const contract = new web3.eth.Contract(abi, address)
      this.setState({ contract });        
    } else {
        window.alert('Smart contract not deployed to detected network.')
    }
  }
  captureFile = event => {

    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file)
    
    reader.onloadend = (e) => {
      this.setState({ buffer: Buffer(reader.result) })
      console.log('buffer', this.state.buffer)
    }
  }
  mint = (_url) => {
    console.log(_url,'url');
    this.state.contract.methods
    .mint(this.state.account, _url, this.state.new_price,this.state.new_royalties)
    .send({ from: this.state.account })
    .once('error', (err) => {
      this.setState({ loading: false });
      console.log(err,'error');
    })
    .then((receipt)=>{
      console.log(receipt,'receipt');
      this.setState({ loading: false });
    })
  } 
  async CreateMetaDataAnMint (_name,_des){
      try {
        console.log(this.state.buffer,'this.state.buffer');
        const addedImage = await ipfs.add(this.state.buffer);
        console.log(addedImage.path,'addedImage');
        console.log('CreateMetaDataAnMint');
        const metaDataObj = {
          name:_name, 
          description:_des,
          image:ipfsBaseUrl + addedImage.path,
        }
        // console.log(metaDataObj,'metaDataObj');
        const addedMetaData = await ipfs.add(JSON.stringify(metaDataObj));
        // console.log(addedMetaData,'addedMetaData');
        console.log(ipfsBaseUrl + addedMetaData.path,'metaDataObj');
        this.mint(ipfsBaseUrl + addedMetaData.path);
      } catch (error) {
        console.log(error,'error');
      }
  } 
  startMintingProcess = async () =>{
   await this.CreateMetaDataAnMint(this.state.new_name,this.state.new_description,this.state.buffer);
    console.log('submiting...');
  }
  // this.props.history.push('/mypokes');
  render() {
    // const {name} = this.state.file;
    // alert(name) 
    return (
      <>
      <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Create NFT MyPoke</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                  <li className="breadcrumb-item active">Poke</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      <section className="content mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card text-light bg-color">
                <div className="card-header">
                  <h3 className="card-title">Create Item</h3>
                </div>

                <form onSubmit={(event)=>{
                    event.preventDefault();
                    this.startMintingProcess()
                }}>

                  <div className="card-body">

                    <div className="col-sm-3 float-right">
                      <div className="form-group">
                        <div className="col-sm-12">
                          <input type="file" className="form-control" accept=".jpg, jpeg, .bmp, .png, .gif" onChange={this.captureFile} />
                         <div style={{width:'300xp'}}>
                            <img className="img-fluid" id="imagePreview" src={this.state.image} alt="image" />
                         </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="name" className="col-sm-3">Name</label>
                      <div className="col-sm-8">
                        <input 
                        type="text" 
                        className="form-control"                  
                        placeholder="Enter Name" 
                        onChange={event => this.setState({ new_name: event.target.value })}
                        required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="name" className="col-sm-3">Description</label>
                      <div className="col-sm-8">
                        <input 
                        type="text" 
                        className="form-control"                  
                        placeholder="Enter Description" 
                        onChange={event => this.setState({ new_description: event.target.value })}
                        required />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="age" className="col-sm-3">BNB Price</label>
                      <div className="col-sm-8">
                        <input 
                        type="number" 
                        className="form-control"                       
                        placeholder="Enter BNB Price" 
                        onChange={event => this.setState({ new_price: event.target.value })}
                        required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="age" className="col-sm-3">Royalities</label>
                      <div className="col-sm-8">
                        <input 
                        type="number" 
                        className="form-control"                       
                        placeholder="percentage" 
                        onChange={event => this.setState({ new_royalties: event.target.value })}
                        required />
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button type="submit" className="btn btn-success">Create Item</button>
                    <Link to='/admin/mypokes' className="btn btn-default btn-cancel float-right">Discard</Link>
                  </div>
                </form>
              </div>

            </div>
            <div className="col-md-6" />
          </div>
        </div>
      </section>
      </>
    );
  }
}

export default CreateMypoke;