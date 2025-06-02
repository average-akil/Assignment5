document.getElementById('btn-donation').addEventListener('click', function (event) {
    event.preventDefault();
    const donationValue = getInputFieldValueById('input-donation');
    console.log('got the value', donationValue)
})