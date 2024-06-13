pragma solidity ^0.8.0;

contract SimpleStorage {
    uint public storedData;

    constructor(uint initialValue) {
        storedData = initialValue;
    }

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}
