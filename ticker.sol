pragma solidity ^0.5.0;

contract ticker {
    uint256 public stockCount = 0;
    string greeting;

    constructor() public {
        setStock("AAPL", 100, 200);
        greeting = "hello";
    }

    //
    struct Stock {
        string symbol;
        uint256 price;
        uint256 volume;
    }

    // quotes by symbol
    mapping(uint256 => Stock) public stocks;

    //  Contract owner
    address oracleOwner;

    function setStock(string memory _symbol, uint256 _price, uint256 _volume)
        public
    {
        stockCount++;
        stocks[stockCount] = Stock(_symbol, _price, _volume);
    }

   
    Get the value of a stock
    function getStockPrice(bytes4 symbol) public view returns (uint256) {
       return price;
    }

   
    Get the value of volume traded for a stock
    function getStockVolume(bytes4 symbol) public view returns (uint256) {
       return volume;
    }

}
