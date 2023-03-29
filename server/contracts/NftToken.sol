// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract NftToken is ERC721Enumerable, ERC721URIStorage, Ownable {
  uint public constant MAX_TOKEN_COUNT = 1000;
  uint public mint_price = 1 ether;
  string public metadataURI;
  uint[] public tokenList;
  using Counters for Counters.Counter;
  Counters.Counter private _tokenId;
  uint public constant MAX_TOEKN_COUNT = 1000;
  struct TokenData {
    uint Rank;
    uint Type;
  }
  mapping(uint => TokenData) public TokenDatas;

  struct TokenInfo {
    uint tokenId;
    string tokenURI;
  }

  constructor(
    string memory _name,
    string memory _symbol
  ) ERC721(_name, _symbol) {}

  function _beforeTokenTransfer(
    address from,
    address to,
    uint256 firstTokenId,
    uint256 batchSize
  ) internal override(ERC721, ERC721Enumerable) {
    super._beforeTokenTransfer(from, to, firstTokenId, batchSize);
  }

  function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
    super._burn(tokenId);
  }

  function supportsInterface(
    bytes4 interfaceId
  ) public view override(ERC721, ERC721Enumerable) returns (bool) {
    return super.supportsInterface(interfaceId);
  }

  // function tokenURI(
  //   uint256 tokenId
  // ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
  //   return super.tokenURI(tokenId);
  // }

  function tokenURI(
    uint _tokenId
  ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
    string memory Rank = Strings.toString(TokenDatas[_tokenId].Rank);
    string memory Type = Strings.toString(TokenDatas[_tokenId].Type);
    return string(abi.encodePacked(metadataURI, "/", Rank, "/", Type, ".json"));
  }

  function _baseURI() internal pure override returns (string memory) {
    return "https://gateway.pinata.cloud/ipfs/";
  }

  function safeMint(string memory uri) public {
    uint256 tokenId = _tokenId.current();
    _tokenId.increment();
    _safeMint(msg.sender, tokenId);
    _setTokenURI(tokenId, uri);
    tokenList.push(tokenId);
  }

  function getTokenList() public view returns (TokenInfo[] memory) {
    if (tokenList.length == 0) {
      TokenInfo[] memory list = new TokenInfo[](tokenList.length);
      return list;
    } else {
      TokenInfo[] memory list = new TokenInfo[](tokenList.length);
      for (uint i = 0; i < tokenList.length; i++) {
        uint tokenId = tokenList[i];
        string memory tokenURI1 = tokenURI(tokenId);
        list[i] = TokenInfo(tokenId, tokenURI1);
      }

      return list;
    }
  }
}
