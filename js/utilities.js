function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber
}

function getInputTextValueById(id) {
    const inputValue = document.getElementById(id).innerText;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber
}

function showSectionById(id) {
    document.getElementById('payment-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.remove('hidden')
}

function colorChange1() {
    document.getElementById('payment-section').classList.add('bg-lime-400');
    document.getElementById('transaction-section').classList.remove('bg-lime-400')

}
// popup call 
function showPopup() {
    document.getElementById('popup').classList.remove('hidden');
}


document.getElementById('close-popup').addEventListener('click', function () {
    document.getElementById('popup').classList.add('hidden');
});



function addTransactionToHistory(donationValue, cause) {
    const now = new Date();

    //div banailam
    const transactionDiv = document.createElement('div');
    transactionDiv.className = 'transaction-entry  flex-col border rounded-sm pb-4 mb-4 ';

    // donation text 
    const donationLog = document.createElement('p');
    donationLog.className = 'text-lg font-semibold ';
    donationLog.textContent = `${donationValue} Taka is Donated for ${cause}`;

    // time
    const dateLog = document.createElement('p');
    dateLog.className = 'text-gray-600';
    dateLog.textContent = `Date: ${now}`;

    // Append child is like creating wonders
    transactionDiv.appendChild(donationLog);
    transactionDiv.appendChild(dateLog);

    
    document.getElementById("transaction-section").appendChild(transactionDiv);
}