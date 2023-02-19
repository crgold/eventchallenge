const fs = require('fs');
const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"; // address of the deployed contract
const abiPath = "artifacts/contracts/eventChallenge.sol/Bank.json"; //contract abi
const abi = JSON.parse(fs.readFileSync(abiPath)).abi;

const EventTest = new web3.eth.Contract(abi, contractAddress);

EventTest.events.allEvents((error, event) => {
   if (!error)
   console.log(event);
});