let connectedAccount = '';

let bigBangTokenContractAddr = '0xb2F80E2B2c1Fef0D4CEa27e3D809743D123F6850';
const bigBangTokenABI = JSON.parse(document.getElementById('bigBangTokenABI').getAttribute('data-address'));

let lendingServiceContractAddr = '0x17e2fF362d64A14Dad161871772053041B6d3D8e';
const lendingServiceABI = JSON.parse(document.getElementById('lendingContractABI').getAttribute('data-address'));

let votingServiceContractAddr = '0xE2bB8B9a55D9504475A64cEC8Af654fb802c95EF';
const votingServiceABI = JSON.parse(document.getElementById('votingContractABI').getAttribute('data-address'));

const alertBox = document.getElementById('error-box');


document.getElementById('metamaskConnectButton').addEventListener('click', connectWallet);
document.getElementById('connectedBtn').addEventListener('click', setUserWallet);
document.getElementById('addTokenButton').addEventListener('click', function() {
    addTokenToWallet(bigBangTokenContractAddr, 'BGBT', 18);
});

document.getElementById('lendingLimitationTab').addEventListener('change', tabManagement);
document.getElementById('repaymentPeriodTab').addEventListener('change', tabManagement);
document.getElementById('lending-limit-vote-number-input').addEventListener('input', checkLendingLimitVoteNumberInput);
document.getElementById('repayment-period-vote-number-input').addEventListener('input', checkRepaymentPeriodVoteNumberInput);

document.getElementById('repay-calculation-token-amount-input').addEventListener('input', checkRepayCalculationInput);
document.getElementById('borrow-calculation-token-amount-input').addEventListener('input', checkBorrowCalculationInput);
document.getElementById('repay-calculate-btn').addEventListener('click', function() {
    getRepaymentPreview(lendingServiceContractAddr , document.getElementById('repay-calculation-token-amount-input').value);
});
document.getElementById('borrow-calculate-btn').addEventListener('click', function() {
    getBorrowPreview(lendingServiceContractAddr, document.getElementById('borrow-calculation-token-amount-input').value);
});
document.getElementById('user-wallet-modal-label').addEventListener('click', function() {
    copyToClipboard(connectedAccount, 'user-wallet-address-copy-icon');
});


async function openConnectionModel(){
    await walletConnectModal.openModal();
}

function visibleElement(elementId) {
    document.getElementById(elementId).style.display = 'block';
}

function unvisibleElement(elementId) {
    document.getElementById(elementId).style.display = 'none';
}

function activeElement(elementId){
    let element = document.getElementById(elementId);
    
    element.classList.remove('disabled');
    element.classList.remove('btn-outline-info');
    element.classList.add('btn-info');
}

function deactiveElement(elementId){
    let element = document.getElementById(elementId);

    element.classList.remove('btn-info');
    element.classList.add('disabled');
    element.classList.add('btn-outline-info');
}

function disableElement(elementId){
    let element = document.getElementById(elementId);
    element.classList.add('disabled');
}

function setElementValue(elementId, value)
{
    document.getElementById(elementId).value = value;
}

function getSlicedAddress(address)
{
    return `${address.substring(0, 5)} ..... ${address.slice(-5)}`;
}

function tabManagement()
{
    var lendignLimitationTab = document.getElementById('lendingLimitationTab');

    if (lendignLimitationTab.checked){
        unvisibleElement('repaymentPeriodCard');
        visibleElement('lendingLimitationCard');
    }
    else {
        unvisibleElement('lendingLimitationCard');
        visibleElement('repaymentPeriodCard');
    }
    
    deactiveElement('confirm-voting-btn');
}


async function connectWallet() {
    try {
        const connectButton = document.getElementById('connectButton');
        document.getElementById('connectedBtn').style.display = 'block';        
        document.getElementById('modalBtn').style.display = 'none';
        connectButton.classList.remove('btn-info');
        connectButton.classList.add('btn-disabled');
        connectButton.innerText = "Please Wait ...";
        const provider = await detectEthereumProvider();
        const alertBox = document.getElementById('error-box');

        if (provider) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            connectedAccount = account;
            const chainId = await provider.request({ method: 'eth_chainId' });

            if (chainId !== '0x13881') {
                await provider.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x13881' }],
                });
            }

            await provider.request({
                method: 'eth_accounts',
                params: [],
            });

            connectButton.classList.remove('btn-disabled');
            connectButton.classList.add('btn-info');

            connectButton.innerText = getSlicedAddress(account) + " ";
            const iconElement = document.createElement('i');
            iconElement.classList.add('fa');
            iconElement.classList.add('fa-wallet');
            connectButton.appendChild(iconElement);

        } else {
            alertBox.style.display = 'block';
            alertBox.innerHTML = "Please Install MetaMask wallet extention on your browser.";

            connectButton.classList.remove('btn-disabled');
            connectButton.classList.add('btn-danger');
            connectButton.innerText = "Wallet Not Found !";
        }
    } catch (error) {

        if (error.code == 4001) {
            connectButton.classList.remove('btn-disabled');
            connectButton.classList.add('btn-danger');
            connectButton.innerText = "Rejected !";
        }
        else {
            alertBox.style.display = 'block';
            alertBox.innerHTML = error.message;
        }
    }
}

function setUserWallet()
{
    const modalLabel = document.getElementById('user-wallet-address');
    modalLabel.innerText = '(' + getSlicedAddress(connectedAccount) + ')';
}

window.ethereum.on('chainChanged', (chainId) => {
    if (chainId === '0x13881') {
        console.log("Connected to Testnet Binance Chain (ChainId: 0x13881)");
    } else {
        switchToAuthorizedNetwork();
    }
});

async function switchToAuthorizedNetwork() {
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x13881' }],
        });

        console.log("Switched to Testnet Binance Chain (ChainId: 0x13881)");
    } catch (error) {
        alertBox.style.display = 'block';
        alertBox.innerHTML = error.message;
    }
}

async function addTokenToWallet(tokenContractAddress, tokenSymbol, tokenDecimals) {
    try {
        // const tokenImage = 'آدرس-تصویر-توکن';

        const success = await window.ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: tokenContractAddress,
                    symbol: tokenSymbol,
                    decimals: tokenDecimals
                    // image: tokenImage,
                },
            },
        });
    } catch (error) {
        alertBox.style.display = 'block';
        alertBox.innerHTML = error.message;
    }
}


function checkBorrowCalculationInput() {
    let tokenAmount = parseFloat(document.getElementById('borrow-calculation-token-amount-input').value);
    let errorMessage = document.getElementById('borrow-error-message');

    if (isNaN(tokenAmount)) {
        deactiveElement('borrow-calculate-btn');
        visibleElement('borrow-error-message');
        errorMessage.textContent = "The input value cannot be text or null !";
    } else {
        activeElement('borrow-calculate-btn');
        unvisibleElement('borrow-error-message');
    }
}

async function getBorrowPreview(tokenAddress, collateralAmount)
{
    if(connectedAccount === null || connectedAccount === '')
        await connectWallet();

    disableElement('borrow-calculation-tab');
    unvisibleElement('borrow-calculation-panel');
    visibleElement('borrow-await-page');

    let result = await readContract(lendingServiceABI, lendingServiceContractAddr, 'getBorrowAmounts', tokenAddress, ethToWei(collateralAmount));

    if(result !== null && result !== 0)
    {
        unvisibleElement('borrow-await-page');
        activeElement('borrow-preview-tab');
        visibleElement('borrow-preview-panel');

        setElementValue('borrow-preview-receive-amount', weiToEth(result[1]));
        setElementValue('borrow-preview-pay-amount', collateralAmount);

        setElementValue('borrow-preview-receive-from-address', getSlicedAddress(lendingServiceContractAddr));
        setElementValue('borrow-preview-receive-to-address', getSlicedAddress(connectedAccount));

        setElementValue('borrow-preview-pay-from-address', getSlicedAddress(connectedAccount));
        setElementValue('borrow-preview-pay-to-address', getSlicedAddress(lendingServiceContractAddr));

        document.getElementById('borrow-btn').addEventListener('click', function() {
            borrow(tokenAddress, collateralAmount, weiToEth(result[1]));
        });
    }
    else
    {
        unvisibleElement('borrow-await-page');
        visibleElement('borrow-error-page');
    }
}

async function borrow(tokenAddress, collateralAmount, borrowAmount) {
    disableElement('borrow-preview-tab');
    unvisibleElement('borrow-preview-panel');
    visibleElement('borrow-transaction-page');

    try {
        let borrowalResult = await writeContract(lendingServiceABI, lendingServiceContractAddr, 'borrow', collateralAmount, tokenAddress, ethToWei(collateralAmount));

        unvisibleElement('borrow-transaction-page');
        activeElement('borrow-receipt-tab');
        visibleElement('borrow-receipt-panel');

        if (borrowalResult !== undefined && borrowalResult.status !== null && borrowalResult.status === 1n) {    
            visibleElement('borrow-receipt-success');
            setElementValue('borrow-success-receipt-receive-from-address', getSlicedAddress(lendingServiceContractAddr));
            setElementValue('borrow-success-receipt-receive-to-address', getSlicedAddress(connectedAccount));
    
            setElementValue('borrow-success-receipt-pay-from-address', getSlicedAddress(connectedAccount));
            setElementValue('borrow-success-receipt-pay-to-address', getSlicedAddress(lendingServiceContractAddr));
    
            setElementValue('borrow-success-receipt-receive-amount', borrowAmount);
            setElementValue('borrow-success-receipt-pay-amount', collateralAmount);
            console.log(borrowalResult);
            setElementValue('borrow-success-receipt-tx-hash', getSlicedAddress(borrowalResult.transactionHash));

            document.getElementById('borrow-success-receipt-explorer-btn').href = 'https://mumbai.polygonscan.com/tx/' + borrowalResult.transactionHash;

            document.getElementById('borrow-success-receipt-copy-btn').addEventListener('click', function() {
                copyToClipboard(borrowalResult.transactionHash, 'borrow-success-receipt-copy-icon');
            });
        }
        else {
            unvisibleElement('borrow-await-page');
            visibleElement('borrow-error-page');
        }
    } catch (error) {
        alertBox.style.display = 'block';
        alertBox.innerHTML = error.message;
        unvisibleElement('borrow-await-page');
        visibleElement('borrow-error-page');
    }
}

function checkRepayCalculationInput() {
    let tokenAmount = parseFloat(document.getElementById('repay-calculation-token-amount-input').value);
    let errorMessage = document.getElementById('repay-error-message');

    if (isNaN(tokenAmount)) {
        deactiveElement('repay-calculate-btn');
        visibleElement('repay-error-message');
        errorMessage.textContent = "The input value cannot be text or null !";
    } else {
        activeElement('repay-calculate-btn');
        unvisibleElement('repay-error-message');
    }
}

async function getRepaymentPreview(tokenAddress, payableBorrowedAmount)
{
    if(connectedAccount === null || connectedAccount === '')
        await connectWallet();

    disableElement('repay-calculation-tab');
    unvisibleElement('repay-calculation-panel');
    visibleElement('repay-await-page');

    let unlockableCollateral = await readContract
    (
        lendingServiceABI, 
        lendingServiceContractAddr, 
        'calculateRepaymentAmount', 
        connectedAccount, 
        tokenAddress, 
        ethToWei(payableBorrowedAmount)
    );

    if(unlockableCollateral !== null && unlockableCollateral > 0)
    {
        unvisibleElement('repay-await-page');
        activeElement('repay-preview-tab');
        visibleElement('repay-preview-panel');

        setElementValue('repay-preview-receive-amount', weiToEth(unlockableCollateral));
        setElementValue('repay-preview-pay-amount', payableBorrowedAmount);

        setElementValue('repay-preview-receive-from-address', getSlicedAddress(lendingServiceContractAddr));
        setElementValue('repay-preview-receive-to-address', getSlicedAddress(connectedAccount));

        setElementValue('repay-preview-pay-from-address', getSlicedAddress(connectedAccount));
        setElementValue('repay-preview-pay-to-address', getSlicedAddress(lendingServiceContractAddr));

        document.getElementById('repay-btn').addEventListener('click', function() {
            repay(lendingServiceContractAddr, payableBorrowedAmount, unlockableCollateral);
        });
    }
    else
    {
        unvisibleElement('repay-await-page');
        visibleElement('repay-error-page');
    }
}

async function repay(tokenAddress, borrowedAmount, collateralAmount) {
    disableElement('repay-preview-tab');
    unvisibleElement('repay-preview-panel');

    activeElement('repay-approval-tab');
    visibleElement('repay-approval-page');

    try{
        let approvalResult = await approve(lendingServiceContractAddr, borrowedAmount);

        if(approvalResult !== undefined && approvalResult.status !== null && approvalResult.status === 1n){
            disableElement('repay-approval-tab');
            unvisibleElement('repay-approval-page');
            visibleElement('repay-transaction-page');

            let repaymentResult = await writeContract(lendingServiceABI, lendingServiceContractAddr, 'repay', 0, connectedAccount, tokenAddress, ethToWei(borrowedAmount));

            unvisibleElement('repay-transaction-page');
            activeElement('repay-receipt-tab');
            visibleElement('repay-receipt-panel');

            if (repaymentResult !== undefined && repaymentResult.status !== null && repaymentResult.status === 1n) {    
                visibleElement('repay-receipt-success');
                setElementValue('repay-success-receipt-receive-from-address', getSlicedAddress(lendingServiceContractAddr));
                setElementValue('repay-success-receipt-receive-to-address', getSlicedAddress(connectedAccount));

                setElementValue('repay-success-receipt-pay-from-address', getSlicedAddress(connectedAccount));
                setElementValue('repay-success-receipt-pay-to-address', getSlicedAddress(lendingServiceContractAddr));

                setElementValue('repay-success-receipt-receive-amount', weiToEth(collateralAmount));
                setElementValue('repay-success-receipt-pay-amount', borrowedAmount);
                
                setElementValue('repay-success-receipt-tx-hash', getSlicedAddress(repaymentResult.transactionHash));

                document.getElementById('repay-success-receipt-explorer-btn').href = 'https://mumbai.polygonscan.com/tx/' + repaymentResult.transactionHash;

                document.getElementById('repay-success-receipt-copy-btn').addEventListener('click', function() {
                    copyToClipboard(repaymentResult.transactionHash, 'repay-success-receipt-copy-icon');
                });
            }
            else {
                unvisibleElement('repay-await-page');
                visibleElement('repay-error-page');
            }
        }
    }catch (error) {
        alertBox.style.display = 'block';
        alertBox.innerHTML = error.message;
        unvisibleElement('repay-await-page');
        visibleElement('repay-error-page');
    }
}


async function checkLendingLimitVoteNumberInput() {
    let lendingLimitiationVoteNumber = parseFloat(document.getElementById('lending-limit-vote-number-input').value);
    let errorMessage = document.getElementById('voting-error-message');

    if (isNaN(lendingLimitiationVoteNumber)) {
        deactiveElement('confirm-voting-btn');
        visibleElement('voting-error-message');
        errorMessage.textContent = "The input value cannot be text or null !";
    } else {
        deactiveElement('confirm-voting-btn');
        visibleElement('lendingLimitationTotalVoteFee');
        document.getElementById('lendingLimitationTotalVoteFee').innerHTML = 'Calculating !';

        let result = await readContract(lendingServiceABI, lendingServiceContractAddr, 'getVoteFee');
        let voteFeeTotalAmount = lendingLimitiationVoteNumber * weiToEth(result);

        document.getElementById('lendingLimitationTotalVoteFee').innerHTML = voteFeeTotalAmount + ' BGBT Needed !';
        activeElement('confirm-voting-btn');
        unvisibleElement('voting-error-message');

        document.getElementById('confirm-voting-btn').addEventListener('click', function() {
            submitVote(lendingLimitiationVoteNumber, voteFeeTotalAmount);
        });
    }
}

async function checkRepaymentPeriodVoteNumberInput() {
    let repaymentPeriodVoteNumber = parseFloat(document.getElementById('repayment-period-vote-number-input').value);
    let errorMessage = document.getElementById('voting-error-message');

    if (isNaN(repaymentPeriodVoteNumber)) {
        deactiveElement('confirm-voting-btn');
        visibleElement('voting-error-message');
        errorMessage.textContent = "The input value cannot be text or null !";
    } else {
        deactiveElement('confirm-voting-btn');
        visibleElement('repaymentPeriodTotalVoteFee');
        document.getElementById('repaymentPeriodTotalVoteFee').innerHTML = 'Calculating !';

        let result = await readContract(lendingServiceABI, lendingServiceContractAddr, 'getVoteFee');
        let voteFeeTotalAmount = repaymentPeriodVoteNumber * weiToEth(result);

        document.getElementById('repaymentPeriodTotalVoteFee').innerHTML = voteFeeTotalAmount + ' BGBT Needed !';
        activeElement('confirm-voting-btn');
        unvisibleElement('voting-error-message');

        document.getElementById('confirm-voting-btn').addEventListener('click', function() {
            submitVote(repaymentPeriodVoteNumber, voteFeeTotalAmount);
        });
    }
}

async function submitVote(voteNumber, voteFee) {
    unvisibleElement('voting-form-panel');
    visibleElement('voting-transaction-page');

    let result = '';

    try{
        await approve(lendingServiceContractAddr, voteFee);

        if(document.getElementById('lendingLimitationTab').checked == true){
            if(document.getElementById('increaseLendingLimitation').checked == true)
            {
                result = await writeContract(votingServiceABI, votingServiceContractAddr, 'lendingLimitationVoting', 0, true, voteNumber);
            }
            else
            {
                result = await writeContract(votingServiceABI, votingServiceContractAddr, 'lendingLimitationVoting', 0, false, voteNumber);
            }
        }
        else{
            if(document.getElementById('increaseRepaymentPeriod').checked == true)
            {
                result = await writeContract(votingServiceABI, votingServiceContractAddr, 'repaymentPeriodVoting', 0, true, voteNumber);
            }
            else
            {
                result = await writeContract(votingServiceABI, votingServiceContractAddr, 'repaymentPeriodVoting', 0, false, voteNumber);
            }
        }
        
        unvisibleElement('voting-transaction-page');

        if(result !== undefined && result.status !== null && result.status === 1n)
        {
            visibleElement('voting-success-page');            
            setElementValue('voting-success-page-tx-hash', getSlicedAddress(result.transactionHash));            
        }
        else
        {
            visibleElement('voting-error-page');
        }
    }
    catch (error) {
        alertBox.style.display = 'block';
        alertBox.innerHTML = error.message;
        unvisibleElement('voting-await-page');
        visibleElement('voting-error-page');
    }
}


async function readContract(abi, contractAddress, functionName, ...args) {
    try {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(abi, contractAddress);

        return await contract.methods[functionName](...args).call({ from: connectedAccount });
    } catch (error) {
        alertBox.style.display = 'block';
        alertBox.innerHTML = error.message;
        throw error;
    }
}

async function writeContract(abi, contractAddress, functionName, etherAmount, ...args) {
    try {
        const web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(abi, contractAddress);

        const response = await contract.methods[functionName](...args).send({
            from: connectedAccount,
            value: ethToWei(etherAmount),
        });

        return response;

    } catch (error) {
        return error;
    }
}

async function approve(spenderAddress, approvalAmount)
{
    return await writeContract(bigBangTokenABI, bigBangTokenContractAddr, 'approve', 0, spenderAddress, ethToWei(approvalAmount));
}

function ethToWei(eth) {
    return eth * (10 ** 18);
}

function weiToEth(wei) {
    return Number(wei) / (10 ** 18);
}

function copyToClipboard(value, copyButtonId) {
    let pos = false;
    let copyText = value;
    
    navigator.clipboard.writeText(copyText);

    if(document.getElementById(copyButtonId).classList.contains('fa-file-alt')){
        pos = true;
        document.getElementById(copyButtonId).classList.remove('fa-file-alt');
    }

    document.getElementById(copyButtonId).classList.add('fa-check');

    setTimeout(function () {
        document.getElementById(copyButtonId).classList.remove('fa-check');

        if(pos)
            document.getElementById(copyButtonId).classList.add('fa-file-alt');

    }, 1000);
}