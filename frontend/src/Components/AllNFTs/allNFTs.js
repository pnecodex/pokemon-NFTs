import React, { Fragment, useEffect, useState } from 'react';
import './allnfts.css';
import NFTMypoke from '../../abis/NFTMypokes.json';
import Web3 from 'web3';
import axios from 'axios';

const AllNFTs = () => {
  const [account, setAccount] = useState('');
  const [contract, setContract] = useState(null);
  const [NFTs, setNFTs] = useState([]);
  const [NFT, setNFT] = useState([]);
  const [price, setPrice] = useState('');
  const [rarity, setRarity] = useState('');
  useEffect(async () => {
    await loadWeb3();
    await loadBlockchainData();
  }, [])
  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  const loadBlockchainData = async () => {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts();
    setAccount({ account: accounts[0] })

    const networkId = await web3.eth.net.getId()
    const networkData = NFTMypoke.networks[networkId]
    if (networkData) {
      const abi = NFTMypoke.abi
      const address = networkData.address
      const contract = new web3.eth.Contract(abi, address);
      const AllNFTs = await contract.methods.allNFTs().call();
      setNFTs(AllNFTs);
      setContract(contract);
    } else {
      window.alert('Smart contract not deployed to detected network.')
    }
  }

  const fetchMetatDataForNFTS = () => {
    setNFT([]);
    // NFTs.forEach((nft) => {
    //   fetch(nft.uri)
    //     .then((response) => response.json())
    //     .then((metaData) => {
    //       setNFT((prevState) => [
    //         ...prevState,
    //         { id: nft.id, metaData: metaData },
    //       ]);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // });
    // console.log(NFTs,'NFTs');
    // setNFT([]);
    NFTs.forEach(async (nft) => {
      try {
        // console.log(nft.price,'price rarity');
        const res = await fetch(nft.uri);
        const data = await res.json();
        setNFT((prevState) => [
          ...prevState,
          { id: nft.id, price: nft.price, rarity: nft.rarity, data: data },
        ]);
      } catch (error) {
        console.log(error, 'error');
      }
      // fetch(nft.uri)
      // .then((response) => response.json())

      // .then((metaData) => {

      //   setNFT((prevState) => [
      //     prevState,
      //        [metaData],
      //     ]);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    });
  };
  useEffect(() => {
    fetchMetatDataForNFTS();
  }, [NFTs]);
  return (
    <section className="contnet">
      <h2 className="all-nfts text-light">NFT Lootboxes</h2>
      <div className="container-fluid">
        <div className="row">
          {NFT.map((nft, index) => (
            <div key={index} className="col-lg-2 col-md-6 col-sm-6">
              <div className="card card-all-nfts card-bg-color">
                <div className="card-content text-center text-light">
                  <div className="card-img">
                    <img className="img-fluid" src={nft.data.image} alt="NFT" />
                  </div>
                  <h5 className="cost">Price: {nft.price} BNB</h5>
                  <h5 className="cost">Rarity: {nft.rarity}</h5>
                  <button className="btn-unlock-wallet">unlock Wallet</button>
                  <h5 className="you-will-get">You will get 1 NFT</h5>
                </div>
              </div>
            </div>
          ))}



        </div>
      </div>

    </section>

  );
}

export default AllNFTs;