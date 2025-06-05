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