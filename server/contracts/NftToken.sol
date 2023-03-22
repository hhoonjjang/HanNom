// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/utils/Strings.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract NftToken is ERC721Enumerable, ERC721URIStorage, Ownable {
  uint public constant MAX_TOKEN_COUNT = 1000;
  uint public mint_price = 1 ether;
  string public metadataURI;
  uint[] public tokenList;
  using Counters for Counters.Counter;
  Counters.Counter private _tokenId;
  mapping(uint => TokenData) public TokenDatas;
  uint[4][4] public tokenCount;
  struct TokenData {
    uint Rank;
    uint Type;
  }

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
    uint firstTokenId,
    uint batchSize
  ) internal override(ERC721, ERC721Enumerable) {
    super._beforeTokenTransfer(from, to, firstTokenId, batchSize);
  }

  function _burn(uint tokenId) internal override(ERC721, ERC721URIStorage) {
    super._burn(tokenId);
  }

  function supportsInterface(
    bytes4 interfaceId
  ) public view override(ERC721, ERC721Enumerable) returns (bool) {
    return super.supportsInterface(interfaceId);
  }

  function tokenURI(
    uint tokenId
  ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
    return super.tokenURI(tokenId);
  }

  function _baseURI() internal pure override returns (string memory) {
    return "https://gateway.pinata.cloud/ipfs/";
  }

  function safeMint(string memory uri) public {
    uint tokenId = _tokenId.current();
    _tokenId.increment();
    _safeMint(msg.sender, tokenId);
    _setTokenURI(tokenId, uri);
    addTokenList(tokenId);
  }

  function mintToekn() public payable {
    require(msg.value >= mint_price);
    require(MAX_TOKEN_COUNT > ERC721Enumerable.totalSupply());
    uint tokenId = ERC721Enumerable.totalSupply() + 1;
    TokenData memory random = getRandomTokenData(msg.sender, tokenId);
    TokenDatas[tokenId] = random;
    tokenCount[random.Rank - 1][random.Type - 1] += 1;

    payable(Ownable.owner()).transfer(msg.value);
    _mint(msg.sender, tokenId);
  }

  function getRandomTokenData(
    address _owner,
    uint _tokensId
  ) private pure returns (TokenData memory) {
    uint randomNum = uint(keccak256(abi.encodePacked(_owner, _tokensId))) % 100;
    TokenData memory data;
    if (randomNum < 5) {
      data.Rank = 4;
      if (randomNum == 1) {
        data.Type = 1;
      } else if (randomNum == 2) {
        data.Type = 2;
      } else if (randomNum == 3) {
        data.Type = 3;
      } else {
        data.Type = 4;
      }
    } else if (randomNum < 13) {
      data.Rank = 3;
    } else if (randomNum < 37) {
      if (randomNum < 19) {
        data.Type = 1;
      } else if (randomNum < 25) {
        data.Type = 2;
      } else if (randomNum < 31) {
        data.Type = 3;
      } else {
        data.Type = 4;
      }
      data.Rank = 2;
    } else {
      if (randomNum < 52) {
        data.Type = 1;
      } else if (randomNum < 68) {
        data.Type = 2;
      } else if (randomNum < 84) {
        data.Type = 3;
      } else {
        data.Type = 4;
      }
      data.Rank = 1;
    }
    return data;
  }

  function setMetadataURI(string memory _uri) public onlyOwner {
    metadataURI = _uri;
  }

  function getTokenRank(uint _tokensId) public view returns (uint) {
    return TokenDatas[_tokensId].Rank;
  }

  function getTokenType(uint _tokensId) public view returns (uint) {
    return TokenDatas[_tokensId].Type;
  }

  function getTokenCount() public view returns (uint[4][4] memory) {
    return tokenCount;
  }

  function addTokenList(uint _tokensId) public {
    // address tokenOwner = ownerOf(_tokensId);
    tokenList.push(_tokensId);
  }

  function getTokenList() public view returns (TokenInfo[] memory) {
    require(tokenList.length > 0);
    TokenInfo[] memory list = new TokenInfo[](tokenList.length);

    for (uint i = 0; i < tokenList.length; i++) {
      uint tokenId = tokenList[i];
      string memory _tokenURI = tokenURI(tokenId);
      list[i] = TokenInfo(tokenId, _tokenURI);
    }
    return list;
  }

  function getTokenListLength() public view returns (uint) {
    return tokenList.length;
  }
}
