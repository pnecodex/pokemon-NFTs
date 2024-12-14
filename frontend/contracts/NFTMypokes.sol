// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
contract NFTMypokes is ERC721,Ownable{
   using Counters for Counters.Counter;
    using Strings for uint256;
    Counters.Counter  _tokenIds;

    RenderToken[] public _tokenURIs;
    struct RenderToken {
        uint256 id;
        string uri;
        uint256 price;
        uint8 rarity;
    }
    constructor() ERC721("MyPoke","POKE") {}
    
    function _setTokenURI(uint256 tokenId,string memory _tokenURI,uint256 price,uint8 rarity) internal {
        RenderToken memory sale = RenderToken(tokenId,_tokenURI,price,rarity);
        _tokenURIs.push(sale);
    }
    function allNFTs() public view returns(RenderToken[] memory){
        return _tokenURIs;
    }
    function mint(address recipient, string memory uri,uint256 price, uint8 rarity) public returns(uint256) {
        uint256 newId = _tokenIds.current();
        _mint(recipient,newId);
        _setTokenURI(newId,uri,price,rarity);
        _tokenIds.increment();
        return newId; 
    }
      
 } 
