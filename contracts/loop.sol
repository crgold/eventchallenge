// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract calc {

    function loop() public pure{
        for(uint i = 0; i < 1000; i++) {
            helloWorld();
         }
    }

    function helloWorld() public pure returns(string memory) {
        return "Hello World!";
    }
}