// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./NftToken.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract SaleToken {
  NftToken public Token;
  using Counters for Counters.Counter;
  Counters.Counter private _Ids;

  constructor(address _tokenAddress) {
    Token = NftToken(_tokenAddress);
  }

  struct TokenInfo {
    uint id;
    address payable seller;
    address NFTaddress;
    uint tokenId;
    uint price;
    string tokenURI;
    bool sold;
  }
  mapping(uint => TokenInfo) public onMarket;
  mapping(uint => uint) public tokenPrices;

  event sale(
    uint id,
    address NftAddress,
    address seller,
    uint tokenId,
    uint price
  );

  //아래 배열은 사용 안해도 될듯
  // uint[] public SaleTokenList;

  function SalesToken(address _NFTaddress, uint _tokenId, uint _price) public {
    address tokenOwner = Token.ownerOf(_tokenId);
    require(tokenOwner == msg.sender);
    require(_price > 0);
    // require(Token.isApprovedForAll(msg.sender, address(this)));

    string memory _tokenURI = Token.tokenURI(_tokenId);
    onMarket[_Ids.current()] = TokenInfo(
      _Ids.current(),
      payable(msg.sender),
      _NFTaddress,
      _tokenId,
      _price,
      _tokenURI,
      false
    );
    _Ids.increment();
    emit sale(_Ids.current(), _NFTaddress, msg.sender, _tokenId, _price);
    // SaleTokenList.push(_tokenId);
  }

  // function PurchaseToken(uint _tokenId) public payable {
  //   address tokenOwner = Token.ownerOf(_tokenId);

  //   require(tokenOwner != msg.sender);
  //   require(tokenPrices[_tokenId] > 0);
  //   require(tokenPrices[_tokenId] <= msg.value);

  //   payable(tokenOwner).transfer(msg.value);
  //   Token.transferFrom(tokenOwner, msg.sender, _tokenId);

  //   tokenPrices[_tokenId] = 0;
  //   popSaleToken(_tokenId);
  // }

  // function cancelSaleToken(uint _tokenId) public {
  //   address tokenOwner = Token.ownerOf(_tokenId);

  //   require(tokenOwner == msg.sender);
  //   require(tokenPrices[_tokenId] > 0);

  //   tokenPrices[_tokenId] = 0;
  //   popSaleToken(_tokenId);
  // }

  // function popSaleToken(uint _tokenId) private returns (bool) {
  //   for (uint i = 0; i < SaleTokenList.length; i++) {
  //     if (SaleTokenList[i] == _tokenId) {
  //       SaleTokenList[i] = SaleTokenList[SaleTokenList.length - 1];
  //       SaleTokenList.pop();
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  function getSaleTokenList() public view returns (TokenInfo[] memory) {
    // require(SaleTokenList.length > 0);
    TokenInfo[] memory saleTokenList = new TokenInfo[](_Ids.current());
    uint count = 0;
    for (uint i = 0; i < _Ids.current(); i++) {
      if (onMarket[i].sold == false) {
        saleTokenList[count] = onMarket[i];
        count++;
      }
      // 수정
      // NftOnSale[] memory filteredCheckList = new NftOnSale[](count);
      //     for(uint i = 0; i<count; i++){
      //         filteredCheckList[i] = checkList[i];
      //     }
      //     return filteredCheckList;

      // 원본
      // uint tokenId = SaleTokenList[i];
      // uint price = tokenPrices[tokenId];
      // string memory tokenURI = Token.tokenURI(tokenId);

      // list[i] = TokenInfo(tokenId, price, tokenURI);
    }
    return saleTokenList;
  }

  function getOwnerTokens(
    address payable _tokenOwner,
    address _NftAddress
  ) public view returns (TokenInfo[] memory) {
    uint balance = Token.balanceOf(_tokenOwner);
    require(balance > 0);

    TokenInfo[] memory list = new TokenInfo[](balance);

    for (uint i = 0; i < balance; i++) {
      if (onMarket[i].seller == _tokenOwner) {
        list[i] = onMarket[i];
      } else {
        uint tokenId = Token.tokenOfOwnerByIndex(_tokenOwner, i);
        string memory tokenURI = Token.tokenURI(tokenId);

        list[i] = TokenInfo(
          i,
          _tokenOwner,
          _NftAddress,
          tokenId,
          0,
          tokenURI,
          false
        );
      }
    }
    return list;
  }

  function getOnMarket() public view returns (TokenInfo[] memory) {
    TokenInfo[] memory list = new TokenInfo[](_Ids.current());
    uint count = 0;
    for (uint i = 0; i < _Ids.current(); i++) {
      if (onMarket[i].sold == false) {
        list[count] = onMarket[i];
        count++;
      }
    }
    return list;
  }
  // function getLatestToken(
  //   address _tokenOwner
  // ) public view returns (TokenInfo memory) {
  //   uint balance = Token.balanceOf(_tokenOwner);
  //   uint tokenId = Token.tokenOfOwnerByIndex(_tokenOwner, balance - 1);
  //   uint price = tokenPrices[tokenId];
  //   string memory tokenURI = Token.tokenURI(tokenId);

  //   return TokenInfo(tokenId, price, tokenURI);
  // }
}
