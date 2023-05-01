// Replace with your smart contract ABI and address
//const contractABI = [{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"winner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"BetResolved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"party1\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"party2\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"oracle\",\"type\":\"address\"}],\"name\":\"NewBet\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"proposer\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"oracle\",\"type\":\"address\"}],\"name\":\"OracleProposed\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"LWIToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"betId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_oracle\",\"type\":\"address\"}],\"name\":\"approveOracle\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"betString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"bets\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"party1\",\"type\":\"address\"},{\"internalType\":\"address payable\",\"name\":\"party2\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"oracle\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"fee\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"finalized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"resolved\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"collected\",\"type\":\"bool\"},{\"internalType\":\"address payable\",\"name\":\"winner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"oracleProposedBy\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_token\",\"type\":\"address\"}],\"name\":\"calculateOracleReward\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_bet\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"_selfDirected\",\"type\":\"bool\"}],\"name\":\"createBet\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"currentBetId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"feePercentage\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"oracleAddress\",\"type\":\"address\"}],\"name\":\"getOracleBets\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"partyAddress\",\"type\":\"address\"}],\"name\":\"getParticipantBets\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"betId\",\"type\":\"uint256\"}],\"name\":\"iLost\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"betId\",\"type\":\"uint256\"}],\"name\":\"joinBet\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"betId\",\"type\":\"uint256\"}],\"name\":\"ownerCancelBet\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"betId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"oracle\",\"type\":\"address\"}],\"name\":\"proposeOracle\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"betId\",\"type\":\"uint256\"}],\"name\":\"readyUp\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"betId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_winner\",\"type\":\"address\"}],\"name\":\"resolveBet\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"transferStuckToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"betId\",\"type\":\"uint256\"}],\"name\":\"withdrawBNBFromBet\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}];
//const contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"BetResolved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":true,"internalType":"address","name":"party1","type":"address"},{"indexed":true,"internalType":"address","name":"party2","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"oracle","type":"address"}],"name":"NewBet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"address","name":"proposer","type":"address"},{"indexed":false,"internalType":"address","name":"oracle","type":"address"}],"name":"OracleProposed","type":"event"},{"inputs":[],"name":"LWIToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"betId","type":"uint256"},{"internalType":"address","name":"_oracle","type":"address"}],"name":"approveOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"betString","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"bets","outputs":[{"internalType":"address payable","name":"party1","type":"address"},{"internalType":"address payable","name":"party2","type":"address"},{"internalType":"address","name":"oracle","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"bool","name":"finalized","type":"bool"},{"internalType":"bool","name":"resolved","type":"bool"},{"internalType":"bool","name":"collected","type":"bool"},{"internalType":"address payable","name":"winner","type":"address"},{"internalType":"address","name":"oracleProposedBy","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"calculateOracleReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_bet","type":"string"},{"internalType":"bool","name":"_selfDirected","type":"bool"}],"name":"createBet","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"currentBetId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feePercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"oracleAddress","type":"address"}],"name":"getOracleBets","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"partyAddress","type":"address"}],"name":"getParticipantBets","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"betId","type":"uint256"}],"name":"iLost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"betId","type":"uint256"}],"name":"joinBet","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"betId","type":"uint256"}],"name":"ownerCancelBet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"betId","type":"uint256"},{"internalType":"address","name":"oracle","type":"address"}],"name":"proposeOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"betId","type":"uint256"}],"name":"readyUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"betId","type":"uint256"},{"internalType":"address","name":"_winner","type":"address"}],"name":"resolveBet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"transferStuckToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"betId","type":"uint256"}],"name":"withdrawBNBFromBet","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const contractABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "feePercentage",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "betString",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "partyAddress",
        "type": "address"
      }
    ],
    "name": "getParticipantBets",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "string",
        "name": "_bet",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "_selfDirected",
        "type": "bool"
      }
    ],
    "name": "createBet",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }
];

const contractAddress = '0xe3fcc447c167a2d7d789197b44cb7086ee6159aa';

let web3;
let contract;

function checkWeb3Support() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    return true;
  } else {
    console.error('Please install a web3-compatible browser or extension like MetaMask.');
    return false;
  }
}

async function checkWalletConnection(account) {
  if (!account) {
    const accounts = await web3.eth.getAccounts();
    account = accounts[0];
  }

  if (account) {
    const walletType = window.ethereum.isMetaMask ? 'MetaMask' : 'Other';
    console.log(`Wallet connected: ${walletType}`);
    return true;
  } else {
    console.log('Please connect your wallet.');
    return false;
  }
}

async function switchToBSC() {
  //const chainId = '0x38'; // Binance Smart Chain Mainnet Chain ID
  const chainId = '0x61'; // Binance Smart Chain Testnet Chain ID

  // const bscMainnetParams = {
    // chainId: chainId,
    // chainName: 'Binance Smart Chain Mainnet',
    // nativeCurrency: {
      // name: 'BNB',
      // symbol: 'bnb',
      // decimals: 18,
    // },
    // rpcUrls: ['https://bsc-dataseed.binance.org/'],
    // blockExplorerUrls: ['https://bscscan.com/'],
  // };
  
    const bscMainnetParams = {

      chainId: '0x61',
      chainName: 'Binance Smart Chain Testnet',
      nativeCurrency: {
        name: 'BNB',
        symbol: 'bnb',
        decimals: 18,
      },
      rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
      blockExplorerUrls: ['https://testnet.bscscan.com/'],
  };

  try {
    // Attempt to switch to the BSC Mainnet
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId }],
    });
  } catch (error) {
    if (error.code === 4902) {
      // Chain not added, try adding it
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [bscMainnetParams],
        });
        console.log('Binance Smart Chain Mainnet added to wallet');
      } catch (addError) {
        console.error('Failed to add Binance Smart Chain:', addError.message);
      }
    } else {
      console.error('Failed to switch to Binance Smart Chain:', error.message);
    }
  }
}

async function connectWallet() {
  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log('Wallet connected:', accounts[0]);

    // Initialize the app after the wallet is connected
    initializeApp();

    return accounts[0];
  } catch (error) {
    console.error('Failed to connect wallet:', error.message);
    return false;
  }
}

async function initializeApp() {
  if (await checkWalletConnection()) {
    await switchToBSC();
    saveNewNumber();
  }
}

async function getOwnerAddress() {
  contract = new web3.eth.Contract(contractABI, contractAddress);
  const ownerAddress = await contract.methods.owner().call();
  console.log(`ownerAddress: ${ownerAddress}`);
  return ownerAddress;
}

async function getFeePercentage() {
  contract = new web3.eth.Contract(contractABI, contractAddress);
  const feePercentage = await contract.methods.feePercentage().call();
  console.log(`feePercentage: ${feePercentage}`);
  return feePercentage;
}

async function getBetString(betId) {
  try {
    const betString = await contract.methods.betString(betId).call();
    console.log('Bet String:', betString);
    return betString;
  } catch (error) {
    console.error('Failed to fetch bet string:', error.message);
  }
}

async function fetchParticipantBets(address) {
  try {
    const participantBets = await contract.methods.getParticipantBets(address).call();
    console.log('Participant Bets:', participantBets);
    return participantBets;
  } catch (error) {
    console.error('Failed to fetch participant bets:', error.message);
  }
}

async function saveNewNumber() {
  const ownerAddress = await getOwnerAddress();
  const feePercentage = await getFeePercentage();
  const betId = 2; // Replace with the desired bet ID
  const betString = await getBetString(betId);
  const participantAddress = '0x5DB7ABDD587B69C0887f5704855e500D7C609491'; // Replace with the desired participant address
  fetchParticipantBets(participantAddress);
}

(async function init() {
  if (checkWeb3Support()) {
    const connectWalletButton = document.getElementById('connect-wallet');
    connectWalletButton.addEventListener('click', connectWallet);
  }
})();
