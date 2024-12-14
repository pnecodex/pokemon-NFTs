import React from 'react';
import './lootbox.css';
const LootBox = () => {
  return (
    <section className="contnet">
      <h2 className="NFT-lootbox text-light">NFT Lootboxes</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card card-lootbox h-100 card-bg-color">
              <div className="card-content text-center text-light">
                <div className="card-img">
                  <img className="img-fluid" src="/backend/images/silver-box.png" alt="" />
                </div>
                <h5 className="cost">Cost:2 Poke</h5>
                <button className="btn-unlock-wallet">unlock Wallet</button>
                <h5 className="you-will-get">You will get 1 NFT</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card card-lootbox h-100 card-bg-color">
              <div className="card-content text-center text-light">
                <div className="card-img">
                  <img className="img-fluid" src="/backend/images/silver-box.png" alt="" />
                </div>
                <h5 className="cost">Cost:2 Poke</h5>
                <button className="btn-unlock-wallet">unlock Wallet</button>
                <h5 className="you-will-get">You will get 1 NFT</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card card-lootbox h-100 card-bg-color">
              <div className="card-content text-center text-light">
                <div className="card-img">
                  <img className="img-fluid" src="/backend/images/gold-box.png" alt="" />
                </div>
                <h5 className="cost">Cost:2 Poke</h5>
                <button className="btn-unlock-wallet">unlock Wallet</button>
                <h5 className="you-will-get">You will get 1 NFT</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

  );
}

export default LootBox;