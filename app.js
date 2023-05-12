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
	  	    document.getElementById('call-response').innerText = 'Please connect your wallet.';

	  connectWallet();
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

      chainId: chainId,
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
    if (error.code === 4902||(chainId='0x61'&&error.code===-32603)) {
      // Chain not added, try adding it
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [bscMainnetParams],
        });
        console.log('Binance Smart Chain Mainnet added to wallet');
			document.getElementById('call-response').innerText = 'Binance Smart Chain Mainnet added to wallet';

      } catch (addError) {
        console.error('Failed to add Binance Smart Chain:', addError.message);
      }
    } else {
	document.getElementById('call-response').innerText = error.message+error.code;

      console.error('Failed to switch to Binance Smart Chain:', error.message);
    }
  }
}

async function connectWallet() {
  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log('Wallet connected:', accounts[0]);
		  document.getElementById('bet-strin2').innerText = '2';

	document.getElementById('call-response').innerText = 'Wallet connected:', accounts[0];

    // Initialize the app after the wallet is connected
    initializeApp();

    return accounts[0];
  } catch (error) {
	document.getElementById('call-response').innerText = error.message+error.code;

    console.error('Failed to connect wallet:', error.message);
    return false;
  }
}

async function initializeApp() {
  if (await checkWalletConnection()) {
    await switchToBSC();
    //saveNewNumber();
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
  document.getElementById('owner-address').innerText = 'Wallet address: '+ownerAddress;
  const feePercentage = await getFeePercentage();  
  document.getElementById('fee-Percentage').innerText = 'Fee: '+feePercentage + '%';

  const betId = 1; // Replace with the desired bet ID
  const betString = await getBetString(betId);
  document.getElementById('bet-string').innerText = 'Bet text: '+betString;

  const participantAddress = '0x5DB7ABDD587B69C0887f5704855e500D7C609491'; // Replace with the desired participant address
  fetchParticipantBets(participantAddress);
  createNewBet("",true,0.01)
}

async function createNewBet(betString, selfDirected, valueInWei) {
	 betString = 'Sample bet';
	 selfDirected = true;
	 valueInWei = web3.utils.toWei('0.001', 'ether'); // Replace 0.1 with the desired amount in BNB

  try {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.createBet(betString, selfDirected).send({
      from: accounts[0],
      value: valueInWei
    });
	  document.getElementById('call-response').innerText = 'Bet created successfully';

    console.log('Bet created successfully');	
  } catch (error) {
	    document.getElementById('call-response').innerText = 'Error: '+error;

    console.error('Failed to create bet:', error.message);
  }
}

(async function init() {
  if (checkWeb3Support()) {
	  initializeApp();
    const connectWalletButton = document.getElementById('connect-wallet');
    connectWalletButton.addEventListener('click', connectWallet);
	  document.getElementById('bet-string').innerText = '1';

  }
  else{
	document.getElementById('bet-string').innerText = 'No web3 support';
  }
})();
